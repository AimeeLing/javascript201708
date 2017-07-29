/**
 * Created by weeb on 2017/7/29.
 */
/*

 //->var a = 5; var b = 6; var c = 7;（每一个都带var）
 var a = 5,
 b = 6,
 c = 7;
 //var a = 10; b = 10; c = 10;(b/c是不带var的)
 var a = b = c = 10;
 */
//- - - - --- -  - - - -- - - -- - - - - -- --  - - - - -- - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - -
/*
 * 分析：全局作用域下的变量提升
 *   var a; var b; var c;
 *   fn=xxxfff000;
 *
 * */
console.log(a, b, c);//undefined*3
var a = 5,
    b = 6,
    c = 7;
console.log(a, b, c);//5,6,7
function fn(a) {
    /*
    * 私有作用域中的操作
    *   形参赋值：a=11;
    *   变量提升：var b;
    *   ->以后在当前的作用域中a和b都是私有变量，和全局下的a与b变量没有任何的关系
    * */
    console.log(a, b, c);//a:11 b:undefined c:7
    a = 12;//->私有的a=12
    var b = 13;//->私有的b=13
    c = 14;//->全局下的c=14
    console.log(a, b, c);//a:12 b:13 c:14
}
c = fn(11);//把fn执行的返回结果赋值给c（一个函数的返回值只需要看return后面的值即可，没有return默认返回值就是undefined）=>c=undefined
console.log(a, b, c);//a:5 b:6 c:undefined