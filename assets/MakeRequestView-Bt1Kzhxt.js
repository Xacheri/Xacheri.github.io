import{_ as k,u as g,r as c,c as m,f as C,h as F,i as b,a as e,w as a,v as n,F as w,e as V,j as p,L as f,o as i,p as q,g as R}from"./index-CVqbDaUW.js";import{C as S}from"./ConfirmModal-C1Ch5m2e.js";const l=u=>(q("data-v-230f8536"),u=u(),R(),u),N=l(()=>e("p",null,"Are you sure you want to make this request?",-1)),L=l(()=>e("h2",null,"Make a Pantry Request",-1)),U={class:"form-group"},z=l(()=>e("label",{for:"familysize"},"Family Size",-1)),M={class:"form-group"},B=l(()=>e("label",{for:"loc"},"Pickup Location",-1)),D={class:"form-group"},P=l(()=>e("label",{for:"food"},"Food Items",-1)),j={class:"d-flex align-items-center justify-content-between foodgroup"},O=["onUpdate:modelValue"],A={class:"d-flex align-items-center justify-content-between foodgroup"},$={class:"form-group"},E=l(()=>e("label",{for:"note"},"Leave a note about how to reach you.",-1)),T={class:"d-flex justify-content-center mt-3"},G={__name:"MakeRequestView",setup(u){const y=g(),t=c({OrderID:21,UserID:1,Status:"Open",PickupLocation:"",FamilySize:1,RequestorNote:"",orderItems:[]}),r=c(""),d=c(!1),x=v=>{const o=t.value.orderItems.indexOf(v);t.value.orderItems.splice(o,1)},I=()=>{t.value.orderItems.push({FoodName:r.value,FoodID:t.value.orderItems.length+1}),r.value=""},h=()=>{console.log("Submitting request"),console.log("Request:",t._rawValue),y.push("/")};return(v,o)=>(i(),m("div",null,[d.value?(i(),C(S,{key:0,onConfirm:h,onCancel:o[0]||(o[0]=()=>d.value=!1)},{default:F(()=>[N]),_:1})):b("",!0),L,e("div",U,[z,a(e("input",{type:"number",class:"form-control",id:"familysize","onUpdate:modelValue":o[1]||(o[1]=s=>t.value.FamilySize=s)},null,512),[[n,t.value.FamilySize]])]),e("div",M,[B,a(e("input",{type:"text",class:"form-control",id:"loc","onUpdate:modelValue":o[2]||(o[2]=s=>t.value.PickupLocation=s)},null,512),[[n,t.value.PickupLocation]])]),e("div",D,[P,(i(!0),m(w,null,V(t.value.orderItems,s=>(i(),m("div",j,[a(e("input",{type:"text",class:"form-control m-1","onUpdate:modelValue":_=>s.FoodName=_,disabled:""},null,8,O),[[n,s.FoodName]]),p(f,{text:"Delete",color:"red",onCustomClick:_=>x(s)},null,8,["onCustomClick"])]))),256)),e("div",A,[a(e("input",{type:"text",class:"form-control m-1","onUpdate:modelValue":o[3]||(o[3]=s=>r.value=s)},null,512),[[n,r.value]]),p(f,{text:"Add",color:"green",onCustomClick:I})])]),e("div",$,[E,a(e("textarea",{class:"form-control",id:"note","onUpdate:modelValue":o[4]||(o[4]=s=>t.value.RequestorNote=s)},null,512),[[n,t.value.RequestorNote]])]),e("div",T,[p(f,{text:"Submit Request",color:"blue",onCustomClick:o[5]||(o[5]=s=>d.value=!0)})])]))}},K=k(G,[["__scopeId","data-v-230f8536"]]);export{K as default};
