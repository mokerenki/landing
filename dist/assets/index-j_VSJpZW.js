function _p(i,g){for(var d=0;d<g.length;d++){const j=g[d];if(typeof j!="string"&&!Array.isArray(j)){for(const w in j)if(w!=="default"&&!(w in i)){const y=Object.getOwnPropertyDescriptor(j,w);y&&Object.defineProperty(i,w,y.get?y:{enumerable:!0,get:()=>j[w]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))j(w);new MutationObserver(w=>{for(const y of w)if(y.type==="childList")for(const L of y.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&j(L)}).observe(document,{childList:!0,subtree:!0});function d(w){const y={};return w.integrity&&(y.integrity=w.integrity),w.referrerPolicy&&(y.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?y.credentials="include":w.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function j(w){if(w.ep)return;w.ep=!0;const y=d(w);fetch(w.href,y)}})();function jd(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Mo={exports:{}},br={},Lo={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc;function Rp(){if(Yc)return q;Yc=1;var i=Symbol.for("react.element"),g=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),L=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),D=Symbol.iterator;function U(h){return h===null||typeof h!="object"?null:(h=D&&h[D]||h["@@iterator"],typeof h=="function"?h:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,Q={};function K(h,N,G){this.props=h,this.context=N,this.refs=Q,this.updater=G||W}K.prototype.isReactComponent={},K.prototype.setState=function(h,N){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,N,"setState")},K.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function be(){}be.prototype=K.prototype;function ht(h,N,G){this.props=h,this.context=N,this.refs=Q,this.updater=G||W}var rt=ht.prototype=new be;rt.constructor=ht,se(rt,K.prototype),rt.isPureReactComponent=!0;var Ee=Array.isArray,st=Object.prototype.hasOwnProperty,ze={current:null},De={key:!0,ref:!0,__self:!0,__source:!0};function Ke(h,N,G){var Y,J={},Z=null,ae=null;if(N!=null)for(Y in N.ref!==void 0&&(ae=N.ref),N.key!==void 0&&(Z=""+N.key),N)st.call(N,Y)&&!De.hasOwnProperty(Y)&&(J[Y]=N[Y]);var te=arguments.length-2;if(te===1)J.children=G;else if(1<te){for(var ce=Array(te),Ve=0;Ve<te;Ve++)ce[Ve]=arguments[Ve+2];J.children=ce}if(h&&h.defaultProps)for(Y in te=h.defaultProps,te)J[Y]===void 0&&(J[Y]=te[Y]);return{$$typeof:i,type:h,key:Z,ref:ae,props:J,_owner:ze.current}}function Ft(h,N){return{$$typeof:i,type:h.type,key:N,ref:h.ref,props:h.props,_owner:h._owner}}function bt(h){return typeof h=="object"&&h!==null&&h.$$typeof===i}function Kt(h){var N={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(G){return N[G]})}var ft=/\/+/g;function $e(h,N){return typeof h=="object"&&h!==null&&h.key!=null?Kt(""+h.key):N.toString(36)}function at(h,N,G,Y,J){var Z=typeof h;(Z==="undefined"||Z==="boolean")&&(h=null);var ae=!1;if(h===null)ae=!0;else switch(Z){case"string":case"number":ae=!0;break;case"object":switch(h.$$typeof){case i:case g:ae=!0}}if(ae)return ae=h,J=J(ae),h=Y===""?"."+$e(ae,0):Y,Ee(J)?(G="",h!=null&&(G=h.replace(ft,"$&/")+"/"),at(J,N,G,"",function(Ve){return Ve})):J!=null&&(bt(J)&&(J=Ft(J,G+(!J.key||ae&&ae.key===J.key?"":(""+J.key).replace(ft,"$&/")+"/")+h)),N.push(J)),1;if(ae=0,Y=Y===""?".":Y+":",Ee(h))for(var te=0;te<h.length;te++){Z=h[te];var ce=Y+$e(Z,te);ae+=at(Z,N,G,ce,J)}else if(ce=U(h),typeof ce=="function")for(h=ce.call(h),te=0;!(Z=h.next()).done;)Z=Z.value,ce=Y+$e(Z,te++),ae+=at(Z,N,G,ce,J);else if(Z==="object")throw N=String(h),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ae}function mt(h,N,G){if(h==null)return h;var Y=[],J=0;return at(h,Y,"","",function(Z){return N.call(G,Z,J++)}),Y}function Me(h){if(h._status===-1){var N=h._result;N=N(),N.then(function(G){(h._status===0||h._status===-1)&&(h._status=1,h._result=G)},function(G){(h._status===0||h._status===-1)&&(h._status=2,h._result=G)}),h._status===-1&&(h._status=0,h._result=N)}if(h._status===1)return h._result.default;throw h._result}var fe={current:null},A={transition:null},H={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:A,ReactCurrentOwner:ze};function T(){throw Error("act(...) is not supported in production builds of React.")}return q.Children={map:mt,forEach:function(h,N,G){mt(h,function(){N.apply(this,arguments)},G)},count:function(h){var N=0;return mt(h,function(){N++}),N},toArray:function(h){return mt(h,function(N){return N})||[]},only:function(h){if(!bt(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},q.Component=K,q.Fragment=d,q.Profiler=w,q.PureComponent=ht,q.StrictMode=j,q.Suspense=E,q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,q.act=T,q.cloneElement=function(h,N,G){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var Y=se({},h.props),J=h.key,Z=h.ref,ae=h._owner;if(N!=null){if(N.ref!==void 0&&(Z=N.ref,ae=ze.current),N.key!==void 0&&(J=""+N.key),h.type&&h.type.defaultProps)var te=h.type.defaultProps;for(ce in N)st.call(N,ce)&&!De.hasOwnProperty(ce)&&(Y[ce]=N[ce]===void 0&&te!==void 0?te[ce]:N[ce])}var ce=arguments.length-2;if(ce===1)Y.children=G;else if(1<ce){te=Array(ce);for(var Ve=0;Ve<ce;Ve++)te[Ve]=arguments[Ve+2];Y.children=te}return{$$typeof:i,type:h.type,key:J,ref:Z,props:Y,_owner:ae}},q.createContext=function(h){return h={$$typeof:L,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:y,_context:h},h.Consumer=h},q.createElement=Ke,q.createFactory=function(h){var N=Ke.bind(null,h);return N.type=h,N},q.createRef=function(){return{current:null}},q.forwardRef=function(h){return{$$typeof:v,render:h}},q.isValidElement=bt,q.lazy=function(h){return{$$typeof:V,_payload:{_status:-1,_result:h},_init:Me}},q.memo=function(h,N){return{$$typeof:M,type:h,compare:N===void 0?null:N}},q.startTransition=function(h){var N=A.transition;A.transition={};try{h()}finally{A.transition=N}},q.unstable_act=T,q.useCallback=function(h,N){return fe.current.useCallback(h,N)},q.useContext=function(h){return fe.current.useContext(h)},q.useDebugValue=function(){},q.useDeferredValue=function(h){return fe.current.useDeferredValue(h)},q.useEffect=function(h,N){return fe.current.useEffect(h,N)},q.useId=function(){return fe.current.useId()},q.useImperativeHandle=function(h,N,G){return fe.current.useImperativeHandle(h,N,G)},q.useInsertionEffect=function(h,N){return fe.current.useInsertionEffect(h,N)},q.useLayoutEffect=function(h,N){return fe.current.useLayoutEffect(h,N)},q.useMemo=function(h,N){return fe.current.useMemo(h,N)},q.useReducer=function(h,N,G){return fe.current.useReducer(h,N,G)},q.useRef=function(h){return fe.current.useRef(h)},q.useState=function(h){return fe.current.useState(h)},q.useSyncExternalStore=function(h,N,G){return fe.current.useSyncExternalStore(h,N,G)},q.useTransition=function(){return fe.current.useTransition()},q.version="18.3.1",q}var Qc;function Bs(){return Qc||(Qc=1,Lo.exports=Rp()),Lo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc;function Dp(){if(Kc)return br;Kc=1;var i=Bs(),g=Symbol.for("react.element"),d=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,w=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function L(v,E,M){var V,D={},U=null,W=null;M!==void 0&&(U=""+M),E.key!==void 0&&(U=""+E.key),E.ref!==void 0&&(W=E.ref);for(V in E)j.call(E,V)&&!y.hasOwnProperty(V)&&(D[V]=E[V]);if(v&&v.defaultProps)for(V in E=v.defaultProps,E)D[V]===void 0&&(D[V]=E[V]);return{$$typeof:g,type:v,key:U,ref:W,props:D,_owner:w.current}}return br.Fragment=d,br.jsx=L,br.jsxs=L,br}var Xc;function Mp(){return Xc||(Xc=1,Mo.exports=Dp()),Mo.exports}var r=Mp(),R=Bs();const Nd=jd(R),Lp=_p({__proto__:null,default:Nd},[R]);var Rs={},Oo={exports:{}},We={},Bo={exports:{}},Ho={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc;function Op(){return Jc||(Jc=1,(function(i){function g(A,H){var T=A.length;A.push(H);e:for(;0<T;){var h=T-1>>>1,N=A[h];if(0<w(N,H))A[h]=H,A[T]=N,T=h;else break e}}function d(A){return A.length===0?null:A[0]}function j(A){if(A.length===0)return null;var H=A[0],T=A.pop();if(T!==H){A[0]=T;e:for(var h=0,N=A.length,G=N>>>1;h<G;){var Y=2*(h+1)-1,J=A[Y],Z=Y+1,ae=A[Z];if(0>w(J,T))Z<N&&0>w(ae,J)?(A[h]=ae,A[Z]=T,h=Z):(A[h]=J,A[Y]=T,h=Y);else if(Z<N&&0>w(ae,T))A[h]=ae,A[Z]=T,h=Z;else break e}}return H}function w(A,H){var T=A.sortIndex-H.sortIndex;return T!==0?T:A.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var y=performance;i.unstable_now=function(){return y.now()}}else{var L=Date,v=L.now();i.unstable_now=function(){return L.now()-v}}var E=[],M=[],V=1,D=null,U=3,W=!1,se=!1,Q=!1,K=typeof setTimeout=="function"?setTimeout:null,be=typeof clearTimeout=="function"?clearTimeout:null,ht=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function rt(A){for(var H=d(M);H!==null;){if(H.callback===null)j(M);else if(H.startTime<=A)j(M),H.sortIndex=H.expirationTime,g(E,H);else break;H=d(M)}}function Ee(A){if(Q=!1,rt(A),!se)if(d(E)!==null)se=!0,Me(st);else{var H=d(M);H!==null&&fe(Ee,H.startTime-A)}}function st(A,H){se=!1,Q&&(Q=!1,be(Ke),Ke=-1),W=!0;var T=U;try{for(rt(H),D=d(E);D!==null&&(!(D.expirationTime>H)||A&&!Kt());){var h=D.callback;if(typeof h=="function"){D.callback=null,U=D.priorityLevel;var N=h(D.expirationTime<=H);H=i.unstable_now(),typeof N=="function"?D.callback=N:D===d(E)&&j(E),rt(H)}else j(E);D=d(E)}if(D!==null)var G=!0;else{var Y=d(M);Y!==null&&fe(Ee,Y.startTime-H),G=!1}return G}finally{D=null,U=T,W=!1}}var ze=!1,De=null,Ke=-1,Ft=5,bt=-1;function Kt(){return!(i.unstable_now()-bt<Ft)}function ft(){if(De!==null){var A=i.unstable_now();bt=A;var H=!0;try{H=De(!0,A)}finally{H?$e():(ze=!1,De=null)}}else ze=!1}var $e;if(typeof ht=="function")$e=function(){ht(ft)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,mt=at.port2;at.port1.onmessage=ft,$e=function(){mt.postMessage(null)}}else $e=function(){K(ft,0)};function Me(A){De=A,ze||(ze=!0,$e())}function fe(A,H){Ke=K(function(){A(i.unstable_now())},H)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(A){A.callback=null},i.unstable_continueExecution=function(){se||W||(se=!0,Me(st))},i.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ft=0<A?Math.floor(1e3/A):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_getFirstCallbackNode=function(){return d(E)},i.unstable_next=function(A){switch(U){case 1:case 2:case 3:var H=3;break;default:H=U}var T=U;U=H;try{return A()}finally{U=T}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(A,H){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var T=U;U=A;try{return H()}finally{U=T}},i.unstable_scheduleCallback=function(A,H,T){var h=i.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?h+T:h):T=h,A){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=T+N,A={id:V++,callback:H,priorityLevel:A,startTime:T,expirationTime:N,sortIndex:-1},T>h?(A.sortIndex=T,g(M,A),d(E)===null&&A===d(M)&&(Q?(be(Ke),Ke=-1):Q=!0,fe(Ee,T-h))):(A.sortIndex=N,g(E,A),se||W||(se=!0,Me(st))),A},i.unstable_shouldYield=Kt,i.unstable_wrapCallback=function(A){var H=U;return function(){var T=U;U=H;try{return A.apply(this,arguments)}finally{U=T}}}})(Ho)),Ho}var Zc;function Bp(){return Zc||(Zc=1,Bo.exports=Op()),Bo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function Hp(){if(ed)return We;ed=1;var i=Bs(),g=Bp();function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j=new Set,w={};function y(e,t){L(e,t),L(e+"Capture",t)}function L(e,t){for(w[e]=t,e=0;e<t.length;e++)j.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E=Object.prototype.hasOwnProperty,M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V={},D={};function U(e){return E.call(D,e)?!0:E.call(V,e)?!1:M.test(e)?D[e]=!0:(V[e]=!0,!1)}function W(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function se(e,t,n,s){if(t===null||typeof t>"u"||W(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Q(e,t,n,s,a,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K[e]=new Q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];K[t]=new Q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){K[e]=new Q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K[e]=new Q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K[e]=new Q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){K[e]=new Q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){K[e]=new Q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){K[e]=new Q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){K[e]=new Q(e,5,!1,e.toLowerCase(),null,!1,!1)});var be=/[\-:]([a-z])/g;function ht(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(be,ht);K[t]=new Q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(be,ht);K[t]=new Q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(be,ht);K[t]=new Q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){K[e]=new Q(e,1,!1,e.toLowerCase(),null,!1,!1)}),K.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){K[e]=new Q(e,1,!1,e.toLowerCase(),null,!0,!0)});function rt(e,t,n,s){var a=K.hasOwnProperty(t)?K[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(se(t,n,a,s)&&(n=null),s||a===null?U(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,s=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var Ee=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,st=Symbol.for("react.element"),ze=Symbol.for("react.portal"),De=Symbol.for("react.fragment"),Ke=Symbol.for("react.strict_mode"),Ft=Symbol.for("react.profiler"),bt=Symbol.for("react.provider"),Kt=Symbol.for("react.context"),ft=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),A=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var T=Object.assign,h;function N(e){if(h===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);h=t&&t[1]||""}return`
`+h+e}var G=!1;function Y(e,t){if(!e||G)return"";G=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var s=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){s=x}e.call(t.prototype)}else{try{throw Error()}catch(x){s=x}e()}}catch(x){if(x&&s&&typeof x.stack=="string"){for(var a=x.stack.split(`
`),o=s.stack.split(`
`),l=a.length-1,c=o.length-1;1<=l&&0<=c&&a[l]!==o[c];)c--;for(;1<=l&&0<=c;l--,c--)if(a[l]!==o[c]){if(l!==1||c!==1)do if(l--,c--,0>c||a[l]!==o[c]){var u=`
`+a[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=c);break}}}finally{G=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function J(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=Y(e.type,!1),e;case 11:return e=Y(e.type.render,!1),e;case 1:return e=Y(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case De:return"Fragment";case ze:return"Portal";case Ft:return"Profiler";case Ke:return"StrictMode";case $e:return"Suspense";case at:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kt:return(e.displayName||"Context")+".Consumer";case bt:return(e._context.displayName||"Context")+".Provider";case ft:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mt:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(t);case 8:return t===Ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ve(e){var t=ce(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){s=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sr(e){e._valueTracker||(e._valueTracker=Ve(e))}function el(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=ce(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Cr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ws(e,t){var n=t.checked;return T({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tl(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=te(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nl(e,t){t=t.checked,t!=null&&rt(e,"checked",t,!1)}function $s(e,t){nl(e,t);var n=te(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vs(e,t.type,te(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vs(e,t,n){(t!=="number"||Cr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function un(e,t,n,s){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&s&&(e[n].defaultSelected=!0)}else{for(n=""+te(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Gs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(d(91));return T({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(d(92));if(Dn(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:te(n)}}function al(e,t){var n=te(t.value),s=te(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function ol(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ll(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ll(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,il=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ld=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Ld.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function cl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function dl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,a=cl(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,a):e[n]=a}}var Od=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ys(e,t){if(t){if(Od[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(d(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(t.style!=null&&typeof t.style!="object")throw Error(d(62))}}function Qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ks=null;function Xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Js=null,pn=null,hn=null;function ul(e){if(e=or(e)){if(typeof Js!="function")throw Error(d(280));var t=e.stateNode;t&&(t=Kr(t),Js(e.stateNode,e.type,t))}}function pl(e){pn?hn?hn.push(e):hn=[e]:pn=e}function hl(){if(pn){var e=pn,t=hn;if(hn=pn=null,ul(e),t)for(e=0;e<t.length;e++)ul(t[e])}}function fl(e,t){return e(t)}function ml(){}var Zs=!1;function xl(e,t,n){if(Zs)return e(t,n);Zs=!0;try{return fl(e,t,n)}finally{Zs=!1,(pn!==null||hn!==null)&&(ml(),hl())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var s=Kr(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var ea=!1;if(v)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){ea=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{ea=!1}function Bd(e,t,n,s,a,o,l,c,u){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(k){this.onError(k)}}var Hn=!1,Ar=null,Pr=!1,ta=null,Hd={onError:function(e){Hn=!0,Ar=e}};function Ud(e,t,n,s,a,o,l,c,u){Hn=!1,Ar=null,Bd.apply(Hd,arguments)}function Wd(e,t,n,s,a,o,l,c,u){if(Ud.apply(this,arguments),Hn){if(Hn){var x=Ar;Hn=!1,Ar=null}else throw Error(d(198));Pr||(Pr=!0,ta=x)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vl(e){if(Xt(e)!==e)throw Error(d(188))}function $d(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,s=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){n=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return vl(a),e;if(o===s)return vl(a),t;o=o.sibling}throw Error(d(188))}if(n.return!==s.return)n=a,s=o;else{for(var l=!1,c=a.child;c;){if(c===n){l=!0,n=a,s=o;break}if(c===s){l=!0,s=a,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,s=a;break}if(c===s){l=!0,s=o,n=a;break}c=c.sibling}if(!l)throw Error(d(189))}}if(n.alternate!==s)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function yl(e){return e=$d(e),e!==null?wl(e):null}function wl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wl(e);if(t!==null)return t;e=e.sibling}return null}var bl=g.unstable_scheduleCallback,jl=g.unstable_cancelCallback,Vd=g.unstable_shouldYield,Gd=g.unstable_requestPaint,xe=g.unstable_now,qd=g.unstable_getCurrentPriorityLevel,na=g.unstable_ImmediatePriority,Nl=g.unstable_UserBlockingPriority,Fr=g.unstable_NormalPriority,Yd=g.unstable_LowPriority,kl=g.unstable_IdlePriority,Tr=null,xt=null;function Qd(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Tr,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Jd,Kd=Math.log,Xd=Math.LN2;function Jd(e){return e>>>=0,e===0?32:31-(Kd(e)/Xd|0)|0}var Ir=64,zr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~a;c!==0?s=Un(c):(o&=l,o!==0&&(s=Un(o)))}else l=n&~a,l!==0?s=Un(l):o!==0&&(s=Un(o));if(s===0)return 0;if(t!==0&&t!==s&&(t&a)===0&&(a=s&-s,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if((s&4)!==0&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-ot(t),a=1<<n,s|=e[n],t&=~a;return s}function Zd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eu(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-ot(o),c=1<<l,u=a[l];u===-1?((c&n)===0||(c&s)!==0)&&(a[l]=Zd(c,t)):u<=t&&(e.expiredLanes|=c),o&=~c}}function ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sl(){var e=Ir;return Ir<<=1,(Ir&4194240)===0&&(Ir=64),e}function sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function tu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),o=1<<a;t[a]=0,s[a]=-1,e[a]=-1,n&=~o}}function aa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-ot(n),a=1<<s;a&t|e[s]&t&&(e[s]|=t),n&=~a}}var ne=0;function Cl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var El,oa,Al,Pl,Fl,la=!1,Rr=[],Tt=null,It=null,zt=null,$n=new Map,Vn=new Map,_t=[],nu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tl(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function Gn(e,t,n,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},t!==null&&(t=or(t),t!==null&&oa(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ru(e,t,n,s,a){switch(t){case"focusin":return Tt=Gn(Tt,e,t,n,s,a),!0;case"dragenter":return It=Gn(It,e,t,n,s,a),!0;case"mouseover":return zt=Gn(zt,e,t,n,s,a),!0;case"pointerover":var o=a.pointerId;return $n.set(o,Gn($n.get(o)||null,e,t,n,s,a)),!0;case"gotpointercapture":return o=a.pointerId,Vn.set(o,Gn(Vn.get(o)||null,e,t,n,s,a)),!0}return!1}function Il(e){var t=Jt(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=gl(n),t!==null){e.blockedOn=t,Fl(e.priority,function(){Al(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Ks=s,n.target.dispatchEvent(s),Ks=null}else return t=or(n),t!==null&&oa(t),e.blockedOn=n,!1;t.shift()}return!0}function zl(e,t,n){Dr(e)&&n.delete(t)}function su(){la=!1,Tt!==null&&Dr(Tt)&&(Tt=null),It!==null&&Dr(It)&&(It=null),zt!==null&&Dr(zt)&&(zt=null),$n.forEach(zl),Vn.forEach(zl)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,su)))}function Yn(e){function t(a){return qn(a,e)}if(0<Rr.length){qn(Rr[0],e);for(var n=1;n<Rr.length;n++){var s=Rr[n];s.blockedOn===e&&(s.blockedOn=null)}}for(Tt!==null&&qn(Tt,e),It!==null&&qn(It,e),zt!==null&&qn(zt,e),$n.forEach(t),Vn.forEach(t),n=0;n<_t.length;n++)s=_t[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Il(n),n.blockedOn===null&&_t.shift()}var fn=Ee.ReactCurrentBatchConfig,Mr=!0;function au(e,t,n,s){var a=ne,o=fn.transition;fn.transition=null;try{ne=1,ia(e,t,n,s)}finally{ne=a,fn.transition=o}}function ou(e,t,n,s){var a=ne,o=fn.transition;fn.transition=null;try{ne=4,ia(e,t,n,s)}finally{ne=a,fn.transition=o}}function ia(e,t,n,s){if(Mr){var a=ca(e,t,n,s);if(a===null)Ca(e,t,s,Lr,n),Tl(e,s);else if(ru(a,e,t,n,s))s.stopPropagation();else if(Tl(e,s),t&4&&-1<nu.indexOf(e)){for(;a!==null;){var o=or(a);if(o!==null&&El(o),o=ca(e,t,n,s),o===null&&Ca(e,t,s,Lr,n),o===a)break;a=o}a!==null&&s.stopPropagation()}else Ca(e,t,s,null,n)}}var Lr=null;function ca(e,t,n,s){if(Lr=null,e=Xs(s),e=Jt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lr=e,null}function _l(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qd()){case na:return 1;case Nl:return 4;case Fr:case Yd:return 16;case kl:return 536870912;default:return 16}default:return 16}}var Rt=null,da=null,Or=null;function Rl(){if(Or)return Or;var e,t=da,n=t.length,s,a="value"in Rt?Rt.value:Rt.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(s=1;s<=l&&t[n-s]===a[o-s];s++);return Or=a.slice(e,1<s?1-s:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function Dl(){return!1}function Ge(e){function t(n,s,a,o,l){this._reactName=n,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Hr:Dl,this.isPropagationStopped=Dl,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=Ge(mn),Qn=T({},mn,{view:0,detail:0}),lu=Ge(Qn),pa,ha,Kn,Ur=T({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(pa=e.screenX-Kn.screenX,ha=e.screenY-Kn.screenY):ha=pa=0,Kn=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:ha}}),Ml=Ge(Ur),iu=T({},Ur,{dataTransfer:0}),cu=Ge(iu),du=T({},Qn,{relatedTarget:0}),fa=Ge(du),uu=T({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),pu=Ge(uu),hu=T({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fu=Ge(hu),mu=T({},mn,{data:0}),Ll=Ge(mu),xu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vu[e])?!!t[e]:!1}function ma(){return yu}var wu=T({},Qn,{key:function(e){if(e.key){var t=xu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ma,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bu=Ge(wu),ju=T({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ol=Ge(ju),Nu=T({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ma}),ku=Ge(Nu),Su=T({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cu=Ge(Su),Eu=T({},Ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Au=Ge(Eu),Pu=[9,13,27,32],xa=v&&"CompositionEvent"in window,Xn=null;v&&"documentMode"in document&&(Xn=document.documentMode);var Fu=v&&"TextEvent"in window&&!Xn,Bl=v&&(!xa||Xn&&8<Xn&&11>=Xn),Hl=" ",Ul=!1;function Wl(e,t){switch(e){case"keyup":return Pu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $l(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Tu(e,t){switch(e){case"compositionend":return $l(t);case"keypress":return t.which!==32?null:(Ul=!0,Hl);case"textInput":return e=t.data,e===Hl&&Ul?null:e;default:return null}}function Iu(e,t){if(xn)return e==="compositionend"||!xa&&Wl(e,t)?(e=Rl(),Or=da=Rt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bl&&t.locale!=="ko"?null:t.data;default:return null}}var zu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zu[e.type]:t==="textarea"}function Gl(e,t,n,s){pl(s),t=qr(t,"onChange"),0<t.length&&(n=new ua("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Jn=null,Zn=null;function _u(e){di(e,0)}function Wr(e){var t=bn(e);if(el(t))return e}function Ru(e,t){if(e==="change")return t}var ql=!1;if(v){var ga;if(v){var va="oninput"in document;if(!va){var Yl=document.createElement("div");Yl.setAttribute("oninput","return;"),va=typeof Yl.oninput=="function"}ga=va}else ga=!1;ql=ga&&(!document.documentMode||9<document.documentMode)}function Ql(){Jn&&(Jn.detachEvent("onpropertychange",Kl),Zn=Jn=null)}function Kl(e){if(e.propertyName==="value"&&Wr(Zn)){var t=[];Gl(t,Zn,e,Xs(e)),xl(_u,t)}}function Du(e,t,n){e==="focusin"?(Ql(),Jn=t,Zn=n,Jn.attachEvent("onpropertychange",Kl)):e==="focusout"&&Ql()}function Mu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wr(Zn)}function Lu(e,t){if(e==="click")return Wr(t)}function Ou(e,t){if(e==="input"||e==="change")return Wr(t)}function Bu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Bu;function er(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var a=n[s];if(!E.call(t,a)||!lt(e[a],t[a]))return!1}return!0}function Xl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jl(e,t){var n=Xl(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xl(n)}}function Zl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ei(){for(var e=window,t=Cr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cr(e.document)}return t}function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hu(e){var t=ei(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zl(n.ownerDocument.documentElement,n)){if(s!==null&&ya(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=Jl(n,o);var l=Jl(n,s);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uu=v&&"documentMode"in document&&11>=document.documentMode,gn=null,wa=null,tr=null,ba=!1;function ti(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ba||gn==null||gn!==Cr(s)||(s=gn,"selectionStart"in s&&ya(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),tr&&er(tr,s)||(tr=s,s=qr(wa,"onSelect"),0<s.length&&(t=new ua("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=gn)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},ja={},ni={};v&&(ni=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Vr(e){if(ja[e])return ja[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ni)return ja[e]=t[n];return e}var ri=Vr("animationend"),si=Vr("animationiteration"),ai=Vr("animationstart"),oi=Vr("transitionend"),li=new Map,ii="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){li.set(e,t),y(t,[e])}for(var Na=0;Na<ii.length;Na++){var ka=ii[Na],Wu=ka.toLowerCase(),$u=ka[0].toUpperCase()+ka.slice(1);Dt(Wu,"on"+$u)}Dt(ri,"onAnimationEnd"),Dt(si,"onAnimationIteration"),Dt(ai,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(oi,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),y("onBeforeInput",["compositionend","keypress","textInput","paste"]),y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vu=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function ci(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,Wd(s,t,void 0,e),e.currentTarget=null}function di(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],a=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var l=s.length-1;0<=l;l--){var c=s[l],u=c.instance,x=c.currentTarget;if(c=c.listener,u!==o&&a.isPropagationStopped())break e;ci(a,c,x),o=u}else for(l=0;l<s.length;l++){if(c=s[l],u=c.instance,x=c.currentTarget,c=c.listener,u!==o&&a.isPropagationStopped())break e;ci(a,c,x),o=u}}}if(Pr)throw e=ta,Pr=!1,ta=null,e}function le(e,t){var n=t[Ia];n===void 0&&(n=t[Ia]=new Set);var s=e+"__bubble";n.has(s)||(ui(t,e,2,!1),n.add(s))}function Sa(e,t,n){var s=0;t&&(s|=4),ui(n,e,s,t)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Gr]){e[Gr]=!0,j.forEach(function(n){n!=="selectionchange"&&(Vu.has(n)||Sa(n,!1,e),Sa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gr]||(t[Gr]=!0,Sa("selectionchange",!1,t))}}function ui(e,t,n,s){switch(_l(t)){case 1:var a=au;break;case 4:a=ou;break;default:a=ia}n=a.bind(null,t,n,e),a=void 0,!ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ca(e,t,n,s,a){var o=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var c=s.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(l===4)for(l=s.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;l=l.return}for(;c!==null;){if(l=Jt(c),l===null)return;if(u=l.tag,u===5||u===6){s=o=l;continue e}c=c.parentNode}}s=s.return}xl(function(){var x=o,k=Xs(n),S=[];e:{var b=li.get(e);if(b!==void 0){var P=ua,I=e;switch(e){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":P=bu;break;case"focusin":I="focus",P=fa;break;case"focusout":I="blur",P=fa;break;case"beforeblur":case"afterblur":P=fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Ml;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=ku;break;case ri:case si:case ai:P=pu;break;case oi:P=Cu;break;case"scroll":P=lu;break;case"wheel":P=Au;break;case"copy":case"cut":case"paste":P=fu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Ol}var z=(t&4)!==0,ge=!z&&e==="scroll",f=z?b!==null?b+"Capture":null:b;z=[];for(var p=x,m;p!==null;){m=p;var C=m.stateNode;if(m.tag===5&&C!==null&&(m=C,f!==null&&(C=On(p,f),C!=null&&z.push(sr(p,C,m)))),ge)break;p=p.return}0<z.length&&(b=new P(b,I,null,n,k),S.push({event:b,listeners:z}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",b&&n!==Ks&&(I=n.relatedTarget||n.fromElement)&&(Jt(I)||I[jt]))break e;if((P||b)&&(b=k.window===k?k:(b=k.ownerDocument)?b.defaultView||b.parentWindow:window,P?(I=n.relatedTarget||n.toElement,P=x,I=I?Jt(I):null,I!==null&&(ge=Xt(I),I!==ge||I.tag!==5&&I.tag!==6)&&(I=null)):(P=null,I=x),P!==I)){if(z=Ml,C="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(z=Ol,C="onPointerLeave",f="onPointerEnter",p="pointer"),ge=P==null?b:bn(P),m=I==null?b:bn(I),b=new z(C,p+"leave",P,n,k),b.target=ge,b.relatedTarget=m,C=null,Jt(k)===x&&(z=new z(f,p+"enter",I,n,k),z.target=m,z.relatedTarget=ge,C=z),ge=C,P&&I)t:{for(z=P,f=I,p=0,m=z;m;m=yn(m))p++;for(m=0,C=f;C;C=yn(C))m++;for(;0<p-m;)z=yn(z),p--;for(;0<m-p;)f=yn(f),m--;for(;p--;){if(z===f||f!==null&&z===f.alternate)break t;z=yn(z),f=yn(f)}z=null}else z=null;P!==null&&pi(S,b,P,z,!1),I!==null&&ge!==null&&pi(S,ge,I,z,!0)}}e:{if(b=x?bn(x):window,P=b.nodeName&&b.nodeName.toLowerCase(),P==="select"||P==="input"&&b.type==="file")var _=Ru;else if(Vl(b))if(ql)_=Ou;else{_=Mu;var O=Du}else(P=b.nodeName)&&P.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(_=Lu);if(_&&(_=_(e,x))){Gl(S,_,n,k);break e}O&&O(e,b,x),e==="focusout"&&(O=b._wrapperState)&&O.controlled&&b.type==="number"&&Vs(b,"number",b.value)}switch(O=x?bn(x):window,e){case"focusin":(Vl(O)||O.contentEditable==="true")&&(gn=O,wa=x,tr=null);break;case"focusout":tr=wa=gn=null;break;case"mousedown":ba=!0;break;case"contextmenu":case"mouseup":case"dragend":ba=!1,ti(S,n,k);break;case"selectionchange":if(Uu)break;case"keydown":case"keyup":ti(S,n,k)}var B;if(xa)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else xn?Wl(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Bl&&n.locale!=="ko"&&(xn||$!=="onCompositionStart"?$==="onCompositionEnd"&&xn&&(B=Rl()):(Rt=k,da="value"in Rt?Rt.value:Rt.textContent,xn=!0)),O=qr(x,$),0<O.length&&($=new Ll($,e,null,n,k),S.push({event:$,listeners:O}),B?$.data=B:(B=$l(n),B!==null&&($.data=B)))),(B=Fu?Tu(e,n):Iu(e,n))&&(x=qr(x,"onBeforeInput"),0<x.length&&(k=new Ll("onBeforeInput","beforeinput",null,n,k),S.push({event:k,listeners:x}),k.data=B))}di(S,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=On(e,n),o!=null&&s.unshift(sr(e,o,a)),o=On(e,t),o!=null&&s.push(sr(e,o,a))),e=e.return}return s}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pi(e,t,n,s,a){for(var o=t._reactName,l=[];n!==null&&n!==s;){var c=n,u=c.alternate,x=c.stateNode;if(u!==null&&u===s)break;c.tag===5&&x!==null&&(c=x,a?(u=On(n,o),u!=null&&l.unshift(sr(n,u,c))):a||(u=On(n,o),u!=null&&l.push(sr(n,u,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Gu=/\r\n?/g,qu=/\u0000|\uFFFD/g;function hi(e){return(typeof e=="string"?e:""+e).replace(Gu,`
`).replace(qu,"")}function Yr(e,t,n){if(t=hi(t),hi(e)!==t&&n)throw Error(d(425))}function Qr(){}var Ea=null,Aa=null;function Pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,Yu=typeof clearTimeout=="function"?clearTimeout:void 0,fi=typeof Promise=="function"?Promise:void 0,Qu=typeof queueMicrotask=="function"?queueMicrotask:typeof fi<"u"?function(e){return fi.resolve(null).then(e).catch(Ku)}:Fa;function Ku(e){setTimeout(function(){throw e})}function Ta(e,t){var n=t,s=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(s===0){e.removeChild(a),Yn(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=a}while(n);Yn(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),gt="__reactFiber$"+wn,ar="__reactProps$"+wn,jt="__reactContainer$"+wn,Ia="__reactEvents$"+wn,Xu="__reactListeners$"+wn,Ju="__reactHandles$"+wn;function Jt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mi(e);e!==null;){if(n=e[gt])return n;e=mi(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[gt]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function Kr(e){return e[ar]||null}var za=[],jn=-1;function Lt(e){return{current:e}}function ie(e){0>jn||(e.current=za[jn],za[jn]=null,jn--)}function oe(e,t){jn++,za[jn]=e.current,e.current=t}var Ot={},Ae=Lt(Ot),Le=Lt(!1),Zt=Ot;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Oe(e){return e=e.childContextTypes,e!=null}function Xr(){ie(Le),ie(Ae)}function xi(e,t,n){if(Ae.current!==Ot)throw Error(d(168));oe(Ae,t),oe(Le,n)}function gi(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(d(108,ae(e)||"Unknown",a));return T({},n,s)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Zt=Ae.current,oe(Ae,e),oe(Le,Le.current),!0}function vi(e,t,n){var s=e.stateNode;if(!s)throw Error(d(169));n?(e=gi(e,t,Zt),s.__reactInternalMemoizedMergedChildContext=e,ie(Le),ie(Ae),oe(Ae,e)):ie(Le),oe(Le,n)}var Nt=null,Zr=!1,_a=!1;function yi(e){Nt===null?Nt=[e]:Nt.push(e)}function Zu(e){Zr=!0,yi(e)}function Bt(){if(!_a&&Nt!==null){_a=!0;var e=0,t=ne;try{var n=Nt;for(ne=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}Nt=null,Zr=!1}catch(a){throw Nt!==null&&(Nt=Nt.slice(e+1)),bl(na,Bt),a}finally{ne=t,_a=!1}}return null}var kn=[],Sn=0,es=null,ts=0,Xe=[],Je=0,en=null,kt=1,St="";function tn(e,t){kn[Sn++]=ts,kn[Sn++]=es,es=e,ts=t}function wi(e,t,n){Xe[Je++]=kt,Xe[Je++]=St,Xe[Je++]=en,en=e;var s=kt;e=St;var a=32-ot(s)-1;s&=~(1<<a),n+=1;var o=32-ot(t)+a;if(30<o){var l=a-a%5;o=(s&(1<<l)-1).toString(32),s>>=l,a-=l,kt=1<<32-ot(t)+a|n<<a|s,St=o+e}else kt=1<<o|n<<a|s,St=e}function Ra(e){e.return!==null&&(tn(e,1),wi(e,1,0))}function Da(e){for(;e===es;)es=kn[--Sn],kn[Sn]=null,ts=kn[--Sn],kn[Sn]=null;for(;e===en;)en=Xe[--Je],Xe[Je]=null,St=Xe[--Je],Xe[Je]=null,kt=Xe[--Je],Xe[Je]=null}var qe=null,Ye=null,de=!1,it=null;function bi(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ji(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ye=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ye=null,!0):!1;default:return!1}}function Ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function La(e){if(de){var t=Ye;if(t){var n=t;if(!ji(e,t)){if(Ma(e))throw Error(d(418));t=Mt(n.nextSibling);var s=qe;t&&ji(e,t)?bi(s,n):(e.flags=e.flags&-4097|2,de=!1,qe=e)}}else{if(Ma(e))throw Error(d(418));e.flags=e.flags&-4097|2,de=!1,qe=e}}}function Ni(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function ns(e){if(e!==qe)return!1;if(!de)return Ni(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pa(e.type,e.memoizedProps)),t&&(t=Ye)){if(Ma(e))throw ki(),Error(d(418));for(;t;)bi(e,t),t=Mt(t.nextSibling)}if(Ni(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=qe?Mt(e.stateNode.nextSibling):null;return!0}function ki(){for(var e=Ye;e;)e=Mt(e.nextSibling)}function Cn(){Ye=qe=null,de=!1}function Oa(e){it===null?it=[e]:it.push(e)}var ep=Ee.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(d(309));var s=n.stateNode}if(!s)throw Error(d(147,e));var a=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var c=a.refs;l===null?delete c[o]:c[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Si(e){var t=e._init;return t(e._payload)}function Ci(e){function t(f,p){if(e){var m=f.deletions;m===null?(f.deletions=[p],f.flags|=16):m.push(p)}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function s(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function a(f,p){return f=Yt(f,p),f.index=0,f.sibling=null,f}function o(f,p,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags|=2,p):m):(f.flags|=2,p)):(f.flags|=1048576,p)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,p,m,C){return p===null||p.tag!==6?(p=To(m,f.mode,C),p.return=f,p):(p=a(p,m),p.return=f,p)}function u(f,p,m,C){var _=m.type;return _===De?k(f,p,m.props.children,C,m.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Me&&Si(_)===p.type)?(C=a(p,m.props),C.ref=lr(f,p,m),C.return=f,C):(C=Es(m.type,m.key,m.props,null,f.mode,C),C.ref=lr(f,p,m),C.return=f,C)}function x(f,p,m,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Io(m,f.mode,C),p.return=f,p):(p=a(p,m.children||[]),p.return=f,p)}function k(f,p,m,C,_){return p===null||p.tag!==7?(p=dn(m,f.mode,C,_),p.return=f,p):(p=a(p,m),p.return=f,p)}function S(f,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=To(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case st:return m=Es(p.type,p.key,p.props,null,f.mode,m),m.ref=lr(f,null,p),m.return=f,m;case ze:return p=Io(p,f.mode,m),p.return=f,p;case Me:var C=p._init;return S(f,C(p._payload),m)}if(Dn(p)||H(p))return p=dn(p,f.mode,m,null),p.return=f,p;rs(f,p)}return null}function b(f,p,m,C){var _=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:c(f,p,""+m,C);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case st:return m.key===_?u(f,p,m,C):null;case ze:return m.key===_?x(f,p,m,C):null;case Me:return _=m._init,b(f,p,_(m._payload),C)}if(Dn(m)||H(m))return _!==null?null:k(f,p,m,C,null);rs(f,m)}return null}function P(f,p,m,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return f=f.get(m)||null,c(p,f,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case st:return f=f.get(C.key===null?m:C.key)||null,u(p,f,C,_);case ze:return f=f.get(C.key===null?m:C.key)||null,x(p,f,C,_);case Me:var O=C._init;return P(f,p,m,O(C._payload),_)}if(Dn(C)||H(C))return f=f.get(m)||null,k(p,f,C,_,null);rs(p,C)}return null}function I(f,p,m,C){for(var _=null,O=null,B=p,$=p=0,ke=null;B!==null&&$<m.length;$++){B.index>$?(ke=B,B=null):ke=B.sibling;var ee=b(f,B,m[$],C);if(ee===null){B===null&&(B=ke);break}e&&B&&ee.alternate===null&&t(f,B),p=o(ee,p,$),O===null?_=ee:O.sibling=ee,O=ee,B=ke}if($===m.length)return n(f,B),de&&tn(f,$),_;if(B===null){for(;$<m.length;$++)B=S(f,m[$],C),B!==null&&(p=o(B,p,$),O===null?_=B:O.sibling=B,O=B);return de&&tn(f,$),_}for(B=s(f,B);$<m.length;$++)ke=P(B,f,$,m[$],C),ke!==null&&(e&&ke.alternate!==null&&B.delete(ke.key===null?$:ke.key),p=o(ke,p,$),O===null?_=ke:O.sibling=ke,O=ke);return e&&B.forEach(function(Qt){return t(f,Qt)}),de&&tn(f,$),_}function z(f,p,m,C){var _=H(m);if(typeof _!="function")throw Error(d(150));if(m=_.call(m),m==null)throw Error(d(151));for(var O=_=null,B=p,$=p=0,ke=null,ee=m.next();B!==null&&!ee.done;$++,ee=m.next()){B.index>$?(ke=B,B=null):ke=B.sibling;var Qt=b(f,B,ee.value,C);if(Qt===null){B===null&&(B=ke);break}e&&B&&Qt.alternate===null&&t(f,B),p=o(Qt,p,$),O===null?_=Qt:O.sibling=Qt,O=Qt,B=ke}if(ee.done)return n(f,B),de&&tn(f,$),_;if(B===null){for(;!ee.done;$++,ee=m.next())ee=S(f,ee.value,C),ee!==null&&(p=o(ee,p,$),O===null?_=ee:O.sibling=ee,O=ee);return de&&tn(f,$),_}for(B=s(f,B);!ee.done;$++,ee=m.next())ee=P(B,f,$,ee.value,C),ee!==null&&(e&&ee.alternate!==null&&B.delete(ee.key===null?$:ee.key),p=o(ee,p,$),O===null?_=ee:O.sibling=ee,O=ee);return e&&B.forEach(function(zp){return t(f,zp)}),de&&tn(f,$),_}function ge(f,p,m,C){if(typeof m=="object"&&m!==null&&m.type===De&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case st:e:{for(var _=m.key,O=p;O!==null;){if(O.key===_){if(_=m.type,_===De){if(O.tag===7){n(f,O.sibling),p=a(O,m.props.children),p.return=f,f=p;break e}}else if(O.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Me&&Si(_)===O.type){n(f,O.sibling),p=a(O,m.props),p.ref=lr(f,O,m),p.return=f,f=p;break e}n(f,O);break}else t(f,O);O=O.sibling}m.type===De?(p=dn(m.props.children,f.mode,C,m.key),p.return=f,f=p):(C=Es(m.type,m.key,m.props,null,f.mode,C),C.ref=lr(f,p,m),C.return=f,f=C)}return l(f);case ze:e:{for(O=m.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(f,p.sibling),p=a(p,m.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=Io(m,f.mode,C),p.return=f,f=p}return l(f);case Me:return O=m._init,ge(f,p,O(m._payload),C)}if(Dn(m))return I(f,p,m,C);if(H(m))return z(f,p,m,C);rs(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(f,p.sibling),p=a(p,m),p.return=f,f=p):(n(f,p),p=To(m,f.mode,C),p.return=f,f=p),l(f)):n(f,p)}return ge}var En=Ci(!0),Ei=Ci(!1),ss=Lt(null),as=null,An=null,Ba=null;function Ha(){Ba=An=as=null}function Ua(e){var t=ss.current;ie(ss),e._currentValue=t}function Wa(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){as=e,Ba=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Be=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(Ba!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(as===null)throw Error(d(308));An=e,as.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var nn=null;function $a(e){nn===null?nn=[e]:nn.push(e)}function Ai(e,t,n,s){var a=t.interleaved;return a===null?(n.next=n,$a(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ct(e,s)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(X&2)!==0){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Ct(e,n)}return a=s.interleaved,a===null?(t.next=t,$a(s)):(t.next=a.next,a.next=t),s.interleaved=t,Ct(e,n)}function os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,aa(e,n)}}function Fi(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ls(e,t,n,s){var a=e.updateQueue;Ht=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var u=c,x=u.next;u.next=null,l===null?o=x:l.next=x,l=u;var k=e.alternate;k!==null&&(k=k.updateQueue,c=k.lastBaseUpdate,c!==l&&(c===null?k.firstBaseUpdate=x:c.next=x,k.lastBaseUpdate=u))}if(o!==null){var S=a.baseState;l=0,k=x=u=null,c=o;do{var b=c.lane,P=c.eventTime;if((s&b)===b){k!==null&&(k=k.next={eventTime:P,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var I=e,z=c;switch(b=t,P=n,z.tag){case 1:if(I=z.payload,typeof I=="function"){S=I.call(P,S,b);break e}S=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=z.payload,b=typeof I=="function"?I.call(P,S,b):I,b==null)break e;S=T({},S,b);break e;case 2:Ht=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,b=a.effects,b===null?a.effects=[c]:b.push(c))}else P={eventTime:P,lane:b,tag:c.tag,payload:c.payload,callback:c.callback,next:null},k===null?(x=k=P,u=S):k=k.next=P,l|=b;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;b=c,c=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);if(k===null&&(u=S),a.baseState=u,a.firstBaseUpdate=x,a.lastBaseUpdate=k,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);an|=l,e.lanes=l,e.memoizedState=S}}function Ti(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=n,typeof a!="function")throw Error(d(191,a));a.call(s)}}}var ir={},vt=Lt(ir),cr=Lt(ir),dr=Lt(ir);function rn(e){if(e===ir)throw Error(d(174));return e}function Ga(e,t){switch(oe(dr,t),oe(cr,e),oe(vt,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qs(t,e)}ie(vt),oe(vt,t)}function Fn(){ie(vt),ie(cr),ie(dr)}function Ii(e){rn(dr.current);var t=rn(vt.current),n=qs(t,e.type);t!==n&&(oe(cr,e),oe(vt,n))}function qa(e){cr.current===e&&(ie(vt),ie(cr))}var pe=Lt(0);function is(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ya=[];function Qa(){for(var e=0;e<Ya.length;e++)Ya[e]._workInProgressVersionPrimary=null;Ya.length=0}var cs=Ee.ReactCurrentDispatcher,Ka=Ee.ReactCurrentBatchConfig,sn=0,he=null,ye=null,je=null,ds=!1,ur=!1,pr=0,tp=0;function Pe(){throw Error(d(321))}function Xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Ja(e,t,n,s,a,o){if(sn=o,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,cs.current=e===null||e.memoizedState===null?ap:op,e=n(s,a),ur){o=0;do{if(ur=!1,pr=0,25<=o)throw Error(d(301));o+=1,je=ye=null,t.updateQueue=null,cs.current=lp,e=n(s,a)}while(ur)}if(cs.current=hs,t=ye!==null&&ye.next!==null,sn=0,je=ye=he=null,ds=!1,t)throw Error(d(300));return e}function Za(){var e=pr!==0;return pr=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?he.memoizedState=je=e:je=je.next=e,je}function et(){if(ye===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=je===null?he.memoizedState:je.next;if(t!==null)je=t,ye=e;else{if(e===null)throw Error(d(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},je===null?he.memoizedState=je=e:je=je.next=e}return je}function hr(e,t){return typeof t=="function"?t(e):t}function eo(e){var t=et(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var s=ye,a=s.baseQueue,o=n.pending;if(o!==null){if(a!==null){var l=a.next;a.next=o.next,o.next=l}s.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,s=s.baseState;var c=l=null,u=null,x=o;do{var k=x.lane;if((sn&k)===k)u!==null&&(u=u.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),s=x.hasEagerState?x.eagerState:e(s,x.action);else{var S={lane:k,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};u===null?(c=u=S,l=s):u=u.next=S,he.lanes|=k,an|=k}x=x.next}while(x!==null&&x!==o);u===null?l=s:u.next=c,lt(s,t.memoizedState)||(Be=!0),t.memoizedState=s,t.baseState=l,t.baseQueue=u,n.lastRenderedState=s}if(e=n.interleaved,e!==null){a=e;do o=a.lane,he.lanes|=o,an|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function to(e){var t=et(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var s=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do o=e(o,l.action),l=l.next;while(l!==a);lt(o,t.memoizedState)||(Be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,s]}function zi(){}function _i(e,t){var n=he,s=et(),a=t(),o=!lt(s.memoizedState,a);if(o&&(s.memoizedState=a,Be=!0),s=s.queue,no(Mi.bind(null,n,s,e),[e]),s.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,fr(9,Di.bind(null,n,s,a,t),void 0,null),Ne===null)throw Error(d(349));(sn&30)!==0||Ri(n,t,a)}return a}function Ri(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Di(e,t,n,s){t.value=n,t.getSnapshot=s,Li(t)&&Oi(e)}function Mi(e,t,n){return n(function(){Li(t)&&Oi(e)})}function Li(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function Oi(e){var t=Ct(e,1);t!==null&&pt(t,e,1,-1)}function Bi(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=sp.bind(null,he,e),[t.memoizedState,e]}function fr(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function Hi(){return et().memoizedState}function us(e,t,n,s){var a=yt();he.flags|=e,a.memoizedState=fr(1|t,n,void 0,s===void 0?null:s)}function ps(e,t,n,s){var a=et();s=s===void 0?null:s;var o=void 0;if(ye!==null){var l=ye.memoizedState;if(o=l.destroy,s!==null&&Xa(s,l.deps)){a.memoizedState=fr(t,n,o,s);return}}he.flags|=e,a.memoizedState=fr(1|t,n,o,s)}function Ui(e,t){return us(8390656,8,e,t)}function no(e,t){return ps(2048,8,e,t)}function Wi(e,t){return ps(4,2,e,t)}function $i(e,t){return ps(4,4,e,t)}function Vi(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gi(e,t,n){return n=n!=null?n.concat([e]):null,ps(4,4,Vi.bind(null,t,e),n)}function ro(){}function qi(e,t){var n=et();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Xa(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Yi(e,t){var n=et();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Xa(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Qi(e,t,n){return(sn&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n):(lt(n,t)||(n=Sl(),he.lanes|=n,an|=n,e.baseState=!0),t)}function np(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var s=Ka.transition;Ka.transition={};try{e(!1),t()}finally{ne=n,Ka.transition=s}}function Ki(){return et().memoizedState}function rp(e,t,n){var s=Gt(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Xi(e))Ji(t,n);else if(n=Ai(e,t,n,s),n!==null){var a=Re();pt(n,e,s,a),Zi(n,t,s)}}function sp(e,t,n){var s=Gt(e),a={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xi(e))Ji(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,c=o(l,n);if(a.hasEagerState=!0,a.eagerState=c,lt(c,l)){var u=t.interleaved;u===null?(a.next=a,$a(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}n=Ai(e,t,a,s),n!==null&&(a=Re(),pt(n,e,s,a),Zi(n,t,s))}}function Xi(e){var t=e.alternate;return e===he||t!==null&&t===he}function Ji(e,t){ur=ds=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zi(e,t,n){if((n&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,aa(e,n)}}var hs={readContext:Ze,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},ap={readContext:Ze,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Ui,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,us(4194308,4,Vi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){return us(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=yt();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=rp.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Bi,useDebugValue:ro,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Bi(!1),t=e[0];return e=np.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=he,a=yt();if(de){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),Ne===null)throw Error(d(349));(sn&30)!==0||Ri(s,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ui(Mi.bind(null,s,o,e),[e]),s.flags|=2048,fr(9,Di.bind(null,s,o,n,t),void 0,null),n},useId:function(){var e=yt(),t=Ne.identifierPrefix;if(de){var n=St,s=kt;n=(s&~(1<<32-ot(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},op={readContext:Ze,useCallback:qi,useContext:Ze,useEffect:no,useImperativeHandle:Gi,useInsertionEffect:Wi,useLayoutEffect:$i,useMemo:Yi,useReducer:eo,useRef:Hi,useState:function(){return eo(hr)},useDebugValue:ro,useDeferredValue:function(e){var t=et();return Qi(t,ye.memoizedState,e)},useTransition:function(){var e=eo(hr)[0],t=et().memoizedState;return[e,t]},useMutableSource:zi,useSyncExternalStore:_i,useId:Ki,unstable_isNewReconciler:!1},lp={readContext:Ze,useCallback:qi,useContext:Ze,useEffect:no,useImperativeHandle:Gi,useInsertionEffect:Wi,useLayoutEffect:$i,useMemo:Yi,useReducer:to,useRef:Hi,useState:function(){return to(hr)},useDebugValue:ro,useDeferredValue:function(e){var t=et();return ye===null?t.memoizedState=e:Qi(t,ye.memoizedState,e)},useTransition:function(){var e=to(hr)[0],t=et().memoizedState;return[e,t]},useMutableSource:zi,useSyncExternalStore:_i,useId:Ki,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=T({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function so(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fs={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Re(),a=Gt(e),o=Et(s,a);o.payload=t,n!=null&&(o.callback=n),t=Ut(e,o,a),t!==null&&(pt(t,e,a,s),os(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Re(),a=Gt(e),o=Et(s,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ut(e,o,a),t!==null&&(pt(t,e,a,s),os(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),s=Gt(e),a=Et(n,s);a.tag=2,t!=null&&(a.callback=t),t=Ut(e,a,s),t!==null&&(pt(t,e,s,n),os(t,e,s))}};function ec(e,t,n,s,a,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,l):t.prototype&&t.prototype.isPureReactComponent?!er(n,s)||!er(a,o):!0}function tc(e,t,n){var s=!1,a=Ot,o=t.contextType;return typeof o=="object"&&o!==null?o=Ze(o):(a=Oe(t)?Zt:Ae.current,s=t.contextTypes,o=(s=s!=null)?Nn(e,a):Ot),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fs,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function nc(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function ao(e,t,n,s){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Va(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Ze(o):(o=Oe(t)?Zt:Ae.current,a.context=Nn(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(so(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&fs.enqueueReplaceState(a,a.state,null),ls(e,n,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t){try{var n="",s=t;do n+=J(s),s=s.return;while(s);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function oo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ip=typeof WeakMap=="function"?WeakMap:Map;function rc(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){bs||(bs=!0,No=s),lo(e,t)},n}function sc(e,t,n){n=Et(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;n.payload=function(){return s(a)},n.callback=function(){lo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){lo(e,t),typeof s!="function"&&($t===null?$t=new Set([this]):$t.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ac(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new ip;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(n)||(a.add(n),e=jp.bind(null,e,t,n),t.then(e,e))}function oc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lc(e,t,n,s,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var cp=Ee.ReactCurrentOwner,Be=!1;function _e(e,t,n,s){t.child=e===null?Ei(t,null,n,s):En(t,e.child,n,s)}function ic(e,t,n,s,a){n=n.render;var o=t.ref;return Pn(t,a),s=Ja(e,t,n,s,o,a),n=Za(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,At(e,t,a)):(de&&n&&Ra(t),t.flags|=1,_e(e,t,s,a),t.child)}function cc(e,t,n,s,a){if(e===null){var o=n.type;return typeof o=="function"&&!Fo(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,dc(e,t,o,s,a)):(e=Es(n.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&a)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(l,s)&&e.ref===t.ref)return At(e,t,a)}return t.flags|=1,e=Yt(o,s),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,s,a){if(e!==null){var o=e.memoizedProps;if(er(o,s)&&e.ref===t.ref)if(Be=!1,t.pendingProps=s=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,At(e,t,a)}return io(e,t,n,s,a)}function uc(e,t,n){var s=t.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(zn,Qe),Qe|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(zn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:n,oe(zn,Qe),Qe|=s}else o!==null?(s=o.baseLanes|n,t.memoizedState=null):s=n,oe(zn,Qe),Qe|=s;return _e(e,t,a,n),t.child}function pc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function io(e,t,n,s,a){var o=Oe(n)?Zt:Ae.current;return o=Nn(t,o),Pn(t,a),n=Ja(e,t,n,s,o,a),s=Za(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,At(e,t,a)):(de&&s&&Ra(t),t.flags|=1,_e(e,t,n,a),t.child)}function hc(e,t,n,s,a){if(Oe(n)){var o=!0;Jr(t)}else o=!1;if(Pn(t,a),t.stateNode===null)xs(e,t),tc(t,n,s),ao(t,n,s,a),s=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var u=l.context,x=n.contextType;typeof x=="object"&&x!==null?x=Ze(x):(x=Oe(n)?Zt:Ae.current,x=Nn(t,x));var k=n.getDerivedStateFromProps,S=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function";S||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==s||u!==x)&&nc(t,l,s,x),Ht=!1;var b=t.memoizedState;l.state=b,ls(t,s,l,a),u=t.memoizedState,c!==s||b!==u||Le.current||Ht?(typeof k=="function"&&(so(t,n,k,s),u=t.memoizedState),(c=Ht||ec(t,n,c,s,b,u,x))?(S||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=u),l.props=s,l.state=u,l.context=x,s=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,Pi(e,t),c=t.memoizedProps,x=t.type===t.elementType?c:ct(t.type,c),l.props=x,S=t.pendingProps,b=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ze(u):(u=Oe(n)?Zt:Ae.current,u=Nn(t,u));var P=n.getDerivedStateFromProps;(k=typeof P=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==S||b!==u)&&nc(t,l,s,u),Ht=!1,b=t.memoizedState,l.state=b,ls(t,s,l,a);var I=t.memoizedState;c!==S||b!==I||Le.current||Ht?(typeof P=="function"&&(so(t,n,P,s),I=t.memoizedState),(x=Ht||ec(t,n,x,s,b,I,u)||!1)?(k||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,I,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,I,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=I),l.props=s,l.state=I,l.context=u,s=x):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),s=!1)}return co(e,t,n,s,o,a)}function co(e,t,n,s,a,o){pc(e,t);var l=(t.flags&128)!==0;if(!s&&!l)return a&&vi(t,n,!1),At(e,t,o);s=t.stateNode,cp.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&l?(t.child=En(t,e.child,null,o),t.child=En(t,null,c,o)):_e(e,t,c,o),t.memoizedState=s.state,a&&vi(t,n,!0),t.child}function fc(e){var t=e.stateNode;t.pendingContext?xi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xi(e,t.context,!1),Ga(e,t.containerInfo)}function mc(e,t,n,s,a){return Cn(),Oa(a),t.flags|=256,_e(e,t,n,s),t.child}var uo={dehydrated:null,treeContext:null,retryLane:0};function po(e){return{baseLanes:e,cachePool:null,transitions:null}}function xc(e,t,n){var s=t.pendingProps,a=pe.current,o=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),oe(pe,a&1),e===null)return La(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=s.children,e=s.fallback,o?(s=t.mode,o=t.child,l={mode:"hidden",children:l},(s&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=As(l,s,0,null),e=dn(e,s,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=po(n),t.memoizedState=uo,e):ho(t,l));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return dp(e,t,l,s,c,a,n);if(o){o=s.fallback,l=t.mode,a=e.child,c=a.sibling;var u={mode:"hidden",children:s.children};return(l&1)===0&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=u,t.deletions=null):(s=Yt(a,u),s.subtreeFlags=a.subtreeFlags&14680064),c!==null?o=Yt(c,o):(o=dn(o,l,n,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,l=e.child.memoizedState,l=l===null?po(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=uo,s}return o=e.child,e=o.sibling,s=Yt(o,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function ho(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ms(e,t,n,s){return s!==null&&Oa(s),En(t,e.child,null,n),e=ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dp(e,t,n,s,a,o,l){if(n)return t.flags&256?(t.flags&=-257,s=oo(Error(d(422))),ms(e,t,l,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,a=t.mode,s=As({mode:"visible",children:s.children},a,0,null),o=dn(o,a,l,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,(t.mode&1)!==0&&En(t,e.child,null,l),t.child.memoizedState=po(l),t.memoizedState=uo,o);if((t.mode&1)===0)return ms(e,t,l,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var c=s.dgst;return s=c,o=Error(d(419)),s=oo(o,s,void 0),ms(e,t,l,s)}if(c=(l&e.childLanes)!==0,Be||c){if(s=Ne,s!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(s.suspendedLanes|l))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Ct(e,a),pt(s,e,a,-1))}return Po(),s=oo(Error(d(421))),ms(e,t,l,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Np.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ye=Mt(a.nextSibling),qe=t,de=!0,it=null,e!==null&&(Xe[Je++]=kt,Xe[Je++]=St,Xe[Je++]=en,kt=e.id,St=e.overflow,en=t),t=ho(t,s.children),t.flags|=4096,t)}function gc(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Wa(e.return,t,n)}function fo(e,t,n,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=n,o.tailMode=a)}function vc(e,t,n){var s=t.pendingProps,a=s.revealOrder,o=s.tail;if(_e(e,t,s.children,n),s=pe.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gc(e,n,t);else if(e.tag===19)gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(oe(pe,s),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&is(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),fo(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&is(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}fo(t,!0,n,null,o);break;case"together":fo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function up(e,t,n){switch(t.tag){case 3:fc(t),Cn();break;case 5:Ii(t);break;case 1:Oe(t.type)&&Jr(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;oe(ss,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(oe(pe,pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?xc(e,t,n):(oe(pe,pe.current&1),e=At(e,t,n),e!==null?e.sibling:null);oe(pe,pe.current&1);break;case 19:if(s=(n&t.childLanes)!==0,(e.flags&128)!==0){if(s)return vc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),oe(pe,pe.current),s)break;return null;case 22:case 23:return t.lanes=0,uc(e,t,n)}return At(e,t,n)}var yc,mo,wc,bc;yc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},mo=function(){},wc=function(e,t,n,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,rn(vt.current);var o=null;switch(n){case"input":a=Ws(e,a),s=Ws(e,s),o=[];break;case"select":a=T({},a,{value:void 0}),s=T({},s,{value:void 0}),o=[];break;case"textarea":a=Gs(e,a),s=Gs(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Qr)}Ys(n,s);var l;n=null;for(x in a)if(!s.hasOwnProperty(x)&&a.hasOwnProperty(x)&&a[x]!=null)if(x==="style"){var c=a[x];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(w.hasOwnProperty(x)?o||(o=[]):(o=o||[]).push(x,null));for(x in s){var u=s[x];if(c=a!=null?a[x]:void 0,s.hasOwnProperty(x)&&u!==c&&(u!=null||c!=null))if(x==="style")if(c){for(l in c)!c.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&c[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(x,n)),n=u;else x==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(o=o||[]).push(x,u)):x==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(x,""+u):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(w.hasOwnProperty(x)?(u!=null&&x==="onScroll"&&le("scroll",e),o||c===u||(o=[])):(o=o||[]).push(x,u))}n&&(o=o||[]).push("style",n);var x=o;(t.updateQueue=x)&&(t.flags|=4)}},bc=function(e,t,n,s){n!==s&&(t.flags|=4)};function mr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function pp(e,t,n){var s=t.pendingProps;switch(Da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Oe(t.type)&&Xr(),Fe(t),null;case 3:return s=t.stateNode,Fn(),ie(Le),ie(Ae),Qa(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(Co(it),it=null))),mo(e,t),Fe(t),null;case 5:qa(t);var a=rn(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)wc(e,t,n,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(d(166));return Fe(t),null}if(e=rn(vt.current),ns(t)){s=t.stateNode,n=t.type;var o=t.memoizedProps;switch(s[gt]=t,s[ar]=o,e=(t.mode&1)!==0,n){case"dialog":le("cancel",s),le("close",s);break;case"iframe":case"object":case"embed":le("load",s);break;case"video":case"audio":for(a=0;a<nr.length;a++)le(nr[a],s);break;case"source":le("error",s);break;case"img":case"image":case"link":le("error",s),le("load",s);break;case"details":le("toggle",s);break;case"input":tl(s,o),le("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},le("invalid",s);break;case"textarea":sl(s,o),le("invalid",s)}Ys(n,o),a=null;for(var l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="children"?typeof c=="string"?s.textContent!==c&&(o.suppressHydrationWarning!==!0&&Yr(s.textContent,c,e),a=["children",c]):typeof c=="number"&&s.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&Yr(s.textContent,c,e),a=["children",""+c]):w.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&le("scroll",s)}switch(n){case"input":Sr(s),rl(s,o,!0);break;case"textarea":Sr(s),ol(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Qr)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ll(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(n,{is:s.is}):(e=l.createElement(n),n==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,n),e[gt]=t,e[ar]=s,yc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Qs(n,s),n){case"dialog":le("cancel",e),le("close",e),a=s;break;case"iframe":case"object":case"embed":le("load",e),a=s;break;case"video":case"audio":for(a=0;a<nr.length;a++)le(nr[a],e);a=s;break;case"source":le("error",e),a=s;break;case"img":case"image":case"link":le("error",e),le("load",e),a=s;break;case"details":le("toggle",e),a=s;break;case"input":tl(e,s),a=Ws(e,s),le("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=T({},s,{value:void 0}),le("invalid",e);break;case"textarea":sl(e,s),a=Gs(e,s),le("invalid",e);break;default:a=s}Ys(n,a),c=a;for(o in c)if(c.hasOwnProperty(o)){var u=c[o];o==="style"?dl(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&il(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Mn(e,u):typeof u=="number"&&Mn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(w.hasOwnProperty(o)?u!=null&&o==="onScroll"&&le("scroll",e):u!=null&&rt(e,o,u,l))}switch(n){case"input":Sr(e),rl(e,s,!1);break;case"textarea":Sr(e),ol(e);break;case"option":s.value!=null&&e.setAttribute("value",""+te(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?un(e,!!s.multiple,o,!1):s.defaultValue!=null&&un(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Qr)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)bc(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(d(166));if(n=rn(dr.current),rn(vt.current),ns(t)){if(s=t.stateNode,n=t.memoizedProps,s[gt]=t,(o=s.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Yr(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(s.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[gt]=t,t.stateNode=s}return Fe(t),null;case 13:if(ie(pe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&Ye!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ki(),Cn(),t.flags|=98560,o=!1;else if(o=ns(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(d(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(d(317));o[gt]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else it!==null&&(Co(it),it=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(pe.current&1)!==0?we===0&&(we=3):Po())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return Fn(),mo(e,t),e===null&&rr(t.stateNode.containerInfo),Fe(t),null;case 10:return Ua(t.type._context),Fe(t),null;case 17:return Oe(t.type)&&Xr(),Fe(t),null;case 19:if(ie(pe),o=t.memoizedState,o===null)return Fe(t),null;if(s=(t.flags&128)!==0,l=o.rendering,l===null)if(s)mr(o,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=is(e),l!==null){for(t.flags|=128,mr(o,!1),s=l.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)o=n,e=s,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&xe()>_n&&(t.flags|=128,s=!0,mr(o,!1),t.lanes=4194304)}else{if(!s)if(e=is(l),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!de)return Fe(t),null}else 2*xe()-o.renderingStartTime>_n&&n!==1073741824&&(t.flags|=128,s=!0,mr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=xe(),t.sibling=null,n=pe.current,oe(pe,s?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return Ao(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(Qe&1073741824)!==0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(d(156,t.tag))}function hp(e,t){switch(Da(t),t.tag){case 1:return Oe(t.type)&&Xr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fn(),ie(Le),ie(Ae),Qa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return qa(t),null;case 13:if(ie(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(pe),null;case 4:return Fn(),null;case 10:return Ua(t.type._context),null;case 22:case 23:return Ao(),null;case 24:return null;default:return null}}var gs=!1,Te=!1,fp=typeof WeakSet=="function"?WeakSet:Set,F=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){me(e,t,s)}else n.current=null}function xo(e,t,n){try{n()}catch(s){me(e,t,s)}}var jc=!1;function mp(e,t){if(Ea=Mr,e=ei(),ya(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,c=-1,u=-1,x=0,k=0,S=e,b=null;t:for(;;){for(var P;S!==n||a!==0&&S.nodeType!==3||(c=l+a),S!==o||s!==0&&S.nodeType!==3||(u=l+s),S.nodeType===3&&(l+=S.nodeValue.length),(P=S.firstChild)!==null;)b=S,S=P;for(;;){if(S===e)break t;if(b===n&&++x===a&&(c=l),b===o&&++k===s&&(u=l),(P=S.nextSibling)!==null)break;S=b,b=S.parentNode}S=P}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Aa={focusedElem:e,selectionRange:n},Mr=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var I=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var z=I.memoizedProps,ge=I.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?z:ct(t.type,z),ge);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(C){me(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return I=jc,jc=!1,I}function xr(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&xo(t,n,o)}a=a.next}while(a!==s)}}function vs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function go(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nc(e){var t=e.alternate;t!==null&&(e.alternate=null,Nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[ar],delete t[Ia],delete t[Xu],delete t[Ju])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kc(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vo(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qr));else if(s!==4&&(e=e.child,e!==null))for(vo(e,t,n),e=e.sibling;e!==null;)vo(e,t,n),e=e.sibling}function yo(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(yo(e,t,n),e=e.sibling;e!==null;)yo(e,t,n),e=e.sibling}var Se=null,dt=!1;function Wt(e,t,n){for(n=n.child;n!==null;)Cc(e,t,n),n=n.sibling}function Cc(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Tr,n)}catch{}switch(n.tag){case 5:Te||In(n,t);case 6:var s=Se,a=dt;Se=null,Wt(e,t,n),Se=s,dt=a,Se!==null&&(dt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(dt?(e=Se,n=n.stateNode,e.nodeType===8?Ta(e.parentNode,n):e.nodeType===1&&Ta(e,n),Yn(e)):Ta(Se,n.stateNode));break;case 4:s=Se,a=dt,Se=n.stateNode.containerInfo,dt=!0,Wt(e,t,n),Se=s,dt=a;break;case 0:case 11:case 14:case 15:if(!Te&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&xo(n,t,l),a=a.next}while(a!==s)}Wt(e,t,n);break;case 1:if(!Te&&(In(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(c){me(n,t,c)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Te=(s=Te)||n.memoizedState!==null,Wt(e,t,n),Te=s):Wt(e,t,n);break;default:Wt(e,t,n)}}function Ec(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fp),t.forEach(function(s){var a=kp.bind(null,e,s);n.has(s)||(n.add(s),s.then(a,a))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var a=n[s];try{var o=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:Se=c.stateNode,dt=!1;break e;case 3:Se=c.stateNode.containerInfo,dt=!0;break e;case 4:Se=c.stateNode.containerInfo,dt=!0;break e}c=c.return}if(Se===null)throw Error(d(160));Cc(o,l,a),Se=null,dt=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(x){me(a,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ac(t,e),t=t.sibling}function Ac(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),wt(e),s&4){try{xr(3,e,e.return),vs(3,e)}catch(z){me(e,e.return,z)}try{xr(5,e,e.return)}catch(z){me(e,e.return,z)}}break;case 1:ut(t,e),wt(e),s&512&&n!==null&&In(n,n.return);break;case 5:if(ut(t,e),wt(e),s&512&&n!==null&&In(n,n.return),e.flags&32){var a=e.stateNode;try{Mn(a,"")}catch(z){me(e,e.return,z)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&nl(a,o),Qs(c,l);var x=Qs(c,o);for(l=0;l<u.length;l+=2){var k=u[l],S=u[l+1];k==="style"?dl(a,S):k==="dangerouslySetInnerHTML"?il(a,S):k==="children"?Mn(a,S):rt(a,k,S,x)}switch(c){case"input":$s(a,o);break;case"textarea":al(a,o);break;case"select":var b=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var P=o.value;P!=null?un(a,!!o.multiple,P,!1):b!==!!o.multiple&&(o.defaultValue!=null?un(a,!!o.multiple,o.defaultValue,!0):un(a,!!o.multiple,o.multiple?[]:"",!1))}a[ar]=o}catch(z){me(e,e.return,z)}}break;case 6:if(ut(t,e),wt(e),s&4){if(e.stateNode===null)throw Error(d(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(z){me(e,e.return,z)}}break;case 3:if(ut(t,e),wt(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(z){me(e,e.return,z)}break;case 4:ut(t,e),wt(e);break;case 13:ut(t,e),wt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(jo=xe())),s&4&&Ec(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(x=Te)||k,ut(t,e),Te=x):ut(t,e),wt(e),s&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!k&&(e.mode&1)!==0)for(F=e,k=e.child;k!==null;){for(S=F=k;F!==null;){switch(b=F,P=b.child,b.tag){case 0:case 11:case 14:case 15:xr(4,b,b.return);break;case 1:In(b,b.return);var I=b.stateNode;if(typeof I.componentWillUnmount=="function"){s=b,n=b.return;try{t=s,I.props=t.memoizedProps,I.state=t.memoizedState,I.componentWillUnmount()}catch(z){me(s,n,z)}}break;case 5:In(b,b.return);break;case 22:if(b.memoizedState!==null){Tc(S);continue}}P!==null?(P.return=b,F=P):Tc(S)}k=k.sibling}e:for(k=null,S=e;;){if(S.tag===5){if(k===null){k=S;try{a=S.stateNode,x?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=S.stateNode,u=S.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=cl("display",l))}catch(z){me(e,e.return,z)}}}else if(S.tag===6){if(k===null)try{S.stateNode.nodeValue=x?"":S.memoizedProps}catch(z){me(e,e.return,z)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;k===S&&(k=null),S=S.return}k===S&&(k=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:ut(t,e),wt(e),s&4&&Ec(e);break;case 21:break;default:ut(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kc(n)){var s=n;break e}n=n.return}throw Error(d(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Mn(a,""),s.flags&=-33);var o=Sc(e);yo(e,o,a);break;case 3:case 4:var l=s.stateNode.containerInfo,c=Sc(e);vo(e,c,l);break;default:throw Error(d(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,n){F=e,Pc(e)}function Pc(e,t,n){for(var s=(e.mode&1)!==0;F!==null;){var a=F,o=a.child;if(a.tag===22&&s){var l=a.memoizedState!==null||gs;if(!l){var c=a.alternate,u=c!==null&&c.memoizedState!==null||Te;c=gs;var x=Te;if(gs=l,(Te=u)&&!x)for(F=a;F!==null;)l=F,u=l.child,l.tag===22&&l.memoizedState!==null?Ic(a):u!==null?(u.return=l,F=u):Ic(a);for(;o!==null;)F=o,Pc(o),o=o.sibling;F=a,gs=c,Te=x}Fc(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,F=o):Fc(e)}}function Fc(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Te||vs(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Te)if(n===null)s.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);s.componentDidUpdate(a,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ti(t,o,s);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ti(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var k=x.memoizedState;if(k!==null){var S=k.dehydrated;S!==null&&Yn(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}Te||t.flags&512&&go(t)}catch(b){me(t,t.return,b)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Tc(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Ic(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vs(4,t)}catch(u){me(t,n,u)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(u){me(t,a,u)}}var o=t.return;try{go(t)}catch(u){me(t,o,u)}break;case 5:var l=t.return;try{go(t)}catch(u){me(t,l,u)}}}catch(u){me(t,t.return,u)}if(t===e){F=null;break}var c=t.sibling;if(c!==null){c.return=t.return,F=c;break}F=t.return}}var gp=Math.ceil,ys=Ee.ReactCurrentDispatcher,wo=Ee.ReactCurrentOwner,tt=Ee.ReactCurrentBatchConfig,X=0,Ne=null,ve=null,Ce=0,Qe=0,zn=Lt(0),we=0,gr=null,an=0,ws=0,bo=0,vr=null,He=null,jo=0,_n=1/0,Pt=null,bs=!1,No=null,$t=null,js=!1,Vt=null,Ns=0,yr=0,ko=null,ks=-1,Ss=0;function Re(){return(X&6)!==0?xe():ks!==-1?ks:ks=xe()}function Gt(e){return(e.mode&1)===0?1:(X&2)!==0&&Ce!==0?Ce&-Ce:ep.transition!==null?(Ss===0&&(Ss=Sl()),Ss):(e=ne,e!==0||(e=window.event,e=e===void 0?16:_l(e.type)),e)}function pt(e,t,n,s){if(50<yr)throw yr=0,ko=null,Error(d(185));Wn(e,n,s),((X&2)===0||e!==Ne)&&(e===Ne&&((X&2)===0&&(ws|=n),we===4&&qt(e,Ce)),Ue(e,s),n===1&&X===0&&(t.mode&1)===0&&(_n=xe()+500,Zr&&Bt()))}function Ue(e,t){var n=e.callbackNode;eu(e,t);var s=_r(e,e===Ne?Ce:0);if(s===0)n!==null&&jl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&jl(n),t===1)e.tag===0?Zu(_c.bind(null,e)):yi(_c.bind(null,e)),Qu(function(){(X&6)===0&&Bt()}),n=null;else{switch(Cl(s)){case 1:n=na;break;case 4:n=Nl;break;case 16:n=Fr;break;case 536870912:n=kl;break;default:n=Fr}n=Uc(n,zc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zc(e,t){if(ks=-1,Ss=0,(X&6)!==0)throw Error(d(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var s=_r(e,e===Ne?Ce:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=Cs(e,s);else{t=s;var a=X;X|=2;var o=Dc();(Ne!==e||Ce!==t)&&(Pt=null,_n=xe()+500,ln(e,t));do try{wp();break}catch(c){Rc(e,c)}while(!0);Ha(),ys.current=o,X=a,ve!==null?t=0:(Ne=null,Ce=0,t=we)}if(t!==0){if(t===2&&(a=ra(e),a!==0&&(s=a,t=So(e,a))),t===1)throw n=gr,ln(e,0),qt(e,s),Ue(e,xe()),n;if(t===6)qt(e,s);else{if(a=e.current.alternate,(s&30)===0&&!vp(a)&&(t=Cs(e,s),t===2&&(o=ra(e),o!==0&&(s=o,t=So(e,o))),t===1))throw n=gr,ln(e,0),qt(e,s),Ue(e,xe()),n;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(d(345));case 2:cn(e,He,Pt);break;case 3:if(qt(e,s),(s&130023424)===s&&(t=jo+500-xe(),10<t)){if(_r(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Re(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Fa(cn.bind(null,e,He,Pt),t);break}cn(e,He,Pt);break;case 4:if(qt(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var l=31-ot(s);o=1<<l,l=t[l],l>a&&(a=l),s&=~o}if(s=a,s=xe()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*gp(s/1960))-s,10<s){e.timeoutHandle=Fa(cn.bind(null,e,He,Pt),s);break}cn(e,He,Pt);break;case 5:cn(e,He,Pt);break;default:throw Error(d(329))}}}return Ue(e,xe()),e.callbackNode===n?zc.bind(null,e):null}function So(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=Cs(e,t),e!==2&&(t=He,He=n,t!==null&&Co(t)),e}function Co(e){He===null?He=e:He.push.apply(He,e)}function vp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var a=n[s],o=a.getSnapshot;a=a.value;try{if(!lt(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~bo,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),s=1<<n;e[n]=-1,t&=~s}}function _c(e){if((X&6)!==0)throw Error(d(327));Rn();var t=_r(e,0);if((t&1)===0)return Ue(e,xe()),null;var n=Cs(e,t);if(e.tag!==0&&n===2){var s=ra(e);s!==0&&(t=s,n=So(e,s))}if(n===1)throw n=gr,ln(e,0),qt(e,t),Ue(e,xe()),n;if(n===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,He,Pt),Ue(e,xe()),null}function Eo(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(_n=xe()+500,Zr&&Bt())}}function on(e){Vt!==null&&Vt.tag===0&&(X&6)===0&&Rn();var t=X;X|=1;var n=tt.transition,s=ne;try{if(tt.transition=null,ne=1,e)return e()}finally{ne=s,tt.transition=n,X=t,(X&6)===0&&Bt()}}function Ao(){Qe=zn.current,ie(zn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yu(n)),ve!==null)for(n=ve.return;n!==null;){var s=n;switch(Da(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Xr();break;case 3:Fn(),ie(Le),ie(Ae),Qa();break;case 5:qa(s);break;case 4:Fn();break;case 13:ie(pe);break;case 19:ie(pe);break;case 10:Ua(s.type._context);break;case 22:case 23:Ao()}n=n.return}if(Ne=e,ve=e=Yt(e.current,null),Ce=Qe=t,we=0,gr=null,bo=ws=an=0,He=vr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],s=n.interleaved,s!==null){n.interleaved=null;var a=s.next,o=n.pending;if(o!==null){var l=o.next;o.next=a,s.next=l}n.pending=s}nn=null}return e}function Rc(e,t){do{var n=ve;try{if(Ha(),cs.current=hs,ds){for(var s=he.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}ds=!1}if(sn=0,je=ye=he=null,ur=!1,pr=0,wo.current=null,n===null||n.return===null){we=1,gr=t,ve=null;break}e:{var o=e,l=n.return,c=n,u=t;if(t=Ce,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var x=u,k=c,S=k.tag;if((k.mode&1)===0&&(S===0||S===11||S===15)){var b=k.alternate;b?(k.updateQueue=b.updateQueue,k.memoizedState=b.memoizedState,k.lanes=b.lanes):(k.updateQueue=null,k.memoizedState=null)}var P=oc(l);if(P!==null){P.flags&=-257,lc(P,l,c,o,t),P.mode&1&&ac(o,x,t),t=P,u=x;var I=t.updateQueue;if(I===null){var z=new Set;z.add(u),t.updateQueue=z}else I.add(u);break e}else{if((t&1)===0){ac(o,x,t),Po();break e}u=Error(d(426))}}else if(de&&c.mode&1){var ge=oc(l);if(ge!==null){(ge.flags&65536)===0&&(ge.flags|=256),lc(ge,l,c,o,t),Oa(Tn(u,c));break e}}o=u=Tn(u,c),we!==4&&(we=2),vr===null?vr=[o]:vr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=rc(o,u,t);Fi(o,f);break e;case 1:c=u;var p=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&($t===null||!$t.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=sc(o,c,t);Fi(o,C);break e}}o=o.return}while(o!==null)}Lc(n)}catch(_){t=_,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Dc(){var e=ys.current;return ys.current=hs,e===null?hs:e}function Po(){(we===0||we===3||we===2)&&(we=4),Ne===null||(an&268435455)===0&&(ws&268435455)===0||qt(Ne,Ce)}function Cs(e,t){var n=X;X|=2;var s=Dc();(Ne!==e||Ce!==t)&&(Pt=null,ln(e,t));do try{yp();break}catch(a){Rc(e,a)}while(!0);if(Ha(),X=n,ys.current=s,ve!==null)throw Error(d(261));return Ne=null,Ce=0,we}function yp(){for(;ve!==null;)Mc(ve)}function wp(){for(;ve!==null&&!Vd();)Mc(ve)}function Mc(e){var t=Hc(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Lc(e):ve=t,wo.current=null}function Lc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=pp(n,t,Qe),n!==null){ve=n;return}}else{if(n=hp(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ve=null;return}}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);we===0&&(we=5)}function cn(e,t,n){var s=ne,a=tt.transition;try{tt.transition=null,ne=1,bp(e,t,n,s)}finally{tt.transition=a,ne=s}return null}function bp(e,t,n,s){do Rn();while(Vt!==null);if((X&6)!==0)throw Error(d(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(tu(e,o),e===Ne&&(ve=Ne=null,Ce=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||js||(js=!0,Uc(Fr,function(){return Rn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=tt.transition,tt.transition=null;var l=ne;ne=1;var c=X;X|=4,wo.current=null,mp(e,n),Ac(n,e),Hu(Aa),Mr=!!Ea,Aa=Ea=null,e.current=n,xp(n),Gd(),X=c,ne=l,tt.transition=o}else e.current=n;if(js&&(js=!1,Vt=e,Ns=a),o=e.pendingLanes,o===0&&($t=null),Qd(n.stateNode),Ue(e,xe()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],s(a.value,{componentStack:a.stack,digest:a.digest});if(bs)throw bs=!1,e=No,No=null,e;return(Ns&1)!==0&&e.tag!==0&&Rn(),o=e.pendingLanes,(o&1)!==0?e===ko?yr++:(yr=0,ko=e):yr=0,Bt(),null}function Rn(){if(Vt!==null){var e=Cl(Ns),t=tt.transition,n=ne;try{if(tt.transition=null,ne=16>e?16:e,Vt===null)var s=!1;else{if(e=Vt,Vt=null,Ns=0,(X&6)!==0)throw Error(d(331));var a=X;for(X|=4,F=e.current;F!==null;){var o=F,l=o.child;if((F.flags&16)!==0){var c=o.deletions;if(c!==null){for(var u=0;u<c.length;u++){var x=c[u];for(F=x;F!==null;){var k=F;switch(k.tag){case 0:case 11:case 15:xr(8,k,o)}var S=k.child;if(S!==null)S.return=k,F=S;else for(;F!==null;){k=F;var b=k.sibling,P=k.return;if(Nc(k),k===x){F=null;break}if(b!==null){b.return=P,F=b;break}F=P}}}var I=o.alternate;if(I!==null){var z=I.child;if(z!==null){I.child=null;do{var ge=z.sibling;z.sibling=null,z=ge}while(z!==null)}}F=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,F=l;else e:for(;F!==null;){if(o=F,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:xr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,F=f;break e}F=o.return}}var p=e.current;for(F=p;F!==null;){l=F;var m=l.child;if((l.subtreeFlags&2064)!==0&&m!==null)m.return=l,F=m;else e:for(l=p;F!==null;){if(c=F,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:vs(9,c)}}catch(_){me(c,c.return,_)}if(c===l){F=null;break e}var C=c.sibling;if(C!==null){C.return=c.return,F=C;break e}F=c.return}}if(X=a,Bt(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Tr,e)}catch{}s=!0}return s}finally{ne=n,tt.transition=t}}return!1}function Oc(e,t,n){t=Tn(n,t),t=rc(e,t,1),e=Ut(e,t,1),t=Re(),e!==null&&(Wn(e,1,t),Ue(e,t))}function me(e,t,n){if(e.tag===3)Oc(e,e,n);else for(;t!==null;){if(t.tag===3){Oc(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&($t===null||!$t.has(s))){e=Tn(n,e),e=sc(t,e,1),t=Ut(t,e,1),e=Re(),t!==null&&(Wn(t,1,e),Ue(t,e));break}}t=t.return}}function jp(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Ce&n)===n&&(we===4||we===3&&(Ce&130023424)===Ce&&500>xe()-jo?ln(e,0):bo|=n),Ue(e,t)}function Bc(e,t){t===0&&((e.mode&1)===0?t=1:(t=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var n=Re();e=Ct(e,t),e!==null&&(Wn(e,t,n),Ue(e,n))}function Np(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bc(e,n)}function kp(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(d(314))}s!==null&&s.delete(t),Bc(e,n)}var Hc;Hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Be=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Be=!1,up(e,t,n);Be=(e.flags&131072)!==0}else Be=!1,de&&(t.flags&1048576)!==0&&wi(t,ts,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;xs(e,t),e=t.pendingProps;var a=Nn(t,Ae.current);Pn(t,n),a=Ja(null,t,s,e,a,n);var o=Za();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(s)?(o=!0,Jr(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Va(t),a.updater=fs,t.stateNode=a,a._reactInternals=t,ao(t,s,e,n),t=co(null,t,s,!0,o,n)):(t.tag=0,de&&o&&Ra(t),_e(null,t,a,n),t=t.child),t;case 16:s=t.elementType;e:{switch(xs(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Cp(s),e=ct(s,e),a){case 0:t=io(null,t,s,e,n);break e;case 1:t=hc(null,t,s,e,n);break e;case 11:t=ic(null,t,s,e,n);break e;case 14:t=cc(null,t,s,ct(s.type,e),n);break e}throw Error(d(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ct(s,a),io(e,t,s,a,n);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ct(s,a),hc(e,t,s,a,n);case 3:e:{if(fc(t),e===null)throw Error(d(387));s=t.pendingProps,o=t.memoizedState,a=o.element,Pi(e,t),ls(t,s,null,n);var l=t.memoizedState;if(s=l.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Tn(Error(d(423)),t),t=mc(e,t,s,n,a);break e}else if(s!==a){a=Tn(Error(d(424)),t),t=mc(e,t,s,n,a);break e}else for(Ye=Mt(t.stateNode.containerInfo.firstChild),qe=t,de=!0,it=null,n=Ei(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),s===a){t=At(e,t,n);break e}_e(e,t,s,n)}t=t.child}return t;case 5:return Ii(t),e===null&&La(t),s=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,l=a.children,Pa(s,a)?l=null:o!==null&&Pa(s,o)&&(t.flags|=32),pc(e,t),_e(e,t,l,n),t.child;case 6:return e===null&&La(t),null;case 13:return xc(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=En(t,null,s,n):_e(e,t,s,n),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ct(s,a),ic(e,t,s,a,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,oe(ss,s._currentValue),s._currentValue=l,o!==null)if(lt(o.value,l)){if(o.children===a.children&&!Le.current){t=At(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){l=o.child;for(var u=c.firstContext;u!==null;){if(u.context===s){if(o.tag===1){u=Et(-1,n&-n),u.tag=2;var x=o.updateQueue;if(x!==null){x=x.shared;var k=x.pending;k===null?u.next=u:(u.next=k.next,k.next=u),x.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Wa(o.return,n,t),c.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(d(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Wa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}_e(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Pn(t,n),a=Ze(a),s=s(a),t.flags|=1,_e(e,t,s,n),t.child;case 14:return s=t.type,a=ct(s,t.pendingProps),a=ct(s.type,a),cc(e,t,s,a,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ct(s,a),xs(e,t),t.tag=1,Oe(s)?(e=!0,Jr(t)):e=!1,Pn(t,n),tc(t,s,a),ao(t,s,a,n),co(null,t,s,!0,e,n);case 19:return vc(e,t,n);case 22:return uc(e,t,n)}throw Error(d(156,t.tag))};function Uc(e,t){return bl(e,t)}function Sp(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,s){return new Sp(e,t,n,s)}function Fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cp(e){if(typeof e=="function")return Fo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ft)return 11;if(e===mt)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Es(e,t,n,s,a,o){var l=2;if(s=e,typeof e=="function")Fo(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case De:return dn(n.children,a,o,t);case Ke:l=8,a|=8;break;case Ft:return e=nt(12,n,t,a|2),e.elementType=Ft,e.lanes=o,e;case $e:return e=nt(13,n,t,a),e.elementType=$e,e.lanes=o,e;case at:return e=nt(19,n,t,a),e.elementType=at,e.lanes=o,e;case fe:return As(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bt:l=10;break e;case Kt:l=9;break e;case ft:l=11;break e;case mt:l=14;break e;case Me:l=16,s=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return t=nt(l,n,t,a),t.elementType=e,t.type=s,t.lanes=o,t}function dn(e,t,n,s){return e=nt(7,e,s,t),e.lanes=n,e}function As(e,t,n,s){return e=nt(22,e,s,t),e.elementType=fe,e.lanes=n,e.stateNode={isHidden:!1},e}function To(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function Io(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ep(e,t,n,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function zo(e,t,n,s,a,o,l,c,u){return e=new Ep(e,t,n,c,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Va(o),e}function Ap(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ze,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function Wc(e){if(!e)return Ot;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(d(171))}if(e.tag===1){var n=e.type;if(Oe(n))return gi(e,n,t)}return t}function $c(e,t,n,s,a,o,l,c,u){return e=zo(n,s,!0,e,a,o,l,c,u),e.context=Wc(null),n=e.current,s=Re(),a=Gt(n),o=Et(s,a),o.callback=t??null,Ut(n,o,a),e.current.lanes=a,Wn(e,a,s),Ue(e,s),e}function Ps(e,t,n,s){var a=t.current,o=Re(),l=Gt(a);return n=Wc(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(o,l),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Ut(a,t,l),e!==null&&(pt(e,a,l,o),os(e,a,l)),l}function Fs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _o(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}function Pp(){return null}var Gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ro(e){this._internalRoot=e}Ts.prototype.render=Ro.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));Ps(e,t,null,null)},Ts.prototype.unmount=Ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Ps(null,e,null,null)}),t[jt]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&Il(e)}};function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qc(){}function Fp(e,t,n,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var x=Fs(l);o.call(x)}}var l=$c(t,s,e,0,null,!1,!1,"",qc);return e._reactRootContainer=l,e[jt]=l.current,rr(e.nodeType===8?e.parentNode:e),on(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var c=s;s=function(){var x=Fs(u);c.call(x)}}var u=zo(e,0,!1,null,null,!1,!1,"",qc);return e._reactRootContainer=u,e[jt]=u.current,rr(e.nodeType===8?e.parentNode:e),on(function(){Ps(t,u,n,s)}),u}function zs(e,t,n,s,a){var o=n._reactRootContainer;if(o){var l=o;if(typeof a=="function"){var c=a;a=function(){var u=Fs(l);c.call(u)}}Ps(t,l,e,a)}else l=Fp(n,t,e,a,s);return Fs(l)}El=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(aa(t,n|1),Ue(t,xe()),(X&6)===0&&(_n=xe()+500,Bt()))}break;case 13:on(function(){var s=Ct(e,1);if(s!==null){var a=Re();pt(s,e,1,a)}}),_o(e,1)}},oa=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Re();pt(t,e,134217728,n)}_o(e,134217728)}},Al=function(e){if(e.tag===13){var t=Gt(e),n=Ct(e,t);if(n!==null){var s=Re();pt(n,e,t,s)}_o(e,t)}},Pl=function(){return ne},Fl=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}},Js=function(e,t,n){switch(t){case"input":if($s(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var a=Kr(s);if(!a)throw Error(d(90));el(s),$s(s,a)}}}break;case"textarea":al(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},fl=Eo,ml=on;var Tp={usingClientEntryPoint:!1,Events:[or,bn,Kr,pl,hl,Eo]},wr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ip={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yl(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Pp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_s.isDisabled&&_s.supportsFiber)try{Tr=_s.inject(Ip),xt=_s}catch{}}return We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp,We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Do(t))throw Error(d(200));return Ap(e,t,null,n)},We.createRoot=function(e,t){if(!Do(e))throw Error(d(299));var n=!1,s="",a=Gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=zo(e,1,!1,null,null,n,!1,s,a),e[jt]=t.current,rr(e.nodeType===8?e.parentNode:e),new Ro(t)},We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=yl(t),e=e===null?null:e.stateNode,e},We.flushSync=function(e){return on(e)},We.hydrate=function(e,t,n){if(!Is(t))throw Error(d(200));return zs(null,e,t,!0,n)},We.hydrateRoot=function(e,t,n){if(!Do(e))throw Error(d(405));var s=n!=null&&n.hydratedSources||null,a=!1,o="",l=Gc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=$c(t,null,e,1,n??null,a,!1,o,l),e[jt]=t.current,rr(e),s)for(e=0;e<s.length;e++)n=s[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ts(t)},We.render=function(e,t,n){if(!Is(t))throw Error(d(200));return zs(null,e,t,!1,n)},We.unmountComponentAtNode=function(e){if(!Is(e))throw Error(d(40));return e._reactRootContainer?(on(function(){zs(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1},We.unstable_batchedUpdates=Eo,We.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!Is(n))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return zs(e,t,n,!1,s)},We.version="18.3.1-next-f1338f8080-20240426",We}var td;function Up(){if(td)return Oo.exports;td=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(g){console.error(g)}}return i(),Oo.exports=Hp(),Oo.exports}var nd;function Wp(){if(nd)return Rs;nd=1;var i=Up();return Rs.createRoot=i.createRoot,Rs.hydrateRoot=i.hydrateRoot,Rs}var $p=Wp();const Vp=jd($p);function Gp(i,g){if(i instanceof RegExp)return{keys:!1,pattern:i};var d,j,w,y,L=[],v="",E=i.split("/");for(E[0]||E.shift();w=E.shift();)d=w[0],d==="*"?(L.push(d),v+=w[1]==="?"?"(?:/(.*))?":"/(.*)"):d===":"?(j=w.indexOf("?",1),y=w.indexOf(".",1),L.push(w.substring(1,~j?j:~y?y:w.length)),v+=~j&&!~y?"(?:/([^/]+?))?":"/([^/]+?)",~y&&(v+=(~j?"?":"")+"\\"+w.substring(y))):v+="/"+w;return{keys:L,pattern:new RegExp("^"+v+(g?"(?=$|/)":"/?$"),"i")}}var Uo={exports:{}},Wo={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function qp(){if(rd)return Wo;rd=1;var i=Bs();function g(D,U){return D===U&&(D!==0||1/D===1/U)||D!==D&&U!==U}var d=typeof Object.is=="function"?Object.is:g,j=i.useState,w=i.useEffect,y=i.useLayoutEffect,L=i.useDebugValue;function v(D,U){var W=U(),se=j({inst:{value:W,getSnapshot:U}}),Q=se[0].inst,K=se[1];return y(function(){Q.value=W,Q.getSnapshot=U,E(Q)&&K({inst:Q})},[D,W,U]),w(function(){return E(Q)&&K({inst:Q}),D(function(){E(Q)&&K({inst:Q})})},[D]),L(W),W}function E(D){var U=D.getSnapshot;D=D.value;try{var W=U();return!d(D,W)}catch{return!0}}function M(D,U){return U()}var V=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?M:v;return Wo.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:V,Wo}var sd;function Yp(){return sd||(sd=1,Uo.exports=qp()),Uo.exports}var Qp=Yp();const Kp=Lp.useInsertionEffect,Xp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jp=Xp?R.useLayoutEffect:R.useEffect,Zp=Kp||Jp,kd=i=>{const g=R.useRef([i,(...d)=>g[0](...d)]).current;return Zp(()=>{g[0]=i}),g[1]},eh="popstate",Jo="pushState",Zo="replaceState",th="hashchange",ad=[eh,Jo,Zo,th],nh=i=>{for(const g of ad)addEventListener(g,i);return()=>{for(const g of ad)removeEventListener(g,i)}},Sd=(i,g)=>Qp.useSyncExternalStore(nh,i,g),od=()=>location.search,rh=({ssrSearch:i}={})=>Sd(od,i!=null?()=>i:od),ld=()=>location.pathname,sh=({ssrPath:i}={})=>Sd(ld,i!=null?()=>i:ld),ah=(i,{replace:g=!1,state:d=null}={})=>history[g?Zo:Jo](d,"",i),oh=(i={})=>[sh(i),ah],id=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[id]>"u"){for(const i of[Jo,Zo]){const g=history[i];history[i]=function(){const d=g.apply(this,arguments),j=new Event(i);return j.arguments=arguments,dispatchEvent(j),d}}Object.defineProperty(window,id,{value:!0})}const lh=(i,g)=>g.toLowerCase().indexOf(i.toLowerCase())?"~"+g:g.slice(i.length)||"/",Cd=(i="")=>i==="/"?"":i,ih=(i,g)=>i[0]==="~"?i.slice(1):Cd(g)+i,ch=(i="",g)=>lh(cd(Cd(i)),cd(g)),cd=i=>{try{return decodeURI(i)}catch{return i}},Ed={hook:oh,searchHook:rh,parser:Gp,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:i=>i,aroundNav:(i,g,d)=>i(g,d)},Ad=R.createContext(Ed),Nr=()=>R.useContext(Ad),Pd={},Fd=R.createContext(Pd),dh=()=>R.useContext(Fd),Hs=i=>{const[g,d]=i.hook(i);return[ch(i.base,g),kd((j,w)=>i.aroundNav(d,ih(j,i.base),w))]},uh=()=>Hs(Nr()),Td=(i,g,d,j)=>{const{pattern:w,keys:y}=g instanceof RegExp?{keys:!1,pattern:g}:i(g||"*",j),L=w.exec(d)||[],[v,...E]=L;return v!==void 0?[!0,(()=>{const M=y!==!1?Object.fromEntries(y.map((D,U)=>[D,E[U]])):L.groups;let V={...E};return M&&Object.assign(V,M),V})(),...j?[v]:[]]:[!1,null]},ph=({children:i,...g})=>{var V,D,U;const d=Nr(),j=g.hook?Ed:d;let w=j;const[y,L=g.ssrSearch??""]=((V=g.ssrPath)==null?void 0:V.split("?"))??[];y&&(g.ssrSearch=L,g.ssrPath=y),g.hrefs=g.hrefs??((D=g.hook)==null?void 0:D.hrefs),g.searchHook=g.searchHook??((U=g.hook)==null?void 0:U.searchHook);let v=R.useRef({}),E=v.current,M=E;for(let W in j){const se=W==="base"?j[W]+(g[W]??""):g[W]??j[W];E===M&&se!==M[W]&&(v.current=M={...M}),M[W]=se,(se!==j[W]||se!==w[W])&&(w=M)}return R.createElement(Ad.Provider,{value:w,children:i})},dd=({children:i,component:g},d)=>g?R.createElement(g,{params:d}):typeof i=="function"?i(d):i,hh=i=>{let g=R.useRef(Pd);const d=g.current;return g.current=Object.keys(i).length!==Object.keys(d).length||Object.entries(i).some(([j,w])=>w!==d[j])?i:d},Ie=({path:i,nest:g,match:d,...j})=>{const w=Nr(),[y]=Hs(w),[L,v,E]=d??Td(w.parser,i,y,g),M=hh({...dh(),...v});if(!L)return null;const V=E?R.createElement(ph,{base:E},dd(j,M)):dd(j,M);return R.createElement(Fd.Provider,{value:M,children:V})},re=R.forwardRef((i,g)=>{const d=Nr(),[j,w]=Hs(d),{to:y="",href:L=y,onClick:v,asChild:E,children:M,className:V,replace:D,state:U,transition:W,...se}=i,Q=kd(be=>{be.ctrlKey||be.metaKey||be.altKey||be.shiftKey||be.button!==0||(v==null||v(be),be.defaultPrevented||(be.preventDefault(),w(L,i)))}),K=d.hrefs(L[0]==="~"?L.slice(1):d.base+L,d);return E&&R.isValidElement(M)?R.cloneElement(M,{onClick:Q,href:K}):R.createElement("a",{...se,onClick:Q,href:K,className:V!=null&&V.call?V(j===L):V,children:M,ref:g})}),Id=i=>Array.isArray(i)?i.flatMap(g=>Id(g&&g.type===R.Fragment?g.props.children:g)):[i],fh=({children:i,location:g})=>{const d=Nr(),[j]=Hs(d);for(const w of Id(i)){let y=0;if(R.isValidElement(w)&&(y=Td(d.parser,w.props.path,g||j,w.props.nest))[0])return R.cloneElement(w,{match:y})}return null},zd=R.createContext({theme:"light",setTheme:()=>{}});function mh({children:i,defaultTheme:g="light"}){const[d,j]=R.useState(g);return R.useEffect(()=>{document.documentElement.classList.toggle("dark",d==="dark")},[d]),r.jsx(zd.Provider,{value:{theme:d,setTheme:j},children:i})}const xh=()=>R.useContext(zd);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_d=(...i)=>i.filter((g,d,j)=>!!g&&g.trim()!==""&&j.indexOf(g)===d).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=R.forwardRef(({color:i="currentColor",size:g=24,strokeWidth:d=2,absoluteStrokeWidth:j,className:w="",children:y,iconNode:L,...v},E)=>R.createElement("svg",{ref:E,...vh,width:g,height:g,stroke:i,strokeWidth:j?Number(d)*24/Number(g):d,className:_d("lucide",w),...v},[...L.map(([M,V])=>R.createElement(M,V)),...Array.isArray(y)?y:[y]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(i,g)=>{const d=R.forwardRef(({className:j,...w},y)=>R.createElement(yh,{ref:y,iconNode:g,className:_d(`lucide-${gh(i)}`,j),...w}));return d.displayName=`${i}`,d};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=ue("Airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=ue("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=ue("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=ue("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=ue("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=ue("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=ue("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=ue("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=ue("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=ue("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=ue("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=ue("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=ue("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=ue("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=ue("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=ue("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=ue("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=ue("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Ph(){return r.jsxs("div",{className:"bg-synth-accent text-white text-center text-[13px] font-medium py-2.5 px-5 tracking-[0.01em]",children:[r.jsx("span",{children:"Synth is coming — join the waitlist ."}),r.jsxs("a",{href:"#waitlist",className:"underline underline-offset-[2px] ml-2 opacity-85 hover:opacity-100 transition-opacity inline-flex items-center gap-1",children:["Reserve your spot ",r.jsx(Us,{className:"w-3 h-3"})]})]})}const ud=[{label:"Marketing",desc:"Campaigns, content, and creative — on autopilot",icon:"📈",href:"/solutions/marketing"},{label:"Sales",desc:"Your pipeline, researched and ready before you wake up. Increase revenue",icon:"🤝",href:"/solutions/sales"},{label:"Finance",desc:"Analysis that used to take your team a week",icon:"💹",href:"/solutions/finance"},{label:"Product",desc:"Strategy, roadmap, discovery, onboarding & customer support ",icon:"🛍️",href:"/solutions/product"},{label:"Personal",desc:"Plans your day. Handles your tasks. Learns your life",icon:"🙋",href:"/solutions/personal"},{label:"Healthcare Admin",desc:"Claims, denials, scheduling & more",icon:"🏥",href:"/solutions/healthcare"}];function Fh(){const[i,g]=R.useState(!1),[d,j]=R.useState(!1),[w,y]=R.useState(!1),[L,v]=R.useState(!1),E=R.useRef(null),M=R.useRef(null),[V]=uh(),{theme:D,setTheme:U}=xh();return R.useEffect(()=>{const W=()=>v(window.scrollY>20);return window.addEventListener("scroll",W),()=>window.removeEventListener("scroll",W)},[]),R.useEffect(()=>{const W=se=>{E.current&&!E.current.contains(se.target)&&g(!1),M.current&&!M.current.contains(se.target)&&j(!1)};return document.addEventListener("mousedown",W),()=>document.removeEventListener("mousedown",W)},[]),R.useEffect(()=>{y(!1),g(!1),j(!1)},[V]),r.jsxs("nav",{className:`sticky top-0 z-50 transition-all duration-300 ${L?"bg-synth-bg/90 backdrop-blur-[20px] border-b border-synth-border":"bg-transparent"}`,children:[r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"flex items-center justify-between h-[60px]",children:[r.jsx("div",{className:"flex items-center gap-3",children:r.jsxs(re,{href:"/",className:"font-serif text-[24px] text-synth-text-1 tracking-[-0.3px] flex-shrink-0 flex items-center gap-2",children:[r.jsx("img",{src:"/logo.png",alt:"Synth logo",className:"h-[2.5rem] w-[2.5rem] object-contain"}),r.jsx("em",{children:"synth"})]})}),r.jsxs("div",{className:"hidden lg:flex items-center gap-0.5 flex-1 px-8",children:[r.jsxs("div",{className:"relative",ref:E,children:[r.jsxs("button",{onClick:()=>g(!i),className:`flex items-center gap-1 px-3 py-1.5 rounded-md text-[14px] font-normal transition-colors ${i?"text-synth-text-1 bg-black/[0.04]":"text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04]"}`,children:["Solutions",r.jsx(Ko,{className:`w-3.5 h-3.5 transition-transform duration-200 ${i?"rotate-180":""}`})]}),i&&r.jsx("div",{className:"absolute top-[calc(100%+8px)] left-0 bg-synth-surface border border-synth-border rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.04)] min-w-[560px] p-3 z-50 animate-fade-in",children:r.jsx("div",{className:"grid grid-cols-2 gap-0.5",children:ud.map(W=>r.jsxs(re,{href:W.href,className:"flex items-start gap-3 p-3 rounded-[10px] hover:bg-synth-surface-2 transition-colors",onClick:()=>g(!1),children:[r.jsx("div",{className:"w-9 h-9 rounded-md flex items-center justify-center text-[17px] bg-synth-accent-light flex-shrink-0",children:W.icon}),r.jsxs("div",{children:[r.jsx("div",{className:"text-[14px] font-medium text-synth-text-1",children:W.label}),r.jsx("div",{className:"text-[12px] text-synth-text-3 leading-[1.4]",children:W.desc})]})]},W.label))})})]}),r.jsx(re,{href:"/features",className:"px-3 py-1.5 rounded-md text-[14px] font-normal text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04] transition-colors",children:"Features"}),r.jsxs("div",{className:"relative",ref:M,children:[r.jsxs("button",{onClick:()=>j(!d),className:`flex items-center gap-1 px-3 py-1.5 rounded-md text-[14px] font-normal transition-colors ${d?"text-synth-text-1 bg-black/[0.04]":"text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04]"}`,children:["Resources",r.jsx(Ko,{className:`w-3.5 h-3.5 transition-transform duration-200 ${d?"rotate-180":""}`})]}),d&&r.jsx("div",{className:"absolute top-[calc(100%+8px)] left-0 bg-synth-surface border border-synth-border rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.04)] min-w-[200px] p-3 z-50 animate-fade-in",children:r.jsxs("div",{className:"mb-2 px-1",children:[r.jsx("div",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-2",children:"Compare"}),r.jsx(re,{href:"/compare/vs-chatgpt",className:"block px-3 py-2 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",onClick:()=>j(!1),children:"VS ChatGPT"}),r.jsx(re,{href:"/compare/vs-trixta",className:"block px-3 py-2 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",onClick:()=>j(!1),children:"VS Trixta"})]})})]}),r.jsx(re,{href:"/pricing",className:"px-3 py-1.5 rounded-md text-[14px] font-normal text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04] transition-colors",children:"Pricing"}),r.jsx("a",{href:"mailto:hello@synthai.world",className:"px-3 py-1.5 rounded-md text-[14px] font-normal text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04] transition-colors",children:"Enterprise"})]}),r.jsxs("div",{className:"hidden lg:flex items-center gap-3 flex-shrink-0",children:[r.jsx("a",{href:"mailto:hello@synthai.world",className:"text-[14px] font-medium text-synth-text-2 px-3.5 py-[7px] rounded-md hover:bg-black/[0.05] hover:text-synth-text-1 transition-all border border-transparent",children:"Contact us"}),r.jsx(re,{href:"/#waitlist",className:"text-[14px] font-medium text-white px-[18px] py-2 rounded-full bg-synth-text-1 hover:bg-[#2A2835] transition-colors",children:"Join waitlist"}),r.jsx("button",{type:"button",onClick:()=>U(D==="light"?"dark":"light"),className:"px-4 py-2 rounded-full bg-slate-700 text-white text-[14px] font-medium hover:bg-slate-600 transition-colors",children:D==="light"?"Dark mode":"Light mode"})]}),r.jsx("button",{className:"lg:hidden p-2",onClick:()=>y(!w),children:w?r.jsx(Ah,{className:"w-5 h-5"}):r.jsx(Nh,{className:"w-5 h-5"})})]})}),w&&r.jsxs("div",{className:"lg:hidden bg-synth-surface border-t border-synth-border px-4 py-4 space-y-1 shadow-lg",children:[r.jsx("div",{className:"text-[11px] font-semibold uppercase tracking-[1.5px] text-synth-text-3 mb-2 px-3",children:"Solutions"}),ud.map(W=>r.jsxs(re,{href:W.href,className:"flex items-center gap-3 px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:[r.jsx("span",{className:"text-[16px]",children:W.icon}),W.label]},W.label)),r.jsx("div",{className:"border-t border-synth-border my-2"}),r.jsx(re,{href:"/features",className:"block px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:"Features"}),r.jsx(re,{href:"/pricing",className:"block px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:"Pricing"}),r.jsx("a",{href:"mailto:hello@synth.ai",className:"block px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:"Enterprise"}),r.jsxs("div",{className:"border-t border-synth-border my-2 pt-2",children:[r.jsx("a",{href:"mailto:hello@synth.ai",className:"block w-full text-left px-3 py-2.5 text-[14px] text-synth-text-2",children:"Contact us"}),r.jsx(re,{href:"/#waitlist",className:"block w-full text-center mt-2 text-[14px] font-medium text-white px-4 py-2.5 rounded-full bg-synth-text-1",children:"Join waitlist"})]})]})]})}const Th=[{label:"Marketing",href:"/solutions/marketing"},{label:"Sales",href:"/solutions/sales"},{label:"Finance",href:"/solutions/finance"},{label:"Product",href:"/solutions/product"},{label:"Personal",href:"/solutions/personal"},{label:"Healthcare Admin",href:"/solutions/healthcare"}],Ih=[{label:"vs. Openclaw",href:"/compare/vsOpenclaw"},{label:"vs. ChatGPT",href:"/compare/vsChatgpt"},{label:"vs. Trixta",href:"/compare/vsTrixta"},{label:"vs. Nyla",href:"/compare/vsNyla"}],zh=[{label:"Features",href:"/#features"},{label:"Pricing",href:"/pricing"},{label:"API",href:"/api-docs"},{label:"Custom MCPs",href:"/mcp"}],_h=[{label:"Privacy Policy",href:"/privacy"},{label:"Terms of Service",href:"/terms"},{label:"POPIA Compliance",href:"/data-processing"},{label:"Data Processing",href:"/data-processing"},{label:"Cookie Policy",href:"/cookies"}];function Rh(){return r.jsx("footer",{className:"border-t border-synth-border bg-synth-surface",children:r.jsxs("div",{className:"wrap py-14 mx-auto max-w-7xl px-6",children:[r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-[1.8fr_repeat(4,1fr)] gap-8 mb-10",children:[r.jsxs("div",{className:"col-span-2 md:col-span-1",children:[r.jsxs(re,{href:"/",className:"font-serif text-[22px] text-synth-text-1 tracking-[-0.3px] font-medium",children:["synth",r.jsx("span",{className:"text-indigo-600",children:".ai"})]}),r.jsx("p",{className:"text-[13px] text-synth-text-3 leading-[1.65] mt-2 max-w-[200px]",children:"Bridging the GAP between thinking and doing(execution)—using the systems you already trust."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Solutions"}),r.jsx("ul",{className:"space-y-2",children:Th.map(i=>r.jsx("li",{children:r.jsx(re,{href:i.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:i.label})},i.label))})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Product"}),r.jsx("ul",{className:"space-y-2",children:zh.map(i=>r.jsx("li",{children:r.jsx(re,{href:i.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:i.label})},i.label))})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Compare"}),r.jsx("ul",{className:"space-y-2",children:Ih.map(i=>r.jsx("li",{children:r.jsx(re,{href:i.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:i.label})},i.label))})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Legal"}),r.jsx("ul",{className:"space-y-2",children:_h.map(i=>r.jsx("li",{children:r.jsx(re,{href:i.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:i.label})},i.label))})]})]}),r.jsxs("div",{className:"border-t border-synth-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3",children:[r.jsx("p",{className:"text-[12px] text-synth-text-3",children:"© 2026 Synth AI · hello@synthai.world"}),r.jsx("div",{className:"flex gap-3",children:["LinkedIn","X / Twitter","Instagram","WhatsApp"].map(i=>r.jsx("a",{href:"#",className:"text-[12px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:i},i))})]})]})})}const pd=[{icon:"📑",text:"Find new government and private tenders every morning"},{icon:"🏭",text:"Identify cheaper suppliers and negotiate better quotes"},{icon:"✍️",text:"Create a week's worth of LinkedIn posts from our blog"},{icon:"🎥",text:"Analyze top-performing TikTok videos and recommend winning hooks"},{icon:"📊",text:"Monitor our competitors and report every major change"},{icon:"💰",text:"Generate weekly cash flow forecasts from our accounting data"},{icon:"🤝",text:"Find, enrich and qualify 500 potential customers"},{icon:"📢",text:"Plan, create and launch our next marketing campaign"},{icon:"📄",text:"Review contracts and flag legal risks before signing"},{icon:"📦",text:"Monitor inventory and automatically reorder low stock"},{icon:"🎥",text:"Turn webinars into short-form videos and captions"},{icon:"🚚",text:"Track delayed shipments and notify affected customers"},{icon:"📈",text:"Research a new market and deliver a complete expansion report"}],Dh=["Sales","Marketing","Finance","Product","Personal Assistance","Healthcare Admin"];function Mh(){const[i,g]=R.useState(0),[d,j]=R.useState(""),[w,y]=R.useState(!1);R.useEffect(()=>{const E=setInterval(()=>{g(M=>(M+1)%pd.length)},3200);return()=>clearInterval(E)},[]);const L=E=>{E.preventDefault(),d.trim()&&(y(!0),setTimeout(()=>{y(!1),j("")},4500))},v=pd[i];return r.jsxs("section",{className:"relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",backgroundSize:"28px 28px",maskImage:"radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",WebkitMaskImage:"radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)"}}),r.jsx("div",{className:"wrap relative z-10",children:r.jsxs("div",{className:"text-center max-w-[800px] mx-auto",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 bg-synth-accent-light border border-synth-accent/20 text-synth-accent text-[13px] font-medium rounded-full px-4 py-1.5 mb-7",children:[r.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-synth-accent animate-blink"}),"Autonomous AI · Private Beta"]}),r.jsxs("h1",{className:"font-serif text-[clamp(44px,6.5vw,80px)] font-normal leading-[1.06] tracking-[-2px] text-synth-text-1 mb-5",children:["Meet Synth.",r.jsx("br",{}),"The autonomous AI that"," ",r.jsx("em",{className:"text-synth-accent",children:"gets work done"}),"for you"]}),r.jsx("div",{className:"flex justify-center flex-wrap gap-2 mb-8",children:Dh.map(E=>r.jsx("span",{className:"bg-synth-surface border border-synth-border-med rounded-full px-3 py-0.5 text-xs text-synth-text-2",children:E},E))}),r.jsxs("div",{className:"flex items-center justify-center gap-2.5 mb-8 flex-wrap",children:[r.jsx("span",{className:"text-[17px] text-synth-text-2",children:"Watch it"}),r.jsxs("div",{className:"inline-flex items-center gap-1.5 bg-synth-surface border border-synth-border-med rounded-full px-3.5 py-1.5 text-[14px] font-medium text-synth-text-1 shadow-sm transition-all duration-300",children:[r.jsx("span",{className:"text-[29px]",children:v.icon}),r.jsx("span",{children:v.text})]},i),r.jsx("span",{className:"text-[17px] text-synth-text-2",children:"for you"})]}),r.jsxs("form",{onSubmit:L,className:"flex gap-2 max-w-[420px] mx-auto mb-3.5",children:[r.jsx("input",{type:"email",value:d,onChange:E=>j(E.target.value),placeholder:"Enter your work email",required:!0,autoComplete:"email",className:"flex-1 bg-synth-surface border border-synth-border-med rounded-full px-5 py-3 text-[15px] text-synth-text-1 outline-none shadow-sm transition-all focus:border-synth-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] placeholder:text-synth-text-3"}),r.jsx("button",{type:"submit",disabled:w,className:`text-white rounded-full px-6 py-3 text-[15px] font-medium whitespace-nowrap transition-colors ${w?"bg-synth-green":"bg-synth-text-1 hover:bg-[#2A2835]"}`,children:w?"✓ You're on the list!":"Get early access"})]}),r.jsxs("p",{className:"text-[13px] text-synth-text-3",children:[r.jsx("strong",{className:"text-synth-text-2 font-medium",children:"2,240 people"})," ","already on the waitlist·"]})]})})]})}const Lh=[{time:"9:00 AM",title:"Client call — Ndali Group",detail:"I've pulled last week's notes and prepped 3 talking points for you",status:"Prepped",statusColor:"bg-blue-100 text-blue-700"},{time:"11:30 AM",title:"Reply to Lwazi re: contract",detail:"He's been waiting 2 days — I've drafted a reply for your review",status:"Urgent",statusColor:"bg-red-100 text-red-700"},{time:"2:00 PM",title:"Submit Q3 proposal",detail:"3 hours to deadline — want me to pull the draft now?",status:"Focus",statusColor:"bg-emerald-100 text-emerald-700"},{time:"5:30 PM",title:"Gym — Clifton CrossFit",detail:"I've blocked this. Traffic is light today, leave by 5:10",status:"Personal",statusColor:"bg-teal-100 text-teal-700"}],Oh=[{icon:Eh,title:"Conflict detected — 9 AM & 9:30 AM overlap",desc:"Your investor call was moved to 9 AM. Your team standup clashes. Want me to reschedule the standup or suggest alternatives?",primary:"Reschedule standup",secondary:"See options",accent:"bg-blue-600 text-white"},{icon:Ms,title:"Reminder — proposal due in 90 minutes",desc:"You haven't opened the draft yet. I can send it to you now or submit the current version if you're happy with it.",primary:"Send me the draft",secondary:"Snooze 30 min",accent:"bg-blue-600 text-white"},{icon:wh,title:"Flight price drop — Cape Town → London",desc:"Lufthansa dropped to R6,890 (was R7,240). You asked me to watch this. Book now?",primary:"Book it",secondary:"Ignore",accent:"bg-emerald-600 text-white"}];function Bh(){return r.jsx("section",{className:"py-24 bg-synth-surface",children:r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"grid gap-20",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-[12px] font-semibold uppercase tracking-[2px] text-synth-accent mb-4",children:"YOUR DAY, PLANNED"}),r.jsx("h2",{className:"font-display text-[clamp(38px,4.8vw,56px)] font-semibold tracking-[-0.04em] text-synth-text-1 max-w-[780px]",children:"Synth briefs you every morning"}),r.jsx("p",{className:"mt-5 max-w-3xl text-[17px] text-synth-text-2 leading-[1.8]",children:"Before your day starts, Synth reviews your calendar, emails, and priorities — then sends you a personalised plan. No prompting needed."})]}),r.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1.12fr_0.88fr]",children:[r.jsx("div",{className:"rounded-[32px] border border-synth-border bg-white shadow-[0_40px_120px_rgba(15,23,42,0.08)] p-8",children:r.jsxs("div",{className:"flex flex-col gap-6",children:[r.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-synth-text-3 uppercase tracking-[1.8px] mb-2",children:"Your day at a glance"}),r.jsxs("h3",{className:"text-[24px] font-semibold text-synth-text-1",children:["Good morning, Amara ",r.jsx("span",{"aria-hidden":"true",children:"👋"})]})]}),r.jsx("span",{className:"rounded-full border border-synth-border px-4 py-2 text-[13px] font-semibold text-synth-text-2",children:"Monday, 6:45 AM"})]}),r.jsxs("div",{className:"rounded-[28px] border border-synth-border bg-synth-bg p-5",children:[r.jsx("p",{className:"font-semibold text-synth-text-1 mb-2",children:"Your day at a glance"}),r.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.8]",children:"You have 3 meetings, a proposal deadline at 2 PM, and your flight to Jo'burg is Thursday — I've started your packing checklist. One thing needs urgent attention now."})]}),r.jsx("div",{className:"space-y-4",children:Lh.map(i=>r.jsxs("div",{className:"rounded-[24px] border border-synth-border bg-synth-bg p-5 shadow-sm",children:[r.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-semibold text-synth-text-2",children:i.time}),r.jsx("p",{className:"mt-2 text-[16px] font-semibold text-synth-text-1",children:i.title})]}),r.jsx("span",{className:`rounded-full px-3 py-1.5 text-[13px] font-semibold ${i.statusColor}`,children:i.status})]}),r.jsx("p",{className:"mt-3 text-[14px] text-synth-text-3 leading-[1.75]",children:i.detail})]},i.time))})]})}),r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{className:"rounded-[32px] border border-synth-border bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] p-8",children:[r.jsx("p",{className:"text-[12px] uppercase tracking-[2px] text-synth-accent mb-4",children:"Emergency alerts"}),r.jsx("h3",{className:"text-[32px] font-display font-semibold text-synth-text-1 mb-4",children:"Synth taps you when it matters"}),r.jsx("p",{className:"text-[16px] text-synth-text-2 leading-[1.8] mb-8",children:"When something urgent surfaces — a conflict, a missed message, a deadline creeping up — Synth pushes it immediately and offers to handle it."}),r.jsx("div",{className:"space-y-4",children:Oh.map(i=>{const g=i.icon;return r.jsxs("div",{className:"rounded-[24px] border border-synth-border bg-synth-bg p-5 shadow-sm",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx("div",{className:"grid h-11 w-11 place-items-center rounded-2xl bg-synth-accent-light text-synth-accent",children:r.jsx(g,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-base font-semibold text-synth-text-1",children:i.title}),r.jsx("p",{className:"text-sm text-synth-text-3",children:i.desc})]})]}),r.jsxs("div",{className:"flex flex-wrap gap-3",children:[r.jsx("button",{className:`rounded-full px-4 py-2 text-sm font-semibold ${i.accent}`,children:i.primary}),r.jsx("button",{className:"rounded-full border border-synth-border px-4 py-2 text-sm font-semibold text-synth-text-1 hover:border-synth-accent/50 transition-all",children:i.secondary})]})]},i.title)})})]}),r.jsxs("div",{className:"rounded-[32px] border border-synth-border bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] p-8",children:[r.jsx("p",{className:"text-[12px] uppercase tracking-[2px] text-synth-accent mb-4",children:"On-demand too"}),r.jsx("h3",{className:"text-[32px] font-display font-semibold text-synth-text-1 mb-4",children:"Ask it anything, anytime"}),r.jsx("p",{className:"text-[16px] text-synth-text-2 leading-[1.8] mb-8",children:"Beyond your daily plan, Synth handles anything you throw at it — just like messaging a capable friend."}),r.jsx("div",{className:"space-y-5",children:r.jsxs("div",{className:"rounded-[32px] border border-synth-border bg-synth-bg p-5",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx("span",{className:"grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-white",children:r.jsx(kh,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"font-semibold text-synth-text-1",children:"Synth"}),r.jsx("p",{className:"text-sm text-emerald-600",children:"Online"})]})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"rounded-[26px] bg-white p-4 text-[14px] text-synth-text-2 shadow-sm",children:[r.jsx("p",{children:"You have 3 things before noon. You've got a 40-min window at 8:20 — enough to prep. Here’s what I’d focus on:"}),r.jsxs("ul",{className:"mt-3 space-y-2 pl-4 text-synth-text-3",children:[r.jsx("li",{children:"• Their Q2 revenue dipped 12% — they’ll want solutions"}),r.jsx("li",{children:"• Open item from last call: delivery timeline"}),r.jsx("li",{children:"• They responded well to case studies last time"})]}),r.jsx("p",{className:"mt-3 text-[12px] text-synth-text-3",children:"Synth · 9:05 AM"})]}),r.jsxs("div",{className:"rounded-[26px] bg-synth-accent text-white p-4 text-[14px] shadow-sm",children:[r.jsx("p",{children:"What’s on my plate today and do I have time to prep for the Ndali call?"}),r.jsx("p",{className:"mt-2 text-[12px] text-synth-accent-light",children:"9:05 AM · ✓✓"})]}),r.jsxs("div",{className:"rounded-[26px] bg-synth-accent text-white p-4 text-[14px] shadow-sm self-end max-w-[75%]",children:[r.jsx("p",{children:"Perfect. Also remind me to call my mum at 7pm"}),r.jsx("p",{className:"mt-2 text-[12px] text-synth-accent-light",children:"9:06 AM · ✓✓"})]}),r.jsxs("div",{className:"rounded-[26px] bg-white p-4 text-[14px] text-synth-text-2 shadow-sm",children:[r.jsx("p",{children:"Done — I’ll ping you at 6:55 PM with a heads-up. Anything else before your 9 AM?"}),r.jsx("p",{className:"mt-3 text-[12px] text-synth-text-3",children:"Synth · 9:06 AM"})]})]})]})}),r.jsxs("div",{className:"mt-8 flex items-center justify-between gap-4",children:[r.jsxs(re,{href:"/#waitlist",className:"inline-flex items-center gap-2 rounded-full bg-synth-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors",children:["Explore Synth live",r.jsx(Us,{className:"h-4 w-4"})]}),r.jsx("span",{className:"rounded-full border border-synth-border px-4 py-2 text-sm text-synth-text-3",children:"Live chat preview"})]})]})]})]})]})})})}const Hh=[{icon:"📈",title:"Marketing",desc:"Your team has the ideas. Synth handles the execution. Campaigns, content, competitor research, and creative assets — produced at a pace your headcount can't match.",color:"#FFECE8",image:"/marketing.png",href:"/solutions/marketing"},{icon:"🤝",title:"Sales",desc:"Stop researching. Start selling. Synth enriches leads, writes personalised outreach, preps your deal briefs, and keeps your CRM clean — so you spend your day closing, not preparing.",color:"#E6F4FF",image:"/sales.png",href:"/solutions/sales"},{icon:"💹",title:"Finance",desc:"One analyst. Hundreds of companies. Synth builds financial models, collects live market data, researches firms in parallel, and delivers investment-ready outputs — at a scale no team can replicate manually.",color:"#F0FFF4",image:"/finance.png",href:"/solutions/finance"},{icon:"🧩",title:"Product",desc:"The foundations that used to take weeks — strategy, roadmaps, positioning, market segmentation, competitive maps — researched, drafted, and kept current by Synth. So your team can focus on the decisions only humans can make.",color:"#EEF2FF",image:"/product.png",href:"/solutions/product"},{icon:"🙋",title:"Personal",desc:"Most AI waits to be asked. Synth plans your morning before you wake up, flags what needs you before it becomes urgent, and handles the rest — in WhatsApp, where you already are.",color:"#FFF7ED",image:"/personal.png",href:"/solutions/personal"},{icon:"🏥",title:"Healthcare Admin",desc:"Resolve claim denials, apply insurance codes, manage scheduling, and send refill reminders — automating the most painful admin work in healthcare.",color:"#E8FAFF",image:"/healthcare.png",href:"/solutions/healthcare"}];function Uh(){return r.jsx("section",{className:"relative py-24 border-t border-synth-border sky-gradient overflow-hidden",children:r.jsxs("div",{className:"wrap relative z-10",children:[r.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-12",children:[r.jsx("p",{className:"text-[13px] uppercase tracking-[2px] text-synth-text-3 mb-4",children:"Built for every business function"}),r.jsx("h2",{className:"font-display text-[clamp(42px,5vw,64px)] font-semibold tracking-[-0.04em] text-synth-text-1 mb-4",children:"One platform, six business wings — alive and ready."}),r.jsx("p",{className:"text-[16px] text-synth-text-2 max-w-[720px] mx-auto leading-[1.8]",children:"Beautifully crafted workflows, vibrant product imagery, and a fast onboarding path that makes every function feel polished, confident, and unmistakably high-end."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",children:Hh.map(i=>r.jsxs(re,{href:i.href,className:"group relative overflow-hidden rounded-[32px] border border-synth-border bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_110px_rgba(15,23,42,0.12)]",style:{backgroundColor:i.color},children:[r.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 rounded-full opacity-50 blur-[34px]",style:{backgroundColor:i.color}}),r.jsxs("div",{className:"relative z-10",children:[r.jsx("div",{className:"mb-5 rounded-[28px] overflow-hidden border border-white/80 bg-white shadow-sm",children:r.jsx("img",{src:i.image,alt:i.title,className:"w-full h-[220px] object-contain bg-transparent"})}),r.jsx("h3",{className:"text-[20px] font-semibold text-synth-text-1 mb-3 font-display",children:i.title}),r.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.78] mb-6",children:i.desc}),r.jsxs("div",{className:"inline-flex items-center gap-2 text-[14px] font-semibold text-synth-accent",children:[r.jsxs("span",{children:["Explore ",i.title]}),r.jsx(Us,{className:"w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"})]})]})]},i.title))})]})})}const hd=[{id:"research",label:"Research & Analysis",tools:[{icon:"🔍",name:"Deep Research",desc:"Web + document"},{icon:"📊",name:"Data Analysis",desc:"Charts & models"},{icon:"🧠",name:"Long-term Memory",desc:"Learns over time"}]},{id:"productivity",label:"Productivity",tools:[{icon:"📅",name:"Scheduling",desc:"Calendar, TODO & booking"},{icon:"📝",name:"Documents",desc:"PDFs, forms, slides"},{icon:"⚡",name:"Automations",desc:"Multi-step tasks"}]},{id:"communication",label:"Communication",tools:[{icon:"✉️",name:"Communications",desc:"Email & messaging"},{icon:"💬",name:"WhatsApp / Instagram",desc:"Your existing apps"},{icon:"🌐",name:"Browser Agent",desc:"Web browsing"}]},{id:"integrations",label:"Integrations",tools:[{icon:"🔌",name:"Connectors",desc:"200+ integrations"}]}],fd=[{name:"WhatsApp",file:"WhatsApp.jpg"},{name:"YouTube",file:"Youtube.png"},{name:"GitHub",file:"Github.jpg"},{name:"Xero",file:"Xero.png"},{name:"Instagram",file:"instagram.jpg"},{name:"Asana",file:"asana.png"},{name:"Slack",file:"slack.png"},{name:"Figma",file:"Figma.png"},{name:"PayPal",file:"Paypal.png"},{name:"Shopify",file:"Shopify.jpg"},{name:"Gmail",file:"gmail.jpg"},{name:"Google Meet",file:"Google meet.jpg"},{name:"Google Calendar",file:"google calendar.png"},{name:"Google Drive",file:"google drive.png"},{name:"Dropbox",file:"Dropbox.png"},{name:"HubSpot",file:"hubspot.png"},{name:"Meta Ads Manager",file:"meta ads manager.png"},{name:"Microsoft 365",file:"microsoft365.jpg"},{name:"Notion",file:"notion.png"},{name:"Sage",file:"sage.png"},{name:"Salesforce",file:"salesforce.png"},{name:"SARS eFiling",file:"sars efiling.png"},{name:"Stripe",file:"stripe.png"},{name:"TikTok",file:"tiktok.png"},{name:"Yoco",file:"Yoco.png"},{name:"iKhokha",file:"ikhokha.png"},{name:"Airbnb",file:"airbnb.png"}];function Wh(){const[i,g]=R.useState("research"),[d,j]=R.useState(!1),w=hd.find(y=>y.id===i);return r.jsx("section",{className:"py-24 border-t border-synth-border",id:"features",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"mb-16 text-center",children:[r.jsx("p",{className:"eyebrow text-synth-text-3 uppercase tracking-wider mb-4",children:"One platform. Every capability."}),r.jsx("h2",{className:"section-title text-4xl md:text-5xl font-bold mb-6",children:"Everything in a single agent"}),r.jsx("p",{className:"section-sub text-lg text-synth-text-2 max-w-2xl mx-auto",children:"Synth brings together research, communication, scheduling, documents, and integrations — all accessible from where you already work."})]}),r.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-12",children:hd.map(y=>r.jsx("button",{onClick:()=>g(y.id),className:`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${i===y.id?"bg-synth-accent text-white shadow-lg shadow-synth-accent/30":"bg-synth-surface border border-synth-border text-synth-text-2 hover:border-synth-accent/50 hover:bg-synth-surface/80"}`,children:y.label},y.id))}),r.jsx("div",{className:"max-w-5xl mx-auto",children:(w==null?void 0:w.id)==="integrations"?r.jsx("div",{className:"space-y-6",children:r.jsxs("div",{className:"rounded-3xl border border-synth-border bg-synth-surface/80 p-6 shadow-sm shadow-synth-border/10",children:[r.jsxs("div",{className:"mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",children:[r.jsx("div",{children:r.jsx("h3",{className:"text-3xl md:text-4xl font-semibold text-synth-text-1",children:"Seamless MCP integrations"})}),r.jsxs("button",{type:"button",onClick:()=>j(y=>!y),className:"inline-flex items-center justify-center gap-2 rounded-full border border-synth-border bg-white/5 px-5 py-3 text-sm font-medium text-synth-text-1 transition hover:border-synth-accent/50 hover:bg-synth-accent/10",children:[d?"Hide connectors":"Show more connectors",r.jsx("span",{className:`transition-transform ${d?"rotate-180":""}`,children:"▼"})]})]}),r.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:fd.slice(0,9).map(y=>r.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 rounded-3xl border border-synth-border bg-white/5 p-4 shadow-sm shadow-synth-border/5 transition hover:scale-[1.02] hover:border-synth-accent/40",children:[r.jsx("img",{className:"h-16 w-auto object-contain",src:encodeURI(`/connectors/${y.file}`),alt:y.name}),r.jsx("span",{className:"text-center text-sm font-medium text-synth-text-2",children:y.name})]},y.name))}),d&&r.jsx("div",{className:"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3",children:fd.slice(9).map(y=>r.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 rounded-3xl border border-synth-border bg-white/5 p-4 shadow-sm shadow-synth-border/5 transition hover:scale-[1.02] hover:border-synth-accent/40",children:[r.jsx("img",{className:"h-16 w-auto object-contain",src:encodeURI(`/connectors/${y.file}`),alt:y.name}),r.jsx("span",{className:"text-center text-sm font-medium text-synth-text-2",children:y.name})]},y.name))})]})}):r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max",children:w==null?void 0:w.tools.map((y,L)=>{const v=L===0,E=L===w.tools.length-1&&w.tools.length%2===1;return r.jsxs("div",{className:`group relative overflow-hidden rounded-2xl border border-synth-border bg-gradient-to-br from-synth-surface to-synth-surface/50 p-6 transition-all duration-500 hover:shadow-xl hover:border-synth-accent/40 hover:scale-105 ${v?"md:col-span-1 md:row-span-2":""} ${E?"lg:col-span-2":""}`,children:[r.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-synth-accent/5 to-transparent pointer-events-none"}),r.jsxs("div",{className:`relative z-10 flex flex-col ${v?"h-full justify-between":""}`,children:[r.jsxs("div",{children:[r.jsx("div",{className:`mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 origin-left ${v?"text-5xl":"text-3xl"}`,children:y.icon}),r.jsx("h3",{className:`font-semibold text-synth-text-1 mb-2 transition-colors duration-300 group-hover:text-synth-accent ${v?"text-xl":"text-base"}`,children:y.name})]}),r.jsx("p",{className:`text-synth-text-3 transition-colors duration-300 group-hover:text-synth-text-2 ${v?"text-base":"text-sm"}`,children:y.desc})]}),r.jsx("div",{className:"absolute bottom-0 left-0 h-1 bg-gradient-to-r from-synth-accent to-transparent w-0 group-hover:w-full transition-all duration-500"})]},y.name)})})}),r.jsxs("div",{className:"mt-16 text-center",children:[r.jsx("p",{className:"text-synth-text-2 mb-6",children:"Ready to experience hands on ai execution?"}),r.jsx("button",{className:"px-8 py-3 rounded-full bg-synth-accent text-white font-medium hover:shadow-lg hover:shadow-synth-accent/40 transition-all duration-300 hover:scale-105",children:"Get Started Free"})]})]})})}const $h=[{tier:"Starter",monthly:15,annual:12.5,desc:"Standard monthly usage",cta:"Get started",featured:!1,credits:"4,000 credits per month",features:[{icon:Go,text:"300 refresh credits everyday"},{icon:Yo,text:"4,000 credits per month"},{icon:qo,text:"In-depth research for everyday tasks"},{icon:jr,text:"Professional websites for standard output"},{icon:Os,text:"Insightful slides for regular content"},{icon:Vo,text:"Task scaling with Wide Research"},{icon:Ls,text:"Early access to beta features"},{icon:Ms,text:"20 concurrent tasks"},{icon:$o,text:"20 scheduled tasks"}]},{tier:"Pro",monthly:35,annual:29.1666,desc:"Customizable monthly usage",cta:"Get started",featured:!0,credits:"8,000 credits / month",features:[{icon:Go,text:"300 refresh credits everyday"},{icon:Yo,text:"8,000 credits per month"},{icon:qo,text:"In-depth research with self-set usage"},{icon:jr,text:"Professional websites for changing needs"},{icon:Os,text:"Insightful slides for steady creation"},{icon:Vo,text:"Wide Research scaled to your chosen plan"},{icon:Ls,text:"Early access to beta features"},{icon:Ms,text:"20 concurrent tasks"},{icon:$o,text:"20 scheduled tasks"}]},{tier:"Max",monthly:170,annual:141.6666,desc:"Extended usage for productivity",cta:"Get started",featured:!1,credits:"40,000 credits / month",specialFeature:{icon:Sh,text:"Free Cloud Computer",color:"text-blue-500"},features:[{icon:Go,text:"300 refresh credits everyday"},{icon:Yo,text:"40,000 credits per month"},{icon:qo,text:"In-depth research for large-scale tasks"},{icon:jr,text:"Professional websites with data analytics"},{icon:Os,text:"Insightful slides for batch production"},{icon:Vo,text:"Wide Research for sustained heavy use"},{icon:Ls,text:"Early access to beta features"},{icon:Ms,text:"20 concurrent tasks"},{icon:$o,text:"20 scheduled tasks"}]}];function Md(){const[i,g]=R.useState(!1);return r.jsx("section",{className:"py-24 bg-white",id:"pricing",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("h2",{className:"text-5xl font-serif font-medium text-gray-900 mb-12",children:"synth Pricing Plans"}),r.jsxs("div",{className:"inline-flex p-1 bg-gray-100 rounded-xl mb-4",children:[r.jsx("button",{onClick:()=>g(!1),className:`px-6 py-2 text-sm font-medium rounded-lg transition-all ${i?"text-gray-500 hover:text-gray-700":"bg-white shadow-sm text-gray-900"}`,children:"Monthly"}),r.jsx("button",{onClick:()=>g(!0),className:`px-6 py-2 text-sm font-medium rounded-lg transition-all ${i?"bg-white shadow-sm text-gray-900":"text-gray-500 hover:text-gray-700"}`,children:"Annually · Save 17%"})]})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto",children:$h.map(d=>r.jsxs("div",{className:`relative bg-white border border-gray-200 rounded-[32px] p-8 transition-all hover:shadow-xl ${d.featured?"ring-1 ring-gray-900":""}`,children:[r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"flex items-baseline gap-1 mb-6",children:[r.jsx("span",{className:"text-4xl font-medium text-gray-900",children:"$"}),r.jsx("span",{className:"text-6xl font-medium text-gray-900 tracking-tight",children:i?Math.floor(d.annual):d.monthly}),r.jsx("span",{className:"text-lg text-gray-400",children:"/ month"})]}),r.jsx("p",{className:"text-gray-500 text-lg mb-8",children:d.desc}),r.jsx("button",{className:"w-full py-4 bg-gray-900 text-white rounded-2xl font-medium text-lg hover:bg-gray-800 transition-colors",children:d.cta})]}),r.jsxs("div",{className:"mb-8 p-4 bg-gray-50 rounded-2xl flex items-center justify-between group cursor-pointer border border-transparent hover:border-gray-200 transition-all",children:[r.jsx("span",{className:"text-gray-700 font-medium",children:d.credits}),r.jsx(Ko,{className:"w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"})]}),r.jsxs("div",{className:"space-y-4",children:[d.specialFeature&&r.jsxs("div",{className:`flex items-center gap-3 ${d.specialFeature.color} font-medium`,children:[r.jsx(d.specialFeature.icon,{className:"w-5 h-5"}),r.jsx("span",{className:"underline decoration-2 underline-offset-4 cursor-pointer",children:d.specialFeature.text})]}),d.features.map((j,w)=>r.jsxs("div",{className:"flex items-center gap-3 text-gray-600",children:[r.jsx(j.icon,{className:"w-5 h-5 text-gray-400 flex-shrink-0"}),r.jsx("span",{className:"text-[15px]",children:j.text}),r.jsx(Ls,{className:"w-4 h-4 text-gray-300 ml-auto cursor-help"})]},w))]})]},d.tier))}),r.jsxs("div",{className:"mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{className:"bg-gray-50 rounded-[32px] p-8 flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-all",children:[r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsx("div",{className:"w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm",children:r.jsx(Os,{className:"w-7 h-7 text-gray-900"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-xl font-medium text-gray-900",children:"Synth Plans for Teams & Businesses"}),r.jsx("p",{className:"text-gray-500",children:"Flexible plans for teams of all sizes."})]})]}),r.jsx("a",{href:"/#waitlist",className:"px-6 py-2.5 bg-white border border-gray-200 rounded-xl font-medium text-gray-900 hover:bg-gray-50 transition-all",children:"Get Team"})]}),r.jsxs("div",{className:"bg-gray-50 rounded-[32px] p-8 flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-all",children:[r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsx("div",{className:"w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm",children:r.jsx(jr,{className:"w-7 h-7 text-gray-900"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-xl font-medium text-gray-900",children:"Security and Compliance"}),r.jsx("p",{className:"text-gray-500",children:"Enterprise-grade security and certifications."})]})]}),r.jsx("a",{href:"/#waitlist",className:"px-6 py-2.5 bg-white border border-gray-200 rounded-xl font-medium text-gray-900 hover:bg-gray-50 transition-all",children:"Learn more"})]})]})]})})}function Vh(){const[i,g]=R.useState(""),[d,j]=R.useState(!1),w=y=>{y.preventDefault(),i.trim()&&(j(!0),setTimeout(()=>{j(!1),g("")},4500))};return r.jsxs("section",{className:"py-24 border-t border-synth-border relative overflow-hidden",id:"waitlist",children:[r.jsx("div",{className:"absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-synth-accent-light rounded-full pointer-events-none",style:{filter:"blur(80px)",opacity:.6}}),r.jsx("div",{className:"wrap relative z-10",children:r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[r.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"This is what comes after software. Your business on autopilot, all in one platform."}),r.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"We're building something we'd want to use ourselves. you'll be first to get access when we launch, Join the waitlist!!"}),r.jsxs("form",{onSubmit:w,className:"flex gap-2 max-w-[380px] mx-auto mb-3.5",children:[r.jsx("input",{type:"email",value:i,onChange:y=>g(y.target.value),placeholder:"your@email.com",required:!0,className:"flex-1 bg-synth-bg border border-synth-border-med rounded-full px-5 py-3 text-[14px] text-synth-text-1 outline-none transition-all focus:border-synth-accent"}),r.jsx("button",{type:"submit",disabled:d,className:`text-white rounded-full px-5 py-3 text-[14px] font-medium transition-colors ${d?"bg-synth-green":"bg-synth-accent hover:bg-[#1D4ED8]"}`,children:d?"✓ You're on the list!":"Join waitlist"})]}),r.jsx("p",{className:"text-[12px] text-synth-text-3",children:"No spam. No commitment. Just early access."}),r.jsxs("div",{className:"flex justify-center gap-5 mt-5",children:[r.jsx("a",{href:"mailto:hello@synth.ai?subject=API access",className:"text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors",children:"⟨/⟩ API access"}),r.jsx("a",{href:"mailto:healthcare@synthai.world",className:"text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors",children:"🏥 Healthcare demo"}),r.jsx("a",{href:"mailto:hello@synthai.world?subject=Enterprise",className:"text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors",children:"🏢 Enterprise"})]})]})})]})}function Gh(){return r.jsxs("div",{children:[r.jsx(Mh,{}),r.jsx(Bh,{}),r.jsx(Uh,{}),r.jsx(Wh,{}),r.jsx(Md,{}),r.jsx(Vh,{})]})}function kr({eyebrow:i,headline:g,headlineAccent:d,subhead:j,ctaText:w,ctaHref:y,workflowTitle:L,workflowSub:v,workflows:E,heroImage:M,heroImageAlt:V}){return r.jsxs("div",{className:"min-h-screen",children:[r.jsx("section",{className:"pt-20 pb-12 border-b border-synth-border overflow-hidden",children:r.jsxs("div",{className:"wrap relative",children:[r.jsx(re,{href:"/",className:"absolute right-4 top-4 z-20 rounded-full border border-synth-border bg-white p-2 shadow-sm transition hover:scale-[1.02]",children:r.jsx("img",{src:"/logo.png",alt:"Synth home",className:"h-12 w-12 object-contain"})}),M&&r.jsx("div",{className:"overflow-hidden rounded-[32px] border border-synth-border bg-synth-surface shadow-[0_24px_80px_rgba(15,23,42,0.08)]",children:r.jsx("img",{src:M,alt:V??i,className:"w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover"})}),r.jsxs("div",{className:"mt-10 max-w-[780px] mx-auto text-center",children:[r.jsx("p",{className:"eyebrow",children:i}),r.jsxs("h1",{className:"font-serif text-[clamp(36px,5vw,60px)] font-normal leading-[1.1] tracking-[-1px] text-synth-text-1 mb-4",children:[g,r.jsx("br",{}),r.jsx("em",{className:"text-synth-accent",children:d})]}),r.jsx("p",{className:"text-[17px] text-synth-text-2 leading-[1.7] max-w-[640px] mx-auto mb-8",children:j}),r.jsx(re,{href:y,className:"inline-flex items-center gap-2 bg-synth-text-1 text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#2A2835] transition-colors",children:w})]})]})}),r.jsx("section",{className:"py-20",children:r.jsxs("div",{className:"wrap",children:[r.jsx("p",{className:"eyebrow",children:"Only Synth Can Do"}),r.jsx("h2",{className:"section-title",children:L}),r.jsx("p",{className:"section-sub",children:v}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-[900px] mx-auto",children:E.map((D,U)=>r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[16px] p-7 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-synth-accent/20 transition-all duration-200",children:[r.jsx("span",{className:"inline-block text-[11px] font-semibold uppercase tracking-[1px] rounded-full px-2.5 py-0.5 mb-3.5",style:{background:D.tagColor,color:D.tagText},children:D.tag}),r.jsx("h3",{className:"text-[15px] font-semibold text-synth-text-1 mb-1.5",children:D.title}),r.jsx("p",{className:"text-[13px] text-synth-text-2 leading-[1.6]",children:D.desc}),r.jsxs("div",{className:"inline-flex items-center gap-1 text-[12px] text-synth-accent font-medium mt-3.5 border-b border-transparent hover:border-synth-accent transition-colors cursor-pointer",children:["Watch how it works ",r.jsx(Us,{className:"w-3.5 h-3.5"})]})]},U))})]})}),r.jsx("section",{className:"py-20 border-t border-synth-border",children:r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[r.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"Come and see what done actually looks like!!"}),r.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"Join the waitlist to be first when this solution launches."}),r.jsxs("form",{className:"flex gap-2 max-w-[380px] mx-auto mb-3",onSubmit:D=>{D.preventDefault(),alert("Thanks! You're on the list.")},children:[r.jsx("input",{type:"email",placeholder:"your@email.com",required:!0,className:"flex-1 bg-synth-bg border border-synth-border-med rounded-full px-5 py-3 text-[14px] text-synth-text-1 outline-none transition-all focus:border-synth-accent"}),r.jsx("button",{type:"submit",className:"bg-synth-accent text-white rounded-full px-5 py-3 text-[14px] font-medium hover:bg-[#1D4ED8] transition-colors",children:"Join waitlist"})]})]})})})]})}const qh=[{tag:"Campaign Design",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Generate on-brand campaign assets at scale",desc:"Produce dozens of design variations for event posters, ad creatives, and social banners — with visual consistency maintained across every format and size."},{tag:"Competitor Intelligence",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Uncover actionable market intelligence",desc:"Automate competitor benchmarking, audience research, and traffic analysis. Deploy hundreds of agents in parallel to surface insights that drive real growth."},{tag:"Social Media",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Batch generate multi-format content",desc:"Turn blog posts, reports, or raw data into polished, platform-ready social graphics and carousels for LinkedIn, Instagram, Twitter, and more — simultaneously."},{tag:"Marketing Ops",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Turn data into actionable insights",desc:"Upload any marketing dataset — campaign metrics, keyword data, survey results — and get clear, presentation-ready visualisations in minutes."}];function Yh(){return r.jsx(kr,{eyebrow:"Synth for Marketing",headline:"The autonomous engine for",headlineAccent:"your entire marketing lifecycle",subhead:"From research to campaign assets to analysis — Synth handles complex, multi-step marketing workflows from start to finish in a single prompt.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end marketing workflows",workflowSub:"One prompt sets the entire workflow in motion. Synth handles every step autonomously.",workflows:qh,heroImage:"/marketing.png",heroImageAlt:"Marketing solution image"})}const Qh=[{tag:"Prospecting",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Research and enrich leads at scale",desc:"Deploy agents to research hundreds of prospects simultaneously — pulling company data, contact details, funding history, and recent news into a structured brief."},{tag:"Outreach",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Draft hyper-personalised cold outreach",desc:"Generate tailored email sequences and LinkedIn messages using each prospect's real context — their role, company news, and stated priorities."},{tag:"Deal Intelligence",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Prepare for every meeting in minutes",desc:"Before any call, Synth builds a deal brief — company overview, stakeholder map, likely objections, and recommended talking points — automatically."},{tag:"CRM Ops",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Keep your CRM clean without lifting a finger",desc:"Synth logs call notes, updates deal stages, flags stale opportunities, and sends follow-up sequences — synced to Salesforce, HubSpot, or your CRM of choice."}];function Kh(){return r.jsx(kr,{eyebrow:"Synth for Sales",headline:"From cold outreach",headlineAccent:"to closed deals",subhead:"Synth researches prospects, enriches leads, drafts personalised outreach, and prepares deal intelligence — autonomously, at the scale your pipeline needs.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end sales workflows",workflowSub:"From lead identification to closed deal — handled in a single prompt.",workflows:Qh,heroImage:"/sales.png",heroImageAlt:"Sales solution image"})}const Xh=[{tag:"Investment Analysis",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Build live multi-timeframe chart dashboards",desc:"Perform technical analysis on any stock or asset and create an interactive web report to visualise findings in real time — shareable with one link."},{tag:"Research at Scale",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Collect financial reports for hundreds of firms",desc:"Automatically gather quarterly and annual reports for hundreds of public companies and compile them into a structured, searchable directory."},{tag:"Financial Modelling",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Build three-statement models from annual reports",desc:"Upload a company's annual report and get a complete DCF or three-statement model in Excel — formulas, assumptions, and sensitivity tables included."},{tag:"Market Intelligence",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Size and validate new market opportunities",desc:"Research addressable market segments using parallel agents — competitive analysis, demand signals, and growth projections delivered in a structured report."}];function Jh(){return r.jsx(kr,{eyebrow:"Synth for Finance",headline:"From raw data to",headlineAccent:"financial intelligence",subhead:"Build financial models, analyse live market data, research hundreds of firms in parallel, and produce investment-ready deliverables — in one prompt.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end finance workflows",workflowSub:"Go from raw data to final deliverable without leaving your chat window.",workflows:Xh,heroImage:"/finance.png",heroImageAlt:"Finance solution image"})}const Zh=[{tag:"Discovery",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Synthesise user feedback into actionable themes",desc:"Upload interview transcripts, support tickets, or review data — Synth clusters feedback into prioritised themes with evidence-backed recommendations."},{tag:"Documentation",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Draft complete PRDs from a brief",desc:"Describe a feature in plain language and Synth produces a full product requirements document — user stories, acceptance criteria, edge cases, and open questions included."},{tag:"Competitive Research",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Map the competitive landscape in minutes",desc:"Analyse competitors' product pages, changelogs, and reviews simultaneously. Get a structured teardown of features, positioning gaps, and opportunities."},{tag:"Roadmapping",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Build data-informed roadmap proposals",desc:"Combine user feedback, business priorities, and competitive signals into a draft roadmap — with rationale for each item and trade-off analysis built in."}];function ef(){return r.jsx(kr,{eyebrow:"Synth for Product",headline:"From ideas to",headlineAccent:"shipped features",subhead:"Draft PRDs, run competitive research, generate spec documents, synthesise user feedback, and prototype ideas — all from a single conversation.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end product workflows",workflowSub:"From discovery to delivery — Synth handles the research so your team can focus on building.",workflows:Zh,heroImage:"/product.png",heroImageAlt:"Product solution image"})}const tf=[{tag:"Daily Planning",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Morning brief delivered before your day starts",desc:"Synth reviews your calendar, emails, and open tasks overnight — then sends you a personalised briefing with a prioritised plan before you even open your laptop."},{tag:"Emergency Alerts",tagColor:"#FDECEA",tagText:"#C0392B",title:"Tapped on the shoulder when it matters",desc:"Meeting conflicts, missed messages, deadline creep, price drops on watched items — Synth surfaces what needs you immediately and offers to handle it."},{tag:"Autonomous Tasks",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"One message. Synth handles the rest.",desc:"Give Synth a complex, multi-step task — research, book, draft, send — and walk away. It executes every step in the background and reports back when done."},{tag:"Long-term Memory",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Gets smarter the longer you use it",desc:"Synth remembers your preferences, your relationships, your recurring tasks, and your goals — so it needs less instruction and gives better results over time."}];function nf(){return r.jsx(kr,{eyebrow:"Synth Personal",headline:"Your proactive AI",headlineAccent:"chief of staff",subhead:"Synth plans your day, pushes urgent tasks, and handles complex work end-to-end — all inside WhatsApp or Telegram. No new app to learn.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"What makes Synth Personal different",workflowSub:"Proactive. Not reactive. Every other AI waits for you to ask. Synth pushes tasks to you.",workflows:tf,heroImage:"/personal.png",heroImageAlt:"Personal solution image"})}const rf=[{icon:"🏷️",title:"Insurance Code Automation",desc:"Automatically applies ICD-10, CPT, and HCPCS codes to patient records and claims. Reduces coding errors and speeds up submission.",detail:"Supports South African medical scheme tariff codes (NHRPL) and international coding standards"},{icon:"❌",title:"Claim Denial Resolution",desc:"Identifies denial patterns, drafts appeal letters, tracks resubmission deadlines, and monitors payer decisions — all autonomously.",detail:"Average denial resolution time reduced from 14 days to under 48 hours"},{icon:"📋",title:"Payer Rule Monitoring",desc:"Tracks payer policy changes across medical schemes and insurers. Alerts your admin team before rule changes cause claim failures.",detail:"Monitors Discovery Health, Bonitas, Medihelp, Momentum, and all major SA medical schemes"},{icon:"📅",title:"Appointment & Scheduling",desc:"Manages patient bookings, sends reminders, handles cancellations and rescheduling, and optimises doctor availability — via WhatsApp.",detail:"Patients can confirm, cancel, or reschedule via a simple WhatsApp message — no app download needed"},{icon:"💊",title:"Refill Reminders — Chronic Disease",desc:"Automatically identifies patients due for repeat prescriptions and sends personalised reminders via WhatsApp or SMS, with one-tap confirmation.",detail:"Designed for chronic conditions: diabetes, hypertension, HIV/ARV management, asthma, and more"},{icon:"🔗",title:"EHR Integrations",desc:"Connects to your existing patient management and EHR systems. Synth reads and writes data — no double-entry, no manual exports.",detail:"Integrates with GoodX, Elixir, DragonWave, and custom hospital management systems via API"},{icon:"📁",title:"Patient Management",desc:"Handles admissions, records, and consent workflows. Tracks patient status, flags missing documentation, and ensures compliance.",detail:"Automated consent form generation, digital signature capture, and audit-ready record keeping"},{icon:"👥",title:"Staff Rostering & Credentials",desc:"Manages staff schedules, tracks credential expiry, and ensures compliance with regulatory requirements for healthcare professionals.",detail:"HPCSA registration tracking, CPD point monitoring, and automated renewal reminders"}];function sf(){return r.jsxs("div",{className:"min-h-screen",children:[r.jsx("section",{className:"pt-20 pb-12 border-b border-synth-border overflow-hidden",children:r.jsxs("div",{className:"wrap relative",children:[r.jsx(re,{href:"/",className:"absolute right-4 top-4 z-20 rounded-full border border-synth-border bg-white p-2 shadow-sm transition hover:scale-[1.02]",children:r.jsx("img",{src:"/logo.png",alt:"Synth home",className:"h-12 w-12 object-contain"})}),r.jsx("div",{className:"overflow-hidden rounded-[32px] border border-synth-border bg-synth-surface shadow-[0_24px_80px_rgba(15,23,42,0.08)]",children:r.jsx("img",{src:"/healthcare.png",alt:"Healthcare solution image",className:"w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover"})}),r.jsxs("div",{className:"mt-10 max-w-[780px] mx-auto text-center",children:[r.jsx("p",{className:"eyebrow",children:"Healthcare Admin"}),r.jsxs("h1",{className:"font-serif text-[clamp(36px,5vw,60px)] font-normal leading-[1.1] tracking-[-1px] text-synth-text-1 mb-4",children:["From claim denials to",r.jsx("br",{}),r.jsx("em",{className:"text-synth-accent",children:"recovered revenue"})]}),r.jsx("p",{className:"text-[17px] text-synth-text-2 leading-[1.7] max-w-[600px] mx-auto mb-8",children:"Synth automates the most painful, high-stakes admin work in healthcare — so your team spends time on patients, not paperwork."}),r.jsx(re,{href:"/pricing",className:"inline-flex items-center gap-2 bg-synth-accent text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#1D4ED8] transition-colors",children:"Request a demo"})]})]})}),r.jsx("section",{className:"py-20",children:r.jsxs("div",{className:"wrap",children:[r.jsx("p",{className:"eyebrow",children:"Core capabilities"}),r.jsx("h2",{className:"section-title",children:"Built for the revenue cycle"}),r.jsx("p",{className:"section-sub",children:"Eight critical workflows — fully automated, POPIA-compliant, integrated with your existing EHR systems."}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[960px] mx-auto mb-12",children:rf.map(i=>r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[16px] p-5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-synth-accent/20 transition-all duration-200",children:[r.jsx("div",{className:"w-10 h-10 rounded-[10px] flex items-center justify-center text-[19px] bg-synth-accent-light mb-3",children:i.icon}),r.jsx("h3",{className:"text-[14px] font-semibold text-synth-text-1 mb-1",children:i.title}),r.jsx("p",{className:"text-[12px] text-synth-text-2 leading-[1.6] mb-2",children:i.desc}),r.jsx("div",{className:"text-[11px] text-synth-text-3 border-t border-synth-border pt-2 italic leading-[1.5]",children:i.detail})]},i.title))}),r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[16px] p-5 max-w-[960px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4",children:[r.jsxs("p",{className:"text-[13px] text-synth-text-2 leading-[1.6] max-w-[560px]",children:[r.jsx("strong",{className:"text-synth-text-1",children:"Built for South African compliance."})," Synth's healthcare module is designed with POPIA (Protection of Personal Information Act) compliance at its core — data residency in South Africa, audit trails, role-based access controls, and patient consent management built in."]}),r.jsx("div",{className:"flex flex-wrap gap-2",children:["POPIA Compliant","NHRPL Codes","Medical Scheme API","Audit Trail","Data Residency SA"].map(i=>r.jsx("span",{className:"text-[11px] font-semibold border border-synth-border-med rounded-full px-3 py-1 text-synth-text-2 bg-synth-surface-2",children:i},i))})]})]})}),r.jsx("section",{className:"py-20 border-t border-synth-border",children:r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[r.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"See it in your facility"}),r.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"We offer a free 30-minute demonstration tailored to your specific workflows. No commitment, no setup required."}),r.jsx("a",{href:"mailto:healthcare@synth.ai?subject=Healthcare Demo Request",className:"inline-block bg-synth-accent text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#1D4ED8] transition-colors mb-3",children:"Book a demo →"}),r.jsx("p",{className:"text-[12px] text-synth-text-3",children:"Or email us at healthcare@synth.ai · We respond within 24 hours"})]})})})]})}function af(){return r.jsx("div",{className:"pt-20",children:r.jsx(Md,{})})}const of=[{icon:Xo,title:"End-to-end encryption",desc:"All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your conversations, documents, and patient records are protected at every layer."},{icon:Rd,title:"Your data stays yours",desc:"We never sell your data. We never use it to train models without your explicit consent. Delete everything, anytime — no questions asked."},{icon:jr,title:"Data residency controls",desc:"Choose where your data lives. South Africa (default), EU, UK, or US. POPIA, GDPR, and HIPAA-compliant handling depending on your region."},{icon:bh,title:"Full audit trails",desc:"Every agent action is logged, timestamped, and exportable. Court-admissible records for healthcare and legal compliance requirements."},{icon:Dd,title:"On-premise option",desc:"For healthcare and enterprise customers, deploy entirely within your infrastructure. No data leaves your network. Air-gapped available."},{icon:jh,title:"SOC 2 Type II certified",desc:"Independently audited annually. Full report available under NDA. We maintain the highest standards for security, availability, and confidentiality."}];function lf(){return r.jsxs("div",{className:"min-h-screen",children:[r.jsx("section",{className:"pt-24 pb-16 border-b border-synth-border",children:r.jsxs("div",{className:"wrap-sm text-center",children:[r.jsx("p",{className:"eyebrow",children:"Trust Centre"}),r.jsxs("h1",{className:"font-serif text-[clamp(36px,5vw,60px)] font-normal leading-[1.1] tracking-[-1px] text-synth-text-1 mb-4",children:["Your data, ",r.jsx("em",{className:"text-synth-accent",children:"your rules"})]}),r.jsx("p",{className:"text-[17px] text-synth-text-2 leading-[1.7]",children:"Built with privacy and security at the core. You stay in control — always."})]})}),r.jsx("section",{className:"py-20",children:r.jsxs("div",{className:"wrap",children:[r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto",children:of.map(i=>{const g=i.icon;return r.jsxs("div",{className:"bg-synth-surface/50 border border-synth-border rounded-[22px] p-8",children:[r.jsx("div",{className:"w-12 h-12 bg-synth-surface border border-synth-border rounded-[14px] flex items-center justify-center mb-5",children:r.jsx(g,{className:"w-6 h-6 text-synth-text-1"})}),r.jsx("h3",{className:"font-semibold text-synth-text-1 mb-2",children:i.title}),r.jsx("p",{className:"text-[13px] text-synth-text-2 leading-[1.65]",children:i.desc})]},i.title)})}),r.jsx("div",{className:"mt-12 text-center",children:r.jsxs("div",{className:"inline-flex items-center gap-6 text-[13px] text-synth-text-3",children:[r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(Ds,{className:"w-4 h-4 text-synth-green"}),"SOC 2 Type II"]}),r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(Ds,{className:"w-4 h-4 text-synth-green"}),"GDPR Ready"]}),r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(Ds,{className:"w-4 h-4 text-synth-green"}),"HIPAA Options"]}),r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(Ds,{className:"w-4 h-4 text-synth-green"}),"POPIA Compliant"]})]})})]})}),r.jsx("section",{className:"py-20 border-t border-synth-border",children:r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[r.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"Questions about security?"}),r.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"Our security team is happy to share our SOC 2 report, discuss custom compliance requirements, or walk you through our architecture."}),r.jsx("a",{href:"mailto:security@synth.ai?subject=Security Inquiry",className:"inline-block bg-synth-text-1 text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#2A2835] transition-colors",children:"Contact security team"})]})})})]})}function cf(){return r.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900",children:[r.jsx("nav",{className:"border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-6 h-16 flex items-center justify-between",children:[r.jsxs(re,{href:"/",className:"text-xl font-serif font-medium tracking-tight hover:opacity-70 transition-opacity",children:["synth",r.jsx("span",{className:"text-indigo-600",children:".ai"})]}),r.jsx(re,{href:"/terms",className:"text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors",children:"Terms of Use"})]})}),r.jsxs("main",{className:"max-w-4xl mx-auto px-6 py-20",children:[r.jsxs("header",{className:"mb-20",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-6",children:[r.jsx(Xo,{className:"w-3 h-3"}),"Security First"]}),r.jsx("h1",{className:"text-5xl md:text-6xl font-serif font-medium tracking-tight text-gray-900 mb-6",children:"Data Processing Policy"}),r.jsx("p",{className:"text-xl text-gray-500 font-medium",children:"Last updated: July 2026"})]}),r.jsxs("div",{className:"prose prose-gray prose-lg max-w-none",children:[r.jsxs("section",{className:"mb-16",children:[r.jsx("h2",{className:"text-3xl font-serif font-medium text-gray-900 mb-8",children:"1. Introduction"}),r.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Synth AI (“Synth,” “we,” “us,” or “our”) provides an autonomous AI agent platform that helps regulated enterprises automate operational workflows. We are committed to protecting the privacy and security of the data our customers (“you” or “your”) entrust to us."}),r.jsx("p",{className:"text-gray-600 leading-relaxed",children:"This Data Processing Policy explains what data we process, why, where it is stored, and — critically — how our architectural choices ensure that your proprietary business knowledge remains yours alone."})]}),r.jsxs("section",{className:"mb-16 grid md:grid-cols-2 gap-8 not-prose",children:[r.jsxs("div",{className:"p-8 bg-gray-50 rounded-[32px] border border-gray-100",children:[r.jsxs("h3",{className:"text-lg font-bold text-gray-900 mb-4 flex items-center gap-2",children:[r.jsx(df,{className:"w-5 h-5 text-indigo-600"})," You are the Data Controller"]}),r.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:"You determine the purposes and means of processing your data."})]}),r.jsxs("div",{className:"p-8 bg-indigo-50 rounded-[32px] border border-indigo-100",children:[r.jsxs("h3",{className:"text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2",children:[r.jsx(Xo,{className:"w-5 h-5 text-indigo-600"})," Synth is the Data Processor"]}),r.jsx("p",{className:"text-indigo-900/70 text-sm leading-relaxed",children:"We process data only on your documented instructions, as set out in our service agreement and this policy."})]})]}),r.jsxs("section",{className:"mb-16",children:[r.jsx("h2",{className:"text-3xl font-serif font-medium text-gray-900 mb-8",children:"2. Data We Process"}),r.jsx("div",{className:"space-y-6",children:[{title:"Account data",desc:"Names, email addresses, and contact details of authorised users."},{title:"Operational data",desc:"Workflows, configurations, and logs generated by your use of the platform."},{title:"Content data",desc:"Text of documents, messages, and information you instruct the agent to process."},{title:"Metadata",desc:"Timestamps and performance metrics necessary for auditing and reliability."}].map((i,g)=>r.jsxs("div",{className:"flex gap-4 p-6 border border-gray-100 rounded-2xl hover:border-indigo-100 transition-colors",children:[r.jsx("div",{className:"w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-bold text-gray-900 mb-1",children:i.title}),r.jsx("p",{className:"text-gray-500 text-sm",children:i.desc})]})]},g))})]}),r.jsxs("section",{className:"mb-16 bg-gray-900 text-white rounded-[40px] p-10 md:p-16 overflow-hidden relative",children:[r.jsxs("div",{className:"relative z-10",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-serif font-medium mb-8",children:"Protecting Your Competitive Edge"}),r.jsxs("div",{className:"space-y-8 max-w-2xl",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-indigo-400 font-bold mb-2",children:"Why Open-Source Models?"}),r.jsx("p",{className:"text-gray-400 leading-relaxed",children:"Most AI platforms use proprietary, closed-source models. When you send data to them, you risk sharing proprietary domain expertise with a third party."})]}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[r.jsxs("div",{className:"p-6 bg-white/5 rounded-2xl border border-white/10",children:[r.jsx("h4",{className:"font-bold mb-2",children:"Self-Hosted"}),r.jsx("p",{className:"text-xs text-gray-500",children:"Models run on your side of the fence. No data ever flows back to a central provider."})]}),r.jsxs("div",{className:"p-6 bg-white/5 rounded-2xl border border-white/10",children:[r.jsx("h4",{className:"font-bold mb-2",children:"No Training"}),r.jsx("p",{className:"text-xs text-gray-500",children:'Models are static. They do not learn from your data, protecting your "alpha".'})]})]})]})]}),r.jsx("div",{className:"absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]"})]}),r.jsxs("section",{className:"mb-16",children:[r.jsx("h2",{className:"text-3xl font-serif font-medium text-gray-900 mb-8",children:"Infrastructure & Security"}),r.jsxs("div",{className:"grid md:grid-cols-3 gap-6 not-prose",children:[r.jsxs("div",{className:"p-6 border border-gray-100 rounded-2xl",children:[r.jsx(Dd,{className:"w-8 h-8 text-gray-400 mb-4"}),r.jsx("h4",{className:"font-bold mb-2",children:"AWS Infrastructure"}),r.jsx("p",{className:"text-xs text-gray-500",children:"Stored in regions selected by you at deployment time."})]}),r.jsxs("div",{className:"p-6 border border-gray-100 rounded-2xl",children:[r.jsx(Rd,{className:"w-8 h-8 text-gray-400 mb-4"}),r.jsx("h4",{className:"font-bold mb-2",children:"Encryption"}),r.jsx("p",{className:"text-xs text-gray-500",children:"AES-256 at rest and TLS 1.2+ in transit for all data."})]}),r.jsxs("div",{className:"p-6 border border-gray-100 rounded-2xl",children:[r.jsx(Ch,{className:"w-8 h-8 text-gray-400 mb-4"}),r.jsx("h4",{className:"font-bold mb-2",children:"POPIA Compliant"}),r.jsx("p",{className:"text-xs text-gray-500",children:"Full compliance with South African data protection laws."})]})]})]}),r.jsxs("section",{className:"mb-16 bg-indigo-50 rounded-[32px] p-10 border border-indigo-100",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-indigo-900 mb-4",children:"Questions?"}),r.jsx("p",{className:"text-indigo-900/70 mb-8",children:"If you have questions about this Data Processing Policy or wish to exercise your rights, please contact our Information Officer."}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("p",{className:"font-bold text-indigo-900",children:"Synth AI (Pty) Ltd"}),r.jsx("a",{href:"mailto:privacy@synth.ai",className:"text-indigo-600 font-bold hover:underline",children:"privacy@synth.ai"}),r.jsx("p",{className:"text-sm text-indigo-900/50 mt-4",children:"Cape Town, South Africa"})]})]})]})]}),r.jsx("footer",{className:"border-t border-gray-100 py-12",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-6 flex justify-between items-center text-sm text-gray-400",children:[r.jsx("p",{children:"© 2026 Synth AI (Pty) Ltd."}),r.jsxs("div",{className:"flex gap-6",children:[r.jsx(re,{href:"/terms",className:"hover:text-gray-900 transition-colors",children:"Terms"}),r.jsx("a",{href:"mailto:privacy@synth.ai",className:"hover:text-gray-900 transition-colors",children:"Privacy"})]})]})})]})}function df(i){return r.jsxs("svg",{...i,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"}),r.jsx("path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"})]})}function uf(){return r.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900",children:[r.jsx("nav",{className:"border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50",children:r.jsxs("div",{className:"max-w-3xl mx-auto px-6 h-16 flex items-center justify-between",children:[r.jsxs(re,{href:"/",className:"text-xl font-serif font-medium tracking-tight hover:opacity-70 transition-opacity",children:["synth",r.jsx("span",{className:"text-indigo-600",children:".ai"})]}),r.jsx(re,{href:"/pricing",className:"text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors",children:"Back to Pricing"})]})}),r.jsxs("main",{className:"max-w-3xl mx-auto px-6 py-20",children:[r.jsxs("header",{className:"mb-16",children:[r.jsx("h1",{className:"text-5xl font-serif font-medium tracking-tight text-gray-900 mb-4",children:"Terms of Use"}),r.jsx("p",{className:"text-gray-400 font-medium",children:"Last updated: July 06, 2026"})]}),r.jsxs("div",{className:"prose prose-gray prose-lg max-w-none",children:[r.jsx("p",{className:"lead text-xl text-gray-600 mb-12 leading-relaxed",children:"Welcome to Synth. Before you access our services, please read these Terms of Use carefully. These Terms govern your use of the Synth platform and any associated applications."}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"1. Acceptance of Terms"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"By accessing or using Synth, you agree to be bound by these Terms and our Privacy Policy. If you are using the Services on behalf of an entity, you represent that you have the authority to bind that entity to these Terms."})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"2. Description of Service"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"Synth provides an autonomous AI agent platform designed to automate complex operational workflows. Our services include planning, research, communication automation, and integration with third-party tools."})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"3. User Accounts"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"You must be at least 18 years old to use Synth. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"4. Fees and Payment"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"Certain features of Synth require a paid subscription. All fees are non-refundable except as required by law. We reserve the right to change our pricing upon notice to you."})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"5. Intellectual Property"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"Synth and its original content, features, and functionality are owned by Synth AI (Pty) Ltd and are protected by international copyright, trademark, and other intellectual property laws."}),r.jsxs("p",{className:"text-gray-600",children:[r.jsx("strong",{children:"Your Content:"})," You retain all rights to the data you input into Synth. We do not claim ownership of your proprietary business knowledge."]})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"6. Limitation of Liability"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"To the maximum extent permitted by law, Synth shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service."})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"7. Governing Law"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"These Terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions."})]}),r.jsxs("section",{className:"mb-12 bg-gray-50 p-8 rounded-3xl border border-gray-100",children:[r.jsx("h2",{className:"text-xl font-serif font-medium text-gray-900 mb-4",children:"Questions?"}),r.jsx("p",{className:"text-gray-600 mb-6",children:"If you have any questions about these Terms, please contact our legal team."}),r.jsx("a",{href:"mailto:legal@synth.ai",className:"inline-flex items-center text-indigo-600 font-bold hover:underline",children:"legal@synth.ai"})]})]})]}),r.jsx("footer",{className:"border-t border-gray-100 py-12",children:r.jsxs("div",{className:"max-w-3xl mx-auto px-6 flex justify-between items-center text-sm text-gray-400",children:[r.jsx("p",{children:"© 2026 Synth AI (Pty) Ltd."}),r.jsxs("div",{className:"flex gap-6",children:[r.jsx("a",{href:"mailto:privacy@synth.ai",className:"hover:text-gray-900 transition-colors",children:"Privacy"}),r.jsx(re,{href:"/data-processing",className:"hover:text-gray-900 transition-colors",children:"Data Processing"})]})]})})]})}function pf(){return r.jsx("div",{className:"min-h-screen flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("h1",{className:"font-serif text-[80px] font-normal text-synth-text-1 leading-none mb-4",children:"404"}),r.jsx("p",{className:"text-[17px] text-synth-text-2 mb-8",children:"This page doesn't exist yet."}),r.jsx(re,{href:"/",className:"inline-flex items-center gap-2 bg-synth-text-1 text-white rounded-full px-6 py-3 text-[15px] font-medium hover:bg-[#2A2835] transition-colors",children:"Go home"})]})})}const md=[{category:"Architecture Philosophy",feature:"Core concept",openclaw:{value:"A personal, always-on AI assistant that monitors systems and alerts you",supported:"yes"},synth:{value:"An autonomous employee that executes complex, multi-step enterprise workflows across apps",supported:"yes"}},{category:"Architecture Philosophy",feature:"Primary loop",openclaw:{value:"Heartbeat → probe → policy → escalate → notify",supported:"yes"},synth:{value:"Heartbeat → probe → policy → escalate → execute full agent task (plan, use tools, verify, deliver)",supported:"yes"}},{category:"Architecture Philosophy",feature:"Execution depth",openclaw:{value:"Notifies a human; does not autonomously complete end-to-end business tasks",supported:"no"},synth:{value:"End-to-end execution: plans, calls tools (browser, desktop, WhatsApp, APIs), verifies output, and delivers a finished result",supported:"yes"}},{category:"Architecture Philosophy",feature:"Multi-agent orchestration",openclaw:{value:"Single-agent, user-centred",supported:"no"},synth:{value:"Multi-agent orchestration (Planner-Executor-Verifier, plus specialised sub-agents)",supported:"yes"}},{category:"Target Users",feature:"Primary user",openclaw:{value:"Technical individuals (developers, hobbyists) comfortable configuring servers, YAML, and API keys",supported:"yes"},synth:{value:"Business professionals in regulated enterprises—lawyers, healthcare administrators, procurement officers—who never touch a terminal",supported:"yes"}},{category:"Target Users",feature:"Buyer",openclaw:{value:"The user themselves (free, self-hosted)",supported:"yes"},synth:{value:"The enterprise (paid subscription, with compliance and support)",supported:"yes"}},{category:"Target Users",feature:"User experience",openclaw:{value:"CLI, config files, and a multi-messenger chat interface",supported:"yes"},synth:{value:"Clean dashboard with task submission, live streaming, heartbeat configuration, memory explorer, and cost dashboards",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Scheduler",openclaw:{value:"Configurable intervals and active hours",supported:"yes"},synth:{value:"Same, plus per-user scheduling (e.g., each lawyer sets their own morning briefing time)",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Deterministic probes",openclaw:{value:"HTTP, file-system, shell commands",supported:"yes"},synth:{value:"Same, plus queue depth, API status, database checks; extensible probe registry",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Policy engine",openclaw:{value:"YAML-based rules; deterministic evaluation",supported:"yes"},synth:{value:"Same, plus integration with an Authorised Actions policy that governs what the agent is allowed to do autonomously—not just when to alert",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Escalation gate",openclaw:{value:"LLM called only when necessary (cheap-checks-first)",supported:"yes"},synth:{value:"Same, but the gate can choose between a cheap verification model (DeepSeek) and a powerful reasoning model (Kimi K2.6) depending on severity",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Action dispatcher",openclaw:{value:"Sends an alert to a messaging channel (Slack, WhatsApp, etc.)",supported:"partial"},synth:{value:"Creates a full autonomous task (research, draft, file, notify) and pushes it onto the same agent loop that handles user requests",supported:"yes"}},{category:"Memory and Context",feature:"Memory type",openclaw:{value:"Conversation history and basic file-based persistence",supported:"partial"},synth:{value:"Dual-store memory: vector search (Qdrant) for semantic recall + knowledge graph (KuzuDB) for structured entity relationships",supported:"yes"}},{category:"Memory and Context",feature:"Temporal awareness",openclaw:{value:"No built-in temporal tagging",supported:"no"},synth:{value:"Graphiti integration: every fact has a valid-time interval, enabling time-travel queries",supported:"yes"}},{category:"Memory and Context",feature:"Cross-session persistence",openclaw:{value:"Maintains context across chat sessions on the same messaging platform",supported:"partial"},synth:{value:"Channel-unified memory: interactions from WhatsApp, dashboard, browser, and desktop all feed the same knowledge graph",supported:"yes"}},{category:"Memory and Context",feature:"Vertical knowledge graphs",openclaw:{value:"None",supported:"no"},synth:{value:"Pre-built entity schemas for healthcare admin, procurement, and personal assistance—no manual configuration required",supported:"yes"}},{category:"Tools and Channels",feature:"Browser automation",openclaw:{value:"None built-in",supported:"no"},synth:{value:"Full browser automation via Playwright (or browser-use library), with deterministic primitives to minimise token cost",supported:"yes"}},{category:"Tools and Channels",feature:"Desktop GUI control",openclaw:{value:"None",supported:"no"},synth:{value:"VNC-based observe-propose-act loop (PyAutoGUI/xdotool), running inside isolated Firecracker microVMs",supported:"yes"}},{category:"Tools and Channels",feature:"WhatsApp integration",openclaw:{value:"Native, as an alert/chat surface",supported:"partial"},synth:{value:"Native, as both an alert/chat surface and an execution channel—the agent can send structured briefings, receive task updates, and manage conversations",supported:"yes"}},{category:"Tools and Channels",feature:"MCP (Model Context Protocol)",openclaw:{value:"Not supported",supported:"no"},synth:{value:"Full MCP integration: connect to any MCP server and the agent automatically discovers and uses those tools",supported:"yes"}},{category:"Tools and Channels",feature:"Custom APIs",openclaw:{value:"Users must write custom probe scripts",supported:"no"},synth:{value:"Users can provide an OpenAPI spec and Synth generates an MCP server that exposes those endpoints as tools—no code required",supported:"yes"}},{category:"Enterprise Readiness",feature:"Deployment",openclaw:{value:"Self-hosted on a VPS; requires manual setup of environment variables, API keys, and config files",supported:"partial"},synth:{value:"Self-hosted via Docker Compose or Kubernetes (Helm charts); one-command deployment",supported:"yes"}},{category:"Enterprise Readiness",feature:"Multi-tenancy",openclaw:{value:"None",supported:"no"},synth:{value:"Workspace-based isolation, RBAC (Admin, Operator, Viewer), and ethical walls for multi-client scenarios",supported:"yes"}},{category:"Enterprise Readiness",feature:"Compliance",openclaw:{value:"None",supported:"no"},synth:{value:"SOC 2 Type II roadmap, POPIA-aligned data handling, Bring Your Own Key, open-source code for full auditability",supported:"yes"}},{category:"Enterprise Readiness",feature:"Dashboard",openclaw:{value:"No dashboard; interaction via messaging apps and CLI",supported:"no"},synth:{value:"Full React dashboard with real-time task streaming, heartbeat monitor, memory explorer, cost analytics, and audit logs",supported:"yes"}},{category:"Enterprise Readiness",feature:"Support",openclaw:{value:"Community (GitHub issues)",supported:"partial"},synth:{value:"Enterprise support with SLA, dedicated onboarding, and professional services",supported:"yes"}},{category:"Scalability",feature:"Execution model",openclaw:{value:"Single-process daemon",supported:"no"},synth:{value:"Containerised microservices; agent tasks run in isolated Firecracker microVMs on Kubernetes",supported:"yes"}},{category:"Scalability",feature:"Horizontal scaling",openclaw:{value:"Limited—personal tool",supported:"no"},synth:{value:"Scale to thousands of concurrent tasks; the heartbeat, memory, and execution layers scale independently",supported:"yes"}},{category:"Scalability",feature:"Model-agnostic architecture",openclaw:{value:"Tied to specific LLM providers (configurable)",supported:"partial"},synth:{value:"Model-agnostic ModelRouter can hot-swap between API providers (Kimi, DeepSeek) and self-hosted open-source models (vLLM, Ollama) without code changes",supported:"yes"}}];function xd({level:i}){return i==="yes"?r.jsx("span",{className:"voc-support voc-support-yes","aria-label":"Yes",children:"✓"}):i==="no"?r.jsx("span",{className:"voc-support voc-support-no","aria-label":"No",children:"✗"}):r.jsx("span",{className:"voc-support voc-support-part","aria-label":"Partial",children:"◐"})}function hf(){const[i,g]=R.useState(!1),[d,j]=R.useState("All"),w=["All",...Array.from(new Set(md.map(v=>v.category)))],y=md.filter(v=>d==="All"||v.category===d),L=i?y:y.slice(0,8);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        /* ── page ── */
        .voc-page {
          font-family: 'Geist', 'Inter', system-ui, sans-serif;
          background: #F5F7FA;
          color: #0A0D14;
          min-height: 100vh;
        }

        /* ── wrap ── */
        .voc-wrap {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .voc-wrap-sm {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── hero ── */
        .voc-hero {
          padding: 88px 24px 72px;
          text-align: center;
          border-bottom: 1px solid rgba(10,13,20,0.07);
          position: relative;
          overflow: hidden;
        }
        .voc-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
          pointer-events: none;
        }
        .voc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #EFF6FF;
          border: 1px solid rgba(37,99,235,0.2);
          color: #2563EB;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 5px 14px;
          margin-bottom: 28px;
        }
        .voc-hero-headline {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -1.2px;
          color: #0A0D14;
          max-width: 800px;
          margin: 0 auto 18px;
        }
        .voc-hero-headline em {
          font-style: italic;
          color: #2563EB;
        }
        .voc-hero-sub {
          font-size: 16px;
          color: #445068;
          line-height: 1.7;
          max-width: 620px;
          margin: 0 auto 40px;
        }
        .voc-hero-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .voc-badge {
          font-size: 13px;
          font-weight: 600;
          border-radius: 999px;
          padding: 8px 18px;
          border: 1px solid;
        }
        .voc-badge-openclaw {
          background: #1A1A2E;
          border-color: #1A1A2E;
          color: #fff;
        }
        .voc-badge-synth {
          background: #2563EB;
          border-color: #2563EB;
          color: #fff;
        }
        .voc-badge-vs {
          font-size: 11px;
          font-weight: 700;
          color: #8E9AB5;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* brand snippets — logos everywhere, 20px default */
        .voc-brand-inline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .voc-brand-inline img { height: 20px; width: auto; display: block; border-radius: 4px; }
        .voc-brand-hero { display:flex; gap:16px; justify-content:center; align-items:center; margin-top:18px }
        .voc-mini-logo { height:40px; width:auto; display:inline-block; vertical-align:middle; border-radius:4px; }
        .voc-logo-synth { height:40px; width:auto; display:inline-block; vertical-align:middle; border-radius:4px; }
        /* Hero logos slightly larger for visibility */
        .voc-hero .voc-mini-logo { height:56px; }
        .voc-hero .voc-logo-synth { height:56px; }

        /* ── stack callout ── */
        .voc-stack-callout {
          background: #0A0D14;
          border-radius: 16px;
          padding: 32px;
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: left;
        }
        .voc-stack-callout h3 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 22px;
          font-weight: 400;
          color: #fff;
          letter-spacing: -0.3px;
          margin-bottom: 12px;
        }
        .voc-stack-callout p {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          margin: 0;
        }
        .voc-stack-callout strong {
          color: rgba(255,255,255,0.85);
        }

        /* ── TL;DR callout ── */
        .voc-tldr {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 16px;
          padding: 28px 32px;
          margin: 0 auto;
          max-width: 760px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .voc-tldr-col h4 {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .voc-tldr-col-openclaw h4 { color: #1A1A2E; }
        .voc-tldr-col-synth  h4 { color: #2563EB; }
        .voc-tldr-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding: 0;
          margin: 0;
        }
        .voc-tldr-col li {
          font-size: 13px;
          color: #445068;
          display: flex;
          align-items: flex-start;
          gap: 7px;
          line-height: 1.5;
        }
        .voc-tldr-col li::before {
          content: '·';
          font-weight: 700;
          flex-shrink: 0;
        }
        .voc-tldr-col-openclaw li::before { color: #1A1A2E; }
        .voc-tldr-col-synth  li::before { color: #2563EB; }

        /* ── section ── */
        .voc-section {
          padding: 72px 0;
          border-bottom: 1px solid rgba(10,13,20,0.07);
        }
        .voc-section-eyebrow {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #2563EB;
          text-align: center;
          margin-bottom: 10px;
        }
        .voc-section-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 400;
          letter-spacing: -0.5px;
          color: #0A0D14;
          text-align: center;
          margin-bottom: 8px;
          line-height: 1.15;
        }
        .voc-section-sub {
          font-size: 15px;
          color: #445068;
          text-align: center;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 44px;
        }

        /* ── feature table ── */
        .voc-filter-tabs {
          display: flex;
          gap: 6px;
          margin-bottom: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .voc-filter-tab {
          font-size: 13px;
          font-weight: 500;
          border-radius: 999px;
          padding: 6px 16px;
          border: 1px solid rgba(10,13,20,0.12);
          background: #fff;
          color: #445068;
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
        }
        .voc-filter-tab.active,
        .voc-filter-tab:hover {
          background: #2563EB;
          border-color: #2563EB;
          color: #fff;
        }
        .voc-table {
          max-width: 900px;
          margin: 0 auto;
          border-radius: 16px;
          border: 1px solid rgba(10,13,20,0.08);
          overflow: hidden;
        }
        .voc-table-head {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr;
          background: #0A0D14;
        }
        .voc-th {
          padding: 14px 18px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .voc-th-feature  { color: rgba(255,255,255,0.35); }
        .voc-th-openclaw { color: rgba(255,255,255,0.5); }
        .voc-th-synth    { color: #60A5FA; }

        .voc-category-row {
          background: #F0F4FA;
          padding: 8px 18px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #8E9AB5;
          border-top: 1px solid rgba(10,13,20,0.06);
        }

        .voc-row {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr;
          border-top: 1px solid rgba(10,13,20,0.05);
          background: #fff;
          transition: background 0.1s;
        }
        .voc-row:hover { background: #F8FAFF; }
        .voc-cell {
          padding: 13px 18px;
          font-size: 13px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.5;
        }
        .voc-cell-feature { font-weight: 500; color: #0A0D14; }
        .voc-cell-openclaw { color: #6B7A99; }
        .voc-cell-synth   { color: #1E3A5F; }

        .voc-support {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .voc-support-yes  { background: #DCFCE7; color: #16A34A; }
        .voc-support-no   { background: #FEE2E2; color: #DC2626; }
        .voc-support-part { background: #FEF9C3; color: #CA8A04; }

        .voc-show-more {
          display: flex;
          justify-content: center;
          margin-top: 16px;
        }
        .voc-show-more-btn {
          font-size: 14px;
          font-weight: 500;
          color: #2563EB;
          background: none;
          border: 1px solid rgba(37,99,235,0.25);
          border-radius: 999px;
          padding: 8px 22px;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.15s;
        }
        .voc-show-more-btn:hover {
          background: #EFF6FF;
          border-color: #2563EB;
        }

        /* ── key difference quote ── */
        .voc-quote-box {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 16px;
          padding: 32px;
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }
        .voc-quote-box blockquote {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          color: #0A0D14;
          line-height: 1.5;
          margin: 0 0 16px;
          letter-spacing: -0.3px;
        }
        .voc-quote-box blockquote em {
          color: #2563EB;
          font-style: italic;
        }
        .voc-quote-box .voc-quote-attrib {
          font-size: 12px;
          color: #8E9AB5;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ── detailed category cards ── */
        .voc-cat-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 900px;
          margin: 0 auto;
        }
        .voc-cat-card {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 16px;
          overflow: hidden;
        }
        .voc-cat-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 20px;
          background: #F8FAFF;
          border-bottom: 1px solid rgba(10,13,20,0.06);
        }
        .voc-cat-header h3 {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #0A0D14;
          margin: 0;
        }
        .voc-cat-body {
          padding: 0;
        }
        .voc-cat-row {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr;
          border-top: 1px solid rgba(10,13,20,0.05);
        }
        .voc-cat-row:first-child { border-top: none; }
        .voc-cat-cell {
          padding: 14px 18px;
          font-size: 13px;
          line-height: 1.6;
        }
        .voc-cat-cell-feature {
          font-weight: 500;
          color: #0A0D14;
          border-right: 1px solid rgba(10,13,20,0.05);
        }
        .voc-cat-cell-openclaw {
          color: #6B7A99;
          border-right: 1px solid rgba(10,13,20,0.05);
          background: #FAFAFC;
        }
        .voc-cat-cell-synth {
          color: #1E3A5F;
          background: #F0F7FF;
        }
        .voc-cat-cell-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .voc-cat-cell-openclaw .voc-cat-cell-label { color: #9CA3AF; }
        .voc-cat-cell-synth .voc-cat-cell-label { color: #3B82F6; }

        /* ── vc callout ── */
        .voc-vc-box {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 16px;
          padding: 36px;
          max-width: 860px;
          margin: 0 auto;
        }
        .voc-vc-box h3 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 24px;
          font-weight: 400;
          color: #0A0D14;
          letter-spacing: -0.3px;
          margin-bottom: 14px;
        }
        .voc-vc-points {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 24px;
        }
        .voc-vc-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px;
          background: #F5F7FA;
          border-radius: 10px;
        }
        .voc-vc-point-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #EFF6FF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
        }
        .voc-vc-point h5 {
          font-size: 13px;
          font-weight: 600;
          color: #0A0D14;
          margin-bottom: 3px;
        }
        .voc-vc-point p {
          font-size: 12px;
          color: #445068;
          line-height: 1.55;
          margin: 0;
        }
        .voc-vc-note {
          font-size: 13px;
          color: #6B7A99;
          line-height: 1.7;
          border-top: 1px solid rgba(10,13,20,0.07);
          padding-top: 20px;
        }
        .voc-vc-note strong { color: #0A0D14; }

        /* ── responsive ── */
        @media (max-width: 720px) {
          .voc-tldr          { grid-template-columns: 1fr; }
          .voc-table-head,
          .voc-row           { grid-template-columns: 1.4fr 1fr; }
          .voc-th-feature,
          .voc-cell-feature  { display: none; }
          .voc-cat-row       { grid-template-columns: 1fr; }
          .voc-cat-cell-feature { border-right: none; border-bottom: 1px solid rgba(10,13,20,0.05); }
          .voc-cat-cell-openclaw { border-right: none; border-bottom: 1px solid rgba(10,13,20,0.05); }
          .voc-vc-points     { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}),r.jsxs("div",{className:"voc-page",children:[r.jsxs("section",{className:"voc-hero",children:[r.jsx("div",{className:"voc-eyebrow",children:"Platform comparison"}),r.jsxs("h1",{className:"voc-hero-headline",children:["OpenClaw proved proactive AI",r.jsx("br",{}),"is the future.",r.jsx("br",{}),r.jsxs("em",{children:["Synth is the enterprise platform",r.jsx("br",{}),"that makes it real."]})]}),r.jsx("p",{className:"voc-hero-sub",children:"OpenClaw is an impressive open-source proof-of-concept — a personal, always-on monitoring assistant that alerts you when systems change. Synth took that same heartbeat philosophy and built a governed, multi-agent enterprise platform that does not just alert — it executes end-to-end business workflows autonomously."}),r.jsx("div",{className:"voc-hero-badges",children:r.jsxs("div",{className:"voc-brand-hero",children:[r.jsx("div",{className:"voc-brand-inline","aria-hidden":!0,children:r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})}),r.jsx("span",{className:"voc-badge-vs",children:"VS"}),r.jsx("div",{className:"voc-brand-inline","aria-hidden":!0,children:r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})})]})}),r.jsxs("div",{className:"voc-stack-callout",children:[r.jsxs("h3",{children:[r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]}),' says "Hey, something changed — you should look at this."']}),r.jsxs("p",{style:{marginBottom:"16px"},children:[r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{style:{color:"rgba(255,255,255,0.85)",fontWeight:600},children:"Synth"})]}),' says "Something changed. I have already investigated, drafted a summary, updated the case file, and sent the memo to the partner."']}),r.jsxs("p",{children:["That is the difference between a ",r.jsx("strong",{children:"notification layer"})," and an ",r.jsx("strong",{children:"execution layer"}),". OpenClaw is the proof-of-concept. Synth is the production platform."]})]}),r.jsxs("div",{className:"voc-tldr",children:[r.jsxs("div",{className:"voc-tldr-col voc-tldr-col-openclaw",children:[r.jsx("h4",{children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw — Proof of Concept"})]})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Personal, always-on monitoring assistant"}),r.jsx("li",{children:"Alerts you when systems change — does not execute"}),r.jsx("li",{children:"Single-agent, user-centred architecture"}),r.jsx("li",{children:"CLI, config files, and chat interface"}),r.jsx("li",{children:"Self-hosted on a VPS; manual setup required"}),r.jsx("li",{children:"Community support (GitHub issues)"}),r.jsx("li",{children:"Free, self-hosted — the user is the buyer"})]})]}),r.jsxs("div",{className:"voc-tldr-col voc-tldr-col-synth",children:[r.jsx("h4",{children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth — Enterprise Platform"})]})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Autonomous employee executing multi-step enterprise workflows"}),r.jsx("li",{children:"End-to-end execution: plans, uses tools, verifies, delivers"}),r.jsx("li",{children:"Multi-agent orchestration (Planner-Executor-Verifier)"}),r.jsx("li",{children:"Full React dashboard + WhatsApp execution channel"}),r.jsx("li",{children:"Docker Compose / Kubernetes; one-command deployment"}),r.jsx("li",{children:"Enterprise support with SLA"}),r.jsx("li",{children:"Paid subscription — the enterprise is the buyer"})]})]})]})]}),r.jsx("section",{className:"voc-section",children:r.jsxs("div",{className:"voc-wrap-sm",children:[r.jsx("p",{className:"voc-section-eyebrow",children:"The heartbeat difference"}),r.jsx("h2",{className:"voc-section-title",children:"From alert to action"}),r.jsx("p",{className:"voc-section-sub",children:"Both systems share the same philosophical origin — proactive AI that watches and responds. But what happens after the probe fires is where they diverge completely."}),r.jsxs("div",{className:"voc-quote-box",children:[r.jsxs("blockquote",{children:[`"OpenClaw's heartbeat says `,r.jsx("em",{children:"'Hey, something changed — you should look at this.'"}),r.jsx("br",{}),"Synth's heartbeat says ",r.jsx("em",{children:"'Something changed. I have already investigated, drafted a summary, updated the case file, and sent the memo to the partner.'"}),'"']}),r.jsx("p",{className:"voc-quote-attrib",children:"The architectural gap in a single sentence"})]})]})}),r.jsx("section",{className:"voc-section",children:r.jsxs("div",{className:"voc-wrap",children:[r.jsx("p",{className:"voc-section-eyebrow",children:"Feature comparison"}),r.jsx("h2",{className:"voc-section-title",children:"Seven dimensions, side by side"}),r.jsx("p",{className:"voc-section-sub",children:"We describe OpenClaw accurately — it is genuinely impressive open-source work. The gap is not in quality; it is in scope, governance, and execution depth."}),r.jsx("div",{className:"voc-filter-tabs",children:w.map(v=>r.jsx("button",{className:`voc-filter-tab ${d===v?"active":""}`,onClick:()=>{j(v),g(!1)},children:v},v))}),r.jsxs("div",{className:"voc-table",children:[r.jsxs("div",{className:"voc-table-head",children:[r.jsx("div",{className:"voc-th voc-th-feature",children:"Feature"}),r.jsx("div",{className:"voc-th voc-th-openclaw",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),r.jsx("div",{className:"voc-th voc-th-synth",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})})]}),L.map((v,E)=>{const M=y[E-1],V=!M||M.category!==v.category;return r.jsxs("div",{children:[V&&d==="All"&&r.jsx("div",{className:"voc-category-row",children:v.category}),r.jsxs("div",{className:"voc-row",children:[r.jsx("div",{className:"voc-cell voc-cell-feature",children:v.feature}),r.jsxs("div",{className:"voc-cell voc-cell-openclaw",children:[r.jsx(xd,{level:v.openclaw.supported}),v.openclaw.value]}),r.jsxs("div",{className:"voc-cell voc-cell-synth",children:[r.jsx(xd,{level:v.synth.supported}),v.synth.value]})]})]},E)})]}),!i&&y.length>8&&r.jsx("div",{className:"voc-show-more",children:r.jsxs("button",{className:"voc-show-more-btn",onClick:()=>g(!0),children:["Show all ",y.length," features ↓"]})})]})}),r.jsx("section",{className:"voc-section",children:r.jsxs("div",{className:"voc-wrap",children:[r.jsx("p",{className:"voc-section-eyebrow",children:"Deep dive"}),r.jsx("h2",{className:"voc-section-title",children:"Category by category"}),r.jsx("p",{className:"voc-section-sub",children:"The same seven dimensions, unpacked with the full technical detail that engineering teams and VCs need to evaluate."}),r.jsxs("div",{className:"voc-cat-grid",children:[r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"🏗️"}),r.jsx("h3",{children:"Architecture Philosophy"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Core concept"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"A personal, always-on AI assistant that monitors systems and alerts you or the team."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"An autonomous employee that executes complex, multi-step enterprise workflows across apps."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Primary loop"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:["Heartbeat → probe → policy → escalate → ",r.jsx("strong",{children:"notify"}),"."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:["Heartbeat → probe → policy → escalate → ",r.jsx("strong",{children:"execute full agent task"})," (plan, use tools, verify, deliver)."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Multi-agent"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Single-agent, user-centred."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Multi-agent orchestration: Planner-Executor-Verifier, plus specialised sub-agents."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"👤"}),r.jsx("h3",{children:"Target Users"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Primary user"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"Technical individuals — developers, hobbyists — comfortable with YAML, API keys, and server config."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Business professionals in regulated enterprises — lawyers, healthcare administrators, procurement officers — who never touch a terminal."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Buyer"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"The user themselves. Free, self-hosted."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"The enterprise. Paid subscription with compliance and support."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Experience"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"CLI, config files, and a multi-messenger chat interface."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Clean dashboard with task submission, live streaming, heartbeat configuration, memory explorer, and cost dashboards."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"💓"}),r.jsx("h3",{children:"Proactive Heartbeat"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Scheduler"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"Configurable intervals and active hours."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Same, plus per-user scheduling (e.g., each lawyer sets their own morning briefing time)."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Deterministic probes"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"HTTP, file-system, shell commands."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Same, plus queue depth, API status, database checks; extensible probe registry."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Policy engine"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"YAML-based rules; deterministic evaluation."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Same, plus integration with an Authorised Actions policy that governs what the agent is allowed to do autonomously — not just when to alert."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Escalation gate"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"LLM called only when necessary (cheap-checks-first)."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Same, but the gate can choose between a cheap verification model (DeepSeek) and a powerful reasoning model (Kimi K2.6) depending on severity."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Action dispatcher"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Sends an alert to a messaging channel (Slack, WhatsApp, etc.)."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Creates a full autonomous task (research, draft, file, notify) and pushes it onto the same agent loop that handles user requests."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"🧠"}),r.jsx("h3",{children:"Memory and Context"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Memory type"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"Conversation history and basic file-based persistence."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Dual-store memory: vector search (Qdrant) for semantic recall + knowledge graph (KuzuDB) for structured entity relationships."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Temporal awareness"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"No built-in temporal tagging."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:'Graphiti integration: every fact has a valid-time interval, enabling "what was the status of this supplier last week?" queries.'})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Cross-session persistence"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Maintains context across chat sessions on the same messaging platform."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Channel-unified memory: interactions from WhatsApp, dashboard, browser, and desktop all feed the same knowledge graph."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Vertical knowledge graphs"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Pre-built entity schemas for healthcare admin, procurement, and personal assistance — no manual configuration required."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"🛠️"}),r.jsx("h3",{children:"Tools and Channels"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Browser automation"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"None built-in."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Full browser automation via Playwright (or browser-use library), with deterministic primitives to minimise token cost."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Desktop GUI control"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"VNC-based observe-propose-act loop (PyAutoGUI/xdotool), running inside isolated Firecracker microVMs."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"WhatsApp integration"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Native, as an alert/chat surface."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Native, as both an alert/chat surface and an execution channel — the agent can send structured briefings, receive task updates, and manage conversations."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"MCP (Model Context Protocol)"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Not supported."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Full MCP integration: connect to any MCP server (filesystem, GitHub, Postgres, custom APIs) and the agent automatically discovers and uses those tools."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Custom APIs"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Users must write custom probe scripts."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Users can provide an OpenAPI spec and Synth generates an MCP server that exposes those endpoints as tools — no code required."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"🏢"}),r.jsx("h3",{children:"Enterprise Readiness"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Deployment"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"Self-hosted on a VPS; requires manual setup of environment variables, API keys, and config files."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Self-hosted via Docker Compose or Kubernetes (Helm charts); one-command deployment."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Multi-tenancy"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Workspace-based isolation, RBAC (Admin, Operator, Viewer), and ethical walls for multi-client scenarios."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Compliance"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"SOC 2 Type II roadmap, POPIA-aligned data handling, Bring Your Own Key, open-source code for full auditability."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Dashboard"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"No dashboard; interaction via messaging apps and CLI."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Full React dashboard with real-time task streaming, heartbeat monitor, memory explorer, cost analytics, and audit logs."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Support"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Community (GitHub issues)."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Enterprise support with SLA, dedicated onboarding, and professional services."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"⚡"}),r.jsx("h3",{children:"Scalability"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Execution model"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"Single-process daemon."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Containerised microservices; agent tasks run in isolated Firecracker microVMs on Kubernetes."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Horizontal scaling"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Limited — personal tool."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Scale to thousands of concurrent tasks; the heartbeat, memory, and execution layers scale independently."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Model-agnostic"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Tied to specific LLM providers (configurable)."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Model-agnostic ModelRouter can hot-swap between API providers (Kimi, DeepSeek) and self-hosted open-source models (vLLM, Ollama) without code changes."})]})]})]})]})]})}),r.jsx("section",{className:"voc-section",children:r.jsxs("div",{className:"voc-wrap",children:[r.jsx("p",{className:"voc-section-eyebrow",children:"For investors"}),r.jsx("h2",{className:"voc-section-title",children:"Why this comparison matters to VCs"}),r.jsx("p",{className:"voc-section-sub",children:"OpenClaw is the proof-of-concept that proactive AI is the future. Synth is the enterprise platform that makes that future safe, governable, and profitable."}),r.jsxs("div",{className:"voc-vc-box",children:[r.jsxs("h3",{children:[r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})," proved the market.",r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})," owns it."]}),r.jsxs("div",{className:"voc-vc-points",children:[r.jsxs("div",{className:"voc-vc-point",children:[r.jsx("div",{className:"voc-vc-point-icon",children:"🚀"}),r.jsxs("div",{children:[r.jsx("h5",{children:"From PoC to platform"}),r.jsx("p",{children:"OpenClaw validated that proactive heartbeat AI is valuable. Synth took that validation and built the enterprise-grade infrastructure — governance, compliance, multi-tenancy, and end-to-end execution — that makes it deployable in regulated industries."})]})]}),r.jsxs("div",{className:"voc-vc-point",children:[r.jsx("div",{className:"voc-vc-point-icon",children:"🏢"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Enterprise buyer, enterprise budget"}),r.jsx("p",{children:"OpenClaw's buyer is a hobbyist with a VPS. Synth's buyer is a law firm, hospital, or bank with a procurement process and a compliance team. The revenue per customer is orders of magnitude larger."})]})]}),r.jsxs("div",{className:"voc-vc-point",children:[r.jsx("div",{className:"voc-vc-point-icon",children:"🔒"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Governance as a moat"}),r.jsx("p",{children:"OpenClaw has no compliance story. Synth has SOC 2 Type II roadmap, POPIA alignment, RBAC, ethical walls, and Bring Your Own Key. In regulated industries, governance is not a feature — it is the price of entry."})]})]}),r.jsxs("div",{className:"voc-vc-point",children:[r.jsx("div",{className:"voc-vc-point-icon",children:"📈"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Execution depth = retention"}),r.jsx("p",{children:"An alert tool can be replaced. An autonomous employee that has already filed the claim, drafted the brief, and updated the CRM cannot be ripped out without operational disruption. Synth's execution depth creates switching costs OpenClaw cannot match."})]})]})]}),r.jsxs("p",{className:"voc-vc-note",children:[r.jsx("strong",{children:"The acquisition thesis:"})," OpenClaw is the open-source inspiration that proved proactive AI is the future. Synth is the enterprise platform that makes that future safe, governable, and deeply integrated into the workflows of regulated industries. A strategic acquirer — whether a Salesforce, Microsoft, or African telecoms group — looking to own the agentic layer in emerging markets will find Synth's compliance, multi-tenancy, and execution depth far more valuable than a personal monitoring daemon. Synth is the platform. That is where the enterprise relationships and recurring revenue live."]})]})]})})]})]})}const Qo=[{feature:"Task execution",chatgpt:{value:"Tells you what to do",supported:"partial"},synth:{value:"Does it for you — end to end",supported:"yes"}},{feature:"Works while you're offline",chatgpt:{value:"No — needs you in the loop at every step",supported:"no"},synth:{value:"Yes — runs tasks in the background autonomously",supported:"yes"}},{feature:"Proactive alerts",chatgpt:{value:"Never — waits to be asked",supported:"no"},synth:{value:"Yes — pushes urgent tasks and flags conflicts before you notice",supported:"yes"}},{feature:"Morning briefing",chatgpt:{value:"Not available",supported:"no"},synth:{value:"Daily plan delivered to your WhatsApp before 7 AM",supported:"yes"}},{feature:"Works in WhatsApp & Telegram",chatgpt:{value:"No — requires the ChatGPT app or browser",supported:"no"},synth:{value:"Yes — works in apps you already use every day",supported:"yes"}},{feature:"Long-term memory",chatgpt:{value:"Limited — memory can be enabled but is shallow",supported:"partial"},synth:{value:"Deep — remembers your people, preferences, and patterns over months",supported:"yes"}},{feature:"Multi-step autonomous workflows",chatgpt:{value:"Sequential — one step at a time with your guidance",supported:"partial"},synth:{value:"Parallel — multiple agents execute simultaneously",supported:"yes"}},{feature:"Business tool integrations",chatgpt:{value:"Limited plugins — no deep CRM, ERP, or accounting connections",supported:"partial"},synth:{value:"Sage, Xero, Salesforce, HubSpot, Google Workspace, and more",supported:"yes"}},{feature:"Healthcare admin",chatgpt:{value:"Not designed for claims, codes, or payer rules",supported:"no"},synth:{value:"ICD-10 coding, claim denial resolution, scheduling, refill reminders",supported:"yes"}},{feature:"POPIA / local compliance (SA)",chatgpt:{value:"No local compliance framework for SA",supported:"no"},synth:{value:"POPIA-compliant, data residency in South Africa",supported:"yes"}},{feature:"Delivers finished outputs",chatgpt:{value:"Gives you pieces to assemble yourself",supported:"partial"},synth:{value:"Delivers the finished product — booked, sent, submitted, done",supported:"yes"}},{feature:"Pricing",chatgpt:{value:"From $20/month (ChatGPT Plus)",supported:"partial"},synth:{value:"From $15/month — same power, built for execution",supported:"yes"}}],ff=[{icon:"🌅",scenario:"Starting your work day",chatgpt:"You open ChatGPT, paste your schedule, and ask what to prioritise. You repeat this every morning. You're doing the thinking.",synth:"Synth sends you a briefing at 6:45 AM — meetings prepped, urgent emails flagged, your day already planned. You read, you act.",verdict:"synth"},{icon:"📊",scenario:"Competitor research for a strategy meeting",chatgpt:"ChatGPT summarises what it knows up to its training cutoff. You still need to verify everything, find current data, and format the output yourself.",synth:"Synth browses live sources, pulls pricing pages, reads press releases, builds a structured comparison doc, and posts it to your Slack — before the meeting starts.",verdict:"synth"},{icon:"💬",scenario:"Brainstorming and creative thinking",chatgpt:"ChatGPT is excellent here — fast, articulate, endlessly patient with iteration. It's the best thinking partner for open-ended exploration.",synth:"Synth can help, but for pure ideation and creative back-and-forth, ChatGPT's conversational depth is genuinely stronger.",verdict:"chatgpt"},{icon:"❌",scenario:"Resolving a denied insurance claim",chatgpt:"ChatGPT can explain what a denial code means. It cannot access your claims system, draft a compliant appeal, or track the resubmission deadline.",synth:"Synth identifies the denial reason, drafts the appeal using the payer's specific requirements, logs the deadline, and tracks the outcome — automatically.",verdict:"synth"},{icon:"✈️",scenario:"Booking a business trip",chatgpt:"ChatGPT suggests flight options based on general knowledge. It cannot search live prices, book anything, or add the trip to your calendar.",synth:"Synth searches live prices, books within your stated budget, adds flights and hotel to your calendar, and notifies you if prices drop — in one WhatsApp message.",verdict:"synth"},{icon:"💊",scenario:"Managing chronic patient prescriptions",chatgpt:"ChatGPT can explain what a drug does or describe best practices. It has no access to patient records, cannot send reminders, and was not built for clinical workflows.",synth:"Synth identifies patients due for refills, sends personalised WhatsApp reminders, and logs confirmations — POPIA-compliant and connected to your EHR system.",verdict:"synth"},{icon:"📝",scenario:"Writing and editing content",chatgpt:"ChatGPT is a world-class writing assistant — drafts, edits, rewrites, tone adjustments. For pure writing quality and conversational refinement, it remains exceptional.",synth:"Synth can write and draft, but if your goal is iteration, nuance, and creative refinement of language, ChatGPT's depth here is hard to beat.",verdict:"chatgpt"},{icon:"🤝",scenario:"Preparing for a sales meeting",chatgpt:"ChatGPT can help you structure talking points if you paste in the context. You do the research. You find the info. You assemble the brief.",synth:"Synth researches the prospect, pulls their latest news, identifies likely objections, and delivers a formatted brief to your WhatsApp an hour before the call.",verdict:"synth"}];function gd({level:i}){return i==="yes"?r.jsx("span",{className:"support-icon support-yes","aria-label":"Yes",children:"✓"}):i==="no"?r.jsx("span",{className:"support-icon support-no","aria-label":"No",children:"✗"}):r.jsx("span",{className:"support-icon support-part","aria-label":"Partial",children:"◐"})}function mf({verdict:i}){return i==="synth"?r.jsx("span",{className:"verdict-badge verdict-synth",children:"Use Synth"}):i==="chatgpt"?r.jsx("span",{className:"verdict-badge verdict-chatgpt",children:"Use ChatGPT"}):r.jsx("span",{className:"verdict-badge verdict-both",children:"Either works"})}function xf(){const[i,g]=R.useState(0),d=[{prompt:"Research our top 5 competitors and get it into Slack before the 3 PM strategy meeting.",chatgptResponse:`Sure! Here's a framework for researching your top 5 competitors:

1. Identify your competitors using Google, Crunchbase, or LinkedIn.
2. Visit each company's website and note their:
   • Pricing page
   • Key features
   • Recent blog posts
3. Check G2 or Capterra for reviews.
4. Compile findings in a spreadsheet.
5. Share to Slack manually.

Would you like me to help you draft the message once you've gathered the data?`,chatgptLabel:"ChatGPT gave you a to-do list. You still have to do the work.",synthResponse:`✓ Done — posted to #strategy 47 minutes before your meeting.

I browsed all 5 competitor sites live, pulled current pricing, read their last 3 press releases, and flagged two pricing changes since last quarter. The doc is in Google Drive too.`,synthLabel:"Synth did the research, built the doc, and posted to Slack. You opened WhatsApp once."},{prompt:"Book a flight to Johannesburg on Thursday under R4,500 and add it to my calendar.",chatgptResponse:`Here are some tips for finding affordable flights to Johannesburg:

• Try Google Flights or Skyscanner for price comparisons.
• FlySafair and Airlink often have competitive fares on domestic routes.
• Booking early in the morning can sometimes yield lower prices.
• Make sure to check for baggage fees which may push total cost above R4,500.

Once you've found a flight, you can add it to Google Calendar manually or use the 'Add to calendar' option in your confirmation email.`,chatgptLabel:"ChatGPT gave you tips. You still need to search, compare, book, and add it yourself.",synthResponse:`✓ Booked. FlySafair JNB, Thursday 07h10, R3,890. Confirmation sent to your email. Added to your calendar with a reminder to leave for the airport by 05h30.

Want me to book a hotel near Sandton too?`,synthLabel:"Synth searched live, booked within your budget, and added it to your calendar. One message."},{prompt:"Send refill reminders to all diabetic patients who haven't collected their metformin this month.",chatgptResponse:`To manage prescription refill reminders for diabetic patients, you could:

1. Export a list of patients from your EHR system.
2. Filter by diagnosis code (E11 for Type 2 diabetes) and medication (metformin).
3. Cross-reference with your dispensing records.
4. Draft a WhatsApp or SMS message template.
5. Send via your preferred communication platform.

Note: Ensure all communications comply with POPIA requirements.`,chatgptLabel:"ChatGPT described a 5-step manual process. Your staff still need to do all of it.",synthResponse:`✓ 34 patients identified. Personalised WhatsApp reminders sent to all 34. 18 have already confirmed collection. 6 requested delivery — I've flagged those for your pharmacist.

All activity logged in GoodX with timestamps.`,synthLabel:"Synth connected to your EHR, identified patients, sent reminders, and logged everything. Zero manual work."}],j=d[i];return r.jsxs("div",{className:"theatre-wrap",children:[r.jsx("div",{className:"theatre-tabs",children:d.map((w,y)=>r.jsxs("button",{className:`theatre-tab ${i===y?"active":""}`,onClick:()=>g(y),children:["Task ",y+1]},y))}),r.jsxs("div",{className:"theatre-prompt",children:[r.jsx("span",{className:"theatre-prompt-label",children:"The task"}),r.jsxs("p",{className:"theatre-prompt-text",children:['"',j.prompt,'"']})]}),r.jsxs("div",{className:"theatre-split",children:[r.jsxs("div",{className:"theatre-side theatre-chatgpt",children:[r.jsx("div",{className:"theatre-side-header",children:r.jsx("span",{className:"theatre-brand theatre-brand-chatgpt",children:"ChatGPT"})}),r.jsx("div",{className:"theatre-output theatre-output-chatgpt",children:r.jsx("pre",{className:"theatre-pre",children:j.chatgptResponse})}),r.jsxs("p",{className:"theatre-verdict theatre-verdict-chatgpt",children:["⚠ ",j.chatgptLabel]})]}),r.jsx("div",{className:"theatre-vs",children:"vs"}),r.jsxs("div",{className:"theatre-side theatre-synth",children:[r.jsx("div",{className:"theatre-side-header",children:r.jsx("span",{className:"theatre-brand theatre-brand-synth",children:"Synth"})}),r.jsx("div",{className:"theatre-output theatre-output-synth",children:r.jsx("pre",{className:"theatre-pre",children:j.synthResponse})}),r.jsxs("p",{className:"theatre-verdict theatre-verdict-synth",children:["✓ ",j.synthLabel]})]})]})]})}function gf(){const[i,g]=R.useState(!1),d=i?Qo:Qo.slice(0,7);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        /* ── page ── */
        .vs-page {
          font-family: 'Geist', 'Inter', system-ui, sans-serif;
          background: #F5F7FA;
          color: #0A0D14;
          min-height: 100vh;
        }

        /* ── hero ── */
        .vs-hero {
          text-align: center;
          padding: 88px 24px 72px;
          border-bottom: 1px solid rgba(10,13,20,0.07);
          position: relative;
          overflow: hidden;
        }
        .vs-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
          pointer-events: none;
        }
        .vs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #EFF6FF;
          border: 1px solid rgba(37,99,235,0.2);
          color: #2563EB;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 5px 14px;
          margin-bottom: 28px;
        }
        .vs-hero-headline {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -1.5px;
          color: #0A0D14;
          max-width: 760px;
          margin: 0 auto 16px;
        }
        .vs-hero-headline em {
          font-style: italic;
          color: #2563EB;
        }
        .vs-hero-sub {
          font-size: 16px;
          color: #445068;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 36px;
        }
        .vs-hero-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .vs-badge {
          font-size: 13px;
          font-weight: 500;
          border-radius: 999px;
          padding: 7px 16px;
          border: 1px solid;
        }
        .vs-badge-chatgpt {
          background: #F8F7F5;
          border-color: rgba(10,13,20,0.12);
          color: #445068;
        }
        .vs-badge-synth {
          background: #2563EB;
          border-color: #2563EB;
          color: #fff;
        }
        .vs-badge-vs {
          font-size: 12px;
          font-weight: 700;
          color: #8E9AB5;
          letter-spacing: 1px;
        }

        /* ── brand comparison cards (logo + name) ── */
        .brand-compare {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .brand-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #FFFFFF;
          border: 1px solid rgba(10,13,20,0.06);
          padding: 10px 14px;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(2,6,23,0.04);
          min-width: 160px;
        }
        .brand-card img { height: 60px; width: auto; display: block; }
        .brand-name { font-weight: 600; color: #0A0D14; font-size: 14px; }
        .brand-name.small { color: #6B7280; font-weight:500; font-size:13px }

        /* ── wrap ── */
        .vs-wrap {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── section ── */
        .vs-section {
          padding: 72px 0;
          border-bottom: 1px solid rgba(10,13,20,0.07);
        }
        .vs-section-eyebrow {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #2563EB;
          text-align: center;
          margin-bottom: 10px;
        }
        .vs-section-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 400;
          letter-spacing: -0.5px;
          color: #0A0D14;
          text-align: center;
          margin-bottom: 8px;
        }
        .vs-section-sub {
          font-size: 15px;
          color: #445068;
          text-align: center;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 48px;
        }

        /* ── task theatre ── */
        .theatre-wrap {
          max-width: 880px;
          margin: 0 auto;
        }
        .theatre-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          justify-content: center;
        }
        .theatre-tab {
          font-size: 13px;
          font-weight: 500;
          border-radius: 999px;
          padding: 6px 16px;
          border: 1px solid rgba(10,13,20,0.12);
          background: #fff;
          color: #445068;
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
        }
        .theatre-tab.active,
        .theatre-tab:hover {
          background: #2563EB;
          border-color: #2563EB;
          color: #fff;
        }
        .theatre-prompt {
          background: #0A0D14;
          border-radius: 12px;
          padding: 16px 20px;
          margin-bottom: 16px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .theatre-prompt-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          white-space: nowrap;
          padding-top: 2px;
        }
        .theatre-prompt-text {
          font-size: 14px;
          color: #fff;
          line-height: 1.6;
          font-style: italic;
          margin: 0;
        }
        .theatre-split {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 12px;
          align-items: start;
        }
        .theatre-side {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(10,13,20,0.08);
        }
        .theatre-side-header {
          padding: 10px 16px;
          border-bottom: 1px solid rgba(10,13,20,0.07);
        }
        .theatre-chatgpt .theatre-side-header { background: #F8F7F5; }
        .theatre-synth   .theatre-side-header { background: #EFF6FF; }
        .theatre-brand {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .theatre-brand-chatgpt { color: #6B7280; }
        .theatre-brand-synth   { color: #2563EB; }
        .theatre-output {
          padding: 16px;
          min-height: 180px;
        }
        .theatre-output-chatgpt { background: #FAFAF9; }
        .theatre-output-synth   { background: #fff; }
        .theatre-pre {
          font-family: 'Geist Mono', 'SF Mono', ui-monospace, monospace;
          font-size: 12px;
          line-height: 1.7;
          white-space: pre-wrap;
          word-break: break-word;
          margin: 0;
          color: #0A0D14;
        }
        .theatre-output-chatgpt .theatre-pre { color: #445068; }
        .theatre-verdict {
          font-size: 12px;
          font-weight: 500;
          line-height: 1.5;
          padding: 10px 16px;
          border-top: 1px solid rgba(10,13,20,0.07);
          margin: 0;
        }
        .theatre-verdict-chatgpt {
          background: #FEF9EE;
          color: #92400E;
        }
        .theatre-verdict-synth {
          background: #F0FDF4;
          color: #15803D;
        }
        .theatre-vs {
          font-size: 13px;
          font-weight: 700;
          color: #8E9AB5;
          letter-spacing: 1px;
          padding-top: 80px;
          text-align: center;
        }

        /* ── comparison table ── */
        .comp-table {
          max-width: 880px;
          margin: 0 auto;
          border-radius: 16px;
          border: 1px solid rgba(10,13,20,0.08);
          overflow: hidden;
        }
        .comp-table-head {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          background: #0A0D14;
          padding: 0;
        }
        .comp-th {
          padding: 14px 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .comp-th-feature { color: rgba(255,255,255,0.4); }
        .comp-th-chatgpt { color: rgba(255,255,255,0.5); }
        .comp-th-synth   { color: #60A5FA; }
        .comp-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          border-top: 1px solid rgba(10,13,20,0.06);
          background: #fff;
          transition: background 0.1s;
        }
        .comp-row:hover { background: #F8FAFF; }
        .comp-cell {
          padding: 14px 20px;
          font-size: 13px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .comp-cell-feature {
          font-weight: 500;
          color: #0A0D14;
        }
        .comp-cell-chatgpt { color: #6B7280; }
        .comp-cell-synth   { color: #1E3A5F; }
        .support-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .support-yes  { background: #DCFCE7; color: #16A34A; }
        .support-no   { background: #FEE2E2; color: #DC2626; }
        .support-part { background: #FEF9C3; color: #CA8A04; }

        .comp-show-more {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .comp-show-more-btn {
          font-size: 14px;
          font-weight: 500;
          color: #2563EB;
          background: none;
          border: 1px solid rgba(37,99,235,0.25);
          border-radius: 999px;
          padding: 8px 22px;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.15s;
        }
        .comp-show-more-btn:hover {
          background: #EFF6FF;
          border-color: #2563EB;
        }

        /* ── use cases ── */
        .use-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          max-width: 880px;
          margin: 0 auto;
        }
        .use-card {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 14px;
          padding: 20px;
          transition: box-shadow 0.2s;
        }
        .use-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.07); }
        .use-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .use-scenario {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #0A0D14;
        }
        .use-icon { font-size: 18px; }
        .verdict-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          border-radius: 999px;
          padding: 3px 10px;
          text-transform: uppercase;
        }
        .verdict-synth   { background: #EFF6FF; color: #2563EB; }
        .verdict-chatgpt { background: #F5F3FF; color: #7C3AED; }
        .verdict-both    { background: #F0FDF4; color: #16A34A; }

        .use-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .use-col {
          border-radius: 8px;
          padding: 10px 12px;
        }
        .use-col-chatgpt { background: #F8F7F5; }
        .use-col-synth   { background: #F0F7FF; }
        .use-col-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .use-col-chatgpt .use-col-label { color: #9CA3AF; }
        .use-col-synth   .use-col-label { color: #3B82F6; }
        .use-col-text {
          font-size: 12px;
          line-height: 1.6;
          margin: 0;
        }
        .use-col-chatgpt .use-col-text { color: #6B7280; }
        .use-col-synth   .use-col-text { color: #1E3A5F; }

        /* ── responsive ── */
        @media (max-width: 720px) {
          .theatre-split { grid-template-columns: 1fr; }
          .theatre-vs    { display: none; }
          .use-grid      { grid-template-columns: 1fr; }
          .use-comparison { grid-template-columns: 1fr; }
          .comp-table-head,
          .comp-row      { grid-template-columns: 1.2fr 1fr; }
          .comp-th-feature,
          .comp-cell-feature { display: none; }
          .vs-cta-form   { flex-direction: column; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}),r.jsxs("div",{className:"vs-page",children:[r.jsxs("section",{className:"vs-hero",children:[r.jsx("div",{className:"vs-eyebrow",children:"Honest comparison"}),r.jsxs("h1",{className:"vs-hero-headline",children:["ChatGPT advises.",r.jsx("br",{}),r.jsx("em",{children:"Synth executes."})]}),r.jsx("p",{className:"vs-hero-sub",children:"ChatGPT is an exceptional thinking partner. Synth is something different — an autonomous agent that works across your business, healthcare practice, or daily life without waiting to be asked."}),r.jsxs("div",{className:"vs-hero-badges",children:[r.jsx("span",{className:"vs-badge vs-badge-chatgpt",children:"ChatGPT"}),r.jsx("span",{className:"vs-badge-vs",children:"VS"}),r.jsx("span",{className:"vs-badge vs-badge-synth",children:"Synth"})]}),r.jsxs("div",{className:"brand-compare",children:[r.jsxs("div",{className:"brand-card",children:[r.jsx("img",{src:"/logo.png",alt:"Synth logo"}),r.jsxs("div",{children:[r.jsx("div",{className:"brand-name",children:"synth"}),r.jsx("div",{className:"brand-name small",children:"Autonomous agent"})]})]}),r.jsxs("div",{className:"brand-card",children:[r.jsx("img",{src:"/compare%20images/Chatgpt.jpg",alt:"ChatGPT logo"}),r.jsxs("div",{children:[r.jsx("div",{className:"brand-name",children:"ChatGPT"}),r.jsx("div",{className:"brand-name small",children:"Assistant & playground"})]})]})]})]}),r.jsx("section",{className:"vs-section",children:r.jsxs("div",{className:"vs-wrap",children:[r.jsx("p",{className:"vs-section-eyebrow",children:"See the difference"}),r.jsx("h2",{className:"vs-section-title",children:"Same task. Completely different outcome."}),r.jsx("p",{className:"vs-section-sub",children:"The gap between the two isn't capability — it's execution. ChatGPT tells you how. Synth handles it."}),r.jsx(xf,{})]})}),r.jsx("section",{className:"vs-section",children:r.jsxs("div",{className:"vs-wrap",children:[r.jsx("p",{className:"vs-section-eyebrow",children:"Feature comparison"}),r.jsx("h2",{className:"vs-section-title",children:"What each tool actually does"}),r.jsx("p",{className:"vs-section-sub",children:"A fair, feature-by-feature comparison. We included two categories where ChatGPT genuinely wins — because honesty is how you build trust."}),r.jsxs("div",{className:"comp-table",children:[r.jsxs("div",{className:"comp-table-head",children:[r.jsx("div",{className:"comp-th comp-th-feature",children:"Feature"}),r.jsx("div",{className:"comp-th comp-th-chatgpt",children:"ChatGPT"}),r.jsx("div",{className:"comp-th comp-th-synth",children:"Synth"})]}),d.map((j,w)=>r.jsxs("div",{className:"comp-row",children:[r.jsx("div",{className:"comp-cell comp-cell-feature",children:j.feature}),r.jsxs("div",{className:"comp-cell comp-cell-chatgpt",children:[r.jsx(gd,{level:j.chatgpt.supported}),j.chatgpt.value]}),r.jsxs("div",{className:"comp-cell comp-cell-synth",children:[r.jsx(gd,{level:j.synth.supported}),j.synth.value]})]},w))]}),!i&&r.jsx("div",{className:"comp-show-more",children:r.jsxs("button",{className:"comp-show-more-btn",onClick:()=>g(!0),children:["Show all ",Qo.length," features ↓"]})})]})}),r.jsx("section",{className:"vs-section",children:r.jsxs("div",{className:"vs-wrap",children:[r.jsx("p",{className:"vs-section-eyebrow",children:"When to use each"}),r.jsx("h2",{className:"vs-section-title",children:"The honest answer by scenario"}),r.jsx("p",{className:"vs-section-sub",children:"We'll tell you when ChatGPT is the better choice. We'd rather be useful than win an argument."}),r.jsx("div",{className:"use-grid",children:ff.map((j,w)=>r.jsxs("div",{className:"use-card",children:[r.jsxs("div",{className:"use-card-top",children:[r.jsxs("div",{className:"use-scenario",children:[r.jsx("span",{className:"use-icon",children:j.icon}),j.scenario]}),r.jsx(mf,{verdict:j.verdict})]}),r.jsxs("div",{className:"use-comparison",children:[r.jsxs("div",{className:"use-col use-col-chatgpt",children:[r.jsx("p",{className:"use-col-label",children:"ChatGPT"}),r.jsx("p",{className:"use-col-text",children:j.chatgpt})]}),r.jsxs("div",{className:"use-col use-col-synth",children:[r.jsx("p",{className:"use-col-label",children:"Synth"}),r.jsx("p",{className:"use-col-text",children:j.synth})]})]})]},w))})]})})]})]})}const vd=[{category:"Fundamentals",feature:"What it actually is",trixta:{value:"Infrastructure layer — a 'DeCloud' for building and running agentic systems",supported:"partial"},synth:{value:"agent designed to independently execute end-to-end tasks like multi-source research and web-browsing for real people and businesses",supported:"yes"}},{category:"Fundamentals",feature:"Who it's built for",trixta:{value:"Developers and enterprise engineering teams building agentic systems from scratch",supported:"partial"},synth:{value:"Professionals, business teams, and healthcare operators who need work done now",supported:"yes"}},{category:"Fundamentals",feature:"Time to first value",trixta:{value:"Weeks to months — requires architecture design, development, and deployment",supported:"no"},synth:{value:"Under 3 minutes — connect your tools, start messaging",supported:"yes"}},{category:"Fundamentals",feature:"Some technical knowledge required",trixta:{value:"High — primitives, runtimes, and distributed systems concepts required",supported:"no"},synth:{value:"None — if you can send a WhatsApp message, you can use Synth",supported:"yes"}},{category:"Execution",feature:"Autonomous task execution",trixta:{value:"Provides the infrastructure for others to build autonomous execution — not out of the box",supported:"partial"},synth:{value:"Built in — give Synth a task and it executes every step without you",supported:"yes"}},{category:"Execution",feature:"Proactive alerts & morning briefing",trixta:{value:"Not a feature — would need to be custom-built on top of Trixta's infrastructure",supported:"no"},synth:{value:"Daily briefing delivered to WhatsApp before 7 AM — zero setup required",supported:"yes"}},{category:"Execution",feature:"Works in WhatsApp & Telegram",trixta:{value:"No — requires custom front-end development to deliver any user-facing output",supported:"no"},synth:{value:"Native — Synth lives in the apps your team already uses every day",supported:"yes"}},{category:"Execution",feature:"Long-term memory & personalisation",trixta:{value:"Possible to build via Trixta primitives — but requires significant engineering effort",supported:"partial"},synth:{value:"Built in — Synth learns your preferences, patterns, and relationships over time",supported:"yes"}},{category:"Verticals",feature:"Marketing workflows",trixta:{value:"Infrastructure only — you must build campaign and creative workflows yourself",supported:"partial"},synth:{value:"Pre-built — campaign generation, competitor research, content, and analytics ready to use",supported:"yes"}},{category:"Verticals",feature:"Sales automation",trixta:{value:"No native sales tools — engineering teams must build from primitives",supported:"no"},synth:{value:"Lead enrichment, outreach drafting, deal briefs, and CRM sync — out of the box",supported:"yes"}},{category:"Verticals",feature:"Finance & analysis",trixta:{value:"No native financial capabilities — custom development required for each use case",supported:"no"},synth:{value:"Live market data, financial modelling, report collection, and portfolio monitoring",supported:"yes"}},{category:"Verticals",feature:"Healthcare admin",trixta:{value:"Not designed for healthcare — no ICD-10, payer rules, or clinical workflow support",supported:"no"},synth:{value:"ICD-10/CPT/HCPCS coding, claim denial resolution, scheduling, refill reminders — POPIA-compliant",supported:"yes"}},{category:"Verticals",feature:"Personal AI assistant",trixta:{value:"Infrastructure only — no personal assistant capabilities without custom development",supported:"no"},synth:{value:"Full personal chief of staff — day planning, scheduling, travel, communications via WhatsApp",supported:"yes"}},{category:"Integrations",feature:"Business tool connections",trixta:{value:"Integrations must be custom-built using Trixta's wrapper and Space primitives",supported:"partial"},synth:{value:"Sage, Xero, HubSpot, Salesforce, Google Workspace, Microsoft 365 — native connectors",supported:"yes"}},{category:"Integrations",feature:"South African tools (Sage, GoodX, SARS)",trixta:{value:"No local market integrations — global infrastructure, no SA-specific connectors",supported:"no"},synth:{value:"Sage, GoodX, SA medical schemes, SARS eFiling — built for the local market",supported:"yes"}},{category:"Integrations",feature:"Custom MCP / API access",trixta:{value:"Yes — Trixta's core architecture is built for custom integration and extension",supported:"yes"},synth:{value:"Yes — custom MCP servers and REST API available ",supported:"yes"}},{category:"Pricing",feature:"Entry price",trixta:{value:"$60/month for a team of less than 10, $200/month/10-50 heads, all billed  annually",supported:"no"},synth:{value:"$15/month per seat — accessible to individuals, SMEs, and enterprise alike",supported:"yes"}},{category:"Pricing",feature:"Healthcare / enterprise pricing",trixta:{value:"Custom enterprise contracts — typically $10,000+ per month at scale",supported:"no"},synth:{value:"$499/facility/month — purpose-built for SA healthcare, POPIA-compliant",supported:"yes"}},{category:"Pricing",feature:"Free tier or trial",trixta:{value:"available —  30-minute, guided, AI-driven onboarding and strategy session",supported:"no"},synth:{value:"Free during beta — no credit card required",supported:"yes"}},{category:"Pricing",feature:"Pricing transparency",trixta:{value:"  30-minute, guided, AI-driven onboarding and strategy session priced annually, pricing not published on website",supported:"yes"},synth:{value:"$15, $35, $195/month. Healthcare from $499/facility",supported:"yes"}}],vf=[{sector:"Marketing & Advertising",icon:"📈",trixta:"Infrastructure only — no marketing tools. Teams must build campaign workflows from scratch using Trixta primitives.",synth:"Campaign generation, competitor intelligence, social content, email sequences, and marketing analytics — ready to use immediately.",winner:"synth"},{sector:"Sales",icon:"🤝",trixta:"No native sales capabilities. CRM integration and outreach automation require custom development.",synth:"Lead enrichment, personalised outreach, deal briefs, CRM sync (Salesforce, HubSpot, Pipedrive) — out of the box.",winner:"synth"},{sector:"Finance",icon:"💹",trixta:"No financial tools. Market data, modelling, and reporting workflows must be custom-engineered.",synth:"Live market analysis, DCF modelling, report collection for hundreds of firms, portfolio monitoring — delivered autonomously.",winner:"synth"},{sector:"Product Management",icon:"🧩",trixta:"No product tools. PRD generation, competitive mapping, and roadmapping not available without custom builds.",synth:"Strategy docs, roadmaps, PRDs, market segmentation, competitive maps — drafted, researched, and kept current.",winner:"synth"},{sector:"Healthcare Admin",icon:"🏥",trixta:"Not designed for healthcare. No ICD-10, CPT, payer rules, EHR integration, or POPIA compliance.",synth:"Claim denial resolution, ICD-10/CPT coding, payer rule monitoring, appointment scheduling, refill reminders — POPIA-compliant.",winner:"synth"},{sector:"Personal Productivity",icon:"🙋",trixta:"Not a personal tool. Trixta requires developers to build user-facing applications — individuals cannot use it directly.",synth:"Daily briefing, proactive alerts, autonomous task execution, long-term memory — via WhatsApp. No app download.",winner:"synth"},{sector:"Developer / Infrastructure",icon:"⚙️",trixta:"Trixta's home turf. Deep infrastructure primitives, composable runtimes, and the DeCloud architecture are genuinely impressive for engineering-led organisations.",synth:"Custom MCP servers and REST API available — but Synth is an application layer, not an infrastructure platform. For pure infrastructure needs, Trixta goes deeper.",winner:"trixta"}];function yd({level:i}){return i==="yes"?r.jsx("span",{className:"vt-support vt-support-yes","aria-label":"Yes",children:"✓"}):i==="no"?r.jsx("span",{className:"vt-support vt-support-no","aria-label":"No",children:"✗"}):r.jsx("span",{className:"vt-support vt-support-part","aria-label":"Partial",children:"◐"})}function yf(){const[i,g]=R.useState(!1),[d,j]=R.useState("All"),w=["All",...Array.from(new Set(vd.map(v=>v.category)))],y=vd.filter(v=>d==="All"||v.category===d),L=i?y:y.slice(0,8);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        /* ── page ── */
        .vt-page {
          font-family: 'Geist', 'Inter', system-ui, sans-serif;
          background: #F5F7FA;
          color: #0A0D14;
          min-height: 100vh;
        }

        /* ── wrap ── */
        .vt-wrap {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .vt-wrap-sm {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── hero ── */
        .vt-hero {
          padding: 88px 24px 72px;
          text-align: center;
          border-bottom: 1px solid rgba(10,13,20,0.07);
          position: relative;
          overflow: hidden;
        }
        .vt-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
          pointer-events: none;
        }
        .vt-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #EFF6FF;
          border: 1px solid rgba(37,99,235,0.2);
          color: #2563EB;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 5px 14px;
          margin-bottom: 28px;
        }
        .vt-hero-headline {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(34px, 5.5vw, 62px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -1.5px;
          color: #0A0D14;
          max-width: 780px;
          margin: 0 auto 18px;
        }
        .vt-hero-headline em {
          font-style: italic;
          color: #2563EB;
        }
        .vt-hero-sub {
          font-size: 16px;
          color: #445068;
          line-height: 1.7;
          max-width: 580px;
          margin: 0 auto 40px;
        }
        .vt-hero-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 42px;
        }
        .vt-badge {
          font-size: 13px;
          font-weight: 600;
          border-radius: 999px;
          padding: 8px 18px;
          border: 1px solid;
        }
        .vt-badge-trixta {
          background: #1A1A2E;
          border-color: #1A1A2E;
          color: #fff;
        }
        .vt-badge-synth {
          background: #2563EB;
          border-color: #2563EB;
          color: #fff;
        }
        .vt-badge-vs {
          font-size: 11px;
          font-weight: 700;
          color: #8E9AB5;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* brand snippets */
        .vt-brand-inline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .vt-brand-inline img { height: 20px; width: auto; display: block; }
        .vt-brand-hero { display:flex; gap:12px; justify-content:center; margin-top:18px }
        .vt-mini-logo { height:50px; width:auto; display:inline-block; vertical-align:middle }
        /* Synth logo – enlarged to stand out */
        .vt-logo-synth { height:120px; width:auto; display:inline-block; vertical-align:middle }

        /* ── TL;DR callout ── */
        .vt-tldr {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 16px;
          padding: 28px 32px;
          margin: 0 auto;
          max-width: 760px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .vt-tldr-col h4 {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .vt-tldr-col-trixta h4 { color: #1A1A2E; }
        .vt-tldr-col-synth  h4 { color: #2563EB; }
        .vt-tldr-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .vt-tldr-col li {
          font-size: 13px;
          color: #445068;
          display: flex;
          align-items: flex-start;
          gap: 7px;
          line-height: 1.5;
        }
        .vt-tldr-col li::before {
          content: '·';
          font-weight: 700;
          flex-shrink: 0;
        }
        .vt-tldr-col-trixta li::before { color: #1A1A2E; }
        .vt-tldr-col-synth  li::before { color: #2563EB; }

        /* ── section ── */
        .vt-section {
          padding: 72px 0;
          border-bottom: 1px solid rgba(10,13,20,0.07);
        }
        .vt-section-eyebrow {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #2563EB;
          text-align: center;
          margin-bottom: 10px;
        }
        .vt-section-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 400;
          letter-spacing: -0.5px;
          color: #0A0D14;
          text-align: center;
          margin-bottom: 8px;
          line-height: 1.15;
        }
        .vt-section-sub {
          font-size: 15px;
          color: #445068;
          text-align: center;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 50px;
        }

        /* ── pricing cards ── */
        .vt-pricing-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          max-width: 860px;
          margin: 0 auto 28px;
        }
        .vt-pricing-card {
          border-radius: 16px;
          padding: 24px;
          border: 1px solid;
          position: relative;
        }
        .vt-pricing-card-trixta {
          background: #0D0D1A;
          border-color: rgba(255,255,255,0.1);
        }
        .vt-pricing-card-synth {
          background: #fff;
          border-color: rgba(10,13,20,0.08);
        }
        .vt-pricing-card-synth.featured {
          border-color: #2563EB;
          box-shadow: 0 0 0 2px #EFF6FF;
        }
        .vt-pricing-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 14px;
          display: inline-block;
          border-radius: 999px;
          padding: 3px 10px;
        }
        .vt-label-trixta {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.5);
        }
        .vt-label-synth {
          background: #EFF6FF;
          color: #2563EB;
        }
        .vt-pricing-name {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .vt-pricing-card-trixta .vt-pricing-name { color: #fff; }
        .vt-pricing-card-synth  .vt-pricing-name { color: #0A0D14; }
        .vt-pricing-price {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 40px;
          font-weight: 400;
          letter-spacing: -1px;
          line-height: 1;
          margin-bottom: 4px;
        }
        .vt-pricing-card-trixta .vt-pricing-price { color: #fff; }
        .vt-pricing-card-synth  .vt-pricing-price { color: #0A0D14; }
        .vt-pricing-period {
          font-size: 13px;
          font-family: 'Geist', 'Inter', sans-serif;
          font-weight: 400;
        }
        .vt-pricing-card-trixta .vt-pricing-period { color: rgba(255,255,255,0.35); }
        .vt-pricing-card-synth  .vt-pricing-period { color: #8E9AB5; }
        .vt-pricing-note {
          font-size: 12px;
          line-height: 1.6;
          margin: 10px 0 12px;
        }
        .vt-pricing-card-trixta .vt-pricing-note { color: rgba(255,255,255,0.4); }
        .vt-pricing-card-synth  .vt-pricing-note { color: #6B7A99; }
        .vt-pricing-audience {
          font-size: 12px;
          font-weight: 500;
          border-radius: 999px;
          padding: 6px 14px;
          display: inline-block;
        }
        .vt-pricing-card-trixta .vt-pricing-audience {
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.45);
        }
        .vt-pricing-card-synth .vt-pricing-audience {
          background: #EFF6FF;
          color: #2563EB;
        }

        /* ── price verdict ── */
        .vt-price-verdict {
          background: #0A0D14;
          border-radius: 14px;
          padding: 24px 28px;
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .vt-verdict-icon {
          font-size: 22px;
          flex-shrink: 0;
          padding-top: 2px;
        }
        .vt-price-verdict h4 {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 6px;
        }
        .vt-price-verdict p {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin: 0;
        }
        .vt-price-verdict strong { color: rgba(255,255,255,0.8); }

        /* ── feature table ── */
        .vt-filter-tabs {
          display: flex;
          gap: 6px;
          margin-bottom: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .vt-filter-tab {
          font-size: 13px;
          font-weight: 500;
          border-radius: 999px;
          padding: 6px 16px;
          border: 1px solid rgba(10,13,20,0.12);
          background: #fff;
          color: #445068;
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
        }
        .vt-filter-tab.active,
        .vt-filter-tab:hover {
          background: #2563EB;
          border-color: #2563EB;
          color: #fff;
        }
        .vt-table {
          max-width: 900px;
          margin: 0 auto;
          border-radius: 16px;
          border: 1px solid rgba(10,13,20,0.08);
          overflow: hidden;
        }
        .vt-table-head {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr;
          background: #0A0D14;
        }
        .vt-th {
          padding: 14px 18px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .vt-th-feature  { color: rgba(255,255,255,0.35); }
        .vt-th-trixta   { color: rgba(255,255,255,0.5); }
        .vt-th-synth    { color: #60A5FA; }

        .vt-category-row {
          background: #F0F4FA;
          padding: 8px 18px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #8E9AB5;
          border-top: 1px solid rgba(10,13,20,0.06);
        }

        .vt-row {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr;
          border-top: 1px solid rgba(10,13,20,0.05);
          background: #fff;
          transition: background 0.1s;
        }
        .vt-row:hover { background: #F8FAFF; }
        .vt-cell {
          padding: 13px 18px;
          font-size: 13px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.5;
        }
        .vt-cell-feature { font-weight: 500; color: #0A0D14; }
        .vt-cell-trixta  { color: #6B7A99; }
        .vt-cell-synth   { color: #1E3A5F; }

        .vt-support {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .vt-support-yes  { background: #DCFCE7; color: #16A34A; }
        .vt-support-no   { background: #FEE2E2; color: #DC2626; }
        .vt-support-part { background: #FEF9C3; color: #CA8A04; }

        .vt-show-more {
          display: flex;
          justify-content: center;
          margin-top: 16px;
        }
        .vt-show-more-btn {
          font-size: 14px;
          font-weight: 500;
          color: #2563EB;
          background: none;
          border: 1px solid rgba(37,99,235,0.25);
          border-radius: 999px;
          padding: 8px 22px;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.15s;
        }
        .vt-show-more-btn:hover {
          background: #EFF6FF;
          border-color: #2563EB;
        }

        /* ── sector grid ── */
        .vt-sector-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 900px;
          margin: 0 auto;
        }
        .vt-sector-card {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 14px;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }
        .vt-sector-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .vt-sector-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px 0;
        }
        .vt-sector-name {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 14px;
          font-weight: 600;
          color: #0A0D14;
        }
        .vt-sector-icon { font-size: 18px; }
        .vt-sector-winner {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          border-radius: 999px;
          padding: 3px 10px;
        }
        .vt-winner-synth   { background: #EFF6FF; color: #2563EB; }
        .vt-winner-trixta  { background: #F0F0FF; color: #4338CA; }
        .vt-winner-both    { background: #F0FDF4; color: #16A34A; }
        .vt-sector-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: 12px 18px 16px;
        }
        .vt-sector-col {
          padding: 10px 12px;
          border-radius: 8px;
        }
        .vt-sector-col-trixta { background: #F8F8FC; margin-right: 6px; }
        .vt-sector-col-synth  { background: #F0F7FF; margin-left: 6px; }
        .vt-sector-col-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        .vt-sector-col-trixta .vt-sector-col-label { color: #9CA3AF; }
        .vt-sector-col-synth  .vt-sector-col-label { color: #3B82F6; }
        .vt-sector-col-text {
          font-size: 12px;
          line-height: 1.6;
          margin: 0;
        }
        .vt-sector-col-trixta .vt-sector-col-text { color: #6B7A99; }
        .vt-sector-col-synth  .vt-sector-col-text { color: #1E3A5F; }

        /* ── vc callout ── */
        .vt-vc-box {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 16px;
          padding: 36px;
          max-width: 860px;
          margin: 0 auto;
        }
        .vt-vc-box h3 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 24px;
          font-weight: 400;
          color: #0A0D14;
          letter-spacing: -0.3px;
          margin-bottom: 14px;
        }
        .vt-vc-points {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 24px;
        }
        .vt-vc-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px;
          background: #F5F7FA;
          border-radius: 10px;
        }
        .vt-vc-point-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #EFF6FF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
        }
        .vt-vc-point h5 {
          font-size: 13px;
          font-weight: 600;
          color: #0A0D14;
          margin-bottom: 3px;
        }
        .vt-vc-point p {
          font-size: 12px;
          color: #445068;
          line-height: 1.55;
          margin: 0;
        }
        .vt-vc-note {
          font-size: 13px;
          color: #6B7A99;
          line-height: 1.7;
          border-top: 1px solid rgba(10,13,20,0.07);
          padding-top: 20px;
        }
        .vt-vc-note strong { color: #0A0D14; }

        /* ── responsive ── */
        @media (max-width: 720px) {
          .vt-tldr          { grid-template-columns: 1fr; }
          .vt-pricing-grid  { grid-template-columns: 1fr; }
          .vt-table-head,
          .vt-row           { grid-template-columns: 1.4fr 1fr; }
          .vt-th-feature,
          .vt-cell-feature  { display: none; }
          .vt-sector-body   { grid-template-columns: 1fr; }
          .vt-sector-col-trixta { margin-right: 0; margin-bottom: 6px; }
          .vt-sector-col-synth  { margin-left: 0; }
          .vt-vc-points     { grid-template-columns: 1fr; }
          /* On small screens, reduce Synth logo size a bit to avoid overflow */
          .vt-logo-synth { height:90px; }
          .vt-mini-logo { height:40px; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}),r.jsxs("div",{className:"vt-page",children:[r.jsxs("section",{className:"vt-hero",children:[r.jsx("div",{className:"vt-eyebrow",children:"Honest comparison"}),r.jsxs("h1",{className:"vt-hero-headline",children:["Trixta builds the roads.",r.jsx("br",{}),r.jsx("em",{children:"Synth drives the car."})]}),r.jsx("p",{className:"vt-hero-sub",children:"Trixta is impressive infrastructure for engineering teams building agentic systems. Synth is the product those teams wish already existed — autonomous execution for real business work, available in WhatsApp from day one."}),r.jsx("div",{className:"vt-hero-badges",children:r.jsxs("div",{className:"vt-brand-hero",children:[r.jsx("div",{className:"vt-brand-inline","aria-hidden":!0,children:r.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})}),r.jsx("span",{className:"vt-badge-vs",children:"VS"}),r.jsx("div",{className:"vt-brand-inline","aria-hidden":!0,children:r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})})]})}),r.jsxs("div",{className:"vt-tldr",children:[r.jsxs("div",{className:"vt-tldr-col vt-tldr-col-trixta",children:[r.jsx("h4",{children:r.jsxs("span",{className:"vt-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"}),r.jsx("span",{children:"Trixta in plain English"})]})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Enterprise infrastructure for building agentic systems from code"}),r.jsx("li",{children:"Targets developers and engineering organisations"}),r.jsx("li",{children:"Requires weeks of development before any business value"}),r.jsx("li",{children:"No native healthcare, sales, finance, or personal assistant capabilities"}),r.jsx("li",{children:"No South African market integrations"})]})]}),r.jsxs("div",{className:"vt-tldr-col vt-tldr-col-synth",children:[r.jsx("h4",{children:"Synth in plain English"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Autonomous AI agent that executes real business tasks end-to-end"}),r.jsx("li",{children:"Built for professionals, business teams, and healthcare operators"}),r.jsx("li",{children:"From $15/month — transparent, publicly listed pricing"}),r.jsx("li",{children:"Live in under 3 minutes — no development required"}),r.jsx("li",{children:"Marketing, Sales, Finance, Product, Healthcare, Personal — ready to use"}),r.jsx("li",{children:"Built for South Africa — Sage, GoodX, SA medical schemes, SARS eFiling"})]})]})]})]}),r.jsx("section",{className:"vt-section",children:r.jsxs("div",{className:"vt-wrap",children:[r.jsx("p",{className:"vt-section-eyebrow",children:"Sector by sector"}),r.jsx("h2",{className:"vt-section-title",children:"What each platform actually covers"}),r.jsx("p",{className:"vt-section-sub",children:"Trixta focuses on one sector: developer infrastructure. Synth was built to serve six — and to serve them without engineering overhead."}),r.jsx("div",{className:"vt-sector-grid",children:vf.map((v,E)=>r.jsxs("div",{className:"vt-sector-card",children:[r.jsxs("div",{className:"vt-sector-header",children:[r.jsxs("div",{className:"vt-sector-name",children:[r.jsx("span",{className:"vt-sector-icon",children:v.icon}),v.sector]}),r.jsx("span",{className:`vt-sector-winner ${v.winner==="synth"?"vt-winner-synth":v.winner==="trixta"?"vt-winner-trixta":"vt-winner-both"}`,children:v.winner==="synth"?r.jsxs("span",{className:"vt-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})," Synth wins"]}):v.winner==="trixta"?r.jsxs("span",{className:"vt-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})," wins"]}):"Both work"})]}),r.jsxs("div",{className:"vt-sector-body",children:[r.jsxs("div",{className:"vt-sector-col vt-sector-col-trixta",children:[r.jsxs("p",{className:"vt-sector-col-label vt-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})," ",r.jsx("span",{children:"Trixta"})]}),r.jsx("p",{className:"vt-sector-col-text",children:v.trixta})]}),r.jsxs("div",{className:"vt-sector-col vt-sector-col-synth",children:[r.jsxs("p",{className:"vt-sector-col-label vt-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})," ",r.jsx("span",{children:"Synth"})]}),r.jsx("p",{className:"vt-sector-col-text",children:v.synth})]})]})]},E))})]})}),r.jsx("section",{className:"vt-section",children:r.jsxs("div",{className:"vt-wrap",children:[r.jsx("p",{className:"vt-section-eyebrow",children:"Feature comparison"}),r.jsx("h2",{className:"vt-section-title",children:"Feature by feature, honestly"}),r.jsx("p",{className:"vt-section-sub",children:"We include the one category where Trixta genuinely wins — pure infrastructure depth. Everything else tells a clear story."}),r.jsx("div",{className:"vt-filter-tabs",children:w.map(v=>r.jsx("button",{className:`vt-filter-tab ${d===v?"active":""}`,onClick:()=>{j(v),g(!1)},children:v},v))}),r.jsxs("div",{className:"vt-table",children:[r.jsxs("div",{className:"vt-table-head",children:[r.jsx("div",{className:"vt-th vt-th-feature",children:"Feature"}),r.jsx("div",{className:"vt-th vt-th-trixta",children:r.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})}),r.jsx("div",{className:"vt-th vt-th-synth",children:r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})})]}),L.map((v,E)=>{const M=y[E-1],V=!M||M.category!==v.category;return r.jsxs("div",{children:[V&&d==="All"&&r.jsx("div",{className:"vt-category-row",children:v.category}),r.jsxs("div",{className:"vt-row",children:[r.jsx("div",{className:"vt-cell vt-cell-feature",children:v.feature}),r.jsxs("div",{className:"vt-cell vt-cell-trixta",children:[r.jsx(yd,{level:v.trixta.supported}),v.trixta.value]}),r.jsxs("div",{className:"vt-cell vt-cell-synth",children:[r.jsx(yd,{level:v.synth.supported}),v.synth.value]})]})]},E)})]}),!i&&y.length>8&&r.jsx("div",{className:"vt-show-more",children:r.jsxs("button",{className:"vt-show-more-btn",onClick:()=>g(!0),children:["Show all ",y.length," features ↓"]})})]})}),r.jsx("section",{className:"vt-section",children:r.jsxs("div",{className:"vt-wrap",children:[r.jsx("p",{className:"vt-section-eyebrow",children:"For investors"}),r.jsx("h2",{className:"vt-section-title",children:"Why this comparison matters to VCs"}),r.jsx("p",{className:"vt-section-sub",children:"Trixta and Synth are not competitors — they're at different layers of the stack. That's the opportunity."}),r.jsxs("div",{className:"vt-vc-box",children:[r.jsx("h3",{children:"Synth occupies the layer Trixta cannot reach"}),r.jsxs("div",{className:"vt-vc-points",children:[r.jsxs("div",{className:"vt-vc-point",children:[r.jsx("div",{className:"vt-vc-point-icon",children:"🌍"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Underserved market"}),r.jsx("p",{children:"South Africa and sub-Saharan Africa have no native AI orchestration platform. Synth is built for this market — local tools, local compliance, local pricing."})]})]}),r.jsxs("div",{className:"vt-vc-point",children:[r.jsx("div",{className:"vt-vc-point-icon",children:"📱"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Distribution moat"}),r.jsx("p",{children:"WhatsApp has 90%+ penetration in South Africa. Synth delivers AI through the channel people already use — Trixta cannot compete here."})]})]}),r.jsxs("div",{className:"vt-vc-point",children:[r.jsx("div",{className:"vt-vc-point-icon",children:"🏥"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Healthcare vertical"}),r.jsx("p",{children:"No global AI platform has built a POPIA-compliant healthcare admin layer for SA medical schemes and EHR systems. Synth owns this by default."})]})]}),r.jsxs("div",{className:"vt-vc-point",children:[r.jsx("div",{className:"vt-vc-point-icon",children:"💰"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Accessible price point"}),r.jsx("p",{children:"At $15/month, Synth can acquire customers at 100x the volume of enterprise infrastructure platforms. Higher volume, faster growth, stronger network effects."})]})]})]}),r.jsxs("p",{className:"vt-vc-note",children:[r.jsx("strong",{children:"The acquisition thesis:"})," Trixta is building infrastructure that enterprise teams need to build what Synth already is. A strategic acquirer — whether a Salesforce, Microsoft, or African telecoms group — looking to own the agentic layer in emerging markets will find Synth's distribution, verticals, and local market depth far more valuable than another infrastructure play. Synth is the end product. That's where the customer relationships live."]})]})]})})]})]})}const wd=[{category:"Fundamentals",feature:"What it actually is",nyla:{value:"Consumer health app — symptom checker, doctor finder, medication tracker for patients",supported:"yes"},synth:{value:"B2B AI operations platform — autonomous task execution across six business verticals",supported:"yes"}},{category:"Fundamentals",feature:"Who it serves",nyla:{value:"Individual patients seeking healthcare information and appointments",supported:"yes"},synth:{value:"Healthcare administrators, finance teams, sales teams, marketing teams, and individual professionals",supported:"yes"}},{category:"Fundamentals",feature:"Primary interface",nyla:{value:"Mobile app (Google Play Store) — patient-facing consumer experience",supported:"yes"},synth:{value:"WhatsApp & Telegram — works inside the apps teams already use every day",supported:"yes"}},{category:"Fundamentals",feature:"Time to first value",nyla:{value:"Minutes to download, but requires patient adoption before institutional value materialises",supported:"partial"},synth:{value:"Under 3 minutes — connect your tools, start messaging, see immediate operational impact",supported:"yes"}},{category:"Healthcare",feature:"Patient symptom checking & doctor booking",nyla:{value:"Core feature — AI-powered symptom checker, appointment booking, medication ordering",supported:"yes"},synth:{value:"Not a consumer feature — Synth serves the operations side, not the patient front door",supported:"no"}},{category:"Healthcare",feature:"Medical billing & claim denial resolution",nyla:{value:"Not available — Nyla AI is patient-facing; no claim coding, submission, or appeal workflows",supported:"no"},synth:{value:"Built in — ICD-10/CPT/HCPCS coding, claim submission, denial tracking, and appeals — POPIA-compliant",supported:"yes"}},{category:"Healthcare",feature:"Revenue recovery for hospitals",nyla:{value:"No institutional revenue recovery tools — consumer adoption must come first",supported:"no"},synth:{value:"Direct revenue impact — built to recover the R2.3 billion lost annually to unresolved claim denials in SA hospitals",supported:"yes"}},{category:"Healthcare",feature:"EMR & hospital dashboard",nyla:{value:"Beta feature — AI-powered EMR and patient/staff management dashboards for hospitals",supported:"partial"},synth:{value:"Not an EMR — Synth integrates with existing EHR systems and adds an intelligent operations layer on top",supported:"partial"}},{category:"Healthcare",feature:"POPIA compliance",nyla:{value:"Not explicitly stated — consumer health data handling standards unclear",supported:"partial"},synth:{value:"Built for South African compliance from day one — POPIA-aligned data handling and audit trails",supported:"yes"}},{category:"Beyond Healthcare",feature:"Marketing workflows",nyla:{value:"No marketing tools — healthcare-only scope",supported:"no"},synth:{value:"Pre-built — campaign generation, competitor research, content, and analytics ready to use",supported:"yes"}},{category:"Beyond Healthcare",feature:"Sales automation",nyla:{value:"No sales capabilities — patient acquisition is organic, not systematic outreach",supported:"no"},synth:{value:"Lead enrichment, outreach drafting, deal briefs, and CRM sync — out of the box",supported:"yes"}},{category:"Beyond Healthcare",feature:"Finance & analysis",nyla:{value:"No financial tools — no market data, modelling, or business reporting",supported:"no"},synth:{value:"Live market data, financial modelling, report collection, and portfolio monitoring",supported:"yes"}},{category:"Beyond Healthcare",feature:"Personal AI assistant",nyla:{value:"Personal health assistant only — no general productivity or scheduling support",supported:"partial"},synth:{value:"Full personal chief of staff — day planning, scheduling, travel, communications via WhatsApp",supported:"yes"}},{category:"Integrations",feature:"South African healthcare tools",nyla:{value:"Hospital and pharmacy network — ecosystem approach within healthcare",supported:"partial"},synth:{value:"Sage, GoodX, SA medical schemes, SARS eFiling — built for the local market across all verticals",supported:"yes"}},{category:"Integrations",feature:"Business tool connections",nyla:{value:"Healthcare-specific only — no general business tool connectors",supported:"no"},synth:{value:"Sage, Xero, HubSpot, Salesforce, Google Workspace, Microsoft 365 — native connectors",supported:"yes"}},{category:"Integrations",feature:"Custom MCP / API access",nyla:{value:"Not mentioned — closed ecosystem approach",supported:"no"},synth:{value:"Yes — custom MCP servers and REST API available for enterprise integration",supported:"yes"}},{category:"Pricing",feature:"Entry price",nyla:{value:"Subscription plans for individuals, hospitals, and pharmacies — pricing not publicly listed",supported:"partial"},synth:{value:"$15/month per seat — transparent, publicly listed pricing",supported:"yes"}},{category:"Pricing",feature:"Healthcare / enterprise pricing",nyla:{value:"Custom hospital/pharmacy plans — pricing not disclosed",supported:"partial"},synth:{value:"$499/facility/month — purpose-built for SA healthcare, POPIA-compliant",supported:"yes"}},{category:"Pricing",feature:"Free tier or trial",nyla:{value:"Beta available on Google Play Store — subscription required for full features",supported:"partial"},synth:{value:"Free during beta — no credit card required",supported:"yes"}},{category:"Pricing",feature:"Pricing transparency",nyla:{value:"Pricing not published on website — contact sales for hospital/pharmacy plans",supported:"no"},synth:{value:"$15, $35, $195/month. Healthcare from $499/facility — all listed publicly",supported:"yes"}}],wf=[{sector:"Patient Health & Wellness",icon:"🩺",nyla:"Nyla AI's core strength. AI symptom checking, doctor booking, medication tracking, and wellness tools — built for the individual patient.",synth:"Not a consumer health app. Synth does not compete here — it serves the operations layer that hospitals use after the patient leaves.",winner:"nyla"},{sector:"Healthcare Admin & Revenue",icon:"🏥",nyla:"No claim denial resolution, no ICD-10/CPT coding, no revenue recovery. Nyla AI is the front door; it does not handle what happens after the patient walks out.",synth:"Claim denial resolution, ICD-10/CPT/HCPCS coding, payer rule monitoring, appointment scheduling, refill reminders — POPIA-compliant. Built to recover the R2.3 billion lost annually to unresolved claim denials.",winner:"synth"},{sector:"Marketing",icon:"📈",nyla:"No marketing tools. Nyla AI is healthcare-only and does not serve marketing teams.",synth:"Campaign generation, competitor intelligence, social content, email sequences, and marketing analytics — ready to use immediately.",winner:"synth"},{sector:"Sales",icon:"🤝",nyla:"No sales capabilities. CRM integration and outreach automation are outside Nyla AI's scope.",synth:"Lead enrichment, personalised outreach, deal briefs, CRM sync (Salesforce, HubSpot, Pipedrive) — out of the box.",winner:"synth"},{sector:"Finance",icon:"💹",nyla:"No financial tools. Market data, modelling, and reporting are not part of the Nyla AI ecosystem.",synth:"Live market analysis, DCF modelling, report collection for hundreds of firms, portfolio monitoring — delivered autonomously.",winner:"synth"},{sector:"Personal Productivity",icon:"🙋",nyla:"Personal health tracking only — symptom journals, medication reminders, wellness goals. No general productivity support.",synth:"Daily briefing, proactive alerts, autonomous task execution, long-term memory — via WhatsApp. No app download. A true personal chief of staff.",winner:"synth"}];function bd({level:i}){return i==="yes"?r.jsx("span",{className:"vn-support vn-support-yes","aria-label":"Yes",children:"✓"}):i==="no"?r.jsx("span",{className:"vn-support vn-support-no","aria-label":"No",children:"✗"}):r.jsx("span",{className:"vn-support vn-support-part","aria-label":"Partial",children:"◐"})}function bf(){const[i,g]=R.useState(!1),[d,j]=R.useState("All"),w=["All",...Array.from(new Set(wd.map(v=>v.category)))],y=wd.filter(v=>d==="All"||v.category===d),L=i?y:y.slice(0,8);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        /* ── page ── */
        .vn-page {
          font-family: 'Geist', 'Inter', system-ui, sans-serif;
          background: #F5F7FA;
          color: #0A0D14;
          min-height: 100vh;
        }

        /* ── wrap ── */
        .vn-wrap {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .vn-wrap-sm {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── hero ── */
        .vn-hero {
          padding: 88px 24px 72px;
          text-align: center;
          border-bottom: 1px solid rgba(10,13,20,0.07);
          position: relative;
          overflow: hidden;
        }
        .vn-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
          pointer-events: none;
        }
        .vn-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #EFF6FF;
          border: 1px solid rgba(37,99,235,0.2);
          color: #2563EB;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 5px 14px;
          margin-bottom: 28px;
        }
        .vn-hero-headline {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -1.2px;
          color: #0A0D14;
          max-width: 800px;
          margin: 0 auto 18px;
        }
        .vn-hero-headline em {
          font-style: italic;
          color: #2563EB;
        }
        .vn-hero-sub {
          font-size: 16px;
          color: #445068;
          line-height: 1.7;
          max-width: 620px;
          margin: 0 auto 40px;
        }
        .vn-hero-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .vn-badge {
          font-size: 13px;
          font-weight: 600;
          border-radius: 999px;
          padding: 8px 18px;
          border: 1px solid;
        }
        .vn-badge-nyla {
          background: #0D1B2A;
          border-color: #0D1B2A;
          color: #fff;
        }
        .vn-badge-synth {
          background: #2563EB;
          border-color: #2563EB;
          color: #fff;
        }
        .vn-badge-vs {
          font-size: 11px;
          font-weight: 700;
          color: #8E9AB5;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* brand snippets */
        .vn-brand-inline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .vn-brand-inline img { height: 20px; width: auto; display: block; }
        .vn-brand-hero { display:flex; gap:16px; justify-content:center; align-items:center; margin-top:18px }
        .vn-mini-logo { height:50px; width:auto; display:inline-block; vertical-align:middle; border-radius:8px; }
        .vn-logo-synth { height:120px; width:auto; display:inline-block; vertical-align:middle; border-radius:8px; }

        /* ── stack callout ── */
        .vn-stack-callout {
          background: #0A0D14;
          border-radius: 16px;
          padding: 32px;
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: left;
        }
        .vn-stack-callout h3 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 22px;
          font-weight: 400;
          color: #fff;
          letter-spacing: -0.3px;
          margin-bottom: 12px;
        }
        .vn-stack-callout p {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          margin: 0;
        }
        .vn-stack-callout strong {
          color: rgba(255,255,255,0.85);
        }

        /* ── TL;DR callout ── */
        .vn-tldr {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 16px;
          padding: 28px 32px;
          margin: 0 auto;
          max-width: 760px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .vn-tldr-col h4 {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .vn-tldr-col-nyla h4 { color: #0D1B2A; }
        .vn-tldr-col-synth  h4 { color: #2563EB; }
        .vn-tldr-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .vn-tldr-col li {
          font-size: 13px;
          color: #445068;
          display: flex;
          align-items: flex-start;
          gap: 7px;
          line-height: 1.5;
        }
        .vn-tldr-col li::before {
          content: '·';
          font-weight: 700;
          flex-shrink: 0;
        }
        .vn-tldr-col-nyla li::before { color: #0D1B2A; }
        .vn-tldr-col-synth  li::before { color: #2563EB; }

        /* ── section ── */
        .vn-section {
          padding: 72px 0;
          border-bottom: 1px solid rgba(10,13,20,0.07);
        }
        .vn-section-eyebrow {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #2563EB;
          text-align: center;
          margin-bottom: 10px;
        }
        .vn-section-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 400;
          letter-spacing: -0.5px;
          color: #0A0D14;
          text-align: center;
          margin-bottom: 8px;
          line-height: 1.15;
        }
        .vn-section-sub {
          font-size: 15px;
          color: #445068;
          text-align: center;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 44px;
        }

        /* ── handoff section ── */
        .vn-handoff {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 16px;
          padding: 36px;
          max-width: 860px;
          margin: 0 auto;
        }
        .vn-handoff h3 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          color: #0A0D14;
          letter-spacing: -0.3px;
          margin-bottom: 8px;
          text-align: center;
        }
        .vn-handoff-sub {
          font-size: 14px;
          color: #6B7A99;
          text-align: center;
          margin-bottom: 32px;
        }
        .vn-handoff-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          position: relative;
        }
        .vn-handoff-grid::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(10,13,20,0.08);
        }
        .vn-handoff-col {
          padding: 0 28px;
        }
        .vn-handoff-col-nyla { text-align: right; }
        .vn-handoff-col-synth { text-align: left; }
        .vn-handoff-col h4 {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .vn-handoff-col-nyla h4 { color: #0D1B2A; }
        .vn-handoff-col-synth h4 { color: #2563EB; }
        .vn-handoff-step {
          margin-bottom: 18px;
        }
        .vn-handoff-step-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #8E9AB5;
          margin-bottom: 4px;
        }
        .vn-handoff-step-text {
          font-size: 13px;
          color: #445068;
          line-height: 1.6;
          margin: 0;
        }
        .vn-handoff-arrow {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          background: #2563EB;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 16px;
          z-index: 2;
        }
        .vn-handoff-cta {
          text-align: center;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(10,13,20,0.07);
        }
        .vn-handoff-cta p {
          font-size: 14px;
          color: #445068;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto;
        }
        .vn-handoff-cta strong {
          color: #0A0D14;
        }

        /* ── feature table ── */
        .vn-filter-tabs {
          display: flex;
          gap: 6px;
          margin-bottom: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .vn-filter-tab {
          font-size: 13px;
          font-weight: 500;
          border-radius: 999px;
          padding: 6px 16px;
          border: 1px solid rgba(10,13,20,0.12);
          background: #fff;
          color: #445068;
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
        }
        .vn-filter-tab.active,
        .vn-filter-tab:hover {
          background: #2563EB;
          border-color: #2563EB;
          color: #fff;
        }
        .vn-table {
          max-width: 900px;
          margin: 0 auto;
          border-radius: 16px;
          border: 1px solid rgba(10,13,20,0.08);
          overflow: hidden;
        }
        .vn-table-head {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr;
          background: #0A0D14;
        }
        .vn-th {
          padding: 14px 18px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .vn-th-feature  { color: rgba(255,255,255,0.35); }
        .vn-th-nyla     { color: rgba(255,255,255,0.5); }
        .vn-th-synth    { color: #60A5FA; }

        .vn-category-row {
          background: #F0F4FA;
          padding: 8px 18px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #8E9AB5;
          border-top: 1px solid rgba(10,13,20,0.06);
        }

        .vn-row {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr;
          border-top: 1px solid rgba(10,13,20,0.05);
          background: #fff;
          transition: background 0.1s;
        }
        .vn-row:hover { background: #F8FAFF; }
        .vn-cell {
          padding: 13px 18px;
          font-size: 13px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.5;
        }
        .vn-cell-feature { font-weight: 500; color: #0A0D14; }
        .vn-cell-nyla    { color: #6B7A99; }
        .vn-cell-synth   { color: #1E3A5F; }

        .vn-support {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .vn-support-yes  { background: #DCFCE7; color: #16A34A; }
        .vn-support-no   { background: #FEE2E2; color: #DC2626; }
        .vn-support-part { background: #FEF9C3; color: #CA8A04; }

        .vn-show-more {
          display: flex;
          justify-content: center;
          margin-top: 16px;
        }
        .vn-show-more-btn {
          font-size: 14px;
          font-weight: 500;
          color: #2563EB;
          background: none;
          border: 1px solid rgba(37,99,235,0.25);
          border-radius: 999px;
          padding: 8px 22px;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.15s;
        }
        .vn-show-more-btn:hover {
          background: #EFF6FF;
          border-color: #2563EB;
        }

        /* ── sector grid ── */
        .vn-sector-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 900px;
          margin: 0 auto;
        }
        .vn-sector-card {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 14px;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }
        .vn-sector-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .vn-sector-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px 0;
        }
        .vn-sector-name {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 14px;
          font-weight: 600;
          color: #0A0D14;
        }
        .vn-sector-icon { font-size: 18px; }
        .vn-sector-winner {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          border-radius: 999px;
          padding: 3px 10px;
        }
        .vn-winner-synth   { background: #EFF6FF; color: #2563EB; }
        .vn-winner-nyla    { background: #F0F0FF; color: #4338CA; }
        .vn-winner-both    { background: #F0FDF4; color: #16A34A; }
        .vn-sector-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: 12px 18px 16px;
        }
        .vn-sector-col {
          padding: 10px 12px;
          border-radius: 8px;
        }
        .vn-sector-col-nyla { background: #F8F8FC; margin-right: 6px; }
        .vn-sector-col-synth  { background: #F0F7FF; margin-left: 6px; }
        .vn-sector-col-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        .vn-sector-col-nyla .vn-sector-col-label { color: #9CA3AF; }
        .vn-sector-col-synth  .vn-sector-col-label { color: #3B82F6; }
        .vn-sector-col-text {
          font-size: 12px;
          line-height: 1.6;
          margin: 0;
        }
        .vn-sector-col-nyla .vn-sector-col-text { color: #6B7A99; }
        .vn-sector-col-synth  .vn-sector-col-text { color: #1E3A5F; }

        /* ── platform superpower callout ── */
        .vn-superpower {
          background: #0A0D14;
          border-radius: 16px;
          padding: 36px;
          max-width: 860px;
          margin: 0 auto;
        }
        .vn-superpower h3 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          color: #fff;
          letter-spacing: -0.3px;
          margin-bottom: 8px;
          text-align: center;
        }
        .vn-superpower-sub {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          text-align: center;
          margin-bottom: 28px;
        }
        .vn-superpower-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .vn-superpower-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
        }
        .vn-superpower-icon {
          font-size: 24px;
          margin-bottom: 8px;
        }
        .vn-superpower-card h5 {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }
        .vn-superpower-card p {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          line-height: 1.5;
          margin: 0;
        }
        .vn-superpower-note {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
          text-align: center;
        }
        .vn-superpower-note p {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin: 0;
        }
        .vn-superpower-note strong {
          color: rgba(255,255,255,0.8);
        }

        /* ── vc callout ── */
        .vn-vc-box {
          background: #fff;
          border: 1px solid rgba(10,13,20,0.08);
          border-radius: 16px;
          padding: 36px;
          max-width: 860px;
          margin: 0 auto;
        }
        .vn-vc-box h3 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 24px;
          font-weight: 400;
          color: #0A0D14;
          letter-spacing: -0.3px;
          margin-bottom: 14px;
        }
        .vn-vc-points {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 24px;
        }
        .vn-vc-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px;
          background: #F5F7FA;
          border-radius: 10px;
        }
        .vn-vc-point-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #EFF6FF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
        }
        .vn-vc-point h5 {
          font-size: 13px;
          font-weight: 600;
          color: #0A0D14;
          margin-bottom: 3px;
        }
        .vn-vc-point p {
          font-size: 12px;
          color: #445068;
          line-height: 1.55;
          margin: 0;
        }
        .vn-vc-note {
          font-size: 13px;
          color: #6B7A99;
          line-height: 1.7;
          border-top: 1px solid rgba(10,13,20,0.07);
          padding-top: 20px;
        }
        .vn-vc-note strong { color: #0A0D14; }

        /* ── responsive ── */
        @media (max-width: 720px) {
          .vn-tldr          { grid-template-columns: 1fr; }
          .vn-table-head,
          .vn-row           { grid-template-columns: 1.4fr 1fr; }
          .vn-th-feature,
          .vn-cell-feature  { display: none; }
          .vn-sector-body   { grid-template-columns: 1fr; }
          .vn-sector-col-nyla { margin-right: 0; margin-bottom: 6px; }
          .vn-sector-col-synth  { margin-left: 0; }
          .vn-handoff-grid  { grid-template-columns: 1fr; }
          .vn-handoff-grid::before { display: none; }
          .vn-handoff-col-nyla { text-align: left; padding: 0; margin-bottom: 20px; }
          .vn-handoff-col-synth { padding: 0; }
          .vn-handoff-arrow { display: none; }
          .vn-superpower-grid { grid-template-columns: 1fr; }
          .vn-vc-points     { grid-template-columns: 1fr; }
          .vn-logo-synth { height:90px; }
          .vn-mini-logo { height:40px; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}),r.jsxs("div",{className:"vn-page",children:[r.jsxs("section",{className:"vn-hero",children:[r.jsx("div",{className:"vn-eyebrow",children:"Platform comparison"}),r.jsxs("h1",{className:"vn-hero-headline",children:["Nyla AI built the front door",r.jsx("br",{}),"to African healthcare.",r.jsx("br",{}),r.jsx("em",{children:"Synth built what runs behind it."})]}),r.jsx("p",{className:"vn-hero-sub",children:"Nyla AI is a genuinely useful consumer health app — symptom checking, doctor booking, medication tracking. It is closer to a better Zocdoc than it is to an autonomous operations platform. Synth is the B2B infrastructure layer that makes products like Nyla AI possible — and covers five other verticals where Nyla AI does not compete at all."}),r.jsx("div",{className:"vn-hero-badges",children:r.jsxs("div",{className:"vn-brand-hero",children:[r.jsx("div",{className:"vn-brand-inline","aria-hidden":!0,children:r.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"})}),r.jsx("span",{className:"vn-badge-vs",children:"VS"}),r.jsx("div",{className:"vn-brand-inline","aria-hidden":!0,children:r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"})})]})}),r.jsxs("div",{className:"vn-stack-callout",children:[r.jsx("h3",{children:"This is not a competition. It is a stack."}),r.jsxs("p",{children:["Nyla AI operates at the ",r.jsx("strong",{children:"consumer layer"})," — the front door patients walk through. Synth operates at the ",r.jsx("strong",{children:"operations layer"}),' — the engine that processes claims, manages denials, codes procedures, and ensures revenue actually flows. These are not two companies solving "different problems." They are two companies operating at completely different layers of the same healthcare value chain. Synth is the infrastructure that makes the front door financially sustainable.']})]}),r.jsxs("div",{className:"vn-tldr",children:[r.jsxs("div",{className:"vn-tldr-col vn-tldr-col-nyla",children:[r.jsx("h4",{children:r.jsxs("span",{className:"vn-brand-inline",children:[r.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"}),r.jsx("span",{children:"Nyla AI — Consumer Health App"})]})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Patient-facing symptom checker and doctor finder"}),r.jsx("li",{children:"Medication tracking and wellness tools"}),r.jsx("li",{children:"Appointment booking for individuals"}),r.jsx("li",{children:"Hospital EMR dashboards (beta)"}),r.jsx("li",{children:"One vertical: healthcare only"}),r.jsx("li",{children:"Requires consumer adoption before institutional value"})]})]}),r.jsxs("div",{className:"vn-tldr-col vn-tldr-col-synth",children:[r.jsx("h4",{children:r.jsxs("span",{className:"vn-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"}),r.jsx("span",{children:"Synth — B2B AI Operations Platform"})]})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Autonomous task execution across six business verticals"}),r.jsx("li",{children:"Healthcare admin: claim denials, ICD-10/CPT coding, revenue recovery"}),r.jsx("li",{children:"Marketing, Sales, Finance, Product, Personal — all ready to use"}),r.jsx("li",{children:"Live in under 3 minutes via WhatsApp — no app download"}),r.jsx("li",{children:"Built for South Africa: Sage, GoodX, SA medical schemes, SARS eFiling"}),r.jsx("li",{children:"POPIA-compliant from day one"}),r.jsx("li",{children:"From $15/month — transparent, publicly listed pricing"})]})]})]})]}),r.jsx("section",{className:"vn-section",children:r.jsxs("div",{className:"vn-wrap",children:[r.jsx("p",{className:"vn-section-eyebrow",children:"The invisible handoff"}),r.jsx("h2",{className:"vn-section-title",children:"What happens after the patient leaves?"}),r.jsx("p",{className:"vn-section-sub",children:"Nyla AI's job ends when the patient walks out of the clinic. Synth's job starts. That handoff is where billions in revenue are lost — and recovered."}),r.jsxs("div",{className:"vn-handoff",children:[r.jsx("h3",{children:"The moment of value creation"}),r.jsx("p",{className:"vn-handoff-sub",children:"Nyla AI books the appointment. Synth ensures the hospital gets paid."}),r.jsxs("div",{className:"vn-handoff-grid",children:[r.jsxs("div",{className:"vn-handoff-col vn-handoff-col-nyla",children:[r.jsx("h4",{children:r.jsxs("span",{className:"vn-brand-inline",children:[r.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"})," ",r.jsx("span",{children:"Nyla AI — Before the visit"})]})}),r.jsxs("div",{className:"vn-handoff-step",children:[r.jsx("p",{className:"vn-handoff-step-label",children:"Step 1"}),r.jsx("p",{className:"vn-handoff-step-text",children:"Patient checks symptoms using AI-powered chat"})]}),r.jsxs("div",{className:"vn-handoff-step",children:[r.jsx("p",{className:"vn-handoff-step-label",children:"Step 2"}),r.jsx("p",{className:"vn-handoff-step-text",children:"Patient books appointment with a doctor through the app"})]}),r.jsxs("div",{className:"vn-handoff-step",children:[r.jsx("p",{className:"vn-handoff-step-label",children:"Step 3"}),r.jsx("p",{className:"vn-handoff-step-text",children:"Patient arrives at clinic, receives care"})]}),r.jsxs("div",{className:"vn-handoff-step",children:[r.jsx("p",{className:"vn-handoff-step-label",children:"Step 4"}),r.jsx("p",{className:"vn-handoff-step-text",children:"Patient walks out. Nyla AI's job is done."})]})]}),r.jsx("div",{className:"vn-handoff-arrow",children:"→"}),r.jsxs("div",{className:"vn-handoff-col vn-handoff-col-synth",children:[r.jsx("h4",{children:r.jsxs("span",{className:"vn-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"})," ",r.jsx("span",{children:"Synth — After the visit"})]})}),r.jsxs("div",{className:"vn-handoff-step",children:[r.jsx("p",{className:"vn-handoff-step-label",children:"Step 1"}),r.jsx("p",{className:"vn-handoff-step-text",children:"Procedure is automatically coded (ICD-10/CPT/HCPCS)"})]}),r.jsxs("div",{className:"vn-handoff-step",children:[r.jsx("p",{className:"vn-handoff-step-label",children:"Step 2"}),r.jsx("p",{className:"vn-handoff-step-text",children:"Claim is submitted to the medical scheme electronically"})]}),r.jsxs("div",{className:"vn-handoff-step",children:[r.jsx("p",{className:"vn-handoff-step-label",children:"Step 3"}),r.jsx("p",{className:"vn-handoff-step-text",children:"Claim is tracked; denials are flagged automatically"})]}),r.jsxs("div",{className:"vn-handoff-step",children:[r.jsx("p",{className:"vn-handoff-step-label",children:"Step 4"}),r.jsx("p",{className:"vn-handoff-step-text",children:"Denied claims are appealed with corrected coding — revenue recovered"})]})]})]}),r.jsx("div",{className:"vn-handoff-cta",children:r.jsxs("p",{children:[r.jsx("strong",{children:"South African hospitals lose an estimated R2.3 billion annually"})," to unresolved claim denials. Nyla AI cannot touch that problem — its entire product philosophy is consumer-facing. Synth's healthcare module is built specifically to recover that revenue."]})})]})]})}),r.jsx("section",{className:"vn-section",children:r.jsxs("div",{className:"vn-wrap",children:[r.jsx("p",{className:"vn-section-eyebrow",children:"Sector by sector"}),r.jsx("h2",{className:"vn-section-title",children:"One vertical vs. six. That is the real gap."}),r.jsx("p",{className:"vn-section-sub",children:"Nyla AI does one thing well: patient health. Synth does that same hospital's admin, plus its marketing, sales, finance, and procurement — all through WhatsApp."}),r.jsx("div",{className:"vn-sector-grid",children:wf.map((v,E)=>r.jsxs("div",{className:"vn-sector-card",children:[r.jsxs("div",{className:"vn-sector-header",children:[r.jsxs("div",{className:"vn-sector-name",children:[r.jsx("span",{className:"vn-sector-icon",children:v.icon}),v.sector]}),r.jsx("span",{className:`vn-sector-winner ${v.winner==="synth"?"vn-winner-synth":v.winner==="nyla"?"vn-winner-nyla":"vn-winner-both"}`,children:v.winner==="synth"?r.jsxs("span",{className:"vn-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"})," ",r.jsx("span",{children:"Synth wins"})]}):v.winner==="nyla"?r.jsxs("span",{className:"vn-brand-inline",children:[r.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"})," ",r.jsx("span",{children:"Nyla AI wins"})]}):"Both work"})]}),r.jsxs("div",{className:"vn-sector-body",children:[r.jsxs("div",{className:"vn-sector-col vn-sector-col-nyla",children:[r.jsxs("p",{className:"vn-sector-col-label vn-brand-inline",children:[r.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"})," ",r.jsx("span",{children:"Nyla AI"})]}),r.jsx("p",{className:"vn-sector-col-text",children:v.nyla})]}),r.jsxs("div",{className:"vn-sector-col vn-sector-col-synth",children:[r.jsxs("p",{className:"vn-sector-col-label vn-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"})," ",r.jsx("span",{children:"Synth"})]}),r.jsx("p",{className:"vn-sector-col-text",children:v.synth})]})]})]},E))})]})}),r.jsx("section",{className:"vn-section",children:r.jsxs("div",{className:"vn-wrap",children:[r.jsx("p",{className:"vn-section-eyebrow",children:"The lock-in story"}),r.jsx("h2",{className:"vn-section-title",children:"Healthcare is just one of six verticals"}),r.jsx("p",{className:"vn-section-sub",children:"A hospital administrator who buys Synth for claim denials also gets a personal assistant, a finance analysis tool, and a sales automation engine for their procurement team. Nyla AI gives that same administrator nothing outside of healthcare."}),r.jsxs("div",{className:"vn-superpower",children:[r.jsx("h3",{children:"Synth's six verticals"}),r.jsx("p",{className:"vn-superpower-sub",children:"One platform. Six business functions. Zero engineering required."}),r.jsxs("div",{className:"vn-superpower-grid",children:[r.jsxs("div",{className:"vn-superpower-card",children:[r.jsx("div",{className:"vn-superpower-icon",children:"🏥"}),r.jsx("h5",{children:"Healthcare Admin"}),r.jsx("p",{children:"Claim denials, ICD-10/CPT coding, payer rules, scheduling, refill reminders"})]}),r.jsxs("div",{className:"vn-superpower-card",children:[r.jsx("div",{className:"vn-superpower-icon",children:"📈"}),r.jsx("h5",{children:"Marketing"}),r.jsx("p",{children:"Campaign generation, competitor research, content, email sequences, analytics"})]}),r.jsxs("div",{className:"vn-superpower-card",children:[r.jsx("div",{className:"vn-superpower-icon",children:"🤝"}),r.jsx("h5",{children:"Sales"}),r.jsx("p",{children:"Lead enrichment, outreach drafting, deal briefs, CRM sync"})]}),r.jsxs("div",{className:"vn-superpower-card",children:[r.jsx("div",{className:"vn-superpower-icon",children:"💹"}),r.jsx("h5",{children:"Finance"}),r.jsx("p",{children:"Live market data, DCF modelling, report collection, portfolio monitoring"})]}),r.jsxs("div",{className:"vn-superpower-card",children:[r.jsx("div",{className:"vn-superpower-icon",children:"🧩"}),r.jsx("h5",{children:"Product"}),r.jsx("p",{children:"Strategy docs, roadmaps, PRDs, market segmentation, competitive maps"})]}),r.jsxs("div",{className:"vn-superpower-card",children:[r.jsx("div",{className:"vn-superpower-icon",children:"🙋"}),r.jsx("h5",{children:"Personal"}),r.jsx("p",{children:"Daily briefing, proactive alerts, scheduling, travel, communications"})]})]}),r.jsx("div",{className:"vn-superpower-note",children:r.jsxs("p",{children:[r.jsx("strong",{children:"This is the platform advantage."})," Nyla AI is a point solution. Synth is a platform that compounds value with every new vertical a customer adopts. That is why platforms get acquired at higher multiples than point solutions."]})})]})]})}),r.jsx("section",{className:"vn-section",children:r.jsxs("div",{className:"vn-wrap",children:[r.jsx("p",{className:"vn-section-eyebrow",children:"Feature comparison"}),r.jsx("h2",{className:"vn-section-title",children:"Feature by feature, honestly"}),r.jsx("p",{className:"vn-section-sub",children:"We describe Nyla AI accurately and generously — because accurate description is the only respect a competitor deserves on a comparison page."}),r.jsx("div",{className:"vn-filter-tabs",children:w.map(v=>r.jsx("button",{className:`vn-filter-tab ${d===v?"active":""}`,onClick:()=>{j(v),g(!1)},children:v},v))}),r.jsxs("div",{className:"vn-table",children:[r.jsxs("div",{className:"vn-table-head",children:[r.jsx("div",{className:"vn-th vn-th-feature",children:"Feature"}),r.jsx("div",{className:"vn-th vn-th-nyla",children:r.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"})}),r.jsx("div",{className:"vn-th vn-th-synth",children:r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"})})]}),L.map((v,E)=>{const M=y[E-1],V=!M||M.category!==v.category;return r.jsxs("div",{children:[V&&d==="All"&&r.jsx("div",{className:"vn-category-row",children:v.category}),r.jsxs("div",{className:"vn-row",children:[r.jsx("div",{className:"vn-cell vn-cell-feature",children:v.feature}),r.jsxs("div",{className:"vn-cell vn-cell-nyla",children:[r.jsx(bd,{level:v.nyla.supported}),v.nyla.value]}),r.jsxs("div",{className:"vn-cell vn-cell-synth",children:[r.jsx(bd,{level:v.synth.supported}),v.synth.value]})]})]},E)})]}),!i&&y.length>8&&r.jsx("div",{className:"vn-show-more",children:r.jsxs("button",{className:"vn-show-more-btn",onClick:()=>g(!0),children:["Show all ",y.length," features ↓"]})})]})}),r.jsx("section",{className:"vn-section",children:r.jsxs("div",{className:"vn-wrap",children:[r.jsx("p",{className:"vn-section-eyebrow",children:"For investors"}),r.jsx("h2",{className:"vn-section-title",children:"Why this comparison matters to VCs"}),r.jsx("p",{className:"vn-section-sub",children:"Nyla AI and Synth are not competitors. They are adjacent layers in the same stack. That adjacency is the opportunity."}),r.jsxs("div",{className:"vn-vc-box",children:[r.jsx("h3",{children:"Synth occupies the layer Nyla AI cannot reach"}),r.jsxs("div",{className:"vn-vc-points",children:[r.jsxs("div",{className:"vn-vc-point",children:[r.jsx("div",{className:"vn-vc-point-icon",children:"🏥"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Institutional revenue recovery"}),r.jsx("p",{children:"Claim denials represent billions in uncollected revenue across SA hospitals. Nyla AI has no answer. Synth is built specifically to recover it."})]})]}),r.jsxs("div",{className:"vn-vc-point",children:[r.jsx("div",{className:"vn-vc-point-icon",children:"📱"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Distribution moat"}),r.jsx("p",{children:"WhatsApp has 90%+ penetration in South Africa. Synth delivers AI through the channel hospitals and businesses already use — no app download required."})]})]}),r.jsxs("div",{className:"vn-vc-point",children:[r.jsx("div",{className:"vn-vc-point-icon",children:"🧩"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Platform breadth"}),r.jsx("p",{children:"Synth covers six verticals. A hospital that adopts Synth for healthcare admin also gets marketing, sales, finance, and personal productivity — automatic lock-in."})]})]}),r.jsxs("div",{className:"vn-vc-point",children:[r.jsx("div",{className:"vn-vc-point-icon",children:"💰"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Accessible price point"}),r.jsx("p",{children:"At $15/month, Synth can acquire customers at volume. At $499/facility for healthcare, it captures institutional budgets Nyla AI cannot access without consumer adoption first."})]})]})]})]})]})})]})]})}function jf(){return r.jsxs(fh,{children:[r.jsx(Ie,{path:"/",component:Gh}),r.jsx(Ie,{path:"/solutions/marketing",component:Yh}),r.jsx(Ie,{path:"/solutions/sales",component:Kh}),r.jsx(Ie,{path:"/solutions/finance",component:Jh}),r.jsx(Ie,{path:"/solutions/product",component:ef}),r.jsx(Ie,{path:"/solutions/personal",component:nf}),r.jsx(Ie,{path:"/solutions/healthcare",component:sf}),r.jsx(Ie,{path:"/pricing",component:af}),r.jsx(Ie,{path:"/trust",component:lf}),r.jsx(Ie,{path:"/data-processing",component:cf}),r.jsx(Ie,{path:"/terms",component:uf}),r.jsx(Ie,{path:"/compare/vsChatgpt",component:gf}),r.jsx(Ie,{path:"/compare/vsOpenclaw",component:hf}),r.jsx(Ie,{path:"/compare/vsTrixta",component:yf}),r.jsx(Ie,{path:"/compare/vsNyla",component:bf}),r.jsx(Ie,{component:pf})]})}function Nf(){return r.jsx(mh,{defaultTheme:"light",children:r.jsxs("div",{className:"min-h-screen flex flex-col",children:[r.jsx(Ph,{}),r.jsx(Fh,{}),r.jsx("main",{className:"flex-1",children:r.jsx(jf,{})}),r.jsx(Rh,{})]})})}Vp.createRoot(document.getElementById("root")).render(r.jsx(Nd.StrictMode,{children:r.jsx(Nf,{})}));
