/**
 * Created by weeb on 2017/8/9.
 */
//->当前字符串中哪一个字母出现的次数最多，出现了多少次
var str = "Hello,my name is Fancy,I am 18 years old,I come from mars!";
var obj = {};
str = str.replace(/[a-zA-Z]/g, function () {
    var val = arguments[0];
    if (obj.hasOwnProperty(val)) {
        obj[val]++;
        return;
    }
    obj[val] = 1;
});
console.log(obj);//->{H: 1, e: 4, l: 3, o: 4, m: 6, …}

var max = 1;
for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        obj[key] > max ? max = obj[key] : null;
    }
}
console.log(max);

var ary = [];
for (key in obj) {
    if (obj.hasOwnProperty(key)) {
        obj[key] === max ? ary.push(key) : null;
    }
}
console.log(ary);
console.log('最多出现：' + max + '次，对应的字母分别为：' + ary.join('|'));