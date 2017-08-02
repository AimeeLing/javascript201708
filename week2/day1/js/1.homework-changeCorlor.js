/**
 * Created by weeb on 2017/8/1.
 */
var ary = ["red", "yellow", "pink", "green", "blue"], btnList = document.getElementsByTagName("input");
/*for (var i = 0; i < btnList.length; i++) {
    btnList[i].index = i;
    btnList[i].onclick = function () {
        document.body.style.backgroundColor = ary[this.index];
    }

}*/


// var btnList = document.getElementsByName("color");
//---------------------------------------------------------------------------------------------------
//->自定义属性方式（性能最好）
/*for (var i = 0; i < btnList.length; i++) {
 btnList[i].index = i;
 btnList[i].onclick = function () {
 document.body.style.backgroundColor = ary[this.index];//this.index：当前点击按钮自定义属性中存储的值（按钮的索引）
 }

 }*/

//=>闭包处理(利用闭包不销毁机制)
for (var i = 0; i < btnList.length; i++) {
 ~function (i) {
 btnList[i].onclick = function () {
 document.body.style.backgroundColor = ary[i];
 }
 }(i);
 }

/*for (var i = 0; i < btnList.length; i++) {
 btnList[i].onclick = (function (n) {
 return function () {
 document.body.style.backgroundColor = ary[n];
 }
 })(i);
 }*/

//------------------------------------------------------------------------------------------------------
//->以下操作不可以：异步编程 && 作用域链
/*
 for (var i = 0; i < btnList.length; i++) {
 btnList[i].onclick = function () {
 //->我们当前点击这个按钮的索引，正好是我们在ary中获取对应颜色的索引 =>ary[索引]：获取需要的颜色
 //->1异步编程说明 2作用域链
 document.body.style.backgroundColor = ary[];
 }

 }*/
