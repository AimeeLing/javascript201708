/**
 * Created by weeb on 2017/7/27.
 */
//自定义属性解决方式 - 不耗性能
var tabBox = document.getElementById("tabBox"),
    oList = tabBox.getElementsByTagName("li"),
    oDivList = tabBox.getElementsByTagName("div");
function tabChange(curIndex) {
    for (var i = 0; i < oList.length; i++) {
        oList[i].className = oDivList[i].className = null;
    }
    oList[curIndex].className = oDivList[curIndex].className = "select";
}
/*for (var i = 0; i < oList.length; i++) {
 oList[i].dataIndex = i;//自定义属性
 oList[i].onclick = function () {//事件绑定是js异步编程
 tabChange(this.dataIndex);
 }

 }*/
/*
 * js中的同步编程和异步编程
 *   同步编程：自上而下依次执行，上面的事情没有处理完，下面的事情一直在等待（机器人的做事方法）
 *   异步编程：当上面的事情在等待执行的时候，我们不等，继续执行下面的事情，js中的事件绑定属于异步编程（事件绑定、定时器、回调函数、ajax、）
 * */

for (var i = 0; i < oList.length; i++) {
    //oList[i].dataIndex = i;//自定义属性
    /* ~function (i) {//闭包方式 - 耗性能
     oList[i].onclick = function () {//事件绑定是js异步编程
     //tabChange(this.dataIndex);
     tabChange(i);// ->每一次循环把全局作用域下的i变量存储的值，当作实参传递给形参i（形参是私有变量）
     }
     }(i);*/
    oList[i].onclick = (function (i) {
        return function () {
            tabChange(i);
        }
    })(i);
}