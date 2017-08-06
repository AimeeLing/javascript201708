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


    return {
        toArray: toArray,
        toJSON: toJSON
    }
})();
// utils.toArray(likeAry);