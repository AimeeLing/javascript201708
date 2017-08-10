/**
 * Created by weeb on 2017/8/10.
 */
/**
 * getCss：获取当前元素经过浏览器计算的样式属性值
 * @param curEle 当前需要操作的元素 [object]
 * @param attr 要获取样式值的属性名 [string]
 * @return 要获取的样式属性值
 */
/*function getCss(curEle, attr) {
 var val = null;
 if ("getComputedStyle" in window) {
 //->兼容
 val = window.getComputedStyle(curEle, null)[attr];
 } else {
 //->不兼容（IE6~8）
 val = curEle.currentStyle[attr];
 }
 return val;
 }*/

//=>弊端：执行上述方法获取的结果是带单位的，我们最好把能去单位的值，把单位去掉，方便后期数字的计算；对于float、position等样式属性值属于不能去单位的
//--------------
/*function getCss(curEle, attr) {
 var val = null;
 if ("getComputedStyle" in window) {
 val = window.getComputedStyle(curEle, null)[attr];
 } else {
 val = curEle.currentStyle[attr];
 }
 //=>去除单位：纯数字的字符串或者左边是数字，右边是单位（px|em|rem...）符合这样格式的我们采取去单位的操作
 var reg = /^-?\d+(\.\d+)?(px|em|rem)?$/i;//->有效数字(纯数字的字符串或者左边是数字，右边是单位（px|em|rem...）)
 val = reg.test(val) ? parseFloat(val) : val;
 return val;
 }*/

//=>弊端：我们平时写css样式的时候，有些样式属性是不兼容的例如：设置透明度的opacity
/*
 * [标准]
 *   opacity:0.5
 * [IE6~8]
 *   filter:alpha(opacity=50)  [0.5*100]
 * */
//=>我们在获取透明度的时候，用户传递的attr是“opacity”，说明用户想获取的是透明度，得到的结果是一个小数；但是在IE低版本浏览器中，无法通过这个属性获取到想要的结果，如果传递的是这个属性，我们需要把其转换为filter，然后再获取到透明度的结果，最后在得到的“alpha(opacity=xxx)”这样的结果中获取到数字，把其变成和标准浏览器一模一样的小数
//--------------------
/*function getCss(curEle, attr) {
 var val = null,
 reg = null;
 if ("getComputedStyle" in window) {
 val = window.getComputedStyle(curEle, null)[attr];
 } else {
 //->IE低版本浏览器中，如果传递进来的是opacity，我们需要使用filter来处理
 if (attr.toLocaleLowerCase() === "opacity") {
 val = curEle.currentStyle["filter"];//->"alpha(opacity=xxx)"我们需要在得到的结果中获取到数字（0~100之间的整数或者小数，把获取的结果除以100和opacity就一致了）
 //     reg = /^alpha\(opacity=(.+)?)\)$/;
 reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
 val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
 } else {
 val = curEle.currentStyle[attr];
 }
 }
 reg = /^-?\d+(\.\d+)?(px|em|rem)?$/i;
 val = reg.test(val) ? parseFloat(val) : val;
 return val;
 }*/
//--------------------------------------------
//最终版本
function getCss(curEle, attr) {
    //=>验证必传项
    if (typeof curEle === "undefined" || typeof attr === "undefined") {
        throw  new ReferenceError("传递的参数有误，要求curEle或者attr必须传递！");
    }

    var val = null,
        reg = null;
    if ("getComputedStyle" in window) {
        val = window.getComputedStyle(curEle, null)[attr];// -> null 伪类
    } else {
        if (attr.toLocaleLowerCase() === "opacity") {
            val = curEle.currentStyle["filter"];
            reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
            val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
        } else {
            val = curEle.currentStyle[attr];
        }
    }
    reg = /^-?\d+(\.\d+)?(px|em|rem)?$/i;
    val = reg.test(val) ? parseFloat(val) : val;
    return val;
}