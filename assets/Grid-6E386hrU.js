import{j as r,l as v,m as h,$ as y,r as _,U as S,a0 as N}from"./index-zsMJ5KtC.js";import{S as $,d as w,a as I}from"./List_box-TepsuAmi.js";const C=()=>{let e=10;return r.jsx("ul",{className:"gird-skeleton",children:(()=>{const s=[];for(let t=1;t<=e;t++)s.push(r.jsx("li",{children:r.jsx($,{animation:"wave",sx:{bgcolor:"var(--skeleton-color)"},variant:"rounded",width:350,height:330})},t));return s})()})};var d={},b=h;Object.defineProperty(d,"__esModule",{value:!0});var g=d.default=void 0,F=b(v()),L=r,k=(0,F.default)((0,L.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");g=d.default=k;var u={},A=h;Object.defineProperty(u,"__esModule",{value:!0});var m=u.default=void 0,O=A(v()),R=r,E=(0,O.default)((0,R.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");m=u.default=E;const J=e=>{let s;try{const a=localStorage.getItem("watchList");s=a?JSON.parse(a):[],Array.isArray(s)||(s=[])}catch(a){console.error("Error parsing localStorage:",a),s=[]}if(s.includes(e))return;const t=JSON.stringify([...s,e]);localStorage.setItem("watchList",t)},q=(e,s)=>{let t;try{const a=localStorage.getItem("watchList");t=a?JSON.parse(a):[],Array.isArray(t)||(t=[])}catch(a){console.error("Error parsing localStorage:",a),t=[]}if(t.includes(e)){let a=t.filter(l=>l!==e);const n=JSON.stringify(a);localStorage.setItem("watchList",n),s(n)}},B=({ele:e,delay:s,setFavIds:t})=>{const a=j(),n=y(),[l,x]=_.useState(a.includes(e.id));let c="green";e.price_change_24h<0&&(c="red");function j(){let o;try{const i=localStorage.getItem("watchList");o=i?JSON.parse(i):[],Array.isArray(o)||(o=[])}catch(i){console.error("Error parsing localStorage:",i),o=[]}return o}const f=o=>{console.log(o),n(`/coin/${o}`)};function p(o,i){o.stopPropagation(),x(!l),l?q(i,t):J(i)}return r.jsxs(S.div,{onClick:o=>f(e.id),initial:{opacity:0,y:100},animate:{opacity:1,y:0},transition:{duration:0,delay:s},className:`grid-box ${c=="red"?"red-border":"green-border"}`,children:[r.jsxs("div",{className:"row",children:[r.jsxs("div",{className:"first-row",children:[r.jsx("div",{className:"logo",children:r.jsx("img",{src:e.image,alt:"logo"})}),r.jsxs("div",{children:[r.jsx("h2",{children:e.name}),r.jsx("span",{style:{color:"var(--gray)"},children:e.id})]})]}),r.jsx("div",{onClick:o=>{p(o,e.id)},className:"favorite",children:r.jsx(N,{sx:{color:"#ee6c6c"},children:l?r.jsx(m,{}):r.jsx(g,{})})})]}),r.jsxs("div",{className:"row",children:[r.jsx("button",{className:`price ${c}`,children:e.price_change_percentage_24h}),r.jsx("button",{className:`price ${c} circle`,children:c=="green"?r.jsx(w,{}):r.jsx(I,{})})]}),r.jsx("div",{className:"row",children:r.jsxs("h2",{className:"price-cur",style:{color:`var(--${c}`},children:["$",e.current_price]})}),r.jsxs("div",{className:"last-row",style:{color:"var(--gray)"},children:[r.jsxs("div",{children:[r.jsx("h4",{children:"Total Valume : "}),r.jsx("p",{children:e.total_volume})]}),r.jsxs("div",{children:[r.jsx("h4",{children:"Market Cap : "}),r.jsx("p",{children:e.market_cap})]})]})]},e.id)},V=({data:e,setFavIds:s})=>{let t=0;return!e||e.length==0?r.jsx(C,{}):r.jsx("div",{className:"grid-container",children:e.map(a=>(t+=.03,r.jsx(B,{ele:a,delay:t,setFavIds:s},a.id)))})};export{V as default};
