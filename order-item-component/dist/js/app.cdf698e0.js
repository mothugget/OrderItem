(function(){"use strict";var t={6057:function(t,e,r){var o=r(9242),n=r(3396);function u(t,e,r,o,u,s){const d=(0,n.up)("OrderList");return(0,n.wg)(),(0,n.j4)(d)}const s={class:"order-list"},d={class:"search-form"},a=["onClick"],i=(0,n._)("div",{class:"delete-button-inner"},null,-1),c=[i];function l(t,e,r,u,i,l){const p=(0,n.up)("OrderItem");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("form",d,[(0,n.wy)((0,n._)("input",{class:"search-input",placeholder:"Search by Order Ref",type:"text","onUpdate:modelValue":e[0]||(e[0]=e=>t.search=e),maxlength:"5"},null,512),[[o.nr,t.search]])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.displayedOrders,(e=>((0,n.wg)(),(0,n.iD)("li",{class:"order-list-elements",key:e.orderRef},[(0,n.Wm)(p,{order:e},null,8,["order"]),(0,n._)("button",{class:"delete-button",onClick:r=>t.deleteOrder(e)},c,8,a)])))),128))])}r(7658);var p=r(4870),y=r(7139);const f={class:"order-item"},m={class:"order-item-container"};function v(t,e,r,o,u,s){const d=(0,n.up)("AddressContainer"),a=(0,n.up)("ProductList");return(0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("h3",null,"Order Reference: "+(0,y.zw)(t.order.orderRef),1),(0,n._)("div",m,[(0,n.Wm)(d,{address:t.order.address},null,8,["address"]),(0,n.Wm)(a,{productList:t.order.productList,orderRef:t.order.orderRef},null,8,["productList","orderRef"])])])}const C={class:"adress-container"},b=(0,n._)("td",{class:"table-label"},"Name",-1),_=(0,n._)("td",{class:"table-label"},"Company",-1),h=(0,n._)("td",{class:"table-label"},"Street",-1),g=(0,n._)("td",{class:"table-label"},"City",-1),k=(0,n._)("td",{class:"table-label"},"Postal Code",-1),w=(0,n._)("td",{class:"table-label"},"Country",-1);function L(t,e,r,o,u,s){return(0,n.wg)(),(0,n.iD)("table",C,[(0,n._)("tr",null,[b,(0,n._)("td",null,(0,y.zw)(t.address.name),1)]),(0,n._)("tr",null,[_,(0,n._)("td",null,(0,y.zw)(t.address.company),1)]),(0,n._)("tr",null,[h,(0,n._)("td",null,(0,y.zw)(t.address.street),1)]),(0,n._)("tr",null,[g,(0,n._)("td",null,(0,y.zw)(t.address.city),1)]),(0,n._)("tr",null,[k,(0,n._)("td",null,(0,y.zw)(t.address.postalCode),1)]),(0,n._)("tr",null,[w,(0,n._)("td",null,(0,y.zw)(t.address.country),1)])])}var P=(0,n.aZ)({name:"AddressContainer",props:{address:{required:!0,type:Object}}}),R=r(89);const O=(0,R.Z)(P,[["render",L]]);var q=O;const I={class:"product-list"};function D(t,e,r,o,u,s){const d=(0,n.up)("ProductContainer"),a=(0,n.up)("ProductModalVue");return(0,n.wg)(),(0,n.iD)("div",I,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.productList,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.product.sku},[(0,n.Wm)(d,{productLine:e,orderRef:t.orderRef},null,8,["productLine","orderRef"])])))),128)),(0,n._)("button",{class:"add-button",onClick:e[0]||(e[0]=(...e)=>t.launchProductModal&&t.launchProductModal(...e))},"Add product to order"),t.showProductModal?((0,n.wg)(),(0,n.j4)(a,{key:0,onClose:t.launchProductModal,orderProducts:t.orderProducts},null,8,["onClose","orderProducts"])):(0,n.kq)("",!0)])}const Z={class:"product-container"},A={class:"product-id-info"},M={class:"article-number"},J=(0,n._)("label",null,"Quantity",-1),B={class:"quantity"},Q=["value"],S=["disabled"],Y={key:0,class:"saved-popup"};function U(t,e,r,u,s,d){return(0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("div",A,[(0,n._)("h4",null,(0,y.zw)(t.productLine.product.title),1),(0,n._)("span",M,(0,y.zw)(t.productLine.product.sku),1)]),(0,n._)("form",{class:"quantity-form",onSubmit:e[0]||(e[0]=(0,o.iM)(((...e)=>t.submitQuantity&&t.submitQuantity(...e)),["prevent"]))},[J,(0,n._)("div",B,[(0,n._)("input",{class:"quantity-input",type:"number",required:"",min:"0",value:t.quantity},null,8,Q),(0,n._)("button",{disabled:t.showPopUp,type:"submit"},[(0,n.Uk)(" Save "),t.showPopUp?((0,n.wg)(),(0,n.iD)("div",Y,"Saved")):(0,n.kq)("",!0)],8,S)])],32)])}var j=(0,n.aZ)({name:"ProductContainer",props:{productLine:{required:!0,type:Object},orderRef:{required:!0,type:String}},setup(t){const e=(0,p.iH)(!1);let r=(0,n.Fl)((()=>t.productLine.quantity));const{updateQuantity:o}=(0,n.f3)("updateQuantity"),u=(0,p.iH)(!1);function s(e){o(t.orderRef,t.productLine.product.sku,parseInt(e.target[0].value)),u.value=!0,setTimeout((()=>{u.value=!1}),1100)}return{quantity:r,showForm:e,submitQuantity:s,showPopUp:u}}});const E=(0,R.Z)(j,[["render",U]]);var F=E;const x=t=>((0,n.dD)("data-v-c9dc5a62"),t=t(),(0,n.Cn)(),t),z={class:"product-modal"},W=x((()=>(0,n._)("div",{class:"delete-button-inner"},null,-1))),V=[W],H={class:"order-item-container"};function T(t,e,r,o,u,s){const d=(0,n.up)("ProductContainer");return(0,n.wg)(),(0,n.iD)("div",z,[(0,n._)("h3",null,"Order: "+(0,y.zw)(t.orderProducts.orderRef),1),(0,n._)("button",{class:"delete-button",onClick:e[0]||(e[0]=(...e)=>t.closeModal&&t.closeModal(...e))},V),(0,n._)("div",H,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.productsWithQuantities,(e=>((0,n.wg)(),(0,n.iD)("li",{class:"modal-list",key:e.product.sku},[(0,n.Wm)(d,{productLine:e,orderRef:t.orderProducts.orderRef},null,8,["productLine","orderRef"])])))),128))]),(0,n._)("button",{class:"modal-backdrop-button",onClick:e[1]||(e[1]=(...e)=>t.closeModal&&t.closeModal(...e))})])}var N=(0,n.aZ)({name:"ProductModal",props:{orderProducts:{required:!0,type:Object}},components:{ProductContainer:F},setup(t,{emit:e}){const r=(0,n.f3)("PRODUCT_LIST");function o(){e("close")}const u=(0,n.Fl)((()=>r?.map((e=>{let r=0;for(let o of t.orderProducts.products)e.sku===o.sku&&(r=o.quantity);return{quantity:r,product:e}}))));return{productsWithQuantities:u,closeModal:o}}});const K=(0,R.Z)(N,[["render",T],["__scopeId","data-v-c9dc5a62"]]);var X=K,G=(0,n.aZ)({name:"ProductList",components:{ProductContainer:F,ProductModalVue:X},props:{productList:{required:!0,type:Object},orderRef:{required:!0,type:String}},setup(t){const e=(0,n.Fl)((()=>{const e=[];for(let o of t.productList)e.push({sku:o.product.sku,quantity:o.quantity});const r={orderRef:t.orderRef,products:e};return r}));function r(){o.value=!o.value}const o=(0,p.iH)(!1);return{orderProducts:e,showProductModal:o,launchProductModal:r}}});const $=(0,R.Z)(G,[["render",D]]);var tt=$,et=(0,n.aZ)({name:"OrderItem",components:{AddressContainer:q,ProductList:tt},props:{order:{required:!0,type:Object}}});const rt=(0,R.Z)(et,[["render",v],["__scopeId","data-v-82a5b130"]]);var ot=rt,nt=(0,n.aZ)({name:"OrderList",components:{OrderItem:ot},setup(){const t=[{sku:"86ZL82ERVQ",title:"Washer",category:"Industry",price:38.09},{sku:"9LU38YOJ8A",title:"Piston",category:"Industry",price:81.14},{sku:"LJ1AUIWQZ6",title:"Cam",category:"Automotive",price:40.34},{sku:"6EFD0C00DI",title:"Clamp",category:"Nautical",price:68.62},{sku:"ZJY1JYB1A1",title:"Bolt",category:"Automotive",price:73.52},{sku:"KDPRURUR2M",title:"Valve",category:"Industry",price:69.95},{sku:"EIQ25ZB9UQ",title:"Nut",category:"Automotive",price:75.36},{sku:"CMVI6FA5BC",title:"Bearing",category:"Industry",price:38.87}],e=(0,p.iH)([{orderRef:"MR1Zq",address:{name:"John Doe",company:"ABC Company",street:"123 Main Street",city:"City1",postalCode:"12345",country:"Country1"},productList:[{product:{sku:"ZJY1JYB1A1",title:"Bolt",category:"Automotive",price:73.52},quantity:1}]},{orderRef:"wt3l5",address:{name:"Jane Smith",company:"XYZ Corporation",street:"456 Elm Street",city:"City2",postalCode:"67890",country:"Country2"},productList:[{product:{sku:"ZJY1JYB1A1",title:"Bolt",category:"Automotive",price:73.52},quantity:5},{product:{sku:"86ZL82ERVQ",title:"Washer",category:"Industry",price:38.09},quantity:2}]},{orderRef:"gpn2n",address:{name:"John Doe",company:"ABC Company",street:"123 Main Street",city:"City1",postalCode:"12345",country:"Country1"},productList:[{product:{sku:"ZJY1JYB1A1",title:"Bolt",category:"Automotive",price:73.52},quantity:2},{product:{sku:"9LU38YOJ8A",title:"Piston",category:"Industry",price:81.14},quantity:3}]},{orderRef:"i94Dp",address:{name:"Jane Smith",company:"XYZ Corporation",street:"456 Elm Street",city:"City2",postalCode:"67890",country:"Country2"},productList:[{product:{sku:"EIQ25ZB9UQ",title:"Nut",category:"Automotive",price:75.36},quantity:2},{product:{sku:"6EFD0C00DI",title:"Clamp",category:"Nautical",price:68.62},quantity:3},{product:{sku:"CMVI6FA5BC",title:"Bearing",category:"Industry",price:38.87},quantity:2}]},{orderRef:"IsLCq",address:{name:"John Doe",company:"ABC Company",street:"123 Main Street",city:"City1",postalCode:"12345",country:"Country1"},productList:[{product:{sku:"CMVI6FA5BC",title:"Bearing",category:"Industry",price:38.87},quantity:3}]}]);function r(t){const r=e.value.indexOf(t);-1!==r&&e.value.splice(r,1)}function o(r,o,n){const u=e.value.findIndex((t=>t.orderRef===r));let s=e.value[u].productList.findIndex((t=>t.product.sku===o));if(-1===s&&n>0){const r=t.find((t=>t.sku===o));r&&e.value[u].productList.unshift({quantity:n,product:r}),s=0}else-1!==s&&(n<1?e.value[u].productList.splice(s,1):e.value[u].productList[s].quantity=n)}const u=(0,p.iH)("");(0,n.JJ)("updateQuantity",{updateQuantity:o}),(0,n.JJ)("PRODUCT_LIST",t);const s=(0,n.Fl)((()=>{const t=[];return e.value.forEach((e=>{e.orderRef.toLowerCase().includes(u.value.toLowerCase())&&t.push(e)})),t}));return{ORDER_LIST:e,deleteOrder:r,displayedOrders:s,search:u}}});const ut=(0,R.Z)(nt,[["render",l]]);var st=ut,dt=(0,n.aZ)({name:"App",components:{OrderList:st}});const at=(0,R.Z)(dt,[["render",u]]);var it=at;(0,o.ri)(it).mount("#app")}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var u=e[o]={exports:{}};return t[o].call(u.exports,u,u.exports,r),u.exports}r.m=t,function(){var t=[];r.O=function(e,o,n,u){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],n=t[c][1],u=t[c][2];for(var d=!0,a=0;a<o.length;a++)(!1&u||s>=u)&&Object.keys(r.O).every((function(t){return r.O[t](o[a])}))?o.splice(a--,1):(d=!1,u<s&&(s=u));if(d){t.splice(c--,1);var i=n();void 0!==i&&(e=i)}}return e}u=u||0;for(var c=t.length;c>0&&t[c-1][2]>u;c--)t[c]=t[c-1];t[c]=[o,n,u]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,u,s=o[0],d=o[1],a=o[2],i=0;if(s.some((function(e){return 0!==t[e]}))){for(n in d)r.o(d,n)&&(r.m[n]=d[n]);if(a)var c=a(r)}for(e&&e(o);i<s.length;i++)u=s[i],r.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return r.O(c)},o=self["webpackChunkorder_item_component"]=self["webpackChunkorder_item_component"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(6057)}));o=r.O(o)})();
//# sourceMappingURL=app.cdf698e0.js.map