let name = "John";

// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!

// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3

// 对比
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2}（使用双引号则不会计算 ${…} 中的内容）