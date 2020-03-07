# 技术债之阅读源码 Android Handler

我们都知道Handler的内部构造由Looper MessageQueue构成, Handler把消息丢入MessageQueue, Looper 负责不停的从MessageQueue中读取消息交还给Handler处理.
这是大概99.9%的安卓开发人员都知道的事情.
那么接下来看看常年业务开发中的你我可能不知道的事情.

## 什么是Handler

Handler的官方注释:

一个Handler允许您发送和处理与线程MessageQueue的相关Message和Runnable对象。 
每个Handler实例与单个线程和线程的消息队列互相关联。 
当你创建一个新的Handler，它被绑定到创建它的线程或消息队列 - 从这个点开始, 它将提供message和runnable传递到消息队列, 并将会执行队列中出列的message。
Handler有两种主要的用途：

（1）调度执行未来某个点的消息;
（2）让不同于你当前线程的操作排队。

调度消息用post ， postAtTime(Runnable, long) ， postDelayed ， sendEmptyMessage ， sendMessage ， sendMessageAtTime和sendMessageDelayed等方法完成。 

从官方注释中可以知道Handler主要负责线程间的通信, 可以发消息, 执行任务.

## Handler的构造函数

```java
//Handler.java中

public Handler() {
        //第一个参数callback, 第二个参数 async
        this(null, false);
    }
```
方法的官方注释如下: 
如果线程没有一个looper, 那么这个 handler 不能接收消息然后会抛出一个exception

等等, what? 创建 handler 的线程竟然还需要自己准备一个looper, 否则就抛错?

再来看看其他的构造函数

```java
    /**
     * Constructor associates this handler with the {@link Looper} for the
     * current thread and takes a callback interface in which you can handle
     * messages.
     *
     * If this thread does not have a looper, this handler won't be able to receive messages
     * so an exception is thrown.
     *
     * @param callback The callback interface in which to handle messages, or null.
     */
    public Handler(@Nullable Callback callback) {
        this(callback, false);
    }


   /**
    * Use the provided {@link Looper} instead of the default one.
    *
    * @param looper The looper, must not be null.
    */
    public Handler(@NonNull Looper looper) {
        this(looper, null, false);
    }

    /**
     * Use the {@link Looper} for the current thread
     * and set whether the handler should be asynchronous.
     *
     * Handlers are synchronous by default unless this constructor is used to make
     * one that is strictly asynchronous.
     *
     * Asynchronous messages represent interrupts or events that do not require global ordering
     * with respect to synchronous messages.  Asynchronous messages are not subject to
     * the synchronization barriers introduced by {@link MessageQueue#enqueueSyncBarrier(long)}.
     *
     * @param async If true, the handler calls {@link Message#setAsynchronous(boolean)} for
     * each {@link Message} that is sent to it or {@link Runnable} that is posted to it.
     *
     * @hide
     */
    @UnsupportedAppUsage
    public Handler(boolean async) {
        this(null, async);
    }

    /**
     * Use the {@link Looper} for the current thread with the specified callback interface
     * and set whether the handler should be asynchronous.
     *
     * Handlers are synchronous by default unless this constructor is used to make
     * one that is strictly asynchronous.
     *
     * Asynchronous messages represent interrupts or events that do not require global ordering
     * with respect to synchronous messages.  Asynchronous messages are not subject to
     * the synchronization barriers introduced by {@link MessageQueue#enqueueSyncBarrier(long)}.
     *
     * @param callback The callback interface in which to handle messages, or null.
     * @param async If true, the handler calls {@link Message#setAsynchronous(boolean)} for
     * each {@link Message} that is sent to it or {@link Runnable} that is posted to it.
     *
     * @hide
     */
    public Handler(@Nullable Callback callback, boolean async) {
        if (FIND_POTENTIAL_LEAKS) {
            final Class<? extends Handler> klass = getClass();
            if ((klass.isAnonymousClass() || klass.isMemberClass() || klass.isLocalClass()) &&
                    (klass.getModifiers() & Modifier.STATIC) == 0) {
                Log.w(TAG, "The following Handler class should be static or leaks might occur: " +
                    klass.getCanonicalName());
            }
        }

        mLooper = Looper.myLooper();
        if (mLooper == null) {
            throw new RuntimeException(
                "Can't create handler inside thread " + Thread.currentThread()
                        + " that has not called Looper.prepare()");
        }
        mQueue = mLooper.mQueue;
        mCallback = callback;
        mAsynchronous = async;
    }

    /**
     * Use the provided {@link Looper} instead of the default one and take a callback
     * interface in which to handle messages.  Also set whether the handler
     * should be asynchronous.
     *
     * Handlers are synchronous by default unless this constructor is used to make
     * one that is strictly asynchronous.
     *
     * Asynchronous messages represent interrupts or events that do not require global ordering
     * with respect to synchronous messages.  Asynchronous messages are not subject to
     * the synchronization barriers introduced by conditions such as display vsync.
     *
     * @param looper The looper, must not be null.
     * @param callback The callback interface in which to handle messages, or null.
     * @param async If true, the handler calls {@link Message#setAsynchronous(boolean)} for
     * each {@link Message} that is sent to it or {@link Runnable} that is posted to it.
     *
     * @hide
     */
    @UnsupportedAppUsage
    public Handler(@NonNull Looper looper, @Nullable Callback callback, boolean async) {
        mLooper = looper;
        mQueue = looper.mQueue;
        mCallback = callback;
        mAsynchronous = async;
    }
```

