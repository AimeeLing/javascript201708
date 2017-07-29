/**
 * Created by weeb on 2017/7/29.
 */
//->闭包作用：避免全局变量的污染（保护）
/*
 //->A
 var num = 12;
 function fn() {
 num++;
 console.log(num);
 }
 fn();//13

 //->B
 var num = 130;

 //->A
 fn();//131
 */

//=>不污染
/*
//->A
 var obj = function () {
 var num = 12;

 function fn() {
 num++;
 console.log(num);
 }

 fn();

 //return fn;//①
 return {//②
 fn: fn
 };//->使用return把在外面需要的返回，外面设置一个变量接收即可，这样在外面就可以使用里面的东西了，为什么返回一个对象：对象中可以存储很多的信息，我们可以把很多东西都返回给外面用，如果只是return，只能返回一次，只能给外面用一个东西，太单一了
 }();
 //->B
 ~function () {
 var num = 130;
 }();
 //->A
 //fn();//->Uncaught ReferenceError: fn is not defined fn是私有的函数，在外面不能直接使用
 obj.fn();
 obj.fn();
 */

//->A
~function () {
    var num = 12;

    function fn() {
        num++;
        console.log(num);
    }

    fn();
    window.fn = fn;//->给window增加属性，可以在函数外面使用函数里面的内容 ③
}();
//->B
~function () {
    var num = 130;
}();
//->A
window.fn();
window.fn();

