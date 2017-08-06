/**
 * Created by weeb on 2017/8/6.
 */
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


~function () {
    function sortRows() {
        //->this:stuHeadList[2]
        var stuRowsAry = utils.toArray(stuRows);

        var _this = this;
        stuRowsAry.sort(function (a, b) {
            //->this:window
            var curAge = parseFloat(a.cells[2].innerHTML);
            var nextAge = parseFloat(b.cells[2].innerHTML);

            return (curAge - nextAge) * _this.n;
        });

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


    stuHeadList[2].n = -1;
    stuHeadList[2].onclick = function () {
        //->this:stuHeadList[2]
        this.n *= -1;
        // sortRows();//->this:window
        sortRows.call(this);//->this:stuHeadList[2]
    };

}();