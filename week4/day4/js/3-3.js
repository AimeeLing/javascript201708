/**
 * Created by weeb on 2017/8/19.
 */
function Linear(t, b, c, d) {
    return t / d * c + b;
}

//->设定目标值
var target = {
    left: utils.win("clientWidth") - 50,
    top: utils.win("clientHeight") - 30,
    width:50,
    height:30,
    opacity:0.2
};

//->获取t、b、c、d
var time = 0,
    duration = 1000,
    begin = {},
    change = {};

for (var key in target) {
    if (target.hasOwnProperty(key)) {
        //->key：top/left
        begin[key] = utils.css(box, key);
        change[key] = target[key] - begin[key];
    }
}
// console.log(begin, change);
//->实现我们的动画
box.timer = setInterval(function () {
    time += 17;
    //->结束
    if (time >= duration) {
        utils.css(box, target);
        clearInterval(box.timer);
        return;
    }

    //->获取每一个方向的当前值
    var current = {};
    for (var key in target) {
        if (target.hasOwnProperty(key)) {
            //->key：top/left
            current[key] = Linear(time, begin[key], change[key], duration);
        }
    }
    // console.log(current);
    utils.css(box, current);
}, 17);

