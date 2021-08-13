// 构造器 String/Number/Boolean 仅供内部使用

// 不推荐以下做法

let zero = new Number(0);

if (zero) { // zero 为 true，因为它是一个对象
  alert( "zero is truthy?!?" );
}


// 同样，你也不应该为 String/Number/Boolean 对象添加属性：
// 这个例子清楚地表明，原始类型不是对象。

let str = "Hello";

str.test = 5;	// (*)

alert(str.test);

