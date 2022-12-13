"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("vue"),me=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},mt=d.defineComponent({name:"BioButton",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:t}){return e=d.reactive(e),{classes:d.computed(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:d.computed(()=>({backgroundColor:e.backgroundColor})),onClick(){t("click")}}}});function yt(e,t,n,r,o,s){return d.openBlock(),d.createElementBlock("button",{type:"button",class:d.normalizeClass(e.classes),onClick:t[0]||(t[0]=(...i)=>e.onClick&&e.onClick(...i)),style:d.normalizeStyle(e.style)},d.toDisplayString(e.label),7)}const ne=me(mt,[["render",yt]]);function bt(e=Symbol(),t){return d.inject(e,t||{})}const St=Symbol();function vt(){return bt(St)}function wt(e){const t=vt();return{prefixCls:`${t.prefixCls}-${e}`,prefixVar:t.prefixCls}}const It=d.defineComponent({name:"BioSvgIcon",props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},size:{type:[Number,String],default:16},spin:{type:Boolean,default:!1}},setup(e){const{prefixCls:t}=wt("svg-icon"),n=d.computed(()=>`#${e.prefix}-${e.name}`),r=d.computed(()=>{const{size:o}=e;let s=`${o}`;return s=`${s.replace("px","")}px`,{width:s,height:s}});return{iconName:n,prefixCls:t,getStyle:r}}}),xt=["xlink:href"];function Ct(e,t,n,r,o,s){return d.openBlock(),d.createElementBlock("svg",{class:d.normalizeClass(["biomap-svg-icon",e.$attrs.class,e.spin&&"svg-icon-spin"]),style:d.normalizeStyle(e.getStyle),"aria-hidden":"true"},[d.createElementVNode("use",{"xlink:href":e.iconName},null,8,xt)],6)}const oe=me(It,[["render",Ct],["__scopeId","data-v-32cabde0"]]);/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.0.0
*/const _e=Object.freeze({left:0,top:0,width:16,height:16}),H=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),$=Object.freeze({..._e,...H}),re=Object.freeze({...$,body:"",hidden:!1});function kt(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function xe(e,t){const n=kt(e,t);for(const r in re)r in H?r in e&&!(r in n)&&(n[r]=H[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Et(e,t){const n=e.icons,r=e.aliases||{},o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,a=c&&s(c);a&&(o[i]=[c].concat(a))}return o[i]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function Tt(e,t,n){const r=e.icons,o=e.aliases||{};let s={};function i(c){s=xe(r[c]||o[c],s)}return i(t),n.forEach(i),xe(e,s)}function $e(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Et(e);for(const o in r){const s=r[o];s&&(t(o,Tt(e,o,s)),n.push(o))}return n}const A=/^[a-z0-9]+(-[a-z0-9]+)*$/,O=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),a=o.pop(),l={provider:o.length>0?o[0]:r,prefix:a,name:c};return t&&!V(l)?null:l}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!V(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!V(c,n)?null:c}return null},V=(e,t)=>e?!!((e.provider===""||e.provider.match(A))&&(t&&e.prefix===""||e.prefix.match(A))&&e.name.match(A)):!1,Ot={provider:"",aliases:{},not_found:{},..._e};function Z(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Be(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Z(e,Ot))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(A)||typeof s.body!="string"||!Z(s,re))return null}const r=t.aliases||{};for(const o in r){const s=r[o],i=s.parent;if(!o.match(A)||typeof i!="string"||!n[i]&&!r[i]||!Z(s,re))return null}return t}const Q=Object.create(null);function Pt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function v(e,t){const n=Q[e]||(Q[e]=Object.create(null));return n[t]||(n[t]=Pt(e,t))}function ye(e,t){return Be(t)?$e(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function jt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}function At(e,t){let n=[];return(typeof e=="string"?[e]:Object.keys(Q)).forEach(o=>{(typeof o=="string"&&typeof t=="string"?[t]:Object.keys(Q[o]||{})).forEach(i=>{const c=v(o,i);n=n.concat(Object.keys(c.icons).map(a=>(o!==""?"@"+o+":":"")+i+":"+a))})}),n}let M=!1;function Lt(e){return typeof e=="boolean"&&(M=e),M}function B(e){const t=typeof e=="string"?O(e,!0,M):e;if(t){const n=v(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Fe(e,t){const n=O(e,!0,M);if(!n)return!1;const r=v(n.provider,n.prefix);return jt(r,n.name,t)}function Ne(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),M&&!t&&!e.prefix){let o=!1;return Be(e)&&(e.prefix="",$e(e,(s,i)=>{i&&Fe(s,i)&&(o=!0)})),o}const n=e.prefix;if(!V({provider:t,prefix:n,name:"a"}))return!1;const r=v(t,n);return!!ye(r,e)}function Mt(e){return!!B(e)}function _t(e){const t=B(e);return t?{...$,...t}:null}const ze=Object.freeze({width:null,height:null}),De=Object.freeze({...ze,...H}),$t=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Bt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function se(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split($t);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=Bt.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}function W(e,t){const n={...$,...e},r={...De,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(m=>{const g=[],E=m.hFlip,w=m.vFlip;let S=m.rotate;E?w?S+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):w&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let y;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:y=o.height/2+o.top,g.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:y=o.width/2+o.left,g.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}S%2===1&&(o.left!==o.top&&(y=o.left,o.left=o.top,o.top=y),o.width!==o.height&&(y=o.width,o.width=o.height,o.height=y)),g.length&&(s='<g transform="'+g.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,a=o.width,l=o.height;let u,f;return i===null?(f=c===null?"1em":c==="auto"?l:c,u=se(f,a/l)):(u=i==="auto"?a:i,f=c===null?se(u,l/a):c==="auto"?l:c),{attributes:{width:u.toString(),height:f.toString(),viewBox:o.left.toString()+" "+o.top.toString()+" "+a.toString()+" "+l.toString()},body:s}}const Ft=/\sid="(\S+)"/g,Nt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let zt=0;function Re(e,t=Nt){const n=[];let r;for(;r=Ft.exec(e);)n.push(r[1]);return n.length&&n.forEach(o=>{const s=typeof t=="function"?t(o):t+(zt++).toString(),i=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+s+"$3")}),e}const C={local:!0,session:!0},Ve={local:new Set,session:new Set};let be=!1;function Dt(e){be=e}const Ce="iconify2",_="iconify",qe=_+"-count",ke=_+"-version",He=36e5,Rt=168;function ie(e,t){try{return e.getItem(t)}catch{}}function Se(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Ee(e,t){try{e.removeItem(t)}catch{}}function ce(e,t){return Se(e,qe,t.toString())}function ae(e){return parseInt(ie(e,qe))||0}let D=typeof window>"u"?{}:window;function Qe(e){const t=e+"Storage";try{if(D&&D[t]&&typeof D[t].length=="number")return D[t]}catch{}C[e]=!1}function Ge(e,t){const n=Qe(e);if(!n)return;const r=ie(n,ke);if(r!==Ce){if(r){const c=ae(n);for(let a=0;a<c;a++)Ee(n,_+a.toString())}Se(n,ke,Ce),ce(n,0);return}const o=Math.floor(Date.now()/He)-Rt,s=c=>{const a=_+c.toString(),l=ie(n,a);if(typeof l=="string"){try{const u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,c))return!0}catch{}Ee(n,a)}};let i=ae(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,ce(n,i)):Ve[e].add(c))}function Ue(){if(!be){Dt(!0);for(const e in C)Ge(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=v(r,o);if(!ye(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function We(e,t){switch(e){case"local":case"session":C[e]=t;break;case"all":for(const n in C)C[n]=t;break}}const ue=Object.create(null);function Ke(e,t){ue[e]=t}function le(e){return ue[e]||ue[""]}function ve(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const K=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],q=[];for(;j.length>0;)j.length===1||Math.random()>.5?q.push(j.shift()):q.push(j.pop());K[""]=ve({resources:["https://api.iconify.design"].concat(q)});function Je(e,t){const n=ve(t);return n===null?!1:(K[e]=n,!0)}function J(e){return K[e]}function Vt(){return Object.keys(K)}const qt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let G=qt();function Ht(e){G=e}function Qt(){return G}function Gt(e,t){const n=J(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Ut(e){return e===404}const Wt=(e,t,n)=>{const r=[],o=Gt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((a,l)=>{c+=a.length+1,c>=o&&l>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=a.length),i.icons.push(a)}),r.push(i),r};function Kt(e){if(typeof e=="string"){const t=J(e);if(t)return t.path}return"/"}const Jt=(e,t,n)=>{if(!G){n("abort",424);return}let r=Kt(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),a=new URLSearchParams({icons:c});r+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;G(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Ut(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Xt={prepare:Wt,send:Jt};function Yt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,a=n[s]||(n[s]=Object.create(null)),l=a[i]||(a[i]=v(s,i));let u;c in l.icons?u=t.loaded:i===""||l.missing.has(c)?u=t.missing:u=t.pending;const f={provider:s,prefix:i,name:c};u.push(f)}),t}function Xe(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Zt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(a=>{if(a.prefix!==o)return!0;const l=a.name;if(e.icons[l])i.loaded.push({provider:r,prefix:o,name:l});else if(e.missing.has(l))i.missing.push({provider:r,prefix:o,name:l});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Xe([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let en=0;function tn(e,t,n){const r=en++,o=Xe.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function nn(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?O(o,t,n):o;s&&r.push(s)}),r}var on={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function rn(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let h=e.resources.slice(0);for(i=[];h.length>1;){const b=Math.floor(Math.random()*h.length);i.push(h[b]),h=h.slice(0,b).concat(h.slice(b+1))}i=i.concat(h)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let a="pending",l=0,u,f=null,p=[],m=[];typeof r=="function"&&m.push(r);function g(){f&&(clearTimeout(f),f=null)}function E(){a==="pending"&&(a="aborted"),g(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function w(h,b){b&&(m=[]),typeof h=="function"&&m.push(h)}function S(){return{startTime:c,payload:t,status:a,queriesSent:l,queriesPending:p.length,subscribe:w,abort:E}}function y(){a="failed",m.forEach(h=>{h(void 0,u)})}function Ie(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function gt(h,b,P){const z=b!=="success";switch(p=p.filter(x=>x!==h),a){case"pending":break;case"failed":if(z||!e.dataAfterTimeout)return;break;default:return}if(b==="abort"){u=P,y();return}if(z){u=P,p.length||(i.length?Y():y());return}if(g(),Ie(),!e.random){const x=e.resources.indexOf(h.resource);x!==-1&&x!==e.index&&(e.index=x)}a="completed",m.forEach(x=>{x(P)})}function Y(){if(a!=="pending")return;g();const h=i.shift();if(h===void 0){if(p.length){f=setTimeout(()=>{g(),a==="pending"&&(Ie(),y())},e.timeout);return}y();return}const b={status:"pending",resource:h,callback:(P,z)=>{gt(b,P,z)}};p.push(b),l++,f=setTimeout(Y,e.rotate),n(h,t,b.callback)}return setTimeout(Y),S}function Ye(e){const t={...on,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,a,l){const u=rn(t,c,a,(f,p)=>{r(),l&&l(f,p)});return n.push(u),u}function s(c){return n.find(a=>c(a))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function Te(){}const ee=Object.create(null);function sn(e){if(!ee[e]){const t=J(e);if(!t)return;const n=Ye(t),r={config:t,redundancy:n};ee[e]=r}return ee[e]}function Ze(e,t,n){let r,o;if(typeof e=="string"){const s=le(e);if(!s)return n(void 0,424),Te;o=s.send;const i=sn(e);i&&(r=i.redundancy)}else{const s=ve(e);if(s){r=Ye(s);const i=e.resources?e.resources[0]:"",c=le(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),Te):r.query(t,o,n)().abort}function cn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in C)Ge(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function an(e,t){be||Ue();function n(r){let o;if(!C[r]||!(o=Qe(r)))return;const s=Ve[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=ae(o),!ce(o,i+1))return;const c={cached:Math.floor(Date.now()/He),provider:e.provider,data:t};return Se(o,_+i.toString(),JSON.stringify(c))}t.lastModified&&!cn(e,t.lastModified)||!Object.keys(t.icons).length||(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Oe(){}function un(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Zt(e)}))}function ln(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=le(n)))return;s.prepare(n,r,o).forEach(c=>{Ze(n,c,(a,l)=>{if(typeof a!="object"){if(l!==404)return;c.icons.forEach(u=>{e.missing.add(u)})}else try{const u=ye(e,a);if(!u.length)return;const f=e.pendingIcons;f&&u.forEach(p=>{f.delete(p)}),an(e,a)}catch(u){console.error(u)}un(e)})})}))}const fn=e=>{const n=v(e.provider,e.prefix).pendingIcons;return!!(n&&n.has(e.name))},we=(e,t)=>{const n=nn(e,!0,Lt()),r=Yt(n);if(!r.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(r.loaded,r.missing,r.pending,Oe)}),()=>{a=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(a=>{const{provider:l,prefix:u}=a;if(u===c&&l===i)return;i=l,c=u,s.push(v(l,u));const f=o[l]||(o[l]=Object.create(null));f[u]||(f[u]=[])}),r.pending.forEach(a=>{const{provider:l,prefix:u,name:f}=a,p=v(l,u),m=p.pendingIcons||(p.pendingIcons=new Set);m.has(f)||(m.add(f),o[l][u].push(f))}),s.forEach(a=>{const{provider:l,prefix:u}=a;o[l][u].length&&ln(a,o[l][u])}),t?tn(t,r,s):Oe},dn=e=>new Promise((t,n)=>{const r=typeof e=="string"?O(e):e;we([r||e],o=>{if(o.length&&r){const s=B(r);if(s){t({...$,...s});return}}n(e)})});function et(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in ze?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const X={...De,inline:!1},te="iconify",fe="iconify-inline",I="iconifyData"+Date.now();let k=[];function F(e){for(let t=0;t<k.length;t++){const n=k[t];if((typeof n.node=="function"?n.node():n.node)===e)return n}}function tt(e,t=!1){let n=F(e);return n?(n.temporary&&(n.temporary=t),n):(n={node:e,temporary:t},k.push(n),n)}function pn(){if(document.documentElement)return tt(document.documentElement);k.push({node:()=>document.documentElement})}function hn(e){k=k.filter(t=>e!==t&&e!==(typeof t.node=="function"?t.node():t.node))}function N(){return k}function gn(e){const t=document;t.readyState&&t.readyState!=="loading"?e():t.addEventListener("DOMContentLoaded",e)}let L=null;const mn={childList:!0,subtree:!0,attributes:!0};function nt(e){if(!e.observer)return;const t=e.observer;t.pendingScan||(t.pendingScan=setTimeout(()=>{delete t.pendingScan,L&&L(e)}))}function yn(e,t){if(!e.observer)return;const n=e.observer;if(!n.pendingScan)for(let r=0;r<t.length;r++){const o=t[r];if(o.addedNodes&&o.addedNodes.length>0||o.type==="attributes"&&o.target[I]!==void 0){n.paused||nt(e);return}}}function ot(e,t){e.observer.instance.observe(t,mn)}function U(e){let t=e.observer;if(t&&t.instance)return;const n=typeof e.node=="function"?e.node():e.node;!n||!window||(t||(t={paused:0},e.observer=t),t.instance=new window.MutationObserver(yn.bind(null,e)),ot(e,n),t.paused||nt(e))}function Pe(){N().forEach(U)}function rt(e){if(!e.observer)return;const t=e.observer;t.pendingScan&&(clearTimeout(t.pendingScan),delete t.pendingScan),t.instance&&(t.instance.disconnect(),delete t.instance)}function bn(e){const t=L!==null;if(L!==e&&(L=e,t&&N().forEach(rt)),t){Pe();return}gn(Pe)}function de(e){(e?[e]:N()).forEach(t=>{if(!t.observer){t.observer={paused:1};return}const n=t.observer;if(n.paused++,n.paused>1||!n.instance)return;n.instance.disconnect()})}function Sn(e){if(e){const t=F(e);t&&de(t)}else de()}function pe(e){(e?[e]:N()).forEach(t=>{if(!t.observer){U(t);return}const n=t.observer;if(n.paused&&(n.paused--,!n.paused)){const r=typeof t.node=="function"?t.node():t.node;if(r)n.instance?ot(t,r):U(t);else return}})}function vn(e){if(e){const t=F(e);t&&pe(t)}else pe()}function st(e,t=!1){const n=tt(e,t);return U(n),n}function it(e){const t=F(e);t&&(rt(t),hn(e))}function wn(e,t){if(e.name!==t.name||e.mode!==t.mode)return!0;const n=e.customisations,r=t.customisations;for(const o in X)if(n[o]!==r[o])return!0;return!1}function In(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}const xn=/[\s,]+/;function Cn(e,t){t.split(xn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const kn=["width","height"],En=["inline","hFlip","vFlip"];function Tn(e,t){return e===t||e==="true"?!0:e===""||e==="false"?!1:null}function On(e){const t=e.getAttribute("data-icon"),n=typeof t=="string"&&O(t,!0);if(!n)return null;const r={...X,inline:e.classList&&e.classList.contains(fe)};kn.forEach(c=>{const a=e.getAttribute("data-"+c);a&&(r[c]=a)});const o=e.getAttribute("data-rotate");typeof o=="string"&&(r.rotate=In(o));const s=e.getAttribute("data-flip");typeof s=="string"&&Cn(r,s),En.forEach(c=>{const a="data-"+c,l=Tn(e.getAttribute(a),a);typeof l=="boolean"&&(r[c]=l)});const i=e.getAttribute("data-mode");return{name:t,icon:n,customisations:r,mode:i}}const Pn="svg."+te+", i."+te+", span."+te+", i."+fe+", span."+fe;function jn(e){const t=[];return e.querySelectorAll(Pn).forEach(n=>{const r=n[I]||n.tagName.toLowerCase()!=="svg"?On(n):null;r&&t.push({node:n,props:r})}),t}function ct(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function at(e){const t=new Set(["iconify"]);return["provider","prefix"].forEach(n=>{e[n]&&t.add("iconify--"+e[n])}),t}function ut(e,t,n,r){const o=e.classList;if(r){const i=r.classList;Array.from(i).forEach(c=>{o.add(c)})}const s=[];return t.forEach(i=>{o.contains(i)?n.has(i)&&s.push(i):(o.add(i),s.push(i))}),n.forEach(i=>{t.has(i)||o.remove(i)}),s}function lt(e,t,n){const r=e.style;(n||[]).forEach(s=>{r.removeProperty(s)});const o=[];for(const s in t)r.getPropertyValue(s)||(o.push(s),r.setProperty(s,t[s]));return o}function ft(e,t,n){let r;try{r=document.createElement("span")}catch{return e}const o=t.customisations,s=W(n,o),i=e[I],c=ct(Re(s.body),{"aria-hidden":"true",role:"img",...s.attributes});r.innerHTML=c;const a=r.childNodes[0],l=e.attributes;for(let g=0;g<l.length;g++){const E=l.item(g),w=E.name;w!=="class"&&!a.hasAttribute(w)&&a.setAttribute(w,E.value)}const u=at(t.icon),f=ut(a,u,new Set(i&&i.addedClasses),e),p=lt(a,o.inline?{"vertical-align":"-0.125em"}:{},i&&i.addedStyles),m={...t,status:"loaded",addedClasses:f,addedStyles:p};return a[I]=m,e.parentNode&&e.parentNode.replaceChild(a,e),a}function An(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ln(e){return'url("data:image/svg+xml,'+An(e)+'")'}const Mn={display:"inline-block"},he={"background-color":"currentColor"},dt={"background-color":"transparent"},je={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ae={"-webkit-mask":he,mask:he,background:dt};for(const e in Ae){const t=Ae[e];for(const n in je)t[e+"-"+n]=je[n]}function Le(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function _n(e,t,n,r){const o=t.customisations,s=W(n,o),i=s.attributes,c=e[I],a=ct(s.body,{...i,width:n.width+"",height:n.height+""}),l=at(t.icon),u=ut(e,l,new Set(c&&c.addedClasses)),p={"--svg":Ln(a),width:Le(i.width),height:Le(i.height),...Mn,...r?he:dt};o.inline&&(p["vertical-align"]="-0.125em");const m=lt(e,p,c&&c.addedStyles),g={...t,status:"loaded",addedClasses:u,addedStyles:m};return e[I]=g,e}let R=!1;function $n(){R||(R=!0,setTimeout(()=>{R&&(R=!1,T())}))}function T(e,t=!1){const n=Object.create(null);function r(o,s){const{provider:i,prefix:c,name:a}=o,l=v(i,c),u=l.icons[a];if(u)return{status:"loaded",icon:u};if(l.missing.has(a))return{status:"missing"};if(s&&!fn(o)){const f=n[i]||(n[i]=Object.create(null));(f[c]||(f[c]=new Set)).add(a)}return{status:"loading"}}(e?[e]:N()).forEach(o=>{const s=typeof o.node=="function"?o.node():o.node;if(!s||!s.querySelectorAll)return;let i=!1,c=!1;function a(l,u,f){if(c||(c=!0,de(o)),l.tagName.toUpperCase()!=="SVG"){const p=u.mode,m=p==="mask"||(p==="bg"?!1:p==="style"?f.body.indexOf("currentColor")!==-1:null);if(typeof m=="boolean"){_n(l,u,{...$,...f},m);return}}ft(l,u,f)}jn(s).forEach(({node:l,props:u})=>{const f=l[I];if(!f){const{status:m,icon:g}=r(u.icon,!0);if(g){a(l,u,g);return}i=i||m==="loading",l[I]={...u,status:m};return}let p;if(wn(f,u)){if(p=r(u.icon,f.name!==u.name),!p.icon){i=i||p.status==="loading",Object.assign(f,{...u,status:p.status});return}}else{if(f.status!=="loading")return;if(p=r(u.icon,!1),!p.icon){f.status=p.status;return}}a(l,u,p.icon)}),o.temporary&&!i?it(s):t&&i?st(s,!0):c&&o.observer&&pe(o)});for(const o in n){const s=n[o];for(const i in s){const c=s[i];we(Array.from(c).map(a=>({provider:o,prefix:i,name:a})),$n)}}}function Bn(e){const t=F(e);t?T(t):T({node:e,temporary:!0},!0)}function pt(e,t,n=!1){const r=B(e);if(!r)return null;const o=O(e),s=et(X,t||{}),i=ft(document.createElement("span"),{name:e,icon:o,customisations:s},r);return n?i.outerHTML:i}function Fn(){return"3.0.0"}function Nn(e,t){return pt(e,t,!1)}function zn(e,t){return pt(e,t,!0)}function Dn(e,t){const n=B(e);if(!n)return null;const r=et(X,t||{});return W(n,r)}function Rn(e){e?Bn(e):T()}if(typeof document<"u"&&typeof window<"u"){pn();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Ne(r))&&console.error(n)}catch{console.error(n)}})}setTimeout(()=>{bn(T),T()})}function Vn(e,t){We(e,t!==!1)}function qn(e){We(e,!0)}Ke("",Xt);if(typeof document<"u"&&typeof window<"u"){Ue();const e=window;if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Je(n,o)||console.error(r)}catch{console.error(r)}}}}const Hn={getAPIConfig:J,setAPIModule:Ke,sendAPIQuery:Ze,setFetch:Ht,getFetch:Qt,listAPIProviders:Vt},ht={_api:Hn,addAPIProvider:Je,loadIcons:we,loadIcon:dn,iconExists:Mt,getIcon:_t,listIcons:At,addIcon:Fe,addCollection:Ne,replaceIDs:Re,calculateSize:se,buildIcon:W,getVersion:Fn,renderSVG:Nn,renderHTML:zn,renderIcon:Dn,scan:Rn,observe:st,stopObserving:it,pauseObserver:Sn,resumeObserver:vn,enableCache:Vn,disableCache:qn};try{self.Iconify===void 0&&(self.Iconify=ht)}catch{}const Qn=Object.prototype.toString;function Gn(e,t){return Qn.call(e)===`[object ${t}]`}function Un(e){return Gn(e,"String")}const Me="|svg",Wn=d.defineComponent({name:"BioIcon",components:{SvgIcon:oe},props:{icon:{type:String,required:!0},color:String,size:{type:[String,Number],default:16},spin:Boolean,prefix:{type:String,default:"biomap"}},setup(e){const t=d.ref(null),n=d.computed(()=>{var c;return(c=e.icon)==null?void 0:c.endsWith(Me)}),r=d.computed(()=>{var c;return(c=e.icon)==null?void 0:c.replace(Me,"")}),o=d.computed(()=>`${e.prefix?e.prefix+":":""}${e.icon}`),s=async()=>{if(d.unref(n))return;const c=d.unref(t);if(!c)return;await d.nextTick();const a=d.unref(o);if(!a)return;const l=ht.renderSVG(a,{});if(l)c.textContent="",c.appendChild(l);else{const u=document.createElement("span");u.className="iconify",u.dataset.icon=a,c.textContent="",c.appendChild(u)}},i=d.computed(()=>{const{size:c,color:a}=e;let l=c;return Un(c)&&(l=parseInt(c,10)),{fontSize:`${l}px`,color:a,display:"inline-flex"}});return d.watch(()=>e.icon,s,{flush:"post"}),d.onMounted(s),{elRef:t,getWrapStyle:i,isSvgIcon:n,getSvgIcon:r}}});function Kn(e,t,n,r,o,s){const i=d.resolveComponent("SvgIcon");return e.isSvgIcon?(d.openBlock(),d.createBlock(i,{key:0,size:e.size,name:e.getSvgIcon,class:d.normalizeClass([e.$attrs.class,"anticon"]),spin:e.spin},null,8,["size","name","class","spin"])):(d.openBlock(),d.createElementBlock("span",{key:1,ref:"elRef",class:d.normalizeClass([e.$attrs.class,"app-iconify anticon",e.spin&&"app-iconify-spin"]),style:d.normalizeStyle(e.getWrapStyle)},null,6))}const ge=me(Wn,[["render",Kn]]),Jn={install(e){e.component(ne.name,ne),e.component(ge.name,ge),e.component(oe.name,oe)}};exports.BioButton=ne;exports.BioIcon=ge;exports.default=Jn;
