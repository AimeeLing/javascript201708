/**
 * Created by weeb on 2017/8/5.
 */
//=>去掉一个最高分，去掉一个最低分，剩余的求平均分
function avg() {
    //->1、把arg类数组转换为数组
    var ary = [];
    for (var i = 0; i < arguments.length; i++) {
        // ary.push(arguments[i]);
        ary[ary.length] = arguments[i];
    }

    //->2、把数组排序：去掉第一个和最后一个
    ary.sort(function (a, b) {
        return a - b;
    }).shift();
    ary.length--;

    //->3、数组中剩下的值求和
    var total = null;
    for (var j = 0; j < ary.length; j++) {
        total += ary[j];
    }

    //->4、求出平均数
    return parseFloat((total / ary.length).toFixed(2));
}
var res = avg(90, 75, 88, 100, 98, 97);
console.log(res);
