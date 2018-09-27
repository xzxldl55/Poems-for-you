<template>
    <div class="read">
        <ul class="list">
            <template v-for="(item,index) in shigeList">
                <li>
                    <i class="show"></i>
                    <router-link :to="'/poemList/' + index" tag="p">{{item}}</router-link>
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                shigeList:["乐府诗集","初中诗词","古诗十九首","唐诗三百首","小学诗词","精选宋词","红楼梦","诗经全集","高中诗词"]
            };
        },
        computed:{
            list(){
                return this.$store.state.PoemList;
            }
        },
        // methods:{
        //     test(){
        //         // let $list = $(".list"),
        //         //     that = this;
        //         // $.ajax({
        //         //     type:"GET",
        //         //     url:"http://poet.zykee.net/shlibrary/public/portal/poem/getTpye",
        //         //     success:function(data){
        //         //         data = JSON.parse(data);
        //         //         // context.commit('setPoemList',data);
        //         //         // console.log(that.state.PoemList)
        //         //         // that.shigeList = data;
        //         //         // console.log(that.shigeList);
        //         //         for(let i =0;i<data.length;i++){
        //         //             that.shigeList[i] = data[i].type;
        //         //         }
        //         //         console.log(that.shigeList);
        //         //     }
        //         // })
        //         // console.log(this.list);
        //     }
        // },
        mounted() {
            this.$parent.headerShow();
            this.$store.dispatch('getPoemList');
            this.$parent.hideLoad();
        }
    }
</script>
<style scoped>
    .read{
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        padding: 70px 20px 0;
        box-sizing: border-box;
    }
    .read ul{
        width: 100%;
    }
    .read ul li{
        width: 100%;
        text-indent: 10px;
        height: 35px;
        font: 18px/35px "Microsoft yahei Light";
        color:#000;
        border-bottom: 2px solid #000;
        margin-top: 15px;
    }
    .read ul li i{
        float: left;
        width: 35px;
        height: 35px;
        background: url("../img/下箭头.png") no-repeat center/15px;
    }
</style>
