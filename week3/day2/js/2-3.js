/**
 * Created by weeb on 2017/8/9.
 */
/*var str = '当前每月工资：16524';
var ary = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
str = str.replace(/\d/g, function () {
    console.log(arguments[0]);
    return ary[arguments[0]]
});
console.log(str);*/

var str = "12345";
var ary = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
str = str.replace(/\d/g, function () {
    return ary[arguments[0]];
});
console.log(str);


//->利用传统字符串循环
/*
 for (var i = 0; i < str.length; i++) {
 var cur = str[i];
 str=str.replace(cur,ary[cur]);
 }
 console.log(str);*/
