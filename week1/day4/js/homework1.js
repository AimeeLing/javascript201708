/**
 * Created by weeb on 2017/7/29.
 */
var i = 12;//13
function fn() {
    i = 13;
    return function (n) {
        console.log(n + (++i));
    }
}
var f = fn();
f(10);//24
fn()(10);//24
f(20);//35
fn()(20);//34
