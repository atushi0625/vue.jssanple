var app = new Vue({
    el: "#app",
    data: {
        message: "ともすた",
        error: true,
        error_class: "error",
        img_src: 'logo.png',//画像を添付
        now: "00:00:00",
        prefs:[
           { name: '北海道'} ,
           { name: '青森県'} ,
           { name: '岩手県'} ,
           { name: '宮城県'} ,
           { name: '秋田県'} ,
           { name: '山形県'} 
        ]
    },

    methods:{
        shuffle: function(){
             this.prefs = _.shuffle(this.prefs);
            //  lodashを宣言するときは_.を先頭につける
        }
    },

    methods: {
        time: function(e){ //(e)はeventのe
            let date = new Date();

            this.now = date.getHours() + ":"
            + date.getMinutes() + ":" +
            date.getSeconds();
        }
    },


});

Vue.component('alert-box', {
    template:`
    <div class="alert">
         <strong>Error!</strong>
         <slot></slot>
       </div>  
    `
});

