/**
 * Created by weeb on 2017/7/29.
 */
var n = 10;
function fn() {//->函数体中代码字符串
    var n = 100;
    return function () {//因为函数是引用数据类型的，所以return 返回一个函数相当于返回一个地址
        console.log(n);
    }
}
var f = fn();//fn执行返回结果形成一个私有作用域AA
f();//- -形参赋值/变量提升都不做  查找当前作用域的上级作用域
~function sum() {
    var n = 1000;
    f();
}();
