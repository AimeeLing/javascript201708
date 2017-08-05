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
Fn.prototype.y = 200;
Fn.prototype.sum = function () {
    console.log(this.x + this.y);
};
var f = new Fn;
var f2 = new Fn;
console.log(f.sum === Fn.prototype.sum);//true
f.sum();// ->f首先通过原型链找到原型上sum这个公有方法，然后让这个方法执行 this:f    =>30
Fn.prototype.sum();//->this:Fn.prototype   =>300
console.log(f.constructor);//->Fn
