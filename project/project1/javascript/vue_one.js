// 方法一：更改值
// var app = new Vue({
//     el:'#web_body',
//     data:{
//         changeSidebar: false,
//     },
//     methods:{
//         // 打开或者隐藏侧边栏
//         toChangeSidebar: function(){
//             if(!this.changeSidebar){
//                 this.changeSidebar = true;

//             }else{
//                 this.changeSidebar = false;
//             }
//             // 旋转按钮并移动
//             // toMoveBtn();
//         },
//         // 旋转按钮并移动
//         toMoveBtn: function(){
//             var btn = document.getElementById('sidebar_btn');
//             console.log("按钮被点击");
    
//             // 移动并旋转按钮
//             var btn_right = btn.style.right;
//             if(btn_right.indexOf("p")==1 || btn_right=='')
//             {
//                 btn.style.right = "160px";
//             }
//             else{
//                 btn.style.right = "0px";
//             }
//             // 显示内容
//             this.toChangeSidebar();
//         }
//     }
// })

