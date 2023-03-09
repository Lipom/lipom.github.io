
window.onload = function () {
    deleteText();
    // 清除搜索栏
    function deleteText(){
        // 方法一：js
        // let input = document.querySelector(".input_box")
        // let input_btn = document.querySelector("#delete_btn")
        // input_btn.onclick= ()=>{
        //     input.value = ""
        // }
        // 方法二：jq
        $("#delete_btn").click(()=>{
            $(".input_box").val("")
        })
    }
    
    // 轮播图
    playSlideshow();

    // 轮播图
    function playSlideshow() {
        /*
            思路：
            1.准备好必要标签和样式（list,btn,circle）
            2.自动轮播
            3.circle切图
            4.btn切图
        */
        let banner = document.querySelector(".bannerMain")
        let arrow = document.querySelector(".bannerArrow")
        let points = document.querySelector(".bannerPoint")
        let list = document.querySelector(".imgList")
        let btn_left = document.querySelector("#b_button_left")
        let btn_right = document.querySelector("#b_button_right")
        let currentIndex = 0

        let showArrow = () => arrow.style.display="block"
        let hiddenArrow = () => arrow.style.display="none"
        let autoPlay = () => {
            window.autoPlay = true;
            window.autoPlayTimer = setInterval(()=>move((currentIndex+1)%4), 2000)
        }
        let stopPlay = () =>{
            if(window.autoPlay){
                window.autoPlay = false;
                clearInterval(window.autoPlayTimer);
            }
            
        }
        // 核心函数
        let move = (index) => {
            //获取图片宽度
            let width = banner.offsetWidth
            console.log(width)
            // let width = 1200
            // 更改circle背景颜色
            for (let i = 0; i < 4; i++) {
                if (index % 4 === i) {
                    points.children[i].className = "banner_point_item current"
                } else {
                    points.children[i].className = "banner_point_item"

                }
            }
            // 移动图片
            list.style.left = (-index) * width+"px"
            currentIndex = index;
        }
        // circle悬停控制
        circles = document.querySelectorAll(".banner_point_item")
        for(let i = 0;i < circles.length; i ++){
            circles[i].addEventListener("mouseover",()=>{
                move(i);
                stopPlay()
            })
        }

        // 按钮控制
        banner.addEventListener("mouseover",showArrow)
        banner.addEventListener("mouseleave",() =>{
            hiddenArrow();
            if(!window.autoPlay){
                autoPlay();
            }
        })
        btn_left.addEventListener("click",()=>{
            move((currentIndex-1 < 0)? 3: currentIndex-1);
            stopPlay();
        })
        btn_right.addEventListener("click",()=>{
            move((currentIndex+1 > 3)? 0: currentIndex+1);
            stopPlay();
        })

        // 自动播放
        move(0);
        autoPlay();
    }
}