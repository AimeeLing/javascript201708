/**
 * Created by weeb on 2017/8/1.
 */
"use strict";// ->开启js的严格模式：需要写在当前作用域的起始行
/*
 * 1、严格模式和非严格模式的区别：
 *   ->非严格模式下,创建一个变量如果不带var，相当于给window加了一个属性，不会报错的
 *
 *   ->严格模式下，不允许出现不带var的变量
 *
 * */
a = 12;
console.log(a);//->Uncaught ReferenceError: a is not defined

var b = 13;
console.log(window.b);
