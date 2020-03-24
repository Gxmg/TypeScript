function sayHello(person: Array <string> ) {
  return 'Hello, ' + person;
}
​
let user = ['1'];
console.log(sayHello(user));
 /* ts中使用 ：指定变量的类型，：的前后有没有空格都行。
  *编辑完成之后没有什么多余代码插进来。
  *如果函数定义的参数类型，与传入的参数类型不一致，则会报错。
  */
//基本数据类型介绍

let a:boolean = false;
let createdByNewBoolean: Boolean = new Boolean(1);
// new Boolean 返回是个boolean对象
let createdByBoolean: boolean = Boolean(1);
// 默认变量是any,如果是赋值了，根据类型推断原则，默认是赋值的类型。
// let b;
// b=8;

// let  c = 'sss';
// c= 4;

// 联合类型
var unions: number | string  = 33
unions = 'ddd'
console.log(unions.length)

