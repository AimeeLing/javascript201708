/**
 * Created by weeb on 2017/8/8.
 */
~function () {
    var productData = null;
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "json/product.json", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            productData = utils.toJSON(xhr.responseText);
        }
    };
    xhr.send(null);

    var str = ``;
    for (var i = 0; i < productData.length; i++) {
        var curItem = productData[i];
        str += `<li data-time="${curItem.time}" data-price="${curItem.price}" data-hot="${curItem.hot}">
                <a href="#">
                    <img src="${curItem.img}" alt="樱桃小丸子">
                    <span class="title">${curItem.title}</span>
                    <span class="price">￥${curItem.price}</span>
                </a>
            </li>`;
    }
    document.getElementById("mallItem").innerHTML = str;
}();

//->实现商品排序：按照“上架时间、价格、热度”进行排序
~function () {
    var mallItem = document.getElementById("mallItem"),
        mallList = mallItem.getElementsByTagName("li");
    mallListAry = utils.toArray(mallList);
    function sortGoods(curIndex) {
        var attr="";
        switch (curIndex){
            case 0:
                attr="data-time";
                break;
            case 1:
                attr="data-price";
                break;
            case 2:
                attr="data-hot";
                break;
        }
        mallListAry.sort(function (cur, next) {

        })
    }
}();

