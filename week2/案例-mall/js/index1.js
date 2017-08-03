/**
 * Created by weeb on 2017/8/3.
 */
//->使用AJAX从服务器获取数据（JSON格式对象）
~function () {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "json/product.json", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log(xhr.responseText);
            window.productData = utils.toJSON(xhr.responseText);
        }
    };
    xhr.send(null);
}();

//->把数据绑定在页面中(ES6的模板字符串)
~function () {
    var str = ``;
    for (var i = 0; i < productData.length; i++) {
        var curItem = productData[i];
        str += `<li>
            <a href="#">
                <img src="${curItem.img}" alt="樱桃小丸子">
                <span class="title">${curItem.title}</span>
                <span class="price">￥${curItem.price}</span>
            </a>
        </li>`;
    }
    document.getElementById("mallItem").innerHTML = str;
}();