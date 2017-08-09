/**
 * Created by weeb on 2017/8/9.
 */

var str = "my name is {0},I am {1} years old,I can {2}.";
var ary = ["Fancy", 18, "js"];

str = str.replace(/\{(\d+)\}/g,function () {
    //console.log(arguments[0]);
    // ->arguments[0]本次大正则捕获的内容
    // ->arguments[1] 本次第一个小分组捕获的内容
    return ary[arguments[1]];

});
console.log(str);