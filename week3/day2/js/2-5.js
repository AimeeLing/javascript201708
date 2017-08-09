/**
 * Created by weeb on 2017/8/9.
 */
var str = "Hello,my name is Fancy,I am 18 years old,I come from mars!";
str = str.replace(/[^a-zA-Z]/g, "");
str = str.split("").sort(function (a, b) {
    return a.localeCompare(b);
}).join("");
var ary = str.match(/(.)\1*/g);
ary.sort(function (a, b) {
    return b.length - a.length;
});
var max = ary[0].length,
    res = [];
for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];
    if (cur.length !== max) break;
    res[res.length] = cur.substr(0, 1);
}
console.log(max + "<=>" + res);