相信英文好的朋友已经知道了, Handler 构造函数里面除非你传Looper进来, 否则就用默认的Looper, 来着重看下下面的构造方法

```java
public Handler(@Nullable Callback callback, boolean async) {
        //这里有个查找潜在的内存泄漏逻辑, 判断定义的Handler是不是匿名类,成员类,本地类
        //并且非静态的, logcat就会输出 warning 
        if (FIND_POTENTIAL_LEAKS) {
            final Class<? extends Handler> klass = getClass();
            if ((klass.isAnonymousClass() || klass.isMemberClass() || klass.isLocalClass()) &&
                    (klass.getModifiers() & Modifier.STATIC) == 0) {
                Log.w(TAG, "The following Handler class should be static or leaks might occur: " +
                    klass.getCanonicalName());
            }
        }
        //这句代码是关键, 竟然还是个静态方法, 然后还有可能为null? wtf
        //抛错的信息是: 不能在该线程里面创建Handler, 因为没有调用 Looper.prepare();
        mLooper = Looper.myLooper();
        if (mLooper == null) {
            throw new RuntimeException(
                "Can't create handler inside thread " + Thread.currentThread()
                        + " that has not called Looper.prepare()");
        }
        mQueue = mLooper.mQueue;
        mCallback = callback;
        mAsynchronous = async;
    }
```

## 深入了解Looper

`Looper.myLooper()`搞了点啥, 为什么还有可能是null

```java
    //Looper.java中

    // sThreadLocal.get() will return null unless you've called prepare().
    @UnsupportedAppUsage
    static final ThreadLocal<Looper> sThreadLocal = new ThreadLocal<Looper>();

    /**
     * Return the Looper object associated with the current thread.  Returns
     * null if the calling thread is not associated with a Looper.
     */
    public static @Nullable Looper myLooper() {
        return sThreadLocal.get();
    }
```
看到这行代码你是不是心碎了, 返回的是线程中已经绑定的Looper对象, 如果没有绑定过Looper, 对不起,就返回一个null
这里讲下 `ThreadLocal` 是什么?
ThreadLocal 是线程中用于存储变量的, 作用是为每个线程提供一个独立的变量副本, 解决变量并发访问的冲突

也就是说每个线程中的Looper不会互相干扰发生冲突


那有朋友会问: 我去哪为线程绑定一个Looper啊?

聪明的你可能已经发现, 上诉RuntimeException中已经提示了解决方案:

```java
Looper.prepare();
```

我们再来看下 Looper.prepare()里面

```java 
     //把当前线程作为一个looper初始化, 在真正开始循环前, 给你个创建handlers并且引用这个looper的机会,
     //确保在该方法之后调用 loop() 方法, 可以调用 quit() 来结束这个 Looper
     /** Initialize the current thread as a looper.
      * This gives you a chance to create handlers that then reference
      * this looper, before actually starting the loop. Be sure to call
      * {@link #loop()} after calling this method, and end it by calling
      * {@link #quit()}.
      */
    public static void prepare() {
        prepare(true);
    }
   
    //参数quitAllowed代表Looper是否可以退出
    private static void prepare(boolean quitAllowed) {
        if (sThreadLocal.get() != null) {
            throw new RuntimeException("Only one Looper may be created per thread");
        }
        // 把新建的Looper放到线程的 ThreadLocal 中保存
        sThreadLocal.set(new Looper(quitAllowed));
    }
```

这样一来我们就知道了, 原来线程中 Looper 应该用这样的方法创建.

我们再跟踪下去, 看看`new Looper(quitAllowed)` 中干了点什么

```java
    /**
     * Return the {@link MessageQueue} object associated with the current
     * thread.  This must be called from a thread running a Looper, or a
     * NullPointerException will be thrown.
     */
    public static @NonNull MessageQueue myQueue() {
        return myLooper().mQueue;
    }

    private Looper(boolean quitAllowed) {
        //Looper中创建了一个MessageQueue,传递了是否允许退出的参数
        mQueue = new MessageQueue(quitAllowed);
        //保存了当前创建Looper线程的引用
        mThread = Thread.currentThread();
    }
```

回头再看看 `Looper.loop()` 方法到底干嘛了, 非得在`Looper.prepare()`后执行.


