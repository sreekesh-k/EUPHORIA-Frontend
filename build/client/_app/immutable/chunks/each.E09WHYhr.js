import{a as q,t as z}from"./index.BP1vhqCy.js";import{E as B}from"./scheduler.dz8I3iaA.js";function G(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function H(n,o){q(n,1,1,()=>{o.delete(n.key)})}function I(n,o,x,C,A,g,f,E,p,j,w,k){let i=n.length,d=g.length,c=i;const a={};for(;c--;)a[n[c].key]=c;const h=[],u=new Map,m=new Map,M=[];for(c=d;c--;){const e=k(A,g,c),s=x(e);let t=f.get(s);t?M.push(()=>t.p(e,o)):(t=j(s,e),t.c()),u.set(s,h[c]=t),s in a&&m.set(s,Math.abs(c-a[s]))}const v=new Set,S=new Set;function y(e){z(e,1),e.m(E,w),f.set(e.key,e),w=e.first,d--}for(;i&&d;){const e=h[d-1],s=n[i-1],t=e.key,l=s.key;e===s?(w=e.first,i--,d--):u.has(l)?!f.has(t)||v.has(t)?y(e):S.has(l)?i--:m.get(t)>m.get(l)?(S.add(t),y(e)):(v.add(l),i--):(p(s,f),i--)}for(;i--;){const e=n[i];u.has(e.key)||p(e,f)}for(;d;)y(h[d-1]);return B(M),h}export{G as e,H as o,I as u};
