// 新特性 可选链

let user = {}; 

user.address ? user.address.street :undefined;

user.address && user.address.street && user.address.street.name ;

user?.address?.street?.name;

// 安全删除

delete user?.name; // 如果 user 存在，则删除 user.name

// 方括号的可选链

let user1 = {
  firstName: "John"
};

let user2 = null; // 假设，我们不能授权此用户

let key = "firstName";

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

// 用于可能不存在的函数

let userAdmin = {
  admin() {
    alert("I am admin");
  }
};
let userGuest = {};


userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // 啥都没有（没有这样的方法）,但也不会报错