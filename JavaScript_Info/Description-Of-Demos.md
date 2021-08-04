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
