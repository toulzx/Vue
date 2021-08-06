// 函数表达式

function sayHi() {
  alert( "Hello" );
}

alert( sayHi );       // 显示函数代码，注意，没有括号，不会调用函数

let f = sayHi;        // (2) 复制，没有括号！

f(); // Hello         // (3) 运行复制的值（正常运行）！
sayHi(); // Hello     //     这里也能运行（为什么不行呢）


//  函数表达式被执行才创建，并从此刻开始有用

sayHello("John"); // error!

let sayHello = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};                               


// 如果想有条件的创建函数，则声明式不可用

let age = prompt("What is your age?", 18);
// 有条件地声明一个函数
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }
} else {
  function welcome() {
    alert("Greetings!");
  }
}
// ……稍后使用
welcome(); // Error: welcome is not defined


// 函数表达式法有用

let age = prompt("What is your age?", 18);
let welcome;
if (age < 18) {
  welcome = function() {
    alert("Hello!");
  };
} else {
  welcome = function() {
    alert("Greetings!");
  };
}
welcome(); // 现在可以了





// 回调函数和匿名函数

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);



// 箭头函数

let double = n => n * 2;

let sayHi = () => alert("Hello!");

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");


let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
    "Do you agree?", 
    () => alert("You agreed."), 
    () => alert("You canceled the execution.")
    )