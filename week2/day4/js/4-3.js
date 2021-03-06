/**
 * Created by weeb on 2017/8/5.
 */
Array.prototype.slice = function () {
    //->this:ary
    //=>native code：实现数组的克隆
    var newAry = [];
    for (var i = 0; i < this.length; i++) {
        newAry[newAry.length] = this[i];
    }

    //=>我们自己写的把类数组转换为数组
    var ary = [];
    for (var i = 0; i < arguments.length; i++) {
        ary[ary.length] = arguments[i];
    }

    //->通过对比发现：如果能够让slice执行，并且让slice中的this变为我们要操作的arguments，也就相当于把arg转换为数组了，我们之前写的那些循环代码就没必要写了（类数组虽然不是数组，但是它的结构和数组太相似了，很多操作的js代码都是一样的）

    return newAry;
};
var ary = [12, 23];
var newAry = ary.slice();
