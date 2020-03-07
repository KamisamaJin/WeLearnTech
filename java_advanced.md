## 什么是可重入锁ReentrantLock

- "独占"

同一时刻只有一个线程能获取到锁

- "可重入"

支持一个线程能够重复加锁

还可以支持取锁时的公平和非公平性, "公平"是指"不同的线程获取锁的机制是公平的"，而"不公平"是指"不同的线程获取锁的机制是非公平的"。


## java 垃圾回收

- 什么样的对象需要回收?

简单讲就是如果这个对象没有被其他对象所引用, 那么这个对象就是无用的, 称为垃圾对象, 可以被gc, 占用的内存也会被销毁.

- 标记垃圾的算法有哪些?

    - 引用计数法

        引用计数法就是给对象中添加一个引用计数器，每当有一个地方引用它，计数器就加 1；当引用失效，计数器就减 1；任何时候计数器为 0 的对象就是不可能再被使用的，可以当做垃圾收集。这种方法实现起来很简单而且优缺点都很明显。

        - 优点 执行效率高, 程序执行受影响较小
        - 缺点 无法检测出循环引用的情况, 导致内存泄露

    - 可达性分析算法

        这个算法的基本思想就是通过一系列的称为 "GC Roots" 的对象作为起点，从这些节点开始向下搜索，节点所走过的路径称为引用链，当一个对象到 GC Roots 没有任何引用链相连的话，则证明此对象是不可用的。
        
        什么样的对象可以作为 GC Root?
        
        - 虚拟机栈中的引用对象
        - 方法区中的常量引用对象
        - 方法区中的类静态属性引用的对象
        - 本地方法栈中的引用对象
        - 活跃线程中的引用对象

- 如何将垃圾回收?

    Java中有四种垃圾回收算法, 标记清除算法, 复制算法, 标记整理算法以及分代回收算法

    - 