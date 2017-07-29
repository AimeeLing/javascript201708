/**
 * Created by weeb on 2017/7/29.
 */
var i = 1;//3,4,7，10，11
function fn() {
    i += 2;
    return function (n) {
        console.log(n + (i++));
    }
}
var f = fn();
f(1);//4
fn()(2);//8
fn()(4);//13
f(3);//13