import{_ as q,r as v,u as h,i as R,c as a,a as o,F as c,e as i,o as s,j as p,p as g,h as k}from"./index-CogFDgyG.js";import{T as P,P as _}from"./TestDataClass-DsvAiJwd.js";const m=r=>(g("data-v-278cb647"),r=r(),k(),r),S={id:"pantry-stock-container"},b=m(()=>o("h1",null,"Current Pantry Requests",-1)),F={class:"row"},w={class:"col-6"},B={class:"col-6"},C={__name:"StockPantryView",setup(r){const e=v([]),d=function(){console.log("Getting pantry requests");try{e.value=P.getLocalPantryRequests(),console.log("Success:",e.value)}catch(u){console.error("Error:",u)}},y=function(){e.value=e.value.concat(e.value)},f=h(),l=function(){console.log("Fulfilling request"),f.push("/fulfillrequest")};return R(()=>{d()}),(u,I)=>(s(),a("div",S,[b,o("div",F,[o("div",w,[(s(!0),a(c,null,i(e.value.slice(0,e.value.length/2),(t,n)=>(s(),p(_,{key:n,"pantry-request":t,onFulfillRequest:l},null,8,["pantry-request"]))),128))]),o("div",B,[(s(!0),a(c,null,i(e.value.slice(e.value.length/2).filter(t=>t.order.Status=="Open"),(t,n)=>(s(),p(_,{key:n,"pantry-request":t,onFulfillRequest:l},null,8,["pantry-request"]))),128))])]),o("button",{onClick:y},"Double Pantry Requests")]))}},D=q(C,[["__scopeId","data-v-278cb647"]]);export{D as default};
