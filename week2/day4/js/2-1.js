/**
 * Created by weeb on 2017/8/5.
 */
var obj = {name: "obj", fn: fn};
var ary = [12, 23];
function fn(num1,num2) {
    console.log(this);
}
// fn();//->this:window
// obj.fn();//->this:obj
//=>让fn执行，并且让里面的this变为ary
fn.call();//->不写 this就是window num1=num2=undefined
fn.call(null,12);//->this:window  num1=12 num2=undefined
fn.call(undefined,12,23);//->this:window  num1=12 num2=23



/*
* call方法总结
*   ->语法：[函数].call([context],parameter1,parameter2...)
*   ->作用：
*       1）先让函数中的this变为第一个传递的参数值（[context]）
*       2）最后再立即把[函数]执行，第二个及以后的参数（parameter1,parameter2...）都是在给这个[函数]传递实参
*   ->特殊：
*       第一个参数不写或者写的是null/undefined，函数中的this都是window，除此之外，第一个参数写的是谁，this就指向谁
* */