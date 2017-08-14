/**
 * Created by weeb on 2017/8/12.
 */
function setCss(curEle, attr, value) {
    if (attr.toLowerCase() === "opacity") {
        curEle.style.opacity = value;
        curEle.style.filter = 'alpha(opacity=' + (value * 100) + ')';
        return;
    }
    var unitReg = /^(opacity|zIndex|fontWeight)$/i;
    if (!isNaN(value) && !unitReg.test(attr)) {
        value += "px";
    }
    curEle["style"][attr] = value;
}

//->批量设置元素的样式
function setGroupCss(curEle, options) {//options：选项，参数项（对象）
    if (Object.prototype.toString.call(options) !== "[object Object]") return;//->说明options不是个纯对象（{用大括号包起来的对象}）
    for (var attr in options) {
        if (options.hasOwnProperty(attr)) {
            setCss(curEle, attr, options[attr]);
        }
    }
}
setGroupCss();