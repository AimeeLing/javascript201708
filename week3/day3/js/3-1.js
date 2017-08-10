/**
 * Created by weeb on 2017/8/10.
 */
/*
 var backTop = document.getElementById("backTop");
 backTop.onclick = function () {
 //->让浏览器卷去的的高度设置为0<=>回到顶部
 utils.win("scrollTop", 0);
 };
 //->这种方式太生硬了，我们想实现点击回到顶部，页面慢慢的滚回到顶部的效果
 */

var backTop = document.getElementById("backTop");
backTop.onclick = function () {
    //->设置一个定时器，让其每隔一段时间，在现有的scrollTop基础上减去我们的步长，一直减到小于等于0为止
    var timer = setInterval(function () {
        var curTop = utils.win("scrollTop");//->获取现有的scrollTop值
        //->如果现有的st的值，已经小于等于0了，说明已经回到顶部了，那么操作这个动画的定时器应该停止，结束当前的动画
        if (curTop <= 0) {
            clearInterval(timer);
            return;
        }
        curTop -= 1000;//->步长就是100，在现有基础上减去步长（步长越大走的越快，反之步长越小走的越慢）
        //->让浏览器运动到最新步长的位置
        utils.win("scrollTop", curTop);
        console.log("ok");
    }, 17);
};

//-------------需要完善的
//1、开始的时候，回到顶部的按钮并不会展示，只有当卷去的内容高度超过一屏幕高度的时候，按钮才会展示
// window.onscroll=function () {}; 当浏览器的滚动条发生滚动（鼠标滚轮、js代码、手动拖动滚动条，键盘的某些按键都可能会触发滚动条滚动）触发这个事件执行
//2、当第一次点击回到顶部，开始我们的动画，接下来再点击这个按钮应该不会有任何的操作才可以，直到当前动画完成（回到顶部），再次点击这个按钮才会有作用 =>“动画运动期间，防止按钮的重复点击”
//3、当回到顶部的动画正在运行中，但是我们滚动了鼠标的滚轮，此时应该立即结束当前正在运行的动画，以用户接下来的手动操作为准