```java
    
    //Looper.java 中
    //好家伙, 终于运行 MessageQueue 了, 前面一大串的准备工作
    //注释中写了必须确保调用 `quit()` 方法结束循环.好的, 我们先记一下回头来看.
    /**
     * Run the message queue in this thread. Be sure to call
     * {@link #quit()} to end the loop.
     */
    public static void loop() {
        //还记得这个方法是获取 ThreadLocal中的Looper的吗?
        final Looper me = myLooper();
        //为null 就提示去Looper.prepare()一下
        if (me == null) {
            throw new RuntimeException("No Looper; Looper.prepare() wasn't called on this thread.");
        }
        //拿到了Looper中的MessageQueue
        final MessageQueue queue = me.mQueue;

        // 确保此线程的身份是本地进程的身份，并跟踪该身份令牌实际上是什么
        // 每个字都懂, 连在一起就不懂了, 没关系, 我们先记一笔
        // Make sure the identity of this thread is that of the local process,
        // and keep track of what that identity token actually is.
        Binder.clearCallingIdentity();
        final long ident = Binder.clearCallingIdentity();

        //允许使用系统属性覆盖阈值。例如 adb shell'setprop log.looper.1000.main.slow 1 && stop && start'
        // Allow overriding a threshold with a system prop. e.g.
        // adb shell 'setprop log.looper.1000.main.slow 1 && stop && start'
        final int thresholdOverride =
                SystemProperties.getInt("log.looper."
                        + Process.myUid() + "."
                        + Thread.currentThread().getName()
                        + ".slow", 0);
        
        boolean slowDeliveryDetected = false;
        //死循环开始
        for (;;) {
            //这里来了, MessageQueue 可能会被阻塞, 从MessageQueue中取出一条消息
            Message msg = queue.next(); // might block
            if (msg == null) {
                //没有新的message了, MessageQueue就会罢工啊, 您老注释写的真幽默
                // No message indicates that the message queue is quitting.
                return;
            }
            //这里拿到了Looper中的Printer, 并且注释提醒如果 UI事件设置了logger, 那么必须是在一个本地变量中
            // This must be in a local variable, in case a UI event sets the logger
            final Printer logging = me.mLogging;
            if (logging != null) {
                logging.println(">>>>> Dispatching to " + msg.target + " " +
                        msg.callback + ": " + msg.what);
            }
            // 在处理操作时, 确保观察者不会改变
            // Make sure the observer won't change while processing a transaction.
            final Observer observer = sObserver;

            final long traceTag = me.mTraceTag;
            //这里是读取Looper里面设置的属性啦, 如果转发消息超过这个 slowDispatchThresholdMs 就会输出
            //warning log, 同理发送消息超过 slowDeliveryThresholdMs 也会输出warining log
            long slowDispatchThresholdMs = me.mSlowDispatchThresholdMs;
            long slowDeliveryThresholdMs = me.mSlowDeliveryThresholdMs;
            if (thresholdOverride > 0) {
                slowDispatchThresholdMs = thresholdOverride;
                slowDeliveryThresholdMs = thresholdOverride;
            }
            final boolean logSlowDelivery = (slowDeliveryThresholdMs > 0) && (msg.when > 0);
            final boolean logSlowDispatch = (slowDispatchThresholdMs > 0);

            final boolean needStartTime = logSlowDelivery || logSlowDispatch;
            final boolean needEndTime = logSlowDispatch;

            if (traceTag != 0 && Trace.isTagEnabled(traceTag)) {
                //开始Trace记录, 这块代码跟进去使用的是native nativeTraceBegin
                Trace.traceBegin(traceTag, msg.target.getTraceName(msg));
            }
            final long dispatchStart = needStartTime ? SystemClock.uptimeMillis() : 0;
            final long dispatchEnd;
            Object token = null;
            //调用分发开始
            if (observer != null) {
                token = observer.messageDispatchStarting();
            }
            //ThreadLocalWorkSource 用来跟踪谁触发了当前线程上执行的Work,
            //ThreadLocalWorkSource 会在system server内部中自动更新,
            //这个system server 负责incoming/outgoing binder调用和消息发送到 handler 线程
            //这行代码为线程设置了一个worksource的uid, 用以 system server 使用
            long origWorkSource = ThreadLocalWorkSource.setUid(msg.workSourceUid);
            try {
                //这里msg.target就是Handler对象的引用, 也就是消息回来了, 交还给handler去处理
                //如果msg定义了callback, 交由msg定义的callback执行,
                //如果没有,但Handler定义了callback就交由handler的callback执行, 
                //如果没有就用handler 的 handleMessage()方法执行
                msg.target.dispatchMessage(msg);
                if (observer != null) {
                    //通知观察者消息完成了分发和处理
                    observer.messageDispatched(token, msg);
                }
                dispatchEnd = needEndTime ? SystemClock.uptimeMillis() : 0;
            } catch (Exception exception) {
                if (observer != null) {
                    observer.dispatchingThrewException(token, msg, exception);
                }
                throw exception;
            } finally {
                //ThreadLocalWorkSource还原状态
                ThreadLocalWorkSource.restore(origWorkSource);
                if (traceTag != 0) {
                    //结束Trace
                    Trace.traceEnd(traceTag);
                }
            }
            //计算如果超过阈值, 就打印log
            if (logSlowDelivery) {
                if (slowDeliveryDetected) {
                    if ((dispatchStart - msg.when) <= 10) {
                        Slog.w(TAG, "Drained");
                        slowDeliveryDetected = false;
                    }
                } else {
                    if (showSlowLog(slowDeliveryThresholdMs, msg.when, dispatchStart, "delivery",
                            msg)) {
                        // Once we write a slow delivery log, suppress until the queue drains.
                        slowDeliveryDetected = true;
                    }
                }
            }
            if (logSlowDispatch) {
                showSlowLog(slowDispatchThresholdMs, dispatchStart, dispatchEnd, "dispatch", msg);
            }

            if (logging != null) {
                logging.println("<<<<< Finished to " + msg.target + " " + msg.callback);
            }

            // 这里确保分发过程中线程的标识没有被破坏
            // Make sure that during the course of dispatching the
            // identity of the thread wasn't corrupted.
            final long newIdent = Binder.clearCallingIdentity();
            if (ident != newIdent) {
                Log.wtf(TAG, "Thread identity changed from 0x"
                        + Long.toHexString(ident) + " to 0x"
                        + Long.toHexString(newIdent) + " while dispatching to "
                        + msg.target.getClass().getName() + " "
                        + msg.callback + " what=" + msg.what);
            }
            //回收我们的msg
            msg.recycleUnchecked();
        }
    }
```

