/**
 * Created by weeb on 2017/8/3.
 */
var ary = [{
    name: "Junior",
    age: 20,
    score: 66
}, {
    name: "Fancy",
    age: 18,
    score: 88
}, {
    name: "樱桃小丸子",
    age: 22,
    score: 99
}];
/*ary.sort(function (a, b) {
    return b.age - a.age;
});*/
/*ary.sort(function (a, b) {
    return a.score - b.score;
});*/
ary.sort(function (a, b) {
    return a.name.localeCompare(b.name);//字符串的比较：localeCompare
});
console.log(ary);