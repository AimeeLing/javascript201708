/**
 * Created by weeb on 2017/8/2.
 */
/*
 * 需求：在内置的原型上重写slice，实现数组克隆即可
 * */
Array.prototype.slice = function slice() {
    //->this:ary
    var aryNew = [];
    for (var i = 0; i < this.length; i++) {
        aryNew.push(this[i]);
    }
    //->arguments克隆成为数组
    var ary = [];
    for (var i = 0; i < arguments.length; i++) {
        ary.push(arguments[i]);
    }

    //=>通过对比，我们发现，我们实现的把arg变为数组的代码和内置的slice克隆代码很相近（arg的结构和数组一样），唯一的区别是，内置slice用的是this，我们用的是arg
    //=>>如果我们能把内置的slice方法执行，并且让方法中的this变为我们的arg，那么这样不就相当于把我们的arg克隆成为一个新数组，这样不需要我们自己辛辛苦苦写循环了
    //=>>>我们的这种思想是：让类数组借用数组原型上的方法，方法执行的时候让this变为类数组，实现将类数组转换为数组
    return aryNew;
};
var ary = [12, 23, 34];
var newAry = ary.slice()
