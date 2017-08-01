/**
 * Created by weeb on 2017/8/1.
 */
/*
 * 2、严格模式和非严格模式的区别：
 *   ->非严格模式下,自执行函数中的this是window
 *
 *   ->严格模式下，自执行函数中的this是undefined
 *
 *   =>非严格模式下，如果不确定执行的主体，this都是window，但是严格模式下要求，不知道执行主体的时候，this都是undefined
 *
 * */
/*//非严格
~function () {
    console.log(this);//window
}();
//严格
~function () {
    "use strict";// ->只能放在当前作用域的第一行
    console.log(this);
}();*/

function fn() {
    console.log(this);// ->window
}
fn();//window
fn.call();//window
fn.call(null);//window
fn.call(undefined);//window

function sum() {
    "use strict";
    console.log(this);// ->undefined
}
sum();//->undefined
sum.call();//->undefined
sum.call(null);//null
sum.call(undefined);//undefined
