/**
 * Created by weeb on 2017/8/5.
 */
var utils = (function () {
    function toJSON(str) {
        return "JSON" in window ? JSON.parse(str) : null;
    }

    return {
        toJSON: toJSON
}
})();
