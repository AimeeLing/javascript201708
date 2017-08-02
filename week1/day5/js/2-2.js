/**
 * Created by weeb on 2017/7/30.
 */
function Person(name, age) {
    // ->this：当作构造函数执行的时候，函数体中出现的this是当前类的一个实例
    this.name = name;// ->给当前的实例对象增加一个name的属性
    this.age = age;
    this.say = function () {
        console.log("My name is " + this.name + ",I am " + this.age + " years old!");
    }
}
var p1 = new Person("Junior", 20);
//console.dir(p1);
var p2 = new Person("Fancy", 18);
//console.dir(p2);
//console.dir("say" in p1);//true 有这个属性就是私有属性
//console.log(p1.say === p2.say);//false 构造函数体中出现的this.xxx=xxx，都是给当前的实例增加一些私有的属性
p1.say();//->this：p1
p2.say();//->this：p2
//---------------------------------------------------------------
// =>instanceof：检测当前对象（实例）是否属于这个类的运算符
// console.log(p1 instanceof Person);//->true
// console.log(p1 instanceof Array);//->false

// var a=/^$/;
// console.log(a instanceof Array);//false
// console.log(a instanceof RegExp);//true

//--------------------------------------------------------------
// =>in：检测某一个属性是否隶属于某一个对象
console.log("say" in p1);// ->true

// =>hasOwnProperty：检测某一个属性是否为当前对象的私有属性
console.log(p1.hasOwnProperty("say"));//true

/**
 * hasPublicProperty：检测当前的这个属性是否为实例的公有属性
 * @param key：[string] 要检测的属性
 * @param obj：[object] 要检测的对象
 * @return
 *  true false
 *  by Fancy on 2017-07-30
 */
function hasPublicProperty(key, obj) {//->是否为它的公有属性
    return (key in obj) && !obj.hasOwnProperty(key);// ->返回  key是它的属性并且不是私有的属性
}
console.log(hasPublicProperty("say", p1));//false 要么不是属性要么不是公有的  ?
console.log(hasPublicProperty("toString", p1));//true 既是属性也是公有的   ?