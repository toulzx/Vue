// 逻辑运算符在 JS 中的独特用法

alert( 1 || 0 ); // 1（1 是真值）
alert( null || 1 ); // 1（1 是第一个真值）
alert( null || 0 || 1 ); // 1（第一个真值）
alert( undefined || null || 0 ); // 0（都是假值，返回最后一个值）
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
alert( 1 && 2 && null && 3 ); // null

// ||和??

let firstName = null;
let lastName = false;
let nickName = "SuperCoder";  
alert(firstName || lastName || nickName || "Anonymous");  // SuperCoder
alert(firstName ?? lastName ?? nickName ?? "Anonymous");  // false


// ??优先级

let height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50); // 5000
let area = height ?? 100 * width ?? 50;     //  变成了 height ?? (100 * width) ?? 50;


// ??使用限制

let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // 正常工作了


// 循环 break/continue 标签

outer: 
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // 如果是空字符串或被取消，则中断并跳出这两个循环。
    if (!input) break outer; // (*)

    // 用得到的值做些事……
  }
}
alert('Done!'); //控制权直接从 (*) 转至 alert('Done!')。

