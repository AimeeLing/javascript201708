/**
 * Created by weeb on 2017/7/29.
 */
/*
* 全局下的变量提升
* f = xxxfff000
* g = xxxfff111
*
* */
/*function f() { return true;}
 function g() { return false;}
 ~function () {
 /!*
 * 自执行函数执行形成一个私有作用域
 * ->形参赋值：无
 * ->变量提升：function g;   不管条件是否成立都要提升，但是提升的时候只是声明不定义了
 *
 * *!/
 if (g() && ([] == ![])) {//->g();=>undefined  Error:g is not a function
 f = function f() { return false; }//->等号右边是值，是不进行变量提升的
 function g() { return true; }
 }
 }();
 console.log(f());
 console.log(g());*/

function f() { return true;}
function g() { return false;}
~function () {
    /*
    * 变量提升：g = xxxfff222   g 是当前私有作用域的私有函数
    * */
    if (g() && ([] == ![])) {
        /*
        * g()：true
        * [] == ![]：true    []==false  0==0 ->true
        * */
        f = function f() { return false; }//->等号右边是值，是不进行变量提升的 f不是这个作用域中私有的，<=>window.f = function f() { return false; }
    }
    function g() { return true; }
}();
console.log(f());//false
console.log(g());//false



//--------------------------------------------------------------------------------------
//匿名函数之自执行函数：函数的创建和执行一起完成了（自执行函数在全局作用域下不进行预解释，自执行的时候形成一个私有作用域进行预解释）
/*(function fn() {
 console.log("no");
 return function () {
 console.log("1");
 }
 })
 ;(function () {//->自执行函数前面加“;”：防止上面的函数创建完成后面不加分号，以后代码压缩成一行的时候，让自执行函数成为上面函数的执行参数
 console.log("ok");
 })();
~function () {}();
!function () {}();
-function () {}();
+function () {}();
 */
