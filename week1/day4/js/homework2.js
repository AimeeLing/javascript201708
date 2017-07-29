/**
 * Created by weeb on 2017/7/29.
 */
var i = 1;//i+=2 ->i=i+2 ->3
function fn() {
    i += 2;
    return function (n) {
        console.log(n + (++i));
    }
}
var f = fn();
f(1);//5 i=4
fn()(2);//9 i=6
f(3);//11 i=8
fn()(4);//15 i=10