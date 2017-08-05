/**
 * Created by weeb on 2017/8/5.
 */
var ary = [12, 23, 14, 25, 23, 14, 12, 15, 20];
//->失败
/*var max = Math.max(ary);
 //=>Math.max([12, 23, 14, 25, 23, 14, 12, 15]);应该是 Math.max(12, 23, 14, 25, 23, 14, 12, 15);
 console.log(max);//->NaN*/

//->失败
/*var max = Math.max(eval(ary.toString()));//只能取最后一项
 //=>Math.max("12, 23, 14, 25, 23, 14, 12, 15");
 console.log(max);*/

//->失败
/*var max = Math.max(eval(ary.toString()));//只能取最后一项
 //=>Math.max(15);->15
 console.log(max);*/

//->括号表达式：一个小括号中出现多项（用逗号隔开），我们获取的最后结果是最后一项的值
// (12,13) ->13
/*(function () {
 console.log(this);//->this:window
 })();*/

/*var obj={
 fn:function () {
 console.log(this);
 }
 };
 // (obj.fn)();//->this:obj //=>如果括号只有一项，括号加与不加一样的
 (12,obj.fn)();//->this:window // =>this.window 括号表达式中获取的值是把obj.fn的属性值克隆了一份拿来用的，相当于执行了一个自执行函数*/


//-------------成功 =>方法二
//=>利用了apply在传递给Math.max方法实参的时候，应该放一个数组（相当于在一个个的给方法传参）的特点来完成的
/*
var max = Math.max.apply(null, ary);
console.log(max);
var min = Math.min.apply(null, ary);
console.log(min);*/

/*
ary.toString() =>"12, 23, 14, 25, 23, 14, 12, 15, 20"
"Math.max("+12, 23, 14, 25, 23, 14, 12, 15, 20+")" =>"Math.max(12, 23, 14, 25, 23, 14, 12, 15, 20)"*/
//=>方法三
console.log(eval('Math.max(' + ary.toString() + ')'));
console.log(eval('Math.min(' + ary.toString() + ')'));