/**
 * Created by weeb on 2017/8/9.
 */
//->所有单词的首字母大写
var str = "hello,my name is Fancy,I am 18 years old,I come from mars!";
str = str.replace(/\b([a-z])[a-z]*\b/ig, function () {
    var arg = arguments;
    return arg[1].toUpperCase() + arg[0].substr(1);
});
console.log(str);