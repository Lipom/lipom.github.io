// 待dom及其资源加载完毕，在实现事件函数
window.onload = function () {
    // 侧边栏点击实现
    rightSidebar();
    function rightSidebar() {

        // 获取btn
        btn = document.querySelector(".sidebar_btn ");
        console.log(btn)
        // 获取图片
        img = document.querySelector(".sidebar_btn_img");
        // 获取内容
        content = document.querySelector(".sidebar");
        // 记录初始状态
        var flag = true;

        btn.onclick = function () {
            if (flag) {
                // flag = true 展开
                console.log("...展开侧边栏");
                btn.className = "sidebar_btn btn_open";
                img.className = "sidebar_btn_img img_open";
                content.className = "sidebar sidebar_open";
            } else {
                // flag = false 关闭
                console.log("关闭侧边栏...");
                btn.className = "sidebar_btn btn_close";
                img.className = "sidebar_btn_img img_close";
                content.className = "sidebar sidebar_close";
            }
            flag = !flag;
        }


    }
    // 播放音乐实现
    play_music();
    function play_music(){
        // 
        console.log("导入播放音乐函数")
        var num = 2;
        var music = document.getElementById('mymusic');
        var click_music = document.getElementById('music');
        music.autoplay="autoplay";
        music.loop="loop";

        var img = document.getElementById('mu_img');

        click_music.onclick = function () {
            console.log("点击音乐");
            if (num % 2 == 0) {
                music.play();

                //alert(x.paused);
                img.src = 'images/music.png';
                num = num + 1;
            }
            else {
                music.pause();
                //alert(x.paused);
                img.src = 'images/guanbi_music.png';
                num = num + 1;
            }
        }
    }
    
}