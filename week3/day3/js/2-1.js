/**
 * Created by weeb on 2017/8/10.
 */
/*
 * offsetLeft / offsetTop / offsetParent
 * =>获取当前元素的左偏移 / 上偏移 / 父级参照物
 * */
/*1、offsetParent 获取当前元素的父级参照物
 ->在默认的情况下，body中出现的所有元素的父级参照物都是body（因为在同一个平面上），body本身的父级参照物是null
 ->我们通过设置position定位，可以让元素脱离文档流，从而改变元素的父级参照物（css中我们当前元素是相对于谁定位的，那么js中它的父级参照物就是谁）*/
/*
 2、offsetLeft 和 offsetTop ：当前元素距离其父级参照物的左偏移和上偏移
 在大部分浏览器中，这个距离是从当前元素的外边框开始到父级参照物的内边框结束（不含父级元素的边框）
 IE8（纯IE8，不是模拟器仿真），这个距离包含了父级参照物的边框，偏移量=当前元素的外边框到父级参照物的外边框*/

//->offset：获取当前元素距离body的左偏移和上偏移
//=>返回结果是一个对象{left:xxx,top:xxx}

function offset(curEle) {
    //->首先获取当前元素的左偏移和上偏移，以及它的父级参照物
    var l = curEle.offsetLeft,
        t = curEle.offsetTop,
        p = curEle.offsetParent;
    while (p) {
        //->首先累加父级参照物的边框(IE8下偏移量已经包含父级参照物的边框了，此时我们没必要再累加父级参照物的边框了)
        if(!/MSIE 8.0/i.test(navigator.userAgent)){//->navigator.userAgent 获取当前浏览器的详细版本信息，IE浏览器有特点：“MSIE [版本号]”
            l += p.clientLeft;
            t += p.clientTop;
        }

        //->其次还要继续累加父级参照物的偏移量
        l += p.offsetLeft;
        t += p.offsetTop;

        p = p.offsetParent;//->如果获取的父级参照物存在，就会一直向上查找，直到父级参照物不存在（说明已经找到body了）
    }
    //->最后把累加的l和p返回,代表当前元素距离body的左上偏移量
    return {
        left: l,
        top: t
    };
}
console.log(offset(center));