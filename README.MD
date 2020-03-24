## 为了钱途，学习学习typeScript。生活不易，且行且需学习。
## 哈哈哈哈。。。。。。。。。。。

#第一章节：
1. typescript 是什么？
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.
官方翻译：TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。
2. TypeScript的好处？
（1）类型系统其实是最好的文档，用ts写的程序函数，看看类型定义就知道这个函数是如何使用的了。
（2）可以在编写代码阶段就能发现大部分的错误，不必在运行时才报错。
（3）增强了编辑器的功能，包括代码补全，接口提示，跳转到定义，重构等。
3. typescript的缺点？
（1）有一定的学习成本，需要了解接口、范型、类、枚举等 属性
（2）前期开发配置量增加，小项目不建议使用，短期会增加开发成本，但对于长期的维护的项目，这个是很香了。
（3）跟一些其他库可能不兼容
4.  安装typescript
 npm install -g typescript  安装成功之后就可以使用 tsc 命令来执行ts的文件了。
 说明： 在react中使用tsx后缀命令js
5. 编辑器推荐使用vscode

#第二章节：
1. 开始编写尝试hello程序
新建个hello.ts的文件，然后执行tsc hello.ts，会生成js文件。
<ts只会进行静态类型的检查，如果发现有错误，编译的时候就会报错。但即使编译报错，也可以生成js文件，当然也可以在<tsconfig.json中配置noEmitOnError>
2. ts基础数据类型
 （1）原始数据类型，包括number、string、boolean、undefined、null还有es6中的symbol,在ts中主要介绍前五种
 #boolean
 在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了 null 和 undefined）一样，不再赘述。
 #number
 使用let a:number = 0;或者使用六进制或者八进制都行。不会报错
 #string
  let myName: string = 'Tom';
  let myAge: number = 25;
  // 模板字符串
  let sentence: string = `Hello, my name is ${myName}.
  I'll be ${myAge + 1} years old next month.`;
字符串可以使用模版或者字符类型的值
#空值 null undefined void
js空没有Void的概念，但是在ts中可以使用Void表示没有返回值的函数
>> 声明一个void类型的变量没有什么实际用处，因为只能赋值给他undefined、null。赋值其他的会报错的。
>> null 或者undefined 跟void的区别是，他俩是其他类型的子类型，可以定义这种类型的变量可以赋值给其他类型。
#any任意值类型
如果是一个普通类型，在赋值过程中改变类型是不被允许的。
如果是any类型的话，可以任意赋值
>> 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
>> 如果只是定义了一个变量，未声明类型且没有值，默认是任意值。例如 let a;
>> 如果是定义了一个变量并且赋值了，则ts会默认给你推断出，你赋值那个类型。例如: let a= 7;那么这个a就是number类型的。

(2) 联合数据类型
>>>>> 上面介绍的都是单个类型定义，那可不可以定义两种类型呢，答案是肯定的。
## 联合类型使用 | 分隔每个类型。
>> 例如：let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。
<ts访问联合类型的属性或者方法的时候，如果没有共有的属性或者方法，则会报错>
<ts在对联合类型的变量赋值的时候，会采取类型的推断原则，来进行是否可以赋值>


