/**
 * Created by weeb on 2017/7/30.
 */
function Person() {
    var num = 100;//->num仅仅是当前Person作为普通函数执行的时候声明的一个私有变量而已，只有this.xxx=xxx的操作才和当前的实例有关系，私有变量这些和实例是没有必然的关系的
    this.name = "Junior";
    this.age = 20;
    this.say = function () {
        console.log("My name is " + this.name + ",I am " + this.age + " years old!");
    };
}
var p1 = new Person;// ->函数：普通函数/类/对象（三种角色：之间没有关系）
console.log(p1.name);// ->"Junior"
console.log(p1.num);// ->undefined  p1没有num这个属性，所以结果为undefined（属性就是特征，一个事物没有特征是不会报错的）