这里其他都比较好理解, 唯独 `Binder.clearCallingIdentity()` 到底干嘛了? 来看下方法的源码

```
    /**
     * Reset the identity of the incoming IPC on the current thread.  This can
     * be useful if, while handling an incoming call, you will be calling
     * on interfaces of other objects that may be local to your process and
     * need to do permission checks on the calls coming into them (so they
     * will check the permission of your own local process, and not whatever
     * process originally called you).
     *
     * @return Returns an opaque token that can be used to restore the
     * original calling identity by passing it to
     * {@link #restoreCallingIdentity(long)}.
     *
     * @see #getCallingPid()
     * @see #getCallingUid()
     * @see #restoreCallingIdentity(long)
     */
    @CriticalNative
    public static final native long clearCallingIdentity();
```
注释大意:
重置当前线程上传入IPC的身份。
比如, 当在处理调用时, 你会调用其他对象的接口, 这些接口可能是你进程本地调用, 需要对进入的调用进行权限检查
（因此将检查你自己的本地进程的许可，而不是任何进程本身去调用你）。

通过注释我们可以知道, 其实Binder本身用于跨进程调用, 
这里的作用是重置线程对Binder传入的IPC(Inter Process Communication)的身份

这里不再深入Binder的原理, 把视线放回 "为什么MessageQueue"可能会被阻塞?

先来看下MessageQueue的`enqueueMessage()`消息入队方法怎么实现的
```java
    //MessageQueue.java
    boolean enqueueMessage(Message msg, long when) {
        if (msg.target == null) {
            throw new IllegalArgumentException("Message must have a target.");
        }
        if (msg.isInUse()) {
            throw new IllegalStateException(msg + " This message is already in use.");
        }

        synchronized (this) {
            //这个标志位表示已经退出循环了, 再发消息也不会处理
            if (mQuitting) {
                IllegalStateException e = new IllegalStateException(
                        msg.target + " sending message to a Handler on a dead thread");
                Log.w(TAG, e.getMessage(), e);
                msg.recycle();
                return false;
            }

            msg.markInUse();
            msg.when = when;
            Message p = mMessages;
            boolean needWake;
            //保存的mMessages如果是空或者新息属于立马执行或者mMessages要在未来执行，
            //重新定义链表头，并且把needWake 设置为阻塞值相同
            if (p == null || when == 0 || when < p.when) {
                // New head, wake up the event queue if blocked.
                msg.next = p;
                mMessages = msg;
                needWake = mBlocked;
            } else {
                // 插入队列中间。 通常除非队列的开头有barrier(障碍)并且消息是队列中最早的异步消息，
                //否则不必唤醒事件队列。
                // Inserted within the middle of the queue.  Usually we don't have to wake
                // up the event queue unless there is a barrier at the head of the queue
                // and the message is the earliest asynchronous message in the queue.
                needWake = mBlocked && p.target == null && msg.isAsynchronous();
                Message prev;
                //两个指针查找插入两条合适的消息
                //a.when<msg.when(我是插入的新的这条)<b.when
                for (;;) {
                    prev = p;
                    p = p.next;
                    if (p == null || when < p.when) {
                        break;
                    }
                    if (needWake && p.isAsynchronous()) {
                        needWake = false;
                    }
                }
                msg.next = p; // invariant: p == prev.next
                prev.next = msg;
            }

            // We can assume mPtr != 0 because mQuitting is false.
            if (needWake) {
                //nativeWake()方法, 这里mPtr变量, 当mPtr=0表示循环退出或者废弃
                nativeWake(mPtr);
            }
        }
        return true;
    }
```

> 注： 以下摘自 《深入理解Android:卷2》 一书

*android_os_MessageQueue.cpp*

```c++
static voidandroid_os_MessageQueue_nativeWake(JNIEnv* env, jobject obj,
                                                      jint ptr)
{
    NativeMessageQueue*nativeMessageQueue =  //取出NativeMessageQueue对象
                       reinterpret_cast<NativeMessageQueue*>(ptr);
    returnnativeMessageQueue->wake(); //调用它的wake函数
}
void NativeMessageQueue::wake() {
   mLooper->wake();//层层调用，现在转到mLooper的wake函数
}
```

