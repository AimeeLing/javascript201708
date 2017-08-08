/**
 * Created by weeb on 2017/8/8.
 */
//->使用ajax获取数据，动态绑定在页面中
~function () {
    var productData = null;
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "json/product.json", false);
    xhr.onreadystatechange = function () {
        xhr.readyState === 4 && xhr.status === 200 ? productData = utils.toJSON(xhr.responseText) : null;
    };
    xhr.send(null);

    var str = ``;
    for (var i = 0; i < productData.length; i++) {
        var curItem = productData[i];
        /*
         * 自定义属性编程思维（编程思想）
         *   -> 是整个js中最伟大的编程思想之一
         *   -> 当我们在后续的某一些操作中需要用到当前元素的某些信息值，此时我们就可以把这些值事先存储在元素身上（自定义属性存储），后期用的时候直接的获取它的自定义属性值即可。
         *   eg：我们当前的案例，我们初期绑定的时候，可以把产品的价格、上架时间、热度等信息存储在元素的自定义属性上，以后排序的时候，如果需要用到这几个值，我们直接获取元素的自定义属性值即可。
         *   规则：
         *       data - xxx = xxx 一般都是给元素设置的自定义属性
         *
         * */
        str += `<li data-time="${curItem.time}" data-hot="${curItem.hot}" data-price="${curItem.price}">
            <a href="#">
                <img src="${curItem.img}" alt="樱桃小丸子">
                <span class="title">${curItem.title}</span>
                <span class="title">${curItem.time}</span>
                <span class="title">${curItem.hot}</span>
                <span class="price">￥${curItem.price}</span>
            </a>
        </li>`;
    }
    document.getElementById("mallItem").innerHTML = str;
}();
//->实现商品排序：按照“上架时间”、“热度”、“价格”实现升降序的排列

~function () {
    //->获取ul以及里面所有的商品（li），并且把其转换为数组
    var mallItem = document.getElementById("mallItem"),
        mallList = mallItem.getElementsByTagName("li");// -> HTMLCollection 元素集合
    // console.log(mallList);
    mallListAry = utils.toArray(mallList);//->类数组转换为数组
    // console.log(mallList);

    //->执行这个方法进行排序sortGoods：实现按照上架时间的升序排列
    function sortGoods() {//->curIndex：当前点击a对应的索引：根据索引我们来区分按照哪一项排序即可 0->时间 1->价格 2->热度
        //->排序
        //->this:menuLink[0]
        var _this = this;
        var ary = ["data-time", "data-price", "data-hot"];
        mallListAry.sort(function (cur, next) {
            var attr = ary[_this.index];
            //->this:window
            var curTime = cur.getAttribute(attr);
            var nextTime = next.getAttribute(attr);
            // "2017-03-15" VS "2017-02-08" =>把每一个时间的“-”都去掉，然后比较数字的大小即可
            curTime = curTime.replace(/-/g, "");
            nextTime = nextTime.replace(/-/g, "");
            return (curTime - nextTime) * _this.n;
        });
        //->把当前最新的数据重新的增加到页面中，以此更改页面中内容的顺序
        var frg = document.createDocumentFragment();
        for (var i = 0; i < mallListAry.length; i++) {
            frg.appendChild(mallListAry[i]);
        }
        mallItem.appendChild(frg);
        frg = null;
    }

    //->绑定点击事件，点击的时候进行排序
    var menu = document.getElementById("menu"),
        menuLink = menu.getElementsByTagName("a");

    //->给第一个a标签绑定点击事件：上架时间
    for (var i = 0; i < menuLink.length; i++) {
        var curLink = menuLink[i];
        curLink.n = -1;
        curLink.index = i;
        curLink.onclick = function () {
            //->点击当前项a的时候，需要让其它的两个a的排序标识回归-1，只有这样以后再点击其它两个a的时候才是从升序开始排的
            for (var j = 0; j < menuLink.length; j++) {
                var cur = menuLink[j];
                cur !== this ? cur.n = -1 : null;
            }
            this.n *= -1;
            sortGoods.call(this, this.index);//->this:menuLink[0]
        }
    }
}();


