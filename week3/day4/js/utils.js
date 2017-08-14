/**
 * Created by weeb on 2017/8/5.
 */
//->utils：项目中常用的公共方法库
var utils = (function () {
    //->toArray：把类数组转换为数组
    function toArray(likeAry) {
        var ary = [];
        try {
            ary = [].slice.call(likeAry);
        } catch (e) {
            for (var i = 0; i < likeAry.length; i++) {
                ary[ary.length] = likeAry[i];

            }
        }
        return ary;
    }

    //->toJSON：把JSON格式的字符串转换为JSON格式的对象
    function toJSON(str) {
        return "JSON" in window ? JSON.parse(str) : eval('(' + str + ')');
    }

    function getCss(curEle, attr) {
        var val = null;
        if ("getComputedStyle" in window) {
            val = window.getComputedStyle(curEle, null)[attr];
        } else {
            if (attr.toLowerCase() === "opacity") {
                val = curEle.currentStyle["filter"];
                reg = /^alpha\(opacity=(.+)\)$/i;
                reg.test(val) ? reg.exec(val)[1] / 100 : 1;
            } else {
                val = curEle.currentStyle[attr];
            }

        }
        var temp = parseFloat(val);
        val = isNaN(temp) ? val : temp;
        return val;
    }

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

    function setGroupCss(curEle, options) {//options：选项，参数项（对象）
        if (Object.prototype.toString.call(options) !== "[object Object]") return;//->说明options不是个纯对象（{用大括号包起来的对象}）
        for (var attr in options) {
            if (options.hasOwnProperty(attr)) {
                setCss(curEle, attr, options[attr]);
            }
        }
    }

    function css() {
        var arg = arguments,
            len = arg.length,
            fn = getCss;
        if (len >= 3) fn = setCss;
        if (len === 2 && typeof arg[1] === "object") fn = setGroupCss;
        return fn.apply(null, arg);
    }
    //->offset：gets the offset of the current element distance BODY => {left:xxx,top:xxx}
    function offset(curEle) {
        var l = curEle.offsetLeft,
            t = curEle.offsetTop,
            p = curEle.offsetParent;
        while (p && p !== document.body) {
            if (!/MSIE 8/i.test(navigator.userAgent)) {
                l += p.clientLeft;
                t += p.clientTop;
            }
            l += p.offsetLeft;
            t += p.offsetTop;
            p = p.offsetParent;
        }
        return {left: l, top: t};
    }

    //->win：operate the box model properties about the browser
    function win(attr, value) {
        if (typeof value !== 'undefined') {
            document.documentElement[attr] = value;
            document.body[attr] = value;
            return;
        }
        return document.documentElement[attr] || document.body[attr];
    }



    return {
        toArray: toArray,
        toJSON: toJSON,
        css: css,
        offset: offset,
        win: win
    }
})();
// utils.toArray(likeAry);