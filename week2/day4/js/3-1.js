/**
 * Created by weeb on 2017/8/5.
 */
//=>方法一
var ary = [12, 23, 14, 25, 23, 14, 12, 15];
ary.sort(function (a, b) {
    return a - b;
});
console.log(ary[0], ary[ary.length - 1]);
