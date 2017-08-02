/**
 * Created by weeb on 2017/8/2.
 */
var ary = [12, 23, 24, 25, 35, 14, 16];
/*
* 先由大到小排序
* */
ary.sort(function (a, b) {
    return b - a;
});
console.log(ary[0]);
