import{_ as F,l as N,m as C,o as t,c as r,a as o,t as n,n as a,F as p,e as f,q as h,s as S,j as _,L as q,f as R}from"./index-CogFDgyG.js";const k={class:"grid-container p-1"},L={class:"grid-item"},b={class:"card"},B={class:"card-body"},P={class:"card-title text-info"},v={key:0},O={key:1},V={class:"card-text"},U={__name:"PantryRequestCard",props:{pantryRequest:{type:Object,required:!0},noButton:{type:Boolean,default:!1},privacyRender:{type:Boolean,default:!1}},emits:["fulfillRequest"],setup(s,{emit:l}){const c=s,g=l,u=N(),{pantryRequest:e}=C(c),y=()=>{const i=e.value;i.order.Status="In Progress",u.updateFoodRequestStore(i),g("fulfillRequest")},I=d=>{switch(d){case"Open":return"green-bg";case"In-Progress":return"yellow-bg";case"Completed":return"red-bg";default:return""}};return(d,i)=>(t(),r("div",k,[o("div",L,[o("div",b,[o("div",B,[o("h5",P,n(a(e).order.orderItems.length+" Items"+(s.privacyRender?".":" at "+a(e).order.PickupLocation+".")),1),o("ul",null,[(t(!0),r(p,null,f(a(e).order.orderItems,(m,D)=>(t(),r("li",{key:m.FoodID},[h(n(m.FoodName),1),D!==a(e).order.orderItems.length-1?(t(),r("span",v,",")):(t(),r("span",O,"."))]))),128))]),o("div",{class:S(["grid-item d-flex justify-content-center p-1 status",I(a(e).order.Status)])},[o("p",V,"Status: "+n(a(e).order.Status),1)],2)]),s.noButton?R("",!0):(t(),_(q,{key:0,text:"Fulfill Request",onClick:y,color:"blue"}))])])]))}},T=F(U,[["__scopeId","data-v-b039bd74"]]);class A{static getLocalPantryRequests(){return[{order:{OrderID:1,UserID:1,FamilySize:3,Status:"Open",PickupLocation:"Krogers on S. Glenstone",RequestorNote:"Email me at louis@gmail.com to arrange a meetup time.",orderItems:[{FoodID:1,FoodName:"Apples",CategoryID:1,CategoryName:"Fruits"},{FoodID:8,FoodName:"Onions",CategoryID:2,CategoryName:"Vegetables"},{FoodID:10,FoodName:"Potatoes",CategoryID:2,CategoryName:"Vegetables"},{FoodID:21,FoodName:"Milk",CategoryID:5,CategoryName:"Dairy"},{FoodID:16,FoodName:"Fish",CategoryID:4,CategoryName:"Proteins"}]},user:{UserID:1,UserName:"llathrop",EmailAddress:"ll0128774@otc.edu",FirstName:"Louis",LastName:"Lathrop",Location:65804}},{order:{OrderID:2,UserID:2,FamilySize:4,Status:"Open",PickupLocation:"SW Springfield",RequestorNote:"Leave it at my doorstep at 124 s Barcliff Ave. Thanks!",orderItems:[{FoodID:5,FoodName:"Bananas",CategoryID:1,CategoryName:"Fruits"},{FoodID:12,FoodName:"Carrots",CategoryID:2,CategoryName:"Vegetables"},{FoodID:14,FoodName:"Broccoli",CategoryID:2,CategoryName:"Vegetables"},{FoodID:24,FoodName:"Eggs",CategoryID:5,CategoryName:"Dairy"},{FoodID:18,FoodName:"Chicken",CategoryID:4,CategoryName:"Proteins"}]},user:{UserID:2,UserName:"jdoe",EmailAddress:"jdoe@example.com",FirstName:"John",LastName:"Doe",Location:65807}},{order:{OrderID:3,UserID:3,FamilySize:2,Status:"Open",PickupLocation:"Target on E. Independence St",RequestorNote:"Call me at 417-555-5555 to arrange a meetup time. Thanks!",orderItems:[{FoodID:3,FoodName:"Oranges",CategoryID:1,CategoryName:"Fruits"},{FoodID:9,FoodName:"Tomatoes",CategoryID:2,CategoryName:"Vegetables"},{FoodID:11,FoodName:"Spinach",CategoryID:2,CategoryName:"Vegetables"},{FoodID:22,FoodName:"Cheese",CategoryID:5,CategoryName:"Dairy"},{FoodID:20,FoodName:"Beef",CategoryID:4,CategoryName:"Proteins"}]},user:{UserID:3,UserName:"asmith",EmailAddress:"asmith@example.com",FirstName:"Alice",LastName:"Smith",Location:65802}}]}static getRequestAndServiceHistoryForUser(){return{service_orders:[{order:{OrderID:3,UserID:3,FamilySize:2,Status:"Completed",orderItems:[{FoodID:3,FoodName:"Oranges",CategoryID:1,CategoryName:"Fruits"},{FoodID:9,FoodName:"Tomatoes",CategoryID:2,CategoryName:"Vegetables"},{FoodID:11,FoodName:"Spinach",CategoryID:2,CategoryName:"Vegetables"},{FoodID:22,FoodName:"Cheese",CategoryID:5,CategoryName:"Dairy"},{FoodID:20,FoodName:"Beef",CategoryID:4,CategoryName:"Proteins"}]}}],request_orders:[{order:{OrderID:2,UserID:2,FamilySize:4,Status:"Open",PickupLocation:"SW Springfield",RequestorNote:"Leave it at my doorstep at 124 s Barcliff Ave. Thanks!",orderItems:[{FoodID:5,FoodName:"Bananas",CategoryID:1,CategoryName:"Fruits"},{FoodID:12,FoodName:"Carrots",CategoryID:2,CategoryName:"Vegetables"},{FoodID:14,FoodName:"Broccoli",CategoryID:2,CategoryName:"Vegetables"},{FoodID:24,FoodName:"Eggs",CategoryID:5,CategoryName:"Dairy"},{FoodID:18,FoodName:"Chicken",CategoryID:4,CategoryName:"Proteins"}]}}]}}}export{T as P,A as T};
