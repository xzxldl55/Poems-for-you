<template>
    <div class="container">
        <div class="leftbook book"></div>
        <div class="jianbook" @click.prevent.stop="start">
            <p class="tit tit1"></p>
            <p class="tit tit2"></p>
            <p class="tit tit3"></p>
            <p class="tit tit4"></p>
        </div>
        <div class="rightbook book"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {};
        },
        methods:{
            start(){
                let that = this;
                let $container = $(".container"),
                    $leftBook = $(".leftbook"),
                    $rightBook = $(".rightbook"),
                    $jianBook = $(".jianbook");
                let indexAnimation = function(name){
                    return new Promise((resolve,reject)=>{
                        $jianBook.addClass(name);
                        $leftBook.addClass(name);
                        $rightBook.addClass(name);
                        setTimeout(()=>{
                            $container.addClass(name)
                            resolve();
                        },500);
                    });
                };
                indexAnimation("on").then(()=>indexAnimation("off").then(()=>{
                    that.$parent.headerShow();//调用父组件app的方法
                    that.$router.push('/menu');
                }));
            },
            init(){
                let that = this;
                setTimeout(function(){
                    that.start();
                },2000);
            }
        },
        mounted() {
            this.$parent.headerHide();
            this.init();
        },
    }
</script>
<style scoped>
        .container{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }
        .container.off{
            display: none;
        }
        .container .book{
            z-index: 8;
            position: absolute;
            top: 0;
            width: 50%;
            height: 100%;
            background: url("../img/bookRepeat.png") repeat;
            box-sizing: border-box;
            transition: .5s;
        }
        .container .leftbook{
            left: 0;
            border-right: 2px solid #602424;
        }
        .container .leftbook.on{
            position: relative;
            left: -50%;
        }
        .container .rightbook{
            right: 0;
        }
        .container .leftbook.off{
            display: none;
        }
        .container .rightbook.on{
            right: -50%;
        }
        .container .rightbook.off{
            display: none;
        }
        .container .jianbook{
            z-index: 9;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -332px;
            margin-left: -176px;
            width: 362px;
            height: 665px;
            background: url("../img/bookjian.png") no-repeat right top/366px 665px;
            cursor: pointer;
        }
        .container .jianbook.on{
            display: none;
        }
        .container .jianbook .tit{
            width: 50px;
            height: 50px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            margin-left: 152px;
        }
        .container .jianbook .tit1{
            margin-top: 128px;
            background-image: url("../img/为.png");
        }
        .container .jianbook .tit2{
            margin-top: 9px;
            background-image: url("../img/你.png");
        }
        .container .jianbook .tit3{
            margin-top: 9px;
            background-image: url("../img/写.png");
        }
        .container .jianbook .tit4{
            margin-top: 9px;
            background-image: url("../img/诗.png");
        }
</style>