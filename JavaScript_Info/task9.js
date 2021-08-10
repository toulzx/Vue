// 对象的方法和 this


let user = {
  name: "John",
  age: 30,
  sayHello: function() {},		// 不要忘记逗号
  sayHi() {		// 这里方法简写了
    // "this" 指的是“当前的对象”
    alert(this.name);
  }

};
user.sayHi();


// 在 JavaScript 中 this 的适用范围比一般编程语言广

function sayHi() {
  alert( this.name );		// 这是允许的
}
sayHi();

function sayHello() {
  alert(this);			    // 但这是不允许的
}
sayHello();


// 箭头函数没有自己的 this

let user2 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user2.sayHi(); // Ilya

