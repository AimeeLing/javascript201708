/**
 * Created by weeb on 2017/8/19.
 */
var minL = 0,
    maxL = utils.win("clientWidth") - box.offsetWidth;
move(maxL);

function move(target) {
    //->首先区分是向左还是向右
    //1、如果当前的left值 <= 目标值target(向右)
    //2、如果当前的left值 >= 目标值target（向左）
    var curL = utils.css(box, "left"),
        dir = curL <= target ? "right" : "left";
    //->设置定时器实现运动即可
    var step = 10;
    box.timer = window.setInterval(function () {
        var curL = utils.css(box, "left"),
            isEnd = false;
        // dir==="right"?
        if (dir === "right") {
            if (curL + step >= target) {
                isEnd = true;
            }
        } else {
            if (curL - step <= target) {
                isEnd = true;
            }
        }
        if (isEnd) {
            utils.css(box, "left", target);
            window.clearInterval(box.timer);
            //->到边界控制下一次运动
            dir === "right" ? move(minL) : move(maxL);
            return;
        }
        utils.css(box, "left", dir === "right" ? curL + step : curL - step);
    }, 17);
}
//->课后思考：回去后使用setTimeout实现这个需求（在视频中有：关于函数嵌套函数的一些性能作用域优化问题）