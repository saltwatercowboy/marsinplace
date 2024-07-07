(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ga(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const it={},as=[],nn=()=>{},Vd=()=>!1,oo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Wa=n=>n.startsWith("onUpdate:"),gt=Object.assign,Xa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Gd=Object.prototype.hasOwnProperty,Ke=(n,e)=>Gd.call(n,e),Be=Array.isArray,Fs=n=>ao(n)==="[object Map]",Wd=n=>ao(n)==="[object Set]",Xe=n=>typeof n=="function",Et=n=>typeof n=="string",$s=n=>typeof n=="symbol",ct=n=>n!==null&&typeof n=="object",nh=n=>(ct(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),Xd=Object.prototype.toString,ao=n=>Xd.call(n),jd=n=>ao(n).slice(8,-1),Yd=n=>ao(n)==="[object Object]",ja=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Os=Ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},qd=/-(\w)/g,fs=lo(n=>n.replace(qd,(e,t)=>t?t.toUpperCase():"")),Kd=/\B([A-Z])/g,xs=lo(n=>n.replace(Kd,"-$1").toLowerCase()),ih=lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),To=lo(n=>n?`on${ih(n)}`:""),Fi=(n,e)=>!Object.is(n,e),Ao=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},sh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},$d=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Zd=n=>{const e=Et(n)?Number(n):NaN;return isNaN(e)?n:e};let Al;const rh=()=>Al||(Al=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ya(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Et(i)?tf(i):Ya(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Et(n)||ct(n))return n}const Qd=/;(?![^(]*\))/g,Jd=/:([^]+)/,ef=/\/\*[^]*?\*\//g;function tf(n){const e={};return n.replace(ef,"").split(Qd).forEach(t=>{if(t){const i=t.split(Jd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function qa(n){let e="";if(Et(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=qa(n[t]);i&&(e+=i+" ")}else if(ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const nf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sf=Ga(nf);function oh(n){return!!n||n===""}/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class rf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=cn;try{return cn=this,e()}finally{cn=t}}}on(){cn=this}off(){cn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function of(n,e=cn){e&&e.active&&e.effects.push(n)}function af(){return cn}let Ui;class Ka{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,of(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,ui();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed){if(t.computed.effect._dirtyLevel===2)return!0;if(lf(t.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),hi()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=si,t=Ui;try{return si=!0,Ui=this,this._runnings++,wl(this),this.fn()}finally{Cl(this),this._runnings--,Ui=t,si=e}}stop(){this.active&&(wl(this),Cl(this),this.onStop&&this.onStop(),this.active=!1)}}function lf(n){return n.value}function wl(n){n._trackId++,n._depsLength=0}function Cl(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)ah(n.deps[e],n);n.deps.length=n._depsLength}}function ah(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let si=!0,xa=0;const lh=[];function ui(){lh.push(si),si=!1}function hi(){const n=lh.pop();si=n===void 0?!0:n}function $a(){xa++}function Za(){for(xa--;!xa&&Ma.length;)Ma.shift()()}function ch(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&ah(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Ma=[];function uh(n,e,t){$a();for(const i of n.keys()){if(!n.computed&&i.computed&&n.get(i)===i._trackId&&i._runnings>0){i._dirtyLevel=2;continue}let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i.computed&&i._dirtyLevel===2&&(i._shouldSchedule=!0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==3&&(i._shouldSchedule=!1,i.scheduler&&Ma.push(i.scheduler)))}Za()}const hh=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Sa=new WeakMap,Ni=Symbol(""),ya=Symbol("");function kt(n,e,t){if(si&&Ui){let i=Sa.get(n);i||Sa.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=hh(()=>i.delete(t))),ch(Ui,s)}}function Nn(n,e,t,i,s,r){const o=Sa.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Be(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!$s(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Be(n)?ja(t)&&a.push(o.get("length")):(a.push(o.get(Ni)),Fs(n)&&a.push(o.get(ya)));break;case"delete":Be(n)||(a.push(o.get(Ni)),Fs(n)&&a.push(o.get(ya)));break;case"set":Fs(n)&&a.push(o.get(Ni));break}$a();for(const l of a)l&&uh(l,5);Za()}const cf=Ga("__proto__,__v_isRef,__isVue"),dh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter($s)),Rl=uf();function uf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=et(this);for(let r=0,o=this.length;r<o;r++)kt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(et)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ui(),$a();const i=et(this)[e].apply(this,t);return Za(),hi(),i}}),n}function hf(n){$s(n)||(n=String(n));const e=et(this);return kt(e,"has",n),e.hasOwnProperty(n)}class fh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?bf:_h:r?gh:mh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){if(o&&Ke(Rl,t))return Reflect.get(Rl,t,i);if(t==="hasOwnProperty")return hf}const a=Reflect.get(e,t,i);return($s(t)?dh.has(t):cf(t))||(s||kt(e,"get",t),r)?a:qt(a)?o&&ja(t)?a:a.value:ct(a)?s?vh(a):el(a):a}}class ph extends fh{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=jr(r);if(!Ea(i)&&!jr(i)&&(r=et(r),i=et(i)),!Be(e)&&qt(r)&&!qt(i))return l?!1:(r.value=i,!0)}const o=Be(e)&&ja(t)?Number(t)<e.length:Ke(e,t),a=Reflect.set(e,t,i,s);return e===et(s)&&(o?Fi(i,r)&&Nn(e,"set",t,i):Nn(e,"add",t,i)),a}deleteProperty(e,t){const i=Ke(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Nn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!$s(t)||!dh.has(t))&&kt(e,"has",t),i}ownKeys(e){return kt(e,"iterate",Be(e)?"length":Ni),Reflect.ownKeys(e)}}class df extends fh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ff=new ph,pf=new df,mf=new ph(!0);const Qa=n=>n,co=n=>Reflect.getPrototypeOf(n);function or(n,e,t=!1,i=!1){n=n.__v_raw;const s=et(n),r=et(e);t||(Fi(e,r)&&kt(s,"get",e),kt(s,"get",r));const{has:o}=co(s),a=i?Qa:t?il:nl;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function ar(n,e=!1){const t=this.__v_raw,i=et(t),s=et(n);return e||(Fi(n,s)&&kt(i,"has",n),kt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function lr(n,e=!1){return n=n.__v_raw,!e&&kt(et(n),"iterate",Ni),Reflect.get(n,"size",n)}function Pl(n){n=et(n);const e=et(this);return co(e).has.call(e,n)||(e.add(n),Nn(e,"add",n,n)),this}function Ll(n,e){e=et(e);const t=et(this),{has:i,get:s}=co(t);let r=i.call(t,n);r||(n=et(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?Fi(e,o)&&Nn(t,"set",n,e):Nn(t,"add",n,e),this}function Dl(n){const e=et(this),{has:t,get:i}=co(e);let s=t.call(e,n);s||(n=et(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Nn(e,"delete",n,void 0),r}function Il(){const n=et(this),e=n.size!==0,t=n.clear();return e&&Nn(n,"clear",void 0,void 0),t}function cr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=et(o),l=e?Qa:n?il:nl;return!n&&kt(a,"iterate",Ni),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function ur(n,e,t){return function(...i){const s=this.__v_raw,r=et(s),o=Fs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Qa:e?il:nl;return!e&&kt(r,"iterate",l?ya:Ni),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Vn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function gf(){const n={get(r){return or(this,r)},get size(){return lr(this)},has:ar,add:Pl,set:Ll,delete:Dl,clear:Il,forEach:cr(!1,!1)},e={get(r){return or(this,r,!1,!0)},get size(){return lr(this)},has:ar,add:Pl,set:Ll,delete:Dl,clear:Il,forEach:cr(!1,!0)},t={get(r){return or(this,r,!0)},get size(){return lr(this,!0)},has(r){return ar.call(this,r,!0)},add:Vn("add"),set:Vn("set"),delete:Vn("delete"),clear:Vn("clear"),forEach:cr(!0,!1)},i={get(r){return or(this,r,!0,!0)},get size(){return lr(this,!0)},has(r){return ar.call(this,r,!0)},add:Vn("add"),set:Vn("set"),delete:Vn("delete"),clear:Vn("clear"),forEach:cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ur(r,!1,!1),t[r]=ur(r,!0,!1),e[r]=ur(r,!1,!0),i[r]=ur(r,!0,!0)}),[n,t,e,i]}const[_f,vf,xf,Mf]=gf();function Ja(n,e){const t=e?n?Mf:xf:n?vf:_f;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Ke(t,s)&&s in i?t:i,s,r)}const Sf={get:Ja(!1,!1)},yf={get:Ja(!1,!0)},Ef={get:Ja(!0,!1)};const mh=new WeakMap,gh=new WeakMap,_h=new WeakMap,bf=new WeakMap;function Tf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Af(n){return n.__v_skip||!Object.isExtensible(n)?0:Tf(jd(n))}function el(n){return jr(n)?n:tl(n,!1,ff,Sf,mh)}function wf(n){return tl(n,!1,mf,yf,gh)}function vh(n){return tl(n,!0,pf,Ef,_h)}function tl(n,e,t,i,s){if(!ct(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Af(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Bs(n){return jr(n)?Bs(n.__v_raw):!!(n&&n.__v_isReactive)}function jr(n){return!!(n&&n.__v_isReadonly)}function Ea(n){return!!(n&&n.__v_isShallow)}function xh(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function Cf(n){return Object.isExtensible(n)&&sh(n,"__v_skip",!0),n}const nl=n=>ct(n)?el(n):n,il=n=>ct(n)?vh(n):n;class Mh{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ka(()=>e(this._value),()=>wo(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=et(this);return(!e._cacheable||e.effect.dirty)&&Fi(e._value,e._value=e.effect.run())&&wo(e,5),Pf(e),e.effect._dirtyLevel>=2&&wo(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Rf(n,e,t=!1){let i,s;const r=Xe(n);return r?(i=n,s=nn):(i=n.get,s=n.set),new Mh(i,s,r||!s,t)}function Pf(n){var e;si&&Ui&&(n=et(n),ch(Ui,(e=n.dep)!=null?e:n.dep=hh(()=>n.dep=void 0,n instanceof Mh?n:void 0)))}function wo(n,e=5,t,i){n=et(n);const s=n.dep;s&&uh(s,e)}function qt(n){return!!(n&&n.__v_isRef===!0)}function Lf(n){return qt(n)?n.value:n}const Df={get:(n,e,t)=>Lf(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return qt(s)&&!qt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Sh(n){return Bs(n)?n:new Proxy(n,Df)}/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ri(n,e,t,i){try{return i?n(...i):n()}catch(s){uo(s,e,t)}}function sn(n,e,t,i){if(Xe(n)){const s=ri(n,e,t,i);return s&&nh(s)&&s.catch(r=>{uo(r,e,t)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(sn(n[r],e,t,i));return s}}function uo(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ui(),ri(l,null,10,[n,o,a]),hi();return}}If(n,t,s,i)}function If(n,e,t,i=!0){console.error(n)}let Ws=!1,ba=!1;const Rt=[];let vn=0;const ls=[];let Qn=null,Ci=0;const yh=Promise.resolve();let sl=null;function Uf(n){const e=sl||yh;return n?e.then(this?n.bind(this):n):e}function Nf(n){let e=vn+1,t=Rt.length;for(;e<t;){const i=e+t>>>1,s=Rt[i],r=Xs(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function rl(n){(!Rt.length||!Rt.includes(n,Ws&&n.allowRecurse?vn+1:vn))&&(n.id==null?Rt.push(n):Rt.splice(Nf(n.id),0,n),Eh())}function Eh(){!Ws&&!ba&&(ba=!0,sl=yh.then(Th))}function Ff(n){const e=Rt.indexOf(n);e>vn&&Rt.splice(e,1)}function Of(n){Be(n)?ls.push(...n):(!Qn||!Qn.includes(n,n.allowRecurse?Ci+1:Ci))&&ls.push(n),Eh()}function Ul(n,e,t=Ws?vn+1:0){for(;t<Rt.length;t++){const i=Rt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Rt.splice(t,1),t--,i()}}}function bh(n){if(ls.length){const e=[...new Set(ls)].sort((t,i)=>Xs(t)-Xs(i));if(ls.length=0,Qn){Qn.push(...e);return}for(Qn=e,Ci=0;Ci<Qn.length;Ci++){const t=Qn[Ci];t.active!==!1&&t()}Qn=null,Ci=0}}const Xs=n=>n.id==null?1/0:n.id,Bf=(n,e)=>{const t=Xs(n)-Xs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Th(n){ba=!1,Ws=!0,Rt.sort(Bf);try{for(vn=0;vn<Rt.length;vn++){const e=Rt[vn];e&&e.active!==!1&&ri(e,null,14)}}finally{vn=0,Rt.length=0,bh(),Ws=!1,sl=null,(Rt.length||ls.length)&&Th()}}function zf(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||it;d&&(s=t.map(p=>Et(p)?p.trim():p)),h&&(s=t.map($d))}let a,l=i[a=To(e)]||i[a=To(fs(e))];!l&&r&&(l=i[a=To(xs(e))]),l&&sn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,sn(c,n,6,s)}}function Ah(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=Ah(c,e,!0);u&&(a=!0,gt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ct(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):gt(o,r),ct(n)&&i.set(n,o),o)}function ho(n,e){return!n||!oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,xs(e))||Ke(n,e))}let dn=null,wh=null;function Yr(n){const e=dn;return dn=n,wh=n&&n.type.__scopeId||null,e}function Zn(n,e=dn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&jl(-1);const r=Yr(e);let o;try{o=n(...s)}finally{Yr(r),i._d&&jl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Co(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:_,inheritAttrs:x}=n,m=Yr(n);let f,y;try{if(t.shapeFlag&4){const A=s||i,F=A;f=gn(c.call(F,A,u,h,p,d,_)),y=a}else{const A=e;f=gn(A.length>1?A(h,{attrs:a,slots:o,emit:l}):A(h,null)),y=e.props?a:Hf(a)}}catch(A){ks.length=0,uo(A,n,1),f=ut(Yt)}let S=f;if(y&&x!==!1){const A=Object.keys(y),{shapeFlag:F}=S;A.length&&F&7&&(r&&A.some(Wa)&&(y=kf(y,r)),S=ai(S,y,!1,!0))}return t.dirs&&(S=ai(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),f=S,Yr(m),f}const Hf=n=>{let e;for(const t in n)(t==="class"||t==="style"||oo(t))&&((e||(e={}))[t]=n[t]);return e},kf=(n,e)=>{const t={};for(const i in n)(!Wa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Vf(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Nl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!ho(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Nl(i,o,c):!0:!!o;return!1}function Nl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ho(t,r))return!0}return!1}function Gf({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Wf=Symbol.for("v-ndc"),Xf=n=>n.__isSuspense;function jf(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):Of(n)}function fo(n,e,t=Pt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ui();const a=Zs(t),l=sn(e,t,n,o);return a(),hi(),l});return i?s.unshift(r):s.push(r),r}}const zn=n=>(e,t=Pt)=>{(!go||n==="sp")&&fo(n,(...i)=>e(...i),t)},Yf=zn("bm"),Ch=zn("m"),qf=zn("bu"),Kf=zn("u"),Rh=zn("bum"),Ph=zn("um"),$f=zn("sp"),Zf=zn("rtg"),Qf=zn("rtc");function Jf(n,e=Pt){fo("ec",n,e)}function gi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ui(),sn(l,t,8,[n.el,a,n,e]),hi())}}const kr=n=>!!n.type.__asyncLoader,Ta=n=>n?Qh(n)?cl(n):Ta(n.parent):null,zs=gt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ta(n.parent),$root:n=>Ta(n.root),$emit:n=>n.emit,$options:n=>ol(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,rl(n.update)}),$nextTick:n=>n.n||(n.n=Uf.bind(n.proxy)),$watch:n=>Mp.bind(n)}),Ro=(n,e)=>n!==it&&!n.__isScriptSetup&&Ke(n,e),ep={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ro(i,e))return o[e]=1,i[e];if(s!==it&&Ke(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&Ke(c,e))return o[e]=3,r[e];if(t!==it&&Ke(t,e))return o[e]=4,t[e];Aa&&(o[e]=0)}}const u=zs[e];let h,d;if(u)return e==="$attrs"&&kt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==it&&Ke(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Ke(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ro(s,e)?(s[e]=t,!0):i!==it&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==it&&Ke(n,o)||Ro(e,o)||(a=r[0])&&Ke(a,o)||Ke(i,o)||Ke(zs,o)||Ke(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Fl(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Aa=!0;function tp(n){const e=ol(n),t=n.proxy,i=n.ctx;Aa=!1,e.beforeCreate&&Ol(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:f,beforeUnmount:y,destroyed:S,unmounted:A,render:F,renderTracked:w,renderTriggered:R,errorCaptured:U,serverPrefetch:E,expose:M,inheritAttrs:L,components:N,directives:V,filters:ie}=e;if(c&&np(c,i,null),o)for(const ne in o){const Y=o[ne];Xe(Y)&&(i[ne]=Y.bind(t))}if(s){const ne=s.call(t,t);ct(ne)&&(n.data=el(ne))}if(Aa=!0,r)for(const ne in r){const Y=r[ne],ge=Xe(Y)?Y.bind(t,t):Xe(Y.get)?Y.get.bind(t,t):nn,Se=!Xe(Y)&&Xe(Y.set)?Y.set.bind(t):nn,ye=Vp({get:ge,set:Se});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>ye.value,set:De=>ye.value=De})}if(a)for(const ne in a)Lh(a[ne],i,t,ne);if(l){const ne=Xe(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(Y=>{lp(Y,ne[Y])})}u&&Ol(u,n,"c");function Q(ne,Y){Be(Y)?Y.forEach(ge=>ne(ge.bind(t))):Y&&ne(Y.bind(t))}if(Q(Yf,h),Q(Ch,d),Q(qf,p),Q(Kf,_),Q(Sp,x),Q(yp,m),Q(Jf,U),Q(Qf,w),Q(Zf,R),Q(Rh,y),Q(Ph,A),Q($f,E),Be(M))if(M.length){const ne=n.exposed||(n.exposed={});M.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>t[Y],set:ge=>t[Y]=ge})})}else n.exposed||(n.exposed={});F&&n.render===nn&&(n.render=F),L!=null&&(n.inheritAttrs=L),N&&(n.components=N),V&&(n.directives=V)}function np(n,e,t=nn){Be(n)&&(n=wa(n));for(const i in n){const s=n[i];let r;ct(s)?"default"in s?r=Vr(s.from||i,s.default,!0):r=Vr(s.from||i):r=Vr(s),qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ol(n,e,t){sn(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Lh(n,e,t,i){const s=i.includes(".")?Wh(t,i):()=>t[i];if(Et(n)){const r=e[n];Xe(r)&&Lo(s,r)}else if(Xe(n))Lo(s,n.bind(t));else if(ct(n))if(Be(n))n.forEach(r=>Lh(r,e,t,i));else{const r=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(r)&&Lo(s,r,n)}}function ol(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>qr(l,c,o,!0)),qr(l,e,o)),ct(e)&&r.set(e,l),l}function qr(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&qr(n,r,t,!0),s&&s.forEach(o=>qr(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ip[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ip={data:Bl,props:zl,emits:zl,methods:Ds,computed:Ds,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Ds,directives:Ds,watch:rp,provide:Bl,inject:sp};function Bl(n,e){return e?n?function(){return gt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function sp(n,e){return Ds(wa(n),wa(e))}function wa(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function Ds(n,e){return n?gt(Object.create(null),n,e):e}function zl(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:gt(Object.create(null),Fl(n),Fl(e??{})):e}function rp(n,e){if(!n)return e;if(!e)return n;const t=gt(Object.create(null),n);for(const i in e)t[i]=It(n[i],e[i]);return t}function Dh(){return{app:null,config:{isNativeTag:Vd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let op=0;function ap(n,e){return function(i,s=null){Xe(i)||(i=gt({},i)),s!=null&&!ct(s)&&(s=null);const r=Dh(),o=new WeakSet;let a=!1;const l=r.app={_uid:op++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Wp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Xe(c.install)?(o.add(c),c.install(l,...u)):Xe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=ut(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):n(d,c,h),a=!0,l._container=c,c.__vue_app__=l,cl(d.component)}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Hs;Hs=l;try{return c()}finally{Hs=u}}};return l}}let Hs=null;function lp(n,e){if(Pt){let t=Pt.provides;const i=Pt.parent&&Pt.parent.provides;i===t&&(t=Pt.provides=Object.create(i)),t[n]=e}}function Vr(n,e,t=!1){const i=Pt||dn;if(i||Hs){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Hs._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const Ih={},Uh=()=>Object.create(Ih),Nh=n=>Object.getPrototypeOf(n)===Ih;function cp(n,e,t,i=!1){const s={},r=Uh();n.propsDefaults=Object.create(null),Fh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:wf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function up(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=et(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ho(n.emitsOptions,d))continue;const p=e[d];if(l)if(Ke(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=fs(d);s[_]=Ca(l,a,_,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Fh(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Ke(e,h)&&((u=xs(h))===h||!Ke(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ca(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Ke(e,h))&&(delete r[h],c=!0)}c&&Nn(n.attrs,"set","")}function Fh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Os(l))continue;const c=e[l];let u;s&&Ke(s,u=fs(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ho(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=et(t),c=a||it;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ca(s,l,h,c[h],n,!Ke(c,h))}}return o}function Ca(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Zs(s);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===xs(t))&&(i=!0))}return i}function Oh(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=h=>{l=!0;const[d,p]=Oh(h,e,!0);gt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ct(n)&&i.set(n,as),as;if(Be(r))for(let u=0;u<r.length;u++){const h=fs(r[u]);Hl(h)&&(o[h]=it)}else if(r)for(const u in r){const h=fs(u);if(Hl(h)){const d=r[u],p=o[h]=Be(d)||Xe(d)?{type:d}:gt({},d);if(p){const _=Gl(Boolean,p.type),x=Gl(String,p.type);p[0]=_>-1,p[1]=x<0||_<x,(_>-1||Ke(p,"default"))&&a.push(h)}}}const c=[o,a];return ct(n)&&i.set(n,c),c}function Hl(n){return n[0]!=="$"&&!Os(n)}function kl(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Vl(n,e){return kl(n)===kl(e)}function Gl(n,e){return Be(e)?e.findIndex(t=>Vl(t,n)):Xe(e)&&Vl(e,n)?0:-1}const Bh=n=>n[0]==="_"||n==="$stable",al=n=>Be(n)?n.map(gn):[gn(n)],hp=(n,e,t)=>{if(e._n)return e;const i=Zn((...s)=>al(e(...s)),t);return i._c=!1,i},zh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Bh(s))continue;const r=n[s];if(Xe(r))e[s]=hp(s,r,i);else if(r!=null){const o=al(r);e[s]=()=>o}}},Hh=(n,e)=>{const t=al(e);n.slots.default=()=>t},dp=(n,e)=>{const t=n.slots=Uh();if(n.vnode.shapeFlag&32){const i=e._;i?(gt(t,e),sh(t,"_",i,!0)):zh(e,t)}else e&&Hh(n,e)},fp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=it;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(gt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,zh(e,s)),o=e}else e&&(Hh(n,e),o={default:1});if(r)for(const a in s)!Bh(a)&&o[a]==null&&delete s[a]};function Ra(n,e,t,i,s=!1){if(Be(n)){n.forEach((d,p)=>Ra(d,e&&(Be(e)?e[p]:e),t,i,s));return}if(kr(i)&&!s)return;const r=i.shapeFlag&4?cl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===it?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Et(c)?(u[c]=null,Ke(h,c)&&(h[c]=null)):qt(c)&&(c.value=null)),Xe(l))ri(l,a,12,[o,u]);else{const d=Et(l),p=qt(l);if(d||p){const _=()=>{if(n.f){const x=d?Ke(h,l)?h[l]:u[l]:l.value;s?Be(x)&&Xa(x,r):Be(x)?x.includes(r)||x.push(r):d?(u[l]=[r],Ke(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,Ke(h,l)&&(h[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,Bt(_,t)):_()}}}const Bt=jf;function pp(n){return mp(n)}function mp(n,e){const t=rh();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=nn,insertStaticContent:_}=n,x=(C,D,z,Z=null,$=null,te=null,he=void 0,b=null,g=!!D.dynamicChildren)=>{if(C===D)return;C&&!Pi(C,D)&&(Z=pe(C),De(C,$,te,!0),C=null),D.patchFlag===-2&&(g=!1,D.dynamicChildren=null);const{type:P,ref:H,shapeFlag:j}=D;switch(P){case mo:m(C,D,z,Z);break;case Yt:f(C,D,z,Z);break;case Io:C==null&&y(D,z,Z,he);break;case hn:N(C,D,z,Z,$,te,he,b,g);break;default:j&1?F(C,D,z,Z,$,te,he,b,g):j&6?V(C,D,z,Z,$,te,he,b,g):(j&64||j&128)&&P.process(C,D,z,Z,$,te,he,b,g,ke)}H!=null&&$&&Ra(H,C&&C.ref,te,D||C,!D)},m=(C,D,z,Z)=>{if(C==null)i(D.el=a(D.children),z,Z);else{const $=D.el=C.el;D.children!==C.children&&c($,D.children)}},f=(C,D,z,Z)=>{C==null?i(D.el=l(D.children||""),z,Z):D.el=C.el},y=(C,D,z,Z)=>{[C.el,C.anchor]=_(C.children,D,z,Z,C.el,C.anchor)},S=({el:C,anchor:D},z,Z)=>{let $;for(;C&&C!==D;)$=d(C),i(C,z,Z),C=$;i(D,z,Z)},A=({el:C,anchor:D})=>{let z;for(;C&&C!==D;)z=d(C),s(C),C=z;s(D)},F=(C,D,z,Z,$,te,he,b,g)=>{D.type==="svg"?he="svg":D.type==="math"&&(he="mathml"),C==null?w(D,z,Z,$,te,he,b,g):E(C,D,$,te,he,b,g)},w=(C,D,z,Z,$,te,he,b)=>{let g,P;const{props:H,shapeFlag:j,transition:X,dirs:ce}=C;if(g=C.el=o(C.type,te,H&&H.is,H),j&8?u(g,C.children):j&16&&U(C.children,g,null,Z,$,Po(C,te),he,b),ce&&gi(C,null,Z,"created"),R(g,C,C.scopeId,he,Z),H){for(const le in H)le!=="value"&&!Os(le)&&r(g,le,null,H[le],te,C.children,Z,$,ve);"value"in H&&r(g,"value",null,H.value,te),(P=H.onVnodeBeforeMount)&&mn(P,Z,C)}ce&&gi(C,null,Z,"beforeMount");const oe=gp($,X);oe&&X.beforeEnter(g),i(g,D,z),((P=H&&H.onVnodeMounted)||oe||ce)&&Bt(()=>{P&&mn(P,Z,C),oe&&X.enter(g),ce&&gi(C,null,Z,"mounted")},$)},R=(C,D,z,Z,$)=>{if(z&&p(C,z),Z)for(let te=0;te<Z.length;te++)p(C,Z[te]);if($){let te=$.subTree;if(D===te){const he=$.vnode;R(C,he,he.scopeId,he.slotScopeIds,$.parent)}}},U=(C,D,z,Z,$,te,he,b,g=0)=>{for(let P=g;P<C.length;P++){const H=C[P]=b?ei(C[P]):gn(C[P]);x(null,H,D,z,Z,$,te,he,b)}},E=(C,D,z,Z,$,te,he)=>{const b=D.el=C.el;let{patchFlag:g,dynamicChildren:P,dirs:H}=D;g|=C.patchFlag&16;const j=C.props||it,X=D.props||it;let ce;if(z&&_i(z,!1),(ce=X.onVnodeBeforeUpdate)&&mn(ce,z,D,C),H&&gi(D,C,z,"beforeUpdate"),z&&_i(z,!0),P?M(C.dynamicChildren,P,b,z,Z,Po(D,$),te):he||Y(C,D,b,null,z,Z,Po(D,$),te,!1),g>0){if(g&16)L(b,D,j,X,z,Z,$);else if(g&2&&j.class!==X.class&&r(b,"class",null,X.class,$),g&4&&r(b,"style",j.style,X.style,$),g&8){const oe=D.dynamicProps;for(let le=0;le<oe.length;le++){const xe=oe[le],ae=j[xe],Me=X[xe];(Me!==ae||xe==="value")&&r(b,xe,ae,Me,$,C.children,z,Z,ve)}}g&1&&C.children!==D.children&&u(b,D.children)}else!he&&P==null&&L(b,D,j,X,z,Z,$);((ce=X.onVnodeUpdated)||H)&&Bt(()=>{ce&&mn(ce,z,D,C),H&&gi(D,C,z,"updated")},Z)},M=(C,D,z,Z,$,te,he)=>{for(let b=0;b<D.length;b++){const g=C[b],P=D[b],H=g.el&&(g.type===hn||!Pi(g,P)||g.shapeFlag&70)?h(g.el):z;x(g,P,H,null,Z,$,te,he,!0)}},L=(C,D,z,Z,$,te,he)=>{if(z!==Z){if(z!==it)for(const b in z)!Os(b)&&!(b in Z)&&r(C,b,z[b],null,he,D.children,$,te,ve);for(const b in Z){if(Os(b))continue;const g=Z[b],P=z[b];g!==P&&b!=="value"&&r(C,b,P,g,he,D.children,$,te,ve)}"value"in Z&&r(C,"value",z.value,Z.value,he)}},N=(C,D,z,Z,$,te,he,b,g)=>{const P=D.el=C?C.el:a(""),H=D.anchor=C?C.anchor:a("");let{patchFlag:j,dynamicChildren:X,slotScopeIds:ce}=D;ce&&(b=b?b.concat(ce):ce),C==null?(i(P,z,Z),i(H,z,Z),U(D.children||[],z,H,$,te,he,b,g)):j>0&&j&64&&X&&C.dynamicChildren?(M(C.dynamicChildren,X,z,$,te,he,b),(D.key!=null||$&&D===$.subTree)&&kh(C,D,!0)):Y(C,D,z,H,$,te,he,b,g)},V=(C,D,z,Z,$,te,he,b,g)=>{D.slotScopeIds=b,C==null?D.shapeFlag&512?$.ctx.activate(D,z,Z,he,g):ie(D,z,Z,$,te,he,g):re(C,D,g)},ie=(C,D,z,Z,$,te,he)=>{const b=C.component=Np(C,Z,$);if(po(C)&&(b.ctx.renderer=ke),Op(b),b.asyncDep){if($&&$.registerDep(b,Q,he),!C.el){const g=b.subTree=ut(Yt);f(null,g,D,z)}}else Q(b,C,D,z,$,te,he)},re=(C,D,z)=>{const Z=D.component=C.component;if(Vf(C,D,z))if(Z.asyncDep&&!Z.asyncResolved){ne(Z,D,z);return}else Z.next=D,Ff(Z.update),Z.effect.dirty=!0,Z.update();else D.el=C.el,Z.vnode=D},Q=(C,D,z,Z,$,te,he)=>{const b=()=>{if(C.isMounted){let{next:H,bu:j,u:X,parent:ce,vnode:oe}=C;{const Fe=Vh(C);if(Fe){H&&(H.el=oe.el,ne(C,H,he)),Fe.asyncDep.then(()=>{C.isUnmounted||b()});return}}let le=H,xe;_i(C,!1),H?(H.el=oe.el,ne(C,H,he)):H=oe,j&&Ao(j),(xe=H.props&&H.props.onVnodeBeforeUpdate)&&mn(xe,ce,H,oe),_i(C,!0);const ae=Co(C),Me=C.subTree;C.subTree=ae,x(Me,ae,h(Me.el),pe(Me),C,$,te),H.el=ae.el,le===null&&Gf(C,ae.el),X&&Bt(X,$),(xe=H.props&&H.props.onVnodeUpdated)&&Bt(()=>mn(xe,ce,H,oe),$)}else{let H;const{el:j,props:X}=D,{bm:ce,m:oe,parent:le}=C,xe=kr(D);if(_i(C,!1),ce&&Ao(ce),!xe&&(H=X&&X.onVnodeBeforeMount)&&mn(H,le,D),_i(C,!0),j&&We){const ae=()=>{C.subTree=Co(C),We(j,C.subTree,C,$,null)};xe?D.type.__asyncLoader().then(()=>!C.isUnmounted&&ae()):ae()}else{const ae=C.subTree=Co(C);x(null,ae,z,Z,C,$,te),D.el=ae.el}if(oe&&Bt(oe,$),!xe&&(H=X&&X.onVnodeMounted)){const ae=D;Bt(()=>mn(H,le,ae),$)}(D.shapeFlag&256||le&&kr(le.vnode)&&le.vnode.shapeFlag&256)&&C.a&&Bt(C.a,$),C.isMounted=!0,D=z=Z=null}},g=C.effect=new Ka(b,nn,()=>rl(P),C.scope),P=C.update=()=>{g.dirty&&g.run()};P.id=C.uid,_i(C,!0),P()},ne=(C,D,z)=>{D.component=C;const Z=C.vnode.props;C.vnode=D,C.next=null,up(C,D.props,Z,z),fp(C,D.children,z),ui(),Ul(C),hi()},Y=(C,D,z,Z,$,te,he,b,g=!1)=>{const P=C&&C.children,H=C?C.shapeFlag:0,j=D.children,{patchFlag:X,shapeFlag:ce}=D;if(X>0){if(X&128){Se(P,j,z,Z,$,te,he,b,g);return}else if(X&256){ge(P,j,z,Z,$,te,he,b,g);return}}ce&8?(H&16&&ve(P,$,te),j!==P&&u(z,j)):H&16?ce&16?Se(P,j,z,Z,$,te,he,b,g):ve(P,$,te,!0):(H&8&&u(z,""),ce&16&&U(j,z,Z,$,te,he,b,g))},ge=(C,D,z,Z,$,te,he,b,g)=>{C=C||as,D=D||as;const P=C.length,H=D.length,j=Math.min(P,H);let X;for(X=0;X<j;X++){const ce=D[X]=g?ei(D[X]):gn(D[X]);x(C[X],ce,z,null,$,te,he,b,g)}P>H?ve(C,$,te,!0,!1,j):U(D,z,Z,$,te,he,b,g,j)},Se=(C,D,z,Z,$,te,he,b,g)=>{let P=0;const H=D.length;let j=C.length-1,X=H-1;for(;P<=j&&P<=X;){const ce=C[P],oe=D[P]=g?ei(D[P]):gn(D[P]);if(Pi(ce,oe))x(ce,oe,z,null,$,te,he,b,g);else break;P++}for(;P<=j&&P<=X;){const ce=C[j],oe=D[X]=g?ei(D[X]):gn(D[X]);if(Pi(ce,oe))x(ce,oe,z,null,$,te,he,b,g);else break;j--,X--}if(P>j){if(P<=X){const ce=X+1,oe=ce<H?D[ce].el:Z;for(;P<=X;)x(null,D[P]=g?ei(D[P]):gn(D[P]),z,oe,$,te,he,b,g),P++}}else if(P>X)for(;P<=j;)De(C[P],$,te,!0),P++;else{const ce=P,oe=P,le=new Map;for(P=oe;P<=X;P++){const Ae=D[P]=g?ei(D[P]):gn(D[P]);Ae.key!=null&&le.set(Ae.key,P)}let xe,ae=0;const Me=X-oe+1;let Fe=!1,Re=0;const me=new Array(Me);for(P=0;P<Me;P++)me[P]=0;for(P=ce;P<=j;P++){const Ae=C[P];if(ae>=Me){De(Ae,$,te,!0);continue}let qe;if(Ae.key!=null)qe=le.get(Ae.key);else for(xe=oe;xe<=X;xe++)if(me[xe-oe]===0&&Pi(Ae,D[xe])){qe=xe;break}qe===void 0?De(Ae,$,te,!0):(me[qe-oe]=P+1,qe>=Re?Re=qe:Fe=!0,x(Ae,D[qe],z,null,$,te,he,b,g),ae++)}const Oe=Fe?_p(me):as;for(xe=Oe.length-1,P=Me-1;P>=0;P--){const Ae=oe+P,qe=D[Ae],v=Ae+1<H?D[Ae+1].el:Z;me[P]===0?x(null,qe,z,v,$,te,he,b,g):Fe&&(xe<0||P!==Oe[xe]?ye(qe,z,v,2):xe--)}}},ye=(C,D,z,Z,$=null)=>{const{el:te,type:he,transition:b,children:g,shapeFlag:P}=C;if(P&6){ye(C.component.subTree,D,z,Z);return}if(P&128){C.suspense.move(D,z,Z);return}if(P&64){he.move(C,D,z,ke);return}if(he===hn){i(te,D,z);for(let j=0;j<g.length;j++)ye(g[j],D,z,Z);i(C.anchor,D,z);return}if(he===Io){S(C,D,z);return}if(Z!==2&&P&1&&b)if(Z===0)b.beforeEnter(te),i(te,D,z),Bt(()=>b.enter(te),$);else{const{leave:j,delayLeave:X,afterLeave:ce}=b,oe=()=>i(te,D,z),le=()=>{j(te,()=>{oe(),ce&&ce()})};X?X(te,oe,le):le()}else i(te,D,z)},De=(C,D,z,Z=!1,$=!1)=>{const{type:te,props:he,ref:b,children:g,dynamicChildren:P,shapeFlag:H,patchFlag:j,dirs:X,memoIndex:ce}=C;if(b!=null&&Ra(b,null,z,C,!0),ce!=null&&(D.renderCache[ce]=void 0),H&256){D.ctx.deactivate(C);return}const oe=H&1&&X,le=!kr(C);let xe;if(le&&(xe=he&&he.onVnodeBeforeUnmount)&&mn(xe,D,C),H&6)de(C.component,z,Z);else{if(H&128){C.suspense.unmount(z,Z);return}oe&&gi(C,null,D,"beforeUnmount"),H&64?C.type.remove(C,D,z,$,ke,Z):P&&(te!==hn||j>0&&j&64)?ve(P,D,z,!1,!0):(te===hn&&j&384||!$&&H&16)&&ve(g,D,z),Z&&Ye(C)}(le&&(xe=he&&he.onVnodeUnmounted)||oe)&&Bt(()=>{xe&&mn(xe,D,C),oe&&gi(C,null,D,"unmounted")},z)},Ye=C=>{const{type:D,el:z,anchor:Z,transition:$}=C;if(D===hn){se(z,Z);return}if(D===Io){A(C);return}const te=()=>{s(z),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(C.shapeFlag&1&&$&&!$.persisted){const{leave:he,delayLeave:b}=$,g=()=>he(z,te);b?b(C.el,te,g):g()}else te()},se=(C,D)=>{let z;for(;C!==D;)z=d(C),s(C),C=z;s(D)},de=(C,D,z)=>{const{bum:Z,scope:$,update:te,subTree:he,um:b,m:g,a:P}=C;Wl(g),Wl(P),Z&&Ao(Z),$.stop(),te&&(te.active=!1,De(he,C,D,z)),b&&Bt(b,D),Bt(()=>{C.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},ve=(C,D,z,Z=!1,$=!1,te=0)=>{for(let he=te;he<C.length;he++)De(C[he],D,z,Z,$)},pe=C=>C.shapeFlag&6?pe(C.component.subTree):C.shapeFlag&128?C.suspense.next():d(C.anchor||C.el);let He=!1;const Ne=(C,D,z)=>{C==null?D._vnode&&De(D._vnode,null,null,!0):x(D._vnode||null,C,D,null,null,null,z),He||(He=!0,Ul(),bh(),He=!1),D._vnode=C},ke={p:x,um:De,m:ye,r:Ye,mt:ie,mc:U,pc:Y,pbc:M,n:pe,o:n};let I,We;return{render:Ne,hydrate:I,createApp:ap(Ne,I)}}function Po({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _i({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function gp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function kh(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ei(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&kh(o,a)),a.type===mo&&(a.el=o.el)}}function _p(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Vh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vh(e)}function Wl(n){if(n)for(let e=0;e<n.length;e++)n[e].active=!1}const vp=Symbol.for("v-scx"),xp=()=>Vr(vp),hr={};function Lo(n,e,t){return Gh(n,e,t)}function Gh(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=it){if(e&&r){const w=e;e=(...R)=>{w(...R),F()}}const l=Pt,c=w=>i===!0?w:Ri(w,i===!1?1:void 0);let u,h=!1,d=!1;if(qt(n)?(u=()=>n.value,h=Ea(n)):Bs(n)?(u=()=>c(n),h=!0):Be(n)?(d=!0,h=n.some(w=>Bs(w)||Ea(w)),u=()=>n.map(w=>{if(qt(w))return w.value;if(Bs(w))return c(w);if(Xe(w))return ri(w,l,2)})):Xe(n)?e?u=()=>ri(n,l,2):u=()=>(p&&p(),sn(n,l,3,[_])):u=nn,e&&i){const w=u;u=()=>Ri(w())}let p,_=w=>{p=S.onStop=()=>{ri(w,l,4),p=S.onStop=void 0}},x;if(go)if(_=nn,e?t&&sn(e,l,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const w=xp();x=w.__watcherHandles||(w.__watcherHandles=[])}else return nn;let m=d?new Array(n.length).fill(hr):hr;const f=()=>{if(!(!S.active||!S.dirty))if(e){const w=S.run();(i||h||(d?w.some((R,U)=>Fi(R,m[U])):Fi(w,m)))&&(p&&p(),sn(e,l,3,[w,m===hr?void 0:d&&m[0]===hr?[]:m,_]),m=w)}else S.run()};f.allowRecurse=!!e;let y;s==="sync"?y=f:s==="post"?y=()=>Bt(f,l&&l.suspense):(f.pre=!0,l&&(f.id=l.uid),y=()=>rl(f));const S=new Ka(u,nn,y),A=af(),F=()=>{S.stop(),A&&Xa(A.effects,S)};return e?t?f():m=S.run():s==="post"?Bt(S.run.bind(S),l&&l.suspense):S.run(),x&&x.push(F),F}function Mp(n,e,t){const i=this.proxy,s=Et(n)?n.includes(".")?Wh(i,n):()=>i[n]:n.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,t=e);const o=Zs(this),a=Gh(s,r.bind(i),t);return o(),a}function Wh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Ri(n,e=1/0,t){if(e<=0||!ct(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,qt(n))Ri(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)Ri(n[i],e,t);else if(Wd(n)||Fs(n))n.forEach(i=>{Ri(i,e,t)});else if(Yd(n)){for(const i in n)Ri(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ri(n[i],e,t)}return n}const po=n=>n.type.__isKeepAlive;function Sp(n,e){Xh(n,"a",e)}function yp(n,e){Xh(n,"da",e)}function Xh(n,e,t=Pt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(fo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)po(s.parent.vnode)&&Ep(i,e,t,s),s=s.parent}}function Ep(n,e,t,i){const s=fo(e,n,i,!0);Ph(()=>{Xa(i[e],s)},t)}const Jn=Symbol("_leaveCb"),dr=Symbol("_enterCb");function bp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ch(()=>{n.isMounted=!0}),Rh(()=>{n.isUnmounting=!0}),n}const $t=[Function,Array],jh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},Yh=n=>{const e=n.subTree;return e.component?Yh(e.component):e},Tp={name:"BaseTransition",props:jh,setup(n,{slots:e}){const t=Fp(),i=bp();return()=>{const s=e.default&&Kh(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const d of s)if(d.type!==Yt){r=d;break}}const o=et(n),{mode:a}=o;if(i.isLeaving)return Do(r);const l=Xl(r);if(!l)return Do(r);let c=Pa(l,o,i,t,d=>c=d);Kr(l,c);const u=t.subTree,h=u&&Xl(u);if(h&&h.type!==Yt&&!Pi(l,h)&&Yh(t).type!==Yt){const d=Pa(h,o,i,t);if(Kr(h,d),a==="out-in"&&l.type!==Yt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Do(r);a==="in-out"&&l.type!==Yt&&(d.delayLeave=(p,_,x)=>{const m=qh(i,h);m[String(h.key)]=h,p[Jn]=()=>{_(),p[Jn]=void 0,delete c.delayedLeave},c.delayedLeave=x})}return r}}},Ap=Tp;function qh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Pa(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:m,onAppear:f,onAfterAppear:y,onAppearCancelled:S}=e,A=String(n.key),F=qh(t,n),w=(E,M)=>{E&&sn(E,i,9,M)},R=(E,M)=>{const L=M[1];w(E,M),Be(E)?E.every(N=>N.length<=1)&&L():E.length<=1&&L()},U={mode:o,persisted:a,beforeEnter(E){let M=l;if(!t.isMounted)if(r)M=m||l;else return;E[Jn]&&E[Jn](!0);const L=F[A];L&&Pi(n,L)&&L.el[Jn]&&L.el[Jn](),w(M,[E])},enter(E){let M=c,L=u,N=h;if(!t.isMounted)if(r)M=f||c,L=y||u,N=S||h;else return;let V=!1;const ie=E[dr]=re=>{V||(V=!0,re?w(N,[E]):w(L,[E]),U.delayedLeave&&U.delayedLeave(),E[dr]=void 0)};M?R(M,[E,ie]):ie()},leave(E,M){const L=String(n.key);if(E[dr]&&E[dr](!0),t.isUnmounting)return M();w(d,[E]);let N=!1;const V=E[Jn]=ie=>{N||(N=!0,M(),ie?w(x,[E]):w(_,[E]),E[Jn]=void 0,F[L]===n&&delete F[L])};F[L]=n,p?R(p,[E,V]):V()},clone(E){const M=Pa(E,e,t,i,s);return s&&s(M),M}};return U}function Do(n){if(po(n))return n=ai(n),n.children=null,n}function Xl(n){if(!po(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Xe(t.default))return t.default()}}function Kr(n,e){n.shapeFlag&6&&n.component?Kr(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Kh(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===hn?(o.patchFlag&128&&s++,i=i.concat(Kh(o.children,e,a))):(e||o.type!==Yt)&&i.push(a!=null?ai(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}const wp=n=>n.__isTeleport,hn=Symbol.for("v-fgt"),mo=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),ks=[];let fn=null;function wt(n=!1){ks.push(fn=n?null:[])}function Cp(){ks.pop(),fn=ks[ks.length-1]||null}let js=1;function jl(n){js+=n}function $h(n){return n.dynamicChildren=js>0?fn||as:null,Cp(),js>0&&fn&&fn.push(n),n}function Ut(n,e,t,i,s,r){return $h(G(n,e,t,i,s,r,!0))}function Rp(n,e,t,i,s){return $h(ut(n,e,t,i,s,!0))}function La(n){return n?n.__v_isVNode===!0:!1}function Pi(n,e){return n.type===e.type&&n.key===e.key}const Zh=({key:n})=>n??null,Gr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||qt(n)||Xe(n)?{i:dn,r:n,k:e,f:!!t}:n:null);function G(n,e=null,t=null,i=0,s=null,r=n===hn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Zh(e),ref:e&&Gr(e),scopeId:wh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dn};return a?(ll(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),js>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const ut=Pp;function Pp(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Wf)&&(n=Yt),La(n)){const a=ai(n,e,!0);return t&&ll(a,t),js>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag=-2,a}if(kp(n)&&(n=n.__vccOpts),e){e=Lp(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=qa(a)),ct(l)&&(xh(l)&&!Be(l)&&(l=gt({},l)),e.style=Ya(l))}const o=Et(n)?1:Xf(n)?128:wp(n)?64:ct(n)?4:Xe(n)?2:0;return G(n,e,t,i,s,o,r,!0)}function Lp(n){return n?xh(n)||Nh(n)?gt({},n):n:null}function ai(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Dp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Zh(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(Gr(e)):[r,Gr(e)]:Gr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==hn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ai(n.ssContent),ssFallback:n.ssFallback&&ai(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Kr(u,l.clone(u)),u}function st(n=" ",e=0){return ut(mo,null,n,e)}function Zt(n="",e=!1){return e?(wt(),Rp(Yt,null,n)):ut(Yt,null,n)}function gn(n){return n==null||typeof n=="boolean"?ut(Yt):Be(n)?ut(hn,null,n.slice()):typeof n=="object"?ei(n):ut(mo,null,String(n))}function ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ai(n)}function ll(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ll(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Nh(e)?e._ctx=dn:s===3&&dn&&(dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:dn},t=32):(e=String(e),i&64?(t=16,e=[st(e)]):t=8);n.children=e,n.shapeFlag|=t}function Dp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=qa([e.class,i.class]));else if(s==="style")e.style=Ya([e.style,i.style]);else if(oo(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function mn(n,e,t,i=null){sn(n,e,7,[t,i])}const Ip=Dh();let Up=0;function Np(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Ip,r={uid:Up++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new rf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oh(i,s),emitsOptions:Ah(i,s),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=zf.bind(null,r),n.ce&&n.ce(r),r}let Pt=null;const Fp=()=>Pt||dn;let $r,Da;{const n=rh(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};$r=e("__VUE_INSTANCE_SETTERS__",t=>Pt=t),Da=e("__VUE_SSR_SETTERS__",t=>go=t)}const Zs=n=>{const e=Pt;return $r(n),n.scope.on(),()=>{n.scope.off(),$r(e)}},Yl=()=>{Pt&&Pt.scope.off(),$r(null)};function Qh(n){return n.vnode.shapeFlag&4}let go=!1;function Op(n,e=!1){e&&Da(e);const{props:t,children:i}=n.vnode,s=Qh(n);cp(n,t,s,e),dp(n,i);const r=s?Bp(n,e):void 0;return e&&Da(!1),r}function Bp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ep);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Hp(n):null,r=Zs(n);ui();const o=ri(i,n,0,[n.props,s]);if(hi(),r(),nh(o)){if(o.then(Yl,Yl),e)return o.then(a=>{ql(n,a,e)}).catch(a=>{uo(a,n,0)});n.asyncDep=o}else ql(n,o,e)}else Jh(n,e)}function ql(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ct(e)&&(n.setupState=Sh(e)),Jh(n,t)}let Kl;function Jh(n,e,t){const i=n.type;if(!n.render){if(!e&&Kl&&!i.render){const s=i.template||ol(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=gt(gt({isCustomElement:r,delimiters:a},o),l);i.render=Kl(s,c)}}n.render=i.render||nn}{const s=Zs(n);ui();try{tp(n)}finally{hi(),s()}}}const zp={get(n,e){return kt(n,"get",""),n[e]}};function Hp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,zp),slots:n.slots,emit:n.emit,expose:e}}function cl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Sh(Cf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zs)return zs[t](n)},has(e,t){return t in e||t in zs}})):n.proxy}function kp(n){return Xe(n)&&"__vccOpts"in n}const Vp=(n,e)=>Rf(n,e,go);function Gp(n,e,t){const i=arguments.length;return i===2?ct(e)&&!Be(e)?La(e)?ut(n,null,[e]):ut(n,e):ut(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&La(t)&&(t=[t]),ut(n,e,t))}const Wp="3.4.29";/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Xp="http://www.w3.org/2000/svg",jp="http://www.w3.org/1998/Math/MathML",Ln=typeof document<"u"?document:null,$l=Ln&&Ln.createElement("template"),Yp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ln.createElementNS(Xp,n):e==="mathml"?Ln.createElementNS(jp,n):t?Ln.createElement(n,{is:t}):Ln.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ln.createTextNode(n),createComment:n=>Ln.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ln.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{$l.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=$l.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gn="transition",Ts="animation",Ys=Symbol("_vtc"),Dn=(n,{slots:e})=>Gp(Ap,qp(n),e);Dn.displayName="Transition";const ed={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Dn.props=gt({},jh,ed);const vi=(n,e=[])=>{Be(n)?n.forEach(t=>t(...e)):n&&n(...e)},Zl=n=>n?Be(n)?n.some(e=>e.length>1):n.length>1:!1;function qp(n){const e={};for(const N in n)N in ed||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=Kp(s),x=_&&_[0],m=_&&_[1],{onBeforeEnter:f,onEnter:y,onEnterCancelled:S,onLeave:A,onLeaveCancelled:F,onBeforeAppear:w=f,onAppear:R=y,onAppearCancelled:U=S}=e,E=(N,V,ie)=>{xi(N,V?u:a),xi(N,V?c:o),ie&&ie()},M=(N,V)=>{N._isLeaving=!1,xi(N,h),xi(N,p),xi(N,d),V&&V()},L=N=>(V,ie)=>{const re=N?R:y,Q=()=>E(V,N,ie);vi(re,[V,Q]),Ql(()=>{xi(V,N?l:r),Wn(V,N?u:a),Zl(re)||Jl(V,i,x,Q)})};return gt(e,{onBeforeEnter(N){vi(f,[N]),Wn(N,r),Wn(N,o)},onBeforeAppear(N){vi(w,[N]),Wn(N,l),Wn(N,c)},onEnter:L(!1),onAppear:L(!0),onLeave(N,V){N._isLeaving=!0;const ie=()=>M(N,V);Wn(N,h),Wn(N,d),Qp(),Ql(()=>{N._isLeaving&&(xi(N,h),Wn(N,p),Zl(A)||Jl(N,i,m,ie))}),vi(A,[N,ie])},onEnterCancelled(N){E(N,!1),vi(S,[N])},onAppearCancelled(N){E(N,!0),vi(U,[N])},onLeaveCancelled(N){M(N),vi(F,[N])}})}function Kp(n){if(n==null)return null;if(ct(n))return[Uo(n.enter),Uo(n.leave)];{const e=Uo(n);return[e,e]}}function Uo(n){return Zd(n)}function Wn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ys]||(n[Ys]=new Set)).add(e)}function xi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ys];t&&(t.delete(e),t.size||(n[Ys]=void 0))}function Ql(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let $p=0;function Jl(n,e,t,i){const s=n._endId=++$p,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Zp(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=p=>{p.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function Zp(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${Gn}Delay`),r=i(`${Gn}Duration`),o=ec(s,r),a=i(`${Ts}Delay`),l=i(`${Ts}Duration`),c=ec(a,l);let u=null,h=0,d=0;e===Gn?o>0&&(u=Gn,h=o,d=r.length):e===Ts?c>0&&(u=Ts,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Gn:Ts:null,d=u?u===Gn?r.length:l.length:0);const p=u===Gn&&/\b(transform|all)(,|$)/.test(i(`${Gn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:p}}function ec(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>tc(t)+tc(n[i])))}function tc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Qp(){return document.body.offsetHeight}function Jp(n,e,t){const i=n[Ys];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const nc=Symbol("_vod"),em=Symbol("_vsh"),tm=Symbol(""),nm=/(^|;)\s*display\s*:/;function im(n,e,t){const i=n.style,s=Et(t);let r=!1;if(t&&!s){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Wr(i,a,"")}else for(const o in e)t[o]==null&&Wr(i,o,"");for(const o in t)o==="display"&&(r=!0),Wr(i,o,t[o])}else if(s){if(e!==t){const o=i[tm];o&&(t+=";"+o),i.cssText=t,r=nm.test(t)}}else e&&n.removeAttribute("style");nc in n&&(n[nc]=r?i.display:"",n[em]&&(i.display="none"))}const ic=/\s*!important$/;function Wr(n,e,t){if(Be(t))t.forEach(i=>Wr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=sm(n,e);ic.test(t)?n.setProperty(xs(i),t.replace(ic,""),"important"):n[i]=t}}const sc=["Webkit","Moz","ms"],No={};function sm(n,e){const t=No[e];if(t)return t;let i=fs(e);if(i!=="filter"&&i in n)return No[e]=i;i=ih(i);for(let s=0;s<sc.length;s++){const r=sc[s]+i;if(r in n)return No[e]=r}return e}const rc="http://www.w3.org/1999/xlink";function oc(n,e,t,i,s,r=sf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(rc,e.slice(6,e.length)):n.setAttributeNS(rc,e,t):t==null||r&&!oh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":String(t))}function rm(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t==null?"":String(t);(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=oh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function om(n,e,t,i){n.addEventListener(e,t,i)}function am(n,e,t,i){n.removeEventListener(e,t,i)}const ac=Symbol("_vei");function lm(n,e,t,i,s=null){const r=n[ac]||(n[ac]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=cm(e);if(i){const c=r[e]=dm(i,s);om(n,a,c,l)}else o&&(am(n,a,o,l),r[e]=void 0)}}const lc=/(?:Once|Passive|Capture)$/;function cm(n){let e;if(lc.test(n)){e={};let i;for(;i=n.match(lc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):xs(n.slice(2)),e]}let Fo=0;const um=Promise.resolve(),hm=()=>Fo||(um.then(()=>Fo=0),Fo=Date.now());function dm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;sn(fm(i,t.value),e,5,[i])};return t.value=n,t.attached=hm(),t}function fm(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const cc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,pm=(n,e,t,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?Jp(n,i,c):e==="style"?im(n,t,i):oo(e)?Wa(e)||lm(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mm(n,e,i,c))?(rm(n,e,i,r,o,a,l),(e==="value"||e==="checked"||e==="selected")&&oc(n,e,i,c,o,e!=="value")):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),oc(n,e,i,c))};function mm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&cc(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cc(e)&&Et(t)?!1:e in n}const gm=gt({patchProp:pm},Yp);let uc;function _m(){return uc||(uc=pp(gm))}const vm=(...n)=>{const e=_m().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Mm(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,xm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Mm(n){return Et(n)?document.querySelector(n):n}const Sm="/marsisaplace/video/scrollWeb.webm",ym="/marsisaplace/video/clickWeb.webm";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ul="165",Hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Em=0,hc=1,bm=2,td=1,nd=2,Pn=3,li=0,Ht=1,xn=2,Fn=0,cs=1,Ia=2,dc=3,fc=4,Tm=5,Li=100,Am=101,wm=102,Cm=103,Rm=104,Pm=200,Lm=201,Dm=202,Im=203,Ua=204,Na=205,Um=206,Nm=207,Fm=208,Om=209,Bm=210,zm=211,Hm=212,km=213,Vm=214,Gm=0,Wm=1,Xm=2,Zr=3,jm=4,Ym=5,qm=6,Km=7,hl=0,$m=1,Zm=2,oi=0,id=1,sd=2,rd=3,dl=4,Qm=5,od=6,ad=7,ld=300,ps=301,Oi=302,Fa=303,Oa=304,_o=306,Ba=1e3,In=1001,za=1002,zt=1003,Jm=1004,fr=1005,tn=1006,Oo=1007,Ii=1008,ci=1009,eg=1010,tg=1011,Qr=1012,cd=1013,ms=1014,ii=1015,Ms=1016,ud=1017,hd=1018,gs=1020,ng=35902,ig=1021,sg=1022,Sn=1023,rg=1024,og=1025,us=1026,_s=1027,ag=1028,dd=1029,lg=1030,fd=1031,pd=1033,Bo=33776,zo=33777,Ho=33778,ko=33779,pc=35840,mc=35841,gc=35842,_c=35843,vc=36196,xc=37492,Mc=37496,Sc=37808,yc=37809,Ec=37810,bc=37811,Tc=37812,Ac=37813,wc=37814,Cc=37815,Rc=37816,Pc=37817,Lc=37818,Dc=37819,Ic=37820,Uc=37821,Vo=36492,Nc=36494,Fc=36495,cg=36283,Oc=36284,Bc=36285,zc=36286,ug=3200,hg=3201,md=0,dg=1,ni="",un="srgb",di="srgb-linear",fl="display-p3",vo="display-p3-linear",Jr="linear",nt="srgb",eo="rec709",to="p3",Vi=7680,Hc=519,fg=512,pg=513,mg=514,gd=515,gg=516,_g=517,vg=518,xg=519,kc=35044,Vc="300 es",Un=2e3,no=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gc=1234567;const Vs=Math.PI/180,qs=180/Math.PI;function Ss(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function pl(n,e){return(n%e+e)%e}function Mg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Sg(n,e,t){return n!==e?(t-n)/(e-n):0}function Gs(n,e,t){return(1-t)*n+t*e}function yg(n,e,t,i){return Gs(n,e,1-Math.exp(-t*i))}function Eg(n,e=1){return e-Math.abs(pl(n,e*2)-e)}function bg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Tg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ag(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wg(n,e){return n+Math.random()*(e-n)}function Cg(n){return n*(.5-Math.random())}function Rg(n){n!==void 0&&(Gc=n);let e=Gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pg(n){return n*Vs}function Lg(n){return n*qs}function Dg(n){return(n&n-1)===0&&n!==0}function Ig(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ug(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ng(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Fg={DEG2RAD:Vs,RAD2DEG:qs,generateUUID:Ss,clamp:Ct,euclideanModulo:pl,mapLinear:Mg,inverseLerp:Sg,lerp:Gs,damp:yg,pingpong:Eg,smoothstep:bg,smootherstep:Tg,randInt:Ag,randFloat:wg,randFloatSpread:Cg,seededRandom:Rg,degToRad:Pg,radToDeg:Lg,isPowerOfTwo:Dg,ceilPowerOfTwo:Ig,floorPowerOfTwo:Ug,setQuaternionFromProperEuler:Ng,normalize:Nt,denormalize:rs};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],x=s[0],m=s[3],f=s[6],y=s[1],S=s[4],A=s[7],F=s[2],w=s[5],R=s[8];return r[0]=o*x+a*y+l*F,r[3]=o*m+a*S+l*w,r[6]=o*f+a*A+l*R,r[1]=c*x+u*y+h*F,r[4]=c*m+u*S+h*w,r[7]=c*f+u*A+h*R,r[2]=d*x+p*y+_*F,r[5]=d*m+p*S+_*w,r[8]=d*f+p*A+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,_=t*h+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Ge;function _d(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Og(){const n=Ks("canvas");return n.style.display="block",n}const Wc={};function vd(n){n in Wc||(Wc[n]=!0,console.warn(n))}function Bg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Xc=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jc=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pr={[di]:{transfer:Jr,primaries:eo,toReference:n=>n,fromReference:n=>n},[un]:{transfer:nt,primaries:eo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[vo]:{transfer:Jr,primaries:to,toReference:n=>n.applyMatrix3(jc),fromReference:n=>n.applyMatrix3(Xc)},[fl]:{transfer:nt,primaries:to,toReference:n=>n.convertSRGBToLinear().applyMatrix3(jc),fromReference:n=>n.applyMatrix3(Xc).convertLinearToSRGB()}},zg=new Set([di,vo]),Qe={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!zg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=pr[e].toReference,s=pr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return pr[n].primaries},getTransfer:function(n){return n===ni?Jr:pr[n].transfer}};function hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gi;class Hg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=Ks("canvas")),Gi.width=e.width,Gi.height=e.height;const i=Gi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hs(t[i]/255)*255):t[i]=hs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kg=0;class xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xo(s[o].image)):r.push(Xo(s[o]))}else r=Xo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Xo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vg=0;class Lt extends zi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=In,s=In,r=tn,o=Ii,a=Sn,l=ci,c=Lt.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Ss(),this.name="",this.source=new xd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ba:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ba:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=ld;Lt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,A=(p+1)/2,F=(f+1)/2,w=(u+d)/4,R=(h+x)/4,U=(_+m)/4;return S>A&&S>F?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=R/i):A>F?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=w/s,r=U/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=R/r,s=U/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gg extends zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Lt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Gg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Md extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wg extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==d||c!==p||u!==_){let m=1-a;const f=l*d+c*p+u*_+h*x,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const F=Math.sqrt(S),w=Math.atan2(F,f*y);m=Math.sin(m*w)/F,a=Math.sin(a*w)/F}const A=a*y;if(l=l*m+d*A,c=c*m+p*A,u=u*m+_*A,h=h*m+x*A,m===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=F,c*=F,u*=F,h*=F}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-a*p,e[t+2]=c*_+u*p+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new O,Yc=new Bi;class Qs{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mr.copy(i.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),gr.subVectors(this.max,As),Wi.subVectors(e.a,As),Xi.subVectors(e.b,As),ji.subVectors(e.c,As),Xn.subVectors(Xi,Wi),jn.subVectors(ji,Xi),Mi.subVectors(Wi,ji);let t=[0,-Xn.z,Xn.y,0,-jn.z,jn.y,0,-Mi.z,Mi.y,Xn.z,0,-Xn.x,jn.z,0,-jn.x,Mi.z,0,-Mi.x,-Xn.y,Xn.x,0,-jn.y,jn.x,0,-Mi.y,Mi.x,0];return!Yo(t,Wi,Xi,ji,gr)||(t=[1,0,0,0,1,0,0,0,1],!Yo(t,Wi,Xi,ji,gr))?!1:(_r.crossVectors(Xn,jn),t=[_r.x,_r.y,_r.z],Yo(t,Wi,Xi,ji,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new O,new O,new O,new O,new O,new O,new O,new O],on=new O,mr=new Qs,Wi=new O,Xi=new O,ji=new O,Xn=new O,jn=new O,Mi=new O,As=new O,gr=new O,_r=new O,Si=new O;function Yo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Si.fromArray(n,r);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xg=new Qs,ws=new O,qo=new O;class Js{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ws,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(qo)),this.expandByPoint(ws.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new O,Ko=new O,vr=new O,Yn=new O,$o=new O,xr=new O,Zo=new O;class er{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ko.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Ko);const r=e.distanceTo(t)*.5,o=-this.direction.dot(vr),a=Yn.dot(this.direction),l=-Yn.dot(vr),c=Yn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ko).addScaledVector(vr,d),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),s=Tn.dot(Tn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,s,r){$o.subVectors(t,e),xr.subVectors(i,e),Zo.crossVectors($o,xr);let o=this.direction.dot(Zo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(xr.crossVectors(Yn,xr));if(l<0)return null;const c=a*this.direction.dot($o.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(Zo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,s,r,o,a,l,c,u,h,d,p,_,x,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,p,_,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,d,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,x=c*h;t[0]=d+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jg,e,Yg)}lookAt(e,t,i){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),qn.crossVectors(i,Xt),qn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),qn.crossVectors(i,Xt)),qn.normalize(),Mr.crossVectors(Xt,qn),s[0]=qn.x,s[4]=Mr.x,s[8]=Xt.x,s[1]=qn.y,s[5]=Mr.y,s[9]=Xt.y,s[2]=qn.z,s[6]=Mr.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],f=i[14],y=i[3],S=i[7],A=i[11],F=i[15],w=s[0],R=s[4],U=s[8],E=s[12],M=s[1],L=s[5],N=s[9],V=s[13],ie=s[2],re=s[6],Q=s[10],ne=s[14],Y=s[3],ge=s[7],Se=s[11],ye=s[15];return r[0]=o*w+a*M+l*ie+c*Y,r[4]=o*R+a*L+l*re+c*ge,r[8]=o*U+a*N+l*Q+c*Se,r[12]=o*E+a*V+l*ne+c*ye,r[1]=u*w+h*M+d*ie+p*Y,r[5]=u*R+h*L+d*re+p*ge,r[9]=u*U+h*N+d*Q+p*Se,r[13]=u*E+h*V+d*ne+p*ye,r[2]=_*w+x*M+m*ie+f*Y,r[6]=_*R+x*L+m*re+f*ge,r[10]=_*U+x*N+m*Q+f*Se,r[14]=_*E+x*V+m*ne+f*ye,r[3]=y*w+S*M+A*ie+F*Y,r[7]=y*R+S*L+A*re+F*ge,r[11]=y*U+S*N+A*Q+F*Se,r[15]=y*E+S*V+A*ne+F*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+x*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],y=h*m*c-x*d*c+x*l*p-a*m*p-h*l*f+a*d*f,S=_*d*c-u*m*c-_*l*p+o*m*p+u*l*f-o*d*f,A=u*x*c-_*h*c+_*a*p-o*x*p-u*a*f+o*h*f,F=_*h*l-u*x*l-_*a*d+o*x*d+u*a*m-o*h*m,w=t*y+i*S+s*A+r*F;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=y*R,e[1]=(x*d*r-h*m*r-x*s*p+i*m*p+h*s*f-i*d*f)*R,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*f+i*l*f)*R,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*R,e[4]=S*R,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*f+t*d*f)*R,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*f-t*l*f)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*R,e[8]=A*R,e[9]=(_*h*r-u*x*r-_*i*p+t*x*p+u*i*f-t*h*f)*R,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*f+t*a*f)*R,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*R,e[12]=F*R,e[13]=(u*x*s-_*h*s+_*i*d-t*x*d-u*i*m+t*h*m)*R,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,_=r*h,x=o*u,m=o*h,f=a*h,y=l*c,S=l*u,A=l*h,F=i.x,w=i.y,R=i.z;return s[0]=(1-(x+f))*F,s[1]=(p+A)*F,s[2]=(_-S)*F,s[3]=0,s[4]=(p-A)*w,s[5]=(1-(d+f))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(_+S)*R,s[9]=(m-y)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Yi.set(s[0],s[1],s[2]).length();const o=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);const c=1/r,u=1/o,h=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Un){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let p,_;if(a===Un)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===no)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Un){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,p=(i+s)*u;let _,x;if(a===Un)_=(o+r)*h,x=-2*h;else if(a===no)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yi=new O,an=new rt,jg=new O(0,0,0),Yg=new O(1,1,1),qn=new O,Mr=new O,Xt=new O,qc=new rt,Kc=new Bi;class yn{constructor(e=0,t=0,i=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qg=0;const $c=new O,qi=new Bi,An=new rt,Sr=new O,Cs=new O,Kg=new O,$g=new Bi,Zc=new O(1,0,0),Qc=new O(0,1,0),Jc=new O(0,0,1),eu={type:"added"},Zg={type:"removed"},Ki={type:"childadded",child:null},Qo={type:"childremoved",child:null};class yt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new O,t=new yn,i=new Bi,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ge}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(Jc,e)}translateOnAxis(e,t){return $c.copy(e).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(Jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sr.copy(e):Sr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Cs,Sr,this.up):An.lookAt(Sr,Cs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(An),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eu),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zg),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eu),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Kg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,$g,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}yt.DEFAULT_UP=new O(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new O,wn=new O,Jo=new O,Cn=new O,$i=new O,Zi=new O,tu=new O,ea=new O,ta=new O,na=new O;class Mn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ln.subVectors(e,t),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ln.subVectors(s,t),wn.subVectors(i,t),Jo.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(wn),l=ln.dot(Jo),c=wn.dot(wn),u=wn.dot(Jo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static isFrontFacing(e,t,i,s){return ln.subVectors(i,t),wn.subVectors(e,t),ln.cross(wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),ln.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;$i.subVectors(s,i),Zi.subVectors(r,i),ea.subVectors(e,i);const l=$i.dot(ea),c=Zi.dot(ea);if(l<=0&&c<=0)return t.copy(i);ta.subVectors(e,s);const u=$i.dot(ta),h=Zi.dot(ta);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector($i,o);na.subVectors(e,r);const p=$i.dot(na),_=Zi.dot(na);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Zi,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return tu.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(tu,a);const f=1/(m+x+d);return o=x*f,a=d*f,t.copy(i).addScaledVector($i,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=pl(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ia(o,r,e+1/3),this.g=ia(o,r,e),this.b=ia(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=Sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Qe.fromWorkingColorSpace(At.copy(this),e),Math.round(Ct(At.r*255,0,255))*65536+Math.round(Ct(At.g*255,0,255))*256+Math.round(Ct(At.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(At.copy(this),t);const i=At.r,s=At.g,r=At.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=un){Qe.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,s=At.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(yr);const i=Gs(Kn.h,yr.h,t),s=Gs(Kn.s,yr.s,t),r=Gs(Kn.l,yr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new je;je.NAMES=Sd;let Qg=0;class Bn extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=cs,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ua&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tr extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new O,Er=new Le;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return vd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kc&&(e.usage=this.usage),e}}class yd extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ed extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jg=0;const Qt=new rt,sa=new yt,Qi=new O,jt=new Qs,Rs=new Qs,Mt=new O;class Ot extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_d(e)?Ed:yd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(jt.min,Rs.min),jt.expandByPoint(Mt),Mt.addVectors(jt.max,Rs.max),jt.expandByPoint(Mt)):(jt.expandByPoint(Rs.min),jt.expandByPoint(Rs.max))}jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),Mt.add(Qi)),s=Math.max(s,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new O,l[U]=new O;const c=new O,u=new O,h=new O,d=new Le,p=new Le,_=new Le,x=new O,m=new O;function f(U,E,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),a[U].add(x),a[E].add(x),a[M].add(x),l[U].add(m),l[E].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let U=0,E=y.length;U<E;++U){const M=y[U],L=M.start,N=M.count;for(let V=L,ie=L+N;V<ie;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const S=new O,A=new O,F=new O,w=new O;function R(U){F.fromBufferAttribute(s,U),w.copy(F);const E=a[U];S.copy(E),S.sub(F.multiplyScalar(F.dot(E))).normalize(),A.crossVectors(w,E);const L=A.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,L)}for(let U=0,E=y.length;U<E;++U){const M=y[U],L=M.start,N=M.count;for(let V=L,ie=L+N;V<ie;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new pn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nu=new rt,yi=new er,br=new Js,iu=new O,Ji=new O,es=new O,ts=new O,ra=new O,Tr=new O,Ar=new Le,wr=new Le,Cr=new Le,su=new O,ru=new O,ou=new O,Rr=new O,Pr=new O;class bt extends yt{constructor(e=new Ot,t=new tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ra.fromBufferAttribute(h,e),o?Tr.addScaledVector(ra,u):Tr.addScaledVector(ra.sub(t),u))}t.add(Tr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(br.containsPoint(yi.origin)===!1&&(yi.intersectSphere(br,iu)===null||yi.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(nu.copy(r).invert(),yi.copy(e.ray).applyMatrix4(nu),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let A=y,F=S;A<F;A+=3){const w=a.getX(A),R=a.getX(A+1),U=a.getX(A+2);s=Lr(this,f,e,i,c,u,h,w,R,U),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const y=a.getX(m),S=a.getX(m+1),A=a.getX(m+2);s=Lr(this,o,e,i,c,u,h,y,S,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=y,F=S;A<F;A+=3){const w=A,R=A+1,U=A+2;s=Lr(this,f,e,i,c,u,h,w,R,U),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const y=m,S=m+1,A=m+2;s=Lr(this,o,e,i,c,u,h,y,S,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function e_(n,e,t,i,s,r,o,a){let l;if(e.side===Ht?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===li,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Pr);return c<t.near||c>t.far?null:{distance:c,point:Pr.clone(),object:n}}function Lr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ji),n.getVertexPosition(l,es),n.getVertexPosition(c,ts);const u=e_(n,e,t,i,Ji,es,ts,Rr);if(u){s&&(Ar.fromBufferAttribute(s,a),wr.fromBufferAttribute(s,l),Cr.fromBufferAttribute(s,c),u.uv=Mn.getInterpolation(Rr,Ji,es,ts,Ar,wr,Cr,new Le)),r&&(Ar.fromBufferAttribute(r,a),wr.fromBufferAttribute(r,l),Cr.fromBufferAttribute(r,c),u.uv1=Mn.getInterpolation(Rr,Ji,es,ts,Ar,wr,Cr,new Le)),o&&(su.fromBufferAttribute(o,a),ru.fromBufferAttribute(o,l),ou.fromBufferAttribute(o,c),u.normal=Mn.getInterpolation(Rr,Ji,es,ts,su,ru,ou,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Mn.getNormal(Ji,es,ts,h.normal),u.face=h}return u}class ys extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2));function _(x,m,f,y,S,A,F,w,R,U,E){const M=A/R,L=F/U,N=A/2,V=F/2,ie=w/2,re=R+1,Q=U+1;let ne=0,Y=0;const ge=new O;for(let Se=0;Se<Q;Se++){const ye=Se*L-V;for(let De=0;De<re;De++){const Ye=De*M-N;ge[x]=Ye*y,ge[m]=ye*S,ge[f]=ie,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[f]=w>0?1:-1,u.push(ge.x,ge.y,ge.z),h.push(De/R),h.push(1-Se/U),ne+=1}}for(let Se=0;Se<U;Se++)for(let ye=0;ye<R;ye++){const De=d+ye+re*Se,Ye=d+ye+re*(Se+1),se=d+(ye+1)+re*(Se+1),de=d+(ye+1)+re*Se;l.push(De,Ye,de),l.push(Ye,se,de),Y+=6}a.addGroup(p,Y,E),p+=Y,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=vs(n[t]);for(const s in i)e[s]=i[s]}return e}function t_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const xo={clone:vs,merge:Ft};var n_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=t_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Td extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new O,au=new Le,lu=new Le;class en extends Td{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,au,lu),t.subVectors(lu,au)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class s_ extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(ns,is,e,t);s.layers=this.layers,this.add(s);const r=new en(ns,is,e,t);r.layers=this.layers,this.add(r);const o=new en(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new en(ns,is,e,t);a.layers=this.layers,this.add(a);const l=new en(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new en(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class gl extends Lt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r_ extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new gl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ys(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Fn});r.uniforms.tEquirect.value=t;const o=new bt(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=tn),new s_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const oa=new O,o_=new O,a_=new Ge;class ti{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=oa.subVectors(i,t).cross(o_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(oa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||a_.getNormalMatrix(e),s=this.coplanarPoint(oa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Js,Dr=new O;class _l{constructor(e=new ti,t=new ti,i=new ti,s=new ti,r=new ti,o=new ti){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],x=s[10],m=s[11],f=s[12],y=s[13],S=s[14],A=s[15];if(i[0].setComponents(l-r,d-c,m-p,A-f).normalize(),i[1].setComponents(l+r,d+c,m+p,A+f).normalize(),i[2].setComponents(l+o,d+u,m+_,A+y).normalize(),i[3].setComponents(l-o,d-u,m-_,A-y).normalize(),i[4].setComponents(l-a,d-h,m-x,A-S).normalize(),t===Un)i[5].setComponents(l+a,d+h,m+x,A+S).normalize();else if(t===no)i[5].setComponents(a,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Dr.x=s.normal.x>0?e.max.x:e.min.x,Dr.y=s.normal.y>0?e.max.y:e.min.y,Dr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ad(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function l_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let p=0,_=d.length;p<_;p++){const x=d[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class nr extends Ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],_=[],x=[],m=[];for(let f=0;f<u;f++){const y=f*d-o;for(let S=0;S<c;S++){const A=S*h-r;_.push(A,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const S=y+c*f,A=y+c*(f+1),F=y+1+c*(f+1),w=y+1+c*f;p.push(S,A,w),p.push(A,F,w)}this.setIndex(p),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}}var c_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,h_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,g_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,__=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,v_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,x_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,D_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",H_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_v=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:c_,alphahash_pars_fragment:u_,alphamap_fragment:h_,alphamap_pars_fragment:d_,alphatest_fragment:f_,alphatest_pars_fragment:p_,aomap_fragment:m_,aomap_pars_fragment:g_,batching_pars_vertex:__,batching_vertex:v_,begin_vertex:x_,beginnormal_vertex:M_,bsdfs:S_,iridescence_fragment:y_,bumpmap_pars_fragment:E_,clipping_planes_fragment:b_,clipping_planes_pars_fragment:T_,clipping_planes_pars_vertex:A_,clipping_planes_vertex:w_,color_fragment:C_,color_pars_fragment:R_,color_pars_vertex:P_,color_vertex:L_,common:D_,cube_uv_reflection_fragment:I_,defaultnormal_vertex:U_,displacementmap_pars_vertex:N_,displacementmap_vertex:F_,emissivemap_fragment:O_,emissivemap_pars_fragment:B_,colorspace_fragment:z_,colorspace_pars_fragment:H_,envmap_fragment:k_,envmap_common_pars_fragment:V_,envmap_pars_fragment:G_,envmap_pars_vertex:W_,envmap_physical_pars_fragment:t0,envmap_vertex:X_,fog_vertex:j_,fog_pars_vertex:Y_,fog_fragment:q_,fog_pars_fragment:K_,gradientmap_pars_fragment:$_,lightmap_pars_fragment:Z_,lights_lambert_fragment:Q_,lights_lambert_pars_fragment:J_,lights_pars_begin:e0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:s0,lights_phong_pars_fragment:r0,lights_physical_fragment:o0,lights_physical_pars_fragment:a0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:u0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:d0,logdepthbuf_pars_vertex:f0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:_0,map_particle_pars_fragment:v0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:M0,morphinstance_vertex:S0,morphcolor_vertex:y0,morphnormal_vertex:E0,morphtarget_pars_vertex:b0,morphtarget_vertex:T0,normal_fragment_begin:A0,normal_fragment_maps:w0,normal_pars_fragment:C0,normal_pars_vertex:R0,normal_vertex:P0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:I0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:N0,opaque_fragment:F0,packing:O0,premultiplied_alpha_fragment:B0,project_vertex:z0,dithering_fragment:H0,dithering_pars_fragment:k0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:j0,shadowmask_pars_fragment:Y0,skinbase_vertex:q0,skinning_pars_vertex:K0,skinning_vertex:$0,skinnormal_vertex:Z0,specularmap_fragment:Q0,specularmap_pars_fragment:J0,tonemapping_fragment:ev,tonemapping_pars_fragment:tv,transmission_fragment:nv,transmission_pars_fragment:iv,uv_pars_fragment:sv,uv_pars_vertex:rv,uv_vertex:ov,worldpos_vertex:av,background_vert:lv,background_frag:cv,backgroundCube_vert:uv,backgroundCube_frag:hv,cube_vert:dv,cube_frag:fv,depth_vert:pv,depth_frag:mv,distanceRGBA_vert:gv,distanceRGBA_frag:_v,equirect_vert:vv,equirect_frag:xv,linedashed_vert:Mv,linedashed_frag:Sv,meshbasic_vert:yv,meshbasic_frag:Ev,meshlambert_vert:bv,meshlambert_frag:Tv,meshmatcap_vert:Av,meshmatcap_frag:wv,meshnormal_vert:Cv,meshnormal_frag:Rv,meshphong_vert:Pv,meshphong_frag:Lv,meshphysical_vert:Dv,meshphysical_frag:Iv,meshtoon_vert:Uv,meshtoon_frag:Nv,points_vert:Fv,points_frag:Ov,shadow_vert:Bv,shadow_frag:zv,sprite_vert:Hv,sprite_frag:kv},_e={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},_n={basic:{uniforms:Ft([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ft([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ft([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ft([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ft([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ft([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ft([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ft([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ft([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ft([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ft([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ft([_e.common,_e.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ft([_e.lights,_e.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};_n.physical={uniforms:Ft([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ir={r:0,b:0,g:0},bi=new yn,Vv=new rt;function Gv(n,e,t,i,s,r,o){const a=new je(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function x(y){let S=!1;const A=_(y);A===null?f(a,l):A&&A.isColor&&(f(A,1),S=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,S){const A=_(S);A&&(A.isCubeTexture||A.mapping===_o)?(u===void 0&&(u=new bt(new ys(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:vs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),bi.copy(S.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(bi)),u.material.toneMapped=Qe.getTransfer(A.colorSpace)!==nt,(h!==A||d!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new bt(new nr(2,2),new rn({name:"BackgroundMaterial",uniforms:vs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(A.colorSpace)!==nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,S){y.getRGB(Ir,bd(n)),i.buffers.color.setClear(Ir.r,Ir.g,Ir.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:x,addToRenderList:m}}function Wv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,L,N,V,ie){let re=!1;const Q=h(V,N,L);r!==Q&&(r=Q,c(r.object)),re=p(M,V,N,ie),re&&_(M,V,N,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,A(M,L,N,V),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,L,N){const V=N.wireframe===!0;let ie=i[M.id];ie===void 0&&(ie={},i[M.id]=ie);let re=ie[L.id];re===void 0&&(re={},ie[L.id]=re);let Q=re[V];return Q===void 0&&(Q=d(l()),re[V]=Q),Q}function d(M){const L=[],N=[],V=[];for(let ie=0;ie<t;ie++)L[ie]=0,N[ie]=0,V[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,L,N,V){const ie=r.attributes,re=L.attributes;let Q=0;const ne=N.getAttributes();for(const Y in ne)if(ne[Y].location>=0){const Se=ie[Y];let ye=re[Y];if(ye===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),Se===void 0||Se.attribute!==ye||ye&&Se.data!==ye.data)return!0;Q++}return r.attributesNum!==Q||r.index!==V}function _(M,L,N,V){const ie={},re=L.attributes;let Q=0;const ne=N.getAttributes();for(const Y in ne)if(ne[Y].location>=0){let Se=re[Y];Se===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor));const ye={};ye.attribute=Se,Se&&Se.data&&(ye.data=Se.data),ie[Y]=ye,Q++}r.attributes=ie,r.attributesNum=Q,r.index=V}function x(){const M=r.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const N=r.newAttributes,V=r.enabledAttributes,ie=r.attributeDivisors;N[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),ie[M]!==L&&(n.vertexAttribDivisor(M,L),ie[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let N=0,V=L.length;N<V;N++)L[N]!==M[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function S(M,L,N,V,ie,re,Q){Q===!0?n.vertexAttribIPointer(M,L,N,ie,re):n.vertexAttribPointer(M,L,N,V,ie,re)}function A(M,L,N,V){x();const ie=V.attributes,re=N.getAttributes(),Q=L.defaultAttributeValues;for(const ne in re){const Y=re[ne];if(Y.location>=0){let ge=ie[ne];if(ge===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const Se=ge.normalized,ye=ge.itemSize,De=e.get(ge);if(De===void 0)continue;const Ye=De.buffer,se=De.type,de=De.bytesPerElement,ve=se===n.INT||se===n.UNSIGNED_INT||ge.gpuType===cd;if(ge.isInterleavedBufferAttribute){const pe=ge.data,He=pe.stride,Ne=ge.offset;if(pe.isInstancedInterleavedBuffer){for(let ke=0;ke<Y.locationSize;ke++)f(Y.location+ke,pe.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ke=0;ke<Y.locationSize;ke++)m(Y.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ke=0;ke<Y.locationSize;ke++)S(Y.location+ke,ye/Y.locationSize,se,Se,He*de,(Ne+ye/Y.locationSize*ke)*de,ve)}else{if(ge.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)f(Y.location+pe,ge.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let pe=0;pe<Y.locationSize;pe++)S(Y.location+pe,ye/Y.locationSize,se,Se,ye*de,ye/Y.locationSize*pe*de,ve)}}else if(Q!==void 0){const Se=Q[ne];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(Y.location,Se);break;case 3:n.vertexAttrib3fv(Y.location,Se);break;case 4:n.vertexAttrib4fv(Y.location,Se);break;default:n.vertexAttrib1fv(Y.location,Se)}}}}y()}function F(){U();for(const M in i){const L=i[M];for(const N in L){const V=L[N];for(const ie in V)u(V[ie].object),delete V[ie];delete L[N]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const N in L){const V=L[N];for(const ie in V)u(V[ie].object),delete V[ie];delete L[N]}delete i[M.id]}function R(M){for(const L in i){const N=i[L];if(N[M.id]===void 0)continue;const V=N[M.id];for(const ie in V)u(V[ie].object),delete V[ie];delete N[M.id]}}function U(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Xv(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h;p++)this.render(c[p],u[p]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x];for(let x=0;x<d.length;x++)t.update(_,i,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Sn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ci&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ii&&!R)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:A,maxSamples:F}}function Yv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ti,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,S=y*4;let A=f.clippingState||null;l.value=A,A=u(_,d,S,p);for(let F=0;F!==S;++F)A[F]=t[F];f.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const f=p+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,A=p;S!==x;++S,A+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function qv(n){let e=new WeakMap;function t(o,a){return a===Fa?o.mapping=ps:a===Oa&&(o.mapping=Oi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fa||a===Oa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new r_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class vl extends Td{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,cu=[.125,.215,.35,.446,.526,.582],Di=20,aa=new vl,uu=new je;let la=null,ca=0,ua=0,ha=!1;const Ai=(1+Math.sqrt(5))/2,ss=1/Ai,hu=[new O(-Ai,ss,0),new O(Ai,ss,0),new O(-ss,0,Ai),new O(ss,0,Ai),new O(0,Ai,-ss),new O(0,Ai,ss),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ca,ua),this._renderer.xr.enabled=ha,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ms,format:Sn,colorSpace:di,depthBuffer:!1},s=fu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kv(r)),this._blurMaterial=$v(r,e,t)}return s}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,i,s){const a=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(uu),u.toneMapping=oi,u.autoClear=!1;const p=new tr({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),_=new bt(new ys,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(uu),x=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const S=this._cubeSize;Ur(s,y*S,f>2?S:0,S,S),u.setRenderTarget(s),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ps||e.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ur(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,aa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hu[(s-r-1)%hu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Di-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const f=[];let y=0;for(let R=0;R<Di;++R){const U=R/x,E=Math.exp(-U*U/2);f.push(E),R===0?y+=E:R<m&&(y+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;const A=this._sizeLods[s],F=3*A*(s>S-os?s-S+os:0),w=4*(this._cubeSize-A);Ur(t,F,w,3*A,2*A),l.setRenderTarget(t),l.render(h,aa)}}function Kv(n){const e=[],t=[],i=[];let s=n;const r=n-os+1+cu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-os?l=cu[o-n+os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,f=1,y=new Float32Array(x*_*p),S=new Float32Array(m*_*p),A=new Float32Array(f*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,U=w>2?0:-1,E=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];y.set(E,x*_*w),S.set(d,m*_*w);const M=[w,w,w,w,w,w];A.set(M,f*_*w)}const F=new Ot;F.setAttribute("position",new pn(y,x)),F.setAttribute("uv",new pn(S,m)),F.setAttribute("faceIndex",new pn(A,f)),e.push(F),s>os&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fu(n,e,t){const i=new On(n,e,t);return i.texture.mapping=_o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ur(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function $v(n,e,t){const i=new Float32Array(Di),s=new O(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function pu(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function mu(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fa||l===Oa,u=l===ps||l===Oi;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new du(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new du(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Qv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&vd("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Jv(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,f=x.length;m<f;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let S=0,A=y.length;S<A;S+=3){const F=y[S+0],w=y[S+1],R=y[S+2];d.push(F,w,w,R,R,F)}}else if(_!==void 0){const y=_.array;x=_.version;for(let S=0,A=y.length/3-1;S<A;S+=3){const F=S+0,w=S+1,R=S+2;d.push(F,w,w,R,R,F)}}else return;const m=new(_d(d)?Ed:yd)(d,1);m.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ex(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,d*o,_),t.update(p,i,_))}function u(d,p,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<_;m++)this.render(d[m]/o,p[m]);else{x.multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,i,1)}}function h(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,_);let f=0;for(let y=0;y<_;y++)f+=p[y];for(let y=0;y<x.length;y++)t.update(f,i,x[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function tx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function nx(n,e,t){const i=new WeakMap,s=new St;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let A=0;_===!0&&(A=1),x===!0&&(A=2),m===!0&&(A=3);let F=a.attributes.position.count*A,w=1;F>e.maxTextureSize&&(w=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const R=new Float32Array(F*w*4*h),U=new Md(R,F,w,h);U.type=ii,U.needsUpdate=!0;const E=A*4;for(let L=0;L<h;L++){const N=f[L],V=y[L],ie=S[L],re=F*w*4*L;for(let Q=0;Q<N.count;Q++){const ne=Q*E;_===!0&&(s.fromBufferAttribute(N,Q),R[re+ne+0]=s.x,R[re+ne+1]=s.y,R[re+ne+2]=s.z,R[re+ne+3]=0),x===!0&&(s.fromBufferAttribute(V,Q),R[re+ne+4]=s.x,R[re+ne+5]=s.y,R[re+ne+6]=s.z,R[re+ne+7]=0),m===!0&&(s.fromBufferAttribute(ie,Q),R[re+ne+8]=s.x,R[re+ne+9]=s.y,R[re+ne+10]=s.z,R[re+ne+11]=ie.itemSize===4?s.w:1)}}d={count:h,texture:U,size:new Le(F,w)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ix(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class wd extends Lt{constructor(e,t,i,s,r,o,a,l,c,u=us){if(u!==us&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===us&&(i=ms),i===void 0&&u===_s&&(i=gs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cd=new Lt,Rd=new wd(1,1);Rd.compareFunction=gd;const Pd=new Md,Ld=new Wg,Dd=new gl,gu=[],_u=[],vu=new Float32Array(16),xu=new Float32Array(9),Mu=new Float32Array(4);function Es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Mo(n,e){let t=_u[e];t===void 0&&(t=new Int32Array(e),_u[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Mu.set(i),n.uniformMatrix2fv(this.addr,!1,Mu),vt(t,i)}}function cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;xu.set(i),n.uniformMatrix3fv(this.addr,!1,xu),vt(t,i)}}function ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;vu.set(i),n.uniformMatrix4fv(this.addr,!1,vu),vt(t,i)}}function hx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function mx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function _x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function xx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Rd:Cd;t.setTexture2D(e||r,s)}function Mx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ld,s)}function Sx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Dd,s)}function yx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Pd,s)}function Ex(n){switch(n){case 5126:return sx;case 35664:return rx;case 35665:return ox;case 35666:return ax;case 35674:return lx;case 35675:return cx;case 35676:return ux;case 5124:case 35670:return hx;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return yx}}function bx(n,e){n.uniform1fv(this.addr,e)}function Tx(n,e){const t=Es(e,this.size,2);n.uniform2fv(this.addr,t)}function Ax(n,e){const t=Es(e,this.size,3);n.uniform3fv(this.addr,t)}function wx(n,e){const t=Es(e,this.size,4);n.uniform4fv(this.addr,t)}function Cx(n,e){const t=Es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Rx(n,e){const t=Es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Px(n,e){const t=Es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lx(n,e){n.uniform1iv(this.addr,e)}function Dx(n,e){n.uniform2iv(this.addr,e)}function Ix(n,e){n.uniform3iv(this.addr,e)}function Ux(n,e){n.uniform4iv(this.addr,e)}function Nx(n,e){n.uniform1uiv(this.addr,e)}function Fx(n,e){n.uniform2uiv(this.addr,e)}function Ox(n,e){n.uniform3uiv(this.addr,e)}function Bx(n,e){n.uniform4uiv(this.addr,e)}function zx(n,e,t){const i=this.cache,s=e.length,r=Mo(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Cd,r[o])}function Hx(n,e,t){const i=this.cache,s=e.length,r=Mo(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ld,r[o])}function kx(n,e,t){const i=this.cache,s=e.length,r=Mo(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Dd,r[o])}function Vx(n,e,t){const i=this.cache,s=e.length,r=Mo(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Pd,r[o])}function Gx(n){switch(n){case 5126:return bx;case 35664:return Tx;case 35665:return Ax;case 35666:return wx;case 35674:return Cx;case 35675:return Rx;case 35676:return Px;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Ix;case 35669:case 35673:return Ux;case 5125:return Nx;case 36294:return Fx;case 36295:return Ox;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Vx}}class Wx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ex(t.type)}}class Xx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gx(t.type)}}class jx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Su(n,e){n.seq.push(e),n.map[e.id]=e}function Yx(n,e,t){const i=n.name,s=i.length;for(da.lastIndex=0;;){const r=da.exec(i),o=da.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Su(t,c===void 0?new Wx(a,n,e):new Xx(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new jx(a),Su(t,h)),t=h}}}class Xr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Yx(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function yu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qx=37297;let Kx=0;function $x(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Zx(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===to&&t===eo?i="LinearDisplayP3ToLinearSRGB":e===eo&&t===to&&(i="LinearSRGBToLinearDisplayP3"),n){case di:case vo:return[i,"LinearTransferOETF"];case un:case fl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Eu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$x(n.getShaderSource(e),o)}else return s}function Qx(n,e){const t=Zx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jx(n,e){let t;switch(e){case id:t="Linear";break;case sd:t="Reinhard";break;case rd:t="OptimizedCineon";break;case dl:t="ACESFilmic";break;case od:t="AgX";break;case ad:t="Neutral";break;case Qm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function eM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function tM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Is(n){return n!==""}function bu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(n){return n.replace(iM,rM)}const sM=new Map;function rM(n,e){let t=Ve[e];if(t===void 0){const i=sM.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ha(t)}const oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(n){return n.replace(oM,aM)}function aM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===td?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function cM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case Oi:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function hM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hl:e="ENVMAP_BLENDING_MULTIPLY";break;case $m:e="ENVMAP_BLENDING_MIX";break;case Zm:e="ENVMAP_BLENDING_ADD";break}return e}function dM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lM(t),c=cM(t),u=uM(t),h=hM(t),d=dM(t),p=eM(t),_=tM(r),x=s.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Is).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Is).join(`
`),f.length>0&&(f+=`
`)):(m=[wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),f=[wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==oi?Jx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Qx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),o=Ha(o),o=bu(o,t),o=Tu(o,t),a=Ha(a),a=bu(a,t),a=Tu(a,t),o=Au(o),a=Au(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=y+m+o,A=y+f+a,F=yu(s,s.VERTEX_SHADER,S),w=yu(s,s.FRAGMENT_SHADER,A);s.attachShader(x,F),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(F).trim(),ie=s.getShaderInfoLog(w).trim();let re=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,F,w);else{const ne=Eu(s,F,"vertex"),Y=Eu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+ne+`
`+Y)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(V===""||ie==="")&&(Q=!1);Q&&(L.diagnostics={runnable:re,programLog:N,vertexShader:{log:V,prefix:m},fragmentShader:{log:ie,prefix:f}})}s.deleteShader(F),s.deleteShader(w),U=new Xr(s,x),E=nM(s,x)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,qx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=w,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gM(e),t.set(e,i)),i}}class gM{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}}function _M(n,e,t,i,s,r,o){const a=new ml,l=new mM,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,N,V){const ie=N.fog,re=V.geometry,Q=E.isMeshStandardMaterial?N.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||Q),Y=ne&&ne.mapping===_o?ne.image.height:null,ge=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Se=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ye=Se!==void 0?Se.length:0;let De=0;re.morphAttributes.position!==void 0&&(De=1),re.morphAttributes.normal!==void 0&&(De=2),re.morphAttributes.color!==void 0&&(De=3);let Ye,se,de,ve;if(ge){const $e=_n[ge];Ye=$e.vertexShader,se=$e.fragmentShader}else Ye=E.vertexShader,se=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),ve=l.getFragmentShaderID(E);const pe=n.getRenderTarget(),He=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,ke=!!E.map,I=!!E.matcap,We=!!ne,C=!!E.aoMap,D=!!E.lightMap,z=!!E.bumpMap,Z=!!E.normalMap,$=!!E.displacementMap,te=!!E.emissiveMap,he=!!E.metalnessMap,b=!!E.roughnessMap,g=E.anisotropy>0,P=E.clearcoat>0,H=E.dispersion>0,j=E.iridescence>0,X=E.sheen>0,ce=E.transmission>0,oe=g&&!!E.anisotropyMap,le=P&&!!E.clearcoatMap,xe=P&&!!E.clearcoatNormalMap,ae=P&&!!E.clearcoatRoughnessMap,Me=j&&!!E.iridescenceMap,Fe=j&&!!E.iridescenceThicknessMap,Re=X&&!!E.sheenColorMap,me=X&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ae=!!E.specularColorMap,qe=!!E.specularIntensityMap,v=ce&&!!E.transmissionMap,J=ce&&!!E.thicknessMap,W=!!E.gradientMap,ee=!!E.alphaMap,ue=E.alphaTest>0,we=!!E.alphaHash,ze=!!E.extensions;let ot=oi;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ot=n.toneMapping);const ht={shaderID:ge,shaderType:E.type,shaderName:E.name,vertexShader:Ye,fragmentShader:se,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&V._colorsTexture!==null,instancing:He,instancingColor:He&&V.instanceColor!==null,instancingMorph:He&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:di,alphaToCoverage:!!E.alphaToCoverage,map:ke,matcap:I,envMap:We,envMapMode:We&&ne.mapping,envMapCubeUVHeight:Y,aoMap:C,lightMap:D,bumpMap:z,normalMap:Z,displacementMap:d&&$,emissiveMap:te,normalMapObjectSpace:Z&&E.normalMapType===dg,normalMapTangentSpace:Z&&E.normalMapType===md,metalnessMap:he,roughnessMap:b,anisotropy:g,anisotropyMap:oe,clearcoat:P,clearcoatMap:le,clearcoatNormalMap:xe,clearcoatRoughnessMap:ae,dispersion:H,iridescence:j,iridescenceMap:Me,iridescenceThicknessMap:Fe,sheen:X,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:Oe,specularColorMap:Ae,specularIntensityMap:qe,transmission:ce,transmissionMap:v,thicknessMap:J,gradientMap:W,opaque:E.transparent===!1&&E.blending===cs&&E.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:we,combine:E.combine,mapUv:ke&&x(E.map.channel),aoMapUv:C&&x(E.aoMap.channel),lightMapUv:D&&x(E.lightMap.channel),bumpMapUv:z&&x(E.bumpMap.channel),normalMapUv:Z&&x(E.normalMap.channel),displacementMapUv:$&&x(E.displacementMap.channel),emissiveMapUv:te&&x(E.emissiveMap.channel),metalnessMapUv:he&&x(E.metalnessMap.channel),roughnessMapUv:b&&x(E.roughnessMap.channel),anisotropyMapUv:oe&&x(E.anisotropyMap.channel),clearcoatMapUv:le&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(E.sheenRoughnessMap.channel),specularMapUv:Oe&&x(E.specularMap.channel),specularColorMapUv:Ae&&x(E.specularColorMap.channel),specularIntensityMapUv:qe&&x(E.specularIntensityMap.channel),transmissionMapUv:v&&x(E.transmissionMap.channel),thicknessMapUv:J&&x(E.thicknessMap.channel),alphaMapUv:ee&&x(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Z||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!re.attributes.uv&&(ke||ee),fog:!!ie,useFog:E.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xn,flipSided:E.side===Ht,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ze&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ze&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(y(M,E),S(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),E.push(a.mask)}function A(E){const M=_[E.type];let L;if(M){const N=_n[M];L=xo.clone(N.uniforms)}else L=E.uniforms;return L}function F(E,M){let L;for(let N=0,V=u.length;N<V;N++){const ie=u[N];if(ie.cacheKey===M){L=ie,++L.usedTimes;break}}return L===void 0&&(L=new fM(n,M,E,r),u.push(L)),L}function w(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:F,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:U}}function vM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function xM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ru(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,p,_,x,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,_,x,m){const f=o(h,d,p,_,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,_,x,m){const f=o(h,d,p,_,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||xM),i.length>1&&i.sort(d||Cu),s.length>1&&s.sort(d||Cu)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function MM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ru,n.set(i,[o])):s>=r.length?(o=new Ru,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function SM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new je};break;case"SpotLight":t={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function yM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let EM=0;function bM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function TM(n){const e=new SM,t=yM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new rt,o=new rt;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,y=0,S=0,A=0,F=0,w=0,R=0;c.sort(bM);for(let E=0,M=c.length;E<M;E++){const L=c[E],N=L.color,V=L.intensity,ie=L.distance,re=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*V,h+=N.g*V,d+=N.b*V;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(L.sh.coefficients[Q],V);R++}else if(L.isDirectionalLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,Y=t.get(L);Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=L.shadow.matrix,y++}i.directional[p]=Q,p++}else if(L.isSpotLight){const Q=e.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(N).multiplyScalar(V),Q.distance=ie,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,i.spot[x]=Q;const ne=L.shadow;if(L.map&&(i.spotLightMap[F]=L.map,F++,ne.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[x]=ne.matrix,L.castShadow){const Y=t.get(L);Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=re,A++}x++}else if(L.isRectAreaLight){const Q=e.get(L);Q.color.copy(N).multiplyScalar(V),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Q,m++}else if(L.isPointLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){const ne=L.shadow,Y=t.get(L);Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,Y.shadowCameraNear=ne.camera.near,Y.shadowCameraFar=ne.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=L.shadow.matrix,S++}i.point[_]=Q,_++}else if(L.isHemisphereLight){const Q=e.get(L);Q.skyColor.copy(L.color).multiplyScalar(V),Q.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[f]=Q,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==y||U.numPointShadows!==S||U.numSpotShadows!==A||U.numSpotMaps!==F||U.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+F-w,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,U.directionalLength=p,U.pointLength=_,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=y,U.numPointShadows=S,U.numSpotShadows=A,U.numSpotMaps=F,U.numLightProbes=R,i.version=EM++)}function l(c,u){let h=0,d=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const S=c[f];if(S.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(S.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Pu(n){const e=new TM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function AM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Pu(n),e.set(s,[a])):r>=o.length?(a=new Pu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class wM extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CM extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LM(n,e,t){let i=new _l;const s=new Le,r=new Le,o=new St,a=new wM({depthPacking:hg}),l=new CM,c={},u=t.maxTextureSize,h={[li]:Ht,[Ht]:li,[xn]:xn},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:RM,fragmentShader:PM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ot;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new bt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let f=this.type;this.render=function(w,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Fn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const V=f!==Pn&&this.type===Pn,ie=f===Pn&&this.type!==Pn;for(let re=0,Q=w.length;re<Q;re++){const ne=w[re],Y=ne.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ge=Y.getFrameExtents();if(s.multiply(ge),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ge.x),s.x=r.x*ge.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ge.y),s.y=r.y*ge.y,Y.mapSize.y=r.y)),Y.map===null||V===!0||ie===!0){const ye=this.type!==Pn?{minFilter:zt,magFilter:zt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new On(s.x,s.y,ye),Y.map.texture.name=ne.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const Se=Y.getViewportCount();for(let ye=0;ye<Se;ye++){const De=Y.getViewport(ye);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),N.viewport(o),Y.updateMatrices(ne,ye),i=Y.getFrustum(),A(R,U,Y.camera,ne,this.type)}Y.isPointLightShadow!==!0&&this.type===Pn&&y(Y,U),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,L)};function y(w,R){const U=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new On(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,U,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,U,p,x,null)}function S(w,R,U,E){let M=null;const L=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=M.uuid,V=R.uuid;let ie=c[N];ie===void 0&&(ie={},c[N]=ie);let re=ie[V];re===void 0&&(re=M.clone(),ie[V]=re,R.addEventListener("dispose",F)),M=re}if(M.visible=R.visible,M.wireframe=R.wireframe,E===Pn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=U}return M}function A(w,R,U,E,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Pn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const V=e.update(w),ie=w.material;if(Array.isArray(ie)){const re=V.groups;for(let Q=0,ne=re.length;Q<ne;Q++){const Y=re[Q],ge=ie[Y.materialIndex];if(ge&&ge.visible){const Se=S(w,ge,E,M);w.onBeforeShadow(n,w,R,U,V,Se,Y),n.renderBufferDirect(U,null,V,Se,w,Y),w.onAfterShadow(n,w,R,U,V,Se,Y)}}}else if(ie.visible){const re=S(w,ie,E,M);w.onBeforeShadow(n,w,R,U,V,re,null),n.renderBufferDirect(U,null,V,re,w,null),w.onAfterShadow(n,w,R,U,V,re,null)}}const N=w.children;for(let V=0,ie=N.length;V<ie;V++)A(N[V],R,U,E,M)}function F(w){w.target.removeEventListener("dispose",F);for(const U in c){const E=c[U],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function DM(n){function e(){let v=!1;const J=new St;let W=null;const ee=new St(0,0,0,0);return{setMask:function(ue){W!==ue&&!v&&(n.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){v=ue},setClear:function(ue,we,ze,ot,ht){ht===!0&&(ue*=ot,we*=ot,ze*=ot),J.set(ue,we,ze,ot),ee.equals(J)===!1&&(n.clearColor(ue,we,ze,ot),ee.copy(J))},reset:function(){v=!1,W=null,ee.set(-1,0,0,0)}}}function t(){let v=!1,J=null,W=null,ee=null;return{setTest:function(ue){ue?ve(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(ue){J!==ue&&!v&&(n.depthMask(ue),J=ue)},setFunc:function(ue){if(W!==ue){switch(ue){case Gm:n.depthFunc(n.NEVER);break;case Wm:n.depthFunc(n.ALWAYS);break;case Xm:n.depthFunc(n.LESS);break;case Zr:n.depthFunc(n.LEQUAL);break;case jm:n.depthFunc(n.EQUAL);break;case Ym:n.depthFunc(n.GEQUAL);break;case qm:n.depthFunc(n.GREATER);break;case Km:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}W=ue}},setLocked:function(ue){v=ue},setClear:function(ue){ee!==ue&&(n.clearDepth(ue),ee=ue)},reset:function(){v=!1,J=null,W=null,ee=null}}}function i(){let v=!1,J=null,W=null,ee=null,ue=null,we=null,ze=null,ot=null,ht=null;return{setTest:function($e){v||($e?ve(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function($e){J!==$e&&!v&&(n.stencilMask($e),J=$e)},setFunc:function($e,dt,ft){(W!==$e||ee!==dt||ue!==ft)&&(n.stencilFunc($e,dt,ft),W=$e,ee=dt,ue=ft)},setOp:function($e,dt,ft){(we!==$e||ze!==dt||ot!==ft)&&(n.stencilOp($e,dt,ft),we=$e,ze=dt,ot=ft)},setLocked:function($e){v=$e},setClear:function($e){ht!==$e&&(n.clearStencil($e),ht=$e)},reset:function(){v=!1,J=null,W=null,ee=null,ue=null,we=null,ze=null,ot=null,ht=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,_=!1,x=null,m=null,f=null,y=null,S=null,A=null,F=null,w=new je(0,0,0),R=0,U=!1,E=null,M=null,L=null,N=null,V=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Q=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ne)[1]),re=Q>=1):ne.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),re=Q>=2);let Y=null,ge={};const Se=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),De=new St().fromArray(Se),Ye=new St().fromArray(ye);function se(v,J,W,ee){const ue=new Uint8Array(4),we=n.createTexture();n.bindTexture(v,we),n.texParameteri(v,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(v,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<W;ze++)v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(J+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return we}const de={};de[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),r.setFunc(Zr),z(!1),Z(hc),ve(n.CULL_FACE),C(Fn);function ve(v){c[v]!==!0&&(n.enable(v),c[v]=!0)}function pe(v){c[v]!==!1&&(n.disable(v),c[v]=!1)}function He(v,J){return u[v]!==J?(n.bindFramebuffer(v,J),u[v]=J,v===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=J),v===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=J),!0):!1}function Ne(v,J){let W=d,ee=!1;if(v){W=h.get(J),W===void 0&&(W=[],h.set(J,W));const ue=v.textures;if(W.length!==ue.length||W[0]!==n.COLOR_ATTACHMENT0){for(let we=0,ze=ue.length;we<ze;we++)W[we]=n.COLOR_ATTACHMENT0+we;W.length=ue.length,ee=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,ee=!0);ee&&n.drawBuffers(W)}function ke(v){return p!==v?(n.useProgram(v),p=v,!0):!1}const I={[Li]:n.FUNC_ADD,[Am]:n.FUNC_SUBTRACT,[wm]:n.FUNC_REVERSE_SUBTRACT};I[Cm]=n.MIN,I[Rm]=n.MAX;const We={[Pm]:n.ZERO,[Lm]:n.ONE,[Dm]:n.SRC_COLOR,[Ua]:n.SRC_ALPHA,[Bm]:n.SRC_ALPHA_SATURATE,[Fm]:n.DST_COLOR,[Um]:n.DST_ALPHA,[Im]:n.ONE_MINUS_SRC_COLOR,[Na]:n.ONE_MINUS_SRC_ALPHA,[Om]:n.ONE_MINUS_DST_COLOR,[Nm]:n.ONE_MINUS_DST_ALPHA,[zm]:n.CONSTANT_COLOR,[Hm]:n.ONE_MINUS_CONSTANT_COLOR,[km]:n.CONSTANT_ALPHA,[Vm]:n.ONE_MINUS_CONSTANT_ALPHA};function C(v,J,W,ee,ue,we,ze,ot,ht,$e){if(v===Fn){_===!0&&(pe(n.BLEND),_=!1);return}if(_===!1&&(ve(n.BLEND),_=!0),v!==Tm){if(v!==x||$e!==U){if((m!==Li||S!==Li)&&(n.blendEquation(n.FUNC_ADD),m=Li,S=Li),$e)switch(v){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ia:n.blendFunc(n.ONE,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ia:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}f=null,y=null,A=null,F=null,w.set(0,0,0),R=0,x=v,U=$e}return}ue=ue||J,we=we||W,ze=ze||ee,(J!==m||ue!==S)&&(n.blendEquationSeparate(I[J],I[ue]),m=J,S=ue),(W!==f||ee!==y||we!==A||ze!==F)&&(n.blendFuncSeparate(We[W],We[ee],We[we],We[ze]),f=W,y=ee,A=we,F=ze),(ot.equals(w)===!1||ht!==R)&&(n.blendColor(ot.r,ot.g,ot.b,ht),w.copy(ot),R=ht),x=v,U=!1}function D(v,J){v.side===xn?pe(n.CULL_FACE):ve(n.CULL_FACE);let W=v.side===Ht;J&&(W=!W),z(W),v.blending===cs&&v.transparent===!1?C(Fn):C(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),s.setMask(v.colorWrite);const ee=v.stencilWrite;o.setTest(ee),ee&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),te(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(v){E!==v&&(v?n.frontFace(n.CW):n.frontFace(n.CCW),E=v)}function Z(v){v!==Em?(ve(n.CULL_FACE),v!==M&&(v===hc?n.cullFace(n.BACK):v===bm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),M=v}function $(v){v!==L&&(re&&n.lineWidth(v),L=v)}function te(v,J,W){v?(ve(n.POLYGON_OFFSET_FILL),(N!==J||V!==W)&&(n.polygonOffset(J,W),N=J,V=W)):pe(n.POLYGON_OFFSET_FILL)}function he(v){v?ve(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function b(v){v===void 0&&(v=n.TEXTURE0+ie-1),Y!==v&&(n.activeTexture(v),Y=v)}function g(v,J,W){W===void 0&&(Y===null?W=n.TEXTURE0+ie-1:W=Y);let ee=ge[W];ee===void 0&&(ee={type:void 0,texture:void 0},ge[W]=ee),(ee.type!==v||ee.texture!==J)&&(Y!==W&&(n.activeTexture(W),Y=W),n.bindTexture(v,J||de[v]),ee.type=v,ee.texture=J)}function P(){const v=ge[Y];v!==void 0&&v.type!==void 0&&(n.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xe(){try{n.texStorage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Re(v){De.equals(v)===!1&&(n.scissor(v.x,v.y,v.z,v.w),De.copy(v))}function me(v){Ye.equals(v)===!1&&(n.viewport(v.x,v.y,v.z,v.w),Ye.copy(v))}function Oe(v,J){let W=l.get(J);W===void 0&&(W=new WeakMap,l.set(J,W));let ee=W.get(v);ee===void 0&&(ee=n.getUniformBlockIndex(J,v.name),W.set(v,ee))}function Ae(v,J){const ee=l.get(J).get(v);a.get(J)!==ee&&(n.uniformBlockBinding(J,ee,v.__bindingPointIndex),a.set(J,ee))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Y=null,ge={},u={},h=new WeakMap,d=[],p=null,_=!1,x=null,m=null,f=null,y=null,S=null,A=null,F=null,w=new je(0,0,0),R=0,U=!1,E=null,M=null,L=null,N=null,V=null,De.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ve,disable:pe,bindFramebuffer:He,drawBuffers:Ne,useProgram:ke,setBlending:C,setMaterial:D,setFlipSided:z,setCullFace:Z,setLineWidth:$,setPolygonOffset:te,setScissorTest:he,activeTexture:b,bindTexture:g,unbindTexture:P,compressedTexImage2D:H,compressedTexImage3D:j,texImage2D:Me,texImage3D:Fe,updateUBOMapping:Oe,uniformBlockBinding:Ae,texStorage2D:xe,texStorage3D:ae,texSubImage2D:X,texSubImage3D:ce,compressedTexSubImage2D:oe,compressedTexSubImage3D:le,scissor:Re,viewport:me,reset:qe}}function IM(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return p?new OffscreenCanvas(b,g):Ks("canvas")}function x(b,g,P){let H=1;const j=he(b);if((j.width>P||j.height>P)&&(H=P/Math.max(j.width,j.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor(H*j.width),ce=Math.floor(H*j.height);h===void 0&&(h=_(X,ce));const oe=g?_(X,ce):h;return oe.width=X,oe.height=ce,oe.getContext("2d").drawImage(b,0,0,X,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+ce+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==zt&&b.minFilter!==tn}function f(b){n.generateMipmap(b)}function y(b,g,P,H,j=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=g;if(g===n.RED&&(P===n.FLOAT&&(X=n.R32F),P===n.HALF_FLOAT&&(X=n.R16F),P===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.R8UI),P===n.UNSIGNED_SHORT&&(X=n.R16UI),P===n.UNSIGNED_INT&&(X=n.R32UI),P===n.BYTE&&(X=n.R8I),P===n.SHORT&&(X=n.R16I),P===n.INT&&(X=n.R32I)),g===n.RG&&(P===n.FLOAT&&(X=n.RG32F),P===n.HALF_FLOAT&&(X=n.RG16F),P===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RG8UI),P===n.UNSIGNED_SHORT&&(X=n.RG16UI),P===n.UNSIGNED_INT&&(X=n.RG32UI),P===n.BYTE&&(X=n.RG8I),P===n.SHORT&&(X=n.RG16I),P===n.INT&&(X=n.RG32I)),g===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),g===n.RGBA){const ce=j?Jr:Qe.getTransfer(H);P===n.FLOAT&&(X=n.RGBA32F),P===n.HALF_FLOAT&&(X=n.RGBA16F),P===n.UNSIGNED_BYTE&&(X=ce===nt?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(b,g){let P;return b?g===null||g===ms||g===gs?P=n.DEPTH24_STENCIL8:g===ii?P=n.DEPTH32F_STENCIL8:g===Qr&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ms||g===gs?P=n.DEPTH_COMPONENT24:g===ii?P=n.DEPTH_COMPONENT32F:g===Qr&&(P=n.DEPTH_COMPONENT16),P}function A(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==zt&&b.minFilter!==tn?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function F(b){const g=b.target;g.removeEventListener("dispose",F),R(g),g.isVideoTexture&&u.delete(g)}function w(b){const g=b.target;g.removeEventListener("dispose",w),E(g)}function R(b){const g=i.get(b);if(g.__webglInit===void 0)return;const P=b.source,H=d.get(P);if(H){const j=H[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&U(b),Object.keys(H).length===0&&d.delete(P)}i.remove(b)}function U(b){const g=i.get(b);n.deleteTexture(g.__webglTexture);const P=b.source,H=d.get(P);delete H[g.__cacheKey],o.memory.textures--}function E(b){const g=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let j=0;j<g.__webglFramebuffer[H].length;j++)n.deleteFramebuffer(g.__webglFramebuffer[H][j]);else n.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)n.deleteFramebuffer(g.__webglFramebuffer[H]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=b.textures;for(let H=0,j=P.length;H<j;H++){const X=i.get(P[H]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(P[H])}i.remove(b)}let M=0;function L(){M=0}function N(){const b=M;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),M+=1,b}function V(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function ie(b,g){const P=i.get(b);if(b.isVideoTexture&&$(b),b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){const H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(P,b,g);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+g)}function re(b,g){const P=i.get(b);if(b.version>0&&P.__version!==b.version){Ye(P,b,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+g)}function Q(b,g){const P=i.get(b);if(b.version>0&&P.__version!==b.version){Ye(P,b,g);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+g)}function ne(b,g){const P=i.get(b);if(b.version>0&&P.__version!==b.version){se(P,b,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+g)}const Y={[Ba]:n.REPEAT,[In]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},ge={[zt]:n.NEAREST,[Jm]:n.NEAREST_MIPMAP_NEAREST,[fr]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Oo]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Se={[fg]:n.NEVER,[xg]:n.ALWAYS,[pg]:n.LESS,[gd]:n.LEQUAL,[mg]:n.EQUAL,[vg]:n.GEQUAL,[gg]:n.GREATER,[_g]:n.NOTEQUAL};function ye(b,g){if(g.type===ii&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===tn||g.magFilter===Oo||g.magFilter===fr||g.magFilter===Ii||g.minFilter===tn||g.minFilter===Oo||g.minFilter===fr||g.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Y[g.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Y[g.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Y[g.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ge[g.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===zt||g.minFilter!==fr&&g.minFilter!==Ii||g.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function De(b,g){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",F));const H=g.source;let j=d.get(H);j===void 0&&(j={},d.set(H,j));const X=V(g);if(X!==b.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),j[X].usedTimes++;const ce=j[b.__cacheKey];ce!==void 0&&(j[b.__cacheKey].usedTimes--,ce.usedTimes===0&&U(g)),b.__cacheKey=X,b.__webglTexture=j[X].texture}return P}function Ye(b,g,P){let H=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=n.TEXTURE_3D);const j=De(b,g),X=g.source;t.bindTexture(H,b.__webglTexture,n.TEXTURE0+P);const ce=i.get(X);if(X.version!==ce.__version||j===!0){t.activeTexture(n.TEXTURE0+P);const oe=Qe.getPrimaries(Qe.workingColorSpace),le=g.colorSpace===ni?null:Qe.getPrimaries(g.colorSpace),xe=g.colorSpace===ni||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ae=x(g.image,!1,s.maxTextureSize);ae=te(g,ae);const Me=r.convert(g.format,g.colorSpace),Fe=r.convert(g.type);let Re=y(g.internalFormat,Me,Fe,g.colorSpace,g.isVideoTexture);ye(H,g);let me;const Oe=g.mipmaps,Ae=g.isVideoTexture!==!0,qe=ce.__version===void 0||j===!0,v=X.dataReady,J=A(g,ae);if(g.isDepthTexture)Re=S(g.format===_s,g.type),qe&&(Ae?t.texStorage2D(n.TEXTURE_2D,1,Re,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Re,ae.width,ae.height,0,Me,Fe,null));else if(g.isDataTexture)if(Oe.length>0){Ae&&qe&&t.texStorage2D(n.TEXTURE_2D,J,Re,Oe[0].width,Oe[0].height);for(let W=0,ee=Oe.length;W<ee;W++)me=Oe[W],Ae?v&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,me.width,me.height,Me,Fe,me.data):t.texImage2D(n.TEXTURE_2D,W,Re,me.width,me.height,0,Me,Fe,me.data);g.generateMipmaps=!1}else Ae?(qe&&t.texStorage2D(n.TEXTURE_2D,J,Re,ae.width,ae.height),v&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,Fe,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Re,ae.width,ae.height,0,Me,Fe,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ae&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,Re,Oe[0].width,Oe[0].height,ae.depth);for(let W=0,ee=Oe.length;W<ee;W++)if(me=Oe[W],g.format!==Sn)if(Me!==null)if(Ae){if(v)if(g.layerUpdates.size>0){for(const ue of g.layerUpdates){const we=me.width*me.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ue,me.width,me.height,1,Me,me.data.slice(we*ue,we*(ue+1)),0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,ae.depth,Me,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Re,me.width,me.height,ae.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?v&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,ae.depth,Me,Fe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Re,me.width,me.height,ae.depth,0,Me,Fe,me.data)}else{Ae&&qe&&t.texStorage2D(n.TEXTURE_2D,J,Re,Oe[0].width,Oe[0].height);for(let W=0,ee=Oe.length;W<ee;W++)me=Oe[W],g.format!==Sn?Me!==null?Ae?v&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,me.width,me.height,Me,me.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?v&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,me.width,me.height,Me,Fe,me.data):t.texImage2D(n.TEXTURE_2D,W,Re,me.width,me.height,0,Me,Fe,me.data)}else if(g.isDataArrayTexture)if(Ae){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,Re,ae.width,ae.height,ae.depth),v)if(g.layerUpdates.size>0){let W;switch(Fe){case n.UNSIGNED_BYTE:switch(Me){case n.ALPHA:W=1;break;case n.LUMINANCE:W=1;break;case n.LUMINANCE_ALPHA:W=2;break;case n.RGB:W=3;break;case n.RGBA:W=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:W=1;break;default:throw new Error(`Unknown texel size for type ${Fe}.`)}const ee=ae.width*ae.height*W;for(const ue of g.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,ae.width,ae.height,1,Me,Fe,ae.data.slice(ee*ue,ee*(ue+1)));g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Fe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ae.width,ae.height,ae.depth,0,Me,Fe,ae.data);else if(g.isData3DTexture)Ae?(qe&&t.texStorage3D(n.TEXTURE_3D,J,Re,ae.width,ae.height,ae.depth),v&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Fe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ae.width,ae.height,ae.depth,0,Me,Fe,ae.data);else if(g.isFramebufferTexture){if(qe)if(Ae)t.texStorage2D(n.TEXTURE_2D,J,Re,ae.width,ae.height);else{let W=ae.width,ee=ae.height;for(let ue=0;ue<J;ue++)t.texImage2D(n.TEXTURE_2D,ue,Re,W,ee,0,Me,Fe,null),W>>=1,ee>>=1}}else if(Oe.length>0){if(Ae&&qe){const W=he(Oe[0]);t.texStorage2D(n.TEXTURE_2D,J,Re,W.width,W.height)}for(let W=0,ee=Oe.length;W<ee;W++)me=Oe[W],Ae?v&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Me,Fe,me):t.texImage2D(n.TEXTURE_2D,W,Re,Me,Fe,me);g.generateMipmaps=!1}else if(Ae){if(qe){const W=he(ae);t.texStorage2D(n.TEXTURE_2D,J,Re,W.width,W.height)}v&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Fe,ae)}else t.texImage2D(n.TEXTURE_2D,0,Re,Me,Fe,ae);m(g)&&f(H),ce.__version=X.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function se(b,g,P){if(g.image.length!==6)return;const H=De(b,g),j=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+P);const X=i.get(j);if(j.version!==X.__version||H===!0){t.activeTexture(n.TEXTURE0+P);const ce=Qe.getPrimaries(Qe.workingColorSpace),oe=g.colorSpace===ni?null:Qe.getPrimaries(g.colorSpace),le=g.colorSpace===ni||ce===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,Me=[];for(let ee=0;ee<6;ee++)!xe&&!ae?Me[ee]=x(g.image[ee],!0,s.maxCubemapSize):Me[ee]=ae?g.image[ee].image:g.image[ee],Me[ee]=te(g,Me[ee]);const Fe=Me[0],Re=r.convert(g.format,g.colorSpace),me=r.convert(g.type),Oe=y(g.internalFormat,Re,me,g.colorSpace),Ae=g.isVideoTexture!==!0,qe=X.__version===void 0||H===!0,v=j.dataReady;let J=A(g,Fe);ye(n.TEXTURE_CUBE_MAP,g);let W;if(xe){Ae&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,J,Oe,Fe.width,Fe.height);for(let ee=0;ee<6;ee++){W=Me[ee].mipmaps;for(let ue=0;ue<W.length;ue++){const we=W[ue];g.format!==Sn?Re!==null?Ae?v&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,we.width,we.height,Re,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,we.width,we.height,Re,me,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Oe,we.width,we.height,0,Re,me,we.data)}}}else{if(W=g.mipmaps,Ae&&qe){W.length>0&&J++;const ee=he(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,J,Oe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me[ee].width,Me[ee].height,Re,me,Me[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,Me[ee].width,Me[ee].height,0,Re,me,Me[ee].data);for(let ue=0;ue<W.length;ue++){const ze=W[ue].image[ee].image;Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,ze.width,ze.height,Re,me,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Oe,ze.width,ze.height,0,Re,me,ze.data)}}else{Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,me,Me[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,Re,me,Me[ee]);for(let ue=0;ue<W.length;ue++){const we=W[ue];Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,Re,me,we.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Oe,Re,me,we.image[ee])}}}m(g)&&f(n.TEXTURE_CUBE_MAP),X.__version=j.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function de(b,g,P,H,j,X){const ce=r.convert(P.format,P.colorSpace),oe=r.convert(P.type),le=y(P.internalFormat,ce,oe,P.colorSpace);if(!i.get(g).__hasExternalTextures){const ae=Math.max(1,g.width>>X),Me=Math.max(1,g.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,X,le,ae,Me,g.depth,0,ce,oe,null):t.texImage2D(j,X,le,ae,Me,0,ce,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Z(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,j,i.get(P).__webglTexture,0,z(g)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,j,i.get(P).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(b,g,P){if(n.bindRenderbuffer(n.RENDERBUFFER,b),g.depthBuffer){const H=g.depthTexture,j=H&&H.isDepthTexture?H.type:null,X=S(g.stencilBuffer,j),ce=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=z(g);Z(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,X,g.width,g.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,X,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,b)}else{const H=g.textures;for(let j=0;j<H.length;j++){const X=H[j],ce=r.convert(X.format,X.colorSpace),oe=r.convert(X.type),le=y(X.internalFormat,ce,oe,X.colorSpace),xe=z(g);P&&Z(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,le,g.width,g.height):Z(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,le,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,le,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ie(g.depthTexture,0);const H=i.get(g.depthTexture).__webglTexture,j=z(g);if(g.depthTexture.format===us)Z(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0);else if(g.depthTexture.format===_s)Z(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function He(b){const g=i.get(b),P=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");pe(g.__webglFramebuffer,b)}else if(P){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]=n.createRenderbuffer(),ve(g.__webglDepthbuffer[H],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),ve(g.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(b,g,P){const H=i.get(b);g!==void 0&&de(H.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&He(b)}function ke(b){const g=b.texture,P=i.get(b),H=i.get(g);b.addEventListener("dispose",w);const j=b.textures,X=b.isWebGLCubeRenderTarget===!0,ce=j.length>1;if(ce||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=g.version,o.memory.textures++),X){P.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[oe]=[];for(let le=0;le<g.mipmaps.length;le++)P.__webglFramebuffer[oe][le]=n.createFramebuffer()}else P.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)P.__webglFramebuffer[oe]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(ce)for(let oe=0,le=j.length;oe<le;oe++){const xe=i.get(j[oe]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Z(b)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){const le=j[oe];P.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[oe]);const xe=r.convert(le.format,le.colorSpace),ae=r.convert(le.type),Me=y(le.internalFormat,xe,ae,le.colorSpace,b.isXRRenderTarget===!0),Fe=z(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Me,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,P.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(P.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),ye(n.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)de(P.__webglFramebuffer[oe][le],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else de(P.__webglFramebuffer[oe],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let oe=0,le=j.length;oe<le;oe++){const xe=j[oe],ae=i.get(xe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ye(n.TEXTURE_2D,xe),de(P.__webglFramebuffer,b,xe,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(xe)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,H.__webglTexture),ye(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)de(P.__webglFramebuffer[le],b,g,n.COLOR_ATTACHMENT0,oe,le);else de(P.__webglFramebuffer,b,g,n.COLOR_ATTACHMENT0,oe,0);m(g)&&f(oe),t.unbindTexture()}b.depthBuffer&&He(b)}function I(b){const g=b.textures;for(let P=0,H=g.length;P<H;P++){const j=g[P];if(m(j)){const X=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(j).__webglTexture;t.bindTexture(X,ce),f(X),t.unbindTexture()}}}const We=[],C=[];function D(b){if(b.samples>0){if(Z(b)===!1){const g=b.textures,P=b.width,H=b.height;let j=n.COLOR_BUFFER_BIT;const X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(b),oe=g.length>1;if(oe)for(let le=0;le<g.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<g.length;le++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const xe=i.get(g[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,P,H,0,0,P,H,j,n.NEAREST),l===!0&&(We.length=0,C.length=0,We.push(n.COLOR_ATTACHMENT0+le),b.depthBuffer&&b.resolveDepthBuffer===!1&&(We.push(X),C.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let le=0;le<g.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const xe=i.get(g[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const g=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function z(b){return Math.min(s.maxSamples,b.samples)}function Z(b){const g=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function $(b){const g=o.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function te(b,g){const P=b.colorSpace,H=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==di&&P!==ni&&(Qe.getTransfer(P)===nt?(H!==Sn||j!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function he(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=ie,this.setTexture2DArray=re,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=Ne,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Z}function UM(n,e){function t(i,s=ni){let r;const o=Qe.getTransfer(s);if(i===ci)return n.UNSIGNED_BYTE;if(i===ud)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ng)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===eg)return n.BYTE;if(i===tg)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===cd)return n.INT;if(i===ms)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===Ms)return n.HALF_FLOAT;if(i===ig)return n.ALPHA;if(i===sg)return n.RGB;if(i===Sn)return n.RGBA;if(i===rg)return n.LUMINANCE;if(i===og)return n.LUMINANCE_ALPHA;if(i===us)return n.DEPTH_COMPONENT;if(i===_s)return n.DEPTH_STENCIL;if(i===ag)return n.RED;if(i===dd)return n.RED_INTEGER;if(i===lg)return n.RG;if(i===fd)return n.RG_INTEGER;if(i===pd)return n.RGBA_INTEGER;if(i===Bo||i===zo||i===Ho||i===ko)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pc||i===mc||i===gc||i===_c)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vc||i===xc||i===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vc||i===xc)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sc||i===yc||i===Ec||i===bc||i===Tc||i===Ac||i===wc||i===Cc||i===Rc||i===Pc||i===Lc||i===Dc||i===Ic||i===Uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ec)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ac)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ic)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vo||i===Nc||i===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Vo)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cg||i===Oc||i===Bc||i===zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class NM extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rn({vertexShader:OM,fragmentShader:BM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new nr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class HM extends zi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const x=new zM,m=t.getContextAttributes();let f=null,y=null;const S=[],A=[],F=new Le;let w=null;const R=new en;R.layers.enable(1),R.viewport=new St;const U=new en;U.layers.enable(2),U.viewport=new St;const E=[R,U],M=new NM;M.layers.enable(1),M.layers.enable(2);let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let de=S[se];return de===void 0&&(de=new fa,S[se]=de),de.getTargetRaySpace()},this.getControllerGrip=function(se){let de=S[se];return de===void 0&&(de=new fa,S[se]=de),de.getGripSpace()},this.getHand=function(se){let de=S[se];return de===void 0&&(de=new fa,S[se]=de),de.getHandSpace()};function V(se){const de=A.indexOf(se.inputSource);if(de===-1)return;const ve=S[de];ve!==void 0&&(ve.update(se.inputSource,se.frame,c||o),ve.dispatchEvent({type:se.type,data:se.inputSource}))}function ie(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",re);for(let se=0;se<S.length;se++){const de=A[se];de!==null&&(A[se]=null,S[se].disconnect(de))}L=null,N=null,x.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,y=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new On(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,ve=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?_s:us,ve=m.stencil?gs:ms);const He={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new On(d.textureWidth,d.textureHeight,{format:Sn,type:ci,depthTexture:new wd(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function re(se){for(let de=0;de<se.removed.length;de++){const ve=se.removed[de],pe=A.indexOf(ve);pe>=0&&(A[pe]=null,S[pe].disconnect(ve))}for(let de=0;de<se.added.length;de++){const ve=se.added[de];let pe=A.indexOf(ve);if(pe===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=A.length){A.push(ve),pe=Ne;break}else if(A[Ne]===null){A[Ne]=ve,pe=Ne;break}if(pe===-1)break}const He=S[pe];He&&He.connect(ve)}}const Q=new O,ne=new O;function Y(se,de,ve){Q.setFromMatrixPosition(de.matrixWorld),ne.setFromMatrixPosition(ve.matrixWorld);const pe=Q.distanceTo(ne),He=de.projectionMatrix.elements,Ne=ve.projectionMatrix.elements,ke=He[14]/(He[10]-1),I=He[14]/(He[10]+1),We=(He[9]+1)/He[5],C=(He[9]-1)/He[5],D=(He[8]-1)/He[0],z=(Ne[8]+1)/Ne[0],Z=ke*D,$=ke*z,te=pe/(-D+z),he=te*-D;de.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(he),se.translateZ(te),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const b=ke+te,g=I+te,P=Z-he,H=$+(pe-he),j=We*I/g*b,X=C*I/g*b;se.projectionMatrix.makePerspective(P,H,j,X,b,g),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function ge(se,de){de===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(de.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;x.texture!==null&&(se.near=x.depthNear,se.far=x.depthFar),M.near=U.near=R.near=se.near,M.far=U.far=R.far=se.far,(L!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,N=M.far,R.near=L,R.far=N,U.near=L,U.far=N,R.updateProjectionMatrix(),U.updateProjectionMatrix(),se.updateProjectionMatrix());const de=se.parent,ve=M.cameras;ge(M,de);for(let pe=0;pe<ve.length;pe++)ge(ve[pe],de);ve.length===2?Y(M,R,U):M.projectionMatrix.copy(R.projectionMatrix),Se(se,M,de)};function Se(se,de,ve){ve===null?se.matrix.copy(de.matrixWorld):(se.matrix.copy(ve.matrixWorld),se.matrix.invert(),se.matrix.multiply(de.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=qs*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ye=null;function De(se,de){if(u=de.getViewerPose(c||o),_=de,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let pe=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let Ne=0;Ne<ve.length;Ne++){const ke=ve[Ne];let I=null;if(p!==null)I=p.getViewport(ke);else{const C=h.getViewSubImage(d,ke);I=C.viewport,Ne===0&&(e.setRenderTargetTextures(y,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(y))}let We=E[Ne];We===void 0&&(We=new en,We.layers.enable(Ne),We.viewport=new St,E[Ne]=We),We.matrix.fromArray(ke.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ke.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(I.x,I.y,I.width,I.height),Ne===0&&(M.matrix.copy(We.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(We)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")){const Ne=h.getDepthInformation(ve[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(e,Ne,s.renderState)}}for(let ve=0;ve<S.length;ve++){const pe=A[ve],He=S[ve];pe!==null&&He!==void 0&&He.update(pe,de,c||o)}ye&&ye(se,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Ye=new Ad;Ye.setAnimationLoop(De),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}const Ti=new yn,kM=new rt;function VM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,bd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,S,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),S=y.envMap,A=y.envMapRotation;S&&(m.envMap.value=S,Ti.copy(A),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(kM.makeRotationFromEuler(Ti)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function GM(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const A=S.program;i.uniformBlockBinding(y,A)}function c(y,S){let A=s[y.id];A===void 0&&(_(y),A=u(y),s[y.id]=A,y.addEventListener("dispose",m));const F=S.program;i.updateUBOMapping(y,F);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function u(y){const S=h();y.__bindingPointIndex=S;const A=n.createBuffer(),F=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,F,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,A),A}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],A=y.uniforms,F=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,R=A.length;w<R;w++){const U=Array.isArray(A[w])?A[w]:[A[w]];for(let E=0,M=U.length;E<M;E++){const L=U[E];if(p(L,w,E,F)===!0){const N=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let ie=0;for(let re=0;re<V.length;re++){const Q=V[re],ne=x(Q);typeof Q=="number"||typeof Q=="boolean"?(L.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,N+ie,L.__data)):Q.isMatrix3?(L.__data[0]=Q.elements[0],L.__data[1]=Q.elements[1],L.__data[2]=Q.elements[2],L.__data[3]=0,L.__data[4]=Q.elements[3],L.__data[5]=Q.elements[4],L.__data[6]=Q.elements[5],L.__data[7]=0,L.__data[8]=Q.elements[6],L.__data[9]=Q.elements[7],L.__data[10]=Q.elements[8],L.__data[11]=0):(Q.toArray(L.__data,ie),ie+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,A,F){const w=y.value,R=S+"_"+A;if(F[R]===void 0)return typeof w=="number"||typeof w=="boolean"?F[R]=w:F[R]=w.clone(),!0;{const U=F[R];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return F[R]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function _(y){const S=y.uniforms;let A=0;const F=16;for(let R=0,U=S.length;R<U;R++){const E=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,L=E.length;M<L;M++){const N=E[M],V=Array.isArray(N.value)?N.value:[N.value];for(let ie=0,re=V.length;ie<re;ie++){const Q=V[ie],ne=x(Q),Y=A%F;Y!==0&&F-Y<ne.boundary&&(A+=F-Y),N.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=A,A+=ne.storage}}}const w=A%F;return w>0&&(A+=F-w),y.__size=A,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class WM{constructor(e={}){const{canvas:t=Og(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=oi,this.toneMappingExposure=1;const S=this;let A=!1,F=0,w=0,R=null,U=-1,E=null;const M=new St,L=new St;let N=null;const V=new je(0);let ie=0,re=t.width,Q=t.height,ne=1,Y=null,ge=null;const Se=new St(0,0,re,Q),ye=new St(0,0,re,Q);let De=!1;const Ye=new _l;let se=!1,de=!1;const ve=new rt,pe=new O,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ke(){return R===null?ne:1}let I=i;function We(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",ee,!1),I===null){const B="webgl2";if(I=We(B,T),I===null)throw We(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let C,D,z,Z,$,te,he,b,g,P,H,j,X,ce,oe,le,xe,ae,Me,Fe,Re,me,Oe,Ae;function qe(){C=new Qv(I),C.init(),me=new UM(I,C),D=new jv(I,C,e,me),z=new DM(I),Z=new tx(I),$=new vM,te=new IM(I,C,z,$,D,me,Z),he=new qv(S),b=new Zv(S),g=new l_(I),Oe=new Wv(I,g),P=new Jv(I,g,Z,Oe),H=new ix(I,P,g,Z),Me=new nx(I,D,te),le=new Yv($),j=new _M(S,he,b,C,D,Oe,le),X=new VM(S,$),ce=new MM,oe=new AM(C),ae=new Gv(S,he,b,z,H,d,l),xe=new LM(S,H,D),Ae=new GM(I,Z,D,z),Fe=new Xv(I,C,Z),Re=new ex(I,C,Z),Z.programs=j.programs,S.capabilities=D,S.extensions=C,S.properties=$,S.renderLists=ce,S.shadowMap=xe,S.state=z,S.info=Z}qe();const v=new HM(S,I);this.xr=v,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=C.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=C.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(T){T!==void 0&&(ne=T,this.setSize(re,Q,!1))},this.getSize=function(T){return T.set(re,Q)},this.setSize=function(T,B,q=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=T,Q=B,t.width=Math.floor(T*ne),t.height=Math.floor(B*ne),q===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(re*ne,Q*ne).floor()},this.setDrawingBufferSize=function(T,B,q){re=T,Q=B,ne=q,t.width=Math.floor(T*q),t.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(Se)},this.setViewport=function(T,B,q,K){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,B,q,K),z.viewport(M.copy(Se).multiplyScalar(ne).round())},this.getScissor=function(T){return T.copy(ye)},this.setScissor=function(T,B,q,K){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,B,q,K),z.scissor(L.copy(ye).multiplyScalar(ne).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(T){z.setScissorTest(De=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,B=!0,q=!0){let K=0;if(T){let k=!1;if(R!==null){const fe=R.texture.format;k=fe===pd||fe===fd||fe===dd}if(k){const fe=R.texture.type,Ee=fe===ci||fe===ms||fe===Qr||fe===gs||fe===ud||fe===hd,be=ae.getClearColor(),Te=ae.getClearAlpha(),Ie=be.r,Ue=be.g,Pe=be.b;Ee?(p[0]=Ie,p[1]=Ue,p[2]=Pe,p[3]=Te,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=Ie,_[1]=Ue,_[2]=Pe,_[3]=Te,I.clearBufferiv(I.COLOR,0,_))}else K|=I.COLOR_BUFFER_BIT}B&&(K|=I.DEPTH_BUFFER_BIT),q&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ce.dispose(),oe.dispose(),$.dispose(),he.dispose(),b.dispose(),H.dispose(),Oe.dispose(),Ae.dispose(),j.dispose(),v.dispose(),v.removeEventListener("sessionstart",dt),v.removeEventListener("sessionend",ft),Vt.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Z.autoReset,B=xe.enabled,q=xe.autoUpdate,K=xe.needsUpdate,k=xe.type;qe(),Z.autoReset=T,xe.enabled=B,xe.autoUpdate=q,xe.needsUpdate=K,xe.type=k}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const B=T.target;B.removeEventListener("dispose",ue),we(B)}function we(T){ze(T),$.remove(T)}function ze(T){const B=$.get(T).programs;B!==void 0&&(B.forEach(function(q){j.releaseProgram(q)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,K,k,fe){B===null&&(B=He);const Ee=k.isMesh&&k.matrixWorld.determinant()<0,be=Bd(T,B,q,K,k);z.setMaterial(K,Ee);let Te=q.index,Ie=1;if(K.wireframe===!0){if(Te=P.getWireframeAttribute(q),Te===void 0)return;Ie=2}const Ue=q.drawRange,Pe=q.attributes.position;let Ze=Ue.start*Ie,at=(Ue.start+Ue.count)*Ie;fe!==null&&(Ze=Math.max(Ze,fe.start*Ie),at=Math.min(at,(fe.start+fe.count)*Ie)),Te!==null?(Ze=Math.max(Ze,0),at=Math.min(at,Te.count)):Pe!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,Pe.count));const lt=at-Ze;if(lt<0||lt===1/0)return;Oe.setup(k,K,be,q,Te);let Wt,Je=Fe;if(Te!==null&&(Wt=g.get(Te),Je=Re,Je.setIndex(Wt)),k.isMesh)K.wireframe===!0?(z.setLineWidth(K.wireframeLinewidth*ke()),Je.setMode(I.LINES)):Je.setMode(I.TRIANGLES);else if(k.isLine){let Ce=K.linewidth;Ce===void 0&&(Ce=1),z.setLineWidth(Ce*ke()),k.isLineSegments?Je.setMode(I.LINES):k.isLineLoop?Je.setMode(I.LINE_LOOP):Je.setMode(I.LINE_STRIP)}else k.isPoints?Je.setMode(I.POINTS):k.isSprite&&Je.setMode(I.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?Je.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):Je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Je.renderInstances(Ze,lt,k.count);else if(q.isInstancedBufferGeometry){const Ce=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Dt=Math.min(q.instanceCount,Ce);Je.renderInstances(Ze,lt,Dt)}else Je.render(Ze,lt)};function ot(T,B,q){T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=Ht,T.needsUpdate=!0,sr(T,B,q),T.side=li,T.needsUpdate=!0,sr(T,B,q),T.side=xn):sr(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),m=oe.get(q),m.init(B),y.push(m),q.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==q&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const K=new Set;return T.traverse(function(k){const fe=k.material;if(fe)if(Array.isArray(fe))for(let Ee=0;Ee<fe.length;Ee++){const be=fe[Ee];ot(be,q,k),K.add(be)}else ot(fe,q,k),K.add(fe)}),y.pop(),m=null,K},this.compileAsync=function(T,B,q=null){const K=this.compile(T,B,q);return new Promise(k=>{function fe(){if(K.forEach(function(Ee){$.get(Ee).currentProgram.isReady()&&K.delete(Ee)}),K.size===0){k(T);return}setTimeout(fe,10)}C.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ht=null;function $e(T){ht&&ht(T)}function dt(){Vt.stop()}function ft(){Vt.start()}const Vt=new Ad;Vt.setAnimationLoop($e),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(T){ht=T,v.setAnimationLoop(T),T===null?Vt.stop():Vt.start()},v.addEventListener("sessionstart",dt),v.addEventListener("sessionend",ft),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(B),B=v.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,B,R),m=oe.get(T,y.length),m.init(B),y.push(m),ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ye.setFromProjectionMatrix(ve),de=this.localClippingEnabled,se=le.init(this.clippingPlanes,de),x=ce.get(T,f.length),x.init(),f.push(x),v.enabled===!0&&v.isPresenting===!0){const fe=S.xr.getDepthSensingMesh();fe!==null&&Gt(fe,B,-1/0,S.sortObjects)}Gt(T,B,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(Y,ge),Ne=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,Ne&&ae.addToRenderList(x,T),this.info.render.frame++,se===!0&&le.beginShadows();const q=m.state.shadowsArray;xe.render(q,T,B),se===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,k=x.transmissive;if(m.setupLights(),B.isArrayCamera){const fe=B.cameras;if(k.length>0)for(let Ee=0,be=fe.length;Ee<be;Ee++){const Te=fe[Ee];fi(K,k,T,Te)}Ne&&ae.render(T);for(let Ee=0,be=fe.length;Ee<be;Ee++){const Te=fe[Ee];Hn(x,T,Te,Te.viewport)}}else k.length>0&&fi(K,k,T,B),Ne&&ae.render(T),Hn(x,T,B);R!==null&&(te.updateMultisampleRenderTarget(R),te.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(S,T,B),Oe.resetDefaultState(),U=-1,E=null,y.pop(),y.length>0?(m=y[y.length-1],se===!0&&le.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Gt(T,B,q,K){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ye.intersectsSprite(T)){K&&pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const Ee=H.update(T),be=T.material;be.visible&&x.push(T,Ee,be,q,pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ye.intersectsObject(T))){const Ee=H.update(T),be=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pe.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),pe.copy(Ee.boundingSphere.center)),pe.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(be)){const Te=Ee.groups;for(let Ie=0,Ue=Te.length;Ie<Ue;Ie++){const Pe=Te[Ie],Ze=be[Pe.materialIndex];Ze&&Ze.visible&&x.push(T,Ee,Ze,q,pe.z,Pe)}}else be.visible&&x.push(T,Ee,be,q,pe.z,null)}}const fe=T.children;for(let Ee=0,be=fe.length;Ee<be;Ee++)Gt(fe[Ee],B,q,K)}function Hn(T,B,q,K){const k=T.opaque,fe=T.transmissive,Ee=T.transparent;m.setupLightsView(q),se===!0&&le.setGlobalState(S.clippingPlanes,q),K&&z.viewport(M.copy(K)),k.length>0&&pi(k,B,q),fe.length>0&&pi(fe,B,q),Ee.length>0&&pi(Ee,B,q),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function fi(T,B,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new On(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?Ms:ci,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const fe=m.state.transmissionRenderTarget[K.id],Ee=K.viewport||M;fe.setSize(Ee.z,Ee.w);const be=S.getRenderTarget();S.setRenderTarget(fe),S.getClearColor(V),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),Ne?ae.render(q):S.clear();const Te=S.toneMapping;S.toneMapping=oi;const Ie=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),se===!0&&le.setGlobalState(S.clippingPlanes,K),pi(T,q,K),te.updateMultisampleRenderTarget(fe),te.updateRenderTargetMipmap(fe),C.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Pe=0,Ze=B.length;Pe<Ze;Pe++){const at=B[Pe],lt=at.object,Wt=at.geometry,Je=at.material,Ce=at.group;if(Je.side===xn&&lt.layers.test(K.layers)){const Dt=Je.side;Je.side=Ht,Je.needsUpdate=!0,yl(lt,q,K,Wt,Je,Ce),Je.side=Dt,Je.needsUpdate=!0,Ue=!0}}Ue===!0&&(te.updateMultisampleRenderTarget(fe),te.updateRenderTargetMipmap(fe))}S.setRenderTarget(be),S.setClearColor(V,ie),Ie!==void 0&&(K.viewport=Ie),S.toneMapping=Te}function pi(T,B,q){const K=B.isScene===!0?B.overrideMaterial:null;for(let k=0,fe=T.length;k<fe;k++){const Ee=T[k],be=Ee.object,Te=Ee.geometry,Ie=K===null?Ee.material:K,Ue=Ee.group;be.layers.test(q.layers)&&yl(be,B,q,Te,Ie,Ue)}}function yl(T,B,q,K,k,fe){T.onBeforeRender(S,B,q,K,k,fe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(S,B,q,K,T,fe),k.transparent===!0&&k.side===xn&&k.forceSinglePass===!1?(k.side=Ht,k.needsUpdate=!0,S.renderBufferDirect(q,B,K,k,T,fe),k.side=li,k.needsUpdate=!0,S.renderBufferDirect(q,B,K,k,T,fe),k.side=xn):S.renderBufferDirect(q,B,K,k,T,fe),T.onAfterRender(S,B,q,K,k,fe)}function sr(T,B,q){B.isScene!==!0&&(B=He);const K=$.get(T),k=m.state.lights,fe=m.state.shadowsArray,Ee=k.state.version,be=j.getParameters(T,k.state,fe,B,q),Te=j.getProgramCacheKey(be);let Ie=K.programs;K.environment=T.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(T.isMeshStandardMaterial?b:he).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",ue),Ie=new Map,K.programs=Ie);let Ue=Ie.get(Te);if(Ue!==void 0){if(K.currentProgram===Ue&&K.lightsStateVersion===Ee)return bl(T,be),Ue}else be.uniforms=j.getUniforms(T),T.onBuild(q,be,S),T.onBeforeCompile(be,S),Ue=j.acquireProgram(be,Te),Ie.set(Te,Ue),K.uniforms=be.uniforms;const Pe=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=le.uniform),bl(T,be),K.needsLights=Hd(T),K.lightsStateVersion=Ee,K.needsLights&&(Pe.ambientLightColor.value=k.state.ambient,Pe.lightProbe.value=k.state.probe,Pe.directionalLights.value=k.state.directional,Pe.directionalLightShadows.value=k.state.directionalShadow,Pe.spotLights.value=k.state.spot,Pe.spotLightShadows.value=k.state.spotShadow,Pe.rectAreaLights.value=k.state.rectArea,Pe.ltc_1.value=k.state.rectAreaLTC1,Pe.ltc_2.value=k.state.rectAreaLTC2,Pe.pointLights.value=k.state.point,Pe.pointLightShadows.value=k.state.pointShadow,Pe.hemisphereLights.value=k.state.hemi,Pe.directionalShadowMap.value=k.state.directionalShadowMap,Pe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pe.spotShadowMap.value=k.state.spotShadowMap,Pe.spotLightMatrix.value=k.state.spotLightMatrix,Pe.spotLightMap.value=k.state.spotLightMap,Pe.pointShadowMap.value=k.state.pointShadowMap,Pe.pointShadowMatrix.value=k.state.pointShadowMatrix),K.currentProgram=Ue,K.uniformsList=null,Ue}function El(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Xr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function bl(T,B){const q=$.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Bd(T,B,q,K,k){B.isScene!==!0&&(B=He),te.resetTextureUnits();const fe=B.fog,Ee=K.isMeshStandardMaterial?B.environment:null,be=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:di,Te=(K.isMeshStandardMaterial?b:he).get(K.envMap||Ee),Ie=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ue=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Pe=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,at=!!q.morphAttributes.color;let lt=oi;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(lt=S.toneMapping);const Wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Je=Wt!==void 0?Wt.length:0,Ce=$.get(K),Dt=m.state.lights;if(se===!0&&(de===!0||T!==E)){const Kt=T===E&&K.id===U;le.setState(K,T,Kt)}let tt=!1;K.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Dt.state.version||Ce.outputColorSpace!==be||k.isBatchedMesh&&Ce.batching===!1||!k.isBatchedMesh&&Ce.batching===!0||k.isBatchedMesh&&Ce.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ce.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ce.instancing===!1||!k.isInstancedMesh&&Ce.instancing===!0||k.isSkinnedMesh&&Ce.skinning===!1||!k.isSkinnedMesh&&Ce.skinning===!0||k.isInstancedMesh&&Ce.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ce.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ce.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ce.instancingMorph===!1&&k.morphTexture!==null||Ce.envMap!==Te||K.fog===!0&&Ce.fog!==fe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==le.numPlanes||Ce.numIntersection!==le.numIntersection)||Ce.vertexAlphas!==Ie||Ce.vertexTangents!==Ue||Ce.morphTargets!==Pe||Ce.morphNormals!==Ze||Ce.morphColors!==at||Ce.toneMapping!==lt||Ce.morphTargetsCount!==Je)&&(tt=!0):(tt=!0,Ce.__version=K.version);let En=Ce.currentProgram;tt===!0&&(En=sr(K,B,k));let rr=!1,mi=!1,yo=!1;const xt=En.getUniforms(),kn=Ce.uniforms;if(z.useProgram(En.program)&&(rr=!0,mi=!0,yo=!0),K.id!==U&&(U=K.id,mi=!0),rr||E!==T){xt.setValue(I,"projectionMatrix",T.projectionMatrix),xt.setValue(I,"viewMatrix",T.matrixWorldInverse);const Kt=xt.map.cameraPosition;Kt!==void 0&&Kt.setValue(I,pe.setFromMatrixPosition(T.matrixWorld)),D.logarithmicDepthBuffer&&xt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,mi=!0,yo=!0)}if(k.isSkinnedMesh){xt.setOptional(I,k,"bindMatrix"),xt.setOptional(I,k,"bindMatrixInverse");const Kt=k.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),xt.setValue(I,"boneTexture",Kt.boneTexture,te))}k.isBatchedMesh&&(xt.setOptional(I,k,"batchingTexture"),xt.setValue(I,"batchingTexture",k._matricesTexture,te),xt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&xt.setValue(I,"batchingColorTexture",k._colorsTexture,te));const Eo=q.morphAttributes;if((Eo.position!==void 0||Eo.normal!==void 0||Eo.color!==void 0)&&Me.update(k,q,En),(mi||Ce.receiveShadow!==k.receiveShadow)&&(Ce.receiveShadow=k.receiveShadow,xt.setValue(I,"receiveShadow",k.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(kn.envMap.value=Te,kn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(kn.envMapIntensity.value=B.environmentIntensity),mi&&(xt.setValue(I,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&zd(kn,yo),fe&&K.fog===!0&&X.refreshFogUniforms(kn,fe),X.refreshMaterialUniforms(kn,K,ne,Q,m.state.transmissionRenderTarget[T.id]),Xr.upload(I,El(Ce),kn,te)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Xr.upload(I,El(Ce),kn,te),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xt.setValue(I,"center",k.center),xt.setValue(I,"modelViewMatrix",k.modelViewMatrix),xt.setValue(I,"normalMatrix",k.normalMatrix),xt.setValue(I,"modelMatrix",k.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Kt=K.uniformsGroups;for(let bo=0,kd=Kt.length;bo<kd;bo++){const Tl=Kt[bo];Ae.update(Tl,En),Ae.bind(Tl,En)}}return En}function zd(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Hd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,B,q){$.get(T.texture).__webglTexture=B,$.get(T.depthTexture).__webglTexture=q;const K=$.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const q=$.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){R=T,F=B,w=q;let K=!0,k=null,fe=!1,Ee=!1;if(T){const Te=$.get(T);Te.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(I.FRAMEBUFFER,null),K=!1):Te.__webglFramebuffer===void 0?te.setupRenderTarget(T):Te.__hasExternalTextures&&te.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);const Ue=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?k=Ue[B][q]:k=Ue[B],fe=!0):T.samples>0&&te.useMultisampledRTT(T)===!1?k=$.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[q]:k=Ue,M.copy(T.viewport),L.copy(T.scissor),N=T.scissorTest}else M.copy(Se).multiplyScalar(ne).floor(),L.copy(ye).multiplyScalar(ne).floor(),N=De;if(z.bindFramebuffer(I.FRAMEBUFFER,k)&&K&&z.drawBuffers(T,k),z.viewport(M),z.scissor(L),z.setScissorTest(N),fe){const Te=$.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,q)}else if(Ee){const Te=$.get(T.texture),Ie=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,q||0,Ie)}U=-1},this.readRenderTargetPixels=function(T,B,q,K,k,fe,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){z.bindFramebuffer(I.FRAMEBUFFER,be);try{const Te=T.texture,Ie=Te.format,Ue=Te.type;if(!D.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-K&&q>=0&&q<=T.height-k&&I.readPixels(B,q,K,k,me.convert(Ie),me.convert(Ue),fe)}finally{const Te=R!==null?$.get(R).__webglFramebuffer:null;z.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,K,k,fe,Ee){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){z.bindFramebuffer(I.FRAMEBUFFER,be);try{const Te=T.texture,Ie=Te.format,Ue=Te.type;if(!D.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-K&&q>=0&&q<=T.height-k){const Pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.bufferData(I.PIXEL_PACK_BUFFER,fe.byteLength,I.STREAM_READ),I.readPixels(B,q,K,k,me.convert(Ie),me.convert(Ue),0),I.flush();const Ze=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await Bg(I,Ze,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,fe)}finally{I.deleteBuffer(Pe),I.deleteSync(Ze)}return fe}}finally{const Te=R!==null?$.get(R).__webglFramebuffer:null;z.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,B=null,q=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const K=Math.pow(2,-q),k=Math.floor(T.image.width*K),fe=Math.floor(T.image.height*K),Ee=B!==null?B.x:0,be=B!==null?B.y:0;te.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,Ee,be,k,fe),z.unbindTexture()},this.copyTextureToTexture=function(T,B,q=null,K=null,k=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],B=arguments[2],k=arguments[3]||0,q=null);let fe,Ee,be,Te,Ie,Ue;q!==null?(fe=q.max.x-q.min.x,Ee=q.max.y-q.min.y,be=q.min.x,Te=q.min.y):(fe=T.image.width,Ee=T.image.height,be=0,Te=0),K!==null?(Ie=K.x,Ue=K.y):(Ie=0,Ue=0);const Pe=me.convert(B.format),Ze=me.convert(B.type);te.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const at=I.getParameter(I.UNPACK_ROW_LENGTH),lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Wt=I.getParameter(I.UNPACK_SKIP_PIXELS),Je=I.getParameter(I.UNPACK_SKIP_ROWS),Ce=I.getParameter(I.UNPACK_SKIP_IMAGES),Dt=T.isCompressedTexture?T.mipmaps[k]:T.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,be),I.pixelStorei(I.UNPACK_SKIP_ROWS,Te),T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,Ie,Ue,fe,Ee,Pe,Ze,Dt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,Ie,Ue,Dt.width,Dt.height,Pe,Dt.data):I.texSubImage2D(I.TEXTURE_2D,k,Ie,Ue,Pe,Ze,Dt),I.pixelStorei(I.UNPACK_ROW_LENGTH,at),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ce),k===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q=null,K=null,k=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,K=arguments[1]||null,T=arguments[2],B=arguments[3],k=arguments[4]||0);let fe,Ee,be,Te,Ie,Ue,Pe,Ze,at;const lt=T.isCompressedTexture?T.mipmaps[k]:T.image;q!==null?(fe=q.max.x-q.min.x,Ee=q.max.y-q.min.y,be=q.max.z-q.min.z,Te=q.min.x,Ie=q.min.y,Ue=q.min.z):(fe=lt.width,Ee=lt.height,be=lt.depth,Te=0,Ie=0,Ue=0),K!==null?(Pe=K.x,Ze=K.y,at=K.z):(Pe=0,Ze=0,at=0);const Wt=me.convert(B.format),Je=me.convert(B.type);let Ce;if(B.isData3DTexture)te.setTexture3D(B,0),Ce=I.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)te.setTexture2DArray(B,0),Ce=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Dt=I.getParameter(I.UNPACK_ROW_LENGTH),tt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),En=I.getParameter(I.UNPACK_SKIP_PIXELS),rr=I.getParameter(I.UNPACK_SKIP_ROWS),mi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ue),T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Ce,k,Pe,Ze,at,fe,Ee,be,Wt,Je,lt.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,k,Pe,Ze,at,fe,Ee,be,Wt,lt.data):I.texSubImage3D(Ce,k,Pe,Ze,at,fe,Ee,be,Wt,Je,lt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,En),I.pixelStorei(I.UNPACK_SKIP_ROWS,rr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,mi),k===0&&B.generateMipmaps&&I.generateMipmap(Ce),z.unbindTexture()},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&te.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?te.setTextureCube(T,0):T.isData3DTexture?te.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?te.setTexture2DArray(T,0):te.setTexture2D(T,0),z.unbindTexture()},this.resetState=function(){F=0,w=0,R=null,z.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fl?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===vo?"display-p3":"srgb"}}class XM extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ds extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const io=new O,so=new O,Lu=new rt,Ps=new er,Nr=new Js,pa=new O,Du=new O;class Ml extends yt{constructor(e=new Ot,t=new ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)io.fromBufferAttribute(t,s-1),so.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=io.distanceTo(so);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;Lu.copy(s).invert(),Ps.copy(e.ray).applyMatrix4(Lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const f=u.getX(x),y=u.getX(x+1),S=Fr(this,e,Ps,l,f,y);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),f=Fr(this,e,Ps,l,x,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const f=Fr(this,e,Ps,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){const x=Fr(this,e,Ps,l,_-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fr(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(io.fromBufferAttribute(o,s),so.fromBufferAttribute(o,r),t.distanceSqToSegment(io,so,pa,Du)>i)return;pa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(pa);if(!(l<e.near||l>e.far))return{distance:l,point:Du.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const Iu=new O,Uu=new O;class Nu extends Ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Iu.fromBufferAttribute(t,s),Uu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Iu.distanceTo(Uu);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ns extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fu=new rt,ka=new er,Or=new Js,Br=new O;class ma extends yt{constructor(e=new Ot,t=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;Fu.copy(s).invert(),ka.copy(e.ray).applyMatrix4(Fu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,x=p;_<x;_++){const m=c.getX(_);Br.fromBufferAttribute(h,m),Ou(Br,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,x=p;_<x;_++)Br.fromBufferAttribute(h,_),Ou(Br,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ou(n,e,t,i,s,r,o){const a=ka.distanceSqToPoint(n);if(a<t){const l=new O;ka.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class jM extends Lt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class So extends Ot{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new O,A=new O,F=new O;for(let w=0;w<t.length;w+=3)p(t[w+0],S),p(t[w+1],A),p(t[w+2],F),l(S,A,F,y)}function l(y,S,A,F){const w=F+1,R=[];for(let U=0;U<=w;U++){R[U]=[];const E=y.clone().lerp(A,U/w),M=S.clone().lerp(A,U/w),L=w-U;for(let N=0;N<=L;N++)N===0&&U===w?R[U][N]=E:R[U][N]=E.clone().lerp(M,N/L)}for(let U=0;U<w;U++)for(let E=0;E<2*(w-U)-1;E++){const M=Math.floor(E/2);E%2===0?(d(R[U][M+1]),d(R[U+1][M]),d(R[U][M])):(d(R[U][M+1]),d(R[U+1][M+1]),d(R[U+1][M]))}}function c(y){const S=new O;for(let A=0;A<r.length;A+=3)S.x=r[A+0],S.y=r[A+1],S.z=r[A+2],S.normalize().multiplyScalar(y),r[A+0]=S.x,r[A+1]=S.y,r[A+2]=S.z}function u(){const y=new O;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const A=m(y)/2/Math.PI+.5,F=f(y)/Math.PI+.5;o.push(A,1-F)}_(),h()}function h(){for(let y=0;y<o.length;y+=6){const S=o[y+0],A=o[y+2],F=o[y+4],w=Math.max(S,A,F),R=Math.min(S,A,F);w>.9&&R<.1&&(S<.2&&(o[y+0]+=1),A<.2&&(o[y+2]+=1),F<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,S){const A=y*3;S.x=e[A+0],S.y=e[A+1],S.z=e[A+2]}function _(){const y=new O,S=new O,A=new O,F=new O,w=new Le,R=new Le,U=new Le;for(let E=0,M=0;E<r.length;E+=9,M+=6){y.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),A.set(r[E+6],r[E+7],r[E+8]),w.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),U.set(o[M+4],o[M+5]),F.copy(y).add(S).add(A).divideScalar(3);const L=m(F);x(w,M+0,y,L),x(R,M+2,S,L),x(U,M+4,A,L)}}function x(y,S,A,F){F<0&&y.x===1&&(o[S]=y.x-1),A.x===0&&A.z===0&&(o[S]=F/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.vertices,e.indices,e.radius,e.details)}}class YM extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wi extends Bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ro={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qM{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const KM=new qM;class bs{constructor(e){this.manager=e!==void 0?e:KM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class $M extends Error{constructor(e,t){super(e),this.response=t}}class ZM extends bs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ro.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:i,onError:s});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Rn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let x=0;const m=new ReadableStream({start(f){y();function y(){h.read().then(({done:S,value:A})=>{if(S)f.close();else{x+=A.byteLength;const F=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let w=0,R=u.length;w<R;w++){const U=u[w];U.onProgress&&U.onProgress(F)}f.enqueue(A),y()}},S=>{f.error(S)})}}});return new Response(m)}else throw new $M(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{ro.add(e,c);const u=Rn[e];delete Rn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Rn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Rn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Id extends bs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ro.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ks("img");function l(){u(),ro.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class QM extends bs{constructor(e){super(e)}load(e,t,i,s){const r=new gl;r.colorSpace=un;const o=new Id(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class JM extends bs{constructor(e){super(e)}load(e,t,i,s){const r=new Lt,o=new Id(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Ud extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ga=new rt,Bu=new O,zu=new O;class eS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tS extends eS{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hu extends Ud{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new tS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nS extends Ud{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ku();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ku(){return(typeof performance>"u"?Date:performance).now()}const Vu=new rt;class iS{constructor(e,t,i=0,s=1/0){this.ray=new er(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vu),this}intersectObject(e,t=!0,i=[]){return Va(e,this,i,t),i.sort(Gu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Va(e[s],this,i,t);return i.sort(Gu),i}}function Gu(n,e){return n.distance-e.distance}function Va(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Va(r[o],e,t,!0)}}class Wu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);function sS(n){const e=n.clientWidth,t=n.clientHeight,i=new en(45,e/t,1,1e4);return i.position.set(480,12,700),i}function rS(){const n=new JM,e=new wi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/px.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/px.png"),displacementScale:2,displacementBias:-1}),t=new wi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/nx.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/nx.png"),displacementScale:2,displacementBias:-1}),i=new wi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/py.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/py.png"),displacementScale:2,displacementBias:-1}),s=new wi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/ny.png")}),r=new wi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/pz.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/pz.png"),displacementScale:2,displacementBias:-1}),o=new wi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/nz.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/nz.png"),displacementScale:2,displacementBias:-1});return[e,t,i,s,r,o]}function oS(){let e=new ys(1,1,1,50,50,50),t=new O;for(let r=0;r<e.attributes.position.count;r++)t.fromBufferAttribute(e.attributes.position,r),t.normalize().multiplyScalar(200),e.attributes.position.setXYZ(r,t.x,t.y,t.z);e.computeVertexNormals();const i=new rS,s=new bt(e,i);return s.material.generateMipmaps=!0,s.material.wrapS=In,s.material.wrapT=In,s.material.minFilter=s.material.magFilter=tn,s.geometry.computeVertexNormals(),s.castShadow=!0,s.traverse(function(r){r.isMesh&&(r.castShadow=!0)}),s.tick=r=>{},s}function aS(){const n=new XM,e=new QM().setPath("textures/space/8k_equi_cubemap/").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);return e.mapping=Oi,e.magFilter=zt,e.minFilter=zt,new je("white"),n.background=e,e.dispose(),n}const lS=()=>{const n=new nS("#c0bfad",.5),e=new Hu("#c0bfad",3),t=new Hu("#c0bfad",.5);e.castShadow=!0,e.position.set(1200,700,700),t.position.set(1200,500,700);var i=300;return e.shadow.camera.top=i,e.shadow.camera.bottom=-i,e.shadow.camera.left=i,e.shadow.camera.right=-i,e.shadow.mapSize.width=500,e.shadow.mapSize.height=500,e.shadow.camera.near=1350,e.shadow.camera.far=2200,{mainLight:e,softenerLightLower:t,ambientLight:n}},cS=/^[og]\s*(.+)?/,uS=/^mtllib /,hS=/^usemtl /,dS=/^usemap /,Xu=/\s+/,ju=new O,_a=new O,Yu=new O,qu=new O,Jt=new O,zr=new je;function fS(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;ju.fromArray(s,e),_a.fromArray(s,t),Yu.fromArray(s,i),Jt.subVectors(Yu,_a),qu.subVectors(ju,_a),Jt.cross(qu),Jt.normalize(),r.push(Jt.x,Jt.y,Jt.z),r.push(Jt.x,Jt.y,Jt.z),r.push(Jt.x,Jt.y,Jt.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),p=this.parseVertexIndex(i,u);if(this.addVertex(h,d,p),this.addColor(h,d,p),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),d=this.parseNormalIndex(l,_),p=this.parseNormalIndex(c,_),this.addNormal(h,d,p)}else this.addFaceNormal(h,d,p);if(s!==void 0&&s!==""){const _=this.uvs.length;h=this.parseUVIndex(s,_),d=this.parseUVIndex(r,_),p=this.parseUVIndex(o,_),this.addUV(h,d,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class Fd extends bs{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,o=new ZM(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new fS;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(Xu);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(zr.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(zr.r,zr.g,zr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const d=c.slice(1).trim().split(Xu),p=[];for(let x=0,m=d.length;x<m;x++){const f=d[x];if(f.length>0){const y=f.split("/");p.push(y)}}const _=p[0];for(let x=1,m=p.length-1;x<m;x++){const f=p[x],y=p[x+1];t.addFace(_[0],f[0],y[0],_[1],f[1],y[1],_[2],f[2],y[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let d=[];const p=[];if(c.indexOf("/")===-1)d=h;else for(let _=0,x=h.length;_<x;_++){const m=h[_].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(d,p)}else if(u==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=cS.exec(c))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(hS.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(uS.test(c))t.materialLibraries.push(c.substring(7).trim());else if(dS.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Us;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,d=u.type==="Line",p=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const x=new Ot;x.setAttribute("position",new mt(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new mt(u.normals,3)),u.colors.length>0&&(_=!0,x.setAttribute("color",new mt(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new mt(u.uvs,2));const m=[];for(let y=0,S=h.length;y<S;y++){const A=h[y],F=A.name+"_"+A.smooth+"_"+_;let w=t.materials[F];if(this.materials!==null){if(w=this.materials.create(A.name),d&&w&&!(w instanceof ds)){const R=new ds;Bn.prototype.copy.call(R,w),R.color.copy(w.color),w=R}else if(p&&w&&!(w instanceof Ns)){const R=new Ns({size:10,sizeAttenuation:!1});Bn.prototype.copy.call(R,w),R.color.copy(w.color),R.map=w.map,w=R}}w===void 0&&(d?w=new ds:p?w=new Ns({size:1,sizeAttenuation:!1}):w=new wi,w.name=A.name,w.flatShading=!A.smooth,w.vertexColors=_,t.materials[F]=w),m.push(w)}let f;if(m.length>1){for(let y=0,S=h.length;y<S;y++){const A=h[y];x.addGroup(A.groupStart,A.groupCount,y)}d?f=new Nu(x,m):p?f=new ma(x,m):f=new bt(x,m)}else d?f=new Nu(x,m[0]):p?f=new ma(x,m[0]):f=new bt(x,m[0]);f.name=c.name,r.add(f)}else if(t.vertices.length>0){const a=new Ns({size:1,sizeAttenuation:!1}),l=new Ot;l.setAttribute("position",new mt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new mt(t.colors,3)),a.vertexColors=!0);const c=new ma(l,a);r.add(c)}return r}}function pS(){const n=new Fd;return new Promise((e,t)=>{n.load("models/g_phobos_287m.obj",i=>{e(i)},i=>{console.log(i.loaded/i.total*100+"% loaded")},i=>{t(new Error("An error happened during loading the model."))})})}function mS(){const n=new Fd;return new Promise((e,t)=>{n.load("models/g_deimos_162m.obj",i=>{e(i)},i=>{console.log(i.loaded/i.total*100+"% loaded")},i=>{t(new Error("An error happened during loading the model."))})})}async function gS(){try{let p=function(_){const x=new Float32Array(_.length*3);for(let y=0;y<_.length;y++)x[y*3]=_[y].x,x[y*3+1]=_[y].y,x[y*3+2]=_[y].z;const m=new Ot;return m.setAttribute("position",new pn(x,3)),new Ml(m,d)};var n=p;const e=await pS(),t=await mS();e.receiveShadow=!0,e.color="white",e.traverse(function(_){_.isMesh&&(_.receiveShadow=!0)});const i=400,s=1200;let r=2*Math.PI/2500,o=2*Math.PI/5e3,a=0,l=400;const c=[],u=[],h=499,d=new ds({color:16777215});return e.tick=_=>{a-=r,l-=o,e.position.x=i*Math.cos(a),e.position.z=i*Math.sin(a),t.position.x=s*Math.cos(l),t.position.z=s*Math.sin(l),c.push(e.position.clone()),u.push(t.position.clone()),c.length>h&&c.shift(),u.length>h&&u.shift();const x=_.getObjectByName("phobosTrail"),m=_.getObjectByName("deimosTrail");x&&(_.remove(x),x.geometry.dispose(),x.material.dispose()),m&&(_.remove(m),m.geometry.dispose(),m.material.dispose());const f=p(c);f.name="phobosTrail",_.add(f);const y=p(u);y.name="deimosTrail",_.add(y)},[e,t]}catch(e){console.error(e)}}const _S={literature:[{id:2,body:"Mars",placeName:"Underhill",media:"The Mars Trilogy",creator:"Kim Stanley Robinson",fictionalYear:2026,realYear:1992,description:"Underhill was the landing site for the first wave of colonists from Earth in Kim Stanley Robinson’s Red Mars. Dug 10m deep, Underhill was built entirely underground to shield it from the radiation piercing Mars’ sparse magnetosphere. The burrow featured a vaulted ceiling made from homebrew Martian bricks, bamboo for interstitial flooring, and structural elements cast in magnesium alloy extracted from the regolith of the surrounding landscape.",region:"Xanthe",photoFile:"/src/World/assets/modal_images/underhill.png",lat:8.05,lon:-43.9,jewelColor:"red"},{id:3,body:"Mars",placeName:"Home of Valentine M. Smith",media:"Stranger in a Strange Land",creator:"Robert A. Heinlein",fictionalYear:"Late 20th Century",realYear:1961,description:"Smith's real areographical origin isn't described exactly at any point in the novel, but Elysium Mons seems fitting given Heinlein's vision of an idyllic Martian society.",region:"Elysium Mons",photoFile:"/src/World/assets/modal_images/underhill.png",lat:24.5,lon:122.1,jewelColor:"blue"},{id:5,body:"Mars",placeName:"Hamdramit",media:"Out of the Silent Planet",creator:"C.S. Lewis",fictionalYear:"Unknown",realYear:1938,description:"",region:"Valles Marineris",photoFile:"/src/World/assets/modal_images/underhill.png",lat:-8.75,lon:-16.8,jewelColor:"pink"},{id:6,body:"Mars",placeName:"TESTING",media:"TESTING",creator:"TESTING",fictionalYear:"TESTING",realYear:2e3,description:"TESTING",region:"TESTING",photoFile:"/src/World/assets/modal_images/underhill.png",lat:0,lon:0,jewelColor:"pink"}],filmAndTV:[{id:1,body:"Mars",placeName:"The Hab",media:"The Martian",creator:"Andy Weir",fictionalYear:2035,realYear:2011,description:"A temporarily muscular botanist and ex-MIT mathematics prodigy loses religion in the dusty wastes of the red planet. Somehow not the worst thing that Andy Weir has written.",region:"Acidalia Planitia",photoFile:"/src/World/assets/modal_images/underhill.png",lat:31.12,lon:28.5-90,jewelColor:"white"},{id:4,body:"Mars",placeName:"Bowie Base One",media:"Doctor Who",creator:"Russell T. Davies & Phil Ford",fictionalYear:"2059",realYear:2009,description:"",region:"Gusev Crater",photoFile:"/src/World/assets/modal_images/underhill.png",lat:5.5,lon:176,jewelColor:"black"}],reality:[]},Ku={placeData:_S};class vS extends bt{constructor(e){super(),this.data=e;const t=Math.tan(Math.PI/6),i=Math.cos(Math.PI/6),s=[2,1,2,1,3,0,3,2,0,2,4,1,1,4,3,3,4,2],r=[0,1,0,1,0,t,-1,0,t,0,0,-i,0,-1,0];this.jewelGeometry=new So(r,s,1.6,0),this.jewelMaterial=new tr({fog:!0,wireframe:!1,color:e.jewelColor,reflectivity:20}),this.jewelMesh=new bt(this.jewelGeometry,this.jewelMaterial),this.jewelActive=!1,this.jewelSize=0}}class $u{constructor(e,t,i,s){this.placeType=e,this.dataList=t,this.celestialBody=s,this.isActive=i,this.path="/src/World/assets/places/photos/"}createAll(){this.setActive(),this.assignPlaceData(),this.placeData.forEach(this.findPosition),this.placeData.forEach(this.createPins)}getType(){return this.placeType}getPinsData(){return this.placeData}setActive(e){this.isActive=e}assignPlaceData(){if(this.dataList.placeData[this.placeType])this.placeData=this.dataList.placeData[this.placeType];else throw new Error(`Type "${this.placeType}" not in placeData`)}findPosition(e){switch(e.body){case"Mars":var t=200,i=(90-e.lat)*Math.PI/180,s=(180+e.lon)*Math.PI/180;Object.defineProperties(e,{x:{value:t*Math.sin(i)*Math.cos(s),writable:!0},y:{value:t*Math.cos(i),writable:!0},z:{value:t*Math.sin(i)*Math.sin(s),writable:!0}})}}createPins(e){const t=new O(e.x,e.y,e.z),i=t.clone().normalize(),s=20,r=1,o=t.clone().add(i.multiplyScalar(s)),a=t.clone().add(i.multiplyScalar(r)),l=[];l.push(t),l.push(o);const c=new Ot().setFromPoints(l),u=new ds({color:"#7FFFFF"}),h=new Ml(c,u),d=Math.tan(Math.PI/6),p=Math.cos(Math.PI/6),_=[0,1,0,1,0,d,-1,0,d,0,0,-p,0,-1,0],x=[2,1,2,1,3,0,3,2,0,2,4,1,1,4,3,3,4,2],m=new So(_,x,2,0),f=new tr({wireframe:!0,color:"#7FFFFF"}),y=new bt(m,f);y.position.copy(a),y.lookAt(new O(0,0,0)),Object.defineProperty(y,"data",{value:e});const S=new vS(e).jewelMesh;S.position.copy(a),S.lookAt(new O(0,0,0)),Object.defineProperty(e,"mesh",{value:h}),Object.defineProperty(e,"diamondMesh",{value:y}),Object.defineProperty(e,"jewelMesh",{value:S})}}function xS(){const n=new WM({antialias:!0,logarithmicDepthBuffer:!0,toneMapping:dl});return n.shadowMap.enabled=!0,n.shadowMap.type=nd,n}const Zu=(n,e,t,i)=>{e.aspect=n.clientWidth/n.clientHeight,e.updateProjectionMatrix(),t.setSize(n.clientWidth,n.clientHeight),t.setPixelRatio(window.devicePixelRatio)};class MS{constructor(e,t,i,s){Zu(e,t,i),window.addEventListener("resize",()=>{Zu(e,t,i)})}}const SS=new Nd;class yS{constructor(e,t,i,s){this.camera=e,this.scene=t,this.renderer=i,this.composer=s,this.updatables=[]}start(){this.renderer.setAnimationLoop(()=>{this.renderer.render(this.scene,this.camera),this.composer.render(),this.tick()})}stop(){this.renderer.render(null)}tick(){const e=SS.getDelta();for(const t of this.updatables)t.tick(e)}}const Qu={type:"change"},va={type:"start"},Ju={type:"end"},Hr=new er,eh=new ti,ES=Math.cos(70*Fg.DEG2RAD);class bS extends zi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",le),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Qu),i.update(),r=s.NONE},this.update=function(){const v=new O,J=new Bi().setFromUnitVectors(e.up,new O(0,1,0)),W=J.clone().invert(),ee=new O,ue=new Bi,we=new O,ze=2*Math.PI;return function(ht=null){const $e=i.object.position;v.copy($e).sub(i.target),v.applyQuaternion(J),a.setFromVector3(v),i.autoRotate&&r===s.NONE&&N(M(ht)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let dt=i.minAzimuthAngle,ft=i.maxAzimuthAngle;isFinite(dt)&&isFinite(ft)&&(dt<-Math.PI?dt+=ze:dt>Math.PI&&(dt-=ze),ft<-Math.PI?ft+=ze:ft>Math.PI&&(ft-=ze),dt<=ft?a.theta=Math.max(dt,Math.min(ft,a.theta)):a.theta=a.theta>(dt+ft)/2?Math.max(dt,a.theta):Math.min(ft,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Vt=!1;if(i.zoomToCursor&&w||i.object.isOrthographicCamera)a.radius=Se(a.radius);else{const Gt=a.radius;a.radius=Se(a.radius*c),Vt=Gt!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(W),$e.copy(i.target).add(v),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&w){let Gt=null;if(i.object.isPerspectiveCamera){const Hn=v.length();Gt=Se(Hn*c);const fi=Hn-Gt;i.object.position.addScaledVector(A,fi),i.object.updateMatrixWorld(),Vt=!!fi}else if(i.object.isOrthographicCamera){const Hn=new O(F.x,F.y,0);Hn.unproject(i.object);const fi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Vt=fi!==i.object.zoom;const pi=new O(F.x,F.y,0);pi.unproject(i.object),i.object.position.sub(pi).add(Hn),i.object.updateMatrixWorld(),Gt=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Gt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Gt).add(i.object.position):(Hr.origin.copy(i.object.position),Hr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Hr.direction))<ES?e.lookAt(i.target):(eh.setFromNormalAndCoplanarPoint(i.object.up,i.target),Hr.intersectPlane(eh,i.target))))}else if(i.object.isOrthographicCamera){const Gt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Gt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Vt=!0)}return c=1,w=!1,Vt||ee.distanceToSquared(i.object.position)>o||8*(1-ue.dot(i.object.quaternion))>o||we.distanceToSquared(i.target)>o?(i.dispatchEvent(Qu),ee.copy(i.object.position),ue.copy(i.object.quaternion),we.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Me),i.domElement.removeEventListener("pointerdown",he),i.domElement.removeEventListener("pointercancel",g),i.domElement.removeEventListener("wheel",j),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",g),i.domElement.getRootNode().removeEventListener("keydown",ce,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",le),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Wu,l=new Wu;let c=1;const u=new O,h=new Le,d=new Le,p=new Le,_=new Le,x=new Le,m=new Le,f=new Le,y=new Le,S=new Le,A=new O,F=new Le;let w=!1;const R=[],U={};let E=!1;function M(v){return v!==null?2*Math.PI/60*i.autoRotateSpeed*v:2*Math.PI/60/60*i.autoRotateSpeed}function L(v){const J=Math.abs(v*.01);return Math.pow(.95,i.zoomSpeed*J)}function N(v){l.theta-=v}function V(v){l.phi-=v}const ie=function(){const v=new O;return function(W,ee){v.setFromMatrixColumn(ee,0),v.multiplyScalar(-W),u.add(v)}}(),re=function(){const v=new O;return function(W,ee){i.screenSpacePanning===!0?v.setFromMatrixColumn(ee,1):(v.setFromMatrixColumn(ee,0),v.crossVectors(i.object.up,v)),v.multiplyScalar(W),u.add(v)}}(),Q=function(){const v=new O;return function(W,ee){const ue=i.domElement;if(i.object.isPerspectiveCamera){const we=i.object.position;v.copy(we).sub(i.target);let ze=v.length();ze*=Math.tan(i.object.fov/2*Math.PI/180),ie(2*W*ze/ue.clientHeight,i.object.matrix),re(2*ee*ze/ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ie(W*(i.object.right-i.object.left)/i.object.zoom/ue.clientWidth,i.object.matrix),re(ee*(i.object.top-i.object.bottom)/i.object.zoom/ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ge(v,J){if(!i.zoomToCursor)return;w=!0;const W=i.domElement.getBoundingClientRect(),ee=v-W.left,ue=J-W.top,we=W.width,ze=W.height;F.x=ee/we*2-1,F.y=-(ue/ze)*2+1,A.set(F.x,F.y,1).unproject(i.object).sub(i.object.position).normalize()}function Se(v){return Math.max(i.minDistance,Math.min(i.maxDistance,v))}function ye(v){h.set(v.clientX,v.clientY)}function De(v){ge(v.clientX,v.clientX),f.set(v.clientX,v.clientY)}function Ye(v){_.set(v.clientX,v.clientY)}function se(v){d.set(v.clientX,v.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;N(2*Math.PI*p.x/J.clientHeight),V(2*Math.PI*p.y/J.clientHeight),h.copy(d),i.update()}function de(v){y.set(v.clientX,v.clientY),S.subVectors(y,f),S.y>0?ne(L(S.y)):S.y<0&&Y(L(S.y)),f.copy(y),i.update()}function ve(v){x.set(v.clientX,v.clientY),m.subVectors(x,_).multiplyScalar(i.panSpeed),Q(m.x,m.y),_.copy(x),i.update()}function pe(v){ge(v.clientX,v.clientY),v.deltaY<0?Y(L(v.deltaY)):v.deltaY>0&&ne(L(v.deltaY)),i.update()}function He(v){let J=!1;switch(v.code){case i.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(-i.keyPanSpeed,0),J=!0;break}J&&(v.preventDefault(),i.update())}function Ne(v){if(R.length===1)h.set(v.pageX,v.pageY);else{const J=Ae(v),W=.5*(v.pageX+J.x),ee=.5*(v.pageY+J.y);h.set(W,ee)}}function ke(v){if(R.length===1)_.set(v.pageX,v.pageY);else{const J=Ae(v),W=.5*(v.pageX+J.x),ee=.5*(v.pageY+J.y);_.set(W,ee)}}function I(v){const J=Ae(v),W=v.pageX-J.x,ee=v.pageY-J.y,ue=Math.sqrt(W*W+ee*ee);f.set(0,ue)}function We(v){i.enableZoom&&I(v),i.enablePan&&ke(v)}function C(v){i.enableZoom&&I(v),i.enableRotate&&Ne(v)}function D(v){if(R.length==1)d.set(v.pageX,v.pageY);else{const W=Ae(v),ee=.5*(v.pageX+W.x),ue=.5*(v.pageY+W.y);d.set(ee,ue)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;N(2*Math.PI*p.x/J.clientHeight),V(2*Math.PI*p.y/J.clientHeight),h.copy(d)}function z(v){if(R.length===1)x.set(v.pageX,v.pageY);else{const J=Ae(v),W=.5*(v.pageX+J.x),ee=.5*(v.pageY+J.y);x.set(W,ee)}m.subVectors(x,_).multiplyScalar(i.panSpeed),Q(m.x,m.y),_.copy(x)}function Z(v){const J=Ae(v),W=v.pageX-J.x,ee=v.pageY-J.y,ue=Math.sqrt(W*W+ee*ee);y.set(0,ue),S.set(0,Math.pow(y.y/f.y,i.zoomSpeed)),ne(S.y),f.copy(y);const we=(v.pageX+J.x)*.5,ze=(v.pageY+J.y)*.5;ge(we,ze)}function $(v){i.enableZoom&&Z(v),i.enablePan&&z(v)}function te(v){i.enableZoom&&Z(v),i.enableRotate&&D(v)}function he(v){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(v.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",g)),!me(v)&&(Fe(v),v.pointerType==="touch"?xe(v):P(v)))}function b(v){i.enabled!==!1&&(v.pointerType==="touch"?ae(v):H(v))}function g(v){switch(Re(v),R.length){case 0:i.domElement.releasePointerCapture(v.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",g),i.dispatchEvent(Ju),r=s.NONE;break;case 1:const J=R[0],W=U[J];xe({pointerId:J,pageX:W.x,pageY:W.y});break}}function P(v){let J;switch(v.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Hi.DOLLY:if(i.enableZoom===!1)return;De(v),r=s.DOLLY;break;case Hi.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enablePan===!1)return;Ye(v),r=s.PAN}else{if(i.enableRotate===!1)return;ye(v),r=s.ROTATE}break;case Hi.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enableRotate===!1)return;ye(v),r=s.ROTATE}else{if(i.enablePan===!1)return;Ye(v),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(va)}function H(v){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;se(v);break;case s.DOLLY:if(i.enableZoom===!1)return;de(v);break;case s.PAN:if(i.enablePan===!1)return;ve(v);break}}function j(v){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(v.preventDefault(),i.dispatchEvent(va),pe(X(v)),i.dispatchEvent(Ju))}function X(v){const J=v.deltaMode,W={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(J){case 1:W.deltaY*=16;break;case 2:W.deltaY*=100;break}return v.ctrlKey&&!E&&(W.deltaY*=10),W}function ce(v){v.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(v){v.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function le(v){i.enabled===!1||i.enablePan===!1||He(v)}function xe(v){switch(Oe(v),R.length){case 1:switch(i.touches.ONE){case ki.ROTATE:if(i.enableRotate===!1)return;Ne(v),r=s.TOUCH_ROTATE;break;case ki.PAN:if(i.enablePan===!1)return;ke(v),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case ki.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;We(v),r=s.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;C(v),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(va)}function ae(v){switch(Oe(v),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;D(v),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;z(v),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;$(v),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(v),i.update();break;default:r=s.NONE}}function Me(v){i.enabled!==!1&&v.preventDefault()}function Fe(v){R.push(v.pointerId)}function Re(v){delete U[v.pointerId];for(let J=0;J<R.length;J++)if(R[J]==v.pointerId){R.splice(J,1);return}}function me(v){for(let J=0;J<R.length;J++)if(R[J]==v.pointerId)return!0;return!1}function Oe(v){let J=U[v.pointerId];J===void 0&&(J=new Le,U[v.pointerId]=J),J.set(v.pageX,v.pageY)}function Ae(v){const J=v.pointerId===R[0]?R[1]:R[0];return U[J]}i.domElement.addEventListener("contextmenu",Me),i.domElement.addEventListener("pointerdown",he),i.domElement.addEventListener("pointercancel",g),i.domElement.addEventListener("wheel",j,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}function TS(n,e){const t=new bS(n,e);return t.enableDamping=!0,t.minDistance=430,t.maxDistance=2600,t}const Od={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ir{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const AS=new vl(-1,1,1,-1,0,1);class wS extends Ot{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}const CS=new wS;class Sl{constructor(e){this._mesh=new bt(CS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,AS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class RS extends ir{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xo.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Sl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class th extends ir{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class PS extends ir{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class LS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Le);this._width=i.width,this._height=i.height,t=new On(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ms}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new RS(Od),this.copyPass.material.blending=Fn,this.clock=new Nd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}th!==void 0&&(o instanceof th?i=!0:o instanceof PS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const DS={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class IS extends ir{constructor(){super();const e=DS;this.uniforms=xo.clone(e.uniforms),this.material=new YM({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Sl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===id?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===od?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ad&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class US extends ir{constructor(e,t,i,s){super(),this.scene=e,this.camera=t,this.sampleLevel=4,this.unbiased=!0,this.clearColor=i!==void 0?i:0,this.clearAlpha=s!==void 0?s:0,this._oldClearColor=new je;const r=Od;this.copyUniforms=xo.clone(r.uniforms),this.copyMaterial=new rn({uniforms:this.copyUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:Ia}),this.fsQuad=new Sl(this.copyMaterial)}dispose(){this.sampleRenderTarget&&(this.sampleRenderTarget.dispose(),this.sampleRenderTarget=null),this.copyMaterial.dispose(),this.fsQuad.dispose()}setSize(e,t){this.sampleRenderTarget&&this.sampleRenderTarget.setSize(e,t)}render(e,t,i){this.sampleRenderTarget||(this.sampleRenderTarget=new On(i.width,i.height,{type:Ms}),this.sampleRenderTarget.texture.name="SSAARenderPass.sample");const s=NS[Math.max(0,Math.min(this.sampleLevel,5))],r=e.autoClear;e.autoClear=!1,e.getClearColor(this._oldClearColor);const o=e.getClearAlpha(),a=1/s.length,l=1/32;this.copyUniforms.tDiffuse.value=this.sampleRenderTarget.texture;const c={fullWidth:i.width,fullHeight:i.height,offsetX:0,offsetY:0,width:i.width,height:i.height},u=Object.assign({},this.camera.view);u.enabled&&Object.assign(c,u);for(let h=0;h<s.length;h++){const d=s[h];this.camera.setViewOffset&&this.camera.setViewOffset(c.fullWidth,c.fullHeight,c.offsetX+d[0]*.0625,c.offsetY+d[1]*.0625,c.width,c.height);let p=a;if(this.unbiased){const _=-.5+(h+.5)/s.length;p+=l*_}this.copyUniforms.opacity.value=p,e.setClearColor(this.clearColor,this.clearAlpha),e.setRenderTarget(this.sampleRenderTarget),e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(this.renderToScreen?null:t),h===0&&(e.setClearColor(0,0),e.clear()),this.fsQuad.render(e)}this.camera.setViewOffset&&u.enabled?this.camera.setViewOffset(u.fullWidth,u.fullHeight,u.offsetX,u.offsetY,u.width,u.height):this.camera.clearViewOffset&&this.camera.clearViewOffset(),e.autoClear=r,e.setClearColor(this._oldClearColor,o)}}const NS=[[[0,0]],[[4,4],[-4,-4]],[[-2,-6],[6,-2],[-6,2],[2,6]],[[1,-3],[-1,3],[5,1],[-3,-5],[-5,5],[-7,-1],[3,7],[7,-7]],[[1,1],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]],[[-4,-7],[-7,-5],[-3,-5],[-5,-4],[-1,-4],[-2,-2],[-6,-1],[-4,0],[-7,1],[-1,2],[-6,3],[-3,3],[-7,6],[-3,6],[-5,7],[-1,7],[5,-7],[1,-6],[6,-5],[4,-4],[2,-3],[7,-2],[1,-1],[4,-1],[2,1],[6,2],[0,4],[4,4],[2,5],[7,5],[5,6],[3,7]]];let Ls;class FS{constructor(e){this.camera=sS(e),this.background=aS(),this.raycaster=new iS,this.mouse=new Le,this.hoveredObject=null,this.mars=oS(),this.renderer=xS(),e.append(this.renderer.domElement),this.background.add(this.mars);const{mainLight:t,softenerLightLower:i,ambientLight:s}=lS();this.mainLight=t,this.background.add(t,i,s),TS(this.camera,e),new MS(e,this.camera,this.renderer,this.composer),this.composer=new LS(this.renderer),this.composer.setPixelRatio(1),this.ssaaPass=new US(this.background,this.camera),this.outputPass=new IS,Ls=new yS(this.camera,this.background,this.renderer,this.composer),Ls.updatables.push(this.mars),this.loadAddMoons(),e.addEventListener("mousemove",this.onMouseMove.bind(this),!1),e.addEventListener("click",this.onClick.bind(this),!1)}async loadAddMoons(){try{const[e,t]=await gS();this.phobos=e,this.background.add(this.phobos),this.background.add(t),Ls.updatables.push({tick:()=>e.tick(this.background)})}catch(e){console.error("Error loading moons:",e)}}start(){Ls.start()}stop(){Ls.stop()}createAllMarkers(){var e=new $u("literature",Ku,!0,"Mars");e.createAll();let t=e.getPinsData();var i=new $u("filmAndTV",Ku,!0,"Mars");i.createAll();let s=i.getPinsData();for(let r=0;r<t.length;r++)this.mars.add(t[r].mesh),this.mars.add(t[r].diamondMesh),this.mars.add(t[r].jewelMesh);for(let r=0;r<s.length;r++)this.mars.add(s[r].mesh),this.mars.add(s[r].diamondMesh),this.mars.add(s[r].jewelMesh)}createModal(e){this.modal&&(this.background.remove(this.modal),this.modal.geometry.dispose(),this.modal.material.map.dispose(),this.modal.material.dispose());const t=document.createElement("canvas"),i=t.getContext("2d");t.width=300,t.height=500,i.fillStyle="rgba(127, 255, 255, 0.1)",i.fillRect(0,0,t.width,t.height),i.strokeStyle="#00FFFF",i.lineWidth=5,i.strokeRect(0,0,t.width,t.height),i.fillStyle="#FFFFFF",i.font="bold 20px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(e.placeName,t.width/2,25),i.font="bold 16px Arial",i.textAlign="left",i.textBaseline="top",i.shadowColor="rgba(0, 0, 0, 0)";const s=[`Media: ${e.media}`,`Creator: ${e.creator}`,`Year Set: ${e.fictionalYear}`,`Year Published: ${e.realYear}`,`Region: ${e.region}`],r=e.description;s.forEach((x,m)=>{i.fillText(x,20,60+m*25)}),i.fillStyle="#CCCCCC",i.font="italic 16px Arial",i.textAlign="left",i.textBaseline="top";const o=t.width-40,a=20;let l=20,c=60+s.length*25+10;const u=r.split(" ");let h="";for(let x=0;x<u.length;x++){const m=h+u[x]+" ";i.measureText(m).width>o&&x>0?(i.fillText(h,l,c),h=u[x]+" ",c+=a):h=m}i.fillText(h,l,c);const d=new jM(t),p=new nr(45,85),_=new tr({map:d,transparent:!0,side:xn});this.modal=new bt(p,_),this.modal.isModal=!0,this.background.add(this.modal)}onMouseMove(e){e.preventDefault();const t=e.target.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const i=this.raycaster.intersectObjects(this.background.children,!0);if(i.length>0){const s=i[0].object;if(s.isModal)return;this.hoveredObject!==s&&(this.hoveredObject&&this.hoveredObject.material&&this.hoveredObject.material.color&&!this.hoveredObject.isLine&&(this.hoveredObject.material.color.set(this.hoveredObject.originalColor),this.hoveredObject.material.wireframe=!0),this.hoveredObject=s,s.material&&s.material.color&&!this.hoveredObject.isLine&&(this.hoveredObject.originalColor=s.material.color.getHex(),this.hoveredObject.material.color.set("gold"),this.hoveredObject.material.wireframe=!1))}else this.hoveredObject&&(this.hoveredObject.material&&this.hoveredObject.material.color&&!this.hoveredObject.isLine&&(this.hoveredObject.material.color.set(this.hoveredObject.originalColor),this.hoveredObject.material.wireframe=!0),this.hoveredObject=null)}onClick(e){if(e.preventDefault(),this.hoveredObject){this.hoveredObject.material&&this.hoveredObject.material.color&&this.hoveredObject.material.color.set(this.hoveredObject.originalColor);const t=this.hoveredObject;this.createModal(t.data),this.modal.position.copy(t.position).multiplyScalar(1.1),this.modal.position.z=this.modal.position.z+50,this.camera.position.copy(t.position).multiplyScalar(2),this.camera.lookAt(0,0,0),this.modal.lookAt(this.camera.position),this.hoveredObject=null}}}const OS=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},BS={mounted(){const n=this.$el,e=new FS(n);e.start(),e.createAllMarkers()}},zS={id:"scene-container"};function HS(n,e,t,i,s,r){return wt(),Ut("div",zS)}const kS=OS(BS,[["render",HS],["__scopeId","data-v-27ed04bc"]]),VS=G("header",null,[G("link",{href:"https://fonts.cdnfonts.com/css/overpass",rel:"stylesheet"}),G("link",{href:"https://fonts.googleapis.com/css2?family=Nunito",rel:"stylesheet",type:"text/css"}),G("link",{href:"https://fonts.cdnfonts.com/css/univers",rel:"stylesheet"})],-1),GS={id:"body"},WS={key:0,id:"show-top-bar-hidden"},XS=G("g",{id:"SVGRepo_bgCarrier","stroke-width":"0",transform:"translate(130.35,130.35), scale(0.21)"},[G("path",{transform:"translate(-168.3, -168.3), scale(41.6625)",fill:"#ff0004",d:"M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z",strokewidth:"0"})],-1),jS=G("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round",stroke:"#CCCCCC","stroke-width":"0.66"},null,-1),YS=G("g",{id:"SVGRepo_iconCarrier"},[G("path",{id:"XMLID_224_",d:"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"})],-1),qS=[XS,jS,YS],KS={key:0,id:"top-bar"},$S=G("div",{id:"logo"},[G("div",{id:"logo-mars-bg"},[G("span",{id:"logo-former"},"MARS")]),G("span",{id:"logo-latter"},[st("is a "),G("u",null,"place")])],-1),ZS=G("div",{id:"bar-buffer"},null,-1),QS={id:"top-bar-items"},JS=G("span",null,"about",-1),ey=[JS],ty=G("span",null,"filters",-1),ny=[ty],iy=G("span",null,"suggest pin",-1),sy=[iy],ry=G("svg",{cursor:"pointer",fill:"rgba(255, 255, 255, 1)",height:"100px",width:"100px",version:"1.1",id:"Layer_2",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"-168.3 -168.3 666.60 666.60","xml:space":"preserve",stroke:"#ffffff",transform:"rotate(0)matrix(1, 0, 0, 1, 0, 0)","stroke-width":"14.52"},[G("g",{id:"SVGRepo_bgCarrier","stroke-width":"0",transform:"translate(130.35,130.35), scale(0.21)"},[G("path",{transform:"translate(-168.3, -168.3), scale(41.6625)",fill:"#ff0004",d:"M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z",strokewidth:"0"})]),G("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round",stroke:"#CCCCCC","stroke-width":"0.66"}),G("g",{id:"SVGRepo_iconCarrier"},[G("path",{id:"XMLID_224_",d:"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"})])],-1),oy=G("span",null,"hide menu",-1),ay=[ry,oy],ly={key:0,id:"guide-container"},cy={id:"guide-container-items"},uy=G("span",null,"close",-1),hy=[uy],dy=G("span",null,"how it works",-1),fy=[dy],py=G("span",null,"what is this?",-1),my=[py],gy=G("span",null,"FAQ",-1),_y=[gy],vy={key:0,class:"container-under"},xy={key:0,class:"guide-choice"},My=G("span",{class:"guide-choice-text"},[G("p",null,"Concept")],-1),Sy=G("div",{class:"toggle-content"},[G("span",{class:"what-text"},[G("br"),G("p",null,[st("Mars is a place. It can be thought of as a cousin to Earth - a terrestrial planet, under the same sun, that's about the same age. The more we know about our cousin, the more we might learn about Earth, the origins of our solar system, and even the prerequisites and potentiates for life. It's a neighbourhood mystery - and yet our understanding has only recently begun to reflect Mars as it really is. "),G("br"),G("br"),st(" In the past 70 years, countless missions, projects, and investigations have clarified our mind's eye image of Mars as a sparse, cold, and inhospitable place. We're extremely lucky to see this reality. We get to view another world from the level of an observer on the surface. Our sense of Mars is more concrete than anyone before us. "),G("br"),G("br"),st(" But each discovery also moves us away from fantastical concepts that we previously projected onto the planet - and we have no history for it but these ideas. Mars has no legends, no tombs, monuments, wars, triumphs or messiahs. It's a blank slate without us. "),G("br"),G("br"),G("i",null,"Mars is a Place"),st(" tries to construct and root previous stories and ideas of and on Mars by mapping them to its surface. Some ideas are old and some are new, but each can reveal at least part of a long-standing tradition.")])])],-1),yy=G("span",{class:"guide-choice-text"},[G("p",null,"Art")],-1),Ey=G("div",{class:"toggle-content"},[G("span",{class:"what-text"},[G("br"),st(" TBD ")])],-1),by=[My,Sy,yy,Ey],Ty={key:1,class:"container-under-how"},Ay=G("div",{class:"how-choice"},[G("span",{class:"how-choice-text"}," Map "),G("div",{class:"toggle-content-how"},[G("span",{class:"how-text"},[G("p",null,"Slide the camera plane vertically or horizontally by holding down right click and dragging with left"),G("p",null,"Use your mousewheel or trackpad to scroll in and out (as you would on Google Earth)")])])],-1),wy=G("div",{class:"how-video"},[G("video",{class:"toggle-content-how-video",loop:"",autoplay:""},[G("source",{src:Sm,type:"video/webm"})])],-1),Cy=G("div",{class:"how-choice"},[G("span",{class:"how-choice-text"}," Pins "),G("div",{class:"toggle-content-how"},[G("span",{class:"how-text"},[G("p",null,"Click on a pin to see information for an entry - these correspond to individual locations in fiction, film, TV, etc."),G("p",null,"To remove the entry popup, click outside of it or move your camera")])])],-1),Ry=G("div",{class:"how-video"},[G("video",{class:"toggle-content-how-video",loop:"",autoplay:""},[G("source",{src:ym,type:"video/webm"})])],-1),Py=G("div",{class:"how-choice"},[G("span",{class:"how-choice-text"}," Filtering "),G("div",{class:"toggle-content-how"},[G("span",{class:"how-text"},[G("p",null,"The left-hand 'filters' tab contains options for sorting the entries by date, medium, and scope")])])],-1),Ly=[Ay,wy,Cy,Ry,Py],Dy={key:2,class:"container-under-FAQ"},Iy=G("div",{class:"FAQ-choice"},[G("span",{class:"FAQ-choice-text"},[G("p",null,"Mars")]),G("div",{class:"toggle-content-FAQ"},[G("span",{class:"FAQ-subheading"},[G("p",null,"Is the scene to scale?")]),G("span",{class:"FAQ-text"},[st(" Deimos and Phobos aren't to scale, but Mars' surface is - some unmapped gaps in the terrain were filled with generated textures."),G("br")]),G("span",{class:"FAQ-subheading"},[G("p",null,"How accurate is Mars' surface?")]),G("span",{class:"FAQ-text"}," Mars is depicted in the middle of its northern summer. The planet has a polar tilt of 25°, similar to Earth's 23.5°, which is part of the reason it experiences seasons as well as polar nights/summers. ")])],-1),Uy=G("div",{class:"FAQ-choice"},[G("span",{class:"FAQ-choice-text"},[G("p",null,"Attribution")]),G("div",{class:"toggle-content-FAQ"},[G("span",{class:"FAQ-subheading"},[G("p",null,"Where are the assets from?")]),G("span",{class:"FAQ-text"},[st(" The starfield is a cubemap built from one of NASA's "),G("a",{class:"link-highlight",href:"https://svs.gsfc.nasa.gov/4851/"},"Deep Star Maps"),st(", itself assembled from a few different star catalogs."),G("br"),st(" Mars' texture was created from NASA surface imagery (and released for free!) by the team at "),G("a",{class:"link-highlight",href:"https://www.solarsystemscope.com/textures/"},"Solar System Scope"),st(". I turned this into another cubemap and projected it onto a quadrilateralized spherical cube (quad sphere). I also generated displacement maps from it."),G("br"),st(" The Deimos and Phobos models were created by Ernst, Daly, and Gaskell et al. in their extremely helpful "),G("a",{class:"link-highlight",href:"https://earth-planets-space.springeropen.com/articles/10.1186/s40623-023-01814-7"},"2023 paper"),st(" - you can download the models directly from their Small Body Mapping Tool/SBMT site "),G("a",{class:"link-highlight",href:"https://sbmt.jhuapl.edu/Object-Index.php"},"here"),st(" (.OBJ with 4 spatial resolution options). ")])])],-1),Ny=G("div",{class:"FAQ-choice"},[G("span",{class:"FAQ-choice-text"},[G("p",null,"Developer")]),G("div",{class:"toggle-content-FAQ"},[G("span",{class:"FAQ-subheading"},[G("p",null,"Tech stack?")]),G("span",{class:"FAQ-text"},[st(" Three.js for rendering the scene and Vue 3 for the overlay/SPA reloading and general reactivity. Pin data are stored in rudimentary arrays of objects for now; this will change to SQLite in future."),G("br")]),G("span",{class:"FAQ-subheading"},[G("p",null,"I found a bug - what can I do?")]),G("span",{class:"FAQ-text"}," This is a WIP, so feel free to create a new issue or pull request on the repo. You can also contact me at xxx with what happened. ")])],-1),Fy=[Iy,Uy,Ny],Oy={key:0,id:"guide-container"},By=G("div",{class:"container-under"},[G("span",null,"TBD ")],-1),zy=[By],Hy={key:0,id:"suggest-container"},ky={id:"suggest-container-items"},Vy=G("span",null,"close",-1),Gy=[Vy],Wy={id:"container-under-suggest"},Xy={id:"suggest-form",action:"",method:"POST"},jy={key:0,id:"email-disclaimer"},Yy=G("span",null,"I'll only email you if I have question about your idea for a pin. I do not retain addresses and will never spam you.",-1),qy=[Yy],Ky={class:"container-input-smaller"},$y=G("label",{class:"suggest-label"},"Submissions disabled for now.",-1),Zy=G("br",null,null,-1),Qy=G("br",null,null,-1),Jy={class:"suggest-label"},eE={class:"suggest-hint"},tE=G("input",{disabled:"",class:"suggest-input-smaller",type:"email",name:"email"},null,-1),nE=G("div",{class:"container-input-smaller"},[G("label",{class:"suggest-label"},[st(" Submission Name "),G("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),iE=G("div",{class:"container-input-smaller"},[G("label",{class:"suggest-label"},[st(" Author "),G("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),sE=G("div",{class:"container-input-smaller"},[G("label",{class:"suggest-label"},[st(" Year "),G("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),rE=G("div",{class:"container-input-smaller"},[G("label",{class:"suggest-label"},[st(" Fictional Year "),G("p",{class:"suggest-hint"},"optional, provide if this applies"),G("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),oE=G("div",{class:"container-input-smaller"},[G("label",{class:"suggest-label"},[st(" Lat/Lon "),G("p",{class:"suggest-hint"},"optional, helpful if you have them"),G("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),aE=G("div",{class:"container-input-larger"},[G("label",{class:"suggest-label"},[st(" Description "),G("textarea",{disabled:"",class:"suggest-input-larger",name:"message"})])],-1),lE=G("button",{disabled:"",id:"suggest-input-button",type:"submit"},"Send",-1),cE={key:0,id:"about-container"},uE=G("div",{class:"container-under"},[G("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto! ")],-1),hE=[uE],dE={data(){return{navBar:!0,guide:!1,about:!1,suggest:!1,tabShown:null,guideHow:!0,guideWhat:!1,guideFAQ:!1,showEmailDisclaimer:!1}},methods:{handleNavBar(n){switch(n){case"show":this.navBar=!0;break;case"hide":this.navBar=!1;break}},handleModals(n){switch(n){case"guide":this.about=!1,this.suggest=!1,this.guide=!0,document.documentElement.style.setProperty("--guide-background-color","rgba(255, 0, 0, 0.7"),document.documentElement.style.setProperty("--guide-font-weight",100),document.documentElement.style.setProperty("--guide-font-size","17px"),document.documentElement.style.setProperty("--about-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--about-font-weight",400),document.documentElement.style.setProperty("--about-font-size","18px"),document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--suggest-font-weight",400),document.documentElement.style.setProperty("--suggest-font-size","18px");break;case"about":this.guide=!1,this.suggest=!1,this.about=!0,document.documentElement.style.setProperty("--about-background-color","rgba(255, 0, 0, 0.7"),document.documentElement.style.setProperty("--about-font-weight",100),document.documentElement.style.setProperty("--about-font-size","17px"),document.documentElement.style.setProperty("--guide-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--guide-font-weight",400),document.documentElement.style.setProperty("--guide-font-size","18px"),document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--suggest-font-weight",400),document.documentElement.style.setProperty("--suggest-font-size","18px");break;case"suggest":this.guide=!1,this.about=!1,this.suggest=!0,document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 0, 0, 0.7"),document.documentElement.style.setProperty("--suggest-font-weight",100),document.documentElement.style.setProperty("--suggest-font-size","17px"),document.documentElement.style.setProperty("--guide-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--guide-font-weight",400),document.documentElement.style.setProperty("--guide-font-size","18px"),document.documentElement.style.setProperty("--about-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--about-font-weight",400),document.documentElement.style.setProperty("--about-font-size","18px");break;default:this.guide=!1,this.about=!1,this.suggest=!1,document.documentElement.style.setProperty("--guide-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--guide-font-weight",400),document.documentElement.style.setProperty("--guide-font-size","18px"),document.documentElement.style.setProperty("--about-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--about-font-weight",400),document.documentElement.style.setProperty("--about-font-size","18px"),document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--suggest-font-weight",400),document.documentElement.style.setProperty("--suggest-font-size","18px");break}},handleGuideTabs(n){switch(n){case"what":this.guideHow=!1,this.guideFAQ=!1,this.guideWhat=!0,document.documentElement.style.setProperty("--guideWhat-background-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideWhat-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideWhat-font-weight",100),document.documentElement.style.setProperty("--guideWhat-font-size","32px"),document.documentElement.style.setProperty("--guideWhat-shadow","1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"),document.documentElement.style.setProperty("--guideHow-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideHow-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideHow-font-weight",200),document.documentElement.style.setProperty("--guideHow-font-size","34px"),document.documentElement.style.setProperty("--guideHow-shadow","none"),document.documentElement.style.setProperty("--guideFAQ-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideFAQ-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideFAQ-font-weight",200),document.documentElement.style.setProperty("--guideFAQ-font-size","34px"),document.documentElement.style.setProperty("--guideFAQ-shadow","none");break;case"how":this.guideWhat=!1,this.guideFAQ=!1,this.guideHow=!0,document.documentElement.style.setProperty("--guideHow-background-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideHow-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideHow-font-weight",100),document.documentElement.style.setProperty("--guideHow-font-size","32px"),document.documentElement.style.setProperty("--guideHow-shadow","1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"),document.documentElement.style.setProperty("--guideWhat-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideWhat-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideWhat-font-weight",200),document.documentElement.style.setProperty("--guideWhat-font-size","34px"),document.documentElement.style.setProperty("--guideWhat-shadow","none"),document.documentElement.style.setProperty("--guideFAQ-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideFAQ-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideFAQ-font-weight",200),document.documentElement.style.setProperty("--guideFAQ-font-size","34px"),document.documentElement.style.setProperty("--guideFAQ-shadow","none");break;case"questions":this.guideWhat=!1,this.guideHow=!1,this.guideFAQ=!0,document.documentElement.style.setProperty("--guideFAQ-background-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideFAQ-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideFAQ-font-weight",100),document.documentElement.style.setProperty("--guideFAQ-font-size","32px"),document.documentElement.style.setProperty("--guideFAQ-shadow","1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"),document.documentElement.style.setProperty("--guideWhat-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideWhat-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideWhat-font-weight",200),document.documentElement.style.setProperty("--guideWhat-font-size","34px"),document.documentElement.style.setProperty("--guideWhat-shadow","none"),document.documentElement.style.setProperty("--guideHow-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideHow-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideHow-font-weight",200),document.documentElement.style.setProperty("--guideHow-font-size","34px"),document.documentElement.style.setProperty("--guideHow-shadow","none");break}}}},fE=Object.assign(dE,{__name:"App",setup(n){return(e,t)=>(wt(),Ut(hn,null,[VS,G("div",GS,[ut(Dn,{duration:550,name:"nested"},{default:Zn(()=>[e.navBar?Zt("",!0):(wt(),Ut("div",WS,[(wt(),Ut("svg",{cursor:"pointer",onClick:t[0]||(t[0]=i=>e.handleNavBar("show")),fill:"rgba(255, 255, 255, 0.9)",height:"100px",width:"100px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"-168.3 -168.3 666.60 666.60","xml:space":"preserve",stroke:"#ffffff",transform:"rotate(180)matrix(1, 0, 0, 1, 0, 0)","stroke-width":"14.52"},qS))]))]),_:1}),ut(Dn,{duration:550,name:"nested"},{default:Zn(()=>[e.navBar?(wt(),Ut("div",KS,[$S,ZS,G("div",QS,[G("div",{onClick:t[1]||(t[1]=i=>e.handleModals("guide")),id:"bar-guide"},ey),G("div",{onClick:t[2]||(t[2]=i=>e.handleModals("about")),id:"bar-about"},ny),G("div",{onClick:t[3]||(t[3]=i=>e.handleModals("suggest")),id:"bar-suggest"},sy),e.navBar?(wt(),Ut("div",{key:0,id:"show-top",onClick:t[4]||(t[4]=i=>{e.handleNavBar("hide"),e.handleModals()})},ay)):Zt("",!0)])])):Zt("",!0)]),_:1}),ut(Dn,{duration:550,name:"nested"},{default:Zn(()=>[e.guide?(wt(),Ut("div",ly,[G("div",cy,[G("div",{onClick:t[5]||(t[5]=i=>e.handleModals()),class:"container-close"},hy),G("div",{onClick:t[6]||(t[6]=i=>e.handleGuideTabs("how")),class:"container-item"},fy),G("div",{onClick:t[7]||(t[7]=i=>e.handleGuideTabs("what")),class:"container-item"},my),G("div",{onClick:t[8]||(t[8]=i=>e.handleGuideTabs("questions")),class:"container-item"},_y)]),e.guideWhat?(wt(),Ut("div",vy,[e.chosenRead?Zt("",!0):(wt(),Ut("div",xy,by))])):Zt("",!0),e.guideHow?(wt(),Ut("div",Ty,Ly)):Zt("",!0),e.guideFAQ?(wt(),Ut("div",Dy,Fy)):Zt("",!0)])):Zt("",!0)]),_:1}),ut(Dn,{duration:550,name:"nested"},{default:Zn(()=>[e.about?(wt(),Ut("div",Oy,zy)):Zt("",!0)]),_:1}),ut(Dn,{duration:550,name:"nested"},{default:Zn(()=>[e.suggest?(wt(),Ut("div",Hy,[G("div",ky,[G("div",{onClick:t[9]||(t[9]=i=>e.handleModals()),class:"container-close"},Gy)]),G("div",Wy,[G("form",Xy,[ut(Dn,{duration:"550",name:"email-disclaimer-transition"},{default:Zn(()=>[e.showEmailDisclaimer?(wt(),Ut("div",jy,qy)):Zt("",!0)]),_:1}),G("div",Ky,[$y,Zy,Qy,G("label",Jy,[st(" Email "),G("span",eE,[st(" optional "),G("p",{class:"disclaimer-label",onTouchstart:t[10]||(t[10]=i=>e.showEmailDisclaimer=!0),onTouchend:t[11]||(t[11]=i=>e.showEmailDisclaimer=!1),onMouseover:t[12]||(t[12]=i=>e.showEmailDisclaimer=!0),onMouseleave:t[13]||(t[13]=i=>e.showEmailDisclaimer=!1)},"(why do I ask for this?)",32)]),tE])]),nE,iE,sE,rE,oE,aE,lE])])])):Zt("",!0)]),_:1}),ut(Dn,{duration:550,name:"nested"},{default:Zn(()=>[e.tabShown=="what"?(wt(),Ut("div",cE,hE)):Zt("",!0)]),_:1}),ut(kS,{onClick:t[14]||(t[14]=i=>e.handleModals())})])],64))}}),pE=vm(fE);pE.mount("#app");
