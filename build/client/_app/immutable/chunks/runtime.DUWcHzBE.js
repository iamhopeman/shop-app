var Sn=Array.isArray,In=Array.from,Dn=Object.defineProperty,it=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,On=Object.prototype,xn=Array.prototype,Zt=Object.getPrototypeOf;const Cn=()=>{};function Nn(t){return t()}function pt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,ht=4,M=8,et=16,E=32,Z=64,S=128,U=256,p=512,g=1024,Y=2048,x=4096,j=8192,zt=16384,dt=32768,bn=65536,Wt=1<<18,Et=1<<19,ft=Symbol("$state"),qn=Symbol("legacy props"),Pn=Symbol("");function yt(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!Xt(t,this.v)}function Jt(t){throw new Error("effect_in_teardown")}function Qt(){throw new Error("effect_in_unowned_derived")}function tn(t){throw new Error("effect_orphan")}function nn(){throw new Error("effect_update_depth_exceeded")}function Fn(){throw new Error("hydration_failed")}function Ln(t){throw new Error("props_invalid_value")}function Mn(){throw new Error("state_descriptors_fixed")}function Yn(){throw new Error("state_prototype_fixed")}function rn(){throw new Error("state_unsafe_local_read")}function en(){throw new Error("state_unsafe_mutation")}let z=!1;function jn(){z=!0}function st(t){return{f:0,v:t,reactions:null,equals:yt,version:0}}function Hn(t){return Tt(st(t))}function sn(t,n=!1){var e;const r=st(t);return n||(r.equals=wt),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Bn(t,n=!1){return Tt(sn(t,n))}function Tt(t){return o!==null&&o.f&T&&(d===null?wn([t]):d.push(t)),t}function Un(t,n){return o!==null&&ut()&&o.f&(T|et)&&(d===null||!d.includes(t))&&en(),ln(t,n)}function ln(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),mt(t,g),ut()&&u!==null&&u.f&p&&!(u.f&E)&&(_!==null&&_.includes(t)?(y(u,g),X(u)):k===null?Tn([t]):k.push(t))),n}function mt(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&g||!e&&a===u||(y(a,n),i&(p|S)&&(i&T?mt(a,Y):X(a)))}}const Vn=1,Gn=2,Kn=16,$n=1,Zn=2,zn=4,Wn=8,Xn=16,Jn=1,Qn=2,an="[",un="[!",on="]",At={},tr=Symbol();function kt(t){console.warn("hydration_mismatch")}let C=!1;function nr(t){C=t}let m;function P(t){if(t===null)throw kt(),At;return m=t}function rr(){return P(N(m))}function er(t){if(C){if(N(m)!==null)throw kt(),At;m=t}}function sr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===an||r===un)&&(t+=1)}var e=N(n);n.remove(),n=e}}var _t,gt,Rt;function lr(){if(_t===void 0){_t=window;var t=Element.prototype,n=Node.prototype;gt=it(n,"firstChild").get,Rt=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function J(t=""){return document.createTextNode(t)}function Q(t){return gt.call(t)}function N(t){return Rt.call(t)}function ar(t,n){if(!C)return Q(t);var r=Q(m);if(r===null)r=m.appendChild(J());else if(n&&r.nodeType!==3){var e=J();return r==null||r.before(e),P(e),e}return P(r),r}function ur(t,n){if(!C){var r=Q(t);return r instanceof Comment&&r.data===""?N(r):r}return m}function or(t,n=1,r=!1){let e=C?m:t;for(;n--;)e=N(e);if(!C)return e;var s=e.nodeType;if(r&&s!==3){var l=J();return e==null||e.before(l),P(l),l}return P(e),e}function ir(t){t.textContent=""}function fn(t){var n=T|g;u===null?n|=S:u.f|=Et;const r={children:null,ctx:f,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&T){var e=o;(e.children??(e.children=[])).push(r)}return r}function fr(t){const n=fn(t);return n.equals=wt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?lt(e):q(e)}}}function It(t){var n,r=u;$(t.parent);try{St(t),n=Bt(t)}finally{$(r)}return n}function Dt(t){var n=It(t),r=(I||t.f&S)&&t.deps!==null?Y:p;y(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function lt(t){St(t),L(t,0),y(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){u===null&&o===null&&tn(),o!==null&&o.f&S&&Qt(),at&&Jt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&Z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=D;try{ct(!0),W(a),a.f|=zt}catch(c){throw q(a),c}finally{ct(i)}}else n!==null&&X(a);var w=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&Et)===0;if(!w&&!s&&e&&(l!==null&&_n(a,l),o!==null&&o.f&T)){var A=o;(A.children??(A.children=[])).push(a)}return a}function _r(t){const n=b(M,null,!1);return y(n,p),n.teardown=t,n}function cr(t){Ot();var n=u!==null&&(u.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=xt(t);return e}}function vr(t){return Ot(),cn(t)}function pr(t){const n=b(Z,t,!0);return()=>{q(n)}}function xt(t){return b(ht,t,!1)}function cn(t){return b(M,t,!0)}function hr(t){return vn(t)}function vn(t,n=0){return b(M|et|n,t,!0)}function dr(t,n=!0){return b(M|E,t,!0,n)}function Ct(t){var n=t.teardown;if(n!==null){const r=at,e=o;vt(!0),K(null);try{n.call(null)}finally{vt(r),K(e)}}}function Nt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)lt(n[r])}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;q(r,n),r=e}}function pn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||q(n),n=r}}function q(t,n=!0){var r=!1;if((n||t.f&Wt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:N(e);e.remove(),e=l}r=!0}bt(t,n&&!r),Nt(t),L(t,0),y(t,j);var a=t.transitions;if(a!==null)for(const w of a)w.stop();Ct(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Er(t,n){var r=[];Pt(t,r,!0),hn(r,()=>{q(t),n&&n()})}function hn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Pt(t,n,r){if(!(t.f&x)){if(t.f^=x,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&dt)!==0||(e.f&E)!==0;Pt(e,n,l?r:!1),e=s}}}function yr(t){Ft(t,!0)}function Ft(t,n){if(t.f&x){H(t)&&W(t),t.f^=x;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&E)!==0;Ft(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const dn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,tt=[],nt=[];function Lt(){V=!1;const t=tt.slice();tt=[],pt(t)}function Mt(){G=!1;const t=nt.slice();nt=[],pt(t)}function wr(t){V||(V=!0,queueMicrotask(Lt)),tt.push(t)}function Tr(t){G||(G=!0,dn(Mt)),nt.push(t)}function En(){V&&Lt(),G&&Mt()}const Yt=0,yn=1;let B=Yt,F=!1,D=!1,at=!1;function ct(t){D=t}function vt(t){at=t}let R=[],O=0;let o=null;function K(t){o=t}let u=null;function $(t){u=t}let d=null;function wn(t){d=t}let _=null,h=0,k=null;function Tn(t){k=t}let jt=0,I=!1,f=null;function Ht(){return++jt}function ut(){return!z||f!==null&&f.l===null}function H(t){var a,i;var n=t.f;if(n&g)return!0;if(n&Y){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&Dt(l),e&&u!==null&&!I&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||y(t,p)}return!1}function mn(t,n,r){throw t}function Bt(t){var ot;var n=_,r=h,e=k,s=o,l=I,a=d,i=f,w=t.f;_=null,h=0,k=null,o=w&(E|Z)?null:t,I=!D&&(w&S)!==0,d=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!I)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,k=e,o=s,I=l,d=a,f=i}}function An(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(y(n,Y),n.f&(S|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)An(t,r[e])}function W(t){var n=t.f;if(!(n&j)){y(t,p);var r=u;u=t;try{n&et?pn(t):bt(t),Nt(t),Ct(t);var e=Bt(t);t.teardown=typeof e=="function"?e:null,t.version=jt}catch(s){mn(s)}finally{u=r}}}function Ut(){O>1e3&&(O=0,nn()),O++}function Vt(t){var n=t.length;if(n!==0){Ut();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Gt(s,l),kn(l)}}finally{D=r}}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|x))&&H(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}}function gn(){if(F=!1,O>1001)return;const t=R;R=[],Vt(t),F||(O=0)}function X(t){B===Yt&&(F||(F=!0,queueMicrotask(gn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&E)!==0,a=l&&(s&p)!==0;if(!a&&!(s&x))if(s&M){l?r.f^=p:H(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&ht&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Gt(i,n)}function Kt(t){var n=B,r=R;try{Ut();const s=[];B=yn,R=s,F=!1,Vt(r);var e=t==null?void 0:t();return En(),(R.length>0||s.length>0)&&Kt(),O=0,e}finally{B=n,R=r}}async function mr(){await Promise.resolve(),Kt()}function Ar(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=It(t);return lt(t),e}if(o!==null){d!==null&&d.includes(t)&&rn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),k!==null&&u!==null&&u.f&p&&!(u.f&E)&&k.includes(t)&&(y(u,g),X(u))}else if(r&&t.deps===null){var l=t,a=l.parent;a!==null&&!((i=a.deriveds)!=null&&i.includes(l))&&(a.deriveds??(a.deriveds=[])).push(l)}return r&&(l=t,H(l)&&Dt(l)),t.v}function kr(t){const n=o;try{return o=null,t()}finally{o=n}}const Rn=~(g|Y|p);function y(t,n){t.f=t.f&Rn|n}function gr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:st(!1)})}function Rr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];$(l.effect),K(l.reaction),xt(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ft in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ft in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{ut as $,P as A,rr as B,Sn as C,In as D,dt as E,sr as F,nr as G,un as H,x as I,yr as J,Er as K,u as L,ln as M,Pt as N,ir as O,hn as P,Q,on as R,o as S,sn as T,st as U,Gn as V,Vn as W,Kn as X,N as Y,Tr as Z,Pn as _,dr as a,cn as a0,Un as a1,Bn as a2,Jn as a3,Qn as a4,K as a5,$ as a6,_r as a7,wr as a8,Dn as a9,Xn as aA,Kt as aB,mr as aC,Hn as aD,lr as aa,an as ab,At as ac,kt as ad,Fn as ae,pr as af,ft as ag,On as ah,xn as ai,Mn as aj,tr as ak,it as al,Yn as am,Zt as an,xt as ao,Ln as ap,bn as aq,zn as ar,wt as as,E as at,Z as au,$n as av,Zn as aw,Wn as ax,qn as ay,fr as az,vn as b,m as c,q as d,Rr as e,ur as f,ar as g,C as h,or as i,f as j,kr as k,z as l,vr as m,Cn as n,pt as o,gr as p,Ar as q,er as r,Xt as s,hr as t,cr as u,Nn as v,Sr as w,fn as x,jn as y,J as z};
