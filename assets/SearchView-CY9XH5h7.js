import{_ as y,r as i,u as g,d as m,c as n,a as t,w as q,v as w,F as R,e as S,o,f as k,p as x,g as L}from"./index-BGe2uaGD.js";import{T as C,P as I}from"./PantryRequestCard-PI-RWUVt.js";const p=r=>(x("data-v-d449149d"),r=r(),L(),r),B={class:"search-container d-flex flex-column w-100 align-items-center"},F=p(()=>t("label",{for:"searchQuery",class:"h6"},"Search for a request",-1)),P=p(()=>t("br",null,null,-1)),V={key:0},b={key:1},E={__name:"SearchView",setup(r){const l=i(""),c=i([]),d=i([]),h=g(),_=function(){console.log("Getting pantry requests");try{d.value=C.getLocalPantryRequests(),console.log("Success:",f.value)}catch(s){console.error("Error:",s)}},f=()=>{const s=l.value.toLowerCase().trim(),a=d.value.filter(e=>{const u=e.order.orderItems;return JSON.stringify(u).toLowerCase().includes(s)||e.order.PickupLocation.toLowerCase().includes(s)||e.user.Location.toString().includes(s)});c.value=a},v=function(){console.log("Fulfilling request"),h.push("/fulfillrequest")};return m(()=>{_()}),(s,a)=>(o(),n("div",B,[t("div",null,[F,P,q(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),placeholder:"Enter search keyword..."},null,512),[[w,l.value]]),t("button",{onClick:f},"Search")]),t("div",null,[c.value.length>0?(o(),n("h2",V,"Results")):(o(),n("span",b,"No results found")),(o(!0),n(R,null,S(c.value,(e,u)=>(o(),k(I,{key:u,"pantry-request":e,onFulfillRequest:v},null,8,["pantry-request"]))),128))])]))}},D=y(E,[["__scopeId","data-v-d449149d"]]);export{D as default};
