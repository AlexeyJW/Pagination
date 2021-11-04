import{u as m,o as x,c as h,a as P,b as U,r as O,d as a,e as _,f as r,g as v,w as I,t as u,h as p,i as d,j as T,N as $,k,l as N,m as y,F as A,n as V,p as b,q as G,s as L,v as M}from"./vendor.ea6c1db0.js";const w=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}};w();const D={id:"app"},W={id:"nav"},j=d("Home"),F=d("| "),H=d("Login"),B={setup(t){const e=m();x(()=>e.dispatch("GET_PRODUCTS_FROM_API"));const n=h(()=>e.getters.CART.length),o=P();U();const s=()=>o.push("Search"),c=()=>o.push("Wrapper"),i=()=>o.push("Cart");return(g,C)=>{const l=O("router-link"),f=O("router-view");return a(),_("div",D,[r("div",W,[v(l,{to:"/"},{default:I(()=>[j]),_:1}),F,v(l,{to:"/login"},{default:I(()=>[H]),_:1}),r("button",{onClick:s},"Search"),r("button",{onClick:c},"Wrapper"),r("button",{onClick:i},"Cart ("+u(p(n))+")",1)]),v(f)])}}},q=t=>t.products,z=t=>e=>t.products.find(n=>n.id==e),K=t=>t.cart,J=t=>e=>t.paginator[e],Q=t=>t.activePage;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",PRODUCTS:q,USER:z,CART:K,PAGINATOR:J,ACTIVE_PAGE:Q});T.interceptors.request.use(t=>($.start(),t));T.interceptors.response.use(t=>($.done(),t));const Y=({commit:t})=>{T.get("https://jsonplaceholder.typicode.com/users").then(function(e){console.log(e),t("setUsers",e.data)}).catch(function(e){console.log(e)})},Z=({commit:t})=>{T.get("https://jsonplaceholder.typicode.com/users").then(e=>{t("SET_PRODUCTS_TO_STATE",e.data),console.log(e.data)}).catch(function(e){console.log(e)})};var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",posts:Y,GET_PRODUCTS_FROM_API:Z}),te={addProduct(t,e){t.products.push(e)},setUsers(t,e){t.users=[...e]},SET_PRODUCTS_TO_STATE(t,e){t.products=[...e]},SET_USER_TO_CART(t,e){t.cart.find(o=>o.value.id===e.value.id)instanceof Object?console.log("refuse"):(console.log("add"),t.cart.push(e))},SET_PAGINATOR(t,e){t.paginator.push(e)},SET_FALSE(t){t.paginator.forEach(e=>{e.isActive=!1})},SET_IS_ACTIVE(t,e){t.paginator[e.index].isActive=e.newIsActive},SET_ACTIVE_PAGE(t,e){t.activePage=e},REMOVE_USER_WITH_CART(t,e){let n=0;for(;t.cart[n]!=e;)n++;t.cart.splice(n,1)}};const se={products:[],cart:[],paginator:[],activePage:1};var oe=k({state:se,getters:X,actions:ee,mutations:te});var S=(t,e)=>{for(const[n,o]of e)t[n]=o;return t};const ne={props:{msg:String},setup(t){return N({count:0}),(e,n)=>(a(),_("h1",null,u(t.msg),1))}};var re=S(ne,[["__scopeId","data-v-730117aa"]]);const ce={};function ae(t,e){return a(),_("div",null," Login ")}var _e=S(ce,[["render",ae]]);const ie={};function ue(t,e){return a(),_("div",null," SEARCH ")}var le=S(ie,[["render",ue]]);const pe={class:"v-catalog-item"},de=r("div",{class:"name"},null,-1),ve=r("hr",null,null,-1),me={class:"info"},he={props:{user:Object},setup(t){return(e,n)=>(a(),_("div",pe,[de,r("strong",null,u(t.user.name),1),ve,r("div",me," id: "+u(t.user.id)+" phone: "+u(t.user.phone),1)]))}};const ge={class:"box"},fe={class:"v-user"},Te={class:"name"},Ae=r("br",null,null,-1),Se=r("br",null,null,-1),Ce=r("br",null,null,-1),Ee={props:{userId:{type:String,default:"1"}},setup(t){const e=t,n=m(),o=h(()=>n.getters.USER(e.userId)),s=()=>{n.commit("SET_USER_TO_CART",o)};return(c,i)=>(a(),_("div",ge,[r("div",fe,[r("div",Te,[r("h1",null,[r("strong",null,u(p(o).name),1)])]),Ae,d(" id: "+u(t.userId)+" ",1),Se,d(" phone: "+u(p(o).phone)+" ",1),Ce,d(" e-mail: "+u(p(o).email)+" ",1),r("div",{id:"cart-btn"},[r("button",{class:"user-btn",onClick:s},"Select")])])]))}};const ye={props:{users:Array},setup(t){const e=P(),n=o=>{e.push({name:"User",params:{userId:o.id}})};return(o,s)=>(a(!0),_(A,null,y(t.users,c=>(a(),_("div",{class:"v-catalog",key:c.id},[v(he,{user:c,onClick:i=>n(c)},null,8,["user","onClick"])]))),128))}};const Re={props:{page:{type:Number},isActive:{type:Boolean}},setup(t){const e=t,n=m();let o=!1;e.page==1?o=!0:o=!1,n.commit("SET_PAGINATOR",{page:e.page,isActive:o});const s=n.getters.PAGINATOR(e.page-1);return(c,i)=>(a(),_("div",{class:V({active:p(s).isActive})},u(p(s).page),3))}};var Pe=S(Re,[["__scopeId","data-v-471e57b3"]]);const Oe=r("h1",null,"V-main-Wrapper",-1),Ie={class:"v-main-wrapper"},$e={class:"pagination"},be={setup(t){const e=m(),n=h(()=>e.getters.PRODUCTS),o=3;let s=b(e.getters.ACTIVE_PAGE);const c=Math.ceil(n.value.length/o);let i=b(!1);const g=h(()=>{let l=(s.value-1)*o,f=l+o;return n.value.slice(l,f)}),C=l=>{s.value=l,i.value=!0,e.commit("SET_FALSE"),e.commit("SET_IS_ACTIVE",{index:l-1,newIsActive:!0}),e.commit("SET_ACTIVE_PAGE",l)};return(l,f)=>(a(),_(A,null,[Oe,r("div",Ie,[v(ye,{users:p(g)},null,8,["users"])]),r("div",$e,[(a(!0),_(A,null,y(p(c),E=>(a(),_("div",{key:E},[v(Pe,{page:E,isActive:p(i),onClick:Me=>C(E)},null,8,["page","isActive","onClick"])]))),128))])],64))}};const xe={class:"v-cart"},Ue={class:"cart"},ke=r("strong",null,"VCart",-1),Ne=["onClick"],Ve={setup(t){const e=m(),n=h(()=>e.getters.CART),o=s=>{e.commit("REMOVE_USER_WITH_CART",s)};return(s,c)=>(a(),_("div",xe,[r("div",Ue,[ke,(a(!0),_(A,null,y(p(n),(i,g)=>(a(),_("div",{key:g},[d(u(i._value.name)+" ",1),r("button",{class:"cart-b",onClick:C=>o(i)},"Remote",8,Ne)]))),128))])]))}},Ge=[{path:"/",name:"Home",component:re},{path:"/login",name:"Login",component:_e},{path:"/search",name:"Search",component:le},{path:"/wrapper",name:"Wrapper",component:be},{path:"/cart",name:"Cart",component:Ve},{path:"/user",name:"User",component:Ee,props:!0}],Le=G({history:L(),routes:Ge});const R=M(B);R.use(oe);R.use(Le);R.mount("#app");
