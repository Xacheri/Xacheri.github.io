import{_ as l,o as e,c as s,a as i,F as p,e as _,t as b,f as q,r as y,d as g,h as d,i as m}from"./index-BGe2uaGD.js";import{P as h,T as R}from"./PantryRequestCard-PI-RWUVt.js";const S={class:"radio-container"},k=["name","value","checked","onChange"],H={__name:"RadioTabs",props:{options:Array,defaultIndex:Number},emits:["custom-change"],setup(a,{emit:u}){const n=a,t=u;return(o,v)=>(e(),s("div",S,[i("div",null,[(e(!0),s(p,null,_(a.options,(r,c)=>(e(),s("label",{key:c},[i("input",{type:"radio",name:a.options[0].label,value:r.value,checked:c===n.defaultIndex,onChange:()=>t("custom-change",r.value)},null,40,k),i("span",null,b(r.label),1)]))),128))])]))}},x=l(H,[["__scopeId","data-v-6f9e78da"]]),C={__name:"ServiceRequestHistory",props:{pantryRequests:Array},setup(a){return(u,n)=>(e(),s("div",null,[(e(!0),s(p,null,_(a.pantryRequests,(t,o)=>(e(),q(h,{key:o,"pantry-request":t,"no-button":!0},null,8,["pantry-request"]))),128))]))}},I=l(C,[["__scopeId","data-v-41666203"]]),T={__name:"ServiceFulfilledHistory",props:{pantryRequests:Array},setup(a){return(u,n)=>(e(),s("div",null,[(e(!0),s(p,null,_(a.pantryRequests,(t,o)=>(e(),q(h,{key:o,"pantry-request":t,"no-button":!0,"privacy-render":!0},null,8,["pantry-request"]))),128))]))}},V=l(T,[["__scopeId","data-v-599b6db9"]]),F={key:0},$={key:1},A={__name:"ServiceHistoryView",setup(a){const u={tabs:[{label:"Service History",value:"service-history"},{label:"Service Request History",value:"service-request"}]},n=y("service-history"),t=y({}),o=r=>{console.log("Tab changed:",r),n.value=r},v=function(){console.log("Getting pantry requests");try{t.value=R.getRequestAndServiceHistoryForUser(),console.log("Success:",t.value)}catch(r){console.error("Error:",r)}};return g(()=>{v()}),(r,c)=>(e(),s("div",null,[d(x,{options:u.tabs,"default-index":0,onCustomChange:c[0]||(c[0]=f=>o(f))},null,8,["options"]),n.value=="service-history"?(e(),s("div",F,[d(V,{"pantry-requests":t.value.service_orders},null,8,["pantry-requests"])])):m("",!0),n.value=="service-request"?(e(),s("div",$,[d(I,{"pantry-requests":t.value.request_orders},null,8,["pantry-requests"])])):m("",!0)]))}},P=l(A,[["__scopeId","data-v-9b245f1f"]]);export{P as default};
