/**
 * Created by weeb on 2017/7/29.
 */
var submit = document.getElementById("submit");
var countBox = document.getElementById("countBox");
/*
 submit.onclick = function () {


 //变量提升：var n;
 //  n = 0;

 var n = 0;//每次点击n都从0开始
 countBox.innerHTML = ++n;
 //当代码执行完成后：栈内存销毁

 };
 */

// -> 利用了全局作用域不销毁的原理，把我们需要累加的值存储在全局变量中，每一次点击执行函数，在形成的私有作用域中，把全局变量的值进行累加，这样就可以实现我们的需求了
// => 弊端：如果都遵循这个思路，会导致全局变量过多（全局变量可能出现污染的问题），所以在某些正规的小团队中，是明令规定禁止使用全局变量的
//方法一
/*var n = 0;
 submit.onclick = function () {
 countBox.innerHTML = ++n;
 };*/

//性能和功能面前，一般性能向功能妥协（功能实现/性能优化/模式封装）

//->给onclick赋值的时候：形成一个不销毁的私有作用域（私有变量n也不销毁了）
// ->方法二  onclick=xxxfff111
// -> 不利于性能优化
/*
 submit.onclick = (function () {
 var n = 0;
 return function () {// -> xxxfff111
 countBox.innerHTML = ++n;
 };
 })();
 */

/*~function () {
 var n = 0;
 submit.onclick = function () {
 countBox.innerHTML = ++n;
 }
 }();*/

//方法三：自定义属性在整个js编程思想上最伟大编程思想之一
//把值存储在自定义属性上也可以实现保存的作用
/*submit.nIndex = 0;
 submit.onclick = function () {
 //->this：submit
 countBox.innerHTML = ++this.nIndex;
 };*/

//方法四：利用innerHTML的设置内容的机制（内置属性）
submit.onclick = function () {
    countBox.innerHTML++;
    //countBox.innerHTML=countBox.innerHTML+1;//->字符串拼接 ->想使用countBox.innerHTML=parseInt(countBox.innerHTML)+1;
};

//思考题：
/*
* 同意+1  不同意-1
* */

