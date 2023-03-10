window.onload = function () {
    // 动态显示时间
    playTime();
    function playTime() {
        // var date = Date.now();
        var date = new Date();

        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var mi = date.getMinutes();
        var s = date.getSeconds();
        mi = addZero(mi);
        hour = addZero(hour);
        s = addZero(s);

        document.getElementById("navi_time").innerHTML = year + "-" + month + "-" + day + "&nbsp&nbsp" + hour + ":" + mi + ":" + s;
        t = setTimeout(function () { playTime(); }, 500);
    }
    // 时间补零
    function addZero(x) {
        if (x < 10) {
            x = "0" + x;
        }
        return x;
    }
    // 关灯
    closeLight();
    function closeLight() {
        // 按钮
        var btn = document.querySelector("#light");
        // 背景颜色
        var bc_cw = document.querySelector(".contentWrap")
        var bc_one = document.querySelector(".content");
        var bc_two = document.querySelector(".item_one")
        var bc_three = document.querySelector(".item_two")
        var bc_four = document.querySelector(".naviMain");
        var bc_five = document.querySelectorAll(".main_font_color_open");
        var bc_six = document.querySelector(".item_three")

        var five_length = bc_five.length;


        // 初始状态
        var flag = true;
        // 项目数量
        var item_numb = 3;

        btn.onclick = function () {
            if (flag) {
                console.log("关灯")
                btn.style.right = "66%";
                // 背景颜色
                bc_cw.className = "contentWrap content_close"
                bc_one.className = "content content_close";
                bc_two.className = "item item_one item_close";
                bc_three.className = "item item_two item_close";
                bc_four.className = "naviMain naviMain_close";
                bc_six.className =  "item item_three item_close";
                for (var i = 0; i < five_length; i++) {
                    if (i < five_length - item_numb) {
                        bc_five[i].className = "main_font_color_close";
                    } else {
                        bc_five[i].className = "item_content main_font_color_close";
                    }
                }
                // 字体颜色

            } else {
                console.log("开灯")
                btn.style.right = "0%";
                bc_cw.className = "contentWrap content_open"
                bc_one.className = "content content_open";
                bc_two.className = "item item_one item_open";
                bc_three.className = "item item_two item_open";
                bc_six.className =  "item item_three item_open";
                bc_four.className = "naviMain";
                for (var i = 0; i < five_length; i++) {
                    if (i < five_length - item_numb) {
                        bc_five[i].className = "main_font_color_open";
                    } else {
                        bc_five[i].className = "item_content main_font_color_open";
                    }
                }

            }
            flag = !flag;
        }
    }
}
