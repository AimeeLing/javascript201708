/**
 * Created by weeb on 2017/7/29.
 */
var num = 2;
var obj = {num: 3};
obj.fn = (function (num) {
    this.num *= 2;
    num *= 2;
    return function () {
        this.num *= 2;
        num *= 3;
        console.log(num);
    }
})(obj.num);
var fn = obj.fn;
fn();//18
obj.fn();//54
console.log(num, obj.num);//8 6
