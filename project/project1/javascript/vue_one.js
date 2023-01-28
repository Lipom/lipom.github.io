var app = new Vue({
    el:'#web_body',
    data:{
        changeSidebar: true,
    },
    methods:{
        // 打开或者隐藏侧边栏
        toChangeSidebar: function(){
            if(!this.changeSidebar){
                this.changeSidebar = true;

            }else{
                this.changeSidebar = false;
            }
            // 旋转按钮并移动
            // toMoveBtn();
        },
        // 旋转按钮并移动
        toMoveBtn: function(){
            var btn = document.getElementById('sidebar_btn_div');
            console.log(btn.style.right)
            var img = btn.getElementsByTagName('img');
            console.log(img.height)
            // 移动按钮
            // btn.style.right = '0px';
            // 旋转图片
            img.style.transfrom = 'rotate(180deg)';
            // img.style.transition_duration = '0.1s';
        }
    }
})