<template>
    <li class="poem">
        <p class="tit">《{{info.title}}》</p>
        <p class="intro">{{info.dynasty}}·{{info.author}}</p>
        <p class="Poemcontent">{{info.content}}</p>
    </li>
</template>
<script>
    export default{
        props:{
            info:Object
        }
    }
</script>
<style scoped>
    .poem{
        width: 100%;
        height: auto;
        background: #fff;
        border-radius: 20px;
        margin-top: 15px;
    }
</style>

