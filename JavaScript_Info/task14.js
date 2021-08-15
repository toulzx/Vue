// 字符串的表示

let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

// 反引号的额外用法 1

function sum(a, b) {
  return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// 反引号的额外用法 2

let str1 = "Hello\nWorld"; // 使用“换行符”创建的两行字符串

// 使用反引号和普通的换行创建的两行字符串
let str2 = `Hello
World`;

alert(str1 == str2); // true


// 访问字符

// 第一个字符
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// 超过上限
alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // ''（空字符串）

// for.. of
for (let char of "Hello") {
  alert(char); // H,e,l,l,o（char 变为 "H"，然后是 "e"，然后是 "l" 等）
}


// if 语句

let str = "Widget";
// 不推荐
if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // 正常运行
}
// 推荐
if (str.includes("Widget")) {
  alert( 'Found it!' ); // 正常运行
}


