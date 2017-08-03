/**
 * Created by weeb on 2017/8/3.
 */
var ary = ["Junior", "Fancy", "樱桃小丸子", "曹文博", "小玲子"];
ary.sort(function (a, b) {
    // return a - b;
    return a.localeCompare(b);
    // return 1;
});
console.log(ary);

//-> localCompare：可以做字符串的比较，按照拼音字母在字母表中的顺序排列，越靠后的字母越大
//"Junior".localeCompare("Fancy") => 1
//"Fancy".localeCompare("Junior") => -1