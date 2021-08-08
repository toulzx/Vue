// 对象

const user = {     			// const 声明仅仅固定了 user本身 而不是其内容
  name : "John",  				// 键 "name"，值 "John"
  age : 30,        				// 键 "age"，值 30
  "likes birds": true,  // 多词属性名必须加引号
};

user.name = "Pete";						// 不会报错
user["likes birds"] = false;	// 多词属性不能用点（·）引用

let key = "likes birds";
user[key] = true;							// 跟 user["likes birds"] = true; 一样，注意点操作符无此作用

delete user['likes birds'];


alert("likes birds" in user); // 判断属性是否存在
alert(key in user);           // 判断属性是否存在


function makeUser(name, age) {
  return {
    name, // 与 name: name 相同
    age,  // 与 age: age 相同
    // ...
    return: 3,			// 属性名称不受编程语言保留字限制！
    0 : "test",		  // 除了 symbol，其它键默认转换为字符串，此处等同于 "0": "test"
  };
}


// 整数属性->排序并先展示；其他属性->按创建顺序展示。

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  age: 50,
  // ...
  return: 3,
  1.2 : "hello",
  "1": "USA",
};

for(let code in codes) {
  alert(code); // 1, 41, 44, 49, age, ..., return
}


// 对比！

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  age: 50,
  // ...
  return: 3,
  1.2 : "hello",
  "+1": "USA",
};

for(let code in codes) {
  alert( +code ); // 49, 41, 44, NaN, ..., NaN, 1
}


