## String 类型问题

- 什么是`字符串常量池`? `常量池在哪`?

  Java为String提供了字符串常量池以提高性能, `为了减少在JVM中创建的字符串数量`, 字符串类维护了一个字符串池, 如发现字符串已经在池中则会直接返回实例, 如果没有, 就会实例化一个放到池中, 运行时实例创建的全局字符串常量池中有一个表, 总是为池中每个唯一的字符串对象维护一个引用, 这就意味着它们一直引用着字符串常量池中的对象，所以`在常量池中的这些字符串不会被垃圾收集器回收`.

  字符串常量池在JVM内存的 `方法区`

- ```String a = new String("abc"); 创建了几个对象```?

  创建了两个, "abc"字符串创建在常量池里, 同时在堆中创建了对象`a`, `a`的值是常量池字符串 `abc`
  
- String 为什么是不可变的?

  提供多线程下的安全性, 使用常量池节省内存空间
  
- String 字符串拼接为什么效率低

  每次 "+" 运算都会产生一个StringBuilder对象, 运行 append方法后回收, 合理运用 StringBuilder 有效节省内存开销及运行效率
  
- `String a = "ab"; String b = "a" + "b"; a == b 是否相等`

  相同, 编译器会直接把 `String b = "a" + "b";` 转换成 `String b = "ab";`

- `String a  = "ab"; String b  = new String("ab"); a == b 结果是什么`

  结果是 `false`, 因为 b 使用 `new` 关键字, 生成对象的地址在堆中, 而 a 则是字面量写法, 直接指向常量池
  
- String、StringBuffer 和 StringBuilder 的区别

  `可变与不可变:` String 不可变, StringBuffer 与StringBuilder 可变, 如果字符串修改频繁, 使用 StringBuffer
  
  `拼接执行效率:` String最低下
  
  `是否实现equals和hashCode方法:` StringBuffer 没有实现, 所以 equals() 比较字符串会返回false
  
  `是否线程安全:` 单线程 StringBuilder 效率高, 但非线程安全, 多线程使用 StringBuffer 线程安全
  
## 对象比较

- equals() 和 == 的区别？

  equals 方法比较的是对象值(通常是 hash code 值), == 比较的是对象内存地址, 是否是同一个对象
  
- 两个对象值相同(x.equals(y) == true)，但是可能存在hash code不同吗?

  不可能, equals() 判断的依据就是 hash code, 但如果两个对象的hash code 相同, 他们不一定相同

## 关键词

- `final` 有什么作用?
  
  定义的对象不可改变, 定义的类不可被继承
  
- `public`，`private`，`protected`以及默认关键字的访问范围?

  `public`: 不同包可访问
  
  `private`: 类内部可访问
  
  `protected`: 相同包内或子类可访问
  
  `default` : 相同包内访问

- `private`修饰的方法可以通过反射访问，那么`private`的意义是什么?

  private并不是解决安全问题的, 是OOP（面向对象编程）的封装概念。
  
- 谈谈 `static`
  
  static 可以修饰变量或方法, 也可以修饰代码块, 修饰方法或代码块时, 不能存在或使用类的成员变量, 不能使用 this 或 super 关键字, 静态方法及变量会在类加载时生成, 不需要实例化.
  static 变量存放在JVM 方法区, 并且被所有线程共享

- 谈谈 `volatile`

  `特点一: 保证内存可见性`: 一条线程修改了共享变量的值，新值对于其他线程来说是可以立即得知的
  
  `特点二: 不能保证原子性`: 原子性是的是不可分割性, 即非原子性的操作都会在多线程存在安全问题,  例如 i ++ 时, 用volatile 修饰在多线程调用的情况下还是不能保证原子性
  
  `特点三: 禁止指令重新排序`: 重排序是指编译器和处理器为了优化程序性能而对指令序列进行排序的一种手段。但是重排序也需要遵守一定规则：
  - 重排序操作不会对存在数据依赖关系的操作进行重排序。例如: a= 1; b = a;
  - 重排序是为了优化性能，但不管怎么重排序，单线程下程序的执行结果不能被改变 例如 a=1; b=2; c=a+b;
使用volatile关键字修饰共享变量便可以禁止这种重排序。

  volatile只能保证变量内存可见性，不能保证原子性。volatile解决的是变量在多个线程之间的可见性，而sychronized、Lock解决的是多个线程之间访问资源的同步性。

- throw 和 throws 区别是什么?
  
  throws 写在方法申明后, 申明可能抛出的异常, throw  写在方法代码中, 直接抛出一个异常
  
- 说说 `finally`
  
  finally 用在try catch 后, 用来最终执行代码, 如果try代码块中有return 变量, finally中的代码不会影响 return 的值
  
