/**
 * Created by weeb on 2017/8/5.
 */
var obj = {name: "obj"};
var ary = [12, 23];
function fn(num) {
    console.log(this, num);
}
// fn.bind(obj, 10, 20);

// window.setInterval(fn, 1000);//->1s后this:window num:undefined

// window.setInterval(fn.call(obj, 100), 1000);//->创建定时器的时候就把函数执行了，当1s后，定时器执行的是函数的返回值（undefined）

// window.setInterval(fn.bind(obj, 100), 100=0);//->1s:this->obj num:100

document.body.onclick = fn;//->this:document.body
document.body.onclick = fn.call(obj);//->document.body.onclick = undefined;
document.body.onclick = fn.bind(obj);//->this:document.obj


/*
 * bind方法总结
 *   ->语法：[函数].bind([context],parameter1,parameter2...) 语法上和call一模一样（IE6~8下不兼容）
 *
 *   ->作用：
 *      提前把函数中的this修改为第一个实参的值，但是和call/apply的区别在于，此时的函数并没有执行；也就是说bind只是提前修改this的指向，我们把这种预先处理的思想，称之为“柯里化函数思想”
 * */