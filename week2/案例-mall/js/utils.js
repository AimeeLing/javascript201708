/**
 * Created by weeb on 2017/8/3.
 */
/**
 * utils：整个项目的公共方法库(单例模式封装)
 */
var utils = (function () {
    //->toArray：把类数组转换为数组
    function toArray(likeAry) {
        var ary = [];
        try {
            ary = [].slice.call(likeAry);
        } catch (e) {
            var len = likeAry.length;
            for (var i = 0; i < len; i++) {
                ary[ary.length] = likeAry[i];
            }
        }
        return ary;
    }

    //->toJSON：把JSON格式字符串转换为JSON对象(JQ)
    function toJSON(str) {
        return 'JSON' in window ? JSON.parse(str) : eval('(+str+)');
    }

    return {
        toArray: toArray,//->utils.toArray(likeAry);
        toJSON: toJSON//->使用的时候直接调用utils.toJSON(str);,转换哪个字符串(str)，就把哪个字符串(str)传入进去即可
    }
})();
/*utils.toArray();*/
