<template>
    <div class="result">
        <div class="content">
            <h4>为你写诗</h4>
            <div class="box">
                <p v-for="(item,index) in result">{{result[index]}}</p>
            </div>
            <router-link to="/write" tag="button" class=".btn">再写一首</router-link>
        </div>
    </div>
</template>
<script>
    export default{
        methods:{
            // changeBg(){
            //     let $result = $(".result"),
            //         arr = ['a','b','c','d','e','f','g','h','i','j','k'],
            //         random = Math.floor(Math.random()*10);
            //     $result.css('background-image','url("../img/'+arr[random]+'.jpg")');

            // }
            btn(){
                let $btn = $(".btn");
                $btn.css({
                    'display': 'block',
                    'width': '60px',
                    'height': '30px',
                    'border': '1px solid #000',
                    'borderRadius': '10px',
                    'background':'#fff'
                })
            }
        },
        computed:{
            result(){
                return this.$store.state.PoemWrite;
            }
        },
        mounted() {
            this.$parent.headerShow();
            this.btn();
            // this.changeBg();
        }
    }
</script>
<style>
    .result{
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        padding: 70px 20px 0;
        box-sizing: border-box;
        background: url("../img/a.jpg") no-repeat fixed;
        background-position: center;
        z-index:1;
    }
    .result:after{
        content: "";
        width:100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        background: inherit;
        filter: blur(2px);
        z-index: 2;
    }
    .content{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 80%;
        height: 250px;;
        border: 1px solid #000;
        background: rgba(255, 255, 255, .5);
        border-radius: 30px;
        color: #000;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
        overflow: hidden;
        z-index:11;
    }
    .content .box{
        margin: auto;
        height: auto;
        box-sizing: border-box;
        width: 100%;
        margin-top: 25px;
    }
    .content .box p{
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    .btn{
        display: block;
        width: 60px;
        height: 30px;
        border: 1px solid #000;
        border-radius: 10px;
    }
</style>
