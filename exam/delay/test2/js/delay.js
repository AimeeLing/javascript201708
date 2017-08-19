/**
 * Created by weeb on 2017/8/19.
 */
~function () {
    //get data
    var newsData = null,
        xhr = new XMLHttpRequest;
    xhr.open("GET", "json/newList.json", false);
    xhr.onreadystatechange = function () {
        newsData = utils.toJSON(xhr.responseText);
    };
    xhr.send(null);

    //bind data
    var str = ``;
    for (var i = 0; i < newsData.length; i++) {
        var curItem = newsData[i];
        str += `<dl>
                <dt><img src="" alt="" data-src="${curItem.img}"></dt>
                <dd>
                    <h3>${curItem.title}</h3>
                    <p>${curItem.desc}</p>
                </dd>
            </dl>`;
    }
    document.getElementById("newsItem").innerHTML = str;
}();

~function () {
    //图片懒加载
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
                oImg.style.display = "block";
                moveImg(oImg);
            }
        }
    }

    function moveImg(oImg) {
        var start = 0,
            step = 0.05;
        oImg.moveTimer = window.setInterval(function () {
            if (start >= 1) {
                clearInterval(oImg.moveTimer);
                return;
            }
            start += step;
            oImg.style.opacity = start;
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


