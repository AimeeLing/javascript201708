/**
 * Created by weeb on 2017/8/5.
 */
var data = null;


var xhr = new XMLHttpRequest;
xhr.open("GET", "json/data.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(xhr.responseText);//->JSON字符串
        // console.log(utils.toJSON(xhr.responseText));
        data = utils.toJSON(xhr.responseText);
    }
};
xhr.send(null);

//---------------------------数据绑定
//->动态创建DOM元素(基本不用)
//->字符串拼接（ES6中模板字符串）
//->模板引擎（REACT/VUE/EJS/TEMPLATE...）


var studentList = document.getElementById("studentList");
// studentList.tHead =>获取唯一的<thead>
// studentList.tBodies[0] =>获取所有的<tbody> 一个表格中可以有多个tbody，想获取第一个需要加索引
var studentBody = studentList.tBodies[0];
// studentBody.rows  =>获取tbody中所有的tr（行）
// studentBody.rows[0].ceils =>获取第一行中的所有列（td/th）


//=>动态创建DOM
//=>弊端：开发效率低、麻烦；每当向页面中增加一个tr的时候都会触发一次DOM的回流，耗性能。
/*
* DOM回流：（增加/删除/改变位置都会影响DOM回流）
*   当页面中的html结构发生改变，浏览器会把所有的结构进行重新计算和渲染 =>非常非常非常消耗性能，从性能优化角度来讲，我们应该减少DOM的回流
*
* DOM重绘：
*   当页面中某一个元素的样式（颜色等）发生改变，浏览器会把这个元素的样式重新绘制一下 =>对性能没有太大影响
* */
for (var i = 0; i < data.length; i++) {
    var cur = data[i];
    var oTr = document.createElement("tr");
    //->创建3td
    var oTd1 = document.createElement("td");
    oTd1.innerHTML = cur["id"];
    oTr.appendChild(oTd1);
    var oTd2 = document.createElement("td");
    oTd2.innerHTML = cur["name"];
    oTr.appendChild(oTd2);
    var oTd3 = document.createElement("td");
    oTd3.innerHTML = cur["age"];
    oTr.appendChild(oTd3);

    //->把tr放在tbody中
    studentBody.appendChild(oTr);
}


