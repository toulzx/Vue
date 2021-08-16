// JavaScript 中的数组是双端队列：shift/unshift/push/pop
// 栈更快

let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

alert( fruits );// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]

alert( fruits.shift() ); // 移除 Pineapple 然后 alert 显示出来

alert( fruits ); // "Lemon", "Apple", "Orange", "Peach"


// 遍历数组
// 原始 for 最快，for..of 写法简洁，不建议用对象的 for..in
let fruits = ["Apple", "Orange", "Plum"];

// 遍历数组元素
for (let fruit of fruits) {
  alert( fruit );
}


// lenth 属性可修改 -> 用于清空
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // 截断到只剩 2 个元素
alert( arr ); // [1, 2]

arr.length = 5; // 又把 length 加回来
alert( arr[3] ); // undefined：被截断的那些数值并没有回来



// 请不要使用以下方式创建数组

let arr = new Array("Apple", "Pear", "etc");

let arr = new Array(2); // 会创建一个 [2] 的数组吗？

alert( arr[0] ); // undefined！没有元素。

alert( arr.length ); // length 2

// 请使用这种方式创建数组

let fruits = ["Apple", "Orange", "Plum"];


// 数组 -> 字符串
let arr = [1, 2, 3];
alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true
alert( arr.toString() === '1,2,3' ); // true



// 不要使用 `==` 比较数组
alert( [] == [] ); // false
alert( [0] == [0] ); // false
alert( 0 == '' ); // true，因为 '' 被转换成了数字 0