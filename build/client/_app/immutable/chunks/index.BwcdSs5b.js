import{S as _e,i as Fe,t as A,a as I,g as Je,f as Qe}from"./index.BYXNZXlm.js";import{j as Tt,n as P,l as W,p as Et,q as Ce,f as Q,r as B,o as kt,w as Ot,m as K,d as oe,s as Ie,u as Re,t as q,v as Nt,x as _t,k as se,y as Ft,g as $e}from"./index.BPbQtlAe.js";import{Y as Se,$ as Ct,a0 as St,s as Pe,c as ee,u as te,g as ne,a as re,v as De,y as ce,o as me,j as Y,B as de,d as H,C as et,b as tt,e as nt,h as rt,i as at,J as fe,M as it,G as be,H as ot}from"./scheduler._6DmXkuH.js";import{r as Le,w as Oe,d as st}from"./index.BEPY084A.js";import{t as Me,o as Pt,r as Dt,g as At}from"./Icon.g8OtteLt.js";import{c as It,a as ut}from"./events.B6wRTb4t.js";import{c as Rt}from"./index.DB8Jo1Ze.js";function rr(t,e,n,r=!0){const i=e-n;return i<=0?r?t[t.length-1]:t[0]:t[i]}function ar(t,e,n,r=!0){const i=e+n;return i>t.length-1?r?t[0]:t[t.length-1]:t[i]}function ir(t,e,n=!0){return e===t.length-1?n?t[0]:t[e]:t[e+1]}function or(t,e,n=!0){return e<=0?n?t[t.length-1]:t[0]:t[e-1]}function Lt(t){return t[t.length-1]}function sr(t,e){return t.map((n,r)=>t[(e+r)%t.length])}function ur(t,e,n=Tt){const r=e.findIndex(i=>n(i,t));return r!==-1?e.splice(r,1):e.push(t),e}function lt(t){return new Promise(e=>setTimeout(e,t))}let Mt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",Bt=(t=21)=>{let e="",n=t;for(;n--;)e+=Mt[Math.random()*64|0];return e};function Kt(){return Bt(10)}function jt(t){return t.reduce((e,n)=>(e[n]=Kt(),e),{})}const ct=()=>typeof window<"u";function xt(){const t=navigator.userAgentData;return(t==null?void 0:t.platform)??navigator.platform}const dt=t=>ct()&&t.test(xt().toLowerCase()),Ut=()=>ct()&&!!navigator.maxTouchPoints,Vt=()=>dt(/^mac/)&&!Ut(),qt=()=>dt(/mac|iphone|ipad|ipod/i),Gt=()=>qt()&&!Vt(),Ee="data-melt-scroll-lock";function Be(t,e){if(!t)return;const n=t.style.cssText;return Object.assign(t.style,e),()=>{t.style.cssText=n}}function Wt(t,e,n){if(!t)return;const r=t.style.getPropertyValue(e);return t.style.setProperty(e,n),()=>{r?t.style.setProperty(e,r):t.style.removeProperty(e)}}function Yt(t){const e=t.getBoundingClientRect().left;return Math.round(e)+t.scrollLeft?"paddingLeft":"paddingRight"}function Ht(t){const e=document,n=e.defaultView??window,{documentElement:r,body:i}=e;if(i.hasAttribute(Ee))return P;i.setAttribute(Ee,"");const a=n.innerWidth-r.clientWidth,b=()=>Wt(r,"--scrollbar-width",`${a}px`),c=Yt(r),l=n.getComputedStyle(i)[c],d=()=>Be(i,{overflow:"hidden",[c]:`calc(${l} + ${a}px)`}),g=()=>{const{scrollX:E,scrollY:y,visualViewport:T}=n,p=(T==null?void 0:T.offsetLeft)??0,_=(T==null?void 0:T.offsetTop)??0,F=Be(i,{position:"fixed",overflow:"hidden",top:`${-(y-Math.floor(_))}px`,left:`${-(E-Math.floor(p))}px`,right:"0",[c]:`calc(${l} + ${a}px)`});return()=>{F==null||F(),n.scrollTo(E,y)}},w=[b(),Gt()?g():d()];return()=>{w.forEach(E=>E==null?void 0:E()),i.removeAttribute(Ee)}}function Xt(t){let e=t.parentElement;for(;W(e)&&!e.hasAttribute("data-portal");)e=e.parentElement;return e||"body"}function zt(t,e){return e!==void 0?e:Xt(t)==="body"?document.body:null}async function Ke(t){const{prop:e,defaultEl:n}=t;if(await Promise.all([lt(1),Se]),e===void 0){n==null||n.focus();return}const r=Et(e)?e(n):e;if(typeof r=="string"){const i=document.querySelector(r);if(!W(i))return;i.focus()}else W(r)&&r.focus()}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var ft=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],ve=ft.join(","),bt=typeof Element>"u",U=bt?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,pe=!bt&&Element.prototype.getRootNode?function(t){var e;return t==null||(e=t.getRootNode)===null||e===void 0?void 0:e.call(t)}:function(t){return t==null?void 0:t.ownerDocument},he=function t(e,n){var r;n===void 0&&(n=!0);var i=e==null||(r=e.getAttribute)===null||r===void 0?void 0:r.call(e,"inert"),u=i===""||i==="true",a=u||n&&e&&t(e.parentNode);return a},Zt=function(e){var n,r=e==null||(n=e.getAttribute)===null||n===void 0?void 0:n.call(e,"contenteditable");return r===""||r==="true"},vt=function(e,n,r){if(he(e))return[];var i=Array.prototype.slice.apply(e.querySelectorAll(ve));return n&&U.call(e,ve)&&i.unshift(e),i=i.filter(r),i},pt=function t(e,n,r){for(var i=[],u=Array.from(e);u.length;){var a=u.shift();if(!he(a,!1))if(a.tagName==="SLOT"){var b=a.assignedElements(),c=b.length?b:a.children,l=t(c,!0,r);r.flatten?i.push.apply(i,l):i.push({scopeParent:a,candidates:l})}else{var d=U.call(a,ve);d&&r.filter(a)&&(n||!e.includes(a))&&i.push(a);var g=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),w=!he(g,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(g&&w){var E=t(g===!0?a.children:g.children,!0,r);r.flatten?i.push.apply(i,E):i.push({scopeParent:a,candidates:E})}else u.unshift.apply(u,a.children)}}return i},ht=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},x=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||Zt(e))&&!ht(e)?0:e.tabIndex},Jt=function(e,n){var r=x(e);return r<0&&n&&!ht(e)?0:r},Qt=function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex},gt=function(e){return e.tagName==="INPUT"},$t=function(e){return gt(e)&&e.type==="hidden"},en=function(e){var n=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return n},tn=function(e,n){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===n)return e[r]},nn=function(e){if(!e.name)return!0;var n=e.form||pe(e),r=function(b){return n.querySelectorAll('input[type="radio"][name="'+b+'"]')},i;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")i=r(window.CSS.escape(e.name));else try{i=r(e.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var u=tn(i,e.form);return!u||u===e},rn=function(e){return gt(e)&&e.type==="radio"},an=function(e){return rn(e)&&!nn(e)},on=function(e){var n,r=e&&pe(e),i=(n=r)===null||n===void 0?void 0:n.host,u=!1;if(r&&r!==e){var a,b,c;for(u=!!((a=i)!==null&&a!==void 0&&(b=a.ownerDocument)!==null&&b!==void 0&&b.contains(i)||e!=null&&(c=e.ownerDocument)!==null&&c!==void 0&&c.contains(e));!u&&i;){var l,d,g;r=pe(i),i=(l=r)===null||l===void 0?void 0:l.host,u=!!((d=i)!==null&&d!==void 0&&(g=d.ownerDocument)!==null&&g!==void 0&&g.contains(i))}}return u},je=function(e){var n=e.getBoundingClientRect(),r=n.width,i=n.height;return r===0&&i===0},sn=function(e,n){var r=n.displayCheck,i=n.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var u=U.call(e,"details>summary:first-of-type"),a=u?e.parentElement:e;if(U.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof i=="function"){for(var b=e;e;){var c=e.parentElement,l=pe(e);if(c&&!c.shadowRoot&&i(c)===!0)return je(e);e.assignedSlot?e=e.assignedSlot:!c&&l!==e.ownerDocument?e=l.host:e=c}e=b}if(on(e))return!e.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return je(e);return!1},un=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var n=e.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var i=n.children.item(r);if(i.tagName==="LEGEND")return U.call(n,"fieldset[disabled] *")?!0:!i.contains(e)}return!0}n=n.parentElement}return!1},ge=function(e,n){return!(n.disabled||he(n)||$t(n)||sn(n,e)||en(n)||un(n))},Ne=function(e,n){return!(an(n)||x(n)<0||!ge(e,n))},ln=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},cn=function t(e){var n=[],r=[];return e.forEach(function(i,u){var a=!!i.scopeParent,b=a?i.scopeParent:i,c=Jt(b,a),l=a?t(i.candidates):b;c===0?a?n.push.apply(n,l):n.push(b):r.push({documentOrder:u,tabIndex:c,item:i,isScope:a,content:l})}),r.sort(Qt).reduce(function(i,u){return u.isScope?i.push.apply(i,u.content):i.push(u.content),i},[]).concat(n)},dn=function(e,n){n=n||{};var r;return n.getShadowRoot?r=pt([e],n.includeContainer,{filter:Ne.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:ln}):r=vt(e,n.includeContainer,Ne.bind(null,n)),cn(r)},fn=function(e,n){n=n||{};var r;return n.getShadowRoot?r=pt([e],n.includeContainer,{filter:ge.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):r=vt(e,n.includeContainer,ge.bind(null,n)),r},G=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return U.call(e,ve)===!1?!1:Ne(n,e)},bn=ft.concat("iframe").join(","),ke=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return U.call(e,bn)===!1?!1:ge(n,e)};/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function xe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ue(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xe(Object(n),!0).forEach(function(r){vn(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function vn(t,e,n){return e=hn(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pn(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function hn(t){var e=pn(t,"string");return typeof e=="symbol"?e:String(e)}var Ve={activateTrap:function(e,n){if(e.length>0){var r=e[e.length-1];r!==n&&r.pause()}var i=e.indexOf(n);i===-1||e.splice(i,1),e.push(n)},deactivateTrap:function(e,n){var r=e.indexOf(n);r!==-1&&e.splice(r,1),e.length>0&&e[e.length-1].unpause()}},gn=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},mn=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},$=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},yn=function(e){return $(e)&&!e.shiftKey},wn=function(e){return $(e)&&e.shiftKey},qe=function(e){return setTimeout(e,0)},Ge=function(e,n){var r=-1;return e.every(function(i,u){return n(i)?(r=u,!1):!0}),r},J=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return typeof e=="function"?e.apply(void 0,r):e},ue=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Tn=[],En=function(e,n){var r=(n==null?void 0:n.document)||document,i=(n==null?void 0:n.trapStack)||Tn,u=Ue({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:yn,isKeyBackward:wn},n),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},b,c=function(s,o,v){return s&&s[o]!==void 0?s[o]:u[v||o]},l=function(s,o){var v=typeof(o==null?void 0:o.composedPath)=="function"?o.composedPath():void 0;return a.containerGroups.findIndex(function(m){var k=m.container,O=m.tabbableNodes;return k.contains(s)||(v==null?void 0:v.includes(k))||O.find(function(N){return N===s})})},d=function(s){var o=u[s];if(typeof o=="function"){for(var v=arguments.length,m=new Array(v>1?v-1:0),k=1;k<v;k++)m[k-1]=arguments[k];o=o.apply(void 0,m)}if(o===!0&&(o=void 0),!o){if(o===void 0||o===!1)return o;throw new Error("`".concat(s,"` was specified but was not a node, or did not return a node"))}var O=o;if(typeof o=="string"&&(O=r.querySelector(o),!O))throw new Error("`".concat(s,"` as selector refers to no known node"));return O},g=function(){var s=d("initialFocus");if(s===!1)return!1;if(s===void 0||!ke(s,u.tabbableOptions))if(l(r.activeElement)>=0)s=r.activeElement;else{var o=a.tabbableGroups[0],v=o&&o.firstTabbableNode;s=v||d("fallbackFocus")}if(!s)throw new Error("Your focus-trap needs to have at least one focusable element");return s},w=function(){if(a.containerGroups=a.containers.map(function(s){var o=dn(s,u.tabbableOptions),v=fn(s,u.tabbableOptions),m=o.length>0?o[0]:void 0,k=o.length>0?o[o.length-1]:void 0,O=v.find(function(S){return G(S)}),N=v.slice().reverse().find(function(S){return G(S)}),C=!!o.find(function(S){return x(S)>0});return{container:s,tabbableNodes:o,focusableNodes:v,posTabIndexesFound:C,firstTabbableNode:m,lastTabbableNode:k,firstDomTabbableNode:O,lastDomTabbableNode:N,nextTabbableNode:function(M){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,R=o.indexOf(M);return R<0?z?v.slice(v.indexOf(M)+1).find(function(Z){return G(Z)}):v.slice(0,v.indexOf(M)).reverse().find(function(Z){return G(Z)}):o[R+(z?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(s){return s.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!d("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(a.containerGroups.find(function(s){return s.posTabIndexesFound})&&a.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},E=function f(s){var o=s.activeElement;if(o)return o.shadowRoot&&o.shadowRoot.activeElement!==null?f(o.shadowRoot):o},y=function f(s){if(s!==!1&&s!==E(document)){if(!s||!s.focus){f(g());return}s.focus({preventScroll:!!u.preventScroll}),a.mostRecentlyFocusedNode=s,gn(s)&&s.select()}},T=function(s){var o=d("setReturnFocus",s);return o||(o===!1?!1:s)},p=function(s){var o=s.target,v=s.event,m=s.isBackward,k=m===void 0?!1:m;o=o||ue(v),w();var O=null;if(a.tabbableGroups.length>0){var N=l(o,v),C=N>=0?a.containerGroups[N]:void 0;if(N<0)k?O=a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:O=a.tabbableGroups[0].firstTabbableNode;else if(k){var S=Ge(a.tabbableGroups,function(we){var Te=we.firstTabbableNode;return o===Te});if(S<0&&(C.container===o||ke(o,u.tabbableOptions)&&!G(o,u.tabbableOptions)&&!C.nextTabbableNode(o,!1))&&(S=N),S>=0){var M=S===0?a.tabbableGroups.length-1:S-1,z=a.tabbableGroups[M];O=x(o)>=0?z.lastTabbableNode:z.lastDomTabbableNode}else $(v)||(O=C.nextTabbableNode(o,!1))}else{var R=Ge(a.tabbableGroups,function(we){var Te=we.lastTabbableNode;return o===Te});if(R<0&&(C.container===o||ke(o,u.tabbableOptions)&&!G(o,u.tabbableOptions)&&!C.nextTabbableNode(o))&&(R=N),R>=0){var Z=R===a.tabbableGroups.length-1?0:R+1,Ae=a.tabbableGroups[Z];O=x(o)>=0?Ae.firstTabbableNode:Ae.firstDomTabbableNode}else $(v)||(O=C.nextTabbableNode(o))}}else O=d("fallbackFocus");return O},_=function(s){var o=ue(s);if(!(l(o,s)>=0)){if(J(u.clickOutsideDeactivates,s)){b.deactivate({returnFocus:u.returnFocusOnDeactivate});return}J(u.allowOutsideClick,s)||s.preventDefault()}},F=function(s){var o=ue(s),v=l(o,s)>=0;if(v||o instanceof Document)v&&(a.mostRecentlyFocusedNode=o);else{s.stopImmediatePropagation();var m,k=!0;if(a.mostRecentlyFocusedNode)if(x(a.mostRecentlyFocusedNode)>0){var O=l(a.mostRecentlyFocusedNode),N=a.containerGroups[O].tabbableNodes;if(N.length>0){var C=N.findIndex(function(S){return S===a.mostRecentlyFocusedNode});C>=0&&(u.isKeyForward(a.recentNavEvent)?C+1<N.length&&(m=N[C+1],k=!1):C-1>=0&&(m=N[C-1],k=!1))}}else a.containerGroups.some(function(S){return S.tabbableNodes.some(function(M){return x(M)>0})})||(k=!1);else k=!1;k&&(m=p({target:a.mostRecentlyFocusedNode,isBackward:u.isKeyBackward(a.recentNavEvent)})),y(m||a.mostRecentlyFocusedNode||g())}a.recentNavEvent=void 0},h=function(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;a.recentNavEvent=s;var v=p({event:s,isBackward:o});v&&($(s)&&s.preventDefault(),y(v))},D=function(s){if(mn(s)&&J(u.escapeDeactivates,s)!==!1){s.preventDefault(),b.deactivate();return}(u.isKeyForward(s)||u.isKeyBackward(s))&&h(s,u.isKeyBackward(s))},V=function(s){var o=ue(s);l(o,s)>=0||J(u.clickOutsideDeactivates,s)||J(u.allowOutsideClick,s)||(s.preventDefault(),s.stopImmediatePropagation())},ae=function(){if(a.active)return Ve.activateTrap(i,b),a.delayInitialFocusTimer=u.delayInitialFocus?qe(function(){y(g())}):y(g()),r.addEventListener("focusin",F,!0),r.addEventListener("mousedown",_,{capture:!0,passive:!1}),r.addEventListener("touchstart",_,{capture:!0,passive:!1}),r.addEventListener("click",V,{capture:!0,passive:!1}),r.addEventListener("keydown",D,{capture:!0,passive:!1}),b},ie=function(){if(a.active)return r.removeEventListener("focusin",F,!0),r.removeEventListener("mousedown",_,!0),r.removeEventListener("touchstart",_,!0),r.removeEventListener("click",V,!0),r.removeEventListener("keydown",D,!0),b},ye=function(s){var o=s.some(function(v){var m=Array.from(v.removedNodes);return m.some(function(k){return k===a.mostRecentlyFocusedNode})});o&&y(g())},X=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(ye):void 0,L=function(){X&&(X.disconnect(),a.active&&!a.paused&&a.containers.map(function(s){X.observe(s,{subtree:!0,childList:!0})}))};return b={get active(){return a.active},get paused(){return a.paused},activate:function(s){if(a.active)return this;var o=c(s,"onActivate"),v=c(s,"onPostActivate"),m=c(s,"checkCanFocusTrap");m||w(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=r.activeElement,o==null||o();var k=function(){m&&w(),ae(),L(),v==null||v()};return m?(m(a.containers.concat()).then(k,k),this):(k(),this)},deactivate:function(s){if(!a.active)return this;var o=Ue({onDeactivate:u.onDeactivate,onPostDeactivate:u.onPostDeactivate,checkCanReturnFocus:u.checkCanReturnFocus},s);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,ie(),a.active=!1,a.paused=!1,L(),Ve.deactivateTrap(i,b);var v=c(o,"onDeactivate"),m=c(o,"onPostDeactivate"),k=c(o,"checkCanReturnFocus"),O=c(o,"returnFocus","returnFocusOnDeactivate");v==null||v();var N=function(){qe(function(){O&&y(T(a.nodeFocusedBeforeActivation)),m==null||m()})};return O&&k?(k(T(a.nodeFocusedBeforeActivation)).then(N,N),this):(N(),this)},pause:function(s){if(a.paused||!a.active)return this;var o=c(s,"onPause"),v=c(s,"onPostPause");return a.paused=!0,o==null||o(),ie(),L(),v==null||v(),this},unpause:function(s){if(!a.paused||!a.active)return this;var o=c(s,"onUnpause"),v=c(s,"onPostUnpause");return a.paused=!1,o==null||o(),w(),ae(),L(),v==null||v(),this},updateContainerElements:function(s){var o=[].concat(s).filter(Boolean);return a.containers=o.map(function(v){return typeof v=="string"?r.querySelector(v):v}),a.active&&w(),L(),this}},b.updateContainerElements(e),b};function kn(t={}){let e;const{immediate:n,...r}=t,i=Oe(!1),u=Oe(!1),a=g=>e==null?void 0:e.activate(g),b=g=>{e==null||e.deactivate(g)},c=()=>{e&&(e.pause(),u.set(!0))},l=()=>{e&&(e.unpause(),u.set(!1))};return{useFocusTrap:g=>(e=En(g,{...r,onActivate(){var w;i.set(!0),(w=t.onActivate)==null||w.call(t)},onDeactivate(){var w;i.set(!1),(w=t.onDeactivate)==null||w.call(t)}}),n&&a(),{destroy(){b(),e=void 0}}),hasFocus:Le(i),isPaused:Le(u),activate:a,deactivate:b,pause:c,unpause:l}}const le=[],On=(t,e)=>{let n=P;function r(){const u=le.indexOf(t);u>=0&&le.splice(u,1)}function i(u){n();const{open:a,onClose:b,shouldCloseOnInteractOutside:c,closeOnInteractOutside:l}=u;lt(100).then(()=>{a?le.push(t):r()});function d(){return Lt(le)===t}function g(){d()&&b&&(b(),r())}function w(y){const T=y.target;Ce(T)&&T&&d()&&(y.preventDefault(),y.stopPropagation(),y.stopImmediatePropagation())}function E(y){c!=null&&c(y)&&d()&&(y.preventDefault(),y.stopPropagation(),y.stopImmediatePropagation(),g())}n=_n(t,{onInteractOutsideStart:w,onInteractOutside:l?E:void 0,enabled:a}).destroy}return i(e),{update:i,destroy(){r(),n()}}},Nn=(t,e="body")=>{let n;if(!W(e)&&typeof e!="string")return{destroy:P};async function r(u){if(e=u,typeof e=="string"){if(n=document.querySelector(e),n===null&&(await Se(),n=document.querySelector(e)),n===null)throw new Error(`No element found matching css selector: "${e}"`)}else if(e instanceof HTMLElement)n=e;else throw new TypeError(`Unknown portal target type: ${e===null?"null":typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);t.dataset.portal="",n.appendChild(t),t.hidden=!1}function i(){t.remove()}return r(e),{update:r,destroy:i}},_n=(t,e)=>{let n=P,r=P,i=!1,u=!1,a=!1;function b(d){n(),r();const{onInteractOutside:g,onInteractOutsideStart:w,enabled:E}=d;if(!E)return;function y(_){g&&We(_,t)&&(w==null||w(_));const F=_.target;Ce(F)&&mt(t,F)&&(u=!0),i=!0}function T(_){g==null||g(_)}const p=Fn(t);if(typeof PointerEvent<"u"){const _=F=>{r();const h=D=>{c(D)&&T(D),l()};if(F.pointerType==="touch"){r=B(p,"click",h,{capture:!0,once:!0});return}h(F)};n=Q(B(p,"pointerdown",y,!0),B(p,"pointerup",_,!0))}else{const _=h=>{a?a=!1:c(h)&&T(h),l()},F=h=>{a=!0,c(h)&&T(h),l()};n=Q(B(p,"mousedown",y,!0),B(p,"mouseup",_,!0),B(p,"touchstart",y,!0),B(p,"touchend",F,!0))}}function c(d){return!!(i&&!u&&We(d,t))}function l(){i=!1,u=!1}return b(e),{update:b,destroy(){n(),r()}}};function We(t,e){if("button"in t&&t.button>0)return!1;const n=t.target;if(!Ce(n))return!1;const r=n.ownerDocument;return!r||!r.documentElement.contains(n)?!1:e&&!mt(e,n)}function mt(t,e){return t===e||t.contains(e)}function Fn(t){return(t==null?void 0:t.ownerDocument)??document}const{name:j}=_t("dialog"),Cn={preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,role:"dialog",defaultOpen:!1,portal:void 0,forceVisible:!1,openFocus:void 0,closeFocus:void 0,onOutsideClick:void 0},Sn=["content","title","description"];function Pn(t){const e={...Cn,...t},n=Me(kt(e,"ids")),{preventScroll:r,closeOnEscape:i,closeOnOutsideClick:u,role:a,portal:b,forceVisible:c,openFocus:l,closeFocus:d,onOutsideClick:g}=n,w=Ot.writable(null),E=Me({...jt(Sn),...e.ids}),y=e.open??Oe(e.defaultOpen),T=Pt(y,e==null?void 0:e.onOpenChange),p=st([T,c],([f,s])=>f||s);let _=P;function F(f){const s=f.currentTarget,o=f.currentTarget;!W(s)||!W(o)||(T.set(!0),w.set(o))}function h(){T.set(!1),Ke({prop:d.get(),defaultEl:w.get()})}const D=K(j("trigger"),{stores:[T],returned:([f])=>({"aria-haspopup":"dialog","aria-expanded":f,type:"button"}),action:f=>({destroy:Q(oe(f,"click",o=>{F(o)}),oe(f,"keydown",o=>{o.key!==se.ENTER&&o.key!==se.SPACE||(o.preventDefault(),F(o))}))})}),V=K(j("overlay"),{stores:[p,T],returned:([f,s])=>({hidden:f?void 0:!0,tabindex:-1,style:Ie({display:f?void 0:"none"}),"aria-hidden":!0,"data-state":s?"open":"closed"}),action:f=>{let s=P;if(i.get()){const o=Re(f,{handler:()=>{h()}});o&&o.destroy&&(s=o.destroy)}return{destroy(){s()}}}}),ae=K(j("content"),{stores:[p,E.content,E.description,E.title,T],returned:([f,s,o,v,m])=>({id:s,role:a.get(),"aria-describedby":o,"aria-labelledby":v,"aria-modal":f?"true":void 0,"data-state":m?"open":"closed",tabindex:-1,hidden:f?void 0:!0,style:Ie({display:f?void 0:"none"})}),action:f=>{let s=P,o=P;const v=Q(q([T,u,i],([m,k,O])=>{if(!m)return;const N=kn({immediate:!1,escapeDeactivates:O,clickOutsideDeactivates:k,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:f});s=N.activate,o=N.deactivate;const C=N.useFocusTrap(f);return C&&C.destroy?C.destroy:N.deactivate}),q([u,T],([m,k])=>On(f,{open:k,closeOnInteractOutside:m,onClose(){h()},shouldCloseOnInteractOutside(O){var N;return(N=g.get())==null||N(O),!O.defaultPrevented}}).destroy),q([i],([m])=>m?Re(f,{handler:h}).destroy:P),q([p],([m])=>{Se().then(()=>{m?s():o()})}));return{destroy:()=>{_(),v()}}}}),ie=K(j("portalled"),{stores:b,returned:f=>({"data-portal":Nt(f)}),action:f=>{const s=q([b],([o])=>{if(o===null)return P;const v=zt(f,o);return v===null?P:Nn(f,v).destroy});return{destroy(){s()}}}}),ye=K(j("title"),{stores:[E.title],returned:([f])=>({id:f})}),X=K(j("description"),{stores:[E.description],returned:([f])=>({id:f})}),L=K(j("close"),{returned:()=>({type:"button"}),action:f=>({destroy:Q(oe(f,"click",()=>{h()}),oe(f,"keydown",o=>{o.key!==se.SPACE&&o.key!==se.ENTER||(o.preventDefault(),h())}))})});return q([T,r],([f,s])=>{if(Ft){if(s&&f&&(_=Ht()),f){const o=document.getElementById(E.content.get());Ke({prop:l.get(),defaultEl:o})}return()=>{c.get()||_()}}}),{ids:E,elements:{content:ae,trigger:D,title:ye,description:X,overlay:V,close:L,portalled:ie},states:{open:T},options:n}}function yt(){return{NAME:"dialog",PARTS:["close","content","description","overlay","portal","title","trigger"]}}function Dn(t){const{NAME:e,PARTS:n}=yt(),r=It(e,n),i={...Pn({...Dt(t),role:"dialog",forceVisible:!0}),getAttrs:r};return Ct(e,i),{...i,updateOption:At(i.options)}}function wt(){const{NAME:t}=yt();return St(t)}const An=t=>({ids:t&1}),Ye=t=>({ids:t[0]});function In(t){let e;const n=t[12].default,r=ee(n,t,t[11],Ye);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,u){r&&r.m(i,u),e=!0},p(i,[u]){r&&r.p&&(!e||u&2049)&&te(r,n,i,i[11],e?re(n,i[11],u,An):ne(i[11]),Ye)},i(i){e||(A(r,i),e=!0)},o(i){I(r,i),e=!1},d(i){r&&r.d(i)}}}function Rn(t,e,n){let r,{$$slots:i={},$$scope:u}=e,{preventScroll:a=void 0}=e,{closeOnEscape:b=void 0}=e,{closeOnOutsideClick:c=void 0}=e,{portal:l=void 0}=e,{open:d=void 0}=e,{onOpenChange:g=void 0}=e,{openFocus:w=void 0}=e,{closeFocus:E=void 0}=e,{onOutsideClick:y=void 0}=e;const{states:{open:T},updateOption:p,ids:_}=Dn({closeOnEscape:b,preventScroll:a,closeOnOutsideClick:c,portal:l,forceVisible:!0,defaultOpen:d,openFocus:w,closeFocus:E,onOutsideClick:y,onOpenChange:({next:h})=>(d!==h&&(g==null||g(h),n(2,d=h)),h)}),F=st([_.content,_.description,_.title],([h,D,V])=>({content:h,description:D,title:V}));return De(t,F,h=>n(0,r=h)),t.$$set=h=>{"preventScroll"in h&&n(3,a=h.preventScroll),"closeOnEscape"in h&&n(4,b=h.closeOnEscape),"closeOnOutsideClick"in h&&n(5,c=h.closeOnOutsideClick),"portal"in h&&n(6,l=h.portal),"open"in h&&n(2,d=h.open),"onOpenChange"in h&&n(7,g=h.onOpenChange),"openFocus"in h&&n(8,w=h.openFocus),"closeFocus"in h&&n(9,E=h.closeFocus),"onOutsideClick"in h&&n(10,y=h.onOutsideClick),"$$scope"in h&&n(11,u=h.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&d!==void 0&&T.set(d),t.$$.dirty&8&&p("preventScroll",a),t.$$.dirty&16&&p("closeOnEscape",b),t.$$.dirty&32&&p("closeOnOutsideClick",c),t.$$.dirty&64&&p("portal",l),t.$$.dirty&256&&p("openFocus",w),t.$$.dirty&512&&p("closeFocus",E),t.$$.dirty&1024&&p("onOutsideClick",y)},[r,F,d,a,b,c,l,g,w,E,y,u,i]}class Ln extends _e{constructor(e){super(),Fe(this,e,Rn,In,Pe,{preventScroll:3,closeOnEscape:4,closeOnOutsideClick:5,portal:6,open:2,onOpenChange:7,openFocus:8,closeFocus:9,onOutsideClick:10})}}const Mn=t=>({builder:t&4}),He=t=>({builder:t[2]}),Bn=t=>({builder:t&4}),Xe=t=>({builder:t[2]});function Kn(t){let e,n,r,i;const u=t[8].default,a=ee(u,t,t[7],He);let b=[t[2],{type:"button"},t[5]],c={};for(let l=0;l<b.length;l+=1)c=H(c,b[l]);return{c(){e=nt("button"),a&&a.c(),this.h()},l(l){e=rt(l,"BUTTON",{type:!0});var d=at(e);a&&a.l(d),d.forEach(Y),this.h()},h(){fe(e,c)},m(l,d){me(l,e,d),a&&a.m(e,null),e.autofocus&&e.focus(),t[9](e),n=!0,r||(i=[it(t[2].action(e)),be(e,"m-click",t[4]),be(e,"m-keydown",t[4])],r=!0)},p(l,d){a&&a.p&&(!n||d&132)&&te(a,u,l,l[7],n?re(u,l[7],d,Mn):ne(l[7]),He),fe(e,c=$e(b,[d&4&&l[2],{type:"button"},d&32&&l[5]]))},i(l){n||(A(a,l),n=!0)},o(l){I(a,l),n=!1},d(l){l&&Y(e),a&&a.d(l),t[9](null),r=!1,ot(i)}}}function jn(t){let e;const n=t[8].default,r=ee(n,t,t[7],Xe);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,u){r&&r.m(i,u),e=!0},p(i,u){r&&r.p&&(!e||u&132)&&te(r,n,i,i[7],e?re(n,i[7],u,Bn):ne(i[7]),Xe)},i(i){e||(A(r,i),e=!0)},o(i){I(r,i),e=!1},d(i){r&&r.d(i)}}}function xn(t){let e,n,r,i;const u=[jn,Kn],a=[];function b(c,l){return c[1]?0:1}return e=b(t),n=a[e]=u[e](t),{c(){n.c(),r=ce()},l(c){n.l(c),r=ce()},m(c,l){a[e].m(c,l),me(c,r,l),i=!0},p(c,[l]){let d=e;e=b(c),e===d?a[e].p(c,l):(Je(),I(a[d],1,1,()=>{a[d]=null}),Qe(),n=a[e],n?n.p(c,l):(n=a[e]=u[e](c),n.c()),A(n,1),n.m(r.parentNode,r))},i(c){i||(A(n),i=!0)},o(c){I(n),i=!1},d(c){c&&Y(r),a[e].d(c)}}}function Un(t,e,n){let r;const i=["asChild","el"];let u=de(e,i),a,{$$slots:b={},$$scope:c}=e,{asChild:l=!1}=e,{el:d=void 0}=e;const{elements:{close:g},getAttrs:w}=wt();De(t,g,p=>n(6,a=p));const E=ut(),y=w("close");function T(p){tt[p?"unshift":"push"](()=>{d=p,n(0,d)})}return t.$$set=p=>{e=H(H({},e),et(p)),n(5,u=de(e,i)),"asChild"in p&&n(1,l=p.asChild),"el"in p&&n(0,d=p.el),"$$scope"in p&&n(7,c=p.$$scope)},t.$$.update=()=>{t.$$.dirty&64&&n(2,r=a),t.$$.dirty&4&&Object.assign(r,y)},[d,l,r,g,E,u,a,c,b,T]}class Vn extends _e{constructor(e){super(),Fe(this,e,Un,xn,Pe,{asChild:1,el:0})}}const qn=t=>({builder:t&4}),ze=t=>({builder:t[2]}),Gn=t=>({builder:t&4}),Ze=t=>({builder:t[2]});function Wn(t){let e,n,r,i;const u=t[8].default,a=ee(u,t,t[7],ze);let b=[t[2],{type:"button"},t[5]],c={};for(let l=0;l<b.length;l+=1)c=H(c,b[l]);return{c(){e=nt("button"),a&&a.c(),this.h()},l(l){e=rt(l,"BUTTON",{type:!0});var d=at(e);a&&a.l(d),d.forEach(Y),this.h()},h(){fe(e,c)},m(l,d){me(l,e,d),a&&a.m(e,null),e.autofocus&&e.focus(),t[9](e),n=!0,r||(i=[it(t[2].action(e)),be(e,"m-click",t[4]),be(e,"m-keydown",t[4])],r=!0)},p(l,d){a&&a.p&&(!n||d&132)&&te(a,u,l,l[7],n?re(u,l[7],d,qn):ne(l[7]),ze),fe(e,c=$e(b,[d&4&&l[2],{type:"button"},d&32&&l[5]]))},i(l){n||(A(a,l),n=!0)},o(l){I(a,l),n=!1},d(l){l&&Y(e),a&&a.d(l),t[9](null),r=!1,ot(i)}}}function Yn(t){let e;const n=t[8].default,r=ee(n,t,t[7],Ze);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,u){r&&r.m(i,u),e=!0},p(i,u){r&&r.p&&(!e||u&132)&&te(r,n,i,i[7],e?re(n,i[7],u,Gn):ne(i[7]),Ze)},i(i){e||(A(r,i),e=!0)},o(i){I(r,i),e=!1},d(i){r&&r.d(i)}}}function Hn(t){let e,n,r,i;const u=[Yn,Wn],a=[];function b(c,l){return c[1]?0:1}return e=b(t),n=a[e]=u[e](t),{c(){n.c(),r=ce()},l(c){n.l(c),r=ce()},m(c,l){a[e].m(c,l),me(c,r,l),i=!0},p(c,[l]){let d=e;e=b(c),e===d?a[e].p(c,l):(Je(),I(a[d],1,1,()=>{a[d]=null}),Qe(),n=a[e],n?n.p(c,l):(n=a[e]=u[e](c),n.c()),A(n,1),n.m(r.parentNode,r))},i(c){i||(A(n),i=!0)},o(c){I(n),i=!1},d(c){c&&Y(r),a[e].d(c)}}}function Xn(t,e,n){let r;const i=["asChild","el"];let u=de(e,i),a,{$$slots:b={},$$scope:c}=e,{asChild:l=!1}=e,{el:d=void 0}=e;const{elements:{trigger:g},getAttrs:w}=wt();De(t,g,p=>n(6,a=p));const E=ut(),y=w("trigger");function T(p){tt[p?"unshift":"push"](()=>{d=p,n(0,d)})}return t.$$set=p=>{e=H(H({},e),et(p)),n(5,u=de(e,i)),"asChild"in p&&n(1,l=p.asChild),"el"in p&&n(0,d=p.el),"$$scope"in p&&n(7,c=p.$$scope)},t.$$.update=()=>{t.$$.dirty&64&&n(2,r=a),t.$$.dirty&4&&Object.assign(r,y)},[d,l,r,g,E,u,a,c,b,T]}class zn extends _e{constructor(e){super(),Fe(this,e,Xn,Hn,Pe,{asChild:1,el:0})}}const lr=Ln,cr=Vn,dr=zn,fr=Rt({base:"bg-background fixed z-50 gap-4 p-6 shadow-lg",variants:{side:{top:"inset-x-0 top-0 border-b",bottom:"inset-x-0 bottom-0 border-t",left:"inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l sm:max-w-sm"}},defaultVariants:{side:"right"}}),br={top:{in:{y:"-100%",duration:500,opacity:1},out:{y:"-100%",duration:300,opacity:1}},bottom:{in:{y:"100%",duration:500,opacity:1},out:{y:"100%",duration:300,opacity:1}},left:{in:{x:"-100%",duration:500,opacity:1},out:{x:"-100%",duration:300,opacity:1}},right:{in:{x:"100%",duration:500,opacity:1},out:{x:"100%",duration:300,opacity:1}}};export{cr as C,Vn as D,lr as R,dr as T,fr as a,Ln as b,Pn as c,lt as d,kn as e,On as f,wt as g,jt as h,rr as i,ar as j,zt as k,Lt as l,Kt as m,ir as n,Ke as o,or as p,Ht as r,br as s,ur as t,Nn as u,sr as w};