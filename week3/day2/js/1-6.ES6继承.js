/**
 * Created by weeb on 2017/8/9.
 */
class Parent {
    constructor() {
        this.x = 100;
    }

    getX() {
        console.log(++this.x);
    }
}
class Child extends Parent {
    constructor() {
        super();//->call继承
        this.y = 200;
    }

    getY() {
        console.log(--this.y);
    }
}
var c = new Child();
console.log(c);