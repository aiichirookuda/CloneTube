(this["webpackJsonpyoutube-react"]=this["webpackJsonpyoutube-react"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(37),s=a.n(r),i=(a(59),a(7)),o=a(4),u=a(38),j=a(39),d=a(54),l=a(53),b=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),a}(c.a.Component),p=Object(o.h)(b),O=a(41),f=a.n(O),m=a(14),h=a(3),x=a(1),v={popular:[],related:[],searched:[],selected:{},text:"",categories:[],categoryVideos:[],selectedCategoryId:""},y=function(e,t){switch(t.type){case"SET_SELECTED_CATEGORY_ID":return Object(h.a)(Object(h.a)({},e),{},{selectedCategoryId:t.payload.selectedCategoryId});case"SET_CATEGORY_VIDEOS":return Object(h.a)(Object(h.a)({},e),{},{categoryVideos:t.payload.categoryVideos});case"SET_CATEGORIES":return Object(h.a)(Object(h.a)({},e),{},{categories:t.payload.categories});case"SET_POPULAR":return Object(h.a)(Object(h.a)({},e),{},{popular:t.payload.popular});case"SET_RELATED":return Object(h.a)(Object(h.a)({},e),{},{related:t.payload.related});case"SET_SELECTED":return Object(h.a)(Object(h.a)({},e),{},{selected:t.payload.selected});case"SET_SEARCHED":return Object(h.a)(Object(h.a)({},e),{},{searched:t.payload.searched});case"SET_TEXT":return Object(h.a)(Object(h.a)({},e),{},{text:t.payload.text});default:return e}},_=Object(n.createContext)({globalState:v,setGlobalState:function(){return null}}),S=function(e){var t=e.children,a=Object(n.useReducer)(y,v),c=Object(m.a)(a,2),r=c[0],s=c[1];return Object(x.jsx)(_.Provider,{value:{globalState:r,setGlobalState:s},children:t})},g=Object(n.memo)((function(e){var t=e.id,a=e.text,c=Object(n.useContext)(_).setGlobalState;return Object(x.jsx)(i.b,{to:"/category",children:Object(x.jsx)("button",{className:f.a.button,onClick:function(){return function(e){c({type:"SET_SELECTED_CATEGORY_ID",payload:{selectedCategoryId:e}})}(t)},children:a})})})),E=a(42),C=a.n(E),w=a(6),T=a.n(w),I=a(12),D=a(43),N=a.n(D).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),P={part:"snippet",maxResults:40,key:"AIzaSyDrJxYwjLKP8tz1jszIOYR4QVO3y1b466I",regionCode:"JP",type:"video"},L=function(){var e=Object(I.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/videos",{params:Object(h.a)(Object(h.a)({},P),{},{chart:"mostPopular",videoCategoryId:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(I.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/videoCategories",{params:Object(h.a)({},P)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(I.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/videos",{params:Object(h.a)(Object(h.a)({},P),{},{chart:"mostPopular"})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(I.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/videos",{params:Object(h.a)(Object(h.a)({},P),{},{id:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(I.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/search",{params:Object(h.a)(Object(h.a)({},P),{},{relatedToVideoId:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(I.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/search",{params:Object(h.a)(Object(h.a)({},P),{},{q:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=Object(n.memo)((function(){var e=Object(n.useContext)(_),t=e.globalState,a=e.setGlobalState;return Object(n.useEffect)((function(){G().then((function(e){a({type:"SET_CATEGORIES",payload:{categories:e.data.items}})}))}),[]),Object(x.jsx)("div",{className:C.a.container,children:t.categories.filter((function(e){return!0===e.snippet.assignable})).map((function(e){return Object(x.jsx)(g,{id:e.id,text:e.snippet.title},e.id)}))})})),U=a(44),Y=a.n(U),B=function(){return Object(x.jsx)("div",{className:Y.a.footer,children:Object(x.jsxs)("span",{children:["favicon: ",Object(x.jsx)("a",{href:"https://icons8.jp/",children:"ICONS8"})]})})},H=a(23),q=a(24),J=a(16),z=a.n(J),X=Object(n.memo)((function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(o.f)(),s=Object(n.useContext)(_),u=s.globalState,j=s.setGlobalState;return Object(n.useEffect)((function(){c(u.text)}),[u.text]),Object(x.jsxs)("div",{className:z.a.header,children:[Object(x.jsx)("div",{className:z.a.item,children:Object(x.jsx)(i.b,{to:"/",children:Object(x.jsxs)("span",{children:[Object(x.jsx)(H.a,{className:z.a.faPlayCircle,icon:q.a}),"CloneTube"]})})}),Object(x.jsx)("div",{className:z.a.item,children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j({type:"SET_TEXT",payload:{text:a}}),r.push("/search?query=".concat(a))},children:[Object(x.jsx)("input",{type:"text",placeholder:"\u691c\u7d22",onChange:function(e){return c(e.target.value)},value:a}),Object(x.jsx)("button",{type:"submit",disabled:""===a,children:Object(x.jsx)(H.a,{icon:q.b})})]})})]})})),Q=a(25),K=a.n(Q),M=Object(n.memo)((function(e){var t=e.children;return Object(x.jsxs)("div",{className:K.a.wrapper,children:[Object(x.jsx)(X,{}),Object(x.jsx)(F,{}),Object(x.jsx)("div",{className:K.a.main,children:t}),Object(x.jsx)(B,{})]})})),W=a(45),Z=a.n(W),$=Object(n.memo)((function(e){var t=e.children;return Object(x.jsx)("div",{className:Z.a.container,children:t})})),ee=a(46),te=a.n(ee),ae=Object(n.memo)((function(e){var t=e.id,a=e.src,n=e.title;return Object(x.jsx)(i.b,{to:{pathname:"watch",search:"?v=".concat(t)},className:te.a.item,children:Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:a,alt:n}),Object(x.jsx)("span",{children:n})]})})})),ne=Object(n.memo)((function(){var e=Object(n.useContext)(_),t=e.globalState,a=e.setGlobalState;return Object(n.useEffect)((function(){var e=t.selectedCategoryId;L(e).then((function(e){a({type:"SET_CATEGORY_VIDEOS",payload:{categoryVideos:e.data.items}})}))}),[t.selectedCategoryId]),Object(x.jsx)(M,{children:Object(x.jsx)($,{children:t.categoryVideos.map((function(e){return Object(x.jsx)(ae,{id:e.id,src:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.id)}))})})})),ce=Object(n.memo)((function(){var e=Object(n.useContext)(_),t=e.globalState,a=e.setGlobalState,c=Object(o.g)(),r=function(){var e=Object(I.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(c.search),!(n=t.get("query"))){e.next=5;break}return e.next=5,A(n).then((function(e){a({type:"SET_SEARCHED",payload:{searched:e.data.items}})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[c.search]),Object(x.jsx)(M,{children:Object(x.jsx)($,{children:t.searched?t.searched.map((function(e){return Object(x.jsx)(ae,{id:e.id.videoId,src:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.id.videoId)})):Object(x.jsx)("p",{children:"No Data"})})})})),re=Object(n.memo)((function(){var e=Object(n.useContext)(_),t=e.globalState,a=e.setGlobalState;return Object(n.useEffect)((function(){R().then((function(e){a({type:"SET_POPULAR",payload:{popular:e.data.items}})}))}),[a]),Object(x.jsx)(M,{children:Object(x.jsx)($,{children:t.popular.map((function(e){return Object(x.jsx)(ae,{id:e.id,src:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.id)}))})})})),se=a(26),ie=a.n(se),oe=Object(n.memo)((function(e){var t=e.id,a=e.src,n=e.title;return Object(x.jsxs)(i.b,{className:ie.a.item,to:{pathname:"watch",search:"?v=".concat(t)},children:[Object(x.jsx)("img",{src:a,alt:n}),Object(x.jsx)("div",{className:ie.a.info,children:Object(x.jsx)("span",{children:n})})]})})),ue=a(47),je=a.n(ue),de=Object(n.memo)((function(){var e=Object(n.useContext)(_).globalState;return Object(x.jsx)("div",{className:je.a.sidenav,children:e.related?e.related.map((function(e){return e.snippet&&Object(x.jsx)(oe,{id:e.id.videoId,src:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.id.videoId)})):Object(x.jsx)("span",{children:"No Data"})})})),le=a(48),be=a(27),pe=a.n(be),Oe=Object(n.memo)((function(e){var t=e.id;return Object(x.jsx)("div",{className:pe.a.wrap,children:Object(x.jsx)(le.a,{className:pe.a.video,videoId:t})})})),fe=a(51),me=a.n(fe),he=a(52),xe=a.n(he),ve=Object(n.memo)((function(){var e=Object(n.useContext)(_).globalState;return e.selected&&e.selected.id?Object(x.jsxs)("div",{className:me.a.wrap,children:[Object(x.jsx)(Oe,{id:e.selected.id}),Object(x.jsx)("p",{children:e.selected.snippet.title}),Object(x.jsx)("hr",{}),Object(x.jsx)(xe.a,{children:Object(x.jsx)("pre",{children:e.selected.snippet.description})})]}):Object(x.jsx)("span",{children:"No Data"})})),ye=Object(n.memo)((function(){var e=Object(n.useContext)(_).setGlobalState,t=Object(o.g)(),a=function(){var a=Object(I.a)(T.a.mark((function a(){var n,c,r,s,i,o;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=new URLSearchParams(t.search),!(c=n.get("v"))){a.next=11;break}return a.next=5,Promise.all([k(c),V(c)]);case 5:r=a.sent,s=Object(m.a)(r,2),i=s[0],o=s[1],e({type:"SET_SELECTED",payload:{selected:i.data.items.shift()}}),e({type:"SET_RELATED",payload:{related:o.data.items}});case 11:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()}),[t.search]),Object(x.jsxs)(M,{children:[Object(x.jsx)(ve,{}),Object(x.jsx)(de,{})]})}));var _e=function(){return Object(x.jsxs)(i.a,{basename:"/CloneTube",children:[Object(x.jsx)(p,{}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",component:re}),Object(x.jsx)(o.a,{path:"/search",component:ce}),Object(x.jsx)(o.a,{path:"/category",component:ne}),Object(x.jsx)(o.a,{path:"/watch",component:ye})]})]})},Se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,110)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};a(108);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(S,{children:Object(x.jsx)(_e,{})})}),document.getElementById("root")),Se()},16:function(e,t,a){e.exports={header:"Header_header__1v0yI",item:"Header_item__2VaIS",faPlayCircle:"Header_faPlayCircle__3Q5wh"}},25:function(e,t,a){e.exports={wrapper:"Layout_wrapper__2dOTA",main:"Layout_main__3OBIG"}},26:function(e,t,a){e.exports={item:"SideListItem_item__b9PvY",info:"SideListItem_info__1xDCF"}},27:function(e,t,a){e.exports={wrap:"VideoPlay_wrap__21ucX",video:"VideoPlay_video__2ekpd"}},41:function(e,t,a){e.exports={button:"Button_button__2Lf63"}},42:function(e,t,a){e.exports={container:"CategoryButtons_container__21qFm"}},44:function(e,t,a){e.exports={footer:"Footer_footer__7dIj9"}},45:function(e,t,a){e.exports={container:"VideoGrid_container__1eUpe"}},46:function(e,t,a){e.exports={item:"VideoGridItem_item__2P63g"}},47:function(e,t,a){e.exports={sidenav:"SideList_sidenav__j1iTt"}},51:function(e,t,a){e.exports={wrap:"VideoDetail_wrap__2Cb5v"}}},[[109,1,2]]]);
//# sourceMappingURL=main.05c0a3f9.chunk.js.map