<template>
    <ul class="poemList">
        <li class="poemType">{{poems[0].type}}</li>
        <Poem v-for="item in poems" :info="item"></Poem>
        <li class="add">
            <p class="pre" @click="prePoem"></p>
            <p class="next" @click="nextPoem"></p>
        </li>
    </ul>
</template>
<script>
    import Poem from '../components/poem.vue';
    export default{
        components:{Poem},
        data(){
            return {
                //获取路由中参数
                // id:parseInt(this.$router.history.current.fullPath.split('/')[2])
                index:0,
                ppp:[],
                ifPre:true,
                ifNext:true
            }
        },
        computed:{
            poems:{
                get:function(){
                    return this.ppp;
                },
                set:function(newVal){
                    this.ppp = newVal;
                }
            }
        },
        methods:{
            getPoems(){
                let that = this;
                let index = this.index;
                let arr = ["乐府诗集","初中诗词","古诗十九首","唐诗三百首","小学诗词","精选宋词","红楼梦","诗经全集","高中诗词"];
                $.ajax({
                    type:"POST",
                    url:"http://poet.zykee.net/shlibrary/public/portal/poem/readPoem",
                    data:{
                        type:arr[parseInt(this.$router.history.current.fullPath.split('/')[2])],
                        pnum:index
                    },
                    success:function(data){
                        data = JSON.parse(data);
                        that.poems = data;
                        that.$parent.hideLoad();
                        window.scrollTo(0,0);
                        that.ifPre = true;
                        that.ifNext = true;
                        // console.log(data)
                        // console.log("1"+that.poems)
                        // context.commit('setPoemGather',data.content);
                        // console.log(that.state.PomeWrite);
                    }
                })
            },
            nextPoem(){
                if(this.ifNext){
                    this.index++;
                    this.ifNext = false;
                    this.getPoems();
                }else{
                    alert("请不要频繁点击");
                }
            },
            prePoem(){
                if(this.ifPre){
                    if(!this.index){
                        alert("当前已经第一页！");
                    }else{
                        this.index--;
                        this.ifPre = false;
                        this.getPoems();
                    }
                }else{
                    alert("请不要频繁点击");
                }
                
            }
        },
        mounted() {
            this.$parent.headerShow();
            this.$parent.showLoad();
            // this.$store.dispatch('getPoemGather',parseInt(this.$router.history.current.fullPath.split('/')[2]));
            this.getPoems();
        },
    }
</script>
<style scoped>
    .poemList{
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        padding: 70px 20px 0;
        box-sizing: border-box;
    }
    .poemList li{
        width: 100%;
        font: 16px/24px "Microsoft Yahei Light";
        text-align: center;
    }
    .poemList .poemType{
        height: 30px;
        line-height: 30px;
        font-size: 24px;
        border-bottom: 2px solid #ccc;
    }
    .poemList .add{
        height: 30px;
        margin-top: 10px;
        padding: 10px 0;
        border-top: 1px solid #ccc;
    }
    .poemList .add p{
        width: 30px;
        height: 30px;
    }
    .poemList .add .pre{
        float: left;
        background: url("../img/左.png") no-repeat center/cover;
    }
    .poemList .add .next{
        float: right;
        background: url("../img/右.png") no-repeat center/cover;
    }
</style>
