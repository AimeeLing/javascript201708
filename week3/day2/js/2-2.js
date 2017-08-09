/**
 * Created by weeb on 2017/8/9.
 */
var str = 'zhu2017feng2018pei2019xun2020';
var reg = /\d+/g;
str = str.replace(reg,function(){
    // console.log('ok');//->'ok'*4  正则匹配了四次，我们传递的函数也执行了四次

    console.log(arguments);
    //->第一次 ["2017", 3, "zhu2017feng2018pei2019xun2020", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    //->第二次 ["2018", 11, "zhu2017feng2018pei2019xun2020", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    //->第三次 ["2019", 18, "zhu2017feng2018pei2019xun2020", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    //->第四次 ["2020", 25, "zhu2017feng2018pei2019xun2020", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    // arguments[0] ->当前本次大正则捕获的内容
    // => 每当执行这个方法的时候，浏览器都会把使用exec捕获到的结果作为市场传递给这个函数
    return '@';
});
console.log(str);//->zhu@feng@pei@xun@