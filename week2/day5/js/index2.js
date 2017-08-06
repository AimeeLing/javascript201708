/**
 * Created by weeb on 2017/8/6.
 */
//->ajax获取数据然后做数据绑定
var stuList = document.getElementById("stuList"),
    stuHead = stuList.tHead,
    stuBody = stuList.tBodies[0],
    stuHeadList = stuHead.getElementsByTagName("th"),
    stuRows = stuBody.rows;

~function () {
    //get data
    var stuData = null;
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "json/data.json", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            stuData = utils.toJSON(xhr.responseText);
        }
    };
    xhr.send(null);

    //bind data
    var str = ``;
    for (var i = 0; i < stuData.length; i++) {
        var curItem = stuData[i];
        str += `<tr>
        <td>${curItem.id}</td>
        <td>${curItem.name}</td>
        <td>${curItem.age}</td>
    </tr>`;
    }
    stuBody.innerHTML = str;
    console.log(stuRows);
}();

//->让所有的行按照年龄由小到大排序
~function () {
    function sortRows() {
        //->把存储所有行的类数组转换为数组（只有数组才能用sort方法进行排序）
        var stuRowsAry = utils.toArray(stuRows);

        //->让所有的行按照年龄这一列由小到大排序
        stuRowsAry.sort(function (a, b) {
            //找到当前行所有列
            var curAge = parseFloat(a.cells[2].innerHTML);
            var nextAge = parseFloat(b.cells[2].innerHTML);

            return (curAge - nextAge) * stuHeadList[2].n;
        });
        //->按照数组排好的顺序，我们把每一行重新的放入到页面中，让页面中的结构也跟着排序
        var frg = document.createDocumentFragment();//文档碎片
        for (var i = 0; i < stuRowsAry.length; i++) {
            var curRow = stuRowsAry[i];
            // stuBody.appendChild(curRow);//没循环一次重新放入一次 =>DOM回流
            frg.appendChild(curRow);
        }
        // console.log(stuBody);
        stuBody.appendChild(frg);
        frg = null;
    }

    //->点击表头第三列（年龄这一列），让其按照年龄由小到大排序
    stuHeadList[2].n = -1;//->n这个自定义属性控制我们的升降序排列
    stuHeadList[2].onclick = function () {
        //->this:stuHeadList[2]
        this.n *= -1;
        sortRows();
    };

}();