Native Looper的wake函数代码如下：

*Looper.cpp*

```c++
void Looper::wake() {
    ssize_tnWrite;
       do {
           //向管道的写端写入一个字符
       nWrite = write(mWakeWritePipeFd, "W", 1);
    } while(nWrite == -1 && errno == EINTR);
 
    if(nWrite != 1) {
        if(errno != EAGAIN) {
           LOGW("Could not write wake signal, errno=%d", errno);
        }
    }
}
```

wake函数则更为简单，仅仅向管道的写端写入一个字符”W”，这样管道的读端就会因为有数据可读而从等待状态中醒来。

看到这里，老铁们是不是有点反应过来了，原来MessageQueue阻塞以后是这样唤醒的, 那再研究下到底什么时候开始阻塞的

来看下MessageQueue的`next()`方法是怎么实现的

```java
    //MessageQueue.java
    @UnsupportedAppUsage
    Message next() {
        // Return here if the message loop has already quit and been disposed.
        // This can happen if the application tries to restart a looper after quit
        // which is not supported.
        //mPtr这个变量是被native方法使用的, 当为0时, 表示循环已经退出或者废弃了.
        //这个判断是为了防止应用去重启一个已经退出的looper
        final long ptr = mPtr;
        if (ptr == 0) {
            return null;
        }
        //这里定义了两个有趣的变量, 一个叫 pendingIdleHandlerCount, 一个是nextPollTimeoutMillis
        //第一个顾名思义等待的IdleHandler 数量, 第二个是下次poll的超时时间
        int pendingIdleHandlerCount = -1; // -1 only during first iteration
        int nextPollTimeoutMillis = 0;
        //这里死循环开始
        for (;;) {
            if (nextPollTimeoutMillis != 0) {
                //刷出所有当前线程的等待中的指令给内核驱动, 好处是啥呢?
                //这对于在执行可能会长时间阻塞的操作之前调用很有用，
                //以确保释放了所有待处理的对象引用，
                //以防止该过程将对象保留的时间超过所需的时间。
                Binder.flushPendingCommands();
            }
            //native 方法取一个, 传入的是两个参数. 状态码ptr 和 下次poll超时时间
            nativePollOnce(ptr, nextPollTimeoutMillis);


            synchronized (this) {
                //同步尝试获取下一条message
                // Try to retrieve the next message.  Return if found.
                final long now = SystemClock.uptimeMillis();
                Message prevMsg = null;
                Message msg = mMessages;
                if (msg != null && msg.target == null) {
                    //这个情况叫被障碍物挡住了...在队列中查找下一个异步message
                    // Stalled by a barrier.  Find the next asynchronous message in the queue.
                    do {
                        prevMsg = msg;
                        msg = msg.next;
                    } while (msg != null && !msg.isAsynchronous());
                }
                if (msg != null) {
                    if (now < msg.when) {
                        // 如果发现下一条消息没准备好, 就设置一个timeout 去唤醒
                        // Next message is not ready.  Set a timeout to wake up when it is ready.
                        nextPollTimeoutMillis = (int) Math.min(msg.when - now, Integer.MAX_VALUE);
                    } else {
                        // Got a message.
                        //否则就拿到消息, 阻塞flag设置为false
                        mBlocked = false;
                        if (prevMsg != null) {
                            //这里next next 的是以链表形式存message
                            prevMsg.next = msg.next;
                        } else {
                            mMessages = msg.next;
                        }
                        msg.next = null;
                        if (DEBUG) Log.v(TAG, "Returning message: " + msg);
                        //这里设置了消息使用中的标志位
                        msg.markInUse();
                        return msg;
                    }
                } else {
                    // No more messages.
                    //如果没有消息了这个有趣的参数就设置为 -1了
                    nextPollTimeoutMillis = -1;
                }
                
                //存在退出的标志位就结束队列
                // Process the quit message now that all pending messages have been handled.
                if (mQuitting) {
                    //这里废弃底层消息队列, 并且只能被looper线程或finalizer调用
                    dispose();
                    return null;
                }
                //如果第一次idle(闲置了), 那么获取idler的数量,
                //Idle handles 只有在队列为空或者第一条消息(可能是barrier)要在将来处理时才会运行
                // If first time idle, then get the number of idlers to run.
                // Idle handles only run if the queue is empty or if the first message
                // in the queue (possibly a barrier) is due to be handled in the future.
                if (pendingIdleHandlerCount < 0
                        && (mMessages == null || now < mMessages.when)) {
                    pendingIdleHandlerCount = mIdleHandlers.size();
                }
                if (pendingIdleHandlerCount <= 0) {
                    //如果没有idle handler要处理, 那就循环继续等待, 把mBlocked 阻塞设置为true
                    //竟然是在这里， 消息为空还不能阻塞， 要等到把 idle handler处理完了才阻塞
                    // No idle handlers to run.  Loop and wait some more.
                    mBlocked = true;
                    continue;
                }
                //创建一个新 pendingIdleHandler数组
                if (mPendingIdleHandlers == null) {
                    mPendingIdleHandlers = new IdleHandler[Math.max(pendingIdleHandlerCount, 4)];
                }
                //为 pendingIdleHandler数组赋值
                mPendingIdleHandlers = mIdleHandlers.toArray(mPendingIdleHandlers);
            }

            //执行idle handler, 这里要注意的是, 只有在第一次迭代时才会到达这个代码块
            // Run the idle handlers.
            // We only ever reach this code block during the first iteration.
            for (int i = 0; i < pendingIdleHandlerCount; i++) {
                final IdleHandler idler = mPendingIdleHandlers[i];
                mPendingIdleHandlers[i] = null; // release the reference to the handler

                boolean keep = false;
                try {
                    //执行IdleHandler的queueIdle(), 并且返回是否remove该IdleHandler
                    keep = idler.queueIdle();
                } catch (Throwable t) {
                    Log.wtf(TAG, "IdleHandler threw exception", t);
                }

                if (!keep) {
                    synchronized (this) {
                        mIdleHandlers.remove(idler);
                    }
                }
            }
            //这里pendingIdleHandlerCount设置为0, 再也不会运行上面的循环了
            // Reset the idle handler count to 0 so we do not run them again.
            pendingIdleHandlerCount = 0;
            //当调用idle handler的时候, 一条新message可能已经被到达了, 所以立刻返回查看一个pending的message
            //把nextPollTimeoutMillis设置为0
            // While calling an idle handler, a new message could have been delivered
            // so go back and look again for a pending message without waiting.
            nextPollTimeoutMillis = 0;
        }
    }
```

