/**
 * Created by weeb on 2017/8/3.
 */
/**
 * 一、数据绑定
 *  从服务器端使用AJAX获取到需要的数据，然后绑定在页面中
 */
//->1、首先从服务器端获取数据（AJAX）
var productData = null;
var xhr = new XMLHttpRequest;
xhr.open("GET", "json/product.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(xhr.responseText);
        var res = xhr.responseText;//->res是一个JSON字符串，我们需要把它转换为JSON对象，这样才方便我们后续操作
        productData = utils.toJSON(res);
    }
};
xhr.send(null);// ->因为get请求是没有请求体的所以为null

//->2、把我们得到的数据绑定在页面上即可
// 目前市场上绑定数据常用的办法：
// =>1）字符串拼接：把html标签及需要展示的数据在js中都以字符串的形式拼接起来，最后使用innerHTML插入到页面中
// =>2）ES6中提供的模板字符串（原理也是字符串拼接）
// =>3）数据绑定的模板引擎：kTemplate、EJS、d3、REACT中的虚拟DOM渲染、VUE中的MVVM模式等等

var htmlStr = ``;//tab键上面的点，不是单引号（ES6：兼容这个写法=>webstorm->settings->Languages & Frameworks->JavaScript->右侧选择JavaScript language version`ECMAScript 6`->ok，等待webstorm加载完成后右上侧有个desmis选择完成即可）
for (var i = 0; i < productData.length; i++) {
    var curItem = productData[i];
    // console.log(curItem);
    // ->每当循环一次都应该动态创建一个li，还需要把curItem中存储的内容分别的绑定在每一个li的身上
    htmlStr += `<li>
            <a href="#">
                <img src="${curItem.img}" alt="樱桃小丸子">
                <span class="title">${curItem.title}</span>
                <span class="price">${curItem.price}</span>
            </a>
        </li>`;
}
//->循环完成后htmlStr存储的东西就是我们最后需要展示内容的全部字符串，我们把这堆字符串最后放到页面的容器中即可
var mallItem = document.getElementById("mallItem");
mallItem.innerHTML = htmlStr;