/**
 * Created by weeb on 2017/8/9.
 */
function Parent() {
    this.x = 100;
}
Parent.prototype.getX = function () {
    console.log(++this.x);
}

function Child() {
    this.y = 200;//->this:c
}
Child.prototype = new Parent();//->写在第一步，后续再向子类的原型上增加一些属于自己的属性和方法（防止覆盖原有的属性和方法）
Child.prototype.constructor = Child;//->防止constructor改变，我们手动增加
Child.prototype.getY = function () {
    console.log(--this.y);
}
var c = new Child();//->子类通过原型链修改了父类原型上的方法 =>重写
console.log(c);

