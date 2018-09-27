<template>
    <div id="container">
        <div class="header">
            <p class="goback" @click="goback"></p>
            <router-link to="/menu" class="title" tag="h3" replace></router-link>
        </div>
        <div class="loading"></div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        methods:{
            goback(){
                this.$router.go(-1);
            },
            headerShow(){
                let $header = $("#container .header");
                $header.addClass("on");
            },
            headerHide(){
                let $header = $("#container .header");
                $header.removeClass("on");
            },
            showLoad(){
                let $load = $(".loading");
                $load.addClass("on");
            },
            hideLoad(){
                let $load = $(".loading");
                $load.removeClass("on");
            }
        }
    }
</script>
<style scoped>
    .loading{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("./img/加载.png") no-repeat center/50px;
        transform: rotate(0);
        animation: move 1s infinite;
    }
    @keyframes move{
        from{
            transform: rotate(0);
        }to{
            transform: rotate(360deg);
        }
    }
    .loading.on{
        display: block;
    }
</style>
