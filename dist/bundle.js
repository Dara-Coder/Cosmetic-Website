/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t=new Map,e={set(e,i,n){t.has(e)||t.set(e,new Map);const s=t.get(e);s.has(i)||0===s.size?s.set(i,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(e,i)=>t.has(e)&&t.get(e).get(i)||null,remove(e,i){if(!t.has(e))return;const n=t.get(e);n.delete(i),0===n.size&&t.delete(e)}},i="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),s=t=>{t.dispatchEvent(new Event(i))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(n(t)):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,m=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},g=(t,e=[],i=t)=>"function"==typeof t?t(...e):i,_=(t,e,n=!0)=>{if(!n)return void g(t);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let r=!1;const a=({target:n})=>{n===e&&(r=!0,e.removeEventListener(i,a),g(t))};e.addEventListener(i,a),setTimeout((()=>{r||s(e)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=I(t);return C.has(o)||(o=t),[n,s,o]}function S(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return P(s,{delegateTarget:r}),n.oneOff&&N.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return P(n,{delegateTarget:t}),i.oneOff&&N.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function D(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function $(t,e,i,n){const s=e[i]||{};for(const[o,r]of Object.entries(s))o.includes(n)&&D(t,e,i,r.callable,r.delegationSelector)}function I(t){return t=t.replace(y,""),T[t]||t}const N={on(t,e,i,n){S(t,e,i,n,!1)},one(t,e,i,n){S(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))$(t,l,i,e.slice(1));for(const[i,n]of Object.entries(c)){const s=i.replace(w,"");a&&!e.includes(s)||D(t,l,r,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;D(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==I(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());const l=P(new Event(e,{bubbles:o,cancelable:!0}),i);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function P(t,e={}){for(const[i,n]of Object.entries(e))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}function M(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function j(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const F={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${j(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${j(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=M(t.dataset[n])}return e},getDataAttribute:(t,e)=>M(t.getAttribute(`data-bs-${j(e)}`))};class H{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?F.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?F.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[n,s]of Object.entries(e)){const e=t[n],r=o(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)}var i}}class W extends H{constructor(t,i){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(i),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return e.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const B=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?n(i.trim()):null}return e},z={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))},getSelectorFromElement(t){const e=B(t);return e&&z.findOne(e)?e:null},getElementFromSelector(t){const e=B(t);return e?z.findOne(e):null},getMultipleElementsFromSelector(t){const e=B(t);return e?z.find(e):[]}},R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;N.on(document,i,`[data-bs-dismiss="${n}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const s=z.getElementFromSelector(this)||this.closest(`.${n}`);t.getOrCreateInstance(s)[e]()}))},q=".bs.alert",V=`close${q}`,K=`closed${q}`;class Q extends W{static get NAME(){return"alert"}close(){if(N.trigger(this._element,V).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),N.trigger(this._element,K),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(Q,"close"),m(Q);const X='[data-bs-toggle="button"]';class Y extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}N.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);Y.getOrCreateInstance(e).toggle()})),m(Y);const U=".bs.swipe",G=`touchstart${U}`,J=`touchmove${U}`,Z=`touchend${U}`,tt=`pointerdown${U}`,et=`pointerup${U}`,it={endCallback:null,leftCallback:null,rightCallback:null},nt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class st extends H{constructor(t,e){super(),this._element=t,t&&st.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return it}static get DefaultType(){return nt}static get NAME(){return"swipe"}dispose(){N.off(this._element,U)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),g(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&g(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,tt,(t=>this._start(t))),N.on(this._element,et,(t=>this._end(t))),this._element.classList.add("pointer-event")):(N.on(this._element,G,(t=>this._start(t))),N.on(this._element,J,(t=>this._move(t))),N.on(this._element,Z,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ot=".bs.carousel",rt=".data-api",at="next",lt="prev",ct="left",ht="right",dt=`slide${ot}`,ut=`slid${ot}`,ft=`keydown${ot}`,pt=`mouseenter${ot}`,mt=`mouseleave${ot}`,gt=`dragstart${ot}`,_t=`load${ot}${rt}`,bt=`click${ot}${rt}`,vt="carousel",yt="active",wt=".active",At=".carousel-item",Et=wt+At,Tt={ArrowLeft:ht,ArrowRight:ct},Ct={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ot={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class xt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===vt&&this.cycle()}static get Default(){return Ct}static get DefaultType(){return Ot}static get NAME(){return"carousel"}next(){this._slide(at)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(lt)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?N.one(this._element,ut,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void N.one(this._element,ut,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?at:lt;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&N.on(this._element,ft,(t=>this._keydown(t))),"hover"===this._config.pause&&(N.on(this._element,pt,(()=>this.pause())),N.on(this._element,mt,(()=>this._maybeEnableCycle()))),this._config.touch&&st.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of z.find(".carousel-item img",this._element))N.on(t,gt,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(ct)),rightCallback:()=>this._slide(this._directionToOrder(ht)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new st(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Tt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=z.findOne(wt,this._indicatorsElement);e.classList.remove(yt),e.removeAttribute("aria-current");const i=z.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(yt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===at,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>N.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(dt).defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(yt),i.classList.remove(yt,c,l),this._isSliding=!1,r(ut)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return z.findOne(Et,this._element)}_getItems(){return z.find(At,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===ct?lt:at:t===ct?at:lt}_orderToDirection(t){return p()?t===lt?ct:ht:t===lt?ht:ct}static jQueryInterface(t){return this.each((function(){const e=xt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}N.on(document,bt,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=z.getElementFromSelector(this);if(!e||!e.classList.contains(vt))return;t.preventDefault();const i=xt.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(i.to(n),void i._maybeEnableCycle()):"next"===F.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),N.on(window,_t,(()=>{const t=z.find('[data-bs-ride="carousel"]');for(const e of t)xt.getOrCreateInstance(e)})),m(xt);const kt=".bs.collapse",Lt=`show${kt}`,St=`shown${kt}`,Dt=`hide${kt}`,$t=`hidden${kt}`,It=`click${kt}.data-api`,Nt="show",Pt="collapse",Mt="collapsing",jt=`:scope .${Pt} .${Pt}`,Ft='[data-bs-toggle="collapse"]',Ht={parent:null,toggle:!0},Wt={parent:"(null|element)",toggle:"boolean"};class Bt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=z.find(Ft);for(const t of i){const e=z.getSelectorFromElement(t),i=z.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ht}static get DefaultType(){return Wt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Bt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(N.trigger(this._element,Lt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Pt),this._element.classList.add(Mt),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Mt),this._element.classList.add(Pt,Nt),this._element.style[e]="",N.trigger(this._element,St)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(N.trigger(this._element,Dt).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(Mt),this._element.classList.remove(Pt,Nt);for(const t of this._triggerArray){const e=z.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Mt),this._element.classList.add(Pt),N.trigger(this._element,$t)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(Nt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Ft);for(const e of t){const t=z.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=z.find(jt,this._config.parent);return z.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Bt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}N.on(document,It,Ft,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of z.getMultipleElementsFromSelector(this))Bt.getOrCreateInstance(t,{toggle:!1}).toggle()})),m(Bt);var zt="top",Rt="bottom",qt="right",Vt="left",Kt="auto",Qt=[zt,Rt,qt,Vt],Xt="start",Yt="end",Ut="clippingParents",Gt="viewport",Jt="popper",Zt="reference",te=Qt.reduce((function(t,e){return t.concat([e+"-"+Xt,e+"-"+Yt])}),[]),ee=[].concat(Qt,[Kt]).reduce((function(t,e){return t.concat([e,e+"-"+Xt,e+"-"+Yt])}),[]),ie="beforeRead",ne="read",se="afterRead",oe="beforeMain",re="main",ae="afterMain",le="beforeWrite",ce="write",he="afterWrite",de=[ie,ne,se,oe,re,ae,le,ce,he];function ue(t){return t?(t.nodeName||"").toLowerCase():null}function fe(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function pe(t){return t instanceof fe(t).Element||t instanceof Element}function me(t){return t instanceof fe(t).HTMLElement||t instanceof HTMLElement}function ge(t){return"undefined"!=typeof ShadowRoot&&(t instanceof fe(t).ShadowRoot||t instanceof ShadowRoot)}const _e={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];me(s)&&ue(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});me(n)&&ue(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function be(t){return t.split("-")[0]}var ve=Math.max,ye=Math.min,we=Math.round;function Ae(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Ee(){return!/^((?!chrome|android).)*safari/i.test(Ae())}function Te(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&me(t)&&(s=t.offsetWidth>0&&we(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&we(n.height)/t.offsetHeight||1);var r=(pe(t)?fe(t):window).visualViewport,a=!Ee()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function Ce(t){var e=Te(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Oe(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&ge(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function xe(t){return fe(t).getComputedStyle(t)}function ke(t){return["table","td","th"].indexOf(ue(t))>=0}function Le(t){return((pe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Se(t){return"html"===ue(t)?t:t.assignedSlot||t.parentNode||(ge(t)?t.host:null)||Le(t)}function De(t){return me(t)&&"fixed"!==xe(t).position?t.offsetParent:null}function $e(t){for(var e=fe(t),i=De(t);i&&ke(i)&&"static"===xe(i).position;)i=De(i);return i&&("html"===ue(i)||"body"===ue(i)&&"static"===xe(i).position)?e:i||function(t){var e=/firefox/i.test(Ae());if(/Trident/i.test(Ae())&&me(t)&&"fixed"===xe(t).position)return null;var i=Se(t);for(ge(i)&&(i=i.host);me(i)&&["html","body"].indexOf(ue(i))<0;){var n=xe(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Ie(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ne(t,e,i){return ve(t,ye(e,i))}function Pe(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Me(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const je={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=be(i.placement),l=Ie(a),c=[Vt,qt].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return Pe("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Me(t,Qt))}(s.padding,i),d=Ce(o),u="y"===l?zt:Vt,f="y"===l?Rt:qt,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=$e(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=Ne(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Oe(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Fe(t){return t.split("-")[1]}var He={top:"auto",right:"auto",bottom:"auto",left:"auto"};function We(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,m=void 0===p?0:p,g="function"==typeof h?h({x:f,y:m}):{x:f,y:m};f=g.x,m=g.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=Vt,y=zt,w=window;if(c){var A=$e(i),E="clientHeight",T="clientWidth";A===fe(i)&&"static"!==xe(A=Le(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===zt||(s===Vt||s===qt)&&o===Yt)&&(y=Rt,m-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,m*=l?1:-1),s!==Vt&&(s!==zt&&s!==Rt||o!==Yt)||(v=qt,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&He),x=!0===h?function(t,e){var i=t.x,n=t.y,s=e.devicePixelRatio||1;return{x:we(i*s)/s||0,y:we(n*s)/s||0}}({x:f,y:m},fe(i)):{x:f,y:m};return f=x.x,m=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?m+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const Be={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:be(e.placement),variation:Fe(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,We(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,We(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var ze={passive:!0};const Re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=fe(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,ze)})),a&&l.addEventListener("resize",i.update,ze),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,ze)})),a&&l.removeEventListener("resize",i.update,ze)}},data:{}};var qe={left:"right",right:"left",bottom:"top",top:"bottom"};function Ve(t){return t.replace(/left|right|bottom|top/g,(function(t){return qe[t]}))}var Ke={start:"end",end:"start"};function Qe(t){return t.replace(/start|end/g,(function(t){return Ke[t]}))}function Xe(t){var e=fe(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ye(t){return Te(Le(t)).left+Xe(t).scrollLeft}function Ue(t){var e=xe(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ge(t){return["html","body","#document"].indexOf(ue(t))>=0?t.ownerDocument.body:me(t)&&Ue(t)?t:Ge(Se(t))}function Je(t,e){var i;void 0===e&&(e=[]);var n=Ge(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=fe(n),r=s?[o].concat(o.visualViewport||[],Ue(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Je(Se(r)))}function Ze(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ti(t,e,i){return e===Gt?Ze(function(t,e){var i=fe(t),n=Le(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Ee();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Ye(t),y:l}}(t,i)):pe(e)?function(t,e){var i=Te(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):Ze(function(t){var e,i=Le(t),n=Xe(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=ve(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=ve(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ye(t),l=-n.scrollTop;return"rtl"===xe(s||i).direction&&(a+=ve(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Le(t)))}function ei(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?be(s):null,r=s?Fe(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case zt:e={x:a,y:i.y-n.height};break;case Rt:e={x:a,y:i.y+i.height};break;case qt:e={x:i.x+i.width,y:l};break;case Vt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Ie(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case Xt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case Yt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function ii(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?Ut:a,c=i.rootBoundary,h=void 0===c?Gt:c,d=i.elementContext,u=void 0===d?Jt:d,f=i.altBoundary,p=void 0!==f&&f,m=i.padding,g=void 0===m?0:m,_=Pe("number"!=typeof g?g:Me(g,Qt)),b=u===Jt?Zt:Jt,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=Je(Se(t)),i=["absolute","fixed"].indexOf(xe(t).position)>=0&&me(t)?$e(t):t;return pe(i)?e.filter((function(t){return pe(t)&&Oe(t,i)&&"body"!==ue(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=ti(t,i,n);return e.top=ve(s.top,e.top),e.right=ye(s.right,e.right),e.bottom=ye(s.bottom,e.bottom),e.left=ve(s.left,e.left),e}),ti(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(pe(y)?y:y.contextElement||Le(t.elements.popper),l,h,r),A=Te(t.elements.reference),E=ei({reference:A,element:v,strategy:"absolute",placement:s}),T=Ze(Object.assign({},v,E)),C=u===Jt?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===Jt&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[qt,Rt].indexOf(t)>=0?1:-1,i=[zt,Rt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function ni(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?ee:l,h=Fe(n),d=h?a?te:te.filter((function(t){return Fe(t)===h})):Qt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=ii(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[be(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const si={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=be(g),b=l||(_!==g&&p?function(t){if(be(t)===Kt)return[];var e=Ve(t);return[Qe(t),e,Qe(e)]}(g):[Ve(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(be(i)===Kt?ni(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=be(O),k=Fe(O)===Xt,L=[zt,Rt].indexOf(x)>=0,S=L?"width":"height",D=ii(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),$=L?k?qt:Vt:k?Rt:zt;y[S]>w[S]&&($=Ve($));var I=Ve($),N=[];if(o&&N.push(D[x]<=0),a&&N.push(D[$]<=0,D[I]<=0),N.every((function(t){return t}))){T=O,E=!1;break}A.set(O,N)}if(E)for(var P=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==P(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function oi(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function ri(t){return[zt,qt,Rt,Vt].some((function(e){return t[e]>=0}))}const ai={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=ii(e,{elementContext:"reference"}),a=ii(e,{altBoundary:!0}),l=oi(r,n),c=oi(a,s,o),h=ri(l),d=ri(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},li={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=ee.reduce((function(t,i){return t[i]=function(t,e,i){var n=be(t),s=[Vt,zt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[Vt,qt].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},ci={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=ei({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},hi={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=ii(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=be(e.placement),b=Fe(e.placement),v=!b,y=Ie(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,S="y"===y?zt:Vt,D="y"===y?Rt:qt,$="y"===y?"height":"width",I=A[y],N=I+g[S],P=I-g[D],M=f?-T[$]/2:0,j=b===Xt?E[$]:T[$],F=b===Xt?-T[$]:-E[$],H=e.elements.arrow,W=f&&H?Ce(H):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=B[S],R=B[D],q=Ne(0,E[$],W[$]),V=v?E[$]/2-M-q-z-O.mainAxis:j-q-z-O.mainAxis,K=v?-E[$]/2+M+q+R+O.mainAxis:F+q+R+O.mainAxis,Q=e.elements.arrow&&$e(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=I+K-Y,G=Ne(f?ye(N,I+V-Y-X):N,I,f?ve(P,U):P);A[y]=G,k[y]=G-I}if(a){var J,Z="x"===y?zt:Vt,tt="x"===y?Rt:qt,et=A[w],it="y"===w?"height":"width",nt=et+g[Z],st=et-g[tt],ot=-1!==[zt,Vt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=Ne(t,e,i);return n>i?i:n}(at,et,lt):Ne(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function di(t,e,i){void 0===i&&(i=!1);var n,s,o=me(e),r=me(e)&&function(t){var e=t.getBoundingClientRect(),i=we(e.width)/t.offsetWidth||1,n=we(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=Le(e),l=Te(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==ue(e)||Ue(a))&&(c=(n=e)!==fe(n)&&me(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:Xe(n)),me(e)?((h=Te(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Ye(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function ui(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var fi={placement:"bottom",modifiers:[],strategy:"absolute"};function pi(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function mi(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?fi:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},fi,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:pe(t)?Je(t):t.contextElement?Je(t.contextElement):[],popper:Je(e)};var r,c,u=function(t){var e=ui(t);return de.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(pi(e,i)){a.rects={reference:di(e,$e(i),"fixed"===a.options.strategy),popper:Ce(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!pi(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var gi=mi(),_i=mi({defaultModifiers:[Re,ci,Be,_e]}),bi=mi({defaultModifiers:[Re,ci,Be,_e,li,si,hi,je,ai]});const vi=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ae,afterRead:se,afterWrite:he,applyStyles:_e,arrow:je,auto:Kt,basePlacements:Qt,beforeMain:oe,beforeRead:ie,beforeWrite:le,bottom:Rt,clippingParents:Ut,computeStyles:Be,createPopper:bi,createPopperBase:gi,createPopperLite:_i,detectOverflow:ii,end:Yt,eventListeners:Re,flip:si,hide:ai,left:Vt,main:re,modifierPhases:de,offset:li,placements:ee,popper:Jt,popperGenerator:mi,popperOffsets:ci,preventOverflow:hi,read:ne,reference:Zt,right:qt,start:Xt,top:zt,variationPlacements:te,viewport:Gt,write:ce},Symbol.toStringTag,{value:"Module"})),yi="dropdown",wi=".bs.dropdown",Ai=".data-api",Ei="ArrowUp",Ti="ArrowDown",Ci=`hide${wi}`,Oi=`hidden${wi}`,xi=`show${wi}`,ki=`shown${wi}`,Li=`click${wi}${Ai}`,Si=`keydown${wi}${Ai}`,Di=`keyup${wi}${Ai}`,$i="show",Ii='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ni=`${Ii}.${$i}`,Pi=".dropdown-menu",Mi=p()?"top-end":"top-start",ji=p()?"top-start":"top-end",Fi=p()?"bottom-end":"bottom-start",Hi=p()?"bottom-start":"bottom-end",Wi=p()?"left-start":"right-start",Bi=p()?"right-start":"left-start",zi={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ri={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class qi extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,Pi)[0]||z.prev(this._element,Pi)[0]||z.findOne(Pi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return zi}static get DefaultType(){return Ri}static get NAME(){return yi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!N.trigger(this._element,xi,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add($i),this._element.classList.add($i),N.trigger(this._element,ki,t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!N.trigger(this._element,Ci,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove($i),this._element.classList.remove($i),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,Oi,t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===vi)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=bi(t,this._menu,e)}_isShown(){return this._menu.classList.contains($i)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return Wi;if(t.classList.contains("dropstart"))return Bi;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ji:Mi:e?Hi:Fi}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(F.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...g(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Ti,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=qi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=z.find(Ni);for(const i of e){const e=qi.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ei,Ti].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Ii)?this:z.prev(this,Ii)[0]||z.next(this,Ii)[0]||z.findOne(Ii,t.delegateTarget.parentNode),o=qi.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}N.on(document,Si,Ii,qi.dataApiKeydownHandler),N.on(document,Si,Pi,qi.dataApiKeydownHandler),N.on(document,Li,qi.clearMenus),N.on(document,Di,qi.clearMenus),N.on(document,Li,Ii,(function(t){t.preventDefault(),qi.getOrCreateInstance(this).toggle()})),m(qi);const Vi="backdrop",Ki="show",Qi=`mousedown.bs.${Vi}`,Xi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Yi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ui extends H{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Xi}static get DefaultType(){return Yi}static get NAME(){return Vi}show(t){if(!this._config.isVisible)return void g(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(Ki),this._emulateAnimation((()=>{g(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(Ki),this._emulateAnimation((()=>{this.dispose(),g(t)}))):g(t)}dispose(){this._isAppended&&(N.off(this._element,Qi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),N.on(t,Qi,(()=>{g(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const Gi=".bs.focustrap",Ji=`focusin${Gi}`,Zi=`keydown.tab${Gi}`,tn="backward",en={autofocus:!0,trapElement:null},nn={autofocus:"boolean",trapElement:"element"};class sn extends H{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return en}static get DefaultType(){return nn}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,Gi),N.on(document,Ji,(t=>this._handleFocusin(t))),N.on(document,Zi,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,Gi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=z.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===tn?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?tn:"forward")}}const on=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",rn=".sticky-top",an="padding-right",ln="margin-right";class cn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,an,(e=>e+t)),this._setElementAttributes(on,an,(e=>e+t)),this._setElementAttributes(rn,ln,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,an),this._resetElementAttributes(on,an),this._resetElementAttributes(rn,ln)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&F.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=F.getDataAttribute(t,e);null!==i?(F.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of z.find(t,this._element))e(i)}}const hn=".bs.modal",dn=`hide${hn}`,un=`hidePrevented${hn}`,fn=`hidden${hn}`,pn=`show${hn}`,mn=`shown${hn}`,gn=`resize${hn}`,_n=`click.dismiss${hn}`,bn=`mousedown.dismiss${hn}`,vn=`keydown.dismiss${hn}`,yn=`click${hn}.data-api`,wn="modal-open",An="show",En="modal-static",Tn={backdrop:!0,focus:!0,keyboard:!0},Cn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class On extends W{constructor(t,e){super(t,e),this._dialog=z.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new cn,this._addEventListeners()}static get Default(){return Tn}static get DefaultType(){return Cn}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||N.trigger(this._element,pn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wn),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(N.trigger(this._element,dn).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(An),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){N.off(window,hn),N.off(this._dialog,hn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ui({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new sn({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=z.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(An),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,mn,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,vn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),N.on(window,gn,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),N.on(this._element,bn,(t=>{N.one(this._element,_n,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(wn),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,fn)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,un).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(En)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(En),this._queueCallback((()=>{this._element.classList.remove(En),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=On.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}N.on(document,yn,'[data-bs-toggle="modal"]',(function(t){const e=z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),N.one(e,pn,(t=>{t.defaultPrevented||N.one(e,fn,(()=>{a(this)&&this.focus()}))}));const i=z.findOne(".modal.show");i&&On.getInstance(i).hide(),On.getOrCreateInstance(e).toggle(this)})),R(On),m(On);const xn=".bs.offcanvas",kn=".data-api",Ln=`load${xn}${kn}`,Sn="show",Dn="showing",$n="hiding",In=".offcanvas.show",Nn=`show${xn}`,Pn=`shown${xn}`,Mn=`hide${xn}`,jn=`hidePrevented${xn}`,Fn=`hidden${xn}`,Hn=`resize${xn}`,Wn=`click${xn}${kn}`,Bn=`keydown.dismiss${xn}`,zn={backdrop:!0,keyboard:!0,scroll:!1},Rn={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class qn extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return zn}static get DefaultType(){return Rn}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||N.trigger(this._element,Nn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new cn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Dn),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Sn),this._element.classList.remove(Dn),N.trigger(this._element,Pn,{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(N.trigger(this._element,Mn).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add($n),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Sn,$n),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new cn).reset(),N.trigger(this._element,Fn)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Ui({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():N.trigger(this._element,jn)}:null})}_initializeFocusTrap(){return new sn({trapElement:this._element})}_addEventListeners(){N.on(this._element,Bn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():N.trigger(this._element,jn))}))}static jQueryInterface(t){return this.each((function(){const e=qn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}N.on(document,Wn,'[data-bs-toggle="offcanvas"]',(function(t){const e=z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;N.one(e,Fn,(()=>{a(this)&&this.focus()}));const i=z.findOne(In);i&&i!==e&&qn.getInstance(i).hide(),qn.getOrCreateInstance(e).toggle(this)})),N.on(window,Ln,(()=>{for(const t of z.find(In))qn.getOrCreateInstance(t).show()})),N.on(window,Hn,(()=>{for(const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&qn.getOrCreateInstance(t).hide()})),R(qn),m(qn);const Vn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Kn=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Qn=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Xn=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Kn.has(i)||Boolean(Qn.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Yn={allowList:Vn,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Un={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Gn={entry:"(string|element|function|null)",selector:"(string|element)"};class Jn extends H{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Yn}static get DefaultType(){return Un}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Gn)}_setContent(t,e,i){const n=z.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Xn(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return g(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Zn=new Set(["sanitize","allowList","sanitizeFn"]),ts="fade",es="show",is=".modal",ns="hide.bs.modal",ss="hover",os="focus",rs={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},as={allowList:Vn,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ls={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class cs extends W{constructor(t,e){if(void 0===vi)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return as}static get DefaultType(){return ls}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(is),ns,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=N.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),N.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(es),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._queueCallback((()=>{N.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!N.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(es),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[os]=!1,this._activeTrigger[ss]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(ts,es),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(ts),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Jn({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ts)}_isShown(){return this.tip&&this.tip.classList.contains(es)}_createPopper(t){const e=g(this._config.placement,[this,t,this._element]),i=rs[e.toUpperCase()];return bi(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return g(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...g(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)N.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===ss?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===ss?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");N.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?os:ss]=!0,e._enter()})),N.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?os:ss]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(is),ns,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=F.getDataAttributes(this._element);for(const t of Object.keys(e))Zn.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=cs.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(cs);const hs={...cs.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},ds={...cs.DefaultType,content:"(null|string|element|function)"};class us extends cs{static get Default(){return hs}static get DefaultType(){return ds}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=us.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(us);const fs=".bs.scrollspy",ps=`activate${fs}`,ms=`click${fs}`,gs=`load${fs}.data-api`,_s="active",bs="[href]",vs=".nav-link",ys=`${vs}, .nav-item > ${vs}, .list-group-item`,ws={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},As={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Es extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ws}static get DefaultType(){return As}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,ms),N.on(this._config.target,ms,bs,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=z.find(bs,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=z.findOne(decodeURI(e.hash),this._element);a(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(_s),this._activateParents(t),N.trigger(this._element,ps,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))z.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(_s);else for(const e of z.parents(t,".nav, .list-group"))for(const t of z.prev(e,ys))t.classList.add(_s)}_clearActiveClass(t){t.classList.remove(_s);const e=z.find(`${bs}.${_s}`,t);for(const t of e)t.classList.remove(_s)}static jQueryInterface(t){return this.each((function(){const e=Es.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(window,gs,(()=>{for(const t of z.find('[data-bs-spy="scroll"]'))Es.getOrCreateInstance(t)})),m(Es);const Ts=".bs.tab",Cs=`hide${Ts}`,Os=`hidden${Ts}`,xs=`show${Ts}`,ks=`shown${Ts}`,Ls=`click${Ts}`,Ss=`keydown${Ts}`,Ds=`load${Ts}`,$s="ArrowLeft",Is="ArrowRight",Ns="ArrowUp",Ps="ArrowDown",Ms="Home",js="End",Fs="active",Hs="fade",Ws="show",Bs=".dropdown-toggle",zs=`:not(${Bs})`,Rs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',qs=`.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,Vs=`.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;class Ks extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,Ss,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?N.trigger(e,Cs,{relatedTarget:t}):null;N.trigger(t,xs,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(Fs),this._activate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),N.trigger(t,ks,{relatedTarget:e})):t.classList.add(Ws)}),t,t.classList.contains(Hs)))}_deactivate(t,e){t&&(t.classList.remove(Fs),t.blur(),this._deactivate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),N.trigger(t,Os,{relatedTarget:e})):t.classList.remove(Ws)}),t,t.classList.contains(Hs)))}_keydown(t){if(![$s,Is,Ns,Ps,Ms,js].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter((t=>!l(t)));let i;if([Ms,js].includes(t.key))i=e[t.key===Ms?0:e.length-1];else{const n=[Is,Ps].includes(t.key);i=b(e,t.target,n,!0)}i&&(i.focus({preventScroll:!0}),Ks.getOrCreateInstance(i).show())}_getChildren(){return z.find(qs,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=z.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=z.findOne(t,i);s&&s.classList.toggle(n,e)};n(Bs,Fs),n(".dropdown-menu",Ws),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Fs)}_getInnerElement(t){return t.matches(qs)?t:z.findOne(qs,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Ks.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(document,Ls,Rs,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||Ks.getOrCreateInstance(this).show()})),N.on(window,Ds,(()=>{for(const t of z.find(Vs))Ks.getOrCreateInstance(t)})),m(Ks);const Qs=".bs.toast",Xs=`mouseover${Qs}`,Ys=`mouseout${Qs}`,Us=`focusin${Qs}`,Gs=`focusout${Qs}`,Js=`hide${Qs}`,Zs=`hidden${Qs}`,to=`show${Qs}`,eo=`shown${Qs}`,io="hide",no="show",so="showing",oo={animation:"boolean",autohide:"boolean",delay:"number"},ro={animation:!0,autohide:!0,delay:5e3};class ao extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ro}static get DefaultType(){return oo}static get NAME(){return"toast"}show(){N.trigger(this._element,to).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(io),d(this._element),this._element.classList.add(no,so),this._queueCallback((()=>{this._element.classList.remove(so),N.trigger(this._element,eo),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(N.trigger(this._element,Js).defaultPrevented||(this._element.classList.add(so),this._queueCallback((()=>{this._element.classList.add(io),this._element.classList.remove(so,no),N.trigger(this._element,Zs)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(no),super.dispose()}isShown(){return this._element.classList.contains(no)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,Xs,(t=>this._onInteraction(t,!0))),N.on(this._element,Ys,(t=>this._onInteraction(t,!1))),N.on(this._element,Us,(t=>this._onInteraction(t,!0))),N.on(this._element,Gs,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ao.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(ao),m(ao),{Alert:Q,Button:Y,Carousel:xt,Collapse:Bt,Dropdown:qi,Modal:On,Offcanvas:qn,Popover:us,ScrollSpy:Es,Tab:Ks,Toast:ao,Tooltip:cs}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
class Api{
    constructor()
    {}

    get = (endpoint) => {
        const response = fetch(endpoint,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json());
        return response;
    }

    post = (endpoint,param) => {
        const response = fetch(endpoint,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
        .then(response => response.json());
        return response;
    }
}

const api = new Api();
window.addEventListener('DOMContentLoaded',() => {
    fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(d => {
        fetch(`https://api.iplocation.net/?ip=${d.ip}`)
        .then(res => res.json())
        .then(d => {
            fetch(`${base_url}/api/front-end/save`,{
                method: 'POST',
                headers: {
                    Accept: 'applications/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(d)
            });
        });
    });
});
'use strict';

const base_url = 'http://localhost:8000';

(function()
{
    const self = document.getElementById('_menu_container');
    let html = '',
    moreMenu = '';

    api.get(`${base_url}/api/front-end/category`).then(res => {
        if(res.status_code === 200)
        {
            const d = res.data || [];
            (d || []).forEach((mn,i) => {
                if(i<7)
                {
                    html += `<li class="product-click fs-5" data-category="${mn.category_key || 'home'}">${mn.name || ''}</li>`;
                }
                else
                {
                    moreMenu += `<li class="product-click fs-5" data-category="${mn.category_key || 'home'}">${mn.name || ''}</li>`;
                }
            });
    
            if(moreMenu)
            {
                html += `<li id="_menu_ct_box1" class="position-relative">
                    <span>More</span>
                    <div class="menus-box-container" style="display:none">
                        <ul>${moreMenu}</ul>
                    </div>
                </li>`;
            }
            
            if(self)
            {
                self.innerHTML = `<ul>${html}</ul>`;
                if(moreMenu) displayMenuBox(self);
                setClickEvent(self);
            }
        }
    });
})();

const displayMenuBox = (div) => {
    const moreBtn = div.querySelector('#_menu_ct_box1'),
    menuBox = moreBtn.querySelector('.menus-box-container');
    moreBtn.onclick = function(e)
    {
        e.preventDefault();
        menuBox.style.display = 'block';
    }

    document.onmouseup = function(e)
    {
        if(!menuBox.contains(e.target))
        {
            menuBox.style.display = 'none';
        }
    }
}

const setClickEvent = (div) => {
    const menuList = div.querySelectorAll('.product-click');
    let previousElement = null,
    routes = [];

    menuList.forEach(menu => {
        menu.addEventListener('click',function(e)
        {
            e.preventDefault();
            if(previousElement)
            {
                previousElement.classList.remove('active');
            }
            this.classList.add('active');
            previousElement = this;
            const category = this.dataset.category;
            
            api.post(`${base_url}/api/front-end/brand`,{
                category: category
            }).then(res => {
                if(res.status_code === 200)
                {
                    const data = res.data || [];
                    window.location.hash = category.replace(/\_/g,'-');
                    renderBrandList(data);
                }
            });
        });
        routes.push({
            path: menu.dataset.category.replace(/\_/g,'-'),
            callback: () => {
                menu.dispatchEvent(new Event('click',{
                    bubbles: true,
                    cancelable: false
                }));
            }
        });
    });
    const router = new Router(routes);
    window.addEventListener('hashchange',() => {
        const pathName = window.location.hash.slice(1);
        router.loadRoute(pathName);
    });
}
'use strict';
const renderBrandList = (d=null) => {
    d = d || [];
    const self = document.getElementById('_main_container');
    let html = '',
    i = 1;

    (d || []).forEach((brand, index) => {
        i = (index) % 5 === 0 ? 1 : i;
        html += `<div class="card-product product-details overflow-hidden animate__animated animate__backInRight animate__delay-${i}s" data-brand="${brand.brand_key || 'dior'}" data-id="${brand.id}">
            <div class="w-100">
                <img class="product-show" src="${brand.image_url || ''}" alt="brand-image"/>
            </div>
            <div class="w-100 px-2 mt-1">
                <p class="text-dark limit-line fs-5 fw-semibold">${brand.name || ''}</p>
            </div>
        </div>`;
        i++;
    });
    html = `<div class="d-flex flex-wrap gap-2 justify-content-around mb-3 animate__animated animate__fadeInUp">${html}</div>`;

    self.innerHTML = html;
    const previousDiv = self.previousElementSibling;
    previousDiv.style.display = 'block';
    setClickEventProductList(self);
}

const setClickEventProductList = (div) => {
    const productDetailsList = div.querySelectorAll('.product-details');
    productDetailsList.forEach(product => {
        product.onclick = function(e)
        {
            e.preventDefault();
            const brand_id = this.dataset.id;
            api.post(`${base_url}/api/front-end/product-list`,{
                brand_id: brand_id
            }).then(res => {
                if(res.status_code === 200)
                {
                    const data = res.data || [];
                    renderProductList(div,data);
                }
            });
        };
    });
}

const renderProductList = (div,d=null) => {
    d = d || [];
    const previousDiv = div.previousElementSibling;
    previousDiv.style.display = 'block';
    let html = '',
    i = 1;

    (d || []).forEach((product, index) => {
        i = (index) % 5 === 0 ? 1 : i;
        html += `<div class="card-product product-view-details overflow-hidden animate__animated animate__backInRight animate__delay-${i}s" data-id="${product.id || 1}">
            <div class="w-100">
                <img class="product-show" src="${product.image_url || ''}" alt="product-image"/>
            </div>
            <div class="w-100 px-2 mt-1">
                <p class="text-dark limit-line p-0 m-0">
                    <span>Code</span>
                    <span class="px-1">:</span>
                    <span class="fw-semibold">${product.code || ''}</span>
                </p>
            </div>
            <div class="w-100 px-2 mt-1">
                <p class="text-dark limit-line">
                    <span>Product</span>
                    <span class="px-1">:</span>
                    <span class="fw-semibold">${product.name || ''}</span>
                </p>
            </div>
            <div class="w-100 px-2 mt-2">
                <p class="text-end text-dark fs-5">Price: ${product.price || ''}$</p>
            </div>
        </div>`;
        i++;
    });
    div.innerHTML = `<div class="d-flex flex-wrap gap-2 justify-content-around">${html}</div>`;
    setClickEventProductListView(div);
}

const setClickEventProductListView = (div) => {
    const productViewList = div.querySelectorAll('.product-view-details');
    productViewList.forEach(productView => {
        productView.onclick = function(e)
        {
            e.preventDefault();
            const product_id = this.dataset.id;
            api.post(`${base_url}/api/front-end/product-details`,{
                product_id: product_id
            }).then(res => {
                if(res.status_code === 200)
                {
                    const data = res.data || {};
                    viewProductDetail(div,data);
                }
            });
        }
    });
}

const viewProductDetail = (div,data=null) => {
    const d = data ? data.data : [];
    const previousDiv = div.previousElementSibling;
    previousDiv.style.display = 'none';

    const html = `<div class="d-flex justify-content-center animate__animated animate__fadeInUp">
        <div class="product-details-view">
            <div class="product-slider w-50">
                <img class="product-image w-100 h-100" src="${d.image_list ? d.image_list[0].image_url : ''}" alt="product-slider"/>
                <div class="d-flex justify-content-between position-absolute w-100 h-100 z-1 top-0">
                    <div class="d-flex align-items-center h-100 ps-2">
                        <div class="btn-slider-decrement d-flex align-items-center justify-content-center p-3 rounded-circle border border-1" role="button">
                            <i class="fa-solid fa-chevron-left fs-5 fw-bold text-white"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center h-100 pe-2">
                        <div class="btn-slider-increment d-flex align-items-center justify-content-center p-3 rounded-circle border border-1" role="button">
                            <i class="fa-solid fa-chevron-right fs-5 fw-bold text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-50">
                <div class="d-flex justify-content-end">
                    <p class="fw-semibold fs-5 m-0 p-0 text-nowrap">Code : ${d.code || ''}</p>
                </div>
                <p class="fw-bold fs-5">${d.name || ''}</p>
                <p class="ps-3 mt-3">${d.description || ''}</p>
                <p class="fw-bold mt-3">Price: ${d.price || 0}$</p>
                <div class="d-flex align-items-center gap-2 mt-3 flex-wrap">
                    <div class="d-flex gap-1 align-items-center">
                        <button class="btn btn-sm btn-outline-danger btn-decrement">
                            <i class="fa-solid fa-minus fs-5"></i>
                        </button>
                        <p class="show-product-amount">1</p>
                        <button class="btn btn-sm btn-outline-success btn-increment">
                            <i class="fa-solid fa-plus fs-5"></i>
                        </button>
                    </div>
                    <div class="d-block">
                        <button class="btn btn-sm btn-primary btn-get-product" data-id="${d.id || 0}">Get Product</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    div.innerHTML = html;
    const containerSlider = div.querySelector('.product-slider');
    let i = 0;

    setInterval(() => {
        if(i === (d.image_list.length) || 0) i = 0;
        if(d.image_list[0])
        {
            containerSlider.innerHTML = `<img class="product-image w-100 h-100" src="${d.image_list ? d.image_list[i].image_url : ''}" alt="product-slider"/>
            <div class="d-flex justify-content-between position-absolute w-100 h-100 z-1 top-0">
                <div class="d-flex align-items-center h-100 ps-2">
                    <div class="btn-slider-decrement d-flex align-items-center justify-content-center p-3 rounded-circle border border-1" role="button">
                        <i class="fa-solid fa-chevron-left fs-5 fw-bold text-white"></i>
                    </div>
                </div>
                <div class="d-flex align-items-center h-100 pe-2">
                    <div class="btn-slider-increment d-flex align-items-center justify-content-center p-3 rounded-circle border border-1" role="button">
                        <i class="fa-solid fa-chevron-right fs-5 fw-bold text-white"></i>
                    </div>
                </div>
            </div>`;
        }
        i++;
        i = viewProductImage(i,(d.image_list.length || 0),div.firstChild,d.image_list);
    },5000);
    renderRelatedProduct(div,data.related);
    setBookingProduct(div);
    i = viewProductImage(i,(d.image_list.length || 0),div.firstChild,d.image_list);
}

const viewProductImage = (index,length,div,d=[]) => {
    const btnDecrement = div.querySelector('.btn-slider-decrement'),
    btnIncrement = div.querySelector('.btn-slider-increment'),
    imageElement = div.querySelector('.product-image');

    if(btnDecrement)
    {
        btnDecrement.onclick = function(e)
        {
            e.preventDefault();
            if(index > 0)
            {
                index--;
                if(imageElement)
                    imageElement.src = d[index];
            }
            else
            {
                index = (length-1);
                if(imageElement)
                    imageElement.src = d[index];
            }
        }
    }

    if(btnIncrement)
    {
        btnIncrement.onclick = function(e)
        {
            e.preventDefault();
            if(index < (length-1))
            {
                index++;
                if(imageElement)
                    imageElement.src = d[index];
            }
            else
            {
                index = 0;
                if(imageElement)
                    imageElement.src = d[index];
            }
        }
    }
    return index;
}

let productList = [],
productBookedList = [];
const setBookingProduct = (div) => {
    const btnDecrement = div.querySelector('.btn-decrement'),
    btnIncrement = div.querySelector('.btn-increment'),
    productBooked = div.querySelector('.show-product-amount'),
    getProduct = div.querySelector('.btn-get-product');

    btnDecrement.onclick = function(e)
    {
        e.preventDefault();
        let value = parseInt(productBooked.textContent);
        if(value > 1)
        {
            productBooked.textContent = parseInt(productBooked.textContent) - 1;
        }
        else
        {
            productBooked.textContent = 1;
        }
    }

    btnIncrement.onclick = function(e)
    {
        e.preventDefault();
        let value = parseInt(productBooked.textContent);
        if(value >= 1)
        {
            productBooked.textContent = parseInt(productBooked.textContent) + 1;
        }
        else
        {
            productBooked.textContent = 1;
        }
    }

    getProduct.onclick = function(e)
    {
        e.preventDefault();
        const productId = this.dataset.id;
        fetch('../Json/login.json').then(res => res.json()).then(d => {
            d.forEach(user => {
                if((user.login_name == 'peter') && (user.password == '123456'))
                {
                    if(!productList[0])
                    {
                        productList.push(productId);
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "success",
                            title: "Your product has been saved"
                        });
                    }
                    else
                    {
                        const exist = productList.includes(productId);
                        if(exist)
                        {
                            Swal.fire({
                                title: "Product Already Exist!",
                                icon: "warning",
                                width: 400
                            });
                        }
                        else
                        {
                            productList.push(productId);
                            const Toast = Swal.mixin({
                                toast: true,
                                position: "top-end",
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.onmouseenter = Swal.stopTimer;
                                    toast.onmouseleave = Swal.resumeTimer;
                                }
                            });
                            Toast.fire({
                                icon: "success",
                                title: "Your product has been saved"
                            });
                        }
                    }
                    fetch('../Json/productDetails.json').then(res => res.json()).then(d => {
                        productBookedList = d.filter(value => productList.includes(value.id));
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }
                else
                {
                    modelDialog();
                }
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}
'use strict';
const renderRelatedProduct = (div,data=[]) => {
    const firstContainer = div.firstChild;
    let html = '';

    (data || []).forEach(re => {
        html += `<div class="card-product product-view-details overflow-hidden" data-id="${re.id || 1}">
            <div class="w-100">
                <img class="product-show" src="${re.image_url || ''}" alt="product-image"/>
            </div>
            <div class="w-100 px-2 mt-1">
                <p class="text-dark limit-line p-0 m-0">
                    <span>Code</span>
                    <span class="px-1">:</span>
                    <span class="fw-semibold">${re.code || ''}</span>
                </p>
                <p class="text-dark limit-line">
                    <span>Product</span>
                    <span class="px-1">:</span>
                    <span class="fw-semibold">${re.name || ''}</span>
                </p>
            </div>
            <div class="d-flex justify-content-end w-100 px-2 mt-2">
                <p class="text-dark fs-5">Price: ${re.price || ''}$</p>
            </div>
        </div>`;
    });

    html = `<div class="brand-section mt-3 animate__animated  animate__fadeInUp animate__delay-2s">
        <p class="text-capitalize fs-5 fw-bold">Related Product</p>
    </div>
    <div class="d-flex gap-2 justify-content-around flex-wrap mt-3 animate__animated  animate__fadeInUp animate__delay-3s">${html}</div>`;

    firstContainer.insertAdjacentHTML("afterend",html);
    setClickEventProductListView(div);
}

const modelDialog = () => {
    const modalId = '_prd_model';
    const previousModel = document.querySelector(`#${modalId}`);
    if(previousModel)
    {
        previousModel.remove();
    }
    const modalHtml = `<div id="${modalId}" class="modal fade">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header p-0">
                    <div class="d-flex flex-nowrap">
                        <button class="btn-tab fw-bold" data-purpose="login">Login</button>
                        <button class="btn-tab fw-bold" data-purpose="register">Register</button>
                    </div>
                    <button class="btn-close me-2" aria-label="close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body"></div>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML("afterbegin",modalHtml);
    new bootstrap.Modal(`#${modalId}`,{
        backdrop: 'static'
    }).show();
    const modal = document.getElementById(modalId);
    modal.addEventListener('hidden.bs.modal',function()
    {
        this.remove();
        document.body.removeAttribute('class');
        document.body.removeAttribute('style');
    });
    renderModelBody(modal);
}

const renderModelBody = (modal) => {
    const modalBody = modal.querySelector('.modal-body'),
    tabList = modal.querySelectorAll('.btn-tab');
    let html = '',
    previousClick = null;

    tabList.forEach(tab => {
        tab.onclick = function()
        {
            if(previousClick)
                previousClick.classList.remove('btn-active');
            tab.classList.add('btn-active');
            previousClick = this;
            switch(tab.dataset.purpose)
            {
                case 'login':
                    html = `<form class="d-flex gap-3 flex-column" method="POST" autocomplete="off" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="login_name" class="form-label">Username</label>
                            <div class="input-group flex-nowrap">
                                <div class="input-group-text">
                                    <i class="fa-regular fa-envelope fs-5"></i>
                                </div>
                                <input type="text" class="form-control data-input" name="login_name"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="form-label">Password</label>
                            <div class="input-group flex-nowrap">
                                <div class="input-group-text">
                                    <i class="fa-solid fa-key fs-5"></i>
                                </div>
                                <input type="password" class="form-control data-input" name="password"/>
                            </div>
                        </div>
                        <div class="d-grid mt-3">
                            <button class="btn-save btn btn-sm btn-primary fw-bold" type="button">Login</button>
                        </div>
                    </form>`;
                    modalBody.innerHTML = html;
                    setBtnSave(modalBody);
                    break;
                case 'register':
                    html = `<form class="d-flex gap-3 flex-column" method="POST" autocomplete="off" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="first_name" class="form-label">First Name</label>
                            <input type="text" class="form-control data-input" name="first_name"/>
                        </div>
                        <div class="form-group">
                            <label for="last_name" class="form-label">Last Name</label>
                            <input type="text" class="form-control data-input" name="last_name"/>
                        </div>
                        <div class="form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control data-input" name="email"/>
                        </div>
                        <div class="form-group">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control data-input" name="password"/>
                        </div>
                        <div class="d-grid">
                            <button class="btn-save btn btn-sm btn-success fw-bold" type="button">Register</button>
                        </div>
                    </form>`;
                    modalBody.innerHTML = html;
                    setBtnSave(modalBody);
                    break;
                default:
                    break;
            }
        }
    });
    tabList[0].dispatchEvent(new Event('click',{
        bubbles: true,
        cancelable: false
    }));
}

const getDataForm = (div) => {
    let p = {};
    div.querySelectorAll('.data-input').forEach(el => {
        const f = el.name;
        p[f] = el.value;
    });
    return p;
}

const setBtnSave = (div) => {
    const btnSave = div.querySelector('.btn-save');
    btnSave.onclick = function(e)
    {
        e.preventDefault();
        const p = getDataForm(div);
        console.log(p);
    }
}

const offCanvas = () => {
    const offcanvas_id = 'off_canvas_right';
    const previousOffCanvas = document.getElementById(offcanvas_id);
    if(previousOffCanvas) previousOffCanvas.remove();

    const html = `<div class="offcanvas offcanvas-end" data-bs-backdrop="false" tabindex="-1" id="${offcanvas_id}" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <div class="d-flex gap-2">
                <h5 class="offcanvas-title">Product Booked</h5>
                <button class="btn-order btn btn-sm btn-outline-success rounded-4" type="button">Order Now</button>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div id="${offcanvas_id}_body" class="offcanvas-body d-flex flex-column gap-2"></div>
    </div>`;
    document.body.insertAdjacentHTML("afterbegin",html);
    new bootstrap.Offcanvas(`#${offcanvas_id}`,{
        backdrop: 'static'
    }).show();
    const offCanvas = document.getElementById(offcanvas_id);
    offCanvas.addEventListener('hidden.bs.offcanvas',function()
    {
        this.remove();
        document.body.removeAttribute('class');
        document.body.removeAttribute('style');
    });
    if(offCanvas)
    {
        renderBodyOffCanvas(offCanvas,offcanvas_id);
        setOrderEvent(offCanvas);
    }
}

const renderBodyOffCanvas = (div,id) => {
    const offCanvasBody = div.querySelector(`#${id}_body`),
    baseUrl = window.location.origin;
    let html = '';
    if(productBookedList[0])
    {
        productBookedList.forEach(d => {
            html += `<div class="d-flex align-items-end gap-2 shadow-sm rounded-3 p-2 border position-relative overflow-hidden">
                <div class="container-product-image">
                    <img class="img-thumbnail object-fit-scale w-100 h-100" src="${baseUrl+((d.image_list && d.image_list[0]) || '/Images/Dior/a1.jpg')}" alt="product-image"/>
                </div>
                <div class="d-flex align-items-stretch flex-column w-75 h-100">
                    <div class="d-flex justify-content-center h-100">
                        <p class="p-0 m-0 fw-semibold w-75 text-center">${d.title || ''}</p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center w-100 gap-1">
                        <button class="btn-decrement btn btn-sm btn-outline-danger" type="button">
                            <i class="fa-solid fa-minus fs-5"></i>
                        </button>
                        <div class="d-flex justify-content-center align-items-center border border-primary flex-grow-1 p-1">
                            <p class="p-0 m-0">Qty: </p>
                            <p class="p-0 m-0 fw-bold ps-2">1</p>
                        </div>
                        <button class="btn-increment btn btn-sm btn-outline-success" type="button">
                            <i class="fa-solid fa-plus fs-5"></i>
                        </button>
                    </div>
                </div>
                <div class="btn-delete p-1 position-absolute top-0 end-0 bg-dark bg-opacity-25" role="button" data-id="${d.id || 0}">
                    <i class="fa-regular fa-trash-can fs-5 text-danger"></i>
                </div>
            </div>`;
        });
        offCanvasBody.innerHTML = html;
        setEventToOffCanvas(offCanvasBody);
    }
}

const setEventToOffCanvas = (div) => {
    const btnIncrementList = div.querySelectorAll('.btn-increment'),
    btnDecrementList = div.querySelectorAll('.btn-decrement'),
    btnDeleteList = div.querySelectorAll('.btn-delete');

    btnIncrementList.forEach(btn => {
        btn.onclick = function(e)
        {
            e.preventDefault();
            const qty = this.previousElementSibling.lastElementChild;
            qty.textContent = parseInt(qty.textContent) + 1;
        }
    });

    btnDecrementList.forEach(btn => {
        btn.onclick = function(e)
        {
            e.preventDefault(); 
            const qty = this.nextElementSibling.lastElementChild;
            if(parseInt(qty.textContent) > 1)
            {
                qty.textContent = parseInt(qty.textContent) - 1;
            }
        }
    });

    btnDeleteList.forEach(btn => {
        btn.onclick = function(e)
        {
            e.preventDefault();
            const id = this.dataset.id;
            const parent = this.parentElement;
            parent.remove();
            productList = productList.filter(item => item !== id);
            fetch('../Json/productDetails.json').then(res => res.json()).then(d => {
                productBookedList = d.filter(value => productList.includes(value.id));
            })
            .catch(err => {
                console.log(err);
            });
        }
    });
}

const setOrderEvent = (div) => {
    const btnOrder = div.querySelector('.btn-order');
    btnOrder.onclick = function(e)
    {
        e.preventDefault();
        if(productBookedList.length > 0)
        {
            Swal.fire({
                title: "Product Ordered Successfully!",
                icon: "success",
                width: 400
            });
        }
        else
        {
            Swal.fire({
                title: "Get a product before order!",
                icon: 'warning',
                width: 350
            });
        }
    }
}
class Router
{
    constructor(routes)
    {
        this.routes = routes;
        this._loadInitialRoute();
    }

    _loadInitialRoute()
    {
        const pathName = window.location.hash.slice(1) || "home";
        this.loadRoute(pathName);
    }

    loadRoute(pathName)
    {
        const matchedRoute = this.routes.find((route) => route.path === pathName);

        if(!matchedRoute)
        {
            window.location.hash = "";
        }
        else
        {
            matchedRoute.callback();
        }
    }
}
'use strict';
(function()
{
    const self = document.getElementById('_slider_container');
    let i = 0,
    clickSliderDecrement = null,
    clickSliderIncrement = null,
    imageElement = null;

    if(self)
    {
        api.get(`${base_url}/api/front-end/banner`).then(res => {
            if(res.status_code === 200)
            {
                const d = res.data || [];

                const length = d.length;
                self.innerHTML = `<img class="w-100 h-100 animate__animated animate__fadeInRight" src="${d[i].image_url || ''}" alt="${d[i].title || ''}"/>
                <div class="d-flex justify-content-between position-absolute w-100 h-100 top-0 set-bg-text-slider animate__animated animate__fadeInLeft">
                    <div class="d-flex align-items-center h-100 ps-2">
                        <div class="click-slider-decrement rounded-3 border border-2 rounded-circle px-3 py-2" role="button">
                            <i class="fa-solid fa-chevron-left fs-5 text-white"></i>
                        </div>
                    </div>
                    <div class="d-block w-100 h-100">
                        <div class="ms-5 bg-body bg-opacity-50 w-50 w-md-75 p-3 h-100">
                            <p class="text-primary-emphasis fs-5 fw-bold limit-line-title">${d[i].title || ''}</p>
                            <p class="text-success-emphasis ps-3 mt-3">${d[i].description || ''}</p>
                            <button class="btn btn-outline-dark mt-3 float-end" type="button">Explore Now</button>
                        </div>
                    </div>
                    <div class="d-flex align-items-center h-100 pe-3">
                        <div class="click-slider-increment d-flex align-items-center justify-content-center rounded-3 border border-2 rounded-circle px-3 py-2" role="button">
                            <i class="fa-solid fa-chevron-right fs-5 text-white"></i>
                        </div>
                    </div>
                </div>`;

                clickSliderDecrement = self.querySelector('.click-slider-decrement'),
                clickSliderIncrement = self.querySelector('.click-slider-increment'),
                imageElement = self.querySelector('.img-slider');

                if(clickSliderDecrement)
                {
                    clickSliderDecrement.onclick = function(e)
                    {
                        e.preventDefault();
                        if(i > 0)
                        {
                            i--;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                        else
                        {
                            i = (length-1);
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                    }
                }

                if(clickSliderIncrement)
                {
                    clickSliderIncrement.onclick = function(e)
                    {
                        e.preventDefault();
                        if(i < (length-1))
                        {
                            i = i+1;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                        else
                        {
                            i = 0;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                    }
                }

                setInterval(() => {
                    if(i === length) i = 0;

                    self.innerHTML = `<img class="img-slider w-100 h-100 animate__animated animate__fadeInRight" src="${d[i].image_url || ''}" alt="${d[i].title || ''}"/>
                    <div class="d-flex justify-content-between position-absolute w-100 h-100 top-0 set-bg-text-slider animate__animated animate__fadeInLeft">
                        <div class="d-flex align-items-center h-100 ps-2">
                            <div class="click-slider-decrement d-flex align-items-center justify-content-center rounded-3 border border-2 rounded-circle px-3 py-2" role="button">
                                <i class="fa-solid fa-chevron-left fs-5 text-white"></i>
                            </div>
                        </div>
                        <div class="d-block w-100 h-100">
                            <div class="ms-5 bg-body bg-opacity-50 w-50 p-3 h-100">
                                <p class="text-primary-emphasis fs-5 fw-bold">${d[i].title || ''}</p>
                                <p class="text-success-emphasis ps-3 mt-3 limited-description">${d[i].description || ''}</p>
                                <button class="btn btn-outline-dark mt-3 float-end" type="button">Explore Now</button>
                            </div>
                        </div>
                        <div class="d-flex align-items-center h-100 pe-3">
                            <div class="click-slider-increment d-flex align-items-center justify-content-center rounded-3 border border-2 rounded-circle px-3 py-2" role="button">
                                <i class="fa-solid fa-chevron-right fs-5 text-white"></i>
                            </div>
                        </div>
                    </div>`;
                    i++;
                    clickSliderDecrement = self.querySelector('.click-slider-decrement'),
                    clickSliderIncrement = self.querySelector('.click-slider-increment'),
                    imageElement = self.querySelector('.img-slider');

                    clickSliderDecrement.onclick = function(e)
                    {
                        e.preventDefault();
                        if(i > 0)
                        {
                            i--;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                        else
                        {
                            i = (length-1);
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                    }

                    clickSliderIncrement.onclick = function(e)
                    {
                        e.preventDefault();
                        if(i < (length-1))
                        {
                            i++;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                        else
                        {
                            i = 0;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                    }
                },5000);
            }
        });
    }
})();
/*!
* sweetalert2 v11.10.1
* Released under the MIT License.
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Sweetalert2=e()}(this,(function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,r=void 0,"symbol"==typeof(r=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"))?r:String(r)),o)}var i,r}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return c=a()?Reflect.construct.bind():function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},c.apply(null,arguments)}function u(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},s.apply(this,arguments)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,i,r,a,c=[],u=!0,s=!1;try{if(r=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=r.call(n)).done)&&(c.push(o.value),c.length!==e);u=!0);}catch(t){s=!0,i=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return c}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function m(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,v(t,e,"get"))}function h(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,v(t,e,"set"),n),n}function v(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function g(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}var b={},y=function(t){return new Promise((function(e){if(!t)return e();var n=window.scrollX,o=window.scrollY;b.restoreFocusTimeout=setTimeout((function(){b.previousActiveElement instanceof HTMLElement?(b.previousActiveElement.focus(),b.previousActiveElement=null):document.body&&document.body.focus(),e()}),100),window.scrollTo(n,o)}))},w="swal2-",C=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((function(t,e){return t[e]=w+e,t}),{}),A=["success","warning","info","question","error"].reduce((function(t,e){return t[e]=w+e,t}),{}),k="SweetAlert2:",E=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},B=function(e){console.warn("".concat(k," ").concat("object"===t(e)?e.join(" "):e))},P=function(t){console.error("".concat(k," ").concat(t))},T=[],x=function(t,e){var n;n='"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'),T.includes(n)||(T.push(n),B(n))},S=function(t){return"function"==typeof t?t():t},O=function(t){return t&&"function"==typeof t.toPromise},L=function(t){return O(t)?t.toPromise():Promise.resolve(t)},j=function(t){return t&&Promise.resolve(t)===t},M=function(){return document.body.querySelector(".".concat(C.container))},I=function(t){var e=M();return e?e.querySelector(t):null},H=function(t){return I(".".concat(t))},D=function(){return H(C.popup)},q=function(){return H(C.icon)},V=function(){return H(C.title)},R=function(){return H(C["html-container"])},_=function(){return H(C.image)},N=function(){return H(C["progress-steps"])},F=function(){return H(C["validation-message"])},U=function(){return I(".".concat(C.actions," .").concat(C.confirm))},z=function(){return I(".".concat(C.actions," .").concat(C.cancel))},W=function(){return I(".".concat(C.actions," .").concat(C.deny))},K=function(){return I(".".concat(C.loader))},Y=function(){return H(C.actions)},Z=function(){return H(C.footer)},$=function(){return H(C["timer-progress-bar"])},J=function(){return H(C.close)},X=function(){var t=D();if(!t)return[];var e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((function(t,e){var n=parseInt(t.getAttribute("tabindex")||"0"),o=parseInt(e.getAttribute("tabindex")||"0");return n>o?1:n<o?-1:0})),o=t.querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'),i=Array.from(o).filter((function(t){return"-1"!==t.getAttribute("tabindex")}));return d(new Set(n.concat(i))).filter((function(t){return ht(t)}))},G=function(){return et(document.body,C.shown)&&!et(document.body,C["toast-shown"])&&!et(document.body,C["no-backdrop"])},Q=function(){var t=D();return!!t&&et(t,C.toast)},tt=function(t,e){if(t.textContent="",e){var n=(new DOMParser).parseFromString(e,"text/html"),o=n.querySelector("head");o&&Array.from(o.childNodes).forEach((function(e){t.appendChild(e)}));var i=n.querySelector("body");i&&Array.from(i.childNodes).forEach((function(e){e instanceof HTMLVideoElement||e instanceof HTMLAudioElement?t.appendChild(e.cloneNode(!0)):t.appendChild(e)}))}},et=function(t,e){if(!e)return!1;for(var n=e.split(/\s+/),o=0;o<n.length;o++)if(!t.classList.contains(n[o]))return!1;return!0},nt=function(e,n,o){if(function(t,e){Array.from(t.classList).forEach((function(n){Object.values(C).includes(n)||Object.values(A).includes(n)||Object.values(e.showClass||{}).includes(n)||t.classList.remove(n)}))}(e,n),n.customClass&&n.customClass[o]){if("string"!=typeof n.customClass[o]&&!n.customClass[o].forEach)return void B("Invalid type of customClass.".concat(o,'! Expected string or iterable object, got "').concat(t(n.customClass[o]),'"'));at(e,n.customClass[o])}},ot=function(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(".".concat(C.popup," > .").concat(C[e]));case"checkbox":return t.querySelector(".".concat(C.popup," > .").concat(C.checkbox," input"));case"radio":return t.querySelector(".".concat(C.popup," > .").concat(C.radio," input:checked"))||t.querySelector(".".concat(C.popup," > .").concat(C.radio," input:first-child"));case"range":return t.querySelector(".".concat(C.popup," > .").concat(C.range," input"));default:return t.querySelector(".".concat(C.popup," > .").concat(C.input))}},it=function(t){if(t.focus(),"file"!==t.type){var e=t.value;t.value="",t.value=e}},rt=function(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach((function(e){Array.isArray(t)?t.forEach((function(t){n?t.classList.add(e):t.classList.remove(e)})):n?t.classList.add(e):t.classList.remove(e)})))},at=function(t,e){rt(t,e,!0)},ct=function(t,e){rt(t,e,!1)},ut=function(t,e){for(var n=Array.from(t.children),o=0;o<n.length;o++){var i=n[o];if(i instanceof HTMLElement&&et(i,e))return i}},st=function(t,e,n){n==="".concat(parseInt(n))&&(n=parseInt(n)),n||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";t&&(t.style.display=e)},dt=function(t){t&&(t.style.display="none")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block";t&&new MutationObserver((function(){mt(t,t.innerHTML,e)})).observe(t,{childList:!0,subtree:!0})},pt=function(t,e,n,o){var i=t.querySelector(e);i&&(i.style[n]=o)},mt=function(t,e){e?lt(t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"flex"):dt(t)},ht=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},vt=function(t){return!!(t.scrollHeight>t.clientHeight)},gt=function(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||o>0},bt=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=$();n&&ht(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout((function(){n.style.transition="width ".concat(t/1e3,"s linear"),n.style.width="0%"}),10))},yt=function(){return"undefined"==typeof window||"undefined"==typeof document},wt='\n <div aria-labelledby="'.concat(C.title,'" aria-describedby="').concat(C["html-container"],'" class="').concat(C.popup,'" tabindex="-1">\n   <button type="button" class="').concat(C.close,'"></button>\n   <ul class="').concat(C["progress-steps"],'"></ul>\n   <div class="').concat(C.icon,'"></div>\n   <img class="').concat(C.image,'" />\n   <h2 class="').concat(C.title,'" id="').concat(C.title,'"></h2>\n   <div class="').concat(C["html-container"],'" id="').concat(C["html-container"],'"></div>\n   <input class="').concat(C.input,'" id="').concat(C.input,'" />\n   <input type="file" class="').concat(C.file,'" />\n   <div class="').concat(C.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(C.select,'" id="').concat(C.select,'"></select>\n   <div class="').concat(C.radio,'"></div>\n   <label class="').concat(C.checkbox,'">\n     <input type="checkbox" id="').concat(C.checkbox,'" />\n     <span class="').concat(C.label,'"></span>\n   </label>\n   <textarea class="').concat(C.textarea,'" id="').concat(C.textarea,'"></textarea>\n   <div class="').concat(C["validation-message"],'" id="').concat(C["validation-message"],'"></div>\n   <div class="').concat(C.actions,'">\n     <div class="').concat(C.loader,'"></div>\n     <button type="button" class="').concat(C.confirm,'"></button>\n     <button type="button" class="').concat(C.deny,'"></button>\n     <button type="button" class="').concat(C.cancel,'"></button>\n   </div>\n   <div class="').concat(C.footer,'"></div>\n   <div class="').concat(C["timer-progress-bar-container"],'">\n     <div class="').concat(C["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),Ct=function(){b.currentInstance.resetValidationMessage()},At=function(t){var e,n=!!(e=M())&&(e.remove(),ct([document.documentElement,document.body],[C["no-backdrop"],C["toast-shown"],C["has-column"]]),!0);if(yt())P("SweetAlert2 requires document to initialize");else{var o=document.createElement("div");o.className=C.container,n&&at(o,C["no-transition"]),tt(o,wt);var i,r,a,c,u,s,l,d,f,p="string"==typeof(i=t.target)?document.querySelector(i):i;p.appendChild(o),function(t){var e=D();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")}(t),function(t){"rtl"===window.getComputedStyle(t).direction&&at(M(),C.rtl)}(p),r=D(),a=ut(r,C.input),c=ut(r,C.file),u=r.querySelector(".".concat(C.range," input")),s=r.querySelector(".".concat(C.range," output")),l=ut(r,C.select),d=r.querySelector(".".concat(C.checkbox," input")),f=ut(r,C.textarea),a.oninput=Ct,c.onchange=Ct,l.onchange=Ct,d.onchange=Ct,f.oninput=Ct,u.oninput=function(){Ct(),s.value=u.value},u.onchange=function(){Ct(),s.value=u.value}}},kt=function(e,n){e instanceof HTMLElement?n.appendChild(e):"object"===t(e)?Et(e,n):e&&tt(n,e)},Et=function(t,e){t.jquery?Bt(e,t):tt(e,t.toString())},Bt=function(t,e){if(t.textContent="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Pt=function(){if(yt())return!1;var t=document.createElement("div");return void 0!==t.style.webkitAnimation?"webkitAnimationEnd":void 0!==t.style.animation&&"animationend"}(),Tt=function(t,e){var n=Y(),o=K();n&&o&&(e.showConfirmButton||e.showDenyButton||e.showCancelButton?lt(n):dt(n),nt(n,e,"actions"),function(t,e,n){var o=U(),i=W(),r=z();if(!o||!i||!r)return;xt(o,"confirm",n),xt(i,"deny",n),xt(r,"cancel",n),function(t,e,n,o){if(!o.buttonsStyling)return void ct([t,e,n],C.styled);at([t,e,n],C.styled),o.confirmButtonColor&&(t.style.backgroundColor=o.confirmButtonColor,at(t,C["default-outline"]));o.denyButtonColor&&(e.style.backgroundColor=o.denyButtonColor,at(e,C["default-outline"]));o.cancelButtonColor&&(n.style.backgroundColor=o.cancelButtonColor,at(n,C["default-outline"]))}(o,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,o),t.insertBefore(i,o)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(o,e)))}(n,o,e),tt(o,e.loaderHtml||""),nt(o,e,"loader"))};function xt(t,e,n){var o=E(e);mt(t,n["show".concat(o,"Button")],"inline-block"),tt(t,n["".concat(e,"ButtonText")]||""),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]||""),t.className=C[e],nt(t,n,"".concat(e,"Button"))}var St=function(t,e){var n=M();n&&(!function(t,e){"string"==typeof e?t.style.background=e:e||at([document.documentElement,document.body],C["no-backdrop"])}(n,e.backdrop),function(t,e){if(!e)return;e in C?at(t,C[e]):(B('The "position" parameter is not valid, defaulting to "center"'),at(t,C.center))}(n,e.position),function(t,e){if(!e)return;at(t,C["grow-".concat(e)])}(n,e.grow),nt(n,e,"container"))};var Ot={innerParams:new WeakMap,domCache:new WeakMap},Lt=["input","file","range","select","radio","checkbox","textarea"],jt=function(t){if(t.input)if(Rt[t.input]){var e=qt(t.input),n=Rt[t.input](e,t);lt(e),t.inputAutoFocus&&setTimeout((function(){it(n)}))}else P("Unexpected type of input! Expected ".concat(Object.keys(Rt).join(" | "),', got "').concat(t.input,'"'))},Mt=function(t,e){var n=ot(D(),t);if(n)for(var o in function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}}(n),e)n.setAttribute(o,e[o])},It=function(e){var n=qt(e.input);"object"===t(e.customClass)&&at(n,e.customClass.input)},Ht=function(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)},Dt=function(e,n,o){if(o.inputLabel){var i=document.createElement("label"),r=C["input-label"];i.setAttribute("for",e.id),i.className=r,"object"===t(o.customClass)&&at(i,o.customClass.inputLabel),i.innerText=o.inputLabel,n.insertAdjacentElement("beforebegin",i)}},qt=function(t){return ut(D(),C[t]||C.input)},Vt=function(e,n){["string","number"].includes(t(n))?e.value="".concat(n):j(n)||B('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(t(n),'"'))},Rt={};Rt.text=Rt.email=Rt.password=Rt.number=Rt.tel=Rt.url=Rt.search=Rt.date=Rt["datetime-local"]=Rt.time=Rt.week=Rt.month=function(t,e){return Vt(t,e.inputValue),Dt(t,t,e),Ht(t,e),t.type=e.input,t},Rt.file=function(t,e){return Dt(t,t,e),Ht(t,e),t},Rt.range=function(t,e){var n=t.querySelector("input"),o=t.querySelector("output");return Vt(n,e.inputValue),n.type=e.input,Vt(o,e.inputValue),Dt(n,t,e),t},Rt.select=function(t,e){if(t.textContent="",e.inputPlaceholder){var n=document.createElement("option");tt(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Dt(t,t,e),t},Rt.radio=function(t){return t.textContent="",t},Rt.checkbox=function(t,e){var n=ot(D(),"checkbox");n.value="1",n.checked=Boolean(e.inputValue);var o=t.querySelector("span");return tt(o,e.inputPlaceholder),n},Rt.textarea=function(t,e){Vt(t,e.inputValue),Ht(t,e),Dt(t,t,e);return setTimeout((function(){if("MutationObserver"in window){var n=parseInt(window.getComputedStyle(D()).width);new MutationObserver((function(){if(document.body.contains(t)){var o,i=t.offsetWidth+(o=t,parseInt(window.getComputedStyle(o).marginLeft)+parseInt(window.getComputedStyle(o).marginRight));i>n?D().style.width="".concat(i,"px"):st(D(),"width",e.width)}})).observe(t,{attributes:!0,attributeFilter:["style"]})}})),t};var _t=function(t,e){var n=R();n&&(ft(n),nt(n,e,"htmlContainer"),e.html?(kt(e.html,n),lt(n,"block")):e.text?(n.textContent=e.text,lt(n,"block")):dt(n),function(t,e){var n=D();if(n){var o=Ot.innerParams.get(t),i=!o||e.input!==o.input;Lt.forEach((function(t){var o=ut(n,C[t]);o&&(Mt(t,e.inputAttributes),o.className=C[t],i&&dt(o))})),e.input&&(i&&jt(e),It(e))}}(t,e))},Nt=function(t,e){for(var n=0,o=Object.entries(A);n<o.length;n++){var i=l(o[n],2),r=i[0],a=i[1];e.icon!==r&&ct(t,a)}at(t,e.icon&&A[e.icon]),zt(t,e),Ft(),nt(t,e,"icon")},Ft=function(){var t=D();if(t)for(var e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},Ut=function(t,e){if(e.icon||e.iconHtml){var n=t.innerHTML,o="";if(e.iconHtml)o=Wt(e.iconHtml);else if("success"===e.icon)o='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',n=n.replace(/ style=".*?"/g,"");else if("error"===e.icon)o='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';else if(e.icon){o=Wt({question:"?",warning:"!",info:"i"}[e.icon])}n.trim()!==o.trim()&&tt(t,o)}},zt=function(t,e){if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(var n=0,o=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];n<o.length;n++){pt(t,o[n],"backgroundColor",e.iconColor)}pt(t,".swal2-success-ring","borderColor",e.iconColor)}},Wt=function(t){return'<div class="'.concat(C["icon-content"],'">').concat(t,"</div>")},Kt=function(t,e){var n=e.showClass||{};t.className="".concat(C.popup," ").concat(ht(t)?n.popup:""),e.toast?(at([document.documentElement,document.body],C["toast-shown"]),at(t,C.toast)):at(t,C.modal),nt(t,e,"popup"),"string"==typeof e.customClass&&at(t,e.customClass),e.icon&&at(t,C["icon-".concat(e.icon)])},Yt=function(t){var e=document.createElement("li");return at(e,C["progress-step"]),tt(e,t),e},Zt=function(t){var e=document.createElement("li");return at(e,C["progress-step-line"]),t.progressStepsDistance&&st(e,"width",t.progressStepsDistance),e},$t=function(t,e){!function(t,e){var n=M(),o=D();if(n&&o){if(e.toast){st(n,"width",e.width),o.style.width="100%";var i=K();i&&o.insertBefore(i,q())}else st(o,"width",e.width);st(o,"padding",e.padding),e.color&&(o.style.color=e.color),e.background&&(o.style.background=e.background),dt(F()),Kt(o,e)}}(0,e),St(0,e),function(t,e){var n=N();if(n){var o=e.progressSteps,i=e.currentProgressStep;o&&0!==o.length&&void 0!==i?(lt(n),n.textContent="",i>=o.length&&B("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),o.forEach((function(t,r){var a=Yt(t);if(n.appendChild(a),r===i&&at(a,C["active-progress-step"]),r!==o.length-1){var c=Zt(e);n.appendChild(c)}}))):dt(n)}}(0,e),function(t,e){var n=Ot.innerParams.get(t),o=q();if(o){if(n&&e.icon===n.icon)return Ut(o,e),void Nt(o,e);if(e.icon||e.iconHtml){if(e.icon&&-1===Object.keys(A).indexOf(e.icon))return P('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon,'"')),void dt(o);lt(o),Ut(o,e),Nt(o,e),at(o,e.showClass&&e.showClass.icon)}else dt(o)}}(t,e),function(t,e){var n=_();n&&(e.imageUrl?(lt(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),st(n,"width",e.imageWidth),st(n,"height",e.imageHeight),n.className=C.image,nt(n,e,"image")):dt(n))}(0,e),function(t,e){var n=V();n&&(ft(n),mt(n,e.title||e.titleText,"block"),e.title&&kt(e.title,n),e.titleText&&(n.innerText=e.titleText),nt(n,e,"title"))}(0,e),function(t,e){var n=J();n&&(tt(n,e.closeButtonHtml||""),nt(n,e,"closeButton"),mt(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))}(0,e),_t(t,e),Tt(0,e),function(t,e){var n=Z();n&&(ft(n),mt(n,e.footer,"block"),e.footer&&kt(e.footer,n),nt(n,e,"footer"))}(0,e);var n=D();"function"==typeof e.didRender&&n&&e.didRender(n)},Jt=function(){var t;return null===(t=U())||void 0===t?void 0:t.click()},Xt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Gt=function(t){t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Qt=function(t,e){var n,o=X();if(o.length)return(t+=e)===o.length?t=0:-1===t&&(t=o.length-1),void o[t].focus();null===(n=D())||void 0===n||n.focus()},te=["ArrowRight","ArrowDown"],ee=["ArrowLeft","ArrowUp"],ne=function(t,e,n){t&&(e.isComposing||229===e.keyCode||(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?oe(e,t):"Tab"===e.key?ie(e):[].concat(te,ee).includes(e.key)?re(e.key):"Escape"===e.key&&ae(e,t,n)))},oe=function(t,e){if(S(e.allowEnterKey)){var n=ot(D(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;Jt(),t.preventDefault()}}},ie=function(t){for(var e=t.target,n=X(),o=-1,i=0;i<n.length;i++)if(e===n[i]){o=i;break}t.shiftKey?Qt(o,-1):Qt(o,1),t.stopPropagation(),t.preventDefault()},re=function(t){var e=Y(),n=U(),o=W(),i=z();if(e&&n&&o&&i){var r=[n,o,i];if(!(document.activeElement instanceof HTMLElement)||r.includes(document.activeElement)){var a=te.includes(t)?"nextElementSibling":"previousElementSibling",c=document.activeElement;if(c){for(var u=0;u<e.children.length;u++){if(!(c=c[a]))return;if(c instanceof HTMLButtonElement&&ht(c))break}c instanceof HTMLButtonElement&&c.focus()}}}},ae=function(t,e,n){S(e.allowEscapeKey)&&(t.preventDefault(),n(Xt.esc))},ce={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},ue=function(){Array.from(document.body.children).forEach((function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")||""),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")}))},se="undefined"!=typeof window&&!!window.GestureEvent,le=function(){var t,e=M();e&&(e.ontouchstart=function(e){t=de(e)},e.ontouchmove=function(e){t&&(e.preventDefault(),e.stopPropagation())})},de=function(t){var e=t.target,n=M(),o=R();return!(!n||!o)&&(!fe(t)&&!pe(t)&&(e===n||!vt(n)&&e instanceof HTMLElement&&"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName&&(!vt(o)||!o.contains(e))))},fe=function(t){return t.touches&&t.touches.length&&"stylus"===t.touches[0].touchType},pe=function(t){return t.touches&&t.touches.length>1},me=null,he=function(t){null===me&&(document.body.scrollHeight>window.innerHeight||"scroll"===t)&&(me=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(me+function(){var t=document.createElement("div");t.className=C["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))};function ve(t,e,n,o){Q()?Ee(t,o):(y(n).then((function(){return Ee(t,o)})),Gt(b)),se?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),G()&&(null!==me&&(document.body.style.paddingRight="".concat(me,"px"),me=null),function(){if(et(document.body,C.iosfix)){var t=parseInt(document.body.style.top,10);ct(document.body,C.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}}(),ue()),ct([document.documentElement,document.body],[C.shown,C["height-auto"],C["no-backdrop"],C["toast-shown"]])}function ge(t){t=Ce(t);var e=ce.swalPromiseResolve.get(this),n=be(this);this.isAwaitingPromise?t.isDismissed||(we(this),e(t)):n&&e(t)}var be=function(t){var e=D();if(!e)return!1;var n=Ot.innerParams.get(t);if(!n||et(e,n.hideClass.popup))return!1;ct(e,n.showClass.popup),at(e,n.hideClass.popup);var o=M();return ct(o,n.showClass.backdrop),at(o,n.hideClass.backdrop),Ae(t,e,n),!0};function ye(t){var e=ce.swalPromiseReject.get(this);we(this),e&&e(t)}var we=function(t){t.isAwaitingPromise&&(delete t.isAwaitingPromise,Ot.innerParams.get(t)||t._destroy())},Ce=function(t){return void 0===t?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t)},Ae=function(t,e,n){var o=M(),i=Pt&&gt(e);"function"==typeof n.willClose&&n.willClose(e),i?ke(t,e,o,n.returnFocus,n.didClose):ve(t,o,n.returnFocus,n.didClose)},ke=function(t,e,n,o,i){Pt&&(b.swalCloseEventFinishedCallback=ve.bind(null,t,n,o,i),e.addEventListener(Pt,(function(t){t.target===e&&(b.swalCloseEventFinishedCallback(),delete b.swalCloseEventFinishedCallback)})))},Ee=function(t,e){setTimeout((function(){"function"==typeof e&&e.bind(t.params)(),t._destroy&&t._destroy()}))},Be=function(t){var e=D();if(e||new ro,e=D()){var n=K();Q()?dt(q()):Pe(e,t),lt(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()}},Pe=function(t,e){var n=Y(),o=K();n&&o&&(!e&&ht(U())&&(e=U()),lt(n),e&&(dt(e),o.setAttribute("data-button-to-replace",e.className),n.insertBefore(o,e)),at([t,n],C.loading))},Te=function(t){return t.checked?1:0},xe=function(t){return t.checked?t.value:null},Se=function(t){return t.files&&t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},Oe=function(e,n){var o=D();if(o){var i=function(t){"select"===n.input?function(t,e,n){var o=ut(t,C.select);if(!o)return;var i=function(t,e,o){var i=document.createElement("option");i.value=o,tt(i,e),i.selected=Me(o,n.inputValue),t.appendChild(i)};e.forEach((function(t){var e=t[0],n=t[1];if(Array.isArray(n)){var r=document.createElement("optgroup");r.label=e,r.disabled=!1,o.appendChild(r),n.forEach((function(t){return i(r,t[1],t[0])}))}else i(o,n,e)})),o.focus()}(o,je(t),n):"radio"===n.input&&function(t,e,n){var o=ut(t,C.radio);if(!o)return;e.forEach((function(t){var e=t[0],i=t[1],r=document.createElement("input"),a=document.createElement("label");r.type="radio",r.name=C.radio,r.value=e,Me(e,n.inputValue)&&(r.checked=!0);var c=document.createElement("span");tt(c,i),c.className=C.label,a.appendChild(r),a.appendChild(c),o.appendChild(a)}));var i=o.querySelectorAll("input");i.length&&i[0].focus()}(o,je(t),n)};O(n.inputOptions)||j(n.inputOptions)?(Be(U()),L(n.inputOptions).then((function(t){e.hideLoading(),i(t)}))):"object"===t(n.inputOptions)?i(n.inputOptions):P("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(t(n.inputOptions)))}},Le=function(t,e){var n=t.getInput();n&&(dt(n),L(e.inputValue).then((function(o){n.value="number"===e.input?"".concat(parseFloat(o)||0):"".concat(o),lt(n),n.focus(),t.hideLoading()})).catch((function(e){P("Error in inputValue promise: ".concat(e)),n.value="",lt(n),n.focus(),t.hideLoading()})))};var je=function e(n){var o=[];return n instanceof Map?n.forEach((function(n,i){var r=n;"object"===t(r)&&(r=e(r)),o.push([i,r])})):Object.keys(n).forEach((function(i){var r=n[i];"object"===t(r)&&(r=e(r)),o.push([i,r])})),o},Me=function(t,e){return!!e&&e.toString()===t.toString()},Ie=void 0,He=function(t,e){var n=Ot.innerParams.get(t);if(n.input){var o=t.getInput(),i=function(t,e){var n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Te(n);case"radio":return xe(n);case"file":return Se(n);default:return e.inputAutoTrim?n.value.trim():n.value}}(t,n);n.inputValidator?De(t,i,e):o&&!o.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage)):"deny"===e?qe(t,i):_e(t,i)}else P('The "input" parameter is needed to be set when using returnInputValueOn'.concat(E(e)))},De=function(t,e,n){var o=Ot.innerParams.get(t);t.disableInput(),Promise.resolve().then((function(){return L(o.inputValidator(e,o.validationMessage))})).then((function(o){t.enableButtons(),t.enableInput(),o?t.showValidationMessage(o):"deny"===n?qe(t,e):_e(t,e)}))},qe=function(t,e){var n=Ot.innerParams.get(t||Ie);(n.showLoaderOnDeny&&Be(W()),n.preDeny)?(t.isAwaitingPromise=!0,Promise.resolve().then((function(){return L(n.preDeny(e,n.validationMessage))})).then((function(n){!1===n?(t.hideLoading(),we(t)):t.close({isDenied:!0,value:void 0===n?e:n})})).catch((function(e){return Re(t||Ie,e)}))):t.close({isDenied:!0,value:e})},Ve=function(t,e){t.close({isConfirmed:!0,value:e})},Re=function(t,e){t.rejectPromise(e)},_e=function(t,e){var n=Ot.innerParams.get(t||Ie);(n.showLoaderOnConfirm&&Be(),n.preConfirm)?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then((function(){return L(n.preConfirm(e,n.validationMessage))})).then((function(n){ht(F())||!1===n?(t.hideLoading(),we(t)):Ve(t,void 0===n?e:n)})).catch((function(e){return Re(t||Ie,e)}))):Ve(t,e)};function Ne(){var t=Ot.innerParams.get(this);if(t){var e=Ot.domCache.get(this);dt(e.loader),Q()?t.icon&&lt(q()):Fe(e),ct([e.popup,e.actions],C.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}}var Fe=function(t){var e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?lt(e[0],"inline-block"):ht(U())||ht(W())||ht(z())||dt(t.actions)};function Ue(){var t=Ot.innerParams.get(this),e=Ot.domCache.get(this);return e?ot(e.popup,t.input):null}function ze(t,e,n){var o=Ot.domCache.get(t);e.forEach((function(t){o[t].disabled=n}))}function We(t,e){var n=D();if(n&&t)if("radio"===t.type)for(var o=n.querySelectorAll('[name="'.concat(C.radio,'"]')),i=0;i<o.length;i++)o[i].disabled=e;else t.disabled=e}function Ke(){ze(this,["confirmButton","denyButton","cancelButton"],!1)}function Ye(){ze(this,["confirmButton","denyButton","cancelButton"],!0)}function Ze(){We(this.getInput(),!1)}function $e(){We(this.getInput(),!0)}function Je(t){var e=Ot.domCache.get(this),n=Ot.innerParams.get(this);tt(e.validationMessage,t),e.validationMessage.className=C["validation-message"],n.customClass&&n.customClass.validationMessage&&at(e.validationMessage,n.customClass.validationMessage),lt(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid","true"),o.setAttribute("aria-describedby",C["validation-message"]),it(o),at(o,C.inputerror))}function Xe(){var t=Ot.domCache.get(this);t.validationMessage&&dt(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ct(e,C.inputerror))}var Ge={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Qe=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],tn={},en=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],nn=function(t){return Object.prototype.hasOwnProperty.call(Ge,t)},on=function(t){return-1!==Qe.indexOf(t)},rn=function(t){return tn[t]},an=function(t){nn(t)||B('Unknown parameter "'.concat(t,'"'))},cn=function(t){en.includes(t)&&B('The parameter "'.concat(t,'" is incompatible with toasts'))},un=function(t){var e=rn(t);e&&x(t,e)};function sn(t){var e=D(),n=Ot.innerParams.get(this);if(e&&!et(e,n.hideClass.popup)){var o=ln(t),i=Object.assign({},n,o);$t(this,i),Ot.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}else B("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.")}var ln=function(t){var e={};return Object.keys(t).forEach((function(n){on(n)?e[n]=t[n]:B("Invalid parameter to update: ".concat(n))})),e};function dn(){var t=Ot.domCache.get(this),e=Ot.innerParams.get(this);e?(t.popup&&b.swalCloseEventFinishedCallback&&(b.swalCloseEventFinishedCallback(),delete b.swalCloseEventFinishedCallback),"function"==typeof e.didDestroy&&e.didDestroy(),fn(this)):pn(this)}var fn=function(t){pn(t),delete t.params,delete b.keydownHandler,delete b.keydownTarget,delete b.currentInstance},pn=function(t){t.isAwaitingPromise?(mn(Ot,t),t.isAwaitingPromise=!0):(mn(ce,t),mn(Ot,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},mn=function(t,e){for(var n in t)t[n].delete(e)},hn=Object.freeze({__proto__:null,_destroy:dn,close:ge,closeModal:ge,closePopup:ge,closeToast:ge,disableButtons:Ye,disableInput:$e,disableLoading:Ne,enableButtons:Ke,enableInput:Ze,getInput:Ue,handleAwaitingPromise:we,hideLoading:Ne,rejectPromise:ye,resetValidationMessage:Xe,showValidationMessage:Je,update:sn}),vn=function(t,e,n){e.popup.onclick=function(){t&&(gn(t)||t.timer||t.input)||n(Xt.close)}},gn=function(t){return!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton)},bn=!1,yn=function(t){t.popup.onmousedown=function(){t.container.onmouseup=function(e){t.container.onmouseup=function(){},e.target===t.container&&(bn=!0)}}},wn=function(t){t.container.onmousedown=function(){t.popup.onmouseup=function(e){t.popup.onmouseup=function(){},(e.target===t.popup||e.target instanceof HTMLElement&&t.popup.contains(e.target))&&(bn=!0)}}},Cn=function(t,e,n){e.container.onclick=function(o){bn?bn=!1:o.target===e.container&&S(t.allowOutsideClick)&&n(Xt.backdrop)}},An=function(e){return e instanceof Element||function(e){return"object"===t(e)&&e.jquery}(e)};var kn=function(){if(b.timeout)return function(){var t=$();if(t){var e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=e/parseInt(window.getComputedStyle(t).width)*100;t.style.width="".concat(n,"%")}}(),b.timeout.stop()},En=function(){if(b.timeout){var t=b.timeout.start();return bt(t),t}},Bn=!1,Pn={};var Tn,xn=function(t){for(var e=t.target;e&&e!==document;e=e.parentNode)for(var n in Pn){var o=e.getAttribute(n);if(o)return void Pn[n].fire({template:o})}},Sn=Object.freeze({__proto__:null,argsToParams:function(e){var n={};return"object"!==t(e[0])||An(e[0])?["title","html","icon"].forEach((function(o,i){var r=e[i];"string"==typeof r||An(r)?n[o]=r:void 0!==r&&P("Unexpected type of ".concat(o,'! Expected "string" or "Element", got ').concat(t(r)))})):Object.assign(n,e[0]),n},bindClickHandler:function(){Pn[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template"]=this,Bn||(document.body.addEventListener("click",xn),Bn=!0)},clickCancel:function(){var t;return null===(t=z())||void 0===t?void 0:t.click()},clickConfirm:Jt,clickDeny:function(){var t;return null===(t=W())||void 0===t?void 0:t.click()},enableLoading:Be,fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return c(this,e)},getActions:Y,getCancelButton:z,getCloseButton:J,getConfirmButton:U,getContainer:M,getDenyButton:W,getFocusableElements:X,getFooter:Z,getHtmlContainer:R,getIcon:q,getIconContent:function(){return H(C["icon-content"])},getImage:_,getInputLabel:function(){return H(C["input-label"])},getLoader:K,getPopup:D,getProgressSteps:N,getTimerLeft:function(){return b.timeout&&b.timeout.getTimerLeft()},getTimerProgressBar:$,getTitle:V,getValidationMessage:F,increaseTimer:function(t){if(b.timeout){var e=b.timeout.increase(t);return bt(e,!0),e}},isDeprecatedParameter:rn,isLoading:function(){var t=D();return!!t&&t.hasAttribute("data-loading")},isTimerRunning:function(){return!(!b.timeout||!b.timeout.isRunning())},isUpdatableParameter:on,isValidParameter:nn,isVisible:function(){return ht(D())},mixin:function(t){var n=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(f,n);var c,l,d=(c=f,l=a(),function(){var t,e=i(c);if(l){var n=i(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function f(){return e(this,f),d.apply(this,arguments)}return o(f,[{key:"_main",value:function(e,n){return s(i(f.prototype),"_main",this).call(this,e,Object.assign({},t,n))}}]),f}(this);return n},resumeTimer:En,showLoading:Be,stopTimer:kn,toggleTimer:function(){var t=b.timeout;return t&&(t.running?kn():En())}}),On=function(){function t(n,o){e(this,t),this.callback=n,this.remaining=o,this.running=!1,this.start()}return o(t,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),t}(),Ln=["swal-title","swal-html","swal-footer"],jn=function(e){var n={};return Array.from(e.querySelectorAll("swal-param")).forEach((function(e){_n(e,["name","value"]);var o=e.getAttribute("name"),i=e.getAttribute("value");"boolean"==typeof Ge[o]?n[o]="false"!==i:"object"===t(Ge[o])?n[o]=JSON.parse(i):n[o]=i})),n},Mn=function(t){var e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach((function(t){var n=t.getAttribute("name"),o=t.getAttribute("value");e[n]=new Function("return ".concat(o))()})),e},In=function(t){var e={};return Array.from(t.querySelectorAll("swal-button")).forEach((function(t){_n(t,["type","color","aria-label"]);var n=t.getAttribute("type");e["".concat(n,"ButtonText")]=t.innerHTML,e["show".concat(E(n),"Button")]=!0,t.hasAttribute("color")&&(e["".concat(n,"ButtonColor")]=t.getAttribute("color")),t.hasAttribute("aria-label")&&(e["".concat(n,"ButtonAriaLabel")]=t.getAttribute("aria-label"))})),e},Hn=function(t){var e={},n=t.querySelector("swal-image");return n&&(_n(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},Dn=function(t){var e={},n=t.querySelector("swal-icon");return n&&(_n(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},qn=function(t){var e={},n=t.querySelector("swal-input");n&&(_n(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));var o=Array.from(t.querySelectorAll("swal-input-option"));return o.length&&(e.inputOptions={},o.forEach((function(t){_n(t,["value"]);var n=t.getAttribute("value"),o=t.innerHTML;e.inputOptions[n]=o}))),e},Vn=function(t,e){var n={};for(var o in e){var i=e[o],r=t.querySelector(i);r&&(_n(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Rn=function(t){var e=Ln.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach((function(t){var n=t.tagName.toLowerCase();e.includes(n)||B("Unrecognized element <".concat(n,">"))}))},_n=function(t,e){Array.from(t.attributes).forEach((function(n){-1===e.indexOf(n.name)&&B(['Unrecognized attribute "'.concat(n.name,'" on <').concat(t.tagName.toLowerCase(),">."),"".concat(e.length?"Allowed attributes are: ".concat(e.join(", ")):"To set the value, use HTML within the element.")])}))},Nn=function(t){var e=M(),n=D();"function"==typeof t.willOpen&&t.willOpen(n);var o=window.getComputedStyle(document.body).overflowY;Wn(e,n,t),setTimeout((function(){Un(e,n)}),10),G()&&(zn(e,t.scrollbarPadding,o),Array.from(document.body.children).forEach((function(t){t===M()||t.contains(M())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")||""),t.setAttribute("aria-hidden","true"))}))),Q()||b.previousActiveElement||(b.previousActiveElement=document.activeElement),"function"==typeof t.didOpen&&setTimeout((function(){return t.didOpen(n)})),ct(e,C["no-transition"])},Fn=function t(e){var n=D();if(e.target===n&&Pt){var o=M();n.removeEventListener(Pt,t),o.style.overflowY="auto"}},Un=function(t,e){Pt&&gt(e)?(t.style.overflowY="hidden",e.addEventListener(Pt,Fn)):t.style.overflowY="auto"},zn=function(t,e,n){!function(){if(se&&!et(document.body,C.iosfix)){var t=document.body.scrollTop;document.body.style.top="".concat(-1*t,"px"),at(document.body,C.iosfix),le()}}(),e&&"hidden"!==n&&he(n),setTimeout((function(){t.scrollTop=0}))},Wn=function(t,e,n){at(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),lt(e,"grid"),setTimeout((function(){at(e,n.showClass.popup),e.style.removeProperty("opacity")}),10)):lt(e,"grid"),at([document.documentElement,document.body],C.shown),n.heightAuto&&n.backdrop&&!n.toast&&at([document.documentElement,document.body],C["height-auto"])},Kn={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function Yn(t){!function(t){t.inputValidator||("email"===t.input&&(t.inputValidator=Kn.email),"url"===t.input&&(t.inputValidator=Kn.url))}(t),t.showLoaderOnConfirm&&!t.preConfirm&&B("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),function(t){(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(B('Target parameter is not valid, defaulting to "body"'),t.target="body")}(t),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),At(t)}var Zn=new WeakMap,$n=function(){function t(){if(e(this,t),g(this,Zn,{writable:!0,value:void 0}),"undefined"!=typeof window){Tn=this;for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];var r=Object.freeze(this.constructor.argsToParams(o));this.params=r,this.isAwaitingPromise=!1,h(this,Zn,this._main(Tn.params))}}return o(t,[{key:"_main",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(t){for(var e in!1===t.backdrop&&t.allowOutsideClick&&B('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t)an(e),t.toast&&cn(e),un(e)}(Object.assign({},e,t)),b.currentInstance){var n=ce.swalPromiseResolve.get(b.currentInstance),o=b.currentInstance.isAwaitingPromise;b.currentInstance._destroy(),o||n({isDismissed:!0}),G()&&ue()}b.currentInstance=Tn;var i=Xn(t,e);Yn(i),Object.freeze(i),b.timeout&&(b.timeout.stop(),delete b.timeout),clearTimeout(b.restoreFocusTimeout);var r=Gn(Tn);return $t(Tn,i),Ot.innerParams.set(Tn,i),Jn(Tn,r,i)}},{key:"then",value:function(t){return m(this,Zn).then(t)}},{key:"finally",value:function(t){return m(this,Zn).finally(t)}}]),t}(),Jn=function(t,e,n){return new Promise((function(o,i){var r=function(e){t.close({isDismissed:!0,dismiss:e})};ce.swalPromiseResolve.set(t,o),ce.swalPromiseReject.set(t,i),e.confirmButton.onclick=function(){!function(t){var e=Ot.innerParams.get(t);t.disableButtons(),e.input?He(t,"confirm"):_e(t,!0)}(t)},e.denyButton.onclick=function(){!function(t){var e=Ot.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?He(t,"deny"):qe(t,!1)}(t)},e.cancelButton.onclick=function(){!function(t,e){t.disableButtons(),e(Xt.cancel)}(t,r)},e.closeButton.onclick=function(){r(Xt.close)},function(t,e,n){t.toast?vn(t,e,n):(yn(e),wn(e),Cn(t,e,n))}(n,e,r),function(t,e,n){Gt(t),e.toast||(t.keydownHandler=function(t){return ne(e,t,n)},t.keydownTarget=e.keydownListenerCapture?window:D(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)}(b,n,r),function(t,e){"select"===e.input||"radio"===e.input?Oe(t,e):["text","email","number","tel","textarea"].some((function(t){return t===e.input}))&&(O(e.inputValue)||j(e.inputValue))&&(Be(U()),Le(t,e))}(t,n),Nn(n),Qn(b,n,r),to(e,n),setTimeout((function(){e.container.scrollTop=0}))}))},Xn=function(t,e){var n=function(t){var e="string"==typeof t.template?document.querySelector(t.template):t.template;if(!e)return{};var n=e.content;return Rn(n),Object.assign(jn(n),Mn(n),In(n),Hn(n),Dn(n),qn(n),Vn(n,Ln))}(t),o=Object.assign({},Ge,e,n,t);return o.showClass=Object.assign({},Ge.showClass,o.showClass),o.hideClass=Object.assign({},Ge.hideClass,o.hideClass),!1===o.animation&&(o.showClass={backdrop:"swal2-noanimation"},o.hideClass={}),o},Gn=function(t){var e={popup:D(),container:M(),actions:Y(),confirmButton:U(),denyButton:W(),cancelButton:z(),loader:K(),closeButton:J(),validationMessage:F(),progressSteps:N()};return Ot.domCache.set(t,e),e},Qn=function(t,e,n){var o=$();dt(o),e.timer&&(t.timeout=new On((function(){n("timer"),delete t.timeout}),e.timer),e.timerProgressBar&&(lt(o),nt(o,e,"timerProgressBar"),setTimeout((function(){t.timeout&&t.timeout.running&&bt(e.timer)}))))},to=function(t,e){e.toast||(S(e.allowEnterKey)?eo(t,e)||Qt(-1,1):no())},eo=function(t,e){return e.focusDeny&&ht(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&ht(t.cancelButton)?(t.cancelButton.focus(),!0):!(!e.focusConfirm||!ht(t.confirmButton))&&(t.confirmButton.focus(),!0)},no=function(){document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};if("undefined"!=typeof window&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var oo=new Date,io=localStorage.getItem("swal-initiation");io?(oo.getTime()-Date.parse(io))/864e5>3&&setTimeout((function(){document.body.style.pointerEvents="none";var t=document.createElement("audio");t.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",t.loop=!0,document.body.appendChild(t),setTimeout((function(){t.play().catch((function(){}))}),2500)}),500):localStorage.setItem("swal-initiation","".concat(oo))}$n.prototype.disableButtons=Ye,$n.prototype.enableButtons=Ke,$n.prototype.getInput=Ue,$n.prototype.disableInput=$e,$n.prototype.enableInput=Ze,$n.prototype.hideLoading=Ne,$n.prototype.disableLoading=Ne,$n.prototype.showValidationMessage=Je,$n.prototype.resetValidationMessage=Xe,$n.prototype.close=ge,$n.prototype.closePopup=ge,$n.prototype.closeModal=ge,$n.prototype.closeToast=ge,$n.prototype.rejectPromise=ye,$n.prototype.update=sn,$n.prototype._destroy=dn,Object.assign($n,Sn),Object.keys(hn).forEach((function(t){$n[t]=function(){var e;return Tn&&Tn[t]?(e=Tn)[t].apply(e,arguments):null}})),$n.DismissReason=Xt,$n.version="11.10.1";var ro=$n;return ro.default=ro,ro})),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}");
'use strict';
(function()
{
    const userObj = document.getElementById('user_info');
    let dropdown;

    userObj.onclick = function(e)
    {
        e.preventDefault();
        const html = `<div class="dropdown-menu-user shadow overflow-hidden p-0">
            <p class="p-0 text-center bg-warning bg-opacity-50">
                <span class="fw-semibold">Hello!</span>
                <span class="fs-5">Peter</span>
            </p>
            <ul class="list-unstyled m-0 list-menu-option p-0">
                <li class="product-booked">
                    <span class="pe-2">
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                    </span>
                    <span>Product Booked</span>
                </li>
                <li class="logout">
                    <span class="pe-2 fs-5">
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </span>
                    <span>Logout</span>
                </li>
            </ul>
        </div>`;
        dropdown = userObj.querySelector('.dropdown-menu-user');
        if(dropdown) dropdown = dropdown;
        else
            userObj.innerHTML += html;

        if(dropdown)
        {
            const logoutObj = dropdown.querySelector('.logout');
            if(logoutObj)
            {
                logoutObj.onclick = function(e)
                {
                    e.preventDefault();
                    Swal.fire({
                        title: "Do you want to log out?",
                        icon: 'question',
                        width: 400,
                        showCancelButton: true,
                        confirmButtonColor: "#dc3545",
                        confirmButtonText: "Logout",
                        denyButtonText: "Cancel"
                    })
                    .then(function(result)
                    {
                        if(result.isConfirmed)
                        {
                            Swal.fire({
                                title: "Logout Successfully!",
                                icon: "success",
                                width: 400
                            });
                        }
                    });
                }
            }

            const productBookedObj = dropdown.querySelector('.product-booked');
            if(productBookedObj)
            {
                productBookedObj.onclick = function(e)
                {
                    e.preventDefault();
                    offCanvas();
                }
            }
        }
    }

    document.onmouseup = function(e)
    {
        e.preventDefault();
        dropdown = userObj.querySelector('.dropdown-menu-user');
        if(dropdown && !dropdown.contains(e.target))
        {
            dropdown.remove();
        }
    }
})();
