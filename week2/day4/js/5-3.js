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
var studentList = document.getElementById("studentList");
var studentBody = studentList.tBodies[0];

var str = ``;//->tab键上面的两个撇（不是单引号） =>ES6模板字符串  ${js code}
for (var i = 0; i < data.length; i++) {
    var cur = data[i];
    str += `<tr>
        <td>${cur.id}</td>
        <td>${cur.name}</td>
        <td>${cur.age}</td>
    </tr>`;
}
studentBody.innerHTML = str;

//babel就是把ES6转换为ES5的工具
