/**
 * Created by weeb on 2017/8/3.
 */
var ary = [12, 23, 14, 25, 23];
ary.sort(function (a, b) {
    // console.log(a, b);
    //->a：当前项
    //->b：后一项
    // return a - b;
    return 1;//->return后面不一定非要写a-b，它的原理是：如果返回的是一个大于0的数，当前项和后一项交换位置，如果小于等于0的值，不做任何的处理
});
// console.log(ary);