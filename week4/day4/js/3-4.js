/**
 * Created by weeb on 2017/8/19.
 */
//=>封装一个动画库：实现当前元素限定时间内的多方向匀速运动
~function () {
    //=>实现一个匀速运动的动画公式
    function Linear(t, b, c, d) {
        return t / d * c + b;
    }

    //=>封装一个实现动画的方法
    /**
     * @param curEle 当前要实现运动的元素
     * @param target 要运动的目标位置{xxx:xxx,xxx:xxx...}
     * @param duration 运动的总时间，不传递默认是1000ms
     */
    function animate(curEle, target, duration) {
        //1、获取t/b/c/d
        duration = duration || 1000;
        var time = 0,
            begin = {},
            change = {};
        for (var key in target) {//->itin [tab]
            if (target.hasOwnProperty(key)) {
                begin[key] = utils.css(curEle, key);
                change[key] = target[key] - begin[key];
            }
        }

        //->2、实现动画
        clearInterval(curEle.animateTimer);//->在设置新动画之前，把正在运行的其它动画都清除掉，防止多动画之间的冲突
        curEle.animateTimer = setInterval(function () {
            time += 17;
            //->4、结束动画
            if (time >= duration) {
                utils.css(curEle, target);
                clearInterval(curEle.animateTimer)
                ''
                return;
            }

            //->3、通过匀速公式获取每个方向的当前位置，让元素运动到这个位置
            var current = {};
            for (var key in target) {
                if (target.hasOwnProperty(key)) {
                    current[key] = Linear(time, begin[key], change[key], duration);
                }
            }
            utils.css(curEle, current);
        }, 17);

    }

    //=>5、暴露到全局使用
    window.animate = animate;
}();

animate(box, {
    top: 300,
    left: 500,
    width: 10,
    height: 10,
    opacity: 0.2
}, 5000);

animate(box, {
    top: 300,
    left: 500,
    width: 300,
    height: 300,
    opacity: 0.2
}, 500);
