/**
 * Created by weeb on 2017/8/5.
 */
var productData = null;
var xhr = new XMLHttpRequest;
xhr.open("GET", "json/product.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        productData = utils.toJSON(xhr.responseText);
    }
};

xhr.send(null);
var htmlStr = ``;
for (var i = 0; i < productData.length; i++) {
    var curItem = productData[i];
    htmlStr += `<li>
                <a href="#">
                    <img src="${curItem.img}" alt="">
                    <span class="title">${curItem.title}</span>
                    <span class="price">￥${curItem.price}</span>
                </a>
            </li>`;
}
document.getElementById("mallItem").innerHTML = htmlStr;
