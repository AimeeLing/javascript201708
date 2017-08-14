/**
 * Created by weeb on 2017/8/12.
 */
var oBox = document.getElementById("box"),
    boxImg = oBox.getElementsByTagName("img")[0];
window.onscroll = function () {
    var A = utils.win("clientHeight") + utils.win("scrollTop");
    var B = oBox.offsetHeight + utils.offset(oBox)["top"];
    if (A >= B) {
        if (boxImg.isLoad) return;
        boxImg.isLoad = true;
        //->以下是直接的使用页面中的img来操作的，会存在一个问题：如果加载不成功，我们把错误的地址也赋值给页面img的src了，这样不好；真实的项目中，我们都是先临时创建一个img，来试加载真实的图片，如果能加载我们再把地址给页面中的img，不能加载我们则不做处理
        /*var trueImg = boxImg.getAttribute("data-src");
         boxImg.src = trueImg;
         boxImg.onload = function () {
         utils.css(this, "display", "block");
         };*/
        // var oTempImg = document.createElement("img");
        var oTempImg = new Image;//=>等同于上面的方式，临时创建一张图片
        oTempImg.src = boxImg.getAttribute("data-src");
        oTempImg.onload = function () {
            //->this:oTempImg
            boxImg.src = this.src;
            utils.css(boxImg, "display", "block");
            oTempImg = null;
        };
    }
};

