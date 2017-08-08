/**
 * Created by weeb on 2017/8/7.
 */
var mallItem = document.getElementById("mallItem");
//get data
var proData = null;
var xhr = new XMLHttpRequest;
xhr.open("GET", "json/product.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        proData = utils.toJSON(xhr.responseText);
    }
};
xhr.send(null);
//bind data
var str = ``;
for (var i = 0; i < proData.length; i++) {
    var curItem = proData[i];
    str += `<li>
            <a href="#">
                <img src="${curItem.img}" alt="樱桃小丸子">
                <span class="title">${curItem.title}</span>
                <span class="price">￥${curItem.price}</span>
            </a>
        </li>`;
}
mallItem.innerHTML = str;



