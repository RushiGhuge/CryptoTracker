import{r as a,j as e,n as L}from"./index-vAvfB6Tm.js";import{S as b,M as f,s as h,C as z,a as A,b as G,c as R,d as k,e as W,g as D}from"./ChartButtonsChangeData-j9Z7T-W2.js";import{L as w}from"./List_box-0a_Se5Nx.js";import{k as E,Q as O}from"./ReactToastify-wl3405zU.js";import P from"./GetToTopButton-mEcl9KcV.js";import"./style-nJJ4Q6Ze.js";import"./TrendingDown-kynYo8hQ.js";const I={color:"white",borderRadius:"10px","& .MuiInputBase-input":{borderColor:"red",color:"white",background:"#9c27b0",fontWeight:"600",minWidth:"120px"}},Q=({coin_1:s,coin_2:m,setCoin_1:n,setCoin_2:u})=>{const[r,x]=a.useState([]);a.useEffect(()=>{async function t(){try{const o=await L.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");x(o.data)}catch(o){alert(o.message)}}t()},[]);const l=t=>{n(t.target.value)},j=t=>{u(t.target.value)};return e.jsx(e.Fragment,{children:r.length>1&&e.jsxs("div",{className:"option-btns-container",children:[e.jsxs("div",{children:["Coin 1 :",e.jsxs(b,{size:"small",sx:I,labelId:"demo-simple-select-label",id:"demo-simple-select",value:s,label:"Coin 1 ",onChange:l,children:[e.jsx(f,{value:"f",children:"f"},"1"),r.map((t,o)=>e.jsx(f,{value:t.id,children:t.name},o))]})]}),e.jsxs("div",{children:["Coin 2 :",e.jsx(b,{size:"small",sx:I,labelId:"demo-simple-select-label",id:"demo-simple-select",value:m,label:"Coin 2 ",onChange:j,children:r.map((t,o)=>e.jsx(f,{value:t.id,children:t.name},o))})]})]})})};async function $(s){return(await L.get(`https://api.coingecko.com/api/v3/coins/${s}`)).data}const Y=()=>{const[s,m]=a.useState("bitcoin"),[n,u]=a.useState("binancecoin"),[r,x]=a.useState(15),[l,j]=a.useState(null),[t,o]=a.useState(null),[v,p]=a.useState(null),[i,N]=a.useState(null),[C,B]=a.useState("prices"),[F,M]=a.useState(!0),_=d=>O(d);async function y(d,g){try{let c=await $(d);W(g,c),M(!1)}catch(c){_(c.message)}}a.useEffect(()=>{y(s,j)},[s]),a.useEffect(()=>{y(n,o)},[n]);const T=async(d,g)=>{try{const c=await D(d,r),S=await D(g,r);h(c.prices,p,[s,n],S.prices),N([c,S])}catch(c){_(c.message)}};return a.useEffect(()=>{T(s,n)},[s,n,r]),a.useEffect(()=>{i&&(console.log("done"),C=="prices"?h(i[0].prices,p,[s,n],i[1].prices):C=="market_caps"?h(i[0].market_caps,p,[s,n],i[1].market_caps):h(i[0].total_volumes,p,[s,n],i[1].total_volumes))},[C]),F?e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(E,{theme:"dark",type:"error"})]}):e.jsxs("div",{className:"compare-container",children:[e.jsx("h2",{children:"Compare Crypto Currency 🪙"}),e.jsxs("div",{className:"container-compare-op",children:[e.jsx(Q,{coin_1:s,coin_2:n,setCoin_1:m,setCoin_2:u}),e.jsx(A,{days:r,setDays:x})]}),l&&t&&e.jsxs("div",{className:"container-compare-notMain",children:[e.jsxs("div",{className:"list-compare-container",children:[e.jsx(w,{ele:l}),e.jsx(w,{ele:t})]}),v&&e.jsxs("div",{children:[e.jsx(G,{setChartShow:B}),e.jsx(R,{data:v,multiAxis:!0})]}),e.jsxs("div",{children:[e.jsx(k,{heading:l.name,desc:l.desc}),e.jsx(k,{heading:t.name,desc:t.desc})]})]}),e.jsx(P,{}),e.jsx(E,{theme:"dark",type:"error"})]})};export{Y as default};
