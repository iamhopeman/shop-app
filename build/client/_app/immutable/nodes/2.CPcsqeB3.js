import{a as O,t as D}from"../chunks/disclose-version.Bl1fVy_4.js";import{i as ne}from"../chunks/legacy.44PWSVPk.js";import{z as ie,b as le,h as y,A as $,B as fe,C as oe,D as j,H as ve,F as J,G as C,c as I,I as L,J as ee,a as ae,K as ue,L as V,M as ce,N as de,O as _e,P as he,d as pe,Q as ge,R as me,S as ye,T as be,U as Y,V as Ae,W as Ee,X as Te,Y as Ie,Z as we,_ as ke,$ as xe,a0 as Le,p as Ne,f as Se,e as Oe,a1 as B,q as w,g as q,r as k,t as G,i as x,a2 as $e}from"../chunks/runtime.DUWcHzBE.js";import{c as Ce,l as Re,s as Me,e as K,b as P,a as U}from"../chunks/store.Dh6s7srT.js";import{o as X}from"../chunks/index-client.LqvM_n1a.js";import{w as z}from"../chunks/index.C5LjKNAz.js";function F(e,a){return a}function De(e,a,r,f){for(var s=[],u=a.length,v=0;v<u;v++)de(a[v].e,s,!0);var h=u>0&&s.length===0&&r!==null;if(h){var _=r.parentNode;_e(_),_.append(r),f.clear(),T(e,a[0].prev,a[u-1].next)}he(s,()=>{for(var p=0;p<u;p++){var t=a[p];h||(f.delete(t.k),T(e,t.prev,t.next)),pe(t.e,!h)}})}function Q(e,a,r,f,s,u=null){var v=e,h={flags:a,items:new Map,first:null};{var _=e;v=y?$(ge(_)):_.appendChild(ie())}y&&fe();var p=null,t=!1;le(()=>{var d=r(),l=oe(d)?d:d==null?[]:j(d),n=l.length;if(t&&n===0)return;t=n===0;let g=!1;if(y){var b=v.data===ve;b!==(n===0)&&(v=J(),$(v),C(!1),g=!0)}if(y){for(var o=null,i,c=0;c<n;c++){if(I.nodeType===8&&I.data===me){v=I,g=!0,C(!1);break}var A=l[c],E=f(A,c);i=re(I,h,o,null,A,E,c,s,a),h.items.set(E,i),o=i}n>0&&$(J())}if(!y){var m=ye;He(l,h,v,s,a,(m.f&L)!==0,f)}u!==null&&(n===0?p?ee(p):p=ae(()=>u(v)):p!==null&&ue(p,()=>{p=null})),g&&C(!0),r()}),y&&(v=I)}function He(e,a,r,f,s,u,v){var h=e.length,_=a.items,p=a.first,t=p,d,l=null,n=[],g=[],b,o,i,c;for(c=0;c<h;c+=1){if(b=e[c],o=v(b,c),i=_.get(o),i===void 0){var A=t?t.e.nodes_start:r;l=re(A,a,l,l===null?a.first:l.next,b,o,c,f,s),_.set(o,l),n=[],g=[],t=l.next;continue}if(Je(i,b,c),i.e.f&L&&ee(i.e),i!==t){if(d!==void 0&&d.has(i)){if(n.length<g.length){var E=g[0],m;l=E.prev;var H=n[0],N=n[n.length-1];for(m=0;m<n.length;m+=1)W(n[m],E,r);for(m=0;m<g.length;m+=1)d.delete(g[m]);T(a,H.prev,N.next),T(a,l,H),T(a,N,E),t=E,l=N,c-=1,n=[],g=[]}else d.delete(i),W(i,t,r),T(a,i.prev,i.next),T(a,i,l===null?a.first:l.next),T(a,l,i),l=i;continue}for(n=[],g=[];t!==null&&t.k!==o;)(u||!(t.e.f&L))&&(d??(d=new Set)).add(t),g.push(t),t=t.next;if(t===null)continue;i=t}n.push(i),l=i,t=i.next}if(t!==null||d!==void 0){for(var S=d===void 0?[]:j(d);t!==null;)(u||!(t.e.f&L))&&S.push(t),t=t.next;var te=S.length;if(te>0){var se=h===0?r:null;De(a,S,se,_)}}V.first=a.first&&a.first.e,V.last=l&&l.e}function Je(e,a,r,f){ce(e.v,a),e.i=r}function re(e,a,r,f,s,u,v,h,_){var p=(_&Ee)!==0,t=(_&Te)===0,d=p?t?be(s):Y(s):s,l=_&Ae?Y(v):v,n={i:l,v:d,k:u,a:null,e:null,prev:r,next:f};try{return n.e=ae(()=>h(e,d,l),y),n.e.prev=r&&r.e,n.e.next=f&&f.e,r===null?a.first=n:(r.next=n,r.e.next=n.e),f!==null&&(f.prev=n,f.e.prev=n.e),n}finally{}}function W(e,a,r){for(var f=e.next?e.next.e.nodes_start:r,s=a?a.e.nodes_start:r,u=e.e.nodes_start;u!==f;){var v=Ie(u);s.before(u),u=v}}function T(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function Ve(e){if(y){var a=!1,r=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var f=e.value;Z(e,"value",null),e.value=f}if(e.hasAttribute("checked")){var s=e.checked;Z(e,"checked",null),e.checked=s}}};e.__on_r=r,we(r),Ce()}}function Z(e,a,r,f){var s=e.__attributes??(e.__attributes={});y&&(s[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||s[a]!==(s[a]=r)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[ke]=r),e.removeAttribute(a))}function Ye(e,a,r=a){var f=xe();Re(e,"input",()=>{var s=R(e)?M(e.value):e.value;r(s),f&&s!==(s=a())&&(e.value=s??"")}),Le(()=>{var s=a();if(y&&e.defaultValue!==e.value){r(R(e)?M(e.value):e.value);return}R(e)&&s===M(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function R(e){var a=e.type;return a==="number"||a==="range"}function M(e){return e===""?null:+e}var Be=D('<div class="notification"> </div>'),qe=D("<li> <button>🗑️</button></li>"),Ge=D('<div class="notifications"></div> <input type="text" placeholder="Add an item"> <button>Add</button> <ul></ul>',1);function Qe(e,a){Ne(a,!1);const r=Me(),f=()=>P(v,"$notifications",r),s=()=>P(u,"$shoppingList",r),u=z([]),v=z([]);let h=$e("");async function _(){const o=await fetch("/api/shopping-list");u.set(await o.json())}async function p(o){await fetch("/api/shopping-list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:o})}),await _(),v.set([...f(),`Added: ${o}`]),B(h,"")}async function t(o){await fetch("/api/shopping-list",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o})}),await _(),v.set([...f(),`Removed item #${o}`])}X(_),X(()=>{const o=localStorage.getItem("shoppingList");o&&u.set(JSON.parse(o)),_().then(()=>{u.subscribe(i=>{localStorage.setItem("shoppingList",JSON.stringify(i))})})}),ne();var d=Ge(),l=Se(d);Q(l,5,f,F,(o,i)=>{var c=Be(),A=q(c,!0);k(c),G(()=>U(A,w(i))),O(o,c)}),k(l);var n=x(l,2);Ve(n);var g=x(n,2),b=x(g,2);Q(b,5,s,F,(o,i)=>{var c=qe(),A=q(c),E=x(A);k(c),G(()=>U(A,`${w(i).item??""} `)),K("click",E,()=>t(w(i).id)),O(o,c)}),k(b),Ye(n,()=>w(h),o=>B(h,o)),K("click",g,()=>p(w(h))),O(e,d),Oe()}export{Qe as component};
