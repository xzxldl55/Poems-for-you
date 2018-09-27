<template>
    <ul class="write">
        <li @click="toResult(1)">
            <h4>自由诗</h4>
            <p>注：*即自由生成一首诗歌。</p>
        </li>
        <li @click="toResult(2)">
            <h4>押韵诗</h4>
            <p>注：*即自由生成一首押韵的诗歌。</p>
        </li>
        <li @click="alertShow">
            <h4>自选诗</h4>
            <p>注：*给定若干主题，生成一首诗</p>
        </li>
        <li class="over"></li>
        <li class="alert">
            <p>请输入关键字词</p>
            <input type="text" class="writeWord" v-model="customWrod">
            <button @click="toResult(4)" class="btn">作诗</button>
            <i class="close" @click="alertClose"></i>
        </li>
    </ul>
</template>
<script>
    export default{
        data(){
            return{
                customWrod:""
            }
        },
        methods:{
            alertShow(){
                let $over = $(".over"),
                    $alert = $(".alert");
                $over.addClass("on");
                $alert.addClass("on");
            },
            alertClose(){
                let $over = $(".over"),
                    $alert = $(".alert");
                $over.removeClass("on");
                $alert.removeClass("on");
            },
            toResult(type){
                switch(type){
                    case 1:
                        this.$store.dispatch('getPoemWrite',{type:1});
                        this.$router.push("/result");
                        break;
                    case 2:
                        this.$store.dispatch('getPoemWrite',{type:2});
                        this.$router.push("/result");
                        break;
                    case 4:
                        let $text = $(".alert .writeWord"),
                            $btn = $(".alert .btn");
                        if(!$text.val()){
                            alert("您还没填写关键词呢！");
                        }else{
                            this.$store.dispatch('getPoemWrite',{type:2,start:$text.val()});
                            this.$router.push("/result");
                        }
                        break;
                }
            }
        },
        mounted() {
            this.$parent.headerShow();
        }
    }
</script>
<style scoped>
    .write{
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        padding: 70px 20px 0;
        box-sizing: border-box;
    }
    .write li{
        width: 100%;
        border: 1px solid #ccc;
        border-top: none;
        background: #fff;
        padding: 15px;  
        margin-top: 10px;
        border-radius: 20px;
        box-sizing: border-box;
    }
    .write li:first-child{
        border-top: 1px solid #ccc;
    }
    .write li p{
        font-size: 14px;
    }
    .write .over{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
    }
    .write .over.on{
        display: block;
    }
    .write .alert{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 90%;
        height: 110px;
    }
    .write .alert.on{
        display: block;
    }
    .write .alert p{
        text-align: center;
        font-weight: bold;
    }
    .write .alert input{
        display: block;
        width: 80%;
        border: none;
        outline: none;
        border-bottom: 1px solid #000;
        margin: 10px auto;
        text-align: center;
    }
    .write .alert button{
        display: block;
        width: 50px;
        height: 25px;
        border-radius: 10px;
        outline: none;
        background: #fff;
        border: 1px solid #000;
        text-align: center;
        margin: 5px auto;
    }
    .write .alert .close{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 20px;
        height: 20px;
        background: url("../img/关闭.png") no-repeat center/cover;
    }
</style>
