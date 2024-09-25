(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function al(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const rt={},ms=[],rn=()=>{},hf=()=>!1,yo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ll=n=>n.startsWith("onUpdate:"),vt=Object.assign,cl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},df=Object.prototype.hasOwnProperty,$e=(n,e)=>df.call(n,e),Be=Array.isArray,js=n=>So(n)==="[object Map]",ff=n=>So(n)==="[object Set]",Xe=n=>typeof n=="function",Tt=n=>typeof n=="string",or=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",Th=n=>(ht(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),pf=Object.prototype.toString,So=n=>pf.call(n),mf=n=>So(n).slice(8,-1),gf=n=>So(n)==="[object Object]",ul=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ys=al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},_f=/-(\w)/g,ys=Eo(n=>n.replace(_f,(e,t)=>t?t.toUpperCase():"")),vf=/\B([A-Z])/g,Cs=Eo(n=>n.replace(vf,"-$1").toLowerCase()),wh=Eo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ho=Eo(n=>n?`on${wh(n)}`:""),zi=(n,e)=>!Object.is(n,e),ko=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ah=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},xf=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Mf=n=>{const e=Tt(n)?Number(n):NaN;return isNaN(e)?n:e};let jl;const Ch=()=>jl||(jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hl(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Tt(i)?bf(i):hl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Tt(n)||ht(n))return n}const yf=/;(?![^(]*\))/g,Sf=/:([^]+)/,Ef=/\/\*[^]*?\*\//g;function bf(n){const e={};return n.replace(Ef,"").split(yf).forEach(t=>{if(t){const i=t.split(Sf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function dl(n){let e="";if(Tt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=dl(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Tf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wf=al(Tf);function Rh(n){return!!n||n===""}/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dn;class Af{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=dn;try{return dn=this,e()}finally{dn=t}}}on(){dn=this}off(){dn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Cf(n,e=dn){e&&e.active&&e.effects.push(n)}function Rf(){return dn}let Oi;class fl{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Cf(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,pi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed){if(t.computed.effect._dirtyLevel===2)return!0;if(Pf(t.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),mi()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=li,t=Oi;try{return li=!0,Oi=this,this._runnings++,Yl(this),this.fn()}finally{ql(this),this._runnings--,Oi=t,li=e}}stop(){this.active&&(Yl(this),ql(this),this.onStop&&this.onStop(),this.active=!1)}}function Pf(n){return n.value}function Yl(n){n._trackId++,n._depsLength=0}function ql(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Ph(n.deps[e],n);n.deps.length=n._depsLength}}function Ph(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let li=!0,Na=0;const Lh=[];function pi(){Lh.push(li),li=!1}function mi(){const n=Lh.pop();li=n===void 0?!0:n}function pl(){Na++}function ml(){for(Na--;!Na&&Fa.length;)Fa.shift()()}function Dh(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Ph(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Fa=[];function Ih(n,e,t){pl();for(const i of n.keys()){if(!n.computed&&i.computed&&n.get(i)===i._trackId&&i._runnings>0){i._dirtyLevel=2;continue}let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i.computed&&i._dirtyLevel===2&&(i._shouldSchedule=!0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==3&&(i._shouldSchedule=!1,i.scheduler&&Fa.push(i.scheduler)))}ml()}const Uh=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Oa=new WeakMap,Bi=Symbol(""),Ba=Symbol("");function Vt(n,e,t){if(li&&Oi){let i=Oa.get(n);i||Oa.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Uh(()=>i.delete(t))),Dh(Oi,s)}}function Bn(n,e,t,i,s,r){const o=Oa.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Be(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!or(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Be(n)?ul(t)&&a.push(o.get("length")):(a.push(o.get(Bi)),js(n)&&a.push(o.get(Ba)));break;case"delete":Be(n)||(a.push(o.get(Bi)),js(n)&&a.push(o.get(Ba)));break;case"set":js(n)&&a.push(o.get(Bi));break}pl();for(const l of a)l&&Ih(l,5);ml()}const Lf=al("__proto__,__v_isRef,__isVue"),Nh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(or)),$l=Df();function Df(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=tt(this);for(let r=0,o=this.length;r<o;r++)Vt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(tt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){pi(),pl();const i=tt(this)[e].apply(this,t);return ml(),mi(),i}}),n}function If(n){or(n)||(n=String(n));const e=tt(this);return Vt(e,"has",n),e.hasOwnProperty(n)}class Fh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?jf:Hh:r?zh:Bh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){if(o&&$e($l,t))return Reflect.get($l,t,i);if(t==="hasOwnProperty")return If}const a=Reflect.get(e,t,i);return(or(t)?Nh.has(t):Lf(t))||(s||Vt(e,"get",t),r)?a:Zt(a)?o&&ul(t)?a:a.value:ht(a)?s?kh(a):vl(a):a}}class Oh extends Fh{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=so(r);if(!za(i)&&!so(i)&&(r=tt(r),i=tt(i)),!Be(e)&&Zt(r)&&!Zt(i))return l?!1:(r.value=i,!0)}const o=Be(e)&&ul(t)?Number(t)<e.length:$e(e,t),a=Reflect.set(e,t,i,s);return e===tt(s)&&(o?zi(i,r)&&Bn(e,"set",t,i):Bn(e,"add",t,i)),a}deleteProperty(e,t){const i=$e(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Bn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!or(t)||!Nh.has(t))&&Vt(e,"has",t),i}ownKeys(e){return Vt(e,"iterate",Be(e)?"length":Bi),Reflect.ownKeys(e)}}class Uf extends Fh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Nf=new Oh,Ff=new Uf,Of=new Oh(!0);const gl=n=>n,bo=n=>Reflect.getPrototypeOf(n);function mr(n,e,t=!1,i=!1){n=n.__v_raw;const s=tt(n),r=tt(e);t||(zi(e,r)&&Vt(s,"get",e),Vt(s,"get",r));const{has:o}=bo(s),a=i?gl:t?yl:Ml;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function gr(n,e=!1){const t=this.__v_raw,i=tt(t),s=tt(n);return e||(zi(n,s)&&Vt(i,"has",n),Vt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function _r(n,e=!1){return n=n.__v_raw,!e&&Vt(tt(n),"iterate",Bi),Reflect.get(n,"size",n)}function Kl(n){n=tt(n);const e=tt(this);return bo(e).has.call(e,n)||(e.add(n),Bn(e,"add",n,n)),this}function Zl(n,e){e=tt(e);const t=tt(this),{has:i,get:s}=bo(t);let r=i.call(t,n);r||(n=tt(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?zi(e,o)&&Bn(t,"set",n,e):Bn(t,"add",n,e),this}function Ql(n){const e=tt(this),{has:t,get:i}=bo(e);let s=t.call(e,n);s||(n=tt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Bn(e,"delete",n,void 0),r}function Jl(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&Bn(n,"clear",void 0,void 0),t}function vr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=tt(o),l=e?gl:n?yl:Ml;return!n&&Vt(a,"iterate",Bi),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function xr(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),o=js(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?gl:e?yl:Ml;return!e&&Vt(r,"iterate",l?Ba:Bi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Xn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Bf(){const n={get(r){return mr(this,r)},get size(){return _r(this)},has:gr,add:Kl,set:Zl,delete:Ql,clear:Jl,forEach:vr(!1,!1)},e={get(r){return mr(this,r,!1,!0)},get size(){return _r(this)},has:gr,add:Kl,set:Zl,delete:Ql,clear:Jl,forEach:vr(!1,!0)},t={get(r){return mr(this,r,!0)},get size(){return _r(this,!0)},has(r){return gr.call(this,r,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:vr(!0,!1)},i={get(r){return mr(this,r,!0,!0)},get size(){return _r(this,!0)},has(r){return gr.call(this,r,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:vr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=xr(r,!1,!1),t[r]=xr(r,!0,!1),e[r]=xr(r,!1,!0),i[r]=xr(r,!0,!0)}),[n,t,e,i]}const[zf,Hf,kf,Vf]=Bf();function _l(n,e){const t=e?n?Vf:kf:n?Hf:zf;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get($e(t,s)&&s in i?t:i,s,r)}const Gf={get:_l(!1,!1)},Wf={get:_l(!1,!0)},Xf={get:_l(!0,!1)};const Bh=new WeakMap,zh=new WeakMap,Hh=new WeakMap,jf=new WeakMap;function Yf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qf(n){return n.__v_skip||!Object.isExtensible(n)?0:Yf(mf(n))}function vl(n){return so(n)?n:xl(n,!1,Nf,Gf,Bh)}function $f(n){return xl(n,!1,Of,Wf,zh)}function kh(n){return xl(n,!0,Ff,Xf,Hh)}function xl(n,e,t,i,s){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=qf(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function qs(n){return so(n)?qs(n.__v_raw):!!(n&&n.__v_isReactive)}function so(n){return!!(n&&n.__v_isReadonly)}function za(n){return!!(n&&n.__v_isShallow)}function Vh(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Kf(n){return Object.isExtensible(n)&&Ah(n,"__v_skip",!0),n}const Ml=n=>ht(n)?vl(n):n,yl=n=>ht(n)?kh(n):n;class Gh{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new fl(()=>e(this._value),()=>Vo(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=tt(this);return(!e._cacheable||e.effect.dirty)&&zi(e._value,e._value=e.effect.run())&&Vo(e,5),Qf(e),e.effect._dirtyLevel>=2&&Vo(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Zf(n,e,t=!1){let i,s;const r=Xe(n);return r?(i=n,s=rn):(i=n.get,s=n.set),new Gh(i,s,r||!s,t)}function Qf(n){var e;li&&Oi&&(n=tt(n),Dh(Oi,(e=n.dep)!=null?e:n.dep=Uh(()=>n.dep=void 0,n instanceof Gh?n:void 0)))}function Vo(n,e=5,t,i){n=tt(n);const s=n.dep;s&&Ih(s,e)}function Zt(n){return!!(n&&n.__v_isRef===!0)}function Jf(n){return Zt(n)?n.value:n}const ep={get:(n,e,t)=>Jf(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Zt(s)&&!Zt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Wh(n){return qs(n)?n:new Proxy(n,ep)}/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ci(n,e,t,i){try{return i?n(...i):n()}catch(s){To(s,e,t)}}function on(n,e,t,i){if(Xe(n)){const s=ci(n,e,t,i);return s&&Th(s)&&s.catch(r=>{To(r,e,t)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(on(n[r],e,t,i));return s}}function To(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){pi(),ci(l,null,10,[n,o,a]),mi();return}}tp(n,t,s,i)}function tp(n,e,t,i=!0){console.error(n)}let er=!1,Ha=!1;const Dt=[];let Sn=0;const gs=[];let ti=null,Li=0;const Xh=Promise.resolve();let Sl=null;function np(n){const e=Sl||Xh;return n?e.then(this?n.bind(this):n):e}function ip(n){let e=Sn+1,t=Dt.length;for(;e<t;){const i=e+t>>>1,s=Dt[i],r=tr(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function El(n){(!Dt.length||!Dt.includes(n,er&&n.allowRecurse?Sn+1:Sn))&&(n.id==null?Dt.push(n):Dt.splice(ip(n.id),0,n),jh())}function jh(){!er&&!Ha&&(Ha=!0,Sl=Xh.then(qh))}function sp(n){const e=Dt.indexOf(n);e>Sn&&Dt.splice(e,1)}function rp(n){Be(n)?gs.push(...n):(!ti||!ti.includes(n,n.allowRecurse?Li+1:Li))&&gs.push(n),jh()}function ec(n,e,t=er?Sn+1:0){for(;t<Dt.length;t++){const i=Dt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Dt.splice(t,1),t--,i()}}}function Yh(n){if(gs.length){const e=[...new Set(gs)].sort((t,i)=>tr(t)-tr(i));if(gs.length=0,ti){ti.push(...e);return}for(ti=e,Li=0;Li<ti.length;Li++){const t=ti[Li];t.active!==!1&&t()}ti=null,Li=0}}const tr=n=>n.id==null?1/0:n.id,op=(n,e)=>{const t=tr(n)-tr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function qh(n){Ha=!1,er=!0,Dt.sort(op);try{for(Sn=0;Sn<Dt.length;Sn++){const e=Dt[Sn];e&&e.active!==!1&&ci(e,null,14)}}finally{Sn=0,Dt.length=0,Yh(),er=!1,Sl=null,(Dt.length||gs.length)&&qh()}}function ap(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||rt;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||rt;d&&(s=t.map(m=>Tt(m)?m.trim():m)),h&&(s=t.map(xf))}let a,l=i[a=Ho(e)]||i[a=Ho(ys(e))];!l&&r&&(l=i[a=Ho(Cs(e))]),l&&on(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,on(c,n,6,s)}}function $h(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=$h(c,e,!0);u&&(a=!0,vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ht(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):vt(o,r),ht(n)&&i.set(n,o),o)}function wo(n,e){return!n||!yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,Cs(e))||$e(n,e))}let _n=null,Ao=null;function ro(n){const e=_n;return _n=n,Ao=n&&n.type.__scopeId||null,e}function lp(n){Ao=n}function cp(){Ao=null}function ei(n,e=_n,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&dc(-1);const r=ro(e);let o;try{o=n(...s)}finally{ro(r),i._d&&dc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Go(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:m,ctx:_,inheritAttrs:x}=n,p=ro(n);let f,S;try{if(t.shapeFlag&4){const w=s||i,F=w;f=Mn(c.call(F,w,u,h,m,d,_)),S=a}else{const w=e;f=Mn(w.length>1?w(h,{attrs:a,slots:o,emit:l}):w(h,null)),S=e.props?a:up(a)}}catch(w){Zs.length=0,To(w,n,1),f=dt(Kt)}let M=f;if(S&&x!==!1){const w=Object.keys(S),{shapeFlag:F}=M;w.length&&F&7&&(r&&w.some(ll)&&(S=hp(S,r)),M=hi(M,S,!1,!0))}return t.dirs&&(M=hi(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),f=M,ro(p),f}const up=n=>{let e;for(const t in n)(t==="class"||t==="style"||yo(t))&&((e||(e={}))[t]=n[t]);return e},hp=(n,e)=>{const t={};for(const i in n)(!ll(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function dp(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?tc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!wo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?tc(i,o,c):!0:!!o;return!1}function tc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!wo(t,r))return!0}return!1}function fp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const pp=Symbol.for("v-ndc"),mp=n=>n.__isSuspense;function gp(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):rp(n)}function Co(n,e,t=It,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{pi();const a=ar(t),l=on(e,t,n,o);return a(),mi(),l});return i?s.unshift(r):s.push(r),r}}const Vn=n=>(e,t=It)=>{(!Lo||n==="sp")&&Co(n,(...i)=>e(...i),t)},_p=Vn("bm"),Kh=Vn("m"),vp=Vn("bu"),xp=Vn("u"),Zh=Vn("bum"),Qh=Vn("um"),Mp=Vn("sp"),yp=Vn("rtg"),Sp=Vn("rtc");function Ep(n,e=It){Co("ec",n,e)}function Mi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(pi(),on(l,t,8,[n.el,a,n,e]),mi())}}const Jr=n=>!!n.type.__asyncLoader,ka=n=>n?Md(n)?Al(n):ka(n.parent):null,$s=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ka(n.parent),$root:n=>ka(n.root),$emit:n=>n.emit,$options:n=>bl(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,El(n.update)}),$nextTick:n=>n.n||(n.n=np.bind(n.proxy)),$watch:n=>Wp.bind(n)}),Wo=(n,e)=>n!==rt&&!n.__isScriptSetup&&$e(n,e),bp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Wo(i,e))return o[e]=1,i[e];if(s!==rt&&$e(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&$e(c,e))return o[e]=3,r[e];if(t!==rt&&$e(t,e))return o[e]=4,t[e];Va&&(o[e]=0)}}const u=$s[e];let h,d;if(u)return e==="$attrs"&&Vt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==rt&&$e(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,$e(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Wo(s,e)?(s[e]=t,!0):i!==rt&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==rt&&$e(n,o)||Wo(e,o)||(a=r[0])&&$e(a,o)||$e(i,o)||$e($s,o)||$e(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function nc(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Va=!0;function Tp(n){const e=bl(n),t=n.proxy,i=n.ctx;Va=!1,e.beforeCreate&&ic(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:_,activated:x,deactivated:p,beforeDestroy:f,beforeUnmount:S,destroyed:M,unmounted:w,render:F,renderTracked:A,renderTriggered:R,errorCaptured:N,serverPrefetch:E,expose:y,inheritAttrs:L,components:O,directives:G,filters:ie}=e;if(c&&wp(c,i,null),o)for(const ne in o){const Y=o[ne];Xe(Y)&&(i[ne]=Y.bind(t))}if(s){const ne=s.call(t,t);ht(ne)&&(n.data=vl(ne))}if(Va=!0,r)for(const ne in r){const Y=r[ne],ge=Xe(Y)?Y.bind(t,t):Xe(Y.get)?Y.get.bind(t,t):rn,ye=!Xe(Y)&&Xe(Y.set)?Y.set.bind(t):rn,Se=dm({get:ge,set:ye});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Se.value,set:De=>Se.value=De})}if(a)for(const ne in a)Jh(a[ne],i,t,ne);if(l){const ne=Xe(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(Y=>{Dp(Y,ne[Y])})}u&&ic(u,n,"c");function Q(ne,Y){Be(Y)?Y.forEach(ge=>ne(ge.bind(t))):Y&&ne(Y.bind(t))}if(Q(_p,h),Q(Kh,d),Q(vp,m),Q(xp,_),Q(Xp,x),Q(jp,p),Q(Ep,N),Q(Sp,A),Q(yp,R),Q(Zh,S),Q(Qh,w),Q(Mp,E),Be(y))if(y.length){const ne=n.exposed||(n.exposed={});y.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>t[Y],set:ge=>t[Y]=ge})})}else n.exposed||(n.exposed={});F&&n.render===rn&&(n.render=F),L!=null&&(n.inheritAttrs=L),O&&(n.components=O),G&&(n.directives=G)}function wp(n,e,t=rn){Be(n)&&(n=Ga(n));for(const i in n){const s=n[i];let r;ht(s)?"default"in s?r=eo(s.from||i,s.default,!0):r=eo(s.from||i):r=eo(s),Zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ic(n,e,t){on(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Jh(n,e,t,i){const s=i.includes(".")?dd(t,i):()=>t[i];if(Tt(n)){const r=e[n];Xe(r)&&jo(s,r)}else if(Xe(n))jo(s,n.bind(t));else if(ht(n))if(Be(n))n.forEach(r=>Jh(r,e,t,i));else{const r=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(r)&&jo(s,r,n)}}function bl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>oo(l,c,o,!0)),oo(l,e,o)),ht(e)&&r.set(e,l),l}function oo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&oo(n,r,t,!0),s&&s.forEach(o=>oo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ap[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Ap={data:sc,props:rc,emits:rc,methods:Vs,computed:Vs,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Vs,directives:Vs,watch:Rp,provide:sc,inject:Cp};function sc(n,e){return e?n?function(){return vt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function Cp(n,e){return Vs(Ga(n),Ga(e))}function Ga(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function Vs(n,e){return n?vt(Object.create(null),n,e):e}function rc(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:vt(Object.create(null),nc(n),nc(e??{})):e}function Rp(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const i in e)t[i]=Ot(n[i],e[i]);return t}function ed(){return{app:null,config:{isNativeTag:hf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pp=0;function Lp(n,e){return function(i,s=null){Xe(i)||(i=vt({},i)),s!=null&&!ht(s)&&(s=null);const r=ed(),o=new WeakSet;let a=!1;const l=r.app={_uid:Pp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:pm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Xe(c.install)?(o.add(c),c.install(l,...u)):Xe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=dt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):n(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Al(d.component)}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Ks;Ks=l;try{return c()}finally{Ks=u}}};return l}}let Ks=null;function Dp(n,e){if(It){let t=It.provides;const i=It.parent&&It.parent.provides;i===t&&(t=It.provides=Object.create(i)),t[n]=e}}function eo(n,e,t=!1){const i=It||_n;if(i||Ks){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ks._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const td={},nd=()=>Object.create(td),id=n=>Object.getPrototypeOf(n)===td;function Ip(n,e,t,i=!1){const s={},r=nd();n.propsDefaults=Object.create(null),sd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:$f(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Up(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=tt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(wo(n.emitsOptions,d))continue;const m=e[d];if(l)if($e(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const _=ys(d);s[_]=Wa(l,a,_,m,n,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{sd(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!$e(e,h)&&((u=Cs(h))===h||!$e(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Wa(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!$e(e,h))&&(delete r[h],c=!0)}c&&Bn(n.attrs,"set","")}function sd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ys(l))continue;const c=e[l];let u;s&&$e(s,u=ys(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:wo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=tt(t),c=a||rt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Wa(s,l,h,c[h],n,!$e(c,h))}}return o}function Wa(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=$e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=ar(s);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Cs(t))&&(i=!0))}return i}function rd(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=h=>{l=!0;const[d,m]=rd(h,e,!0);vt(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ht(n)&&i.set(n,ms),ms;if(Be(r))for(let u=0;u<r.length;u++){const h=ys(r[u]);oc(h)&&(o[h]=rt)}else if(r)for(const u in r){const h=ys(u);if(oc(h)){const d=r[u],m=o[h]=Be(d)||Xe(d)?{type:d}:vt({},d);if(m){const _=cc(Boolean,m.type),x=cc(String,m.type);m[0]=_>-1,m[1]=x<0||_<x,(_>-1||$e(m,"default"))&&a.push(h)}}}const c=[o,a];return ht(n)&&i.set(n,c),c}function oc(n){return n[0]!=="$"&&!Ys(n)}function ac(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function lc(n,e){return ac(n)===ac(e)}function cc(n,e){return Be(e)?e.findIndex(t=>lc(t,n)):Xe(e)&&lc(e,n)?0:-1}const od=n=>n[0]==="_"||n==="$stable",Tl=n=>Be(n)?n.map(Mn):[Mn(n)],Np=(n,e,t)=>{if(e._n)return e;const i=ei((...s)=>Tl(e(...s)),t);return i._c=!1,i},ad=(n,e,t)=>{const i=n._ctx;for(const s in n){if(od(s))continue;const r=n[s];if(Xe(r))e[s]=Np(s,r,i);else if(r!=null){const o=Tl(r);e[s]=()=>o}}},ld=(n,e)=>{const t=Tl(e);n.slots.default=()=>t},Fp=(n,e)=>{const t=n.slots=nd();if(n.vnode.shapeFlag&32){const i=e._;i?(vt(t,e),Ah(t,"_",i,!0)):ad(e,t)}else e&&ld(n,e)},Op=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=rt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(vt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,ad(e,s)),o=e}else e&&(ld(n,e),o={default:1});if(r)for(const a in s)!od(a)&&o[a]==null&&delete s[a]};function Xa(n,e,t,i,s=!1){if(Be(n)){n.forEach((d,m)=>Xa(d,e&&(Be(e)?e[m]:e),t,i,s));return}if(Jr(i)&&!s)return;const r=i.shapeFlag&4?Al(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===rt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,$e(h,c)&&(h[c]=null)):Zt(c)&&(c.value=null)),Xe(l))ci(l,a,12,[o,u]);else{const d=Tt(l),m=Zt(l);if(d||m){const _=()=>{if(n.f){const x=d?$e(h,l)?h[l]:u[l]:l.value;s?Be(x)&&cl(x,r):Be(x)?x.includes(r)||x.push(r):d?(u[l]=[r],$e(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,$e(h,l)&&(h[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,zt(_,t)):_()}}}const zt=gp;function Bp(n){return zp(n)}function zp(n,e){const t=Ch();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=rn,insertStaticContent:_}=n,x=(C,D,z,Z=null,K=null,te=null,he=void 0,b=null,g=!!D.dynamicChildren)=>{if(C===D)return;C&&!Ii(C,D)&&(Z=pe(C),De(C,K,te,!0),C=null),D.patchFlag===-2&&(g=!1,D.dynamicChildren=null);const{type:P,ref:k,shapeFlag:j}=D;switch(P){case Po:p(C,D,z,Z);break;case Kt:f(C,D,z,Z);break;case qo:C==null&&S(D,z,Z,he);break;case pn:O(C,D,z,Z,K,te,he,b,g);break;default:j&1?F(C,D,z,Z,K,te,he,b,g):j&6?G(C,D,z,Z,K,te,he,b,g):(j&64||j&128)&&P.process(C,D,z,Z,K,te,he,b,g,ke)}k!=null&&K&&Xa(k,C&&C.ref,te,D||C,!D)},p=(C,D,z,Z)=>{if(C==null)i(D.el=a(D.children),z,Z);else{const K=D.el=C.el;D.children!==C.children&&c(K,D.children)}},f=(C,D,z,Z)=>{C==null?i(D.el=l(D.children||""),z,Z):D.el=C.el},S=(C,D,z,Z)=>{[C.el,C.anchor]=_(C.children,D,z,Z,C.el,C.anchor)},M=({el:C,anchor:D},z,Z)=>{let K;for(;C&&C!==D;)K=d(C),i(C,z,Z),C=K;i(D,z,Z)},w=({el:C,anchor:D})=>{let z;for(;C&&C!==D;)z=d(C),s(C),C=z;s(D)},F=(C,D,z,Z,K,te,he,b,g)=>{D.type==="svg"?he="svg":D.type==="math"&&(he="mathml"),C==null?A(D,z,Z,K,te,he,b,g):E(C,D,K,te,he,b,g)},A=(C,D,z,Z,K,te,he,b)=>{let g,P;const{props:k,shapeFlag:j,transition:X,dirs:ce}=C;if(g=C.el=o(C.type,te,k&&k.is,k),j&8?u(g,C.children):j&16&&N(C.children,g,null,Z,K,Xo(C,te),he,b),ce&&Mi(C,null,Z,"created"),R(g,C,C.scopeId,he,Z),k){for(const le in k)le!=="value"&&!Ys(le)&&r(g,le,null,k[le],te,C.children,Z,K,ve);"value"in k&&r(g,"value",null,k.value,te),(P=k.onVnodeBeforeMount)&&xn(P,Z,C)}ce&&Mi(C,null,Z,"beforeMount");const oe=Hp(K,X);oe&&X.beforeEnter(g),i(g,D,z),((P=k&&k.onVnodeMounted)||oe||ce)&&zt(()=>{P&&xn(P,Z,C),oe&&X.enter(g),ce&&Mi(C,null,Z,"mounted")},K)},R=(C,D,z,Z,K)=>{if(z&&m(C,z),Z)for(let te=0;te<Z.length;te++)m(C,Z[te]);if(K){let te=K.subTree;if(D===te){const he=K.vnode;R(C,he,he.scopeId,he.slotScopeIds,K.parent)}}},N=(C,D,z,Z,K,te,he,b,g=0)=>{for(let P=g;P<C.length;P++){const k=C[P]=b?ii(C[P]):Mn(C[P]);x(null,k,D,z,Z,K,te,he,b)}},E=(C,D,z,Z,K,te,he)=>{const b=D.el=C.el;let{patchFlag:g,dynamicChildren:P,dirs:k}=D;g|=C.patchFlag&16;const j=C.props||rt,X=D.props||rt;let ce;if(z&&yi(z,!1),(ce=X.onVnodeBeforeUpdate)&&xn(ce,z,D,C),k&&Mi(D,C,z,"beforeUpdate"),z&&yi(z,!0),P?y(C.dynamicChildren,P,b,z,Z,Xo(D,K),te):he||Y(C,D,b,null,z,Z,Xo(D,K),te,!1),g>0){if(g&16)L(b,D,j,X,z,Z,K);else if(g&2&&j.class!==X.class&&r(b,"class",null,X.class,K),g&4&&r(b,"style",j.style,X.style,K),g&8){const oe=D.dynamicProps;for(let le=0;le<oe.length;le++){const xe=oe[le],ae=j[xe],Me=X[xe];(Me!==ae||xe==="value")&&r(b,xe,ae,Me,K,C.children,z,Z,ve)}}g&1&&C.children!==D.children&&u(b,D.children)}else!he&&P==null&&L(b,D,j,X,z,Z,K);((ce=X.onVnodeUpdated)||k)&&zt(()=>{ce&&xn(ce,z,D,C),k&&Mi(D,C,z,"updated")},Z)},y=(C,D,z,Z,K,te,he)=>{for(let b=0;b<D.length;b++){const g=C[b],P=D[b],k=g.el&&(g.type===pn||!Ii(g,P)||g.shapeFlag&70)?h(g.el):z;x(g,P,k,null,Z,K,te,he,!0)}},L=(C,D,z,Z,K,te,he)=>{if(z!==Z){if(z!==rt)for(const b in z)!Ys(b)&&!(b in Z)&&r(C,b,z[b],null,he,D.children,K,te,ve);for(const b in Z){if(Ys(b))continue;const g=Z[b],P=z[b];g!==P&&b!=="value"&&r(C,b,P,g,he,D.children,K,te,ve)}"value"in Z&&r(C,"value",z.value,Z.value,he)}},O=(C,D,z,Z,K,te,he,b,g)=>{const P=D.el=C?C.el:a(""),k=D.anchor=C?C.anchor:a("");let{patchFlag:j,dynamicChildren:X,slotScopeIds:ce}=D;ce&&(b=b?b.concat(ce):ce),C==null?(i(P,z,Z),i(k,z,Z),N(D.children||[],z,k,K,te,he,b,g)):j>0&&j&64&&X&&C.dynamicChildren?(y(C.dynamicChildren,X,z,K,te,he,b),(D.key!=null||K&&D===K.subTree)&&cd(C,D,!0)):Y(C,D,z,k,K,te,he,b,g)},G=(C,D,z,Z,K,te,he,b,g)=>{D.slotScopeIds=b,C==null?D.shapeFlag&512?K.ctx.activate(D,z,Z,he,g):ie(D,z,Z,K,te,he,g):re(C,D,g)},ie=(C,D,z,Z,K,te,he)=>{const b=C.component=rm(C,Z,K);if(Ro(C)&&(b.ctx.renderer=ke),am(b),b.asyncDep){if(K&&K.registerDep(b,Q,he),!C.el){const g=b.subTree=dt(Kt);f(null,g,D,z)}}else Q(b,C,D,z,K,te,he)},re=(C,D,z)=>{const Z=D.component=C.component;if(dp(C,D,z))if(Z.asyncDep&&!Z.asyncResolved){ne(Z,D,z);return}else Z.next=D,sp(Z.update),Z.effect.dirty=!0,Z.update();else D.el=C.el,Z.vnode=D},Q=(C,D,z,Z,K,te,he)=>{const b=()=>{if(C.isMounted){let{next:k,bu:j,u:X,parent:ce,vnode:oe}=C;{const Fe=ud(C);if(Fe){k&&(k.el=oe.el,ne(C,k,he)),Fe.asyncDep.then(()=>{C.isUnmounted||b()});return}}let le=k,xe;yi(C,!1),k?(k.el=oe.el,ne(C,k,he)):k=oe,j&&ko(j),(xe=k.props&&k.props.onVnodeBeforeUpdate)&&xn(xe,ce,k,oe),yi(C,!0);const ae=Go(C),Me=C.subTree;C.subTree=ae,x(Me,ae,h(Me.el),pe(Me),C,K,te),k.el=ae.el,le===null&&fp(C,ae.el),X&&zt(X,K),(xe=k.props&&k.props.onVnodeUpdated)&&zt(()=>xn(xe,ce,k,oe),K)}else{let k;const{el:j,props:X}=D,{bm:ce,m:oe,parent:le}=C,xe=Jr(D);if(yi(C,!1),ce&&ko(ce),!xe&&(k=X&&X.onVnodeBeforeMount)&&xn(k,le,D),yi(C,!0),j&&We){const ae=()=>{C.subTree=Go(C),We(j,C.subTree,C,K,null)};xe?D.type.__asyncLoader().then(()=>!C.isUnmounted&&ae()):ae()}else{const ae=C.subTree=Go(C);x(null,ae,z,Z,C,K,te),D.el=ae.el}if(oe&&zt(oe,K),!xe&&(k=X&&X.onVnodeMounted)){const ae=D;zt(()=>xn(k,le,ae),K)}(D.shapeFlag&256||le&&Jr(le.vnode)&&le.vnode.shapeFlag&256)&&C.a&&zt(C.a,K),C.isMounted=!0,D=z=Z=null}},g=C.effect=new fl(b,rn,()=>El(P),C.scope),P=C.update=()=>{g.dirty&&g.run()};P.id=C.uid,yi(C,!0),P()},ne=(C,D,z)=>{D.component=C;const Z=C.vnode.props;C.vnode=D,C.next=null,Up(C,D.props,Z,z),Op(C,D.children,z),pi(),ec(C),mi()},Y=(C,D,z,Z,K,te,he,b,g=!1)=>{const P=C&&C.children,k=C?C.shapeFlag:0,j=D.children,{patchFlag:X,shapeFlag:ce}=D;if(X>0){if(X&128){ye(P,j,z,Z,K,te,he,b,g);return}else if(X&256){ge(P,j,z,Z,K,te,he,b,g);return}}ce&8?(k&16&&ve(P,K,te),j!==P&&u(z,j)):k&16?ce&16?ye(P,j,z,Z,K,te,he,b,g):ve(P,K,te,!0):(k&8&&u(z,""),ce&16&&N(j,z,Z,K,te,he,b,g))},ge=(C,D,z,Z,K,te,he,b,g)=>{C=C||ms,D=D||ms;const P=C.length,k=D.length,j=Math.min(P,k);let X;for(X=0;X<j;X++){const ce=D[X]=g?ii(D[X]):Mn(D[X]);x(C[X],ce,z,null,K,te,he,b,g)}P>k?ve(C,K,te,!0,!1,j):N(D,z,Z,K,te,he,b,g,j)},ye=(C,D,z,Z,K,te,he,b,g)=>{let P=0;const k=D.length;let j=C.length-1,X=k-1;for(;P<=j&&P<=X;){const ce=C[P],oe=D[P]=g?ii(D[P]):Mn(D[P]);if(Ii(ce,oe))x(ce,oe,z,null,K,te,he,b,g);else break;P++}for(;P<=j&&P<=X;){const ce=C[j],oe=D[X]=g?ii(D[X]):Mn(D[X]);if(Ii(ce,oe))x(ce,oe,z,null,K,te,he,b,g);else break;j--,X--}if(P>j){if(P<=X){const ce=X+1,oe=ce<k?D[ce].el:Z;for(;P<=X;)x(null,D[P]=g?ii(D[P]):Mn(D[P]),z,oe,K,te,he,b,g),P++}}else if(P>X)for(;P<=j;)De(C[P],K,te,!0),P++;else{const ce=P,oe=P,le=new Map;for(P=oe;P<=X;P++){const Ae=D[P]=g?ii(D[P]):Mn(D[P]);Ae.key!=null&&le.set(Ae.key,P)}let xe,ae=0;const Me=X-oe+1;let Fe=!1,Pe=0;const me=new Array(Me);for(P=0;P<Me;P++)me[P]=0;for(P=ce;P<=j;P++){const Ae=C[P];if(ae>=Me){De(Ae,K,te,!0);continue}let qe;if(Ae.key!=null)qe=le.get(Ae.key);else for(xe=oe;xe<=X;xe++)if(me[xe-oe]===0&&Ii(Ae,D[xe])){qe=xe;break}qe===void 0?De(Ae,K,te,!0):(me[qe-oe]=P+1,qe>=Pe?Pe=qe:Fe=!0,x(Ae,D[qe],z,null,K,te,he,b,g),ae++)}const Oe=Fe?kp(me):ms;for(xe=Oe.length-1,P=Me-1;P>=0;P--){const Ae=oe+P,qe=D[Ae],v=Ae+1<k?D[Ae+1].el:Z;me[P]===0?x(null,qe,z,v,K,te,he,b,g):Fe&&(xe<0||P!==Oe[xe]?Se(qe,z,v,2):xe--)}}},Se=(C,D,z,Z,K=null)=>{const{el:te,type:he,transition:b,children:g,shapeFlag:P}=C;if(P&6){Se(C.component.subTree,D,z,Z);return}if(P&128){C.suspense.move(D,z,Z);return}if(P&64){he.move(C,D,z,ke);return}if(he===pn){i(te,D,z);for(let j=0;j<g.length;j++)Se(g[j],D,z,Z);i(C.anchor,D,z);return}if(he===qo){M(C,D,z);return}if(Z!==2&&P&1&&b)if(Z===0)b.beforeEnter(te),i(te,D,z),zt(()=>b.enter(te),K);else{const{leave:j,delayLeave:X,afterLeave:ce}=b,oe=()=>i(te,D,z),le=()=>{j(te,()=>{oe(),ce&&ce()})};X?X(te,oe,le):le()}else i(te,D,z)},De=(C,D,z,Z=!1,K=!1)=>{const{type:te,props:he,ref:b,children:g,dynamicChildren:P,shapeFlag:k,patchFlag:j,dirs:X,memoIndex:ce}=C;if(b!=null&&Xa(b,null,z,C,!0),ce!=null&&(D.renderCache[ce]=void 0),k&256){D.ctx.deactivate(C);return}const oe=k&1&&X,le=!Jr(C);let xe;if(le&&(xe=he&&he.onVnodeBeforeUnmount)&&xn(xe,D,C),k&6)de(C.component,z,Z);else{if(k&128){C.suspense.unmount(z,Z);return}oe&&Mi(C,null,D,"beforeUnmount"),k&64?C.type.remove(C,D,z,K,ke,Z):P&&(te!==pn||j>0&&j&64)?ve(P,D,z,!1,!0):(te===pn&&j&384||!K&&k&16)&&ve(g,D,z),Z&&Ye(C)}(le&&(xe=he&&he.onVnodeUnmounted)||oe)&&zt(()=>{xe&&xn(xe,D,C),oe&&Mi(C,null,D,"unmounted")},z)},Ye=C=>{const{type:D,el:z,anchor:Z,transition:K}=C;if(D===pn){se(z,Z);return}if(D===qo){w(C);return}const te=()=>{s(z),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(C.shapeFlag&1&&K&&!K.persisted){const{leave:he,delayLeave:b}=K,g=()=>he(z,te);b?b(C.el,te,g):g()}else te()},se=(C,D)=>{let z;for(;C!==D;)z=d(C),s(C),C=z;s(D)},de=(C,D,z)=>{const{bum:Z,scope:K,update:te,subTree:he,um:b,m:g,a:P}=C;uc(g),uc(P),Z&&ko(Z),K.stop(),te&&(te.active=!1,De(he,C,D,z)),b&&zt(b,D),zt(()=>{C.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},ve=(C,D,z,Z=!1,K=!1,te=0)=>{for(let he=te;he<C.length;he++)De(C[he],D,z,Z,K)},pe=C=>C.shapeFlag&6?pe(C.component.subTree):C.shapeFlag&128?C.suspense.next():d(C.anchor||C.el);let He=!1;const Ne=(C,D,z)=>{C==null?D._vnode&&De(D._vnode,null,null,!0):x(D._vnode||null,C,D,null,null,null,z),He||(He=!0,ec(),Yh(),He=!1),D._vnode=C},ke={p:x,um:De,m:Se,r:Ye,mt:ie,mc:N,pc:Y,pbc:y,n:pe,o:n};let I,We;return{render:Ne,hydrate:I,createApp:Lp(Ne,I)}}function Xo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function yi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Hp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function cd(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ii(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&cd(o,a)),a.type===Po&&(a.el=o.el)}}function kp(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function ud(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ud(e)}function uc(n){if(n)for(let e=0;e<n.length;e++)n[e].active=!1}const Vp=Symbol.for("v-scx"),Gp=()=>eo(Vp),Mr={};function jo(n,e,t){return hd(n,e,t)}function hd(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=rt){if(e&&r){const A=e;e=(...R)=>{A(...R),F()}}const l=It,c=A=>i===!0?A:Di(A,i===!1?1:void 0);let u,h=!1,d=!1;if(Zt(n)?(u=()=>n.value,h=za(n)):qs(n)?(u=()=>c(n),h=!0):Be(n)?(d=!0,h=n.some(A=>qs(A)||za(A)),u=()=>n.map(A=>{if(Zt(A))return A.value;if(qs(A))return c(A);if(Xe(A))return ci(A,l,2)})):Xe(n)?e?u=()=>ci(n,l,2):u=()=>(m&&m(),on(n,l,3,[_])):u=rn,e&&i){const A=u;u=()=>Di(A())}let m,_=A=>{m=M.onStop=()=>{ci(A,l,4),m=M.onStop=void 0}},x;if(Lo)if(_=rn,e?t&&on(e,l,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const A=Gp();x=A.__watcherHandles||(A.__watcherHandles=[])}else return rn;let p=d?new Array(n.length).fill(Mr):Mr;const f=()=>{if(!(!M.active||!M.dirty))if(e){const A=M.run();(i||h||(d?A.some((R,N)=>zi(R,p[N])):zi(A,p)))&&(m&&m(),on(e,l,3,[A,p===Mr?void 0:d&&p[0]===Mr?[]:p,_]),p=A)}else M.run()};f.allowRecurse=!!e;let S;s==="sync"?S=f:s==="post"?S=()=>zt(f,l&&l.suspense):(f.pre=!0,l&&(f.id=l.uid),S=()=>El(f));const M=new fl(u,rn,S),w=Rf(),F=()=>{M.stop(),w&&cl(w.effects,M)};return e?t?f():p=M.run():s==="post"?zt(M.run.bind(M),l&&l.suspense):M.run(),x&&x.push(F),F}function Wp(n,e,t){const i=this.proxy,s=Tt(n)?n.includes(".")?dd(i,n):()=>i[n]:n.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,t=e);const o=ar(this),a=hd(s,r.bind(i),t);return o(),a}function dd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Di(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Zt(n))Di(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)Di(n[i],e,t);else if(ff(n)||js(n))n.forEach(i=>{Di(i,e,t)});else if(gf(n)){for(const i in n)Di(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Di(n[i],e,t)}return n}const Ro=n=>n.type.__isKeepAlive;function Xp(n,e){fd(n,"a",e)}function jp(n,e){fd(n,"da",e)}function fd(n,e,t=It){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Co(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ro(s.parent.vnode)&&Yp(i,e,t,s),s=s.parent}}function Yp(n,e,t,i){const s=Co(e,n,i,!0);Qh(()=>{cl(i[e],s)},t)}const ni=Symbol("_leaveCb"),yr=Symbol("_enterCb");function qp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kh(()=>{n.isMounted=!0}),Zh(()=>{n.isUnmounting=!0}),n}const Jt=[Function,Array],pd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt},md=n=>{const e=n.subTree;return e.component?md(e.component):e},$p={name:"BaseTransition",props:pd,setup(n,{slots:e}){const t=om(),i=qp();return()=>{const s=e.default&&_d(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const d of s)if(d.type!==Kt){r=d;break}}const o=tt(n),{mode:a}=o;if(i.isLeaving)return Yo(r);const l=hc(r);if(!l)return Yo(r);let c=ja(l,o,i,t,d=>c=d);ao(l,c);const u=t.subTree,h=u&&hc(u);if(h&&h.type!==Kt&&!Ii(l,h)&&md(t).type!==Kt){const d=ja(h,o,i,t);if(ao(h,d),a==="out-in"&&l.type!==Kt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Yo(r);a==="in-out"&&l.type!==Kt&&(d.delayLeave=(m,_,x)=>{const p=gd(i,h);p[String(h.key)]=h,m[ni]=()=>{_(),m[ni]=void 0,delete c.delayedLeave},c.delayedLeave=x})}return r}}},Kp=$p;function gd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ja(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:m,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:p,onAppear:f,onAfterAppear:S,onAppearCancelled:M}=e,w=String(n.key),F=gd(t,n),A=(E,y)=>{E&&on(E,i,9,y)},R=(E,y)=>{const L=y[1];A(E,y),Be(E)?E.every(O=>O.length<=1)&&L():E.length<=1&&L()},N={mode:o,persisted:a,beforeEnter(E){let y=l;if(!t.isMounted)if(r)y=p||l;else return;E[ni]&&E[ni](!0);const L=F[w];L&&Ii(n,L)&&L.el[ni]&&L.el[ni](),A(y,[E])},enter(E){let y=c,L=u,O=h;if(!t.isMounted)if(r)y=f||c,L=S||u,O=M||h;else return;let G=!1;const ie=E[yr]=re=>{G||(G=!0,re?A(O,[E]):A(L,[E]),N.delayedLeave&&N.delayedLeave(),E[yr]=void 0)};y?R(y,[E,ie]):ie()},leave(E,y){const L=String(n.key);if(E[yr]&&E[yr](!0),t.isUnmounting)return y();A(d,[E]);let O=!1;const G=E[ni]=ie=>{O||(O=!0,y(),ie?A(x,[E]):A(_,[E]),E[ni]=void 0,F[L]===n&&delete F[L])};F[L]=n,m?R(m,[E,G]):G()},clone(E){const y=ja(E,e,t,i,s);return s&&s(y),y}};return N}function Yo(n){if(Ro(n))return n=hi(n),n.children=null,n}function hc(n){if(!Ro(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Xe(t.default))return t.default()}}function ao(n,e){n.shapeFlag&6&&n.component?ao(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function _d(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===pn?(o.patchFlag&128&&s++,i=i.concat(_d(o.children,e,a))):(e||o.type!==Kt)&&i.push(a!=null?hi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}const Zp=n=>n.__isTeleport,pn=Symbol.for("v-fgt"),Po=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),qo=Symbol.for("v-stc"),Zs=[];let vn=null;function wt(n=!1){Zs.push(vn=n?null:[])}function Qp(){Zs.pop(),vn=Zs[Zs.length-1]||null}let nr=1;function dc(n){nr+=n}function vd(n){return n.dynamicChildren=nr>0?vn||ms:null,Qp(),nr>0&&vn&&vn.push(n),n}function Pt(n,e,t,i,s,r){return vd(H(n,e,t,i,s,r,!0))}function Jp(n,e,t,i,s){return vd(dt(n,e,t,i,s,!0))}function Ya(n){return n?n.__v_isVNode===!0:!1}function Ii(n,e){return n.type===e.type&&n.key===e.key}const xd=({key:n})=>n??null,to=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||Zt(n)||Xe(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function H(n,e=null,t=null,i=0,s=null,r=n===pn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&xd(e),ref:e&&to(e),scopeId:Ao,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return a?(wl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),nr>0&&!o&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const dt=em;function em(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===pp)&&(n=Kt),Ya(n)){const a=hi(n,e,!0);return t&&wl(a,t),nr>0&&!r&&vn&&(a.shapeFlag&6?vn[vn.indexOf(n)]=a:vn.push(a)),a.patchFlag=-2,a}if(hm(n)&&(n=n.__vccOpts),e){e=tm(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=dl(a)),ht(l)&&(Vh(l)&&!Be(l)&&(l=vt({},l)),e.style=hl(l))}const o=Tt(n)?1:mp(n)?128:Zp(n)?64:ht(n)?4:Xe(n)?2:0;return H(n,e,t,i,s,o,r,!0)}function tm(n){return n?Vh(n)||id(n)?vt({},n):n:null}function hi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?nm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&xd(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(to(e)):[r,to(e)]:to(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==pn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&hi(n.ssContent),ssFallback:n.ssFallback&&hi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ao(u,l.clone(u)),u}function ot(n=" ",e=0){return dt(Po,null,n,e)}function qt(n="",e=!1){return e?(wt(),Jp(Kt,null,n)):dt(Kt,null,n)}function Mn(n){return n==null||typeof n=="boolean"?dt(Kt):Be(n)?dt(pn,null,n.slice()):typeof n=="object"?ii(n):dt(Po,null,String(n))}function ii(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:hi(n)}function wl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),wl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!id(e)?e._ctx=_n:s===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[ot(e)]):t=8);n.children=e,n.shapeFlag|=t}function nm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=dl([e.class,i.class]));else if(s==="style")e.style=hl([e.style,i.style]);else if(yo(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function xn(n,e,t,i=null){on(n,e,7,[t,i])}const im=ed();let sm=0;function rm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||im,r={uid:sm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Af(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rd(i,s),emitsOptions:$h(i,s),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:i.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ap.bind(null,r),n.ce&&n.ce(r),r}let It=null;const om=()=>It||_n;let lo,qa;{const n=Ch(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};lo=e("__VUE_INSTANCE_SETTERS__",t=>It=t),qa=e("__VUE_SSR_SETTERS__",t=>Lo=t)}const ar=n=>{const e=It;return lo(n),n.scope.on(),()=>{n.scope.off(),lo(e)}},fc=()=>{It&&It.scope.off(),lo(null)};function Md(n){return n.vnode.shapeFlag&4}let Lo=!1;function am(n,e=!1){e&&qa(e);const{props:t,children:i}=n.vnode,s=Md(n);Ip(n,t,s,e),Fp(n,i);const r=s?lm(n,e):void 0;return e&&qa(!1),r}function lm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,bp);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?um(n):null,r=ar(n);pi();const o=ci(i,n,0,[n.props,s]);if(mi(),r(),Th(o)){if(o.then(fc,fc),e)return o.then(a=>{pc(n,a,e)}).catch(a=>{To(a,n,0)});n.asyncDep=o}else pc(n,o,e)}else yd(n,e)}function pc(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=Wh(e)),yd(n,t)}let mc;function yd(n,e,t){const i=n.type;if(!n.render){if(!e&&mc&&!i.render){const s=i.template||bl(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=vt(vt({isCustomElement:r,delimiters:a},o),l);i.render=mc(s,c)}}n.render=i.render||rn}{const s=ar(n);pi();try{Tp(n)}finally{mi(),s()}}}const cm={get(n,e){return Vt(n,"get",""),n[e]}};function um(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,cm),slots:n.slots,emit:n.emit,expose:e}}function Al(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Wh(Kf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in $s)return $s[t](n)},has(e,t){return t in e||t in $s}})):n.proxy}function hm(n){return Xe(n)&&"__vccOpts"in n}const dm=(n,e)=>Zf(n,e,Lo);function fm(n,e,t){const i=arguments.length;return i===2?ht(e)&&!Be(e)?Ya(e)?dt(n,null,[e]):dt(n,e):dt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ya(t)&&(t=[t]),dt(n,e,t))}const pm="3.4.29";/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mm="http://www.w3.org/2000/svg",gm="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,gc=Un&&Un.createElement("template"),_m={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Un.createElementNS(mm,n):e==="mathml"?Un.createElementNS(gm,n):t?Un.createElement(n,{is:t}):Un.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Un.createTextNode(n),createComment:n=>Un.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Un.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{gc.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=gc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},jn="transition",Is="animation",ir=Symbol("_vtc"),Nn=(n,{slots:e})=>fm(Kp,vm(n),e);Nn.displayName="Transition";const Sd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Nn.props=vt({},pd,Sd);const Si=(n,e=[])=>{Be(n)?n.forEach(t=>t(...e)):n&&n(...e)},_c=n=>n?Be(n)?n.some(e=>e.length>1):n.length>1:!1;function vm(n){const e={};for(const O in n)O in Sd||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,_=xm(s),x=_&&_[0],p=_&&_[1],{onBeforeEnter:f,onEnter:S,onEnterCancelled:M,onLeave:w,onLeaveCancelled:F,onBeforeAppear:A=f,onAppear:R=S,onAppearCancelled:N=M}=e,E=(O,G,ie)=>{Ei(O,G?u:a),Ei(O,G?c:o),ie&&ie()},y=(O,G)=>{O._isLeaving=!1,Ei(O,h),Ei(O,m),Ei(O,d),G&&G()},L=O=>(G,ie)=>{const re=O?R:S,Q=()=>E(G,O,ie);Si(re,[G,Q]),vc(()=>{Ei(G,O?l:r),Yn(G,O?u:a),_c(re)||xc(G,i,x,Q)})};return vt(e,{onBeforeEnter(O){Si(f,[O]),Yn(O,r),Yn(O,o)},onBeforeAppear(O){Si(A,[O]),Yn(O,l),Yn(O,c)},onEnter:L(!1),onAppear:L(!0),onLeave(O,G){O._isLeaving=!0;const ie=()=>y(O,G);Yn(O,h),Yn(O,d),Sm(),vc(()=>{O._isLeaving&&(Ei(O,h),Yn(O,m),_c(w)||xc(O,i,p,ie))}),Si(w,[O,ie])},onEnterCancelled(O){E(O,!1),Si(M,[O])},onAppearCancelled(O){E(O,!0),Si(N,[O])},onLeaveCancelled(O){y(O),Si(F,[O])}})}function xm(n){if(n==null)return null;if(ht(n))return[$o(n.enter),$o(n.leave)];{const e=$o(n);return[e,e]}}function $o(n){return Mf(n)}function Yn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ir]||(n[ir]=new Set)).add(e)}function Ei(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ir];t&&(t.delete(e),t.size||(n[ir]=void 0))}function vc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Mm=0;function xc(n,e,t,i){const s=n._endId=++Mm,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=ym(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=m=>{m.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function ym(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${jn}Delay`),r=i(`${jn}Duration`),o=Mc(s,r),a=i(`${Is}Delay`),l=i(`${Is}Duration`),c=Mc(a,l);let u=null,h=0,d=0;e===jn?o>0&&(u=jn,h=o,d=r.length):e===Is?c>0&&(u=Is,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?jn:Is:null,d=u?u===jn?r.length:l.length:0);const m=u===jn&&/\b(transform|all)(,|$)/.test(i(`${jn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:m}}function Mc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>yc(t)+yc(n[i])))}function yc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Sm(){return document.body.offsetHeight}function Em(n,e,t){const i=n[ir];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Sc=Symbol("_vod"),bm=Symbol("_vsh"),Tm=Symbol(""),wm=/(^|;)\s*display\s*:/;function Am(n,e,t){const i=n.style,s=Tt(t);let r=!1;if(t&&!s){if(e)if(Tt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&no(i,a,"")}else for(const o in e)t[o]==null&&no(i,o,"");for(const o in t)o==="display"&&(r=!0),no(i,o,t[o])}else if(s){if(e!==t){const o=i[Tm];o&&(t+=";"+o),i.cssText=t,r=wm.test(t)}}else e&&n.removeAttribute("style");Sc in n&&(n[Sc]=r?i.display:"",n[bm]&&(i.display="none"))}const Ec=/\s*!important$/;function no(n,e,t){if(Be(t))t.forEach(i=>no(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Cm(n,e);Ec.test(t)?n.setProperty(Cs(i),t.replace(Ec,""),"important"):n[i]=t}}const bc=["Webkit","Moz","ms"],Ko={};function Cm(n,e){const t=Ko[e];if(t)return t;let i=ys(e);if(i!=="filter"&&i in n)return Ko[e]=i;i=wh(i);for(let s=0;s<bc.length;s++){const r=bc[s]+i;if(r in n)return Ko[e]=r}return e}const Tc="http://www.w3.org/1999/xlink";function wc(n,e,t,i,s,r=wf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Tc,e.slice(6,e.length)):n.setAttributeNS(Tc,e,t):t==null||r&&!Rh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":String(t))}function Rm(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t==null?"":String(t);(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Rh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Pm(n,e,t,i){n.addEventListener(e,t,i)}function Lm(n,e,t,i){n.removeEventListener(e,t,i)}const Ac=Symbol("_vei");function Dm(n,e,t,i,s=null){const r=n[Ac]||(n[Ac]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Im(e);if(i){const c=r[e]=Fm(i,s);Pm(n,a,c,l)}else o&&(Lm(n,a,o,l),r[e]=void 0)}}const Cc=/(?:Once|Passive|Capture)$/;function Im(n){let e;if(Cc.test(n)){e={};let i;for(;i=n.match(Cc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Cs(n.slice(2)),e]}let Zo=0;const Um=Promise.resolve(),Nm=()=>Zo||(Um.then(()=>Zo=0),Zo=Date.now());function Fm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;on(Om(i,t.value),e,5,[i])};return t.value=n,t.attached=Nm(),t}function Om(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Rc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Bm=(n,e,t,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?Em(n,i,c):e==="style"?Am(n,t,i):yo(e)?ll(e)||Dm(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zm(n,e,i,c))?(Rm(n,e,i,r,o,a,l),(e==="value"||e==="checked"||e==="selected")&&wc(n,e,i,c,o,e!=="value")):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),wc(n,e,i,c))};function zm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Rc(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Rc(e)&&Tt(t)?!1:e in n}const Hm=vt({patchProp:Bm},_m);let Pc;function km(){return Pc||(Pc=Bp(Hm))}const Vm=(...n)=>{const e=km().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Wm(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,Gm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Gm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Wm(n){return Tt(n)?document.querySelector(n):n}const Xm="/marsisaplace/video/scrollWeb.webm",jm="/marsisaplace/video/clickWeb.webm";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="165",Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ym=0,Lc=1,qm=2,Ed=1,bd=2,In=3,di=0,kt=1,nn=2,zn=0,_s=1,$a=2,Dc=3,Ic=4,$m=5,Ui=100,Km=101,Zm=102,Qm=103,Jm=104,eg=200,tg=201,ng=202,ig=203,Ka=204,Za=205,sg=206,rg=207,og=208,ag=209,lg=210,cg=211,ug=212,hg=213,dg=214,fg=0,pg=1,mg=2,co=3,gg=4,_g=5,vg=6,xg=7,Rl=0,Mg=1,yg=2,ui=0,Td=1,wd=2,Ad=3,Pl=4,Sg=5,Cd=6,Rd=7,Pd=300,Ss=301,Hi=302,Qa=303,Ja=304,Do=306,el=1e3,Fn=1001,tl=1002,Ht=1003,Eg=1004,Sr=1005,sn=1006,Qo=1007,Fi=1008,fi=1009,bg=1010,Tg=1011,uo=1012,Ld=1013,Es=1014,ai=1015,Rs=1016,Dd=1017,Id=1018,bs=1020,wg=35902,Ag=1021,Cg=1022,En=1023,Rg=1024,Pg=1025,vs=1026,Ts=1027,Lg=1028,Ud=1029,Dg=1030,Nd=1031,Fd=1033,Jo=33776,ea=33777,ta=33778,na=33779,Uc=35840,Nc=35841,Fc=35842,Oc=35843,Bc=36196,zc=37492,Hc=37496,kc=37808,Vc=37809,Gc=37810,Wc=37811,Xc=37812,jc=37813,Yc=37814,qc=37815,$c=37816,Kc=37817,Zc=37818,Qc=37819,Jc=37820,eu=37821,ia=36492,tu=36494,nu=36495,Ig=36283,iu=36284,su=36285,ru=36286,Ug=3200,Ng=3201,Od=0,Fg=1,oi="",fn="srgb",gi="srgb-linear",Ll="display-p3",Io="display-p3-linear",ho="linear",it="srgb",fo="rec709",po="p3",Xi=7680,ou=519,Og=512,Bg=513,zg=514,Bd=515,Hg=516,kg=517,Vg=518,Gg=519,nl=35044,au="300 es",On=2e3,mo=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lu=1234567;const Qs=Math.PI/180,sr=180/Math.PI;function Hn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Dl(n,e){return(n%e+e)%e}function Wg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Xg(n,e,t){return n!==e?(t-n)/(e-n):0}function Js(n,e,t){return(1-t)*n+t*e}function jg(n,e,t,i){return Js(n,e,1-Math.exp(-t*i))}function Yg(n,e=1){return e-Math.abs(Dl(n,e*2)-e)}function qg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $g(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zg(n,e){return n+Math.random()*(e-n)}function Qg(n){return n*(.5-Math.random())}function Jg(n){n!==void 0&&(lu=n);let e=lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e_(n){return n*Qs}function t_(n){return n*sr}function n_(n){return(n&n-1)===0&&n!==0}function i_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function s_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function r_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),m=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const o_={DEG2RAD:Qs,RAD2DEG:sr,generateUUID:Hn,clamp:Lt,euclideanModulo:Dl,mapLinear:Wg,inverseLerp:Xg,lerp:Js,damp:jg,pingpong:Yg,smoothstep:qg,smootherstep:$g,randInt:Kg,randFloat:Zg,randFloatSpread:Qg,seededRandom:Jg,degToRad:e_,radToDeg:t_,isPowerOfTwo:n_,ceilPowerOfTwo:i_,floorPowerOfTwo:s_,setQuaternionFromProperEuler:r_,normalize:et,denormalize:mn};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],_=i[8],x=s[0],p=s[3],f=s[6],S=s[1],M=s[4],w=s[7],F=s[2],A=s[5],R=s[8];return r[0]=o*x+a*S+l*F,r[3]=o*p+a*M+l*A,r[6]=o*f+a*w+l*R,r[1]=c*x+u*S+h*F,r[4]=c*p+u*M+h*A,r[7]=c*f+u*w+h*R,r[2]=d*x+m*S+_*F,r[5]=d*p+m*M+_*A,r[8]=d*f+m*w+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,m=c*r-o*l,_=t*h+i*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sa.makeScale(e,t)),this}rotate(e){return this.premultiply(sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new Ge;function zd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function a_(){const n=rr("canvas");return n.style.display="block",n}const cu={};function Il(n){n in cu||(cu[n]=!0,console.warn(n))}function l_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const uu=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hu=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Er={[gi]:{transfer:ho,primaries:fo,toReference:n=>n,fromReference:n=>n},[fn]:{transfer:it,primaries:fo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Io]:{transfer:ho,primaries:po,toReference:n=>n.applyMatrix3(hu),fromReference:n=>n.applyMatrix3(uu)},[Ll]:{transfer:it,primaries:po,toReference:n=>n.convertSRGBToLinear().applyMatrix3(hu),fromReference:n=>n.applyMatrix3(uu).convertLinearToSRGB()}},c_=new Set([gi,Io]),Qe={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!c_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Er[e].toReference,s=Er[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Er[n].primaries},getTransfer:function(n){return n===oi?ho:Er[n].transfer}};function xs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ra(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ji;class u_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=rr("canvas")),ji.width=e.width,ji.height=e.height;const i=ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xs(t[i]/255)*255):t[i]=xs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h_=0;class Hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oa(s[o].image)):r.push(oa(s[o]))}else r=oa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?u_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d_=0;class Ut extends Vi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=Fn,s=Fn,r=sn,o=Fi,a=En,l=fi,c=Ut.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Hn(),this.name="",this.source=new Hd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case el:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case el:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Pd;Ut.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(m+1)/2,F=(f+1)/2,A=(u+d)/4,R=(h+x)/4,N=(_+p)/4;return M>w&&M>F?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=R/i):w>F?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=A/s,r=N/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=R/r,s=N/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-x)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f_ extends Vi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ut(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends f_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kd extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class p_ extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==d||c!==m||u!==_){let p=1-a;const f=l*d+c*m+u*_+h*x,S=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const F=Math.sqrt(M),A=Math.atan2(F,f*S);p=Math.sin(p*A)/F,a=Math.sin(a*A)/F}const w=a*S;if(l=l*p+d*w,c=c*p+m*w,u=u*p+_*w,h=h*p+x*w,p===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=F,c*=F,u*=F,h*=F}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*m-c*d,e[t+1]=l*_+u*d+c*h-a*m,e[t+2]=c*_+u*m+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new U,du=new ki;class lr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),br.copy(i.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Tr.subVectors(this.max,Us),Yi.subVectors(e.a,Us),qi.subVectors(e.b,Us),$i.subVectors(e.c,Us),qn.subVectors(qi,Yi),$n.subVectors($i,qi),bi.subVectors(Yi,$i);let t=[0,-qn.z,qn.y,0,-$n.z,$n.y,0,-bi.z,bi.y,qn.z,0,-qn.x,$n.z,0,-$n.x,bi.z,0,-bi.x,-qn.y,qn.x,0,-$n.y,$n.x,0,-bi.y,bi.x,0];return!la(t,Yi,qi,$i,Tr)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Yi,qi,$i,Tr))?!1:(wr.crossVectors(qn,$n),t=[wr.x,wr.y,wr.z],la(t,Yi,qi,$i,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new U,new U,new U,new U,new U,new U,new U,new U],cn=new U,br=new lr,Yi=new U,qi=new U,$i=new U,qn=new U,$n=new U,bi=new U,Us=new U,Tr=new U,wr=new U,Ti=new U;function la(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ti.fromArray(n,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),u=i.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const m_=new lr,Ns=new U,ca=new U;class cr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):m_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ns,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(ca)),this.expandByPoint(Ns.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new U,ua=new U,Ar=new U,Kn=new U,ha=new U,Cr=new U,da=new U;class ur{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ua.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(ua);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ar),a=Kn.dot(this.direction),l=-Kn.dot(Ar),c=Kn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ua).addScaledVector(Ar,d),m}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),s=Cn.dot(Cn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,s,r){ha.subVectors(t,e),Cr.subVectors(i,e),da.crossVectors(ha,Cr);let o=this.direction.dot(da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(Cr.crossVectors(Kn,Cr));if(l<0)return null;const c=a*this.direction.dot(ha.cross(Kn));if(c<0||l+c>o)return null;const u=-a*Kn.dot(da);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,s,r,o,a,l,c,u,h,d,m,_,x,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,m,_,x,p)}set(e,t,i,s,r,o,a,l,c,u,h,d,m,_,x,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,_=c*u,x=c*h;t[0]=d+x*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,_=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g_,e,__)}lookAt(e,t,i){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Zn.crossVectors(i,jt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Zn.crossVectors(i,jt)),Zn.normalize(),Rr.crossVectors(jt,Zn),s[0]=Zn.x,s[4]=Rr.x,s[8]=jt.x,s[1]=Zn.y,s[5]=Rr.y,s[9]=jt.y,s[2]=Zn.z,s[6]=Rr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],_=i[2],x=i[6],p=i[10],f=i[14],S=i[3],M=i[7],w=i[11],F=i[15],A=s[0],R=s[4],N=s[8],E=s[12],y=s[1],L=s[5],O=s[9],G=s[13],ie=s[2],re=s[6],Q=s[10],ne=s[14],Y=s[3],ge=s[7],ye=s[11],Se=s[15];return r[0]=o*A+a*y+l*ie+c*Y,r[4]=o*R+a*L+l*re+c*ge,r[8]=o*N+a*O+l*Q+c*ye,r[12]=o*E+a*G+l*ne+c*Se,r[1]=u*A+h*y+d*ie+m*Y,r[5]=u*R+h*L+d*re+m*ge,r[9]=u*N+h*O+d*Q+m*ye,r[13]=u*E+h*G+d*ne+m*Se,r[2]=_*A+x*y+p*ie+f*Y,r[6]=_*R+x*L+p*re+f*ge,r[10]=_*N+x*O+p*Q+f*ye,r[14]=_*E+x*G+p*ne+f*Se,r[3]=S*A+M*y+w*ie+F*Y,r[7]=S*R+M*L+w*re+F*ge,r[11]=S*N+M*O+w*Q+F*ye,r[15]=S*E+M*G+w*ne+F*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],x=e[7],p=e[11],f=e[15];return _*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*m-i*l*m)+x*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+p*(+t*c*h-t*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],x=e[13],p=e[14],f=e[15],S=h*p*c-x*d*c+x*l*m-a*p*m-h*l*f+a*d*f,M=_*d*c-u*p*c-_*l*m+o*p*m+u*l*f-o*d*f,w=u*x*c-_*h*c+_*a*m-o*x*m-u*a*f+o*h*f,F=_*h*l-u*x*l-_*a*d+o*x*d+u*a*p-o*h*p,A=t*S+i*M+s*w+r*F;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=S*R,e[1]=(x*d*r-h*p*r-x*s*m+i*p*m+h*s*f-i*d*f)*R,e[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*f+i*l*f)*R,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*m-i*l*m)*R,e[4]=M*R,e[5]=(u*p*r-_*d*r+_*s*m-t*p*m-u*s*f+t*d*f)*R,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*f-t*l*f)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*m+t*l*m)*R,e[8]=w*R,e[9]=(_*h*r-u*x*r-_*i*m+t*x*m+u*i*f-t*h*f)*R,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*f+t*a*f)*R,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*m-t*a*m)*R,e[12]=F*R,e[13]=(u*x*s-_*h*s+_*i*d-t*x*d-u*i*p+t*h*p)*R,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*p-t*a*p)*R,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,m=r*u,_=r*h,x=o*u,p=o*h,f=a*h,S=l*c,M=l*u,w=l*h,F=i.x,A=i.y,R=i.z;return s[0]=(1-(x+f))*F,s[1]=(m+w)*F,s[2]=(_-M)*F,s[3]=0,s[4]=(m-w)*A,s[5]=(1-(d+f))*A,s[6]=(p+S)*A,s[7]=0,s[8]=(_+M)*R,s[9]=(p-S)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);const c=1/r,u=1/o,h=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=On){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let m,_;if(a===On)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===mo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=On){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,m=(i+s)*u;let _,x;if(a===On)_=(o+r)*h,x=-2*h;else if(a===mo)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new U,un=new st,g_=new U(0,0,0),__=new U(1,1,1),Zn=new U,Rr=new U,jt=new U,fu=new st,pu=new ki;class bn{constructor(e=0,t=0,i=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v_=0;const mu=new U,Zi=new ki,Rn=new st,Pr=new U,Fs=new U,x_=new U,M_=new ki,gu=new U(1,0,0),_u=new U(0,1,0),vu=new U(0,0,1),xu={type:"added"},y_={type:"removed"},Qi={type:"childadded",child:null},fa={type:"childremoved",child:null};class _t extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new U,t=new bn,i=new ki,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Ge}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(gu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pr.copy(e):Pr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Fs,Pr,this.up):Rn.lookAt(Pr,Fs,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y_),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,x_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,M_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}_t.DEFAULT_UP=new U(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new U,Pn=new U,pa=new U,Ln=new U,Ji=new U,es=new U,Mu=new U,ma=new U,ga=new U,_a=new U;class gn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){hn.subVectors(s,t),Pn.subVectors(i,t),pa.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Pn),l=hn.dot(pa),c=Pn.dot(Pn),u=Pn.dot(pa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static isFrontFacing(e,t,i,s){return hn.subVectors(i,t),Pn.subVectors(e,t),hn.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,i),es.subVectors(r,i),ma.subVectors(e,i);const l=Ji.dot(ma),c=es.dot(ma);if(l<=0&&c<=0)return t.copy(i);ga.subVectors(e,s);const u=Ji.dot(ga),h=es.dot(ga);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ji,o);_a.subVectors(e,r);const m=Ji.dot(_a),_=es.dot(_a);if(_>=0&&m<=_)return t.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(es,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return Mu.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(Mu,a);const f=1/(p+x+d);return o=x*f,a=d*f,t.copy(i).addScaledVector(Ji,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=Dl(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=va(o,r,e+1/3),this.g=va(o,r,e),this.b=va(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=Vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Qe.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Lt(Rt.r*255,0,255))*65536+Math.round(Lt(Rt.g*255,0,255))*256+Math.round(Lt(Rt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,s=Rt.g,r=Rt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=fn){Qe.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,s=Rt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Lr);const i=Js(Qn.h,Lr.h,t),s=Js(Qn.s,Lr.s,t),r=Js(Qn.l,Lr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new je;je.NAMES=Vd;let S_=0;class Tn extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=_s,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Za,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Za&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hr extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new U,Dr=new we;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Il("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),s=et(s,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nl&&(e.usage=this.usage),e}}class Gd extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wd extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let E_=0;const en=new st,xa=new _t,ts=new U,Yt=new lr,Os=new lr,St=new U;class At extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?Wd:Gd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Yt.min,Os.min),Yt.expandByPoint(St),St.addVectors(Yt.max,Os.max),Yt.expandByPoint(St)):(Yt.expandByPoint(Os.min),Yt.expandByPoint(Os.max))}Yt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(St));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),St.add(ts)),s=Math.max(s,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new U,l[N]=new U;const c=new U,u=new U,h=new U,d=new we,m=new we,_=new we,x=new U,p=new U;function f(N,E,y){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),d.fromBufferAttribute(r,N),m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,y),u.sub(c),h.sub(c),m.sub(d),_.sub(d);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(L),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(L),a[N].add(x),a[E].add(x),a[y].add(x),l[N].add(p),l[E].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,E=S.length;N<E;++N){const y=S[N],L=y.start,O=y.count;for(let G=L,ie=L+O;G<ie;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const M=new U,w=new U,F=new U,A=new U;function R(N){F.fromBufferAttribute(s,N),A.copy(F);const E=a[N];M.copy(E),M.sub(F.multiplyScalar(F.dot(E))).normalize(),w.crossVectors(A,E);const L=w.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,L)}for(let N=0,E=S.length;N<E;++N){const y=S[N],L=y.start,O=y.count;for(let G=L,ie=L+O;G<ie;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let f=0;f<u;f++)d[_++]=c[m++]}return new an(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new st,wi=new ur,Ir=new cr,Su=new U,ns=new U,is=new U,ss=new U,Ma=new U,Ur=new U,Nr=new we,Fr=new we,Or=new we,Eu=new U,bu=new U,Tu=new U,Br=new U,zr=new U;class bt extends _t{constructor(e=new At,t=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ma.fromBufferAttribute(h,e),o?Ur.addScaledVector(Ma,u):Ur.addScaledVector(Ma.sub(t),u))}t.add(Ur)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Ir.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Ir,Su)===null||wi.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(yu.copy(r).invert(),wi.copy(e.ray).applyMatrix4(yu),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],f=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,F=M;w<F;w+=3){const A=a.getX(w),R=a.getX(w+1),N=a.getX(w+2);s=Hr(this,f,e,i,c,u,h,A,R,N),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const S=a.getX(p),M=a.getX(p+1),w=a.getX(p+2);s=Hr(this,o,e,i,c,u,h,S,M,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],f=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,F=M;w<F;w+=3){const A=w,R=w+1,N=w+2;s=Hr(this,f,e,i,c,u,h,A,R,N),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const S=p,M=p+1,w=p+2;s=Hr(this,o,e,i,c,u,h,S,M,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function b_(n,e,t,i,s,r,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===di,a),l===null)return null;zr.copy(a),zr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:n}}function Hr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ns),n.getVertexPosition(l,is),n.getVertexPosition(c,ss);const u=b_(n,e,t,i,ns,is,ss,Br);if(u){s&&(Nr.fromBufferAttribute(s,a),Fr.fromBufferAttribute(s,l),Or.fromBufferAttribute(s,c),u.uv=gn.getInterpolation(Br,ns,is,ss,Nr,Fr,Or,new we)),r&&(Nr.fromBufferAttribute(r,a),Fr.fromBufferAttribute(r,l),Or.fromBufferAttribute(r,c),u.uv1=gn.getInterpolation(Br,ns,is,ss,Nr,Fr,Or,new we)),o&&(Eu.fromBufferAttribute(o,a),bu.fromBufferAttribute(o,l),Tu.fromBufferAttribute(o,c),u.normal=gn.getInterpolation(Br,ns,is,ss,Eu,bu,Tu,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};gn.getNormal(ns,is,ss,h.normal),u.face=h}return u}class Ps extends At{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(h,2));function _(x,p,f,S,M,w,F,A,R,N,E){const y=w/R,L=F/N,O=w/2,G=F/2,ie=A/2,re=R+1,Q=N+1;let ne=0,Y=0;const ge=new U;for(let ye=0;ye<Q;ye++){const Se=ye*L-G;for(let De=0;De<re;De++){const Ye=De*y-O;ge[x]=Ye*S,ge[p]=Se*M,ge[f]=ie,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[p]=0,ge[f]=A>0?1:-1,u.push(ge.x,ge.y,ge.z),h.push(De/R),h.push(1-ye/N),ne+=1}}for(let ye=0;ye<N;ye++)for(let Se=0;Se<R;Se++){const De=d+Se+re*ye,Ye=d+Se+re*(ye+1),se=d+(Se+1)+re*(ye+1),de=d+(Se+1)+re*ye;l.push(De,Ye,de),l.push(Ye,se,de),Y+=6}a.addGroup(m,Y,E),m+=Y,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=ws(n[t]);for(const s in i)e[s]=i[s]}return e}function T_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Uo={clone:ws,merge:Bt};var w_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w_,this.fragmentShader=A_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=T_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jd extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new U,wu=new we,Au=new we;class $t extends jd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Au),t.subVectors(Au,wu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class C_ extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $t(rs,os,e,t);s.layers=this.layers,this.add(s);const r=new $t(rs,os,e,t);r.layers=this.layers,this.add(r);const o=new $t(rs,os,e,t);o.layers=this.layers,this.add(o);const a=new $t(rs,os,e,t);a.layers=this.layers,this.add(a);const l=new $t(rs,os,e,t);l.layers=this.layers,this.add(l);const c=new $t(rs,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Nl extends Ut{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ss,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R_ extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Nl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ps(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:zn});r.uniforms.tEquirect.value=t;const o=new bt(s,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=sn),new C_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ya=new U,P_=new U,L_=new Ge;class si{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ya.subVectors(i,t).cross(P_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ya),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||L_.getNormalMatrix(e),s=this.coplanarPoint(ya).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new cr,kr=new U;class Fl{constructor(e=new si,t=new si,i=new si,s=new si,r=new si,o=new si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],m=s[8],_=s[9],x=s[10],p=s[11],f=s[12],S=s[13],M=s[14],w=s[15];if(i[0].setComponents(l-r,d-c,p-m,w-f).normalize(),i[1].setComponents(l+r,d+c,p+m,w+f).normalize(),i[2].setComponents(l+o,d+u,p+_,w+S).normalize(),i[3].setComponents(l-o,d-u,p-_,w-S).normalize(),i[4].setComponents(l-a,d-h,p-x,w-M).normalize(),t===On)i[5].setComponents(l+a,d+h,p+x,w+M).normalize();else if(t===mo)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(kr.x=s.normal.x>0?e.max.x:e.min.x,kr.y=s.normal.y>0?e.max.y:e.min.y,kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function D_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let m=0,_=d.length;m<_;m++){const x=d[m];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class As extends At{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,m=[],_=[],x=[],p=[];for(let f=0;f<u;f++){const S=f*d-o;for(let M=0;M<c;M++){const w=M*h-r;_.push(w,-S,0),x.push(0,0,1),p.push(M/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){const M=S+c*f,w=S+c*(f+1),F=S+1+c*(f+1),A=S+1+c*f;m.push(M,w,A),m.push(w,F,A)}this.setIndex(m),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.widthSegments,e.heightSegments)}}var I_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U_=`#ifdef USE_ALPHAHASH
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
#endif`,N_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z_=`#ifdef USE_AOMAP
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
#endif`,H_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k_=`#ifdef USE_BATCHING
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
#endif`,V_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,G_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j_=`#ifdef USE_IRIDESCENCE
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
#endif`,Y_=`#ifdef USE_BUMPMAP
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,n0=`#define PI 3.141592653589793
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
} // validated`,i0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s0=`vec3 transformedNormal = objectNormal;
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
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`
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
}`,h0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b0=`uniform bool receiveShadow;
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
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,w0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
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
#endif`,L0=`struct PhysicalMaterial {
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
}`,D0=`
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,G0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`#ifdef USE_MORPHTARGETS
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
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tv=`#ifdef USE_NORMALMAP
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
#endif`,nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,av=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_v=`float getShadowMask() {
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
}`,vv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,Mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yv=`#ifdef USE_SKINNING
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
#endif`,Sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Av=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`#include <common>
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
}`,zv=`#if DEPTH_PACKING == 3200
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
}`,Hv=`#define DISTANCE
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
}`,kv=`#define DISTANCE
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
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`uniform float scale;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,jv=`#include <common>
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
}`,Yv=`uniform vec3 diffuse;
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
}`,qv=`#define LAMBERT
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
}`,$v=`#define LAMBERT
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
}`,Kv=`#define MATCAP
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
}`,Zv=`#define MATCAP
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
}`,Qv=`#define NORMAL
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
}`,Jv=`#define NORMAL
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
}`,ex=`#define PHONG
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
}`,tx=`#define PHONG
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
}`,nx=`#define STANDARD
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
}`,ix=`#define STANDARD
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
}`,sx=`#define TOON
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
}`,rx=`#define TOON
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
}`,ox=`uniform float size;
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
}`,ax=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,cx=`uniform vec3 color;
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
}`,ux=`uniform float rotation;
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
}`,hx=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:I_,alphahash_pars_fragment:U_,alphamap_fragment:N_,alphamap_pars_fragment:F_,alphatest_fragment:O_,alphatest_pars_fragment:B_,aomap_fragment:z_,aomap_pars_fragment:H_,batching_pars_vertex:k_,batching_vertex:V_,begin_vertex:G_,beginnormal_vertex:W_,bsdfs:X_,iridescence_fragment:j_,bumpmap_pars_fragment:Y_,clipping_planes_fragment:q_,clipping_planes_pars_fragment:$_,clipping_planes_pars_vertex:K_,clipping_planes_vertex:Z_,color_fragment:Q_,color_pars_fragment:J_,color_pars_vertex:e0,color_vertex:t0,common:n0,cube_uv_reflection_fragment:i0,defaultnormal_vertex:s0,displacementmap_pars_vertex:r0,displacementmap_vertex:o0,emissivemap_fragment:a0,emissivemap_pars_fragment:l0,colorspace_fragment:c0,colorspace_pars_fragment:u0,envmap_fragment:h0,envmap_common_pars_fragment:d0,envmap_pars_fragment:f0,envmap_pars_vertex:p0,envmap_physical_pars_fragment:T0,envmap_vertex:m0,fog_vertex:g0,fog_pars_vertex:_0,fog_fragment:v0,fog_pars_fragment:x0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:y0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:E0,lights_pars_begin:b0,lights_toon_fragment:w0,lights_toon_pars_fragment:A0,lights_phong_fragment:C0,lights_phong_pars_fragment:R0,lights_physical_fragment:P0,lights_physical_pars_fragment:L0,lights_fragment_begin:D0,lights_fragment_maps:I0,lights_fragment_end:U0,logdepthbuf_fragment:N0,logdepthbuf_pars_fragment:F0,logdepthbuf_pars_vertex:O0,logdepthbuf_vertex:B0,map_fragment:z0,map_pars_fragment:H0,map_particle_fragment:k0,map_particle_pars_fragment:V0,metalnessmap_fragment:G0,metalnessmap_pars_fragment:W0,morphinstance_vertex:X0,morphcolor_vertex:j0,morphnormal_vertex:Y0,morphtarget_pars_vertex:q0,morphtarget_vertex:$0,normal_fragment_begin:K0,normal_fragment_maps:Z0,normal_pars_fragment:Q0,normal_pars_vertex:J0,normal_vertex:ev,normalmap_pars_fragment:tv,clearcoat_normal_fragment_begin:nv,clearcoat_normal_fragment_maps:iv,clearcoat_pars_fragment:sv,iridescence_pars_fragment:rv,opaque_fragment:ov,packing:av,premultiplied_alpha_fragment:lv,project_vertex:cv,dithering_fragment:uv,dithering_pars_fragment:hv,roughnessmap_fragment:dv,roughnessmap_pars_fragment:fv,shadowmap_pars_fragment:pv,shadowmap_pars_vertex:mv,shadowmap_vertex:gv,shadowmask_pars_fragment:_v,skinbase_vertex:vv,skinning_pars_vertex:xv,skinning_vertex:Mv,skinnormal_vertex:yv,specularmap_fragment:Sv,specularmap_pars_fragment:Ev,tonemapping_fragment:bv,tonemapping_pars_fragment:Tv,transmission_fragment:wv,transmission_pars_fragment:Av,uv_pars_fragment:Cv,uv_pars_vertex:Rv,uv_vertex:Pv,worldpos_vertex:Lv,background_vert:Dv,background_frag:Iv,backgroundCube_vert:Uv,backgroundCube_frag:Nv,cube_vert:Fv,cube_frag:Ov,depth_vert:Bv,depth_frag:zv,distanceRGBA_vert:Hv,distanceRGBA_frag:kv,equirect_vert:Vv,equirect_frag:Gv,linedashed_vert:Wv,linedashed_frag:Xv,meshbasic_vert:jv,meshbasic_frag:Yv,meshlambert_vert:qv,meshlambert_frag:$v,meshmatcap_vert:Kv,meshmatcap_frag:Zv,meshnormal_vert:Qv,meshnormal_frag:Jv,meshphong_vert:ex,meshphong_frag:tx,meshphysical_vert:nx,meshphysical_frag:ix,meshtoon_vert:sx,meshtoon_frag:rx,points_vert:ox,points_frag:ax,shadow_vert:lx,shadow_frag:cx,sprite_vert:ux,sprite_frag:hx},_e={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},yn={basic:{uniforms:Bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Bt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Bt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Bt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Bt([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Bt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Bt([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Bt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Bt([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Bt([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Bt([_e.lights,_e.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};yn.physical={uniforms:Bt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Vr={r:0,b:0,g:0},Ci=new bn,dx=new st;function fx(n,e,t,i,s,r,o){const a=new je(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function _(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function x(S){let M=!1;const w=_(S);w===null?f(a,l):w&&w.isColor&&(f(w,1),M=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,M){const w=_(M);w&&(w.isCubeTexture||w.mapping===Do)?(u===void 0&&(u=new bt(new Ps(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:ws(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ci.copy(M.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dx.makeRotationFromEuler(Ci)),u.material.toneMapped=Qe.getTransfer(w.colorSpace)!==it,(h!==w||d!==w.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,m=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new bt(new As(2,2),new ln({name:"BackgroundMaterial",uniforms:ws(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(w.colorSpace)!==it,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,m=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,M){S.getRGB(Vr,Xd(n)),i.buffers.color.setClear(Vr.r,Vr.g,Vr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:x,addToRenderList:p}}function px(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,L,O,G,ie){let re=!1;const Q=h(G,O,L);r!==Q&&(r=Q,c(r.object)),re=m(y,G,O,ie),re&&_(y,G,O,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,w(y,L,O,G),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,L,O){const G=O.wireframe===!0;let ie=i[y.id];ie===void 0&&(ie={},i[y.id]=ie);let re=ie[L.id];re===void 0&&(re={},ie[L.id]=re);let Q=re[G];return Q===void 0&&(Q=d(l()),re[G]=Q),Q}function d(y){const L=[],O=[],G=[];for(let ie=0;ie<t;ie++)L[ie]=0,O[ie]=0,G[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:G,object:y,attributes:{},index:null}}function m(y,L,O,G){const ie=r.attributes,re=L.attributes;let Q=0;const ne=O.getAttributes();for(const Y in ne)if(ne[Y].location>=0){const ye=ie[Y];let Se=re[Y];if(Se===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),ye===void 0||ye.attribute!==Se||Se&&ye.data!==Se.data)return!0;Q++}return r.attributesNum!==Q||r.index!==G}function _(y,L,O,G){const ie={},re=L.attributes;let Q=0;const ne=O.getAttributes();for(const Y in ne)if(ne[Y].location>=0){let ye=re[Y];ye===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor));const Se={};Se.attribute=ye,ye&&ye.data&&(Se.data=ye.data),ie[Y]=Se,Q++}r.attributes=ie,r.attributesNum=Q,r.index=G}function x(){const y=r.newAttributes;for(let L=0,O=y.length;L<O;L++)y[L]=0}function p(y){f(y,0)}function f(y,L){const O=r.newAttributes,G=r.enabledAttributes,ie=r.attributeDivisors;O[y]=1,G[y]===0&&(n.enableVertexAttribArray(y),G[y]=1),ie[y]!==L&&(n.vertexAttribDivisor(y,L),ie[y]=L)}function S(){const y=r.newAttributes,L=r.enabledAttributes;for(let O=0,G=L.length;O<G;O++)L[O]!==y[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function M(y,L,O,G,ie,re,Q){Q===!0?n.vertexAttribIPointer(y,L,O,ie,re):n.vertexAttribPointer(y,L,O,G,ie,re)}function w(y,L,O,G){x();const ie=G.attributes,re=O.getAttributes(),Q=L.defaultAttributeValues;for(const ne in re){const Y=re[ne];if(Y.location>=0){let ge=ie[ne];if(ge===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const ye=ge.normalized,Se=ge.itemSize,De=e.get(ge);if(De===void 0)continue;const Ye=De.buffer,se=De.type,de=De.bytesPerElement,ve=se===n.INT||se===n.UNSIGNED_INT||ge.gpuType===Ld;if(ge.isInterleavedBufferAttribute){const pe=ge.data,He=pe.stride,Ne=ge.offset;if(pe.isInstancedInterleavedBuffer){for(let ke=0;ke<Y.locationSize;ke++)f(Y.location+ke,pe.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ke=0;ke<Y.locationSize;ke++)p(Y.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ke=0;ke<Y.locationSize;ke++)M(Y.location+ke,Se/Y.locationSize,se,ye,He*de,(Ne+Se/Y.locationSize*ke)*de,ve)}else{if(ge.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)f(Y.location+pe,ge.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let pe=0;pe<Y.locationSize;pe++)p(Y.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let pe=0;pe<Y.locationSize;pe++)M(Y.location+pe,Se/Y.locationSize,se,ye,Se*de,Se/Y.locationSize*pe*de,ve)}}else if(Q!==void 0){const ye=Q[ne];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(Y.location,ye);break;case 3:n.vertexAttrib3fv(Y.location,ye);break;case 4:n.vertexAttrib4fv(Y.location,ye);break;default:n.vertexAttrib1fv(Y.location,ye)}}}}S()}function F(){N();for(const y in i){const L=i[y];for(const O in L){const G=L[O];for(const ie in G)u(G[ie].object),delete G[ie];delete L[O]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const O in L){const G=L[O];for(const ie in G)u(G[ie].object),delete G[ie];delete L[O]}delete i[y.id]}function R(y){for(const L in i){const O=i[L];if(O[y.id]===void 0)continue;const G=O[y.id];for(const ie in G)u(G[ie].object),delete G[ie];delete O[y.id]}}function N(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function mx(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<h;m++)this.render(c[m],u[m]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,i,1)}}function l(c,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x];for(let x=0;x<d.length;x++)t.update(_,i,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==En&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==fi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ai&&!R)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:f,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:w,maxSamples:F}}function _x(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new si,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const S=r?0:i,M=S*4;let w=f.clippingState||null;l.value=w,w=u(_,d,M,m);for(let F=0;F!==M;++F)w[F]=t[F];f.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,_){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const f=m+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,w=m;M!==x;++M,w+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function vx(n){let e=new WeakMap;function t(o,a){return a===Qa?o.mapping=Ss:a===Ja&&(o.mapping=Hi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qa||a===Ja)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new R_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Ol extends jd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,Cu=[.125,.215,.35,.446,.526,.582],Ni=20,Sa=new Ol,Ru=new je;let Ea=null,ba=0,Ta=0,wa=!1;const Pi=(1+Math.sqrt(5))/2,as=1/Pi,Pu=[new U(-Pi,as,0),new U(Pi,as,0),new U(-as,0,Pi),new U(as,0,Pi),new U(0,Pi,-as),new U(0,Pi,as),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,ba,Ta),this._renderer.xr.enabled=wa,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Rs,format:En,colorSpace:gi,depthBuffer:!1},s=Du(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xx(r)),this._blurMaterial=Mx(r,e,t)}return s}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,i,s){const a=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ru),u.toneMapping=ui,u.autoClear=!1;const m=new hr({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),_=new bt(new Ps,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Ru),x=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const M=this._cubeSize;Gr(s,S*M,f>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ss||e.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pu[(s-r-1)%Pu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ni-1),x=r/_,p=isFinite(r)?1+Math.floor(u*x):Ni;p>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ni}`);const f=[];let S=0;for(let R=0;R<Ni;++R){const N=R/x,E=Math.exp(-N*N/2);f.push(E),R===0?S+=E:R<p&&(S+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const w=this._sizeLods[s],F=3*w*(s>M-ps?s-M+ps:0),A=4*(this._cubeSize-w);Gr(t,F,A,3*w,2*w),l.setRenderTarget(t),l.render(h,Sa)}}function xx(n){const e=[],t=[],i=[];let s=n;const r=n-ps+1+Cu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ps?l=Cu[o-n+ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,x=3,p=2,f=1,S=new Float32Array(x*_*m),M=new Float32Array(p*_*m),w=new Float32Array(f*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,N=A>2?0:-1,E=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];S.set(E,x*_*A),M.set(d,p*_*A);const y=[A,A,A,A,A,A];w.set(y,f*_*A)}const F=new At;F.setAttribute("position",new an(S,x)),F.setAttribute("uv",new an(M,p)),F.setAttribute("faceIndex",new an(w,f)),e.push(F),s>ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Du(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=Do,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Mx(n,e,t){const i=new Float32Array(Ni),s=new U(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Iu(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Uu(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function yx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qa||l===Ja,u=l===Ss||l===Hi;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Lu(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Lu(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Sx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Il("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ex(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,f=x.length;p<f;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let x=0;if(m!==null){const S=m.array;x=m.version;for(let M=0,w=S.length;M<w;M+=3){const F=S[M+0],A=S[M+1],R=S[M+2];d.push(F,A,A,R,R,F)}}else if(_!==void 0){const S=_.array;x=_.version;for(let M=0,w=S.length/3-1;M<w;M+=3){const F=M+0,A=M+1,R=M+2;d.push(F,A,A,R,R,F)}}else return;const p=new(zd(d)?Wd:Gd)(d,1);p.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function bx(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),t.update(m,i,1)}function c(d,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,d*o,_),t.update(m,i,_))}function u(d,m,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<_;p++)this.render(d[p]/o,m[p]);else{x.multiDrawElementsWEBGL(i,m,0,r,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];t.update(p,i,1)}}function h(d,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,x,0,_);let f=0;for(let S=0;S<_;S++)f+=m[S];for(let S=0;S<x.length;S++)t.update(f,i,x[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Tx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function wx(n,e,t){const i=new WeakMap,s=new Et;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),p===!0&&(w=3);let F=a.attributes.position.count*w,A=1;F>e.maxTextureSize&&(A=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const R=new Float32Array(F*A*4*h),N=new kd(R,F,A,h);N.type=ai,N.needsUpdate=!0;const E=w*4;for(let L=0;L<h;L++){const O=f[L],G=S[L],ie=M[L],re=F*A*4*L;for(let Q=0;Q<O.count;Q++){const ne=Q*E;_===!0&&(s.fromBufferAttribute(O,Q),R[re+ne+0]=s.x,R[re+ne+1]=s.y,R[re+ne+2]=s.z,R[re+ne+3]=0),x===!0&&(s.fromBufferAttribute(G,Q),R[re+ne+4]=s.x,R[re+ne+5]=s.y,R[re+ne+6]=s.z,R[re+ne+7]=0),p===!0&&(s.fromBufferAttribute(ie,Q),R[re+ne+8]=s.x,R[re+ne+9]=s.y,R[re+ne+10]=s.z,R[re+ne+11]=ie.itemSize===4?s.w:1)}}d={count:h,texture:N,size:new we(F,A)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Ax(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class qd extends Ut{constructor(e,t,i,s,r,o,a,l,c,u=vs){if(u!==vs&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vs&&(i=Es),i===void 0&&u===Ts&&(i=bs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $d=new Ut,Kd=new qd(1,1);Kd.compareFunction=Bd;const Zd=new kd,Qd=new p_,Jd=new Nl,Nu=[],Fu=[],Ou=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function Ls(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function No(n,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Dx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;zu.set(i),n.uniformMatrix2fv(this.addr,!1,zu),Mt(t,i)}}function Ix(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Bu.set(i),n.uniformMatrix3fv(this.addr,!1,Bu),Mt(t,i)}}function Ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Ou.set(i),n.uniformMatrix4fv(this.addr,!1,Ou),Mt(t,i)}}function Nx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function zx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Gx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Kd:$d;t.setTexture2D(e||r,s)}function Wx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Qd,s)}function Xx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jd,s)}function jx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zd,s)}function Yx(n){switch(n){case 5126:return Cx;case 35664:return Rx;case 35665:return Px;case 35666:return Lx;case 35674:return Dx;case 35675:return Ix;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return Hx;case 36295:return kx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return jx}}function qx(n,e){n.uniform1fv(this.addr,e)}function $x(n,e){const t=Ls(e,this.size,2);n.uniform2fv(this.addr,t)}function Kx(n,e){const t=Ls(e,this.size,3);n.uniform3fv(this.addr,t)}function Zx(n,e){const t=Ls(e,this.size,4);n.uniform4fv(this.addr,t)}function Qx(n,e){const t=Ls(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jx(n,e){const t=Ls(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function eM(n,e){const t=Ls(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tM(n,e){n.uniform1iv(this.addr,e)}function nM(n,e){n.uniform2iv(this.addr,e)}function iM(n,e){n.uniform3iv(this.addr,e)}function sM(n,e){n.uniform4iv(this.addr,e)}function rM(n,e){n.uniform1uiv(this.addr,e)}function oM(n,e){n.uniform2uiv(this.addr,e)}function aM(n,e){n.uniform3uiv(this.addr,e)}function lM(n,e){n.uniform4uiv(this.addr,e)}function cM(n,e,t){const i=this.cache,s=e.length,r=No(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$d,r[o])}function uM(n,e,t){const i=this.cache,s=e.length,r=No(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Qd,r[o])}function hM(n,e,t){const i=this.cache,s=e.length,r=No(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jd,r[o])}function dM(n,e,t){const i=this.cache,s=e.length,r=No(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zd,r[o])}function fM(n){switch(n){case 5126:return qx;case 35664:return $x;case 35665:return Kx;case 35666:return Zx;case 35674:return Qx;case 35675:return Jx;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return sM;case 5125:return rM;case 36294:return oM;case 36295:return aM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return uM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return dM}}class pM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yx(t.type)}}class mM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fM(t.type)}}class gM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Hu(n,e){n.seq.push(e),n.map[e.id]=e}function _M(n,e,t){const i=n.name,s=i.length;for(Aa.lastIndex=0;;){const r=Aa.exec(i),o=Aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hu(t,c===void 0?new pM(a,n,e):new mM(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new gM(a),Hu(t,h)),t=h}}}class io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);_M(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ku(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vM=37297;let xM=0;function MM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function yM(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===po&&t===fo?i="LinearDisplayP3ToLinearSRGB":e===fo&&t===po&&(i="LinearSRGBToLinearDisplayP3"),n){case gi:case Io:return[i,"LinearTransferOETF"];case fn:case Ll:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Vu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+MM(n.getShaderSource(e),o)}else return s}function SM(n,e){const t=yM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function EM(n,e){let t;switch(e){case Td:t="Linear";break;case wd:t="Reinhard";break;case Ad:t="OptimizedCineon";break;case Pl:t="ACESFilmic";break;case Cd:t="AgX";break;case Rd:t="Neutral";break;case Sg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function TM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gs(n){return n!==""}function Gu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AM=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(n){return n.replace(AM,RM)}const CM=new Map;function RM(n,e){let t=Ve[e];if(t===void 0){const i=CM.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return il(t)}const PM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(n){return n.replace(PM,LM)}function LM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ju(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function DM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function IM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ss:case Hi:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function NM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rl:e="ENVMAP_BLENDING_MULTIPLY";break;case Mg:e="ENVMAP_BLENDING_MIX";break;case yg:e="ENVMAP_BLENDING_ADD";break}return e}function FM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=DM(t),c=IM(t),u=UM(t),h=NM(t),d=FM(t),m=bM(t),_=TM(r),x=s.createProgram();let p,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gs).join(`
`),f.length>0&&(f+=`
`)):(p=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),f=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ui?EM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,SM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=il(o),o=Gu(o,t),o=Wu(o,t),a=il(a),a=Gu(a,t),a=Wu(a,t),o=Xu(o),a=Xu(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=S+p+o,w=S+f+a,F=ku(s,s.VERTEX_SHADER,M),A=ku(s,s.FRAGMENT_SHADER,w);s.attachShader(x,F),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),G=s.getShaderInfoLog(F).trim(),ie=s.getShaderInfoLog(A).trim();let re=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,F,A);else{const ne=Vu(s,F,"vertex"),Y=Vu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+ne+`
`+Y)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(G===""||ie==="")&&(Q=!1);Q&&(L.diagnostics={runnable:re,programLog:O,vertexShader:{log:G,prefix:p},fragmentShader:{log:ie,prefix:f}})}s.deleteShader(F),s.deleteShader(A),N=new io(s,x),E=wM(s,x)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,vM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=A,this}let BM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HM(e),t.set(e,i)),i}}class HM{constructor(e){this.id=BM++,this.code=e,this.usedTimes=0}}function kM(n,e,t,i,s,r,o){const a=new Ul,l=new zM,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,y,L,O,G){const ie=O.fog,re=G.geometry,Q=E.isMeshStandardMaterial?O.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||Q),Y=ne&&ne.mapping===Do?ne.image.height:null,ge=_[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ye=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Se=ye!==void 0?ye.length:0;let De=0;re.morphAttributes.position!==void 0&&(De=1),re.morphAttributes.normal!==void 0&&(De=2),re.morphAttributes.color!==void 0&&(De=3);let Ye,se,de,ve;if(ge){const Ke=yn[ge];Ye=Ke.vertexShader,se=Ke.fragmentShader}else Ye=E.vertexShader,se=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),ve=l.getFragmentShaderID(E);const pe=n.getRenderTarget(),He=G.isInstancedMesh===!0,Ne=G.isBatchedMesh===!0,ke=!!E.map,I=!!E.matcap,We=!!ne,C=!!E.aoMap,D=!!E.lightMap,z=!!E.bumpMap,Z=!!E.normalMap,K=!!E.displacementMap,te=!!E.emissiveMap,he=!!E.metalnessMap,b=!!E.roughnessMap,g=E.anisotropy>0,P=E.clearcoat>0,k=E.dispersion>0,j=E.iridescence>0,X=E.sheen>0,ce=E.transmission>0,oe=g&&!!E.anisotropyMap,le=P&&!!E.clearcoatMap,xe=P&&!!E.clearcoatNormalMap,ae=P&&!!E.clearcoatRoughnessMap,Me=j&&!!E.iridescenceMap,Fe=j&&!!E.iridescenceThicknessMap,Pe=X&&!!E.sheenColorMap,me=X&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ae=!!E.specularColorMap,qe=!!E.specularIntensityMap,v=ce&&!!E.transmissionMap,J=ce&&!!E.thicknessMap,W=!!E.gradientMap,ee=!!E.alphaMap,ue=E.alphaTest>0,Ce=!!E.alphaHash,ze=!!E.extensions;let lt=ui;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(lt=n.toneMapping);const ft={shaderID:ge,shaderType:E.type,shaderName:E.name,vertexShader:Ye,fragmentShader:se,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ne,batchingColor:Ne&&G._colorsTexture!==null,instancing:He,instancingColor:He&&G.instanceColor!==null,instancingMorph:He&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:gi,alphaToCoverage:!!E.alphaToCoverage,map:ke,matcap:I,envMap:We,envMapMode:We&&ne.mapping,envMapCubeUVHeight:Y,aoMap:C,lightMap:D,bumpMap:z,normalMap:Z,displacementMap:d&&K,emissiveMap:te,normalMapObjectSpace:Z&&E.normalMapType===Fg,normalMapTangentSpace:Z&&E.normalMapType===Od,metalnessMap:he,roughnessMap:b,anisotropy:g,anisotropyMap:oe,clearcoat:P,clearcoatMap:le,clearcoatNormalMap:xe,clearcoatRoughnessMap:ae,dispersion:k,iridescence:j,iridescenceMap:Me,iridescenceThicknessMap:Fe,sheen:X,sheenColorMap:Pe,sheenRoughnessMap:me,specularMap:Oe,specularColorMap:Ae,specularIntensityMap:qe,transmission:ce,transmissionMap:v,thicknessMap:J,gradientMap:W,opaque:E.transparent===!1&&E.blending===_s&&E.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:Ce,combine:E.combine,mapUv:ke&&x(E.map.channel),aoMapUv:C&&x(E.aoMap.channel),lightMapUv:D&&x(E.lightMap.channel),bumpMapUv:z&&x(E.bumpMap.channel),normalMapUv:Z&&x(E.normalMap.channel),displacementMapUv:K&&x(E.displacementMap.channel),emissiveMapUv:te&&x(E.emissiveMap.channel),metalnessMapUv:he&&x(E.metalnessMap.channel),roughnessMapUv:b&&x(E.roughnessMap.channel),anisotropyMapUv:oe&&x(E.anisotropyMap.channel),clearcoatMapUv:le&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(E.sheenRoughnessMap.channel),specularMapUv:Oe&&x(E.specularMap.channel),specularColorMapUv:Ae&&x(E.specularColorMap.channel),specularIntensityMapUv:qe&&x(E.specularIntensityMap.channel),transmissionMapUv:v&&x(E.transmissionMap.channel),thicknessMapUv:J&&x(E.thicknessMap.channel),alphaMapUv:ee&&x(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Z||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!re.attributes.uv&&(ke||ee),fog:!!ie,useFog:E.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:De,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===it,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===nn,flipSided:E.side===kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ze&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ze&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)y.push(L),y.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(S(y,E),M(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function S(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),E.push(a.mask)}function w(E){const y=_[E.type];let L;if(y){const O=yn[y];L=Uo.clone(O.uniforms)}else L=E.uniforms;return L}function F(E,y){let L;for(let O=0,G=u.length;O<G;O++){const ie=u[O];if(ie.cacheKey===y){L=ie,++L.usedTimes;break}}return L===void 0&&(L=new OM(n,y,E,r),u.push(L)),L}function A(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:w,acquireProgram:F,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:N}}function VM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function GM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,m,_,x,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=p),e++,f}function a(h,d,m,_,x,p){const f=o(h,d,m,_,x,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(h,d,m,_,x,p){const f=o(h,d,m,_,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||GM),i.length>1&&i.sort(d||Yu),s.length>1&&s.sort(d||Yu)}function u(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function WM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new qu,n.set(i,[o])):s>=r.length?(o=new qu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function XM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new je};break;case"SpotLight":t={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function jM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let YM=0;function qM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $M(n){const e=new XM,t=jM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new st,o=new st;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,x=0,p=0,f=0,S=0,M=0,w=0,F=0,A=0,R=0;c.sort(qM);for(let E=0,y=c.length;E<y;E++){const L=c[E],O=L.color,G=L.intensity,ie=L.distance,re=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*G,h+=O.g*G,d+=O.b*G;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(L.sh.coefficients[Q],G);R++}else if(L.isDirectionalLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,Y=t.get(L);Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=L.shadow.matrix,S++}i.directional[m]=Q,m++}else if(L.isSpotLight){const Q=e.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(O).multiplyScalar(G),Q.distance=ie,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,i.spot[x]=Q;const ne=L.shadow;if(L.map&&(i.spotLightMap[F]=L.map,F++,ne.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[x]=ne.matrix,L.castShadow){const Y=t.get(L);Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=re,w++}x++}else if(L.isRectAreaLight){const Q=e.get(L);Q.color.copy(O).multiplyScalar(G),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=Q,p++}else if(L.isPointLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){const ne=L.shadow,Y=t.get(L);Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,Y.shadowCameraNear=ne.camera.near,Y.shadowCameraFar=ne.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=L.shadow.matrix,M++}i.point[_]=Q,_++}else if(L.isHemisphereLight){const Q=e.get(L);Q.skyColor.copy(L.color).multiplyScalar(G),Q.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[f]=Q,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==m||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==p||N.hemiLength!==f||N.numDirectionalShadows!==S||N.numPointShadows!==M||N.numSpotShadows!==w||N.numSpotMaps!==F||N.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+F-A,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,N.directionalLength=m,N.pointLength=_,N.spotLength=x,N.rectAreaLength=p,N.hemiLength=f,N.numDirectionalShadows=S,N.numPointShadows=M,N.numSpotShadows=w,N.numSpotMaps=F,N.numLightProbes=R,i.version=YM++)}function l(c,u){let h=0,d=0,m=0,_=0,x=0;const p=u.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const M=c[f];if(M.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(M.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function $u(n){const e=new $M(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function KM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new $u(n),e.set(s,[a])):r>=o.length?(a=new $u(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class ZM extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QM extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
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
}`;function ty(n,e,t){let i=new Fl;const s=new we,r=new we,o=new Et,a=new ZM({depthPacking:Ng}),l=new QM,c={},u=t.maxTextureSize,h={[di]:kt,[kt]:di,[nn]:nn},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:JM,fragmentShader:ey}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new At;_.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new bt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ed;let f=this.type;this.render=function(A,R,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(zn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=f!==In&&this.type===In,ie=f===In&&this.type!==In;for(let re=0,Q=A.length;re<Q;re++){const ne=A[re],Y=ne.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ge=Y.getFrameExtents();if(s.multiply(ge),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ge.x),s.x=r.x*ge.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ge.y),s.y=r.y*ge.y,Y.mapSize.y=r.y)),Y.map===null||G===!0||ie===!0){const Se=this.type!==In?{minFilter:Ht,magFilter:Ht}:{};Y.map!==null&&Y.map.dispose(),Y.map=new kn(s.x,s.y,Se),Y.map.texture.name=ne.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const ye=Y.getViewportCount();for(let Se=0;Se<ye;Se++){const De=Y.getViewport(Se);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),O.viewport(o),Y.updateMatrices(ne,Se),i=Y.getFrustum(),w(R,N,Y.camera,ne,this.type)}Y.isPointLightShadow!==!0&&this.type===In&&S(Y,N),Y.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(E,y,L)};function S(A,R){const N=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,N,d,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,N,m,x,null)}function M(A,R,N,E){let y=null;const L=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)y=L;else if(y=N.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=y.uuid,G=R.uuid;let ie=c[O];ie===void 0&&(ie={},c[O]=ie);let re=ie[G];re===void 0&&(re=y.clone(),ie[G]=re,R.addEventListener("dispose",F)),y=re}if(y.visible=R.visible,y.wireframe=R.wireframe,E===In?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=n.properties.get(y);O.light=N}return y}function w(A,R,N,E,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===In)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const G=e.update(A),ie=A.material;if(Array.isArray(ie)){const re=G.groups;for(let Q=0,ne=re.length;Q<ne;Q++){const Y=re[Q],ge=ie[Y.materialIndex];if(ge&&ge.visible){const ye=M(A,ge,E,y);A.onBeforeShadow(n,A,R,N,G,ye,Y),n.renderBufferDirect(N,null,G,ye,A,Y),A.onAfterShadow(n,A,R,N,G,ye,Y)}}}else if(ie.visible){const re=M(A,ie,E,y);A.onBeforeShadow(n,A,R,N,G,re,null),n.renderBufferDirect(N,null,G,re,A,null),A.onAfterShadow(n,A,R,N,G,re,null)}}const O=A.children;for(let G=0,ie=O.length;G<ie;G++)w(O[G],R,N,E,y)}function F(A){A.target.removeEventListener("dispose",F);for(const N in c){const E=c[N],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function ny(n){function e(){let v=!1;const J=new Et;let W=null;const ee=new Et(0,0,0,0);return{setMask:function(ue){W!==ue&&!v&&(n.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){v=ue},setClear:function(ue,Ce,ze,lt,ft){ft===!0&&(ue*=lt,Ce*=lt,ze*=lt),J.set(ue,Ce,ze,lt),ee.equals(J)===!1&&(n.clearColor(ue,Ce,ze,lt),ee.copy(J))},reset:function(){v=!1,W=null,ee.set(-1,0,0,0)}}}function t(){let v=!1,J=null,W=null,ee=null;return{setTest:function(ue){ue?ve(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(ue){J!==ue&&!v&&(n.depthMask(ue),J=ue)},setFunc:function(ue){if(W!==ue){switch(ue){case fg:n.depthFunc(n.NEVER);break;case pg:n.depthFunc(n.ALWAYS);break;case mg:n.depthFunc(n.LESS);break;case co:n.depthFunc(n.LEQUAL);break;case gg:n.depthFunc(n.EQUAL);break;case _g:n.depthFunc(n.GEQUAL);break;case vg:n.depthFunc(n.GREATER);break;case xg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}W=ue}},setLocked:function(ue){v=ue},setClear:function(ue){ee!==ue&&(n.clearDepth(ue),ee=ue)},reset:function(){v=!1,J=null,W=null,ee=null}}}function i(){let v=!1,J=null,W=null,ee=null,ue=null,Ce=null,ze=null,lt=null,ft=null;return{setTest:function(Ke){v||(Ke?ve(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(Ke){J!==Ke&&!v&&(n.stencilMask(Ke),J=Ke)},setFunc:function(Ke,pt,mt){(W!==Ke||ee!==pt||ue!==mt)&&(n.stencilFunc(Ke,pt,mt),W=Ke,ee=pt,ue=mt)},setOp:function(Ke,pt,mt){(Ce!==Ke||ze!==pt||lt!==mt)&&(n.stencilOp(Ke,pt,mt),Ce=Ke,ze=pt,lt=mt)},setLocked:function(Ke){v=Ke},setClear:function(Ke){ft!==Ke&&(n.clearStencil(Ke),ft=Ke)},reset:function(){v=!1,J=null,W=null,ee=null,ue=null,Ce=null,ze=null,lt=null,ft=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,_=!1,x=null,p=null,f=null,S=null,M=null,w=null,F=null,A=new je(0,0,0),R=0,N=!1,E=null,y=null,L=null,O=null,G=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Q=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ne)[1]),re=Q>=1):ne.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),re=Q>=2);let Y=null,ge={};const ye=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),De=new Et().fromArray(ye),Ye=new Et().fromArray(Se);function se(v,J,W,ee){const ue=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(v,Ce),n.texParameteri(v,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(v,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<W;ze++)v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(J+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return Ce}const de={};de[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),r.setFunc(co),z(!1),Z(Lc),ve(n.CULL_FACE),C(zn);function ve(v){c[v]!==!0&&(n.enable(v),c[v]=!0)}function pe(v){c[v]!==!1&&(n.disable(v),c[v]=!1)}function He(v,J){return u[v]!==J?(n.bindFramebuffer(v,J),u[v]=J,v===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=J),v===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=J),!0):!1}function Ne(v,J){let W=d,ee=!1;if(v){W=h.get(J),W===void 0&&(W=[],h.set(J,W));const ue=v.textures;if(W.length!==ue.length||W[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,ze=ue.length;Ce<ze;Ce++)W[Ce]=n.COLOR_ATTACHMENT0+Ce;W.length=ue.length,ee=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,ee=!0);ee&&n.drawBuffers(W)}function ke(v){return m!==v?(n.useProgram(v),m=v,!0):!1}const I={[Ui]:n.FUNC_ADD,[Km]:n.FUNC_SUBTRACT,[Zm]:n.FUNC_REVERSE_SUBTRACT};I[Qm]=n.MIN,I[Jm]=n.MAX;const We={[eg]:n.ZERO,[tg]:n.ONE,[ng]:n.SRC_COLOR,[Ka]:n.SRC_ALPHA,[lg]:n.SRC_ALPHA_SATURATE,[og]:n.DST_COLOR,[sg]:n.DST_ALPHA,[ig]:n.ONE_MINUS_SRC_COLOR,[Za]:n.ONE_MINUS_SRC_ALPHA,[ag]:n.ONE_MINUS_DST_COLOR,[rg]:n.ONE_MINUS_DST_ALPHA,[cg]:n.CONSTANT_COLOR,[ug]:n.ONE_MINUS_CONSTANT_COLOR,[hg]:n.CONSTANT_ALPHA,[dg]:n.ONE_MINUS_CONSTANT_ALPHA};function C(v,J,W,ee,ue,Ce,ze,lt,ft,Ke){if(v===zn){_===!0&&(pe(n.BLEND),_=!1);return}if(_===!1&&(ve(n.BLEND),_=!0),v!==$m){if(v!==x||Ke!==N){if((p!==Ui||M!==Ui)&&(n.blendEquation(n.FUNC_ADD),p=Ui,M=Ui),Ke)switch(v){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $a:n.blendFunc(n.ONE,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $a:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ic:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}f=null,S=null,w=null,F=null,A.set(0,0,0),R=0,x=v,N=Ke}return}ue=ue||J,Ce=Ce||W,ze=ze||ee,(J!==p||ue!==M)&&(n.blendEquationSeparate(I[J],I[ue]),p=J,M=ue),(W!==f||ee!==S||Ce!==w||ze!==F)&&(n.blendFuncSeparate(We[W],We[ee],We[Ce],We[ze]),f=W,S=ee,w=Ce,F=ze),(lt.equals(A)===!1||ft!==R)&&(n.blendColor(lt.r,lt.g,lt.b,ft),A.copy(lt),R=ft),x=v,N=!1}function D(v,J){v.side===nn?pe(n.CULL_FACE):ve(n.CULL_FACE);let W=v.side===kt;J&&(W=!W),z(W),v.blending===_s&&v.transparent===!1?C(zn):C(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),s.setMask(v.colorWrite);const ee=v.stencilWrite;o.setTest(ee),ee&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),te(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(v){E!==v&&(v?n.frontFace(n.CW):n.frontFace(n.CCW),E=v)}function Z(v){v!==Ym?(ve(n.CULL_FACE),v!==y&&(v===Lc?n.cullFace(n.BACK):v===qm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),y=v}function K(v){v!==L&&(re&&n.lineWidth(v),L=v)}function te(v,J,W){v?(ve(n.POLYGON_OFFSET_FILL),(O!==J||G!==W)&&(n.polygonOffset(J,W),O=J,G=W)):pe(n.POLYGON_OFFSET_FILL)}function he(v){v?ve(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function b(v){v===void 0&&(v=n.TEXTURE0+ie-1),Y!==v&&(n.activeTexture(v),Y=v)}function g(v,J,W){W===void 0&&(Y===null?W=n.TEXTURE0+ie-1:W=Y);let ee=ge[W];ee===void 0&&(ee={type:void 0,texture:void 0},ge[W]=ee),(ee.type!==v||ee.texture!==J)&&(Y!==W&&(n.activeTexture(W),Y=W),n.bindTexture(v,J||de[v]),ee.type=v,ee.texture=J)}function P(){const v=ge[Y];v!==void 0&&v.type!==void 0&&(n.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xe(){try{n.texStorage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Pe(v){De.equals(v)===!1&&(n.scissor(v.x,v.y,v.z,v.w),De.copy(v))}function me(v){Ye.equals(v)===!1&&(n.viewport(v.x,v.y,v.z,v.w),Ye.copy(v))}function Oe(v,J){let W=l.get(J);W===void 0&&(W=new WeakMap,l.set(J,W));let ee=W.get(v);ee===void 0&&(ee=n.getUniformBlockIndex(J,v.name),W.set(v,ee))}function Ae(v,J){const ee=l.get(J).get(v);a.get(J)!==ee&&(n.uniformBlockBinding(J,ee,v.__bindingPointIndex),a.set(J,ee))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Y=null,ge={},u={},h=new WeakMap,d=[],m=null,_=!1,x=null,p=null,f=null,S=null,M=null,w=null,F=null,A=new je(0,0,0),R=0,N=!1,E=null,y=null,L=null,O=null,G=null,De.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ve,disable:pe,bindFramebuffer:He,drawBuffers:Ne,useProgram:ke,setBlending:C,setMaterial:D,setFlipSided:z,setCullFace:Z,setLineWidth:K,setPolygonOffset:te,setScissorTest:he,activeTexture:b,bindTexture:g,unbindTexture:P,compressedTexImage2D:k,compressedTexImage3D:j,texImage2D:Me,texImage3D:Fe,updateUBOMapping:Oe,uniformBlockBinding:Ae,texStorage2D:xe,texStorage3D:ae,texSubImage2D:X,texSubImage3D:ce,compressedTexSubImage2D:oe,compressedTexSubImage3D:le,scissor:Pe,viewport:me,reset:qe}}function iy(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return m?new OffscreenCanvas(b,g):rr("canvas")}function x(b,g,P){let k=1;const j=he(b);if((j.width>P||j.height>P)&&(k=P/Math.max(j.width,j.height)),k<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor(k*j.width),ce=Math.floor(k*j.height);h===void 0&&(h=_(X,ce));const oe=g?_(X,ce):h;return oe.width=X,oe.height=ce,oe.getContext("2d").drawImage(b,0,0,X,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+ce+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==Ht&&b.minFilter!==sn}function f(b){n.generateMipmap(b)}function S(b,g,P,k,j=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=g;if(g===n.RED&&(P===n.FLOAT&&(X=n.R32F),P===n.HALF_FLOAT&&(X=n.R16F),P===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.R8UI),P===n.UNSIGNED_SHORT&&(X=n.R16UI),P===n.UNSIGNED_INT&&(X=n.R32UI),P===n.BYTE&&(X=n.R8I),P===n.SHORT&&(X=n.R16I),P===n.INT&&(X=n.R32I)),g===n.RG&&(P===n.FLOAT&&(X=n.RG32F),P===n.HALF_FLOAT&&(X=n.RG16F),P===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(X=n.RG8UI),P===n.UNSIGNED_SHORT&&(X=n.RG16UI),P===n.UNSIGNED_INT&&(X=n.RG32UI),P===n.BYTE&&(X=n.RG8I),P===n.SHORT&&(X=n.RG16I),P===n.INT&&(X=n.RG32I)),g===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),g===n.RGBA){const ce=j?ho:Qe.getTransfer(k);P===n.FLOAT&&(X=n.RGBA32F),P===n.HALF_FLOAT&&(X=n.RGBA16F),P===n.UNSIGNED_BYTE&&(X=ce===it?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(b,g){let P;return b?g===null||g===Es||g===bs?P=n.DEPTH24_STENCIL8:g===ai?P=n.DEPTH32F_STENCIL8:g===uo&&(P=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Es||g===bs?P=n.DEPTH_COMPONENT24:g===ai?P=n.DEPTH_COMPONENT32F:g===uo&&(P=n.DEPTH_COMPONENT16),P}function w(b,g){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ht&&b.minFilter!==sn?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function F(b){const g=b.target;g.removeEventListener("dispose",F),R(g),g.isVideoTexture&&u.delete(g)}function A(b){const g=b.target;g.removeEventListener("dispose",A),E(g)}function R(b){const g=i.get(b);if(g.__webglInit===void 0)return;const P=b.source,k=d.get(P);if(k){const j=k[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&N(b),Object.keys(k).length===0&&d.delete(P)}i.remove(b)}function N(b){const g=i.get(b);n.deleteTexture(g.__webglTexture);const P=b.source,k=d.get(P);delete k[g.__cacheKey],o.memory.textures--}function E(b){const g=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let j=0;j<g.__webglFramebuffer[k].length;j++)n.deleteFramebuffer(g.__webglFramebuffer[k][j]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=b.textures;for(let k=0,j=P.length;k<j;k++){const X=i.get(P[k]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(P[k])}i.remove(b)}let y=0;function L(){y=0}function O(){const b=y;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),y+=1,b}function G(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function ie(b,g){const P=i.get(b);if(b.isVideoTexture&&K(b),b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){const k=b.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(P,b,g);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+g)}function re(b,g){const P=i.get(b);if(b.version>0&&P.__version!==b.version){Ye(P,b,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+g)}function Q(b,g){const P=i.get(b);if(b.version>0&&P.__version!==b.version){Ye(P,b,g);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+g)}function ne(b,g){const P=i.get(b);if(b.version>0&&P.__version!==b.version){se(P,b,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+g)}const Y={[el]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[tl]:n.MIRRORED_REPEAT},ge={[Ht]:n.NEAREST,[Eg]:n.NEAREST_MIPMAP_NEAREST,[Sr]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[Qo]:n.LINEAR_MIPMAP_NEAREST,[Fi]:n.LINEAR_MIPMAP_LINEAR},ye={[Og]:n.NEVER,[Gg]:n.ALWAYS,[Bg]:n.LESS,[Bd]:n.LEQUAL,[zg]:n.EQUAL,[Vg]:n.GEQUAL,[Hg]:n.GREATER,[kg]:n.NOTEQUAL};function Se(b,g){if(g.type===ai&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===sn||g.magFilter===Qo||g.magFilter===Sr||g.magFilter===Fi||g.minFilter===sn||g.minFilter===Qo||g.minFilter===Sr||g.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Y[g.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Y[g.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Y[g.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ge[g.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ye[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ht||g.minFilter!==Sr&&g.minFilter!==Fi||g.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function De(b,g){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",F));const k=g.source;let j=d.get(k);j===void 0&&(j={},d.set(k,j));const X=G(g);if(X!==b.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),j[X].usedTimes++;const ce=j[b.__cacheKey];ce!==void 0&&(j[b.__cacheKey].usedTimes--,ce.usedTimes===0&&N(g)),b.__cacheKey=X,b.__webglTexture=j[X].texture}return P}function Ye(b,g,P){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const j=De(b,g),X=g.source;t.bindTexture(k,b.__webglTexture,n.TEXTURE0+P);const ce=i.get(X);if(X.version!==ce.__version||j===!0){t.activeTexture(n.TEXTURE0+P);const oe=Qe.getPrimaries(Qe.workingColorSpace),le=g.colorSpace===oi?null:Qe.getPrimaries(g.colorSpace),xe=g.colorSpace===oi||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ae=x(g.image,!1,s.maxTextureSize);ae=te(g,ae);const Me=r.convert(g.format,g.colorSpace),Fe=r.convert(g.type);let Pe=S(g.internalFormat,Me,Fe,g.colorSpace,g.isVideoTexture);Se(k,g);let me;const Oe=g.mipmaps,Ae=g.isVideoTexture!==!0,qe=ce.__version===void 0||j===!0,v=X.dataReady,J=w(g,ae);if(g.isDepthTexture)Pe=M(g.format===Ts,g.type),qe&&(Ae?t.texStorage2D(n.TEXTURE_2D,1,Pe,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ae.width,ae.height,0,Me,Fe,null));else if(g.isDataTexture)if(Oe.length>0){Ae&&qe&&t.texStorage2D(n.TEXTURE_2D,J,Pe,Oe[0].width,Oe[0].height);for(let W=0,ee=Oe.length;W<ee;W++)me=Oe[W],Ae?v&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,me.width,me.height,Me,Fe,me.data):t.texImage2D(n.TEXTURE_2D,W,Pe,me.width,me.height,0,Me,Fe,me.data);g.generateMipmaps=!1}else Ae?(qe&&t.texStorage2D(n.TEXTURE_2D,J,Pe,ae.width,ae.height),v&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,Fe,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,ae.width,ae.height,0,Me,Fe,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ae&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,Pe,Oe[0].width,Oe[0].height,ae.depth);for(let W=0,ee=Oe.length;W<ee;W++)if(me=Oe[W],g.format!==En)if(Me!==null)if(Ae){if(v)if(g.layerUpdates.size>0){for(const ue of g.layerUpdates){const Ce=me.width*me.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ue,me.width,me.height,1,Me,me.data.slice(Ce*ue,Ce*(ue+1)),0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,ae.depth,Me,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Pe,me.width,me.height,ae.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?v&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,ae.depth,Me,Fe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Pe,me.width,me.height,ae.depth,0,Me,Fe,me.data)}else{Ae&&qe&&t.texStorage2D(n.TEXTURE_2D,J,Pe,Oe[0].width,Oe[0].height);for(let W=0,ee=Oe.length;W<ee;W++)me=Oe[W],g.format!==En?Me!==null?Ae?v&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,me.width,me.height,Me,me.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?v&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,me.width,me.height,Me,Fe,me.data):t.texImage2D(n.TEXTURE_2D,W,Pe,me.width,me.height,0,Me,Fe,me.data)}else if(g.isDataArrayTexture)if(Ae){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,Pe,ae.width,ae.height,ae.depth),v)if(g.layerUpdates.size>0){let W;switch(Fe){case n.UNSIGNED_BYTE:switch(Me){case n.ALPHA:W=1;break;case n.LUMINANCE:W=1;break;case n.LUMINANCE_ALPHA:W=2;break;case n.RGB:W=3;break;case n.RGBA:W=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:W=1;break;default:throw new Error(`Unknown texel size for type ${Fe}.`)}const ee=ae.width*ae.height*W;for(const ue of g.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,ae.width,ae.height,1,Me,Fe,ae.data.slice(ee*ue,ee*(ue+1)));g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Fe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ae.width,ae.height,ae.depth,0,Me,Fe,ae.data);else if(g.isData3DTexture)Ae?(qe&&t.texStorage3D(n.TEXTURE_3D,J,Pe,ae.width,ae.height,ae.depth),v&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Fe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ae.width,ae.height,ae.depth,0,Me,Fe,ae.data);else if(g.isFramebufferTexture){if(qe)if(Ae)t.texStorage2D(n.TEXTURE_2D,J,Pe,ae.width,ae.height);else{let W=ae.width,ee=ae.height;for(let ue=0;ue<J;ue++)t.texImage2D(n.TEXTURE_2D,ue,Pe,W,ee,0,Me,Fe,null),W>>=1,ee>>=1}}else if(Oe.length>0){if(Ae&&qe){const W=he(Oe[0]);t.texStorage2D(n.TEXTURE_2D,J,Pe,W.width,W.height)}for(let W=0,ee=Oe.length;W<ee;W++)me=Oe[W],Ae?v&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Me,Fe,me):t.texImage2D(n.TEXTURE_2D,W,Pe,Me,Fe,me);g.generateMipmaps=!1}else if(Ae){if(qe){const W=he(ae);t.texStorage2D(n.TEXTURE_2D,J,Pe,W.width,W.height)}v&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Fe,ae)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Me,Fe,ae);p(g)&&f(k),ce.__version=X.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function se(b,g,P){if(g.image.length!==6)return;const k=De(b,g),j=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+P);const X=i.get(j);if(j.version!==X.__version||k===!0){t.activeTexture(n.TEXTURE0+P);const ce=Qe.getPrimaries(Qe.workingColorSpace),oe=g.colorSpace===oi?null:Qe.getPrimaries(g.colorSpace),le=g.colorSpace===oi||ce===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,Me=[];for(let ee=0;ee<6;ee++)!xe&&!ae?Me[ee]=x(g.image[ee],!0,s.maxCubemapSize):Me[ee]=ae?g.image[ee].image:g.image[ee],Me[ee]=te(g,Me[ee]);const Fe=Me[0],Pe=r.convert(g.format,g.colorSpace),me=r.convert(g.type),Oe=S(g.internalFormat,Pe,me,g.colorSpace),Ae=g.isVideoTexture!==!0,qe=X.__version===void 0||k===!0,v=j.dataReady;let J=w(g,Fe);Se(n.TEXTURE_CUBE_MAP,g);let W;if(xe){Ae&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,J,Oe,Fe.width,Fe.height);for(let ee=0;ee<6;ee++){W=Me[ee].mipmaps;for(let ue=0;ue<W.length;ue++){const Ce=W[ue];g.format!==En?Pe!==null?Ae?v&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,Ce.width,Ce.height,Pe,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Oe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,Ce.width,Ce.height,Pe,me,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Oe,Ce.width,Ce.height,0,Pe,me,Ce.data)}}}else{if(W=g.mipmaps,Ae&&qe){W.length>0&&J++;const ee=he(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,J,Oe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me[ee].width,Me[ee].height,Pe,me,Me[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,Me[ee].width,Me[ee].height,0,Pe,me,Me[ee].data);for(let ue=0;ue<W.length;ue++){const ze=W[ue].image[ee].image;Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,ze.width,ze.height,Pe,me,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Oe,ze.width,ze.height,0,Pe,me,ze.data)}}else{Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,me,Me[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,Pe,me,Me[ee]);for(let ue=0;ue<W.length;ue++){const Ce=W[ue];Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,Pe,me,Ce.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Oe,Pe,me,Ce.image[ee])}}}p(g)&&f(n.TEXTURE_CUBE_MAP),X.__version=j.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function de(b,g,P,k,j,X){const ce=r.convert(P.format,P.colorSpace),oe=r.convert(P.type),le=S(P.internalFormat,ce,oe,P.colorSpace);if(!i.get(g).__hasExternalTextures){const ae=Math.max(1,g.width>>X),Me=Math.max(1,g.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,X,le,ae,Me,g.depth,0,ce,oe,null):t.texImage2D(j,X,le,ae,Me,0,ce,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Z(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,j,i.get(P).__webglTexture,0,z(g)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,j,i.get(P).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(b,g,P){if(n.bindRenderbuffer(n.RENDERBUFFER,b),g.depthBuffer){const k=g.depthTexture,j=k&&k.isDepthTexture?k.type:null,X=M(g.stencilBuffer,j),ce=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=z(g);Z(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,X,g.width,g.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,X,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,b)}else{const k=g.textures;for(let j=0;j<k.length;j++){const X=k[j],ce=r.convert(X.format,X.colorSpace),oe=r.convert(X.type),le=S(X.internalFormat,ce,oe,X.colorSpace),xe=z(g);P&&Z(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,le,g.width,g.height):Z(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,le,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,le,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ie(g.depthTexture,0);const k=i.get(g.depthTexture).__webglTexture,j=z(g);if(g.depthTexture.format===vs)Z(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(g.depthTexture.format===Ts)Z(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function He(b){const g=i.get(b),P=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");pe(g.__webglFramebuffer,b)}else if(P){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]=n.createRenderbuffer(),ve(g.__webglDepthbuffer[k],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),ve(g.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(b,g,P){const k=i.get(b);g!==void 0&&de(k.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&He(b)}function ke(b){const g=b.texture,P=i.get(b),k=i.get(g);b.addEventListener("dispose",A);const j=b.textures,X=b.isWebGLCubeRenderTarget===!0,ce=j.length>1;if(ce||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,o.memory.textures++),X){P.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[oe]=[];for(let le=0;le<g.mipmaps.length;le++)P.__webglFramebuffer[oe][le]=n.createFramebuffer()}else P.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)P.__webglFramebuffer[oe]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(ce)for(let oe=0,le=j.length;oe<le;oe++){const xe=i.get(j[oe]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Z(b)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){const le=j[oe];P.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[oe]);const xe=r.convert(le.format,le.colorSpace),ae=r.convert(le.type),Me=S(le.internalFormat,xe,ae,le.colorSpace,b.isXRRenderTarget===!0),Fe=z(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Me,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,P.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(P.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Se(n.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)de(P.__webglFramebuffer[oe][le],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else de(P.__webglFramebuffer[oe],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(g)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let oe=0,le=j.length;oe<le;oe++){const xe=j[oe],ae=i.get(xe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Se(n.TEXTURE_2D,xe),de(P.__webglFramebuffer,b,xe,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),p(xe)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,k.__webglTexture),Se(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)de(P.__webglFramebuffer[le],b,g,n.COLOR_ATTACHMENT0,oe,le);else de(P.__webglFramebuffer,b,g,n.COLOR_ATTACHMENT0,oe,0);p(g)&&f(oe),t.unbindTexture()}b.depthBuffer&&He(b)}function I(b){const g=b.textures;for(let P=0,k=g.length;P<k;P++){const j=g[P];if(p(j)){const X=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(j).__webglTexture;t.bindTexture(X,ce),f(X),t.unbindTexture()}}}const We=[],C=[];function D(b){if(b.samples>0){if(Z(b)===!1){const g=b.textures,P=b.width,k=b.height;let j=n.COLOR_BUFFER_BIT;const X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(b),oe=g.length>1;if(oe)for(let le=0;le<g.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<g.length;le++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const xe=i.get(g[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,P,k,0,0,P,k,j,n.NEAREST),l===!0&&(We.length=0,C.length=0,We.push(n.COLOR_ATTACHMENT0+le),b.depthBuffer&&b.resolveDepthBuffer===!1&&(We.push(X),C.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let le=0;le<g.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const xe=i.get(g[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const g=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function z(b){return Math.min(s.maxSamples,b.samples)}function Z(b){const g=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function K(b){const g=o.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function te(b,g){const P=b.colorSpace,k=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==gi&&P!==oi&&(Qe.getTransfer(P)===it?(k!==En||j!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function he(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=ie,this.setTexture2DArray=re,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=Ne,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Z}function sy(n,e){function t(i,s=oi){let r;const o=Qe.getTransfer(s);if(i===fi)return n.UNSIGNED_BYTE;if(i===Dd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Id)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bg)return n.BYTE;if(i===Tg)return n.SHORT;if(i===uo)return n.UNSIGNED_SHORT;if(i===Ld)return n.INT;if(i===Es)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===Rs)return n.HALF_FLOAT;if(i===Ag)return n.ALPHA;if(i===Cg)return n.RGB;if(i===En)return n.RGBA;if(i===Rg)return n.LUMINANCE;if(i===Pg)return n.LUMINANCE_ALPHA;if(i===vs)return n.DEPTH_COMPONENT;if(i===Ts)return n.DEPTH_STENCIL;if(i===Lg)return n.RED;if(i===Ud)return n.RED_INTEGER;if(i===Dg)return n.RG;if(i===Nd)return n.RG_INTEGER;if(i===Fd)return n.RGBA_INTEGER;if(i===Jo||i===ea||i===ta||i===na)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uc||i===Nc||i===Fc||i===Oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bc||i===zc||i===Hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bc||i===zc)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kc||i===Vc||i===Gc||i===Wc||i===Xc||i===jc||i===Yc||i===qc||i===$c||i===Kc||i===Zc||i===Qc||i===Jc||i===eu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$c)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ia||i===tu||i===nu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ia)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ig||i===iu||i===su||i===ru)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(i===iu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===su)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ru)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ry extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ws extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oy={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ly=`
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

}`;class cy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ln({vertexShader:ay,fragmentShader:ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new As(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class uy extends Vi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null;const x=new cy,p=t.getContextAttributes();let f=null,S=null;const M=[],w=[],F=new we;let A=null;const R=new $t;R.layers.enable(1),R.viewport=new Et;const N=new $t;N.layers.enable(2),N.viewport=new Et;const E=[R,N],y=new ry;y.layers.enable(1),y.layers.enable(2);let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let de=M[se];return de===void 0&&(de=new Ca,M[se]=de),de.getTargetRaySpace()},this.getControllerGrip=function(se){let de=M[se];return de===void 0&&(de=new Ca,M[se]=de),de.getGripSpace()},this.getHand=function(se){let de=M[se];return de===void 0&&(de=new Ca,M[se]=de),de.getHandSpace()};function G(se){const de=w.indexOf(se.inputSource);if(de===-1)return;const ve=M[de];ve!==void 0&&(ve.update(se.inputSource,se.frame,c||o),ve.dispatchEvent({type:se.type,data:se.inputSource}))}function ie(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",re);for(let se=0;se<M.length;se++){const de=w[se];de!==null&&(w[se]=null,M[se].disconnect(de))}L=null,O=null,x.reset(),e.setRenderTarget(f),m=null,d=null,h=null,s=null,S=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",re),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const de={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new kn(m.framebufferWidth,m.framebufferHeight,{format:En,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let de=null,ve=null,pe=null;p.depth&&(pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=p.stencil?Ts:vs,ve=p.stencil?bs:Es);const He={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new kn(d.textureWidth,d.textureHeight,{format:En,type:fi,depthTexture:new qd(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function re(se){for(let de=0;de<se.removed.length;de++){const ve=se.removed[de],pe=w.indexOf(ve);pe>=0&&(w[pe]=null,M[pe].disconnect(ve))}for(let de=0;de<se.added.length;de++){const ve=se.added[de];let pe=w.indexOf(ve);if(pe===-1){for(let Ne=0;Ne<M.length;Ne++)if(Ne>=w.length){w.push(ve),pe=Ne;break}else if(w[Ne]===null){w[Ne]=ve,pe=Ne;break}if(pe===-1)break}const He=M[pe];He&&He.connect(ve)}}const Q=new U,ne=new U;function Y(se,de,ve){Q.setFromMatrixPosition(de.matrixWorld),ne.setFromMatrixPosition(ve.matrixWorld);const pe=Q.distanceTo(ne),He=de.projectionMatrix.elements,Ne=ve.projectionMatrix.elements,ke=He[14]/(He[10]-1),I=He[14]/(He[10]+1),We=(He[9]+1)/He[5],C=(He[9]-1)/He[5],D=(He[8]-1)/He[0],z=(Ne[8]+1)/Ne[0],Z=ke*D,K=ke*z,te=pe/(-D+z),he=te*-D;de.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(he),se.translateZ(te),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const b=ke+te,g=I+te,P=Z-he,k=K+(pe-he),j=We*I/g*b,X=C*I/g*b;se.projectionMatrix.makePerspective(P,k,j,X,b,g),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function ge(se,de){de===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(de.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;x.texture!==null&&(se.near=x.depthNear,se.far=x.depthFar),y.near=N.near=R.near=se.near,y.far=N.far=R.far=se.far,(L!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,O=y.far,R.near=L,R.far=O,N.near=L,N.far=O,R.updateProjectionMatrix(),N.updateProjectionMatrix(),se.updateProjectionMatrix());const de=se.parent,ve=y.cameras;ge(y,de);for(let pe=0;pe<ve.length;pe++)ge(ve[pe],de);ve.length===2?Y(y,R,N):y.projectionMatrix.copy(R.projectionMatrix),ye(se,y,de)};function ye(se,de,ve){ve===null?se.matrix.copy(de.matrixWorld):(se.matrix.copy(ve.matrixWorld),se.matrix.invert(),se.matrix.multiply(de.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=sr*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Se=null;function De(se,de){if(u=de.getViewerPose(c||o),_=de,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let pe=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let Ne=0;Ne<ve.length;Ne++){const ke=ve[Ne];let I=null;if(m!==null)I=m.getViewport(ke);else{const C=h.getViewSubImage(d,ke);I=C.viewport,Ne===0&&(e.setRenderTargetTextures(S,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(S))}let We=E[Ne];We===void 0&&(We=new $t,We.layers.enable(Ne),We.viewport=new Et,E[Ne]=We),We.matrix.fromArray(ke.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ke.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(I.x,I.y,I.width,I.height),Ne===0&&(y.matrix.copy(We.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(We)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")){const Ne=h.getDepthInformation(ve[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(e,Ne,s.renderState)}}for(let ve=0;ve<M.length;ve++){const pe=w[ve],He=M[ve];pe!==null&&He!==void 0&&He.update(pe,de,c||o)}Se&&Se(se,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Ye=new Yd;Ye.setAnimationLoop(De),this.setAnimationLoop=function(se){Se=se},this.dispose=function(){}}}const Ri=new bn,hy=new st;function dy(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Xd(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,M,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,S,M):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===kt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===kt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=e.get(f),M=S.envMap,w=S.envMapRotation;M&&(p.envMap.value=M,Ri.copy(w),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),p.envMapRotation.value.setFromMatrix4(hy.makeRotationFromEuler(Ri)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fy(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const w=M.program;i.uniformBlockBinding(S,w)}function c(S,M){let w=s[S.id];w===void 0&&(_(S),w=u(S),s[S.id]=w,S.addEventListener("dispose",p));const F=M.program;i.updateUBOMapping(S,F);const A=e.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function u(S){const M=h();S.__bindingPointIndex=M;const w=n.createBuffer(),F=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,F,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],w=S.uniforms,F=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,R=w.length;A<R;A++){const N=Array.isArray(w[A])?w[A]:[w[A]];for(let E=0,y=N.length;E<y;E++){const L=N[E];if(m(L,A,E,F)===!0){const O=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let ie=0;for(let re=0;re<G.length;re++){const Q=G[re],ne=x(Q);typeof Q=="number"||typeof Q=="boolean"?(L.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,O+ie,L.__data)):Q.isMatrix3?(L.__data[0]=Q.elements[0],L.__data[1]=Q.elements[1],L.__data[2]=Q.elements[2],L.__data[3]=0,L.__data[4]=Q.elements[3],L.__data[5]=Q.elements[4],L.__data[6]=Q.elements[5],L.__data[7]=0,L.__data[8]=Q.elements[6],L.__data[9]=Q.elements[7],L.__data[10]=Q.elements[8],L.__data[11]=0):(Q.toArray(L.__data,ie),ie+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,M,w,F){const A=S.value,R=M+"_"+w;if(F[R]===void 0)return typeof A=="number"||typeof A=="boolean"?F[R]=A:F[R]=A.clone(),!0;{const N=F[R];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return F[R]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(S){const M=S.uniforms;let w=0;const F=16;for(let R=0,N=M.length;R<N;R++){const E=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,L=E.length;y<L;y++){const O=E[y],G=Array.isArray(O.value)?O.value:[O.value];for(let ie=0,re=G.length;ie<re;ie++){const Q=G[ie],ne=x(Q),Y=w%F;Y!==0&&F-Y<ne.boundary&&(w+=F-Y),O.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=ne.storage}}}const A=w%F;return A>0&&(w+=F-A),S.__size=w,S.__cache={},this}function x(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class py{constructor(e={}){const{canvas:t=a_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=ui,this.toneMappingExposure=1;const M=this;let w=!1,F=0,A=0,R=null,N=-1,E=null;const y=new Et,L=new Et;let O=null;const G=new je(0);let ie=0,re=t.width,Q=t.height,ne=1,Y=null,ge=null;const ye=new Et(0,0,re,Q),Se=new Et(0,0,re,Q);let De=!1;const Ye=new Fl;let se=!1,de=!1;const ve=new st,pe=new U,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ke(){return R===null?ne:1}let I=i;function We(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",ee,!1),I===null){const B="webgl2";if(I=We(B,T),I===null)throw We(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let C,D,z,Z,K,te,he,b,g,P,k,j,X,ce,oe,le,xe,ae,Me,Fe,Pe,me,Oe,Ae;function qe(){C=new Sx(I),C.init(),me=new sy(I,C),D=new gx(I,C,e,me),z=new ny(I),Z=new Tx(I),K=new VM,te=new iy(I,C,z,K,D,me,Z),he=new vx(M),b=new yx(M),g=new D_(I),Oe=new px(I,g),P=new Ex(I,g,Z,Oe),k=new Ax(I,P,g,Z),Me=new wx(I,D,te),le=new _x(K),j=new kM(M,he,b,C,D,Oe,le),X=new dy(M,K),ce=new WM,oe=new KM(C),ae=new fx(M,he,b,z,k,d,l),xe=new ty(M,k,D),Ae=new fy(I,Z,D,z),Fe=new mx(I,C,Z),Pe=new bx(I,C,Z),Z.programs=j.programs,M.capabilities=D,M.extensions=C,M.properties=K,M.renderLists=ce,M.shadowMap=xe,M.state=z,M.info=Z}qe();const v=new uy(M,I);this.xr=v,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=C.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=C.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(T){T!==void 0&&(ne=T,this.setSize(re,Q,!1))},this.getSize=function(T){return T.set(re,Q)},this.setSize=function(T,B,q=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=T,Q=B,t.width=Math.floor(T*ne),t.height=Math.floor(B*ne),q===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(re*ne,Q*ne).floor()},this.setDrawingBufferSize=function(T,B,q){re=T,Q=B,ne=q,t.width=Math.floor(T*q),t.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(ye)},this.setViewport=function(T,B,q,$){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,B,q,$),z.viewport(y.copy(ye).multiplyScalar(ne).round())},this.getScissor=function(T){return T.copy(Se)},this.setScissor=function(T,B,q,$){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,B,q,$),z.scissor(L.copy(Se).multiplyScalar(ne).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(T){z.setScissorTest(De=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,B=!0,q=!0){let $=0;if(T){let V=!1;if(R!==null){const fe=R.texture.format;V=fe===Fd||fe===Nd||fe===Ud}if(V){const fe=R.texture.type,Ee=fe===fi||fe===Es||fe===uo||fe===bs||fe===Dd||fe===Id,be=ae.getClearColor(),Te=ae.getClearAlpha(),Ie=be.r,Ue=be.g,Le=be.b;Ee?(m[0]=Ie,m[1]=Ue,m[2]=Le,m[3]=Te,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ie,_[1]=Ue,_[2]=Le,_[3]=Te,I.clearBufferiv(I.COLOR,0,_))}else $|=I.COLOR_BUFFER_BIT}B&&($|=I.DEPTH_BUFFER_BIT),q&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ce.dispose(),oe.dispose(),K.dispose(),he.dispose(),b.dispose(),k.dispose(),Oe.dispose(),Ae.dispose(),j.dispose(),v.dispose(),v.removeEventListener("sessionstart",pt),v.removeEventListener("sessionend",mt),Gt.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=Z.autoReset,B=xe.enabled,q=xe.autoUpdate,$=xe.needsUpdate,V=xe.type;qe(),Z.autoReset=T,xe.enabled=B,xe.autoUpdate=q,xe.needsUpdate=$,xe.type=V}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const B=T.target;B.removeEventListener("dispose",ue),Ce(B)}function Ce(T){ze(T),K.remove(T)}function ze(T){const B=K.get(T).programs;B!==void 0&&(B.forEach(function(q){j.releaseProgram(q)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,$,V,fe){B===null&&(B=He);const Ee=V.isMesh&&V.matrixWorld.determinant()<0,be=af(T,B,q,$,V);z.setMaterial($,Ee);let Te=q.index,Ie=1;if($.wireframe===!0){if(Te=P.getWireframeAttribute(q),Te===void 0)return;Ie=2}const Ue=q.drawRange,Le=q.attributes.position;let Ze=Ue.start*Ie,ct=(Ue.start+Ue.count)*Ie;fe!==null&&(Ze=Math.max(Ze,fe.start*Ie),ct=Math.min(ct,(fe.start+fe.count)*Ie)),Te!==null?(Ze=Math.max(Ze,0),ct=Math.min(ct,Te.count)):Le!=null&&(Ze=Math.max(Ze,0),ct=Math.min(ct,Le.count));const ut=ct-Ze;if(ut<0||ut===1/0)return;Oe.setup(V,$,be,q,Te);let Xt,Je=Fe;if(Te!==null&&(Xt=g.get(Te),Je=Pe,Je.setIndex(Xt)),V.isMesh)$.wireframe===!0?(z.setLineWidth($.wireframeLinewidth*ke()),Je.setMode(I.LINES)):Je.setMode(I.TRIANGLES);else if(V.isLine){let Re=$.linewidth;Re===void 0&&(Re=1),z.setLineWidth(Re*ke()),V.isLineSegments?Je.setMode(I.LINES):V.isLineLoop?Je.setMode(I.LINE_LOOP):Je.setMode(I.LINE_STRIP)}else V.isPoints?Je.setMode(I.POINTS):V.isSprite&&Je.setMode(I.TRIANGLES);if(V.isBatchedMesh)V._multiDrawInstances!==null?Je.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances):Je.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Je.renderInstances(Ze,ut,V.count);else if(q.isInstancedBufferGeometry){const Re=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Nt=Math.min(q.instanceCount,Re);Je.renderInstances(Ze,ut,Nt)}else Je.render(Ze,ut)};function lt(T,B,q){T.transparent===!0&&T.side===nn&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,fr(T,B,q),T.side=di,T.needsUpdate=!0,fr(T,B,q),T.side=nn):fr(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),p=oe.get(q),p.init(B),S.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==q&&T.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const $=new Set;return T.traverse(function(V){const fe=V.material;if(fe)if(Array.isArray(fe))for(let Ee=0;Ee<fe.length;Ee++){const be=fe[Ee];lt(be,q,V),$.add(be)}else lt(fe,q,V),$.add(fe)}),S.pop(),p=null,$},this.compileAsync=function(T,B,q=null){const $=this.compile(T,B,q);return new Promise(V=>{function fe(){if($.forEach(function(Ee){K.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){V(T);return}setTimeout(fe,10)}C.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ft=null;function Ke(T){ft&&ft(T)}function pt(){Gt.stop()}function mt(){Gt.start()}const Gt=new Yd;Gt.setAnimationLoop(Ke),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){ft=T,v.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},v.addEventListener("sessionstart",pt),v.addEventListener("sessionend",mt),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(B),B=v.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,B,R),p=oe.get(T,S.length),p.init(B),S.push(p),ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ye.setFromProjectionMatrix(ve),de=this.localClippingEnabled,se=le.init(this.clippingPlanes,de),x=ce.get(T,f.length),x.init(),f.push(x),v.enabled===!0&&v.isPresenting===!0){const fe=M.xr.getDepthSensingMesh();fe!==null&&Wt(fe,B,-1/0,M.sortObjects)}Wt(T,B,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(Y,ge),Ne=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,Ne&&ae.addToRenderList(x,T),this.info.render.frame++,se===!0&&le.beginShadows();const q=p.state.shadowsArray;xe.render(q,T,B),se===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,V=x.transmissive;if(p.setupLights(),B.isArrayCamera){const fe=B.cameras;if(V.length>0)for(let Ee=0,be=fe.length;Ee<be;Ee++){const Te=fe[Ee];_i($,V,T,Te)}Ne&&ae.render(T);for(let Ee=0,be=fe.length;Ee<be;Ee++){const Te=fe[Ee];Gn(x,T,Te,Te.viewport)}}else V.length>0&&_i($,V,T,B),Ne&&ae.render(T),Gn(x,T,B);R!==null&&(te.updateMultisampleRenderTarget(R),te.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(M,T,B),Oe.resetDefaultState(),N=-1,E=null,S.pop(),S.length>0?(p=S[S.length-1],se===!0&&le.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Wt(T,B,q,$){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ye.intersectsSprite(T)){$&&pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const Ee=k.update(T),be=T.material;be.visible&&x.push(T,Ee,be,q,pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ye.intersectsObject(T))){const Ee=k.update(T),be=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pe.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),pe.copy(Ee.boundingSphere.center)),pe.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(be)){const Te=Ee.groups;for(let Ie=0,Ue=Te.length;Ie<Ue;Ie++){const Le=Te[Ie],Ze=be[Le.materialIndex];Ze&&Ze.visible&&x.push(T,Ee,Ze,q,pe.z,Le)}}else be.visible&&x.push(T,Ee,be,q,pe.z,null)}}const fe=T.children;for(let Ee=0,be=fe.length;Ee<be;Ee++)Wt(fe[Ee],B,q,$)}function Gn(T,B,q,$){const V=T.opaque,fe=T.transmissive,Ee=T.transparent;p.setupLightsView(q),se===!0&&le.setGlobalState(M.clippingPlanes,q),$&&z.viewport(y.copy($)),V.length>0&&vi(V,B,q),fe.length>0&&vi(fe,B,q),Ee.length>0&&vi(Ee,B,q),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function _i(T,B,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new kn(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?Rs:fi,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const fe=p.state.transmissionRenderTarget[$.id],Ee=$.viewport||y;fe.setSize(Ee.z,Ee.w);const be=M.getRenderTarget();M.setRenderTarget(fe),M.getClearColor(G),ie=M.getClearAlpha(),ie<1&&M.setClearColor(16777215,.5),Ne?ae.render(q):M.clear();const Te=M.toneMapping;M.toneMapping=ui;const Ie=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),se===!0&&le.setGlobalState(M.clippingPlanes,$),vi(T,q,$),te.updateMultisampleRenderTarget(fe),te.updateRenderTargetMipmap(fe),C.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Le=0,Ze=B.length;Le<Ze;Le++){const ct=B[Le],ut=ct.object,Xt=ct.geometry,Je=ct.material,Re=ct.group;if(Je.side===nn&&ut.layers.test($.layers)){const Nt=Je.side;Je.side=kt,Je.needsUpdate=!0,Vl(ut,q,$,Xt,Je,Re),Je.side=Nt,Je.needsUpdate=!0,Ue=!0}}Ue===!0&&(te.updateMultisampleRenderTarget(fe),te.updateRenderTargetMipmap(fe))}M.setRenderTarget(be),M.setClearColor(G,ie),Ie!==void 0&&($.viewport=Ie),M.toneMapping=Te}function vi(T,B,q){const $=B.isScene===!0?B.overrideMaterial:null;for(let V=0,fe=T.length;V<fe;V++){const Ee=T[V],be=Ee.object,Te=Ee.geometry,Ie=$===null?Ee.material:$,Ue=Ee.group;be.layers.test(q.layers)&&Vl(be,B,q,Te,Ie,Ue)}}function Vl(T,B,q,$,V,fe){T.onBeforeRender(M,B,q,$,V,fe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(M,B,q,$,T,fe),V.transparent===!0&&V.side===nn&&V.forceSinglePass===!1?(V.side=kt,V.needsUpdate=!0,M.renderBufferDirect(q,B,$,V,T,fe),V.side=di,V.needsUpdate=!0,M.renderBufferDirect(q,B,$,V,T,fe),V.side=nn):M.renderBufferDirect(q,B,$,V,T,fe),T.onAfterRender(M,B,q,$,V,fe)}function fr(T,B,q){B.isScene!==!0&&(B=He);const $=K.get(T),V=p.state.lights,fe=p.state.shadowsArray,Ee=V.state.version,be=j.getParameters(T,V.state,fe,B,q),Te=j.getProgramCacheKey(be);let Ie=$.programs;$.environment=T.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(T.isMeshStandardMaterial?b:he).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",ue),Ie=new Map,$.programs=Ie);let Ue=Ie.get(Te);if(Ue!==void 0){if($.currentProgram===Ue&&$.lightsStateVersion===Ee)return Wl(T,be),Ue}else be.uniforms=j.getUniforms(T),T.onBuild(q,be,M),T.onBeforeCompile(be,M),Ue=j.acquireProgram(be,Te),Ie.set(Te,Ue),$.uniforms=be.uniforms;const Le=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=le.uniform),Wl(T,be),$.needsLights=cf(T),$.lightsStateVersion=Ee,$.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMap.value=V.state.directionalShadowMap,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotShadowMap.value=V.state.spotShadowMap,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMap.value=V.state.pointShadowMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Ue,$.uniformsList=null,Ue}function Gl(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=io.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Wl(T,B){const q=K.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function af(T,B,q,$,V){B.isScene!==!0&&(B=He),te.resetTextureUnits();const fe=B.fog,Ee=$.isMeshStandardMaterial?B.environment:null,be=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:gi,Te=($.isMeshStandardMaterial?b:he).get($.envMap||Ee),Ie=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ue=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,ct=!!q.morphAttributes.color;let ut=ui;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ut=M.toneMapping);const Xt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Je=Xt!==void 0?Xt.length:0,Re=K.get($),Nt=p.state.lights;if(se===!0&&(de===!0||T!==E)){const Qt=T===E&&$.id===N;le.setState($,T,Qt)}let nt=!1;$.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Nt.state.version||Re.outputColorSpace!==be||V.isBatchedMesh&&Re.batching===!1||!V.isBatchedMesh&&Re.batching===!0||V.isBatchedMesh&&Re.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Re.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Re.instancing===!1||!V.isInstancedMesh&&Re.instancing===!0||V.isSkinnedMesh&&Re.skinning===!1||!V.isSkinnedMesh&&Re.skinning===!0||V.isInstancedMesh&&Re.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Re.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Re.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Re.instancingMorph===!1&&V.morphTexture!==null||Re.envMap!==Te||$.fog===!0&&Re.fog!==fe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==le.numPlanes||Re.numIntersection!==le.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==Ue||Re.morphTargets!==Le||Re.morphNormals!==Ze||Re.morphColors!==ct||Re.toneMapping!==ut||Re.morphTargetsCount!==Je)&&(nt=!0):(nt=!0,Re.__version=$.version);let wn=Re.currentProgram;nt===!0&&(wn=fr($,B,V));let pr=!1,xi=!1,Oo=!1;const yt=wn.getUniforms(),Wn=Re.uniforms;if(z.useProgram(wn.program)&&(pr=!0,xi=!0,Oo=!0),$.id!==N&&(N=$.id,xi=!0),pr||E!==T){yt.setValue(I,"projectionMatrix",T.projectionMatrix),yt.setValue(I,"viewMatrix",T.matrixWorldInverse);const Qt=yt.map.cameraPosition;Qt!==void 0&&Qt.setValue(I,pe.setFromMatrixPosition(T.matrixWorld)),D.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,xi=!0,Oo=!0)}if(V.isSkinnedMesh){yt.setOptional(I,V,"bindMatrix"),yt.setOptional(I,V,"bindMatrixInverse");const Qt=V.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),yt.setValue(I,"boneTexture",Qt.boneTexture,te))}V.isBatchedMesh&&(yt.setOptional(I,V,"batchingTexture"),yt.setValue(I,"batchingTexture",V._matricesTexture,te),yt.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&yt.setValue(I,"batchingColorTexture",V._colorsTexture,te));const Bo=q.morphAttributes;if((Bo.position!==void 0||Bo.normal!==void 0||Bo.color!==void 0)&&Me.update(V,q,wn),(xi||Re.receiveShadow!==V.receiveShadow)&&(Re.receiveShadow=V.receiveShadow,yt.setValue(I,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Wn.envMap.value=Te,Wn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(Wn.envMapIntensity.value=B.environmentIntensity),xi&&(yt.setValue(I,"toneMappingExposure",M.toneMappingExposure),Re.needsLights&&lf(Wn,Oo),fe&&$.fog===!0&&X.refreshFogUniforms(Wn,fe),X.refreshMaterialUniforms(Wn,$,ne,Q,p.state.transmissionRenderTarget[T.id]),io.upload(I,Gl(Re),Wn,te)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(io.upload(I,Gl(Re),Wn,te),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(I,"center",V.center),yt.setValue(I,"modelViewMatrix",V.modelViewMatrix),yt.setValue(I,"normalMatrix",V.normalMatrix),yt.setValue(I,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Qt=$.uniformsGroups;for(let zo=0,uf=Qt.length;zo<uf;zo++){const Xl=Qt[zo];Ae.update(Xl,wn),Ae.bind(Xl,wn)}}return wn}function lf(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function cf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,B,q){K.get(T.texture).__webglTexture=B,K.get(T.depthTexture).__webglTexture=q;const $=K.get(T);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const q=K.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){R=T,F=B,A=q;let $=!0,V=null,fe=!1,Ee=!1;if(T){const Te=K.get(T);Te.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(I.FRAMEBUFFER,null),$=!1):Te.__webglFramebuffer===void 0?te.setupRenderTarget(T):Te.__hasExternalTextures&&te.rebindTextures(T,K.get(T.texture).__webglTexture,K.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);const Ue=K.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?V=Ue[B][q]:V=Ue[B],fe=!0):T.samples>0&&te.useMultisampledRTT(T)===!1?V=K.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?V=Ue[q]:V=Ue,y.copy(T.viewport),L.copy(T.scissor),O=T.scissorTest}else y.copy(ye).multiplyScalar(ne).floor(),L.copy(Se).multiplyScalar(ne).floor(),O=De;if(z.bindFramebuffer(I.FRAMEBUFFER,V)&&$&&z.drawBuffers(T,V),z.viewport(y),z.scissor(L),z.setScissorTest(O),fe){const Te=K.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,q)}else if(Ee){const Te=K.get(T.texture),Ie=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,q||0,Ie)}N=-1},this.readRenderTargetPixels=function(T,B,q,$,V,fe,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){z.bindFramebuffer(I.FRAMEBUFFER,be);try{const Te=T.texture,Ie=Te.format,Ue=Te.type;if(!D.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-$&&q>=0&&q<=T.height-V&&I.readPixels(B,q,$,V,me.convert(Ie),me.convert(Ue),fe)}finally{const Te=R!==null?K.get(R).__webglFramebuffer:null;z.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,$,V,fe,Ee){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=K.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){z.bindFramebuffer(I.FRAMEBUFFER,be);try{const Te=T.texture,Ie=Te.format,Ue=Te.type;if(!D.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-$&&q>=0&&q<=T.height-V){const Le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.bufferData(I.PIXEL_PACK_BUFFER,fe.byteLength,I.STREAM_READ),I.readPixels(B,q,$,V,me.convert(Ie),me.convert(Ue),0),I.flush();const Ze=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await l_(I,Ze,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,fe)}finally{I.deleteBuffer(Le),I.deleteSync(Ze)}return fe}}finally{const Te=R!==null?K.get(R).__webglFramebuffer:null;z.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,B=null,q=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const $=Math.pow(2,-q),V=Math.floor(T.image.width*$),fe=Math.floor(T.image.height*$),Ee=B!==null?B.x:0,be=B!==null?B.y:0;te.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,Ee,be,V,fe),z.unbindTexture()},this.copyTextureToTexture=function(T,B,q=null,$=null,V=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,T=arguments[1],B=arguments[2],V=arguments[3]||0,q=null);let fe,Ee,be,Te,Ie,Ue;q!==null?(fe=q.max.x-q.min.x,Ee=q.max.y-q.min.y,be=q.min.x,Te=q.min.y):(fe=T.image.width,Ee=T.image.height,be=0,Te=0),$!==null?(Ie=$.x,Ue=$.y):(Ie=0,Ue=0);const Le=me.convert(B.format),Ze=me.convert(B.type);te.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const ct=I.getParameter(I.UNPACK_ROW_LENGTH),ut=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Xt=I.getParameter(I.UNPACK_SKIP_PIXELS),Je=I.getParameter(I.UNPACK_SKIP_ROWS),Re=I.getParameter(I.UNPACK_SKIP_IMAGES),Nt=T.isCompressedTexture?T.mipmaps[V]:T.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,be),I.pixelStorei(I.UNPACK_SKIP_ROWS,Te),T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,Ie,Ue,fe,Ee,Le,Ze,Nt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,Ie,Ue,Nt.width,Nt.height,Le,Nt.data):I.texSubImage2D(I.TEXTURE_2D,V,Ie,Ue,Le,Ze,Nt),I.pixelStorei(I.UNPACK_ROW_LENGTH,ct),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re),V===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q=null,$=null,V=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,T=arguments[2],B=arguments[3],V=arguments[4]||0);let fe,Ee,be,Te,Ie,Ue,Le,Ze,ct;const ut=T.isCompressedTexture?T.mipmaps[V]:T.image;q!==null?(fe=q.max.x-q.min.x,Ee=q.max.y-q.min.y,be=q.max.z-q.min.z,Te=q.min.x,Ie=q.min.y,Ue=q.min.z):(fe=ut.width,Ee=ut.height,be=ut.depth,Te=0,Ie=0,Ue=0),$!==null?(Le=$.x,Ze=$.y,ct=$.z):(Le=0,Ze=0,ct=0);const Xt=me.convert(B.format),Je=me.convert(B.type);let Re;if(B.isData3DTexture)te.setTexture3D(B,0),Re=I.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)te.setTexture2DArray(B,0),Re=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Nt=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),wn=I.getParameter(I.UNPACK_SKIP_PIXELS),pr=I.getParameter(I.UNPACK_SKIP_ROWS),xi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ue),T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Re,V,Le,Ze,ct,fe,Ee,be,Xt,Je,ut.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Re,V,Le,Ze,ct,fe,Ee,be,Xt,ut.data):I.texSubImage3D(Re,V,Le,Ze,ct,fe,Ee,be,Xt,Je,ut),I.pixelStorei(I.UNPACK_ROW_LENGTH,Nt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wn),I.pixelStorei(I.UNPACK_SKIP_ROWS,pr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,xi),V===0&&B.generateMipmaps&&I.generateMipmap(Re),z.unbindTexture()},this.initRenderTarget=function(T){K.get(T).__webglFramebuffer===void 0&&te.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?te.setTextureCube(T,0):T.isData3DTexture?te.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?te.setTexture2DArray(T,0):te.setTexture2D(T,0),z.unbindTexture()},this.resetState=function(){F=0,A=0,R=null,z.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ll?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Io?"display-p3":"srgb"}}class my extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Il("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new U;class go{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),s=et(s,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new go(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sl extends Tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const Bs=new U,cs=new U,us=new U,hs=new we,zs=new we,ef=new st,Wr=new U,Hs=new U,Xr=new U,Ku=new we,Ra=new we,Zu=new we;class Qu extends _t{constructor(e=new sl){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new gy(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new go(i,3,0,!1)),ls.setAttribute("uv",new go(i,2,3,!1))}this.geometry=ls,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),ef.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;jr(Wr.set(-.5,-.5,0),us,o,cs,s,r),jr(Hs.set(.5,-.5,0),us,o,cs,s,r),jr(Xr.set(.5,.5,0),us,o,cs,s,r),Ku.set(0,0),Ra.set(1,0),Zu.set(1,1);let a=e.ray.intersectTriangle(Wr,Hs,Xr,!1,Bs);if(a===null&&(jr(Hs.set(-.5,.5,0),us,o,cs,s,r),Ra.set(0,1),a=e.ray.intersectTriangle(Wr,Xr,Hs,!1,Bs),a===null))return;const l=e.ray.origin.distanceTo(Bs);l<e.near||l>e.far||t.push({distance:l,point:Bs.clone(),uv:gn.getInterpolation(Bs,Wr,Hs,Xr,Ku,Ra,Zu,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function jr(n,e,t,i,s,r){hs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(zs.x=r*hs.x-s*hs.y,zs.y=s*hs.x+r*hs.y):zs.copy(hs),n.copy(e),n.x+=zs.x,n.y+=zs.y,n.applyMatrix4(ef)}class Ms extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _o=new U,vo=new U,Ju=new st,ks=new ur,Yr=new cr,Pa=new U,eh=new U;class zl extends _t{constructor(e=new At,t=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_o.fromBufferAttribute(t,s-1),vo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_o.distanceTo(vo);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;Ju.copy(s).invert(),ks.copy(e.ray).applyMatrix4(Ju);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=m,p=_-1;x<p;x+=c){const f=u.getX(x),S=u.getX(x+1),M=qr(this,e,ks,l,f,S);M&&t.push(M)}if(this.isLineLoop){const x=u.getX(_-1),p=u.getX(m),f=qr(this,e,ks,l,x,p);f&&t.push(f)}}else{const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=m,p=_-1;x<p;x+=c){const f=qr(this,e,ks,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){const x=qr(this,e,ks,l,_-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qr(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(_o.fromBufferAttribute(o,s),vo.fromBufferAttribute(o,r),t.distanceSqToSegment(_o,vo,Pa,eh)>i)return;Pa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Pa);if(!(l<e.near||l>e.far))return{distance:l,point:eh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const th=new U,nh=new U;class ih extends zl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)th.fromBufferAttribute(t,s),nh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+th.distanceTo(nh);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xs extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sh=new st,rl=new ur,$r=new cr,Kr=new U;class La extends _t{constructor(e=new At,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;sh.copy(s).invert(),rl.copy(e.ray).applyMatrix4(sh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,x=m;_<x;_++){const p=c.getX(_);Kr.fromBufferAttribute(h,p),rh(Kr,p,l,s,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,x=m;_<x;_++)Kr.fromBufferAttribute(h,_),rh(Kr,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rh(n,e,t,i,s,r,o){const a=rl.distanceSqToPoint(n);if(a<t){const l=new U;rl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class oh extends Ut{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fo extends At{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new U,w=new U,F=new U;for(let A=0;A<t.length;A+=3)m(t[A+0],M),m(t[A+1],w),m(t[A+2],F),l(M,w,F,S)}function l(S,M,w,F){const A=F+1,R=[];for(let N=0;N<=A;N++){R[N]=[];const E=S.clone().lerp(w,N/A),y=M.clone().lerp(w,N/A),L=A-N;for(let O=0;O<=L;O++)O===0&&N===A?R[N][O]=E:R[N][O]=E.clone().lerp(y,O/L)}for(let N=0;N<A;N++)for(let E=0;E<2*(A-N)-1;E++){const y=Math.floor(E/2);E%2===0?(d(R[N][y+1]),d(R[N+1][y]),d(R[N][y])):(d(R[N][y+1]),d(R[N+1][y+1]),d(R[N+1][y]))}}function c(S){const M=new U;for(let w=0;w<r.length;w+=3)M.x=r[w+0],M.y=r[w+1],M.z=r[w+2],M.normalize().multiplyScalar(S),r[w+0]=M.x,r[w+1]=M.y,r[w+2]=M.z}function u(){const S=new U;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const w=p(S)/2/Math.PI+.5,F=f(S)/Math.PI+.5;o.push(w,1-F)}_(),h()}function h(){for(let S=0;S<o.length;S+=6){const M=o[S+0],w=o[S+2],F=o[S+4],A=Math.max(M,w,F),R=Math.min(M,w,F);A>.9&&R<.1&&(M<.2&&(o[S+0]+=1),w<.2&&(o[S+2]+=1),F<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,M){const w=S*3;M.x=e[w+0],M.y=e[w+1],M.z=e[w+2]}function _(){const S=new U,M=new U,w=new U,F=new U,A=new we,R=new we,N=new we;for(let E=0,y=0;E<r.length;E+=9,y+=6){S.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),w.set(r[E+6],r[E+7],r[E+8]),A.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),N.set(o[y+4],o[y+5]),F.copy(S).add(M).add(w).divideScalar(3);const L=p(F);x(A,y+0,S,L),x(R,y+2,M,L),x(N,y+4,w,L)}}function x(S,M,w,F){F<0&&S.x===1&&(o[M]=S.x-1),w.x===0&&w.z===0&&(o[M]=F/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.vertices,e.indices,e.radius,e.details)}}class Hl extends At{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,d=new U,m=[],_=[],x=[],p=[];for(let f=0;f<=i;f++){const S=[],M=f/i;let w=0;f===0&&o===0?w=.5/t:f===i&&l===Math.PI&&(w=-.5/t);for(let F=0;F<=t;F++){const A=F/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(A+w,1-M),S.push(c++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){const M=u[f][S+1],w=u[f][S],F=u[f+1][S],A=u[f+1][S+1];(f!==0||o>0)&&m.push(M,w,A),(f!==i-1||l<Math.PI)&&m.push(w,F,A)}this.setIndex(m),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _y extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ri extends Tn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const xo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class vy{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const xy=new vy;class Ds{constructor(e){this.manager=e!==void 0?e:xy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dn={};class My extends Error{constructor(e,t){super(e),this.response=t}}class yy extends Ds{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=xo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:i,onError:s});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Dn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,_=m!==0;let x=0;const p=new ReadableStream({start(f){S();function S(){h.read().then(({done:M,value:w})=>{if(M)f.close();else{x+=w.byteLength;const F=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:m});for(let A=0,R=u.length;A<R;A++){const N=u[A];N.onProgress&&N.onProgress(F)}f.enqueue(w),S()}},M=>{f.error(M)})}}});return new Response(p)}else throw new My(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{xo.add(e,c);const u=Dn[e];delete Dn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Dn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class tf extends Ds{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=xo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=rr("img");function l(){u(),xo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Sy extends Ds{constructor(e){super(e)}load(e,t,i,s){const r=new Nl;r.colorSpace=fn;const o=new tf(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class Mo extends Ds{constructor(e){super(e)}load(e,t,i,s){const r=new Ut,o=new tf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class nf extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Da=new st,ah=new U,lh=new U;class Ey{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(ah),lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lh),t.updateMatrixWorld(),Da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class by extends Ey{constructor(){super(new Ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ch extends nf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new by}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ty extends nf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=uh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function uh(){return(typeof performance>"u"?Date:performance).now()}const hh=new st;class wy{constructor(e,t,i=0,s=1/0){this.ray=new ur(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(e,t=!0,i=[]){return ol(e,this,i,t),i.sort(dh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ol(e[s],this,i,t);return i.sort(dh),i}}function dh(n,e){return n.distance-e.distance}function ol(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ol(r[o],e,t,!0)}}class fh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);function Ay(n){const e=n.clientWidth,t=n.clientHeight,i=new $t(45,e/t,1,1e4);return i.position.set(480,12,700),i}function Cy(n){const e=n.clientWidth,t=n.clientHeight,i=new $t(45,e/t,1,1e4),s=480;let r=2*Math.PI/6400,o=232;return i.position.set(480,12,700),i.tick=a=>{o-=r,i.position.x=s*Math.cos(o),i.position.z=s*Math.sin(o),i.lookAt(0,0,0)},i}function Ry(){const n=new Mo,e=new ri({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/px.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/px.png"),displacementScale:2,displacementBias:-1}),t=new ri({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/nx.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/nx.png"),displacementScale:2,displacementBias:-1}),i=new ri({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/py.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/py.png"),displacementScale:2,displacementBias:-1}),s=new ri({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/ny.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/ny.png"),displacementScale:2,displacementBias:-1}),r=new ri({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/pz.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/pz.png"),displacementScale:2,displacementBias:-1}),o=new ri({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/nz.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/nz.png"),displacementScale:2,displacementBias:-1});return[e,t,i,s,r,o]}function Py(){const e=new Mo().load("textures/mars/mars-overlay-2.png"),t=new Hl(207,32,32),i=new ri({map:e,transparent:!0,depthTest:!0,side:nn,emissive:"#ccd2ff",emissiveIntensity:1,shininess:60,precision:"highp",dithering:!0,flatShading:!0,color:"#000000"}),s=new bt(t,i);return s.isOverlay=!0,s.name="overlay",s.tick=r=>{s.rotation.y+=1/48*r},s}function Ly(){let e=new Ps(1,1,1,50,50,50),t=new U;for(let r=0;r<e.attributes.position.count;r++)t.fromBufferAttribute(e.attributes.position,r),t.normalize().multiplyScalar(200),e.attributes.position.setXYZ(r,t.x,t.y,t.z);e.computeVertexNormals();const i=new Ry,s=new bt(e,i);return s.material.generateMipmaps=!0,s.material.wrapS=Fn,s.material.wrapT=Fn,s.material.minFilter=s.material.magFilter=sn,s.geometry.computeVertexNormals(),s.castShadow=!0,s.traverse(function(r){r.isMesh&&(r.castShadow=!0)}),s.tick=r=>{s.rotation.y+=1/48*r},s}function Dy(){const n=new my,e=new Sy().setPath("textures/space/8k_equi_cubemap/").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);return e.mapping=Hi,e.magFilter=Ht,e.minFilter=Ht,new je("white"),n.background=e,e.dispose(),n}const Iy=()=>{const n=new Ty("#c0bfad",.5),e=new ch("#c0bfad",3),t=new ch("#c0bfad",.5);e.castShadow=!0,e.position.set(1200,700,700),t.position.set(1200,500,700);var i=300;return e.shadow.camera.top=i,e.shadow.camera.bottom=-i,e.shadow.camera.left=i,e.shadow.camera.right=-i,e.shadow.mapSize.width=500,e.shadow.mapSize.height=500,e.shadow.camera.near=1350,e.shadow.camera.far=2200,{mainLight:e,softenerLightLower:t,ambientLight:n}},Uy=/^[og]\s*(.+)?/,Ny=/^mtllib /,Fy=/^usemtl /,Oy=/^usemap /,ph=/\s+/,mh=new U,Ia=new U,gh=new U,_h=new U,tn=new U,Zr=new je;function By(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;mh.fromArray(s,e),Ia.fromArray(s,t),gh.fromArray(s,i),tn.subVectors(gh,Ia),_h.subVectors(mh,Ia),tn.cross(_h),tn.normalize(),r.push(tn.x,tn.y,tn.z),r.push(tn.x,tn.y,tn.z),r.push(tn.x,tn.y,tn.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),m=this.parseVertexIndex(i,u);if(this.addVertex(h,d,m),this.addColor(h,d,m),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),d=this.parseNormalIndex(l,_),m=this.parseNormalIndex(c,_),this.addNormal(h,d,m)}else this.addFaceNormal(h,d,m);if(s!==void 0&&s!==""){const _=this.uvs.length;h=this.parseUVIndex(s,_),d=this.parseUVIndex(r,_),m=this.parseUVIndex(o,_),this.addUV(h,d,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class rf extends Ds{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,o=new yy(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new By;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(ph);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Zr.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(Zr.r,Zr.g,Zr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const d=c.slice(1).trim().split(ph),m=[];for(let x=0,p=d.length;x<p;x++){const f=d[x];if(f.length>0){const S=f.split("/");m.push(S)}}const _=m[0];for(let x=1,p=m.length-1;x<p;x++){const f=m[x],S=m[x+1];t.addFace(_[0],f[0],S[0],_[1],f[1],S[1],_[2],f[2],S[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let d=[];const m=[];if(c.indexOf("/")===-1)d=h;else for(let _=0,x=h.length;_<x;_++){const p=h[_].split("/");p[0]!==""&&d.push(p[0]),p[1]!==""&&m.push(p[1])}t.addLineGeometry(d,m)}else if(u==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=Uy.exec(c))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Fy.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Ny.test(c))t.materialLibraries.push(c.substring(7).trim());else if(Oy.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Ws;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,d=u.type==="Line",m=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const x=new At;x.setAttribute("position",new at(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new at(u.normals,3)),u.colors.length>0&&(_=!0,x.setAttribute("color",new at(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new at(u.uvs,2));const p=[];for(let S=0,M=h.length;S<M;S++){const w=h[S],F=w.name+"_"+w.smooth+"_"+_;let A=t.materials[F];if(this.materials!==null){if(A=this.materials.create(w.name),d&&A&&!(A instanceof Ms)){const R=new Ms;Tn.prototype.copy.call(R,A),R.color.copy(A.color),A=R}else if(m&&A&&!(A instanceof Xs)){const R=new Xs({size:10,sizeAttenuation:!1});Tn.prototype.copy.call(R,A),R.color.copy(A.color),R.map=A.map,A=R}}A===void 0&&(d?A=new Ms:m?A=new Xs({size:1,sizeAttenuation:!1}):A=new ri,A.name=w.name,A.flatShading=!w.smooth,A.vertexColors=_,t.materials[F]=A),p.push(A)}let f;if(p.length>1){for(let S=0,M=h.length;S<M;S++){const w=h[S];x.addGroup(w.groupStart,w.groupCount,S)}d?f=new ih(x,p):m?f=new La(x,p):f=new bt(x,p)}else d?f=new ih(x,p[0]):m?f=new La(x,p[0]):f=new bt(x,p[0]);f.name=c.name,r.add(f)}else if(t.vertices.length>0){const a=new Xs({size:1,sizeAttenuation:!1}),l=new At;l.setAttribute("position",new at(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new at(t.colors,3)),a.vertexColors=!0);const c=new La(l,a);r.add(c)}return r}}function zy(){const n=new rf;return new Promise((e,t)=>{n.load("models/g_phobos_287m.obj",i=>{e(i)},i=>{console.log(i.loaded/i.total*100+"% loaded")},i=>{t(new Error("An error happened during loading of the model."))})})}function Hy(){const n=new rf;return new Promise((e,t)=>{n.load("models/g_deimos_162m.obj",i=>{e(i)},i=>{console.log(i.loaded/i.total*100+"% loaded")},i=>{t(new Error("An error happened during loading of the model."))})})}async function ky(){try{let m=function(_){const x=new Float32Array(_.length*3);for(let S=0;S<_.length;S++)x[S*3]=_[S].x,x[S*3+1]=_[S].y,x[S*3+2]=_[S].z;const p=new At;return p.setAttribute("position",new an(x,3)),new zl(p,d)};var n=m;const e=await zy(),t=await Hy();e.name="moon",t.name="moon",e.receiveShadow=!0,e.color="white",e.traverse(function(_){_.isMesh&&(_.receiveShadow=!0)});const i=400,s=1200;let r=2*Math.PI/2500,o=2*Math.PI/5e3,a=0,l=400;const c=[],u=[],h=499,d=new Ms({color:16777215});return e.tick=_=>{a-=r,l-=o,e.position.x=i*Math.cos(a),e.position.z=i*Math.sin(a),t.position.x=s*Math.cos(l),t.position.z=s*Math.sin(l),c.push(e.position.clone()),u.push(t.position.clone()),c.length>h&&c.shift(),u.length>h&&u.shift();const x=_.getObjectByName("phobosTrail"),p=_.getObjectByName("deimosTrail");x&&(_.remove(x),x.geometry.dispose(),x.material.dispose()),p&&(_.remove(p),p.geometry.dispose(),p.material.dispose());const f=m(c);f.name="phobosTrail",_.add(f);const S=m(u);S.name="deimosTrail",_.add(S)},[e,t]}catch(e){console.error(e)}}const ds="/marsisaplace",Vy={literature:[{id:2,body:"Mars",placeName:"Underhill",media:"The Mars Trilogy",creator:"Kim Stanley Robinson",fictionalYear:2026,realYear:1992,description:"Underhill was the landing site for the first hundred colonists in Kim Stanley Robinson’s Red Mars. Built 10m underground as a shield from the radiation piercing Mars’ sparse magnetosphere, the burrow featured a vaulted brick ceiling, bamboo flooring, and intricate staircases composed of a novel magnesium alloy extracted from the Martian regolith.",region:"Xanthe",photoFile:ds+"/modal/placeholder.png",lat:8.05,lon:-43.9,jewelColor:"red"},{id:3,body:"Mars",placeName:"Home of Valentine M. Smith",media:"Stranger in a Strange Land",creator:"Robert A. Heinlein",fictionalYear:"Late 20th Century",realYear:1961,description:"Smith's real areographical origin isn't described exactly at any point in the novel, but Elysium Mons seems fitting given Heinlein's vision of an idyllic Martian society.",region:"Elysium Mons",photoFile:ds+"/modal/placeholder.png",lat:24.5,lon:122.1,jewelColor:"blue"},{id:5,body:"Mars",placeName:"Handramit",media:"Out of the Silent Planet",creator:"C.S. Lewis",fictionalYear:"Unknown",realYear:1938,description:"",region:"Valles Marineris",photoFile:ds+"/modal/placeholder.png",lat:-8.75,lon:-16.8,jewelColor:"pink"},{id:6,body:"Mars",placeName:"TESTING",media:"TESTING",creator:"TESTING",fictionalYear:"TESTING",realYear:2e3,description:"TESTING",region:"TESTING",photoFile:ds+"/modal/placeholder.png",lat:0,lon:0,jewelColor:"pink"}],filmAndTV:[{id:1,body:"Mars",placeName:"The Hab",media:"The Martian",creator:"Andy Weir",fictionalYear:2035,realYear:2011,description:"A muscular botanist and ex-MIT mathematics prodigy loses religion in the dusty wastes of the red planet.",region:"Acidalia Planitia",photoFile:ds+"/modal/placeholder.png",lat:31.12,lon:28.5-90,jewelColor:"white"},{id:4,body:"Mars",placeName:"Bowie Base One",media:"Doctor Who",creator:"Russell T. Davies & Phil Ford",fictionalYear:"2059",realYear:2009,description:"",region:"Gusev Crater",photoFile:ds+"/modal/placeholder.png",lat:5.5,lon:176,jewelColor:"black"}],reality:[]},vh={placeData:Vy};class Gy extends bt{constructor(e){super(),this.data=e;const t=Math.tan(Math.PI/6),i=Math.cos(Math.PI/6),s=[2,1,2,1,3,0,3,2,0,2,4,1,1,4,3,3,4,2],r=[0,1,0,1,0,t,-1,0,t,0,0,-i,0,-1,0];this.jewelGeometry=new Fo(r,s,1.6,0),this.jewelMaterial=new hr({fog:!0,wireframe:!1,color:e.jewelColor,reflectivity:20}),this.jewelMesh=new bt(this.jewelGeometry,this.jewelMaterial),this.jewelActive=!1,this.jewelSize=0,this.jewelMesh.name="rotationMesh",this.jewelMesh.tick=o=>{}}}class xh{constructor(e,t,i,s){this.placeType=e,this.dataList=t,this.celestialBody=s,this.isActive=i,this.path="/src/World/assets/places/photos/"}createAll(){this.setActive(),this.assignPlaceData(),this.placeData.forEach(this.findPosition),this.placeData.forEach(this.createPins)}getType(){return this.placeType}getPinsData(){return this.placeData}setActive(e){this.isActive=e}assignPlaceData(){if(this.dataList.placeData[this.placeType])this.placeData=this.dataList.placeData[this.placeType];else throw new Error(`Type "${this.placeType}" not in placeData`)}findPosition(e){switch(e.body){case"Mars":var t=200,i=(90-e.lat)*Math.PI/180,s=(180+e.lon)*Math.PI/180;Object.defineProperties(e,{x:{value:t*Math.sin(i)*Math.cos(s),writable:!0},y:{value:t*Math.cos(i),writable:!0},z:{value:t*Math.sin(i)*Math.sin(s),writable:!0}})}}createPins(e){const t=new U(e.x,e.y,e.z),i=t.clone().normalize(),s=20,r=1,o=t.clone().add(i.multiplyScalar(s)),a=t.clone().add(i.multiplyScalar(r)),l=[];l.push(t),l.push(o);const c=new At().setFromPoints(l),u=new Ms({color:"#7FFFFF"}),h=new zl(c,u),d=Math.tan(Math.PI/6),m=Math.cos(Math.PI/6),_=[0,1,0,1,0,d,-1,0,d,0,0,-m,0,-1,0],x=[2,1,2,1,3,0,3,2,0,2,4,1,1,4,3,3,4,2],p=new Fo(_,x,2,0),f=new hr({wireframe:!0,color:"#7FFFFF"}),S=new bt(p,f);S.position.copy(a),S.lookAt(new U(0,0,0)),Object.defineProperty(S,"data",{value:e});const M=new Gy(e).jewelMesh;M.position.copy(a),M.lookAt(new U(0,0,0)),Object.defineProperty(e,"mesh",{value:h}),Object.defineProperty(e,"diamondMesh",{value:S}),Object.defineProperty(e,"jewelMesh",{value:M})}}function Wy(){const n=new py({antialias:!0,logarithmicDepthBuffer:!0,toneMapping:Pl});return n.shadowMap.enabled=!0,n.shadowMap.type=bd,n}const Mh=(n,e,t,i)=>{e.aspect=n.clientWidth/n.clientHeight,e.updateProjectionMatrix(),t.setSize(n.clientWidth,n.clientHeight),t.setPixelRatio(window.devicePixelRatio)};class Xy{constructor(e,t,i,s){Mh(e,t,i),window.addEventListener("resize",()=>{Mh(e,t,i)})}}const jy=new sf;class Yy{constructor(e,t,i,s){this.camera=e,this.scene=t,this.renderer=i,this.composer=s,this.updatables=[]}start(){this.renderer.setAnimationLoop(()=>{this.renderer.render(this.scene,this.camera),this.composer.render(),this.tick()})}stop(){this.renderer.render(null)}tick(){const e=jy.getDelta();for(const t of this.updatables)t.tick(e)}}const yh={type:"change"},Ua={type:"start"},Sh={type:"end"},Qr=new ur,Eh=new si,qy=Math.cos(70*o_.DEG2RAD);class $y extends Vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",le),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(yh),i.update(),r=s.NONE},this.update=function(){const v=new U,J=new ki().setFromUnitVectors(e.up,new U(0,1,0)),W=J.clone().invert(),ee=new U,ue=new ki,Ce=new U,ze=2*Math.PI;return function(ft=null){const Ke=i.object.position;v.copy(Ke).sub(i.target),v.applyQuaternion(J),a.setFromVector3(v),i.autoRotate&&r===s.NONE&&O(y(ft)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let pt=i.minAzimuthAngle,mt=i.maxAzimuthAngle;isFinite(pt)&&isFinite(mt)&&(pt<-Math.PI?pt+=ze:pt>Math.PI&&(pt-=ze),mt<-Math.PI?mt+=ze:mt>Math.PI&&(mt-=ze),pt<=mt?a.theta=Math.max(pt,Math.min(mt,a.theta)):a.theta=a.theta>(pt+mt)/2?Math.max(pt,a.theta):Math.min(mt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Gt=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=ye(a.radius);else{const Wt=a.radius;a.radius=ye(a.radius*c),Gt=Wt!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(W),Ke.copy(i.target).add(v),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let Wt=null;if(i.object.isPerspectiveCamera){const Gn=v.length();Wt=ye(Gn*c);const _i=Gn-Wt;i.object.position.addScaledVector(w,_i),i.object.updateMatrixWorld(),Gt=!!_i}else if(i.object.isOrthographicCamera){const Gn=new U(F.x,F.y,0);Gn.unproject(i.object);const _i=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Gt=_i!==i.object.zoom;const vi=new U(F.x,F.y,0);vi.unproject(i.object),i.object.position.sub(vi).add(Gn),i.object.updateMatrixWorld(),Wt=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Wt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Wt).add(i.object.position):(Qr.origin.copy(i.object.position),Qr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Qr.direction))<qy?e.lookAt(i.target):(Eh.setFromNormalAndCoplanarPoint(i.object.up,i.target),Qr.intersectPlane(Eh,i.target))))}else if(i.object.isOrthographicCamera){const Wt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Wt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Gt=!0)}return c=1,A=!1,Gt||ee.distanceToSquared(i.object.position)>o||8*(1-ue.dot(i.object.quaternion))>o||Ce.distanceToSquared(i.target)>o?(i.dispatchEvent(yh),ee.copy(i.object.position),ue.copy(i.object.quaternion),Ce.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Me),i.domElement.removeEventListener("pointerdown",he),i.domElement.removeEventListener("pointercancel",g),i.domElement.removeEventListener("wheel",j),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",g),i.domElement.getRootNode().removeEventListener("keydown",ce,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",le),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new fh,l=new fh;let c=1;const u=new U,h=new we,d=new we,m=new we,_=new we,x=new we,p=new we,f=new we,S=new we,M=new we,w=new U,F=new we;let A=!1;const R=[],N={};let E=!1;function y(v){return v!==null?2*Math.PI/60*i.autoRotateSpeed*v:2*Math.PI/60/60*i.autoRotateSpeed}function L(v){const J=Math.abs(v*.01);return Math.pow(.95,i.zoomSpeed*J)}function O(v){l.theta-=v}function G(v){l.phi-=v}const ie=function(){const v=new U;return function(W,ee){v.setFromMatrixColumn(ee,0),v.multiplyScalar(-W),u.add(v)}}(),re=function(){const v=new U;return function(W,ee){i.screenSpacePanning===!0?v.setFromMatrixColumn(ee,1):(v.setFromMatrixColumn(ee,0),v.crossVectors(i.object.up,v)),v.multiplyScalar(W),u.add(v)}}(),Q=function(){const v=new U;return function(W,ee){const ue=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;v.copy(Ce).sub(i.target);let ze=v.length();ze*=Math.tan(i.object.fov/2*Math.PI/180),ie(2*W*ze/ue.clientHeight,i.object.matrix),re(2*ee*ze/ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ie(W*(i.object.right-i.object.left)/i.object.zoom/ue.clientWidth,i.object.matrix),re(ee*(i.object.top-i.object.bottom)/i.object.zoom/ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ge(v,J){if(!i.zoomToCursor)return;A=!0;const W=i.domElement.getBoundingClientRect(),ee=v-W.left,ue=J-W.top,Ce=W.width,ze=W.height;F.x=ee/Ce*2-1,F.y=-(ue/ze)*2+1,w.set(F.x,F.y,1).unproject(i.object).sub(i.object.position).normalize()}function ye(v){return Math.max(i.minDistance,Math.min(i.maxDistance,v))}function Se(v){h.set(v.clientX,v.clientY)}function De(v){ge(v.clientX,v.clientX),f.set(v.clientX,v.clientY)}function Ye(v){_.set(v.clientX,v.clientY)}function se(v){d.set(v.clientX,v.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;O(2*Math.PI*m.x/J.clientHeight),G(2*Math.PI*m.y/J.clientHeight),h.copy(d),i.update()}function de(v){S.set(v.clientX,v.clientY),M.subVectors(S,f),M.y>0?ne(L(M.y)):M.y<0&&Y(L(M.y)),f.copy(S),i.update()}function ve(v){x.set(v.clientX,v.clientY),p.subVectors(x,_).multiplyScalar(i.panSpeed),Q(p.x,p.y),_.copy(x),i.update()}function pe(v){ge(v.clientX,v.clientY),v.deltaY<0?Y(L(v.deltaY)):v.deltaY>0&&ne(L(v.deltaY)),i.update()}function He(v){let J=!1;switch(v.code){case i.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(-i.keyPanSpeed,0),J=!0;break}J&&(v.preventDefault(),i.update())}function Ne(v){if(R.length===1)h.set(v.pageX,v.pageY);else{const J=Ae(v),W=.5*(v.pageX+J.x),ee=.5*(v.pageY+J.y);h.set(W,ee)}}function ke(v){if(R.length===1)_.set(v.pageX,v.pageY);else{const J=Ae(v),W=.5*(v.pageX+J.x),ee=.5*(v.pageY+J.y);_.set(W,ee)}}function I(v){const J=Ae(v),W=v.pageX-J.x,ee=v.pageY-J.y,ue=Math.sqrt(W*W+ee*ee);f.set(0,ue)}function We(v){i.enableZoom&&I(v),i.enablePan&&ke(v)}function C(v){i.enableZoom&&I(v),i.enableRotate&&Ne(v)}function D(v){if(R.length==1)d.set(v.pageX,v.pageY);else{const W=Ae(v),ee=.5*(v.pageX+W.x),ue=.5*(v.pageY+W.y);d.set(ee,ue)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;O(2*Math.PI*m.x/J.clientHeight),G(2*Math.PI*m.y/J.clientHeight),h.copy(d)}function z(v){if(R.length===1)x.set(v.pageX,v.pageY);else{const J=Ae(v),W=.5*(v.pageX+J.x),ee=.5*(v.pageY+J.y);x.set(W,ee)}p.subVectors(x,_).multiplyScalar(i.panSpeed),Q(p.x,p.y),_.copy(x)}function Z(v){const J=Ae(v),W=v.pageX-J.x,ee=v.pageY-J.y,ue=Math.sqrt(W*W+ee*ee);S.set(0,ue),M.set(0,Math.pow(S.y/f.y,i.zoomSpeed)),ne(M.y),f.copy(S);const Ce=(v.pageX+J.x)*.5,ze=(v.pageY+J.y)*.5;ge(Ce,ze)}function K(v){i.enableZoom&&Z(v),i.enablePan&&z(v)}function te(v){i.enableZoom&&Z(v),i.enableRotate&&D(v)}function he(v){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(v.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",g)),!me(v)&&(Fe(v),v.pointerType==="touch"?xe(v):P(v)))}function b(v){i.enabled!==!1&&(v.pointerType==="touch"?ae(v):k(v))}function g(v){switch(Pe(v),R.length){case 0:i.domElement.releasePointerCapture(v.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",g),i.dispatchEvent(Sh),r=s.NONE;break;case 1:const J=R[0],W=N[J];xe({pointerId:J,pageX:W.x,pageY:W.y});break}}function P(v){let J;switch(v.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Gi.DOLLY:if(i.enableZoom===!1)return;De(v),r=s.DOLLY;break;case Gi.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enablePan===!1)return;Ye(v),r=s.PAN}else{if(i.enableRotate===!1)return;Se(v),r=s.ROTATE}break;case Gi.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enableRotate===!1)return;Se(v),r=s.ROTATE}else{if(i.enablePan===!1)return;Ye(v),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Ua)}function k(v){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;se(v);break;case s.DOLLY:if(i.enableZoom===!1)return;de(v);break;case s.PAN:if(i.enablePan===!1)return;ve(v);break}}function j(v){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(v.preventDefault(),i.dispatchEvent(Ua),pe(X(v)),i.dispatchEvent(Sh))}function X(v){const J=v.deltaMode,W={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(J){case 1:W.deltaY*=16;break;case 2:W.deltaY*=100;break}return v.ctrlKey&&!E&&(W.deltaY*=10),W}function ce(v){v.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(v){v.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function le(v){i.enabled===!1||i.enablePan===!1||He(v)}function xe(v){switch(Oe(v),R.length){case 1:switch(i.touches.ONE){case Wi.ROTATE:if(i.enableRotate===!1)return;Ne(v),r=s.TOUCH_ROTATE;break;case Wi.PAN:if(i.enablePan===!1)return;ke(v),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Wi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;We(v),r=s.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;C(v),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Ua)}function ae(v){switch(Oe(v),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;D(v),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;z(v),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;K(v),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(v),i.update();break;default:r=s.NONE}}function Me(v){i.enabled!==!1&&v.preventDefault()}function Fe(v){R.push(v.pointerId)}function Pe(v){delete N[v.pointerId];for(let J=0;J<R.length;J++)if(R[J]==v.pointerId){R.splice(J,1);return}}function me(v){for(let J=0;J<R.length;J++)if(R[J]==v.pointerId)return!0;return!1}function Oe(v){let J=N[v.pointerId];J===void 0&&(J=new we,N[v.pointerId]=J),J.set(v.pageX,v.pageY)}function Ae(v){const J=v.pointerId===R[0]?R[1]:R[0];return N[J]}i.domElement.addEventListener("contextmenu",Me),i.domElement.addEventListener("pointerdown",he),i.domElement.addEventListener("pointercancel",g),i.domElement.addEventListener("wheel",j,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}function Ky(n,e){const t=new $y(n,e);return t.enableDamping=!0,t.minDistance=430,t.maxDistance=2600,t}const of={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class dr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Zy=new Ol(-1,1,1,-1,0,1);class Qy extends At{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}}const Jy=new Qy;class kl{constructor(e){this._mesh=new bt(Jy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Zy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class eS extends dr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Uo.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new kl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bh extends dr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class tS extends dr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new we);this._width=i.width,this._height=i.height,t=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rs}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eS(of),this.copyPass.material.blending=zn,this.clock=new sf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bh!==void 0&&(o instanceof bh?i=!0:o instanceof tS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const iS={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class sS extends dr{constructor(){super();const e=iS;this.uniforms=Uo.clone(e.uniforms),this.material=new _y({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new kl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Td?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ad?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class rS extends dr{constructor(e,t,i,s){super(),this.scene=e,this.camera=t,this.sampleLevel=4,this.unbiased=!0,this.clearColor=i!==void 0?i:0,this.clearAlpha=s!==void 0?s:0,this._oldClearColor=new je;const r=of;this.copyUniforms=Uo.clone(r.uniforms),this.copyMaterial=new ln({uniforms:this.copyUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:$a}),this.fsQuad=new kl(this.copyMaterial)}dispose(){this.sampleRenderTarget&&(this.sampleRenderTarget.dispose(),this.sampleRenderTarget=null),this.copyMaterial.dispose(),this.fsQuad.dispose()}setSize(e,t){this.sampleRenderTarget&&this.sampleRenderTarget.setSize(e,t)}render(e,t,i){this.sampleRenderTarget||(this.sampleRenderTarget=new kn(i.width,i.height,{type:Rs}),this.sampleRenderTarget.texture.name="SSAARenderPass.sample");const s=oS[Math.max(0,Math.min(this.sampleLevel,5))],r=e.autoClear;e.autoClear=!1,e.getClearColor(this._oldClearColor);const o=e.getClearAlpha(),a=1/s.length,l=1/32;this.copyUniforms.tDiffuse.value=this.sampleRenderTarget.texture;const c={fullWidth:i.width,fullHeight:i.height,offsetX:0,offsetY:0,width:i.width,height:i.height},u=Object.assign({},this.camera.view);u.enabled&&Object.assign(c,u);for(let h=0;h<s.length;h++){const d=s[h];this.camera.setViewOffset&&this.camera.setViewOffset(c.fullWidth,c.fullHeight,c.offsetX+d[0]*.0625,c.offsetY+d[1]*.0625,c.width,c.height);let m=a;if(this.unbiased){const _=-.5+(h+.5)/s.length;m+=l*_}this.copyUniforms.opacity.value=m,e.setClearColor(this.clearColor,this.clearAlpha),e.setRenderTarget(this.sampleRenderTarget),e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(this.renderToScreen?null:t),h===0&&(e.setClearColor(0,0),e.clear()),this.fsQuad.render(e)}this.camera.setViewOffset&&u.enabled?this.camera.setViewOffset(u.fullWidth,u.fullHeight,u.offsetX,u.offsetY,u.width,u.height):this.camera.clearViewOffset&&this.camera.clearViewOffset(),e.autoClear=r,e.setClearColor(this._oldClearColor,o)}}const oS=[[[0,0]],[[4,4],[-4,-4]],[[-2,-6],[6,-2],[-6,2],[2,6]],[[1,-3],[-1,3],[5,1],[-3,-5],[-5,5],[-7,-1],[3,7],[7,-7]],[[1,1],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]],[[-4,-7],[-7,-5],[-3,-5],[-5,-4],[-1,-4],[-2,-2],[-6,-1],[-4,0],[-7,1],[-1,2],[-6,3],[-3,3],[-7,6],[-3,6],[-5,7],[-1,7],[5,-7],[1,-6],[6,-5],[4,-4],[2,-3],[7,-2],[1,-1],[4,-1],[2,1],[6,2],[0,4],[4,4],[2,5],[7,5],[5,6],[3,7]]];let fs;class aS{constructor(e){this.events={},this.showOverlay=!1,this.camera=Ay(e),this.focusCamera=Cy(e),this.placeholderImg=new Mo().load("/marsisaplace/modal/placeholder.png"),this.background=Dy(),this.raycaster=new wy,this.mouse=new we,this.hoveredObject=null,this.mars=Ly(),this.overlay=Py(),this.mars.loadingComplete=!1,this.renderer=Wy(),e.append(this.renderer.domElement),this.background.add(this.mars,this.overlay);const{mainLight:t,softenerLightLower:i,ambientLight:s,overlayLight:r}=Iy();this.mainLight=t,this.background.add(t,i,s,r),Ky(this.camera,e),new Xy(e,this.camera,this.renderer,this.composer),this.composer=new nS(this.renderer),this.composer.setPixelRatio(1),this.ssaaPass=new rS(this.background,this.camera),this.outputPass=new sS,fs=new Yy(this.camera,this.background,this.renderer,this.composer),fs.updatables.push(this.mars,this.overlay),fs.updatables.push({tick:()=>this.focusCamera.tick(this.background)}),this.createAllMarkers(),console.log("mars name",this.mars.children),this.loadAddMoons(),this.loadingText=null,e.addEventListener("mousemove",this.onMouseMove.bind(this),!1),e.addEventListener("click",this.onClick.bind(this),!1)}async loadAddMoons(){try{const[e,t]=await ky();this.phobos=e,this.background.add(this.phobos),this.background.add(t),fs.updatables.push({tick:()=>e.tick(this.background)}),this.mars.loadingComplete=!0,this.emit("loadingDone",{message:"Loading done."}),console.log("Moons loaded")}catch(e){console.error("Error loading moons:",e)}}start(){fs.start()}stop(){fs.stop()}on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}off(e,t){this.events[e]&&(this.events[e]=this.events[e].filter(i=>i!==t))}emit(e,t){this.events[e]&&this.events[e].forEach(i=>i(t))}handleLoadingState(){this.emit("loading",{message:"Loading assets..."})}handleOverlay(){this.showOverlay==!0?(this.overlay.scale.set(0,0,0),this.showOverlay=!1):this.showOverlay==!1&&(this.overlay.scale.set(1,1,1),this.showOverlay=!0)}createAllMarkers(){var e=new xh("literature",vh,!0,"Mars");e.createAll();let t=e.getPinsData();var i=new xh("filmAndTV",vh,!0,"Mars");i.createAll();let s=i.getPinsData();for(let r=0;r<t.length;r++)this.mars.add(t[r].mesh),this.mars.add(t[r].diamondMesh),this.mars.add(t[r].jewelMesh),this.createLabel(t[r].diamondMesh);for(let r=0;r<s.length;r++)this.mars.add(s[r].mesh),this.mars.add(s[r].diamondMesh),this.mars.add(s[r].jewelMesh),this.createLabel(s[r].diamondMesh);this.mars.geometry.computeBoundingBox()}createLabel(e){const t=document.createElement("canvas"),i=t.getContext("2d");t.width=300,t.height=50,i.fillStyle="rgba(255, 255, 255, 0)",i.fillRect(0,0,t.width,t.height),i.fillStyle="#FFFFFF",i.font="bold 18px Andale Mono",i.textAlign="center",i.textBaseline="middle",i.fillText(e.data.placeName,t.width/2,25);const s=new oh(t),r=new As(50,10),o=new hr({map:s,transparent:!0,side:nn});let a=new bt(r,o);a.position.y=a.position.y+5;var l=new U;console.log("tst",e.getWorldPosition(l)),a.isLabel=!0,e.add(a),a.rotation.y=Math.PI}createModals(e){this.modal&&(this.background.remove(this.modal),this.modal.geometry.dispose(),this.modal.material.map.dispose(),this.modal.material.dispose(),this.background.remove(this.imgModal),this.imgModal.geometry.dispose(),this.imgModal.material.map.dispose(),this.imgModal.material.dispose());const t=document.createElement("canvas"),i=t.getContext("2d");t.width=300,t.height=500,i.fillStyle="rgba(127, 255, 255, 0.1)",i.fillRect(0,0,t.width,t.height),i.strokeStyle="#00FFFF",i.lineWidth=2,i.strokeRect(0,0,t.width,t.height),i.fillStyle="#FFFFFF",i.font="bold 20px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(e.placeName,t.width/2,25),i.font="bold 16px Arial",i.textAlign="left",i.textBaseline="top",i.shadowColor="rgba(0, 0, 0, 0)";const s=[`Media: ${e.media}`,`Creator: ${e.creator}`,`Year Set: ${e.fictionalYear}`,`Year Published: ${e.realYear}`,`Region: ${e.region}`],r=e.description;s.forEach((p,f)=>{i.fillText(p,20,60+f*25)}),i.fillStyle="#CCCCCC",i.font="italic 16px Univers",i.textAlign="left",i.textBaseline="top";const o=t.width-40,a=20;let l=20,c=60+s.length*25+10;const u=r.split(" ");let h="";for(let p=0;p<u.length;p++){const f=h+u[p]+" ";i.measureText(f).width>o&&p>0?(i.fillText(h,l,c),h=u[p]+" ",c+=a):h=f}i.fillText(h,l,c),new As(45,85);const d=new oh(t),m=new sl({map:d,transparent:!0,side:nn});var _=new Mo().load(e.photoFile),x=new sl({map:_,color:16777215});this.imgModal=new Qu(x),this.imgModal.isModal=!0,this.modal=new Qu(m),this.modal.scale.set(50,100,1),this.modal.isModal=!0,this.background.add(this.modal),this.background.add(this.imgModal)}onMouseMove(e){e.preventDefault();const t=e.target.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const i=this.raycaster.intersectObjects(this.background.children,!0);if(i.length>0){const s=i[0].object;if(s.isModal||s.isLabel||s.isOverlay)return;this.hoveredObject!==s&&(this.hoveredObject&&this.hoveredObject.material&&this.hoveredObject.material.color&&!this.hoveredObject.isLine&&(this.hoveredObject.material.color.set("gold"),this.hoveredObject.material.wireframe=!0),this.hoveredObject=s,s.material&&s.material.color&&!this.hoveredObject.isLine&&(this.hoveredObject.originalColor=s.material.color.getHex(),this.hoveredObject.material.color.set("gold"),this.hoveredObject.material.wireframe=!1))}else this.hoveredObject&&(this.hoveredObject.material&&this.hoveredObject.material.color&&!this.hoveredObject.isLine&&(this.hoveredObject.material.color.set(this.hoveredObject.originalColor),this.hoveredObject.material.wireframe=!0),this.hoveredObject=null)}onClick(e){if(e.preventDefault(),this.hoveredObject){this.hoveredObject.material&&this.hoveredObject.material.color;var t=new U;console.log(this.hoveredObject.getWorldPosition(t));var i=this.hoveredObject;this.createModals(i.data),this.imgModal.scale.set(50,50,1),this.imgModal.position.copy(t).multiplyScalar(1.41),this.modal.position.copy(t).multiplyScalar(1.41),this.modal.position.y-=40,this.imgModal.position.y+=45,this.camera.position.copy(t).multiplyScalar(2.4),this.camera.lookAt(0,0,0),this.hoveredObject=null}}}const lS=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},cS={data(){return{marsLoaded:!1}},mounted(){const n=this.$el;this.areograph=new aS(n),console.log(this.areograph),this.areograph.start(),this.areograph.on("loadingDone",this.handleLoadingMessage)},methods:{handleLoadingMessage(){this.marsLoaded=!0,console.log(this.marsLoaded)},handleOverlay(){this.areograph.handleOverlay()}}},uS=n=>(lp("data-v-681cff7e"),n=n(),cp(),n),hS={id:"scene-container"},dS={key:0,id:"loading-window"},fS=uS(()=>H("span",null,[H("p",{id:"loading-text"},"Loading assets..."),H("div",{class:"loader"},[H("div",{class:"loaderBar"})])],-1)),pS=[fS],mS={id:"overlay-select-wrapper"};function gS(n,e,t,i,s,r){return wt(),Pt("div",hS,[s.marsLoaded?qt("",!0):(wt(),Pt("div",dS,pS)),H("div",mS,[H("button",{onClick:e[0]||(e[0]=o=>r.handleOverlay())},"Toggle region overlay")])])}const _S=lS(cS,[["render",gS],["__scopeId","data-v-681cff7e"]]),vS=H("header",null,[H("link",{href:"https://fonts.cdnfonts.com/css/overpass",rel:"stylesheet"}),H("link",{href:"https://fonts.googleapis.com/css2?family=Nunito",rel:"stylesheet",type:"text/css"}),H("link",{href:"https://fonts.cdnfonts.com/css/univers",rel:"stylesheet"})],-1),xS={id:"body"},MS={key:0,id:"show-top-bar-hidden"},yS=H("g",{id:"SVGRepo_bgCarrier","stroke-width":"0",transform:"translate(130.35,130.35), scale(0.21)"},[H("path",{transform:"translate(-168.3, -168.3), scale(41.6625)",fill:"#ff0004",d:"M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z",strokewidth:"0"})],-1),SS=H("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round",stroke:"#CCCCCC","stroke-width":"0.66"},null,-1),ES=H("g",{id:"SVGRepo_iconCarrier"},[H("path",{id:"XMLID_224_",d:"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"})],-1),bS=[yS,SS,ES],TS={key:0,id:"top-bar"},wS=H("div",{id:"logo"},[H("div",{id:"logo-mars-bg"},[H("span",{id:"logo-former"},"MARS")]),H("span",{id:"logo-latter"},[ot("is a "),H("u",null,"place")])],-1),AS=H("div",{id:"bar-buffer"},null,-1),CS={id:"top-bar-items"},RS=H("span",null,"about",-1),PS=[RS],LS=H("span",null,"filters",-1),DS=[LS],IS=H("span",null,"suggest pin",-1),US=[IS],NS=H("svg",{cursor:"pointer",fill:"rgba(255, 255, 255, 1)",height:"100px",width:"100px",version:"1.1",id:"Layer_2",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"-168.3 -168.3 666.60 666.60","xml:space":"preserve",stroke:"#ffffff",transform:"rotate(0)matrix(1, 0, 0, 1, 0, 0)","stroke-width":"14.52"},[H("g",{id:"SVGRepo_bgCarrier","stroke-width":"0",transform:"translate(130.35,130.35), scale(0.21)"},[H("path",{transform:"translate(-168.3, -168.3), scale(41.6625)",fill:"#ff0004",d:"M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z",strokewidth:"0"})]),H("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round",stroke:"#CCCCCC","stroke-width":"0.66"}),H("g",{id:"SVGRepo_iconCarrier"},[H("path",{id:"XMLID_224_",d:"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"})])],-1),FS=H("span",null,"hide menu",-1),OS=[NS,FS],BS={key:0,id:"guide-container"},zS={id:"guide-container-items"},HS=H("span",null,"close",-1),kS=[HS],VS=H("span",null,"how it works",-1),GS=[VS],WS=H("span",null,"what is this?",-1),XS=[WS],jS=H("span",null,"FAQ",-1),YS=[jS],qS={key:0,class:"container-under"},$S={key:0,class:"guide-choice"},KS=H("span",{class:"guide-choice-text"},[H("p",null,"Concept")],-1),ZS=H("div",{class:"toggle-content"},[H("span",{class:"what-text"},[H("br"),H("p",null,[ot("Mars is a place. It can be thought of as a cousin to Earth - a terrestrial planet, under the same sun, that's about the same age. The more we know about our cousin, the more we might learn about Earth, the origins of our solar system, and even the prerequisites and potentiates for life. It's a neighbourhood mystery - and yet our understanding has only recently begun to reflect Mars as it really is. "),H("br"),H("br"),ot(" In the past 70 years, countless missions, projects, and investigations have clarified our mind's eye image of Mars as a sparse, cold, and inhospitable place. We're extremely lucky to see this reality. We get to view another world from the level of an observer on the surface. Our sense of Mars is more concrete than anyone before us. "),H("br"),H("br"),ot(" But each discovery also moves us away from fantastical concepts that we previously projected onto the planet - and we have no history for it but these ideas. Mars has no legends, no tombs, monuments, wars, triumphs or messiahs. It's a blank slate without us. "),H("br"),H("br"),H("i",null,"Mars is a Place"),ot(" tries to construct and root previous stories and ideas of and on Mars by mapping them to its surface. Some ideas are old and some are new, but each can reveal at least part of a long-standing tradition.")])])],-1),QS=H("span",{class:"guide-choice-text"},[H("p",null,"Art")],-1),JS=H("div",{class:"toggle-content"},[H("span",{class:"what-text"},[H("br"),ot(" TBD ")])],-1),eE=[KS,ZS,QS,JS],tE={key:1,class:"container-under-how"},nE=H("div",{class:"how-choice"},[H("span",{class:"how-choice-text"}," Map "),H("div",{class:"toggle-content-how"},[H("span",{class:"how-text"},[H("p",null,"Slide the camera plane vertically or horizontally by holding down right click and dragging with left"),H("p",null,"Use your mousewheel or trackpad to scroll in and out (as you would on Google Earth)")])])],-1),iE=H("div",{class:"how-video"},[H("video",{class:"toggle-content-how-video",loop:"",autoplay:""},[H("source",{src:Xm,type:"video/webm"})])],-1),sE=H("div",{class:"how-choice"},[H("span",{class:"how-choice-text"}," Pins "),H("div",{class:"toggle-content-how"},[H("span",{class:"how-text"},[H("p",null,"Click on a pin to see information for an entry - these correspond to individual locations in fiction, film, TV, etc."),H("p",null,"To remove the entry popup, click outside of it or move your camera")])])],-1),rE=H("div",{class:"how-video"},[H("video",{class:"toggle-content-how-video",loop:"",autoplay:""},[H("source",{src:jm,type:"video/webm"})])],-1),oE=H("div",{class:"how-choice"},[H("span",{class:"how-choice-text"}," Filtering "),H("div",{class:"toggle-content-how"},[H("span",{class:"how-text"},[H("p",null,"The left-hand 'filters' tab contains options for sorting the entries by date, medium, and scope"),H("p",null,"(TBC)")])])],-1),aE=H("div",{class:"how-choice"},[H("div",{class:"toggle-content-how-video"})],-1),lE=[nE,iE,sE,rE,oE,aE],cE={key:2,class:"container-under-FAQ"},uE=H("div",{class:"FAQ-choice"},[H("span",{class:"FAQ-choice-text"},[H("p",null,"Mars")]),H("div",{class:"toggle-content-FAQ"},[H("span",{class:"FAQ-subheading"},[H("p",null,"Is the scene to scale?")]),H("span",{class:"FAQ-text"},[ot(" Deimos and Phobos aren't to scale, but Mars' surface is - some unmapped gaps in the terrain were filled with generated textures."),H("br")]),H("span",{class:"FAQ-subheading"},[H("p",null,"How accurate is Mars' surface?")]),H("span",{class:"FAQ-text"}," Mars is depicted in the middle of its northern summer. The planet has a polar tilt of 25°, similar to Earth's 23.5°, which is part of the reason it experiences seasons as well as polar nights/summers. ")])],-1),hE=H("div",{class:"FAQ-choice"},[H("span",{class:"FAQ-choice-text"},[H("p",null,"Attribution")]),H("div",{class:"toggle-content-FAQ"},[H("span",{class:"FAQ-subheading"},[H("p",null,"Where is the background from?")]),H("span",{class:"FAQ-text"},[ot(" The starfield is a cubemap built from one of NASA's "),H("a",{class:"link-highlight",href:"https://svs.gsfc.nasa.gov/4851/"},"Deep Star Maps"),ot(", itself assembled from a few different star catalogs. ")]),H("span",{class:"FAQ-subheading"},[H("p",null,"Mars?")]),H("span",{class:"FAQ-text"},[ot(" Mars' texture was created from NASA surface imagery (and released for free!) by the team at "),H("a",{class:"link-highlight",href:"https://www.solarsystemscope.com/textures/"},"Solar System Scope"),ot(". I turned this into another cubemap and projected it onto a quadrilateralized spherical cube (quad sphere). I also generated my displacement, ambient occlusion, and normal maps from it. ")]),H("span",{class:"FAQ-subheading"},[H("p",null,"Phobos & Deimos?")]),H("span",{class:"FAQ-text"},[ot(" The Deimos and Phobos models were proposed and created by Ernst, Daly, and Gaskell et al. in their extremely helpful "),H("a",{class:"link-highlight",href:"https://earth-planets-space.springeropen.com/articles/10.1186/s40623-023-01814-7"},"2023 paper"),ot(" - you can download the models directly from their Small Body Mapping Tool/SBMT site "),H("a",{class:"link-highlight",href:"https://sbmt.jhuapl.edu/Object-Index.php"},"here"),ot(" (.OBJ with 4 spatial resolution options). ")])])],-1),dE=H("div",{class:"FAQ-choice"},[H("span",{class:"FAQ-choice-text"},[H("p",null,"Developer")]),H("div",{class:"toggle-content-FAQ"},[H("span",{class:"FAQ-subheading"},[H("p",null,"Tech stack?")]),H("span",{class:"FAQ-text"},[ot(" Three.js for rendering and animating the scene and Vue 3 for the overlay inc. SPA functionality and general reactivity. Pin data are stored in rudimentary arrays of objects for now; this will change to SQLite in future."),H("br")]),H("span",{class:"FAQ-subheading"},[H("p",null,"I found a bug - what can I do?")]),H("span",{class:"FAQ-text"}," This is a WIP, so feel free to create a new issue or pull request on the repo. You can also contact me at xxx with what happened. ")])],-1),fE=[uE,hE,dE],pE={key:0,id:"guide-container"},mE=H("div",{class:"container-under"},[H("span",null,"TBD ")],-1),gE=[mE],_E={key:0,id:"suggest-container"},vE={id:"suggest-container-items"},xE=H("span",null,"close",-1),ME=[xE],yE={id:"container-under-suggest"},SE={id:"suggest-form",action:"",method:"POST"},EE={key:0,id:"email-disclaimer"},bE=H("span",null,"I'll only email you if I have question about your idea for a pin. I do not retain addresses and will never spam you.",-1),TE=[bE],wE={class:"container-input-smaller"},AE=H("label",{class:"suggest-label"},"Submissions disabled for now.",-1),CE=H("br",null,null,-1),RE=H("br",null,null,-1),PE={class:"suggest-label"},LE={class:"suggest-hint"},DE=H("input",{disabled:"",class:"suggest-input-smaller",type:"email",name:"email"},null,-1),IE=H("div",{class:"container-input-smaller"},[H("label",{class:"suggest-label"},[ot(" Submission Name "),H("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),UE=H("div",{class:"container-input-smaller"},[H("label",{class:"suggest-label"},[ot(" Author "),H("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),NE=H("div",{class:"container-input-smaller"},[H("label",{class:"suggest-label"},[ot(" Year "),H("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),FE=H("div",{class:"container-input-smaller"},[H("label",{class:"suggest-label"},[ot(" Fictional Year "),H("p",{class:"suggest-hint"},"optional, provide if this applies"),H("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),OE=H("div",{class:"container-input-smaller"},[H("label",{class:"suggest-label"},[ot(" Lat/Lon "),H("p",{class:"suggest-hint"},"optional, helpful if you have them"),H("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),BE=H("div",{class:"container-input-larger"},[H("label",{class:"suggest-label"},[ot(" Description "),H("textarea",{disabled:"",class:"suggest-input-larger",name:"message"})])],-1),zE=H("button",{disabled:"",id:"suggest-input-button",type:"submit"},"Send",-1),HE={key:0,id:"about-container"},kE=H("div",{class:"container-under"},[H("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto! ")],-1),VE=[kE],GE={data(){return{navBar:!0,guide:!1,about:!1,suggest:!1,tabShown:null,guideHow:!0,guideWhat:!1,guideFAQ:!1,isLoading:!0,loadingHistory:[],showEmailDisclaimer:!1}},methods:{handleLoadingBar(n){},handleNavBar(n){switch(n){case"show":this.navBar=!0;break;case"hide":this.navBar=!1;break}},handleModals(n){switch(n){case"guide":this.about=!1,this.suggest=!1,this.guide=!0,document.documentElement.style.setProperty("--guide-background-color","rgba(255, 0, 0, 0.7"),document.documentElement.style.setProperty("--guide-font-weight",100),document.documentElement.style.setProperty("--guide-font-size","17px"),document.documentElement.style.setProperty("--about-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--about-font-weight",400),document.documentElement.style.setProperty("--about-font-size","18px"),document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--suggest-font-weight",400),document.documentElement.style.setProperty("--suggest-font-size","18px");break;case"about":this.guide=!1,this.suggest=!1,this.about=!0,document.documentElement.style.setProperty("--about-background-color","rgba(255, 0, 0, 0.7"),document.documentElement.style.setProperty("--about-font-weight",100),document.documentElement.style.setProperty("--about-font-size","17px"),document.documentElement.style.setProperty("--guide-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--guide-font-weight",400),document.documentElement.style.setProperty("--guide-font-size","18px"),document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--suggest-font-weight",400),document.documentElement.style.setProperty("--suggest-font-size","18px");break;case"suggest":this.guide=!1,this.about=!1,this.suggest=!0,document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 0, 0, 0.7"),document.documentElement.style.setProperty("--suggest-font-weight",100),document.documentElement.style.setProperty("--suggest-font-size","17px"),document.documentElement.style.setProperty("--guide-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--guide-font-weight",400),document.documentElement.style.setProperty("--guide-font-size","18px"),document.documentElement.style.setProperty("--about-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--about-font-weight",400),document.documentElement.style.setProperty("--about-font-size","18px");break;default:this.guide=!1,this.about=!1,this.suggest=!1,document.documentElement.style.setProperty("--guide-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--guide-font-weight",400),document.documentElement.style.setProperty("--guide-font-size","18px"),document.documentElement.style.setProperty("--about-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--about-font-weight",400),document.documentElement.style.setProperty("--about-font-size","18px"),document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--suggest-font-weight",400),document.documentElement.style.setProperty("--suggest-font-size","18px");break}},handleGuideTabs(n){switch(n){case"what":this.guideHow=!1,this.guideFAQ=!1,this.guideWhat=!0,document.documentElement.style.setProperty("--guideWhat-background-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideWhat-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideWhat-font-weight",100),document.documentElement.style.setProperty("--guideWhat-font-size","32px"),document.documentElement.style.setProperty("--guideWhat-shadow","1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"),document.documentElement.style.setProperty("--guideHow-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideHow-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideHow-font-weight",200),document.documentElement.style.setProperty("--guideHow-font-size","34px"),document.documentElement.style.setProperty("--guideHow-shadow","none"),document.documentElement.style.setProperty("--guideFAQ-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideFAQ-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideFAQ-font-weight",200),document.documentElement.style.setProperty("--guideFAQ-font-size","34px"),document.documentElement.style.setProperty("--guideFAQ-shadow","none");break;case"how":this.guideWhat=!1,this.guideFAQ=!1,this.guideHow=!0,document.documentElement.style.setProperty("--guideHow-background-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideHow-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideHow-font-weight",100),document.documentElement.style.setProperty("--guideHow-font-size","32px"),document.documentElement.style.setProperty("--guideHow-shadow","1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"),document.documentElement.style.setProperty("--guideWhat-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideWhat-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideWhat-font-weight",200),document.documentElement.style.setProperty("--guideWhat-font-size","34px"),document.documentElement.style.setProperty("--guideWhat-shadow","none"),document.documentElement.style.setProperty("--guideFAQ-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideFAQ-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideFAQ-font-weight",200),document.documentElement.style.setProperty("--guideFAQ-font-size","34px"),document.documentElement.style.setProperty("--guideFAQ-shadow","none");break;case"questions":this.guideWhat=!1,this.guideHow=!1,this.guideFAQ=!0,document.documentElement.style.setProperty("--guideFAQ-background-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideFAQ-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideFAQ-font-weight",100),document.documentElement.style.setProperty("--guideFAQ-font-size","32px"),document.documentElement.style.setProperty("--guideFAQ-shadow","1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"),document.documentElement.style.setProperty("--guideWhat-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideWhat-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideWhat-font-weight",200),document.documentElement.style.setProperty("--guideWhat-font-size","34px"),document.documentElement.style.setProperty("--guideWhat-shadow","none"),document.documentElement.style.setProperty("--guideHow-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideHow-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideHow-font-weight",200),document.documentElement.style.setProperty("--guideHow-font-size","34px"),document.documentElement.style.setProperty("--guideHow-shadow","none");break}}}},WE=Object.assign(GE,{__name:"App",setup(n){return(e,t)=>(wt(),Pt(pn,null,[vS,H("div",xS,[dt(Nn,{duration:550,name:"nested"},{default:ei(()=>[e.navBar?qt("",!0):(wt(),Pt("div",MS,[(wt(),Pt("svg",{cursor:"pointer",onClick:t[0]||(t[0]=i=>e.handleNavBar("show")),fill:"rgba(255, 255, 255, 0.9)",height:"100px",width:"100px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"-168.3 -168.3 666.60 666.60","xml:space":"preserve",stroke:"#ffffff",transform:"rotate(180)matrix(1, 0, 0, 1, 0, 0)","stroke-width":"14.52"},bS))]))]),_:1}),dt(Nn,{duration:550,name:"nested"},{default:ei(()=>[e.navBar?(wt(),Pt("div",TS,[wS,AS,H("div",CS,[H("div",{onClick:t[1]||(t[1]=i=>e.handleModals("guide")),id:"bar-guide"},PS),H("div",{onClick:t[2]||(t[2]=i=>e.handleModals("about")),id:"bar-about"},DS),H("div",{onClick:t[3]||(t[3]=i=>e.handleModals("suggest")),id:"bar-suggest"},US),e.navBar?(wt(),Pt("div",{key:0,id:"show-top",onClick:t[4]||(t[4]=i=>{e.handleNavBar("hide"),e.handleModals()})},OS)):qt("",!0)])])):qt("",!0)]),_:1}),dt(Nn,{duration:550,name:"nested"},{default:ei(()=>[e.guide?(wt(),Pt("div",BS,[H("div",zS,[H("div",{onClick:t[5]||(t[5]=i=>e.handleModals()),class:"container-close"},kS),H("div",{onClick:t[6]||(t[6]=i=>e.handleGuideTabs("how")),class:"container-item"},GS),H("div",{onClick:t[7]||(t[7]=i=>e.handleGuideTabs("what")),class:"container-item"},XS),H("div",{onClick:t[8]||(t[8]=i=>e.handleGuideTabs("questions")),class:"container-item"},YS)]),e.guideWhat?(wt(),Pt("div",qS,[e.chosenRead?qt("",!0):(wt(),Pt("div",$S,eE))])):qt("",!0),e.guideHow?(wt(),Pt("div",tE,lE)):qt("",!0),e.guideFAQ?(wt(),Pt("div",cE,fE)):qt("",!0)])):qt("",!0)]),_:1}),dt(Nn,{duration:550,name:"nested"},{default:ei(()=>[e.about?(wt(),Pt("div",pE,gE)):qt("",!0)]),_:1}),dt(Nn,{duration:550,name:"nested"},{default:ei(()=>[e.suggest?(wt(),Pt("div",_E,[H("div",vE,[H("div",{onClick:t[9]||(t[9]=i=>e.handleModals()),class:"container-close"},ME)]),H("div",yE,[H("form",SE,[dt(Nn,{duration:"550",name:"email-disclaimer-transition"},{default:ei(()=>[e.showEmailDisclaimer?(wt(),Pt("div",EE,TE)):qt("",!0)]),_:1}),H("div",wE,[AE,CE,RE,H("label",PE,[ot(" Email "),H("span",LE,[ot(" optional "),H("p",{class:"disclaimer-label",onTouchstart:t[10]||(t[10]=i=>e.showEmailDisclaimer=!0),onTouchend:t[11]||(t[11]=i=>e.showEmailDisclaimer=!1),onMouseover:t[12]||(t[12]=i=>e.showEmailDisclaimer=!0),onMouseleave:t[13]||(t[13]=i=>e.showEmailDisclaimer=!1)},"(why do I ask for this?)",32)]),DE])]),IE,UE,NE,FE,OE,BE,zE])])])):qt("",!0)]),_:1}),dt(Nn,{duration:550,name:"nested"},{default:ei(()=>[e.tabShown=="what"?(wt(),Pt("div",HE,VE)):qt("",!0)]),_:1}),dt(_S,{onClick:t[14]||(t[14]=i=>e.handleModals())})])],64))}}),XE=Vm(WE);XE.mount("#app");
