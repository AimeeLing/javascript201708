/**
 * Created by weeb on 2017/8/2.
 */
//call源码
Function.prototype.myCall = function (context) {
    //->this:fn
    //->context:1
    //1、把fn中的"this关键字字符"变为1
    var _this = this;
    _this = eval(this.toString().replace(/this/g, context));
    //2、把fn执行
    _this();
};
fn.myCall(1);
