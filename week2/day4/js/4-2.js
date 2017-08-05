/**
 * Created by weeb on 2017/8/5.
 */
//=>去掉一个最高分，去掉一个最低分，剩余的求平均分
function avg() {
    //->1、把arg类数组转换为数组
    //->找到数组原型上的slice，让其执行，并且让里面的this变为arg即可“把类数组转换为数组”
    //->js中的元素集合（HTMLCollection）和节点集合（NodeList）也都是类数组，在IE9及以上浏览器中也可以这样操作，把其转换为数组，但是在IE6~8下这样执行就会报错，不兼容（arg这样操作兼容所有的浏览器） =>对于元素和节点集合在IE6~8下只能是用最笨的循环操作了
    /*
    * 如果想实现一个将类数组转换为数组的方法，需要使用两种方式，先使用[].slice.call()，如果报错了，再使用循环即可
    * ->既能检测出代码报错还不会抛出异常信息，不会终止下面的代码执行：try catch finally 浏览器的异常信息捕获
    * */

    //=>Array.prototype.slice
    //=>[].__proto__.slice(IE下屏蔽了__proto__的使用)
    //=>[].slice
    var ary = [].slice.call(arguments);//->借用数组原型上的方法

    //->2、把数组排序：去掉第一个和最后一个
    ary.sort(function (a, b) {
        return a - b;
    }).shift();
    ary.length--;

    //->3、数组中剩下的值求和
    // var total = eval(ary.join("+"));
    //->4、求出平均数
    return parseFloat((eval(ary.join("+")) / ary.length).toFixed(2));
}
var res = avg(90, 75, 88, 100, 98, 97);
console.log(res);
