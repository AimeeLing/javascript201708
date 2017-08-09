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
    var obj = new Parent();
    /*
     * obj
     *   x:100
     *   __proto__:
     *       getX:function...
     *       constructor:Parent
     *       __proto__:Object
     * */
    // =>for in循环既可以遍历一个对象私有的属性和方法，也可以遍历部分原型链上的属性和方法（所有可枚举的都可以遍历，不可枚举的不能遍历）【枚举就是遍历 ->enumerable:true】 =>一般内置的属性和方法是不能枚举出来的
    for (var key in obj) {
        // console.log(key);
        // console.log(Object.getOwnPropertyDescriptor(obj, key));
        // this[key] = Object[key];//->把父类私有的和公有的都变为子类私有的属性和方法（遗传式继承：把父类的东西克隆一份过来，继承后子类和父类没有关系了）
        // Child.prototype[key]=obj[key];//->都变为子类公有的

        //->私有的是私有的，公有的是公有的
        if (obj.hasOwnProperty(key)) {
            this[key] = Object[key];
        } else {
            Child.prototype[key] = obj[key];
        }
    }
}
Child.prototype.getY = function () {
    console.log(--this.y);
}
var c = new Child();
// console.log(c);
