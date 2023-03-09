(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function fu(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function du(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ve(s)?SE(s):du(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ve(t))return t;if(Ce(t))return t}}const TE=/;(?![^(]*\))/g,IE=/:([^]+)/,AE=/\/\*.*?\*\//gs;function SE(t){const e={};return t.replace(AE,"").split(TE).forEach(n=>{if(n){const s=n.split(IE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function pu(t){let e="";if(Ve(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=pu(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const CE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",OE=fu(CE);function eg(t){return!!t||t===""}const qx=t=>Ve(t)?t:t==null?"":J(t)||Ce(t)&&(t.toString===rg||!te(t.toString))?JSON.stringify(t,tg,2):String(t),tg=(t,e)=>e&&e.__v_isRef?tg(t,e.value):Js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:ng(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!J(e)&&!ig(e)?String(e):e,Ie={},Xs=[],Mt=()=>{},NE=()=>!1,DE=/^on[^a-z]/,Da=t=>DE.test(t),gu=t=>t.startsWith("onUpdate:"),lt=Object.assign,mu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},RE=Object.prototype.hasOwnProperty,he=(t,e)=>RE.call(t,e),J=Array.isArray,Js=t=>Ra(t)==="[object Map]",ng=t=>Ra(t)==="[object Set]",te=t=>typeof t=="function",Ve=t=>typeof t=="string",yu=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",sg=t=>Ce(t)&&te(t.then)&&te(t.catch),rg=Object.prototype.toString,Ra=t=>rg.call(t),kE=t=>Ra(t).slice(8,-1),ig=t=>Ra(t)==="[object Object]",_u=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xo=fu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},LE=/-(\w)/g,en=ka(t=>t.replace(LE,(e,n)=>n?n.toUpperCase():"")),PE=/\B([A-Z])/g,Sr=ka(t=>t.replace(PE,"-$1").toLowerCase()),La=ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oc=ka(t=>t?`on${La(t)}`:""),gi=(t,e)=>!Object.is(t,e),Mo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Zo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},fl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hf;const xE=()=>hf||(hf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let kt;class og{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ME(t){return new og(t)}function $E(t,e=kt){e&&e.active&&e.effects.push(t)}function UE(){return kt}const vu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ag=t=>(t.w&Hn)>0,cg=t=>(t.n&Hn)>0,FE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Hn},VE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ag(r)&&!cg(r)?r.delete(t):e[n++]=r,r.w&=~Hn,r.n&=~Hn}e.length=n}},dl=new WeakMap;let Yr=0,Hn=1;const pl=30;let Lt;const _s=Symbol(""),gl=Symbol("");class Eu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$E(this,s)}run(){if(!this.active)return this.fn();let e=Lt,n=$n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Lt,Lt=this,$n=!0,Hn=1<<++Yr,Yr<=pl?FE(this):ff(this),this.fn()}finally{Yr<=pl&&VE(this),Hn=1<<--Yr,Lt=this.parent,$n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Lt===this?this.deferStop=!0:this.active&&(ff(this),this.onStop&&this.onStop(),this.active=!1)}}function ff(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let $n=!0;const lg=[];function Cr(){lg.push($n),$n=!1}function Or(){const t=lg.pop();$n=t===void 0?!0:t}function ht(t,e,n){if($n&&Lt){let s=dl.get(t);s||dl.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=vu()),ug(r)}}function ug(t,e){let n=!1;Yr<=pl?cg(t)||(t.n|=Hn,n=!ag(t)):n=!t.has(Lt),n&&(t.add(Lt),Lt.deps.push(t))}function gn(t,e,n,s,r,i){const o=dl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?_u(n)&&a.push(o.get("length")):(a.push(o.get(_s)),Js(t)&&a.push(o.get(gl)));break;case"delete":J(t)||(a.push(o.get(_s)),Js(t)&&a.push(o.get(gl)));break;case"set":Js(t)&&a.push(o.get(_s));break}if(a.length===1)a[0]&&ml(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ml(vu(c))}}function ml(t,e){const n=J(t)?t:[...t];for(const s of n)s.computed&&df(s);for(const s of n)s.computed||df(s)}function df(t,e){(t!==Lt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const BE=fu("__proto__,__v_isRef,__isVue"),hg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yu)),jE=wu(),HE=wu(!1,!0),KE=wu(!0),pf=WE();function WE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ge(this);for(let i=0,o=this.length;i<o;i++)ht(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ge)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Cr();const s=ge(this)[e].apply(this,n);return Or(),s}}),t}function qE(t){const e=ge(this);return ht(e,"has",t),e.hasOwnProperty(t)}function wu(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?cw:mg:e?gg:pg).get(s))return s;const o=J(s);if(!t){if(o&&he(pf,r))return Reflect.get(pf,r,i);if(r==="hasOwnProperty")return qE}const a=Reflect.get(s,r,i);return(yu(r)?hg.has(r):BE(r))||(t||ht(s,"get",r),e)?a:Je(a)?o&&_u(r)?a:a.value:Ce(a)?t?yg(a):Ui(a):a}}const zE=fg(),GE=fg(!0);function fg(t=!1){return function(n,s,r,i){let o=n[s];if(ir(o)&&Je(o)&&!Je(r))return!1;if(!t&&(!ea(r)&&!ir(r)&&(o=ge(o),r=ge(r)),!J(n)&&Je(o)&&!Je(r)))return o.value=r,!0;const a=J(n)&&_u(s)?Number(s)<n.length:he(n,s),c=Reflect.set(n,s,r,i);return n===ge(i)&&(a?gi(r,o)&&gn(n,"set",s,r):gn(n,"add",s,r)),c}}function YE(t,e){const n=he(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&gn(t,"delete",e,void 0),s}function QE(t,e){const n=Reflect.has(t,e);return(!yu(e)||!hg.has(e))&&ht(t,"has",e),n}function XE(t){return ht(t,"iterate",J(t)?"length":_s),Reflect.ownKeys(t)}const dg={get:jE,set:zE,deleteProperty:YE,has:QE,ownKeys:XE},JE={get:KE,set(t,e){return!0},deleteProperty(t,e){return!0}},ZE=lt({},dg,{get:HE,set:GE}),bu=t=>t,Pa=t=>Reflect.getPrototypeOf(t);function go(t,e,n=!1,s=!1){t=t.__v_raw;const r=ge(t),i=ge(e);n||(e!==i&&ht(r,"get",e),ht(r,"get",i));const{has:o}=Pa(r),a=s?bu:n?Su:mi;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function mo(t,e=!1){const n=this.__v_raw,s=ge(n),r=ge(t);return e||(t!==r&&ht(s,"has",t),ht(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function yo(t,e=!1){return t=t.__v_raw,!e&&ht(ge(t),"iterate",_s),Reflect.get(t,"size",t)}function gf(t){t=ge(t);const e=ge(this);return Pa(e).has.call(e,t)||(e.add(t),gn(e,"add",t,t)),this}function mf(t,e){e=ge(e);const n=ge(this),{has:s,get:r}=Pa(n);let i=s.call(n,t);i||(t=ge(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?gi(e,o)&&gn(n,"set",t,e):gn(n,"add",t,e),this}function yf(t){const e=ge(this),{has:n,get:s}=Pa(e);let r=n.call(e,t);r||(t=ge(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&gn(e,"delete",t,void 0),i}function _f(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&gn(t,"clear",void 0,void 0),n}function _o(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ge(o),c=e?bu:t?Su:mi;return!t&&ht(a,"iterate",_s),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function vo(t,e,n){return function(...s){const r=this.__v_raw,i=ge(r),o=Js(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?bu:e?Su:mi;return!e&&ht(i,"iterate",c?gl:_s),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Sn(t){return function(...e){return t==="delete"?!1:this}}function ew(){const t={get(i){return go(this,i)},get size(){return yo(this)},has:mo,add:gf,set:mf,delete:yf,clear:_f,forEach:_o(!1,!1)},e={get(i){return go(this,i,!1,!0)},get size(){return yo(this)},has:mo,add:gf,set:mf,delete:yf,clear:_f,forEach:_o(!1,!0)},n={get(i){return go(this,i,!0)},get size(){return yo(this,!0)},has(i){return mo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:_o(!0,!1)},s={get(i){return go(this,i,!0,!0)},get size(){return yo(this,!0)},has(i){return mo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:_o(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=vo(i,!1,!1),n[i]=vo(i,!0,!1),e[i]=vo(i,!1,!0),s[i]=vo(i,!0,!0)}),[t,n,e,s]}const[tw,nw,sw,rw]=ew();function Tu(t,e){const n=e?t?rw:sw:t?nw:tw;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(he(n,r)&&r in s?n:s,r,i)}const iw={get:Tu(!1,!1)},ow={get:Tu(!1,!0)},aw={get:Tu(!0,!1)},pg=new WeakMap,gg=new WeakMap,mg=new WeakMap,cw=new WeakMap;function lw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uw(t){return t.__v_skip||!Object.isExtensible(t)?0:lw(kE(t))}function Ui(t){return ir(t)?t:Iu(t,!1,dg,iw,pg)}function hw(t){return Iu(t,!1,ZE,ow,gg)}function yg(t){return Iu(t,!0,JE,aw,mg)}function Iu(t,e,n,s,r){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=uw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Zs(t){return ir(t)?Zs(t.__v_raw):!!(t&&t.__v_isReactive)}function ir(t){return!!(t&&t.__v_isReadonly)}function ea(t){return!!(t&&t.__v_isShallow)}function _g(t){return Zs(t)||ir(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function Au(t){return Zo(t,"__v_skip",!0),t}const mi=t=>Ce(t)?Ui(t):t,Su=t=>Ce(t)?yg(t):t;function vg(t){$n&&Lt&&(t=ge(t),ug(t.dep||(t.dep=vu())))}function Eg(t,e){t=ge(t);const n=t.dep;n&&ml(n)}function Je(t){return!!(t&&t.__v_isRef===!0)}function Cu(t){return wg(t,!1)}function fw(t){return wg(t,!0)}function wg(t,e){return Je(t)?t:new dw(t,e)}class dw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:mi(e)}get value(){return vg(this),this._value}set value(e){const n=this.__v_isShallow||ea(e)||ir(e);e=n?e:ge(e),gi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:mi(e),Eg(this))}}function gt(t){return Je(t)?t.value:t}const pw={get:(t,e,n)=>gt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Je(r)&&!Je(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function bg(t){return Zs(t)?t:new Proxy(t,pw)}var Tg;class gw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Tg]=!1,this._dirty=!0,this.effect=new Eu(e,()=>{this._dirty||(this._dirty=!0,Eg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ge(this);return vg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Tg="__v_isReadonly";function mw(t,e,n=!1){let s,r;const i=te(t);return i?(s=t,r=Mt):(s=t.get,r=t.set),new gw(s,r,i||!r,n)}function Un(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){xa(i,e,n)}return r}function $t(t,e,n,s){if(te(t)){const i=Un(t,e,n,s);return i&&sg(i)&&i.catch(o=>{xa(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push($t(t[i],e,n,s));return r}function xa(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Un(c,null,10,[t,o,a]);return}}yw(t,n,r,s)}function yw(t,e,n,s=!0){console.error(t)}let yi=!1,yl=!1;const Qe=[];let qt=0;const er=[];let on=null,ls=0;const Ig=Promise.resolve();let Ou=null;function Ag(t){const e=Ou||Ig;return t?e.then(this?t.bind(this):t):e}function _w(t){let e=qt+1,n=Qe.length;for(;e<n;){const s=e+n>>>1;_i(Qe[s])<t?e=s+1:n=s}return e}function Nu(t){(!Qe.length||!Qe.includes(t,yi&&t.allowRecurse?qt+1:qt))&&(t.id==null?Qe.push(t):Qe.splice(_w(t.id),0,t),Sg())}function Sg(){!yi&&!yl&&(yl=!0,Ou=Ig.then(Og))}function vw(t){const e=Qe.indexOf(t);e>qt&&Qe.splice(e,1)}function Ew(t){J(t)?er.push(...t):(!on||!on.includes(t,t.allowRecurse?ls+1:ls))&&er.push(t),Sg()}function vf(t,e=yi?qt+1:0){for(;e<Qe.length;e++){const n=Qe[e];n&&n.pre&&(Qe.splice(e,1),e--,n())}}function Cg(t){if(er.length){const e=[...new Set(er)];if(er.length=0,on){on.push(...e);return}for(on=e,on.sort((n,s)=>_i(n)-_i(s)),ls=0;ls<on.length;ls++)on[ls]();on=null,ls=0}}const _i=t=>t.id==null?1/0:t.id,ww=(t,e)=>{const n=_i(t)-_i(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Og(t){yl=!1,yi=!0,Qe.sort(ww);const e=Mt;try{for(qt=0;qt<Qe.length;qt++){const n=Qe[qt];n&&n.active!==!1&&Un(n,null,14)}}finally{qt=0,Qe.length=0,Cg(),yi=!1,Ou=null,(Qe.length||er.length)&&Og()}}function bw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ie;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ie;f&&(r=n.map(p=>Ve(p)?p.trim():p)),h&&(r=n.map(fl))}let a,c=s[a=Oc(e)]||s[a=Oc(en(e))];!c&&i&&(c=s[a=Oc(Sr(e))]),c&&$t(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$t(l,t,6,r)}}function Ng(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=Ng(l,e,!0);u&&(a=!0,lt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&s.set(t,null),null):(J(i)?i.forEach(c=>o[c]=null):lt(o,i),Ce(t)&&s.set(t,o),o)}function Ma(t,e){return!t||!Da(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,Sr(e))||he(t,e))}let Tt=null,$a=null;function ta(t){const e=Tt;return Tt=t,$a=t&&t.type.__scopeId||null,e}function zx(t){$a=t}function Gx(){$a=null}function rs(t,e=Tt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Of(-1);const i=ta(e);let o;try{o=t(...r)}finally{ta(i),s._d&&Of(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Nc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:y}=t;let b,T;const R=ta(t);try{if(n.shapeFlag&4){const P=r||s;b=Wt(u.call(P,P,h,i,p,f,m)),T=c}else{const P=e;b=Wt(P.length>1?P(i,{attrs:c,slots:a,emit:l}):P(i,null)),T=e.props?c:Tw(c)}}catch(P){ri.length=0,xa(P,t,1),b=We(Is)}let k=b;if(T&&y!==!1){const P=Object.keys(T),{shapeFlag:H}=k;P.length&&H&7&&(o&&P.some(gu)&&(T=Iw(T,o)),k=or(k,T))}return n.dirs&&(k=or(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),b=k,ta(R),b}const Tw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Da(n))&&((e||(e={}))[n]=t[n]);return e},Iw=(t,e)=>{const n={};for(const s in t)(!gu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Aw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ef(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ma(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ef(s,o,l):!0:!!o;return!1}function Ef(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ma(n,i))return!0}return!1}function Sw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Cw=t=>t.__isSuspense;function Ow(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):Ew(t)}function $o(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function Gt(t,e,n=!1){const s=xe||Tt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&te(e)?e.call(s.proxy):e}}const Eo={};function Uo(t,e,n){return Dg(t,e,n)}function Dg(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ie){const a=UE()===(xe==null?void 0:xe.scope)?xe:null;let c,l=!1,u=!1;if(Je(t)?(c=()=>t.value,l=ea(t)):Zs(t)?(c=()=>t,s=!0):J(t)?(u=!0,l=t.some(k=>Zs(k)||ea(k)),c=()=>t.map(k=>{if(Je(k))return k.value;if(Zs(k))return hs(k);if(te(k))return Un(k,a,2)})):te(t)?e?c=()=>Un(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),$t(t,a,3,[f])}:c=Mt,e&&s){const k=c;c=()=>hs(k())}let h,f=k=>{h=T.onStop=()=>{Un(k,a,4)}},p;if(Ei)if(f=Mt,e?n&&$t(e,a,3,[c(),u?[]:void 0,f]):c(),r==="sync"){const k=wb();p=k.__watcherHandles||(k.__watcherHandles=[])}else return Mt;let m=u?new Array(t.length).fill(Eo):Eo;const y=()=>{if(T.active)if(e){const k=T.run();(s||l||(u?k.some((P,H)=>gi(P,m[H])):gi(k,m)))&&(h&&h(),$t(e,a,3,[k,m===Eo?void 0:u&&m[0]===Eo?[]:m,f]),m=k)}else T.run()};y.allowRecurse=!!e;let b;r==="sync"?b=y:r==="post"?b=()=>ut(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>Nu(y));const T=new Eu(c,b);e?n?y():m=T.run():r==="post"?ut(T.run.bind(T),a&&a.suspense):T.run();const R=()=>{T.stop(),a&&a.scope&&mu(a.scope.effects,T)};return p&&p.push(R),R}function Nw(t,e,n){const s=this.proxy,r=Ve(t)?t.includes(".")?Rg(s,t):()=>s[t]:t.bind(s,s);let i;te(e)?i=e:(i=e.handler,n=e);const o=xe;ar(this);const a=Dg(r,i.bind(s),n);return o?ar(o):vs(),a}function Rg(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function hs(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Je(t))hs(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)hs(t[n],e);else if(ng(t)||Js(t))t.forEach(n=>{hs(n,e)});else if(ig(t))for(const n in t)hs(t[n],e);return t}function kg(t){return te(t)?{setup:t,name:t.name}:t}const Fo=t=>!!t.type.__asyncLoader,Lg=t=>t.type.__isKeepAlive;function Dw(t,e){Pg(t,"a",e)}function Rw(t,e){Pg(t,"da",e)}function Pg(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ua(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Lg(r.parent.vnode)&&kw(s,e,n,r),r=r.parent}}function kw(t,e,n,s){const r=Ua(e,t,s,!0);Mg(()=>{mu(s[e],r)},n)}function Ua(t,e,n=xe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Cr(),ar(n);const a=$t(e,n,t,o);return vs(),Or(),a});return s?r.unshift(i):r.push(i),i}}const Tn=t=>(e,n=xe)=>(!Ei||t==="sp")&&Ua(t,(...s)=>e(...s),n),Lw=Tn("bm"),xg=Tn("m"),Pw=Tn("bu"),xw=Tn("u"),Mw=Tn("bum"),Mg=Tn("um"),$w=Tn("sp"),Uw=Tn("rtg"),Fw=Tn("rtc");function Vw(t,e=xe){Ua("ec",t,e)}function Yx(t,e){const n=Tt;if(n===null)return t;const s=Ba(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ie]=e[i];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&hs(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ts(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Cr(),$t(c,n,8,[t.el,a,t,e]),Or())}}const $g="components";function Qx(t,e){return jw($g,t,!0,e)||t}const Bw=Symbol();function jw(t,e,n=!0,s=!1){const r=Tt||xe;if(r){const i=r.type;if(t===$g){const a=_b(i,!1);if(a&&(a===e||a===en(e)||a===La(en(e))))return i}const o=wf(r[t]||i[t],e)||wf(r.appContext[t],e);return!o&&s?i:o}}function wf(t,e){return t&&(t[e]||t[en(e)]||t[La(en(e))])}function Xx(t,e,n,s){let r;const i=n&&n[s];if(J(t)||Ve(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const _l=t=>t?Gg(t)?Ba(t)||t.proxy:_l(t.parent):null,si=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_l(t.parent),$root:t=>_l(t.root),$emit:t=>t.emit,$options:t=>Du(t),$forceUpdate:t=>t.f||(t.f=()=>Nu(t.update)),$nextTick:t=>t.n||(t.n=Ag.bind(t.proxy)),$watch:t=>Nw.bind(t)}),Dc=(t,e)=>t!==Ie&&!t.__isScriptSetup&&he(t,e),Hw={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Dc(s,e))return o[e]=1,s[e];if(r!==Ie&&he(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&he(l,e))return o[e]=3,i[e];if(n!==Ie&&he(n,e))return o[e]=4,n[e];vl&&(o[e]=0)}}const u=si[e];let h,f;if(u)return e==="$attrs"&&ht(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&he(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,he(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Dc(r,e)?(r[e]=n,!0):s!==Ie&&he(s,e)?(s[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&he(t,o)||Dc(e,o)||(a=i[0])&&he(a,o)||he(s,o)||he(si,o)||he(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let vl=!0;function Kw(t){const e=Du(t),n=t.proxy,s=t.ctx;vl=!1,e.beforeCreate&&bf(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:y,deactivated:b,beforeDestroy:T,beforeUnmount:R,destroyed:k,unmounted:P,render:H,renderTracked:q,renderTriggered:se,errorCaptured:ye,serverPrefetch:_e,expose:fe,inheritAttrs:be,components:Oe,directives:Ne,filters:st}=e;if(l&&Ww(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const ue=o[ie];te(ue)&&(s[ie]=ue.bind(n))}if(r){const ie=r.call(n,n);Ce(ie)&&(t.data=Ui(ie))}if(vl=!0,i)for(const ie in i){const ue=i[ie],Me=te(ue)?ue.bind(n,n):te(ue.get)?ue.get.bind(n,n):Mt,Et=!te(ue)&&te(ue.set)?ue.set.bind(n):Mt,rt=wt({get:Me,set:Et});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Re=>rt.value=Re})}if(a)for(const ie in a)Ug(a[ie],s,n,ie);if(c){const ie=te(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(ue=>{$o(ue,ie[ue])})}u&&bf(u,t,"c");function ce(ie,ue){J(ue)?ue.forEach(Me=>ie(Me.bind(n))):ue&&ie(ue.bind(n))}if(ce(Lw,h),ce(xg,f),ce(Pw,p),ce(xw,m),ce(Dw,y),ce(Rw,b),ce(Vw,ye),ce(Fw,q),ce(Uw,se),ce(Mw,R),ce(Mg,P),ce($w,_e),J(fe))if(fe.length){const ie=t.exposed||(t.exposed={});fe.forEach(ue=>{Object.defineProperty(ie,ue,{get:()=>n[ue],set:Me=>n[ue]=Me})})}else t.exposed||(t.exposed={});H&&t.render===Mt&&(t.render=H),be!=null&&(t.inheritAttrs=be),Oe&&(t.components=Oe),Ne&&(t.directives=Ne)}function Ww(t,e,n=Mt,s=!1){J(t)&&(t=El(t));for(const r in t){const i=t[r];let o;Ce(i)?"default"in i?o=Gt(i.from||r,i.default,!0):o=Gt(i.from||r):o=Gt(i),Je(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function bf(t,e,n){$t(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ug(t,e,n,s){const r=s.includes(".")?Rg(n,s):()=>n[s];if(Ve(t)){const i=e[t];te(i)&&Uo(r,i)}else if(te(t))Uo(r,t.bind(n));else if(Ce(t))if(J(t))t.forEach(i=>Ug(i,e,n,s));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&Uo(r,i,t)}}function Du(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>na(c,l,o,!0)),na(c,e,o)),Ce(e)&&i.set(e,c),c}function na(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&na(t,i,n,!0),r&&r.forEach(o=>na(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=qw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qw={data:Tf,props:is,emits:is,methods:is,computed:is,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:is,directives:is,watch:Gw,provide:Tf,inject:zw};function Tf(t,e){return e?t?function(){return lt(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function zw(t,e){return is(El(t),El(e))}function El(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function is(t,e){return t?lt(lt(Object.create(null),t),e):e}function Gw(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function Yw(t,e,n,s=!1){const r={},i={};Zo(i,Va,1),t.propsDefaults=Object.create(null),Fg(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:hw(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Qw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ge(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ma(t.emitsOptions,f))continue;const p=e[f];if(c)if(he(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const m=en(f);r[m]=wl(c,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{Fg(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!he(e,h)&&((u=Sr(h))===h||!he(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=wl(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!he(e,h))&&(delete i[h],l=!0)}l&&gn(t,"set","$attrs")}function Fg(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(xo(c))continue;const l=e[c];let u;r&&he(r,u=en(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ma(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ge(n),l=a||Ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=wl(r,c,h,l[h],t,!he(l,h))}}return o}function wl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(ar(r),s=l[n]=c.call(null,e),vs())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Sr(n))&&(s=!0))}return s}function Vg(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[f,p]=Vg(h,e,!0);lt(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ce(t)&&s.set(t,Xs),Xs;if(J(i))for(let u=0;u<i.length;u++){const h=en(i[u]);If(h)&&(o[h]=Ie)}else if(i)for(const u in i){const h=en(u);if(If(h)){const f=i[u],p=o[h]=J(f)||te(f)?{type:f}:Object.assign({},f);if(p){const m=Cf(Boolean,p.type),y=Cf(String,p.type);p[0]=m>-1,p[1]=y<0||m<y,(m>-1||he(p,"default"))&&a.push(h)}}}const l=[o,a];return Ce(t)&&s.set(t,l),l}function If(t){return t[0]!=="$"}function Af(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Sf(t,e){return Af(t)===Af(e)}function Cf(t,e){return J(e)?e.findIndex(n=>Sf(n,t)):te(e)&&Sf(e,t)?0:-1}const Bg=t=>t[0]==="_"||t==="$stable",Ru=t=>J(t)?t.map(Wt):[Wt(t)],Xw=(t,e,n)=>{if(e._n)return e;const s=rs((...r)=>Ru(e(...r)),n);return s._c=!1,s},jg=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Bg(r))continue;const i=t[r];if(te(i))e[r]=Xw(r,i,s);else if(i!=null){const o=Ru(i);e[r]=()=>o}}},Hg=(t,e)=>{const n=Ru(e);t.slots.default=()=>n},Jw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),Zo(e,"_",n)):jg(e,t.slots={})}else t.slots={},e&&Hg(t,e);Zo(t.slots,Va,1)},Zw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(lt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,jg(e,r)),o=e}else e&&(Hg(t,e),o={default:1});if(i)for(const a in r)!Bg(a)&&!(a in o)&&delete r[a]};function Kg(){return{app:null,config:{isNativeTag:NE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eb=0;function tb(t,e){return function(s,r=null){te(s)||(s=Object.assign({},s)),r!=null&&!Ce(r)&&(r=null);const i=Kg(),o=new Set;let a=!1;const c=i.app={_uid:eb++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:bb,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=We(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ba(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function bl(t,e,n,s,r=!1){if(J(t)){t.forEach((f,p)=>bl(f,e&&(J(e)?e[p]:e),n,s,r));return}if(Fo(s)&&!r)return;const i=s.shapeFlag&4?Ba(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,he(h,l)&&(h[l]=null)):Je(l)&&(l.value=null)),te(c))Un(c,a,12,[o,u]);else{const f=Ve(c),p=Je(c);if(f||p){const m=()=>{if(t.f){const y=f?he(h,c)?h[c]:u[c]:c.value;r?J(y)&&mu(y,i):J(y)?y.includes(i)||y.push(i):f?(u[c]=[i],he(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,he(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ut(m,n)):m()}}}const ut=Ow;function nb(t){return sb(t)}function sb(t,e){const n=xE();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Mt,insertStaticContent:m}=t,y=(d,g,_,v=null,w=null,N=null,M=!1,O=null,D=!!g.dynamicChildren)=>{if(d===g)return;d&&!Hr(d,g)&&(v=L(d),Re(d,w,N,!0),d=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:I,ref:B,shapeFlag:$}=g;switch(I){case Fa:b(d,g,_,v);break;case Is:T(d,g,_,v);break;case Vo:d==null&&R(g,_,v,M);break;case Kt:Oe(d,g,_,v,w,N,M,O,D);break;default:$&1?H(d,g,_,v,w,N,M,O,D):$&6?Ne(d,g,_,v,w,N,M,O,D):($&64||$&128)&&I.process(d,g,_,v,w,N,M,O,D,oe)}B!=null&&w&&bl(B,d&&d.ref,N,g||d,!g)},b=(d,g,_,v)=>{if(d==null)s(g.el=a(g.children),_,v);else{const w=g.el=d.el;g.children!==d.children&&l(w,g.children)}},T=(d,g,_,v)=>{d==null?s(g.el=c(g.children||""),_,v):g.el=d.el},R=(d,g,_,v)=>{[d.el,d.anchor]=m(d.children,g,_,v,d.el,d.anchor)},k=({el:d,anchor:g},_,v)=>{let w;for(;d&&d!==g;)w=f(d),s(d,_,v),d=w;s(g,_,v)},P=({el:d,anchor:g})=>{let _;for(;d&&d!==g;)_=f(d),r(d),d=_;r(g)},H=(d,g,_,v,w,N,M,O,D)=>{M=M||g.type==="svg",d==null?q(g,_,v,w,N,M,O,D):_e(d,g,w,N,M,O,D)},q=(d,g,_,v,w,N,M,O)=>{let D,I;const{type:B,props:$,shapeFlag:V,transition:z,dirs:re}=d;if(D=d.el=o(d.type,N,$&&$.is,$),V&8?u(D,d.children):V&16&&ye(d.children,D,null,v,w,N&&B!=="foreignObject",M,O),re&&ts(d,null,v,"created"),se(D,d,d.scopeId,M,v),$){for(const de in $)de!=="value"&&!xo(de)&&i(D,de,null,$[de],N,d.children,v,w,x);"value"in $&&i(D,"value",null,$.value),(I=$.onVnodeBeforeMount)&&Ht(I,v,d)}re&&ts(d,null,v,"beforeMount");const ve=(!w||w&&!w.pendingBranch)&&z&&!z.persisted;ve&&z.beforeEnter(D),s(D,g,_),((I=$&&$.onVnodeMounted)||ve||re)&&ut(()=>{I&&Ht(I,v,d),ve&&z.enter(D),re&&ts(d,null,v,"mounted")},w)},se=(d,g,_,v,w)=>{if(_&&p(d,_),v)for(let N=0;N<v.length;N++)p(d,v[N]);if(w){let N=w.subTree;if(g===N){const M=w.vnode;se(d,M,M.scopeId,M.slotScopeIds,w.parent)}}},ye=(d,g,_,v,w,N,M,O,D=0)=>{for(let I=D;I<d.length;I++){const B=d[I]=O?Rn(d[I]):Wt(d[I]);y(null,B,g,_,v,w,N,M,O)}},_e=(d,g,_,v,w,N,M)=>{const O=g.el=d.el;let{patchFlag:D,dynamicChildren:I,dirs:B}=g;D|=d.patchFlag&16;const $=d.props||Ie,V=g.props||Ie;let z;_&&ns(_,!1),(z=V.onVnodeBeforeUpdate)&&Ht(z,_,g,d),B&&ts(g,d,_,"beforeUpdate"),_&&ns(_,!0);const re=w&&g.type!=="foreignObject";if(I?fe(d.dynamicChildren,I,O,_,v,re,N):M||ue(d,g,O,null,_,v,re,N,!1),D>0){if(D&16)be(O,g,$,V,_,v,w);else if(D&2&&$.class!==V.class&&i(O,"class",null,V.class,w),D&4&&i(O,"style",$.style,V.style,w),D&8){const ve=g.dynamicProps;for(let de=0;de<ve.length;de++){const ke=ve[de],Rt=$[ke],Us=V[ke];(Us!==Rt||ke==="value")&&i(O,ke,Rt,Us,w,d.children,_,v,x)}}D&1&&d.children!==g.children&&u(O,g.children)}else!M&&I==null&&be(O,g,$,V,_,v,w);((z=V.onVnodeUpdated)||B)&&ut(()=>{z&&Ht(z,_,g,d),B&&ts(g,d,_,"updated")},v)},fe=(d,g,_,v,w,N,M)=>{for(let O=0;O<g.length;O++){const D=d[O],I=g[O],B=D.el&&(D.type===Kt||!Hr(D,I)||D.shapeFlag&70)?h(D.el):_;y(D,I,B,null,v,w,N,M,!0)}},be=(d,g,_,v,w,N,M)=>{if(_!==v){if(_!==Ie)for(const O in _)!xo(O)&&!(O in v)&&i(d,O,_[O],null,M,g.children,w,N,x);for(const O in v){if(xo(O))continue;const D=v[O],I=_[O];D!==I&&O!=="value"&&i(d,O,I,D,M,g.children,w,N,x)}"value"in v&&i(d,"value",_.value,v.value)}},Oe=(d,g,_,v,w,N,M,O,D)=>{const I=g.el=d?d.el:a(""),B=g.anchor=d?d.anchor:a("");let{patchFlag:$,dynamicChildren:V,slotScopeIds:z}=g;z&&(O=O?O.concat(z):z),d==null?(s(I,_,v),s(B,_,v),ye(g.children,_,B,w,N,M,O,D)):$>0&&$&64&&V&&d.dynamicChildren?(fe(d.dynamicChildren,V,_,w,N,M,O),(g.key!=null||w&&g===w.subTree)&&Wg(d,g,!0)):ue(d,g,_,B,w,N,M,O,D)},Ne=(d,g,_,v,w,N,M,O,D)=>{g.slotScopeIds=O,d==null?g.shapeFlag&512?w.ctx.activate(g,_,v,M,D):st(g,_,v,w,N,M,D):dt(d,g,D)},st=(d,g,_,v,w,N,M)=>{const O=d.component=db(d,v,w);if(Lg(d)&&(O.ctx.renderer=oe),pb(O),O.asyncDep){if(w&&w.registerDep(O,ce),!d.el){const D=O.subTree=We(Is);T(null,D,g,_)}return}ce(O,d,g,_,w,N,M)},dt=(d,g,_)=>{const v=g.component=d.component;if(Aw(d,g,_))if(v.asyncDep&&!v.asyncResolved){ie(v,g,_);return}else v.next=g,vw(v.update),v.update();else g.el=d.el,v.vnode=g},ce=(d,g,_,v,w,N,M)=>{const O=()=>{if(d.isMounted){let{next:B,bu:$,u:V,parent:z,vnode:re}=d,ve=B,de;ns(d,!1),B?(B.el=re.el,ie(d,B,M)):B=re,$&&Mo($),(de=B.props&&B.props.onVnodeBeforeUpdate)&&Ht(de,z,B,re),ns(d,!0);const ke=Nc(d),Rt=d.subTree;d.subTree=ke,y(Rt,ke,h(Rt.el),L(Rt),d,w,N),B.el=ke.el,ve===null&&Sw(d,ke.el),V&&ut(V,w),(de=B.props&&B.props.onVnodeUpdated)&&ut(()=>Ht(de,z,B,re),w)}else{let B;const{el:$,props:V}=g,{bm:z,m:re,parent:ve}=d,de=Fo(g);if(ns(d,!1),z&&Mo(z),!de&&(B=V&&V.onVnodeBeforeMount)&&Ht(B,ve,g),ns(d,!0),$&&Z){const ke=()=>{d.subTree=Nc(d),Z($,d.subTree,d,w,null)};de?g.type.__asyncLoader().then(()=>!d.isUnmounted&&ke()):ke()}else{const ke=d.subTree=Nc(d);y(null,ke,_,v,d,w,N),g.el=ke.el}if(re&&ut(re,w),!de&&(B=V&&V.onVnodeMounted)){const ke=g;ut(()=>Ht(B,ve,ke),w)}(g.shapeFlag&256||ve&&Fo(ve.vnode)&&ve.vnode.shapeFlag&256)&&d.a&&ut(d.a,w),d.isMounted=!0,g=_=v=null}},D=d.effect=new Eu(O,()=>Nu(I),d.scope),I=d.update=()=>D.run();I.id=d.uid,ns(d,!0),I()},ie=(d,g,_)=>{g.component=d;const v=d.vnode.props;d.vnode=g,d.next=null,Qw(d,g.props,v,_),Zw(d,g.children,_),Cr(),vf(),Or()},ue=(d,g,_,v,w,N,M,O,D=!1)=>{const I=d&&d.children,B=d?d.shapeFlag:0,$=g.children,{patchFlag:V,shapeFlag:z}=g;if(V>0){if(V&128){Et(I,$,_,v,w,N,M,O,D);return}else if(V&256){Me(I,$,_,v,w,N,M,O,D);return}}z&8?(B&16&&x(I,w,N),$!==I&&u(_,$)):B&16?z&16?Et(I,$,_,v,w,N,M,O,D):x(I,w,N,!0):(B&8&&u(_,""),z&16&&ye($,_,v,w,N,M,O,D))},Me=(d,g,_,v,w,N,M,O,D)=>{d=d||Xs,g=g||Xs;const I=d.length,B=g.length,$=Math.min(I,B);let V;for(V=0;V<$;V++){const z=g[V]=D?Rn(g[V]):Wt(g[V]);y(d[V],z,_,null,w,N,M,O,D)}I>B?x(d,w,N,!0,!1,$):ye(g,_,v,w,N,M,O,D,$)},Et=(d,g,_,v,w,N,M,O,D)=>{let I=0;const B=g.length;let $=d.length-1,V=B-1;for(;I<=$&&I<=V;){const z=d[I],re=g[I]=D?Rn(g[I]):Wt(g[I]);if(Hr(z,re))y(z,re,_,null,w,N,M,O,D);else break;I++}for(;I<=$&&I<=V;){const z=d[$],re=g[V]=D?Rn(g[V]):Wt(g[V]);if(Hr(z,re))y(z,re,_,null,w,N,M,O,D);else break;$--,V--}if(I>$){if(I<=V){const z=V+1,re=z<B?g[z].el:v;for(;I<=V;)y(null,g[I]=D?Rn(g[I]):Wt(g[I]),_,re,w,N,M,O,D),I++}}else if(I>V)for(;I<=$;)Re(d[I],w,N,!0),I++;else{const z=I,re=I,ve=new Map;for(I=re;I<=V;I++){const pt=g[I]=D?Rn(g[I]):Wt(g[I]);pt.key!=null&&ve.set(pt.key,I)}let de,ke=0;const Rt=V-re+1;let Us=!1,cf=0;const jr=new Array(Rt);for(I=0;I<Rt;I++)jr[I]=0;for(I=z;I<=$;I++){const pt=d[I];if(ke>=Rt){Re(pt,w,N,!0);continue}let jt;if(pt.key!=null)jt=ve.get(pt.key);else for(de=re;de<=V;de++)if(jr[de-re]===0&&Hr(pt,g[de])){jt=de;break}jt===void 0?Re(pt,w,N,!0):(jr[jt-re]=I+1,jt>=cf?cf=jt:Us=!0,y(pt,g[jt],_,null,w,N,M,O,D),ke++)}const lf=Us?rb(jr):Xs;for(de=lf.length-1,I=Rt-1;I>=0;I--){const pt=re+I,jt=g[pt],uf=pt+1<B?g[pt+1].el:v;jr[I]===0?y(null,jt,_,uf,w,N,M,O,D):Us&&(de<0||I!==lf[de]?rt(jt,_,uf,2):de--)}}},rt=(d,g,_,v,w=null)=>{const{el:N,type:M,transition:O,children:D,shapeFlag:I}=d;if(I&6){rt(d.component.subTree,g,_,v);return}if(I&128){d.suspense.move(g,_,v);return}if(I&64){M.move(d,g,_,oe);return}if(M===Kt){s(N,g,_);for(let $=0;$<D.length;$++)rt(D[$],g,_,v);s(d.anchor,g,_);return}if(M===Vo){k(d,g,_);return}if(v!==2&&I&1&&O)if(v===0)O.beforeEnter(N),s(N,g,_),ut(()=>O.enter(N),w);else{const{leave:$,delayLeave:V,afterLeave:z}=O,re=()=>s(N,g,_),ve=()=>{$(N,()=>{re(),z&&z()})};V?V(N,re,ve):ve()}else s(N,g,_)},Re=(d,g,_,v=!1,w=!1)=>{const{type:N,props:M,ref:O,children:D,dynamicChildren:I,shapeFlag:B,patchFlag:$,dirs:V}=d;if(O!=null&&bl(O,null,_,d,!0),B&256){g.ctx.deactivate(d);return}const z=B&1&&V,re=!Fo(d);let ve;if(re&&(ve=M&&M.onVnodeBeforeUnmount)&&Ht(ve,g,d),B&6)E(d.component,_,v);else{if(B&128){d.suspense.unmount(_,v);return}z&&ts(d,null,g,"beforeUnmount"),B&64?d.type.remove(d,g,_,w,oe,v):I&&(N!==Kt||$>0&&$&64)?x(I,g,_,!1,!0):(N===Kt&&$&384||!w&&B&16)&&x(D,g,_),v&&Nt(d)}(re&&(ve=M&&M.onVnodeUnmounted)||z)&&ut(()=>{ve&&Ht(ve,g,d),z&&ts(d,null,g,"unmounted")},_)},Nt=d=>{const{type:g,el:_,anchor:v,transition:w}=d;if(g===Kt){Dt(_,v);return}if(g===Vo){P(d);return}const N=()=>{r(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:O}=w,D=()=>M(_,N);O?O(d.el,N,D):D()}else N()},Dt=(d,g)=>{let _;for(;d!==g;)_=f(d),r(d),d=_;r(g)},E=(d,g,_)=>{const{bum:v,scope:w,update:N,subTree:M,um:O}=d;v&&Mo(v),w.stop(),N&&(N.active=!1,Re(M,d,g,_)),O&&ut(O,g),ut(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},x=(d,g,_,v=!1,w=!1,N=0)=>{for(let M=N;M<d.length;M++)Re(d[M],g,_,v,w)},L=d=>d.shapeFlag&6?L(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),U=(d,g,_)=>{d==null?g._vnode&&Re(g._vnode,null,null,!0):y(g._vnode||null,d,g,null,null,null,_),vf(),Cg(),g._vnode=d},oe={p:y,um:Re,m:rt,r:Nt,mt:st,mc:ye,pc:ue,pbc:fe,n:L,o:t};let Te,Z;return e&&([Te,Z]=e(oe)),{render:U,hydrate:Te,createApp:tb(U,Te)}}function ns({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Wg(t,e,n=!1){const s=t.children,r=e.children;if(J(s)&&J(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Rn(r[i]),a.el=o.el),n||Wg(o,a)),a.type===Fa&&(a.el=o.el)}}function rb(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ib=t=>t.__isTeleport,Kt=Symbol(void 0),Fa=Symbol(void 0),Is=Symbol(void 0),Vo=Symbol(void 0),ri=[];let Pt=null;function Dn(t=!1){ri.push(Pt=t?null:[])}function ob(){ri.pop(),Pt=ri[ri.length-1]||null}let vi=1;function Of(t){vi+=t}function qg(t){return t.dynamicChildren=vi>0?Pt||Xs:null,ob(),vi>0&&Pt&&Pt.push(t),t}function Tl(t,e,n,s,r,i){return qg(ku(t,e,n,s,r,i,!0))}function Qr(t,e,n,s,r){return qg(We(t,e,n,s,r,!0))}function Il(t){return t?t.__v_isVNode===!0:!1}function Hr(t,e){return t.type===e.type&&t.key===e.key}const Va="__vInternal",zg=({key:t})=>t??null,Bo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ve(t)||Je(t)||te(t)?{i:Tt,r:t,k:e,f:!!n}:t:null;function ku(t,e=null,n=null,s=0,r=null,i=t===Kt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zg(e),ref:e&&Bo(e),scopeId:$a,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Tt};return a?(Lu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),vi>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const We=ab;function ab(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Bw)&&(t=Is),Il(t)){const a=or(t,e,!0);return n&&Lu(a,n),vi>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(vb(t)&&(t=t.__vccOpts),e){e=cb(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=pu(a)),Ce(c)&&(_g(c)&&!J(c)&&(c=lt({},c)),e.style=du(c))}const o=Ve(t)?1:Cw(t)?128:ib(t)?64:Ce(t)?4:te(t)?2:0;return ku(t,e,n,s,r,o,i,!0)}function cb(t){return t?_g(t)||Va in t?lt({},t):t:null}function or(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?ub(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&zg(a),ref:e&&e.ref?n&&r?J(r)?r.concat(Bo(e)):[r,Bo(e)]:Bo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Kt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&or(t.ssContent),ssFallback:t.ssFallback&&or(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function os(t=" ",e=0){return We(Fa,null,t,e)}function lb(t,e){const n=We(Vo,null,t);return n.staticCount=e,n}function Kr(t="",e=!1){return e?(Dn(),Qr(Is,null,t)):We(Is,null,t)}function Wt(t){return t==null||typeof t=="boolean"?We(Is):J(t)?We(Kt,null,t.slice()):typeof t=="object"?Rn(t):We(Fa,null,String(t))}function Rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:or(t)}function Lu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Lu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Va in e)?e._ctx=Tt:r===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),s&64?(n=16,e=[os(e)]):n=8);t.children=e,t.shapeFlag|=n}function ub(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=pu([e.class,s.class]));else if(r==="style")e.style=du([e.style,s.style]);else if(Da(r)){const i=e[r],o=s[r];o&&i!==o&&!(J(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ht(t,e,n,s=null){$t(t,e,7,[n,s])}const hb=Kg();let fb=0;function db(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||hb,i={uid:fb++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new og(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vg(s,r),emitsOptions:Ng(s,r),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:s.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bw.bind(null,i),t.ce&&t.ce(i),i}let xe=null;const ar=t=>{xe=t,t.scope.on()},vs=()=>{xe&&xe.scope.off(),xe=null};function Gg(t){return t.vnode.shapeFlag&4}let Ei=!1;function pb(t,e=!1){Ei=e;const{props:n,children:s}=t.vnode,r=Gg(t);Yw(t,n,r,e),Jw(t,s);const i=r?gb(t,e):void 0;return Ei=!1,i}function gb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Au(new Proxy(t.ctx,Hw));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?yb(t):null;ar(t),Cr();const i=Un(s,t,0,[t.props,r]);if(Or(),vs(),sg(i)){if(i.then(vs,vs),e)return i.then(o=>{Nf(t,o,e)}).catch(o=>{xa(o,t,0)});t.asyncDep=i}else Nf(t,i,e)}else Yg(t,e)}function Nf(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=bg(e)),Yg(t,n)}let Df;function Yg(t,e,n){const s=t.type;if(!t.render){if(!e&&Df&&!s.render){const r=s.template||Du(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=lt(lt({isCustomElement:i,delimiters:a},o),c);s.render=Df(r,l)}}t.render=s.render||Mt}ar(t),Cr(),Kw(t),Or(),vs()}function mb(t){return new Proxy(t.attrs,{get(e,n){return ht(t,"get","$attrs"),e[n]}})}function yb(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=mb(t))},slots:t.slots,emit:t.emit,expose:e}}function Ba(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(bg(Au(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)},has(e,n){return n in e||n in si}}))}function _b(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function vb(t){return te(t)&&"__vccOpts"in t}const wt=(t,e)=>mw(t,e,Ei);function Qg(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!J(e)?Il(e)?We(t,null,[e]):We(t,e):We(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Il(n)&&(n=[n]),We(t,e,n))}const Eb=Symbol(""),wb=()=>Gt(Eb),bb="3.2.47",Tb="http://www.w3.org/2000/svg",us=typeof document<"u"?document:null,Rf=us&&us.createElement("template"),Ib={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?us.createElementNS(Tb,t):us.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>us.createTextNode(t),createComment:t=>us.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>us.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Rf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Rf.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ab(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Sb(t,e,n){const s=t.style,r=Ve(n);if(n&&!r){if(e&&!Ve(e))for(const i in e)n[i]==null&&Al(s,i,"");for(const i in n)Al(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const kf=/\s*!important$/;function Al(t,e,n){if(J(n))n.forEach(s=>Al(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Cb(t,e);kf.test(n)?t.setProperty(Sr(s),n.replace(kf,""),"important"):t[s]=n}}const Lf=["Webkit","Moz","ms"],Rc={};function Cb(t,e){const n=Rc[e];if(n)return n;let s=en(e);if(s!=="filter"&&s in t)return Rc[e]=s;s=La(s);for(let r=0;r<Lf.length;r++){const i=Lf[r]+s;if(i in t)return Rc[e]=i}return e}const Pf="http://www.w3.org/1999/xlink";function Ob(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Pf,e.slice(6,e.length)):t.setAttributeNS(Pf,e,n);else{const i=OE(e);n==null||i&&!eg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Nb(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=eg(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function js(t,e,n,s){t.addEventListener(e,n,s)}function Db(t,e,n,s){t.removeEventListener(e,n,s)}function Rb(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=kb(e);if(s){const l=i[e]=xb(s,r);js(t,a,l,c)}else o&&(Db(t,a,o,c),i[e]=void 0)}}const xf=/(?:Once|Passive|Capture)$/;function kb(t){let e;if(xf.test(t)){e={};let s;for(;s=t.match(xf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sr(t.slice(2)),e]}let kc=0;const Lb=Promise.resolve(),Pb=()=>kc||(Lb.then(()=>kc=0),kc=Date.now());function xb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$t(Mb(s,n.value),e,5,[s])};return n.value=t,n.attached=Pb(),n}function Mb(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Mf=/^on[a-z]/,$b=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Ab(t,s,r):e==="style"?Sb(t,n,s):Da(e)?gu(e)||Rb(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ub(t,e,s,r))?Nb(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ob(t,e,s,r))};function Ub(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Mf.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mf.test(e)&&Ve(n)?!1:e in t}const $f=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>Mo(e,n):e};function Fb(t){t.target.composing=!0}function Uf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jx={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=$f(r);const i=s||r.props&&r.props.type==="number";js(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=fl(a)),t._assign(a)}),n&&js(t,"change",()=>{t.value=t.value.trim()}),e||(js(t,"compositionstart",Fb),js(t,"compositionend",Uf),js(t,"change",Uf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=$f(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&fl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Vb=["ctrl","shift","alt","meta"],Bb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Vb.some(n=>t[`${n}Key`]&&!e.includes(n))},Zx=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Bb[e[r]];if(i&&i(n,e))return}return t(n,...s)},jb=lt({patchProp:$b},Ib);let Ff;function Hb(){return Ff||(Ff=nb(jb))}const Kb=(...t)=>{const e=Hb().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Wb(s);if(!r)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Wb(t){return Ve(t)?document.querySelector(t):t}var qb=!1;/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const zb=Symbol();var Vf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vf||(Vf={}));function Gb(){const t=ME(!0),e=t.run(()=>Cu({}));let n=[],s=[];const r=Au({install(i){r._a=i,i.provide(zb,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!qb?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Yb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new Qb;const f=i<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xb=function(t){const e=Xg(t);return Jg.encodeByteArray(e,!0)},sa=function(t){return Xb(t).replace(/\./g,"")},Zg=function(t){try{return Jg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=()=>Jb().__FIREBASE_DEFAULTS__,eT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zg(t[1]);return e&&JSON.parse(e)},Pu=()=>{try{return Zb()||eT()||tT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},em=t=>{var e,n;return(n=(e=Pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nT=t=>{const e=em(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},sT=()=>{var t;return(t=Pu())===null||t===void 0?void 0:t.config},tm=t=>{var e;return(e=Pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sa(JSON.stringify(n)),sa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function aT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lT(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uT(){try{return typeof indexedDB=="object"}catch{return!1}}function hT(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="FirebaseError";class In extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=fT,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?dT(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new In(r,a,s)}}function dT(t,e){return t.replace(pT,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const pT=/\{\$([^}]+)}/g;function gT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ra(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Bf(i)&&Bf(o)){if(!ra(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Bf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Xr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Jr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mT(t,e){const n=new yT(t,e);return n.subscribe.bind(n)}class yT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");_T(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Lc),r.error===void 0&&(r.error=Lc),r.complete===void 0&&(r.complete=Lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _T(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){return t&&t._delegate?t._delegate:t}class As{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rT;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wT(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ET(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ET(t){return t===as?void 0:t}function wT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const TT={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},IT=pe.INFO,AT={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},ST=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=AT[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xu{constructor(e){this.name=e,this._logLevel=IT,this._logHandler=ST,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const CT=(t,e)=>e.some(n=>t instanceof n);let jf,Hf;function OT(){return jf||(jf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NT(){return Hf||(Hf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nm=new WeakMap,Sl=new WeakMap,sm=new WeakMap,Pc=new WeakMap,Mu=new WeakMap;function DT(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nm.set(n,t)}).catch(()=>{}),Mu.set(e,t),e}function RT(t){if(Sl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sl.set(t,e)}let Cl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kT(t){Cl=t(Cl)}function LT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xc(this),e,...n);return sm.set(s,e.sort?e.sort():[e]),Fn(s)}:NT().includes(t)?function(...e){return t.apply(xc(this),e),Fn(nm.get(this))}:function(...e){return Fn(t.apply(xc(this),e))}}function PT(t){return typeof t=="function"?LT(t):(t instanceof IDBTransaction&&RT(t),CT(t,OT())?new Proxy(t,Cl):t)}function Fn(t){if(t instanceof IDBRequest)return DT(t);if(Pc.has(t))return Pc.get(t);const e=PT(t);return e!==t&&(Pc.set(t,e),Mu.set(e,t)),e}const xc=t=>Mu.get(t);function xT(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Fn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Fn(o.result),c.oldVersion,c.newVersion,Fn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const MT=["get","getKey","getAll","getAllKeys","count"],$T=["put","add","delete","clear"],Mc=new Map;function Kf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=$T.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||MT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Mc.set(e,i),i}kT(t=>({...t,get:(e,n,s)=>Kf(e,n)||t.get(e,n,s),has:(e,n)=>!!Kf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FT(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function FT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ol="@firebase/app",Wf="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new xu("@firebase/app"),VT="@firebase/app-compat",BT="@firebase/analytics-compat",jT="@firebase/analytics",HT="@firebase/app-check-compat",KT="@firebase/app-check",WT="@firebase/auth",qT="@firebase/auth-compat",zT="@firebase/database",GT="@firebase/database-compat",YT="@firebase/functions",QT="@firebase/functions-compat",XT="@firebase/installations",JT="@firebase/installations-compat",ZT="@firebase/messaging",eI="@firebase/messaging-compat",tI="@firebase/performance",nI="@firebase/performance-compat",sI="@firebase/remote-config",rI="@firebase/remote-config-compat",iI="@firebase/storage",oI="@firebase/storage-compat",aI="@firebase/firestore",cI="@firebase/firestore-compat",lI="firebase",uI="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="[DEFAULT]",hI={[Ol]:"fire-core",[VT]:"fire-core-compat",[jT]:"fire-analytics",[BT]:"fire-analytics-compat",[KT]:"fire-app-check",[HT]:"fire-app-check-compat",[WT]:"fire-auth",[qT]:"fire-auth-compat",[zT]:"fire-rtdb",[GT]:"fire-rtdb-compat",[YT]:"fire-fn",[QT]:"fire-fn-compat",[XT]:"fire-iid",[JT]:"fire-iid-compat",[ZT]:"fire-fcm",[eI]:"fire-fcm-compat",[tI]:"fire-perf",[nI]:"fire-perf-compat",[sI]:"fire-rc",[rI]:"fire-rc-compat",[iI]:"fire-gcs",[oI]:"fire-gcs-compat",[aI]:"fire-fst",[cI]:"fire-fst-compat","fire-js":"fire-js",[lI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new Map,Dl=new Map;function fI(t,e){try{t.container.addComponent(e)}catch(n){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cr(t){const e=t.name;if(Dl.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;Dl.set(e,t);for(const n of ia.values())fI(n,t);return!0}function $u(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vn=new Fi("app","Firebase",dI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new As("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=uI;function Uu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Nl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Vn.create("bad-app-name",{appName:String(r)});if(n||(n=sT()),!n)throw Vn.create("no-options");const i=ia.get(r);if(i){if(ra(n,i.options)&&ra(s,i.config))return i;throw Vn.create("duplicate-app",{appName:r})}const o=new bT(r);for(const c of Dl.values())o.addComponent(c);const a=new pI(n,s,o);return ia.set(r,a),a}function rm(t=Nl){const e=ia.get(t);if(!e&&t===Nl)return Uu();if(!e)throw Vn.create("no-app",{appName:t});return e}function Bn(t,e,n){var s;let r=(s=hI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(a.join(" "));return}cr(new As(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="firebase-heartbeat-database",mI=1,wi="firebase-heartbeat-store";let $c=null;function im(){return $c||($c=xT(gI,mI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}}).catch(t=>{throw Vn.create("idb-open",{originalErrorMessage:t.message})})),$c}async function yI(t){try{return(await im()).transaction(wi).objectStore(wi).get(om(t))}catch(e){if(e instanceof In)Ss.warn(e.message);else{const n=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ss.warn(n.message)}}}async function qf(t,e){try{const s=(await im()).transaction(wi,"readwrite");return await s.objectStore(wi).put(e,om(t)),s.done}catch(n){if(n instanceof In)Ss.warn(n.message);else{const s=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ss.warn(s.message)}}}function om(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=1024,vI=30*24*60*60*1e3;class EI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=vI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zf(),{heartbeatsToSend:n,unsentEntries:s}=wI(this._heartbeatsCache.heartbeats),r=sa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function zf(){return new Date().toISOString().substring(0,10)}function wI(t,e=_I){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Gf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Gf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class bI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uT()?hT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gf(t){return sa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t){cr(new As("platform-logger",e=>new UT(e),"PRIVATE")),cr(new As("heartbeat",e=>new EI(e),"PRIVATE")),Bn(Ol,Wf,t),Bn(Ol,Wf,"esm2017"),Bn("fire-js","")}TI("");var II=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Fu=Fu||{},Q=II||self;function oa(){}function ja(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ji(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function AI(t){return Object.prototype.hasOwnProperty.call(t,Uc)&&t[Uc]||(t[Uc]=++SI)}var Uc="closure_uid_"+(1e9*Math.random()>>>0),SI=0;function CI(t,e,n){return t.call.apply(t.bind,arguments)}function OI(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=CI:Ze=OI,Ze.apply(null,arguments)}function wo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Qn(){this.s=this.s,this.o=this.o}var NI=0;Qn.prototype.s=!1;Qn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),NI!=0)&&AI(this)};Qn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const am=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Yf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ja(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var DI=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",oa,e),Q.removeEventListener("test",oa,e)}catch{}return t}();function aa(t){return/^[\s\xa0]*$/.test(t)}var Qf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Fc(t,e){return t<e?-1:t>e?1:0}function Ha(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function zt(t){return Ha().indexOf(t)!=-1}function Bu(t){return Bu[" "](t),t}Bu[" "]=oa;function RI(t){var e=PI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kI=zt("Opera"),lr=zt("Trident")||zt("MSIE"),cm=zt("Edge"),Rl=cm||lr,lm=zt("Gecko")&&!(Ha().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),LI=Ha().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function um(){var t=Q.document;return t?t.documentMode:void 0}var ca;e:{var Vc="",Bc=function(){var t=Ha();if(lm)return/rv:([^\);]+)(\)|;)/.exec(t);if(cm)return/Edge\/([\d\.]+)/.exec(t);if(lr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(LI)return/WebKit\/(\S+)/.exec(t);if(kI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bc&&(Vc=Bc?Bc[1]:""),lr){var jc=um();if(jc!=null&&jc>parseFloat(Vc)){ca=String(jc);break e}}ca=Vc}var PI={};function xI(){return RI(function(){let t=0;const e=Qf(String(ca)).split("."),n=Qf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Fc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Fc(r[2].length==0,i[2].length==0)||Fc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var kl;if(Q.document&&lr){var Xf=um();kl=Xf||parseInt(ca,10)||void 0}else kl=void 0;var MI=kl;function bi(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(lm){e:{try{Bu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$I[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&bi.X.h.call(this)}}ze(bi,et);var $I={2:"touch",3:"pen",4:"mouse"};bi.prototype.h=function(){bi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Hi="closure_listenable_"+(1e6*Math.random()|0),UI=0;function FI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++UI,this.ba=this.ea=!1}function Ka(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ju(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function hm(t){const e={};for(const n in t)e[n]=t[n];return e}const Jf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Jf.length;i++)n=Jf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Wa(t){this.src=t,this.g={},this.h=0}Wa.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Pl(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new FI(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Ll(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=am(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ka(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Hu="closure_lm_"+(1e6*Math.random()|0),Hc={};function dm(t,e,n,s,r){if(s&&s.once)return gm(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)dm(t,e[i],n,s,r);return null}return n=qu(n),t&&t[Hi]?t.N(e,n,ji(s)?!!s.capture:!!s,r):pm(t,e,n,!1,s,r)}function pm(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ji(r)?!!r.capture:!!r,a=Wu(t);if(a||(t[Hu]=a=new Wa(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=VI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)DI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ym(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VI(){function t(n){return e.call(t.src,t.listener,n)}const e=BI;return t}function gm(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)gm(t,e[i],n,s,r);return null}return n=qu(n),t&&t[Hi]?t.O(e,n,ji(s)?!!s.capture:!!s,r):pm(t,e,n,!0,s,r)}function mm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)mm(t,e[i],n,s,r);else s=ji(s)?!!s.capture:!!s,n=qu(n),t&&t[Hi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Pl(i,n,s,r),-1<n&&(Ka(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pl(e,n,s,r)),(n=-1<t?e[t]:null)&&Ku(n))}function Ku(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Hi])Ll(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ym(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Wu(e))?(Ll(n,t),n.h==0&&(n.src=null,e[Hu]=null)):Ka(t)}}}function ym(t){return t in Hc?Hc[t]:Hc[t]="on"+t}function BI(t,e){if(t.ba)t=!0;else{e=new bi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ku(t),t=n.call(s,e)}return t}function Wu(t){return t=t[Hu],t instanceof Wa?t:null}var Kc="__closure_events_fn_"+(1e9*Math.random()>>>0);function qu(t){return typeof t=="function"?t:(t[Kc]||(t[Kc]=function(e){return t.handleEvent(e)}),t[Kc])}function He(){Qn.call(this),this.i=new Wa(this),this.P=this,this.I=null}ze(He,Qn);He.prototype[Hi]=!0;He.prototype.removeEventListener=function(t,e,n,s){mm(this,t,e,n,s)};function qe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var r=e;e=new et(s,t),fm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=bo(o,s,!0,e)&&r}if(o=e.g=t,r=bo(o,s,!0,e)&&r,r=bo(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=bo(o,s,!1,e)&&r}He.prototype.M=function(){if(He.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ka(n[s]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};He.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function bo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ll(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var zu=Q.JSON.stringify;function jI(){var t=Em;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HI{constructor(){this.h=this.g=null}add(e,n){const s=_m.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var _m=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new KI,t=>t.reset());class KI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WI(t){Q.setTimeout(()=>{throw t},0)}function vm(t,e){xl||qI(),Ml||(xl(),Ml=!0),Em.add(t,e)}var xl;function qI(){var t=Q.Promise.resolve(void 0);xl=function(){t.then(zI)}}var Ml=!1,Em=new HI;function zI(){for(var t;t=jI();){try{t.h.call(t.g)}catch(n){WI(n)}var e=_m;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ml=!1}function qa(t,e){He.call(this),this.h=t||1,this.g=e||Q,this.j=Ze(this.lb,this),this.l=Date.now()}ze(qa,He);F=qa.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),qe(this,"tick"),this.ca&&(Gu(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){qa.X.M.call(this),Gu(this),delete this.g};function Yu(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function wm(t){t.g=Yu(()=>{t.g=null,t.i&&(t.i=!1,wm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GI extends Qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wm(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ti(t){Qn.call(this),this.h=t,this.g={}}ze(Ti,Qn);var Zf=[];function bm(t,e,n,s){Array.isArray(n)||(n&&(Zf[0]=n.toString()),n=Zf);for(var r=0;r<n.length;r++){var i=dm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Tm(t){ju(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ku(e)},t),t.g={}}Ti.prototype.M=function(){Ti.X.M.call(this),Tm(this)};Ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function za(){this.g=!0}za.prototype.Aa=function(){this.g=!1};function YI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function QI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ys(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+JI(t,n)+(s?" "+s:"")})}function XI(t,e){t.info(function(){return"TIMEOUT: "+e})}za.prototype.info=function(){};function JI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return zu(n)}catch{return e}}var Ls={},ed=null;function Ga(){return ed=ed||new He}Ls.Pa="serverreachability";function Im(t){et.call(this,Ls.Pa,t)}ze(Im,et);function Ii(t){const e=Ga();qe(e,new Im(e))}Ls.STAT_EVENT="statevent";function Am(t,e){et.call(this,Ls.STAT_EVENT,t),this.stat=e}ze(Am,et);function ot(t){const e=Ga();qe(e,new Am(e,t))}Ls.Qa="timingevent";function Sm(t,e){et.call(this,Ls.Qa,t),this.size=e}ze(Sm,et);function Ki(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Ya={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Cm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Qu(){}Qu.prototype.h=null;function td(t){return t.h||(t.h=t.i())}function Om(){}var Wi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Xu(){et.call(this,"d")}ze(Xu,et);function Ju(){et.call(this,"c")}ze(Ju,et);var $l;function Qa(){}ze(Qa,Qu);Qa.prototype.g=function(){return new XMLHttpRequest};Qa.prototype.i=function(){return{}};$l=new Qa;function qi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Ti(this),this.O=ZI,t=Rl?125:void 0,this.T=new qa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Nm}function Nm(){this.i=null,this.g="",this.h=!1}var ZI=45e3,Ul={},la={};F=qi.prototype;F.setTimeout=function(t){this.O=t};function Fl(t,e,n){t.K=1,t.v=Ja(mn(e)),t.s=n,t.P=!0,Dm(t,null)}function Dm(t,e){t.F=Date.now(),zi(t),t.A=mn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Um(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Nm,t.g=iy(t.l,n?e:null,!t.s),0<t.N&&(t.L=new GI(Ze(t.La,t,t.g),t.N)),bm(t.S,t.g,"readystatechange",t.ib),e=t.H?hm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ii(),YI(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&cn(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const u=cn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Rl||this.g&&(this.h.h||this.g.fa()||id(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ii(3):Ii(2)),Xa(this);var n=this.g.aa();this.Y=n;t:if(Rm(this)){var s=id(this.g);t="";var r=s.length,i=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fs(this),ii(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,QI(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!aa(a)){var l=a;break t}}l=null}if(n=l)Ys(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Vl(this,n);else{this.i=!1,this.o=3,ot(12),fs(this),ii(this);break e}}this.P?(km(this,u,o),Rl&&this.i&&u==3&&(bm(this.S,this.T,"tick",this.hb),this.T.start())):(Ys(this.j,this.m,o,null),Vl(this,o)),u==4&&fs(this),this.i&&!this.I&&(u==4?ty(this.l,this):(this.i=!1,zi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),fs(this),ii(this)}}}catch{}finally{}};function Rm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function km(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=eA(t,n),r==la){e==4&&(t.o=4,ot(14),s=!1),Ys(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ul){t.o=4,ot(15),Ys(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ys(t.j,t.m,r,null),Vl(t,r);Rm(t)&&r!=la&&r!=Ul&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ih(e),e.K=!0,ot(11))):(Ys(t.j,t.m,n,"[Invalid Chunked Response]"),fs(t),ii(t))}F.hb=function(){if(this.g){var t=cn(this.g),e=this.g.fa();this.C<e.length&&(Xa(this),km(this,t,e),this.i&&t!=4&&zi(this))}};function eA(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?la:(n=Number(e.substring(n,s)),isNaN(n)?Ul:(s+=1,s+n>e.length?la:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.I=!0,fs(this)};function zi(t){t.V=Date.now()+t.O,Lm(t,t.O)}function Lm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ki(Ze(t.gb,t),e)}function Xa(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(XI(this.j,this.A),this.K!=2&&(Ii(),ot(17)),fs(this),this.o=2,ii(this)):Lm(this,this.V-t)};function ii(t){t.l.G==0||t.I||ty(t.l,t)}function fs(t){Xa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Gu(t.T),Tm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Vl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Bl(n.h,t))){if(!t.J&&Bl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)fa(n),tc(n);else break e;rh(n),ot(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ki(Ze(n.cb,n),6e3));if(1>=Bm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ds(n,11)}else if((t.J||n.g==t)&&fa(n),!aa(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Zu(i,i.h),i.h=null))}if(s.D){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,Ae(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ry(s,s.H?s.ka:null,s.V),o.J){jm(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Xa(a),zi(a)),s.g=o}else Zm(s);0<n.i.length&&nc(n)}else l[0]!="stop"&&l[0]!="close"||ds(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ds(n,7):sh(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Ii(4)}catch{}}function tA(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ja(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function nA(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ja(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Pm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ja(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nA(t),s=tA(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var xm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Es(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Es){this.h=e!==void 0?e:t.h,ua(this,t.j),this.s=t.s,this.g=t.g,ha(this,t.m),this.l=t.l,e=t.i;var n=new Ai;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nd(this,n),this.o=t.o}else t&&(n=String(t).match(xm))?(this.h=!!e,ua(this,n[1]||"",!0),this.s=Zr(n[2]||""),this.g=Zr(n[3]||"",!0),ha(this,n[4]),this.l=Zr(n[5]||"",!0),nd(this,n[6]||"",!0),this.o=Zr(n[7]||"")):(this.h=!!e,this.i=new Ai(null,this.h))}Es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ei(e,sd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ei(e,sd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ei(n,n.charAt(0)=="/"?oA:iA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ei(n,cA)),t.join("")};function mn(t){return new Es(t)}function ua(t,e,n){t.j=n?Zr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ha(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nd(t,e,n){e instanceof Ai?(t.i=e,lA(t.i,t.h)):(n||(e=ei(e,aA)),t.i=new Ai(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Ja(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ei(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var sd=/[#\/\?@]/g,iA=/[#\?:]/g,oA=/[#\?]/g,aA=/[#\?@]/g,cA=/#/g;function Ai(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Map,t.h=0,t.i&&sA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Ai.prototype;F.add=function(t,e){Xn(this),this.i=null,t=Nr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Mm(t,e){Xn(t),e=Nr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $m(t,e){return Xn(t),e=Nr(t,e),t.g.has(e)}F.forEach=function(t,e){Xn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.oa=function(){Xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.W=function(t){Xn(this);let e=[];if(typeof t=="string")$m(this,t)&&(e=e.concat(this.g.get(Nr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Xn(this),this.i=null,t=Nr(this,t),$m(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Um(t,e,n){Mm(t,e),0<n.length&&(t.i=null,t.g.set(Nr(t,e),Vu(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Nr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lA(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Mm(this,s),Um(this,r,n))},t)),t.j=e}var uA=class{constructor(e,n){this.h=e,this.g=n}};function Fm(t){this.l=t||hA,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hA=10;function Vm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Bm(t){return t.h?1:t.g?t.g.size:0}function Bl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zu(t,e){t.g?t.g.add(e):t.h=e}function jm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Fm.prototype.cancel=function(){if(this.i=Hm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Hm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vu(t.i)}function eh(){}eh.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};eh.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function fA(){this.g=new eh}function dA(t,e,n){const s=n||"";try{Pm(t,function(r,i){let o=r;ji(r)&&(o=zu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function pA(t,e){const n=new za;if(Q.Image){const s=new Image;s.onload=wo(To,n,s,"TestLoadImage: loaded",!0,e),s.onerror=wo(To,n,s,"TestLoadImage: error",!1,e),s.onabort=wo(To,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=wo(To,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function To(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Gi(t){this.l=t.ac||null,this.j=t.jb||!1}ze(Gi,Qu);Gi.prototype.g=function(){return new Za(this.l,this.j)};Gi.prototype.i=function(t){return function(){return t}}({});function Za(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=th,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Za,He);var th=0;F=Za.prototype;F.open=function(t,e){if(this.readyState!=th)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Si(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yi(this)),this.readyState=th};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Km(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Km(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yi(this):Si(this),this.readyState==3&&Km(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,Yi(this))};F.Ua=function(t){this.g&&(this.response=t,Yi(this))};F.ga=function(){this.g&&Yi(this)};function Yi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Si(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Si(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gA=Q.JSON.parse;function De(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Wm,this.K=this.L=!1}ze(De,He);var Wm="",mA=/^https?$/i,yA=["POST","PUT"];F=De.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$l.g(),this.C=this.u?td(this.u):td($l),this.g.onreadystatechange=Ze(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){rd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Q.FormData&&t instanceof Q.FormData,!(0<=am(yA,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gm(this),0<this.B&&((this.K=_A(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.qa,this)):this.A=Yu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){rd(this,i)}};function _A(t){return lr&&xI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof Fu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function rd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qm(t),ec(t)}function qm(t){t.D||(t.D=!0,qe(t,"complete"),qe(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),ec(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ec(this,!0)),De.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?zm(this):this.fb())};F.fb=function(){zm(this)};function zm(t){if(t.h&&typeof Fu<"u"&&(!t.C[1]||cn(t)!=4||t.aa()!=2)){if(t.v&&cn(t)==4)Yu(t.Ha,0,t);else if(qe(t,"readystatechange"),cn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(xm)[1]||null;if(!r&&Q.self&&Q.self.location){var i=Q.self.location.protocol;r=i.substr(0,i.length-1)}s=!mA.test(r?r.toLowerCase():"")}n=s}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<cn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",qm(t)}}finally{ec(t)}}}}function ec(t,e){if(t.g){Gm(t);const n=t.g,s=t.C[0]?oa:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Gm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function cn(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gA(e)}};function id(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Wm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ym(t){let e="";return ju(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function nh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ym(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Wr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qm(t){this.Ca=0,this.i=[],this.j=new za,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Wr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Wr("baseRetryDelayMs",5e3,t),this.bb=Wr("retryDelaySeedMs",1e4,t),this.$a=Wr("forwardChannelMaxRetries",2,t),this.ta=Wr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Fm(t&&t.concurrentRequestLimit),this.Fa=new fA,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=Qm.prototype;F.ma=8;F.G=1;function sh(t){if(Xm(t),t.G==3){var e=t.U++,n=mn(t.F);Ae(n,"SID",t.I),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Qi(t,n),e=new qi(t,t.j,e,void 0),e.K=2,e.v=Ja(mn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=iy(e.l,null),e.g.da(e.v)),e.F=Date.now(),zi(e)}sy(t)}function tc(t){t.g&&(ih(t),t.g.cancel(),t.g=null)}function Xm(t){tc(t),t.u&&(Q.clearTimeout(t.u),t.u=null),fa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function nc(t){Vm(t.h)||t.m||(t.m=!0,vm(t.Ja,t),t.C=0)}function vA(t,e){return Bm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ki(Ze(t.Ja,t,e),ny(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new qi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=hm(i),fm(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Jm(this,r,e),n=mn(this.F),Ae(n,"RID",t),Ae(n,"CVER",22),this.D&&Ae(n,"X-HTTP-Session-Id",this.D),Qi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Ym(i)))+"&"+e:this.o&&nh(n,this.o,i)),Zu(this.h,r),this.Ya&&Ae(n,"TYPE","init"),this.O?(Ae(n,"$req",e),Ae(n,"SID","null"),r.Z=!0,Fl(r,n,null)):Fl(r,n,e),this.G=2}}else this.G==3&&(t?od(this,t):this.i.length==0||Vm(this.h)||od(this))};function od(t,e){var n;e?n=e.m:n=t.U++;const s=mn(t.F);Ae(s,"SID",t.I),Ae(s,"RID",n),Ae(s,"AID",t.T),Qi(t,s),t.o&&t.s&&nh(s,t.o,t.s),n=new qi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Jm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Zu(t.h,n),Fl(n,s,e)}function Qi(t,e){t.ia&&ju(t.ia,function(n,s){Ae(e,s,n)}),t.l&&Pm({},function(n,s){Ae(e,s,n)})}function Jm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ze(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{dA(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Zm(t){t.g||t.u||(t.Z=1,vm(t.Ia,t),t.A=0)}function rh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ki(Ze(t.Ia,t),ny(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,ey(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ki(Ze(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ot(10),tc(this),ey(this))};function ih(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function ey(t){t.g=new qi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=mn(t.sa);Ae(e,"RID","rpc"),Ae(e,"SID",t.I),Ae(e,"CI",t.L?"0":"1"),Ae(e,"AID",t.T),Ae(e,"TYPE","xmlhttp"),Qi(t,e),t.o&&t.s&&nh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ja(mn(e)),n.s=null,n.P=!0,Dm(n,t)}F.cb=function(){this.v!=null&&(this.v=null,tc(this),rh(this),ot(19))};function fa(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function ty(t,e){var n=null;if(t.g==e){fa(t),ih(t),t.g=null;var s=2}else if(Bl(t.h,e))n=e.D,jm(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ga(),qe(s,new Sm(s,n)),nc(t)}else Zm(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&vA(t,e)||s==2&&rh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ds(t,5);break;case 4:ds(t,10);break;case 3:ds(t,6);break;default:ds(t,2)}}}function ny(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ds(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ze(t.kb,t);n||(n=new Es("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||ua(n,"https"),Ja(n)),pA(n.toString(),s)}else ot(2);t.G=0,t.l&&t.l.va(e),sy(t),Xm(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function sy(t){if(t.G=0,t.la=[],t.l){const e=Hm(t.h);(e.length!=0||t.i.length!=0)&&(Yf(t.la,e),Yf(t.la,t.i),t.h.i.length=0,Vu(t.i),t.i.length=0),t.l.ua()}}function ry(t,e,n){var s=n instanceof Es?mn(n):new Es(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ha(s,s.m);else{var r=Q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Es(null,void 0);s&&ua(i,s),e&&(i.g=e),r&&ha(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ae(s,n,e),Ae(s,"VER",t.ma),Qi(t,s),s}function iy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new De(new Gi({jb:!0})):new De(t.ra),e.Ka(t.H),e}function oy(){}F=oy.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function da(){if(lr&&!(10<=Number(MI)))throw Error("Environmental error: no available transport.")}da.prototype.g=function(t,e){return new yt(t,e)};function yt(t,e){He.call(this),this.g=new Qm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!aa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!aa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Dr(this)}ze(yt,He);yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ry(t,null,t.V),nc(t)};yt.prototype.close=function(){sh(this.g)};yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zu(t),t=n);e.i.push(new uA(e.ab++,t)),e.G==3&&nc(e)};yt.prototype.M=function(){this.g.l=null,delete this.j,sh(this.g),delete this.g,yt.X.M.call(this)};function ay(t){Xu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(ay,Xu);function cy(){Ju.call(this),this.status=1}ze(cy,Ju);function Dr(t){this.g=t}ze(Dr,oy);Dr.prototype.xa=function(){qe(this.g,"a")};Dr.prototype.wa=function(t){qe(this.g,new ay(t))};Dr.prototype.va=function(t){qe(this.g,new cy)};Dr.prototype.ua=function(){qe(this.g,"b")};da.prototype.createWebChannel=da.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;Ya.NO_ERROR=0;Ya.TIMEOUT=8;Ya.HTTP_ERROR=6;Cm.COMPLETE="complete";Om.EventType=Wi;Wi.OPEN="a";Wi.CLOSE="b";Wi.ERROR="c";Wi.MESSAGE="d";He.prototype.listen=He.prototype.N;De.prototype.listenOnce=De.prototype.O;De.prototype.getLastError=De.prototype.Oa;De.prototype.getLastErrorCode=De.prototype.Ea;De.prototype.getStatus=De.prototype.aa;De.prototype.getResponseJson=De.prototype.Sa;De.prototype.getResponseText=De.prototype.fa;De.prototype.send=De.prototype.da;De.prototype.setWithCredentials=De.prototype.Ka;var EA=function(){return new da},wA=function(){return Ga()},Wc=Ya,bA=Cm,TA=Ls,ad={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},IA=Gi,Io=Om,AA=De;const cd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new xu("@firebase/firestore");function ld(){return Cs.logLevel}function j(t,...e){if(Cs.logLevel<=pe.DEBUG){const n=e.map(oh);Cs.debug(`Firestore (${Rr}): ${t}`,...n)}}function yn(t,...e){if(Cs.logLevel<=pe.ERROR){const n=e.map(oh);Cs.error(`Firestore (${Rr}): ${t}`,...n)}}function jl(t,...e){if(Cs.logLevel<=pe.WARN){const n=e.map(oh);Cs.warn(`Firestore (${Rr}): ${t}`,...n)}}function oh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: `+t;throw yn(e),new Error(e)}function we(t,e){t||Y()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class CA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OA{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(we(typeof s.accessToken=="string"),new ly(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Ge(e)}}class NA{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(we(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class DA{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new NA(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kA{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.A=n.token,new RA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=LA(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function ur(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ue(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ue(0,0))}static max(){return new X(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Ci{construct(e,n,s){return new Se(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const PA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Ci{construct(e,n,s){return new Xe(e,n,s)}static isValidIdentifier(e){return PA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new K(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new K(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new K(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Se.fromString(e))}static fromName(e){return new W(Se.fromString(e).popFirst(5))}static empty(){return new W(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Se(e.slice()))}}function xA(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=X.fromTimestamp(s===1e9?new Ue(n+1,0):new Ue(n,s));return new Kn(r,W.empty(),e)}function MA(t){return new Kn(t.readTime,t.key,-1)}class Kn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Kn(X.min(),W.empty(),-1)}static max(){return new Kn(X.max(),W.empty(),-1)}}function $A(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==UA)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new C((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new C((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ji(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ah.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t){return t==null}function pa(t){return t===0&&1/t==-1/0}function BA(t){return typeof t=="number"&&Number.isInteger(t)&&!pa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new jA("Invalid base64 string: "+r):r}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const HA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(t){if(we(!!t),typeof t=="string"){let e=0;const n=HA.exec(t);if(we(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hr(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dy(t){const e=t.mapValue.fields.__previous_value__;return fy(e)?dy(e):e}function Ni(t){const e=Wn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fy(t)?4:KA(t)?9007199254740991:10:Y()}function tn(t,e){if(t===e)return!0;const n=Os(t);if(n!==Os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ni(t).isEqual(Ni(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Wn(s.timestampValue),o=Wn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return hr(s.bytesValue).isEqual(hr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Pe(s.geoPointValue.latitude)===Pe(r.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Pe(s.integerValue)===Pe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Pe(s.doubleValue),o=Pe(r.doubleValue);return i===o?pa(i)===pa(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ur(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ud(i)!==ud(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!tn(i[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Di(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function fr(t,e){if(t===e)return 0;const n=Os(t),s=Os(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Pe(r.integerValue||r.doubleValue),a=Pe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hd(t.timestampValue,e.timestampValue);case 4:return hd(Ni(t),Ni(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(r,i){const o=hr(r),a=hr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=me(o[c],a[c]);if(l!==0)return l}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=me(Pe(r.latitude),Pe(i.latitude));return o!==0?o:me(Pe(r.longitude),Pe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=fr(o[c],a[c]);if(l)return l}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ao.mapValue&&i===Ao.mapValue)return 0;if(r===Ao.mapValue)return 1;if(i===Ao.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=me(a[u],l[u]);if(h!==0)return h;const f=fr(o[a[u]],c[l[u]]);if(f!==0)return f}return me(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Y()}}function hd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Wn(t),s=Wn(e),r=me(n.seconds,s.seconds);return r!==0?r:me(n.nanos,s.nanos)}function dr(t){return Hl(t)}function Hl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Wn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?hr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Hl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Hl(s.fields[a])}`;return i+"}"}(t.mapValue):Y();var e,n}function Kl(t){return!!t&&"integerValue"in t}function ch(t){return!!t&&"arrayValue"in t}function fd(t){return!!t&&"nullValue"in t}function dd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jo(t){return!!t&&"mapValue"in t}function oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=oi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.position=e,this.inclusive=n}}function pd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=fr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function gd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{}class $e extends py{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new qA(e,n,s):n==="array-contains"?new YA(e,s):n==="in"?new QA(e,s):n==="not-in"?new XA(e,s):n==="array-contains-any"?new JA(e,s):new $e(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new zA(e,s):new GA(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fr(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.matchesComparison(fr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class nn extends py{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new nn(e,n)}matches(e){return gy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function gy(t){return t.op==="and"}function my(t){return WA(t)&&gy(t)}function WA(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Wl(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+dr(t.value);if(my(t))return t.filters.map(e=>Wl(e)).join(",");{const e=t.filters.map(n=>Wl(n)).join(",");return`${t.op}(${e})`}}function yy(t,e){return t instanceof $e?function(n,s){return s instanceof $e&&n.op===s.op&&n.field.isEqual(s.field)&&tn(n.value,s.value)}(t,e):t instanceof nn?function(n,s){return s instanceof nn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&yy(i,s.filters[o]),!0):!1}(t,e):void Y()}function _y(t){return t instanceof $e?function(e){return`${e.field.canonicalString()} ${e.op} ${dr(e.value)}`}(t):t instanceof nn?function(e){return e.op.toString()+" {"+e.getFilters().map(_y).join(" ,")+"}"}(t):"Filter"}class qA extends $e{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class zA extends $e{constructor(e,n){super(e,"in",n),this.keys=vy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GA extends $e{constructor(e,n){super(e,"not-in",n),this.keys=vy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class YA extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ch(n)&&Di(n.arrayValue,this.value)}}class QA extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Di(this.value.arrayValue,n)}}class XA extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Di(this.value.arrayValue,n)}}class JA extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ch(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Di(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new So(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new So(this.root,e,this.comparator,!1)}getReverseIterator(){return new So(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new So(this.root,e,this.comparator,!0)}}class So{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ke.RED,this.left=r??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ke(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(e){return new md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Fe(Xe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ur(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!jo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(n)}setAll(e){let n=Xe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=oi(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());jo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];jo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){kr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new bt(oi(this.value))}}function Ey(t){const e=[];return kr(t.fields,(n,s)=>{const r=new Xe([n]);if(jo(s)){const i=Ey(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ye(e,0,X.min(),X.min(),X.min(),bt.empty(),0)}static newFoundDocument(e,n,s,r){return new Ye(e,1,n,X.min(),s,r,0)}static newNoDocument(e,n){return new Ye(e,2,n,X.min(),X.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,X.min(),X.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function yd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new e0(t,e,n,s,r,i,o)}function lh(t){const e=ee(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Wl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>dr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>dr(s)).join(",")),e._t=n}return e._t}function uh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gd(t.startAt,e.startAt)&&gd(t.endAt,e.endAt)}function ql(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function t0(t,e,n,s,r,i,o,a){return new rc(t,e,n,s,r,i,o,a)}function hh(t){return new rc(t)}function _d(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function n0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function s0(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function r0(t){return t.collectionGroup!==null}function tr(t){const e=ee(t);if(e.wt===null){e.wt=[];const n=s0(e),s=n0(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new ai(n)),e.wt.push(new ai(Xe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ai(Xe.keyField(),i))}}}return e.wt}function _n(t){const e=ee(t);if(!e.gt)if(e.limitType==="F")e.gt=yd(e.path,e.collectionGroup,tr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of tr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ai(i.field,o))}const s=e.endAt?new ga(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ga(e.startAt.position,e.startAt.inclusive):null;e.gt=yd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function zl(t,e,n){return new rc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ic(t,e){return uh(_n(t),_n(e))&&t.limitType===e.limitType}function wy(t){return`${lh(_n(t))}|lt:${t.limitType}`}function Gl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>_y(s)).join(", ")}]`),sc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>dr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>dr(s)).join(",")),`Target(${n})`}(_n(t))}; limitType=${t.limitType})`}function oc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):W.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of tr(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=pd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,tr(n),s)||n.endAt&&!function(r,i,o){const a=pd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,tr(n),s))}(t,e)}function i0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function by(t){return(e,n)=>{let s=!1;for(const r of tr(t)){const i=o0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function o0(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?fr(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pa(e)?"-0":e}}function Iy(t){return{integerValue:""+t}}function a0(t,e){return BA(e)?Iy(e):Ty(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this._=void 0}}function c0(t,e,n){return t instanceof ma?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ri?Sy(t,e):t instanceof ki?Cy(t,e):function(s,r){const i=Ay(s,r),o=vd(i)+vd(s.It);return Kl(i)&&Kl(s.It)?Iy(o):Ty(s.Tt,o)}(t,e)}function l0(t,e,n){return t instanceof Ri?Sy(t,e):t instanceof ki?Cy(t,e):n}function Ay(t,e){return t instanceof ya?Kl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ma extends ac{}class Ri extends ac{constructor(e){super(),this.elements=e}}function Sy(t,e){const n=Oy(e);for(const s of t.elements)n.some(r=>tn(r,s))||n.push(s);return{arrayValue:{values:n}}}class ki extends ac{constructor(e){super(),this.elements=e}}function Cy(t,e){let n=Oy(e);for(const s of t.elements)n=n.filter(r=>!tn(r,s));return{arrayValue:{values:n}}}class ya extends ac{constructor(e,n){super(),this.Tt=e,this.It=n}}function vd(t){return Pe(t.integerValue||t.doubleValue)}function Oy(t){return ch(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function u0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ri&&s instanceof Ri||n instanceof ki&&s instanceof ki?ur(n.elements,s.elements,tn):n instanceof ya&&s instanceof ya?tn(n.It,s.It):n instanceof ma&&s instanceof ma}(t.transform,e.transform)}class h0{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ho(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function Ny(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fh(t.key,Ut.none()):new Zi(t.key,t.data,Ut.none());{const n=t.data,s=bt.empty();let r=new Fe(Xe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ps(t.key,s,new xt(r.toArray()),Ut.none())}}function f0(t,e,n){t instanceof Zi?function(s,r,i){const o=s.value.clone(),a=wd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ps?function(s,r,i){if(!Ho(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=wd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Dy(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ci(t,e,n,s){return t instanceof Zi?function(r,i,o,a){if(!Ho(r.precondition,i))return o;const c=r.value.clone(),l=bd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ps?function(r,i,o,a){if(!Ho(r.precondition,i))return o;const c=bd(r.fieldTransforms,a,i),l=i.data;return l.setAll(Dy(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Ho(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function d0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ay(s.transform,r||null);i!=null&&(n===null&&(n=bt.empty()),n.set(s.field,i))}return n||null}function Ed(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ur(n,s,(r,i)=>u0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zi extends cc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ps extends cc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function wd(t,e,n){const s=new Map;we(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,l0(o,a,n[r]))}return s}function bd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,c0(i,o,e))}return s}class fh extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p0 extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,le;function m0(t){switch(t){default:return Y();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Ry(t){if(t===void 0)return yn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Le.OK:return S.OK;case Le.CANCELLED:return S.CANCELLED;case Le.UNKNOWN:return S.UNKNOWN;case Le.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Le.INTERNAL:return S.INTERNAL;case Le.UNAVAILABLE:return S.UNAVAILABLE;case Le.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Le.NOT_FOUND:return S.NOT_FOUND;case Le.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Le.ABORTED:return S.ABORTED;case Le.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Le.DATA_LOSS:return S.DATA_LOSS;default:return Y()}}(le=Le||(Le={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return hy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=new Be(W.comparator);function vn(){return y0}const ky=new Be(W.comparator);function ti(...t){let e=ky;for(const n of t)e=e.insert(n.key,n);return e}function Ly(t){let e=ky;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ps(){return li()}function Py(){return li()}function li(){return new Lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const _0=new Be(W.comparator),v0=new Fe(W.comparator);function ae(...t){let e=v0;for(const n of t)e=e.add(n);return e}const E0=new Fe(me);function xy(){return E0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new lc(X.min(),r,xy(),vn(),ae())}}class eo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new eo(s,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class My{constructor(e,n){this.targetId=e,this.Rt=n}}class $y{constructor(e,n,s=nt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Td{constructor(){this.bt=0,this.vt=Ad(),this.Pt=nt.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=ae(),n=ae(),s=ae();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Y()}}),new eo(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Ad()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class w0{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=vn(),this.Kt=Id(),this.Gt=new Fe(me)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(ql(i))if(s===0){const o=new W(i.path);this.zt(n,o,Ye.newNoDocument(o,X.min()))}else we(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&ql(a.target)){const c=new W(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Ye.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=ae();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new lc(e,n,this.Gt,this.Ut,s);return this.Ut=vn(),this.Kt=Id(),this.Gt=new Fe(me),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.Ot(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Td,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Fe(me),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Td),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Id(){return new Be(W.comparator)}function Ad(){return new Be(W.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),T0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),I0=(()=>({and:"AND",or:"OR"}))();class A0{constructor(e,n){this.databaseId=e,this.yt=n}}function _a(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uy(t,e){return t.yt?e.toBase64():e.toUint8Array()}function S0(t,e){return _a(t,e.toTimestamp())}function Yt(t){return we(!!t),X.fromTimestamp(function(e){const n=Wn(e);return new Ue(n.seconds,n.nanos)}(t))}function dh(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Fy(t){const e=Se.fromString(t);return we(Hy(e)),e}function Yl(t,e){return dh(t.databaseId,e.path)}function qc(t,e){const n=Fy(e);if(n.get(1)!==t.databaseId.projectId)throw new K(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Vy(n))}function Ql(t,e){return dh(t.databaseId,e)}function C0(t){const e=Fy(t);return e.length===4?Se.emptyPath():Vy(e)}function Xl(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vy(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sd(t,e,n){return{name:Yl(t,e),fields:n.value.mapValue.fields}}function O0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(we(l===void 0||typeof l=="string"),nt.fromBase64String(l||"")):(we(l===void 0||l instanceof Uint8Array),nt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:Ry(c.code);return new K(l,c.message||"")}(o);n=new $y(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=qc(t,s.document.name),i=Yt(s.document.updateTime),o=s.document.createTime?Yt(s.document.createTime):X.min(),a=new bt({mapValue:{fields:s.document.fields}}),c=Ye.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ko(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=qc(t,s.document),i=s.readTime?Yt(s.readTime):X.min(),o=Ye.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ko([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=qc(t,s.document),i=s.removedTargetIds||[];n=new Ko([],i,r,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new g0(r),o=s.targetId;n=new My(o,i)}}return n}function N0(t,e){let n;if(e instanceof Zi)n={update:Sd(t,e.key,e.value)};else if(e instanceof fh)n={delete:Yl(t,e.key)};else if(e instanceof Ps)n={update:Sd(t,e.key,e.data),updateMask:U0(e.fieldMask)};else{if(!(e instanceof p0))return Y();n={verify:Yl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ma)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ri)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ki)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ya)return{fieldPath:i.field.canonicalString(),increment:o.It};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:S0(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function D0(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Yt(s.updateTime):Yt(r);return i.isEqual(X.min())&&(i=Yt(r)),new h0(i,s.transformResults||[])}(n,e))):[]}function R0(t,e){return{documents:[Ql(t,e.path)]}}function k0(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ql(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ql(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return jy(nn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Hs(u.field),direction:x0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||sc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function L0(t){let e=C0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){we(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=By(u);return h instanceof nn&&my(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ai(Ks(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,sc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new ga(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new ga(f,h)}(n.endAt)),t0(e,r,o,i,a,"F",c,l)}function P0(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function By(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ks(e.unaryFilter.field);return $e.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ks(e.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ks(e.unaryFilter.field);return $e.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ks(e.unaryFilter.field);return $e.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return $e.create(Ks(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return nn.create(e.compositeFilter.filters.map(n=>By(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function x0(t){return b0[t]}function M0(t){return T0[t]}function $0(t){return I0[t]}function Hs(t){return{fieldPath:t.canonicalString()}}function Ks(t){return Xe.fromServerFormat(t.fieldPath)}function jy(t){return t instanceof $e?function(e){if(e.op==="=="){if(dd(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NAN"}};if(fd(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(dd(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NOT_NAN"}};if(fd(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(e.field),op:M0(e.op),value:e.value}}}(t):t instanceof nn?function(e){const n=e.getFilters().map(s=>jy(s));return n.length===1?n[0]:{compositeFilter:{op:$0(e.op),filters:n}}}(t):Y()}function U0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&f0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ci(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ci(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Py();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Ny(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&ur(this.mutations,e.mutations,(n,s)=>Ed(n,s))&&ur(this.baseMutations,e.baseMutations,(n,s)=>Ed(n,s))}}class ph{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){we(e.mutations.length===s.length);let r=_0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ph(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n,s,r,i=X.min(),o=X.min(),a=nt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ws(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.oe=e}}function j0(t){const e=L0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.Ze=new K0}addToCollectionParentIndex(e,n){return this.Ze.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Kn.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class K0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Fe(Se.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Fe(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new pr(0)}static Sn(){return new pr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.changes=new Lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&ci(s.mutation,r,xt.empty(),Ue.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const r=ps();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ti();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=vn();const o=li(),a=li();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Ps)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ci(u.mutation,l,u.mutation.getFieldMask(),Ue.now())):o.set(l.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new q0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=li();let r=new Be((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||xt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ae()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Py();u.forEach(f=>{if(!i.has(f)){const p=Ny(n.get(f),s.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return W.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):r0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):C.resolve(ps());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ae())).next(u=>({batchId:a,changes:Ly(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let r=ti();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ti();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const c=function(l,u){return new rc(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ye.newInvalidDocument(l)))});let o=ti();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&ci(l.mutation,c,xt.empty(),Ue.now()),oc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return C.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Yt(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:j0(s.bundledQuery),readTime:Yt(s.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.overlays=new Be(W.comparator),this.ss=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ps();return C.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=ps(),i=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ps(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ps(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return C.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new V0(n,s));let i=this.ss.get(n);i===void 0&&(i=ae(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.rs=new Fe(je.os),this.us=new Fe(je.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new je(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new je(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new W(new Se([])),s=new je(n,e),r=new je(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new W(new Se([])),s=new je(n,e),r=new je(n,e+1);let i=ae();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class je{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return W.comparator(e.key,n.key)||me(e.gs,n.gs)}static cs(e,n){return me(e.gs,n.gs)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Fe(je.os)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new F0(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new je(n,0),r=new je(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Fe(me);return n.forEach(r=>{const i=new je(r,0),o=new je(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),C.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;W.isDocumentKey(i)||(i=i.child(""));const o=new je(new W(i),0);let a=new Fe(me);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),C.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){we(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return C.forEach(n.mutations,r=>{const i=new je(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new je(n,0),r=this.ps.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.Rs=e,this.docs=new Be(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let s=vn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ye.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=vn();const o=n.path,a=new W(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||$A(MA(u),s)<=0||(r.has(u.key)||oc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Y()}bs(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new J0(this)}getSize(e){return C.resolve(this.size)}}class J0 extends W0{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.persistence=e,this.vs=new Lr(n=>lh(n),uh),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new gh,this.targetCount=0,this.Ss=pr.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),C.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new pr(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.xn(n),C.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new ah(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Z0(this),this.indexManager=new H0,this.remoteDocumentCache=function(s){return new X0(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new B0(n),this.Os=new G0(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Y0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new Q0(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const r=new tS(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(e,n){return C.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class tS extends FA{constructor(e){super(),this.currentSequenceNumber=e}}class mh{constructor(e){this.persistence=e,this.Bs=new gh,this.Ls=null}static qs(e){return new mh(e)}get Us(){if(this.Ls)return this.Ls;throw Y()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),C.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Us,s=>{const r=W.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,X.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return C.or([()=>C.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=ae(),r=ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new yh(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Fi(e,n,r,s)).next(i=>i||this.$i(e,n))}Mi(e,n){if(_d(n))return C.resolve(null);let s=_n(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=zl(n,null,"F"),s=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ae(...i);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,zl(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,r){return _d(n)||r.isEqual(X.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.$i(e,n):(ld()<=pe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gl(n)),this.qi(e,o,n,xA(r,-1)))})}Bi(e,n){let s=new Fe(by(e));return n.forEach((r,i)=>{oc(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,n){return ld()<=pe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Gl(n)),this.Oi.getDocumentsMatchingQuery(e,n,Kn.min())}qi(e,n,s,r){return this.Oi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Be(me),this.Gi=new Lr(i=>lh(i),uh),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new z0(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function rS(t,e,n,s){return new sS(t,e,n,s)}async function Ky(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ae();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function iS(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=C.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(m=>{const y=c.docVersions.get(p);we(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ae();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Wy(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function oS(t,e){const n=ee(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(nt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(m,y,b){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,p,u)&&a.push(n.Ns.updateTargetData(i,p))});let c=vn(),l=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(aS(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(X.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function aS(t,e,n){let s=ae(),r=ae();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=vn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function cS(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function lS(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new ws(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Jl(t,e,n){const s=ee(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ji(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Cd(t,e,n){const s=ee(t);let r=X.min(),i=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),h=u.Gi.get(l);return h!==void 0?C.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,_n(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:X.min(),n?i:ae())).next(a=>(uS(s,i0(e),a),{documents:a,Yi:i})))}function uS(t,e,n){let s=t.Qi.get(e)||X.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class Od{constructor(){this.activeTargetIds=xy()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hS{constructor(){this.Ur=new Od,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Od,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=this.fo(e,n);j("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(e,o,a,s).then(c=>(j("RestConnection","Received: ",c),c),c=>{throw jl("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=dS[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){return new Promise((i,o)=>{const a=new AA;a.setWithCredentials(!0),a.listenOnce(bA.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Wc.NO_ERROR:const l=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Wc.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new K(S.DEADLINE_EXCEEDED,"Request time out"));break;case Wc.HTTP_ERROR:const u=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(y)>=0?y:S.UNKNOWN}(f.status);o(new K(p,f.message))}else o(new K(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new K(S.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}yo(e,n,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=EA(),o=wA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new IA({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");j("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new pS({Yr:m=>{h?j("Connection","Not sending because WebChannel is closed:",m):(u||(j("Connection","Opening WebChannel transport."),l.open(),u=!0),j("Connection","WebChannel sending:",m),l.send(m))},Zr:()=>l.close()}),p=(m,y,b)=>{m.listen(y,T=>{try{b(T)}catch(R){setTimeout(()=>{throw R},0)}})};return p(l,Io.EventType.OPEN,()=>{h||j("Connection","WebChannel transport opened.")}),p(l,Io.EventType.CLOSE,()=>{h||(h=!0,j("Connection","WebChannel transport closed"),f.oo())}),p(l,Io.EventType.ERROR,m=>{h||(h=!0,jl("Connection","WebChannel transport errored:",m),f.oo(new K(S.UNAVAILABLE,"The operation could not be completed")))}),p(l,Io.EventType.MESSAGE,m=>{var y;if(!h){const b=m.data[0];we(!!b);const T=b,R=T.error||((y=T[0])===null||y===void 0?void 0:y.error);if(R){j("Connection","WebChannel received error:",R);const k=R.status;let P=function(q){const se=Le[q];if(se!==void 0)return Ry(se)}(k),H=R.message;P===void 0&&(P=S.INTERNAL,H="Unknown error status: "+k+" with message "+R.message),h=!0,f.oo(new K(P,H)),l.close()}else j("Connection","WebChannel received:",b),f.uo(b)}}),p(o,TA.STAT_EVENT,m=>{m.stat===ad.PROXY?j("Connection","Detected buffering proxy"):m.stat===ad.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ro()},0),f}}function zc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){return new A0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new qy(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new K(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mS extends zy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=O0(this.Tt,e),s=function(r){if(!("targetChange"in r))return X.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?X.min():i.readTime?Yt(i.readTime):X.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Xl(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=ql(a)?{documents:R0(r,a)}:{query:k0(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Uy(r,i.resumeToken):i.snapshotVersion.compareTo(X.min())>0&&(o.readTime=_a(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=P0(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Xl(this.Tt),n.removeTarget=e,this.qo(n)}}class yS extends zy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=D0(e.writeResults,e.commitTime),s=Yt(e.commitTime);return this.listener.eu(s,n)}return we(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Xl(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>N0(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new K(S.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(S.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(S.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class vS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(yn(n),this.cu=!1):j("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{xs(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c.mu.add(4),await to(c),c.pu.set("Unknown"),c.mu.delete(4),await hc(c)}(this))})}),this.pu=new vS(s,r)}}async function hc(t){if(xs(t))for(const e of t.gu)await e(!0)}async function to(t){for(const e of t.gu)await e(!1)}function Gy(t,e){const n=ee(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Eh(n)?vh(n):Pr(n).Mo()&&_h(n,e))}function Yy(t,e){const n=ee(t),s=Pr(n);n.wu.delete(e),s.Mo()&&Qy(n,e),n.wu.size===0&&(s.Mo()?s.Bo():xs(n)&&n.pu.set("Unknown"))}function _h(t,e){t.Iu.Ft(e.targetId),Pr(t).Jo(e)}function Qy(t,e){t.Iu.Ft(e),Pr(t).Yo(e)}function vh(t){t.Iu=new w0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Pr(t).start(),t.pu.au()}function Eh(t){return xs(t)&&!Pr(t).Oo()&&t.wu.size>0}function xs(t){return ee(t).mu.size===0}function Xy(t){t.Iu=void 0}async function wS(t){t.wu.forEach((e,n)=>{_h(t,e)})}async function bS(t,e){Xy(t),Eh(t)?(t.pu.fu(e),vh(t)):t.pu.set("Unknown")}async function TS(t,e,n){if(t.pu.set("Online"),e instanceof $y&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await va(t,s)}else if(e instanceof Ko?t.Iu.Qt(e):e instanceof My?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(X.min()))try{const s=await Wy(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(nt.EMPTY_BYTE_STRING,c.snapshotVersion)),Qy(r,a);const l=new ws(c.target,a,1,c.sequenceNumber);_h(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await va(t,s)}}async function va(t,e,n){if(!Ji(e))throw e;t.mu.add(1),await to(t),t.pu.set("Offline"),n||(n=()=>Wy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await hc(t)})}function Jy(t,e){return e().catch(n=>va(t,n,e))}async function fc(t){const e=ee(t),n=qn(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;IS(e);)try{const r=await cS(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,AS(e,r)}catch(r){await va(e,r)}Zy(e)&&e_(e)}function IS(t){return xs(t)&&t._u.length<10}function AS(t,e){t._u.push(e);const n=qn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Zy(t){return xs(t)&&!qn(t).Oo()&&t._u.length>0}function e_(t){qn(t).start()}async function SS(t){qn(t).su()}async function CS(t){const e=qn(t);for(const n of t._u)e.tu(n.mutations)}async function OS(t,e,n){const s=t._u.shift(),r=ph.from(s,e,n);await Jy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await fc(t)}async function NS(t,e){e&&qn(t).Xo&&await async function(n,s){if(r=s.code,m0(r)&&r!==S.ABORTED){const i=n._u.shift();qn(n).$o(),await Jy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fc(n)}var r}(t,e),Zy(t)&&e_(t)}async function Dd(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=xs(n);n.mu.add(3),await to(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await hc(n)}async function DS(t,e){const n=ee(t);e?(n.mu.delete(2),await hc(n)):e||(n.mu.add(2),await to(n),n.pu.set("Unknown"))}function Pr(t){return t.Tu||(t.Tu=function(e,n,s){const r=ee(e);return r.ru(),new mS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:wS.bind(null,t),no:bS.bind(null,t),Ho:TS.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Eh(t)?vh(t):t.pu.set("Unknown")):(await t.Tu.stop(),Xy(t))})),t.Tu}function qn(t){return t.Eu||(t.Eu=function(e,n,s){const r=ee(e);return r.ru(),new yS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:SS.bind(null,t),no:NS.bind(null,t),nu:CS.bind(null,t),eu:OS.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await fc(t)):(await t.Eu.stop(),t._u.length>0&&(j("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new wh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bh(t,e){if(yn("AsyncQueue",`${e}: ${t}`),Ji(t))return new K(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=ti(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new nr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof nr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new nr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.Au=new Be(W.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):Y():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class gr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new gr(e,n,nr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.bu=void 0,this.listeners=[]}}class kS{constructor(){this.queries=new Lr(e=>wy(e),ic),this.onlineState="Unknown",this.vu=new Set}}async function t_(t,e){const n=ee(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new RS),r)try{i.bu=await n.onListen(s)}catch(o){const a=bh(o,`Initialization of query '${Gl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.bu&&e.Vu(i.bu)&&Th(n)}async function n_(t,e){const n=ee(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function LS(t,e){const n=ee(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&Th(n)}function PS(t,e,n){const s=ee(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Th(t){t.vu.forEach(e=>{e.next()})}class s_{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new gr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.key=e}}class i_{constructor(e){this.key=e}}class xS{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=ae(),this.mutatedKeys=ae(),this.ju=by(e),this.zu=new nr(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Rd,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),p=oc(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;f&&p?f.data.isEqual(p.data)?m!==y&&(s.track({type:3,doc:p}),b=!0):this.Yu(f,p)||(s.track({type:2,doc:p}),b=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),b=!0):f&&!p&&(s.track({type:1,doc:f}),b=!0,(c||l)&&(a=!0)),b&&(p?(o=o.add(p),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return p(h)-p(f)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new gr(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Rd,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=ae(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new i_(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new r_(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=ae();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return gr.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class MS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class $S{constructor(e){this.key=e,this.ic=!1}}class US{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Lr(a=>wy(a),ic),this.uc=new Map,this.cc=new Set,this.ac=new Be(W.comparator),this.hc=new Map,this.lc=new gh,this.fc={},this.dc=new Map,this._c=pr.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function FS(t,e){const n=YS(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await lS(n.localStore,_n(e));n.isPrimaryClient&&Gy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await VS(n,e,s,a==="current",o.resumeToken)}return r}async function VS(t,e,n,s,r){t.mc=(h,f,p)=>async function(m,y,b,T){let R=y.view.Hu(b);R.Li&&(R=await Cd(m.localStore,y.query,!1).then(({documents:H})=>y.view.Hu(H,R)));const k=T&&T.targetChanges.get(y.targetId),P=y.view.applyChanges(R,m.isPrimaryClient,k);return Ld(m,y.targetId,P.tc),P.snapshot}(t,h,f,p);const i=await Cd(t.localStore,e,!0),o=new xS(e,i.Yi),a=o.Hu(i.documents),c=eo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Ld(t,n,l.tc);const u=new MS(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function BS(t,e){const n=ee(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!ic(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Jl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Yy(n.remoteStore,s.targetId),Zl(n,s.targetId)}).catch(Xi)):(Zl(n,s.targetId),await Jl(n.localStore,s.targetId,!0))}async function jS(t,e,n){const s=QS(t);try{const r=await function(i,o){const a=ee(i),c=Ue.now(),l=o.reduce((f,p)=>f.add(p.key),ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=vn(),m=ae();return a.ji.getEntries(f,l).next(y=>{p=y,p.forEach((b,T)=>{T.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(y=>{u=y;const b=[];for(const T of o){const R=d0(T,u.get(T.key).overlayedDocument);R!=null&&b.push(new Ps(T.key,R,Ey(R.value.mapValue),Ut.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Ly(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Be(me)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await no(s,r.changes),await fc(s.remoteStore)}catch(r){const i=bh(r,"Failed to persist write");n.reject(i)}}async function o_(t,e){const n=ee(t);try{const s=await oS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(we(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?we(o.ic):r.removedDocuments.size>0&&(we(o.ic),o.ic=!1))}),await no(n,s,e)}catch(s){await Xi(s)}}function kd(t,e,n){const s=ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ee(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&Th(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function HS(t,e,n){const s=ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Be(W.comparator);o=o.insert(i,Ye.newNoDocument(i,X.min()));const a=ae().add(i),c=new lc(X.min(),new Map,new Fe(me),o,a);await o_(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),Ih(s)}else await Jl(s.localStore,e,!1).then(()=>Zl(s,e,n)).catch(Xi)}async function KS(t,e){const n=ee(t),s=e.batch.batchId;try{const r=await iS(n.localStore,e);c_(n,s,null),a_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await no(n,r)}catch(r){await Xi(r)}}async function WS(t,e,n){const s=ee(t);try{const r=await function(i,o){const a=ee(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(we(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);c_(s,e,n),a_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await no(s,r)}catch(r){await Xi(r)}}function a_(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function c_(t,e,n){const s=ee(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||l_(t,s)})}function l_(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Yy(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Ih(t))}function Ld(t,e,n){for(const s of n)s instanceof r_?(t.lc.addReference(s.key,e),qS(t,s)):s instanceof i_?(j("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||l_(t,s.key)):Y()}function qS(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(j("SyncEngine","New document in limbo: "+n),t.cc.add(s),Ih(t))}function Ih(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new W(Se.fromString(e)),s=t._c.next();t.hc.set(s,new $S(n)),t.ac=t.ac.insert(n,s),Gy(t.remoteStore,new ws(_n(hh(n.path)),s,2,ah.at))}}async function no(t,e,n){const s=ee(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=yh.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(c,h=>C.forEach(h.Ci,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>C.forEach(h.xi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Ji(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ki.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,m)}}}(s.localStore,i))}async function zS(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await Ky(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new K(S.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await no(n,s.Wi)}}function GS(t,e){const n=ee(t),s=n.hc.get(e);if(s&&s.ic)return ae().add(s.key);{let r=ae();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function YS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=o_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HS.bind(null,e),e.rc.Ho=LS.bind(null,e.eventManager),e.rc.gc=PS.bind(null,e.eventManager),e}function QS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WS.bind(null,e),e}class XS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=uc(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return rS(this.persistence,new nS,e.initialUser,this.Tt)}Tc(e){return new eS(mh.qs,this.Tt)}Ic(e){return new hS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zS.bind(null,this.syncEngine),await DS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kS}createDatastore(e){const n=uc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new gS(r));var r;return function(i,o,a,c){return new _S(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>kd(this.syncEngine,a,0),o=Nd.C()?new Nd:new fS,new ES(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new US(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);j("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await to(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ge.UNAUTHENTICATED,this.clientId=uy.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=bh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function eC(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ky(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function tC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nC(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Dd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dd(e.remoteStore,i)),t.onlineComponents=e}async function nC(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await eC(t,new XS)),t.offlineComponents}async function h_(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await tC(t,new JS)),t.onlineComponents}function sC(t){return h_(t).then(e=>e.syncEngine)}async function f_(t){const e=await h_(t),n=e.eventManager;return n.onListen=FS.bind(null,e.syncEngine),n.onUnlisten=BS.bind(null,e.syncEngine),n}function rC(t,e,n={}){const s=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new u_({next:h=>{i.enqueueAndForget(()=>n_(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new K(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new K(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new s_(hh(o.path),l,{includeMetadataChanges:!0,Ou:!0});return t_(r,u)}(await f_(t),t.asyncQueue,e,n,s)),s.promise}function iC(t,e,n={}){const s=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new u_({next:h=>{i.enqueueAndForget(()=>n_(r,u)),h.fromCache&&a.source==="server"?c.reject(new K(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new s_(o,l,{includeMetadataChanges:!0,Ou:!0});return t_(r,u)}(await f_(t),t.asyncQueue,e,n,s)),s.promise}const Pd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e,n){if(!n)throw new K(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oC(t,e,n,s){if(e===!0&&s===!0)throw new K(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xd(t){if(!W.isDocumentKey(t))throw new K(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Md(t){if(W.isDocumentKey(t))throw new K(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ah(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function En(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ah(t);throw new K(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,oC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $d({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $d(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new SA;switch(n.type){case"gapi":const s=n.client;return new DA(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Pd.get(e);n&&(j("ComponentProvider","Removing Datastore"),Pd.delete(e),n.terminate())}(this),Promise.resolve()}}function aC(t,e,n,s={}){var r;const i=(t=En(t,dc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&jl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ge.MOCK_USER;else{o=iT(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new K(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ge(c)}t._authCredentials=new CA(new ly(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class pc{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new pc(this.firestore,e,this._query)}}class jn extends pc{constructor(e,n,s){super(e,n,hh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new W(e))}withConverter(e){return new jn(this.firestore,e,this._path)}}function cC(t,e,...n){if(t=ft(t),d_("collection","path",e),t instanceof dc){const s=Se.fromString(e,...n);return Md(s),new jn(t,null,s)}{if(!(t instanceof mt||t instanceof jn))throw new K(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return Md(s),new jn(t.firestore,null,s)}}function p_(t,e,...n){if(t=ft(t),arguments.length===1&&(e=uy.R()),d_("doc","path",e),t instanceof dc){const s=Se.fromString(e,...n);return xd(s),new mt(t,null,new W(s))}{if(!(t instanceof mt||t instanceof jn))throw new K(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Se.fromString(e,...n));return xd(s),new mt(t.firestore,t instanceof jn?t.converter:null,new W(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new qy(this,"async_queue_retry"),this.Hc=()=>{const n=zc();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=zc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new hn;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ji(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw yn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=wh.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&Y()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class xr extends dc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new lC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||m_(this),this._firestoreClient.terminate()}}function g_(t,e){const n=typeof t=="object"?t:rm(),s=typeof t=="string"?t:e||"(default)",r=$u(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=nT("firestore");i&&aC(r,...i)}return r}function Sh(t){return t._firestoreClient||m_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function m_(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new VA(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ZS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mr(nt.fromBase64String(e))}catch(n){throw new K(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mr(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=/^__.*__$/;class hC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zi(e,this.data,n,this.fieldTransforms)}}function __(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Nh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Nh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Ea(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(__(this.ra)&&uC.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class fC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||uc(e)}wa(e,n,s,r=!1){return new Nh({ra:e,methodName:n,_a:s,path:Xe.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function v_(t){const e=t._freezeSettings(),n=uc(t._databaseId);return new fC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function E_(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);I_("Data must be an object, but it was:",o,s);const a=b_(s,o);let c,l;if(i.merge)c=new xt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=dC(e,h,n);if(!o.contains(f))throw new K(S.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);gC(u,f)||u.push(f)}c=new xt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new hC(new bt(a),c,l)}function w_(t,e){if(T_(t=ft(t)))return I_("Unsupported field value:",e,t),b_(t,e);if(t instanceof y_)return function(n,s){if(!__(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=w_(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return a0(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ue.fromDate(n);return{timestampValue:_a(s.Tt,r)}}if(n instanceof Ue){const r=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_a(s.Tt,r)}}if(n instanceof Oh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof mr)return{bytesValue:Uy(s.Tt,n._byteString)};if(n instanceof mt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:dh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Ah(n)}`)}(t,e)}function b_(t,e){const n={};return hy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,(s,r)=>{const i=w_(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function T_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Oh||t instanceof mr||t instanceof mt||t instanceof y_)}function I_(t,e,n){if(!T_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ah(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function dC(t,e,n){if((e=ft(e))instanceof Ch)return e._internalPath;if(typeof e=="string")return A_(t,e);throw Ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const pC=new RegExp("[~\\*/\\[\\]]");function A_(t,e,n){if(e.search(pC)>=0)throw Ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ch(...e.split("."))._internalPath}catch{throw Ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ea(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new K(S.INVALID_ARGUMENT,a+t+c)}function gC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(C_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mC extends S_{data(){return super.data()}}function C_(t,e){return typeof e=="string"?A_(t,e):e instanceof Ch?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _C{convertValue(e,n="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const s={};return kr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Oh(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=dy(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const n=Wn(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Se.fromString(e);we(Hy(s));const r=new Oi(s.get(1),s.get(3)),i=new W(s.popFirst(5));return r.isEqual(n)||yn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class N_ extends S_{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(C_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Wo extends N_{data(e={}){return super.data(e)}}class vC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ni(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Wo(this._firestore,this._userDataWriter,s.key,s,new ni(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Wo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ni(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Wo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ni(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:EC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(t){t=En(t,mt);const e=En(t.firestore,xr);return rC(Sh(e),t._key).then(n=>TC(e,t,n))}class D_ extends _C{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function wC(t){t=En(t,pc);const e=En(t.firestore,xr),n=Sh(e),s=new D_(e);return yC(t._query),iC(n,t._query).then(r=>new vC(e,s,t,r))}function nM(t,e,n){t=En(t,mt);const s=En(t.firestore,xr),r=O_(t.converter,e,n);return Dh(s,[E_(v_(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ut.none())])}function bC(t){return Dh(En(t.firestore,xr),[new fh(t._key,Ut.none())])}function sM(t,e){const n=En(t.firestore,xr),s=p_(t),r=O_(t.converter,e);return Dh(n,[E_(v_(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ut.exists(!1))]).then(()=>s)}function Dh(t,e){return function(n,s){const r=new hn;return n.asyncQueue.enqueueAndForget(async()=>jS(await sC(n),s,r)),r.promise}(Sh(t),e)}function TC(t,e,n){const s=n.docs.get(e._key),r=new D_(t);return new N_(t,r,e._key,s,new ni(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Rr=n})(Bi),cr(new As("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new xr(new OA(n.getProvider("auth-internal")),new kA(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Bn(cd,"3.8.4",t),Bn(cd,"3.8.4","esm2017")})();/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ws=typeof window<"u";function IC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Gc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ft(r)?r.map(t):t(r)}return n}const ui=()=>{},Ft=Array.isArray,AC=/\/$/,SC=t=>t.replace(AC,"");function Yc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=DC(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function CC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ud(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function OC(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&yr(e.matched[s],n.matched[r])&&R_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function yr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function R_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!NC(t[n],e[n]))return!1;return!0}function NC(t,e){return Ft(t)?Fd(t,e):Ft(e)?Fd(e,t):t===e}function Fd(t,e){return Ft(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function DC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Li;(function(t){t.pop="pop",t.push="push"})(Li||(Li={}));var hi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hi||(hi={}));function RC(t){if(!t)if(Ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),SC(t)}const kC=/^[^#]+#/;function LC(t,e){return t.replace(kC,"#")+e}function PC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const gc=()=>({left:window.pageXOffset,top:window.pageYOffset});function xC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=PC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vd(t,e){return(history.state?history.state.position-e:-1)+t}const eu=new Map;function MC(t,e){eu.set(t,e)}function $C(t){const e=eu.get(t);return eu.delete(t),e}let UC=()=>location.protocol+"//"+location.host;function k_(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ud(c,"")}return Ud(n,t)+s+r}function FC(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=k_(t,location),m=n.value,y=e.value;let b=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}b=y?f.position-y.position:0}else s(p);r.forEach(T=>{T(n.value,m,{delta:b,type:Li.pop,direction:b?b>0?hi.forward:hi.back:hi.unknown})})};function c(){o=n.value}function l(f){r.push(f);const p=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(Ee({},f.state,{scroll:gc()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Bd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?gc():null}}function VC(t){const{history:e,location:n}=window,s={value:k_(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:UC()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=Ee({},e.state,Bd(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Ee({},r.value,e.state,{forward:c,scroll:gc()});i(u.current,u,!0);const h=Ee({},Bd(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function BC(t){t=RC(t);const e=VC(t),n=FC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ee({location:"",base:t,go:s,createHref:LC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function jC(t){return typeof t=="string"||t&&typeof t=="object"}function L_(t){return typeof t=="string"||typeof t=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},P_=Symbol("");var jd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(jd||(jd={}));function _r(t,e){return Ee(new Error,{type:t,[P_]:!0},e)}function rn(t,e){return t instanceof Error&&P_ in t&&(e==null||!!(t.type&e))}const Hd="[^/]+?",HC={sensitive:!1,strict:!1,start:!0,end:!0},KC=/[.+*?^${}()[\]/\\]/g;function WC(t,e){const n=Ee({},HC,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(KC,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:y,optional:b,regexp:T}=f;i.push({name:m,repeatable:y,optional:b});const R=T||Hd;if(R!==Hd){p+=10;try{new RegExp(`(${R})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${m}" (${R}): `+P.message)}}let k=y?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(k=b&&l.length<2?`(?:/${k})`:"/"+k),b&&(k+="?"),r+=k,p+=20,b&&(p+=-8),y&&(p+=-20),R===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=i[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:y,optional:b}=p,T=m in l?l[m]:"";if(Ft(T)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const R=Ft(T)?T.join("/"):T;if(!R)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function qC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zC(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=qC(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Kd(s))return 1;if(Kd(r))return-1}return r.length-s.length}function Kd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const GC={type:0,value:""},YC=/[a-zA-Z0-9_]/;function QC(t){if(!t)return[[]];if(t==="/")return[[GC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:YC.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function XC(t,e,n){const s=WC(QC(t.path),n),r=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function JC(t,e){const n=[],s=new Map;e=zd({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const p=!f,m=ZC(u);m.aliasOf=f&&f.record;const y=zd(e,u),b=[m];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of k)b.push(Ee({},m,{components:f?f.record.components:m.components,path:P,aliasOf:f?f.record:m}))}let T,R;for(const k of b){const{path:P}=k;if(h&&P[0]!=="/"){const H=h.record.path,q=H[H.length-1]==="/"?"":"/";k.path=h.record.path+(P&&q+P)}if(T=XC(k,h,y),f?f.alias.push(T):(R=R||T,R!==T&&R.alias.push(T),p&&u.name&&!qd(T)&&o(u.name)),m.children){const H=m.children;for(let q=0;q<H.length;q++)i(H[q],T,f&&f.children[q])}f=f||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return R?()=>{o(R)}:ui}function o(u){if(L_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&zC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!x_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!qd(u)&&s.set(u.record.name,u)}function l(u,h){let f,p={},m,y;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw _r(1,{location:u});y=f.record.name,p=Ee(Wd(h.params,f.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&Wd(u.params,f.keys.map(R=>R.name))),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(R=>R.re.test(m)),f&&(p=f.parse(m),y=f.record.name);else{if(f=h.name?s.get(h.name):n.find(R=>R.re.test(h.path)),!f)throw _r(1,{location:u,currentLocation:h});y=f.record.name,p=Ee({},h.params,u.params),m=f.stringify(p)}const b=[];let T=f;for(;T;)b.unshift(T.record),T=T.parent;return{name:y,path:m,params:p,matched:b,meta:tO(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Wd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ZC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:eO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function eO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function qd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tO(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function zd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function x_(t,e){return e.children.some(n=>n===t||x_(t,n))}const M_=/#/g,nO=/&/g,sO=/\//g,rO=/=/g,iO=/\?/g,$_=/\+/g,oO=/%5B/g,aO=/%5D/g,U_=/%5E/g,cO=/%60/g,F_=/%7B/g,lO=/%7C/g,V_=/%7D/g,uO=/%20/g;function Rh(t){return encodeURI(""+t).replace(lO,"|").replace(oO,"[").replace(aO,"]")}function hO(t){return Rh(t).replace(F_,"{").replace(V_,"}").replace(U_,"^")}function tu(t){return Rh(t).replace($_,"%2B").replace(uO,"+").replace(M_,"%23").replace(nO,"%26").replace(cO,"`").replace(F_,"{").replace(V_,"}").replace(U_,"^")}function fO(t){return tu(t).replace(rO,"%3D")}function dO(t){return Rh(t).replace(M_,"%23").replace(iO,"%3F")}function pO(t){return t==null?"":dO(t).replace(sO,"%2F")}function wa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function gO(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace($_," "),o=i.indexOf("="),a=wa(o<0?i:i.slice(0,o)),c=o<0?null:wa(i.slice(o+1));if(a in e){let l=e[a];Ft(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Gd(t){let e="";for(let n in t){const s=t[n];if(n=fO(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ft(s)?s.map(i=>i&&tu(i)):[s&&tu(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function mO(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ft(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const yO=Symbol(""),Yd=Symbol(""),mc=Symbol(""),B_=Symbol(""),nu=Symbol("");function qr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function kn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(_r(4,{from:n,to:e})):h instanceof Error?a(h):jC(h)?a(_r(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Qc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(_O(a)){const l=(a.__vccOpts||a)[e];l&&r.push(kn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=IC(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&kn(f,n,s,i,o)()}))}}return r}function _O(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qd(t){const e=Gt(mc),n=Gt(B_),s=wt(()=>e.resolve(gt(t.to))),r=wt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(yr.bind(null,u));if(f>-1)return f;const p=Xd(c[l-2]);return l>1&&Xd(u)===p&&h[h.length-1].path!==p?h.findIndex(yr.bind(null,c[l-2])):f}),i=wt(()=>r.value>-1&&wO(n.params,s.value.params)),o=wt(()=>r.value>-1&&r.value===n.matched.length-1&&R_(n.params,s.value.params));function a(c={}){return EO(c)?e[gt(t.replace)?"replace":"push"](gt(t.to)).catch(ui):Promise.resolve()}return{route:s,href:wt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const vO=kg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qd,setup(t,{slots:e}){const n=Ui(Qd(t)),{options:s}=Gt(mc),r=wt(()=>({[Jd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Jd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Qg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),cs=vO;function EO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wO(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ft(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Xd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jd=(t,e,n)=>t??e??n,bO=kg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Gt(nu),r=wt(()=>t.route||s.value),i=Gt(Yd,0),o=wt(()=>{let l=gt(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=wt(()=>r.value.matched[o.value]);$o(Yd,wt(()=>o.value+1)),$o(yO,a),$o(nu,r);const c=Cu();return Uo(()=>[c.value,a.value,t.name],([l,u,h],[f,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!yr(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Zd(n.default,{Component:f,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,b=Qg(f,Ee({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Zd(n.default,{Component:b,route:l})||b}}});function Zd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const j_=bO;function TO(t){const e=JC(t.routes,t),n=t.parseQuery||gO,s=t.stringifyQuery||Gd,r=t.history,i=qr(),o=qr(),a=qr(),c=fw(Cn);let l=Cn;Ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Gc.bind(null,E=>""+E),h=Gc.bind(null,pO),f=Gc.bind(null,wa);function p(E,x){let L,U;return L_(E)?(L=e.getRecordMatcher(E),U=x):U=E,e.addRoute(U,L)}function m(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function y(){return e.getRoutes().map(E=>E.record)}function b(E){return!!e.getRecordMatcher(E)}function T(E,x){if(x=Ee({},x||c.value),typeof E=="string"){const d=Yc(n,E,x.path),g=e.resolve({path:d.path},x),_=r.createHref(d.fullPath);return Ee(d,g,{params:f(g.params),hash:wa(d.hash),redirectedFrom:void 0,href:_})}let L;if("path"in E)L=Ee({},E,{path:Yc(n,E.path,x.path).path});else{const d=Ee({},E.params);for(const g in d)d[g]==null&&delete d[g];L=Ee({},E,{params:h(E.params)}),x.params=h(x.params)}const U=e.resolve(L,x),oe=E.hash||"";U.params=u(f(U.params));const Te=CC(s,Ee({},E,{hash:hO(oe),path:U.path})),Z=r.createHref(Te);return Ee({fullPath:Te,hash:oe,query:s===Gd?mO(E.query):E.query||{}},U,{redirectedFrom:void 0,href:Z})}function R(E){return typeof E=="string"?Yc(n,E,c.value.path):Ee({},E)}function k(E,x){if(l!==E)return _r(8,{from:x,to:E})}function P(E){return se(E)}function H(E){return P(Ee(R(E),{replace:!0}))}function q(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:L}=x;let U=typeof L=="function"?L(E):L;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=R(U):{path:U},U.params={}),Ee({query:E.query,hash:E.hash,params:"path"in U?{}:E.params},U)}}function se(E,x){const L=l=T(E),U=c.value,oe=E.state,Te=E.force,Z=E.replace===!0,d=q(L);if(d)return se(Ee(R(d),{state:typeof d=="object"?Ee({},oe,d.state):oe,force:Te,replace:Z}),x||L);const g=L;g.redirectedFrom=x;let _;return!Te&&OC(s,U,L)&&(_=_r(16,{to:g,from:U}),Et(U,U,!0,!1)),(_?Promise.resolve(_):_e(g,U)).catch(v=>rn(v)?rn(v,2)?v:Me(v):ie(v,g,U)).then(v=>{if(v){if(rn(v,2))return se(Ee({replace:Z},R(v.to),{state:typeof v.to=="object"?Ee({},oe,v.to.state):oe,force:Te}),x||g)}else v=be(g,U,!0,Z,oe);return fe(g,U,v),v})}function ye(E,x){const L=k(E,x);return L?Promise.reject(L):Promise.resolve()}function _e(E,x){let L;const[U,oe,Te]=IO(E,x);L=Qc(U.reverse(),"beforeRouteLeave",E,x);for(const d of U)d.leaveGuards.forEach(g=>{L.push(kn(g,E,x))});const Z=ye.bind(null,E,x);return L.push(Z),Fs(L).then(()=>{L=[];for(const d of i.list())L.push(kn(d,E,x));return L.push(Z),Fs(L)}).then(()=>{L=Qc(oe,"beforeRouteUpdate",E,x);for(const d of oe)d.updateGuards.forEach(g=>{L.push(kn(g,E,x))});return L.push(Z),Fs(L)}).then(()=>{L=[];for(const d of E.matched)if(d.beforeEnter&&!x.matched.includes(d))if(Ft(d.beforeEnter))for(const g of d.beforeEnter)L.push(kn(g,E,x));else L.push(kn(d.beforeEnter,E,x));return L.push(Z),Fs(L)}).then(()=>(E.matched.forEach(d=>d.enterCallbacks={}),L=Qc(Te,"beforeRouteEnter",E,x),L.push(Z),Fs(L))).then(()=>{L=[];for(const d of o.list())L.push(kn(d,E,x));return L.push(Z),Fs(L)}).catch(d=>rn(d,8)?d:Promise.reject(d))}function fe(E,x,L){for(const U of a.list())U(E,x,L)}function be(E,x,L,U,oe){const Te=k(E,x);if(Te)return Te;const Z=x===Cn,d=Ws?history.state:{};L&&(U||Z?r.replace(E.fullPath,Ee({scroll:Z&&d&&d.scroll},oe)):r.push(E.fullPath,oe)),c.value=E,Et(E,x,L,Z),Me()}let Oe;function Ne(){Oe||(Oe=r.listen((E,x,L)=>{if(!Dt.listening)return;const U=T(E),oe=q(U);if(oe){se(Ee(oe,{replace:!0}),U).catch(ui);return}l=U;const Te=c.value;Ws&&MC(Vd(Te.fullPath,L.delta),gc()),_e(U,Te).catch(Z=>rn(Z,12)?Z:rn(Z,2)?(se(Z.to,U).then(d=>{rn(d,20)&&!L.delta&&L.type===Li.pop&&r.go(-1,!1)}).catch(ui),Promise.reject()):(L.delta&&r.go(-L.delta,!1),ie(Z,U,Te))).then(Z=>{Z=Z||be(U,Te,!1),Z&&(L.delta&&!rn(Z,8)?r.go(-L.delta,!1):L.type===Li.pop&&rn(Z,20)&&r.go(-1,!1)),fe(U,Te,Z)}).catch(ui)}))}let st=qr(),dt=qr(),ce;function ie(E,x,L){Me(E);const U=dt.list();return U.length?U.forEach(oe=>oe(E,x,L)):console.error(E),Promise.reject(E)}function ue(){return ce&&c.value!==Cn?Promise.resolve():new Promise((E,x)=>{st.add([E,x])})}function Me(E){return ce||(ce=!E,Ne(),st.list().forEach(([x,L])=>E?L(E):x()),st.reset()),E}function Et(E,x,L,U){const{scrollBehavior:oe}=t;if(!Ws||!oe)return Promise.resolve();const Te=!L&&$C(Vd(E.fullPath,0))||(U||!L)&&history.state&&history.state.scroll||null;return Ag().then(()=>oe(E,x,Te)).then(Z=>Z&&xC(Z)).catch(Z=>ie(Z,E,x))}const rt=E=>r.go(E);let Re;const Nt=new Set,Dt={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:b,getRoutes:y,resolve:T,options:t,push:P,replace:H,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:dt.add,isReady:ue,install(E){const x=this;E.component("RouterLink",cs),E.component("RouterView",j_),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(c)}),Ws&&!Re&&c.value===Cn&&(Re=!0,P(r.location).catch(oe=>{}));const L={};for(const oe in Cn)L[oe]=wt(()=>c.value[oe]);E.provide(mc,x),E.provide(B_,Ui(L)),E.provide(nu,c);const U=E.unmount;Nt.add(E),E.unmount=function(){Nt.delete(E),Nt.size<1&&(l=Cn,Oe&&Oe(),Oe=null,c.value=Cn,Re=!1,ce=!1),U()}}};return Dt}function Fs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function IO(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>yr(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>yr(l,c))||r.push(c))}return[n,s,r]}function AO(){return Gt(mc)}const H_=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};function kh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function K_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SO=K_,W_=new Fi("auth","Firebase",K_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new xu("@firebase/auth");function qo(t,...e){ep.logLevel<=pe.ERROR&&ep.error(`Auth (${Bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,...e){throw Lh(t,...e)}function Qt(t,...e){return Lh(t,...e)}function q_(t,e,n){const s=Object.assign(Object.assign({},SO()),{[e]:n});return new Fi("auth","Firebase",s).create(e,{appName:t.name})}function CO(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&At(t,"argument-error"),q_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return W_.create(t,...e)}function G(t,e,...n){if(!t)throw Lh(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qo(e),new Error(e)}function wn(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Map;function un(t){wn(t instanceof Function,"Expected a class definition");let e=tp.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(t,e){const n=$u(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ra(i,e??{}))return r;At(r,"already-initialized")}return n.initialize({options:e})}function NO(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function DO(){return np()==="http:"||np()==="https:"}function np(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DO()||aT()||"connection"in navigator)?navigator.onLine:!0}function kO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=oT()||cT()}get(){return RO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=new so(3e4,6e4);function ro(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function io(t,e,n,s,r={}){return G_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),z_.fetch()(Y_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function G_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},LO),e);try{const r=new xO(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Co(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Co(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Co(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw q_(t,u,l);At(t,u)}}catch(r){if(r instanceof In)throw r;At(t,"internal-error",{message:String(r)})}}async function oo(t,e,n,s,r={}){const i=await io(t,e,n,s,r);return"mfaPendingCredential"in i&&At(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Y_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ph(t.config,r):`${t.config.apiScheme}://${r}`}class xO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qt(this.auth,"network-request-failed")),PO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Co(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Qt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(t,e){return io(t,"POST","/v1/accounts:delete",e)}async function $O(t,e){return io(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UO(t,e=!1){const n=ft(t),s=await n.getIdToken(e),r=xh(s);G(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:fi(Xc(r.auth_time)),issuedAtTime:fi(Xc(r.iat)),expirationTime:fi(Xc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function xh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Zg(n);return r?JSON.parse(r):(qo("Failed to decode base64 JWT payload"),null)}catch(r){return qo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function FO(t){const e=xh(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof In&&VO(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function VO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Pi(t,$O(n,{idToken:s}));G(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?KO(i.providerUserInfo):[],a=HO(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Q_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function jO(t){const e=ft(t);await ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HO(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function KO(t){return t.map(e=>{var{providerId:n}=e,s=kh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WO(t,e){const n=await G_(t,{},async()=>{const s=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Y_(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",z_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await WO(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new xi;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(G(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xi,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=kh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UO(this,e)}reload(){return jO(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new bs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ba(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pi(this,MO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:P,isAnonymous:H,providerData:q,stsTokenManager:se}=n;G(k&&se,e,"internal-error");const ye=xi.fromJSON(this.name,se);G(typeof k=="string",e,"internal-error"),On(h,e.name),On(f,e.name),G(typeof P=="boolean",e,"internal-error"),G(typeof H=="boolean",e,"internal-error"),On(p,e.name),On(m,e.name),On(y,e.name),On(b,e.name),On(T,e.name),On(R,e.name);const _e=new bs({uid:k,auth:e,email:f,emailVerified:P,displayName:h,isAnonymous:H,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:ye,createdAt:T,lastLoginAt:R});return q&&Array.isArray(q)&&(_e.providerData=q.map(fe=>Object.assign({},fe))),b&&(_e._redirectEventId=b),_e}static async _fromIdTokenResponse(e,n,s=!1){const r=new xi;r.updateFromServerResponse(n);const i=new bs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ba(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}X_.type="NONE";const sp=X_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e,n){return`firebase:${t}:${e}:${n}`}class sr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=zo(this.userKey,r.apiKey,i),this.fullPersistenceKey=zo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new sr(un(sp),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||un(sp);const o=zo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=bs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new sr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new sr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ev(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nv(e))return"Blackberry";if(sv(e))return"Webos";if(Mh(e))return"Safari";if((e.includes("chrome/")||Z_(e))&&!e.includes("edge/"))return"Chrome";if(tv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function J_(t=tt()){return/firefox\//i.test(t)}function Mh(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Z_(t=tt()){return/crios\//i.test(t)}function ev(t=tt()){return/iemobile/i.test(t)}function tv(t=tt()){return/android/i.test(t)}function nv(t=tt()){return/blackberry/i.test(t)}function sv(t=tt()){return/webos/i.test(t)}function yc(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qO(t=tt()){var e;return yc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zO(){return lT()&&document.documentMode===10}function rv(t=tt()){return yc(t)||tv(t)||sv(t)||nv(t)||/windows phone/i.test(t)||ev(t)}function GO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t,e=[]){let n;switch(t){case"Browser":n=rp(tt());break;case"Worker":n=`${rp(tt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ip(this),this.idTokenSubscription=new ip(this),this.beforeStateQueue=new YO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=W_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await sr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ba(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ft(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await sr.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Mr(t){return ft(t)}class ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=mT(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function XO(t,e,n){const s=Mr(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=ov(e),{host:o,port:a}=JO(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ZO()}function ov(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JO(t){const e=ov(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:op(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:op(o)}}}function op(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function eN(t,e){return io(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e){return oo(t,"POST","/v1/accounts:signInWithPassword",ro(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(t,e){return oo(t,"POST","/v1/accounts:signInWithEmailLink",ro(t,e))}async function sN(t,e){return oo(t,"POST","/v1/accounts:signInWithEmailLink",ro(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends $h{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Mi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Mi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tN(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nN(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return eN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sN(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(t,e){return oo(t,"POST","/v1/accounts:signInWithIdp",ro(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN="http://localhost";class Ns extends $h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=kh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ns(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,rr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rr(e,n)}buildRequest(){const e={requestUri:rN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oN(t){const e=Xr(Jr(t)).link,n=e?Xr(Jr(e)).deep_link_id:null,s=Xr(Jr(t)).deep_link_id;return(s?Xr(Jr(s)).link:null)||s||n||e||t}class Uh{constructor(e){var n,s,r,i,o,a;const c=Xr(Jr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=iN((r=c.mode)!==null&&r!==void 0?r:null);G(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=oN(e);try{return new Uh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.providerId=$r.PROVIDER_ID}static credential(e,n){return Mi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Uh.parseLink(n);return G(s,"argument-error"),Mi._fromEmailAndCode(e,s.code,s.tenantId)}}$r.PROVIDER_ID="password";$r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Fh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends ao{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Pn.credential(n,s)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends ao{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends ao{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Mn.credential(n,s)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(t,e){return oo(t,"POST","/v1/accounts:signUp",ro(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await bs._fromIdTokenResponse(e,s,r),o=ap(s);return new Ds({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ap(s);return new Ds({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ap(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends In{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ta.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ta(e,n,s,r)}}function av(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ta._fromErrorAndOperation(t,i,e,s):i})}async function cN(t,e,n=!1){const s=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ds._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Pi(t,av(s,r,e,t),n);G(i.idToken,s,"internal-error");const o=xh(i.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),Ds._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&At(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(t,e,n=!1){const s="signIn",r=await av(t,s,e),i=await Ds._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function uN(t,e){return cv(Mr(t),e)}async function rM(t,e,n){const s=Mr(t),r=await aN(s,{returnSecureToken:!0,email:e,password:n}),i=await Ds._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function iM(t,e,n){return uN(ft(t),$r.credential(e,n))}function hN(t,e,n,s){return ft(t).onIdTokenChanged(e,n,s)}function fN(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function lv(t,e,n,s){return ft(t).onAuthStateChanged(e,n,s)}function dN(t){return ft(t).signOut()}const Ia="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ia,"1"),this.storage.removeItem(Ia),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(){const t=tt();return Mh(t)||yc(t)}const gN=1e3,mN=10;class hv extends uv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pN()&&GO(),this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);zO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,mN):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},gN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hv.type="LOCAL";const yN=hv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv extends uv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fv.type="SESSION";const dv=fv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new _c(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await _N(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Vh("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function EN(t){Xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function wN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TN(){return pv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="firebaseLocalStorageDb",IN=1,Aa="firebaseLocalStorage",mv="fbase_key";class co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vc(t,e){return t.transaction([Aa],e?"readwrite":"readonly").objectStore(Aa)}function AN(){const t=indexedDB.deleteDatabase(gv);return new co(t).toPromise()}function ru(){const t=indexedDB.open(gv,IN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Aa,{keyPath:mv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Aa)?e(s):(s.close(),await AN(),e(await ru()))})})}async function cp(t,e,n){const s=vc(t,!0).put({[mv]:e,value:n});return new co(s).toPromise()}async function SN(t,e){const n=vc(t,!1).get(e),s=await new co(n).toPromise();return s===void 0?null:s.value}function lp(t,e){const n=vc(t,!0).delete(e);return new co(n).toPromise()}const CN=800,ON=3;class yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ru(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ON)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(TN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wN(),!this.activeServiceWorker)return;this.sender=new vN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ru();return await cp(e,Ia,"1"),await lp(e,Ia),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>cp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>SN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=vc(r,!1).getAll();return new co(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yv.type="LOCAL";const NN=yv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RN(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Qt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",DN().appendChild(s)})}function kN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new so(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t,e){return e?un(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh extends $h{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LN(t){return cv(t.auth,new Bh(t),t.bypassAuthState)}function PN(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),lN(n,new Bh(t),t.bypassAuthState)}async function xN(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),cN(n,new Bh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LN;case"linkViaPopup":case"linkViaRedirect":return xN;case"reauthViaPopup":case"reauthViaRedirect":return PN;default:At(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=new so(2e3,1e4);async function oM(t,e,n){const s=Mr(t);CO(t,e,Fh);const r=_v(s,n);return new gs(s,"signInViaPopup",e,r).executeNotNull()}class gs extends vv{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,MN.get())};e()}}gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N="pendingRedirect",Go=new Map;class UN extends vv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Go.get(this.auth._key());if(!e){try{const s=await FN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Go.set(this.auth._key(),e)}return this.bypassAuthState||Go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FN(t,e){const n=jN(e),s=BN(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function VN(t,e){Go.set(t._key(),e)}function BN(t){return un(t._redirectPersistence)}function jN(t){return zo($N,t.config.apiKey,t.name)}async function HN(t,e,n=!1){const s=Mr(t),r=_v(s,e),o=await new UN(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=10*60*1e3;class WN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ev(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KN&&this.cachedEventUids.clear(),this.cachedEventUids.has(up(e))}saveEventToCache(e){this.cachedEventUids.add(up(e)),this.lastProcessedEventTime=Date.now()}}function up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ev({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ev(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t,e={}){return io(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YN=/^https?/;async function QN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zN(t);for(const n of e)try{if(XN(n))return}catch{}At(t,"unauthorized-domain")}function XN(t){const e=su(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!YN.test(n))return!1;if(GN.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=new so(3e4,6e4);function hp(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZN(t){return new Promise((e,n)=>{var s,r,i;function o(){hp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hp(),n(Qt(t,"network-request-failed"))},timeout:JN.get()})}if(!((r=(s=Xt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Xt().gapi)===null||i===void 0)&&i.load)o();else{const a=kN("iframefcb");return Xt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},RN(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Yo=null,e})}let Yo=null;function eD(t){return Yo=Yo||ZN(t),Yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=new so(5e3,15e3),nD="__/auth/iframe",sD="emulator/auth/iframe",rD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oD(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ph(e,sD):`https://${t.config.authDomain}/${nD}`,s={apiKey:e.apiKey,appName:t.name,v:Bi},r=iD.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Vi(s).slice(1)}`}async function aD(t){const e=await eD(t),n=Xt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:oD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rD,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Xt().setTimeout(()=>{i(o)},tD.get());function c(){Xt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lD=500,uD=600,hD="_blank",fD="http://localhost";class fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dD(t,e,n,s=lD,r=uD){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},cD),{width:s.toString(),height:r.toString(),top:i,left:o}),l=tt().toLowerCase();n&&(a=Z_(l)?hD:n),J_(l)&&(e=e||fD,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(qO(l)&&a!=="_self")return pD(e||"",a),new fp(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new fp(h)}function pD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="__/auth/handler",mD="emulator/auth/handler";function dp(t,e,n,s,r,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Bi,eventId:r};if(e instanceof Fh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ao){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${yD(t)}?${Vi(a).slice(1)}`}function yD({config:t}){return t.emulator?Ph(t,mD):`https://${t.authDomain}/${gD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="webStorageSupport";class _D{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dv,this._completeRedirectFn=HN,this._overrideRedirectResult=VN}async _openPopup(e,n,s,r){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=dp(e,n,s,su(),r);return dD(e,o,Vh())}async _openRedirect(e,n,s,r){return await this._originValidation(e),EN(dp(e,n,s,su(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(wn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await aD(e),s=new WN(e);return n.register("authEvent",r=>(G(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jc,{type:Jc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Jc];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rv()||Mh()||yc()}}const vD=_D;var pp="@firebase/auth",gp="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bD(t){cr(new As("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{G(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iv(t)},u=new QO(a,c,l);return NO(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),cr(new As("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(s=>new ED(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(pp,gp,wD(t)),Bn(pp,gp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=5*60,ID=tm("authIdTokenMaxAge")||TD;let mp=null;const AD=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ID)return;const r=n==null?void 0:n.token;mp!==r&&(mp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function wv(t=rm()){const e=$u(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OO(t,{popupRedirectResolver:vD,persistence:[NN,yN,dv]}),s=tm("authTokenSyncURL");if(s){const i=AD(s);fN(n,i,()=>i(n.currentUser)),hN(n,o=>i(o))}const r=em("auth");return r&&XO(n,`http://${r}`),n}bD("Browser");const SD={__name:"App",setup(t){const e=AO(),n=Cu(!1);let s;xg(()=>{s=wv(),lv(s,i=>{i?n.value=!0:n.value=!1})});const r=()=>{dN(s).then(()=>{e.push("signin")})};return(i,o)=>(Dn(),Tl(Kt,null,[ku("nav",null,[We(gt(cs),{to:"/"},{default:rs(()=>[os("Home")]),_:1}),We(gt(cs),{to:"/about"},{default:rs(()=>[os("About")]),_:1}),n.value?Kr("",!0):(Dn(),Qr(gt(cs),{key:0,to:"/signin"},{default:rs(()=>[os("Login")]),_:1})),n.value?Kr("",!0):(Dn(),Qr(gt(cs),{key:1,to:"/register"},{default:rs(()=>[os("Register")]),_:1})),n.value?(Dn(),Qr(gt(cs),{key:2,to:"/feed"},{default:rs(()=>[os("Feed")]),_:1})):Kr("",!0),n.value?(Dn(),Qr(gt(cs),{key:3,to:"/adduser"},{default:rs(()=>[os("Add User")]),_:1})):Kr("",!0),n.value?(Dn(),Tl("button",{key:4,onClick:r},"Sign Out")):Kr("",!0)]),We(gt(j_))],64))}},CD=H_(SD,[["__scopeId","data-v-5da738d0"]]),OD="modulepreload",ND=function(t){return"/"+t},yp={},ss=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=ND(i),i in yp)return;yp[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":OD,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};var DD="firebase",RD="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn(DD,RD,"app");const kD={apiKey:"AIzaSyC2QydohIRiBwStPp_ssGCXFH7gdLryAqI",authDomain:"work9-e9bf6.firebaseapp.com",projectId:"work9-e9bf6",storageBucket:"work9-e9bf6.appspot.com",messagingSenderId:"171091735378",appId:"1:171091735378:web:d277a5aa7eae4f73dcc08b"},LD=Uu(kD),PD=g_(LD),_p=cC(PD,"cities"),xD={name:"Home",components:{},data(){return{users:[],selectedDoc:null}},methods:{async fetchUsers(){let t=await wC(_p),e=[];t.forEach(n=>{let s=n.data();s.id=n.id,e.push(s)}),console.log(e),this.users=e},async deleteUser(t){let e=p_(_p,t);await bC(e),alert("User deleted successully!"),this.$router.go()}},created(){this.fetchUsers()}},MD={class:"container"},$D=lb('<div class="row"><div class="col-md-6 offset-md-3 text-center"><h1 class="display-4">Welcome to My Website</h1><p class="lead">Hello If You Want To Sign In Please Use <br> Email : test@gmail.com <br> Password : 123456789 <br> Or Register and remember your email and password<br> when you sign-in you will see hidden navbar <br> 1.Adduser for Create info <br> 2.Feed for Read , Update , Delete info <br></p><h1 style="color:red;">!!!!3.If you want to use please AddUser Info first!!!!</h1></div></div>',1),UD=[$D];function FD(t,e,n,s,r,i){return Dn(),Tl("div",MD,UD)}const VD=H_(xD,[["render",FD]]),bv=TO({history:BC("/"),routes:[{path:"/",component:VD},{path:"/about",name:"about",component:()=>ss(()=>import("./AboutView-3d300aca.js"),[])},{path:"/adduser",name:"adduser",component:()=>ss(()=>import("./AddUser-8255620b.js"),[]),meta:{requiresAuth:!0}},{path:"/edituser",name:"edit",component:()=>ss(()=>import("./EditUser-1e69f730.js"),[]),meta:{requiresAuth:!0}},{path:"/feed",name:"feed",component:()=>ss(()=>import("./Feed-4d4d8872.js"),["assets/Feed-4d4d8872.js","assets/Feed-667ffc73.css"]),meta:{requiresAuth:!0}},{path:"/signin",name:"signin",component:()=>ss(()=>import("./SignIn-8fb17656.js"),["assets/SignIn-8fb17656.js","assets/SignIn-724900bf.css"])},{path:"/register",name:"register",component:()=>ss(()=>import("./Register-7e84cb65.js"),["assets/Register-7e84cb65.js","assets/Register-0160acea.css"])},{path:"/users/:userId",name:"edituser",component:()=>ss(()=>import("./EditUser-1e69f730.js"),[]),meta:{requiresAuth:!0}}]}),BD=()=>new Promise((t,e)=>{const n=lv(wv(),s=>{n(),t(s)},e)});bv.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?await BD()?n():(alert("กรุณา Sign In"),n("signin")):n()});var at="top",_t="bottom",vt="right",ct="left",Ec="auto",Ur=[at,_t,vt,ct],Rs="start",vr="end",Tv="clippingParents",jh="viewport",qs="popper",Iv="reference",iu=Ur.reduce(function(t,e){return t.concat([e+"-"+Rs,e+"-"+vr])},[]),Hh=[].concat(Ur,[Ec]).reduce(function(t,e){return t.concat([e,e+"-"+Rs,e+"-"+vr])},[]),Av="beforeRead",Sv="read",Cv="afterRead",Ov="beforeMain",Nv="main",Dv="afterMain",Rv="beforeWrite",kv="write",Lv="afterWrite",Pv=[Av,Sv,Cv,Ov,Nv,Dv,Rv,kv,Lv];function sn(t){return t?(t.nodeName||"").toLowerCase():null}function Ct(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ks(t){var e=Ct(t).Element;return t instanceof e||t instanceof Element}function It(t){var e=Ct(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Kh(t){if(typeof ShadowRoot>"u")return!1;var e=Ct(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function jD(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},r=e.attributes[n]||{},i=e.elements[n];!It(i)||!sn(i)||(Object.assign(i.style,s),Object.keys(r).forEach(function(o){var a=r[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function HD(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var r=e.elements[s],i=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(c,l){return c[l]="",c},{});!It(r)||!sn(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(c){r.removeAttribute(c)}))})}}const Wh={name:"applyStyles",enabled:!0,phase:"write",fn:jD,effect:HD,requires:["computeStyles"]};function Jt(t){return t.split("-")[0]}var Ts=Math.max,Sa=Math.min,Er=Math.round;function ou(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function xv(){return!/^((?!chrome|android).)*safari/i.test(ou())}function wr(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),r=1,i=1;e&&It(t)&&(r=t.offsetWidth>0&&Er(s.width)/t.offsetWidth||1,i=t.offsetHeight>0&&Er(s.height)/t.offsetHeight||1);var o=ks(t)?Ct(t):window,a=o.visualViewport,c=!xv()&&n,l=(s.left+(c&&a?a.offsetLeft:0))/r,u=(s.top+(c&&a?a.offsetTop:0))/i,h=s.width/r,f=s.height/i;return{width:h,height:f,top:u,right:l+h,bottom:u+f,left:l,x:l,y:u}}function qh(t){var e=wr(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function Mv(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Kh(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function bn(t){return Ct(t).getComputedStyle(t)}function KD(t){return["table","td","th"].indexOf(sn(t))>=0}function Jn(t){return((ks(t)?t.ownerDocument:t.document)||window.document).documentElement}function wc(t){return sn(t)==="html"?t:t.assignedSlot||t.parentNode||(Kh(t)?t.host:null)||Jn(t)}function vp(t){return!It(t)||bn(t).position==="fixed"?null:t.offsetParent}function WD(t){var e=/firefox/i.test(ou()),n=/Trident/i.test(ou());if(n&&It(t)){var s=bn(t);if(s.position==="fixed")return null}var r=wc(t);for(Kh(r)&&(r=r.host);It(r)&&["html","body"].indexOf(sn(r))<0;){var i=bn(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function lo(t){for(var e=Ct(t),n=vp(t);n&&KD(n)&&bn(n).position==="static";)n=vp(n);return n&&(sn(n)==="html"||sn(n)==="body"&&bn(n).position==="static")?e:n||WD(t)||e}function zh(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function di(t,e,n){return Ts(t,Sa(e,n))}function qD(t,e,n){var s=di(t,e,n);return s>n?n:s}function $v(){return{top:0,right:0,bottom:0,left:0}}function Uv(t){return Object.assign({},$v(),t)}function Fv(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var zD=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Uv(typeof e!="number"?e:Fv(e,Ur))};function GD(t){var e,n=t.state,s=t.name,r=t.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Jt(n.placement),c=zh(a),l=[ct,vt].indexOf(a)>=0,u=l?"height":"width";if(!(!i||!o)){var h=zD(r.padding,n),f=qh(i),p=c==="y"?at:ct,m=c==="y"?_t:vt,y=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],b=o[c]-n.rects.reference[c],T=lo(i),R=T?c==="y"?T.clientHeight||0:T.clientWidth||0:0,k=y/2-b/2,P=h[p],H=R-f[u]-h[m],q=R/2-f[u]/2+k,se=di(P,q,H),ye=c;n.modifiersData[s]=(e={},e[ye]=se,e.centerOffset=se-q,e)}}function YD(t){var e=t.state,n=t.options,s=n.element,r=s===void 0?"[data-popper-arrow]":s;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||Mv(e.elements.popper,r)&&(e.elements.arrow=r))}const Vv={name:"arrow",enabled:!0,phase:"main",fn:GD,effect:YD,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function br(t){return t.split("-")[1]}var QD={top:"auto",right:"auto",bottom:"auto",left:"auto"};function XD(t){var e=t.x,n=t.y,s=window,r=s.devicePixelRatio||1;return{x:Er(e*r)/r||0,y:Er(n*r)/r||0}}function Ep(t){var e,n=t.popper,s=t.popperRect,r=t.placement,i=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,h=t.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,y=m===void 0?0:m,b=typeof u=="function"?u({x:p,y}):{x:p,y};p=b.x,y=b.y;var T=o.hasOwnProperty("x"),R=o.hasOwnProperty("y"),k=ct,P=at,H=window;if(l){var q=lo(n),se="clientHeight",ye="clientWidth";if(q===Ct(n)&&(q=Jn(n),bn(q).position!=="static"&&a==="absolute"&&(se="scrollHeight",ye="scrollWidth")),q=q,r===at||(r===ct||r===vt)&&i===vr){P=_t;var _e=h&&q===H&&H.visualViewport?H.visualViewport.height:q[se];y-=_e-s.height,y*=c?1:-1}if(r===ct||(r===at||r===_t)&&i===vr){k=vt;var fe=h&&q===H&&H.visualViewport?H.visualViewport.width:q[ye];p-=fe-s.width,p*=c?1:-1}}var be=Object.assign({position:a},l&&QD),Oe=u===!0?XD({x:p,y}):{x:p,y};if(p=Oe.x,y=Oe.y,c){var Ne;return Object.assign({},be,(Ne={},Ne[P]=R?"0":"",Ne[k]=T?"0":"",Ne.transform=(H.devicePixelRatio||1)<=1?"translate("+p+"px, "+y+"px)":"translate3d("+p+"px, "+y+"px, 0)",Ne))}return Object.assign({},be,(e={},e[P]=R?y+"px":"",e[k]=T?p+"px":"",e.transform="",e))}function JD(t){var e=t.state,n=t.options,s=n.gpuAcceleration,r=s===void 0?!0:s,i=n.adaptive,o=i===void 0?!0:i,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:Jt(e.placement),variation:br(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ep(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ep(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Gh={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:JD,data:{}};var Oo={passive:!0};function ZD(t){var e=t.state,n=t.instance,s=t.options,r=s.scroll,i=r===void 0?!0:r,o=s.resize,a=o===void 0?!0:o,c=Ct(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(u){u.addEventListener("scroll",n.update,Oo)}),a&&c.addEventListener("resize",n.update,Oo),function(){i&&l.forEach(function(u){u.removeEventListener("scroll",n.update,Oo)}),a&&c.removeEventListener("resize",n.update,Oo)}}const Yh={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ZD,data:{}};var eR={left:"right",right:"left",bottom:"top",top:"bottom"};function Qo(t){return t.replace(/left|right|bottom|top/g,function(e){return eR[e]})}var tR={start:"end",end:"start"};function wp(t){return t.replace(/start|end/g,function(e){return tR[e]})}function Qh(t){var e=Ct(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Xh(t){return wr(Jn(t)).left+Qh(t).scrollLeft}function nR(t,e){var n=Ct(t),s=Jn(t),r=n.visualViewport,i=s.clientWidth,o=s.clientHeight,a=0,c=0;if(r){i=r.width,o=r.height;var l=xv();(l||!l&&e==="fixed")&&(a=r.offsetLeft,c=r.offsetTop)}return{width:i,height:o,x:a+Xh(t),y:c}}function sR(t){var e,n=Jn(t),s=Qh(t),r=(e=t.ownerDocument)==null?void 0:e.body,i=Ts(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=Ts(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-s.scrollLeft+Xh(t),c=-s.scrollTop;return bn(r||n).direction==="rtl"&&(a+=Ts(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:o,x:a,y:c}}function Jh(t){var e=bn(t),n=e.overflow,s=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+s)}function Bv(t){return["html","body","#document"].indexOf(sn(t))>=0?t.ownerDocument.body:It(t)&&Jh(t)?t:Bv(wc(t))}function pi(t,e){var n;e===void 0&&(e=[]);var s=Bv(t),r=s===((n=t.ownerDocument)==null?void 0:n.body),i=Ct(s),o=r?[i].concat(i.visualViewport||[],Jh(s)?s:[]):s,a=e.concat(o);return r?a:a.concat(pi(wc(o)))}function au(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function rR(t,e){var n=wr(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function bp(t,e,n){return e===jh?au(nR(t,n)):ks(e)?rR(e,n):au(sR(Jn(t)))}function iR(t){var e=pi(wc(t)),n=["absolute","fixed"].indexOf(bn(t).position)>=0,s=n&&It(t)?lo(t):t;return ks(s)?e.filter(function(r){return ks(r)&&Mv(r,s)&&sn(r)!=="body"}):[]}function oR(t,e,n,s){var r=e==="clippingParents"?iR(t):[].concat(e),i=[].concat(r,[n]),o=i[0],a=i.reduce(function(c,l){var u=bp(t,l,s);return c.top=Ts(u.top,c.top),c.right=Sa(u.right,c.right),c.bottom=Sa(u.bottom,c.bottom),c.left=Ts(u.left,c.left),c},bp(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function jv(t){var e=t.reference,n=t.element,s=t.placement,r=s?Jt(s):null,i=s?br(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(r){case at:c={x:o,y:e.y-n.height};break;case _t:c={x:o,y:e.y+e.height};break;case vt:c={x:e.x+e.width,y:a};break;case ct:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var l=r?zh(r):null;if(l!=null){var u=l==="y"?"height":"width";switch(i){case Rs:c[l]=c[l]-(e[u]/2-n[u]/2);break;case vr:c[l]=c[l]+(e[u]/2-n[u]/2);break}}return c}function Tr(t,e){e===void 0&&(e={});var n=e,s=n.placement,r=s===void 0?t.placement:s,i=n.strategy,o=i===void 0?t.strategy:i,a=n.boundary,c=a===void 0?Tv:a,l=n.rootBoundary,u=l===void 0?jh:l,h=n.elementContext,f=h===void 0?qs:h,p=n.altBoundary,m=p===void 0?!1:p,y=n.padding,b=y===void 0?0:y,T=Uv(typeof b!="number"?b:Fv(b,Ur)),R=f===qs?Iv:qs,k=t.rects.popper,P=t.elements[m?R:f],H=oR(ks(P)?P:P.contextElement||Jn(t.elements.popper),c,u,o),q=wr(t.elements.reference),se=jv({reference:q,element:k,strategy:"absolute",placement:r}),ye=au(Object.assign({},k,se)),_e=f===qs?ye:q,fe={top:H.top-_e.top+T.top,bottom:_e.bottom-H.bottom+T.bottom,left:H.left-_e.left+T.left,right:_e.right-H.right+T.right},be=t.modifiersData.offset;if(f===qs&&be){var Oe=be[r];Object.keys(fe).forEach(function(Ne){var st=[vt,_t].indexOf(Ne)>=0?1:-1,dt=[at,_t].indexOf(Ne)>=0?"y":"x";fe[Ne]+=Oe[dt]*st})}return fe}function aR(t,e){e===void 0&&(e={});var n=e,s=n.placement,r=n.boundary,i=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?Hh:c,u=br(s),h=u?a?iu:iu.filter(function(m){return br(m)===u}):Ur,f=h.filter(function(m){return l.indexOf(m)>=0});f.length===0&&(f=h);var p=f.reduce(function(m,y){return m[y]=Tr(t,{placement:y,boundary:r,rootBoundary:i,padding:o})[Jt(y)],m},{});return Object.keys(p).sort(function(m,y){return p[m]-p[y]})}function cR(t){if(Jt(t)===Ec)return[];var e=Qo(t);return[wp(t),e,wp(e)]}function lR(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0?!0:p,y=n.allowedAutoPlacements,b=e.options.placement,T=Jt(b),R=T===b,k=c||(R||!m?[Qo(b)]:cR(b)),P=[b].concat(k).reduce(function(Dt,E){return Dt.concat(Jt(E)===Ec?aR(e,{placement:E,boundary:u,rootBoundary:h,padding:l,flipVariations:m,allowedAutoPlacements:y}):E)},[]),H=e.rects.reference,q=e.rects.popper,se=new Map,ye=!0,_e=P[0],fe=0;fe<P.length;fe++){var be=P[fe],Oe=Jt(be),Ne=br(be)===Rs,st=[at,_t].indexOf(Oe)>=0,dt=st?"width":"height",ce=Tr(e,{placement:be,boundary:u,rootBoundary:h,altBoundary:f,padding:l}),ie=st?Ne?vt:ct:Ne?_t:at;H[dt]>q[dt]&&(ie=Qo(ie));var ue=Qo(ie),Me=[];if(i&&Me.push(ce[Oe]<=0),a&&Me.push(ce[ie]<=0,ce[ue]<=0),Me.every(function(Dt){return Dt})){_e=be,ye=!1;break}se.set(be,Me)}if(ye)for(var Et=m?3:1,rt=function(E){var x=P.find(function(L){var U=se.get(L);if(U)return U.slice(0,E).every(function(oe){return oe})});if(x)return _e=x,"break"},Re=Et;Re>0;Re--){var Nt=rt(Re);if(Nt==="break")break}e.placement!==_e&&(e.modifiersData[s]._skip=!0,e.placement=_e,e.reset=!0)}}const Hv={name:"flip",enabled:!0,phase:"main",fn:lR,requiresIfExists:["offset"],data:{_skip:!1}};function Tp(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Ip(t){return[at,vt,_t,ct].some(function(e){return t[e]>=0})}function uR(t){var e=t.state,n=t.name,s=e.rects.reference,r=e.rects.popper,i=e.modifiersData.preventOverflow,o=Tr(e,{elementContext:"reference"}),a=Tr(e,{altBoundary:!0}),c=Tp(o,s),l=Tp(a,r,i),u=Ip(c),h=Ip(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const Kv={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:uR};function hR(t,e,n){var s=Jt(t),r=[ct,at].indexOf(s)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=i[0],a=i[1];return o=o||0,a=(a||0)*r,[ct,vt].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function fR(t){var e=t.state,n=t.options,s=t.name,r=n.offset,i=r===void 0?[0,0]:r,o=Hh.reduce(function(u,h){return u[h]=hR(h,e.rects,i),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[s]=o}const Wv={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:fR};function dR(t){var e=t.state,n=t.name;e.modifiersData[n]=jv({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Zh={name:"popperOffsets",enabled:!0,phase:"read",fn:dR,data:{}};function pR(t){return t==="x"?"y":"x"}function gR(t){var e=t.state,n=t.options,s=t.name,r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,f=n.tether,p=f===void 0?!0:f,m=n.tetherOffset,y=m===void 0?0:m,b=Tr(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),T=Jt(e.placement),R=br(e.placement),k=!R,P=zh(T),H=pR(P),q=e.modifiersData.popperOffsets,se=e.rects.reference,ye=e.rects.popper,_e=typeof y=="function"?y(Object.assign({},e.rects,{placement:e.placement})):y,fe=typeof _e=="number"?{mainAxis:_e,altAxis:_e}:Object.assign({mainAxis:0,altAxis:0},_e),be=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Oe={x:0,y:0};if(q){if(i){var Ne,st=P==="y"?at:ct,dt=P==="y"?_t:vt,ce=P==="y"?"height":"width",ie=q[P],ue=ie+b[st],Me=ie-b[dt],Et=p?-ye[ce]/2:0,rt=R===Rs?se[ce]:ye[ce],Re=R===Rs?-ye[ce]:-se[ce],Nt=e.elements.arrow,Dt=p&&Nt?qh(Nt):{width:0,height:0},E=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:$v(),x=E[st],L=E[dt],U=di(0,se[ce],Dt[ce]),oe=k?se[ce]/2-Et-U-x-fe.mainAxis:rt-U-x-fe.mainAxis,Te=k?-se[ce]/2+Et+U+L+fe.mainAxis:Re+U+L+fe.mainAxis,Z=e.elements.arrow&&lo(e.elements.arrow),d=Z?P==="y"?Z.clientTop||0:Z.clientLeft||0:0,g=(Ne=be==null?void 0:be[P])!=null?Ne:0,_=ie+oe-g-d,v=ie+Te-g,w=di(p?Sa(ue,_):ue,ie,p?Ts(Me,v):Me);q[P]=w,Oe[P]=w-ie}if(a){var N,M=P==="x"?at:ct,O=P==="x"?_t:vt,D=q[H],I=H==="y"?"height":"width",B=D+b[M],$=D-b[O],V=[at,ct].indexOf(T)!==-1,z=(N=be==null?void 0:be[H])!=null?N:0,re=V?B:D-se[I]-ye[I]-z+fe.altAxis,ve=V?D+se[I]+ye[I]-z-fe.altAxis:$,de=p&&V?qD(re,D,ve):di(p?re:B,D,p?ve:$);q[H]=de,Oe[H]=de-D}e.modifiersData[s]=Oe}}const qv={name:"preventOverflow",enabled:!0,phase:"main",fn:gR,requiresIfExists:["offset"]};function mR(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function yR(t){return t===Ct(t)||!It(t)?Qh(t):mR(t)}function _R(t){var e=t.getBoundingClientRect(),n=Er(e.width)/t.offsetWidth||1,s=Er(e.height)/t.offsetHeight||1;return n!==1||s!==1}function vR(t,e,n){n===void 0&&(n=!1);var s=It(e),r=It(e)&&_R(e),i=Jn(e),o=wr(t,r,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(s||!s&&!n)&&((sn(e)!=="body"||Jh(i))&&(a=yR(e)),It(e)?(c=wr(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):i&&(c.x=Xh(i))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function ER(t){var e=new Map,n=new Set,s=[];t.forEach(function(i){e.set(i.name,i)});function r(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&r(c)}}),s.push(i)}return t.forEach(function(i){n.has(i.name)||r(i)}),s}function wR(t){var e=ER(t);return Pv.reduce(function(n,s){return n.concat(e.filter(function(r){return r.phase===s}))},[])}function bR(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function TR(t){var e=t.reduce(function(n,s){var r=n[s.name];return n[s.name]=r?Object.assign({},r,s,{options:Object.assign({},r.options,s.options),data:Object.assign({},r.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var Ap={placement:"bottom",modifiers:[],strategy:"absolute"};function Sp(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function bc(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,r=e.defaultOptions,i=r===void 0?Ap:r;return function(a,c,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ap,i),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],f=!1,p={state:u,setOptions:function(T){var R=typeof T=="function"?T(u.options):T;y(),u.options=Object.assign({},i,u.options,R),u.scrollParents={reference:ks(a)?pi(a):a.contextElement?pi(a.contextElement):[],popper:pi(c)};var k=wR(TR([].concat(s,u.options.modifiers)));return u.orderedModifiers=k.filter(function(P){return P.enabled}),m(),p.update()},forceUpdate:function(){if(!f){var T=u.elements,R=T.reference,k=T.popper;if(Sp(R,k)){u.rects={reference:vR(R,lo(k),u.options.strategy==="fixed"),popper:qh(k)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(fe){return u.modifiersData[fe.name]=Object.assign({},fe.data)});for(var P=0;P<u.orderedModifiers.length;P++){if(u.reset===!0){u.reset=!1,P=-1;continue}var H=u.orderedModifiers[P],q=H.fn,se=H.options,ye=se===void 0?{}:se,_e=H.name;typeof q=="function"&&(u=q({state:u,options:ye,name:_e,instance:p})||u)}}}},update:bR(function(){return new Promise(function(b){p.forceUpdate(),b(u)})}),destroy:function(){y(),f=!0}};if(!Sp(a,c))return p;p.setOptions(l).then(function(b){!f&&l.onFirstUpdate&&l.onFirstUpdate(b)});function m(){u.orderedModifiers.forEach(function(b){var T=b.name,R=b.options,k=R===void 0?{}:R,P=b.effect;if(typeof P=="function"){var H=P({state:u,name:T,instance:p,options:k}),q=function(){};h.push(H||q)}})}function y(){h.forEach(function(b){return b()}),h=[]}return p}}var IR=bc(),AR=[Yh,Zh,Gh,Wh],SR=bc({defaultModifiers:AR}),CR=[Yh,Zh,Gh,Wh,Wv,Hv,qv,Vv,Kv],ef=bc({defaultModifiers:CR});const zv=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Dv,afterRead:Cv,afterWrite:Lv,applyStyles:Wh,arrow:Vv,auto:Ec,basePlacements:Ur,beforeMain:Ov,beforeRead:Av,beforeWrite:Rv,bottom:_t,clippingParents:Tv,computeStyles:Gh,createPopper:ef,createPopperBase:IR,createPopperLite:SR,detectOverflow:Tr,end:vr,eventListeners:Yh,flip:Hv,hide:Kv,left:ct,main:Nv,modifierPhases:Pv,offset:Wv,placements:Hh,popper:qs,popperGenerator:bc,popperOffsets:Zh,preventOverflow:qv,read:Sv,reference:Iv,right:vt,start:Rs,top:at,variationPlacements:iu,viewport:jh,write:kv},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const OR=1e6,NR=1e3,cu="transitionend",DR=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),RR=t=>{do t+=Math.floor(Math.random()*OR);while(document.getElementById(t));return t},Gv=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e},Yv=t=>{const e=Gv(t);return e&&document.querySelector(e)?e:null},fn=t=>{const e=Gv(t);return e?document.querySelector(e):null},kR=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),r=Number.parseFloat(n);return!s&&!r?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*NR)},Qv=t=>{t.dispatchEvent(new Event(cu))},dn=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),zn=t=>dn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,Fr=t=>{if(!dn(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},Gn=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",Xv=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?Xv(t.parentNode):null},Ca=()=>{},uo=t=>{t.offsetHeight},Jv=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Zc=[],LR=t=>{document.readyState==="loading"?(Zc.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Zc)e()}),Zc.push(t)):t()},St=()=>document.documentElement.dir==="rtl",Ot=t=>{LR(()=>{const e=Jv();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},an=t=>{typeof t=="function"&&t()},Zv=(t,e,n=!0)=>{if(!n){an(t);return}const s=5,r=kR(e)+s;let i=!1;const o=({target:a})=>{a===e&&(i=!0,e.removeEventListener(cu,o),an(t))};e.addEventListener(cu,o),setTimeout(()=>{i||Qv(e)},r)},tf=(t,e,n,s)=>{const r=t.length;let i=t.indexOf(e);return i===-1?!n&&s?t[r-1]:t[0]:(i+=n?1:-1,s&&(i=(i+r)%r),t[Math.max(0,Math.min(i,r-1))])},PR=/[^.]*(?=\..*)\.|.*/,xR=/\..*/,MR=/::\d+$/,el={};let Cp=1;const eE={mouseenter:"mouseover",mouseleave:"mouseout"},$R=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function tE(t,e){return e&&`${e}::${Cp++}`||t.uidEvent||Cp++}function nE(t){const e=tE(t);return t.uidEvent=e,el[e]=el[e]||{},el[e]}function UR(t,e){return function n(s){return nf(s,{delegateTarget:t}),n.oneOff&&A.off(t,s.type,e),e.apply(t,[s])}}function FR(t,e,n){return function s(r){const i=t.querySelectorAll(e);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of i)if(a===o)return nf(r,{delegateTarget:o}),s.oneOff&&A.off(t,r.type,e,n),n.apply(o,[r])}}function sE(t,e,n=null){return Object.values(t).find(s=>s.callable===e&&s.delegationSelector===n)}function rE(t,e,n){const s=typeof e=="string",r=s?n:e||n;let i=iE(t);return $R.has(i)||(i=t),[s,r,i]}function Op(t,e,n,s,r){if(typeof e!="string"||!t)return;let[i,o,a]=rE(e,n,s);e in eE&&(o=(m=>function(y){if(!y.relatedTarget||y.relatedTarget!==y.delegateTarget&&!y.delegateTarget.contains(y.relatedTarget))return m.call(this,y)})(o));const c=nE(t),l=c[a]||(c[a]={}),u=sE(l,o,i?n:null);if(u){u.oneOff=u.oneOff&&r;return}const h=tE(o,e.replace(PR,"")),f=i?FR(t,n,o):UR(t,o);f.delegationSelector=i?n:null,f.callable=o,f.oneOff=r,f.uidEvent=h,l[h]=f,t.addEventListener(a,f,i)}function lu(t,e,n,s,r){const i=sE(e[n],s,r);i&&(t.removeEventListener(n,i,Boolean(r)),delete e[n][i.uidEvent])}function VR(t,e,n,s){const r=e[n]||{};for(const i of Object.keys(r))if(i.includes(s)){const o=r[i];lu(t,e,n,o.callable,o.delegationSelector)}}function iE(t){return t=t.replace(xR,""),eE[t]||t}const A={on(t,e,n,s){Op(t,e,n,s,!1)},one(t,e,n,s){Op(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[r,i,o]=rE(e,n,s),a=o!==e,c=nE(t),l=c[o]||{},u=e.startsWith(".");if(typeof i<"u"){if(!Object.keys(l).length)return;lu(t,c,o,i,r?n:null);return}if(u)for(const h of Object.keys(c))VR(t,c,h,e.slice(1));for(const h of Object.keys(l)){const f=h.replace(MR,"");if(!a||e.includes(f)){const p=l[h];lu(t,c,o,p.callable,p.delegationSelector)}}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=Jv(),r=iE(e),i=e!==r;let o=null,a=!0,c=!0,l=!1;i&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());let u=new Event(e,{bubbles:a,cancelable:!0});return u=nf(u,n),l&&u.preventDefault(),c&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function nf(t,e){for(const[n,s]of Object.entries(e||{}))try{t[n]=s}catch{Object.defineProperty(t,n,{configurable:!0,get(){return s}})}return t}const Nn=new Map,tl={set(t,e,n){Nn.has(t)||Nn.set(t,new Map);const s=Nn.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return Nn.has(t)&&Nn.get(t).get(e)||null},remove(t,e){if(!Nn.has(t))return;const n=Nn.get(t);n.delete(e),n.size===0&&Nn.delete(t)}};function Np(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function nl(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const pn={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${nl(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${nl(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let r=s.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=Np(t.dataset[s])}return e},getDataAttribute(t,e){return Np(t.getAttribute(`data-bs-${nl(e)}`))}};class ho{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=dn(n)?pn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...dn(n)?pn.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const r=n[s],i=e[s],o=dn(i)?"element":DR(i);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${r}".`)}}}const BR="5.2.3";class Vt extends ho{constructor(e,n){super(),e=zn(e),e&&(this._element=e,this._config=this._getConfig(n),tl.set(this._element,this.constructor.DATA_KEY,this))}dispose(){tl.remove(this._element,this.constructor.DATA_KEY),A.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){Zv(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return tl.get(zn(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return BR}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Tc=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;A.on(document,n,`[data-bs-dismiss="${s}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),Gn(this))return;const i=fn(this)||this.closest(`.${s}`);t.getOrCreateInstance(i)[e]()})},jR="alert",HR="bs.alert",oE=`.${HR}`,KR=`close${oE}`,WR=`closed${oE}`,qR="fade",zR="show";class Ic extends Vt{static get NAME(){return jR}close(){if(A.trigger(this._element,KR).defaultPrevented)return;this._element.classList.remove(zR);const n=this._element.classList.contains(qR);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),A.trigger(this._element,WR),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=Ic.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}Tc(Ic,"close");Ot(Ic);const GR="button",YR="bs.button",QR=`.${YR}`,XR=".data-api",JR="active",Dp='[data-bs-toggle="button"]',ZR=`click${QR}${XR}`;class Ac extends Vt{static get NAME(){return GR}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(JR))}static jQueryInterface(e){return this.each(function(){const n=Ac.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}A.on(document,ZR,Dp,t=>{t.preventDefault();const e=t.target.closest(Dp);Ac.getOrCreateInstance(e).toggle()});Ot(Ac);const ne={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!Gn(n)&&Fr(n))}},ek="swipe",Vr=".bs.swipe",tk=`touchstart${Vr}`,nk=`touchmove${Vr}`,sk=`touchend${Vr}`,rk=`pointerdown${Vr}`,ik=`pointerup${Vr}`,ok="touch",ak="pen",ck="pointer-event",lk=40,uk={endCallback:null,leftCallback:null,rightCallback:null},hk={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Oa extends ho{constructor(e,n){super(),this._element=e,!(!e||!Oa.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return uk}static get DefaultType(){return hk}static get NAME(){return ek}dispose(){A.off(this._element,Vr)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),an(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=lk)return;const n=e/this._deltaX;this._deltaX=0,n&&an(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(A.on(this._element,rk,e=>this._start(e)),A.on(this._element,ik,e=>this._end(e)),this._element.classList.add(ck)):(A.on(this._element,tk,e=>this._start(e)),A.on(this._element,nk,e=>this._move(e)),A.on(this._element,sk,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===ak||e.pointerType===ok)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const fk="carousel",dk="bs.carousel",Zn=`.${dk}`,aE=".data-api",pk="ArrowLeft",gk="ArrowRight",mk=500,zr="next",Vs="prev",zs="left",Xo="right",yk=`slide${Zn}`,sl=`slid${Zn}`,_k=`keydown${Zn}`,vk=`mouseenter${Zn}`,Ek=`mouseleave${Zn}`,wk=`dragstart${Zn}`,bk=`load${Zn}${aE}`,Tk=`click${Zn}${aE}`,cE="carousel",No="active",Ik="slide",Ak="carousel-item-end",Sk="carousel-item-start",Ck="carousel-item-next",Ok="carousel-item-prev",lE=".active",uE=".carousel-item",Nk=lE+uE,Dk=".carousel-item img",Rk=".carousel-indicators",kk="[data-bs-slide], [data-bs-slide-to]",Lk='[data-bs-ride="carousel"]',Pk={[pk]:Xo,[gk]:zs},xk={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Mk={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class fo extends Vt{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ne.findOne(Rk,this._element),this._addEventListeners(),this._config.ride===cE&&this.cycle()}static get Default(){return xk}static get DefaultType(){return Mk}static get NAME(){return fk}next(){this._slide(zr)}nextWhenVisible(){!document.hidden&&Fr(this._element)&&this.next()}prev(){this._slide(Vs)}pause(){this._isSliding&&Qv(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){A.one(this._element,sl,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){A.one(this._element,sl,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const r=e>s?zr:Vs;this._slide(r,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&A.on(this._element,_k,e=>this._keydown(e)),this._config.pause==="hover"&&(A.on(this._element,vk,()=>this.pause()),A.on(this._element,Ek,()=>this._maybeEnableCycle())),this._config.touch&&Oa.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of ne.find(Dk,this._element))A.on(s,wk,r=>r.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(zs)),rightCallback:()=>this._slide(this._directionToOrder(Xo)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),mk+this._config.interval))}};this._swipeHelper=new Oa(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=Pk[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=ne.findOne(lE,this._indicatorsElement);n.classList.remove(No),n.removeAttribute("aria-current");const s=ne.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(No),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),r=e===zr,i=n||tf(this._getItems(),s,r,this._config.wrap);if(i===s)return;const o=this._getItemIndex(i),a=p=>A.trigger(this._element,p,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(yk).defaultPrevented||!s||!i)return;const l=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=i;const u=r?Sk:Ak,h=r?Ck:Ok;i.classList.add(h),uo(i),s.classList.add(u),i.classList.add(u);const f=()=>{i.classList.remove(u,h),i.classList.add(No),s.classList.remove(No,h,u),this._isSliding=!1,a(sl)};this._queueCallback(f,s,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(Ik)}_getActive(){return ne.findOne(Nk,this._element)}_getItems(){return ne.find(uE,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return St()?e===zs?Vs:zr:e===zs?zr:Vs}_orderToDirection(e){return St()?e===Vs?zs:Xo:e===Vs?Xo:zs}static jQueryInterface(e){return this.each(function(){const n=fo.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}A.on(document,Tk,kk,function(t){const e=fn(this);if(!e||!e.classList.contains(cE))return;t.preventDefault();const n=fo.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(pn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});A.on(window,bk,()=>{const t=ne.find(Lk);for(const e of t)fo.getOrCreateInstance(e)});Ot(fo);const $k="collapse",Uk="bs.collapse",po=`.${Uk}`,Fk=".data-api",Vk=`show${po}`,Bk=`shown${po}`,jk=`hide${po}`,Hk=`hidden${po}`,Kk=`click${po}${Fk}`,rl="show",Qs="collapse",Do="collapsing",Wk="collapsed",qk=`:scope .${Qs} .${Qs}`,zk="collapse-horizontal",Gk="width",Yk="height",Qk=".collapse.show, .collapse.collapsing",uu='[data-bs-toggle="collapse"]',Xk={parent:null,toggle:!0},Jk={parent:"(null|element)",toggle:"boolean"};class $i extends Vt{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=ne.find(uu);for(const r of s){const i=Yv(r),o=ne.find(i).filter(a=>a===this._element);i!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Xk}static get DefaultType(){return Jk}static get NAME(){return $k}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(Qk).filter(a=>a!==this._element).map(a=>$i.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||A.trigger(this._element,Vk).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(Qs),this._element.classList.add(Do),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Do),this._element.classList.add(Qs,rl),this._element.style[s]="",A.trigger(this._element,Bk)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||A.trigger(this._element,jk).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,uo(this._element),this._element.classList.add(Do),this._element.classList.remove(Qs,rl);for(const r of this._triggerArray){const i=fn(r);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Do),this._element.classList.add(Qs),A.trigger(this._element,Hk)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(rl)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=zn(e.parent),e}_getDimension(){return this._element.classList.contains(zk)?Gk:Yk}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(uu);for(const n of e){const s=fn(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=ne.find(qk,this._config.parent);return ne.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const s of e)s.classList.toggle(Wk,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=$i.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}A.on(document,Kk,uu,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();const e=Yv(this),n=ne.find(e);for(const s of n)$i.getOrCreateInstance(s,{toggle:!1}).toggle()});Ot($i);const Rp="dropdown",Zk="bs.dropdown",Ms=`.${Zk}`,sf=".data-api",eL="Escape",kp="Tab",tL="ArrowUp",Lp="ArrowDown",nL=2,sL=`hide${Ms}`,rL=`hidden${Ms}`,iL=`show${Ms}`,oL=`shown${Ms}`,hE=`click${Ms}${sf}`,fE=`keydown${Ms}${sf}`,aL=`keyup${Ms}${sf}`,Gs="show",cL="dropup",lL="dropend",uL="dropstart",hL="dropup-center",fL="dropdown-center",ms='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',dL=`${ms}.${Gs}`,Jo=".dropdown-menu",pL=".navbar",gL=".navbar-nav",mL=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",yL=St()?"top-end":"top-start",_L=St()?"top-start":"top-end",vL=St()?"bottom-end":"bottom-start",EL=St()?"bottom-start":"bottom-end",wL=St()?"left-start":"right-start",bL=St()?"right-start":"left-start",TL="top",IL="bottom",AL={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},SL={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Zt extends Vt{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=ne.next(this._element,Jo)[0]||ne.prev(this._element,Jo)[0]||ne.findOne(Jo,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return AL}static get DefaultType(){return SL}static get NAME(){return Rp}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Gn(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!A.trigger(this._element,iL,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(gL))for(const s of[].concat(...document.body.children))A.on(s,"mouseover",Ca);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Gs),this._element.classList.add(Gs),A.trigger(this._element,oL,e)}}hide(){if(Gn(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!A.trigger(this._element,sL,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))A.off(s,"mouseover",Ca);this._popper&&this._popper.destroy(),this._menu.classList.remove(Gs),this._element.classList.remove(Gs),this._element.setAttribute("aria-expanded","false"),pn.removeDataAttribute(this._menu,"popper"),A.trigger(this._element,rL,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!dn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Rp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof zv>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:dn(this._config.reference)?e=zn(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=ef(e,this._menu,n)}_isShown(){return this._menu.classList.contains(Gs)}_getPlacement(){const e=this._parent;if(e.classList.contains(lL))return wL;if(e.classList.contains(uL))return bL;if(e.classList.contains(hL))return TL;if(e.classList.contains(fL))return IL;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(cL)?n?_L:yL:n?EL:vL}_detectNavbar(){return this._element.closest(pL)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(pn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:n}){const s=ne.find(mL,this._menu).filter(r=>Fr(r));s.length&&tf(s,n,e===Lp,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Zt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===nL||e.type==="keyup"&&e.key!==kp)return;const n=ne.find(dL);for(const s of n){const r=Zt.getInstance(s);if(!r||r._config.autoClose===!1)continue;const i=e.composedPath(),o=i.includes(r._menu);if(i.includes(r._element)||r._config.autoClose==="inside"&&!o||r._config.autoClose==="outside"&&o||r._menu.contains(e.target)&&(e.type==="keyup"&&e.key===kp||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:r._element};e.type==="click"&&(a.clickEvent=e),r._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===eL,r=[tL,Lp].includes(e.key);if(!r&&!s||n&&!s)return;e.preventDefault();const i=this.matches(ms)?this:ne.prev(this,ms)[0]||ne.next(this,ms)[0]||ne.findOne(ms,e.delegateTarget.parentNode),o=Zt.getOrCreateInstance(i);if(r){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),i.focus())}}A.on(document,fE,ms,Zt.dataApiKeydownHandler);A.on(document,fE,Jo,Zt.dataApiKeydownHandler);A.on(document,hE,Zt.clearMenus);A.on(document,aL,Zt.clearMenus);A.on(document,hE,ms,function(t){t.preventDefault(),Zt.getOrCreateInstance(this).toggle()});Ot(Zt);const Pp=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",xp=".sticky-top",Ro="padding-right",Mp="margin-right";class hu{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ro,n=>n+e),this._setElementAttributes(Pp,Ro,n=>n+e),this._setElementAttributes(xp,Mp,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ro),this._resetElementAttributes(Pp,Ro),this._resetElementAttributes(xp,Mp)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const r=this.getWidth(),i=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+r)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,i)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&pn.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=r=>{const i=pn.getDataAttribute(r,n);if(i===null){r.style.removeProperty(n);return}pn.removeDataAttribute(r,n),r.style.setProperty(n,i)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(dn(e)){n(e);return}for(const s of ne.find(e,this._element))n(s)}}const dE="backdrop",CL="fade",$p="show",Up=`mousedown.bs.${dE}`,OL={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},NL={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class pE extends ho{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return OL}static get DefaultType(){return NL}static get NAME(){return dE}show(e){if(!this._config.isVisible){an(e);return}this._append();const n=this._getElement();this._config.isAnimated&&uo(n),n.classList.add($p),this._emulateAnimation(()=>{an(e)})}hide(e){if(!this._config.isVisible){an(e);return}this._getElement().classList.remove($p),this._emulateAnimation(()=>{this.dispose(),an(e)})}dispose(){this._isAppended&&(A.off(this._element,Up),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(CL),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=zn(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),A.on(e,Up,()=>{an(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Zv(e,this._getElement(),this._config.isAnimated)}}const DL="focustrap",RL="bs.focustrap",Na=`.${RL}`,kL=`focusin${Na}`,LL=`keydown.tab${Na}`,PL="Tab",xL="forward",Fp="backward",ML={autofocus:!0,trapElement:null},$L={autofocus:"boolean",trapElement:"element"};class gE extends ho{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ML}static get DefaultType(){return $L}static get NAME(){return DL}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),A.off(document,Na),A.on(document,kL,e=>this._handleFocusin(e)),A.on(document,LL,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,A.off(document,Na))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=ne.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===Fp?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===PL&&(this._lastTabNavDirection=e.shiftKey?Fp:xL)}}const UL="modal",FL="bs.modal",Bt=`.${FL}`,VL=".data-api",BL="Escape",jL=`hide${Bt}`,HL=`hidePrevented${Bt}`,mE=`hidden${Bt}`,yE=`show${Bt}`,KL=`shown${Bt}`,WL=`resize${Bt}`,qL=`click.dismiss${Bt}`,zL=`mousedown.dismiss${Bt}`,GL=`keydown.dismiss${Bt}`,YL=`click${Bt}${VL}`,Vp="modal-open",QL="fade",Bp="show",il="modal-static",XL=".modal.show",JL=".modal-dialog",ZL=".modal-body",eP='[data-bs-toggle="modal"]',tP={backdrop:!0,focus:!0,keyboard:!0},nP={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ir extends Vt{constructor(e,n){super(e,n),this._dialog=ne.findOne(JL,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new hu,this._addEventListeners()}static get Default(){return tP}static get DefaultType(){return nP}static get NAME(){return UL}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||A.trigger(this._element,yE,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Vp),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||A.trigger(this._element,jL).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Bp),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])A.off(e,Bt);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new pE({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new gE({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=ne.findOne(ZL,this._dialog);n&&(n.scrollTop=0),uo(this._element),this._element.classList.add(Bp);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,A.trigger(this._element,KL,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){A.on(this._element,GL,e=>{if(e.key===BL){if(this._config.keyboard){e.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),A.on(window,WL,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),A.on(this._element,zL,e=>{A.one(this._element,qL,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Vp),this._resetAdjustments(),this._scrollBar.reset(),A.trigger(this._element,mE)})}_isAnimated(){return this._element.classList.contains(QL)}_triggerBackdropTransition(){if(A.trigger(this._element,HL).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(il)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(il),this._queueCallback(()=>{this._element.classList.remove(il),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const r=St()?"paddingLeft":"paddingRight";this._element.style[r]=`${n}px`}if(!s&&e){const r=St()?"paddingRight":"paddingLeft";this._element.style[r]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=Ir.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}A.on(document,YL,eP,function(t){const e=fn(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),A.one(e,yE,r=>{r.defaultPrevented||A.one(e,mE,()=>{Fr(this)&&this.focus()})});const n=ne.findOne(XL);n&&Ir.getInstance(n).hide(),Ir.getOrCreateInstance(e).toggle(this)});Tc(Ir);Ot(Ir);const sP="offcanvas",rP="bs.offcanvas",An=`.${rP}`,_E=".data-api",iP=`load${An}${_E}`,oP="Escape",jp="show",Hp="showing",Kp="hiding",aP="offcanvas-backdrop",vE=".offcanvas.show",cP=`show${An}`,lP=`shown${An}`,uP=`hide${An}`,Wp=`hidePrevented${An}`,EE=`hidden${An}`,hP=`resize${An}`,fP=`click${An}${_E}`,dP=`keydown.dismiss${An}`,pP='[data-bs-toggle="offcanvas"]',gP={backdrop:!0,keyboard:!0,scroll:!1},mP={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Yn extends Vt{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return gP}static get DefaultType(){return mP}static get NAME(){return sP}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||A.trigger(this._element,cP,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new hu().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Hp);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(jp),this._element.classList.remove(Hp),A.trigger(this._element,lP,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||A.trigger(this._element,uP).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Kp),this._backdrop.hide();const n=()=>{this._element.classList.remove(jp,Kp),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new hu().reset(),A.trigger(this._element,EE)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){A.trigger(this._element,Wp);return}this.hide()},n=Boolean(this._config.backdrop);return new pE({className:aP,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new gE({trapElement:this._element})}_addEventListeners(){A.on(this._element,dP,e=>{if(e.key===oP){if(!this._config.keyboard){A.trigger(this._element,Wp);return}this.hide()}})}static jQueryInterface(e){return this.each(function(){const n=Yn.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}A.on(document,fP,pP,function(t){const e=fn(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Gn(this))return;A.one(e,EE,()=>{Fr(this)&&this.focus()});const n=ne.findOne(vE);n&&n!==e&&Yn.getInstance(n).hide(),Yn.getOrCreateInstance(e).toggle(this)});A.on(window,iP,()=>{for(const t of ne.find(vE))Yn.getOrCreateInstance(t).show()});A.on(window,hP,()=>{for(const t of ne.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&Yn.getOrCreateInstance(t).hide()});Tc(Yn);Ot(Yn);const yP=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),_P=/^aria-[\w-]*$/i,vP=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,EP=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,wP=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?yP.has(n)?Boolean(vP.test(t.nodeValue)||EP.test(t.nodeValue)):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))},wE={"*":["class","dir","id","lang","role",_P],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function bP(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const r=new window.DOMParser().parseFromString(t,"text/html"),i=[].concat(...r.body.querySelectorAll("*"));for(const o of i){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const c=[].concat(...o.attributes),l=[].concat(e["*"]||[],e[a]||[]);for(const u of c)wP(u,l)||o.removeAttribute(u.nodeName)}return r.body.innerHTML}const TP="TemplateFactory",IP={allowList:wE,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},AP={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},SP={entry:"(string|element|function|null)",selector:"(string|element)"};class CP extends ho{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return IP}static get DefaultType(){return AP}static get NAME(){return TP}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(e,i,r);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},SP)}_setContent(e,n,s){const r=ne.findOne(s,e);if(r){if(n=this._resolvePossibleFunction(n),!n){r.remove();return}if(dn(n)){this._putElementInTemplate(zn(n),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(n);return}r.textContent=n}}_maybeSanitize(e){return this._config.sanitize?bP(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return typeof e=="function"?e(this):e}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const OP="tooltip",NP=new Set(["sanitize","allowList","sanitizeFn"]),ol="fade",DP="modal",ko="show",RP=".tooltip-inner",qp=`.${DP}`,zp="hide.bs.modal",Gr="hover",al="focus",kP="click",LP="manual",PP="hide",xP="hidden",MP="show",$P="shown",UP="inserted",FP="click",VP="focusin",BP="focusout",jP="mouseenter",HP="mouseleave",KP={AUTO:"auto",TOP:"top",RIGHT:St()?"left":"right",BOTTOM:"bottom",LEFT:St()?"right":"left"},WP={allowList:wE,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},qP={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Br extends Vt{constructor(e,n){if(typeof zv>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return WP}static get DefaultType(){return qP}static get NAME(){return OP}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),A.off(this._element.closest(qp),zp,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=A.trigger(this._element,this.constructor.eventName(MP)),s=(Xv(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),A.trigger(this._element,this.constructor.eventName(UP))),this._popper=this._createPopper(r),r.classList.add(ko),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))A.on(a,"mouseover",Ca);const o=()=>{A.trigger(this._element,this.constructor.eventName($P)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||A.trigger(this._element,this.constructor.eventName(PP)).defaultPrevented)return;if(this._getTipElement().classList.remove(ko),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))A.off(r,"mouseover",Ca);this._activeTrigger[kP]=!1,this._activeTrigger[al]=!1,this._activeTrigger[Gr]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),A.trigger(this._element,this.constructor.eventName(xP)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(ol,ko),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=RR(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(ol),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new CP({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[RP]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ol)}_isShown(){return this.tip&&this.tip.classList.contains(ko)}_createPopper(e){const n=typeof this._config.placement=="function"?this._config.placement.call(this,e,this._element):this._config.placement,s=KP[n.toUpperCase()];return ef(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")A.on(this._element,this.constructor.eventName(FP),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==LP){const s=n===Gr?this.constructor.eventName(jP):this.constructor.eventName(VP),r=n===Gr?this.constructor.eventName(HP):this.constructor.eventName(BP);A.on(this._element,s,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusin"?al:Gr]=!0,o._enter()}),A.on(this._element,r,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusout"?al:Gr]=o._element.contains(i.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},A.on(this._element.closest(qp),zp,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=pn.getDataAttributes(this._element);for(const s of Object.keys(n))NP.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:zn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(e[n]=this._config[n]);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=Br.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}Ot(Br);const zP="popover",GP=".popover-header",YP=".popover-body",QP={...Br.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},XP={...Br.DefaultType,content:"(null|string|element|function)"};class rf extends Br{static get Default(){return QP}static get DefaultType(){return XP}static get NAME(){return zP}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[GP]:this._getTitle(),[YP]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=rf.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}Ot(rf);const JP="scrollspy",ZP="bs.scrollspy",of=`.${ZP}`,ex=".data-api",tx=`activate${of}`,Gp=`click${of}`,nx=`load${of}${ex}`,sx="dropdown-item",Bs="active",rx='[data-bs-spy="scroll"]',cl="[href]",ix=".nav, .list-group",Yp=".nav-link",ox=".nav-item",ax=".list-group-item",cx=`${Yp}, ${ox} > ${Yp}, ${ax}`,lx=".dropdown",ux=".dropdown-toggle",hx={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},fx={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Sc extends Vt{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return hx}static get DefaultType(){return fx}static get NAME(){return JP}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=zn(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(A.off(this._config.target,Gp),A.on(this._config.target,Gp,cl,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,r=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:r,behavior:"smooth"});return}s.scrollTop=r}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&a){if(s(o),!r)return;continue}!i&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=ne.find(cl,this._config.target);for(const n of e){if(!n.hash||Gn(n))continue;const s=ne.findOne(n.hash,this._element);Fr(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Bs),this._activateParents(e),A.trigger(this._element,tx,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(sx)){ne.findOne(ux,e.closest(lx)).classList.add(Bs);return}for(const n of ne.parents(e,ix))for(const s of ne.prev(n,cx))s.classList.add(Bs)}_clearActiveClass(e){e.classList.remove(Bs);const n=ne.find(`${cl}.${Bs}`,e);for(const s of n)s.classList.remove(Bs)}static jQueryInterface(e){return this.each(function(){const n=Sc.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}A.on(window,nx,()=>{for(const t of ne.find(rx))Sc.getOrCreateInstance(t)});Ot(Sc);const dx="tab",px="bs.tab",$s=`.${px}`,gx=`hide${$s}`,mx=`hidden${$s}`,yx=`show${$s}`,_x=`shown${$s}`,vx=`click${$s}`,Ex=`keydown${$s}`,wx=`load${$s}`,bx="ArrowLeft",Qp="ArrowRight",Tx="ArrowUp",Xp="ArrowDown",ys="active",Jp="fade",ll="show",Ix="dropdown",Ax=".dropdown-toggle",Sx=".dropdown-menu",ul=":not(.dropdown-toggle)",Cx='.list-group, .nav, [role="tablist"]',Ox=".nav-item, .list-group-item",Nx=`.nav-link${ul}, .list-group-item${ul}, [role="tab"]${ul}`,bE='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',hl=`${Nx}, ${bE}`,Dx=`.${ys}[data-bs-toggle="tab"], .${ys}[data-bs-toggle="pill"], .${ys}[data-bs-toggle="list"]`;class Ar extends Vt{constructor(e){super(e),this._parent=this._element.closest(Cx),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),A.on(this._element,Ex,n=>this._keydown(n)))}static get NAME(){return dx}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?A.trigger(n,gx,{relatedTarget:e}):null;A.trigger(e,yx,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(ys),this._activate(fn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(ll);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),A.trigger(e,_x,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(Jp))}_deactivate(e,n){if(!e)return;e.classList.remove(ys),e.blur(),this._deactivate(fn(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(ll);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),A.trigger(e,mx,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(Jp))}_keydown(e){if(![bx,Qp,Tx,Xp].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=[Qp,Xp].includes(e.key),s=tf(this._getChildren().filter(r=>!Gn(r)),e.target,n,!0);s&&(s.focus({preventScroll:!0}),Ar.getOrCreateInstance(s).show())}_getChildren(){return ne.find(hl,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=fn(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(Ix))return;const r=(i,o)=>{const a=ne.findOne(i,s);a&&a.classList.toggle(o,n)};r(Ax,ys),r(Sx,ll),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(ys)}_getInnerElement(e){return e.matches(hl)?e:ne.findOne(hl,e)}_getOuterElement(e){return e.closest(Ox)||e}static jQueryInterface(e){return this.each(function(){const n=Ar.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}A.on(document,vx,bE,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!Gn(this)&&Ar.getOrCreateInstance(this).show()});A.on(window,wx,()=>{for(const t of ne.find(Dx))Ar.getOrCreateInstance(t)});Ot(Ar);const Rx="toast",kx="bs.toast",es=`.${kx}`,Lx=`mouseover${es}`,Px=`mouseout${es}`,xx=`focusin${es}`,Mx=`focusout${es}`,$x=`hide${es}`,Ux=`hidden${es}`,Fx=`show${es}`,Vx=`shown${es}`,Bx="fade",Zp="hide",Lo="show",Po="showing",jx={animation:"boolean",autohide:"boolean",delay:"number"},Hx={animation:!0,autohide:!0,delay:5e3};class Cc extends Vt{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Hx}static get DefaultType(){return jx}static get NAME(){return Rx}show(){if(A.trigger(this._element,Fx).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Bx);const n=()=>{this._element.classList.remove(Po),A.trigger(this._element,Vx),this._maybeScheduleHide()};this._element.classList.remove(Zp),uo(this._element),this._element.classList.add(Lo,Po),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||A.trigger(this._element,$x).defaultPrevented)return;const n=()=>{this._element.classList.add(Zp),this._element.classList.remove(Po,Lo),A.trigger(this._element,Ux)};this._element.classList.add(Po),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Lo),super.dispose()}isShown(){return this._element.classList.contains(Lo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){A.on(this._element,Lx,e=>this._onInteraction(e,!0)),A.on(this._element,Px,e=>this._onInteraction(e,!1)),A.on(this._element,xx,e=>this._onInteraction(e,!0)),A.on(this._element,Mx,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=Cc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}Tc(Cc);Ot(Cc);const Kx={apiKey:"AIzaSyC2QydohIRiBwStPp_ssGCXFH7gdLryAqI",authDomain:"work9-e9bf6.firebaseapp.com",projectId:"work9-e9bf6",storageBucket:"work9-e9bf6.appspot.com",messagingSenderId:"171091735378",appId:"1:171091735378:web:d277a5aa7eae4f73dcc08b"},Wx=Uu(Kx);g_(Wx);const af=Kb(CD);af.use(Gb());af.use(bv);af.mount("#app");export{Kt as F,Pn as G,nM as J,tM as K,_p as U,sM as X,p_ as Z,H_ as _,lb as a,ku as b,Tl as c,Yx as d,bC as e,Xx as f,We as g,rs as h,Gx as i,os as j,Cu as k,Kr as l,wv as m,oM as n,Dn as o,zx as p,rM as q,Qx as r,iM as s,qx as t,AO as u,Jx as v,Zx as w,wC as z};
