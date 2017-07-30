/**
 * Created by weeb on 2017/7/30.
 */
function Person() {
    this.name = "Junior";
    this.age = 20;
    this.say = function () {
        console.log("My name is " + this.name + ",I am " + this.age + " years old!");
    }
    // return 1;// ->执行方法之后，自己想返回结果是1；->对最后结果不产生任何影响，返回的还是当前类的实例
    return { h:"嘿嘿"};// ->自己设置返回的内容会覆盖默认返回的内容，返回的结果将不再是当前类的实例了
}
var p1 = new Person();

//-----------------------------------------------------------------------------------
// =>我们不写return默认返回的是当前类的实例，如果我们手动编写了return，根据返回值的不一样，有不同的结果
// 1、返回 return 基本数据类型； ->对最后结果不产生任何影响，返回的还是当前类的实例
// 2、返回 return 引用数据类型； ->自己设置返回的内容会覆盖默认返回的内容，返回的结果将不再是当前类的实例了

// console.log(p1);// ->{ h:"嘿嘿"}
// console.log(p1 instanceof Person);// ->false



//------------------------------------------------------------------------------------
// var p2 = new Person;// ->如果不需要传递实参，我们是可以省略小括号的


// console.log(new Date());// ->创建Date类的一个实例：实例是当前客户端的时间
// console.log(new Date);// ->加不加小括号都可以
