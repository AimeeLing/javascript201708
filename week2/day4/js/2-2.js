/**
 * Created by weeb on 2017/8/5.
 */
var obj = {name: "obj", fn: fn};
var ary = [12, 23];
function fn(num1, num2) {
    console.log(this,num1,num2);
}
fn.apply();//->不写 this就是window num1=num2=undefined
fn.apply(null, [12]);//->this:window  num1=12 num2=undefined
fn.apply(undefined, [12, 23]);//->this:window  num1=12 num2=23
fn.apply([100,200]);//->this:[100,200] num1=undefined num2=undefined


/*
 * apply方法总结
 *   ->语法：[函数].apply([context],[parameter1,parameter2...])和call区别，call是一个个的给函数传递参数，apply要求把传递给函数的实参放在一个数组中，但是执行的时候也相当于在给函数一个个的传参，只是语法上的一丢丢区别而已
 *   ->作用：
 *       和call一模一样
 *           1）先让函数中的this变为第一个传递的参数值（[context]）
 *           2）最后再立即把[函数]执行，第二个及以后的参数（parameter1,parameter2...）都是在给这个[函数]传递实参
 *   ->特殊：
 *       和call一模一样
 *           第一个参数不写或者写的是null/undefined，函数中的this都是window，除此之外，第一个参数写的是谁，this就指向谁
 * */