- 说说 重载`Overload` 和 重写`Override` 区别, 重载的方法能否根据返回类型进行区分?
  
  重载和重写都是多态性的体现，区别是重载是编译时的多态性，重写是运行时的多态性；

  重载：只发生在一个类中，通过同名方法名不同参数类型或者参数个数来区分

  重写：发生在父类和子类之间，重写要求子类的重写方法必须和父类被重写方法有相同的返回类型，比父类的方法更好访问，不能比父类被重写的方法声明更多的异常，而重载没有返回类型的特殊要求

  重载的方法能否根据返回类型进行区分？

  不可以，如果用返回类型区分 如果同一个类中public void test1(){}和publiv String test1(){return "";}(编译不通过)假如编译通过，当提出方法时 类.test1 无法识别调用的是哪个方法

  
## 集合

- 讲讲 `HashMap` 的实现
  
  `HashMap` 是 数组 + 链表的形式实现的数据结构, 首先计算对象的hash key 存放在数组中, 当hash key 产生碰撞(相同重复)的情况, 会以链表的形式存储, Java1.8之后, 当链表长度达到 8 以后, 会转换成`红黑树`, 其中数组查找的时间复杂度是O(1), 链表是O(n), 红黑树是O(lgn), 数组长度也会因扩容因子扩容, 扩容因子是3/4 (0.75), 即当数组长度达到3/4时,进行一次扩容, 数组默认长度是 2^4(也就是16), 每次扩容数组长度都会乘2, 相当于第一次默认长度下第一次扩容是 16 * 2 = 32.
  
- 讲讲 `HashSet` 的实现
  
  它是基于 `HashMap` 实现的，`HashSet` 底层使用 `HashMap` 来保存所有元素, 对于 `HashSet` 中保存的对象，请注意正确重写其 `equals` 和 `hashCode` 方法，以保证放入的对象的唯一性。

- 讲讲 `Hashtable` 的实现
  
  - HashTable 基于 Dictionary 类，而 HashMap 是基于 AbstractMap。Dictionary 是任何可将键映射到相应值的类的抽象父类，而 AbstractMap 是基于 Map 接口的实现，它以最大限度地减少实现此接口所需的工作。

  - HashMap 的 key 和 value 都允许为 null，而 Hashtable 的 key 和 value 都不允许为 null。HashMap 遇到 key 为 null 的时候，调用 putForNullKey 方法进行处理，而对 value 没有处理；Hashtable遇到 null，直接返回 NullPointerException。

  - Hashtable 方法是同步，而HashMap则不是。我们可以看一下源码，Hashtable 中的几乎所有的 public 的方法都是 synchronized 的，而有些方法也是在内部通过 synchronized 代码块来实现。所以有人一般都建议如果是涉及到多线程同步时采用 HashTable，没有涉及就采用 HashMap，但是在 Collections 类中存在一个静态方法：synchronizedMap()，该方法创建了一个线程安全的 Map 对象，并把它作为一个封装的对象来返回。

- 讲讲 `ConcurrentHashMap` 的实现

设计类似`HashMap`, 使用`Segment`数组及`HashEntery`实现, `Segment` 继承于 `ReentrantLock`, 特点是使用16个分离锁增加多线程效率, 用`HashEntery`对象的不变性来降低执行读操作的线程在遍历链表期间对加锁需求, 通过`Volatile`变量来保证不同线程的内存可见性.

- 讲讲`ArrayMap`的实现


- 讲讲`SparseArray`的实现

## 四种引用类型

- 强引用

定义的对象只要还在使用中, 垃圾回收器就不会回收, 当JVM内存不足时会抛出 OutOfMemeroyError

- 软引用

定义软引用的场景是需要但并非必须, 怎么理解呢, 就像手机一样, 当饭都吃不上了就要卖手机了. 所以当JVM发生内存溢出异常之前会去回收软引用对象, 如果回收后内存还是不够, 还会继续报内存溢出.

- 弱引用

定义非必要对象, 如果这个对象只被弱引用关联, 那么GC的时候会回收弱引用对象.

Java中比较经典的场景是 `WeakHashMap`, 解决当Key已经不再使用, 那么对应的Value会被回收.

还有 `ThreadLocal` 也是用了弱引用.

- 虚引用

虚引用的使用场景是需要知道对象被GC时的时候, 当虚引用被GC时会收到一个系统通知, 并且不同于弱引用, 虚引用的`get`始终返回 `null`, 弱引用可以使用`ReferenceQueue`, 而虚引用则必须配合`ReferenceQueue`使用.

`JDK`中对直接内存的回收就用到了虚引用, 由于`JVM`自动内存管理的范围是堆内存，而直接内存是在堆内存之外，所以直接内存的分配和回收都是有`Unsafe`类去操作，java在申请一块直接内存之后，会在堆内存分配一个对象保存这个堆外内存的引用，这个对象被垃圾收集器管理，一旦这个对象被回收，相应的用户线程会收到通知并对直接内存进行清理工作。

