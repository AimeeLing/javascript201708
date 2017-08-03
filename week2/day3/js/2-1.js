/**
 * Created by weeb on 2017/8/3.
 */
/*console.log(a);//->Uncaught ReferenceError: a is not defined 它报错，下面代码不执行了
 var b = 13;
 console.log(b);*/

//----------------------------------------------------
/*
 try {
 console.log(a);
 } catch (e) {
 console.log(e.message);//->报错信息
 }
 var b = 13;
 console.log(b);//->13*/

//---------------------------------------------------
//->很多公司，会把项目代码最外面包裹一层try catch，以此来收集错误信息，而且还不会在浏览器控制台抛出异常错误
//->还有公司是每个开发者把自己的代码包裹起来，或者经常容易出现问题的代码包裹起来
//==>最后的目的都是收集错误信息
/*try {
    //->项目的所有js代码
} catch (e) {
    //->收集报错信息：统计到服务器上
}*/

//----------------------------------------------------
//->手动在浏览器中抛出异常信息
/*
 * 使用try catch捕获异常信息的时候，后面代码还可以继续执行，但是项目中难免会出现这样的需求：我们上面代码如果不能正常的执行，下面代码也不让它执行了，此时需要我们手动抛出异常来阻止下面代码的执行
 * */
//throw new Error("您的人品欠费，请充值~~");//->创建Error类的一个实例：一条错误信息 [抛出一个Error类的实例]
/*
 * Error这个类划分了几个常用的小类：
 *   ->ReferenceError：引用错误
 *   ->TypeError：类型错误
 *   ->RangeError：范围错误
 *   ->SyntaxError：语法错误
 *   ...
 * */
//throw new Error("当前网络繁忙，请稍后重试！~~");
try{
    console.log(a);
}catch (e){
    //e.message;
    throw new ReferenceError("当前网络繁忙，请稍后重试！");
}