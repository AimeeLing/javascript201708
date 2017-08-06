/**
 * Created by weeb on 2017/8/6.
 */
var str1 = "";
var str2 = "零一二三四五六七八九";
var ary = [];
for (var i = 1; i <= 10; i++) {
    var obj = {};
    obj.id = i;
    obj.age = Math.round(Math.random() * (65 - 18) + 18);
    obj.name = "";
    ary.push(obj);
}
