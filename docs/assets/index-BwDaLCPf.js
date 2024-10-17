(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xl(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const at={},Es=[],cn=()=>{},Uf=()=>!1,Do=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ml=n=>n.startsWith("onUpdate:"),vt=Object.assign,yl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Nf=Object.prototype.hasOwnProperty,$e=(n,e)=>Nf.call(n,e),Ue=Array.isArray,Ts=n=>Io(n)==="[object Map]",kh=n=>Io(n)==="[object Set]",We=n=>typeof n=="function",xt=n=>typeof n=="string",Zi=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",Vh=n=>(rt(n)||We(n))&&We(n.then)&&We(n.catch),Gh=Object.prototype.toString,Io=n=>Gh.call(n),Ff=n=>Io(n).slice(8,-1),Wh=n=>Io(n)==="[object Object]",Sl=n=>xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,nr=xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Of=/-(\w)/g,Ln=Uo(n=>n.replace(Of,(e,t)=>t?t.toUpperCase():"")),Bf=/\B([A-Z])/g,Bs=Uo(n=>n.replace(Bf,"-$1").toLowerCase()),No=Uo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qo=Uo(n=>n?`on${No(n)}`:""),Mi=(n,e)=>!Object.is(n,e),Jo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Xh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},zf=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Hf=n=>{const e=xt(n)?Number(n):NaN;return isNaN(e)?n:e};let rc;const jh=()=>rc||(rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bl(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=xt(i)?Wf(i):bl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(xt(n)||rt(n))return n}const kf=/;(?![^(]*\))/g,Vf=/:([^]+)/,Gf=/\/\*[^]*?\*\//g;function Wf(n){const e={};return n.replace(Gf,"").split(kf).forEach(t=>{if(t){const i=t.split(Vf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function El(n){let e="";if(xt(n))e=n;else if(Ue(n))for(let t=0;t<n.length;t++){const i=El(n[t]);i&&(e+=i+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Xf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jf=xl(Xf);function Yh(n){return!!n||n===""}const Yf=n=>xt(n)?n:n==null?"":Ue(n)||rt(n)&&(n.toString===Gh||!We(n.toString))?JSON.stringify(n,qh,2):String(n),qh=(n,e)=>e&&e.__v_isRef?qh(n,e.value):Ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ea(i,r)+" =>"]=s,t),{})}:kh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ea(t))}:Zi(e)?ea(e):rt(e)&&!Ue(e)&&!Wh(e)?String(e):e,ea=(n,e="")=>{var t;return Zi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _n;class qf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_n,!e&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=_n;try{return _n=this,e()}finally{_n=t}}}on(){_n=this}off(){_n=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $f(n,e=_n){e&&e.active&&e.effects.push(n)}function Kf(){return _n}let Yi;class Tl{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,$f(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,bi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed){if(t.computed.effect._dirtyLevel===2)return!0;if(Zf(t.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Ei()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=_i,t=Yi;try{return _i=!0,Yi=this,this._runnings++,oc(this),this.fn()}finally{ac(this),this._runnings--,Yi=t,_i=e}}stop(){this.active&&(oc(this),ac(this),this.onStop&&this.onStop(),this.active=!1)}}function Zf(n){return n.value}function oc(n){n._trackId++,n._depsLength=0}function ac(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)$h(n.deps[e],n);n.deps.length=n._depsLength}}function $h(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let _i=!0,Ya=0;const Kh=[];function bi(){Kh.push(_i),_i=!1}function Ei(){const n=Kh.pop();_i=n===void 0?!0:n}function wl(){Ya++}function Al(){for(Ya--;!Ya&&qa.length;)qa.shift()()}function Zh(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&$h(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const qa=[];function Qh(n,e,t){wl();for(const i of n.keys()){if(!n.computed&&i.computed&&n.get(i)===i._trackId&&i._runnings>0){i._dirtyLevel=2;continue}let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i.computed&&i._dirtyLevel===2&&(i._shouldSchedule=!0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==3&&(i._shouldSchedule=!1,i.scheduler&&qa.push(i.scheduler)))}Al()}const Jh=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},$a=new WeakMap,qi=Symbol(""),Ka=Symbol("");function Xt(n,e,t){if(_i&&Yi){let i=$a.get(n);i||$a.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Jh(()=>i.delete(t))),Zh(Yi,s)}}function Yn(n,e,t,i,s,r){const o=$a.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ue(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Zi(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ue(n)?Sl(t)&&a.push(o.get("length")):(a.push(o.get(qi)),Ts(n)&&a.push(o.get(Ka)));break;case"delete":Ue(n)||(a.push(o.get(qi)),Ts(n)&&a.push(o.get(Ka)));break;case"set":Ts(n)&&a.push(o.get(qi));break}wl();for(const l of a)l&&Qh(l,5);Al()}const Qf=xl("__proto__,__v_isRef,__isVue"),ed=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zi)),lc=Jf();function Jf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ze(this);for(let r=0,o=this.length;r<o;r++)Xt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(Ze)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){bi(),wl();const i=Ze(this)[e].apply(this,t);return Al(),Ei(),i}}),n}function ep(n){Zi(n)||(n=String(n));const e=Ze(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class td{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?fp:rd:r?sd:id).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ue(e);if(!s){if(o&&$e(lc,t))return Reflect.get(lc,t,i);if(t==="hasOwnProperty")return ep}const a=Reflect.get(e,t,i);return(Zi(t)?ed.has(t):Qf(t))||(s||Xt(e,"get",t),r)?a:jt(a)?o&&Sl(t)?a:a.value:rt(a)?s?od(a):qn(a):a}}class nd extends td{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=ur(r);if(!go(i)&&!ur(i)&&(r=Ze(r),i=Ze(i)),!Ue(e)&&jt(r)&&!jt(i))return l?!1:(r.value=i,!0)}const o=Ue(e)&&Sl(t)?Number(t)<e.length:$e(e,t),a=Reflect.set(e,t,i,s);return e===Ze(s)&&(o?Mi(i,r)&&Yn(e,"set",t,i):Yn(e,"add",t,i)),a}deleteProperty(e,t){const i=$e(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Yn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Zi(t)||!ed.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",Ue(e)?"length":qi),Reflect.ownKeys(e)}}class tp extends td{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const np=new nd,ip=new tp,sp=new nd(!0);const Cl=n=>n,Fo=n=>Reflect.getPrototypeOf(n);function wr(n,e,t=!1,i=!1){n=n.__v_raw;const s=Ze(n),r=Ze(e);t||(Mi(e,r)&&Xt(s,"get",e),Xt(s,"get",r));const{has:o}=Fo(s),a=i?Cl:t?Ll:hr;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function Ar(n,e=!1){const t=this.__v_raw,i=Ze(t),s=Ze(n);return e||(Mi(n,s)&&Xt(i,"has",n),Xt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Cr(n,e=!1){return n=n.__v_raw,!e&&Xt(Ze(n),"iterate",qi),Reflect.get(n,"size",n)}function cc(n){n=Ze(n);const e=Ze(this);return Fo(e).has.call(e,n)||(e.add(n),Yn(e,"add",n,n)),this}function uc(n,e){e=Ze(e);const t=Ze(this),{has:i,get:s}=Fo(t);let r=i.call(t,n);r||(n=Ze(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?Mi(e,o)&&Yn(t,"set",n,e):Yn(t,"add",n,e),this}function hc(n){const e=Ze(this),{has:t,get:i}=Fo(e);let s=t.call(e,n);s||(n=Ze(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Yn(e,"delete",n,void 0),r}function dc(){const n=Ze(this),e=n.size!==0,t=n.clear();return e&&Yn(n,"clear",void 0,void 0),t}function Rr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=Ze(o),l=e?Cl:n?Ll:hr;return!n&&Xt(a,"iterate",qi),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Pr(n,e,t){return function(...i){const s=this.__v_raw,r=Ze(s),o=Ts(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Cl:e?Ll:hr;return!e&&Xt(r,"iterate",l?Ka:qi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ti(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function rp(){const n={get(r){return wr(this,r)},get size(){return Cr(this)},has:Ar,add:cc,set:uc,delete:hc,clear:dc,forEach:Rr(!1,!1)},e={get(r){return wr(this,r,!1,!0)},get size(){return Cr(this)},has:Ar,add:cc,set:uc,delete:hc,clear:dc,forEach:Rr(!1,!0)},t={get(r){return wr(this,r,!0)},get size(){return Cr(this,!0)},has(r){return Ar.call(this,r,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:Rr(!0,!1)},i={get(r){return wr(this,r,!0,!0)},get size(){return Cr(this,!0)},has(r){return Ar.call(this,r,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:Rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Pr(r,!1,!1),t[r]=Pr(r,!0,!1),e[r]=Pr(r,!1,!0),i[r]=Pr(r,!0,!0)}),[n,t,e,i]}const[op,ap,lp,cp]=rp();function Rl(n,e){const t=e?n?cp:lp:n?ap:op;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get($e(t,s)&&s in i?t:i,s,r)}const up={get:Rl(!1,!1)},hp={get:Rl(!1,!0)},dp={get:Rl(!0,!1)};const id=new WeakMap,sd=new WeakMap,rd=new WeakMap,fp=new WeakMap;function pp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mp(n){return n.__v_skip||!Object.isExtensible(n)?0:pp(Ff(n))}function qn(n){return ur(n)?n:Pl(n,!1,np,up,id)}function gp(n){return Pl(n,!1,sp,hp,sd)}function od(n){return Pl(n,!0,ip,dp,rd)}function Pl(n,e,t,i,s){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=mp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function ir(n){return ur(n)?ir(n.__v_raw):!!(n&&n.__v_isReactive)}function ur(n){return!!(n&&n.__v_isReadonly)}function go(n){return!!(n&&n.__v_isShallow)}function ad(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function _p(n){return Object.isExtensible(n)&&Xh(n,"__v_skip",!0),n}const hr=n=>rt(n)?qn(n):n,Ll=n=>rt(n)?od(n):n;class ld{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Tl(()=>e(this._value),()=>uo(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ze(this);return(!e._cacheable||e.effect.dirty)&&Mi(e._value,e._value=e.effect.run())&&uo(e,5),cd(e),e.effect._dirtyLevel>=2&&uo(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function vp(n,e,t=!1){let i,s;const r=We(n);return r?(i=n,s=cn):(i=n.get,s=n.set),new ld(i,s,r||!s,t)}function cd(n){var e;_i&&Yi&&(n=Ze(n),Zh(Yi,(e=n.dep)!=null?e:n.dep=Jh(()=>n.dep=void 0,n instanceof ld?n:void 0)))}function uo(n,e=5,t,i){n=Ze(n);const s=n.dep;s&&Qh(s,e)}function jt(n){return!!(n&&n.__v_isRef===!0)}function _t(n){return xp(n,!1)}function xp(n,e){return jt(n)?n:new Mp(n,e)}class Mp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ze(e),this._value=t?e:hr(e)}get value(){return cd(this),this._value}set value(e){const t=this.__v_isShallow||go(e)||ur(e);e=t?e:Ze(e),Mi(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=t?e:hr(e),uo(this,5))}}function yp(n){return jt(n)?n.value:n}const Sp={get:(n,e,t)=>yp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return jt(s)&&!jt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function ud(n){return ir(n)?n:new Proxy(n,Sp)}/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vi(n,e,t,i){try{return i?n(...i):n()}catch(s){Oo(s,e,t)}}function hn(n,e,t,i){if(We(n)){const s=vi(n,e,t,i);return s&&Vh(s)&&s.catch(r=>{Oo(r,e,t)}),s}if(Ue(n)){const s=[];for(let r=0;r<n.length;r++)s.push(hn(n[r],e,t,i));return s}}function Oo(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){bi(),vi(l,null,10,[n,o,a]),Ei();return}}bp(n,t,s,i)}function bp(n,e,t,i=!0){console.error(n)}let dr=!1,Za=!1;const Nt=[];let Cn=0;const ws=[];let ui=null,Hi=0;const hd=Promise.resolve();let Dl=null;function dd(n){const e=Dl||hd;return n?e.then(this?n.bind(this):n):e}function Ep(n){let e=Cn+1,t=Nt.length;for(;e<t;){const i=e+t>>>1,s=Nt[i],r=fr(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function Il(n){(!Nt.length||!Nt.includes(n,dr&&n.allowRecurse?Cn+1:Cn))&&(n.id==null?Nt.push(n):Nt.splice(Ep(n.id),0,n),fd())}function fd(){!dr&&!Za&&(Za=!0,Dl=hd.then(md))}function Tp(n){const e=Nt.indexOf(n);e>Cn&&Nt.splice(e,1)}function wp(n){Ue(n)?ws.push(...n):(!ui||!ui.includes(n,n.allowRecurse?Hi+1:Hi))&&ws.push(n),fd()}function fc(n,e,t=dr?Cn+1:0){for(;t<Nt.length;t++){const i=Nt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Nt.splice(t,1),t--,i()}}}function pd(n){if(ws.length){const e=[...new Set(ws)].sort((t,i)=>fr(t)-fr(i));if(ws.length=0,ui){ui.push(...e);return}for(ui=e,Hi=0;Hi<ui.length;Hi++){const t=ui[Hi];t.active!==!1&&t()}ui=null,Hi=0}}const fr=n=>n.id==null?1/0:n.id,Ap=(n,e)=>{const t=fr(n)-fr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function md(n){Za=!1,dr=!0,Nt.sort(Ap);try{for(Cn=0;Cn<Nt.length;Cn++){const e=Nt[Cn];e&&e.active!==!1&&vi(e,null,14)}}finally{Cn=0,Nt.length=0,pd(),dr=!1,Dl=null,(Nt.length||ws.length)&&md()}}function Cp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||at;d&&(s=t.map(m=>xt(m)?m.trim():m)),h&&(s=t.map(zf))}let a,l=i[a=Qo(e)]||i[a=Qo(Ln(e))];!l&&r&&(l=i[a=Qo(Bs(e))]),l&&hn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,hn(c,n,6,s)}}function gd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!We(n)){const l=c=>{const u=gd(c,e,!0);u&&(a=!0,vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(rt(n)&&i.set(n,null),null):(Ue(r)?r.forEach(l=>o[l]=null):vt(o,r),rt(n)&&i.set(n,o),o)}function Bo(n,e){return!n||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,Bs(e))||$e(n,e))}let un=null,zo=null;function _o(n){const e=un;return un=n,zo=n&&n.type.__scopeId||null,e}function Rp(n){zo=n}function Pp(){zo=null}function vn(n,e=un,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&wc(-1);const r=_o(e);let o;try{o=n(...s)}finally{_o(r),i._d&&wc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ta(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:m,ctx:_,inheritAttrs:x}=n,p=_o(n);let f,S;try{if(t.shapeFlag&4){const w=s||i,F=w;f=wn(c.call(F,w,u,h,m,d,_)),S=a}else{const w=e;f=wn(w.length>1?w(h,{attrs:a,slots:o,emit:l}):w(h,null)),S=e.props?a:Lp(a)}}catch(w){or.length=0,Oo(w,n,1),f=lt(tn)}let M=f;if(S&&x!==!1){const w=Object.keys(S),{shapeFlag:F}=M;w.length&&F&7&&(r&&w.some(Ml)&&(S=Dp(S,r)),M=Dn(M,S,!1,!0))}return t.dirs&&(M=Dn(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),f=M,_o(p),f}const Lp=n=>{let e;for(const t in n)(t==="class"||t==="style"||Do(t))&&((e||(e={}))[t]=n[t]);return e},Dp=(n,e)=>{const t={};for(const i in n)(!Ml(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ip(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?pc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Bo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?pc(i,o,c):!0:!!o;return!1}function pc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Bo(t,r))return!0}return!1}function Up({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Np="components";function na(n,e){return Op(Np,n,!0,e)||n}const Fp=Symbol.for("v-ndc");function Op(n,e,t=!0,i=!1){const s=un||Pt;if(s){const r=s.type;{const a=Im(r,!1);if(a&&(a===e||a===Ln(e)||a===No(Ln(e))))return r}const o=mc(s[n]||r[n],e)||mc(s.appContext[n],e);return!o&&i?r:o}}function mc(n,e){return n&&(n[e]||n[Ln(e)]||n[No(Ln(e))])}const Bp=n=>n.__isSuspense;function zp(n,e){e&&e.pendingBranch?Ue(n)?e.effects.push(...n):e.effects.push(n):wp(n)}function Ho(n,e,t=Pt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{bi();const a=vr(t),l=hn(e,t,n,o);return a(),Ei(),l});return i?s.unshift(r):s.push(r),r}}const Qn=n=>(e,t=Pt)=>{(!Go||n==="sp")&&Ho(n,(...i)=>e(...i),t)},Hp=Qn("bm"),Ul=Qn("m"),kp=Qn("bu"),Vp=Qn("u"),_d=Qn("bum"),Nl=Qn("um"),Gp=Qn("sp"),Wp=Qn("rtg"),Xp=Qn("rtc");function jp(n,e=Pt){Ho("ec",n,e)}function Ri(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(bi(),hn(l,t,8,[n.el,a,n,e]),Ei())}}function Yp(n,e,t,i){let s;const r=t;if(Ue(n)||xt(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(rt(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r)}}else s=[];return s}/*! #__NO_SIDE_EFFECTS__ */function Fl(n,e){return We(n)?vt({name:n.name},e,{setup:n}):n}const ho=n=>!!n.type.__asyncLoader,Qa=n=>n?Hd(n)?Hl(n):Qa(n.parent):null,sr=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Qa(n.parent),$root:n=>Qa(n.root),$emit:n=>n.emit,$options:n=>Ol(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Il(n.update)}),$nextTick:n=>n.n||(n.n=dd.bind(n.proxy)),$watch:n=>fm.bind(n)}),ia=(n,e)=>n!==at&&!n.__isScriptSetup&&$e(n,e),qp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ia(i,e))return o[e]=1,i[e];if(s!==at&&$e(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&$e(c,e))return o[e]=3,r[e];if(t!==at&&$e(t,e))return o[e]=4,t[e];Ja&&(o[e]=0)}}const u=sr[e];let h,d;if(u)return e==="$attrs"&&Xt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==at&&$e(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,$e(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ia(s,e)?(s[e]=t,!0):i!==at&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==at&&$e(n,o)||ia(e,o)||(a=r[0])&&$e(a,o)||$e(i,o)||$e(sr,o)||$e(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function gc(n){return Ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ja=!0;function $p(n){const e=Ol(n),t=n.proxy,i=n.ctx;Ja=!1,e.beforeCreate&&_c(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:_,activated:x,deactivated:p,beforeDestroy:f,beforeUnmount:S,destroyed:M,unmounted:w,render:F,renderTracked:A,renderTriggered:C,errorCaptured:U,serverPrefetch:b,expose:y,inheritAttrs:D,components:O,directives:V,filters:ie}=e;if(c&&Kp(c,i,null),o)for(const ne in o){const j=o[ne];We(j)&&(i[ne]=j.bind(t))}if(s){const ne=s.call(t,t);rt(ne)&&(n.data=qn(ne))}if(Ja=!0,r)for(const ne in r){const j=r[ne],me=We(j)?j.bind(t,t):We(j.get)?j.get.bind(t,t):cn,Me=!We(j)&&We(j.set)?j.set.bind(t):cn,ye=Xi({get:me,set:Me});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ce=>ye.value=Ce})}if(a)for(const ne in a)vd(a[ne],i,t,ne);if(l){const ne=We(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(j=>{Tn(j,ne[j])})}u&&_c(u,n,"c");function Q(ne,j){Ue(j)?j.forEach(me=>ne(me.bind(t))):j&&ne(j.bind(t))}if(Q(Hp,h),Q(Ul,d),Q(kp,m),Q(Vp,_),Q(pm,x),Q(mm,p),Q(jp,U),Q(Xp,A),Q(Wp,C),Q(_d,S),Q(Nl,w),Q(Gp,b),Ue(y))if(y.length){const ne=n.exposed||(n.exposed={});y.forEach(j=>{Object.defineProperty(ne,j,{get:()=>t[j],set:me=>t[j]=me})})}else n.exposed||(n.exposed={});F&&n.render===cn&&(n.render=F),D!=null&&(n.inheritAttrs=D),O&&(n.components=O),V&&(n.directives=V)}function Kp(n,e,t=cn){Ue(n)&&(n=el(n));for(const i in n){const s=n[i];let r;rt(s)?"default"in s?r=Ft(s.from||i,s.default,!0):r=Ft(s.from||i):r=Ft(s),jt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function _c(n,e,t){hn(Ue(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function vd(n,e,t,i){const s=i.includes(".")?Ld(t,i):()=>t[i];if(xt(n)){const r=e[n];We(r)&&As(s,r)}else if(We(n))As(s,n.bind(t));else if(rt(n))if(Ue(n))n.forEach(r=>vd(r,e,t,i));else{const r=We(n.handler)?n.handler.bind(t):e[n.handler];We(r)&&As(s,r,n)}}function Ol(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>vo(l,c,o,!0)),vo(l,e,o)),rt(e)&&r.set(e,l),l}function vo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&vo(n,r,t,!0),s&&s.forEach(o=>vo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Zp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Zp={data:vc,props:xc,emits:xc,methods:Qs,computed:Qs,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:Qs,directives:Qs,watch:Jp,provide:vc,inject:Qp};function vc(n,e){return e?n?function(){return vt(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function Qp(n,e){return Qs(el(n),el(e))}function el(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ht(n,e){return n?[...new Set([].concat(n,e))]:e}function Qs(n,e){return n?vt(Object.create(null),n,e):e}function xc(n,e){return n?Ue(n)&&Ue(e)?[...new Set([...n,...e])]:vt(Object.create(null),gc(n),gc(e??{})):e}function Jp(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const i in e)t[i]=Ht(n[i],e[i]);return t}function xd(){return{app:null,config:{isNativeTag:Uf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let em=0;function tm(n,e){return function(i,s=null){We(i)||(i=vt({},i)),s!=null&&!rt(s)&&(s=null);const r=xd(),o=new WeakSet;let a=!1;const l=r.app={_uid:em++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Nm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&We(c.install)?(o.add(c),c.install(l,...u)):We(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=lt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):n(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Hl(d.component)}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=rr;rr=l;try{return c()}finally{rr=u}}};return l}}let rr=null;function Tn(n,e){if(Pt){let t=Pt.provides;const i=Pt.parent&&Pt.parent.provides;i===t&&(t=Pt.provides=Object.create(i)),t[n]=e}}function Ft(n,e,t=!1){const i=Pt||un;if(i||rr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:rr._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}const Md={},yd=()=>Object.create(Md),Sd=n=>Object.getPrototypeOf(n)===Md;function nm(n,e,t,i=!1){const s={},r=yd();n.propsDefaults=Object.create(null),bd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:gp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function im(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Ze(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Bo(n.emitsOptions,d))continue;const m=e[d];if(l)if($e(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const _=Ln(d);s[_]=tl(l,a,_,m,n,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{bd(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!$e(e,h)&&((u=Bs(h))===h||!$e(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=tl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!$e(e,h))&&(delete r[h],c=!0)}c&&Yn(n.attrs,"set","")}function bd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(nr(l))continue;const c=e[l];let u;s&&$e(s,u=Ln(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Bo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ze(t),c=a||at;for(let u=0;u<r.length;u++){const h=r[u];t[h]=tl(s,l,h,c[h],n,!$e(c,h))}}return o}function tl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=$e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=vr(s);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Bs(t))&&(i=!0))}return i}function Ed(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!We(n)){const u=h=>{l=!0;const[d,m]=Ed(h,e,!0);vt(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return rt(n)&&i.set(n,Es),Es;if(Ue(r))for(let u=0;u<r.length;u++){const h=Ln(r[u]);Mc(h)&&(o[h]=at)}else if(r)for(const u in r){const h=Ln(u);if(Mc(h)){const d=r[u],m=o[h]=Ue(d)||We(d)?{type:d}:vt({},d);if(m){const _=bc(Boolean,m.type),x=bc(String,m.type);m[0]=_>-1,m[1]=x<0||_<x,(_>-1||$e(m,"default"))&&a.push(h)}}}const c=[o,a];return rt(n)&&i.set(n,c),c}function Mc(n){return n[0]!=="$"&&!nr(n)}function yc(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Sc(n,e){return yc(n)===yc(e)}function bc(n,e){return Ue(e)?e.findIndex(t=>Sc(t,n)):We(e)&&Sc(e,n)?0:-1}const Td=n=>n[0]==="_"||n==="$stable",Bl=n=>Ue(n)?n.map(wn):[wn(n)],sm=(n,e,t)=>{if(e._n)return e;const i=vn((...s)=>Bl(e(...s)),t);return i._c=!1,i},wd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Td(s))continue;const r=n[s];if(We(r))e[s]=sm(s,r,i);else if(r!=null){const o=Bl(r);e[s]=()=>o}}},Ad=(n,e)=>{const t=Bl(e);n.slots.default=()=>t},rm=(n,e)=>{const t=n.slots=yd();if(n.vnode.shapeFlag&32){const i=e._;i?(vt(t,e),Xh(t,"_",i,!0)):wd(e,t)}else e&&Ad(n,e)},om=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(vt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,wd(e,s)),o=e}else e&&(Ad(n,e),o={default:1});if(r)for(const a in s)!Td(a)&&o[a]==null&&delete s[a]};function nl(n,e,t,i,s=!1){if(Ue(n)){n.forEach((d,m)=>nl(d,e&&(Ue(e)?e[m]:e),t,i,s));return}if(ho(i)&&!s)return;const r=i.shapeFlag&4?Hl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(xt(c)?(u[c]=null,$e(h,c)&&(h[c]=null)):jt(c)&&(c.value=null)),We(l))vi(l,a,12,[o,u]);else{const d=xt(l),m=jt(l);if(d||m){const _=()=>{if(n.f){const x=d?$e(h,l)?h[l]:u[l]:l.value;s?Ue(x)&&yl(x,r):Ue(x)?x.includes(r)||x.push(r):d?(u[l]=[r],$e(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,$e(h,l)&&(h[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,Vt(_,t)):_()}}}const Vt=zp;function am(n){return lm(n)}function lm(n,e){const t=jh();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=cn,insertStaticContent:_}=n,x=(R,P,N,W=null,Y=null,te=null,ce=void 0,E=null,g=!!P.dynamicChildren)=>{if(R===P)return;R&&!Vi(R,P)&&(W=pe(R),Ce(R,Y,te,!0),R=null),P.patchFlag===-2&&(g=!1,P.dynamicChildren=null);const{type:L,ref:k,shapeFlag:$}=P;switch(L){case Vo:p(R,P,N,W);break;case tn:f(R,P,N,W);break;case oa:R==null&&S(P,N,W,ce);break;case Jt:O(R,P,N,W,Y,te,ce,E,g);break;default:$&1?F(R,P,N,W,Y,te,ce,E,g):$&6?V(R,P,N,W,Y,te,ce,E,g):($&64||$&128)&&L.process(R,P,N,W,Y,te,ce,E,g,Be)}k!=null&&Y&&nl(k,R&&R.ref,te,P||R,!P)},p=(R,P,N,W)=>{if(R==null)i(P.el=a(P.children),N,W);else{const Y=P.el=R.el;P.children!==R.children&&c(Y,P.children)}},f=(R,P,N,W)=>{R==null?i(P.el=l(P.children||""),N,W):P.el=R.el},S=(R,P,N,W)=>{[R.el,R.anchor]=_(R.children,P,N,W,R.el,R.anchor)},M=({el:R,anchor:P},N,W)=>{let Y;for(;R&&R!==P;)Y=d(R),i(R,N,W),R=Y;i(P,N,W)},w=({el:R,anchor:P})=>{let N;for(;R&&R!==P;)N=d(R),s(R),R=N;s(P)},F=(R,P,N,W,Y,te,ce,E,g)=>{P.type==="svg"?ce="svg":P.type==="math"&&(ce="mathml"),R==null?A(P,N,W,Y,te,ce,E,g):b(R,P,Y,te,ce,E,g)},A=(R,P,N,W,Y,te,ce,E)=>{let g,L;const{props:k,shapeFlag:$,transition:q,dirs:ue}=R;if(g=R.el=o(R.type,te,k&&k.is,k),$&8?u(g,R.children):$&16&&U(R.children,g,null,W,Y,sa(R,te),ce,E),ue&&Ri(R,null,W,"created"),C(g,R,R.scopeId,ce,W),k){for(const le in k)le!=="value"&&!nr(le)&&r(g,le,null,k[le],te,R.children,W,Y,_e);"value"in k&&r(g,"value",null,k.value,te),(L=k.onVnodeBeforeMount)&&bn(L,W,R)}ue&&Ri(R,null,W,"beforeMount");const oe=cm(Y,q);oe&&q.beforeEnter(g),i(g,P,N),((L=k&&k.onVnodeMounted)||oe||ue)&&Vt(()=>{L&&bn(L,W,R),oe&&q.enter(g),ue&&Ri(R,null,W,"mounted")},Y)},C=(R,P,N,W,Y)=>{if(N&&m(R,N),W)for(let te=0;te<W.length;te++)m(R,W[te]);if(Y){let te=Y.subTree;if(P===te){const ce=Y.vnode;C(R,ce,ce.scopeId,ce.slotScopeIds,Y.parent)}}},U=(R,P,N,W,Y,te,ce,E,g=0)=>{for(let L=g;L<R.length;L++){const k=R[L]=E?di(R[L]):wn(R[L]);x(null,k,P,N,W,Y,te,ce,E)}},b=(R,P,N,W,Y,te,ce)=>{const E=P.el=R.el;let{patchFlag:g,dynamicChildren:L,dirs:k}=P;g|=R.patchFlag&16;const $=R.props||at,q=P.props||at;let ue;if(N&&Pi(N,!1),(ue=q.onVnodeBeforeUpdate)&&bn(ue,N,P,R),k&&Ri(P,R,N,"beforeUpdate"),N&&Pi(N,!0),L?y(R.dynamicChildren,L,E,N,W,sa(P,Y),te):ce||j(R,P,E,null,N,W,sa(P,Y),te,!1),g>0){if(g&16)D(E,P,$,q,N,W,Y);else if(g&2&&$.class!==q.class&&r(E,"class",null,q.class,Y),g&4&&r(E,"style",$.style,q.style,Y),g&8){const oe=P.dynamicProps;for(let le=0;le<oe.length;le++){const xe=oe[le],ae=$[xe],Se=q[xe];(Se!==ae||xe==="value")&&r(E,xe,ae,Se,Y,R.children,N,W,_e)}}g&1&&R.children!==P.children&&u(E,P.children)}else!ce&&L==null&&D(E,P,$,q,N,W,Y);((ue=q.onVnodeUpdated)||k)&&Vt(()=>{ue&&bn(ue,N,P,R),k&&Ri(P,R,N,"updated")},W)},y=(R,P,N,W,Y,te,ce)=>{for(let E=0;E<P.length;E++){const g=R[E],L=P[E],k=g.el&&(g.type===Jt||!Vi(g,L)||g.shapeFlag&70)?h(g.el):N;x(g,L,k,null,W,Y,te,ce,!0)}},D=(R,P,N,W,Y,te,ce)=>{if(N!==W){if(N!==at)for(const E in N)!nr(E)&&!(E in W)&&r(R,E,N[E],null,ce,P.children,Y,te,_e);for(const E in W){if(nr(E))continue;const g=W[E],L=N[E];g!==L&&E!=="value"&&r(R,E,L,g,ce,P.children,Y,te,_e)}"value"in W&&r(R,"value",N.value,W.value,ce)}},O=(R,P,N,W,Y,te,ce,E,g)=>{const L=P.el=R?R.el:a(""),k=P.anchor=R?R.anchor:a("");let{patchFlag:$,dynamicChildren:q,slotScopeIds:ue}=P;ue&&(E=E?E.concat(ue):ue),R==null?(i(L,N,W),i(k,N,W),U(P.children||[],N,k,Y,te,ce,E,g)):$>0&&$&64&&q&&R.dynamicChildren?(y(R.dynamicChildren,q,N,Y,te,ce,E),(P.key!=null||Y&&P===Y.subTree)&&Cd(R,P,!0)):j(R,P,N,k,Y,te,ce,E,g)},V=(R,P,N,W,Y,te,ce,E,g)=>{P.slotScopeIds=E,R==null?P.shapeFlag&512?Y.ctx.activate(P,N,W,ce,g):ie(P,N,W,Y,te,ce,g):re(R,P,g)},ie=(R,P,N,W,Y,te,ce)=>{const E=R.component=Am(R,W,Y);if(ko(R)&&(E.ctx.renderer=Be),Rm(E),E.asyncDep){if(Y&&Y.registerDep(E,Q,ce),!R.el){const g=E.subTree=lt(tn);f(null,g,P,N)}}else Q(E,R,P,N,Y,te,ce)},re=(R,P,N)=>{const W=P.component=R.component;if(Ip(R,P,N))if(W.asyncDep&&!W.asyncResolved){ne(W,P,N);return}else W.next=P,Tp(W.update),W.effect.dirty=!0,W.update();else P.el=R.el,W.vnode=P},Q=(R,P,N,W,Y,te,ce)=>{const E=()=>{if(R.isMounted){let{next:k,bu:$,u:q,parent:ue,vnode:oe}=R;{const ze=Rd(R);if(ze){k&&(k.el=oe.el,ne(R,k,ce)),ze.asyncDep.then(()=>{R.isUnmounted||E()});return}}let le=k,xe;Pi(R,!1),k?(k.el=oe.el,ne(R,k,ce)):k=oe,$&&Jo($),(xe=k.props&&k.props.onVnodeBeforeUpdate)&&bn(xe,ue,k,oe),Pi(R,!0);const ae=ta(R),Se=R.subTree;R.subTree=ae,x(Se,ae,h(Se.el),pe(Se),R,Y,te),k.el=ae.el,le===null&&Up(R,ae.el),q&&Vt(q,Y),(xe=k.props&&k.props.onVnodeUpdated)&&Vt(()=>bn(xe,ue,k,oe),Y)}else{let k;const{el:$,props:q}=P,{bm:ue,m:oe,parent:le}=R,xe=ho(P);if(Pi(R,!1),ue&&Jo(ue),!xe&&(k=q&&q.onVnodeBeforeMount)&&bn(k,le,P),Pi(R,!0),$&&Ve){const ae=()=>{R.subTree=ta(R),Ve($,R.subTree,R,Y,null)};xe?P.type.__asyncLoader().then(()=>!R.isUnmounted&&ae()):ae()}else{const ae=R.subTree=ta(R);x(null,ae,N,W,R,Y,te),P.el=ae.el}if(oe&&Vt(oe,Y),!xe&&(k=q&&q.onVnodeMounted)){const ae=P;Vt(()=>bn(k,le,ae),Y)}(P.shapeFlag&256||le&&ho(le.vnode)&&le.vnode.shapeFlag&256)&&R.a&&Vt(R.a,Y),R.isMounted=!0,P=N=W=null}},g=R.effect=new Tl(E,cn,()=>Il(L),R.scope),L=R.update=()=>{g.dirty&&g.run()};L.id=R.uid,Pi(R,!0),L()},ne=(R,P,N)=>{P.component=R;const W=R.vnode.props;R.vnode=P,R.next=null,im(R,P.props,W,N),om(R,P.children,N),bi(),fc(R),Ei()},j=(R,P,N,W,Y,te,ce,E,g=!1)=>{const L=R&&R.children,k=R?R.shapeFlag:0,$=P.children,{patchFlag:q,shapeFlag:ue}=P;if(q>0){if(q&128){Me(L,$,N,W,Y,te,ce,E,g);return}else if(q&256){me(L,$,N,W,Y,te,ce,E,g);return}}ue&8?(k&16&&_e(L,Y,te),$!==L&&u(N,$)):k&16?ue&16?Me(L,$,N,W,Y,te,ce,E,g):_e(L,Y,te,!0):(k&8&&u(N,""),ue&16&&U($,N,W,Y,te,ce,E,g))},me=(R,P,N,W,Y,te,ce,E,g)=>{R=R||Es,P=P||Es;const L=R.length,k=P.length,$=Math.min(L,k);let q;for(q=0;q<$;q++){const ue=P[q]=g?di(P[q]):wn(P[q]);x(R[q],ue,N,null,Y,te,ce,E,g)}L>k?_e(R,Y,te,!0,!1,$):U(P,N,W,Y,te,ce,E,g,$)},Me=(R,P,N,W,Y,te,ce,E,g)=>{let L=0;const k=P.length;let $=R.length-1,q=k-1;for(;L<=$&&L<=q;){const ue=R[L],oe=P[L]=g?di(P[L]):wn(P[L]);if(Vi(ue,oe))x(ue,oe,N,null,Y,te,ce,E,g);else break;L++}for(;L<=$&&L<=q;){const ue=R[$],oe=P[q]=g?di(P[q]):wn(P[q]);if(Vi(ue,oe))x(ue,oe,N,null,Y,te,ce,E,g);else break;$--,q--}if(L>$){if(L<=q){const ue=q+1,oe=ue<k?P[ue].el:W;for(;L<=q;)x(null,P[L]=g?di(P[L]):wn(P[L]),N,oe,Y,te,ce,E,g),L++}}else if(L>q)for(;L<=$;)Ce(R[L],Y,te,!0),L++;else{const ue=L,oe=L,le=new Map;for(L=oe;L<=q;L++){const Ae=P[L]=g?di(P[L]):wn(P[L]);Ae.key!=null&&le.set(Ae.key,L)}let xe,ae=0;const Se=q-oe+1;let ze=!1,Le=0;const ge=new Array(Se);for(L=0;L<Se;L++)ge[L]=0;for(L=ue;L<=$;L++){const Ae=R[L];if(ae>=Se){Ce(Ae,Y,te,!0);continue}let qe;if(Ae.key!=null)qe=le.get(Ae.key);else for(xe=oe;xe<=q;xe++)if(ge[xe-oe]===0&&Vi(Ae,P[xe])){qe=xe;break}qe===void 0?Ce(Ae,Y,te,!0):(ge[qe-oe]=L+1,qe>=Le?Le=qe:ze=!0,x(Ae,P[qe],N,null,Y,te,ce,E,g),ae++)}const He=ze?um(ge):Es;for(xe=He.length-1,L=Se-1;L>=0;L--){const Ae=oe+L,qe=P[Ae],v=Ae+1<k?P[Ae+1].el:W;ge[L]===0?x(null,qe,N,v,Y,te,ce,E,g):ze&&(xe<0||L!==He[xe]?ye(qe,N,v,2):xe--)}}},ye=(R,P,N,W,Y=null)=>{const{el:te,type:ce,transition:E,children:g,shapeFlag:L}=R;if(L&6){ye(R.component.subTree,P,N,W);return}if(L&128){R.suspense.move(P,N,W);return}if(L&64){ce.move(R,P,N,Be);return}if(ce===Jt){i(te,P,N);for(let $=0;$<g.length;$++)ye(g[$],P,N,W);i(R.anchor,P,N);return}if(ce===oa){M(R,P,N);return}if(W!==2&&L&1&&E)if(W===0)E.beforeEnter(te),i(te,P,N),Vt(()=>E.enter(te),Y);else{const{leave:$,delayLeave:q,afterLeave:ue}=E,oe=()=>i(te,P,N),le=()=>{$(te,()=>{oe(),ue&&ue()})};q?q(te,oe,le):le()}else i(te,P,N)},Ce=(R,P,N,W=!1,Y=!1)=>{const{type:te,props:ce,ref:E,children:g,dynamicChildren:L,shapeFlag:k,patchFlag:$,dirs:q,memoIndex:ue}=R;if(E!=null&&nl(E,null,N,R,!0),ue!=null&&(P.renderCache[ue]=void 0),k&256){P.ctx.deactivate(R);return}const oe=k&1&&q,le=!ho(R);let xe;if(le&&(xe=ce&&ce.onVnodeBeforeUnmount)&&bn(xe,P,R),k&6)de(R.component,N,W);else{if(k&128){R.suspense.unmount(N,W);return}oe&&Ri(R,null,P,"beforeUnmount"),k&64?R.type.remove(R,P,N,Y,Be,W):L&&(te!==Jt||$>0&&$&64)?_e(L,P,N,!1,!0):(te===Jt&&$&384||!Y&&k&16)&&_e(g,P,N),W&&Ge(R)}(le&&(xe=ce&&ce.onVnodeUnmounted)||oe)&&Vt(()=>{xe&&bn(xe,P,R),oe&&Ri(R,null,P,"unmounted")},N)},Ge=R=>{const{type:P,el:N,anchor:W,transition:Y}=R;if(P===Jt){se(N,W);return}if(P===oa){w(R);return}const te=()=>{s(N),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(R.shapeFlag&1&&Y&&!Y.persisted){const{leave:ce,delayLeave:E}=Y,g=()=>ce(N,te);E?E(R.el,te,g):g()}else te()},se=(R,P)=>{let N;for(;R!==P;)N=d(R),s(R),R=N;s(P)},de=(R,P,N)=>{const{bum:W,scope:Y,update:te,subTree:ce,um:E,m:g,a:L}=R;Ec(g),Ec(L),W&&Jo(W),Y.stop(),te&&(te.active=!1,Ce(ce,R,P,N)),E&&Vt(E,P),Vt(()=>{R.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},_e=(R,P,N,W=!1,Y=!1,te=0)=>{for(let ce=te;ce<R.length;ce++)Ce(R[ce],P,N,W,Y)},pe=R=>R.shapeFlag&6?pe(R.component.subTree):R.shapeFlag&128?R.suspense.next():d(R.anchor||R.el);let Oe=!1;const Ie=(R,P,N)=>{R==null?P._vnode&&Ce(P._vnode,null,null,!0):x(P._vnode||null,R,P,null,null,null,N),Oe||(Oe=!0,fc(),pd(),Oe=!1),P._vnode=R},Be={p:x,um:Ce,m:ye,r:Ge,mt:ie,mc:U,pc:j,pbc:y,n:pe,o:n};let I,Ve;return{render:Ie,hydrate:I,createApp:tm(Ie,I)}}function sa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Pi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function cm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Cd(n,e,t=!1){const i=n.children,s=e.children;if(Ue(i)&&Ue(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Cd(o,a)),a.type===Vo&&(a.el=o.el)}}function um(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Rd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rd(e)}function Ec(n){if(n)for(let e=0;e<n.length;e++)n[e].active=!1}const hm=Symbol.for("v-scx"),dm=()=>Ft(hm),Lr={};function As(n,e,t){return Pd(n,e,t)}function Pd(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=at){if(e&&r){const A=e;e=(...C)=>{A(...C),F()}}const l=Pt,c=A=>i===!0?A:ki(A,i===!1?1:void 0);let u,h=!1,d=!1;if(jt(n)?(u=()=>n.value,h=go(n)):ir(n)?(u=()=>c(n),h=!0):Ue(n)?(d=!0,h=n.some(A=>ir(A)||go(A)),u=()=>n.map(A=>{if(jt(A))return A.value;if(ir(A))return c(A);if(We(A))return vi(A,l,2)})):We(n)?e?u=()=>vi(n,l,2):u=()=>(m&&m(),hn(n,l,3,[_])):u=cn,e&&i){const A=u;u=()=>ki(A())}let m,_=A=>{m=M.onStop=()=>{vi(A,l,4),m=M.onStop=void 0}},x;if(Go)if(_=cn,e?t&&hn(e,l,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const A=dm();x=A.__watcherHandles||(A.__watcherHandles=[])}else return cn;let p=d?new Array(n.length).fill(Lr):Lr;const f=()=>{if(!(!M.active||!M.dirty))if(e){const A=M.run();(i||h||(d?A.some((C,U)=>Mi(C,p[U])):Mi(A,p)))&&(m&&m(),hn(e,l,3,[A,p===Lr?void 0:d&&p[0]===Lr?[]:p,_]),p=A)}else M.run()};f.allowRecurse=!!e;let S;s==="sync"?S=f:s==="post"?S=()=>Vt(f,l&&l.suspense):(f.pre=!0,l&&(f.id=l.uid),S=()=>Il(f));const M=new Tl(u,cn,S),w=Kf(),F=()=>{M.stop(),w&&yl(w.effects,M)};return e?t?f():p=M.run():s==="post"?Vt(M.run.bind(M),l&&l.suspense):M.run(),x&&x.push(F),F}function fm(n,e,t){const i=this.proxy,s=xt(n)?n.includes(".")?Ld(i,n):()=>i[n]:n.bind(i,i);let r;We(e)?r=e:(r=e.handler,t=e);const o=vr(this),a=Pd(s,r.bind(i),t);return o(),a}function Ld(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ki(n,e=1/0,t){if(e<=0||!rt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,jt(n))ki(n.value,e,t);else if(Ue(n))for(let i=0;i<n.length;i++)ki(n[i],e,t);else if(kh(n)||Ts(n))n.forEach(i=>{ki(i,e,t)});else if(Wh(n)){for(const i in n)ki(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ki(n[i],e,t)}return n}const ko=n=>n.type.__isKeepAlive;function pm(n,e){Dd(n,"a",e)}function mm(n,e){Dd(n,"da",e)}function Dd(n,e,t=Pt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ho(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ko(s.parent.vnode)&&gm(i,e,t,s),s=s.parent}}function gm(n,e,t,i){const s=Ho(e,n,i,!0);Nl(()=>{yl(i[e],s)},t)}const hi=Symbol("_leaveCb"),Dr=Symbol("_enterCb");function _m(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ul(()=>{n.isMounted=!0}),_d(()=>{n.isUnmounting=!0}),n}const sn=[Function,Array],Id={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},Ud=n=>{const e=n.subTree;return e.component?Ud(e.component):e},vm={name:"BaseTransition",props:Id,setup(n,{slots:e}){const t=Cm(),i=_m();return()=>{const s=e.default&&Fd(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const d of s)if(d.type!==tn){r=d;break}}const o=Ze(n),{mode:a}=o;if(i.isLeaving)return ra(r);const l=Tc(r);if(!l)return ra(r);let c=il(l,o,i,t,d=>c=d);xo(l,c);const u=t.subTree,h=u&&Tc(u);if(h&&h.type!==tn&&!Vi(l,h)&&Ud(t).type!==tn){const d=il(h,o,i,t);if(xo(h,d),a==="out-in"&&l.type!==tn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},ra(r);a==="in-out"&&l.type!==tn&&(d.delayLeave=(m,_,x)=>{const p=Nd(i,h);p[String(h.key)]=h,m[hi]=()=>{_(),m[hi]=void 0,delete c.delayedLeave},c.delayedLeave=x})}return r}}},xm=vm;function Nd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function il(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:m,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:p,onAppear:f,onAfterAppear:S,onAppearCancelled:M}=e,w=String(n.key),F=Nd(t,n),A=(b,y)=>{b&&hn(b,i,9,y)},C=(b,y)=>{const D=y[1];A(b,y),Ue(b)?b.every(O=>O.length<=1)&&D():b.length<=1&&D()},U={mode:o,persisted:a,beforeEnter(b){let y=l;if(!t.isMounted)if(r)y=p||l;else return;b[hi]&&b[hi](!0);const D=F[w];D&&Vi(n,D)&&D.el[hi]&&D.el[hi](),A(y,[b])},enter(b){let y=c,D=u,O=h;if(!t.isMounted)if(r)y=f||c,D=S||u,O=M||h;else return;let V=!1;const ie=b[Dr]=re=>{V||(V=!0,re?A(O,[b]):A(D,[b]),U.delayedLeave&&U.delayedLeave(),b[Dr]=void 0)};y?C(y,[b,ie]):ie()},leave(b,y){const D=String(n.key);if(b[Dr]&&b[Dr](!0),t.isUnmounting)return y();A(d,[b]);let O=!1;const V=b[hi]=ie=>{O||(O=!0,y(),ie?A(x,[b]):A(_,[b]),b[hi]=void 0,F[D]===n&&delete F[D])};F[D]=n,m?C(m,[b,V]):V()},clone(b){const y=il(b,e,t,i,s);return s&&s(y),y}};return U}function ra(n){if(ko(n))return n=Dn(n),n.children=null,n}function Tc(n){if(!ko(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&We(t.default))return t.default()}}function xo(n,e){n.shapeFlag&6&&n.component?xo(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Fd(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Jt?(o.patchFlag&128&&s++,i=i.concat(Fd(o.children,e,a))):(e||o.type!==tn)&&i.push(a!=null?Dn(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}const Mm=n=>n.__isTeleport,Jt=Symbol.for("v-fgt"),Vo=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),oa=Symbol.for("v-stc"),or=[];let Sn=null;function Mt(n=!1){or.push(Sn=n?null:[])}function ym(){or.pop(),Sn=or[or.length-1]||null}let pr=1;function wc(n){pr+=n}function Od(n){return n.dynamicChildren=pr>0?Sn||Es:null,ym(),pr>0&&Sn&&Sn.push(n),n}function Rt(n,e,t,i,s,r){return Od(z(n,e,t,i,s,r,!0))}function Bd(n,e,t,i,s){return Od(lt(n,e,t,i,s,!0))}function sl(n){return n?n.__v_isVNode===!0:!1}function Vi(n,e){return n.type===e.type&&n.key===e.key}const zd=({key:n})=>n??null,fo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?xt(n)||jt(n)||We(n)?{i:un,r:n,k:e,f:!!t}:n:null);function z(n,e=null,t=null,i=0,s=null,r=n===Jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&zd(e),ref:e&&fo(e),scopeId:zo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:un};return a?(zl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=xt(t)?8:16),pr>0&&!o&&Sn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Sn.push(l),l}const lt=Sm;function Sm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Fp)&&(n=tn),sl(n)){const a=Dn(n,e,!0);return t&&zl(a,t),pr>0&&!r&&Sn&&(a.shapeFlag&6?Sn[Sn.indexOf(n)]=a:Sn.push(a)),a.patchFlag=-2,a}if(Um(n)&&(n=n.__vccOpts),e){e=bm(e);let{class:a,style:l}=e;a&&!xt(a)&&(e.class=El(a)),rt(l)&&(ad(l)&&!Ue(l)&&(l=vt({},l)),e.style=bl(l))}const o=xt(n)?1:Bp(n)?128:Mm(n)?64:rt(n)?4:We(n)?2:0;return z(n,e,t,i,s,o,r,!0)}function bm(n){return n?ad(n)||Sd(n)?vt({},n):n:null}function Dn(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Em(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&zd(c),ref:e&&e.ref?t&&r?Ue(r)?r.concat(fo(e)):[r,fo(e)]:fo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Jt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Dn(n.ssContent),ssFallback:n.ssFallback&&Dn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&xo(u,l.clone(u)),u}function ot(n=" ",e=0){return lt(Vo,null,n,e)}function Qt(n="",e=!1){return e?(Mt(),Bd(tn,null,n)):lt(tn,null,n)}function wn(n){return n==null||typeof n=="boolean"?lt(tn):Ue(n)?lt(Jt,null,n.slice()):typeof n=="object"?di(n):lt(Vo,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Dn(n)}function zl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ue(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),zl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Sd(e)?e._ctx=un:s===3&&un&&(un.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:un},t=32):(e=String(e),i&64?(t=16,e=[ot(e)]):t=8);n.children=e,n.shapeFlag|=t}function Em(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=El([e.class,i.class]));else if(s==="style")e.style=bl([e.style,i.style]);else if(Do(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ue(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function bn(n,e,t,i=null){hn(n,e,7,[t,i])}const Tm=xd();let wm=0;function Am(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Tm,r={uid:wm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new qf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ed(i,s),emitsOptions:gd(i,s),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Cp.bind(null,r),n.ce&&n.ce(r),r}let Pt=null;const Cm=()=>Pt||un;let Mo,rl;{const n=jh(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Mo=e("__VUE_INSTANCE_SETTERS__",t=>Pt=t),rl=e("__VUE_SSR_SETTERS__",t=>Go=t)}const vr=n=>{const e=Pt;return Mo(n),n.scope.on(),()=>{n.scope.off(),Mo(e)}},Ac=()=>{Pt&&Pt.scope.off(),Mo(null)};function Hd(n){return n.vnode.shapeFlag&4}let Go=!1;function Rm(n,e=!1){e&&rl(e);const{props:t,children:i}=n.vnode,s=Hd(n);nm(n,t,s,e),rm(n,i);const r=s?Pm(n,e):void 0;return e&&rl(!1),r}function Pm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,qp);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Dm(n):null,r=vr(n);bi();const o=vi(i,n,0,[n.props,s]);if(Ei(),r(),Vh(o)){if(o.then(Ac,Ac),e)return o.then(a=>{Cc(n,a,e)}).catch(a=>{Oo(a,n,0)});n.asyncDep=o}else Cc(n,o,e)}else kd(n,e)}function Cc(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=ud(e)),kd(n,t)}let Rc;function kd(n,e,t){const i=n.type;if(!n.render){if(!e&&Rc&&!i.render){const s=i.template||Ol(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=vt(vt({isCustomElement:r,delimiters:a},o),l);i.render=Rc(s,c)}}n.render=i.render||cn}{const s=vr(n);bi();try{$p(n)}finally{Ei(),s()}}}const Lm={get(n,e){return Xt(n,"get",""),n[e]}};function Dm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Lm),slots:n.slots,emit:n.emit,expose:e}}function Hl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ud(_p(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in sr)return sr[t](n)},has(e,t){return t in e||t in sr}})):n.proxy}function Im(n,e=!0){return We(n)?n.displayName||n.name:n.name||e&&n.__name}function Um(n){return We(n)&&"__vccOpts"in n}const Xi=(n,e)=>vp(n,e,Go);function Rn(n,e,t){const i=arguments.length;return i===2?rt(e)&&!Ue(e)?sl(e)?lt(n,null,[e]):lt(n,e):lt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&sl(t)&&(t=[t]),lt(n,e,t))}const Nm="3.4.29";/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Fm="http://www.w3.org/2000/svg",Om="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Pc=Gn&&Gn.createElement("template"),Bm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Gn.createElementNS(Fm,n):e==="mathml"?Gn.createElementNS(Om,n):t?Gn.createElement(n,{is:t}):Gn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Gn.createTextNode(n),createComment:n=>Gn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Pc.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=Pc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ni="transition",Gs="animation",mr=Symbol("_vtc"),Wn=(n,{slots:e})=>Rn(xm,zm(n),e);Wn.displayName="Transition";const Vd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Wn.props=vt({},Id,Vd);const Li=(n,e=[])=>{Ue(n)?n.forEach(t=>t(...e)):n&&n(...e)},Lc=n=>n?Ue(n)?n.some(e=>e.length>1):n.length>1:!1;function zm(n){const e={};for(const O in n)O in Vd||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,_=Hm(s),x=_&&_[0],p=_&&_[1],{onBeforeEnter:f,onEnter:S,onEnterCancelled:M,onLeave:w,onLeaveCancelled:F,onBeforeAppear:A=f,onAppear:C=S,onAppearCancelled:U=M}=e,b=(O,V,ie)=>{Di(O,V?u:a),Di(O,V?c:o),ie&&ie()},y=(O,V)=>{O._isLeaving=!1,Di(O,h),Di(O,m),Di(O,d),V&&V()},D=O=>(V,ie)=>{const re=O?C:S,Q=()=>b(V,O,ie);Li(re,[V,Q]),Dc(()=>{Di(V,O?l:r),ii(V,O?u:a),Lc(re)||Ic(V,i,x,Q)})};return vt(e,{onBeforeEnter(O){Li(f,[O]),ii(O,r),ii(O,o)},onBeforeAppear(O){Li(A,[O]),ii(O,l),ii(O,c)},onEnter:D(!1),onAppear:D(!0),onLeave(O,V){O._isLeaving=!0;const ie=()=>y(O,V);ii(O,h),ii(O,d),Gm(),Dc(()=>{O._isLeaving&&(Di(O,h),ii(O,m),Lc(w)||Ic(O,i,p,ie))}),Li(w,[O,ie])},onEnterCancelled(O){b(O,!1),Li(M,[O])},onAppearCancelled(O){b(O,!0),Li(U,[O])},onLeaveCancelled(O){y(O),Li(F,[O])}})}function Hm(n){if(n==null)return null;if(rt(n))return[aa(n.enter),aa(n.leave)];{const e=aa(n);return[e,e]}}function aa(n){return Hf(n)}function ii(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[mr]||(n[mr]=new Set)).add(e)}function Di(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[mr];t&&(t.delete(e),t.size||(n[mr]=void 0))}function Dc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let km=0;function Ic(n,e,t,i){const s=n._endId=++km,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Vm(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=m=>{m.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function Vm(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${ni}Delay`),r=i(`${ni}Duration`),o=Uc(s,r),a=i(`${Gs}Delay`),l=i(`${Gs}Duration`),c=Uc(a,l);let u=null,h=0,d=0;e===ni?o>0&&(u=ni,h=o,d=r.length):e===Gs?c>0&&(u=Gs,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?ni:Gs:null,d=u?u===ni?r.length:l.length:0);const m=u===ni&&/\b(transform|all)(,|$)/.test(i(`${ni}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:m}}function Uc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Nc(t)+Nc(n[i])))}function Nc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Gm(){return document.body.offsetHeight}function Wm(n,e,t){const i=n[mr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Fc=Symbol("_vod"),Xm=Symbol("_vsh"),jm=Symbol(""),Ym=/(^|;)\s*display\s*:/;function qm(n,e,t){const i=n.style,s=xt(t);let r=!1;if(t&&!s){if(e)if(xt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&po(i,a,"")}else for(const o in e)t[o]==null&&po(i,o,"");for(const o in t)o==="display"&&(r=!0),po(i,o,t[o])}else if(s){if(e!==t){const o=i[jm];o&&(t+=";"+o),i.cssText=t,r=Ym.test(t)}}else e&&n.removeAttribute("style");Fc in n&&(n[Fc]=r?i.display:"",n[Xm]&&(i.display="none"))}const Oc=/\s*!important$/;function po(n,e,t){if(Ue(t))t.forEach(i=>po(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=$m(n,e);Oc.test(t)?n.setProperty(Bs(i),t.replace(Oc,""),"important"):n[i]=t}}const Bc=["Webkit","Moz","ms"],la={};function $m(n,e){const t=la[e];if(t)return t;let i=Ln(e);if(i!=="filter"&&i in n)return la[e]=i;i=No(i);for(let s=0;s<Bc.length;s++){const r=Bc[s]+i;if(r in n)return la[e]=r}return e}const zc="http://www.w3.org/1999/xlink";function Hc(n,e,t,i,s,r=jf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(zc,e.slice(6,e.length)):n.setAttributeNS(zc,e,t):t==null||r&&!Yh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":String(t))}function Km(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t==null?"":String(t);(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Yh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Zm(n,e,t,i){n.addEventListener(e,t,i)}function Qm(n,e,t,i){n.removeEventListener(e,t,i)}const kc=Symbol("_vei");function Jm(n,e,t,i,s=null){const r=n[kc]||(n[kc]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=eg(e);if(i){const c=r[e]=ig(i,s);Zm(n,a,c,l)}else o&&(Qm(n,a,o,l),r[e]=void 0)}}const Vc=/(?:Once|Passive|Capture)$/;function eg(n){let e;if(Vc.test(n)){e={};let i;for(;i=n.match(Vc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Bs(n.slice(2)),e]}let ca=0;const tg=Promise.resolve(),ng=()=>ca||(tg.then(()=>ca=0),ca=Date.now());function ig(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;hn(sg(i,t.value),e,5,[i])};return t.value=n,t.attached=ng(),t}function sg(n,e){if(Ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Gc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,rg=(n,e,t,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?Wm(n,i,c):e==="style"?qm(n,t,i):Do(e)?Ml(e)||Jm(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):og(n,e,i,c))?(Km(n,e,i,r,o,a,l),(e==="value"||e==="checked"||e==="selected")&&Hc(n,e,i,c,o,e!=="value")):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Hc(n,e,i,c))};function og(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gc(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gc(e)&&xt(t)?!1:e in n}const ag=vt({patchProp:rg},Bm);let Wc;function lg(){return Wc||(Wc=am(ag))}const cg=(...n)=>{const e=lg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=hg(i);if(!s)return;const r=e._component;!We(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,ug(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ug(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function hg(n){return xt(n)?document.querySelector(n):n}const dg="/marsinplace/video/scrollWeb.webm",fg="/marsinplace/video/clickWeb.webm";/**
 * Vue 3 Carousel 0.3.4
 * (c) 2024
 * @license MIT
 */const wt={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Xc={itemsToShow:{default:wt.itemsToShow,type:Number},itemsToScroll:{default:wt.itemsToScroll,type:Number},wrapAround:{default:wt.wrapAround,type:Boolean},throttle:{default:wt.throttle,type:Number},snapAlign:{default:wt.snapAlign,validator(n){return["start","end","center","center-even","center-odd"].includes(n)}},transition:{default:wt.transition,type:Number},breakpoints:{default:wt.breakpoints,type:Object},autoplay:{default:wt.autoplay,type:Number},pauseAutoplayOnHover:{default:wt.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:wt.mouseDrag,type:Boolean},touchDrag:{default:wt.touchDrag,type:Boolean},dir:{default:wt.dir,validator(n){return["rtl","ltr"].includes(n)}},i18n:{default:wt.i18n,type:Object},settings:{default(){return{}},type:Object}};function pg({config:n,slidesCount:e}){const{snapAlign:t,wrapAround:i,itemsToShow:s=1}=n;if(i)return Math.max(e-1,0);let r;switch(t){case"start":r=e-s;break;case"end":r=e-1;break;case"center":case"center-odd":r=e-Math.ceil((s-.5)/2);break;case"center-even":r=e-Math.ceil(s/2);break;default:r=0;break}return Math.max(r,0)}function mg({config:n,slidesCount:e}){const{wrapAround:t,snapAlign:i,itemsToShow:s=1}=n;let r=0;if(t||s>e)return r;switch(i){case"start":r=0;break;case"end":r=s-1;break;case"center":case"center-odd":r=Math.floor((s-1)/2);break;case"center-even":r=Math.floor((s-2)/2);break;default:r=0;break}return r}function ol({val:n,max:e,min:t}){return e<t?n:Math.min(Math.max(n,t),e)}function gg({config:n,currentSlide:e,slidesCount:t}){const{snapAlign:i,wrapAround:s,itemsToShow:r=1}=n;let o=e;switch(i){case"center":case"center-odd":o-=(r-1)/2;break;case"center-even":o-=(r-2)/2;break;case"end":o-=r-1;break}return s?o:ol({val:o,max:t-r,min:0})}function Gd(n){return n?n.reduce((e,t)=>{var i;return t.type===Jt?[...e,...Gd(t.children)]:((i=t.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...e,t]:e},[]):[]}function yo({val:n,max:e,min:t=0}){return n>e?yo({val:n-(e+1),max:e,min:t}):n<t?yo({val:n+(e+1),max:e,min:t}):n}function _g(n,e){let t;return e?function(...i){const s=this;t||(n.apply(s,i),t=!0,setTimeout(()=>t=!1,e))}:n}function vg(n,e){let t;return function(...i){t&&clearTimeout(t),t=setTimeout(()=>{n(...i),t=null},e)}}function Wd(n="",e={}){return Object.entries(e).reduce((t,[i,s])=>t.replace(`{${i}}`,String(s)),n)}var xg=Fl({name:"ARIA",setup(){const n=Ft("config",qn(Object.assign({},wt))),e=Ft("currentSlide",_t(0)),t=Ft("slidesCount",_t(0));return()=>Rn("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Wd(n.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:t.value}))}}),Mg=Fl({name:"Carousel",props:Xc,setup(n,{slots:e,emit:t,expose:i}){var s;const r=_t(null),o=_t([]),a=_t(0),l=_t(0),c=qn(Object.assign({},wt));let u=Object.assign({},wt),h;const d=_t((s=n.modelValue)!==null&&s!==void 0?s:0),m=_t(0),_=_t(0),x=_t(0),p=_t(0);let f,S;Tn("config",c),Tn("slidesCount",l),Tn("currentSlide",d),Tn("maxSlide",x),Tn("minSlide",p),Tn("slideWidth",a);function M(){h=Object.assign({},n.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),n),{i18n:Object.assign(Object.assign({},u.i18n),n.i18n),breakpoints:void 0}),F(u)}function w(){if(!h||!Object.keys(h).length)return;const P=Object.keys(h).map(W=>Number(W)).sort((W,Y)=>+Y-+W);let N=Object.assign({},u);P.some(W=>{const Y=window.matchMedia(`(min-width: ${W}px)`).matches;return Y&&(N=Object.assign(Object.assign({},N),h[W])),Y}),F(N)}function F(P){Object.entries(P).forEach(([N,W])=>c[N]=W)}const A=vg(()=>{w(),U(),C()},16);function C(){if(!r.value)return;const P=r.value.getBoundingClientRect();a.value=P.width/c.itemsToShow}function U(){l.value<=0||(_.value=Math.ceil((l.value-1)/2),x.value=pg({config:c,slidesCount:l.value}),p.value=mg({config:c,slidesCount:l.value}),c.wrapAround||(d.value=ol({val:d.value,max:x.value,min:p.value})))}Ul(()=>{dd(()=>C()),setTimeout(()=>C(),1e3),w(),Me(),window.addEventListener("resize",A,{passive:!0}),t("init")}),Nl(()=>{S&&clearTimeout(S),f&&clearInterval(f),window.removeEventListener("resize",A,{passive:!0})});let b=!1;const y={x:0,y:0},D={x:0,y:0},O=qn({x:0,y:0}),V=_t(!1),ie=_t(!1),re=()=>{V.value=!0},Q=()=>{V.value=!1};function ne(P){["INPUT","TEXTAREA","SELECT"].includes(P.target.tagName)||(b=P.type==="touchstart",b||P.preventDefault(),!(!b&&P.button!==0||Ce.value)&&(y.x=b?P.touches[0].clientX:P.clientX,y.y=b?P.touches[0].clientY:P.clientY,document.addEventListener(b?"touchmove":"mousemove",j,!0),document.addEventListener(b?"touchend":"mouseup",me,!0)))}const j=_g(P=>{ie.value=!0,D.x=b?P.touches[0].clientX:P.clientX,D.y=b?P.touches[0].clientY:P.clientY;const N=D.x-y.x,W=D.y-y.y;O.y=W,O.x=N},c.throttle);function me(){const P=c.dir==="rtl"?-1:1,N=Math.sign(O.x)*.4,W=Math.round(O.x/a.value+N)*P;if(W&&!b){const Y=te=>{window.removeEventListener("click",Y,!0)};window.addEventListener("click",Y,!0)}Ge(d.value-W),O.x=0,O.y=0,ie.value=!1,document.removeEventListener(b?"touchmove":"mousemove",j,!0),document.removeEventListener(b?"touchend":"mouseup",me,!0)}function Me(){!c.autoplay||c.autoplay<=0||(f=setInterval(()=>{c.pauseAutoplayOnHover&&V.value||se()},c.autoplay))}function ye(){f&&(clearInterval(f),f=null),Me()}const Ce=_t(!1);function Ge(P){const N=c.wrapAround?P:ol({val:P,max:x.value,min:p.value});d.value===N||Ce.value||(t("slide-start",{slidingToIndex:P,currentSlideIndex:d.value,prevSlideIndex:m.value,slidesCount:l.value}),Ce.value=!0,m.value=d.value,d.value=N,S=setTimeout(()=>{if(c.wrapAround){const W=yo({val:N,max:x.value,min:0});W!==d.value&&(d.value=W,t("loop",{currentSlideIndex:d.value,slidingToIndex:P}))}t("update:modelValue",d.value),t("slide-end",{currentSlideIndex:d.value,prevSlideIndex:m.value,slidesCount:l.value}),Ce.value=!1,ye()},c.transition))}function se(){Ge(d.value+c.itemsToScroll)}function de(){Ge(d.value-c.itemsToScroll)}const _e={slideTo:Ge,next:se,prev:de};Tn("nav",_e),Tn("isSliding",Ce);const pe=Xi(()=>gg({config:c,currentSlide:d.value,slidesCount:l.value}));Tn("slidesToScroll",pe);const Oe=Xi(()=>{const P=c.dir==="rtl"?-1:1,N=pe.value*a.value*P;return{transform:`translateX(${O.x-N}px)`,transition:`${Ce.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${l.value*a.value}px`:"",width:"100%"}});function Ie(){M(),w(),U(),C(),ye()}Object.keys(Xc).forEach(P=>{["modelValue"].includes(P)||As(()=>n[P],Ie)}),As(()=>n.modelValue,P=>{P!==d.value&&Ge(Number(P))}),As(l,U),t("before-init"),M();const Be={config:c,slidesCount:l,slideWidth:a,next:se,prev:de,slideTo:Ge,currentSlide:d,maxSlide:x,minSlide:p,middleSlide:_};i({updateBreakpointsConfigs:w,updateSlidesData:U,updateSlideWidth:C,initDefaultConfigs:M,restartCarousel:Ie,slideTo:Ge,next:se,prev:de,nav:_e,data:Be});const I=e.default||e.slides,Ve=e.addons,R=qn(Be);return()=>{const P=Gd(I==null?void 0:I(R)),N=(Ve==null?void 0:Ve(R))||[];P.forEach((ce,E)=>ce.props.index=E);let W=P;if(c.wrapAround){const ce=P.map((g,L)=>Dn(g,{index:-P.length+L,isClone:!0,key:`clone-before-${L}`})),E=P.map((g,L)=>Dn(g,{index:P.length+L,isClone:!0,key:`clone-after-${L}`}));W=[...ce,...P,...E]}o.value=P,l.value=Math.max(P.length,1);const Y=Rn("ol",{class:"carousel__track",style:Oe.value,onMousedownCapture:c.mouseDrag?ne:null,onTouchstartPassiveCapture:c.touchDrag?ne:null},W),te=Rn("div",{class:"carousel__viewport"},Y);return Rn("section",{ref:r,class:{carousel:!0,"is-sliding":Ce.value,"is-dragging":ie.value,"is-hover":V.value,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":c.i18n.ariaGallery,tabindex:"0",onMouseenter:re,onMouseleave:Q},[te,N,Rn(xg)])}}}),jc;(function(n){n.arrowUp="arrowUp",n.arrowDown="arrowDown",n.arrowRight="arrowRight",n.arrowLeft="arrowLeft"})(jc||(jc={}));const yg=()=>{const n=Ft("config",qn(Object.assign({},wt))),e=Ft("maxSlide",_t(1)),t=Ft("minSlide",_t(1)),i=Ft("currentSlide",_t(1)),s=Ft("nav",{}),r=a=>yo({val:i.value,max:e.value,min:0})===a,o=[];for(let a=t.value;a<e.value+1;a++){const l=Rn("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(a)},"aria-label":Wd(n.i18n.ariaNavigateToSlide,{slideNumber:a+1}),onClick:()=>s.slideTo(a)}),c=Rn("li",{class:"carousel__pagination-item",key:a},l);o.push(c)}return Rn("ol",{class:"carousel__pagination"},o)};var Sg=Fl({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(n,{slots:e}){const t=Ft("config",qn(Object.assign({},wt))),i=Ft("currentSlide",_t(0)),s=Ft("slidesToScroll",_t(0)),r=Ft("isSliding",_t(!1)),o=Xi(()=>n.index===i.value),a=Xi(()=>n.index===i.value-1),l=Xi(()=>n.index===i.value+1),c=Xi(()=>{const u=Math.floor(s.value),h=Math.ceil(s.value+t.itemsToShow-1);return n.index>=u&&n.index<=h});return()=>{var u;return Rn("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":n.isClone,"carousel__slide--visible":c.value,"carousel__slide--active":o.value,"carousel__slide--prev":a.value,"carousel__slide--next":l.value,"carousel__slide--sliding":r.value},"aria-hidden":!c.value},(u=e.default)===null||u===void 0?void 0:u.call(e,{isActive:o.value,isClone:n.isClone,isPrev:a.value,isNext:l.value,isSliding:r.value,isVisible:c.value}))}}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="165",Ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bg=0,Yc=1,Eg=2,Xd=1,jd=2,Vn=3,yi=0,Wt=1,an=2,$n=0,Cs=1,al=2,qc=3,$c=4,Tg=5,Gi=100,wg=101,Ag=102,Cg=103,Rg=104,Pg=200,Lg=201,Dg=202,Ig=203,ll=204,cl=205,Ug=206,Ng=207,Fg=208,Og=209,Bg=210,zg=211,Hg=212,kg=213,Vg=214,Gg=0,Wg=1,Xg=2,So=3,jg=4,Yg=5,qg=6,$g=7,Vl=0,Kg=1,Zg=2,xi=0,Yd=1,qd=2,$d=3,Gl=4,Qg=5,Kd=6,Zd=7,Qd=300,Ds=301,$i=302,ul=303,hl=304,Wo=306,dl=1e3,Xn=1001,fl=1002,Gt=1003,Jg=1004,Ir=1005,ln=1006,ua=1007,ji=1008,Si=1009,e_=1010,t_=1011,bo=1012,Jd=1013,Is=1014,gi=1015,zs=1016,ef=1017,tf=1018,Us=1020,n_=35902,i_=1021,s_=1022,Pn=1023,r_=1024,o_=1025,Rs=1026,Ns=1027,a_=1028,nf=1029,l_=1030,sf=1031,rf=1033,ha=33776,da=33777,fa=33778,pa=33779,Kc=35840,Zc=35841,Qc=35842,Jc=35843,eu=36196,tu=37492,nu=37496,iu=37808,su=37809,ru=37810,ou=37811,au=37812,lu=37813,cu=37814,uu=37815,hu=37816,du=37817,fu=37818,pu=37819,mu=37820,gu=37821,ma=36492,_u=36494,vu=36495,c_=36283,xu=36284,Mu=36285,yu=36286,u_=3200,h_=3201,of=0,d_=1,mi="",xn="srgb",Ti="srgb-linear",Wl="display-p3",Xo="display-p3-linear",Eo="linear",it="srgb",To="rec709",wo="p3",ts=7680,Su=519,f_=512,p_=513,m_=514,af=515,g_=516,__=517,v_=518,x_=519,pl=35044,bu="300 es",jn=2e3,Ao=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eu=1234567;const ar=Math.PI/180,gr=180/Math.PI;function Kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function Xl(n,e){return(n%e+e)%e}function M_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function y_(n,e,t){return n!==e?(t-n)/(e-n):0}function lr(n,e,t){return(1-t)*n+t*e}function S_(n,e,t,i){return lr(n,e,1-Math.exp(-t*i))}function b_(n,e=1){return e-Math.abs(Xl(n,e*2)-e)}function E_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function T_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function w_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function A_(n,e){return n+Math.random()*(e-n)}function C_(n){return n*(.5-Math.random())}function R_(n){n!==void 0&&(Eu=n);let e=Eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P_(n){return n*ar}function L_(n){return n*gr}function D_(n){return(n&n-1)===0&&n!==0}function I_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function U_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function N_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),m=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const F_={DEG2RAD:ar,RAD2DEG:gr,generateUUID:Kn,clamp:Ut,euclideanModulo:Xl,mapLinear:M_,inverseLerp:y_,lerp:lr,damp:S_,pingpong:b_,smoothstep:E_,smootherstep:T_,randInt:w_,randFloat:A_,randFloatSpread:C_,seededRandom:R_,degToRad:P_,radToDeg:L_,isPowerOfTwo:D_,ceilPowerOfTwo:I_,floorPowerOfTwo:U_,setQuaternionFromProperEuler:N_,normalize:tt,denormalize:Mn};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,s,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],_=i[8],x=s[0],p=s[3],f=s[6],S=s[1],M=s[4],w=s[7],F=s[2],A=s[5],C=s[8];return r[0]=o*x+a*S+l*F,r[3]=o*p+a*M+l*A,r[6]=o*f+a*w+l*C,r[1]=c*x+u*S+h*F,r[4]=c*p+u*M+h*A,r[7]=c*f+u*w+h*C,r[2]=d*x+m*S+_*F,r[5]=d*p+m*M+_*A,r[8]=d*f+m*w+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,m=c*r-o*l,_=t*h+i*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new je;function lf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function O_(){const n=_r("canvas");return n.style.display="block",n}const Tu={};function jl(n){n in Tu||(Tu[n]=!0,console.warn(n))}function B_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const wu=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Au=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ur={[Ti]:{transfer:Eo,primaries:To,toReference:n=>n,fromReference:n=>n},[xn]:{transfer:it,primaries:To,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Xo]:{transfer:Eo,primaries:wo,toReference:n=>n.applyMatrix3(Au),fromReference:n=>n.applyMatrix3(wu)},[Wl]:{transfer:it,primaries:wo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Au),fromReference:n=>n.applyMatrix3(wu).convertLinearToSRGB()}},z_=new Set([Ti,Xo]),Je={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!z_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ur[e].toReference,s=Ur[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ur[n].primaries},getTransfer:function(n){return n===mi?Eo:Ur[n].transfer}};function Ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _a(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ns;class H_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=_r("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ps(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ps(t[i]/255)*255):t[i]=Ps(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k_=0;class cf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?H_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V_=0;class Ot extends Qi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Xn,s=Xn,r=ln,o=ji,a=Pn,l=Si,c=Ot.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Kn(),this.name="",this.source=new cf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dl:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dl:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Qd;Ot.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(m+1)/2,F=(f+1)/2,A=(u+d)/4,C=(h+x)/4,U=(_+p)/4;return M>w&&M>F?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=C/i):w>F?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=A/s,r=U/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=C/r,s=U/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-x)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G_ extends Qi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ot(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends G_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class uf extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W_ extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==d||c!==m||u!==_){let p=1-a;const f=l*d+c*m+u*_+h*x,S=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const F=Math.sqrt(M),A=Math.atan2(F,f*S);p=Math.sin(p*A)/F,a=Math.sin(a*A)/F}const w=a*S;if(l=l*p+d*w,c=c*p+m*w,u=u*p+_*w,h=h*p+x*w,p===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=F,c*=F,u*=F,h*=F}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*m-c*d,e[t+1]=l*_+u*d+c*h-a*m,e[t+2]=c*_+u*m+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new B,Cu=new Ki;class xr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Fr.subVectors(this.max,Ws),is.subVectors(e.a,Ws),ss.subVectors(e.b,Ws),rs.subVectors(e.c,Ws),si.subVectors(ss,is),ri.subVectors(rs,ss),Ii.subVectors(is,rs);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ii.z,Ii.y,si.z,0,-si.x,ri.z,0,-ri.x,Ii.z,0,-Ii.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ii.y,Ii.x,0];return!Ma(t,is,ss,rs,Fr)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,is,ss,rs,Fr))?!1:(Or.crossVectors(si,ri),t=[Or.x,Or.y,Or.z],Ma(t,is,ss,rs,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new B,new B,new B,new B,new B,new B,new B,new B],pn=new B,Nr=new xr,is=new B,ss=new B,rs=new B,si=new B,ri=new B,Ii=new B,Ws=new B,Fr=new B,Or=new B,Ui=new B;function Ma(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ui.fromArray(n,r);const a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const X_=new xr,Xs=new B,ya=new B;class Mr{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):X_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Xs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(ya)),this.expandByPoint(Xs.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new B,Sa=new B,Br=new B,oi=new B,ba=new B,zr=new B,Ea=new B;class yr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Sa.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Sa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Br),a=oi.dot(this.direction),l=-oi.dot(Br),c=oi.lengthSq(),u=Math.abs(1-o*o);let h,d,m,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Sa).addScaledVector(Br,d),m}intersectSphere(e,t){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),s=On.dot(On)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,s,r){ba.subVectors(t,e),zr.subVectors(i,e),Ea.crossVectors(ba,zr);let o=this.direction.dot(Ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(zr.crossVectors(oi,zr));if(l<0)return null;const c=a*this.direction.dot(ba.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(Ea);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,s,r,o,a,l,c,u,h,d,m,_,x,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,m,_,x,p)}set(e,t,i,s,r,o,a,l,c,u,h,d,m,_,x,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,_=c*u,x=c*h;t[0]=d+x*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,_=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,m=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j_,e,Y_)}lookAt(e,t,i){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ai.crossVectors(i,Kt),ai.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ai.crossVectors(i,Kt)),ai.normalize(),Hr.crossVectors(Kt,ai),s[0]=ai.x,s[4]=Hr.x,s[8]=Kt.x,s[1]=ai.y,s[5]=Hr.y,s[9]=Kt.y,s[2]=ai.z,s[6]=Hr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],_=i[2],x=i[6],p=i[10],f=i[14],S=i[3],M=i[7],w=i[11],F=i[15],A=s[0],C=s[4],U=s[8],b=s[12],y=s[1],D=s[5],O=s[9],V=s[13],ie=s[2],re=s[6],Q=s[10],ne=s[14],j=s[3],me=s[7],Me=s[11],ye=s[15];return r[0]=o*A+a*y+l*ie+c*j,r[4]=o*C+a*D+l*re+c*me,r[8]=o*U+a*O+l*Q+c*Me,r[12]=o*b+a*V+l*ne+c*ye,r[1]=u*A+h*y+d*ie+m*j,r[5]=u*C+h*D+d*re+m*me,r[9]=u*U+h*O+d*Q+m*Me,r[13]=u*b+h*V+d*ne+m*ye,r[2]=_*A+x*y+p*ie+f*j,r[6]=_*C+x*D+p*re+f*me,r[10]=_*U+x*O+p*Q+f*Me,r[14]=_*b+x*V+p*ne+f*ye,r[3]=S*A+M*y+w*ie+F*j,r[7]=S*C+M*D+w*re+F*me,r[11]=S*U+M*O+w*Q+F*Me,r[15]=S*b+M*V+w*ne+F*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],x=e[7],p=e[11],f=e[15];return _*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*m-i*l*m)+x*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+p*(+t*c*h-t*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],x=e[13],p=e[14],f=e[15],S=h*p*c-x*d*c+x*l*m-a*p*m-h*l*f+a*d*f,M=_*d*c-u*p*c-_*l*m+o*p*m+u*l*f-o*d*f,w=u*x*c-_*h*c+_*a*m-o*x*m-u*a*f+o*h*f,F=_*h*l-u*x*l-_*a*d+o*x*d+u*a*p-o*h*p,A=t*S+i*M+s*w+r*F;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=S*C,e[1]=(x*d*r-h*p*r-x*s*m+i*p*m+h*s*f-i*d*f)*C,e[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*f+i*l*f)*C,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*m-i*l*m)*C,e[4]=M*C,e[5]=(u*p*r-_*d*r+_*s*m-t*p*m-u*s*f+t*d*f)*C,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*f-t*l*f)*C,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*m+t*l*m)*C,e[8]=w*C,e[9]=(_*h*r-u*x*r-_*i*m+t*x*m+u*i*f-t*h*f)*C,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*f+t*a*f)*C,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*m-t*a*m)*C,e[12]=F*C,e[13]=(u*x*s-_*h*s+_*i*d-t*x*d-u*i*p+t*h*p)*C,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*p-t*a*p)*C,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,m=r*u,_=r*h,x=o*u,p=o*h,f=a*h,S=l*c,M=l*u,w=l*h,F=i.x,A=i.y,C=i.z;return s[0]=(1-(x+f))*F,s[1]=(m+w)*F,s[2]=(_-M)*F,s[3]=0,s[4]=(m-w)*A,s[5]=(1-(d+f))*A,s[6]=(p+S)*A,s[7]=0,s[8]=(_+M)*C,s[9]=(p-S)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=os.set(s[0],s[1],s[2]).length();const o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mn.copy(this);const c=1/r,u=1/o,h=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=jn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let m,_;if(a===jn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ao)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=jn){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,m=(i+s)*u;let _,x;if(a===jn)_=(o+r)*h,x=-2*h;else if(a===Ao)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const os=new B,mn=new st,j_=new B(0,0,0),Y_=new B(1,1,1),ai=new B,Hr=new B,Kt=new B,Ru=new st,Pu=new Ki;class In{constructor(e=0,t=0,i=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q_=0;const Lu=new B,as=new Ki,Bn=new st,kr=new B,js=new B,$_=new B,K_=new Ki,Du=new B(1,0,0),Iu=new B(0,1,0),Uu=new B(0,0,1),Nu={type:"added"},Z_={type:"removed"},ls={type:"childadded",child:null},Ta={type:"childremoved",child:null};class yt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new B,t=new In,i=new Ki,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new je}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kr.copy(e):kr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(js,kr,this.up):Bn.lookAt(kr,js,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Bn),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nu),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Z_),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nu),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,K_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}yt.DEFAULT_UP=new B(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new B,zn=new B,wa=new B,Hn=new B,cs=new B,us=new B,Fu=new B,Aa=new B,Ca=new B,Ra=new B;class yn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gn.subVectors(e,t),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gn.subVectors(s,t),zn.subVectors(i,t),wa.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(zn),l=gn.dot(wa),c=zn.dot(zn),u=zn.dot(wa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static isFrontFacing(e,t,i,s){return gn.subVectors(i,t),zn.subVectors(e,t),gn.cross(zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),gn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;cs.subVectors(s,i),us.subVectors(r,i),Aa.subVectors(e,i);const l=cs.dot(Aa),c=us.dot(Aa);if(l<=0&&c<=0)return t.copy(i);Ca.subVectors(e,s);const u=cs.dot(Ca),h=us.dot(Ca);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(cs,o);Ra.subVectors(e,r);const m=cs.dot(Ra),_=us.dot(Ra);if(_>=0&&m<=_)return t.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(us,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return Fu.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(Fu,a);const f=1/(p+x+d);return o=x*f,a=d*f,t.copy(i).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function Pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=Xl(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Pa(o,r,e+1/3),this.g=Pa(o,r,e),this.b=Pa(o,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=xn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const i=hf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Je.fromWorkingColorSpace(It.copy(this),e),Math.round(Ut(It.r*255,0,255))*65536+Math.round(Ut(It.g*255,0,255))*256+Math.round(Ut(It.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(It.copy(this),t);const i=It.r,s=It.g,r=It.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=xn){Je.fromWorkingColorSpace(It.copy(this),e);const t=It.r,i=It.g,s=It.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Vr);const i=lr(li.h,Vr.h,t),s=lr(li.s,Vr.s,t),r=lr(li.l,Vr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ye;Ye.NAMES=hf;let Q_=0;class Un extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Cs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ll&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Su&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sr extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new B,Gr=new we;class dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return jl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}}class df extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ff extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ct extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let J_=0;const rn=new st,La=new yt,hs=new B,Zt=new xr,Ys=new xr,Tt=new B;class Lt extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lf(e)?ff:df)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(Zt.min,Ys.min),Zt.expandByPoint(Tt),Tt.addVectors(Zt.max,Ys.max),Zt.expandByPoint(Tt)):(Zt.expandByPoint(Ys.min),Zt.expandByPoint(Ys.max))}Zt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Tt.add(hs)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new B,l[U]=new B;const c=new B,u=new B,h=new B,d=new we,m=new we,_=new we,x=new B,p=new B;function f(U,b,y){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),d.fromBufferAttribute(r,U),m.fromBufferAttribute(r,b),_.fromBufferAttribute(r,y),u.sub(c),h.sub(c),m.sub(d),_.sub(d);const D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(D),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(D),a[U].add(x),a[b].add(x),a[y].add(x),l[U].add(p),l[b].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,b=S.length;U<b;++U){const y=S[U],D=y.start,O=y.count;for(let V=D,ie=D+O;V<ie;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new B,w=new B,F=new B,A=new B;function C(U){F.fromBufferAttribute(s,U),A.copy(F);const b=a[U];M.copy(b),M.sub(F.multiplyScalar(F.dot(b))).normalize(),w.crossVectors(A,b);const D=w.dot(l[U])<0?-1:1;o.setXYZW(U,M.x,M.y,M.z,D)}for(let U=0,b=S.length;U<b;++U){const y=S[U],D=y.start,O=y.count;for(let V=D,ie=D+O;V<ie;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let f=0;f<u;f++)d[_++]=c[m++]}return new dn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ou=new st,Ni=new yr,Wr=new Mr,Bu=new B,ds=new B,fs=new B,ps=new B,Da=new B,Xr=new B,jr=new we,Yr=new we,qr=new we,zu=new B,Hu=new B,ku=new B,$r=new B,Kr=new B;class Ct extends yt{constructor(e=new Lt,t=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Da.fromBufferAttribute(h,e),o?Xr.addScaledVector(Da,u):Xr.addScaledVector(Da.sub(t),u))}t.add(Xr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(Wr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Wr,Bu)===null||Ni.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Ou.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Ou),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],f=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,F=M;w<F;w+=3){const A=a.getX(w),C=a.getX(w+1),U=a.getX(w+2);s=Zr(this,f,e,i,c,u,h,A,C,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const S=a.getX(p),M=a.getX(p+1),w=a.getX(p+2);s=Zr(this,o,e,i,c,u,h,S,M,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],f=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,F=M;w<F;w+=3){const A=w,C=w+1,U=w+2;s=Zr(this,f,e,i,c,u,h,A,C,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const S=p,M=p+1,w=p+2;s=Zr(this,o,e,i,c,u,h,S,M,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function e0(n,e,t,i,s,r,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===yi,a),l===null)return null;Kr.copy(a),Kr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:n}}function Zr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ds),n.getVertexPosition(l,fs),n.getVertexPosition(c,ps);const u=e0(n,e,t,i,ds,fs,ps,$r);if(u){s&&(jr.fromBufferAttribute(s,a),Yr.fromBufferAttribute(s,l),qr.fromBufferAttribute(s,c),u.uv=yn.getInterpolation($r,ds,fs,ps,jr,Yr,qr,new we)),r&&(jr.fromBufferAttribute(r,a),Yr.fromBufferAttribute(r,l),qr.fromBufferAttribute(r,c),u.uv1=yn.getInterpolation($r,ds,fs,ps,jr,Yr,qr,new we)),o&&(zu.fromBufferAttribute(o,a),Hu.fromBufferAttribute(o,l),ku.fromBufferAttribute(o,c),u.normal=yn.getInterpolation($r,ds,fs,ps,zu,Hu,ku,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};yn.getNormal(ds,fs,ps,h.normal),u.face=h}return u}class Hs extends Lt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function _(x,p,f,S,M,w,F,A,C,U,b){const y=w/C,D=F/U,O=w/2,V=F/2,ie=A/2,re=C+1,Q=U+1;let ne=0,j=0;const me=new B;for(let Me=0;Me<Q;Me++){const ye=Me*D-V;for(let Ce=0;Ce<re;Ce++){const Ge=Ce*y-O;me[x]=Ge*S,me[p]=ye*M,me[f]=ie,c.push(me.x,me.y,me.z),me[x]=0,me[p]=0,me[f]=A>0?1:-1,u.push(me.x,me.y,me.z),h.push(Ce/C),h.push(1-Me/U),ne+=1}}for(let Me=0;Me<U;Me++)for(let ye=0;ye<C;ye++){const Ce=d+ye+re*Me,Ge=d+ye+re*(Me+1),se=d+(ye+1)+re*(Me+1),de=d+(ye+1)+re*Me;l.push(Ce,Ge,de),l.push(Ge,se,de),j+=6}a.addGroup(m,j,b),m+=j,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=Fs(n[t]);for(const s in i)e[s]=i[s]}return e}function t0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const jo={clone:Fs,merge:kt};var n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mf extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new B,Vu=new we,Gu=new we;class en extends mf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Vu,Gu),t.subVectors(Gu,Vu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class s0 extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(ms,gs,e,t);s.layers=this.layers,this.add(s);const r=new en(ms,gs,e,t);r.layers=this.layers,this.add(r);const o=new en(ms,gs,e,t);o.layers=this.layers,this.add(o);const a=new en(ms,gs,e,t);a.layers=this.layers,this.add(a);const l=new en(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new en(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ql extends Ot{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r0 extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ql(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hs(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:$n});r.uniforms.tEquirect.value=t;const o=new Ct(s,r),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=ln),new s0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ia=new B,o0=new B,a0=new je;class fi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ia.subVectors(i,t).cross(o0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ia),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||a0.getNormalMatrix(e),s=this.coplanarPoint(Ia).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Mr,Qr=new B;class $l{constructor(e=new fi,t=new fi,i=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],m=s[8],_=s[9],x=s[10],p=s[11],f=s[12],S=s[13],M=s[14],w=s[15];if(i[0].setComponents(l-r,d-c,p-m,w-f).normalize(),i[1].setComponents(l+r,d+c,p+m,w+f).normalize(),i[2].setComponents(l+o,d+u,p+_,w+S).normalize(),i[3].setComponents(l-o,d-u,p-_,w-S).normalize(),i[4].setComponents(l-a,d-h,p-x,w-M).normalize(),t===jn)i[5].setComponents(l+a,d+h,p+x,w+M).normalize();else if(t===Ao)i[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Qr.x=s.normal.x>0?e.max.x:e.min.x,Qr.y=s.normal.y>0?e.max.y:e.min.y,Qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function l0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let m=0,_=d.length;m<_;m++){const x=d[m];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Os extends Lt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,m=[],_=[],x=[],p=[];for(let f=0;f<u;f++){const S=f*d-o;for(let M=0;M<c;M++){const w=M*h-r;_.push(w,-S,0),x.push(0,0,1),p.push(M/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){const M=S+c*f,w=S+c*(f+1),F=S+1+c*(f+1),A=S+1+c*f;m.push(M,w,A),m.push(w,F,A)}this.setIndex(m),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.widthSegments,e.heightSegments)}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
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
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_0=`#ifdef USE_BATCHING
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
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,D0=`#define PI 3.141592653589793
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`
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
}`,k0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
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
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ev=`uniform bool receiveShadow;
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
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ov=`PhysicalMaterial material;
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
#endif`,av=`struct PhysicalMaterial {
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
}`,lv=`
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
#endif`,cv=`#if defined( RE_IndirectDiffuse )
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
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vv=`#if defined( USE_POINTS_UV )
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
#endif`,xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`#ifdef USE_MORPHTARGETS
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
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Av=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lv=`#ifdef USE_NORMALMAP
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
#endif`,Dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ov=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yv=`float getShadowMask() {
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
}`,qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zv=`#ifdef USE_SKINNING
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
#endif`,Qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,gx=`#define DISTANCE
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
}`,_x=`#define DISTANCE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,Ex=`#define LAMBERT
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
}`,Tx=`#define LAMBERT
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
}`,wx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,Cx=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Px=`#define PHONG
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
}`,Lx=`#define PHONG
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
}`,Dx=`#define STANDARD
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
}`,Ix=`#define STANDARD
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
}`,Ux=`#define TOON
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
}`,Nx=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,zx=`uniform vec3 color;
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
}`,Hx=`uniform float rotation;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:c0,alphahash_pars_fragment:u0,alphamap_fragment:h0,alphamap_pars_fragment:d0,alphatest_fragment:f0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:_0,batching_vertex:v0,begin_vertex:x0,beginnormal_vertex:M0,bsdfs:y0,iridescence_fragment:S0,bumpmap_pars_fragment:b0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:A0,color_fragment:C0,color_pars_fragment:R0,color_pars_vertex:P0,color_vertex:L0,common:D0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:U0,displacementmap_pars_vertex:N0,displacementmap_vertex:F0,emissivemap_fragment:O0,emissivemap_pars_fragment:B0,colorspace_fragment:z0,colorspace_pars_fragment:H0,envmap_fragment:k0,envmap_common_pars_fragment:V0,envmap_pars_fragment:G0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:tv,envmap_vertex:X0,fog_vertex:j0,fog_pars_vertex:Y0,fog_fragment:q0,fog_pars_fragment:$0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:Z0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:J0,lights_pars_begin:ev,lights_toon_fragment:nv,lights_toon_pars_fragment:iv,lights_phong_fragment:sv,lights_phong_pars_fragment:rv,lights_physical_fragment:ov,lights_physical_pars_fragment:av,lights_fragment_begin:lv,lights_fragment_maps:cv,lights_fragment_end:uv,logdepthbuf_fragment:hv,logdepthbuf_pars_fragment:dv,logdepthbuf_pars_vertex:fv,logdepthbuf_vertex:pv,map_fragment:mv,map_pars_fragment:gv,map_particle_fragment:_v,map_particle_pars_fragment:vv,metalnessmap_fragment:xv,metalnessmap_pars_fragment:Mv,morphinstance_vertex:yv,morphcolor_vertex:Sv,morphnormal_vertex:bv,morphtarget_pars_vertex:Ev,morphtarget_vertex:Tv,normal_fragment_begin:wv,normal_fragment_maps:Av,normal_pars_fragment:Cv,normal_pars_vertex:Rv,normal_vertex:Pv,normalmap_pars_fragment:Lv,clearcoat_normal_fragment_begin:Dv,clearcoat_normal_fragment_maps:Iv,clearcoat_pars_fragment:Uv,iridescence_pars_fragment:Nv,opaque_fragment:Fv,packing:Ov,premultiplied_alpha_fragment:Bv,project_vertex:zv,dithering_fragment:Hv,dithering_pars_fragment:kv,roughnessmap_fragment:Vv,roughnessmap_pars_fragment:Gv,shadowmap_pars_fragment:Wv,shadowmap_pars_vertex:Xv,shadowmap_vertex:jv,shadowmask_pars_fragment:Yv,skinbase_vertex:qv,skinning_pars_vertex:$v,skinning_vertex:Kv,skinnormal_vertex:Zv,specularmap_fragment:Qv,specularmap_pars_fragment:Jv,tonemapping_fragment:ex,tonemapping_pars_fragment:tx,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:sx,uv_pars_vertex:rx,uv_vertex:ox,worldpos_vertex:ax,background_vert:lx,background_frag:cx,backgroundCube_vert:ux,backgroundCube_frag:hx,cube_vert:dx,cube_frag:fx,depth_vert:px,depth_frag:mx,distanceRGBA_vert:gx,distanceRGBA_frag:_x,equirect_vert:vx,equirect_frag:xx,linedashed_vert:Mx,linedashed_frag:yx,meshbasic_vert:Sx,meshbasic_frag:bx,meshlambert_vert:Ex,meshlambert_frag:Tx,meshmatcap_vert:wx,meshmatcap_frag:Ax,meshnormal_vert:Cx,meshnormal_frag:Rx,meshphong_vert:Px,meshphong_frag:Lx,meshphysical_vert:Dx,meshphysical_frag:Ix,meshtoon_vert:Ux,meshtoon_frag:Nx,points_vert:Fx,points_frag:Ox,shadow_vert:Bx,shadow_frag:zx,sprite_vert:Hx,sprite_frag:kx},ve={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},An={basic:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:kt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:kt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:kt([ve.points,ve.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:kt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:kt([ve.common,ve.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:kt([ve.sprite,ve.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:kt([ve.common,ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:kt([ve.lights,ve.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};An.physical={uniforms:kt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Jr={r:0,b:0,g:0},Oi=new In,Vx=new st;function Gx(n,e,t,i,s,r,o){const a=new Ye(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function _(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function x(S){let M=!1;const w=_(S);w===null?f(a,l):w&&w.isColor&&(f(w,1),M=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,M){const w=_(M);w&&(w.isCubeTexture||w.mapping===Wo)?(u===void 0&&(u=new Ct(new Hs(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Fs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Oi.copy(M.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(Oi)),u.material.toneMapped=Je.getTransfer(w.colorSpace)!==it,(h!==w||d!==w.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,m=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ct(new Os(2,2),new fn({name:"BackgroundMaterial",uniforms:Fs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Je.getTransfer(w.colorSpace)!==it,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,m=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,M){S.getRGB(Jr,pf(n)),i.buffers.color.setClear(Jr.r,Jr.g,Jr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:x,addToRenderList:p}}function Wx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,D,O,V,ie){let re=!1;const Q=h(V,O,D);r!==Q&&(r=Q,c(r.object)),re=m(y,V,O,ie),re&&_(y,V,O,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,w(y,D,O,V),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,D,O){const V=O.wireframe===!0;let ie=i[y.id];ie===void 0&&(ie={},i[y.id]=ie);let re=ie[D.id];re===void 0&&(re={},ie[D.id]=re);let Q=re[V];return Q===void 0&&(Q=d(l()),re[V]=Q),Q}function d(y){const D=[],O=[],V=[];for(let ie=0;ie<t;ie++)D[ie]=0,O[ie]=0,V[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:V,object:y,attributes:{},index:null}}function m(y,D,O,V){const ie=r.attributes,re=D.attributes;let Q=0;const ne=O.getAttributes();for(const j in ne)if(ne[j].location>=0){const Me=ie[j];let ye=re[j];if(ye===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),Me===void 0||Me.attribute!==ye||ye&&Me.data!==ye.data)return!0;Q++}return r.attributesNum!==Q||r.index!==V}function _(y,D,O,V){const ie={},re=D.attributes;let Q=0;const ne=O.getAttributes();for(const j in ne)if(ne[j].location>=0){let Me=re[j];Me===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor));const ye={};ye.attribute=Me,Me&&Me.data&&(ye.data=Me.data),ie[j]=ye,Q++}r.attributes=ie,r.attributesNum=Q,r.index=V}function x(){const y=r.newAttributes;for(let D=0,O=y.length;D<O;D++)y[D]=0}function p(y){f(y,0)}function f(y,D){const O=r.newAttributes,V=r.enabledAttributes,ie=r.attributeDivisors;O[y]=1,V[y]===0&&(n.enableVertexAttribArray(y),V[y]=1),ie[y]!==D&&(n.vertexAttribDivisor(y,D),ie[y]=D)}function S(){const y=r.newAttributes,D=r.enabledAttributes;for(let O=0,V=D.length;O<V;O++)D[O]!==y[O]&&(n.disableVertexAttribArray(O),D[O]=0)}function M(y,D,O,V,ie,re,Q){Q===!0?n.vertexAttribIPointer(y,D,O,ie,re):n.vertexAttribPointer(y,D,O,V,ie,re)}function w(y,D,O,V){x();const ie=V.attributes,re=O.getAttributes(),Q=D.defaultAttributeValues;for(const ne in re){const j=re[ne];if(j.location>=0){let me=ie[ne];if(me===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),me!==void 0){const Me=me.normalized,ye=me.itemSize,Ce=e.get(me);if(Ce===void 0)continue;const Ge=Ce.buffer,se=Ce.type,de=Ce.bytesPerElement,_e=se===n.INT||se===n.UNSIGNED_INT||me.gpuType===Jd;if(me.isInterleavedBufferAttribute){const pe=me.data,Oe=pe.stride,Ie=me.offset;if(pe.isInstancedInterleavedBuffer){for(let Be=0;Be<j.locationSize;Be++)f(j.location+Be,pe.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Be=0;Be<j.locationSize;Be++)p(j.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Be=0;Be<j.locationSize;Be++)M(j.location+Be,ye/j.locationSize,se,Me,Oe*de,(Ie+ye/j.locationSize*Be)*de,_e)}else{if(me.isInstancedBufferAttribute){for(let pe=0;pe<j.locationSize;pe++)f(j.location+pe,me.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let pe=0;pe<j.locationSize;pe++)p(j.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let pe=0;pe<j.locationSize;pe++)M(j.location+pe,ye/j.locationSize,se,Me,ye*de,ye/j.locationSize*pe*de,_e)}}else if(Q!==void 0){const Me=Q[ne];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(j.location,Me);break;case 3:n.vertexAttrib3fv(j.location,Me);break;case 4:n.vertexAttrib4fv(j.location,Me);break;default:n.vertexAttrib1fv(j.location,Me)}}}}S()}function F(){U();for(const y in i){const D=i[y];for(const O in D){const V=D[O];for(const ie in V)u(V[ie].object),delete V[ie];delete D[O]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const O in D){const V=D[O];for(const ie in V)u(V[ie].object),delete V[ie];delete D[O]}delete i[y.id]}function C(y){for(const D in i){const O=i[D];if(O[y.id]===void 0)continue;const V=O[y.id];for(const ie in V)u(V[ie].object),delete V[ie];delete O[y.id]}}function U(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function Xx(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<h;m++)this.render(c[m],u[m]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,i,1)}}function l(c,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x];for(let x=0;x<d.length;x++)t.update(_,i,d[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Si&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gi&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:f,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:w,maxSamples:F}}function Yx(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new fi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const S=r?0:i,M=S*4;let w=f.clippingState||null;l.value=w,w=u(_,d,M,m);for(let F=0;F!==M;++F)w[F]=t[F];f.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,_){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const f=m+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,w=m;M!==x;++M,w+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function qx(n){let e=new WeakMap;function t(o,a){return a===ul?o.mapping=Ds:a===hl&&(o.mapping=$i),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ul||a===hl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new r0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Kl extends mf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bs=4,Wu=[.125,.215,.35,.446,.526,.582],Wi=20,Ua=new Kl,Xu=new Ye;let Na=null,Fa=0,Oa=0,Ba=!1;const zi=(1+Math.sqrt(5))/2,_s=1/zi,ju=[new B(-zi,_s,0),new B(zi,_s,0),new B(-_s,0,zi),new B(_s,0,zi),new B(0,zi,-_s),new B(0,zi,_s),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Fa,Oa),this._renderer.xr.enabled=Ba,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:zs,format:Pn,colorSpace:Ti,depthBuffer:!1},s=qu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$x(r)),this._blurMaterial=Kx(r,e,t)}return s}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,i,s){const a=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Xu),u.toneMapping=xi,u.autoClear=!1;const m=new Sr({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),_=new Ct(new Hs,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Xu),x=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const M=this._cubeSize;eo(s,S*M,f>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ds||e.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$u());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;eo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ju[(s-r-1)%ju.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ct(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Wi-1),x=r/_,p=isFinite(r)?1+Math.floor(u*x):Wi;p>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wi}`);const f=[];let S=0;for(let C=0;C<Wi;++C){const U=C/x,b=Math.exp(-U*U/2);f.push(b),C===0?S+=b:C<p&&(S+=2*b)}for(let C=0;C<f.length;C++)f[C]=f[C]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const w=this._sizeLods[s],F=3*w*(s>M-bs?s-M+bs:0),A=4*(this._cubeSize-w);eo(t,F,A,3*w,2*w),l.setRenderTarget(t),l.render(h,Ua)}}function $x(n){const e=[],t=[],i=[];let s=n;const r=n-bs+1+Wu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-bs?l=Wu[o-n+bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,x=3,p=2,f=1,S=new Float32Array(x*_*m),M=new Float32Array(p*_*m),w=new Float32Array(f*_*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,U=A>2?0:-1,b=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];S.set(b,x*_*A),M.set(d,p*_*A);const y=[A,A,A,A,A,A];w.set(y,f*_*A)}const F=new Lt;F.setAttribute("position",new dn(S,x)),F.setAttribute("uv",new dn(M,p)),F.setAttribute("faceIndex",new dn(w,f)),e.push(F),s>bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qu(n,e,t){const i=new Zn(n,e,t);return i.texture.mapping=Wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Kx(n,e,t){const i=new Float32Array(Wi),s=new B(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function $u(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ku(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}function Zx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ul||l===hl,u=l===Ds||l===$i;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Yu(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Yu(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Qx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&jl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Jx(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,f=x.length;p<f;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let x=0;if(m!==null){const S=m.array;x=m.version;for(let M=0,w=S.length;M<w;M+=3){const F=S[M+0],A=S[M+1],C=S[M+2];d.push(F,A,A,C,C,F)}}else if(_!==void 0){const S=_.array;x=_.version;for(let M=0,w=S.length/3-1;M<w;M+=3){const F=M+0,A=M+1,C=M+2;d.push(F,A,A,C,C,F)}}else return;const p=new(lf(d)?ff:df)(d,1);p.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function eM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),t.update(m,i,1)}function c(d,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,d*o,_),t.update(m,i,_))}function u(d,m,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<_;p++)this.render(d[p]/o,m[p]);else{x.multiDrawElementsWEBGL(i,m,0,r,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];t.update(p,i,1)}}function h(d,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,x,0,_);let f=0;for(let S=0;S<_;S++)f+=m[S];for(let S=0;S<x.length;S++)t.update(f,i,x[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function tM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function nM(n,e,t){const i=new WeakMap,s=new At;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),p===!0&&(w=3);let F=a.attributes.position.count*w,A=1;F>e.maxTextureSize&&(A=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const C=new Float32Array(F*A*4*h),U=new uf(C,F,A,h);U.type=gi,U.needsUpdate=!0;const b=w*4;for(let D=0;D<h;D++){const O=f[D],V=S[D],ie=M[D],re=F*A*4*D;for(let Q=0;Q<O.count;Q++){const ne=Q*b;_===!0&&(s.fromBufferAttribute(O,Q),C[re+ne+0]=s.x,C[re+ne+1]=s.y,C[re+ne+2]=s.z,C[re+ne+3]=0),x===!0&&(s.fromBufferAttribute(V,Q),C[re+ne+4]=s.x,C[re+ne+5]=s.y,C[re+ne+6]=s.z,C[re+ne+7]=0),p===!0&&(s.fromBufferAttribute(ie,Q),C[re+ne+8]=s.x,C[re+ne+9]=s.y,C[re+ne+10]=s.z,C[re+ne+11]=ie.itemSize===4?s.w:1)}}d={count:h,texture:U,size:new we(F,A)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function iM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class _f extends Ot{constructor(e,t,i,s,r,o,a,l,c,u=Rs){if(u!==Rs&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rs&&(i=Is),i===void 0&&u===Ns&&(i=Us),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vf=new Ot,xf=new _f(1,1);xf.compareFunction=af;const Mf=new uf,yf=new W_,Sf=new ql,Zu=[],Qu=[],Ju=new Float32Array(16),eh=new Float32Array(9),th=new Float32Array(4);function ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yo(n,e){let t=Qu[e];t===void 0&&(t=new Int32Array(e),Qu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function lM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;th.set(i),n.uniformMatrix2fv(this.addr,!1,th),bt(t,i)}}function cM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;eh.set(i),n.uniformMatrix3fv(this.addr,!1,eh),bt(t,i)}}function uM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Ju.set(i),n.uniformMatrix4fv(this.addr,!1,Ju),bt(t,i)}}function hM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function mM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function xM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?xf:vf;t.setTexture2D(e||r,s)}function MM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||yf,s)}function yM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Sf,s)}function SM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Mf,s)}function bM(n){switch(n){case 5126:return sM;case 35664:return rM;case 35665:return oM;case 35666:return aM;case 35674:return lM;case 35675:return cM;case 35676:return uM;case 5124:case 35670:return hM;case 35667:case 35671:return dM;case 35668:case 35672:return fM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return _M;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return SM}}function EM(n,e){n.uniform1fv(this.addr,e)}function TM(n,e){const t=ks(e,this.size,2);n.uniform2fv(this.addr,t)}function wM(n,e){const t=ks(e,this.size,3);n.uniform3fv(this.addr,t)}function AM(n,e){const t=ks(e,this.size,4);n.uniform4fv(this.addr,t)}function CM(n,e){const t=ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function RM(n,e){const t=ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function PM(n,e){const t=ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function LM(n,e){n.uniform1iv(this.addr,e)}function DM(n,e){n.uniform2iv(this.addr,e)}function IM(n,e){n.uniform3iv(this.addr,e)}function UM(n,e){n.uniform4iv(this.addr,e)}function NM(n,e){n.uniform1uiv(this.addr,e)}function FM(n,e){n.uniform2uiv(this.addr,e)}function OM(n,e){n.uniform3uiv(this.addr,e)}function BM(n,e){n.uniform4uiv(this.addr,e)}function zM(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);St(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||vf,r[o])}function HM(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);St(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yf,r[o])}function kM(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);St(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Sf,r[o])}function VM(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);St(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mf,r[o])}function GM(n){switch(n){case 5126:return EM;case 35664:return TM;case 35665:return wM;case 35666:return AM;case 35674:return CM;case 35675:return RM;case 35676:return PM;case 5124:case 35670:return LM;case 35667:case 35671:return DM;case 35668:case 35672:return IM;case 35669:case 35673:return UM;case 5125:return NM;case 36294:return FM;case 36295:return OM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return VM}}class WM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bM(t.type)}}class XM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GM(t.type)}}class jM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const za=/(\w+)(\])?(\[|\.)?/g;function nh(n,e){n.seq.push(e),n.map[e.id]=e}function YM(n,e,t){const i=n.name,s=i.length;for(za.lastIndex=0;;){const r=za.exec(i),o=za.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nh(t,c===void 0?new WM(a,n,e):new XM(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new jM(a),nh(t,h)),t=h}}}class mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);YM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ih(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qM=37297;let $M=0;function KM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ZM(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===wo&&t===To?i="LinearDisplayP3ToLinearSRGB":e===To&&t===wo&&(i="LinearSRGBToLinearDisplayP3"),n){case Ti:case Xo:return[i,"LinearTransferOETF"];case xn:case Wl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function sh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+KM(n.getShaderSource(e),o)}else return s}function QM(n,e){const t=ZM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function JM(n,e){let t;switch(e){case Yd:t="Linear";break;case qd:t="Reinhard";break;case $d:t="OptimizedCineon";break;case Gl:t="ACESFilmic";break;case Kd:t="AgX";break;case Zd:t="Neutral";break;case Qg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ey(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function ty(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ny(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Js(n){return n!==""}function rh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(n){return n.replace(iy,ry)}const sy=new Map;function ry(n,e){let t=Xe[e];if(t===void 0){const i=sy.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ml(t)}const oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(n){return n.replace(oy,ay)}function ay(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ly(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function cy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ds:case $i:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function hy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vl:e="ENVMAP_BLENDING_MULTIPLY";break;case Kg:e="ENVMAP_BLENDING_MIX";break;case Zg:e="ENVMAP_BLENDING_ADD";break}return e}function dy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fy(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ly(t),c=cy(t),u=uy(t),h=hy(t),d=dy(t),m=ey(t),_=ty(r),x=s.createProgram();let p,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Js).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Js).join(`
`),f.length>0&&(f+=`
`)):(p=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),f=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==xi?JM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,QM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=ml(o),o=rh(o,t),o=oh(o,t),a=ml(a),a=rh(a,t),a=oh(a,t),o=ah(o),a=ah(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=S+p+o,w=S+f+a,F=ih(s,s.VERTEX_SHADER,M),A=ih(s,s.FRAGMENT_SHADER,w);s.attachShader(x,F),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(D){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(F).trim(),ie=s.getShaderInfoLog(A).trim();let re=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,F,A);else{const ne=sh(s,F,"vertex"),j=sh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+ne+`
`+j)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||ie==="")&&(Q=!1);Q&&(D.diagnostics={runnable:re,programLog:O,vertexShader:{log:V,prefix:p},fragmentShader:{log:ie,prefix:f}})}s.deleteShader(F),s.deleteShader(A),U=new mo(s,x),b=ny(s,x)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,qM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$M++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=A,this}let py=0;class my{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gy(e),t.set(e,i)),i}}class gy{constructor(e){this.id=py++,this.code=e,this.usedTimes=0}}function _y(n,e,t,i,s,r,o){const a=new Yl,l=new my,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,y,D,O,V){const ie=O.fog,re=V.geometry,Q=b.isMeshStandardMaterial?O.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||Q),j=ne&&ne.mapping===Wo?ne.image.height:null,me=_[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const Me=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ye=Me!==void 0?Me.length:0;let Ce=0;re.morphAttributes.position!==void 0&&(Ce=1),re.morphAttributes.normal!==void 0&&(Ce=2),re.morphAttributes.color!==void 0&&(Ce=3);let Ge,se,de,_e;if(me){const Ke=An[me];Ge=Ke.vertexShader,se=Ke.fragmentShader}else Ge=b.vertexShader,se=b.fragmentShader,l.update(b),de=l.getVertexShaderID(b),_e=l.getFragmentShaderID(b);const pe=n.getRenderTarget(),Oe=V.isInstancedMesh===!0,Ie=V.isBatchedMesh===!0,Be=!!b.map,I=!!b.matcap,Ve=!!ne,R=!!b.aoMap,P=!!b.lightMap,N=!!b.bumpMap,W=!!b.normalMap,Y=!!b.displacementMap,te=!!b.emissiveMap,ce=!!b.metalnessMap,E=!!b.roughnessMap,g=b.anisotropy>0,L=b.clearcoat>0,k=b.dispersion>0,$=b.iridescence>0,q=b.sheen>0,ue=b.transmission>0,oe=g&&!!b.anisotropyMap,le=L&&!!b.clearcoatMap,xe=L&&!!b.clearcoatNormalMap,ae=L&&!!b.clearcoatRoughnessMap,Se=$&&!!b.iridescenceMap,ze=$&&!!b.iridescenceThicknessMap,Le=q&&!!b.sheenColorMap,ge=q&&!!b.sheenRoughnessMap,He=!!b.specularMap,Ae=!!b.specularColorMap,qe=!!b.specularIntensityMap,v=ue&&!!b.transmissionMap,J=ue&&!!b.thicknessMap,X=!!b.gradientMap,ee=!!b.alphaMap,he=b.alphaTest>0,Re=!!b.alphaHash,ke=!!b.extensions;let ut=xi;b.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ut=n.toneMapping);const ft={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:Ge,fragmentShader:se,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&V._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&V.instanceColor!==null,instancingMorph:Oe&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ti,alphaToCoverage:!!b.alphaToCoverage,map:Be,matcap:I,envMap:Ve,envMapMode:Ve&&ne.mapping,envMapCubeUVHeight:j,aoMap:R,lightMap:P,bumpMap:N,normalMap:W,displacementMap:d&&Y,emissiveMap:te,normalMapObjectSpace:W&&b.normalMapType===d_,normalMapTangentSpace:W&&b.normalMapType===of,metalnessMap:ce,roughnessMap:E,anisotropy:g,anisotropyMap:oe,clearcoat:L,clearcoatMap:le,clearcoatNormalMap:xe,clearcoatRoughnessMap:ae,dispersion:k,iridescence:$,iridescenceMap:Se,iridescenceThicknessMap:ze,sheen:q,sheenColorMap:Le,sheenRoughnessMap:ge,specularMap:He,specularColorMap:Ae,specularIntensityMap:qe,transmission:ue,transmissionMap:v,thicknessMap:J,gradientMap:X,opaque:b.transparent===!1&&b.blending===Cs&&b.alphaToCoverage===!1,alphaMap:ee,alphaTest:he,alphaHash:Re,combine:b.combine,mapUv:Be&&x(b.map.channel),aoMapUv:R&&x(b.aoMap.channel),lightMapUv:P&&x(b.lightMap.channel),bumpMapUv:N&&x(b.bumpMap.channel),normalMapUv:W&&x(b.normalMap.channel),displacementMapUv:Y&&x(b.displacementMap.channel),emissiveMapUv:te&&x(b.emissiveMap.channel),metalnessMapUv:ce&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:oe&&x(b.anisotropyMap.channel),clearcoatMapUv:le&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(b.sheenRoughnessMap.channel),specularMapUv:He&&x(b.specularMap.channel),specularColorMapUv:Ae&&x(b.specularColorMap.channel),specularIntensityMapUv:qe&&x(b.specularIntensityMap.channel),transmissionMapUv:v&&x(b.transmissionMap.channel),thicknessMapUv:J&&x(b.thicknessMap.channel),alphaMapUv:ee&&x(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(W||g),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!re.attributes.uv&&(Be||ee),fog:!!ie,useFog:b.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:Be&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===an,flipSided:b.side===Wt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ke&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function f(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)y.push(D),y.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(S(y,b),M(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),b.push(a.mask)}function w(b){const y=_[b.type];let D;if(y){const O=An[y];D=jo.clone(O.uniforms)}else D=b.uniforms;return D}function F(b,y){let D;for(let O=0,V=u.length;O<V;O++){const ie=u[O];if(ie.cacheKey===y){D=ie,++D.usedTimes;break}}return D===void 0&&(D=new fy(n,y,b,r),u.push(D)),D}function A(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:w,acquireProgram:F,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:U}}function vy(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function xy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ch(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,m,_,x,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=p),e++,f}function a(h,d,m,_,x,p){const f=o(h,d,m,_,x,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(h,d,m,_,x,p){const f=o(h,d,m,_,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||xy),i.length>1&&i.sort(d||ch),s.length>1&&s.sort(d||ch)}function u(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function My(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new uh,n.set(i,[o])):s>=r.length?(o=new uh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ye};break;case"SpotLight":t={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Sy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let by=0;function Ey(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ty(n){const e=new yy,t=Sy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new st,o=new st;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,_=0,x=0,p=0,f=0,S=0,M=0,w=0,F=0,A=0,C=0;c.sort(Ey);for(let b=0,y=c.length;b<y;b++){const D=c[b],O=D.color,V=D.intensity,ie=D.distance,re=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*V,h+=O.g*V,d+=O.b*V;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(D.sh.coefficients[Q],V);C++}else if(D.isDirectionalLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,j=t.get(D);j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=D.shadow.matrix,S++}i.directional[m]=Q,m++}else if(D.isSpotLight){const Q=e.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(O).multiplyScalar(V),Q.distance=ie,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,i.spot[x]=Q;const ne=D.shadow;if(D.map&&(i.spotLightMap[F]=D.map,F++,ne.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[x]=ne.matrix,D.castShadow){const j=t.get(D);j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,i.spotShadow[x]=j,i.spotShadowMap[x]=re,w++}x++}else if(D.isRectAreaLight){const Q=e.get(D);Q.color.copy(O).multiplyScalar(V),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=Q,p++}else if(D.isPointLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const ne=D.shadow,j=t.get(D);j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,j.shadowCameraNear=ne.camera.near,j.shadowCameraFar=ne.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=D.shadow.matrix,M++}i.point[_]=Q,_++}else if(D.isHemisphereLight){const Q=e.get(D);Q.skyColor.copy(D.color).multiplyScalar(V),Q.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[f]=Q,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==p||U.hemiLength!==f||U.numDirectionalShadows!==S||U.numPointShadows!==M||U.numSpotShadows!==w||U.numSpotMaps!==F||U.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+F-A,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,U.directionalLength=m,U.pointLength=_,U.spotLength=x,U.rectAreaLength=p,U.hemiLength=f,U.numDirectionalShadows=S,U.numPointShadows=M,U.numSpotShadows=w,U.numSpotMaps=F,U.numLightProbes=C,i.version=by++)}function l(c,u){let h=0,d=0,m=0,_=0,x=0;const p=u.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const M=c[f];if(M.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(M.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function hh(n){const e=new Ty(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wy(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new hh(n),e.set(s,[a])):r>=o.length?(a=new hh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Ay extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cy extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Py=`uniform sampler2D shadow_pass;
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
}`;function Ly(n,e,t){let i=new $l;const s=new we,r=new we,o=new At,a=new Ay({depthPacking:h_}),l=new Cy,c={},u=t.maxTextureSize,h={[yi]:Wt,[Wt]:yi,[an]:an},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Ry,fragmentShader:Py}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Lt;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ct(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xd;let f=this.type;this.render=function(A,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending($n),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=f!==Vn&&this.type===Vn,ie=f===Vn&&this.type!==Vn;for(let re=0,Q=A.length;re<Q;re++){const ne=A[re],j=ne.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const me=j.getFrameExtents();if(s.multiply(me),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,j.mapSize.y=r.y)),j.map===null||V===!0||ie===!0){const ye=this.type!==Vn?{minFilter:Gt,magFilter:Gt}:{};j.map!==null&&j.map.dispose(),j.map=new Zn(s.x,s.y,ye),j.map.texture.name=ne.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const Me=j.getViewportCount();for(let ye=0;ye<Me;ye++){const Ce=j.getViewport(ye);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),O.viewport(o),j.updateMatrices(ne,ye),i=j.getFrustum(),w(C,U,j.camera,ne,this.type)}j.isPointLightShadow!==!0&&this.type===Vn&&S(j,U),j.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(b,y,D)};function S(A,C){const U=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,U,d,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,U,m,x,null)}function M(A,C,U,b){let y=null;const D=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)y=D;else if(y=U.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=y.uuid,V=C.uuid;let ie=c[O];ie===void 0&&(ie={},c[O]=ie);let re=ie[V];re===void 0&&(re=y.clone(),ie[V]=re,C.addEventListener("dispose",F)),y=re}if(y.visible=C.visible,y.wireframe=C.wireframe,b===Vn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=n.properties.get(y);O.light=U}return y}function w(A,C,U,b,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Vn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const V=e.update(A),ie=A.material;if(Array.isArray(ie)){const re=V.groups;for(let Q=0,ne=re.length;Q<ne;Q++){const j=re[Q],me=ie[j.materialIndex];if(me&&me.visible){const Me=M(A,me,b,y);A.onBeforeShadow(n,A,C,U,V,Me,j),n.renderBufferDirect(U,null,V,Me,A,j),A.onAfterShadow(n,A,C,U,V,Me,j)}}}else if(ie.visible){const re=M(A,ie,b,y);A.onBeforeShadow(n,A,C,U,V,re,null),n.renderBufferDirect(U,null,V,re,A,null),A.onAfterShadow(n,A,C,U,V,re,null)}}const O=A.children;for(let V=0,ie=O.length;V<ie;V++)w(O[V],C,U,b,y)}function F(A){A.target.removeEventListener("dispose",F);for(const U in c){const b=c[U],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}function Dy(n){function e(){let v=!1;const J=new At;let X=null;const ee=new At(0,0,0,0);return{setMask:function(he){X!==he&&!v&&(n.colorMask(he,he,he,he),X=he)},setLocked:function(he){v=he},setClear:function(he,Re,ke,ut,ft){ft===!0&&(he*=ut,Re*=ut,ke*=ut),J.set(he,Re,ke,ut),ee.equals(J)===!1&&(n.clearColor(he,Re,ke,ut),ee.copy(J))},reset:function(){v=!1,X=null,ee.set(-1,0,0,0)}}}function t(){let v=!1,J=null,X=null,ee=null;return{setTest:function(he){he?_e(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(he){J!==he&&!v&&(n.depthMask(he),J=he)},setFunc:function(he){if(X!==he){switch(he){case Gg:n.depthFunc(n.NEVER);break;case Wg:n.depthFunc(n.ALWAYS);break;case Xg:n.depthFunc(n.LESS);break;case So:n.depthFunc(n.LEQUAL);break;case jg:n.depthFunc(n.EQUAL);break;case Yg:n.depthFunc(n.GEQUAL);break;case qg:n.depthFunc(n.GREATER);break;case $g:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=he}},setLocked:function(he){v=he},setClear:function(he){ee!==he&&(n.clearDepth(he),ee=he)},reset:function(){v=!1,J=null,X=null,ee=null}}}function i(){let v=!1,J=null,X=null,ee=null,he=null,Re=null,ke=null,ut=null,ft=null;return{setTest:function(Ke){v||(Ke?_e(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(Ke){J!==Ke&&!v&&(n.stencilMask(Ke),J=Ke)},setFunc:function(Ke,pt,mt){(X!==Ke||ee!==pt||he!==mt)&&(n.stencilFunc(Ke,pt,mt),X=Ke,ee=pt,he=mt)},setOp:function(Ke,pt,mt){(Re!==Ke||ke!==pt||ut!==mt)&&(n.stencilOp(Ke,pt,mt),Re=Ke,ke=pt,ut=mt)},setLocked:function(Ke){v=Ke},setClear:function(Ke){ft!==Ke&&(n.clearStencil(Ke),ft=Ke)},reset:function(){v=!1,J=null,X=null,ee=null,he=null,Re=null,ke=null,ut=null,ft=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,_=!1,x=null,p=null,f=null,S=null,M=null,w=null,F=null,A=new Ye(0,0,0),C=0,U=!1,b=null,y=null,D=null,O=null,V=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Q=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ne)[1]),re=Q>=1):ne.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),re=Q>=2);let j=null,me={};const Me=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Ce=new At().fromArray(Me),Ge=new At().fromArray(ye);function se(v,J,X,ee){const he=new Uint8Array(4),Re=n.createTexture();n.bindTexture(v,Re),n.texParameteri(v,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(v,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<X;ke++)v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(J+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return Re}const de={};de[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),r.setFunc(So),N(!1),W(Yc),_e(n.CULL_FACE),R($n);function _e(v){c[v]!==!0&&(n.enable(v),c[v]=!0)}function pe(v){c[v]!==!1&&(n.disable(v),c[v]=!1)}function Oe(v,J){return u[v]!==J?(n.bindFramebuffer(v,J),u[v]=J,v===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=J),v===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=J),!0):!1}function Ie(v,J){let X=d,ee=!1;if(v){X=h.get(J),X===void 0&&(X=[],h.set(J,X));const he=v.textures;if(X.length!==he.length||X[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,ke=he.length;Re<ke;Re++)X[Re]=n.COLOR_ATTACHMENT0+Re;X.length=he.length,ee=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,ee=!0);ee&&n.drawBuffers(X)}function Be(v){return m!==v?(n.useProgram(v),m=v,!0):!1}const I={[Gi]:n.FUNC_ADD,[wg]:n.FUNC_SUBTRACT,[Ag]:n.FUNC_REVERSE_SUBTRACT};I[Cg]=n.MIN,I[Rg]=n.MAX;const Ve={[Pg]:n.ZERO,[Lg]:n.ONE,[Dg]:n.SRC_COLOR,[ll]:n.SRC_ALPHA,[Bg]:n.SRC_ALPHA_SATURATE,[Fg]:n.DST_COLOR,[Ug]:n.DST_ALPHA,[Ig]:n.ONE_MINUS_SRC_COLOR,[cl]:n.ONE_MINUS_SRC_ALPHA,[Og]:n.ONE_MINUS_DST_COLOR,[Ng]:n.ONE_MINUS_DST_ALPHA,[zg]:n.CONSTANT_COLOR,[Hg]:n.ONE_MINUS_CONSTANT_COLOR,[kg]:n.CONSTANT_ALPHA,[Vg]:n.ONE_MINUS_CONSTANT_ALPHA};function R(v,J,X,ee,he,Re,ke,ut,ft,Ke){if(v===$n){_===!0&&(pe(n.BLEND),_=!1);return}if(_===!1&&(_e(n.BLEND),_=!0),v!==Tg){if(v!==x||Ke!==U){if((p!==Gi||M!==Gi)&&(n.blendEquation(n.FUNC_ADD),p=Gi,M=Gi),Ke)switch(v){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case al:n.blendFunc(n.ONE,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case al:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $c:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}f=null,S=null,w=null,F=null,A.set(0,0,0),C=0,x=v,U=Ke}return}he=he||J,Re=Re||X,ke=ke||ee,(J!==p||he!==M)&&(n.blendEquationSeparate(I[J],I[he]),p=J,M=he),(X!==f||ee!==S||Re!==w||ke!==F)&&(n.blendFuncSeparate(Ve[X],Ve[ee],Ve[Re],Ve[ke]),f=X,S=ee,w=Re,F=ke),(ut.equals(A)===!1||ft!==C)&&(n.blendColor(ut.r,ut.g,ut.b,ft),A.copy(ut),C=ft),x=v,U=!1}function P(v,J){v.side===an?pe(n.CULL_FACE):_e(n.CULL_FACE);let X=v.side===Wt;J&&(X=!X),N(X),v.blending===Cs&&v.transparent===!1?R($n):R(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),s.setMask(v.colorWrite);const ee=v.stencilWrite;o.setTest(ee),ee&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),te(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function N(v){b!==v&&(v?n.frontFace(n.CW):n.frontFace(n.CCW),b=v)}function W(v){v!==bg?(_e(n.CULL_FACE),v!==y&&(v===Yc?n.cullFace(n.BACK):v===Eg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),y=v}function Y(v){v!==D&&(re&&n.lineWidth(v),D=v)}function te(v,J,X){v?(_e(n.POLYGON_OFFSET_FILL),(O!==J||V!==X)&&(n.polygonOffset(J,X),O=J,V=X)):pe(n.POLYGON_OFFSET_FILL)}function ce(v){v?_e(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function E(v){v===void 0&&(v=n.TEXTURE0+ie-1),j!==v&&(n.activeTexture(v),j=v)}function g(v,J,X){X===void 0&&(j===null?X=n.TEXTURE0+ie-1:X=j);let ee=me[X];ee===void 0&&(ee={type:void 0,texture:void 0},me[X]=ee),(ee.type!==v||ee.texture!==J)&&(j!==X&&(n.activeTexture(X),j=X),n.bindTexture(v,J||de[v]),ee.type=v,ee.texture=J)}function L(){const v=me[j];v!==void 0&&v.type!==void 0&&(n.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xe(){try{n.texStorage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Le(v){Ce.equals(v)===!1&&(n.scissor(v.x,v.y,v.z,v.w),Ce.copy(v))}function ge(v){Ge.equals(v)===!1&&(n.viewport(v.x,v.y,v.z,v.w),Ge.copy(v))}function He(v,J){let X=l.get(J);X===void 0&&(X=new WeakMap,l.set(J,X));let ee=X.get(v);ee===void 0&&(ee=n.getUniformBlockIndex(J,v.name),X.set(v,ee))}function Ae(v,J){const ee=l.get(J).get(v);a.get(J)!==ee&&(n.uniformBlockBinding(J,ee,v.__bindingPointIndex),a.set(J,ee))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},j=null,me={},u={},h=new WeakMap,d=[],m=null,_=!1,x=null,p=null,f=null,S=null,M=null,w=null,F=null,A=new Ye(0,0,0),C=0,U=!1,b=null,y=null,D=null,O=null,V=null,Ce.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:_e,disable:pe,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:Be,setBlending:R,setMaterial:P,setFlipSided:N,setCullFace:W,setLineWidth:Y,setPolygonOffset:te,setScissorTest:ce,activeTexture:E,bindTexture:g,unbindTexture:L,compressedTexImage2D:k,compressedTexImage3D:$,texImage2D:Se,texImage3D:ze,updateUBOMapping:He,uniformBlockBinding:Ae,texStorage2D:xe,texStorage3D:ae,texSubImage2D:q,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:le,scissor:Le,viewport:ge,reset:qe}}function Iy(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return m?new OffscreenCanvas(E,g):_r("canvas")}function x(E,g,L){let k=1;const $=ce(E);if(($.width>L||$.height>L)&&(k=L/Math.max($.width,$.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(k*$.width),ue=Math.floor(k*$.height);h===void 0&&(h=_(q,ue));const oe=g?_(q,ue):h;return oe.width=q,oe.height=ue,oe.getContext("2d").drawImage(E,0,0,q,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+ue+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==Gt&&E.minFilter!==ln}function f(E){n.generateMipmap(E)}function S(E,g,L,k,$=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=g;if(g===n.RED&&(L===n.FLOAT&&(q=n.R32F),L===n.HALF_FLOAT&&(q=n.R16F),L===n.UNSIGNED_BYTE&&(q=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.R8UI),L===n.UNSIGNED_SHORT&&(q=n.R16UI),L===n.UNSIGNED_INT&&(q=n.R32UI),L===n.BYTE&&(q=n.R8I),L===n.SHORT&&(q=n.R16I),L===n.INT&&(q=n.R32I)),g===n.RG&&(L===n.FLOAT&&(q=n.RG32F),L===n.HALF_FLOAT&&(q=n.RG16F),L===n.UNSIGNED_BYTE&&(q=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RG8UI),L===n.UNSIGNED_SHORT&&(q=n.RG16UI),L===n.UNSIGNED_INT&&(q=n.RG32UI),L===n.BYTE&&(q=n.RG8I),L===n.SHORT&&(q=n.RG16I),L===n.INT&&(q=n.RG32I)),g===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),g===n.RGBA){const ue=$?Eo:Je.getTransfer(k);L===n.FLOAT&&(q=n.RGBA32F),L===n.HALF_FLOAT&&(q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(q=ue===it?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(E,g){let L;return E?g===null||g===Is||g===Us?L=n.DEPTH24_STENCIL8:g===gi?L=n.DEPTH32F_STENCIL8:g===bo&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Is||g===Us?L=n.DEPTH_COMPONENT24:g===gi?L=n.DEPTH_COMPONENT32F:g===bo&&(L=n.DEPTH_COMPONENT16),L}function w(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Gt&&E.minFilter!==ln?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function F(E){const g=E.target;g.removeEventListener("dispose",F),C(g),g.isVideoTexture&&u.delete(g)}function A(E){const g=E.target;g.removeEventListener("dispose",A),b(g)}function C(E){const g=i.get(E);if(g.__webglInit===void 0)return;const L=E.source,k=d.get(L);if(k){const $=k[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&U(E),Object.keys(k).length===0&&d.delete(L)}i.remove(E)}function U(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const L=E.source,k=d.get(L);delete k[g.__cacheKey],o.memory.textures--}function b(E){const g=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let $=0;$<g.__webglFramebuffer[k].length;$++)n.deleteFramebuffer(g.__webglFramebuffer[k][$]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=E.textures;for(let k=0,$=L.length;k<$;k++){const q=i.get(L[k]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(L[k])}i.remove(E)}let y=0;function D(){y=0}function O(){const E=y;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),y+=1,E}function V(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ie(E,g){const L=i.get(E);if(E.isVideoTexture&&Y(E),E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){const k=E.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(L,E,g);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function re(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Ge(L,E,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function Q(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Ge(L,E,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function ne(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){se(L,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const j={[dl]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},me={[Gt]:n.NEAREST,[Jg]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[ua]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},Me={[f_]:n.NEVER,[x_]:n.ALWAYS,[p_]:n.LESS,[af]:n.LEQUAL,[m_]:n.EQUAL,[v_]:n.GEQUAL,[g_]:n.GREATER,[__]:n.NOTEQUAL};function ye(E,g){if(g.type===gi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===ln||g.magFilter===ua||g.magFilter===Ir||g.magFilter===ji||g.minFilter===ln||g.minFilter===ua||g.minFilter===Ir||g.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,j[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,j[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,j[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,me[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Gt||g.minFilter!==Ir&&g.minFilter!==ji||g.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ce(E,g){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",F));const k=g.source;let $=d.get(k);$===void 0&&($={},d.set(k,$));const q=V(g);if(q!==E.__cacheKey){$[q]===void 0&&($[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),$[q].usedTimes++;const ue=$[E.__cacheKey];ue!==void 0&&($[E.__cacheKey].usedTimes--,ue.usedTimes===0&&U(g)),E.__cacheKey=q,E.__webglTexture=$[q].texture}return L}function Ge(E,g,L){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const $=Ce(E,g),q=g.source;t.bindTexture(k,E.__webglTexture,n.TEXTURE0+L);const ue=i.get(q);if(q.version!==ue.__version||$===!0){t.activeTexture(n.TEXTURE0+L);const oe=Je.getPrimaries(Je.workingColorSpace),le=g.colorSpace===mi?null:Je.getPrimaries(g.colorSpace),xe=g.colorSpace===mi||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ae=x(g.image,!1,s.maxTextureSize);ae=te(g,ae);const Se=r.convert(g.format,g.colorSpace),ze=r.convert(g.type);let Le=S(g.internalFormat,Se,ze,g.colorSpace,g.isVideoTexture);ye(k,g);let ge;const He=g.mipmaps,Ae=g.isVideoTexture!==!0,qe=ue.__version===void 0||$===!0,v=q.dataReady,J=w(g,ae);if(g.isDepthTexture)Le=M(g.format===Ns,g.type),qe&&(Ae?t.texStorage2D(n.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,Se,ze,null));else if(g.isDataTexture)if(He.length>0){Ae&&qe&&t.texStorage2D(n.TEXTURE_2D,J,Le,He[0].width,He[0].height);for(let X=0,ee=He.length;X<ee;X++)ge=He[X],Ae?v&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,Se,ze,ge.data):t.texImage2D(n.TEXTURE_2D,X,Le,ge.width,ge.height,0,Se,ze,ge.data);g.generateMipmaps=!1}else Ae?(qe&&t.texStorage2D(n.TEXTURE_2D,J,Le,ae.width,ae.height),v&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Se,ze,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,Se,ze,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ae&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,Le,He[0].width,He[0].height,ae.depth);for(let X=0,ee=He.length;X<ee;X++)if(ge=He[X],g.format!==Pn)if(Se!==null)if(Ae){if(v)if(g.layerUpdates.size>0){for(const he of g.layerUpdates){const Re=ge.width*ge.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,he,ge.width,ge.height,1,Se,ge.data.slice(Re*he,Re*(he+1)),0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ae.depth,Se,ge.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Le,ge.width,ge.height,ae.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?v&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ae.depth,Se,ze,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Le,ge.width,ge.height,ae.depth,0,Se,ze,ge.data)}else{Ae&&qe&&t.texStorage2D(n.TEXTURE_2D,J,Le,He[0].width,He[0].height);for(let X=0,ee=He.length;X<ee;X++)ge=He[X],g.format!==Pn?Se!==null?Ae?v&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,Se,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?v&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,Se,ze,ge.data):t.texImage2D(n.TEXTURE_2D,X,Le,ge.width,ge.height,0,Se,ze,ge.data)}else if(g.isDataArrayTexture)if(Ae){if(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,Le,ae.width,ae.height,ae.depth),v)if(g.layerUpdates.size>0){let X;switch(ze){case n.UNSIGNED_BYTE:switch(Se){case n.ALPHA:X=1;break;case n.LUMINANCE:X=1;break;case n.LUMINANCE_ALPHA:X=2;break;case n.RGB:X=3;break;case n.RGBA:X=4;break;default:throw new Error(`Unknown texel size for format ${Se}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:X=1;break;default:throw new Error(`Unknown texel size for type ${ze}.`)}const ee=ae.width*ae.height*X;for(const he of g.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,ae.width,ae.height,1,Se,ze,ae.data.slice(ee*he,ee*(he+1)));g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,ze,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,Se,ze,ae.data);else if(g.isData3DTexture)Ae?(qe&&t.texStorage3D(n.TEXTURE_3D,J,Le,ae.width,ae.height,ae.depth),v&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,ze,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,Se,ze,ae.data);else if(g.isFramebufferTexture){if(qe)if(Ae)t.texStorage2D(n.TEXTURE_2D,J,Le,ae.width,ae.height);else{let X=ae.width,ee=ae.height;for(let he=0;he<J;he++)t.texImage2D(n.TEXTURE_2D,he,Le,X,ee,0,Se,ze,null),X>>=1,ee>>=1}}else if(He.length>0){if(Ae&&qe){const X=ce(He[0]);t.texStorage2D(n.TEXTURE_2D,J,Le,X.width,X.height)}for(let X=0,ee=He.length;X<ee;X++)ge=He[X],Ae?v&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se,ze,ge):t.texImage2D(n.TEXTURE_2D,X,Le,Se,ze,ge);g.generateMipmaps=!1}else if(Ae){if(qe){const X=ce(ae);t.texStorage2D(n.TEXTURE_2D,J,Le,X.width,X.height)}v&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,ze,ae)}else t.texImage2D(n.TEXTURE_2D,0,Le,Se,ze,ae);p(g)&&f(k),ue.__version=q.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function se(E,g,L){if(g.image.length!==6)return;const k=Ce(E,g),$=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);const q=i.get($);if($.version!==q.__version||k===!0){t.activeTexture(n.TEXTURE0+L);const ue=Je.getPrimaries(Je.workingColorSpace),oe=g.colorSpace===mi?null:Je.getPrimaries(g.colorSpace),le=g.colorSpace===mi||ue===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,Se=[];for(let ee=0;ee<6;ee++)!xe&&!ae?Se[ee]=x(g.image[ee],!0,s.maxCubemapSize):Se[ee]=ae?g.image[ee].image:g.image[ee],Se[ee]=te(g,Se[ee]);const ze=Se[0],Le=r.convert(g.format,g.colorSpace),ge=r.convert(g.type),He=S(g.internalFormat,Le,ge,g.colorSpace),Ae=g.isVideoTexture!==!0,qe=q.__version===void 0||k===!0,v=$.dataReady;let J=w(g,ze);ye(n.TEXTURE_CUBE_MAP,g);let X;if(xe){Ae&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,J,He,ze.width,ze.height);for(let ee=0;ee<6;ee++){X=Se[ee].mipmaps;for(let he=0;he<X.length;he++){const Re=X[he];g.format!==Pn?Le!==null?Ae?v&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,He,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,Re.width,Re.height,Le,ge,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,He,Re.width,Re.height,0,Le,ge,Re.data)}}}else{if(X=g.mipmaps,Ae&&qe){X.length>0&&J++;const ee=ce(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,J,He,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Se[ee].width,Se[ee].height,Le,ge,Se[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,Se[ee].width,Se[ee].height,0,Le,ge,Se[ee].data);for(let he=0;he<X.length;he++){const ke=X[he].image[ee].image;Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,ke.width,ke.height,Le,ge,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,He,ke.width,ke.height,0,Le,ge,ke.data)}}else{Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,ge,Se[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,Le,ge,Se[ee]);for(let he=0;he<X.length;he++){const Re=X[he];Ae?v&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,Le,ge,Re.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,He,Le,ge,Re.image[ee])}}}p(g)&&f(n.TEXTURE_CUBE_MAP),q.__version=$.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function de(E,g,L,k,$,q){const ue=r.convert(L.format,L.colorSpace),oe=r.convert(L.type),le=S(L.internalFormat,ue,oe,L.colorSpace);if(!i.get(g).__hasExternalTextures){const ae=Math.max(1,g.width>>q),Se=Math.max(1,g.height>>q);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,q,le,ae,Se,g.depth,0,ue,oe,null):t.texImage2D($,q,le,ae,Se,0,ue,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),W(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,$,i.get(L).__webglTexture,0,N(g)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,$,i.get(L).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(E,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const k=g.depthTexture,$=k&&k.isDepthTexture?k.type:null,q=M(g.stencilBuffer,$),ue=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=N(g);W(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,q,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,q,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,E)}else{const k=g.textures;for(let $=0;$<k.length;$++){const q=k[$],ue=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),le=S(q.internalFormat,ue,oe,q.colorSpace),xe=N(g);L&&W(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,le,g.width,g.height):W(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,le,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,le,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ie(g.depthTexture,0);const k=i.get(g.depthTexture).__webglTexture,$=N(g);if(g.depthTexture.format===Rs)W(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(g.depthTexture.format===Ns)W(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Oe(E){const g=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");pe(g.__webglFramebuffer,E)}else if(L){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]=n.createRenderbuffer(),_e(g.__webglDepthbuffer[k],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),_e(g.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(E,g,L){const k=i.get(E);g!==void 0&&de(k.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Oe(E)}function Be(E){const g=E.texture,L=i.get(E),k=i.get(g);E.addEventListener("dispose",A);const $=E.textures,q=E.isWebGLCubeRenderTarget===!0,ue=$.length>1;if(ue||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,o.memory.textures++),q){L.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[oe]=[];for(let le=0;le<g.mipmaps.length;le++)L.__webglFramebuffer[oe][le]=n.createFramebuffer()}else L.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)L.__webglFramebuffer[oe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ue)for(let oe=0,le=$.length;oe<le;oe++){const xe=i.get($[oe]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&W(E)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const le=$[oe];L.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[oe]);const xe=r.convert(le.format,le.colorSpace),ae=r.convert(le.type),Se=S(le.internalFormat,xe,ae,le.colorSpace,E.isXRRenderTarget===!0),ze=N(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,L.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),ye(n.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)de(L.__webglFramebuffer[oe][le],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else de(L.__webglFramebuffer[oe],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(g)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,le=$.length;oe<le;oe++){const xe=$[oe],ae=i.get(xe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ye(n.TEXTURE_2D,xe),de(L.__webglFramebuffer,E,xe,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),p(xe)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,k.__webglTexture),ye(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)de(L.__webglFramebuffer[le],E,g,n.COLOR_ATTACHMENT0,oe,le);else de(L.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,oe,0);p(g)&&f(oe),t.unbindTexture()}E.depthBuffer&&Oe(E)}function I(E){const g=E.textures;for(let L=0,k=g.length;L<k;L++){const $=g[L];if(p($)){const q=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get($).__webglTexture;t.bindTexture(q,ue),f(q),t.unbindTexture()}}}const Ve=[],R=[];function P(E){if(E.samples>0){if(W(E)===!1){const g=E.textures,L=E.width,k=E.height;let $=n.COLOR_BUFFER_BIT;const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(E),oe=g.length>1;if(oe)for(let le=0;le<g.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<g.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const xe=i.get(g[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,L,k,0,0,L,k,$,n.NEAREST),l===!0&&(Ve.length=0,R.length=0,Ve.push(n.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ve.push(q),R.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let le=0;le<g.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const xe=i.get(g[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function N(E){return Math.min(s.maxSamples,E.samples)}function W(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Y(E){const g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function te(E,g){const L=E.colorSpace,k=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==Ti&&L!==mi&&(Je.getTransfer(L)===it?(k!==Pn||$!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function ce(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=ie,this.setTexture2DArray=re,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=Ie,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=W}function Uy(n,e){function t(i,s=mi){let r;const o=Je.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===ef)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===n_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===e_)return n.BYTE;if(i===t_)return n.SHORT;if(i===bo)return n.UNSIGNED_SHORT;if(i===Jd)return n.INT;if(i===Is)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===zs)return n.HALF_FLOAT;if(i===i_)return n.ALPHA;if(i===s_)return n.RGB;if(i===Pn)return n.RGBA;if(i===r_)return n.LUMINANCE;if(i===o_)return n.LUMINANCE_ALPHA;if(i===Rs)return n.DEPTH_COMPONENT;if(i===Ns)return n.DEPTH_STENCIL;if(i===a_)return n.RED;if(i===nf)return n.RED_INTEGER;if(i===l_)return n.RG;if(i===sf)return n.RG_INTEGER;if(i===rf)return n.RGBA_INTEGER;if(i===ha||i===da||i===fa||i===pa)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kc||i===Zc||i===Qc||i===Jc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eu||i===tu||i===nu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===eu||i===tu)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===hu||i===du||i===fu||i===pu||i===mu||i===gu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===iu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===su)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ru)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ou)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===au)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===du)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gu)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ma||i===_u||i===vu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ma)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===c_||i===xu||i===Mu||i===yu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Ny extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class er extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fy={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,By=`
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

}`;class zy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ot,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new fn({vertexShader:Oy,fragmentShader:By,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Os(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Hy extends Qi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null;const x=new zy,p=t.getContextAttributes();let f=null,S=null;const M=[],w=[],F=new we;let A=null;const C=new en;C.layers.enable(1),C.viewport=new At;const U=new en;U.layers.enable(2),U.viewport=new At;const b=[C,U],y=new Ny;y.layers.enable(1),y.layers.enable(2);let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let de=M[se];return de===void 0&&(de=new Ha,M[se]=de),de.getTargetRaySpace()},this.getControllerGrip=function(se){let de=M[se];return de===void 0&&(de=new Ha,M[se]=de),de.getGripSpace()},this.getHand=function(se){let de=M[se];return de===void 0&&(de=new Ha,M[se]=de),de.getHandSpace()};function V(se){const de=w.indexOf(se.inputSource);if(de===-1)return;const _e=M[de];_e!==void 0&&(_e.update(se.inputSource,se.frame,c||o),_e.dispatchEvent({type:se.type,data:se.inputSource}))}function ie(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",re);for(let se=0;se<M.length;se++){const de=w[se];de!==null&&(w[se]=null,M[se].disconnect(de))}D=null,O=null,x.reset(),e.setRenderTarget(f),m=null,d=null,h=null,s=null,S=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",re),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const de={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Zn(m.framebufferWidth,m.framebufferHeight,{format:Pn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let de=null,_e=null,pe=null;p.depth&&(pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=p.stencil?Ns:Rs,_e=p.stencil?Us:Is);const Oe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Zn(d.textureWidth,d.textureHeight,{format:Pn,type:Si,depthTexture:new _f(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function re(se){for(let de=0;de<se.removed.length;de++){const _e=se.removed[de],pe=w.indexOf(_e);pe>=0&&(w[pe]=null,M[pe].disconnect(_e))}for(let de=0;de<se.added.length;de++){const _e=se.added[de];let pe=w.indexOf(_e);if(pe===-1){for(let Ie=0;Ie<M.length;Ie++)if(Ie>=w.length){w.push(_e),pe=Ie;break}else if(w[Ie]===null){w[Ie]=_e,pe=Ie;break}if(pe===-1)break}const Oe=M[pe];Oe&&Oe.connect(_e)}}const Q=new B,ne=new B;function j(se,de,_e){Q.setFromMatrixPosition(de.matrixWorld),ne.setFromMatrixPosition(_e.matrixWorld);const pe=Q.distanceTo(ne),Oe=de.projectionMatrix.elements,Ie=_e.projectionMatrix.elements,Be=Oe[14]/(Oe[10]-1),I=Oe[14]/(Oe[10]+1),Ve=(Oe[9]+1)/Oe[5],R=(Oe[9]-1)/Oe[5],P=(Oe[8]-1)/Oe[0],N=(Ie[8]+1)/Ie[0],W=Be*P,Y=Be*N,te=pe/(-P+N),ce=te*-P;de.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ce),se.translateZ(te),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const E=Be+te,g=I+te,L=W-ce,k=Y+(pe-ce),$=Ve*I/g*E,q=R*I/g*E;se.projectionMatrix.makePerspective(L,k,$,q,E,g),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function me(se,de){de===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(de.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;x.texture!==null&&(se.near=x.depthNear,se.far=x.depthFar),y.near=U.near=C.near=se.near,y.far=U.far=C.far=se.far,(D!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,O=y.far,C.near=D,C.far=O,U.near=D,U.far=O,C.updateProjectionMatrix(),U.updateProjectionMatrix(),se.updateProjectionMatrix());const de=se.parent,_e=y.cameras;me(y,de);for(let pe=0;pe<_e.length;pe++)me(_e[pe],de);_e.length===2?j(y,C,U):y.projectionMatrix.copy(C.projectionMatrix),Me(se,y,de)};function Me(se,de,_e){_e===null?se.matrix.copy(de.matrixWorld):(se.matrix.copy(_e.matrixWorld),se.matrix.invert(),se.matrix.multiply(de.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=gr*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ye=null;function Ce(se,de){if(u=de.getViewerPose(c||o),_=de,u!==null){const _e=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let pe=!1;_e.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let Ie=0;Ie<_e.length;Ie++){const Be=_e[Ie];let I=null;if(m!==null)I=m.getViewport(Be);else{const R=h.getViewSubImage(d,Be);I=R.viewport,Ie===0&&(e.setRenderTargetTextures(S,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(S))}let Ve=b[Ie];Ve===void 0&&(Ve=new en,Ve.layers.enable(Ie),Ve.viewport=new At,b[Ie]=Ve),Ve.matrix.fromArray(Be.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Be.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(I.x,I.y,I.width,I.height),Ie===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(Ve)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ie=h.getDepthInformation(_e[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,s.renderState)}}for(let _e=0;_e<M.length;_e++){const pe=w[_e],Oe=M[_e];pe!==null&&Oe!==void 0&&Oe.update(pe,de,c||o)}ye&&ye(se,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Ge=new gf;Ge.setAnimationLoop(Ce),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}const Bi=new In,ky=new st;function Vy(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,pf(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,M,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,S,M):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Wt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Wt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=e.get(f),M=S.envMap,w=S.envMapRotation;M&&(p.envMap.value=M,Bi.copy(w),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),p.envMapRotation.value.setFromMatrix4(ky.makeRotationFromEuler(Bi)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gy(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const w=M.program;i.uniformBlockBinding(S,w)}function c(S,M){let w=s[S.id];w===void 0&&(_(S),w=u(S),s[S.id]=w,S.addEventListener("dispose",p));const F=M.program;i.updateUBOMapping(S,F);const A=e.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function u(S){const M=h();S.__bindingPointIndex=M;const w=n.createBuffer(),F=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,F,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],w=S.uniforms,F=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,C=w.length;A<C;A++){const U=Array.isArray(w[A])?w[A]:[w[A]];for(let b=0,y=U.length;b<y;b++){const D=U[b];if(m(D,A,b,F)===!0){const O=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let ie=0;for(let re=0;re<V.length;re++){const Q=V[re],ne=x(Q);typeof Q=="number"||typeof Q=="boolean"?(D.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,O+ie,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=0,D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=0,D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=0):(Q.toArray(D.__data,ie),ie+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,M,w,F){const A=S.value,C=M+"_"+w;if(F[C]===void 0)return typeof A=="number"||typeof A=="boolean"?F[C]=A:F[C]=A.clone(),!0;{const U=F[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return F[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function _(S){const M=S.uniforms;let w=0;const F=16;for(let C=0,U=M.length;C<U;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,D=b.length;y<D;y++){const O=b[y],V=Array.isArray(O.value)?O.value:[O.value];for(let ie=0,re=V.length;ie<re;ie++){const Q=V[ie],ne=x(Q),j=w%F;j!==0&&F-j<ne.boundary&&(w+=F-j),O.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=ne.storage}}}const A=w%F;return A>0&&(w+=F-A),S.__size=w,S.__cache={},this}function x(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Wy{constructor(e={}){const{canvas:t=O_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=xi,this.toneMappingExposure=1;const M=this;let w=!1,F=0,A=0,C=null,U=-1,b=null;const y=new At,D=new At;let O=null;const V=new Ye(0);let ie=0,re=t.width,Q=t.height,ne=1,j=null,me=null;const Me=new At(0,0,re,Q),ye=new At(0,0,re,Q);let Ce=!1;const Ge=new $l;let se=!1,de=!1;const _e=new st,pe=new B,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Be(){return C===null?ne:1}let I=i;function Ve(T,H){return t.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",ee,!1),I===null){const H="webgl2";if(I=Ve(H,T),I===null)throw Ve(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let R,P,N,W,Y,te,ce,E,g,L,k,$,q,ue,oe,le,xe,ae,Se,ze,Le,ge,He,Ae;function qe(){R=new Qx(I),R.init(),ge=new Uy(I,R),P=new jx(I,R,e,ge),N=new Dy(I),W=new tM(I),Y=new vy,te=new Iy(I,R,N,Y,P,ge,W),ce=new qx(M),E=new Zx(M),g=new l0(I),He=new Wx(I,g),L=new Jx(I,g,W,He),k=new iM(I,L,g,W),Se=new nM(I,P,te),le=new Yx(Y),$=new _y(M,ce,E,R,P,He,le),q=new Vy(M,Y),ue=new My,oe=new wy(R),ae=new Gx(M,ce,E,N,k,d,l),xe=new Ly(M,k,P),Ae=new Gy(I,W,P,N),ze=new Xx(I,R,W),Le=new eM(I,R,W),W.programs=$.programs,M.capabilities=P,M.extensions=R,M.properties=Y,M.renderLists=ue,M.shadowMap=xe,M.state=N,M.info=W}qe();const v=new Hy(M,I);this.xr=v,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=R.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=R.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(T){T!==void 0&&(ne=T,this.setSize(re,Q,!1))},this.getSize=function(T){return T.set(re,Q)},this.setSize=function(T,H,K=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=T,Q=H,t.width=Math.floor(T*ne),t.height=Math.floor(H*ne),K===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(re*ne,Q*ne).floor()},this.setDrawingBufferSize=function(T,H,K){re=T,Q=H,ne=K,t.width=Math.floor(T*K),t.height=Math.floor(H*K),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,H,K,Z){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,H,K,Z),N.viewport(y.copy(Me).multiplyScalar(ne).round())},this.getScissor=function(T){return T.copy(ye)},this.setScissor=function(T,H,K,Z){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,H,K,Z),N.scissor(D.copy(ye).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(T){N.setScissorTest(Ce=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,H=!0,K=!0){let Z=0;if(T){let G=!1;if(C!==null){const fe=C.texture.format;G=fe===rf||fe===sf||fe===nf}if(G){const fe=C.texture.type,be=fe===Si||fe===Is||fe===bo||fe===Us||fe===ef||fe===tf,Ee=ae.getClearColor(),Te=ae.getClearAlpha(),Ne=Ee.r,Fe=Ee.g,De=Ee.b;be?(m[0]=Ne,m[1]=Fe,m[2]=De,m[3]=Te,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ne,_[1]=Fe,_[2]=De,_[3]=Te,I.clearBufferiv(I.COLOR,0,_))}else Z|=I.COLOR_BUFFER_BIT}H&&(Z|=I.DEPTH_BUFFER_BIT),K&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ue.dispose(),oe.dispose(),Y.dispose(),ce.dispose(),E.dispose(),k.dispose(),He.dispose(),Ae.dispose(),$.dispose(),v.dispose(),v.removeEventListener("sessionstart",pt),v.removeEventListener("sessionend",mt),Yt.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=W.autoReset,H=xe.enabled,K=xe.autoUpdate,Z=xe.needsUpdate,G=xe.type;qe(),W.autoReset=T,xe.enabled=H,xe.autoUpdate=K,xe.needsUpdate=Z,xe.type=G}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){const H=T.target;H.removeEventListener("dispose",he),Re(H)}function Re(T){ke(T),Y.remove(T)}function ke(T){const H=Y.get(T).programs;H!==void 0&&(H.forEach(function(K){$.releaseProgram(K)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,K,Z,G,fe){H===null&&(H=Oe);const be=G.isMesh&&G.matrixWorld.determinant()<0,Ee=Pf(T,H,K,Z,G);N.setMaterial(Z,be);let Te=K.index,Ne=1;if(Z.wireframe===!0){if(Te=L.getWireframeAttribute(K),Te===void 0)return;Ne=2}const Fe=K.drawRange,De=K.attributes.position;let Qe=Fe.start*Ne,ht=(Fe.start+Fe.count)*Ne;fe!==null&&(Qe=Math.max(Qe,fe.start*Ne),ht=Math.min(ht,(fe.start+fe.count)*Ne)),Te!==null?(Qe=Math.max(Qe,0),ht=Math.min(ht,Te.count)):De!=null&&(Qe=Math.max(Qe,0),ht=Math.min(ht,De.count));const dt=ht-Qe;if(dt<0||dt===1/0)return;He.setup(G,Z,Ee,K,Te);let $t,et=ze;if(Te!==null&&($t=g.get(Te),et=Le,et.setIndex($t)),G.isMesh)Z.wireframe===!0?(N.setLineWidth(Z.wireframeLinewidth*Be()),et.setMode(I.LINES)):et.setMode(I.TRIANGLES);else if(G.isLine){let Pe=Z.linewidth;Pe===void 0&&(Pe=1),N.setLineWidth(Pe*Be()),G.isLineSegments?et.setMode(I.LINES):G.isLineLoop?et.setMode(I.LINE_LOOP):et.setMode(I.LINE_STRIP)}else G.isPoints?et.setMode(I.POINTS):G.isSprite&&et.setMode(I.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?et.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)et.renderInstances(Qe,dt,G.count);else if(K.isInstancedBufferGeometry){const Pe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Bt=Math.min(K.instanceCount,Pe);et.renderInstances(Qe,dt,Bt)}else et.render(Qe,dt)};function ut(T,H,K){T.transparent===!0&&T.side===an&&T.forceSinglePass===!1?(T.side=Wt,T.needsUpdate=!0,Er(T,H,K),T.side=yi,T.needsUpdate=!0,Er(T,H,K),T.side=an):Er(T,H,K)}this.compile=function(T,H,K=null){K===null&&(K=T),p=oe.get(K),p.init(H),S.push(p),K.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==K&&T.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const Z=new Set;return T.traverse(function(G){const fe=G.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){const Ee=fe[be];ut(Ee,K,G),Z.add(Ee)}else ut(fe,K,G),Z.add(fe)}),S.pop(),p=null,Z},this.compileAsync=function(T,H,K=null){const Z=this.compile(T,H,K);return new Promise(G=>{function fe(){if(Z.forEach(function(be){Y.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){G(T);return}setTimeout(fe,10)}R.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ft=null;function Ke(T){ft&&ft(T)}function pt(){Yt.stop()}function mt(){Yt.start()}const Yt=new gf;Yt.setAnimationLoop(Ke),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(T){ft=T,v.setAnimationLoop(T),T===null?Yt.stop():Yt.start()},v.addEventListener("sessionstart",pt),v.addEventListener("sessionend",mt),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(H),H=v.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,H,C),p=oe.get(T,S.length),p.init(H),S.push(p),_e.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ge.setFromProjectionMatrix(_e),de=this.localClippingEnabled,se=le.init(this.clippingPlanes,de),x=ue.get(T,f.length),x.init(),f.push(x),v.enabled===!0&&v.isPresenting===!0){const fe=M.xr.getDepthSensingMesh();fe!==null&&qt(fe,H,-1/0,M.sortObjects)}qt(T,H,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(j,me),Ie=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,Ie&&ae.addToRenderList(x,T),this.info.render.frame++,se===!0&&le.beginShadows();const K=p.state.shadowsArray;xe.render(K,T,H),se===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=x.opaque,G=x.transmissive;if(p.setupLights(),H.isArrayCamera){const fe=H.cameras;if(G.length>0)for(let be=0,Ee=fe.length;be<Ee;be++){const Te=fe[be];wi(Z,G,T,Te)}Ie&&ae.render(T);for(let be=0,Ee=fe.length;be<Ee;be++){const Te=fe[be];Jn(x,T,Te,Te.viewport)}}else G.length>0&&wi(Z,G,T,H),Ie&&ae.render(T),Jn(x,T,H);C!==null&&(te.updateMultisampleRenderTarget(C),te.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(M,T,H),He.resetDefaultState(),U=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],se===!0&&le.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function qt(T,H,K,Z){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ge.intersectsSprite(T)){Z&&pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_e);const be=k.update(T),Ee=T.material;Ee.visible&&x.push(T,be,Ee,K,pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ge.intersectsObject(T))){const be=k.update(T),Ee=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pe.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),pe.copy(be.boundingSphere.center)),pe.applyMatrix4(T.matrixWorld).applyMatrix4(_e)),Array.isArray(Ee)){const Te=be.groups;for(let Ne=0,Fe=Te.length;Ne<Fe;Ne++){const De=Te[Ne],Qe=Ee[De.materialIndex];Qe&&Qe.visible&&x.push(T,be,Qe,K,pe.z,De)}}else Ee.visible&&x.push(T,be,Ee,K,pe.z,null)}}const fe=T.children;for(let be=0,Ee=fe.length;be<Ee;be++)qt(fe[be],H,K,Z)}function Jn(T,H,K,Z){const G=T.opaque,fe=T.transmissive,be=T.transparent;p.setupLightsView(K),se===!0&&le.setGlobalState(M.clippingPlanes,K),Z&&N.viewport(y.copy(Z)),G.length>0&&Ai(G,H,K),fe.length>0&&Ai(fe,H,K),be.length>0&&Ai(be,H,K),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function wi(T,H,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Zn(1,1,{generateMipmaps:!0,type:R.has("EXT_color_buffer_half_float")||R.has("EXT_color_buffer_float")?zs:Si,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const fe=p.state.transmissionRenderTarget[Z.id],be=Z.viewport||y;fe.setSize(be.z,be.w);const Ee=M.getRenderTarget();M.setRenderTarget(fe),M.getClearColor(V),ie=M.getClearAlpha(),ie<1&&M.setClearColor(16777215,.5),Ie?ae.render(K):M.clear();const Te=M.toneMapping;M.toneMapping=xi;const Ne=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),se===!0&&le.setGlobalState(M.clippingPlanes,Z),Ai(T,K,Z),te.updateMultisampleRenderTarget(fe),te.updateRenderTargetMipmap(fe),R.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let De=0,Qe=H.length;De<Qe;De++){const ht=H[De],dt=ht.object,$t=ht.geometry,et=ht.material,Pe=ht.group;if(et.side===an&&dt.layers.test(Z.layers)){const Bt=et.side;et.side=Wt,et.needsUpdate=!0,tc(dt,K,Z,$t,et,Pe),et.side=Bt,et.needsUpdate=!0,Fe=!0}}Fe===!0&&(te.updateMultisampleRenderTarget(fe),te.updateRenderTargetMipmap(fe))}M.setRenderTarget(Ee),M.setClearColor(V,ie),Ne!==void 0&&(Z.viewport=Ne),M.toneMapping=Te}function Ai(T,H,K){const Z=H.isScene===!0?H.overrideMaterial:null;for(let G=0,fe=T.length;G<fe;G++){const be=T[G],Ee=be.object,Te=be.geometry,Ne=Z===null?be.material:Z,Fe=be.group;Ee.layers.test(K.layers)&&tc(Ee,H,K,Te,Ne,Fe)}}function tc(T,H,K,Z,G,fe){T.onBeforeRender(M,H,K,Z,G,fe),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(M,H,K,Z,T,fe),G.transparent===!0&&G.side===an&&G.forceSinglePass===!1?(G.side=Wt,G.needsUpdate=!0,M.renderBufferDirect(K,H,Z,G,T,fe),G.side=yi,G.needsUpdate=!0,M.renderBufferDirect(K,H,Z,G,T,fe),G.side=an):M.renderBufferDirect(K,H,Z,G,T,fe),T.onAfterRender(M,H,K,Z,G,fe)}function Er(T,H,K){H.isScene!==!0&&(H=Oe);const Z=Y.get(T),G=p.state.lights,fe=p.state.shadowsArray,be=G.state.version,Ee=$.getParameters(T,G.state,fe,H,K),Te=$.getProgramCacheKey(Ee);let Ne=Z.programs;Z.environment=T.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(T.isMeshStandardMaterial?E:ce).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",he),Ne=new Map,Z.programs=Ne);let Fe=Ne.get(Te);if(Fe!==void 0){if(Z.currentProgram===Fe&&Z.lightsStateVersion===be)return ic(T,Ee),Fe}else Ee.uniforms=$.getUniforms(T),T.onBuild(K,Ee,M),T.onBeforeCompile(Ee,M),Fe=$.acquireProgram(Ee,Te),Ne.set(Te,Fe),Z.uniforms=Ee.uniforms;const De=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=le.uniform),ic(T,Ee),Z.needsLights=Df(T),Z.lightsStateVersion=be,Z.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.directionalShadowMap.value=G.state.directionalShadowMap,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotShadowMap.value=G.state.spotShadowMap,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMap.value=G.state.pointShadowMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Fe,Z.uniformsList=null,Fe}function nc(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=mo.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function ic(T,H){const K=Y.get(T);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Pf(T,H,K,Z,G){H.isScene!==!0&&(H=Oe),te.resetTextureUnits();const fe=H.fog,be=Z.isMeshStandardMaterial?H.environment:null,Ee=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ti,Te=(Z.isMeshStandardMaterial?E:ce).get(Z.envMap||be),Ne=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Fe=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),De=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,ht=!!K.morphAttributes.color;let dt=xi;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=M.toneMapping);const $t=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,et=$t!==void 0?$t.length:0,Pe=Y.get(Z),Bt=p.state.lights;if(se===!0&&(de===!0||T!==b)){const nn=T===b&&Z.id===U;le.setState(Z,T,nn)}let nt=!1;Z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Bt.state.version||Pe.outputColorSpace!==Ee||G.isBatchedMesh&&Pe.batching===!1||!G.isBatchedMesh&&Pe.batching===!0||G.isBatchedMesh&&Pe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Pe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Pe.instancing===!1||!G.isInstancedMesh&&Pe.instancing===!0||G.isSkinnedMesh&&Pe.skinning===!1||!G.isSkinnedMesh&&Pe.skinning===!0||G.isInstancedMesh&&Pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pe.instancingMorph===!1&&G.morphTexture!==null||Pe.envMap!==Te||Z.fog===!0&&Pe.fog!==fe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==le.numPlanes||Pe.numIntersection!==le.numIntersection)||Pe.vertexAlphas!==Ne||Pe.vertexTangents!==Fe||Pe.morphTargets!==De||Pe.morphNormals!==Qe||Pe.morphColors!==ht||Pe.toneMapping!==dt||Pe.morphTargetsCount!==et)&&(nt=!0):(nt=!0,Pe.__version=Z.version);let Nn=Pe.currentProgram;nt===!0&&(Nn=Er(Z,H,G));let Tr=!1,Ci=!1,$o=!1;const Et=Nn.getUniforms(),ei=Pe.uniforms;if(N.useProgram(Nn.program)&&(Tr=!0,Ci=!0,$o=!0),Z.id!==U&&(U=Z.id,Ci=!0),Tr||b!==T){Et.setValue(I,"projectionMatrix",T.projectionMatrix),Et.setValue(I,"viewMatrix",T.matrixWorldInverse);const nn=Et.map.cameraPosition;nn!==void 0&&nn.setValue(I,pe.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&Et.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Et.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Ci=!0,$o=!0)}if(G.isSkinnedMesh){Et.setOptional(I,G,"bindMatrix"),Et.setOptional(I,G,"bindMatrixInverse");const nn=G.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Et.setValue(I,"boneTexture",nn.boneTexture,te))}G.isBatchedMesh&&(Et.setOptional(I,G,"batchingTexture"),Et.setValue(I,"batchingTexture",G._matricesTexture,te),Et.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&Et.setValue(I,"batchingColorTexture",G._colorsTexture,te));const Ko=K.morphAttributes;if((Ko.position!==void 0||Ko.normal!==void 0||Ko.color!==void 0)&&Se.update(G,K,Nn),(Ci||Pe.receiveShadow!==G.receiveShadow)&&(Pe.receiveShadow=G.receiveShadow,Et.setValue(I,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ei.envMap.value=Te,ei.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(ei.envMapIntensity.value=H.environmentIntensity),Ci&&(Et.setValue(I,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&Lf(ei,$o),fe&&Z.fog===!0&&q.refreshFogUniforms(ei,fe),q.refreshMaterialUniforms(ei,Z,ne,Q,p.state.transmissionRenderTarget[T.id]),mo.upload(I,nc(Pe),ei,te)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(mo.upload(I,nc(Pe),ei,te),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Et.setValue(I,"center",G.center),Et.setValue(I,"modelViewMatrix",G.modelViewMatrix),Et.setValue(I,"normalMatrix",G.normalMatrix),Et.setValue(I,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const nn=Z.uniformsGroups;for(let Zo=0,If=nn.length;Zo<If;Zo++){const sc=nn[Zo];Ae.update(sc,Nn),Ae.bind(sc,Nn)}}return Nn}function Lf(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Df(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,H,K){Y.get(T.texture).__webglTexture=H,Y.get(T.depthTexture).__webglTexture=K;const Z=Y.get(T);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||R.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const K=Y.get(T);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,K=0){C=T,F=H,A=K;let Z=!0,G=null,fe=!1,be=!1;if(T){const Te=Y.get(T);Te.__useDefaultFramebuffer!==void 0?(N.bindFramebuffer(I.FRAMEBUFFER,null),Z=!1):Te.__webglFramebuffer===void 0?te.setupRenderTarget(T):Te.__hasExternalTextures&&te.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture);const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(be=!0);const Fe=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[H])?G=Fe[H][K]:G=Fe[H],fe=!0):T.samples>0&&te.useMultisampledRTT(T)===!1?G=Y.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?G=Fe[K]:G=Fe,y.copy(T.viewport),D.copy(T.scissor),O=T.scissorTest}else y.copy(Me).multiplyScalar(ne).floor(),D.copy(ye).multiplyScalar(ne).floor(),O=Ce;if(N.bindFramebuffer(I.FRAMEBUFFER,G)&&Z&&N.drawBuffers(T,G),N.viewport(y),N.scissor(D),N.setScissorTest(O),fe){const Te=Y.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Te.__webglTexture,K)}else if(be){const Te=Y.get(T.texture),Ne=H||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,K||0,Ne)}U=-1},this.readRenderTargetPixels=function(T,H,K,Z,G,fe,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee){N.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const Te=T.texture,Ne=Te.format,Fe=Te.type;if(!P.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Z&&K>=0&&K<=T.height-G&&I.readPixels(H,K,Z,G,ge.convert(Ne),ge.convert(Fe),fe)}finally{const Te=C!==null?Y.get(C).__webglFramebuffer:null;N.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(T,H,K,Z,G,fe,be){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee){N.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const Te=T.texture,Ne=Te.format,Fe=Te.type;if(!P.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-Z&&K>=0&&K<=T.height-G){const De=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.bufferData(I.PIXEL_PACK_BUFFER,fe.byteLength,I.STREAM_READ),I.readPixels(H,K,Z,G,ge.convert(Ne),ge.convert(Fe),0),I.flush();const Qe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await B_(I,Qe,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,fe)}finally{I.deleteBuffer(De),I.deleteSync(Qe)}return fe}}finally{const Te=C!==null?Y.get(C).__webglFramebuffer:null;N.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,H=null,K=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);const Z=Math.pow(2,-K),G=Math.floor(T.image.width*Z),fe=Math.floor(T.image.height*Z),be=H!==null?H.x:0,Ee=H!==null?H.y:0;te.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,be,Ee,G,fe),N.unbindTexture()},this.copyTextureToTexture=function(T,H,K=null,Z=null,G=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,T=arguments[1],H=arguments[2],G=arguments[3]||0,K=null);let fe,be,Ee,Te,Ne,Fe;K!==null?(fe=K.max.x-K.min.x,be=K.max.y-K.min.y,Ee=K.min.x,Te=K.min.y):(fe=T.image.width,be=T.image.height,Ee=0,Te=0),Z!==null?(Ne=Z.x,Fe=Z.y):(Ne=0,Fe=0);const De=ge.convert(H.format),Qe=ge.convert(H.type);te.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const ht=I.getParameter(I.UNPACK_ROW_LENGTH),dt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$t=I.getParameter(I.UNPACK_SKIP_PIXELS),et=I.getParameter(I.UNPACK_SKIP_ROWS),Pe=I.getParameter(I.UNPACK_SKIP_IMAGES),Bt=T.isCompressedTexture?T.mipmaps[G]:T.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,Te),T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,Ne,Fe,fe,be,De,Qe,Bt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,Ne,Fe,Bt.width,Bt.height,De,Bt.data):I.texSubImage2D(I.TEXTURE_2D,G,Ne,Fe,De,Qe,Bt),I.pixelStorei(I.UNPACK_ROW_LENGTH,ht),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pe),G===0&&H.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(T,H,K=null,Z=null,G=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,T=arguments[2],H=arguments[3],G=arguments[4]||0);let fe,be,Ee,Te,Ne,Fe,De,Qe,ht;const dt=T.isCompressedTexture?T.mipmaps[G]:T.image;K!==null?(fe=K.max.x-K.min.x,be=K.max.y-K.min.y,Ee=K.max.z-K.min.z,Te=K.min.x,Ne=K.min.y,Fe=K.min.z):(fe=dt.width,be=dt.height,Ee=dt.depth,Te=0,Ne=0,Fe=0),Z!==null?(De=Z.x,Qe=Z.y,ht=Z.z):(De=0,Qe=0,ht=0);const $t=ge.convert(H.format),et=ge.convert(H.type);let Pe;if(H.isData3DTexture)te.setTexture3D(H,0),Pe=I.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)te.setTexture2DArray(H,0),Pe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const Bt=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Nn=I.getParameter(I.UNPACK_SKIP_PIXELS),Tr=I.getParameter(I.UNPACK_SKIP_ROWS),Ci=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fe),T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Pe,G,De,Qe,ht,fe,be,Ee,$t,et,dt.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(Pe,G,De,Qe,ht,fe,be,Ee,$t,dt.data):I.texSubImage3D(Pe,G,De,Qe,ht,fe,be,Ee,$t,et,dt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Nn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Tr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ci),G===0&&H.generateMipmaps&&I.generateMipmap(Pe),N.unbindTexture()},this.initRenderTarget=function(T){Y.get(T).__webglFramebuffer===void 0&&te.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?te.setTextureCube(T,0):T.isData3DTexture?te.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?te.setTexture2DArray(T,0):te.setTexture2D(T,0),N.unbindTexture()},this.resetState=function(){F=0,A=0,C=null,N.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wl?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Xo?"display-p3":"srgb"}}class Xy extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return jl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new B;class Co{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Co(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gl extends Un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vs;const qs=new B,xs=new B,Ms=new B,ys=new we,$s=new we,bf=new st,to=new B,Ks=new B,no=new B,dh=new we,ka=new we,fh=new we;class ph extends yt{constructor(e=new gl){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jy(t,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Co(i,3,0,!1)),vs.setAttribute("uv",new Co(i,2,3,!1))}this.geometry=vs,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-Ms.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;io(to.set(-.5,-.5,0),Ms,o,xs,s,r),io(Ks.set(.5,-.5,0),Ms,o,xs,s,r),io(no.set(.5,.5,0),Ms,o,xs,s,r),dh.set(0,0),ka.set(1,0),fh.set(1,1);let a=e.ray.intersectTriangle(to,Ks,no,!1,qs);if(a===null&&(io(Ks.set(-.5,.5,0),Ms,o,xs,s,r),ka.set(0,1),a=e.ray.intersectTriangle(to,no,Ks,!1,qs),a===null))return;const l=e.ray.origin.distanceTo(qs);l<e.near||l>e.far||t.push({distance:l,point:qs.clone(),uv:yn.getInterpolation(qs,to,Ks,no,dh,ka,fh,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function io(n,e,t,i,s,r){ys.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?($s.x=r*ys.x-s*ys.y,$s.y=s*ys.x+r*ys.y):$s.copy(ys),n.copy(e),n.x+=$s.x,n.y+=$s.y,n.applyMatrix4(bf)}class Ls extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ro=new B,Po=new B,mh=new st,Zs=new yr,so=new Mr,Va=new B,gh=new B;class Ql extends yt{constructor(e=new Lt,t=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ro.fromBufferAttribute(t,s-1),Po.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ro.distanceTo(Po);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(s),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;mh.copy(s).invert(),Zs.copy(e.ray).applyMatrix4(mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=m,p=_-1;x<p;x+=c){const f=u.getX(x),S=u.getX(x+1),M=ro(this,e,Zs,l,f,S);M&&t.push(M)}if(this.isLineLoop){const x=u.getX(_-1),p=u.getX(m),f=ro(this,e,Zs,l,x,p);f&&t.push(f)}}else{const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=m,p=_-1;x<p;x+=c){const f=ro(this,e,Zs,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){const x=ro(this,e,Zs,l,_-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ro(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Ro.fromBufferAttribute(o,s),Po.fromBufferAttribute(o,r),t.distanceSqToSegment(Ro,Po,Va,gh)>i)return;Va.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Va);if(!(l<e.near||l>e.far))return{distance:l,point:gh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const _h=new B,vh=new B;class xh extends Ql{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)_h.fromBufferAttribute(t,s),vh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+_h.distanceTo(vh);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tr extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mh=new st,_l=new yr,oo=new Mr,ao=new B;class Ga extends yt{constructor(e=new Lt,t=new tr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;Mh.copy(s).invert(),_l.copy(e.ray).applyMatrix4(Mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,x=m;_<x;_++){const p=c.getX(_);ao.fromBufferAttribute(h,p),yh(ao,p,l,s,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,x=m;_<x;_++)ao.fromBufferAttribute(h,_),yh(ao,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yh(n,e,t,i,s,r,o){const a=_l.distanceSqToPoint(n);if(a<t){const l=new B;_l.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Sh extends Ot{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qo extends Lt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new B,w=new B,F=new B;for(let A=0;A<t.length;A+=3)m(t[A+0],M),m(t[A+1],w),m(t[A+2],F),l(M,w,F,S)}function l(S,M,w,F){const A=F+1,C=[];for(let U=0;U<=A;U++){C[U]=[];const b=S.clone().lerp(w,U/A),y=M.clone().lerp(w,U/A),D=A-U;for(let O=0;O<=D;O++)O===0&&U===A?C[U][O]=b:C[U][O]=b.clone().lerp(y,O/D)}for(let U=0;U<A;U++)for(let b=0;b<2*(A-U)-1;b++){const y=Math.floor(b/2);b%2===0?(d(C[U][y+1]),d(C[U+1][y]),d(C[U][y])):(d(C[U][y+1]),d(C[U+1][y+1]),d(C[U+1][y]))}}function c(S){const M=new B;for(let w=0;w<r.length;w+=3)M.x=r[w+0],M.y=r[w+1],M.z=r[w+2],M.normalize().multiplyScalar(S),r[w+0]=M.x,r[w+1]=M.y,r[w+2]=M.z}function u(){const S=new B;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const w=p(S)/2/Math.PI+.5,F=f(S)/Math.PI+.5;o.push(w,1-F)}_(),h()}function h(){for(let S=0;S<o.length;S+=6){const M=o[S+0],w=o[S+2],F=o[S+4],A=Math.max(M,w,F),C=Math.min(M,w,F);A>.9&&C<.1&&(M<.2&&(o[S+0]+=1),w<.2&&(o[S+2]+=1),F<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,M){const w=S*3;M.x=e[w+0],M.y=e[w+1],M.z=e[w+2]}function _(){const S=new B,M=new B,w=new B,F=new B,A=new we,C=new we,U=new we;for(let b=0,y=0;b<r.length;b+=9,y+=6){S.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),w.set(r[b+6],r[b+7],r[b+8]),A.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),U.set(o[y+4],o[y+5]),F.copy(S).add(M).add(w).divideScalar(3);const D=p(F);x(A,y+0,S,D),x(C,y+2,M,D),x(U,y+4,w,D)}}function x(S,M,w,F){F<0&&S.x===1&&(o[M]=S.x-1),w.x===0&&w.z===0&&(o[M]=F/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.vertices,e.indices,e.radius,e.details)}}class Jl extends Lt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,d=new B,m=[],_=[],x=[],p=[];for(let f=0;f<=i;f++){const S=[],M=f/i;let w=0;f===0&&o===0?w=.5/t:f===i&&l===Math.PI&&(w=-.5/t);for(let F=0;F<=t;F++){const A=F/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(A+w,1-M),S.push(c++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){const M=u[f][S+1],w=u[f][S],F=u[f+1][S],A=u[f+1][S+1];(f!==0||o>0)&&m.push(M,w,A),(f!==i-1||l<Math.PI)&&m.push(w,F,A)}this.setIndex(m),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yy extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pi extends Un{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Lo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qy{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const $y=new qy;class Vs{constructor(e){this.manager=e!==void 0?e:$y,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const kn={};class Ky extends Error{constructor(e,t){super(e),this.response=t}}class Zy extends Vs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Lo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:i,onError:s});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=kn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,_=m!==0;let x=0;const p=new ReadableStream({start(f){S();function S(){h.read().then(({done:M,value:w})=>{if(M)f.close();else{x+=w.byteLength;const F=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:m});for(let A=0,C=u.length;A<C;A++){const U=u[A];U.onProgress&&U.onProgress(F)}f.enqueue(w),S()}},M=>{f.error(M)})}}});return new Response(p)}else throw new Ky(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Lo.add(e,c);const u=kn[e];delete kn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ef extends Vs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Lo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=_r("img");function l(){u(),Lo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Qy extends Vs{constructor(e){super(e)}load(e,t,i,s){const r=new ql;r.colorSpace=xn;const o=new Ef(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class cr extends Vs{constructor(e){super(e)}load(e,t,i,s){const r=new Ot,o=new Ef(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Tf extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wa=new st,bh=new B,Eh=new B;class Jy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $l,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),Eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eh),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eS extends Jy{constructor(){super(new Kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Th extends Tf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new eS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tS extends Tf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wh(){return(typeof performance>"u"?Date:performance).now()}const Ah=new st;class nS{constructor(e,t,i=0,s=1/0){this.ray=new yr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ah.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ah),this}intersectObject(e,t=!0,i=[]){return vl(e,this,i,t),i.sort(Ch),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)vl(e[s],this,i,t);return i.sort(Ch),i}}function Ch(n,e){return n.distance-e.distance}function vl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)vl(r[o],e,t,!0)}}class Rh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);function iS(n){const e=n.clientWidth,t=n.clientHeight,i=new en(45,e/t,1,1e4);return i.position.set(480,12,700),i}function sS(n){const e=n.clientWidth,t=n.clientHeight,i=new en(45,e/t,1,1e4),s=480;let r=2*Math.PI/6400,o=232;return i.position.set(480,12,700),i.tick=a=>{o-=r,i.position.x=s*Math.cos(o),i.position.z=s*Math.sin(o),i.lookAt(0,0,0)},i}function rS(){const n=new cr,e=new pi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/px.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/px.png"),displacementScale:2,displacementBias:-1}),t=new pi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/nx.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/nx.png"),displacementScale:2,displacementBias:-1}),i=new pi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/py.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/py.png"),displacementScale:2,displacementBias:-1}),s=new pi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/ny.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/ny.png"),displacementScale:2,displacementBias:-1}),r=new pi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/pz.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/pz.png"),displacementScale:2,displacementBias:-1}),o=new pi({shininess:10,map:n.load("textures/mars/mars_cubemap_4k/nz.png"),displacementMap:n.load("textures/mars/mars_cubemap_4k_displacementmaps/nz.png"),displacementScale:2,displacementBias:-1});return[e,t,i,s,r,o]}function oS(){const e=new cr().load("textures/mars/mars-overlay-2.png"),t=new Jl(207,32,32),i=new pi({map:e,transparent:!0,depthTest:!0,side:an,emissive:"#ccd2ff",emissiveIntensity:1,shininess:60,precision:"highp",dithering:!0,flatShading:!0,color:"#000000"}),s=new Ct(t,i);return s.isOverlay=!0,s.name="overlay",s.tick=r=>{s.rotation.y+=1/48*r},s}function aS(){let e=new Hs(1,1,1,50,50,50),t=new B;for(let r=0;r<e.attributes.position.count;r++)t.fromBufferAttribute(e.attributes.position,r),t.normalize().multiplyScalar(200),e.attributes.position.setXYZ(r,t.x,t.y,t.z);e.computeVertexNormals();const i=new rS,s=new Ct(e,i);return s.material.generateMipmaps=!0,s.material.wrapS=Xn,s.material.wrapT=Xn,s.material.minFilter=s.material.magFilter=ln,s.geometry.computeVertexNormals(),s.castShadow=!0,s.traverse(function(r){r.isMesh&&(r.castShadow=!0)}),s.tick=r=>{s.rotation.y+=1/48*r},s}function lS(){const n=new Xy,e=new Qy().setPath("textures/space/8k_equi_cubemap/").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);return e.mapping=$i,e.magFilter=Gt,e.minFilter=Gt,new Ye("white"),n.background=e,e.dispose(),n}const cS=()=>{const n=new tS("#c0bfad",.5),e=new Th("#c0bfad",3),t=new Th("#c0bfad",.5);e.castShadow=!0,e.position.set(1200,700,700),t.position.set(1200,500,700);var i=300;return e.shadow.camera.top=i,e.shadow.camera.bottom=-i,e.shadow.camera.left=i,e.shadow.camera.right=-i,e.shadow.mapSize.width=500,e.shadow.mapSize.height=500,e.shadow.camera.near=1350,e.shadow.camera.far=2200,{mainLight:e,softenerLightLower:t,ambientLight:n}},uS=/^[og]\s*(.+)?/,hS=/^mtllib /,dS=/^usemtl /,fS=/^usemap /,Ph=/\s+/,Lh=new B,Xa=new B,Dh=new B,Ih=new B,on=new B,lo=new Ye;function pS(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;Lh.fromArray(s,e),Xa.fromArray(s,t),Dh.fromArray(s,i),on.subVectors(Dh,Xa),Ih.subVectors(Lh,Xa),on.cross(Ih),on.normalize(),r.push(on.x,on.y,on.z),r.push(on.x,on.y,on.z),r.push(on.x,on.y,on.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,o,a,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),m=this.parseVertexIndex(i,u);if(this.addVertex(h,d,m),this.addColor(h,d,m),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),d=this.parseNormalIndex(l,_),m=this.parseNormalIndex(c,_),this.addNormal(h,d,m)}else this.addFaceNormal(h,d,m);if(s!==void 0&&s!==""){const _=this.uvs.length;h=this.parseUVIndex(s,_),d=this.parseUVIndex(r,_),m=this.parseUVIndex(o,_),this.addUV(h,d,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class Af extends Vs{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,o=new Zy(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new pS;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(Ph);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(lo.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(lo.r,lo.g,lo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const d=c.slice(1).trim().split(Ph),m=[];for(let x=0,p=d.length;x<p;x++){const f=d[x];if(f.length>0){const S=f.split("/");m.push(S)}}const _=m[0];for(let x=1,p=m.length-1;x<p;x++){const f=m[x],S=m[x+1];t.addFace(_[0],f[0],S[0],_[1],f[1],S[1],_[2],f[2],S[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let d=[];const m=[];if(c.indexOf("/")===-1)d=h;else for(let _=0,x=h.length;_<x;_++){const p=h[_].split("/");p[0]!==""&&d.push(p[0]),p[1]!==""&&m.push(p[1])}t.addLineGeometry(d,m)}else if(u==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=uS.exec(c))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(dS.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(hS.test(c))t.materialLibraries.push(c.substring(7).trim());else if(fS.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new er;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,h=c.materials,d=u.type==="Line",m=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const x=new Lt;x.setAttribute("position",new ct(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new ct(u.normals,3)),u.colors.length>0&&(_=!0,x.setAttribute("color",new ct(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new ct(u.uvs,2));const p=[];for(let S=0,M=h.length;S<M;S++){const w=h[S],F=w.name+"_"+w.smooth+"_"+_;let A=t.materials[F];if(this.materials!==null){if(A=this.materials.create(w.name),d&&A&&!(A instanceof Ls)){const C=new Ls;Un.prototype.copy.call(C,A),C.color.copy(A.color),A=C}else if(m&&A&&!(A instanceof tr)){const C=new tr({size:10,sizeAttenuation:!1});Un.prototype.copy.call(C,A),C.color.copy(A.color),C.map=A.map,A=C}}A===void 0&&(d?A=new Ls:m?A=new tr({size:1,sizeAttenuation:!1}):A=new pi,A.name=w.name,A.flatShading=!w.smooth,A.vertexColors=_,t.materials[F]=A),p.push(A)}let f;if(p.length>1){for(let S=0,M=h.length;S<M;S++){const w=h[S];x.addGroup(w.groupStart,w.groupCount,S)}d?f=new xh(x,p):m?f=new Ga(x,p):f=new Ct(x,p)}else d?f=new xh(x,p[0]):m?f=new Ga(x,p[0]):f=new Ct(x,p[0]);f.name=c.name,r.add(f)}else if(t.vertices.length>0){const a=new tr({size:1,sizeAttenuation:!1}),l=new Lt;l.setAttribute("position",new ct(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new ct(t.colors,3)),a.vertexColors=!0);const c=new Ga(l,a);r.add(c)}return r}}function mS(){const n=new Af;return new Promise((e,t)=>{n.load("models/g_phobos_287m.obj",i=>{e(i)},i=>{console.log(i.loaded/i.total*100+"% loaded")},i=>{t(new Error("An error happened during loading of the model."))})})}function gS(){const n=new Af;return new Promise((e,t)=>{n.load("models/g_deimos_162m.obj",i=>{e(i)},i=>{console.log(i.loaded/i.total*100+"% loaded")},i=>{t(new Error("An error happened during loading of the model."))})})}async function _S(){try{let m=function(_){const x=new Float32Array(_.length*3);for(let S=0;S<_.length;S++)x[S*3]=_[S].x,x[S*3+1]=_[S].y,x[S*3+2]=_[S].z;const p=new Lt;return p.setAttribute("position",new dn(x,3)),new Ql(p,d)};var n=m;const e=await mS(),t=await gS();e.name="moon",t.name="moon",e.receiveShadow=!0,e.color="white",e.traverse(function(_){_.isMesh&&(_.receiveShadow=!0)});const i=400,s=1200;let r=2*Math.PI/2500,o=2*Math.PI/5e3,a=0,l=400;const c=[],u=[],h=499,d=new Ls({color:16777215});return e.tick=_=>{a-=r,l-=o,e.position.x=i*Math.cos(a),e.position.z=i*Math.sin(a),t.position.x=s*Math.cos(l),t.position.z=s*Math.sin(l),c.push(e.position.clone()),u.push(t.position.clone()),c.length>h&&c.shift(),u.length>h&&u.shift();const x=_.getObjectByName("phobosTrail"),p=_.getObjectByName("deimosTrail");x&&(_.remove(x),x.geometry.dispose(),x.material.dispose()),p&&(_.remove(p),p.geometry.dispose(),p.material.dispose());const f=m(c);f.name="phobosTrail",_.add(f);const S=m(u);S.name="deimosTrail",_.add(S)},[e,t]}catch(e){console.error(e)}}const En="/marsisaplace",vS={literature:[{id:2,body:"Mars",placeName:"Underhill",media:"The Mars Trilogy",creator:"Kim Stanley Robinson",fictionalYear:2026,realYear:1992,description:"Underhill was the landing site for the first hundred colonists in Kim Stanley Robinson’s Red Mars. Built 10m underground as a shield from the radiation piercing Mars’ sparse magnetosphere, the burrow featured a vaulted brick ceiling, bamboo flooring, and intricate staircases composed of a novel magnesium alloy extracted from the Martian regolith.",region:"Xanthe",photoFile:En+"/modal/placeholder.png",lat:8.05,lon:-43.9,jewelColor:"green"},{id:3,body:"Mars",placeName:"Home of Valentine M. Smith",media:"Stranger in a Strange Land",creator:"Robert A. Heinlein",fictionalYear:"Late 20th Century",realYear:1961,description:"Smith's real areographical origin isn't described exactly at any point in the novel, but Elysium Mons seems fitting given Heinlein's vision of an idyllic Martian society. Valentine, a human raised by Martians, is a super-genius with psychic powers. When he returns to Earth, he uses his abilities to found and promote a lifestyle based on peace, free love, and the promotion of vices such as gambling. The Church of All Worlds, a real-life paganistic religion, was later founded on Valentine's principles.",region:"Elysium Mons",photoFile:En+"/modal/siasl.png",lat:24.5,lon:122.1,jewelColor:"green"},{id:5,body:"Mars",placeName:"Handramit",media:"Out of the Silent Planet",creator:"C.S. Lewis",fictionalYear:"Unknown",realYear:1938,description:"Handramit are river valleys surrounded by staggering mountains (handrada) and inhabited by the hrossa - a sapient, otter-like species. C.S. Lewis saw celestial order as an extension of theological natural law. In his Space Trilogy, Mars is known as Malacandra (the Land of Mars), and Earth as Thulcandra (the Silent Planet). Each is guarded by an angel (Oyarsa), though Earth's became bitter and twisted by rebellion.",region:"Valles Marineris",photoFile:En+"/modal/ootsp.png",lat:-8.75,lon:-16.8,jewelColor:"green"},{id:6,body:"Mars",placeName:"Burroughs",media:"The Mars Trilogy",creator:"Kim Stanley Robinson",fictionalYear:"~2040",realYear:1992,description:"Burroughs was the largest city, political center, and de facto capital of Mars throughout much of Kim Stanley Robinson's Mars Trilogy. In Green Mars, it was flooded by a revolutionary group of radicals known as the kakaze ('fire wind') by demolishing a key dike. By the events of Blue Mars, it had become a popular diving spot.",region:"Isidis Planitia",photoFile:En+"/modal/burroughs.png",lat:12.9,lon:190,jewelColor:"green"},{id:7,body:"Mars",placeName:"Sheffield",media:"The Mars Trilogy",creator:"Kim Stanley Robinson",fictionalYear:"2047",realYear:1992,description:"Sheffield, built into the caldera of Pavonis Mons, was the mooring point for both the first (destroyed) and second space elevators. A boom town throughout the trilogy, waxing and waning with the fate of the elevators, a 'socket' at the center of the city anchors a ~35,000km long cable that descends from a counterweight asteroid known as Clarke.",region:"Pavonis Mons",photoFile:En+"/modal/sheffield.png",lat:1.48,lon:23,jewelColor:"green"},{id:8,body:"Mars",placeName:"Senzeni Na (Mohole)",media:"The Mars Trilogy",creator:"Kim Stanley Robinson",fictionalYear:"2047",realYear:1992,description:"Senzeni Na, meaning 'what have we done' in Zulu, is one of many 'moholes' that terraforming advocates bored deep into the crust of Mars. Their primary opponent of these 'Greens' was the 'Red' faction, who advocated for a primordial, untouched, dead Mars for their own scientific, aesthetic, and moral reasons. Over time, moholes warmed Mars by pulling respectable amounts of heat energy from deep underground into the atmosphere.",region:"Thaumasia Planum",photoFile:En+"/modal/senzenina.png",lat:-16,lon:-24,jewelColor:"green"},{id:9,body:"Mars",placeName:"Acheron",media:"The Mars Trilogy",creator:"Kim Stanley Robinson",fictionalYear:"~2040",realYear:1992,description:"In Red Mars, Acheron was where a series of longevity treatments were developed, functionally extending the human lifespan by hundreds of years. This gerontoligical treatment (and its lack of widespread availability) is responsible for much of the political turmoil, war, and civic unrest that unfolds throughout the Mars Trilogy.",region:"Arcadia Planitia",photoFile:En+"/modal/acheron.png",lat:40,lon:84,jewelColor:"green"},{id:10,body:"Mars",placeName:"Greater Helium",media:"A Princess of Mars",creator:"Edgar Rice Burroughs",fictionalYear:"1865",realYear:1912,description:"Burrough's Mars was known as 'Barsoom', a dying world fought over by shifting hegemonic alliances of city-states. The city of Greater Helium (and Lesser Helium, a little sister 75 miles away) became the hero John Carter's home and seat after he married the Princess of Helium.",region:"Hesperia Planium",photoFile:En+"/modal/ghelium.png",lat:-28,lon:165,jewelColor:"green"}],filmAndTV:[{id:1,body:"Mars",placeName:"The Hab",media:"The Martian",creator:"Andy Weir",fictionalYear:2035,realYear:2011,description:"The site where botanist Mark Watney spent most of his 561 sols (1 year, 6 months, 27 days in Earth time). Weir's novel took an optimistic view of near-future human space travel, where NASA had successfully mounted three manned missions to Mars by 2035.",region:"Acidalia Planitia",photoFile:En+"/modal/thehab.png",lat:36.12,lon:27.5-90,jewelColor:"white"},{id:4,body:"Mars",placeName:"Bowie Base One",media:"Doctor Who",creator:"Russell T. Davies & Phil Ford",fictionalYear:"2059",realYear:2009,description:"In the Doctor Who episode The Waters of Mars, Bowie Base One is the first human colony on Mars. The colonists encounter an 'intelligent virus' that targets any organism with water in its body. The Doctor leads a timely intervention.",region:"Gusev Crater",photoFile:En+"/modal/bb1.png",lat:5.5,lon:176,jewelColor:"white"}],reality:[]},Uh={placeData:vS};class xS extends Ct{constructor(e){super(),this.data=e;const t=Math.tan(Math.PI/6),i=Math.cos(Math.PI/6),s=[2,1,2,1,3,0,3,2,0,2,4,1,1,4,3,3,4,2],r=[0,1,0,1,0,t,-1,0,t,0,0,-i,0,-1,0];this.jewelGeometry=new qo(r,s,1.6,0),this.jewelMaterial=new Sr({fog:!0,wireframe:!1,color:e.jewelColor,reflectivity:20}),this.jewelMesh=new Ct(this.jewelGeometry,this.jewelMaterial),this.jewelActive=!1,this.jewelSize=0,this.jewelMesh.name="rotationMesh",this.jewelMesh.tick=o=>{}}}class Nh{constructor(e,t,i,s){this.placeType=e,this.dataList=t,this.celestialBody=s,this.isActive=i,this.path="/src/World/assets/places/photos/"}createAll(){this.setActive(),this.assignPlaceData(),this.placeData.forEach(this.findPosition),this.placeData.forEach(this.createPins)}getType(){return this.placeType}getPinsData(){return this.placeData}setActive(e){this.isActive=e}assignPlaceData(){if(this.dataList.placeData[this.placeType])this.placeData=this.dataList.placeData[this.placeType];else throw new Error(`Type "${this.placeType}" not in placeData`)}findPosition(e){switch(e.body){case"Mars":var t=200,i=(90-e.lat)*Math.PI/180,s=(180+e.lon)*Math.PI/180;Object.defineProperties(e,{x:{value:t*Math.sin(i)*Math.cos(s),writable:!0},y:{value:t*Math.cos(i),writable:!0},z:{value:t*Math.sin(i)*Math.sin(s),writable:!0}})}}createPins(e){const t=new B(e.x,e.y,e.z),i=t.clone().normalize(),s=20,r=1,o=t.clone().add(i.multiplyScalar(s)),a=t.clone().add(i.multiplyScalar(r)),l=[];l.push(t),l.push(o);const c=new Lt().setFromPoints(l),u=new Ls({color:"#7FFFFF"}),h=new Ql(c,u),d=Math.tan(Math.PI/6),m=Math.cos(Math.PI/6),_=[0,1,0,1,0,d,-1,0,d,0,0,-m,0,-1,0],x=[2,1,2,1,3,0,3,2,0,2,4,1,1,4,3,3,4,2],p=new qo(_,x,2,0),f=new Sr({wireframe:!0,color:"#7FFFFF"}),S=new Ct(p,f);S.position.copy(a),S.lookAt(new B(0,0,0)),Object.defineProperty(S,"data",{value:e});const M=new xS(e).jewelMesh;M.position.copy(a),M.lookAt(new B(0,0,0)),Object.defineProperty(e,"mesh",{value:h}),Object.defineProperty(e,"diamondMesh",{value:S}),Object.defineProperty(e,"jewelMesh",{value:M})}}function MS(){const n=new Wy({antialias:!0,logarithmicDepthBuffer:!0,toneMapping:Gl});return n.shadowMap.enabled=!0,n.shadowMap.type=jd,n}const Fh=(n,e,t,i)=>{e.aspect=n.clientWidth/n.clientHeight,e.updateProjectionMatrix(),t.setSize(n.clientWidth,n.clientHeight),t.setPixelRatio(window.devicePixelRatio)};class yS{constructor(e,t,i,s){Fh(e,t,i),window.addEventListener("resize",()=>{Fh(e,t,i)})}}const SS=new wf;class bS{constructor(e,t,i,s){this.camera=e,this.scene=t,this.renderer=i,this.composer=s,this.updatables=[]}start(){this.renderer.setAnimationLoop(()=>{this.renderer.render(this.scene,this.camera),this.composer.render(),this.tick()})}stop(){this.renderer.render(null)}tick(){const e=SS.getDelta();for(const t of this.updatables)t.tick(e)}}const Oh={type:"change"},ja={type:"start"},Bh={type:"end"},co=new yr,zh=new fi,ES=Math.cos(70*F_.DEG2RAD);class TS extends Qi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",le),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Oh),i.update(),r=s.NONE},this.update=function(){const v=new B,J=new Ki().setFromUnitVectors(e.up,new B(0,1,0)),X=J.clone().invert(),ee=new B,he=new Ki,Re=new B,ke=2*Math.PI;return function(ft=null){const Ke=i.object.position;v.copy(Ke).sub(i.target),v.applyQuaternion(J),a.setFromVector3(v),i.autoRotate&&r===s.NONE&&O(y(ft)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let pt=i.minAzimuthAngle,mt=i.maxAzimuthAngle;isFinite(pt)&&isFinite(mt)&&(pt<-Math.PI?pt+=ke:pt>Math.PI&&(pt-=ke),mt<-Math.PI?mt+=ke:mt>Math.PI&&(mt-=ke),pt<=mt?a.theta=Math.max(pt,Math.min(mt,a.theta)):a.theta=a.theta>(pt+mt)/2?Math.max(pt,a.theta):Math.min(mt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Yt=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=Me(a.radius);else{const qt=a.radius;a.radius=Me(a.radius*c),Yt=qt!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(X),Ke.copy(i.target).add(v),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&A){let qt=null;if(i.object.isPerspectiveCamera){const Jn=v.length();qt=Me(Jn*c);const wi=Jn-qt;i.object.position.addScaledVector(w,wi),i.object.updateMatrixWorld(),Yt=!!wi}else if(i.object.isOrthographicCamera){const Jn=new B(F.x,F.y,0);Jn.unproject(i.object);const wi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Yt=wi!==i.object.zoom;const Ai=new B(F.x,F.y,0);Ai.unproject(i.object),i.object.position.sub(Ai).add(Jn),i.object.updateMatrixWorld(),qt=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;qt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(qt).add(i.object.position):(co.origin.copy(i.object.position),co.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(co.direction))<ES?e.lookAt(i.target):(zh.setFromNormalAndCoplanarPoint(i.object.up,i.target),co.intersectPlane(zh,i.target))))}else if(i.object.isOrthographicCamera){const qt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),qt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Yt=!0)}return c=1,A=!1,Yt||ee.distanceToSquared(i.object.position)>o||8*(1-he.dot(i.object.quaternion))>o||Re.distanceToSquared(i.target)>o?(i.dispatchEvent(Oh),ee.copy(i.object.position),he.copy(i.object.quaternion),Re.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Se),i.domElement.removeEventListener("pointerdown",ce),i.domElement.removeEventListener("pointercancel",g),i.domElement.removeEventListener("wheel",$),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",g),i.domElement.getRootNode().removeEventListener("keydown",ue,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",le),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Rh,l=new Rh;let c=1;const u=new B,h=new we,d=new we,m=new we,_=new we,x=new we,p=new we,f=new we,S=new we,M=new we,w=new B,F=new we;let A=!1;const C=[],U={};let b=!1;function y(v){return v!==null?2*Math.PI/60*i.autoRotateSpeed*v:2*Math.PI/60/60*i.autoRotateSpeed}function D(v){const J=Math.abs(v*.01);return Math.pow(.95,i.zoomSpeed*J)}function O(v){l.theta-=v}function V(v){l.phi-=v}const ie=function(){const v=new B;return function(X,ee){v.setFromMatrixColumn(ee,0),v.multiplyScalar(-X),u.add(v)}}(),re=function(){const v=new B;return function(X,ee){i.screenSpacePanning===!0?v.setFromMatrixColumn(ee,1):(v.setFromMatrixColumn(ee,0),v.crossVectors(i.object.up,v)),v.multiplyScalar(X),u.add(v)}}(),Q=function(){const v=new B;return function(X,ee){const he=i.domElement;if(i.object.isPerspectiveCamera){const Re=i.object.position;v.copy(Re).sub(i.target);let ke=v.length();ke*=Math.tan(i.object.fov/2*Math.PI/180),ie(2*X*ke/he.clientHeight,i.object.matrix),re(2*ee*ke/he.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ie(X*(i.object.right-i.object.left)/i.object.zoom/he.clientWidth,i.object.matrix),re(ee*(i.object.top-i.object.bottom)/i.object.zoom/he.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function me(v,J){if(!i.zoomToCursor)return;A=!0;const X=i.domElement.getBoundingClientRect(),ee=v-X.left,he=J-X.top,Re=X.width,ke=X.height;F.x=ee/Re*2-1,F.y=-(he/ke)*2+1,w.set(F.x,F.y,1).unproject(i.object).sub(i.object.position).normalize()}function Me(v){return Math.max(i.minDistance,Math.min(i.maxDistance,v))}function ye(v){h.set(v.clientX,v.clientY)}function Ce(v){me(v.clientX,v.clientX),f.set(v.clientX,v.clientY)}function Ge(v){_.set(v.clientX,v.clientY)}function se(v){d.set(v.clientX,v.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;O(2*Math.PI*m.x/J.clientHeight),V(2*Math.PI*m.y/J.clientHeight),h.copy(d),i.update()}function de(v){S.set(v.clientX,v.clientY),M.subVectors(S,f),M.y>0?ne(D(M.y)):M.y<0&&j(D(M.y)),f.copy(S),i.update()}function _e(v){x.set(v.clientX,v.clientY),p.subVectors(x,_).multiplyScalar(i.panSpeed),Q(p.x,p.y),_.copy(x),i.update()}function pe(v){me(v.clientX,v.clientY),v.deltaY<0?j(D(v.deltaY)):v.deltaY>0&&ne(D(v.deltaY)),i.update()}function Oe(v){let J=!1;switch(v.code){case i.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(-i.keyPanSpeed,0),J=!0;break}J&&(v.preventDefault(),i.update())}function Ie(v){if(C.length===1)h.set(v.pageX,v.pageY);else{const J=Ae(v),X=.5*(v.pageX+J.x),ee=.5*(v.pageY+J.y);h.set(X,ee)}}function Be(v){if(C.length===1)_.set(v.pageX,v.pageY);else{const J=Ae(v),X=.5*(v.pageX+J.x),ee=.5*(v.pageY+J.y);_.set(X,ee)}}function I(v){const J=Ae(v),X=v.pageX-J.x,ee=v.pageY-J.y,he=Math.sqrt(X*X+ee*ee);f.set(0,he)}function Ve(v){i.enableZoom&&I(v),i.enablePan&&Be(v)}function R(v){i.enableZoom&&I(v),i.enableRotate&&Ie(v)}function P(v){if(C.length==1)d.set(v.pageX,v.pageY);else{const X=Ae(v),ee=.5*(v.pageX+X.x),he=.5*(v.pageY+X.y);d.set(ee,he)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;O(2*Math.PI*m.x/J.clientHeight),V(2*Math.PI*m.y/J.clientHeight),h.copy(d)}function N(v){if(C.length===1)x.set(v.pageX,v.pageY);else{const J=Ae(v),X=.5*(v.pageX+J.x),ee=.5*(v.pageY+J.y);x.set(X,ee)}p.subVectors(x,_).multiplyScalar(i.panSpeed),Q(p.x,p.y),_.copy(x)}function W(v){const J=Ae(v),X=v.pageX-J.x,ee=v.pageY-J.y,he=Math.sqrt(X*X+ee*ee);S.set(0,he),M.set(0,Math.pow(S.y/f.y,i.zoomSpeed)),ne(M.y),f.copy(S);const Re=(v.pageX+J.x)*.5,ke=(v.pageY+J.y)*.5;me(Re,ke)}function Y(v){i.enableZoom&&W(v),i.enablePan&&N(v)}function te(v){i.enableZoom&&W(v),i.enableRotate&&P(v)}function ce(v){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(v.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",g)),!ge(v)&&(ze(v),v.pointerType==="touch"?xe(v):L(v)))}function E(v){i.enabled!==!1&&(v.pointerType==="touch"?ae(v):k(v))}function g(v){switch(Le(v),C.length){case 0:i.domElement.releasePointerCapture(v.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",g),i.dispatchEvent(Bh),r=s.NONE;break;case 1:const J=C[0],X=U[J];xe({pointerId:J,pageX:X.x,pageY:X.y});break}}function L(v){let J;switch(v.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Ji.DOLLY:if(i.enableZoom===!1)return;Ce(v),r=s.DOLLY;break;case Ji.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enablePan===!1)return;Ge(v),r=s.PAN}else{if(i.enableRotate===!1)return;ye(v),r=s.ROTATE}break;case Ji.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enableRotate===!1)return;ye(v),r=s.ROTATE}else{if(i.enablePan===!1)return;Ge(v),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(ja)}function k(v){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;se(v);break;case s.DOLLY:if(i.enableZoom===!1)return;de(v);break;case s.PAN:if(i.enablePan===!1)return;_e(v);break}}function $(v){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(v.preventDefault(),i.dispatchEvent(ja),pe(q(v)),i.dispatchEvent(Bh))}function q(v){const J=v.deltaMode,X={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(J){case 1:X.deltaY*=16;break;case 2:X.deltaY*=100;break}return v.ctrlKey&&!b&&(X.deltaY*=10),X}function ue(v){v.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(v){v.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function le(v){i.enabled===!1||i.enablePan===!1||Oe(v)}function xe(v){switch(He(v),C.length){case 1:switch(i.touches.ONE){case es.ROTATE:if(i.enableRotate===!1)return;Ie(v),r=s.TOUCH_ROTATE;break;case es.PAN:if(i.enablePan===!1)return;Be(v),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case es.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ve(v),r=s.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;R(v),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(ja)}function ae(v){switch(He(v),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;P(v),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;N(v),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Y(v),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(v),i.update();break;default:r=s.NONE}}function Se(v){i.enabled!==!1&&v.preventDefault()}function ze(v){C.push(v.pointerId)}function Le(v){delete U[v.pointerId];for(let J=0;J<C.length;J++)if(C[J]==v.pointerId){C.splice(J,1);return}}function ge(v){for(let J=0;J<C.length;J++)if(C[J]==v.pointerId)return!0;return!1}function He(v){let J=U[v.pointerId];J===void 0&&(J=new we,U[v.pointerId]=J),J.set(v.pageX,v.pageY)}function Ae(v){const J=v.pointerId===C[0]?C[1]:C[0];return U[J]}i.domElement.addEventListener("contextmenu",Se),i.domElement.addEventListener("pointerdown",ce),i.domElement.addEventListener("pointercancel",g),i.domElement.addEventListener("wheel",$,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ue,{passive:!0,capture:!0}),this.update()}}function wS(n,e){const t=new TS(n,e);return t.enableDamping=!0,t.minDistance=430,t.maxDistance=2600,t}const Cf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class br{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const AS=new Kl(-1,1,1,-1,0,1);class CS extends Lt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}}const RS=new CS;class ec{constructor(e){this._mesh=new Ct(RS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,AS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class PS extends br{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jo.clone(e.uniforms),this.material=new fn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ec(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Hh extends br{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class LS extends br{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class DS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new we);this._width=i.width,this._height=i.height,t=new Zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zs}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new PS(Cf),this.copyPass.material.blending=$n,this.clock=new wf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Hh!==void 0&&(o instanceof Hh?i=!0:o instanceof LS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const IS={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class US extends br{constructor(){super();const e=IS;this.uniforms=jo.clone(e.uniforms),this.material=new Yy({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ec(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$d?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class NS extends br{constructor(e,t,i,s){super(),this.scene=e,this.camera=t,this.sampleLevel=4,this.unbiased=!0,this.clearColor=i!==void 0?i:0,this.clearAlpha=s!==void 0?s:0,this._oldClearColor=new Ye;const r=Cf;this.copyUniforms=jo.clone(r.uniforms),this.copyMaterial=new fn({uniforms:this.copyUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:al}),this.fsQuad=new ec(this.copyMaterial)}dispose(){this.sampleRenderTarget&&(this.sampleRenderTarget.dispose(),this.sampleRenderTarget=null),this.copyMaterial.dispose(),this.fsQuad.dispose()}setSize(e,t){this.sampleRenderTarget&&this.sampleRenderTarget.setSize(e,t)}render(e,t,i){this.sampleRenderTarget||(this.sampleRenderTarget=new Zn(i.width,i.height,{type:zs}),this.sampleRenderTarget.texture.name="SSAARenderPass.sample");const s=FS[Math.max(0,Math.min(this.sampleLevel,5))],r=e.autoClear;e.autoClear=!1,e.getClearColor(this._oldClearColor);const o=e.getClearAlpha(),a=1/s.length,l=1/32;this.copyUniforms.tDiffuse.value=this.sampleRenderTarget.texture;const c={fullWidth:i.width,fullHeight:i.height,offsetX:0,offsetY:0,width:i.width,height:i.height},u=Object.assign({},this.camera.view);u.enabled&&Object.assign(c,u);for(let h=0;h<s.length;h++){const d=s[h];this.camera.setViewOffset&&this.camera.setViewOffset(c.fullWidth,c.fullHeight,c.offsetX+d[0]*.0625,c.offsetY+d[1]*.0625,c.width,c.height);let m=a;if(this.unbiased){const _=-.5+(h+.5)/s.length;m+=l*_}this.copyUniforms.opacity.value=m,e.setClearColor(this.clearColor,this.clearAlpha),e.setRenderTarget(this.sampleRenderTarget),e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(this.renderToScreen?null:t),h===0&&(e.setClearColor(0,0),e.clear()),this.fsQuad.render(e)}this.camera.setViewOffset&&u.enabled?this.camera.setViewOffset(u.fullWidth,u.fullHeight,u.offsetX,u.offsetY,u.width,u.height):this.camera.clearViewOffset&&this.camera.clearViewOffset(),e.autoClear=r,e.setClearColor(this._oldClearColor,o)}}const FS=[[[0,0]],[[4,4],[-4,-4]],[[-2,-6],[6,-2],[-6,2],[2,6]],[[1,-3],[-1,3],[5,1],[-3,-5],[-5,5],[-7,-1],[3,7],[7,-7]],[[1,1],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]],[[-4,-7],[-7,-5],[-3,-5],[-5,-4],[-1,-4],[-2,-2],[-6,-1],[-4,0],[-7,1],[-1,2],[-6,3],[-3,3],[-7,6],[-3,6],[-5,7],[-1,7],[5,-7],[1,-6],[6,-5],[4,-4],[2,-3],[7,-2],[1,-1],[4,-1],[2,1],[6,2],[0,4],[4,4],[2,5],[7,5],[5,6],[3,7]]];let Ss;class OS{constructor(e){this.events={},this.showOverlay=!1,this.camera=iS(e),this.focusCamera=sS(e),this.placeholderImg=new cr().load("/marsisaplace/modal/placeholder.png"),this.siasl=new cr().load("/marsisaplace/modal/siasl.png"),this.background=lS(),this.raycaster=new nS,this.mouse=new we,this.hoveredObject=null,this.mars=aS(),this.overlay=oS(),this.mars.loadingComplete=!1,this.renderer=MS(),e.append(this.renderer.domElement),this.background.add(this.mars,this.overlay);const{mainLight:t,softenerLightLower:i,ambientLight:s,overlayLight:r}=cS();this.mainLight=t,this.background.add(t,i,s,r),wS(this.camera,e),new yS(e,this.camera,this.renderer,this.composer),this.composer=new DS(this.renderer),this.composer.setPixelRatio(1),this.ssaaPass=new NS(this.background,this.camera),this.outputPass=new US,Ss=new bS(this.camera,this.background,this.renderer,this.composer),Ss.updatables.push(this.mars,this.overlay),Ss.updatables.push({tick:()=>this.focusCamera.tick(this.background)}),this.createAllMarkers(),console.log("mars name",this.mars.children),this.loadAddMoons(),this.loadingText=null,e.addEventListener("mousemove",this.onMouseMove.bind(this),!1),e.addEventListener("click",this.onClick.bind(this),!1),this.handleOverlay()}async loadAddMoons(){try{const[e,t]=await _S();this.phobos=e,this.background.add(this.phobos),this.background.add(t),Ss.updatables.push({tick:()=>e.tick(this.background)}),this.mars.loadingComplete=!0,this.emit("loadingDone",{message:"Loading done."}),console.log("Moons loaded")}catch(e){console.error("Error loading moons:",e)}}start(){Ss.start()}stop(){Ss.stop()}on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}off(e,t){this.events[e]&&(this.events[e]=this.events[e].filter(i=>i!==t))}emit(e,t){this.events[e]&&this.events[e].forEach(i=>i(t))}handleLoadingState(){this.emit("loading",{message:"Loading assets..."})}handleOverlay(){this.showOverlay==!0?(this.overlay.scale.set(0,0,0),this.showOverlay=!1):this.showOverlay==!1&&(this.overlay.scale.set(1,1,1),this.showOverlay=!0)}createAllMarkers(){var e=new Nh("literature",Uh,!0,"Mars");e.createAll();let t=e.getPinsData();var i=new Nh("filmAndTV",Uh,!0,"Mars");i.createAll();let s=i.getPinsData();for(let r=0;r<t.length;r++)this.mars.add(t[r].mesh),this.mars.add(t[r].diamondMesh),this.mars.add(t[r].jewelMesh),this.createLabel(t[r].diamondMesh);for(let r=0;r<s.length;r++)this.mars.add(s[r].mesh),this.mars.add(s[r].diamondMesh),this.mars.add(s[r].jewelMesh),this.createLabel(s[r].diamondMesh);this.mars.geometry.computeBoundingBox()}createLabel(e){const t=document.createElement("canvas"),i=t.getContext("2d");t.width=300,t.height=50,i.fillStyle="rgba(255, 255, 255, 0)",i.fillRect(0,0,t.width,t.height),i.fillStyle="#FFFFFF",i.font="bold 18px Andale Mono",i.textAlign="center",i.textBaseline="middle",i.fillText(e.data.placeName,t.width/2,25);const s=new Sh(t),r=new Os(50,10),o=new Sr({map:s,transparent:!0,side:an});let a=new Ct(r,o);a.position.y=a.position.y+5;var l=new B;console.log("tst",e.getWorldPosition(l)),a.isLabel=!0,e.add(a),a.rotation.y=Math.PI}createModals(e){this.modal&&(this.background.remove(this.modal),this.modal.geometry.dispose(),this.modal.material.map.dispose(),this.modal.material.dispose(),this.background.remove(this.imgModal),this.imgModal.geometry.dispose(),this.imgModal.material.map.dispose(),this.imgModal.material.dispose());const t=document.createElement("canvas"),i=t.getContext("2d");t.width=300,t.height=500,i.fillStyle="rgba(127, 255, 255, 0.1)",i.fillRect(0,0,t.width,t.height),i.strokeStyle="#00FFFF",i.lineWidth=2,i.strokeRect(0,0,t.width,t.height),i.fillStyle="#FFFFFF",i.font="bold 20px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(e.placeName,t.width/2,25),i.font="bold 16px Arial",i.textAlign="left",i.textBaseline="top",i.shadowColor="rgba(0, 0, 0, 0)";const s=[`Media: ${e.media}`,`Creator: ${e.creator}`,`Year Set: ${e.fictionalYear}`,`Year Published: ${e.realYear}`,`Region: ${e.region}`],r=e.description;s.forEach((p,f)=>{i.fillText(p,20,60+f*25)}),i.fillStyle="#CCCCCC",i.font="italic 16px Univers",i.textAlign="left",i.textBaseline="top";const o=t.width-40,a=20;let l=20,c=60+s.length*25+10;const u=r.split(" ");let h="";for(let p=0;p<u.length;p++){const f=h+u[p]+" ";i.measureText(f).width>o&&p>0?(i.fillText(h,l,c),h=u[p]+" ",c+=a):h=f}i.fillText(h,l,c),new Os(45,85);const d=new Sh(t),m=new gl({map:d,transparent:!0,side:an});var _=new cr().load(e.photoFile),x=new gl({map:_,color:16777215});this.imgModal=new ph(x),this.imgModal.isModal=!0,this.modal=new ph(m),this.modal.scale.set(50,100,1),this.modal.isModal=!0,this.background.add(this.modal),this.background.add(this.imgModal)}onMouseMove(e){e.preventDefault();const t=e.target.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const i=this.raycaster.intersectObjects(this.background.children,!0);if(i.length>0){const s=i[0].object;if(s.isModal||s.isLabel||s.isOverlay)return;this.hoveredObject!==s&&(this.hoveredObject&&this.hoveredObject.material&&this.hoveredObject.material.color&&!this.hoveredObject.isLine&&(this.hoveredObject.material.color.set("gold"),this.hoveredObject.material.wireframe=!0),this.hoveredObject=s,s.material&&s.material.color&&!this.hoveredObject.isLine&&(this.hoveredObject.originalColor=s.material.color.getHex(),this.hoveredObject.material.color.set("gold"),this.hoveredObject.material.wireframe=!1))}else this.hoveredObject&&(this.hoveredObject.material&&this.hoveredObject.material.color&&!this.hoveredObject.isLine&&(this.hoveredObject.material.color.set(this.hoveredObject.originalColor),this.hoveredObject.material.wireframe=!0),this.hoveredObject=null)}onClick(e){if(e.preventDefault(),this.hoveredObject){this.hoveredObject.material&&this.hoveredObject.material.color;var t=new B;console.log(this.hoveredObject.getWorldPosition(t));var i=this.hoveredObject;this.createModals(i.data),this.imgModal.scale.set(50,50,1),this.imgModal.position.copy(t).multiplyScalar(1.41),this.modal.position.copy(t).multiplyScalar(1.41),this.modal.position.y-=40,this.imgModal.position.y+=45,this.camera.position.copy(t).multiplyScalar(2.4),this.camera.lookAt(0,0,0),this.hoveredObject=null}}}const BS=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},zS={components:{Carousel:Mg,Slide:Sg,Pagination:yg},data(){return{marsLoaded:!1,loadingFactsBase:["It's thought that Althanasius Kircher's Itinerarium Exstaticum (1656) was the first fictional work explicitly set on Mars.","Alexander Bogdanov’s Red Star (1908), a Bolshevik science fiction novel, depicts Mars as a socialist utopia.","In 1952, Werner von Braun published a novel called Project Mars: A Technical Tale. In it, the elected leader of Mars sports the title 'Elon'.","Compasses do not work on Mars; there is no global magnetic field to guide them.","Mars' horizon is only about 3.4 km away - much closer than Earth's 4.6 km.","One day on Mars is exactly 24 hours and 40 minutes long.","Mars has ice caps. The larger northern cap is water ice, while the southern is made of carbon dioxide - otherwise known as dry ice.","Martian temperatures can get up to 20 °C (68 °F) on the equator - but atmospheric pressure is still more than 100 times less dense than on Earth."]}},mounted(){this.shuffleFacts(this.loadingFactsBase);const n=this.$el;this.areograph=new OS(n),console.log(this.areograph),this.areograph.start(),this.areograph.on("loadingDone",this.handleLoadingMessage)},methods:{shuffleFacts(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}},handleLoadingMessage(){this.marsLoaded=!1,console.log(this.marsLoaded)},handleOverlay(){this.areograph.handleOverlay()}}},Rf=n=>(Rp("data-v-9072699d"),n=n(),Pp(),n),HS={id:"scene-container"},kS={key:0,id:"loading-window"},VS=Rf(()=>z("p",{id:"loading-text"},"Loading assets...",-1)),GS=Rf(()=>z("div",{class:"loader"},[z("div",{class:"loaderBar"})],-1)),WS={id:"loading-text"},XS={class:"fact-item"},jS={id:"overlay-select-wrapper"};function YS(n,e,t,i,s,r){const o=na("Slide"),a=na("Pagination"),l=na("Carousel");return Mt(),Rt("div",HS,[s.marsLoaded?Qt("",!0):(Mt(),Rt("div",kS,[z("span",null,[VS,GS,z("p",WS,[lt(l,{autoplay:1e4,"wrap-around":!1},{addons:vn(()=>[lt(a)]),default:vn(()=>[(Mt(!0),Rt(Jt,null,Yp(s.loadingFactsBase,c=>(Mt(),Bd(o,{key:c},{default:vn(()=>[z("div",XS,Yf(c),1)]),_:2},1024))),128))]),_:1})])])])),z("div",jS,[z("button",{onClick:e[0]||(e[0]=c=>r.handleOverlay())},"Toggle region overlay")])])}const qS=BS(zS,[["render",YS],["__scopeId","data-v-9072699d"]]),$S=z("header",null,[z("link",{href:"https://fonts.cdnfonts.com/css/overpass",rel:"stylesheet"}),z("link",{href:"https://fonts.googleapis.com/css2?family=Nunito",rel:"stylesheet",type:"text/css"}),z("link",{href:"https://fonts.cdnfonts.com/css/univers",rel:"stylesheet"})],-1),KS={id:"body"},ZS={key:0,id:"show-top-bar-hidden"},QS=z("g",{id:"SVGRepo_bgCarrier","stroke-width":"0",transform:"translate(130.35,130.35), scale(0.21)"},[z("path",{transform:"translate(-168.3, -168.3), scale(41.6625)",fill:"#ff0004",d:"M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z",strokewidth:"0"})],-1),JS=z("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round",stroke:"#CCCCCC","stroke-width":"0.66"},null,-1),eb=z("g",{id:"SVGRepo_iconCarrier"},[z("path",{id:"XMLID_224_",d:"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"})],-1),tb=[QS,JS,eb],nb={key:0,id:"top-bar"},ib=z("div",{id:"logo"},[z("div",{id:"logo-mars-bg"},[z("span",{id:"logo-former"},"MARS")]),z("span",{id:"logo-latter"},"in place")],-1),sb=z("div",{id:"bar-buffer"},null,-1),rb={id:"top-bar-items"},ob=z("span",null,"about",-1),ab=[ob],lb=z("span",null,"filters",-1),cb=[lb],ub=z("span",null,"suggest pin",-1),hb=[ub],db=z("svg",{cursor:"pointer",fill:"rgba(255, 255, 255, 1)",height:"100px",width:"100px",version:"1.1",id:"Layer_2",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"-168.3 -168.3 666.60 666.60","xml:space":"preserve",stroke:"#ffffff",transform:"rotate(0)matrix(1, 0, 0, 1, 0, 0)","stroke-width":"14.52"},[z("g",{id:"SVGRepo_bgCarrier","stroke-width":"0",transform:"translate(130.35,130.35), scale(0.21)"},[z("path",{transform:"translate(-168.3, -168.3), scale(41.6625)",fill:"#ff0004",d:"M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z",strokewidth:"0"})]),z("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round",stroke:"#CCCCCC","stroke-width":"0.66"}),z("g",{id:"SVGRepo_iconCarrier"},[z("path",{id:"XMLID_224_",d:"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"})])],-1),fb=z("span",null,"hide menu",-1),pb=[db,fb],mb={key:0,id:"guide-container"},gb={id:"guide-container-items"},_b=z("span",null,"close",-1),vb=[_b],xb=z("span",null,"how it works",-1),Mb=[xb],yb=z("span",null,"what is this?",-1),Sb=[yb],bb=z("span",null,"FAQ",-1),Eb=[bb],Tb={key:0,class:"container-under"},wb={key:0,class:"guide-choice"},Ab=z("span",{class:"guide-choice-text"},[z("p",null,"Concept")],-1),Cb=z("div",{class:"toggle-content"},[z("span",{class:"what-text"},[z("br"),z("p",null,[ot("Over the past 70 years, researchers have clarified our image of Mars into a sparse, cold, and unforgiving place. We're extremely lucky to see it. The more we know, the more we might learn about our own planet, the origins of our solar system, and maybe even the prerequisites and potentiates for life. It's a neighbourhood mystery that we've only recently begun to grok. "),z("br"),z("br"),ot(" Yet this knowledge also moves us away from the fantastical stories we made up when we knew less - and there is no history for it but in our stories. Mars has no nations, tombs, monuments, wars, legends, or triumphs. It's a blank slate without us. "),z("br"),z("br"),z("i",null,"Mars in Place"),ot(" explores projections of Mars by cataloguing, explaining, and mapping them. Some are old and some are new. Some are contemporaneous to the telling, while others explore our relationship far into the future. Each reveals a part of a long-standing tradition.")])])],-1),Rb=z("span",{class:"guide-choice-text"},[z("p",null,"Art")],-1),Pb=z("div",{class:"toggle-content"},[z("span",{class:"what-text"},[z("br"),ot(" TBD ")])],-1),Lb=[Ab,Cb,Rb,Pb],Db={key:1,class:"container-under-how"},Ib=z("div",{class:"how-choice"},[z("span",{class:"how-choice-text"}," Map "),z("div",{class:"toggle-content-how"},[z("span",{class:"how-text"},[z("p",null,"Slide the camera plane vertically or horizontally by holding down right click and dragging with left"),z("p",null,"Use your mousewheel or trackpad to scroll in and out (as you would on Google Earth)")])])],-1),Ub=z("div",{class:"how-video"},[z("video",{class:"toggle-content-how-video",loop:"",autoplay:""},[z("source",{src:dg,type:"video/webm"})])],-1),Nb=z("div",{class:"how-choice"},[z("span",{class:"how-choice-text"}," Pins "),z("div",{class:"toggle-content-how"},[z("span",{class:"how-text"},[z("p",null,"Click on a pin to see information for an entry - these correspond to individual locations in fiction, film, TV, etc."),z("p",null,"To remove the entry popup, click outside of it or move your camera")])])],-1),Fb=z("div",{class:"how-video"},[z("video",{class:"toggle-content-how-video",loop:"",autoplay:""},[z("source",{src:fg,type:"video/webm"})])],-1),Ob=z("div",{class:"how-choice"},[z("span",{class:"how-choice-text"}," Overlay "),z("div",{class:"toggle-content-how"},[z("span",{class:"how-text"},[z("p",null,"Toggle the overlay on and off by clicking the button in the bottom left"),z("p",null,"Areas of the overlay correspond to the real regions on Mars' surface")])])],-1),Bb=z("div",{class:"how-choice"},[z("span",{class:"how-choice-text"}," Filtering "),z("div",{class:"toggle-content-how"},[z("span",{class:"how-text"},[z("p",null,"The left-hand 'filters' tab contains options for sorting the entries by date, medium, and scope"),z("p",null,"(TBC)")])])],-1),zb=z("div",{class:"how-choice"},[z("div",{class:"toggle-content-how-video"})],-1),Hb=[Ib,Ub,Nb,Fb,Ob,Bb,zb],kb={key:2,class:"container-under-FAQ"},Vb=z("div",{class:"FAQ-choice"},[z("span",{class:"FAQ-choice-text"},[z("p",null,"Mars")]),z("div",{class:"toggle-content-FAQ"},[z("span",{class:"FAQ-subheading"},[z("p",null,"Is the scene to scale?")]),z("span",{class:"FAQ-text"},[ot(" Deimos and Phobos aren't to scale, but Mars' surface is - some unmapped gaps in the terrain were filled with generated textures."),z("br")]),z("span",{class:"FAQ-subheading"},[z("p",null,"How accurate is Mars' surface?")]),z("span",{class:"FAQ-text"}," Mars is depicted in the middle of its northern summer. The planet has a polar tilt of 25°, similar to Earth's 23.5°, which is part of the reason it experiences seasons as well as polar nights/summers. ")])],-1),Gb=z("div",{class:"FAQ-choice"},[z("span",{class:"FAQ-choice-text"},[z("p",null,"Attribution")]),z("div",{class:"toggle-content-FAQ"},[z("span",{class:"FAQ-subheading"},[z("p",null,"Where is the background from?")]),z("span",{class:"FAQ-text"},[ot(" The starfield is a cubemap built from one of NASA's "),z("a",{class:"link-highlight",href:"https://svs.gsfc.nasa.gov/4851/"},"Deep Star Maps"),ot(", itself assembled from a few different star catalogs. ")]),z("span",{class:"FAQ-subheading"},[z("p",null,"Mars?")]),z("span",{class:"FAQ-text"},[ot(" Mars' texture was created from NASA surface imagery (and released for free!) by the team at "),z("a",{class:"link-highlight",href:"https://www.solarsystemscope.com/textures/"},"Solar System Scope"),ot(". I turned this into another cubemap and projected it onto a quadrilateralized spherical cube (quad sphere). I also generated my displacement, ambient occlusion, and normal maps from it. ")]),z("span",{class:"FAQ-subheading"},[z("p",null,"Phobos & Deimos?")]),z("span",{class:"FAQ-text"},[ot(" The Deimos and Phobos models were proposed and created by Ernst, Daly, and Gaskell et al. in their extremely helpful "),z("a",{class:"link-highlight",href:"https://earth-planets-space.springeropen.com/articles/10.1186/s40623-023-01814-7"},"2023 paper"),ot(" - you can download the models directly from their Small Body Mapping Tool/SBMT site "),z("a",{class:"link-highlight",href:"https://sbmt.jhuapl.edu/Object-Index.php"},"here"),ot(" (.OBJ with 4 spatial resolution options). ")]),z("span",{class:"FAQ-subheading"},[z("p",null,"Region overlay?")]),z("span",{class:"FAQ-text"},[ot(" The region overlay is adapted (with permission) from a "),z("a",{class:"link-highlight",href:"https://www.deviantart.com/etohautakuva/art/Mars-Geographic-Regions-Map-v0-1-917110370"},"map by the artist Etohautakuva."),ot(" They compiled data from the USGS/NASA to create an approximation of Martian regional boundaries as recognised by the International Astronomical Union (IAU). ")])])],-1),Wb=z("div",{class:"FAQ-choice"},[z("span",{class:"FAQ-choice-text"},[z("p",null,"Developer")]),z("div",{class:"toggle-content-FAQ"},[z("span",{class:"FAQ-subheading"},[z("p",null,"Tech stack?")]),z("span",{class:"FAQ-text"},[ot(" Three.js for rendering and animating the scene and Vue 3 for the overlay inc. SPA functionality and general reactivity. Pin data are stored in rudimentary arrays of objects for now; this will change to SQLite in future."),z("br")]),z("span",{class:"FAQ-subheading"},[z("p",null,"I found a bug - what can I do?")]),z("span",{class:"FAQ-text"}," This is a WIP, so feel free to create a new issue or pull request on the repo. You can also contact me at xxx with what happened. ")])],-1),Xb=[Vb,Gb,Wb],jb={key:0,id:"guide-container"},Yb=z("div",{class:"container-under"},[z("span",null,"TBD ")],-1),qb=[Yb],$b={key:0,id:"suggest-container"},Kb={id:"suggest-container-items"},Zb=z("span",null,"close",-1),Qb=[Zb],Jb={id:"container-under-suggest"},eE={id:"suggest-form",action:"",method:"POST"},tE={key:0,id:"email-disclaimer"},nE=z("span",null,"I'll only email you if I have question about your idea for a pin. I do not retain addresses and will never spam you.",-1),iE=[nE],sE={class:"container-input-smaller"},rE=z("label",{class:"suggest-label"},"Submissions disabled for now.",-1),oE=z("br",null,null,-1),aE=z("br",null,null,-1),lE={class:"suggest-label"},cE={class:"suggest-hint"},uE=z("input",{disabled:"",class:"suggest-input-smaller",type:"email",name:"email"},null,-1),hE=z("div",{class:"container-input-smaller"},[z("label",{class:"suggest-label"},[ot(" Submission Name "),z("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),dE=z("div",{class:"container-input-smaller"},[z("label",{class:"suggest-label"},[ot(" Author "),z("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),fE=z("div",{class:"container-input-smaller"},[z("label",{class:"suggest-label"},[ot(" Year "),z("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),pE=z("div",{class:"container-input-smaller"},[z("label",{class:"suggest-label"},[ot(" Fictional Year "),z("p",{class:"suggest-hint"},"optional, provide if this applies"),z("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),mE=z("div",{class:"container-input-smaller"},[z("label",{class:"suggest-label"},[ot(" Lat/Lon "),z("p",{class:"suggest-hint"},"optional, helpful if you have them"),z("textarea",{disabled:"",class:"suggest-input-smaller",name:"message"})])],-1),gE=z("div",{class:"container-input-larger"},[z("label",{class:"suggest-label"},[ot(" Description "),z("textarea",{disabled:"",class:"suggest-input-larger",name:"message"})])],-1),_E=z("button",{disabled:"",id:"suggest-input-button",type:"submit"},"Send",-1),vE={key:0,id:"about-container"},xE=z("div",{class:"container-under"},[z("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto! ")],-1),ME=[xE],yE={data(){return{navBar:!0,guide:!1,about:!1,suggest:!1,tabShown:null,guideHow:!0,guideWhat:!1,guideFAQ:!1,isLoading:!0,loadingHistory:[],showEmailDisclaimer:!1}},methods:{handleLoadingBar(n){},handleNavBar(n){switch(n){case"show":this.navBar=!0;break;case"hide":this.navBar=!1;break}},handleModals(n){switch(n){case"guide":this.about=!1,this.suggest=!1,this.guide=!0,document.documentElement.style.setProperty("--guide-background-color","rgba(255, 0, 0, 0.7"),document.documentElement.style.setProperty("--guide-font-weight",100),document.documentElement.style.setProperty("--guide-font-size","17px"),document.documentElement.style.setProperty("--about-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--about-font-weight",400),document.documentElement.style.setProperty("--about-font-size","18px"),document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--suggest-font-weight",400),document.documentElement.style.setProperty("--suggest-font-size","18px");break;case"about":this.guide=!1,this.suggest=!1,this.about=!0,document.documentElement.style.setProperty("--about-background-color","rgba(255, 0, 0, 0.7"),document.documentElement.style.setProperty("--about-font-weight",100),document.documentElement.style.setProperty("--about-font-size","17px"),document.documentElement.style.setProperty("--guide-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--guide-font-weight",400),document.documentElement.style.setProperty("--guide-font-size","18px"),document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--suggest-font-weight",400),document.documentElement.style.setProperty("--suggest-font-size","18px");break;case"suggest":this.guide=!1,this.about=!1,this.suggest=!0,document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 0, 0, 0.7"),document.documentElement.style.setProperty("--suggest-font-weight",100),document.documentElement.style.setProperty("--suggest-font-size","17px"),document.documentElement.style.setProperty("--guide-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--guide-font-weight",400),document.documentElement.style.setProperty("--guide-font-size","18px"),document.documentElement.style.setProperty("--about-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--about-font-weight",400),document.documentElement.style.setProperty("--about-font-size","18px");break;default:this.guide=!1,this.about=!1,this.suggest=!1,document.documentElement.style.setProperty("--guide-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--guide-font-weight",400),document.documentElement.style.setProperty("--guide-font-size","18px"),document.documentElement.style.setProperty("--about-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--about-font-weight",400),document.documentElement.style.setProperty("--about-font-size","18px"),document.documentElement.style.setProperty("--suggest-background-color","rgba(255, 255, 255, 0.2"),document.documentElement.style.setProperty("--suggest-font-weight",400),document.documentElement.style.setProperty("--suggest-font-size","18px");break}},handleGuideTabs(n){switch(n){case"what":this.guideHow=!1,this.guideFAQ=!1,this.guideWhat=!0,document.documentElement.style.setProperty("--guideWhat-background-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideWhat-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideWhat-font-weight",100),document.documentElement.style.setProperty("--guideWhat-font-size","32px"),document.documentElement.style.setProperty("--guideWhat-shadow","1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"),document.documentElement.style.setProperty("--guideHow-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideHow-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideHow-font-weight",200),document.documentElement.style.setProperty("--guideHow-font-size","34px"),document.documentElement.style.setProperty("--guideHow-shadow","none"),document.documentElement.style.setProperty("--guideFAQ-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideFAQ-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideFAQ-font-weight",200),document.documentElement.style.setProperty("--guideFAQ-font-size","34px"),document.documentElement.style.setProperty("--guideFAQ-shadow","none");break;case"how":this.guideWhat=!1,this.guideFAQ=!1,this.guideHow=!0,document.documentElement.style.setProperty("--guideHow-background-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideHow-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideHow-font-weight",100),document.documentElement.style.setProperty("--guideHow-font-size","32px"),document.documentElement.style.setProperty("--guideHow-shadow","1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"),document.documentElement.style.setProperty("--guideWhat-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideWhat-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideWhat-font-weight",200),document.documentElement.style.setProperty("--guideWhat-font-size","34px"),document.documentElement.style.setProperty("--guideWhat-shadow","none"),document.documentElement.style.setProperty("--guideFAQ-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideFAQ-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideFAQ-font-weight",200),document.documentElement.style.setProperty("--guideFAQ-font-size","34px"),document.documentElement.style.setProperty("--guideFAQ-shadow","none");break;case"questions":this.guideWhat=!1,this.guideHow=!1,this.guideFAQ=!0,document.documentElement.style.setProperty("--guideFAQ-background-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideFAQ-color","rgba(255, 255, 255, 1)"),document.documentElement.style.setProperty("--guideFAQ-font-weight",100),document.documentElement.style.setProperty("--guideFAQ-font-size","32px"),document.documentElement.style.setProperty("--guideFAQ-shadow","1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"),document.documentElement.style.setProperty("--guideWhat-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideWhat-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideWhat-font-weight",200),document.documentElement.style.setProperty("--guideWhat-font-size","34px"),document.documentElement.style.setProperty("--guideWhat-shadow","none"),document.documentElement.style.setProperty("--guideHow-background-color","rgba(255, 255, 255, 0.5)"),document.documentElement.style.setProperty("--guideHow-color","rgba(0, 0, 0, 1)"),document.documentElement.style.setProperty("--guideHow-font-weight",200),document.documentElement.style.setProperty("--guideHow-font-size","34px"),document.documentElement.style.setProperty("--guideHow-shadow","none");break}}}},SE=Object.assign(yE,{__name:"App",setup(n){return(e,t)=>(Mt(),Rt(Jt,null,[$S,z("div",KS,[lt(Wn,{duration:550,name:"nested"},{default:vn(()=>[e.navBar?Qt("",!0):(Mt(),Rt("div",ZS,[(Mt(),Rt("svg",{cursor:"pointer",onClick:t[0]||(t[0]=i=>e.handleNavBar("show")),fill:"rgba(255, 255, 255, 0.9)",height:"100px",width:"100px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"-168.3 -168.3 666.60 666.60","xml:space":"preserve",stroke:"#ffffff",transform:"rotate(180)matrix(1, 0, 0, 1, 0, 0)","stroke-width":"14.52"},tb))]))]),_:1}),lt(Wn,{duration:550,name:"nested"},{default:vn(()=>[e.navBar?(Mt(),Rt("div",nb,[ib,sb,z("div",rb,[z("div",{onClick:t[1]||(t[1]=i=>e.handleModals("guide")),id:"bar-guide"},ab),z("div",{onClick:t[2]||(t[2]=i=>e.handleModals("about")),id:"bar-about"},cb),z("div",{onClick:t[3]||(t[3]=i=>e.handleModals("suggest")),id:"bar-suggest"},hb),e.navBar?(Mt(),Rt("div",{key:0,id:"show-top",onClick:t[4]||(t[4]=i=>{e.handleNavBar("hide"),e.handleModals()})},pb)):Qt("",!0)])])):Qt("",!0)]),_:1}),lt(Wn,{duration:550,name:"nested"},{default:vn(()=>[e.guide?(Mt(),Rt("div",mb,[z("div",gb,[z("div",{onClick:t[5]||(t[5]=i=>e.handleModals()),class:"container-close"},vb),z("div",{onClick:t[6]||(t[6]=i=>e.handleGuideTabs("how")),class:"container-item"},Mb),z("div",{onClick:t[7]||(t[7]=i=>e.handleGuideTabs("what")),class:"container-item"},Sb),z("div",{onClick:t[8]||(t[8]=i=>e.handleGuideTabs("questions")),class:"container-item"},Eb)]),e.guideWhat?(Mt(),Rt("div",Tb,[e.chosenRead?Qt("",!0):(Mt(),Rt("div",wb,Lb))])):Qt("",!0),e.guideHow?(Mt(),Rt("div",Db,Hb)):Qt("",!0),e.guideFAQ?(Mt(),Rt("div",kb,Xb)):Qt("",!0)])):Qt("",!0)]),_:1}),lt(Wn,{duration:550,name:"nested"},{default:vn(()=>[e.about?(Mt(),Rt("div",jb,qb)):Qt("",!0)]),_:1}),lt(Wn,{duration:550,name:"nested"},{default:vn(()=>[e.suggest?(Mt(),Rt("div",$b,[z("div",Kb,[z("div",{onClick:t[9]||(t[9]=i=>e.handleModals()),class:"container-close"},Qb)]),z("div",Jb,[z("form",eE,[lt(Wn,{duration:"550",name:"email-disclaimer-transition"},{default:vn(()=>[e.showEmailDisclaimer?(Mt(),Rt("div",tE,iE)):Qt("",!0)]),_:1}),z("div",sE,[rE,oE,aE,z("label",lE,[ot(" Email "),z("span",cE,[ot(" optional "),z("p",{class:"disclaimer-label",onTouchstart:t[10]||(t[10]=i=>e.showEmailDisclaimer=!0),onTouchend:t[11]||(t[11]=i=>e.showEmailDisclaimer=!1),onMouseover:t[12]||(t[12]=i=>e.showEmailDisclaimer=!0),onMouseleave:t[13]||(t[13]=i=>e.showEmailDisclaimer=!1)},"(why do I ask for this?)",32)]),uE])]),hE,dE,fE,pE,mE,gE,_E])])])):Qt("",!0)]),_:1}),lt(Wn,{duration:550,name:"nested"},{default:vn(()=>[e.tabShown=="what"?(Mt(),Rt("div",vE,ME)):Qt("",!0)]),_:1}),lt(qS,{onClick:t[14]||(t[14]=i=>e.handleModals())})])],64))}}),bE=cg(SE);bE.mount("#app");
