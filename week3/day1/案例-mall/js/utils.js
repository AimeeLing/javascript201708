/**
 * Created by weeb on 2017/8/8.
 */
var utils = (function () {
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

    function toJSON(str) {
        return "JSON" in window ? JSON.parse(str) : eval('(' + str + ')');
    }

    return {
        toArray: toArray,//->toArray属性对应的是toArray方法
        toJSON: toJSON
    };
})();