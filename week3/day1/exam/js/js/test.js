/**
 * Created by weeb on 2017/8/9.
 */
~function () {
    //get data
    var productData = null;
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "json/product.json", false);
    xhr.onreadystatechange = function () {
        xhr.readyState === 4 && xhr.status === 200 ? productData = utils.toJSON(xhr.responseText) : null;
    };
    xhr.send(null);
//bind data
    var str = ``;
    for (var i = 0; i < productData.length; i++) {
        var curItem = productData[i];
        str += `<li data-time="${curItem.time}" data-price="${curItem.price}" data-hot="${curItem.hot}"><a href="#"><img src="${curItem.img}" alt="${curItem.title}"><span class="title">${curItem.title}</span><span class="price">￥${curItem.price}</span></a></li>`;
        document.getElementById("mallItem").innerHTML = str;
    }
}();
//sort
~function () {
    var mallItem = document.getElementById("mallItem"),
        mallList = mallItem.getElementsByTagName("li");
    mallListAry = utils.toArray(mallList);
    function sortGoods() {
        var _this = this;
        var ary = ["data-time", "data-price", "data-hot"];
        mallListAry.sort(function (cur, next) {
            var attr = ary[_this.index];
            var curTime = cur.getAttribute(attr);
            var nextTime = next.getAttribute(attr);
            curTime = curTime.replace(/-/g, "");
            nextTime = nextTime.replace(/-/g, "");
            return (curTime - nextTime) * _this.n;
        });
        var frg = document.createDocumentFragment();
        for (var i = 0; i < mallListAry.length; i++) {
            frg.appendChild(mallListAry[i]);
        }
        mallItem.appendChild(frg);
        frg = null;
    }

    var menu = document.getElementById("menu"),
        menuLink = menu.getElementsByTagName("a");
    for (var i = 0; i < menuLink.length; i++) {
        var curLink = menuLink[i];
        curLink.n = -1;
        curLink.index = i;
        curLink.onclick = function () {
            for (var j = 0; j < menuLink.length; j++) {
                var cur = menuLink[j];
                cur !== this ? cur.n = -1 : null;
            }
            this.n *= -1;
            sortGoods.call(this, this.index);
        }
    }
}();
