/**
 * Created by weeb on 2017/7/30.
 */
// ->基于内置类的原型扩展一个方法（数组去重完整版）
// [].__proto__ （在IE浏览器中屏蔽了__proto__的使用），一般js代码中是不使用这个属性的

// var ary = [];
// var ary2 = [];
// ary.push === ary.__proto__.push === Array.prototype.push
// ary.aa = 13; ->存储在ary的私有属性中，ary2是没有这个属性的
// ary.__proto__.bb=14; ->存储在类的原型上了，ary2也有这个属性了
// Array.prototype.cc = 15; ->所有数组都有这个cc的属性
// Array.prototype.forEach = function () {}; // ->这样做，把内置的方法修改了，为了避免这个问题，我们起名字的时候需要加前缀"my"
Array.prototype.myDistinct = function () {
    // ->this：current example(这个this就是当前类的实例)
    var obj = {};
    for (var i = 0; i < this.length; i++) {
        var cur = this[i];
        if (typeof obj[cur] !== "undefined") {
            this[i] = this[this.length - 1];
            this.length--;
            i--;
            continue;
        }
        obj[cur] = cur;
    }
    obj = null;//释放堆内存，清空obj
    return this;// ->链式写法的核心代码：此处返回的是去重后的数组，也是当前数组的实例
};
var ary = [1, 2, 3, 2, 3, 1, 2, 3];
ary.myDistinct().sort(function (a, b) {
    //return a - b;//a-b 升序
    return b - a;//b-a 降序
});
console.log(ary);

//-------------------------------------------------------------------------------------
// ary.sort()  .reverse().push(100);//->链式写法：执行完成一个方法后紧接着调取下一个方法执行，形成调取方法的一条链（jQuery的一个强大之处就是链式写法）
//
// ary.sort()  .reverse().push(100).pop();// ->Uncaught TypeError: ary.sort(...).reverse(...).push(...).pop is not a function 链式写法的原理：链式写法必须保证一个方法执行完成后的结果依然是当前类的实例，这样才可以继续调取方法，当前案例中，push执行完成返回的是新增后的长度（是一个数字），这样在调取pop的时候肯定报错
//
// console.log(ary);

// ary.myDistinct();//->this:ary


//快排
