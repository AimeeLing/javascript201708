/**
 * Created by weeb on 2017/8/2.
 */
var ary = [12, 23, 24, 25, 35, 14, 16];
/*
 * 借用Math.max方法，利用apply传递参数是一个数组的原理，实现获取数组中的最大值(排序法和假设法)
 * */
var max = Math.max.apply(null, ary);//->apply：虽然写的时候传递的是一个数组，但是也相当于再给max方法一个个传递参数；此处不需要操作this，所以this改为谁都无所谓；
console.log(max);
var min = Math.min.apply(null, ary);
console.log(min);
