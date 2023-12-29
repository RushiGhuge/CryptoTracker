import{a as nt,g as st,s as $,B as Nt,i as jt,b as h,r as n,e as at,_ as V,h as L,j as d,k as it,c as kt,w as ae,v as _t,x as At,f as Ft,N as rt,Z as ht,K as ie,o as Ot,L as ce,S as Mt}from"./index-vAvfB6Tm.js";import"./style-nJJ4Q6Ze.js";let U;function Ht(){if(U)return U;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),U="reverse",t.scrollLeft>0?U="default":(t.scrollLeft=1,t.scrollLeft===0&&(U="negative")),document.body.removeChild(t),U}function de(t,e){const l=t.scrollLeft;if(e!=="rtl")return l;switch(Ht()){case"negative":return t.scrollWidth-t.clientWidth+l;case"reverse":return t.scrollWidth-t.clientWidth-l;default:return l}}function ue(t){return st("MuiTab",t)}const be=nt("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),A=be,fe=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],pe=t=>{const{classes:e,textColor:l,fullWidth:s,wrapped:a,icon:i,label:b,selected:f,disabled:p}=t,m={root:["root",i&&b&&"labelIcon",`textColor${jt(l)}`,s&&"fullWidth",a&&"wrapped",f&&"selected",p&&"disabled"],iconWrapper:["iconWrapper"]};return it(m,ue,e)},he=$(Nt,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.root,l.label&&l.icon&&e.labelIcon,e[`textColor${jt(l.textColor)}`],l.fullWidth&&e.fullWidth,l.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>h({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${A.iconWrapper}`]:h({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${A.selected}`]:{opacity:1},[`&.${A.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${A.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${A.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${A.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${A.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),ve=n.forwardRef(function(e,l){const s=at({props:e,name:"MuiTab"}),{className:a,disabled:i=!1,disableFocusRipple:b=!1,fullWidth:f,icon:p,iconPosition:m="top",indicator:x,label:w,onChange:g,onClick:C,onFocus:F,selected:I,selectionFollowsFocus:y,textColor:O="inherit",value:B,wrapped:ct=!1}=s,H=V(s,fe),Y=h({},s,{disabled:i,disableFocusRipple:b,selected:I,icon:!!p,iconPosition:m,label:!!w,fullWidth:f,textColor:O,wrapped:ct}),D=pe(Y),N=p&&w&&n.isValidElement(p)?n.cloneElement(p,{className:L(D.iconWrapper,p.props.className)}):p,J=M=>{!I&&g&&g(M,B),C&&C(M)},X=M=>{y&&!I&&g&&g(M,B),F&&F(M)};return d.jsxs(he,h({focusRipple:!b,className:L(D.root,a),ref:l,role:"tab","aria-selected":I,disabled:i,onClick:J,onFocus:X,ownerState:Y,tabIndex:I?0:-1},H,{children:[m==="top"||m==="start"?d.jsxs(n.Fragment,{children:[N,w]}):d.jsxs(n.Fragment,{children:[w,N]}),x]}))}),Rt=ve,xe=kt(d.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),me=kt(d.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Se(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function ge(t,e,l,s={},a=()=>{}){const{ease:i=Se,duration:b=300}=s;let f=null;const p=e[t];let m=!1;const x=()=>{m=!0},w=g=>{if(m){a(new Error("Animation cancelled"));return}f===null&&(f=g);const C=Math.min(1,(g-f)/b);if(e[t]=i(C)*(l-p)+p,C>=1){requestAnimationFrame(()=>{a(null)});return}requestAnimationFrame(w)};return p===l?(a(new Error("Element already at target position")),x):(requestAnimationFrame(w),x)}const Ce=["onChange"],ye={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function we(t){const{onChange:e}=t,l=V(t,Ce),s=n.useRef(),a=n.useRef(null),i=()=>{s.current=a.current.offsetHeight-a.current.clientHeight};return ae(()=>{const b=At(()=>{const p=s.current;i(),p!==s.current&&e(s.current)}),f=_t(a.current);return f.addEventListener("resize",b),()=>{b.clear(),f.removeEventListener("resize",b)}},[e]),n.useEffect(()=>{i(),e(s.current)},[e]),d.jsx("div",h({style:ye,ref:a},l))}function Be(t){return st("MuiTabScrollButton",t)}const Te=nt("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Ie=Te,Pe=["className","slots","slotProps","direction","orientation","disabled"],Ee=t=>{const{classes:e,orientation:l,disabled:s}=t;return it({root:["root",l,s&&"disabled"]},Be,e)},Me=$(Nt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.root,l.orientation&&e[l.orientation]]}})(({ownerState:t})=>h({width:40,flexShrink:0,opacity:.8,[`&.${Ie.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),Re=n.forwardRef(function(e,l){var s,a;const i=at({props:e,name:"MuiTabScrollButton"}),{className:b,slots:f={},slotProps:p={},direction:m}=i,x=V(i,Pe),g=Ft().direction==="rtl",C=h({isRtl:g},i),F=Ee(C),I=(s=f.StartScrollButtonIcon)!=null?s:xe,y=(a=f.EndScrollButtonIcon)!=null?a:me,O=rt({elementType:I,externalSlotProps:p.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:C}),B=rt({elementType:y,externalSlotProps:p.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:C});return d.jsx(Me,h({component:"div",className:L(F.root,b),ref:l,role:null,ownerState:C,tabIndex:null},x,{children:m==="left"?d.jsx(I,h({},O)):d.jsx(y,h({},B))}))}),Le=Re;function ze(t){return st("MuiTabs",t)}const We=nt("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),vt=We,$e=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Lt=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,zt=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,lt=(t,e,l)=>{let s=!1,a=l(t,e);for(;a;){if(a===t.firstChild){if(s)return;s=!0}const i=a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||i)a=l(t,a);else{a.focus();return}}},Ne=t=>{const{vertical:e,fixed:l,hideScrollbar:s,scrollableX:a,scrollableY:i,centered:b,scrollButtonsHideMobile:f,classes:p}=t;return it({root:["root",e&&"vertical"],scroller:["scroller",l&&"fixed",s&&"hideScrollbar",a&&"scrollableX",i&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",b&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",f&&"scrollButtonsHideMobile"],scrollableX:[a&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},ze,p)},je=$("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[{[`& .${vt.scrollButtons}`]:e.scrollButtons},{[`& .${vt.scrollButtons}`]:l.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,l.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>h({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${vt.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),ke=$("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.scroller,l.fixed&&e.fixed,l.hideScrollbar&&e.hideScrollbar,l.scrollableX&&e.scrollableX,l.scrollableY&&e.scrollableY]}})(({ownerState:t})=>h({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),_e=$("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.flexContainer,l.vertical&&e.flexContainerVertical,l.centered&&e.centered]}})(({ownerState:t})=>h({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Ae=$("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>h({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Fe=$(we)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Wt={},Oe=n.forwardRef(function(e,l){const s=at({props:e,name:"MuiTabs"}),a=Ft(),i=a.direction==="rtl",{"aria-label":b,"aria-labelledby":f,action:p,centered:m=!1,children:x,className:w,component:g="div",allowScrollButtonsMobile:C=!1,indicatorColor:F="primary",onChange:I,orientation:y="horizontal",ScrollButtonComponent:O=Le,scrollButtons:B="auto",selectionFollowsFocus:ct,slots:H={},slotProps:Y={},TabIndicatorProps:D={},TabScrollButtonProps:N={},textColor:J="primary",value:X,variant:M="standard",visibleScrollbar:dt=!1}=s,Yt=V(s,$e),P=M==="scrollable",T=y==="vertical",K=T?"scrollTop":"scrollLeft",Q=T?"top":"left",tt=T?"bottom":"right",ut=T?"clientHeight":"clientWidth",q=T?"height":"width",j=h({},s,{component:g,allowScrollButtonsMobile:C,indicatorColor:F,orientation:y,vertical:T,scrollButtons:B,textColor:J,variant:M,visibleScrollbar:dt,fixed:!P,hideScrollbar:P&&!dt,scrollableX:P&&!T,scrollableY:P&&T,centered:m&&!P,scrollButtonsHideMobile:!C}),z=Ne(j),Kt=rt({elementType:H.StartScrollButtonIcon,externalSlotProps:Y.startScrollButtonIcon,ownerState:j}),qt=rt({elementType:H.EndScrollButtonIcon,externalSlotProps:Y.endScrollButtonIcon,ownerState:j}),[xt,Gt]=n.useState(!1),[k,mt]=n.useState(Wt),[St,Zt]=n.useState(!1),[gt,Jt]=n.useState(!1),[Ct,Qt]=n.useState(!1),[yt,te]=n.useState({overflow:"hidden",scrollbarWidth:0}),wt=new Map,R=n.useRef(null),_=n.useRef(null),Bt=()=>{const o=R.current;let r;if(o){const c=o.getBoundingClientRect();r={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:de(o,a.direction),scrollWidth:o.scrollWidth,top:c.top,bottom:c.bottom,left:c.left,right:c.right}}let u;if(o&&X!==!1){const c=_.current.children;if(c.length>0){const v=c[wt.get(X)];u=v?v.getBoundingClientRect():null}}return{tabsMeta:r,tabMeta:u}},G=ht(()=>{const{tabsMeta:o,tabMeta:r}=Bt();let u=0,c;if(T)c="top",r&&o&&(u=r.top-o.top+o.scrollTop);else if(c=i?"right":"left",r&&o){const S=i?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;u=(i?-1:1)*(r[c]-o[c]+S)}const v={[c]:u,[q]:r?r[q]:0};if(isNaN(k[c])||isNaN(k[q]))mt(v);else{const S=Math.abs(k[c]-v[c]),E=Math.abs(k[q]-v[q]);(S>=1||E>=1)&&mt(v)}}),bt=(o,{animation:r=!0}={})=>{r?ge(K,R.current,o,{duration:a.transitions.duration.standard}):R.current[K]=o},Tt=o=>{let r=R.current[K];T?r+=o:(r+=o*(i?-1:1),r*=i&&Ht()==="reverse"?-1:1),bt(r)},It=()=>{const o=R.current[ut];let r=0;const u=Array.from(_.current.children);for(let c=0;c<u.length;c+=1){const v=u[c];if(r+v[ut]>o){c===0&&(r=o);break}r+=v[ut]}return r},ee=()=>{Tt(-1*It())},oe=()=>{Tt(It())},le=n.useCallback(o=>{te({overflow:null,scrollbarWidth:o})},[]),re=()=>{const o={};o.scrollbarSizeListener=P?d.jsx(Fe,{onChange:le,className:L(z.scrollableX,z.hideScrollbar)}):null;const u=P&&(B==="auto"&&(St||gt)||B===!0);return o.scrollButtonStart=u?d.jsx(O,h({slots:{StartScrollButtonIcon:H.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Kt},orientation:y,direction:i?"right":"left",onClick:ee,disabled:!St},N,{className:L(z.scrollButtons,N.className)})):null,o.scrollButtonEnd=u?d.jsx(O,h({slots:{EndScrollButtonIcon:H.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:qt},orientation:y,direction:i?"left":"right",onClick:oe,disabled:!gt},N,{className:L(z.scrollButtons,N.className)})):null,o},Pt=ht(o=>{const{tabsMeta:r,tabMeta:u}=Bt();if(!(!u||!r)){if(u[Q]<r[Q]){const c=r[K]+(u[Q]-r[Q]);bt(c,{animation:o})}else if(u[tt]>r[tt]){const c=r[K]+(u[tt]-r[tt]);bt(c,{animation:o})}}}),et=ht(()=>{P&&B!==!1&&Qt(!Ct)});n.useEffect(()=>{const o=At(()=>{R.current&&G()});let r;const u=S=>{S.forEach(E=>{E.removedNodes.forEach(Z=>{var W;(W=r)==null||W.unobserve(Z)}),E.addedNodes.forEach(Z=>{var W;(W=r)==null||W.observe(Z)})}),o(),et()},c=_t(R.current);c.addEventListener("resize",o);let v;return typeof ResizeObserver<"u"&&(r=new ResizeObserver(o),Array.from(_.current.children).forEach(S=>{r.observe(S)})),typeof MutationObserver<"u"&&(v=new MutationObserver(u),v.observe(_.current,{childList:!0})),()=>{var S,E;o.clear(),c.removeEventListener("resize",o),(S=v)==null||S.disconnect(),(E=r)==null||E.disconnect()}},[G,et]),n.useEffect(()=>{const o=Array.from(_.current.children),r=o.length;if(typeof IntersectionObserver<"u"&&r>0&&P&&B!==!1){const u=o[0],c=o[r-1],v={root:R.current,threshold:.99},S=pt=>{Zt(!pt[0].isIntersecting)},E=new IntersectionObserver(S,v);E.observe(u);const Z=pt=>{Jt(!pt[0].isIntersecting)},W=new IntersectionObserver(Z,v);return W.observe(c),()=>{E.disconnect(),W.disconnect()}}},[P,B,Ct,x==null?void 0:x.length]),n.useEffect(()=>{Gt(!0)},[]),n.useEffect(()=>{G()}),n.useEffect(()=>{Pt(Wt!==k)},[Pt,k]),n.useImperativeHandle(p,()=>({updateIndicator:G,updateScrollButtons:et}),[G,et]);const Et=d.jsx(Ae,h({},D,{className:L(z.indicator,D.className),ownerState:j,style:h({},k,D.style)}));let ot=0;const ne=n.Children.map(x,o=>{if(!n.isValidElement(o))return null;const r=o.props.value===void 0?ot:o.props.value;wt.set(r,ot);const u=r===X;return ot+=1,n.cloneElement(o,h({fullWidth:M==="fullWidth",indicator:u&&!xt&&Et,selected:u,selectionFollowsFocus:ct,onChange:I,textColor:J,value:r},ot===1&&X===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),se=o=>{const r=_.current,u=ie(r).activeElement;if(u.getAttribute("role")!=="tab")return;let v=y==="horizontal"?"ArrowLeft":"ArrowUp",S=y==="horizontal"?"ArrowRight":"ArrowDown";switch(y==="horizontal"&&i&&(v="ArrowRight",S="ArrowLeft"),o.key){case v:o.preventDefault(),lt(r,u,zt);break;case S:o.preventDefault(),lt(r,u,Lt);break;case"Home":o.preventDefault(),lt(r,null,Lt);break;case"End":o.preventDefault(),lt(r,null,zt);break}},ft=re();return d.jsxs(je,h({className:L(z.root,w),ownerState:j,ref:l,as:g},Yt,{children:[ft.scrollButtonStart,ft.scrollbarSizeListener,d.jsxs(ke,{className:z.scroller,ownerState:j,style:{overflow:yt.overflow,[T?`margin${i?"Left":"Right"}`:"marginBottom"]:dt?void 0:-yt.scrollbarWidth},ref:R,children:[d.jsx(_e,{"aria-label":b,"aria-labelledby":f,"aria-orientation":y==="vertical"?"vertical":null,className:z.flexContainer,ownerState:j,onKeyDown:se,ref:_,role:"tablist",children:ne}),xt&&Et]}),ft.scrollButtonEnd]}))}),He=Oe,Dt=n.createContext(null);function De(){const[t,e]=n.useState(null);return n.useEffect(()=>{e(`mui-p-${Math.round(Math.random()*1e5)}`)},[]),t}function Xe(t){const{children:e,value:l}=t,s=De(),a=n.useMemo(()=>({idPrefix:s,value:l}),[s,l]);return d.jsx(Dt.Provider,{value:a,children:e})}function Xt(){return n.useContext(Dt)}function Ut(t,e){const{idPrefix:l}=t;return l===null?null:`${t.idPrefix}-P-${e}`}function Vt(t,e){const{idPrefix:l}=t;return l===null?null:`${t.idPrefix}-T-${e}`}const Ue=["children"],Ve=n.forwardRef(function(e,l){const{children:s}=e,a=V(e,Ue),i=Xt();if(i===null)throw new TypeError("No TabContext provided");const b=n.Children.map(s,f=>n.isValidElement(f)?n.cloneElement(f,{"aria-controls":Ut(i,f.props.value),id:Vt(i,f.props.value)}):null);return d.jsx(He,h({},a,{ref:l,value:i.value,children:b}))}),Ye=Ve;function Ke(t){return st("MuiTabPanel",t)}nt("MuiTabPanel",["root"]);const qe=["children","className","value"],Ge=t=>{const{classes:e}=t;return it({root:["root"]},Ke,e)},Ze=$("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:(t,e)=>e.root})(({theme:t})=>({padding:t.spacing(3)})),Je=n.forwardRef(function(e,l){const s=at({props:e,name:"MuiTabPanel"}),{children:a,className:i,value:b}=s,f=V(s,qe),p=h({},s),m=Ge(p),x=Xt();if(x===null)throw new TypeError("No TabContext provided");const w=Ut(x,b),g=Vt(x,b);return d.jsx(Ze,h({"aria-labelledby":g,className:L(m.root,i),hidden:b!==x.value,id:w,ref:l,role:"tabpanel",ownerState:p},f,{children:b===x.value&&a}))}),$t=Je,Qe=n.lazy(()=>Ot(()=>import("./Grid-OMLqu7qp.js"),__vite__mapDeps([0,1,2,3,4]))),to=n.lazy(()=>Ot(()=>import("./List-w9o7m4vt.js"),__vite__mapDeps([5,1,2,3,6,7,8,9])));function lo({data:t,setFavIds:e}){const[l,s]=n.useState("gird"),a=(i,b)=>{s(b)};return d.jsx(n.Suspense,{fallback:d.jsx(ce,{}),children:d.jsx(Mt,{sx:{width:"100%",typography:"body1"},children:d.jsxs(Xe,{value:l,children:[d.jsx(Mt,{sx:{borderBottom:1,borderColor:"divider"},children:d.jsxs(Ye,{onChange:a,"aria-label":"lab API tabs example",variant:"fullWidth",children:[d.jsx(Rt,{variant:"solid",color:"neutral",indicatorInset:!0,label:"Grid",value:"gird",sx:{color:"var(--white)",fontSize:"0.9rem",fontWeight:"600"}}),d.jsx(Rt,{label:"List",value:"list",sx:{color:"var(--white)",fontSize:"0.9rem",fontWeight:"600"}})]})}),d.jsx($t,{value:"gird",children:d.jsx(Qe,{data:t,setFavIds:e})}),d.jsx($t,{value:"list",children:d.jsx(to,{data:t})})]})})})}export{lo as L};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Grid-OMLqu7qp.js","assets/index-vAvfB6Tm.js","assets/index-5mn29oJS.css","assets/TrendingDown-kynYo8hQ.js","assets/Grid-19laIbyF.css","assets/List-w9o7m4vt.js","assets/List_box-0a_Se5Nx.js","assets/style-nJJ4Q6Ze.js","assets/style-rrN1Pyae.css","assets/List_box-pOrA1SMB.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}