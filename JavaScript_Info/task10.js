// 用无名函数作为立即调用的构造函数，比一般的创建对象，可以做更多的事情

let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ……用于用户创建的其他代码
  // 也许是复杂的逻辑和语句（和最初的对象创建方法的区别！）
  // 局部变量等
  
};
alert( user.name );

// 构造器的 return

// 1

function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- 返回这个对象
}

alert( new BigUser().name );  // Godzilla，得到了那个对象


// 2

function SmallUser() {

  let hello = "Hi";
  this.name = "John";

  return hello; // <-- 返回 this
}

alert( new SmallUser() );  // [object Object]
alert( new SmallUser().name );  // John

// 说明返回的还是对象！


//