window.onload = function () {
    // 左侧边栏按钮的显示和隐藏
    playSidebarBtn()
    function playSidebarBtn(){
        var nav = document.querySelector(".naviMain")
        var btn = document.querySelector(".leftSidebarBtn")
        var wrap = document.querySelector(".wrapper")

        // 鼠标滑轮事件
        wrap.onwheel = ()=>{
            if(!(nav.getBoundingClientRect().top > 0)){
                btn.style.display = "block"
            }
            else{
                btn.style.display = "none"
            }
        }
        // 
       
    }
    // 左侧边栏的显示和隐藏
    playSidebar()
    function playSidebar() {
        var bar = document.querySelector(".sidebar")
        var open_btn = document.querySelector("#menu_btn")
        var close_btn = document.querySelector("#close_btn")
        var change_btn = document.querySelector(".leftSidebarBtn")
        var flag =false;
        open_btn.onclick=()=>{
            if(!flag){
                console.log("侧边栏开启")
                bar.className="sidebar sidebar_open"
                flag =true
            }else{
                console.log("侧边栏关闭")
                bar.className="sidebar sidebar_close"
                flag =false
            }
        }
        close_btn.onclick=()=>{
            console.log("侧边栏关闭")
            bar.className="sidebar sidebar_close"
            flag =false
        }
        change_btn.onclick=()=>{
            if(!flag){
                console.log("侧边栏开启")
                bar.className="sidebar sidebar_open"
                flag =true
            }else{
                console.log("侧边栏关闭")
                bar.className="sidebar sidebar_close"
                flag =false
            }
        }
      
       
    }
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
    // 右侧边栏事件
    playRightSidebar()
    function playRightSidebar(){
        let like = document.querySelector("#likeIcon")
        let set = document.querySelector("#settingIcon")
        let top = document.querySelector("#topIcon")
        let home = document.querySelector("#homeIcon")
        let support = document.querySelector("#supportIcon")
        let topFlag = false
        let setFlag = false

        // 开启设置
        set.onclick=()=>{
            if(!setFlag){
                // 显示home、support
                console.log("显示home、support")
                home.style.display="flex"
                support.style.display="flex"
                setFlag = true
            }else{
                // 隐藏home、support
                console.log("隐藏home、support")
                home.style.display="none"
                support.style.display="none"
                setFlag = false
            }
        }

        // 置顶
        // top.onclick =()=>{
        //     if(!topFlag){

        //     }
        // }
    }
}
