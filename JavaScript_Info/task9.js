// 对象的方法和 this


let user = {
  name: "John",
  age: 30,
  sayHi() {		// 这里方法简写了
    // "this" 指的是“当前的对象”
    alert(this.name);
  }

};


// 在 JavaScript 中 this 的适用范围比一般编程语言广

function sayHi() {
  alert( this.name );		// 这是允许的
}

function sayHi() {
  alert(this);			    // 但这是不允许的
}


// 箭头函数没有自己的 this

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya

