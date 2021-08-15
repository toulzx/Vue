# Demos

## [HelloWorld.html](HelloWorld.html) - 1 question

js放在head中会立即执行，阻塞后续的资源下载与执行。因为js有可能会修改dom，如果不阻塞后续的资源下载，dom的操作顺序不可控。正常的网页加载流程是这样的:

- 浏览器一边下载HTML网页，一边开始解析
- 解析过程中，发现 `<script>` 标签
- 暂停解析，网页渲染的控制权转交给JavaScript引擎
- 如果 `<script>` 标签引用了外部脚本，就下载该脚本，否则就直接执行
- 执行完毕，控制权交还渲染引擎，恢复往下解析HTML网页
  
但这个例子中，最前面的 `<p>` 标签一开始并没有加载，而是等到 `<script>` 标签加载完之后才加载。
更有意思的是，当你增加到 3 个的 `<script>` 标签的时候，第三个 `<script>` 标签加载之前 最前面的 `<script>` 已经加载了。

## [task1](task1.html)

- 外联
- 反引号用于功能拓展

## [task2](task2.html)

- typeof 运算符

## [task3](task3.js)

- 类型转换

## [task4](task4.js)

- 运算符
- 值的比较

## [task5](task5.js)

- 逻辑运算符在 JS 中的独特用法 (||和&&)
- ??
- 循环 break/continue 标签

## [task6](task6.js)

- 函数表达式
- 回调函数
- 匿名函数
- 箭头函数

## [task7](task7.html)

- TDD 测试驱动开发

## [task8](task8.js)

- 对象的创建与使用
- [练习：将数值属性值都乘以 2（要求遵循 TDD 开发）](https://zh.javascript.info/task/multiply-numeric)
- 对象的浅拷贝、深拷贝
- 对象中的方法和 this
- [练习：在对象字面量中使用"this"](https://zh.javascript.info/task/object-property-this)

## [task9](task9.js)

- 对象的方法和 this

## [task10](task11.html)

- 对象中构造器的使用

## [task11](task11.html)

- [练习：创建一个计算器](https://zh.javascript.info/task/calculator)
  - 尽管有沙箱和答案，但在这里我自己又重复实践了以便，并有了新的收获
- [练习：使用构造函数创建一个计算器](https://zh.javascript.info/constructor-new)

## [task12](task12.js)

- 新特性：可选链的使用

## Symbol 、 对象的原始值转换

感觉没有理解到位，云里雾里...

## [task13](task13.js)

- 原始数据类型 & 对象包装器
- 数字类型
  - 不精确计算
  - toString(base)
  - isNaN( ) & isFinite()
  - Object.is()
  - parseInt() & parseFloat()

## [task14](task14.js)

- 字符串的表示
- 反引号的额外用法
- 访问字符的方法
  - []
  - charAt
  - for..of
- if (~str.indexOf("Widget"))
- if (str.includes("Widget"))
