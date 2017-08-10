/**
 * Created by weeb on 2017/8/10.
 */
/**
 * setCss 给某个元素的某一个样式属性设置一个值
 * @param curEle 当前需要操作的元素[object]
 * @param attr 需要获取的样式属性名[string]
 * @param value 设置的值
 * curEle['style'][attr] = value  => 我们在js中设置元素的样式值，都只能把样式写在元素的行内样式上
 */
/*function setCss(curEle, attr, value) {
 curEle['style'][attr] = value;
 }*/
//=>完善：在执行这个方法的时候，如果传递的val值没有设置单位，我们根据情况手动的加单位px
/*
 * ->如果传递进来的是 width|height|margin|padding|margin(top|right|bottom|left)|padding(top|right|bottom|left)|top|right|bottom|left...
 * ->传递进来的值是传数字
 *
 * 符合这两个的条件的，我们默认就把单位给加上即可
 * */
//------------------
/*function setCss(curEle, attr, value) {
 //->给value设置单位
 var reg = /^(width|height|((margin|padding)?(top|right|bottom|left)?))$/i;
 if(reg.test(attr)){
 if(!isNaN(value)){
 value+="px";
 }
 }
 curEle['style'][attr] = value;
 }*/
//=>完善：我们对于一些不兼容的样式属性，在设置的时候，需要把所有的兼容情况考虑到
//-----------------------
function setCss(curEle, attr, value) {
    //->float(处理或不处理都无所谓)
    if (attr.toLocaleLowerCase() === "float") {
        curEle["style"]["cssFloat"] = value;
        curEle["style"]["styleFloat"] = value;
        return;
    }

    //->opacity兼容处理
    if (attr.toLocaleLowerCase() === "opacity") {
        curEle["style"]["opacity"] = value;
        curEle["style"]["filter"] = 'alpha(opacity=' + value * 100 + ')';
        return;
    }

    //->给value设置单位
    var reg = /^(width|height|((margin|padding)?(top|right|bottom|left)?))$/i;
    if (reg.test(attr)) {
        if (!isNaN(value)) {
            value += "px";
        }
    }
    curEle['style'][attr] = value;
}
console.log(setCss(document.body, "opacity", 0.2));

/**
 * setGroupCss 批量设置一个元素的样式属性
 * @param curEle 当前要操作的元素
 * @param options [object] 对象中包含需要设置的样式属性
 * {
 *  width:100,
 *  height:200,
 *  ...
 * }
 */
function setGroupCss(curEle, options) {
    //->必须保证options是一个大括号包起来的对象(纯粹的对象)
    /*if (Object.prototype.toString.call(options) === "[object Object]") {//->({}).toString.call(options)
     return;
     }*/
    if (!checkType.isPlanObject(options)) return;
    for (var attr in options) {
        if (options.hasOwnProperty(attr)) {
            var value = options[attr];
            setCss(curEle, attr, value);
        }
    }

}
setGroupCss(box,{
    width:200,
    height:200,
    margin:50,
    background:"pink",
    border:"10px solid yellow"
});
