/**
 * Created by weeb on 2017/8/9.
 */
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
//sort
~function () {
    var mallItem = document.getElementById("mallItem"),
        mallList = mallItem.getElementsByTagName("li");
    mallListAry = utils.toArray(mallList);
}();
