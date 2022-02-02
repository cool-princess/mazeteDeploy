import{j as y,u as O,r,v as R,a as _,b as I,c as J,B as M,R as P,d as A,e as z,f as q}from"./vendor.a7a49f7b.js";const H=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const g of l.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&p(g)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function p(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}};H();const e=y.exports.jsx,a=y.exports.jsxs,S=y.exports.Fragment,K="https://mazete-api-dev.pechakucha.ai";function W(){const n=O();return r.exports.useEffect(()=>{let o=R();var s=JSON.stringify({register_id:o}),p={method:"post",url:`${K}/register_id`,headers:{"Content-Type":"application/json"},data:s};_(p).then(t=>{localStorage.setItem("register_id",o)}).catch(t=>{n("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}),e("div",{className:"container",children:a("div",{className:"container-wrap",children:[e("div",{className:"top-header",children:e("h1",{children:"\u30DE\u305C\u3066"})}),a("div",{className:"top-banner",children:[e("img",{src:"/assets/image/top-banner-img01.png",alt:"",className:"top-banner01"}),e("img",{src:"/assets/image/top-banner-img02.png",alt:"",className:"top-banner02"}),e("img",{src:"/assets/image/top-banner-img03.png",alt:"",className:"top-banner03"}),e("img",{src:"/assets/image/top-banner-img04.png",alt:"",className:"top-banner04"}),e("div",{className:"top-banner-text",children:"\u203B\u30B5\u30FC\u30D3\u30B9\u5185\u5BB9\u4F1D\u308F\u308B\u30A4\u30E9\u30B9\u30C8\u5916\u6CE8"})]}),e("a",{href:"/select",className:"start-btn",children:"\u30B9\u30BF\u30FC\u30C8"}),e("div",{className:"top-banner-border"}),a("div",{className:"top-delusion",children:[e("div",{className:"top-delusion-title",children:"\u307F\u3093\u306A\u306E\u5984\u60F3"}),a("div",{className:"top-delusion-body",children:[e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img01.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img02.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img03.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img04.png",alt:"",className:"top-delusion-img"})})]})]})]})})}const x="https://mazete-api-dev.pechakucha.ai";function G(){const[n,o]=r.exports.useState(1),[s,p]=r.exports.useState([]),[t,l]=r.exports.useState(null),[g,h]=r.exports.useState([]),[v,N]=r.exports.useState([]);r.exports.useEffect(()=>{let u=localStorage.register_id||null;u||window.location.assign("/");let i=JSON.stringify({user_id:u,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),m={method:"post",url:`${x}/get_chara_list`,headers:{"Content-Type":"application/json"},data:i};_(m).then(f=>{h(f.data.chara_list)}).catch(f=>{navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let F=JSON.stringify({user_id:u,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),B={method:"post",url:`${x}/get_world_list`,headers:{"Content-Type":"application/json"},data:F};_(B).then(f=>{N(f.data.world_list)}).catch(f=>{navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]);const b=u=>{let i=s;if(i.includes(u)){for(let m=0;m<i.length;m++)i[m]===u&&(i.splice(m,1),m--);p([...i])}else i.length<3&&(i.push(u),p([...i]))},d=()=>{let u=localStorage.register_id||null,i=JSON.stringify({user_id:u,chosen_chara_ids:s.toString(),chosen_world_ids:[t].toString()}),m={method:"post",url:`${x}/generate_outline`,headers:{"Content-Type":"application/json"},data:i};_(m).then(F=>{localStorage.setItem("outline_id",F.data.outline_id),window.location.assign("/synopsis")}).catch(F=>{navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return e("div",{className:"container",id:"character_select",children:a("div",{className:"container-wrap",children:[a("div",{className:"preview",children:[a("div",{className:"preview-part",onClick:()=>o(1),children:[a("div",{className:"preview-img-part",children:[s.map(u=>e("img",{src:g.filter(i=>i.chara_id==u)[0].img_url,alt:""},u)),s.length==0&&e("img",{src:"/assets/image/default-avatar.png"})]}),e("div",{className:n===1?"preview-title-part active":"preview-title-part",children:"\u30AD\u30E3\u30E9"})]}),a("div",{className:"preview-part",onClick:()=>{o(2)},children:[e("div",{className:"preview-img-part",children:e("img",{src:t!=null?v.filter(u=>u.world_id==t)[0].img_url:"/assets/image/point-bg.png",alt:""})}),e("div",{className:n===2?"preview-title-part active":"preview-title-part",children:"\u4E16\u754C"})]})]}),a("div",{className:"point-select",children:[a("div",{className:"point-search",children:[e("input",{type:"text"}),e("button",{type:"button",className:"search-btn",children:e("img",{src:"/assets/image/point-search.png",alt:""})})]}),a("div",{className:"point-body",children:[n===1&&e("div",{className:"point-body-wrap",children:g.map((u,i)=>a("div",{onClick:()=>b(u.chara_id),className:`${s.includes(u.chara_id)?"active":""} character-item`,children:[e("img",{src:u.img_url,alt:""}),e("span",{})]},i))}),n==2&&e("div",{className:"point-body-wrap",children:v.map((u,i)=>a("div",{className:`${t==u.world_id?"active":""} location-item`,onClick:m=>{l(u.world_id)},children:[e("img",{src:u.img_url,alt:""}),e("span",{})]},i))}),e("button",{onClick:d,className:"character-add-btn",children:"\u30DE\u305C\u308B"})]})]})]})})}const k="https://mazete-api-dev.pechakucha.ai";function Q(){const[n,o]=r.exports.useState(!1),[s,p]=r.exports.useState(!0),[t,l]=r.exports.useState(`\u30D3\u30EB\u306E\u5C4B\u4E0A\u306B\u3042\u3064\u3081\u3089\u308C\u305F\u30B4\u30F3\u9054\u3002

\u5229\u6839\u5DDD\u304B\u3089\u9244\u9AA8\u306E\u4E0A\u3092\u6E21\u3063\u3066\u3001\u5411\u3053\u3046\u306E\u30D3\u30EB\u3078\u884C\u3051\u305F\u3082\u306E\u306B\u8CDE\u91D1\u304C\u3082\u3089\u3048\u308B\u3068\u8AAC\u660E\u3092\u53D7\u3051\u308B\u3002

\u30B4\u30F3\u9054\u306F\u3044\u304B\u306B\u3057\u3066\u3053\u306E\u5371\u6A5F\u3092\u4E57\u308A\u8D8A\u3048\u308B\u306E\u304B\uFF1F`);return r.exports.useEffect(()=>{let h=localStorage.register_id||null,v=localStorage.outline_id||null,N=JSON.stringify({user_id:h,outline_id:v}),b={method:"post",url:`${k}/get_outline`,headers:{"Content-Type":"application/json"},data:N};_(b).then(d=>{d.data.generated&&d.data.outline&&!d.data.error?(p(!1),l(d.data.outline)):navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(d=>{navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]),e("div",{className:"container",id:"loading_synposis",children:a("div",{className:"container-wrap",children:[e("div",{className:"ls-top editing",children:e("div",{className:"ls-top-wrap",children:a("div",{className:"ls-top-body",children:[e("div",{className:"ls-top-item",children:e("img",{src:"/assets/image/character01.png",alt:""})}),e("div",{className:"ls-top-item",children:e("img",{src:"/assets/image/character02.png",alt:""})}),e("div",{className:"ls-top-item",children:e("img",{src:"/assets/image/character03.png",alt:""})})]})})}),a("div",{className:"ls-main",children:[e("div",{className:"ls-main-title",children:"\u3042\u3089\u3059\u3058"}),a("div",{className:"ls-main-loading-text",children:[s&&a("div",{className:"ls-main-loading-part",children:[e("img",{src:"/assets/image/white-loading.gif",alt:""}),e("span",{children:"\u4E0B\u66F8\u304D\u6E96\u5099\u4E2D"})]}),!s&&e("textarea",{autoFocus:!0,className:"ls-main-loading-wrap",value:t,disabled:!n,onChange:h=>{l(h.target.value)},onBlur:()=>{o(!1)}})]}),!n&&e("div",{className:"ls-main-edit-btn",children:a("a",{onClick:()=>{o(!0)},children:[e("span",{children:"\u7DE8\u96C6"}),e("img",{src:"/assets/image/edit-icon.png",alt:""})]})}),!n&&e("button",{onClick:()=>{let h=localStorage.register_id||null,v=localStorage.outline_id||null,N=JSON.stringify({user_id:h,outline_id:v,outline:t}),b={method:"post",url:`${k}/generate_story`,headers:{"Content-Type":"application/json"},data:N};_(b).then(d=>{window.location.assign(`/talk/${d.data.story_id}`)}).catch(d=>{navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},className:s?"ls-main-making-btn":"ls-main-making-btn active",disabled:s,children:"\u3053\u306E\u4E16\u754C\u7DDA\u306B\u5165\u308B"})]})]})})}const U="https://mazete-api-dev.pechakucha.ai";function V(n){return new Promise(o=>setTimeout(o,n))}function X(){const[n,o]=r.exports.useState(!0),[s,p]=r.exports.useState(null),[t,l]=r.exports.useState(0),[g,h]=r.exports.useState(null),[v,N]=r.exports.useState(null),[b,d]=r.exports.useState([]),[u,i]=r.exports.useState(!1),[m,F]=r.exports.useState(!1),[B,f]=r.exports.useState(!1);let{story_id:D}=I();r.exports.useEffect(()=>{let c=localStorage.register_id||null,E=JSON.stringify({user_id:c,story_id:D}),L={method:"post",url:`${U}/get_story`,headers:{"Content-Type":"application/json"},data:E};_(L).then(C=>{o(!1),C.data.generated&&!C.data.error?(o(!1),p(C.data)):navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(C=>{navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]),r.exports.useEffect(()=>{s&&T()},[s,t]);const T=()=>{let c=s.story;N(c[t].chara_img_url),h(c[t].position),c[t].multiple?(i(!0),d(c[t].content)):(i(!1),w(c[t].content))},w=async c=>{f(!0);for(var E=0;E<c.length;)d([c.substring(0,E+1)]),E++,await V(75);f(!1),s.story.length-1==t&&F(!0)},$=c=>{u&&(i(!1),w(c))},j=()=>{console.log(s.story),B||s.story.length-1>t&&l(t+1)};return a(S,{children:[n&&a("div",{className:"container",id:"loading_adventure",children:[e("div",{className:"container-wrap",children:a("div",{className:"la-wrap",children:[e("img",{src:"/assets/image/black-loading.gif",alt:""}),e("span",{children:"\u6E96\u5099\u4E2D"})]})}),e("button",{className:"back-to-btn",children:e("img",{src:"/assets/image/back-to-img.svg",alt:""})})]}),!n&&a("div",{className:"container",id:"adventure_state",children:[a("div",{className:"container-wrap",children:[e("div",{className:"as-thumb",style:{backgroundImage:`url(${s==null?void 0:s.background_url})`},children:v&&e("img",{src:v,alt:"",className:`as-thumb-character ${g==0?"lb":g==1?"mb":"rb"}`})}),e("div",{className:"as-text",children:b.map((c,E)=>e("div",{className:"as-text-wrap",onClick:()=>{$(c)},children:c},E))}),!m&&a("div",{className:"text-select-btn-group",children:[!u&&e("a",{onClick:j,className:"next-btn",children:"\u30BF\u30C3\u30D7\u3057\u3066\u6B21\u3078\xA0\xA0\u25B6"}),u&&e("a",{className:"next-btn active",children:"\u9078\u629E\u3057\u3066\u4E0B\u3055\u3044\xA0\xA0\u25B6"})]}),m&&a("div",{className:"text-select-btn-group",children:[e("a",{href:"",className:"final-btn",children:"\u3082\u3046\u4E00\u5EA6\u898B\u308B"}),e("a",{href:"",className:"final-btn",children:"\u3053\u306E\u7269\u8A9E\u3092\u30B7\u30A7\u30A2\u3059\u308B"})]})]}),e("button",{className:"back-to-btn",children:e("img",{src:"/assets/image/back-to-img.svg",alt:""})})]})]})}function Y(){const n=J();return console.log(n),e("div",{className:"flex-center position-ref full-height full-width bg-white",children:e("div",{className:"message",style:{padding:"10px"},dangerouslySetInnerHTML:{__html:n.state.message}})})}function Z(){return e(M,{children:a(P,{children:[e(A,{path:"/",element:e(W,{})}),e(A,{path:"/select",element:e(G,{})}),e(A,{path:"/synopsis",element:e(Q,{})}),e(A,{path:"/talk/:id",element:e(X,{})}),e(A,{path:"/error",element:e(Y,{})})]})})}function ee(){return e(S,{children:e(Z,{})})}z.render(e(q.StrictMode,{children:e(ee,{})}),document.getElementById("root"));