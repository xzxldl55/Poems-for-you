webpackJsonp([3],{106:function(e,t){},114:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"result"},[n("div",{staticClass:"content"},[n("h4",[e._v("为你写诗")]),e._v(" "),n("div",{staticClass:"box"},e._l(e.result,function(t,s){return n("p",[e._v(e._s(e.result[s]))])}))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},21:function(e,t,n){n(106);var s=n(9)(n(63),n(114),null,null);s.options.__file="E:\\CCNU\\前端组\\为你写诗\\views\\result.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] result.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{changeBg:function(){var e=$(".result"),t=["a","b","c","d","e","f","g","h","i","j","k"],n=Math.floor(10*Math.random());e.css("background-image",'url("../img/'+t[n]+'.jpg")')}},computed:{result:function(){return this.$store.state.PoemWrite}},mounted:function(){this.$parent.headerShow(),this.changeBg()}}}});