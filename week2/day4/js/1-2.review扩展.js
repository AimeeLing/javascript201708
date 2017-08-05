/**
 * Created by weeb on 2017/8/5.
 */
Object.prototype.x = 100;
function Fn() {
    /*
     * new Fn执行的时候
     *   1.像普通函数执行一样：形成的一个私有的作用域
     *   2.形参赋值 && 变量提升
     *   3.浏览器会在当前作用域中开辟一个新的对象（当前类的一个实例），并且让当前作用域的上下文（this）变为这个实例对象
     *   4.代码自上而下执行
     *       this.xxx=xxx; =>给当前实例增加一些私有的属性
     *       var xxx=xxx;  =>给私有作用域设置私有变量呢，和实例没有关系，只有贴上this的才和实例有关系
     *   5.即使浏览器不写return，也会默认的把创建的实例返回
     *       return 值类型；   =>返回的依然是实例
     *       return 引用类型； =>自己返回的值会把默认返回的实例给覆盖掉，返回的结果就不再是实例了
     * */
    this.x = 10;
    this.y = 20;
    this.minus = function () {
        console.log(this.x - this.y);
    }
}
//->给原型上增加属性和方法，以下这种模式有点麻烦
// Fn.prototype.y = 200;
// Fn.prototype.sum = function () {
//     console.log(this.x + this.y);
// };

//->给比较冗长的原型起一个比较短的“小名”
// var pro = Fn.prototype;
// pro.y = 200;
// pro.sum = function () {}

/*with (Fn.prototype) {//耗性能，禁止使用
 y = 200;
 sum = function () {

 }
 }*/

//->重新给原型开辟一个内存空间，实现批量设置属性和方法
/*
* 问题：自己开辟的新对象中是没有constructor属性的（浏览器默认给原型开辟的那个空间是有这个属性的） ->这样会让现有f.constructor=Object而不是之前的Fn了 ->改变constructor不好
*
* 解决：
*   在新开辟的对象中手动增加constructor
* */
//->当前这种模式对内置类无效，因为此赋值方法如果对内置类有效，这样会导致内置类的原型遭到毁灭性修改
Fn.prototype = {
    constructor:Fn,
    y: 200,
    sum: function () {
        console.log(this.x - this.y);
    }
}

var f = new Fn;
var f2 = new Fn;

