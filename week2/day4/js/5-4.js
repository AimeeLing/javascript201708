/**
 * Created by weeb on 2017/8/5.
 */
var data = null;


var xhr = new XMLHttpRequest;
xhr.open("GET", "json/data.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        data = utils.toJSON(xhr.responseText);
        //->按照年龄降序来做
        data.sort(function (a, b) {
            return b.age - a.age;
        })
    }
};
xhr.send(null);
/*var ary = [{
 "id": 1,
 "name": "Junior",
 "age": 18
 }, {
 "id": 2,
 "name": "Fancy",
 "age": 20
 }, {
 "id": 3,
 "name": "樱桃小丸子",
 "age": 22
 }];
 ary.sort(function (a, b) {
 // return b.age - a.age;
 //localeCompare：字符串之间比较大小（按照拼音在26个字母表中的位置计算的，靠后大）
 return a.name.localeCompare(b.name);
 });
 console.log(ary);*/


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
