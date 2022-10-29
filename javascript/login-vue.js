var login = new Vue({
    el:'#myform',
    data:{
        dx_flage: true,
        mm_flage: false,

    },
    methods: {
        closeDX: function(){
            this.mm_flage = false;
            this.dx_flage = true;
        },
        closeMM: function(){
            this.dx_flage = false;
            this.mm_flage = true;
        }
    }
})