/**
 * Created by weeb on 2017/8/2.
 */
var obj = {
    total: 0
};
function sum(num1, num2) {
    //var total = num1 + num2;
    //this.total = total;
    this.total = num1 + num2;
    //console.log(this, total);
}
// sum(10, 20);//->this:window  =>window.total=30
// obj.sum(10, 20);//Uncaught TypeError: obj.sum is not a function  obj不具备sum这个属性，所以不可以通过这种方式把方法中的this修改为obj
//=> sum.call：sum这个实例通过原型链的查找机制，找到Function.prototype的call方法
// sum.call();：基于上一步，把找到的方法执行（执行的是call这个方法）
/*call方法作用：
 * -> 把需要操作函数中的this变为第一个实参的值
 *    [非严格模式下]
 *       第一个实参为空或者写null或者undefined，this都是window，剩下的第一个实参是谁，this就是谁
 *
 *    [严格模式下]
 *     第一个实参为空，this是undefined，其余的写谁this就是谁
 *
 * -> 改变为this后，把需要操作的函数执行即可
 * */
sum.call(obj, 10, 20);//->call执行的时候，首先让sum中的this变为obj，然后执行sum，把10和20传给sum
console.log(obj);
sum.call();
console.log(this);//->this:window  严格模式下 this:undefined
sum.call(null);//->this:window 严格模式下 this:null
sum.call(undefined)//->this:window 严格模式下 this:undefined
sum.call(1);//->this:1
// 严格模式下，写谁this就是谁，不写this就是undefined

/*
 * apply：它的语法等同于call，唯一的区别在于apply在给操作的函数传递实参的时候，不是一个个传递的，而是放在一个数组中一起传递的（但是也相当于在一个个的传参）
 * */

sum.call(obj, 10, 20);// ->call
sum.apply(obj, [10, 20]);// ->apply

/*
 * bind：它的语法和call一样，但是作用不一样
 *   ->bind 只是提前把函数中的this改变了，但是并没有立即把函数执行，它属于预先改变this（柯理化函数思想）
 * */
var obj2 = {name: "Junior"};
function fn() {

}
// window.setInterval(fn, 1000);//->每隔一秒执行一次fn
// window.setInterval(fn(), 1000);//->创建一个定时器，每隔1s钟执行的是fn执行的返回结果 =>undefined
// window.setInterval(fn.call(obj2), 1000);//->创建定时器的时候就把fn执行了，虽然改变了this，但是1s后执行的是fn的返回结果
window.setInterval(fn.bind(obj2), 1000);//->创建定时器的时候，提前把fn中的this设置为obj2，1s后执行的是fn


