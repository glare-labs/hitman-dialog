(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,tt=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),rt=new WeakMap;let vt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(tt&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&rt.set(e,t))}return t}toString(){return this.cssText}};const At=o=>new vt(typeof o=="string"?o:o+"",void 0,et),it=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new vt(e,o,et)},wt=(o,t)=>{if(tt)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),i=R.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,o.appendChild(n)}},at=tt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return At(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Et,defineProperty:xt,getOwnPropertyDescriptor:Ct,getOwnPropertyNames:Pt,getOwnPropertySymbols:St,getPrototypeOf:Ot}=Object,w=globalThis,lt=w.trustedTypes,Tt=lt?lt.emptyScript:"",F=w.reactiveElementPolyfillSupport,I=(o,t)=>o,D={toAttribute(o,t){switch(t){case Boolean:o=o?Tt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},nt=(o,t)=>!Et(o,t),ct={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);class O extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ct){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&xt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:s}=Ct(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const l=i==null?void 0:i.call(this);s.call(this,r),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ct}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const t=Ot(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const e=this.properties,n=[...Pt(e),...St(e)];for(const i of n)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)e.unshift(at(i))}else t!==void 0&&e.push(at(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){var s;const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const r=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:D).toAttribute(e,n.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){var s;const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=n.getPropertyOptions(i),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)==null?void 0:s.fromAttribute)!==void 0?r.converter:D;this._$Em=i,this[i]=l.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??nt)(this[t],e))return;this.P(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[I("elementProperties")]=new Map,O[I("finalized")]=new Map,F==null||F({ReactiveElement:O}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,j=U.trustedTypes,ht=j?j.createPolicy("lit-html",{createHTML:o=>o}):void 0,bt="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+A,kt=`<${_t}>`,P=document,L=()=>P.createComment(""),N=o=>o===null||typeof o!="object"&&typeof o!="function",ot=Array.isArray,It=o=>ot(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",q=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ut=/>/g,E=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,ft=/"/g,yt=/^(?:script|style|textarea|title)$/i,Ut=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),H=Ut(1),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),gt=new WeakMap,x=P.createTreeWalker(P,129);function $t(o,t){if(!ot(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(t):t}const Ht=(o,t)=>{const e=o.length-1,n=[];let i,s=t===2?"<svg>":t===3?"<math>":"",r=k;for(let l=0;l<e;l++){const a=o[l];let d,p,c=-1,b=0;for(;b<a.length&&(r.lastIndex=b,p=r.exec(a),p!==null);)b=r.lastIndex,r===k?p[1]==="!--"?r=dt:p[1]!==void 0?r=ut:p[2]!==void 0?(yt.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=E):p[3]!==void 0&&(r=E):r===E?p[0]===">"?(r=i??k,c=-1):p[1]===void 0?c=-2:(c=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?E:p[3]==='"'?ft:pt):r===ft||r===pt?r=E:r===dt||r===ut?r=k:(r=E,i=void 0);const $=r===E&&o[l+1].startsWith("/>")?" ":"";s+=r===k?a+kt:c>=0?(n.push(d),a.slice(0,c)+bt+a.slice(c)+A+$):a+A+(c===-2?l:$)}return[$t(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class z{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,r=0;const l=t.length-1,a=this.parts,[d,p]=Ht(t,e);if(this.el=z.createElement(d,n),x.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=x.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(bt)){const b=p[r++],$=i.getAttribute(c).split(A),B=/([.?@])?(.*)/.exec(b);a.push({type:1,index:s,name:B[2],strings:$,ctor:B[1]==="."?Nt:B[1]==="?"?zt:B[1]==="@"?Mt:W}),i.removeAttribute(c)}else c.startsWith(A)&&(a.push({type:6,index:s}),i.removeAttribute(c));if(yt.test(i.tagName)){const c=i.textContent.split(A),b=c.length-1;if(b>0){i.textContent=j?j.emptyScript:"";for(let $=0;$<b;$++)i.append(c[$],L()),x.nextNode(),a.push({type:2,index:++s});i.append(c[b],L())}}}else if(i.nodeType===8)if(i.data===_t)a.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(A,c+1))!==-1;)a.push({type:7,index:s}),c+=A.length-1}s++}}static createElement(t,e){const n=P.createElement("template");return n.innerHTML=t,n}}function T(o,t,e=o,n){var r,l;if(t===S)return t;let i=n!==void 0?(r=e.o)==null?void 0:r[n]:e.l;const s=N(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,e,n)),n!==void 0?(e.o??(e.o=[]))[n]=i:e.l=i),i!==void 0&&(t=T(o,i._$AS(o,t.values),i,n)),t}class Lt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??P).importNode(e,!0);x.currentNode=i;let s=x.nextNode(),r=0,l=0,a=n[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new M(s,s.nextSibling,this,t):a.type===1?d=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(d=new Bt(s,this,t)),this._$AV.push(d),a=n[++l]}r!==(a==null?void 0:a.index)&&(s=x.nextNode(),r++)}return x.currentNode=P,i}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,n,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this.v=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),N(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):It(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=z.createElement($t(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(e);else{const r=new Lt(i,this),l=r.u(this.options);r.p(e),this.T(l),this._$AH=r}}_$AC(t){let e=gt.get(t.strings);return e===void 0&&gt.set(t.strings,e=new z(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const s of t)i===e.length?e.push(n=new M(this.O(L()),this.O(L()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,s){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=h}_$AI(t,e=this,n,i){const s=this.strings;let r=!1;if(s===void 0)t=T(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const l=t;let a,d;for(t=s[0],a=0;a<s.length-1;a++)d=T(this,l[n+a],e,a),d===S&&(d=this._$AH[a]),r||(r=!N(d)||d!==this._$AH[a]),d===h?t=h:t!==h&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}r&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nt extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class zt extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Mt extends W{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??h)===S)return;const n=this._$AH,i=t===h&&n!==h||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==h&&(n===h||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Bt{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const K=U.litHtmlPolyfillSupport;K==null||K(z,M),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.2.0");const Rt=(o,t,e)=>{const n=(e==null?void 0:e.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const s=(e==null?void 0:e.renderBefore)??null;n._$litPart$=i=new M(t.insertBefore(L(),s),s,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class C extends O{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return S}}var mt;C._$litElement$=!0,C.finalized=!0,(mt=globalThis.litElementHydrateSupport)==null||mt.call(globalThis,{LitElement:C});const Z=globalThis.litElementPolyfillSupport;Z==null||Z({LitElement:C});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:nt},jt=(o=Dt,t,e)=>{const{kind:n,metadata:i}=e;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(e.name,o),n==="accessor"){const{name:r}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,o)},init(l){return l!==void 0&&this.P(r,void 0,o),l}}}if(n==="setter"){const{name:r}=e;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,o)}}throw Error("Unsupported decorator location: "+n)};function _(o){return(t,e)=>typeof e=="object"?jt(o,t,e):((n,i,s)=>{const r=i.hasOwnProperty(s);return i.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(i,s):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(o){return _({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(o,t){return(e,n,i)=>{const s=r=>{var l;return((l=r.renderRoot)==null?void 0:l.querySelector(o))??null};return Vt(e,n,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ft=o=>(...t)=>({_$litDirective$:o,values:t});class qt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this.t=t,this._$AM=e,this.i=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=Ft(class extends qt{constructor(o){var t;if(super(o),o.type!==Wt.ATTRIBUTE||o.name!=="class"||((t=o.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var n,i;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((n=this.nt)!=null&&n.has(s))&&this.st.add(s);return this.render(t)}const e=o.element.classList;for(const s of this.st)s in t||(e.remove(s),this.st.delete(s));for(const s in t){const r=!!t[s];r===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(r?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return S}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Kt(o){const t=new MouseEvent("click",{bubbles:!0});return o.dispatchEvent(t),t}function Zt(o){return o.currentTarget!==o.target||o.composedPath()[0]!==o.target||o.target.disabled?!1:!Jt(o)}function Jt(o){const t=Y;return t&&(o.preventDefault(),o.stopImmediatePropagation()),Yt(),t}let Y=!1;async function Yt(){Y=!0,await null,Y=!1}var Gt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,m=(o,t,e,n)=>{for(var i=n>1?void 0:n?Qt(t,e):t,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&Gt(t,e,i),i};const V=class V extends C{constructor(){super(),this.isActive=!1,this.value="",this.href="",this.target="",this.buttonType="submit",this.hasLabel=!1,this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,typeof window<"u"&&(this.addEventListener("click",async t=>{if(!(!this.form||this.buttonType==="button")&&(await new Promise(e=>{setTimeout(e)}),!t.defaultPrevented)){if(this.buttonType==="reset"){this.form.reset();return}this.form.addEventListener("submit",e=>{Object.defineProperty(e,"submitter",{configurable:!0,enumerable:!0,get:()=>this})},{capture:!0,once:!0}),this.internals.setFormValue(this.value),this.form.requestSubmit()}}),this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this)),this.addEventListener("focus",this.handleFocus.bind(this))),this.internals=this.attachInternals(),this.setAttribute("is-hitman-dialog-button","true")}get active(){return this.isActive}set active(t){t!==this.isActive&&(this.isActive=t,t?this.focus():this.blur())}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this.internals.form}get classes(){return{button:!0,active:this.active}}render(){return this.href!==""?this.renderLink():this.renderButton()}renderButton(){return H`
            <button
                type=${this.buttonType}
                class=${J(this.classes)}
            >
                ${this.renderContent()}
            </button>
        `}renderLink(){return H`
            <a
                type=${this.buttonType}
                href=${this.href}
                target=${this.target||h}
                class=${J(this.classes)}
            >
                ${this.renderContent()}
            </a>`}renderContent(){return H`
            <slot name="leading-icon" @slotchange=${this.handleLeadingIconChange}></slot>
            <span class="label">
                <slot @slotchange=${this.handleLabelChange}></slot>
            </span>
            <slot name="trailing-icon" @slotchange=${this.handleTrailingIconChange}></slot>
        `}focus(){var t;(t=this.buttonElement)==null||t.focus()}blur(){var t;(t=this.buttonElement)==null||t.blur()}handleClick(t){var n;const e=new MouseEvent("click",{bubbles:!0});(n=this.buttonElement)==null||n.dispatchEvent(e),!(!Zt(e)||!this.buttonElement)&&(this.active=!0,Kt(this.buttonElement))}handleBlur(t){if(!this.buttonElement){t.preventDefault();return}this.active=!1}handleFocus(t){if(!this.buttonElement){t.preventDefault();return}this.active=!0}handleLabelChange(t){const e=t.target;this.hasLabel=e.assignedElements().length>0}handleLeadingIconChange(t){const e=t.target;this.hasLeadingIcon=e.assignedElements().length>0}handleTrailingIconChange(t){const e=t.target;this.hasTrailingIcon=e.assignedElements().length>0}};V.formAssociated=!0,V.shadowRootOptions={mode:"open",delegatesFocus:!0};let g=V;m([_({reflect:!0,type:Boolean})],g.prototype,"active",1);m([_({reflect:!0})],g.prototype,"value",2);m([_()],g.prototype,"href",2);m([_()],g.prototype,"target",2);m([_({reflect:!0,attribute:"type"})],g.prototype,"buttonType",2);m([v(".button")],g.prototype,"buttonElement",2);m([v(".leading-icon")],g.prototype,"leadingIconElement",2);m([v(".trailing-icon")],g.prototype,"trailingIconElement",2);m([v(".label")],g.prototype,"labelElement",2);m([y()],g.prototype,"hasLabel",2);m([y()],g.prototype,"hasLeadingIcon",2);m([y()],g.prototype,"hasTrailingIcon",2);var Xt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ee=(o,t,e,n)=>{for(var i=n>1?void 0:n?te(t,e):t,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&Xt(t,e,i),i};let G=class extends g{};G.styles=[it`
            @layer hitman-dialog-button-base {
                :host {
                    display: block;
                    min-height: fit-content;
                    box-sizing: border-box;
                    cursor: pointer;
                    border: none;
                    outline: none;
                    position: relative;
                    text-overflow: ellipsis;
                    text-wrap: nowrap;
                    user-select: none;
                    vertical-align: top;
                }

                .button {
                    all: unset;
                    -webkit-appearance: none;
                    margin: inherit;
                    align-items: center;
                    border-radius: inherit;
                    cursor: inherit;
                    border: none;
                    outline: none;
                    vertical-align: middle;
                    background: transparent;
                    text-decoration: none;
                    height: inherit;
                    z-index: 0;
                }
                ::slotted([slot='leading-icon']),
                ::slotted([slot='trailing-icon']) {
                    display: inline-flex;
                    position: relative;
                    writing-mode: horizontal-tb;
                    fill: currentColor;
                    flex-shrink: 0;
                }
            }

            @layer hitman-dialog-button-layout {
                .button {
                    display: grid;
                    grid-template-columns: calc(var(--_icon-padding-start) + var(--_icon-padding-end) + var(--_icon-size)) 1fr calc(var(--_icon-padding-start) + var(--_icon-padding-end) + var(--_icon-size));
                    grid-template-rows: 1fr;
                }

                .button ::slotted([slot='leading-icon']) {
                    grid-column: 1/2;
                }
                .button .label {
                    grid-column: 2/3;
                }
                .button ::slotted([slot='trailing-icon']) {
                    grid-column: 3/4;
                }
            }

            @layer hitman-dialog-button {
                :host {
                    --_hitman-dialog-button-width: var(--hitman-dialog-button-width, 100%);
                    --_hitman-dialog-button-height: var(--hitman-dialog-button-height, 48px);

                    --_container-color: var(--_variant-container-default-color);
                    --_variant-container-default-color: var(--hitman-dialog-button-container-default-color, #454545);
                    --_variant-container-hover-color: var(--hitman-dialog-button-container-hover-color, #636363);
                    --_variant-container-focus-color: var(--hitman-dialog-button-container-focus-color, red);


                    --_label-color: var(--_variant-label-default-color);
                    --_variant-label-default-color: var(--hitman-dialog-button-label-default-color, white);
                    --_variant-label-hover-color: var(--hitman-dialog-button-label-hover-color, white);
                    --_variant-label-focus-color: var(--hitman-dialog-button-label-focus-color, white);
                    --_label-font-size: var(--hitman-dialog-button-label-font-size, 16px);

                    --_icon-color: var(--_variant-icon-default-color);
                    --_variant-icon-default-color: var(--hitman-dialog-button-icon-default-color, white);
                    --_variant-icon-hover-color: var(--hitman-dialog-button-icon-hover-color, white);
                    --_variant-icon-focus-color: var(--hitman-dialog-button-icon-focus-color, white);
                    --_icon-size: var(--hitman-dialog-button-icon-size, 24px);
                    --_icon-padding-start: var(--hitman-dialog-button-icon-padding-start, 16px);
                    --_icon-padding-end: var(--hitman-dialog-button-icon-padding-end, 16px);

                    height: var(--_hitman-dialog-button-height);
                    width: var(--_hitman-dialog-button-width);
                }

                .button {
                    width: 100%;
                    height: inherit;
                    z-index: 0;

                    background-color: var(--_container-color);

                    transition-property: background-color, color, scale;
                    transition-duration: 200ms;
                }

                ::slotted([slot='leading-icon']),
                ::slotted([slot='trailing-icon']) {
                    color: var(--_icon-color);
                    font-size: var(--_icon-size) !important;
                    block-size: var(--_icon-size);
                    padding-inline-start: var(--_icon-padding-start);
                    padding-inline-end: var(--_icon-padding-end);
                }
                .label {
                    color: var(--_label-color);
                    font-size: var(--_label-font-size) ;
                }


                .button:hover {
                    --_icon-color: var(--_variant-icon-hover-color);
                    --_label-color: var(--_variant-label-hover-color);
                    --_container-color: var(--_variant-container-hover-color);
                }

                .button:focus,
                .button:active,
                .button:hover:active,
                .button.active {
                    --_icon-color: var(--_variant-icon-focus-color);
                    --_label-color: var(--_variant-label-focus-color);
                    --_container-color: var(--_variant-container-focus-color);
                    scale: 1.05;
                }





            }
        `];G=ee([st("hitman-dialog-button")],G);class ie extends C{render(){return H`
            <header class="header">
                <slot></slot>
            </header>
        `}}var ne=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,se=(o,t,e,n)=>{for(var i=n>1?void 0:n?oe(t,e):t,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&ne(t,e,i),i};let Q=class extends ie{};Q.styles=[it`
            :host {
                display: inline-flex;
                color: var(--_label-color);
                font-size: var(--_label-font-size);
                font-weight: var(--_label-font-weight);
                line-height: var(--_label-line-height);
                letter-spacing: var(--_label-letter-spacing);

                --_label-color: var(--hitman-dialog-header-color, white);
                --_label-font-size: var(--hitman-dialog-header-font-size, 24px);
                --_label-font-weight: var(--hitman-dialog-header-font-weight, 700);
                --_label-line-height: var(--hitman-dialog-header-line-height, 24px);
                --_label-letter-spacing: var(--hitman-dialog-header-letter-spacing, 0.25px);
            }
            .header {
                color: inherit;
                font-size: inherit;
                font-weight: inherit;
                line-height: inherit;
                letter-spacing: inherit;
            }
        `];Q=se([st("hitman-dialog-header")],Q);const re={dialog:{keyframe:[{scale:"0.75",opacity:"0"},{scale:"1",opacity:"1"}],options:{duration:500,easing:"cubic-bezier(.3,0,0,1)"}},scrim:{keyframe:[{opacity:"0"},{opacity:"0.32"}],options:{duration:500,easing:"linear"}},container:{keyframe:[{opacity:0},{opacity:1}],options:{duration:50,easing:"linear",pseudoElement:"::before"}},actions:{keyframe:[{opacity:0},{opacity:0},{opacity:1}],options:{duration:500,easing:"linear",fill:"forwards"}}},ae={dialog:{keyframe:[{scale:"1",opacity:"1"},{scale:"0.75",opacity:"0"}],options:{duration:150,easing:"cubic-bezier(.3,0,.8,.15)"}},scrim:{keyframe:[{opacity:"0.32"},{opacity:"0"}],options:{duration:150,easing:"linear"}},container:{keyframe:[{opacity:1},{opacity:0}],options:{delay:50,duration:50,easing:"linear",pseudoElement:"::before"}},actions:{keyframe:[{opacity:1},{opacity:0}],options:{duration:100,easing:"linear",fill:"forwards"}}};var le=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,f=(o,t,e,n)=>{for(var i=n>1?void 0:n?ce(t,e):t,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&le(t,e,i),i};class u extends C{constructor(){super(),this.type="alert",this.returnValue="",this.isOpen=!1,this.isOpening=!1,this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.treewalk=typeof window>"u"?null:document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.currentActionButtonIndex=0,this.nextClickIsFromContent=!1,this.escapePressedWithoutCancel=!1,typeof window<"u"&&(this.addEventListener("submit",this.handleSubmit),window.addEventListener("keydown",t=>{t.key==="ArrowUp"||t.key==="PageUp"?this.actionButtonIndex-=1:(t.key==="ArrowDown"||t.key==="PageDown")&&(this.actionButtonIndex+=1)}))}get open(){return this.isOpen}set open(t){t!==this.isOpen&&(this.isOpen=t,t?(this.setAttribute("open","true"),this.show()):(this.removeAttribute("open"),this.close()))}get actionButtonElements(){var e;if(!this.treewalk)return[];const t=[];for(;(e=this.treewalk)!=null&&e.nextNode();)this.treewalk.currentNode.attributes.getNamedItem("is-hitman-dialog-button")!==null&&t.push(this.treewalk.currentNode);return this.treewalk.currentNode=this.treewalk.root,t}get actionButtonIndex(){return this.currentActionButtonIndex}set actionButtonIndex(t){if(this.currentActionButtonIndex===t)return;const e=this.currentActionButtonIndex;t>this.actionButtonElements.length-1?this.currentActionButtonIndex=0:t<0?this.currentActionButtonIndex=this.actionButtonElements.length-1:this.currentActionButtonIndex=t,this.actionButtonElements[e].removeAttribute("active"),this.actionButtonElements[this.currentActionButtonIndex].setAttribute("active","true")}render(){const t={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon};return H`
            <div class="scrim"></div>
            <dialog
                @cancel=${this.handleCancel}
                @click=${this.handleDialogClick}
                @close=${this.handleClose}
                @keydown=${this.handleKeydown}
                returnValue=${this.returnValue||h}
                class=${J(t)}
            >
                <div class="container" @click=${this.handleContentClick}>
                    <div class="headline-container">
                        <div class="icon">
                            <slot name="icon" @slotchange=${this.handleIconChange}></slot>
                        </div>
                        <h2 class="headline">
                            <slot name="headline" @slotchange=${this.handleHeadlineChange}></slot>
                        </h2>
                    </div>
                    <div class="scroll-container">
                        <div class="content">
                            <slot name="content"></slot>
                        </div>
                    </div>
                    <div class="action-container">
                        <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
                    </div>
                </div>
            </dialog>
        `}async show(){var e,n;if(this.isOpening=!0,await this.updateComplete,(e=this.dialog)!=null&&e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1,this.isOpening=!1;return}(n=this.dialog)==null||n.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),await this.dialogAnimate("open"),this.dispatchEvent(new Event("opened",{})),this.isOpening=!1}async close(t=this.returnValue){var i;if(this.isOpening=!1,!this.isConnected){this.open=!1;return}if(await this.updateComplete,!((i=this.dialog)!=null&&i.open)||this.isOpening){this.open=!1;return}const e=this.returnValue;if(this.returnValue=t,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=e;return}await this.dialogAnimate("close"),this.dialog.close(),this.open=!1,this.dispatchEvent(new Event("closed",{}))}async dialogAnimate(t){var i;if((i=this.cancelAnimation)==null||i.abort(),this.cancelAnimation=new AbortController,!this.dialog||!this.scrim)return;const e=t==="open"?re:ae,n=[this.dialog.animate(e.dialog.keyframe,e.dialog.options),this.scrim.animate(e.scrim.keyframe,e.scrim.options),this.container.animate(e.container.keyframe,e.container.options),this.actions.animate(e.actions.keyframe,e.actions.options)];for(const s of n)this.cancelAnimation.signal.addEventListener("abort",()=>{s.cancel()});await Promise.all(n.map(s=>s.finished.catch(()=>{})))}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(t){const e=t.target,{submitter:n}=t;e.method!=="dialog"||!n||this.close(n.getAttribute("value")??this.returnValue)}handleCancel(t){t.target===this.dialog&&(this.escapePressedWithoutCancel=!1,t.preventDefault(),this.close())}handleClose(){var t;this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,(t=this.dialog)==null||t.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(t){t.key==="Escape"&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}handleHeadlineChange(t){const e=t.target;this.hasHeadline=e.assignedElements().length>0}handleActionsChange(t){const e=t.target;this.hasActions=e.assignedElements().length>0}handleIconChange(t){const e=t.target;this.hasIcon=e.assignedElements().length>0}}f([_({type:Boolean})],u.prototype,"open",1);f([_({type:String})],u.prototype,"type",2);f([_({attribute:!1})],u.prototype,"returnValue",2);f([v("dialog")],u.prototype,"dialog",2);f([v(".scrim")],u.prototype,"scrim",2);f([v(".container")],u.prototype,"container",2);f([v(".headline-container")],u.prototype,"headline",2);f([v(".content")],u.prototype,"content",2);f([v(".action-container")],u.prototype,"actions",2);f([v(".scroll-container")],u.prototype,"scroller",2);f([y()],u.prototype,"isAtScrollTop",2);f([y()],u.prototype,"isAtScrollBottom",2);f([y()],u.prototype,"hasHeadline",2);f([y()],u.prototype,"hasActions",2);f([y()],u.prototype,"hasIcon",2);f([y()],u.prototype,"currentActionButtonIndex",2);var he=Object.defineProperty,de=Object.getOwnPropertyDescriptor,ue=(o,t,e,n)=>{for(var i=n>1?void 0:n?de(t,e):t,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&he(t,e,i),i};let X=class extends u{};X.styles=[it`
        @layer hitman-dialog-base {
            :host {
                display: contents;
                margin: auto;
                max-height: min(560px, calc(100% - 48px));
                max-width: min(560px, calc(100% - 48px));
                min-height: 140px;
                min-width: 280px;
                position: fixed;
                height: fit-content;
                width: fit-content;
            }

            // Can't use ::backdrop since Firefox does not allow animations on it.
            ::backdrop {
                background: none;
            }

            /* We don't need to center dialog */
            dialog {
                background: transparent;
                border: none;
                border-radius: inherit;
                flex-direction: column;
                height: inherit;
                /* margin: inherit; */
                max-height: inherit;
                max-width: inherit;
                min-height: inherit;
                min-width: inherit;
                outline: none;
                overflow: visible;
                padding: 0;
                width: inherit;
                display: none;
            }

            .container,
            .headline-container,
            .scroll-container,
            .action-container {
                padding: 0;
                margin: 0;
            }
        }

        @layer hitman-dialog-variable {
            :host {
                --_container-color: var(--hitman-dialog-container-color, #454545);
                --_content-color: var(--hitman-dialog-content-color, #c2c2c2);
                --_scrim-color: var(--hitman-dialog-scrim-color, #000000);
                --_scrim-opacity: var(--hitman-dialog-scrim-opacity, 0.32);

            }
        }

        @layer hitman-dialog-scrim {
            :host([open="true"]) .scrim {
                display: block;
            }

            .scrim {
                background: var(--_scrim-color);
                opacity: var(--_scrim-opacity);
                display: none;
                inset: 0;
                pointer-events: none;
                position: fixed;
                z-index: 1;
            }
        }

        @layer hitman-dialog-container {

            :host([open="true"]) dialog,
            dialog[open] {
                display: flex;
            }
            .container {
                border-radius: inherit;
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                overflow: hidden;
                position: relative;
                transform-origin: top;
                position: relative;
                transform-origin: top;
                padding: 8px;
            }
        }

        @layer hitman-dialog-header {
            .headline-container {
                background-color: var(--_container-color);
            }
            .headline {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0;
                padding: 0;
            }
            slot[name='headline']::slotted(*) {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                align-self: stretch;
                gap: 8px;
                padding: 24px 24px 0;
            }
        }

        @layer hitman-dialog-scroll {
            .scroll-container {
                background-color: var(--_container-color);
                display: flex;
                flex: 1;
                flex-direction: column;
                overflow: hidden;
                z-index: 1;
            }
            .content {
                overflow: auto;

            }
            /* width */
            ::-webkit-scrollbar {
                width: 4px;
                height: 6px;
            }

            /* Track */
            ::-webkit-scrollbar-track {}

            ::-webkit-scrollbar-track:hover {
                background: transparent;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
                background: red;
            }

            ::-webkit-scrollbar-thumb:hover,
            ::-webkit-scrollbar-thumb:active {
                background: red;
            }
            slot[name='content']::slotted(*) {
                box-sizing: border-box;
                padding: 24px 24px;
                color: var(--_content-color);
            }
        }

        @layer hitman-dialog-action {
            slot[name='actions']::slotted(*) {
                display: flex;
                flex-direction: column;
                gap: 8px;
                margin-top: 8px;
                z-index: 0;
            }
        }



    `];X=ue([st("hitman-alert-dialog")],X);
