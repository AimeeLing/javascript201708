/**
 * Created by weeb on 2017/8/1.
 */
//"use strict";// ->当前整个js代码都开启了严格模式
var a = 12;
function fn() {
    "use strict";// ->只有在这个私有作用域中才会开启严格模式
    b = 100;
    console.log(b);// ->Uncaught ReferenceError: b is not defined
}
fn();
c = 10;
console.log(c);// ->10

/*
~function () {
    "use strict";//一般项目中
}();*/
