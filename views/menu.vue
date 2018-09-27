<template>
    <div class="app">
        <ul class="menu">
            <router-link to="/read" tag="li">赏诗</router-link>
            <router-link to="/write" tag="li">写诗</router-link>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {};
        },
        mounted() {
            this.$parent.headerShow();
        },
    }
</script>
<style scoped>
        .app{
            width: 100%;
            height: 100%;
            background: url("../img/1.jpg") no-repeat center/cover;
        }
        .app .menu{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 160px;
            height: 150px;
        }
        .app .menu li{
            width: 100%;
            height: 50px;
            background: #fff;
            border: 2px solid #000;
            border-radius: 20px;
            text-align: center;
            font: 18px/50px "Microsoft Yahei Light";
            margin-top: 20px;
        }
</style>