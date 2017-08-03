/**
 * Created by weeb on 2017/8/3.
 */
/**
 * toArray：把类数组转换为数组（jQuery）
 * @param likeAry:[object] like array
 * @return [Array] an array
 * by Fancy on 2017-08-03
 */
function toArray(likeAry) {
    var ary = [];
    try {
        //->如果不报错代表兼容
        ary = Array.prototype.slice.call(likeAry);
    } catch (e) {
        //->报错进入catch，代表不兼容（IE6~8）
        for (var i = 0, len = likeAry.length; i < len; i++) {
            ary[ary.length] = likeAry[i];
        }
    }
    return ary;
}
