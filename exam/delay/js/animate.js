/**
 * Created by weeb on 2017/8/13.
 */
~function () {
    var newsData = null,
        xhr = new XMLHttpRequest;
    xhr.open("GET", "json/newList.json", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            newsData = utils.toJSON(xhr.responseText);
        }
    };
    xhr.send(null);
    var str = ``;
    for (var i = 0; i < newsData.length; i++) {
        var curItem = newsData[i];
        str += `<li>
                <div><img src="" alt="" data-src="${curItem.img}"></div>
                <h3>${curItem.title}</h3>
                <p>${curItem.desc}</p>
            </li>`;
    }
    document.getElementById("newsItem").innerHTML = str;
}();

~function () {
    function lazyImg(oImg) {
        if (oImg.isLoad) return;
        var A = utils.win("clientHeight") + utils.win("scrollTop"),
            oImgP = oImg.parentNode,
            B = oImgP.offsetHeight + utils.offset(oImgP)["top"];
        if (B <= A) {
            oImg.isLoad = true;

            var tempImg = new Image;
            tempImg.src = oImg.getAttribute("data-src");
            tempImg.onload = function () {
                oImg.src = this.src;
                utils.css(oImg, "display", "block");
                //->给img实现一个透明度从0-1的小动画
                moveImg(oImg);
            }
        }
    }

    //->实现突破的小动画（oImg：我们要操作的这张图片）
    function moveImg(oImg) {
        var start = 0,//->初始值是0
            step = 0.05;//->步长
        oImg.moveTimer = setInterval(function () {
            if (start >= 1) {
                clearInterval(oImg.moveTimer);
                return;
            }
            start += step;
            utils.css(oImg, "opacity", start);
        }, 17);
    }

    var newsItem = document.getElementById("newsItem"),
        imgList = newsItem.getElementsByTagName("img");

    function handleAllImg() {
        for (var i = 0; i < imgList.length; i++) {
            var curImg = imgList[i];

            lazyImg(curImg);
        }
    }

    window.onload = window.onscroll = handleAllImg;
}();
