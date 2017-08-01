/**
 * Created by weeb on 2017/8/1.
 */
/*
 * 4、严格模式和非严格模式的区别：
 *   ->非严格模式下,
 *
 *   ->严格模式下，不允许使用arguments.callee/arguments.callee.caller这两个属性
 *
 * */
function fn() {
    console.log(arguments.callee);//->存储的是当前函数本身：fn
    //arguments.callee();
    console.log(arguments.callee.caller);//->存储的是当前函数在哪个作用域下执行的，如果是在全局下执行的，返回结果是null，如果AA函数中执行的，它存储的值就是AA本身
}
fn();

function aa() {
    fn();
}
aa();

/*~function () {
    console.log(arguments.callee);
}();*/


function sum() {
    "use strict";
   /* console.log(arguments.callee);
    console.log(arguments.callee.caller);*/
    //->Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
}
sum();
