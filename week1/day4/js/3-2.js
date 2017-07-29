/**
 * Created by weeb on 2017/7/29.
 */
//教材13页
/*
 * ++i：自身基础上加1
 * i++：自身基础上加1
 * */
/*var i = 2;
 console.log(5 + (i++), i);//7 3

 i = 2;
 console.log(5 + (++i), i);//8 3
 //-> i++：在和其它值进行运算的时候，它是先拿原有的值进行运算，运算完成后本身再累加
 //-> ++i：它是先自身累加，拿累加后的结果和其它值进行运算的
 //思考题：
 var i = 2;
 console.log(5 + (++i) + (i++) - (i++) - (++i));//1, 6*/

//--------------------------------------------------------------------------------
var n = 10;
function fn(i) {
    return function (n) {
        console.log(n + (++i));
    }
}
var f = fn(10);//fn执行后的返回结果（首先执行fn）
f(1);//12
f(5);//17
fn(10)(1);//->12  先把fn执行（传递10），把fn执行的返回结果（小函数）紧接着执行（传递1）
fn(10)(5);//16
//【每一次函数执行都会形成一个新的私有作用域（和之前执行的没有关系），把所有的步骤重新的走一遍】