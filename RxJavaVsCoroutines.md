# 告别 RxJava，拥抱协程：Android 异步编程的全面演进

## 引言：从“万物皆流”到“大道至简”

在 Android 开发的历程中，处理异步任务一直是个核心痛点。从早期的 `AsyncTask`、`Handler`，到后来统治时代的 `RxJava`，我们的武器库不断升级。然而，近年来 Google 官方确立了 Kotlin First 的立场，并强力推行 **Kotlin Coroutines（协程）** 与 **Flow**。

今天，RxJava 是否还能保住它的王座？协程凭什么能够取而代之？

简而言之：**在 95% 以上的日常业务场景中，协程不仅能完全替代 RxJava，而且做得更好、代码更少、心智负担更低。** 这不是简单的 API 替换，而是一场编程哲学的演进。

---

## 一、 核心对决：设计哲学的碰撞

RxJava 和协程都能出色地完成异步任务，但它们的底层世界观截然不同：

| 维度 | RxJava (响应式流) | Kotlin Coroutines (挂起与结构化并发) |
| :--- | :--- | :--- |
| **世界观** | **传送带**：数据像流水一样经过一个个操作符加工站。 | **梯子**：异步代码看起来像同步代码，一行行顺序执行。 |
| **学习曲线** | **极其陡峭**。必须掌握上百个操作符（FlatMap, SwitchMap 等）。 | **平缓**。符合人类直觉的命令式编程。 |
| **资源消耗** | 相对较重。每个操作符都会创建新的对象，链条越长开销越大。 | **极轻量**。底层基于状态机（State Machine），可轻松开启十万级协程。 |
| **生命周期** | 需要手动管理 `Disposable`，极易导致内存泄漏。 | **结构化并发**。绑定 `Scope`，组件销毁时自动取消所有子任务。 |

---

## 二、 线程模型的降维打击：从“切换”到“调度”

在 RxJava 中，我们习惯于使用 `subscribeOn` 和 `observeOn` 在线程间跳跃。而在协程中，这个概念被 **调度器（Dispatchers）** 和 **挂起函数（suspend）** 降维打击了。

### 1. 串行与线程切换

**RxJava:**
```java
api.fetchData()
   .subscribeOn(Schedulers.io())
   .observeOn(AndroidSchedulers.mainThread())
   .subscribe(data -> updateUI(data));
```

**Coroutines:**
利用 `withContext`，代码恢复了从上到下的阅读直觉，且自动切回主线程。
```kotlin
viewLifecycleOwner.lifecycleScope.launch {
    // 挂起当前协程，去 IO 线程干活
    val data = withContext(Dispatchers.IO) { api.fetchData() }
    // 活干完了，自动切回 Main 线程继续执行
    updateUI(data) 
}
```

### 2. 并行任务处理

假设需要同时请求“用户信息”和“未读消息”，全部成功后再刷新 UI。

**RxJava:** 需要祭出 `zip` 操作符。

**Coroutines:** 仅仅是两个 `async` 的组合。
```kotlin
lifecycleScope.launch {
    try {
        // 并行发起请求
        val userTask = async(Dispatchers.IO) { api.getUser() }
        val msgTask = async(Dispatchers.IO) { api.getUnreadCount() }
        
        // 等待两者都返回（总耗时等于最慢的那个接口）
        renderUI(userTask.await(), msgTask.await())
    } catch (e: Exception) {
        handleError(e)
    }
}
```

---

## 三、 硬核实战：复杂流处理场景的全面接管

过去我们认为，处理复杂的事件流是 RxJava 的绝对护城河。但随着 **Kotlin Flow** 的成熟，这条护城河已经被填平。让我们看看几个经典的高难度场景：

### 场景一：搜索框防抖与请求取消 (Debounce + SwitchMap)

**需求：** 用户持续输入时防抖，且当新输入产生时，**必须取消**上一次未完成的网络请求，防止数据倒灌。

* **RxJava 的法宝是 `switchMap`：**
    ```java
    textChanges
        .debounce(300, TimeUnit.MILLISECONDS)
        .switchMap(query -> api.search(query).subscribeOn(Schedulers.io()))
        .observeOn(AndroidSchedulers.mainThread())
        .subscribe(this::updateUI);
    ```

* **Flow 的优雅替代 `flatMapLatest`：**
    ```kotlin
    textChangeFlow
        .debounce(300L)
        .flatMapLatest { query -> api.searchFlow(query) } // 新值到来时，自动 cancel 之前的请求
        .flowOn(Dispatchers.IO)
        .catch { e -> showError(e) }
        .collect { updateUI(it) }
    ```
两者 API 极其相似，但 Flow 的 `catch` 异常处理机制比 RxJava 繁杂的 `onError` 更具可读性。

### 场景二：失败重试机制（带延迟）

**需求：** 网络请求失败后重试 3 次，每次重试间隔 1 秒。

* **RxJava（地狱级可读性）：**
    使用 `retryWhen` 需要嵌套各种 `zipWith` 和 `timer`，非常烧脑。
    ```java
    api.getData()
        .retryWhen(errors -> errors.zipWith(Observable.range(1, 3), (n, i) -> i)
              .flatMap(retryCount -> Observable.timer(1, TimeUnit.SECONDS)))
        .subscribe(...);
    ```

* **Coroutines / Flow（回归本质）：**
    因为协程可以无缝使用普通的 `if/else` 和 `delay`（不阻塞线程），重试逻辑变得像伪代码一样简单：
    ```kotlin
    api.getDataFlow()
        .retry(retries = 3) { cause ->
            if (cause is IOException) {
                delay(1000L) // 挂起 1 秒后重试
                true 
            } else {
                false // 其他异常不重试，直接抛出
            }
        }
        .collect { updateUI(it) }
    ```

### 场景三：背压控制 (Backpressure)

**需求：** 上游生产数据极快（如传感器），下游处理极慢，需要丢弃来不及处理的数据。

在 RxJava 中，你需要把 `Observable` 替换成重量级的 `Flowable`。而在 Flow 中，一切都是原生支持的，只需加上 `conflate()` 操作符：
```kotlin
sensorDataFlow
    .conflate() // 下游处理不过来时，丢弃中间值，只拿最新值
    .collect { data -> process(data) }
```

---

## 四、 总结：RxJava 真的过时了吗？

回答这个问题，我们要回归业务本质。技术的更迭是为了**释放生产力**。

**我们应该全面拥抱协程，因为：**
1.  **心智负担极低**：可以用同步的思维写异步代码。
2.  **安全性高**：`ViewModelScope` 和 `LifecycleScope` 从根本上消灭了异步回调导致的内存泄漏和 NFE（空指针异常）。
3.  **官方生态**：Jetpack 组件（Room, Retrofit, DataStore 等）已经全面原生支持 Coroutines 和 Flow。

**RxJava 退守的那 5% 场景：**
1.  极度复杂的组合流变换（超过 Flow 目前操作符覆盖范围的极端场景）。
2.  跨平台 SDK 开发（纯 Java 环境，无法使用 Kotlin）。
3.  历史包袱极重的老旧核心业务模块（建议：保持现状，新业务用协程，交界处用 `kotlinx-coroutines-rx2` 库做双向转换桥接）。

**终极建议：**
对于所有 Android 团队而言，**停止在新业务中引入 RxJava**。拥抱 Coroutines + Flow，去享受现代编程语言带来的红利吧！