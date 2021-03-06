/**
 * Created by weeb on 2017/8/12.
 */
var utils = (function () {
    var ary = null;

    function toArray(likeAry) {
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
        return "JSON" in window ? JSON.parse(str) : eval('(' + str + ')')
    }

    return {
        toArray: toArray,
        toJSON: toJSON
    }
})();