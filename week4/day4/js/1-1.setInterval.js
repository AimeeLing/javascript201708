/**
 * Created by weeb on 2017/8/19.
 */
/*
 var n = 0;
 window.setInterval(function () {
 console.log(++n);//->输出多次，从1开始一直累加
 }, 1000);

 var m = 0;
 window.setTimeout(function (str) {
 // console.log(++m);//->输出一次1
 console.log(str);
 }, 1000,"I am parameter");*/

/*window.setTimeout(function () {
 //->this:window
 //->一般情况下，当时间到达，执行这个匿名函数的时候，函数中的this指向window，而且当前函数中没有传递任何的实参
 console.log(this === window);
 }, 1000);*/

// var obj = {name: "Junior"};
/*window.setTimeout(function () {
 //->使用call或者apply
 //->在设置定时器的时候就把当前的匿名函数执行了，把函数执行的结果赋值给了定时器 <=> setTimeout(undefined,1000) 1000ms后执行的是undefined，不是我们想要的效果
 }.call(obj, 100), 1000);*/


/*window.setTimeout(function () {
 //->使用bind可以解决这个问题，bind仅仅是预先把函数中的this和参数都准备好，设置定时器的时候，第一个参数还依然是个函数，当1000ms后执行函数，此时函数中的this已经是预先设置的obj了，num的值也是预先设定好的100这个值
 //->使用bind（IE6~8下不兼容）
 console.log(this);
 }.bind(obj, 100), 1000);*/


//=>原理：利用了闭包可以保存内容的机制：在设置定时器的时候，我们预先形成一个不销毁的闭包（把需要的this和num提前通过call改变了），在这个函数中返回一个小函数给定时器，1000ms后执行返回的小函数，在小函数中我们可以通过作用域链的机制找到需要的obj以及num
var obj = {name: "Junior"};
window.setTimeout(function (num) {
    // console.log(this === obj, num);//true,100
    //->this:obj num=100
    var _this = this;
    return function () {
        //->1000ms后执行的是返回的小函数，把我们需要处理的事情放在小函数中即可
        console.log(num);//->不是小函数私有的变量，找上一级作用域中的num，也就是`100`
        console.log(this);//->this:`window`
        console.log(_this);//->this:`obj`
    }
}.call(obj, 100), 1000);
