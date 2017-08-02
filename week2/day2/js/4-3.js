/**
 * Created by weeb on 2017/8/2.
 */
function queryAvg() {
    //->1、把arguments转换为数组
    //->执行内置的slice方法，让this变为arg，可以实现把类数组转化为数组
    //=>执行内置的slice
    //Array.prototype.slice();//一般使用这种方式
    // [].__proto__.slice();
    // [].slice();
    var ary = Array.prototype.slice.call(arguments);
    //->2、给数组排序，去掉首位（最大值和最小值）
    ary.sort(function (a, b) {
        return a - b;
    }).shift();
    ary.length--;
    //->3、剩下的值求和，除以数组剩下的长度，求出平均数，最后返回
    return (eval(ary.join("+")) / ary.length).toFixed(2);
}
var res = queryAvg(9.8, 8.8, 9, 9.2, 9.5, 8.6, 7, 7.8, 9, 8.8);
console.log(res);