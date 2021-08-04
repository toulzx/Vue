// 运算符

+undefined
+null
+true
+" "

a = b = c = 2 + 2;

let a = (1 + 2, 3 + 4);
for (a = 1, b = 3, c = a * b; a < 10; a++){}


// 值的比较


let a = 0;
alert( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true
// 但是
alert(a == b); // true!


alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

/*
相等性检查 == 和普通比较符 > < >= <= 的代码逻辑是相互独立的。进行值的比较时，null 会被转化为数字，因此它被转化为了 0。这就是为什么（3）中 null >= 0 返回值是 true，（1）中 null > 0 返回值是 false。
*/

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

/*
(1) 和 (2) 都返回 false 是因为 undefined 在比较中被转换为了 NaN，而 NaN 是一个特殊的数值型值，它与任何值进行比较都会返回 false。
(3) 返回 false 是因为这是一个相等性检查，而 undefined 只与 null 相等，不会与其他值相等。
*/