看完了MessageQueue的`next()`方法,  再来深究一下`nativePollOnce(ptr, nextPollTimeoutMillis);`到底是什么样的?

> 注： 以下摘自 《深入理解Android:卷2》 一书

*android_os_MessageQueue.cpp*

```c++
static void android_os_MessageQueue_nativePollOnce(JNIEnv*env, jobject obj,
        jintptr, jint timeoutMillis)
     NativeMessageQueue*nativeMessageQueue =
                            reinterpret_cast<NativeMessageQueue*>(ptr);
    //取出NativeMessageQueue对象，并调用它的pollOnce
   nativeMessageQueue->pollOnce(timeoutMillis);
}
//分析pollOnce函数
void NativeMessageQueue::pollOnce(inttimeoutMillis) {
   mLooper->pollOnce(timeoutMillis); //重任传递到Looper的pollOnce函数
}
```

*Looper.cpp*

```c++
inline int pollOnce(int timeoutMillis) {
       return pollOnce(timeoutMillis, NULL, NULL, NULL);
}
```

上面的函数将调用另外一个有4个参数的pollOnce函数，这个函数的原型如下：
int pollOnce(int timeoutMillis, int* outFd, int*outEvents, void** outData)
其中：

- timeOutMillis参数为超时等待时间。如果为-1，则表示无限等待，直到有事件发生为止。如果值为0，则无需等待立即返回。
- outFd用来存储发生事件的那个文件描述符。
- outEvents用来存储在该文件描述符[[1]上发生了哪些事件，目前支持可读、可写、错误和中断4个事件。这4个事件其实是从epoll事件转化而来。后面我们会介绍大名鼎鼎的epoll。
- outData用于存储上下文数据，这个上下文数据是由用户在添加监听句柄时传递的，它的作用和pthread_create函数最后一个参数param一样，用来传递用户自定义的数据。

另外，pollOnce函数的返回值也具有特殊的意义，具体如下：

- 当返回值为ALOOPER_POLL_WAKE时，表示这次返回是由wake函数触发的，也就是管道写端的那次写事件触发的。
- 返回值为ALOOPER_POLL_TIMEOUT表示等待超时。
- 返回值为ALOOPER_POLL_ERROR，表示等待过程中发生错误。
- 返回值为ALOOPER_POLL_CALLBACK，表示某个被监听的句柄因某种原因被触发。这时，outFd参数用于存储发生事件的文件句柄，outEvents用于存储所发生的事件。
上面这些知识是和epoll息息相关的。

鉴于篇幅有限，epoll是个啥玩意儿读者自行搜索，本文不再赘述

> 注： 以下摘自 《深入理解Android:卷2》 一书

*Looper.cpp*

```c++
int Looper::pollOnce(int timeoutMillis, int*outFd, int* outEvents,
void** outData) {
    intresult = 0;
   for (;;){ //一个无限循环
   //mResponses是一个Vector，这里首先需要处理response
       while (mResponseIndex < mResponses.size()) {
           const Response& response = mResponses.itemAt(mResponseIndex++);
           ALooper_callbackFunc callback = response.request.callback;
           if (!callback) {//首先处理那些没有callback的Response
               int ident = response.request.ident; //ident是这个Response的id
               int fd = response.request.fd;
               int events = response.events;
               void* data = response.request.data;
               ......
               if (outFd != NULL) *outFd = fd;
               if (outEvents != NULL) *outEvents = events;
               if (outData != NULL) *outData = data;
               //实际上，对于没有callback的Response，pollOnce只是返回它的
              //ident，并没有实际做什么处理。因为没有callback，所以系统也不知道如何处理
               return ident;
           }
        }
 
        if(result != 0) {
          if (outFd != NULL) *outFd = 0;
           if (outEvents != NULL) *outEvents = NULL;
           if (outData != NULL) *outData = NULL;
           return result;
        }
        //调用pollInner函数。注意，它在for循环内部
       result = pollInner(timeoutMillis);
    }
}
```

```c++
int Looper::pollInner(int timeoutMillis) {
   
    if(timeoutMillis != 0 && mNextMessageUptime != LLONG_MAX) {
       nsecs_t now = systemTime(SYSTEM_TIME_MONOTONIC);
        ......//根据Native Message的信息计算此次需要等待的时间
        timeoutMillis= messageTimeoutMillis;
     }
    intresult = ALOOPER_POLL_WAKE;
   mResponses.clear();
   mResponseIndex = 0;
#ifdef LOOPER_USES_EPOLL  //我们只讨论使用epoll进行I/O复用的方式
    structepoll_event eventItems[EPOLL_MAX_EVENTS];
    //调用epoll_wait，等待感兴趣的事件或超时发生
    inteventCount = epoll_wait(mEpollFd, eventItems, EPOLL_MAX_EVENTS,
                                      timeoutMillis);
#else
     ......//使用别的方式进行I/O复用
#endif
    //从epoll_wait返回，这时候一定发生了什么事情
   mLock.lock();
    if(eventCount < 0) { //返回值小于零，表示发生错误
        if(errno == EINTR) {
           goto Done;
        }
        //设置result为ALLOPER_POLL_ERROR,并跳转到Done
       result = ALOOPER_POLL_ERROR;
        gotoDone;
    }
 
    //eventCount为零，表示发生超时，因此直接跳转到Done
    if(eventCount == 0) {
      result = ALOOPER_POLL_TIMEOUT;
        gotoDone;
    }
#ifdef LOOPER_USES_EPOLL
    //根据epoll的用法，此时的eventCount表示发生事件的个数
    for (inti = 0; i < eventCount; i++) {
        intfd = eventItems[i].data.fd;
       uint32_t epollEvents = eventItems[i].events;
        /*
         之前通过pipe函数创建过两个fd，这里根据fd知道是管道读端有可读事件。
         读者还记得对nativeWake函数的分析吗？在那里我们向管道写端写了一个”W”字符，这样
         就能触发管道读端从epoll_wait函数返回了
         */
        if(fd == mWakeReadPipeFd) {
           if (epollEvents & EPOLLIN) {
                //awoken函数直接读取并清空管道数据，读者可自行研究该函数
               awoken();
           }
          ......
        }else {
           /*
            mRequests和前面的mResponse相对应，它也是一个KeyedVector，其中存储了
            fd和对应的Request结构体，该结构体封装了和监控文件句柄相关的一些上下文信息，
            例如回调函数等。我们在后面的小节会再次介绍该结构体
           */
           ssize_t requestIndex = mRequests.indexOfKey(fd);
           if (requestIndex >= 0) {
               int events = 0;
               //将epoll返回的事件转换成上层LOOPER使用的事件
               if (epollEvents & EPOLLIN) events |= ALOOPER_EVENT_INPUT;
               if (epollEvents & EPOLLOUT) events |= ALOOPER_EVENT_OUTPUT;
               if (epollEvents & EPOLLERR) events |= ALOOPER_EVENT_ERROR;
               if (epollEvents & EPOLLHUP) events |= ALOOPER_EVENT_HANGUP;
               //每处理一个Request，就相应构造一个Response
               pushResponse(events, mRequests.valueAt(requestIndex));
           }  
            ......
        }
    }
Done: ;
#else
     ......
#endif
    //除了处理Request外，还处理Native的Message
   mNextMessageUptime = LLONG_MAX;
    while(mMessageEnvelopes.size() != 0) {
       nsecs_t now = systemTime(SYSTEM_TIME_MONOTONIC);
       const MessageEnvelope& messageEnvelope =mMessageEnvelopes.itemAt(0);
        if(messageEnvelope.uptime <= now) {
           {
               sp<MessageHandler> handler = messageEnvelope.handler;
               Message message = messageEnvelope.message;
               mMessageEnvelopes.removeAt(0);
               mSendingMessage = true;
               mLock.unlock();
               //调用Native的handler处理Native的Message
               //从这里也可看出NativeMessage和Java层的Message没有什么关系
               handler->handleMessage(message);
           }
           mLock.lock();
           mSendingMessage = false;
            result = ALOOPER_POLL_CALLBACK;
        }else {
            mNextMessageUptime = messageEnvelope.uptime;
           break;
        }
    }
 
    mLock.unlock();
    //处理那些带回调函数的Response
   for(size_t i = 0; i < mResponses.size(); i++) {
       const Response& response = mResponses.itemAt(i);
       ALooper_callbackFunc callback = response.request.callback;
        if(callback) {//有了回调函数，就能知道如何处理所发生的事情了
           int fd = response.request.fd;
           int events = response.events;
           void* data = response.request.data;
           //调用回调函数处理所发生的事件
           int callbackResult = callback(fd, events, data);
           if (callbackResult == 0) {
               //callback函数的返回值很重要，如果为0，表明不需要再次监视该文件句柄
               removeFd(fd);
           }
           result = ALOOPER_POLL_CALLBACK;
        }
    }
    returnresult;
}
```

- 首先需要计算一下真正需要等待的时间。
- 调用epoll_wait函数等待。
- epoll_wait函数返回，这时候可能有三种情况：
    - 发生错误，则跳转到Done处。
    - 超时，这时候也跳转到Done处。
    - epoll_wait监测到某些文件句柄上有事件发生。
- 假设epoll_wait因为文件句柄有事件而返回，此时需要根据文件句柄来分别处理：
    - 如果是管道读这一端有事情，则认为是控制命令，可以直接读取管道中的数据。
    - 如果是其他FD发生事件，则根据Request构造Response，并push到Response数组中。
- 真正开始处理事件是在有Done标志的位置。
    - 首先处理Native的Message。调用Native Handler的handleMessage处理该Message。
    - 处理Response数组中那些带有callback的事件。
    - 上面的处理流程还是比较清晰的，但还是有个一个拦路虎，那就是mRequests，下面就来清剿这个拦路虎。

添加监控请求其实就是调用epoll_ctl增加文件句柄。下面通过从Native的Activity找到的一个例子来分析mRequests。

*android_app_NativeActivity.cpp*

```c++
static jint
loadNativeCode_native(JNIEnv* env, jobject clazz,jstring path,
                          jstring funcName,jobject messageQueue,
                          jstring internalDataDir, jstring obbDir,
                          jstring externalDataDir, int sdkVersion,
                          jobject jAssetMgr, jbyteArraysavedState)
{
  ......
  /*
  调用Looper的addFd函数。第一个参数表示监听的fd；第二个参数0表示ident；
  第三个参数表示需要监听的事件，这里为只监听可读事件；第四个参数为回调函数，当该fd发生
  指定事件时，looper将回调该函数；第五个参数code为回调函数的参数
*/
  code->looper->addFd(code->mainWorkRead,0,
                          ALOOPER_EVENT_INPUT,mainWorkCallback, code);
  ......
}
```

Looper的addFd代码如下所示：
*Looper.cpp*

```c++
void Looper::pushResponse(int events, constRequest& request) {
    Responseresponse;
   response.events = events;
   response.request = request; //其实很简单，就是保存所发生的事情和对应的Request
   mResponses.push(response); //然后保存到mResponse数组
}
```
根据前面的知识可知，并不是单独处理Request，而是需要先收集Request，等到Native Message消息处理完之后再做处理。这表明，在处理逻辑上，Native Message的优先级高于监控FD的优先级。
下面我们来了解如何添加Native的Message。

Android 2.2中只有Java层才可以通过sendMessage往MessageQueue中添加消息，从4.0开始，Native层也支持sendMessage了[2]。sendMessage的代码如下：

*Looper.cpp*

```c++
void Looper::sendMessage(constsp<MessageHandler>& handler,
                              constMessage& message) {
    //Native的sendMessage函数必须同时传递一个Handler
    nsecs_tnow = systemTime(SYSTEM_TIME_MONOTONIC);
   sendMessageAtTime(now, handler, message); //调用sendMessageAtTime
}
void Looper::sendMessageAtTime(nsecs_t uptime,
                                     const sp<MessageHandler>& handler,
                                     const Message& message) {
   size_t i= 0;
    { //acquire lock
       AutoMutex _l(mLock);
 
       size_t messageCount = mMessageEnvelopes.size();
        //按时间排序，将消息插入到正确的位置上
        while (i < messageCount &&
               uptime >= mMessageEnvelopes.itemAt(i).uptime) {
           i += 1;
        }
       
       MessageEnvelope messageEnvelope(uptime, handler, message);
       mMessageEnvelopes.insertAt(messageEnvelope, i, 1);
       //mSendingMessage和Java层中的那个mBlocked一样，是一个小小的优化措施
        if(mSendingMessage) {
           return;
        }
    }
    //唤醒epoll_wait，让它处理消息
    if (i ==0) {
       wake();
    }
}
```

## 总结

- Handler可以由任何线程创建，但线程中必须存在Looper后才能运行
- 创建Looper方法是 `Looper.prepare()`, 启动Looper方法是`Looper.loop()`
- 在`Looper.prepare()`方法中, ThreadLocal是用来存储线程中数据, Looper就是存在ThreadLocal中
- MessageQueue在Looper中被使用, 并且MessageQueue的Message使用的链表方式存储
- MessageQueue在闲置无消息并处理完IdleHandler后会阻塞, 阻塞的是MessageQueue的`next()`方法, 等待Looper.cpp native `pollOnce()`返回非0 timeout
- 阻塞后由 MessageQueue 的`enqueueMessage()`方法中`nativeWakeUp()`唤醒, 最终调用`Looper.cpp`中的`wake()`,向管道写入"W"字符
- Android4.0前只支持Java层sendMessage, 4.0之后也支持Native层sendMessage
