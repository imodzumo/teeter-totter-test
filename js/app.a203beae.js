(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/teeter-totter-test/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"199c":function(t,e){},2221:function(t,e,n){"use strict";n("7b46")},"23be":function(t,e,n){"use strict";var a=n("199c"),i=n.n(a);e["default"]=i.a},"370b":function(t,e,n){},"3dfd":function(t,e,n){"use strict";var a=n("799b"),i=n("23be"),r=n("2877"),s=n("6544"),o=n.n(s),l=n("7496"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports,o()(c,{VApp:l["a"]})},"4fc2":function(t,e,n){},"53d4":function(t,e,n){"use strict";n("4fc2")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("3dfd"),r=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("WelcomeDialog")],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"justify-center"},[t._v("Rules:")]),n("v-card-text",[t._v(" - At the right side of teeter totter, there will be randomly placing objects with random weights. On the left side, there will be nothing but there will be objects falling from top to bottom. According to weight on the sides, teeter totter will be bending towards to heavy side. ")]),n("v-card-text",[t._v(" - You will be managing those object’s placement by arrow keys to keep teeter totter on balance. ")]),n("v-card-text",[t._v(" - Your task is, keeping this balance as much as you can. ")]),n("v-card-actions",{staticClass:"d-flex justify-center"},[n("v-btn",{attrs:{color:"success",to:"/game",large:""},on:{click:function(e){t.dialog=!1}}},[t._v("Play ")])],1)],1)],1)},c=[],u={name:"WelcomeDialog",data:function(){return{dialog:null}},created:function(){this.dialog=!0}},f=u,d=n("2877"),m=n("6544"),g=n.n(m),p=n("8336"),h=n("b0af"),v=n("99d9"),b=n("169a"),y=Object(d["a"])(f,l,c,!1,null,"69f79824",null),_=y.exports;g()(y,{VBtn:p["a"],VCard:h["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VDialog:b["a"]});var j={name:"Home",components:{WelcomeDialog:_}},O=j,I=Object(d["a"])(O,s,o,!1,null,"153d7602",null),w=I.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Header"),n("TeeterTotter")],1)},T=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-row",{staticClass:"pt-12 pt-sm-0"},[n("v-col",{attrs:{cols:"6",md:"4",sm:"6"}},[n("v-card-title",[t._v("Score: "+t._s(t.score))])],1),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"6",md:"4",sm:"6"}},[n("v-card-title",{staticClass:"title"},[t._v("Teeter-totter")])],1),n("v-col",{staticClass:"d-flex justify-md-end justify-center align-center",attrs:{cols:"12",md:"4",sm:"12"}},[n("Button",{ref:"playButton",staticClass:"primary mr-4",on:{click:function(e){return t.playButton()}}},[t._v("Play")]),n("Button",{staticClass:"secondary",on:{click:function(e){return t.restartButton()}}},[t._v("Clear")])],1)],1),n("FinishDialog",{attrs:{dialog:t.dialogStatus}})],1)},C=[],S=n("5530"),M=n("2f62"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._g({staticClass:"button button-class button-class-main",attrs:{disabled:t.disabled,type:t.type}},t.clickListeners),[t._t("default")],2)},x=[],L={name:"Button",props:{disabled:{type:Boolean,default:!1},type:{type:String,default:"button"}},computed:{clickListeners:function(){return Object(S["a"])({},this.$listeners)}}},$=L,k=(n("ef55"),Object(d["a"])($,P,x,!1,null,null,null)),G=k.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"justify-center"},[t._v("GAME OVER!")]),n("div",{staticClass:"d-flex justify-center"},[n("v-card-title",[t._v("Your score: "),n("span",{staticClass:"score"},[t._v(t._s(t.myScore))])]),n("v-card-title",[t._v("Best score: "),n("span",{staticClass:"best-score"},[t._v(t._s(t.bestScore))])])],1),n("v-card-actions",{staticClass:"d-flex justify-space-between"},[n("v-btn",{attrs:{color:"success",to:"/game"},on:{click:function(e){t.dialog=!1}}},[t._v("Try Again ")]),n("v-btn",{attrs:{color:"primary",to:"/"},on:{click:function(e){t.dialog=!1}}},[t._v("Back to the rules ")])],1)],1)],1)},B=[],N={name:"FinishDialog",props:{dialog:{type:Boolean,default:!1}},data:function(){return{myScore:localStorage.getItem("myScore"),bestScore:localStorage.getItem("bestScore")}}},V=N,F=(n("53d4"),Object(d["a"])(V,R,B,!1,null,"dcb2f822",null)),D=F.exports;g()(F,{VBtn:p["a"],VCard:h["a"],VCardActions:v["a"],VCardTitle:v["c"],VDialog:b["a"]});var H={components:{Button:G,FinishDialog:D},data:function(){return{dialogStatus:!1}},computed:Object(S["a"])({},Object(M["c"])(["isPaused","gameOver","fallingItem","fallingItems","gameTimeout","score"])),watch:{gameOver:function(){this.gameOver&&(localStorage.setItem("myScore",JSON.stringify(this.score)),(this.score>localStorage.getItem("bestScore")||!localStorage.getItem("bestScore"))&&localStorage.setItem("bestScore",JSON.stringify(this.score)),this.dialogStatus=!0,this.RESET_GAME())}},methods:Object(S["a"])(Object(S["a"])(Object(S["a"])({},Object(M["d"])(["START_GAME","CONTINUE_GAME","RESET_GAME","PAUSE_GAME","CREATE_FALLING_ITEM","PUSH_FALLING_ITEM"])),Object(M["b"])(["startGame"])),{},{playButton:function(){if("Play"===this.$refs.playButton.$el.innerHTML)return this.$refs.playButton.$el.innerHTML="Pause",void this.startGame();this.isPaused?(this.$refs.playButton.$el.innerHTML="Pause",this.CONTINUE_GAME()):(this.$refs.playButton.$el.innerHTML="Continue",this.PAUSE_GAME())},restartButton:function(){this.$refs.playButton.$el.innerHTML="Play",this.RESET_GAME()}})},U=H,W=n("40dc"),J=n("62ad"),Y=n("0fd9"),K=Object(d["a"])(U,A,C,!1,null,null,null),X=K.exports;g()(K,{VAppBar:W["a"],VCardTitle:v["c"],VCol:J["a"],VRow:Y["a"]});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"playfield"},[n("div",{staticClass:"falling"},[n("div",{staticClass:"falling-wrapper",style:{transform:"rotate("+-t.rotation+"deg)"}},[n("div",{ref:"fallingObject",class:["object","object-"+t.fallingItem.type],style:{left:t.fallingItem.leftPosition+"%",transform:"translateX(-50%) scale("+t.fallingItem.weight/5+")"}},[n("span",{staticClass:"object-weight"},[t._v(t._s(t.fallingItem.weight))])])])]),n("div",{staticClass:"scales"},[n("div",{staticClass:"scales-platform",style:{transform:"rotate("+-t.rotation+"deg)"}},t._l(t.fallingItems,(function(e){return n("div",{key:e.id,class:["object","object-"+e.type],style:{left:e.leftPosition+"%",transform:"translateX(-50%) scale("+e.weight/5+")"}},[n("span",{staticClass:"object-weight"},[t._v(t._s(e.weight))])])})),0),n("div",{staticClass:"scales-triangle"})])])},z=[],Q=(n("e25e"),{created:function(){window.addEventListener("keydown",this.objectMove)},computed:Object(S["a"])({},Object(M["c"])(["fallingItems","fallingItem","rotation"])),methods:{objectMove:function(t){"left"===this.fallingItem.place&&parseInt(this.$refs.fallingObject.style.left)<=49&&parseInt(this.$refs.fallingObject.style.left)>=0&&(37===t.keyCode&&parseInt(this.$refs.fallingObject.style.left)>=5?this.$refs.fallingObject.style.left=parseInt(this.$refs.fallingObject.style.left)-5+"%":39===t.keyCode&&parseInt(this.$refs.fallingObject.style.left)<=44&&(this.$refs.fallingObject.style.left=parseInt(this.$refs.fallingObject.style.left)+5+"%"),this.fallingItem.leftPosition=parseInt(this.$refs.fallingObject.style.left))}},destroyed:function(){window.removeEventListener("keydown",this.objectMove)}}),Z=Q,tt=(n("7f8f"),Object(d["a"])(Z,q,z,!1,null,null,null)),et=tt.exports,nt={components:{Header:X,TeeterTotter:et}},at=nt,it=(n("2221"),Object(d["a"])(at,E,T,!1,null,null,null)),rt=it.exports;a["a"].use(r["a"]);var st=new r["a"]({mode:"history",base:"/teeter-totter-test/",routes:[{path:"/",name:"Home",component:w},{path:"/game",name:"Game",component:rt}]}),ot=n("1da1");n("96cf"),n("0d03"),n("4795");function lt(t){return t[Math.floor(Math.random()*t.length)]}function ct(t,e){return Math.floor(Math.random()*(e-t+1))+t}function ut(t,e){var n,a,i=e;this.pause=function(){clearTimeout(n),i-=new Date-a};var r=function r(){a=new Date,n=setTimeout((function(){e=e<1e3?e:e-100,i=e,r(),t()}),i)};this.play=r,this.play()}var ft={startGame:function(t){return Object(ot["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,a=t.commit,n.isPaused=!1,e.next=4,a("CREATE_FALLING_ITEM");case 4:return e.next=6,a("ANIMATE_FALLING_ITEM");case 6:n.gameTimeout=new ut(Object(ot["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.score++,n.fallingItems.push(n.fallingItem),n.isRightObjectPosition=!n.isRightObjectPosition,t.next=5,a("CREATE_FALLING_ITEM");case 5:return t.next=7,a("ANIMATE_FALLING_ITEM");case 7:return t.next=9,a("MAKE_CALCULATIONS");case 9:case"end":return t.stop()}}),t)}))),n.animationSpeed);case 7:case"end":return e.stop()}}),e)})))()}},dt={isPaused:function(t){var e=t.isPaused;return e},gameOver:function(t){var e=t.gameOver;return e},fallingItem:function(t){var e=t.fallingItem;return e},fallingItems:function(t){var e=t.fallingItems;return e},gameTimeout:function(t){var e=t.gameTimeout;return e},score:function(t){var e=t.score;return e},rotation:function(t){var e=t.rotation;return e}},mt=(n("4160"),n("159b"),n("b680"),{CREATE_FALLING_ITEM:function(t){t.fallingItem={id:(new Date).getTime(),type:lt(t.objectsList),weight:ct(t.constants.minWeight,t.constants.maxWeight),place:t.isRightObjectPosition?"right":"left",leftPosition:t.isRightObjectPosition?ct(50,100):ct(0,49)}},ANIMATE_FALLING_ITEM:function(t){function e(){t.animationSpeed<1e3||(t.animationSpeed-=100)}var n=document.querySelector(".falling-wrapper");t.gameAnimation=n.animate([{top:0},{top:"100%"}],{duration:t.animationSpeed}),e()},MAKE_CALCULATIONS:function(t){var e=0,n=0,a=0,i=0;t.fallingItems.forEach((function(r){"left"===r.place&&(e+=t.constants.platformLength/2*(1-parseInt(r.leftPosition)/50)*r.weight,n+=r.weight),"right"===r.place&&(a+=t.constants.platformLength/2*((parseInt(r.leftPosition)-50)/50)*r.weight,i+=r.weight)})),t.isRightObjectPosition&&((e/a>1.3||e/a<.7)&&(t.gameOver=!0),(n-i>20||n-i<-20)&&(t.gameOver=!0));var r=50*(e/a-1).toFixed(2);t.rotation=r>15?15:r<-15?-15:50*(e/a-1).toFixed(2)},PAUSE_GAME:function(t){t.isPaused=!0,t.gameTimeout.pause(),t.gameAnimation.pause()},CONTINUE_GAME:function(t){t.isPaused=!1,t.gameAnimation.play(),t.gameTimeout.play()},RESET_GAME:function(t){t.isPaused=!0,t.gameOver=!1,t.gameTimeout.pause(),t.gameAnimation.pause(),t.fallingItems=[],t.fallingItem={},t.score=0,t.isRightObjectPosition=!0,t.animationSpeed=3e3,t.rotation=0}}),gt={objectsList:["rectangle","triangle","circle"],constants:{minWeight:1,maxWeight:10,platformLength:10},isPaused:!0,gameOver:!1,isRightObjectPosition:!0,fallingItem:{},fallingItems:[],gameTimeout:"",gameAnimation:"",animationSpeed:3e3,score:0,rotation:0};a["a"].use(M["a"]);var pt=new M["a"].Store({actions:ft,getters:dt,mutations:mt,state:gt}),ht=n("f309");a["a"].use(ht["a"]);var vt=new ht["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:st,store:pt,vuetify:vt,render:function(t){return t(i["default"])}}).$mount("#app")},"799b":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view")],1)},i=[]},"7b46":function(t,e,n){},"7f8f":function(t,e,n){"use strict";n("370b")},da8d:function(t,e,n){},ef55:function(t,e,n){"use strict";n("da8d")}});
//# sourceMappingURL=app.a203beae.js.map