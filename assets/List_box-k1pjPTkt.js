import{j as e,a1 as a,U as l,a2 as s}from"./index-Er43YcUR.js";import{d as c,a as o}from"./TrendingDown-zMLSGjVf.js";const n=r=>r>=1e12?(r/1e12).toFixed(2)+" T":r>=1e9?(r/1e9).toFixed(2)+" B":r>=1e6?(r/1e6).toFixed(2)+" M":r>=1e3?(r/1e3).toFixed(2)+" K":r.toString(),h=({ele:r,delay:i=0})=>{let t="green";return r.price_change_24h<0&&(t="red"),e.jsx(a,{to:`/coin/${r.id}`,children:e.jsxs(l.tr,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{duration:0,delay:i},className:"list-box",children:[e.jsx(s,{title:"Coin",arrow:!0,children:e.jsxs("td",{className:"col",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:r.image,alt:"logo"})}),e.jsxs("div",{children:[e.jsx("h3",{children:r.name}),e.jsx("span",{style:{color:"var(--gray)"},children:r.id})]})]})}),e.jsxs("td",{className:"col",children:[e.jsx(s,{title:"Day Changes",arrow:!0,children:e.jsx("button",{className:`price ${t}`,children:r.price_change_percentage_24h})}),e.jsx(s,{title:"Current Status",arrow:!0,children:e.jsx("button",{className:`price ${t} circle circle-list`,children:t=="green"?e.jsx(c,{}):e.jsx(o,{})})})]}),e.jsx("td",{className:"col",children:e.jsx(s,{title:"Current Price",arrow:!0,children:e.jsxs("h2",{className:"price-cur",style:{color:`var(--${t}`},children:["$",r.current_price]})})}),e.jsxs("td",{className:"last-col",style:{color:"var(--white)"},children:[e.jsx("div",{className:"total-val",children:e.jsx(s,{title:"Total Valume",arrow:!0,children:e.jsxs("p",{children:["$",r.total_volume]})})}),e.jsx("div",{className:"desktop-tmc",children:e.jsx(s,{title:"Total Market Cap",arrow:!0,children:e.jsxs("p",{children:["$",r.market_cap]})})}),e.jsxs("div",{className:"mobile-tmc",children:[e.jsx(s,{title:"Total Market Cap",arrow:!0,children:e.jsxs("p",{children:["$",n(r.market_cap)]})}),"s"]})]})]})})};export{h as L};
