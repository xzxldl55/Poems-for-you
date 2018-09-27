import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './src/router.js';
import Vuex from 'vuex';
import App from './app.vue';
import './style.css';
//导入product数据
import product_data from './src/product.js'
import poems from './src/poems.js';
import product from './src/product.js';

Vue.use(VueRouter);
Vue.use(Vuex);

//路由配置
const RouterConfig = {
    //H5的History模式
    routes:Routers,
    mode:'history'
};
const router = new VueRouter(RouterConfig);

//跳转前更改标题
router.beforeEach((to,from,next)=>{
    window.document.title = to.meta.title;
    next();
});
//离开前，滚轮回正
router.afterEach((to,from,next)=>{
    window.scrollTo(0,0);
});

//Vuex配置
const store = new Vuex.Store({
    state:{
        //诗歌分类数据
        PoemList:[],
        //该分类诗歌详情
        PoemGather:[],
        //写诗结果
        PoemWrite:[],
        //index
        index:0
    },
    getters:{
        // PoemList:state=>{
        //     console.log(state.PoemList)
        //     return state.PoemList;
        // }
    },
    mutations:{
        //添加诗歌列表
        setPoemList(state,data){
            state.PoemList = data;
        },
        //添加该类诗歌详情
        setPoemGather(state,data){
            state.PoemGather = data;
        },
        //写诗结果
        setPoemWrite(state,data){
            state.PoemWrite = data;
        },
        //index归零
        setIndex(state){
            state.index = 0;
        }
    },
    actions:{
        //请求诗歌列表--》真实环境是通过ajax获取，此处采用本地异步模拟
        getPoemList(context){
            let that = this;
            $.ajax({
                type:"GET",
                url:"http://poet.zykee.net/shlibrary/public/portal/poem/getTpye",
                success:function(data){
                    data = JSON.parse(data);
                    context.commit('setPoemList',data);
                    // console.log(that.state.PoemList)
                }
            })
        },
        //请求诗歌详情
        getPoemGather(context,data){
            let index = this.state.index;
            let arr = ["乐府诗集","初中诗词","古诗十九首","唐诗三百首","小学诗词","精选宋词","红楼梦","诗经全集","高中诗词"];
            $.ajax({
                type:"POST",
                url:"http://poet.zykee.net/shlibrary/public/portal/poem/readPoem",
                data:{
                    type:arr[data],
                    pnum:index
                },
                success:function(data){
                    data = JSON.parse(data);
                    console.log(data);
                    // context.commit('setPoemGather',data.content);
                    // console.log(that.state.PomeWrite);
                }
            })
            // setTimeout(()=>{
            //     context.commit('setPoemGather',poems);
            // },500);
        },
        //诗歌写作结果
        getPoemWrite(context,data){
            let that = this;
            $.ajax({
                type:"POST",
                url:"http://poet.zykee.net/shlibrary/public/portal/poem/writePoem",
                data:data,
                success:function(data){
                    data = JSON.parse(data);
                    context.commit('setPoemWrite',data.content);
                    // console.log(that.state.PomeWrite);
                }
            })
        }
    }
});
new Vue({
    el:"#app",
    router:router,
    store:store,
    render:h=>{
        return h(App);
    }
})