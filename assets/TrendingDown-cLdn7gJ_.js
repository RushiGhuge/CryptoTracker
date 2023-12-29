import{g as S,a as j,a3 as C,s as U,b as o,d as M,a4 as g,r as T,e as D,_ as L,j as d,h as q,k as A,l as k,m as x}from"./index-oLjld516.js";function P(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(t){return parseFloat(t)}function E(t){return S("MuiSkeleton",t)}j("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const I=["animation","className","component","height","style","variant","width"];let s=t=>t,v,m,b,_;const N=t=>{const{classes:e,variant:a,animation:r,hasChildren:n,width:l,height:i}=t;return A({root:["root",a,r,n&&"withChildren",n&&!l&&"fitContent",n&&!i&&"heightAuto"]},E,e)},O=C(v||(v=s`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),z=C(m||(m=s`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),B=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=P(t.shape.borderRadius)||"px",r=X(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:M(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${a}/${Math.round(r/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&g(b||(b=s`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),O),({ownerState:t,theme:e})=>t.animation==="wave"&&g(_||(_=s`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),z,(e.vars||e).palette.action.hover)),F=T.forwardRef(function(e,a){const r=D({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:l,component:i="span",height:c,style:y,variant:w="text",width:R}=r,p=L(r,I),f=o({},r,{animation:n,component:i,variant:w,hasChildren:!!p.children}),$=N(f);return d.jsx(B,o({as:i,ref:a,className:q($.root,l),ownerState:f},p,{style:o({width:R,height:c},y)}))}),at=F;var u={},K=x;Object.defineProperty(u,"__esModule",{value:!0});var V=u.default=void 0,W=K(k()),G=d,H=(0,W.default)((0,G.jsx)("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}),"TrendingUp");V=u.default=H;var h={},J=x;Object.defineProperty(h,"__esModule",{value:!0});var Q=h.default=void 0,Y=J(k()),Z=d,tt=(0,Y.default)((0,Z.jsx)("path",{d:"m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"}),"TrendingDown");Q=h.default=tt;export{at as S,Q as a,V as d};
