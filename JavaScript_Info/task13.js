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


// 数字类型

let num = 1.23e6 = 1.23 * 1000000;

let ms = 1e-6 =  0.000001;

let a = 0xff; // 255

let b = 0b11111111; // 二进制形式的 255

let c = 0o377; // 八进制形式的 255

alert( a == b ); // true，两边是相同的数字，都是 255

/* 对于其他进制，我们应该使用函数 parseInt */


// toString(base)

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111


255..toString(36)           // 注意，两个点不是写错了，是为了区分小数点！
(123456).toString(36)


// 不精确计算
// 超级经典的错误例子
alert( 0.1 + 0.2 == 0.3 ); // false
alert( 0.1 + 0.2 ); // 0.30000000000000004

// Hello！我是一个会自我增加的数字！
alert( 9999999999999999 ); // 显示 10000000000000000
alert( 9899999999999999 ); // 显示 9900000000000000


// isNaN()
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
alert( NaN === NaN ); // false


// isFinite()
alert( isFinite("15") ); 			// true
alert( isFinite("str") ); 		// false，因为是一个特殊的值：NaN
alert( isFinite(Infinity) );	// false，因为是一个特殊的值：Infinity
alert( isFinite(" ") )				// true，因为 +(" ") = 0		
alert( isFinite("") )					// true，因为 +("") = 0		


// Object.is
alert(Object.is(NaN,NaN));    // true
alert(Object.is(0,-0));       // false
alert(Object.is(a,b));        // 与 a===b 相同


// parseInt & parseFloat
alert( parseFloat('12.5em') ); // 12.5
alert( parseInt('12.3') ); // 12，只有整数部分被返回了
alert( parseFloat('12.3.4') ); // 12.3，在第二个点出停止了读取
alert( parseInt('a123') ); // NaN，第一个符号停止了读取

alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255，没有 0x 仍然有效
alert( parseInt('2n9c', 36) ); // 123456