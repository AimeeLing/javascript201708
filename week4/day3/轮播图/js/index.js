/**
 * Created by weeb on 2017/8/17.
 */
var banner = document.querySelector(".banner"),
    focusPic = banner.querySelector(".focusPic"),
    focusPics = focusPic.getElementsByTagName("img"),
    focusNum = banner.querySelector(".focusNum"),
    focusNums = focusNum.getElementsByTagName("li"),//querySelectorAll：不存在dom映射机制，下面绑定数据后，不能自动的填充到当前这个集合中，所以我们应该使用getElementsByTagName,它有dom映射机制
    arrowL = banner.querySelector(".arrowL"),
    arrowR = banner.querySelector(".arrowR");


~function () {
    //get data
    var bannerData = null,
        xhr = new XMLHttpRequest;
    xhr.open("GET", "json/banner.json", false);
    xhr.onreadystatechange = function () {
        xhr.readyState === 4 && xhr.status === 200 ? bannerData = utils.toJSON(xhr.responseText) : null;
    };
    xhr.send(null);

    //bind data
    var str = ``,
        strFocusNum = ``;
    for (var i = 0; i < bannerData.length; i++) {
        var curItem = bannerData[i];
        str += `<li><a href="${curItem.link}"><img src="" alt="" data-src="${curItem.img}"></a></li>`;
        strFocusNum += `<li class="${i === 0 ? 'cur' : ''}"></li>`;
    }


    focusPic.innerHTML = str;
    focusNum.innerHTML = strFocusNum;

    //->为了实现无缝滚动，我们把第一张克隆一份放在容器的末尾
    var focusPicLis = focusPic.getElementsByTagName("li"),
        cloneLi = focusPicLis[0].cloneNode(true);
    focusPic.appendChild(cloneLi);

    //->动态设置一下focusPic的宽度
    utils.css(focusPic, "width", (bannerData.length + 1) * 1000);
}();

//=>图片延迟加载
window.onload = function () {
    lazyImg(focusPics[0]);//->当页面加载成功后，我们首先把第一张图片做延迟加载
};
function lazyImg(oImg) {
    if (oImg.isLoad) return;
    oImg.isLoad = true;//->isLoad：自定义属性
    var tempImg = new Image;
    tempImg.onload = function () {
        oImg.src = this.src;
        oImg.style.display = "block";
        tempImg = null;
    };
    tempImg.src = oImg.getAttribute("data-src");//->部分浏览器需要把src赋值操作放在onload事件的下面，这样加载成功后才会触发onload事件
}

//=>轮播图运动
~function () {
    var step = 0, //步长：记录当前展示图片的索引
        interval = 3000;//->时间因子：每隔多少ms切换到下一张图片
    var autoTimer = window.setInterval(function () {
        if (step === 4) {//->过了3000ms再次执行定时器，此时step=4，说明上一次已经切换到最末尾的那一张了（经过克隆的），此时我们让容器立即回到第一张的位置，让其step=0
            utils.css(focusPic, "left", 0);
            step = 0;
        }
        step++;
        //->用300ms完成从当前图片切换到下一张图片的效果
        animate({
            curEle: focusPic,
            target: {
                left: -step * 1000
            },
            duration: 300
        });
        //->切换到下一张图片，需要把下一张图片做一下延迟加载
        lazyImg(focusPics[step]);
    }, interval);
}();

/*
 * 实现轮播图无缝滚动的原理：
 * 1、数据绑定的时候，我们就把第一张克隆一份一模一样的，放在最末尾的位置（真实图片如果有4个，此时容器中存储的就是5个了）
 * 2、当运动的时候，我们依然step++，当我们再次运动的时候，看一下上一次是否已经是最后一张了（克隆d那一张），如果是的话，说明再往后走就走不了了，我们此时让容器立马回到left=0的位置（真实第一张的位置），并且让step=0
 * 3、然后继续step++，运动到第二张的位置，实现了无缝衔接
 * */
