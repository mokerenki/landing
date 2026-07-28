function Bp(l,m){for(var d=0;d<m.length;d++){const g=m[d];if(typeof g!="string"&&!Array.isArray(g)){for(const y in g)if(y!=="default"&&!(y in l)){const b=Object.getOwnPropertyDescriptor(g,y);b&&Object.defineProperty(l,y,b.get?b:{enumerable:!0,get:()=>g[y]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))g(y);new MutationObserver(y=>{for(const b of y)if(b.type==="childList")for(const P of b.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&g(P)}).observe(document,{childList:!0,subtree:!0});function d(y){const b={};return y.integrity&&(b.integrity=y.integrity),y.referrerPolicy&&(b.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?b.credentials="include":y.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function g(y){if(y.ep)return;y.ep=!0;const b=d(y);fetch(y.href,b)}})();function Pd(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Oo={exports:{}},br={},Bo={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc;function Up(){if(Jc)return K;Jc=1;var l=Symbol.for("react.element"),m=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),P=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),A=Symbol.iterator;function B(h){return h===null||typeof h!="object"?null:(h=A&&h[A]||h["@@iterator"],typeof h=="function"?h:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},re=Object.assign,Y={};function U(h,N,Q){this.props=h,this.context=N,this.refs=Y,this.updater=Q||V}U.prototype.isReactComponent={},U.prototype.setState=function(h,N){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,N,"setState")},U.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function oe(){}oe.prototype=U.prototype;function q(h,N,Q){this.props=h,this.context=N,this.refs=Y,this.updater=Q||V}var ze=q.prototype=new oe;ze.constructor=q,re(ze,U.prototype),ze.isPureReactComponent=!0;var ve=Array.isArray,Ke=Object.prototype.hasOwnProperty,Ee={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function Le(h,N,Q){var X,Z={},ee=null,ie=null;if(N!=null)for(X in N.ref!==void 0&&(ie=N.ref),N.key!==void 0&&(ee=""+N.key),N)Ke.call(N,X)&&!Pe.hasOwnProperty(X)&&(Z[X]=N[X]);var se=arguments.length-2;if(se===1)Z.children=Q;else if(1<se){for(var pe=Array(se),Je=0;Je<se;Je++)pe[Je]=arguments[Je+2];Z.children=pe}if(h&&h.defaultProps)for(X in se=h.defaultProps,se)Z[X]===void 0&&(Z[X]=se[X]);return{$$typeof:l,type:h,key:ee,ref:ie,props:Z,_owner:Ee.current}}function rt(h,N){return{$$typeof:l,type:h.type,key:N,ref:h.ref,props:h.props,_owner:h._owner}}function Xe(h){return typeof h=="object"&&h!==null&&h.$$typeof===l}function Nt(h){var N={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(Q){return N[Q]})}var Ue=/\/+/g;function Te(h,N){return typeof h=="object"&&h!==null&&h.key!=null?Nt(""+h.key):N.toString(36)}function He(h,N,Q,X,Z){var ee=typeof h;(ee==="undefined"||ee==="boolean")&&(h=null);var ie=!1;if(h===null)ie=!0;else switch(ee){case"string":case"number":ie=!0;break;case"object":switch(h.$$typeof){case l:case m:ie=!0}}if(ie)return ie=h,Z=Z(ie),h=X===""?"."+Te(ie,0):X,ve(Z)?(Q="",h!=null&&(Q=h.replace(Ue,"$&/")+"/"),He(Z,N,Q,"",function(Je){return Je})):Z!=null&&(Xe(Z)&&(Z=rt(Z,Q+(!Z.key||ie&&ie.key===Z.key?"":(""+Z.key).replace(Ue,"$&/")+"/")+h)),N.push(Z)),1;if(ie=0,X=X===""?".":X+":",ve(h))for(var se=0;se<h.length;se++){ee=h[se];var pe=X+Te(ee,se);ie+=He(ee,N,Q,pe,Z)}else if(pe=B(h),typeof pe=="function")for(h=pe.call(h),se=0;!(ee=h.next()).done;)ee=ee.value,pe=X+Te(ee,se++),ie+=He(ee,N,Q,pe,Z);else if(ee==="object")throw N=String(h),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ie}function gt(h,N,Q){if(h==null)return h;var X=[],Z=0;return He(h,X,"","",function(ee){return N.call(Q,ee,Z++)}),X}function We(h){if(h._status===-1){var N=h._result;N=N(),N.then(function(Q){(h._status===0||h._status===-1)&&(h._status=1,h._result=Q)},function(Q){(h._status===0||h._status===-1)&&(h._status=2,h._result=Q)}),h._status===-1&&(h._status=0,h._result=N)}if(h._status===1)return h._result.default;throw h._result}var xe={current:null},F={transition:null},$={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:F,ReactCurrentOwner:Ee};function R(){throw Error("act(...) is not supported in production builds of React.")}return K.Children={map:gt,forEach:function(h,N,Q){gt(h,function(){N.apply(this,arguments)},Q)},count:function(h){var N=0;return gt(h,function(){N++}),N},toArray:function(h){return gt(h,function(N){return N})||[]},only:function(h){if(!Xe(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},K.Component=U,K.Fragment=d,K.Profiler=y,K.PureComponent=q,K.StrictMode=g,K.Suspense=E,K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,K.act=R,K.cloneElement=function(h,N,Q){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var X=re({},h.props),Z=h.key,ee=h.ref,ie=h._owner;if(N!=null){if(N.ref!==void 0&&(ee=N.ref,ie=Ee.current),N.key!==void 0&&(Z=""+N.key),h.type&&h.type.defaultProps)var se=h.type.defaultProps;for(pe in N)Ke.call(N,pe)&&!Pe.hasOwnProperty(pe)&&(X[pe]=N[pe]===void 0&&se!==void 0?se[pe]:N[pe])}var pe=arguments.length-2;if(pe===1)X.children=Q;else if(1<pe){se=Array(pe);for(var Je=0;Je<pe;Je++)se[Je]=arguments[Je+2];X.children=se}return{$$typeof:l,type:h.type,key:Z,ref:ee,props:X,_owner:ie}},K.createContext=function(h){return h={$$typeof:P,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:b,_context:h},h.Consumer=h},K.createElement=Le,K.createFactory=function(h){var N=Le.bind(null,h);return N.type=h,N},K.createRef=function(){return{current:null}},K.forwardRef=function(h){return{$$typeof:w,render:h}},K.isValidElement=Xe,K.lazy=function(h){return{$$typeof:I,_payload:{_status:-1,_result:h},_init:We}},K.memo=function(h,N){return{$$typeof:T,type:h,compare:N===void 0?null:N}},K.startTransition=function(h){var N=F.transition;F.transition={};try{h()}finally{F.transition=N}},K.unstable_act=R,K.useCallback=function(h,N){return xe.current.useCallback(h,N)},K.useContext=function(h){return xe.current.useContext(h)},K.useDebugValue=function(){},K.useDeferredValue=function(h){return xe.current.useDeferredValue(h)},K.useEffect=function(h,N){return xe.current.useEffect(h,N)},K.useId=function(){return xe.current.useId()},K.useImperativeHandle=function(h,N,Q){return xe.current.useImperativeHandle(h,N,Q)},K.useInsertionEffect=function(h,N){return xe.current.useInsertionEffect(h,N)},K.useLayoutEffect=function(h,N){return xe.current.useLayoutEffect(h,N)},K.useMemo=function(h,N){return xe.current.useMemo(h,N)},K.useReducer=function(h,N,Q){return xe.current.useReducer(h,N,Q)},K.useRef=function(h){return xe.current.useRef(h)},K.useState=function(h){return xe.current.useState(h)},K.useSyncExternalStore=function(h,N,Q){return xe.current.useSyncExternalStore(h,N,Q)},K.useTransition=function(){return xe.current.useTransition()},K.version="18.3.1",K}var Zc;function Ws(){return Zc||(Zc=1,Bo.exports=Up()),Bo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function Hp(){if(ed)return br;ed=1;var l=Ws(),m=Symbol.for("react.element"),d=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function P(w,E,T){var I,A={},B=null,V=null;T!==void 0&&(B=""+T),E.key!==void 0&&(B=""+E.key),E.ref!==void 0&&(V=E.ref);for(I in E)g.call(E,I)&&!b.hasOwnProperty(I)&&(A[I]=E[I]);if(w&&w.defaultProps)for(I in E=w.defaultProps,E)A[I]===void 0&&(A[I]=E[I]);return{$$typeof:m,type:w,key:B,ref:V,props:A,_owner:y.current}}return br.Fragment=d,br.jsx=P,br.jsxs=P,br}var td;function Wp(){return td||(td=1,Oo.exports=Hp()),Oo.exports}var r=Wp(),D=Ws();const Ad=Pd(D),Vp=Bp({__proto__:null,default:Ad},[D]);var Ms={},Uo={exports:{}},Qe={},Ho={exports:{}},Wo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function $p(){return nd||(nd=1,(function(l){function m(F,$){var R=F.length;F.push($);e:for(;0<R;){var h=R-1>>>1,N=F[h];if(0<y(N,$))F[h]=$,F[R]=N,R=h;else break e}}function d(F){return F.length===0?null:F[0]}function g(F){if(F.length===0)return null;var $=F[0],R=F.pop();if(R!==$){F[0]=R;e:for(var h=0,N=F.length,Q=N>>>1;h<Q;){var X=2*(h+1)-1,Z=F[X],ee=X+1,ie=F[ee];if(0>y(Z,R))ee<N&&0>y(ie,Z)?(F[h]=ie,F[ee]=R,h=ee):(F[h]=Z,F[X]=R,h=X);else if(ee<N&&0>y(ie,R))F[h]=ie,F[ee]=R,h=ee;else break e}}return $}function y(F,$){var R=F.sortIndex-$.sortIndex;return R!==0?R:F.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;l.unstable_now=function(){return b.now()}}else{var P=Date,w=P.now();l.unstable_now=function(){return P.now()-w}}var E=[],T=[],I=1,A=null,B=3,V=!1,re=!1,Y=!1,U=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ze(F){for(var $=d(T);$!==null;){if($.callback===null)g(T);else if($.startTime<=F)g(T),$.sortIndex=$.expirationTime,m(E,$);else break;$=d(T)}}function ve(F){if(Y=!1,ze(F),!re)if(d(E)!==null)re=!0,We(Ke);else{var $=d(T);$!==null&&xe(ve,$.startTime-F)}}function Ke(F,$){re=!1,Y&&(Y=!1,oe(Le),Le=-1),V=!0;var R=B;try{for(ze($),A=d(E);A!==null&&(!(A.expirationTime>$)||F&&!Nt());){var h=A.callback;if(typeof h=="function"){A.callback=null,B=A.priorityLevel;var N=h(A.expirationTime<=$);$=l.unstable_now(),typeof N=="function"?A.callback=N:A===d(E)&&g(E),ze($)}else g(E);A=d(E)}if(A!==null)var Q=!0;else{var X=d(T);X!==null&&xe(ve,X.startTime-$),Q=!1}return Q}finally{A=null,B=R,V=!1}}var Ee=!1,Pe=null,Le=-1,rt=5,Xe=-1;function Nt(){return!(l.unstable_now()-Xe<rt)}function Ue(){if(Pe!==null){var F=l.unstable_now();Xe=F;var $=!0;try{$=Pe(!0,F)}finally{$?Te():(Ee=!1,Pe=null)}}else Ee=!1}var Te;if(typeof q=="function")Te=function(){q(Ue)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,gt=He.port2;He.port1.onmessage=Ue,Te=function(){gt.postMessage(null)}}else Te=function(){U(Ue,0)};function We(F){Pe=F,Ee||(Ee=!0,Te())}function xe(F,$){Le=U(function(){F(l.unstable_now())},$)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(F){F.callback=null},l.unstable_continueExecution=function(){re||V||(re=!0,We(Ke))},l.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<F?Math.floor(1e3/F):5},l.unstable_getCurrentPriorityLevel=function(){return B},l.unstable_getFirstCallbackNode=function(){return d(E)},l.unstable_next=function(F){switch(B){case 1:case 2:case 3:var $=3;break;default:$=B}var R=B;B=$;try{return F()}finally{B=R}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var R=B;B=F;try{return $()}finally{B=R}},l.unstable_scheduleCallback=function(F,$,R){var h=l.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?h+R:h):R=h,F){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=R+N,F={id:I++,callback:$,priorityLevel:F,startTime:R,expirationTime:N,sortIndex:-1},R>h?(F.sortIndex=R,m(T,F),d(E)===null&&F===d(T)&&(Y?(oe(Le),Le=-1):Y=!0,xe(ve,R-h))):(F.sortIndex=N,m(E,F),re||V||(re=!0,We(Ke))),F},l.unstable_shouldYield=Nt,l.unstable_wrapCallback=function(F){var $=B;return function(){var R=B;B=$;try{return F.apply(this,arguments)}finally{B=R}}}})(Wo)),Wo}var rd;function Gp(){return rd||(rd=1,Ho.exports=$p()),Ho.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function qp(){if(sd)return Qe;sd=1;var l=Ws(),m=Gp();function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g=new Set,y={};function b(e,t){P(e,t),P(e+"Capture",t)}function P(e,t){for(y[e]=t,e=0;e<t.length;e++)g.add(t[e])}var w=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},A={};function B(e){return E.call(A,e)?!0:E.call(I,e)?!1:T.test(e)?A[e]=!0:(I[e]=!0,!1)}function V(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function re(e,t,n,s){if(t===null||typeof t>"u"||V(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Y(e,t,n,s,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){U[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];U[t]=new Y(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){U[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){U[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){U[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){U[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){U[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){U[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){U[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oe,q);U[t]=new Y(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oe,q);U[t]=new Y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oe,q);U[t]=new Y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){U[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),U.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){U[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function ze(e,t,n,s){var a=U.hasOwnProperty(t)?U[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(re(t,n,a,s)&&(n=null),s||a===null?B(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,s=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var ve=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ke=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),Le=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),Xe=Symbol.for("react.provider"),Nt=Symbol.for("react.context"),Ue=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),F=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,h;function N(e){if(h===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);h=t&&t[1]||""}return`
`+h+e}var Q=!1;function X(e,t){if(!e||Q)return"";Q=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(v){var s=v}Reflect.construct(e,[],t)}else{try{t.call()}catch(v){s=v}e.call(t.prototype)}else{try{throw Error()}catch(v){s=v}e()}}catch(v){if(v&&s&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),o=s.stack.split(`
`),i=a.length-1,c=o.length-1;1<=i&&0<=c&&a[i]!==o[c];)c--;for(;1<=i&&0<=c;i--,c--)if(a[i]!==o[c]){if(i!==1||c!==1)do if(i--,c--,0>c||a[i]!==o[c]){var u=`
`+a[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=c);break}}}finally{Q=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function Z(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case Ee:return"Portal";case rt:return"Profiler";case Le:return"StrictMode";case Te:return"Suspense";case He:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nt:return(e.displayName||"Context")+".Consumer";case Xe:return(e._context.displayName||"Context")+".Provider";case Ue:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gt:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}function ie(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(t);case 8:return t===Le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Je(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){s=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(i){s=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cr(e){e._valueTracker||(e._valueTracker=Je(e))}function si(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=pe(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $s(e,t){var n=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ai(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=se(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oi(e,t){t=t.checked,t!=null&&ze(e,"checked",t,!1)}function Gs(e,t){oi(e,t);var n=se(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qs(e,t.type,n):t.hasOwnProperty("defaultValue")&&qs(e,t.type,se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ii(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qs(e,t,n){(t!=="number"||Er(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function un(e,t,n,s){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&s&&(e[n].defaultSelected=!0)}else{for(n=""+se(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ys(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(d(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function li(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(d(92));if(Mn(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:se(n)}}function ci(e,t){var n=se(t.value),s=se(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function di(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ui(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ui(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pr,pi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vd=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Vd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function hi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function fi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,a=hi(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,a):e[n]=a}}var $d=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ks(e,t){if(t){if($d[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(d(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(t.style!=null&&typeof t.style!="object")throw Error(d(62))}}function Xs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Js=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ea=null,pn=null,hn=null;function mi(e){if(e=or(e)){if(typeof ea!="function")throw Error(d(280));var t=e.stateNode;t&&(t=Xr(t),ea(e.stateNode,e.type,t))}}function xi(e){pn?hn?hn.push(e):hn=[e]:pn=e}function gi(){if(pn){var e=pn,t=hn;if(hn=pn=null,mi(e),t)for(e=0;e<t.length;e++)mi(t[e])}}function vi(e,t){return e(t)}function yi(){}var ta=!1;function wi(e,t,n){if(ta)return e(t,n);ta=!0;try{return vi(e,t,n)}finally{ta=!1,(pn!==null||hn!==null)&&(yi(),gi())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var s=Xr(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var na=!1;if(w)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){na=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{na=!1}function Gd(e,t,n,s,a,o,i,c,u){var v=Array.prototype.slice.call(arguments,3);try{t.apply(n,v)}catch(k){this.onError(k)}}var Un=!1,Ar=null,Fr=!1,ra=null,qd={onError:function(e){Un=!0,Ar=e}};function Yd(e,t,n,s,a,o,i,c,u){Un=!1,Ar=null,Gd.apply(qd,arguments)}function Qd(e,t,n,s,a,o,i,c,u){if(Yd.apply(this,arguments),Un){if(Un){var v=Ar;Un=!1,Ar=null}else throw Error(d(198));Fr||(Fr=!0,ra=v)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ji(e){if(Xt(e)!==e)throw Error(d(188))}function Kd(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,s=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){n=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ji(a),e;if(o===s)return ji(a),t;o=o.sibling}throw Error(d(188))}if(n.return!==s.return)n=a,s=o;else{for(var i=!1,c=a.child;c;){if(c===n){i=!0,n=a,s=o;break}if(c===s){i=!0,s=a,n=o;break}c=c.sibling}if(!i){for(c=o.child;c;){if(c===n){i=!0,n=o,s=a;break}if(c===s){i=!0,s=o,n=a;break}c=c.sibling}if(!i)throw Error(d(189))}}if(n.alternate!==s)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function Ni(e){return e=Kd(e),e!==null?ki(e):null}function ki(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ki(e);if(t!==null)return t;e=e.sibling}return null}var Si=m.unstable_scheduleCallback,Ci=m.unstable_cancelCallback,Xd=m.unstable_shouldYield,Jd=m.unstable_requestPaint,ye=m.unstable_now,Zd=m.unstable_getCurrentPriorityLevel,sa=m.unstable_ImmediatePriority,Ei=m.unstable_UserBlockingPriority,zr=m.unstable_NormalPriority,eu=m.unstable_LowPriority,Pi=m.unstable_IdlePriority,Tr=null,vt=null;function tu(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Tr,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:su,nu=Math.log,ru=Math.LN2;function su(e){return e>>>=0,e===0?32:31-(nu(e)/ru|0)|0}var _r=64,Rr=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var c=i&~a;c!==0?s=Hn(c):(o&=i,o!==0&&(s=Hn(o)))}else i=n&~a,i!==0?s=Hn(i):o!==0&&(s=Hn(o));if(s===0)return 0;if(t!==0&&t!==s&&(t&a)===0&&(a=s&-s,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if((s&4)!==0&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-dt(t),a=1<<n,s|=e[n],t&=~a;return s}function au(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ou(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-dt(o),c=1<<i,u=a[i];u===-1?((c&n)===0||(c&s)!==0)&&(a[i]=au(c,t)):u<=t&&(e.expiredLanes|=c),o&=~c}}function aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ai(){var e=_r;return _r<<=1,(_r&4194240)===0&&(_r=64),e}function oa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function iu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-dt(n),o=1<<a;t[a]=0,s[a]=-1,e[a]=-1,n&=~o}}function ia(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-dt(n),a=1<<s;a&t|e[s]&t&&(e[s]|=t),n&=~a}}var ae=0;function Fi(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var zi,la,Ti,_i,Ri,ca=!1,Mr=[],Tt=null,_t=null,Rt=null,Vn=new Map,$n=new Map,It=[],lu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ii(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function Gn(e,t,n,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},t!==null&&(t=or(t),t!==null&&la(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function cu(e,t,n,s,a){switch(t){case"focusin":return Tt=Gn(Tt,e,t,n,s,a),!0;case"dragenter":return _t=Gn(_t,e,t,n,s,a),!0;case"mouseover":return Rt=Gn(Rt,e,t,n,s,a),!0;case"pointerover":var o=a.pointerId;return Vn.set(o,Gn(Vn.get(o)||null,e,t,n,s,a)),!0;case"gotpointercapture":return o=a.pointerId,$n.set(o,Gn($n.get(o)||null,e,t,n,s,a)),!0}return!1}function Mi(e){var t=Jt(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=bi(n),t!==null){e.blockedOn=t,Ri(e.priority,function(){Ti(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ua(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Js=s,n.target.dispatchEvent(s),Js=null}else return t=or(n),t!==null&&la(t),e.blockedOn=n,!1;t.shift()}return!0}function Di(e,t,n){Dr(e)&&n.delete(t)}function du(){ca=!1,Tt!==null&&Dr(Tt)&&(Tt=null),_t!==null&&Dr(_t)&&(_t=null),Rt!==null&&Dr(Rt)&&(Rt=null),Vn.forEach(Di),$n.forEach(Di)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,ca||(ca=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,du)))}function Yn(e){function t(a){return qn(a,e)}if(0<Mr.length){qn(Mr[0],e);for(var n=1;n<Mr.length;n++){var s=Mr[n];s.blockedOn===e&&(s.blockedOn=null)}}for(Tt!==null&&qn(Tt,e),_t!==null&&qn(_t,e),Rt!==null&&qn(Rt,e),Vn.forEach(t),$n.forEach(t),n=0;n<It.length;n++)s=It[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)Mi(n),n.blockedOn===null&&It.shift()}var fn=ve.ReactCurrentBatchConfig,Lr=!0;function uu(e,t,n,s){var a=ae,o=fn.transition;fn.transition=null;try{ae=1,da(e,t,n,s)}finally{ae=a,fn.transition=o}}function pu(e,t,n,s){var a=ae,o=fn.transition;fn.transition=null;try{ae=4,da(e,t,n,s)}finally{ae=a,fn.transition=o}}function da(e,t,n,s){if(Lr){var a=ua(e,t,n,s);if(a===null)Pa(e,t,s,Or,n),Ii(e,s);else if(cu(a,e,t,n,s))s.stopPropagation();else if(Ii(e,s),t&4&&-1<lu.indexOf(e)){for(;a!==null;){var o=or(a);if(o!==null&&zi(o),o=ua(e,t,n,s),o===null&&Pa(e,t,s,Or,n),o===a)break;a=o}a!==null&&s.stopPropagation()}else Pa(e,t,s,null,n)}}var Or=null;function ua(e,t,n,s){if(Or=null,e=Zs(s),e=Jt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bi(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Or=e,null}function Li(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zd()){case sa:return 1;case Ei:return 4;case zr:case eu:return 16;case Pi:return 536870912;default:return 16}default:return 16}}var Mt=null,pa=null,Br=null;function Oi(){if(Br)return Br;var e,t=pa,n=t.length,s,a="value"in Mt?Mt.value:Mt.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(s=1;s<=i&&t[n-s]===a[o-s];s++);return Br=a.slice(e,1<s?1-s:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function Bi(){return!1}function Ze(e){function t(n,s,a,o,i){this._reactName=n,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Hr:Bi,this.isPropagationStopped=Bi,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ha=Ze(mn),Qn=R({},mn,{view:0,detail:0}),hu=Ze(Qn),fa,ma,Kn,Wr=R({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(fa=e.screenX-Kn.screenX,ma=e.screenY-Kn.screenY):ma=fa=0,Kn=e),fa)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),Ui=Ze(Wr),fu=R({},Wr,{dataTransfer:0}),mu=Ze(fu),xu=R({},Qn,{relatedTarget:0}),xa=Ze(xu),gu=R({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),vu=Ze(gu),yu=R({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wu=Ze(yu),bu=R({},mn,{data:0}),Hi=Ze(bu),ju={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Su(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ku[e])?!!t[e]:!1}function ga(){return Su}var Cu=R({},Qn,{key:function(e){if(e.key){var t=ju[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ga,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eu=Ze(Cu),Pu=R({},Wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wi=Ze(Pu),Au=R({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ga}),Fu=Ze(Au),zu=R({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tu=Ze(zu),_u=R({},Wr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ru=Ze(_u),Iu=[9,13,27,32],va=w&&"CompositionEvent"in window,Xn=null;w&&"documentMode"in document&&(Xn=document.documentMode);var Mu=w&&"TextEvent"in window&&!Xn,Vi=w&&(!va||Xn&&8<Xn&&11>=Xn),$i=" ",Gi=!1;function qi(e,t){switch(e){case"keyup":return Iu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Du(e,t){switch(e){case"compositionend":return Yi(t);case"keypress":return t.which!==32?null:(Gi=!0,$i);case"textInput":return e=t.data,e===$i&&Gi?null:e;default:return null}}function Lu(e,t){if(xn)return e==="compositionend"||!va&&qi(e,t)?(e=Oi(),Br=pa=Mt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vi&&t.locale!=="ko"?null:t.data;default:return null}}var Ou={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ou[e.type]:t==="textarea"}function Ki(e,t,n,s){xi(s),t=Yr(t,"onChange"),0<t.length&&(n=new ha("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Jn=null,Zn=null;function Bu(e){fl(e,0)}function Vr(e){var t=bn(e);if(si(t))return e}function Uu(e,t){if(e==="change")return t}var Xi=!1;if(w){var ya;if(w){var wa="oninput"in document;if(!wa){var Ji=document.createElement("div");Ji.setAttribute("oninput","return;"),wa=typeof Ji.oninput=="function"}ya=wa}else ya=!1;Xi=ya&&(!document.documentMode||9<document.documentMode)}function Zi(){Jn&&(Jn.detachEvent("onpropertychange",el),Zn=Jn=null)}function el(e){if(e.propertyName==="value"&&Vr(Zn)){var t=[];Ki(t,Zn,e,Zs(e)),wi(Bu,t)}}function Hu(e,t,n){e==="focusin"?(Zi(),Jn=t,Zn=n,Jn.attachEvent("onpropertychange",el)):e==="focusout"&&Zi()}function Wu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vr(Zn)}function Vu(e,t){if(e==="click")return Vr(t)}function $u(e,t){if(e==="input"||e==="change")return Vr(t)}function Gu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Gu;function er(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var a=n[s];if(!E.call(t,a)||!ut(e[a],t[a]))return!1}return!0}function tl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nl(e,t){var n=tl(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tl(n)}}function rl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sl(){for(var e=window,t=Er();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Er(e.document)}return t}function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qu(e){var t=sl(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rl(n.ownerDocument.documentElement,n)){if(s!==null&&ba(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=nl(n,o);var i=nl(n,s);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yu=w&&"documentMode"in document&&11>=document.documentMode,gn=null,ja=null,tr=null,Na=!1;function al(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Na||gn==null||gn!==Er(s)||(s=gn,"selectionStart"in s&&ba(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),tr&&er(tr,s)||(tr=s,s=Yr(ja,"onSelect"),0<s.length&&(t=new ha("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=gn)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},ka={},ol={};w&&(ol=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Gr(e){if(ka[e])return ka[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ol)return ka[e]=t[n];return e}var il=Gr("animationend"),ll=Gr("animationiteration"),cl=Gr("animationstart"),dl=Gr("transitionend"),ul=new Map,pl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){ul.set(e,t),b(t,[e])}for(var Sa=0;Sa<pl.length;Sa++){var Ca=pl[Sa],Qu=Ca.toLowerCase(),Ku=Ca[0].toUpperCase()+Ca.slice(1);Dt(Qu,"on"+Ku)}Dt(il,"onAnimationEnd"),Dt(ll,"onAnimationIteration"),Dt(cl,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(dl,"onTransitionEnd"),P("onMouseEnter",["mouseout","mouseover"]),P("onMouseLeave",["mouseout","mouseover"]),P("onPointerEnter",["pointerout","pointerover"]),P("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xu=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function hl(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,Qd(s,t,void 0,e),e.currentTarget=null}function fl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],a=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var i=s.length-1;0<=i;i--){var c=s[i],u=c.instance,v=c.currentTarget;if(c=c.listener,u!==o&&a.isPropagationStopped())break e;hl(a,c,v),o=u}else for(i=0;i<s.length;i++){if(c=s[i],u=c.instance,v=c.currentTarget,c=c.listener,u!==o&&a.isPropagationStopped())break e;hl(a,c,v),o=u}}}if(Fr)throw e=ra,Fr=!1,ra=null,e}function de(e,t){var n=t[Ra];n===void 0&&(n=t[Ra]=new Set);var s=e+"__bubble";n.has(s)||(ml(t,e,2,!1),n.add(s))}function Ea(e,t,n){var s=0;t&&(s|=4),ml(n,e,s,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[qr]){e[qr]=!0,g.forEach(function(n){n!=="selectionchange"&&(Xu.has(n)||Ea(n,!1,e),Ea(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,Ea("selectionchange",!1,t))}}function ml(e,t,n,s){switch(Li(t)){case 1:var a=uu;break;case 4:a=pu;break;default:a=da}n=a.bind(null,t,n,e),a=void 0,!na||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Pa(e,t,n,s,a){var o=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var i=s.tag;if(i===3||i===4){var c=s.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(i===4)for(i=s.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;i=i.return}for(;c!==null;){if(i=Jt(c),i===null)return;if(u=i.tag,u===5||u===6){s=o=i;continue e}c=c.parentNode}}s=s.return}wi(function(){var v=o,k=Zs(n),S=[];e:{var j=ul.get(e);if(j!==void 0){var z=ha,M=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":z=Eu;break;case"focusin":M="focus",z=xa;break;case"focusout":M="blur",z=xa;break;case"beforeblur":case"afterblur":z=xa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Ui;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Fu;break;case il:case ll:case cl:z=vu;break;case dl:z=Tu;break;case"scroll":z=hu;break;case"wheel":z=Ru;break;case"copy":case"cut":case"paste":z=wu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Wi}var L=(t&4)!==0,we=!L&&e==="scroll",f=L?j!==null?j+"Capture":null:j;L=[];for(var p=v,x;p!==null;){x=p;var C=x.stateNode;if(x.tag===5&&C!==null&&(x=C,f!==null&&(C=On(p,f),C!=null&&L.push(sr(p,C,x)))),we)break;p=p.return}0<L.length&&(j=new z(j,M,null,n,k),S.push({event:j,listeners:L}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",j&&n!==Js&&(M=n.relatedTarget||n.fromElement)&&(Jt(M)||M[kt]))break e;if((z||j)&&(j=k.window===k?k:(j=k.ownerDocument)?j.defaultView||j.parentWindow:window,z?(M=n.relatedTarget||n.toElement,z=v,M=M?Jt(M):null,M!==null&&(we=Xt(M),M!==we||M.tag!==5&&M.tag!==6)&&(M=null)):(z=null,M=v),z!==M)){if(L=Ui,C="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(L=Wi,C="onPointerLeave",f="onPointerEnter",p="pointer"),we=z==null?j:bn(z),x=M==null?j:bn(M),j=new L(C,p+"leave",z,n,k),j.target=we,j.relatedTarget=x,C=null,Jt(k)===v&&(L=new L(f,p+"enter",M,n,k),L.target=x,L.relatedTarget=we,C=L),we=C,z&&M)t:{for(L=z,f=M,p=0,x=L;x;x=yn(x))p++;for(x=0,C=f;C;C=yn(C))x++;for(;0<p-x;)L=yn(L),p--;for(;0<x-p;)f=yn(f),x--;for(;p--;){if(L===f||f!==null&&L===f.alternate)break t;L=yn(L),f=yn(f)}L=null}else L=null;z!==null&&xl(S,j,z,L,!1),M!==null&&we!==null&&xl(S,we,M,L,!0)}}e:{if(j=v?bn(v):window,z=j.nodeName&&j.nodeName.toLowerCase(),z==="select"||z==="input"&&j.type==="file")var O=Uu;else if(Qi(j))if(Xi)O=$u;else{O=Wu;var H=Hu}else(z=j.nodeName)&&z.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(O=Vu);if(O&&(O=O(e,v))){Ki(S,O,n,k);break e}H&&H(e,j,v),e==="focusout"&&(H=j._wrapperState)&&H.controlled&&j.type==="number"&&qs(j,"number",j.value)}switch(H=v?bn(v):window,e){case"focusin":(Qi(H)||H.contentEditable==="true")&&(gn=H,ja=v,tr=null);break;case"focusout":tr=ja=gn=null;break;case"mousedown":Na=!0;break;case"contextmenu":case"mouseup":case"dragend":Na=!1,al(S,n,k);break;case"selectionchange":if(Yu)break;case"keydown":case"keyup":al(S,n,k)}var W;if(va)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else xn?qi(e,n)&&(G="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(Vi&&n.locale!=="ko"&&(xn||G!=="onCompositionStart"?G==="onCompositionEnd"&&xn&&(W=Oi()):(Mt=k,pa="value"in Mt?Mt.value:Mt.textContent,xn=!0)),H=Yr(v,G),0<H.length&&(G=new Hi(G,e,null,n,k),S.push({event:G,listeners:H}),W?G.data=W:(W=Yi(n),W!==null&&(G.data=W)))),(W=Mu?Du(e,n):Lu(e,n))&&(v=Yr(v,"onBeforeInput"),0<v.length&&(k=new Hi("onBeforeInput","beforeinput",null,n,k),S.push({event:k,listeners:v}),k.data=W))}fl(S,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=On(e,n),o!=null&&s.unshift(sr(e,o,a)),o=On(e,t),o!=null&&s.push(sr(e,o,a))),e=e.return}return s}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xl(e,t,n,s,a){for(var o=t._reactName,i=[];n!==null&&n!==s;){var c=n,u=c.alternate,v=c.stateNode;if(u!==null&&u===s)break;c.tag===5&&v!==null&&(c=v,a?(u=On(n,o),u!=null&&i.unshift(sr(n,u,c))):a||(u=On(n,o),u!=null&&i.push(sr(n,u,c)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Ju=/\r\n?/g,Zu=/\u0000|\uFFFD/g;function gl(e){return(typeof e=="string"?e:""+e).replace(Ju,`
`).replace(Zu,"")}function Qr(e,t,n){if(t=gl(t),gl(e)!==t&&n)throw Error(d(425))}function Kr(){}var Aa=null,Fa=null;function za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,vl=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof vl<"u"?function(e){return vl.resolve(null).then(e).catch(np)}:Ta;function np(e){setTimeout(function(){throw e})}function _a(e,t){var n=t,s=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(s===0){e.removeChild(a),Yn(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=a}while(n);Yn(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),yt="__reactFiber$"+wn,ar="__reactProps$"+wn,kt="__reactContainer$"+wn,Ra="__reactEvents$"+wn,rp="__reactListeners$"+wn,sp="__reactHandles$"+wn;function Jt(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yl(e);e!==null;){if(n=e[yt])return n;e=yl(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[yt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function Xr(e){return e[ar]||null}var Ia=[],jn=-1;function Ot(e){return{current:e}}function ue(e){0>jn||(e.current=Ia[jn],Ia[jn]=null,jn--)}function le(e,t){jn++,Ia[jn]=e.current,e.current=t}var Bt={},_e=Ot(Bt),Ve=Ot(!1),Zt=Bt;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Bt;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function $e(e){return e=e.childContextTypes,e!=null}function Jr(){ue(Ve),ue(_e)}function wl(e,t,n){if(_e.current!==Bt)throw Error(d(168));le(_e,t),le(Ve,n)}function bl(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(d(108,ie(e)||"Unknown",a));return R({},n,s)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,Zt=_e.current,le(_e,e),le(Ve,Ve.current),!0}function jl(e,t,n){var s=e.stateNode;if(!s)throw Error(d(169));n?(e=bl(e,t,Zt),s.__reactInternalMemoizedMergedChildContext=e,ue(Ve),ue(_e),le(_e,e)):ue(Ve),le(Ve,n)}var St=null,es=!1,Ma=!1;function Nl(e){St===null?St=[e]:St.push(e)}function ap(e){es=!0,Nl(e)}function Ut(){if(!Ma&&St!==null){Ma=!0;var e=0,t=ae;try{var n=St;for(ae=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}St=null,es=!1}catch(a){throw St!==null&&(St=St.slice(e+1)),Si(sa,Ut),a}finally{ae=t,Ma=!1}}return null}var kn=[],Sn=0,ts=null,ns=0,st=[],at=0,en=null,Ct=1,Et="";function tn(e,t){kn[Sn++]=ns,kn[Sn++]=ts,ts=e,ns=t}function kl(e,t,n){st[at++]=Ct,st[at++]=Et,st[at++]=en,en=e;var s=Ct;e=Et;var a=32-dt(s)-1;s&=~(1<<a),n+=1;var o=32-dt(t)+a;if(30<o){var i=a-a%5;o=(s&(1<<i)-1).toString(32),s>>=i,a-=i,Ct=1<<32-dt(t)+a|n<<a|s,Et=o+e}else Ct=1<<o|n<<a|s,Et=e}function Da(e){e.return!==null&&(tn(e,1),kl(e,1,0))}function La(e){for(;e===ts;)ts=kn[--Sn],kn[Sn]=null,ns=kn[--Sn],kn[Sn]=null;for(;e===en;)en=st[--at],st[at]=null,Et=st[--at],st[at]=null,Ct=st[--at],st[at]=null}var et=null,tt=null,he=!1,pt=null;function Sl(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,tt=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:Ct,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,tt=null,!0):!1;default:return!1}}function Oa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(he){var t=tt;if(t){var n=t;if(!Cl(e,t)){if(Oa(e))throw Error(d(418));t=Lt(n.nextSibling);var s=et;t&&Cl(e,t)?Sl(s,n):(e.flags=e.flags&-4097|2,he=!1,et=e)}}else{if(Oa(e))throw Error(d(418));e.flags=e.flags&-4097|2,he=!1,et=e}}}function El(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function rs(e){if(e!==et)return!1;if(!he)return El(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!za(e.type,e.memoizedProps)),t&&(t=tt)){if(Oa(e))throw Pl(),Error(d(418));for(;t;)Sl(e,t),t=Lt(t.nextSibling)}if(El(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=et?Lt(e.stateNode.nextSibling):null;return!0}function Pl(){for(var e=tt;e;)e=Lt(e.nextSibling)}function Cn(){tt=et=null,he=!1}function Ua(e){pt===null?pt=[e]:pt.push(e)}var op=ve.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(d(309));var s=n.stateNode}if(!s)throw Error(d(147,e));var a=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var c=a.refs;i===null?delete c[o]:c[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function ss(e,t){throw e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Al(e){var t=e._init;return t(e._payload)}function Fl(e){function t(f,p){if(e){var x=f.deletions;x===null?(f.deletions=[p],f.flags|=16):x.push(p)}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function s(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function a(f,p){return f=Qt(f,p),f.index=0,f.sibling=null,f}function o(f,p,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<p?(f.flags|=2,p):x):(f.flags|=2,p)):(f.flags|=1048576,p)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,p,x,C){return p===null||p.tag!==6?(p=_o(x,f.mode,C),p.return=f,p):(p=a(p,x),p.return=f,p)}function u(f,p,x,C){var O=x.type;return O===Pe?k(f,p,x.props.children,C,x.key):p!==null&&(p.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===We&&Al(O)===p.type)?(C=a(p,x.props),C.ref=ir(f,p,x),C.return=f,C):(C=Ps(x.type,x.key,x.props,null,f.mode,C),C.ref=ir(f,p,x),C.return=f,C)}function v(f,p,x,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Ro(x,f.mode,C),p.return=f,p):(p=a(p,x.children||[]),p.return=f,p)}function k(f,p,x,C,O){return p===null||p.tag!==7?(p=dn(x,f.mode,C,O),p.return=f,p):(p=a(p,x),p.return=f,p)}function S(f,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=_o(""+p,f.mode,x),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ke:return x=Ps(p.type,p.key,p.props,null,f.mode,x),x.ref=ir(f,null,p),x.return=f,x;case Ee:return p=Ro(p,f.mode,x),p.return=f,p;case We:var C=p._init;return S(f,C(p._payload),x)}if(Mn(p)||$(p))return p=dn(p,f.mode,x,null),p.return=f,p;ss(f,p)}return null}function j(f,p,x,C){var O=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return O!==null?null:c(f,p,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ke:return x.key===O?u(f,p,x,C):null;case Ee:return x.key===O?v(f,p,x,C):null;case We:return O=x._init,j(f,p,O(x._payload),C)}if(Mn(x)||$(x))return O!==null?null:k(f,p,x,C,null);ss(f,x)}return null}function z(f,p,x,C,O){if(typeof C=="string"&&C!==""||typeof C=="number")return f=f.get(x)||null,c(p,f,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ke:return f=f.get(C.key===null?x:C.key)||null,u(p,f,C,O);case Ee:return f=f.get(C.key===null?x:C.key)||null,v(p,f,C,O);case We:var H=C._init;return z(f,p,x,H(C._payload),O)}if(Mn(C)||$(C))return f=f.get(x)||null,k(p,f,C,O,null);ss(p,C)}return null}function M(f,p,x,C){for(var O=null,H=null,W=p,G=p=0,Ce=null;W!==null&&G<x.length;G++){W.index>G?(Ce=W,W=null):Ce=W.sibling;var te=j(f,W,x[G],C);if(te===null){W===null&&(W=Ce);break}e&&W&&te.alternate===null&&t(f,W),p=o(te,p,G),H===null?O=te:H.sibling=te,H=te,W=Ce}if(G===x.length)return n(f,W),he&&tn(f,G),O;if(W===null){for(;G<x.length;G++)W=S(f,x[G],C),W!==null&&(p=o(W,p,G),H===null?O=W:H.sibling=W,H=W);return he&&tn(f,G),O}for(W=s(f,W);G<x.length;G++)Ce=z(W,f,G,x[G],C),Ce!==null&&(e&&Ce.alternate!==null&&W.delete(Ce.key===null?G:Ce.key),p=o(Ce,p,G),H===null?O=Ce:H.sibling=Ce,H=Ce);return e&&W.forEach(function(Kt){return t(f,Kt)}),he&&tn(f,G),O}function L(f,p,x,C){var O=$(x);if(typeof O!="function")throw Error(d(150));if(x=O.call(x),x==null)throw Error(d(151));for(var H=O=null,W=p,G=p=0,Ce=null,te=x.next();W!==null&&!te.done;G++,te=x.next()){W.index>G?(Ce=W,W=null):Ce=W.sibling;var Kt=j(f,W,te.value,C);if(Kt===null){W===null&&(W=Ce);break}e&&W&&Kt.alternate===null&&t(f,W),p=o(Kt,p,G),H===null?O=Kt:H.sibling=Kt,H=Kt,W=Ce}if(te.done)return n(f,W),he&&tn(f,G),O;if(W===null){for(;!te.done;G++,te=x.next())te=S(f,te.value,C),te!==null&&(p=o(te,p,G),H===null?O=te:H.sibling=te,H=te);return he&&tn(f,G),O}for(W=s(f,W);!te.done;G++,te=x.next())te=z(W,f,G,te.value,C),te!==null&&(e&&te.alternate!==null&&W.delete(te.key===null?G:te.key),p=o(te,p,G),H===null?O=te:H.sibling=te,H=te);return e&&W.forEach(function(Op){return t(f,Op)}),he&&tn(f,G),O}function we(f,p,x,C){if(typeof x=="object"&&x!==null&&x.type===Pe&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ke:e:{for(var O=x.key,H=p;H!==null;){if(H.key===O){if(O=x.type,O===Pe){if(H.tag===7){n(f,H.sibling),p=a(H,x.props.children),p.return=f,f=p;break e}}else if(H.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===We&&Al(O)===H.type){n(f,H.sibling),p=a(H,x.props),p.ref=ir(f,H,x),p.return=f,f=p;break e}n(f,H);break}else t(f,H);H=H.sibling}x.type===Pe?(p=dn(x.props.children,f.mode,C,x.key),p.return=f,f=p):(C=Ps(x.type,x.key,x.props,null,f.mode,C),C.ref=ir(f,p,x),C.return=f,f=C)}return i(f);case Ee:e:{for(H=x.key;p!==null;){if(p.key===H)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(f,p.sibling),p=a(p,x.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=Ro(x,f.mode,C),p.return=f,f=p}return i(f);case We:return H=x._init,we(f,p,H(x._payload),C)}if(Mn(x))return M(f,p,x,C);if($(x))return L(f,p,x,C);ss(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(f,p.sibling),p=a(p,x),p.return=f,f=p):(n(f,p),p=_o(x,f.mode,C),p.return=f,f=p),i(f)):n(f,p)}return we}var En=Fl(!0),zl=Fl(!1),as=Ot(null),os=null,Pn=null,Ha=null;function Wa(){Ha=Pn=os=null}function Va(e){var t=as.current;ue(as),e._currentValue=t}function $a(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function An(e,t){os=e,Ha=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ge=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(Ha!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(os===null)throw Error(d(308));Pn=e,os.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var nn=null;function Ga(e){nn===null?nn=[e]:nn.push(e)}function Tl(e,t,n,s){var a=t.interleaved;return a===null?(n.next=n,Ga(t)):(n.next=a.next,a.next=n),t.interleaved=n,Pt(e,s)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _l(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(J&2)!==0){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Pt(e,n)}return a=s.interleaved,a===null?(t.next=t,Ga(s)):(t.next=a.next,a.next=t),s.interleaved=t,Pt(e,n)}function is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,ia(e,n)}}function Rl(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ls(e,t,n,s){var a=e.updateQueue;Ht=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var u=c,v=u.next;u.next=null,i===null?o=v:i.next=v,i=u;var k=e.alternate;k!==null&&(k=k.updateQueue,c=k.lastBaseUpdate,c!==i&&(c===null?k.firstBaseUpdate=v:c.next=v,k.lastBaseUpdate=u))}if(o!==null){var S=a.baseState;i=0,k=v=u=null,c=o;do{var j=c.lane,z=c.eventTime;if((s&j)===j){k!==null&&(k=k.next={eventTime:z,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var M=e,L=c;switch(j=t,z=n,L.tag){case 1:if(M=L.payload,typeof M=="function"){S=M.call(z,S,j);break e}S=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=L.payload,j=typeof M=="function"?M.call(z,S,j):M,j==null)break e;S=R({},S,j);break e;case 2:Ht=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,j=a.effects,j===null?a.effects=[c]:j.push(c))}else z={eventTime:z,lane:j,tag:c.tag,payload:c.payload,callback:c.callback,next:null},k===null?(v=k=z,u=S):k=k.next=z,i|=j;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;j=c,c=j.next,j.next=null,a.lastBaseUpdate=j,a.shared.pending=null}}while(!0);if(k===null&&(u=S),a.baseState=u,a.firstBaseUpdate=v,a.lastBaseUpdate=k,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);an|=i,e.lanes=i,e.memoizedState=S}}function Il(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=n,typeof a!="function")throw Error(d(191,a));a.call(s)}}}var lr={},wt=Ot(lr),cr=Ot(lr),dr=Ot(lr);function rn(e){if(e===lr)throw Error(d(174));return e}function Ya(e,t){switch(le(dr,t),le(cr,e),le(wt,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qs(t,e)}ue(wt),le(wt,t)}function Fn(){ue(wt),ue(cr),ue(dr)}function Ml(e){rn(dr.current);var t=rn(wt.current),n=Qs(t,e.type);t!==n&&(le(cr,e),le(wt,n))}function Qa(e){cr.current===e&&(ue(wt),ue(cr))}var fe=Ot(0);function cs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ka=[];function Xa(){for(var e=0;e<Ka.length;e++)Ka[e]._workInProgressVersionPrimary=null;Ka.length=0}var ds=ve.ReactCurrentDispatcher,Ja=ve.ReactCurrentBatchConfig,sn=0,me=null,je=null,ke=null,us=!1,ur=!1,pr=0,ip=0;function Re(){throw Error(d(321))}function Za(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function eo(e,t,n,s,a,o){if(sn=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ds.current=e===null||e.memoizedState===null?up:pp,e=n(s,a),ur){o=0;do{if(ur=!1,pr=0,25<=o)throw Error(d(301));o+=1,ke=je=null,t.updateQueue=null,ds.current=hp,e=n(s,a)}while(ur)}if(ds.current=fs,t=je!==null&&je.next!==null,sn=0,ke=je=me=null,us=!1,t)throw Error(d(300));return e}function to(){var e=pr!==0;return pr=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?me.memoizedState=ke=e:ke=ke.next=e,ke}function it(){if(je===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=ke===null?me.memoizedState:ke.next;if(t!==null)ke=t,je=e;else{if(e===null)throw Error(d(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},ke===null?me.memoizedState=ke=e:ke=ke.next=e}return ke}function hr(e,t){return typeof t=="function"?t(e):t}function no(e){var t=it(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var s=je,a=s.baseQueue,o=n.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}s.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,s=s.baseState;var c=i=null,u=null,v=o;do{var k=v.lane;if((sn&k)===k)u!==null&&(u=u.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),s=v.hasEagerState?v.eagerState:e(s,v.action);else{var S={lane:k,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};u===null?(c=u=S,i=s):u=u.next=S,me.lanes|=k,an|=k}v=v.next}while(v!==null&&v!==o);u===null?i=s:u.next=c,ut(s,t.memoizedState)||(Ge=!0),t.memoizedState=s,t.baseState=i,t.baseQueue=u,n.lastRenderedState=s}if(e=n.interleaved,e!==null){a=e;do o=a.lane,me.lanes|=o,an|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ro(e){var t=it(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var s=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);ut(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,s]}function Dl(){}function Ll(e,t){var n=me,s=it(),a=t(),o=!ut(s.memoizedState,a);if(o&&(s.memoizedState=a,Ge=!0),s=s.queue,so(Ul.bind(null,n,s,e),[e]),s.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,fr(9,Bl.bind(null,n,s,a,t),void 0,null),Se===null)throw Error(d(349));(sn&30)!==0||Ol(n,t,a)}return a}function Ol(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bl(e,t,n,s){t.value=n,t.getSnapshot=s,Hl(t)&&Wl(e)}function Ul(e,t,n){return n(function(){Hl(t)&&Wl(e)})}function Hl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Wl(e){var t=Pt(e,1);t!==null&&xt(t,e,1,-1)}function Vl(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=dp.bind(null,me,e),[t.memoizedState,e]}function fr(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function $l(){return it().memoizedState}function ps(e,t,n,s){var a=bt();me.flags|=e,a.memoizedState=fr(1|t,n,void 0,s===void 0?null:s)}function hs(e,t,n,s){var a=it();s=s===void 0?null:s;var o=void 0;if(je!==null){var i=je.memoizedState;if(o=i.destroy,s!==null&&Za(s,i.deps)){a.memoizedState=fr(t,n,o,s);return}}me.flags|=e,a.memoizedState=fr(1|t,n,o,s)}function Gl(e,t){return ps(8390656,8,e,t)}function so(e,t){return hs(2048,8,e,t)}function ql(e,t){return hs(4,2,e,t)}function Yl(e,t){return hs(4,4,e,t)}function Ql(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kl(e,t,n){return n=n!=null?n.concat([e]):null,hs(4,4,Ql.bind(null,t,e),n)}function ao(){}function Xl(e,t){var n=it();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Za(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Jl(e,t){var n=it();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Za(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Zl(e,t,n){return(sn&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(ut(n,t)||(n=Ai(),me.lanes|=n,an|=n,e.baseState=!0),t)}function lp(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var s=Ja.transition;Ja.transition={};try{e(!1),t()}finally{ae=n,Ja.transition=s}}function ec(){return it().memoizedState}function cp(e,t,n){var s=qt(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},tc(e))nc(t,n);else if(n=Tl(e,t,n,s),n!==null){var a=Be();xt(n,e,s,a),rc(n,t,s)}}function dp(e,t,n){var s=qt(e),a={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(tc(e))nc(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,c=o(i,n);if(a.hasEagerState=!0,a.eagerState=c,ut(c,i)){var u=t.interleaved;u===null?(a.next=a,Ga(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}n=Tl(e,t,a,s),n!==null&&(a=Be(),xt(n,e,s,a),rc(n,t,s))}}function tc(e){var t=e.alternate;return e===me||t!==null&&t===me}function nc(e,t){ur=us=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rc(e,t,n){if((n&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,ia(e,n)}}var fs={readContext:ot,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},up={readContext:ot,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Gl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ps(4194308,4,Ql.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return ps(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=bt();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=cp.bind(null,me,e),[s.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:Vl,useDebugValue:ao,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=Vl(!1),t=e[0];return e=lp.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=me,a=bt();if(he){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),Se===null)throw Error(d(349));(sn&30)!==0||Ol(s,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Gl(Ul.bind(null,s,o,e),[e]),s.flags|=2048,fr(9,Bl.bind(null,s,o,n,t),void 0,null),n},useId:function(){var e=bt(),t=Se.identifierPrefix;if(he){var n=Et,s=Ct;n=(s&~(1<<32-dt(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ip++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pp={readContext:ot,useCallback:Xl,useContext:ot,useEffect:so,useImperativeHandle:Kl,useInsertionEffect:ql,useLayoutEffect:Yl,useMemo:Jl,useReducer:no,useRef:$l,useState:function(){return no(hr)},useDebugValue:ao,useDeferredValue:function(e){var t=it();return Zl(t,je.memoizedState,e)},useTransition:function(){var e=no(hr)[0],t=it().memoizedState;return[e,t]},useMutableSource:Dl,useSyncExternalStore:Ll,useId:ec,unstable_isNewReconciler:!1},hp={readContext:ot,useCallback:Xl,useContext:ot,useEffect:so,useImperativeHandle:Kl,useInsertionEffect:ql,useLayoutEffect:Yl,useMemo:Jl,useReducer:ro,useRef:$l,useState:function(){return ro(hr)},useDebugValue:ao,useDeferredValue:function(e){var t=it();return je===null?t.memoizedState=e:Zl(t,je.memoizedState,e)},useTransition:function(){var e=ro(hr)[0],t=it().memoizedState;return[e,t]},useMutableSource:Dl,useSyncExternalStore:Ll,useId:ec,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=R({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oo(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ms={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Be(),a=qt(e),o=At(s,a);o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,a),t!==null&&(xt(t,e,a,s),is(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Be(),a=qt(e),o=At(s,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,a),t!==null&&(xt(t,e,a,s),is(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),s=qt(e),a=At(n,s);a.tag=2,t!=null&&(a.callback=t),t=Wt(e,a,s),t!==null&&(xt(t,e,s,n),is(t,e,s))}};function sc(e,t,n,s,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,i):t.prototype&&t.prototype.isPureReactComponent?!er(n,s)||!er(a,o):!0}function ac(e,t,n){var s=!1,a=Bt,o=t.contextType;return typeof o=="object"&&o!==null?o=ot(o):(a=$e(t)?Zt:_e.current,s=t.contextTypes,o=(s=s!=null)?Nn(e,a):Bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ms,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function oc(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&ms.enqueueReplaceState(t,t.state,null)}function io(e,t,n,s){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},qa(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=ot(o):(o=$e(t)?Zt:_e.current,a.context=Nn(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(oo(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ms.enqueueReplaceState(a,a.state,null),ls(e,n,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t){try{var n="",s=t;do n+=Z(s),s=s.return;while(s);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function lo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function co(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fp=typeof WeakMap=="function"?WeakMap:Map;function ic(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){js||(js=!0,So=s),co(e,t)},n}function lc(e,t,n){n=At(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;n.payload=function(){return s(a)},n.callback=function(){co(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){co(e,t),typeof s!="function"&&($t===null?$t=new Set([this]):$t.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function cc(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new fp;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(n)||(a.add(n),e=Pp.bind(null,e,t,n),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function uc(e,t,n,s,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var mp=ve.ReactCurrentOwner,Ge=!1;function Oe(e,t,n,s){t.child=e===null?zl(t,null,n,s):En(t,e.child,n,s)}function pc(e,t,n,s,a){n=n.render;var o=t.ref;return An(t,a),s=eo(e,t,n,s,o,a),n=to(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ft(e,t,a)):(he&&n&&Da(t),t.flags|=1,Oe(e,t,s,a),t.child)}function hc(e,t,n,s,a){if(e===null){var o=n.type;return typeof o=="function"&&!To(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fc(e,t,o,s,a)):(e=Ps(n.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&a)===0){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(i,s)&&e.ref===t.ref)return Ft(e,t,a)}return t.flags|=1,e=Qt(o,s),e.ref=t.ref,e.return=t,t.child=e}function fc(e,t,n,s,a){if(e!==null){var o=e.memoizedProps;if(er(o,s)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=s=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,Ft(e,t,a)}return uo(e,t,n,s,a)}function mc(e,t,n){var s=t.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(_n,nt),nt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(_n,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:n,le(_n,nt),nt|=s}else o!==null?(s=o.baseLanes|n,t.memoizedState=null):s=n,le(_n,nt),nt|=s;return Oe(e,t,a,n),t.child}function xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function uo(e,t,n,s,a){var o=$e(n)?Zt:_e.current;return o=Nn(t,o),An(t,a),n=eo(e,t,n,s,o,a),s=to(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ft(e,t,a)):(he&&s&&Da(t),t.flags|=1,Oe(e,t,n,a),t.child)}function gc(e,t,n,s,a){if($e(n)){var o=!0;Zr(t)}else o=!1;if(An(t,a),t.stateNode===null)gs(e,t),ac(t,n,s),io(t,n,s,a),s=!0;else if(e===null){var i=t.stateNode,c=t.memoizedProps;i.props=c;var u=i.context,v=n.contextType;typeof v=="object"&&v!==null?v=ot(v):(v=$e(n)?Zt:_e.current,v=Nn(t,v));var k=n.getDerivedStateFromProps,S=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function";S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==s||u!==v)&&oc(t,i,s,v),Ht=!1;var j=t.memoizedState;i.state=j,ls(t,s,i,a),u=t.memoizedState,c!==s||j!==u||Ve.current||Ht?(typeof k=="function"&&(oo(t,n,k,s),u=t.memoizedState),(c=Ht||sc(t,n,c,s,j,u,v))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=u),i.props=s,i.state=u,i.context=v,s=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,_l(e,t),c=t.memoizedProps,v=t.type===t.elementType?c:ht(t.type,c),i.props=v,S=t.pendingProps,j=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=ot(u):(u=$e(n)?Zt:_e.current,u=Nn(t,u));var z=n.getDerivedStateFromProps;(k=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==S||j!==u)&&oc(t,i,s,u),Ht=!1,j=t.memoizedState,i.state=j,ls(t,s,i,a);var M=t.memoizedState;c!==S||j!==M||Ve.current||Ht?(typeof z=="function"&&(oo(t,n,z,s),M=t.memoizedState),(v=Ht||sc(t,n,v,s,j,M,u)||!1)?(k||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,M,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,M,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=M),i.props=s,i.state=M,i.context=u,s=v):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),s=!1)}return po(e,t,n,s,o,a)}function po(e,t,n,s,a,o){xc(e,t);var i=(t.flags&128)!==0;if(!s&&!i)return a&&jl(t,n,!1),Ft(e,t,o);s=t.stateNode,mp.current=t;var c=i&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&i?(t.child=En(t,e.child,null,o),t.child=En(t,null,c,o)):Oe(e,t,c,o),t.memoizedState=s.state,a&&jl(t,n,!0),t.child}function vc(e){var t=e.stateNode;t.pendingContext?wl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wl(e,t.context,!1),Ya(e,t.containerInfo)}function yc(e,t,n,s,a){return Cn(),Ua(a),t.flags|=256,Oe(e,t,n,s),t.child}var ho={dehydrated:null,treeContext:null,retryLane:0};function fo(e){return{baseLanes:e,cachePool:null,transitions:null}}function wc(e,t,n){var s=t.pendingProps,a=fe.current,o=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),le(fe,a&1),e===null)return Ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=s.children,e=s.fallback,o?(s=t.mode,o=t.child,i={mode:"hidden",children:i},(s&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=As(i,s,0,null),e=dn(e,s,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=fo(n),t.memoizedState=ho,e):mo(t,i));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return xp(e,t,i,s,c,a,n);if(o){o=s.fallback,i=t.mode,a=e.child,c=a.sibling;var u={mode:"hidden",children:s.children};return(i&1)===0&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=u,t.deletions=null):(s=Qt(a,u),s.subtreeFlags=a.subtreeFlags&14680064),c!==null?o=Qt(c,o):(o=dn(o,i,n,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,i=e.child.memoizedState,i=i===null?fo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=ho,s}return o=e.child,e=o.sibling,s=Qt(o,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function mo(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xs(e,t,n,s){return s!==null&&Ua(s),En(t,e.child,null,n),e=mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xp(e,t,n,s,a,o,i){if(n)return t.flags&256?(t.flags&=-257,s=lo(Error(d(422))),xs(e,t,i,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,a=t.mode,s=As({mode:"visible",children:s.children},a,0,null),o=dn(o,a,i,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,(t.mode&1)!==0&&En(t,e.child,null,i),t.child.memoizedState=fo(i),t.memoizedState=ho,o);if((t.mode&1)===0)return xs(e,t,i,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var c=s.dgst;return s=c,o=Error(d(419)),s=lo(o,s,void 0),xs(e,t,i,s)}if(c=(i&e.childLanes)!==0,Ge||c){if(s=Se,s!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(s.suspendedLanes|i))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Pt(e,a),xt(s,e,a,-1))}return zo(),s=lo(Error(d(421))),xs(e,t,i,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Ap.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,tt=Lt(a.nextSibling),et=t,he=!0,pt=null,e!==null&&(st[at++]=Ct,st[at++]=Et,st[at++]=en,Ct=e.id,Et=e.overflow,en=t),t=mo(t,s.children),t.flags|=4096,t)}function bc(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),$a(e.return,t,n)}function xo(e,t,n,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=n,o.tailMode=a)}function jc(e,t,n){var s=t.pendingProps,a=s.revealOrder,o=s.tail;if(Oe(e,t,s.children,n),s=fe.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(le(fe,s),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&cs(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),xo(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&cs(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}xo(t,!0,n,null,o);break;case"together":xo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gp(e,t,n){switch(t.tag){case 3:vc(t),Cn();break;case 5:Ml(t);break;case 1:$e(t.type)&&Zr(t);break;case 4:Ya(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;le(as,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(le(fe,fe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?wc(e,t,n):(le(fe,fe.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);le(fe,fe.current&1);break;case 19:if(s=(n&t.childLanes)!==0,(e.flags&128)!==0){if(s)return jc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),le(fe,fe.current),s)break;return null;case 22:case 23:return t.lanes=0,mc(e,t,n)}return Ft(e,t,n)}var Nc,go,kc,Sc;Nc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},go=function(){},kc=function(e,t,n,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,rn(wt.current);var o=null;switch(n){case"input":a=$s(e,a),s=$s(e,s),o=[];break;case"select":a=R({},a,{value:void 0}),s=R({},s,{value:void 0}),o=[];break;case"textarea":a=Ys(e,a),s=Ys(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Kr)}Ks(n,s);var i;n=null;for(v in a)if(!s.hasOwnProperty(v)&&a.hasOwnProperty(v)&&a[v]!=null)if(v==="style"){var c=a[v];for(i in c)c.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(y.hasOwnProperty(v)?o||(o=[]):(o=o||[]).push(v,null));for(v in s){var u=s[v];if(c=a!=null?a[v]:void 0,s.hasOwnProperty(v)&&u!==c&&(u!=null||c!=null))if(v==="style")if(c){for(i in c)!c.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&c[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(v,n)),n=u;else v==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(o=o||[]).push(v,u)):v==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(v,""+u):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(y.hasOwnProperty(v)?(u!=null&&v==="onScroll"&&de("scroll",e),o||c===u||(o=[])):(o=o||[]).push(v,u))}n&&(o=o||[]).push("style",n);var v=o;(t.updateQueue=v)&&(t.flags|=4)}},Sc=function(e,t,n,s){n!==s&&(t.flags|=4)};function mr(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function vp(e,t,n){var s=t.pendingProps;switch(La(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return $e(t.type)&&Jr(),Ie(t),null;case 3:return s=t.stateNode,Fn(),ue(Ve),ue(_e),Xa(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(rs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pt!==null&&(Po(pt),pt=null))),go(e,t),Ie(t),null;case 5:Qa(t);var a=rn(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)kc(e,t,n,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(d(166));return Ie(t),null}if(e=rn(wt.current),rs(t)){s=t.stateNode,n=t.type;var o=t.memoizedProps;switch(s[yt]=t,s[ar]=o,e=(t.mode&1)!==0,n){case"dialog":de("cancel",s),de("close",s);break;case"iframe":case"object":case"embed":de("load",s);break;case"video":case"audio":for(a=0;a<nr.length;a++)de(nr[a],s);break;case"source":de("error",s);break;case"img":case"image":case"link":de("error",s),de("load",s);break;case"details":de("toggle",s);break;case"input":ai(s,o),de("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},de("invalid",s);break;case"textarea":li(s,o),de("invalid",s)}Ks(n,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="children"?typeof c=="string"?s.textContent!==c&&(o.suppressHydrationWarning!==!0&&Qr(s.textContent,c,e),a=["children",c]):typeof c=="number"&&s.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&Qr(s.textContent,c,e),a=["children",""+c]):y.hasOwnProperty(i)&&c!=null&&i==="onScroll"&&de("scroll",s)}switch(n){case"input":Cr(s),ii(s,o,!0);break;case"textarea":Cr(s),di(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Kr)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ui(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=i.createElement(n,{is:s.is}):(e=i.createElement(n),n==="select"&&(i=e,s.multiple?i.multiple=!0:s.size&&(i.size=s.size))):e=i.createElementNS(e,n),e[yt]=t,e[ar]=s,Nc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Xs(n,s),n){case"dialog":de("cancel",e),de("close",e),a=s;break;case"iframe":case"object":case"embed":de("load",e),a=s;break;case"video":case"audio":for(a=0;a<nr.length;a++)de(nr[a],e);a=s;break;case"source":de("error",e),a=s;break;case"img":case"image":case"link":de("error",e),de("load",e),a=s;break;case"details":de("toggle",e),a=s;break;case"input":ai(e,s),a=$s(e,s),de("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=R({},s,{value:void 0}),de("invalid",e);break;case"textarea":li(e,s),a=Ys(e,s),de("invalid",e);break;default:a=s}Ks(n,a),c=a;for(o in c)if(c.hasOwnProperty(o)){var u=c[o];o==="style"?fi(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pi(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(y.hasOwnProperty(o)?u!=null&&o==="onScroll"&&de("scroll",e):u!=null&&ze(e,o,u,i))}switch(n){case"input":Cr(e),ii(e,s,!1);break;case"textarea":Cr(e),di(e);break;case"option":s.value!=null&&e.setAttribute("value",""+se(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?un(e,!!s.multiple,o,!1):s.defaultValue!=null&&un(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Sc(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(d(166));if(n=rn(dr.current),rn(wt.current),rs(t)){if(s=t.stateNode,n=t.memoizedProps,s[yt]=t,(o=s.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Qr(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(s.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[yt]=t,t.stateNode=s}return Ie(t),null;case 13:if(ue(fe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Pl(),Cn(),t.flags|=98560,o=!1;else if(o=rs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(d(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(d(317));o[yt]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else pt!==null&&(Po(pt),pt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(fe.current&1)!==0?Ne===0&&(Ne=3):zo())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Fn(),go(e,t),e===null&&rr(t.stateNode.containerInfo),Ie(t),null;case 10:return Va(t.type._context),Ie(t),null;case 17:return $e(t.type)&&Jr(),Ie(t),null;case 19:if(ue(fe),o=t.memoizedState,o===null)return Ie(t),null;if(s=(t.flags&128)!==0,i=o.rendering,i===null)if(s)mr(o,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=cs(e),i!==null){for(t.flags|=128,mr(o,!1),s=i.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)o=n,e=s,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(fe,fe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>Rn&&(t.flags|=128,s=!0,mr(o,!1),t.lanes=4194304)}else{if(!s)if(e=cs(i),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!he)return Ie(t),null}else 2*ye()-o.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,s=!0,mr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,n=fe.current,le(fe,s?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return Fo(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(nt&1073741824)!==0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(d(156,t.tag))}function yp(e,t){switch(La(t),t.tag){case 1:return $e(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fn(),ue(Ve),ue(_e),Xa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Qa(t),null;case 13:if(ue(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(fe),null;case 4:return Fn(),null;case 10:return Va(t.type._context),null;case 22:case 23:return Fo(),null;case 24:return null;default:return null}}var vs=!1,Me=!1,wp=typeof WeakSet=="function"?WeakSet:Set,_=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){ge(e,t,s)}else n.current=null}function vo(e,t,n){try{n()}catch(s){ge(e,t,s)}}var Cc=!1;function bp(e,t){if(Aa=Lr,e=sl(),ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,c=-1,u=-1,v=0,k=0,S=e,j=null;t:for(;;){for(var z;S!==n||a!==0&&S.nodeType!==3||(c=i+a),S!==o||s!==0&&S.nodeType!==3||(u=i+s),S.nodeType===3&&(i+=S.nodeValue.length),(z=S.firstChild)!==null;)j=S,S=z;for(;;){if(S===e)break t;if(j===n&&++v===a&&(c=i),j===o&&++k===s&&(u=i),(z=S.nextSibling)!==null)break;S=j,j=S.parentNode}S=z}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fa={focusedElem:e,selectionRange:n},Lr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var M=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var L=M.memoizedProps,we=M.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?L:ht(t.type,L),we);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(C){ge(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return M=Cc,Cc=!1,M}function xr(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&vo(t,n,o)}a=a.next}while(a!==s)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function yo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ec(e){var t=e.alternate;t!==null&&(e.alternate=null,Ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[ar],delete t[Ra],delete t[rp],delete t[sp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pc(e){return e.tag===5||e.tag===3||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wo(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kr));else if(s!==4&&(e=e.child,e!==null))for(wo(e,t,n),e=e.sibling;e!==null;)wo(e,t,n),e=e.sibling}function bo(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(bo(e,t,n),e=e.sibling;e!==null;)bo(e,t,n),e=e.sibling}var Ae=null,ft=!1;function Vt(e,t,n){for(n=n.child;n!==null;)Fc(e,t,n),n=n.sibling}function Fc(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Tr,n)}catch{}switch(n.tag){case 5:Me||Tn(n,t);case 6:var s=Ae,a=ft;Ae=null,Vt(e,t,n),Ae=s,ft=a,Ae!==null&&(ft?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(ft?(e=Ae,n=n.stateNode,e.nodeType===8?_a(e.parentNode,n):e.nodeType===1&&_a(e,n),Yn(e)):_a(Ae,n.stateNode));break;case 4:s=Ae,a=ft,Ae=n.stateNode.containerInfo,ft=!0,Vt(e,t,n),Ae=s,ft=a;break;case 0:case 11:case 14:case 15:if(!Me&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&vo(n,t,i),a=a.next}while(a!==s)}Vt(e,t,n);break;case 1:if(!Me&&(Tn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(c){ge(n,t,c)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Me=(s=Me)||n.memoizedState!==null,Vt(e,t,n),Me=s):Vt(e,t,n);break;default:Vt(e,t,n)}}function zc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wp),t.forEach(function(s){var a=Fp.bind(null,e,s);n.has(s)||(n.add(s),s.then(a,a))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var a=n[s];try{var o=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 5:Ae=c.stateNode,ft=!1;break e;case 3:Ae=c.stateNode.containerInfo,ft=!0;break e;case 4:Ae=c.stateNode.containerInfo,ft=!0;break e}c=c.return}if(Ae===null)throw Error(d(160));Fc(o,i,a),Ae=null,ft=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(v){ge(a,t,v)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tc(t,e),t=t.sibling}function Tc(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),jt(e),s&4){try{xr(3,e,e.return),ys(3,e)}catch(L){ge(e,e.return,L)}try{xr(5,e,e.return)}catch(L){ge(e,e.return,L)}}break;case 1:mt(t,e),jt(e),s&512&&n!==null&&Tn(n,n.return);break;case 5:if(mt(t,e),jt(e),s&512&&n!==null&&Tn(n,n.return),e.flags&32){var a=e.stateNode;try{Dn(a,"")}catch(L){ge(e,e.return,L)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&oi(a,o),Xs(c,i);var v=Xs(c,o);for(i=0;i<u.length;i+=2){var k=u[i],S=u[i+1];k==="style"?fi(a,S):k==="dangerouslySetInnerHTML"?pi(a,S):k==="children"?Dn(a,S):ze(a,k,S,v)}switch(c){case"input":Gs(a,o);break;case"textarea":ci(a,o);break;case"select":var j=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var z=o.value;z!=null?un(a,!!o.multiple,z,!1):j!==!!o.multiple&&(o.defaultValue!=null?un(a,!!o.multiple,o.defaultValue,!0):un(a,!!o.multiple,o.multiple?[]:"",!1))}a[ar]=o}catch(L){ge(e,e.return,L)}}break;case 6:if(mt(t,e),jt(e),s&4){if(e.stateNode===null)throw Error(d(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(L){ge(e,e.return,L)}}break;case 3:if(mt(t,e),jt(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(L){ge(e,e.return,L)}break;case 4:mt(t,e),jt(e);break;case 13:mt(t,e),jt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(ko=ye())),s&4&&zc(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(v=Me)||k,mt(t,e),Me=v):mt(t,e),jt(e),s&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!k&&(e.mode&1)!==0)for(_=e,k=e.child;k!==null;){for(S=_=k;_!==null;){switch(j=_,z=j.child,j.tag){case 0:case 11:case 14:case 15:xr(4,j,j.return);break;case 1:Tn(j,j.return);var M=j.stateNode;if(typeof M.componentWillUnmount=="function"){s=j,n=j.return;try{t=s,M.props=t.memoizedProps,M.state=t.memoizedState,M.componentWillUnmount()}catch(L){ge(s,n,L)}}break;case 5:Tn(j,j.return);break;case 22:if(j.memoizedState!==null){Ic(S);continue}}z!==null?(z.return=j,_=z):Ic(S)}k=k.sibling}e:for(k=null,S=e;;){if(S.tag===5){if(k===null){k=S;try{a=S.stateNode,v?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=S.stateNode,u=S.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=hi("display",i))}catch(L){ge(e,e.return,L)}}}else if(S.tag===6){if(k===null)try{S.stateNode.nodeValue=v?"":S.memoizedProps}catch(L){ge(e,e.return,L)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;k===S&&(k=null),S=S.return}k===S&&(k=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:mt(t,e),jt(e),s&4&&zc(e);break;case 21:break;default:mt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pc(n)){var s=n;break e}n=n.return}throw Error(d(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Dn(a,""),s.flags&=-33);var o=Ac(e);bo(e,o,a);break;case 3:case 4:var i=s.stateNode.containerInfo,c=Ac(e);wo(e,c,i);break;default:throw Error(d(161))}}catch(u){ge(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jp(e,t,n){_=e,_c(e)}function _c(e,t,n){for(var s=(e.mode&1)!==0;_!==null;){var a=_,o=a.child;if(a.tag===22&&s){var i=a.memoizedState!==null||vs;if(!i){var c=a.alternate,u=c!==null&&c.memoizedState!==null||Me;c=vs;var v=Me;if(vs=i,(Me=u)&&!v)for(_=a;_!==null;)i=_,u=i.child,i.tag===22&&i.memoizedState!==null?Mc(a):u!==null?(u.return=i,_=u):Mc(a);for(;o!==null;)_=o,_c(o),o=o.sibling;_=a,vs=c,Me=v}Rc(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,_=o):Rc(e)}}function Rc(e){for(;_!==null;){var t=_;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Me||ys(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Me)if(n===null)s.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);s.componentDidUpdate(a,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Il(t,o,s);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Il(t,i,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var v=t.alternate;if(v!==null){var k=v.memoizedState;if(k!==null){var S=k.dehydrated;S!==null&&Yn(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}Me||t.flags&512&&yo(t)}catch(j){ge(t,t.return,j)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Ic(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Mc(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ys(4,t)}catch(u){ge(t,n,u)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(u){ge(t,a,u)}}var o=t.return;try{yo(t)}catch(u){ge(t,o,u)}break;case 5:var i=t.return;try{yo(t)}catch(u){ge(t,i,u)}}}catch(u){ge(t,t.return,u)}if(t===e){_=null;break}var c=t.sibling;if(c!==null){c.return=t.return,_=c;break}_=t.return}}var Np=Math.ceil,ws=ve.ReactCurrentDispatcher,jo=ve.ReactCurrentOwner,lt=ve.ReactCurrentBatchConfig,J=0,Se=null,be=null,Fe=0,nt=0,_n=Ot(0),Ne=0,gr=null,an=0,bs=0,No=0,vr=null,qe=null,ko=0,Rn=1/0,zt=null,js=!1,So=null,$t=null,Ns=!1,Gt=null,ks=0,yr=0,Co=null,Ss=-1,Cs=0;function Be(){return(J&6)!==0?ye():Ss!==-1?Ss:Ss=ye()}function qt(e){return(e.mode&1)===0?1:(J&2)!==0&&Fe!==0?Fe&-Fe:op.transition!==null?(Cs===0&&(Cs=Ai()),Cs):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Li(e.type)),e)}function xt(e,t,n,s){if(50<yr)throw yr=0,Co=null,Error(d(185));Wn(e,n,s),((J&2)===0||e!==Se)&&(e===Se&&((J&2)===0&&(bs|=n),Ne===4&&Yt(e,Fe)),Ye(e,s),n===1&&J===0&&(t.mode&1)===0&&(Rn=ye()+500,es&&Ut()))}function Ye(e,t){var n=e.callbackNode;ou(e,t);var s=Ir(e,e===Se?Fe:0);if(s===0)n!==null&&Ci(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&Ci(n),t===1)e.tag===0?ap(Lc.bind(null,e)):Nl(Lc.bind(null,e)),tp(function(){(J&6)===0&&Ut()}),n=null;else{switch(Fi(s)){case 1:n=sa;break;case 4:n=Ei;break;case 16:n=zr;break;case 536870912:n=Pi;break;default:n=zr}n=Gc(n,Dc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dc(e,t){if(Ss=-1,Cs=0,(J&6)!==0)throw Error(d(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var s=Ir(e,e===Se?Fe:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=Es(e,s);else{t=s;var a=J;J|=2;var o=Bc();(Se!==e||Fe!==t)&&(zt=null,Rn=ye()+500,ln(e,t));do try{Cp();break}catch(c){Oc(e,c)}while(!0);Wa(),ws.current=o,J=a,be!==null?t=0:(Se=null,Fe=0,t=Ne)}if(t!==0){if(t===2&&(a=aa(e),a!==0&&(s=a,t=Eo(e,a))),t===1)throw n=gr,ln(e,0),Yt(e,s),Ye(e,ye()),n;if(t===6)Yt(e,s);else{if(a=e.current.alternate,(s&30)===0&&!kp(a)&&(t=Es(e,s),t===2&&(o=aa(e),o!==0&&(s=o,t=Eo(e,o))),t===1))throw n=gr,ln(e,0),Yt(e,s),Ye(e,ye()),n;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(d(345));case 2:cn(e,qe,zt);break;case 3:if(Yt(e,s),(s&130023424)===s&&(t=ko+500-ye(),10<t)){if(Ir(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ta(cn.bind(null,e,qe,zt),t);break}cn(e,qe,zt);break;case 4:if(Yt(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var i=31-dt(s);o=1<<i,i=t[i],i>a&&(a=i),s&=~o}if(s=a,s=ye()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Np(s/1960))-s,10<s){e.timeoutHandle=Ta(cn.bind(null,e,qe,zt),s);break}cn(e,qe,zt);break;case 5:cn(e,qe,zt);break;default:throw Error(d(329))}}}return Ye(e,ye()),e.callbackNode===n?Dc.bind(null,e):null}function Eo(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=Es(e,t),e!==2&&(t=qe,qe=n,t!==null&&Po(t)),e}function Po(e){qe===null?qe=e:qe.push.apply(qe,e)}function kp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var a=n[s],o=a.getSnapshot;a=a.value;try{if(!ut(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~No,t&=~bs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),s=1<<n;e[n]=-1,t&=~s}}function Lc(e){if((J&6)!==0)throw Error(d(327));In();var t=Ir(e,0);if((t&1)===0)return Ye(e,ye()),null;var n=Es(e,t);if(e.tag!==0&&n===2){var s=aa(e);s!==0&&(t=s,n=Eo(e,s))}if(n===1)throw n=gr,ln(e,0),Yt(e,t),Ye(e,ye()),n;if(n===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,qe,zt),Ye(e,ye()),null}function Ao(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Rn=ye()+500,es&&Ut())}}function on(e){Gt!==null&&Gt.tag===0&&(J&6)===0&&In();var t=J;J|=1;var n=lt.transition,s=ae;try{if(lt.transition=null,ae=1,e)return e()}finally{ae=s,lt.transition=n,J=t,(J&6)===0&&Ut()}}function Fo(){nt=_n.current,ue(_n)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ep(n)),be!==null)for(n=be.return;n!==null;){var s=n;switch(La(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Jr();break;case 3:Fn(),ue(Ve),ue(_e),Xa();break;case 5:Qa(s);break;case 4:Fn();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:Va(s.type._context);break;case 22:case 23:Fo()}n=n.return}if(Se=e,be=e=Qt(e.current,null),Fe=nt=t,Ne=0,gr=null,No=bs=an=0,qe=vr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],s=n.interleaved,s!==null){n.interleaved=null;var a=s.next,o=n.pending;if(o!==null){var i=o.next;o.next=a,s.next=i}n.pending=s}nn=null}return e}function Oc(e,t){do{var n=be;try{if(Wa(),ds.current=fs,us){for(var s=me.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}us=!1}if(sn=0,ke=je=me=null,ur=!1,pr=0,jo.current=null,n===null||n.return===null){Ne=1,gr=t,be=null;break}e:{var o=e,i=n.return,c=n,u=t;if(t=Fe,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var v=u,k=c,S=k.tag;if((k.mode&1)===0&&(S===0||S===11||S===15)){var j=k.alternate;j?(k.updateQueue=j.updateQueue,k.memoizedState=j.memoizedState,k.lanes=j.lanes):(k.updateQueue=null,k.memoizedState=null)}var z=dc(i);if(z!==null){z.flags&=-257,uc(z,i,c,o,t),z.mode&1&&cc(o,v,t),t=z,u=v;var M=t.updateQueue;if(M===null){var L=new Set;L.add(u),t.updateQueue=L}else M.add(u);break e}else{if((t&1)===0){cc(o,v,t),zo();break e}u=Error(d(426))}}else if(he&&c.mode&1){var we=dc(i);if(we!==null){(we.flags&65536)===0&&(we.flags|=256),uc(we,i,c,o,t),Ua(zn(u,c));break e}}o=u=zn(u,c),Ne!==4&&(Ne=2),vr===null?vr=[o]:vr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=ic(o,u,t);Rl(o,f);break e;case 1:c=u;var p=o.type,x=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&($t===null||!$t.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=lc(o,c,t);Rl(o,C);break e}}o=o.return}while(o!==null)}Hc(n)}catch(O){t=O,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Bc(){var e=ws.current;return ws.current=fs,e===null?fs:e}function zo(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Se===null||(an&268435455)===0&&(bs&268435455)===0||Yt(Se,Fe)}function Es(e,t){var n=J;J|=2;var s=Bc();(Se!==e||Fe!==t)&&(zt=null,ln(e,t));do try{Sp();break}catch(a){Oc(e,a)}while(!0);if(Wa(),J=n,ws.current=s,be!==null)throw Error(d(261));return Se=null,Fe=0,Ne}function Sp(){for(;be!==null;)Uc(be)}function Cp(){for(;be!==null&&!Xd();)Uc(be)}function Uc(e){var t=$c(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?Hc(e):be=t,jo.current=null}function Hc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=vp(n,t,nt),n!==null){be=n;return}}else{if(n=yp(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,be=null;return}}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ne===0&&(Ne=5)}function cn(e,t,n){var s=ae,a=lt.transition;try{lt.transition=null,ae=1,Ep(e,t,n,s)}finally{lt.transition=a,ae=s}return null}function Ep(e,t,n,s){do In();while(Gt!==null);if((J&6)!==0)throw Error(d(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(iu(e,o),e===Se&&(be=Se=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ns||(Ns=!0,Gc(zr,function(){return In(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=lt.transition,lt.transition=null;var i=ae;ae=1;var c=J;J|=4,jo.current=null,bp(e,n),Tc(n,e),qu(Fa),Lr=!!Aa,Fa=Aa=null,e.current=n,jp(n),Jd(),J=c,ae=i,lt.transition=o}else e.current=n;if(Ns&&(Ns=!1,Gt=e,ks=a),o=e.pendingLanes,o===0&&($t=null),tu(n.stateNode),Ye(e,ye()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],s(a.value,{componentStack:a.stack,digest:a.digest});if(js)throw js=!1,e=So,So=null,e;return(ks&1)!==0&&e.tag!==0&&In(),o=e.pendingLanes,(o&1)!==0?e===Co?yr++:(yr=0,Co=e):yr=0,Ut(),null}function In(){if(Gt!==null){var e=Fi(ks),t=lt.transition,n=ae;try{if(lt.transition=null,ae=16>e?16:e,Gt===null)var s=!1;else{if(e=Gt,Gt=null,ks=0,(J&6)!==0)throw Error(d(331));var a=J;for(J|=4,_=e.current;_!==null;){var o=_,i=o.child;if((_.flags&16)!==0){var c=o.deletions;if(c!==null){for(var u=0;u<c.length;u++){var v=c[u];for(_=v;_!==null;){var k=_;switch(k.tag){case 0:case 11:case 15:xr(8,k,o)}var S=k.child;if(S!==null)S.return=k,_=S;else for(;_!==null;){k=_;var j=k.sibling,z=k.return;if(Ec(k),k===v){_=null;break}if(j!==null){j.return=z,_=j;break}_=z}}}var M=o.alternate;if(M!==null){var L=M.child;if(L!==null){M.child=null;do{var we=L.sibling;L.sibling=null,L=we}while(L!==null)}}_=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,_=i;else e:for(;_!==null;){if(o=_,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:xr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_=f;break e}_=o.return}}var p=e.current;for(_=p;_!==null;){i=_;var x=i.child;if((i.subtreeFlags&2064)!==0&&x!==null)x.return=i,_=x;else e:for(i=p;_!==null;){if(c=_,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:ys(9,c)}}catch(O){ge(c,c.return,O)}if(c===i){_=null;break e}var C=c.sibling;if(C!==null){C.return=c.return,_=C;break e}_=c.return}}if(J=a,Ut(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Tr,e)}catch{}s=!0}return s}finally{ae=n,lt.transition=t}}return!1}function Wc(e,t,n){t=zn(n,t),t=ic(e,t,1),e=Wt(e,t,1),t=Be(),e!==null&&(Wn(e,1,t),Ye(e,t))}function ge(e,t,n){if(e.tag===3)Wc(e,e,n);else for(;t!==null;){if(t.tag===3){Wc(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&($t===null||!$t.has(s))){e=zn(n,e),e=lc(t,e,1),t=Wt(t,e,1),e=Be(),t!==null&&(Wn(t,1,e),Ye(t,e));break}}t=t.return}}function Pp(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Fe&n)===n&&(Ne===4||Ne===3&&(Fe&130023424)===Fe&&500>ye()-ko?ln(e,0):No|=n),Ye(e,t)}function Vc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Rr,Rr<<=1,(Rr&130023424)===0&&(Rr=4194304)));var n=Be();e=Pt(e,t),e!==null&&(Wn(e,t,n),Ye(e,n))}function Ap(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vc(e,n)}function Fp(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(d(314))}s!==null&&s.delete(t),Vc(e,n)}var $c;$c=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ge=!1,gp(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,he&&(t.flags&1048576)!==0&&kl(t,ns,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;gs(e,t),e=t.pendingProps;var a=Nn(t,_e.current);An(t,n),a=eo(null,t,s,e,a,n);var o=to();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(s)?(o=!0,Zr(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,qa(t),a.updater=ms,t.stateNode=a,a._reactInternals=t,io(t,s,e,n),t=po(null,t,s,!0,o,n)):(t.tag=0,he&&o&&Da(t),Oe(null,t,a,n),t=t.child),t;case 16:s=t.elementType;e:{switch(gs(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Tp(s),e=ht(s,e),a){case 0:t=uo(null,t,s,e,n);break e;case 1:t=gc(null,t,s,e,n);break e;case 11:t=pc(null,t,s,e,n);break e;case 14:t=hc(null,t,s,ht(s.type,e),n);break e}throw Error(d(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ht(s,a),uo(e,t,s,a,n);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ht(s,a),gc(e,t,s,a,n);case 3:e:{if(vc(t),e===null)throw Error(d(387));s=t.pendingProps,o=t.memoizedState,a=o.element,_l(e,t),ls(t,s,null,n);var i=t.memoizedState;if(s=i.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=zn(Error(d(423)),t),t=yc(e,t,s,n,a);break e}else if(s!==a){a=zn(Error(d(424)),t),t=yc(e,t,s,n,a);break e}else for(tt=Lt(t.stateNode.containerInfo.firstChild),et=t,he=!0,pt=null,n=zl(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),s===a){t=Ft(e,t,n);break e}Oe(e,t,s,n)}t=t.child}return t;case 5:return Ml(t),e===null&&Ba(t),s=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,za(s,a)?i=null:o!==null&&za(s,o)&&(t.flags|=32),xc(e,t),Oe(e,t,i,n),t.child;case 6:return e===null&&Ba(t),null;case 13:return wc(e,t,n);case 4:return Ya(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=En(t,null,s,n):Oe(e,t,s,n),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ht(s,a),pc(e,t,s,a,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,le(as,s._currentValue),s._currentValue=i,o!==null)if(ut(o.value,i)){if(o.children===a.children&&!Ve.current){t=Ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){i=o.child;for(var u=c.firstContext;u!==null;){if(u.context===s){if(o.tag===1){u=At(-1,n&-n),u.tag=2;var v=o.updateQueue;if(v!==null){v=v.shared;var k=v.pending;k===null?u.next=u:(u.next=k.next,k.next=u),v.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),$a(o.return,n,t),c.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(d(341));i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),$a(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Oe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,An(t,n),a=ot(a),s=s(a),t.flags|=1,Oe(e,t,s,n),t.child;case 14:return s=t.type,a=ht(s,t.pendingProps),a=ht(s.type,a),hc(e,t,s,a,n);case 15:return fc(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ht(s,a),gs(e,t),t.tag=1,$e(s)?(e=!0,Zr(t)):e=!1,An(t,n),ac(t,s,a),io(t,s,a,n),po(null,t,s,!0,e,n);case 19:return jc(e,t,n);case 22:return mc(e,t,n)}throw Error(d(156,t.tag))};function Gc(e,t){return Si(e,t)}function zp(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,s){return new zp(e,t,n,s)}function To(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tp(e){if(typeof e=="function")return To(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ue)return 11;if(e===gt)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ps(e,t,n,s,a,o){var i=2;if(s=e,typeof e=="function")To(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Pe:return dn(n.children,a,o,t);case Le:i=8,a|=8;break;case rt:return e=ct(12,n,t,a|2),e.elementType=rt,e.lanes=o,e;case Te:return e=ct(13,n,t,a),e.elementType=Te,e.lanes=o,e;case He:return e=ct(19,n,t,a),e.elementType=He,e.lanes=o,e;case xe:return As(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xe:i=10;break e;case Nt:i=9;break e;case Ue:i=11;break e;case gt:i=14;break e;case We:i=16,s=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return t=ct(i,n,t,a),t.elementType=e,t.type=s,t.lanes=o,t}function dn(e,t,n,s){return e=ct(7,e,s,t),e.lanes=n,e}function As(e,t,n,s){return e=ct(22,e,s,t),e.elementType=xe,e.lanes=n,e.stateNode={isHidden:!1},e}function _o(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function Ro(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _p(e,t,n,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Io(e,t,n,s,a,o,i,c,u){return e=new _p(e,t,n,c,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(o),e}function Rp(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function qc(e){if(!e)return Bt;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(d(171))}if(e.tag===1){var n=e.type;if($e(n))return bl(e,n,t)}return t}function Yc(e,t,n,s,a,o,i,c,u){return e=Io(n,s,!0,e,a,o,i,c,u),e.context=qc(null),n=e.current,s=Be(),a=qt(n),o=At(s,a),o.callback=t??null,Wt(n,o,a),e.current.lanes=a,Wn(e,a,s),Ye(e,s),e}function Fs(e,t,n,s){var a=t.current,o=Be(),i=qt(a);return n=qc(n),t.context===null?t.context=n:t.pendingContext=n,t=At(o,i),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Wt(a,t,i),e!==null&&(xt(e,a,i,o),is(e,a,i)),i}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mo(e,t){Qc(e,t),(e=e.alternate)&&Qc(e,t)}function Ip(){return null}var Kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Do(e){this._internalRoot=e}Ts.prototype.render=Do.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));Fs(e,t,null,null)},Ts.prototype.unmount=Do.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Fs(null,e,null,null)}),t[kt]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=_i();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&Mi(e)}};function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function Mp(e,t,n,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var v=zs(i);o.call(v)}}var i=Yc(t,s,e,0,null,!1,!1,"",Xc);return e._reactRootContainer=i,e[kt]=i.current,rr(e.nodeType===8?e.parentNode:e),on(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var c=s;s=function(){var v=zs(u);c.call(v)}}var u=Io(e,0,!1,null,null,!1,!1,"",Xc);return e._reactRootContainer=u,e[kt]=u.current,rr(e.nodeType===8?e.parentNode:e),on(function(){Fs(t,u,n,s)}),u}function Rs(e,t,n,s,a){var o=n._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var c=a;a=function(){var u=zs(i);c.call(u)}}Fs(t,i,e,a)}else i=Mp(n,t,e,a,s);return zs(i)}zi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(ia(t,n|1),Ye(t,ye()),(J&6)===0&&(Rn=ye()+500,Ut()))}break;case 13:on(function(){var s=Pt(e,1);if(s!==null){var a=Be();xt(s,e,1,a)}}),Mo(e,1)}},la=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Be();xt(t,e,134217728,n)}Mo(e,134217728)}},Ti=function(e){if(e.tag===13){var t=qt(e),n=Pt(e,t);if(n!==null){var s=Be();xt(n,e,t,s)}Mo(e,t)}},_i=function(){return ae},Ri=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}},ea=function(e,t,n){switch(t){case"input":if(Gs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var a=Xr(s);if(!a)throw Error(d(90));si(s),Gs(s,a)}}}break;case"textarea":ci(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},vi=Ao,yi=on;var Dp={usingClientEntryPoint:!1,Events:[or,bn,Xr,xi,gi,Ao]},wr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lp={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ni(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Is.isDisabled&&Is.supportsFiber)try{Tr=Is.inject(Lp),vt=Is}catch{}}return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp,Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lo(t))throw Error(d(200));return Rp(e,t,null,n)},Qe.createRoot=function(e,t){if(!Lo(e))throw Error(d(299));var n=!1,s="",a=Kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Io(e,1,!1,null,null,n,!1,s,a),e[kt]=t.current,rr(e.nodeType===8?e.parentNode:e),new Do(t)},Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=Ni(t),e=e===null?null:e.stateNode,e},Qe.flushSync=function(e){return on(e)},Qe.hydrate=function(e,t,n){if(!_s(t))throw Error(d(200));return Rs(null,e,t,!0,n)},Qe.hydrateRoot=function(e,t,n){if(!Lo(e))throw Error(d(405));var s=n!=null&&n.hydratedSources||null,a=!1,o="",i=Kc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Yc(t,null,e,1,n??null,a,!1,o,i),e[kt]=t.current,rr(e),s)for(e=0;e<s.length;e++)n=s[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ts(t)},Qe.render=function(e,t,n){if(!_s(t))throw Error(d(200));return Rs(null,e,t,!1,n)},Qe.unmountComponentAtNode=function(e){if(!_s(e))throw Error(d(40));return e._reactRootContainer?(on(function(){Rs(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Qe.unstable_batchedUpdates=Ao,Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!_s(n))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return Rs(e,t,n,!1,s)},Qe.version="18.3.1-next-f1338f8080-20240426",Qe}var ad;function Yp(){if(ad)return Uo.exports;ad=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(m){console.error(m)}}return l(),Uo.exports=qp(),Uo.exports}var od;function Qp(){if(od)return Ms;od=1;var l=Yp();return Ms.createRoot=l.createRoot,Ms.hydrateRoot=l.hydrateRoot,Ms}var Kp=Qp();const Xp=Pd(Kp);function Jp(l,m){if(l instanceof RegExp)return{keys:!1,pattern:l};var d,g,y,b,P=[],w="",E=l.split("/");for(E[0]||E.shift();y=E.shift();)d=y[0],d==="*"?(P.push(d),w+=y[1]==="?"?"(?:/(.*))?":"/(.*)"):d===":"?(g=y.indexOf("?",1),b=y.indexOf(".",1),P.push(y.substring(1,~g?g:~b?b:y.length)),w+=~g&&!~b?"(?:/([^/]+?))?":"/([^/]+?)",~b&&(w+=(~g?"?":"")+"\\"+y.substring(b))):w+="/"+y;return{keys:P,pattern:new RegExp("^"+w+(m?"(?=$|/)":"/?$"),"i")}}var Vo={exports:{}},$o={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function Zp(){if(id)return $o;id=1;var l=Ws();function m(A,B){return A===B&&(A!==0||1/A===1/B)||A!==A&&B!==B}var d=typeof Object.is=="function"?Object.is:m,g=l.useState,y=l.useEffect,b=l.useLayoutEffect,P=l.useDebugValue;function w(A,B){var V=B(),re=g({inst:{value:V,getSnapshot:B}}),Y=re[0].inst,U=re[1];return b(function(){Y.value=V,Y.getSnapshot=B,E(Y)&&U({inst:Y})},[A,V,B]),y(function(){return E(Y)&&U({inst:Y}),A(function(){E(Y)&&U({inst:Y})})},[A]),P(V),V}function E(A){var B=A.getSnapshot;A=A.value;try{var V=B();return!d(A,V)}catch{return!0}}function T(A,B){return B()}var I=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?T:w;return $o.useSyncExternalStore=l.useSyncExternalStore!==void 0?l.useSyncExternalStore:I,$o}var ld;function eh(){return ld||(ld=1,Vo.exports=Zp()),Vo.exports}var th=eh();const nh=Vp.useInsertionEffect,rh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sh=rh?D.useLayoutEffect:D.useEffect,ah=nh||sh,Fd=l=>{const m=D.useRef([l,(...d)=>m[0](...d)]).current;return ah(()=>{m[0]=l}),m[1]},oh="popstate",ni="pushState",ri="replaceState",ih="hashchange",cd=[oh,ni,ri,ih],lh=l=>{for(const m of cd)addEventListener(m,l);return()=>{for(const m of cd)removeEventListener(m,l)}},zd=(l,m)=>th.useSyncExternalStore(lh,l,m),dd=()=>location.search,ch=({ssrSearch:l}={})=>zd(dd,l!=null?()=>l:dd),ud=()=>location.pathname,dh=({ssrPath:l}={})=>zd(ud,l!=null?()=>l:ud),uh=(l,{replace:m=!1,state:d=null}={})=>history[m?ri:ni](d,"",l),ph=(l={})=>[dh(l),uh],pd=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[pd]>"u"){for(const l of[ni,ri]){const m=history[l];history[l]=function(){const d=m.apply(this,arguments),g=new Event(l);return g.arguments=arguments,dispatchEvent(g),d}}Object.defineProperty(window,pd,{value:!0})}const hh=(l,m)=>m.toLowerCase().indexOf(l.toLowerCase())?"~"+m:m.slice(l.length)||"/",Td=(l="")=>l==="/"?"":l,fh=(l,m)=>l[0]==="~"?l.slice(1):Td(m)+l,mh=(l="",m)=>hh(hd(Td(l)),hd(m)),hd=l=>{try{return decodeURI(l)}catch{return l}},_d={hook:ph,searchHook:ch,parser:Jp,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:l=>l,aroundNav:(l,m,d)=>l(m,d)},Rd=D.createContext(_d),Nr=()=>D.useContext(Rd),Id={},Md=D.createContext(Id),xh=()=>D.useContext(Md),Vs=l=>{const[m,d]=l.hook(l);return[mh(l.base,m),Fd((g,y)=>l.aroundNav(d,fh(g,l.base),y))]},gh=()=>Vs(Nr()),Dd=(l,m,d,g)=>{const{pattern:y,keys:b}=m instanceof RegExp?{keys:!1,pattern:m}:l(m||"*",g),P=y.exec(d)||[],[w,...E]=P;return w!==void 0?[!0,(()=>{const T=b!==!1?Object.fromEntries(b.map((A,B)=>[A,E[B]])):P.groups;let I={...E};return T&&Object.assign(I,T),I})(),...g?[w]:[]]:[!1,null]},vh=({children:l,...m})=>{var I,A,B;const d=Nr(),g=m.hook?_d:d;let y=g;const[b,P=m.ssrSearch??""]=((I=m.ssrPath)==null?void 0:I.split("?"))??[];b&&(m.ssrSearch=P,m.ssrPath=b),m.hrefs=m.hrefs??((A=m.hook)==null?void 0:A.hrefs),m.searchHook=m.searchHook??((B=m.hook)==null?void 0:B.searchHook);let w=D.useRef({}),E=w.current,T=E;for(let V in g){const re=V==="base"?g[V]+(m[V]??""):m[V]??g[V];E===T&&re!==T[V]&&(w.current=T={...T}),T[V]=re,(re!==g[V]||re!==y[V])&&(y=T)}return D.createElement(Rd.Provider,{value:y,children:l})},fd=({children:l,component:m},d)=>m?D.createElement(m,{params:d}):typeof l=="function"?l(d):l,yh=l=>{let m=D.useRef(Id);const d=m.current;return m.current=Object.keys(l).length!==Object.keys(d).length||Object.entries(l).some(([g,y])=>y!==d[g])?l:d},De=({path:l,nest:m,match:d,...g})=>{const y=Nr(),[b]=Vs(y),[P,w,E]=d??Dd(y.parser,l,b,m),T=yh({...xh(),...w});if(!P)return null;const I=E?D.createElement(vh,{base:E},fd(g,T)):fd(g,T);return D.createElement(Md.Provider,{value:T,children:I})},ne=D.forwardRef((l,m)=>{const d=Nr(),[g,y]=Vs(d),{to:b="",href:P=b,onClick:w,asChild:E,children:T,className:I,replace:A,state:B,transition:V,...re}=l,Y=Fd(oe=>{oe.ctrlKey||oe.metaKey||oe.altKey||oe.shiftKey||oe.button!==0||(w==null||w(oe),oe.defaultPrevented||(oe.preventDefault(),y(P,l)))}),U=d.hrefs(P[0]==="~"?P.slice(1):d.base+P,d);return E&&D.isValidElement(T)?D.cloneElement(T,{onClick:Y,href:U}):D.createElement("a",{...re,onClick:Y,href:U,className:I!=null&&I.call?I(g===P):I,children:T,ref:m})}),Ld=l=>Array.isArray(l)?l.flatMap(m=>Ld(m&&m.type===D.Fragment?m.props.children:m)):[l],wh=({children:l,location:m})=>{const d=Nr(),[g]=Vs(d);for(const y of Ld(l)){let b=0;if(D.isValidElement(y)&&(b=Dd(d.parser,y.props.path,m||g,y.props.nest))[0])return D.cloneElement(y,{match:b})}return null},Od=D.createContext({theme:"light",setTheme:()=>{}});function bh({children:l,defaultTheme:m="light"}){const[d,g]=D.useState(m);return D.useEffect(()=>{document.documentElement.classList.toggle("dark",d==="dark")},[d]),r.jsx(Od.Provider,{value:{theme:d,setTheme:g},children:l})}const jh=()=>D.useContext(Od);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bd=(...l)=>l.filter((m,d,g)=>!!m&&m.trim()!==""&&g.indexOf(m)===d).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=D.forwardRef(({color:l="currentColor",size:m=24,strokeWidth:d=2,absoluteStrokeWidth:g,className:y="",children:b,iconNode:P,...w},E)=>D.createElement("svg",{ref:E,...kh,width:m,height:m,stroke:l,strokeWidth:g?Number(d)*24/Number(m):d,className:Bd("lucide",y),...w},[...P.map(([T,I])=>D.createElement(T,I)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(l,m)=>{const d=D.forwardRef(({className:g,...y},b)=>D.createElement(Sh,{ref:b,iconNode:m,className:Bd(`lucide-${Nh(l)}`,g),...y}));return d.displayName=`${l}`,d};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=ce("Airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=ce("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=ce("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=ce("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=ce("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=ce("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=ce("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=ce("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=ce("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=ce("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=ce("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=ce("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=ce("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=ce("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=ce("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=ce("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=ce("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=ce("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=ce("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=ce("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=ce("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=ce("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=ce("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=ce("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=ce("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Dh(){return r.jsxs("div",{className:"bg-synth-accent text-white text-center text-[13px] font-medium py-2.5 px-5 tracking-[0.01em]",children:[r.jsx("span",{children:"Synth is coming — join the waitlist ."}),r.jsxs("a",{href:"#waitlist",className:"underline underline-offset-[2px] ml-2 opacity-85 hover:opacity-100 transition-opacity inline-flex items-center gap-1",children:["Reserve your spot ",r.jsx(kr,{className:"w-3 h-3"})]})]})}const md=[{label:"Marketing",desc:"Campaigns, content, and creative — on autopilot",icon:"📈",href:"/solutions/marketing"},{label:"Sales",desc:"Your pipeline, researched and ready before you wake up. Increase revenue",icon:"🤝",href:"/solutions/sales"},{label:"Finance",desc:"Analysis that used to take your team a week",icon:"💹",href:"/solutions/finance"},{label:"Product",desc:"Strategy, roadmap, discovery, onboarding & customer support ",icon:"🛍️",href:"/solutions/product"},{label:"Executive Workflow",desc:"Plans your day. Handles your tasks. Learns your life",icon:"🙋",href:"/solutions/personal"},{label:"Healthcare Admin",desc:"Claims, denials, scheduling & more",icon:"🏥",href:"/solutions/healthcare"}];function Lh(){const[l,m]=D.useState(!1),[d,g]=D.useState(!1),[y,b]=D.useState(!1),[P,w]=D.useState(!1),E=D.useRef(null),T=D.useRef(null),[I]=gh(),{theme:A,setTheme:B}=jh();return D.useEffect(()=>{const V=()=>w(window.scrollY>20);return window.addEventListener("scroll",V),()=>window.removeEventListener("scroll",V)},[]),D.useEffect(()=>{const V=re=>{E.current&&!E.current.contains(re.target)&&m(!1),T.current&&!T.current.contains(re.target)&&g(!1)};return document.addEventListener("mousedown",V),()=>document.removeEventListener("mousedown",V)},[]),D.useEffect(()=>{b(!1),m(!1),g(!1)},[I]),r.jsxs("nav",{className:`sticky top-0 z-50 transition-all duration-300 ${P?"bg-synth-bg/90 backdrop-blur-[20px] border-b border-synth-border":"bg-transparent"}`,children:[r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"flex items-center justify-between h-[60px]",children:[r.jsx("div",{className:"flex items-center gap-3",children:r.jsxs(ne,{href:"/",className:"font-serif text-[24px] text-synth-text-1 tracking-[-0.3px] flex-shrink-0 flex items-center gap-2",children:[r.jsx("img",{src:"/logo.png",alt:"Synth logo",className:"h-[2.5rem] w-[2.5rem] object-contain"}),r.jsx("em",{children:"synth"})]})}),r.jsxs("div",{className:"hidden lg:flex items-center gap-0.5 flex-1 px-8",children:[r.jsxs("div",{className:"relative",ref:E,children:[r.jsxs("button",{onClick:()=>m(!l),className:`flex items-center gap-1 px-3 py-1.5 rounded-md text-[14px] font-normal transition-colors ${l?"text-synth-text-1 bg-black/[0.04]":"text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04]"}`,children:["Solutions",r.jsx(ei,{className:`w-3.5 h-3.5 transition-transform duration-200 ${l?"rotate-180":""}`})]}),l&&r.jsx("div",{className:"absolute top-[calc(100%+8px)] left-0 bg-synth-surface border border-synth-border rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.04)] min-w-[560px] p-3 z-50 animate-fade-in",children:r.jsx("div",{className:"grid grid-cols-2 gap-0.5",children:md.map(V=>r.jsxs(ne,{href:V.href,className:"flex items-start gap-3 p-3 rounded-[10px] hover:bg-synth-surface-2 transition-colors",onClick:()=>m(!1),children:[r.jsx("div",{className:"w-9 h-9 rounded-md flex items-center justify-center text-[17px] bg-synth-accent-light flex-shrink-0",children:V.icon}),r.jsxs("div",{children:[r.jsx("div",{className:"text-[14px] font-medium text-synth-text-1",children:V.label}),r.jsx("div",{className:"text-[12px] text-synth-text-3 leading-[1.4]",children:V.desc})]})]},V.label))})})]}),r.jsx(ne,{href:"/pages/feature",className:"px-3 py-1.5 rounded-md text-[14px] font-normal text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04] transition-colors",children:"Features"}),r.jsxs("div",{className:"relative",ref:T,children:[r.jsxs("button",{onClick:()=>g(!d),className:`flex items-center gap-1 px-3 py-1.5 rounded-md text-[14px] font-normal transition-colors ${d?"text-synth-text-1 bg-black/[0.04]":"text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04]"}`,children:["Resources",r.jsx(ei,{className:`w-3.5 h-3.5 transition-transform duration-200 ${d?"rotate-180":""}`})]}),d&&r.jsx("div",{className:"absolute top-[calc(100%+8px)] left-0 bg-synth-surface border border-synth-border rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.04)] min-w-[200px] p-3 z-50 animate-fade-in",children:r.jsxs("div",{className:"mb-2 px-1",children:[r.jsx("div",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-2",children:"Compare"}),r.jsx(ne,{href:"/compare/vsChatgpt",className:"block px-3 py-2 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",onClick:()=>g(!1),children:"vs ChatGPT"}),r.jsx(ne,{href:"/compare/vsOpenclaw",className:"block px-3 py-2 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",onClick:()=>g(!1),children:"vs Openclaw"}),r.jsx(ne,{href:"/compare/vsTrixta",className:"block px-3 py-2 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",onClick:()=>g(!1),children:"vs Trixta"})]})})]}),r.jsx(ne,{href:"/pricing",className:"px-3 py-1.5 rounded-md text-[14px] font-normal text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04] transition-colors",children:"Pricing"}),r.jsx("a",{href:"mailto:hello@synthai.world",className:"px-3 py-1.5 rounded-md text-[14px] font-normal text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04] transition-colors",children:"Enterprise"})]}),r.jsxs("div",{className:"hidden lg:flex items-center gap-3 flex-shrink-0",children:[r.jsx("a",{href:"mailto:hello@synthai.world",className:"text-[14px] font-medium text-synth-text-2 px-3.5 py-[7px] rounded-md hover:bg-black/[0.05] hover:text-synth-text-1 transition-all border border-transparent",children:"Contact us"}),r.jsx(ne,{href:"/#waitlist",className:"text-[14px] font-medium text-white px-[18px] py-2 rounded-full bg-synth-text-1 hover:bg-[#2A2835] transition-colors",children:"Join waitlist"}),r.jsx("button",{type:"button",onClick:()=>B(A==="light"?"dark":"light"),className:"px-4 py-2 rounded-full bg-slate-700 text-white text-[14px] font-medium hover:bg-slate-600 transition-colors",children:A==="light"?"Dark mode":"Light mode"})]}),r.jsx("button",{className:"lg:hidden p-2",onClick:()=>b(!y),children:y?r.jsx(Mh,{className:"w-5 h-5"}):r.jsx(zh,{className:"w-5 h-5"})})]})}),y&&r.jsxs("div",{className:"lg:hidden bg-synth-surface border-t border-synth-border px-4 py-4 space-y-1 shadow-lg",children:[r.jsx("div",{className:"text-[11px] font-semibold uppercase tracking-[1.5px] text-synth-text-3 mb-2 px-3",children:"Solutions"}),md.map(V=>r.jsxs(ne,{href:V.href,className:"flex items-center gap-3 px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:[r.jsx("span",{className:"text-[16px]",children:V.icon}),V.label]},V.label)),r.jsx("div",{className:"border-t border-synth-border my-2"}),r.jsx(ne,{href:"/pages/feature",className:"block px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:"Features"}),r.jsx(ne,{href:"/pricing",className:"block px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:"Pricing"}),r.jsx("a",{href:"mailto:hello@synth.ai",className:"block px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:"Enterprise"}),r.jsxs("div",{className:"border-t border-synth-border my-2 pt-2",children:[r.jsx("a",{href:"mailto:hello@synthai.world",className:"block w-full text-left px-3 py-2.5 text-[14px] text-synth-text-2",children:"Contact us"}),r.jsx(ne,{href:"/#waitlist",className:"block w-full text-center mt-2 text-[14px] font-medium text-white px-4 py-2.5 rounded-full bg-synth-text-1",children:"Join waitlist"})]})]})]})}const Oh=[{label:"Marketing",href:"/solutions/marketing"},{label:"Sales",href:"/solutions/sales"},{label:"Finance",href:"/solutions/finance"},{label:"Product",href:"/solutions/product"},{label:"Executive Workflow",href:"/solutions/personal"},{label:"Healthcare Admin",href:"/solutions/healthcare"}],Bh=[{label:"vs. Openclaw",href:"/compare/vsOpenclaw"},{label:"vs. ChatGPT",href:"/compare/vsChatgpt"},{label:"vs. Trixta",href:"/compare/vsTrixta"}],Uh=[{label:"Features",href:"/pages/feature"},{label:"Pricing",href:"/pricing"},{label:"API",href:"/api-docs"},{label:"Custom MCPs",href:"/mcp"}],Hh=[{label:"Terms of Service",href:"/terms"},{label:"POPIA Compliance",href:"/data-processing"},{label:"Data Processing",href:"/data-processing"}];function Wh(){return r.jsx("footer",{className:"border-t border-synth-border bg-synth-surface",children:r.jsxs("div",{className:"wrap py-14 mx-auto max-w-7xl px-6",children:[r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-[1.8fr_repeat(4,1fr)] gap-8 mb-10",children:[r.jsxs("div",{className:"col-span-2 md:col-span-1",children:[r.jsxs(ne,{href:"/",className:"font-serif text-[22px] text-synth-text-1 tracking-[-0.3px] font-medium",children:["Synth",r.jsx("span",{className:"text-indigo-600",children:"AI"})]}),r.jsx("p",{className:"text-[13px] text-synth-text-3 leading-[1.65] mt-2 max-w-[200px]",children:"Bridging the GAP between thinking and doing(execution)."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Solutions"}),r.jsx("ul",{className:"space-y-2",children:Oh.map(l=>r.jsx("li",{children:r.jsx(ne,{href:l.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:l.label})},l.label))})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Product"}),r.jsx("ul",{className:"space-y-2",children:Uh.map(l=>r.jsx("li",{children:r.jsx(ne,{href:l.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:l.label})},l.label))})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Compare"}),r.jsx("ul",{className:"space-y-2",children:Bh.map(l=>r.jsx("li",{children:r.jsx(ne,{href:l.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:l.label})},l.label))})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Legal"}),r.jsx("ul",{className:"space-y-2",children:Hh.map(l=>r.jsx("li",{children:r.jsx(ne,{href:l.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:l.label})},l.label))})]})]}),r.jsxs("div",{className:"border-t border-synth-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3",children:[r.jsx("p",{className:"text-[12px] text-synth-text-3",children:"© 2026 Synth AI · hello@synthai.world"}),r.jsx("div",{className:"flex gap-3",children:["LinkedIn"].map(l=>r.jsx("a",{href:"#",className:"text-[12px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:l},l))})]})]})})}const xd=["Sales","Marketing","Finance","Product","Executive Workflow","Healthcare Admin"],gd=["#1E3A8A","#2563EB","#93C5FD","#818CF8"],Vh=95,vd=140,$h=900,yd=.012,wd=.94;function Gh(l){const m=D.useRef(null),d=D.useRef([]),g=D.useRef({x:0,y:0,active:!1}),y=D.useRef();return D.useEffect(()=>{const b=m.current,P=l.current;if(!b||!P)return;const w=window.matchMedia("(prefers-reduced-motion: reduce)").matches,E=b.getContext("2d");if(!E)return;const T=(U,oe)=>{d.current=Array.from({length:Vh},()=>{const q=Math.random()*U,ze=Math.random()*oe,ve=.6+Math.random()*1.4;return{x:q,y:ze,homeX:q,homeY:ze,vx:0,vy:0,mass:ve,size:1.2+1/ve*1.6,color:gd[Math.floor(Math.random()*gd.length)],driftPhase:Math.random()*Math.PI*2,driftSpeed:.15+Math.random()*.25}})},I=()=>{const U=P.getBoundingClientRect();b.width=U.width*window.devicePixelRatio,b.height=U.height*window.devicePixelRatio,b.style.width=`${U.width}px`,b.style.height=`${U.height}px`,E.setTransform(1,0,0,1,0,0),E.scale(window.devicePixelRatio,window.devicePixelRatio),T(U.width,U.height)};I(),window.addEventListener("resize",I);const A=(U,oe)=>{const q=P.getBoundingClientRect();g.current={x:U-q.left,y:oe-q.top,active:!0}},B=U=>A(U.clientX,U.clientY),V=U=>{U.touches[0]&&A(U.touches[0].clientX,U.touches[0].clientY)},re=()=>{g.current.active=!1};P.addEventListener("mousemove",B),P.addEventListener("touchmove",V),P.addEventListener("mouseleave",re),P.addEventListener("touchend",re);const Y=()=>{const U=P.getBoundingClientRect();E.clearRect(0,0,U.width,U.height);const oe=g.current;for(const q of d.current){if(!w){q.driftPhase+=.01*q.driftSpeed;const ze=Math.cos(q.driftPhase)*.15,ve=Math.sin(q.driftPhase*1.3)*.15,Ke=(q.homeX-q.x)*yd,Ee=(q.homeY-q.y)*yd;let Pe=Ke+ze,Le=Ee+ve;if(oe.active){const rt=q.x-oe.x,Xe=q.y-oe.y,Nt=rt*rt+Xe*Xe,Ue=Math.sqrt(Nt)||.001;if(Ue<vd){const Te=1-Ue/vd,He=$h*Te*Te/(q.mass*Ue);Pe+=rt*He*.016,Le+=Xe*He*.016}}q.vx=(q.vx+Pe/q.mass)*wd,q.vy=(q.vy+Le/q.mass)*wd,q.x+=q.vx,q.y+=q.vy}E.beginPath(),E.arc(q.x,q.y,q.size,0,Math.PI*2),E.fillStyle=q.color,E.globalAlpha=.65,E.shadowColor=q.color,E.shadowBlur=6,E.fill()}E.globalAlpha=1,E.shadowBlur=0,y.current=requestAnimationFrame(Y)};return y.current=requestAnimationFrame(Y),()=>{window.removeEventListener("resize",I),P.removeEventListener("mousemove",B),P.removeEventListener("touchmove",V),P.removeEventListener("mouseleave",re),P.removeEventListener("touchend",re),y.current&&cancelAnimationFrame(y.current)}},[l]),m}function qh(){const l=D.useRef(null),m=Gh(l),[d,g]=D.useState(""),[y,b]=D.useState(!1),[P,w]=D.useState(null);D.useEffect(()=>{fetch("/.netlify/functions/waitlist-count").then(T=>T.json()).then(T=>w(T.count)).catch(()=>w(null))},[]);const E=T=>{T.preventDefault(),d.trim()&&fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({"form-name":"waitlist",email:d.trim()}).toString()}).then(()=>{b(!0),g(""),P!==null&&w(I=>(I??0)+1),setTimeout(()=>b(!1),4500)}).catch(I=>console.error("Form submission error:",I))};return r.jsxs("section",{ref:l,className:"relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",backgroundSize:"28px 28px",maskImage:"radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",WebkitMaskImage:"radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)"}}),r.jsx("canvas",{ref:m,className:"absolute inset-0 pointer-events-none z-[1]"}),r.jsx("div",{className:"wrap relative z-10",children:r.jsxs("div",{className:"text-center max-w-[760px] mx-auto",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 bg-synth-accent-light border border-synth-accent/20 text-synth-accent text-[13px] font-medium rounded-full px-4 py-1.5 mb-9",children:[r.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-synth-accent animate-blink"}),"Private Beta"]}),r.jsxs("h1",{className:"font-serif text-[clamp(40px,6vw,72px)] font-normal leading-[1.14] tracking-[-1.5px] text-synth-text-1 mb-10",children:["Meet Synth.",r.jsx("br",{}),"Secure, always-on autonomous agents-",r.jsx("br",{}),r.jsx("em",{className:"text-synth-accent not-italic",children:"for your business"})]}),r.jsx("div",{className:"flex justify-center items-center flex-wrap gap-x-3 gap-y-2 mb-12 text-[13px] font-medium text-synth-text-3 tracking-wide",children:xd.map((T,I)=>r.jsxs("span",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"hover:text-synth-accent transition-colors cursor-default",children:T}),I<xd.length-1&&r.jsx("span",{className:"w-1 h-1 rounded-full bg-synth-border-med"})]},T))}),r.jsxs("form",{name:"waitlist",method:"POST","data-netlify":"true",onSubmit:E,className:"grid grid-cols-2 gap-2 max-w-[420px] mx-auto mb-3.5",children:[r.jsx("input",{type:"hidden",name:"form-name",value:"waitlist"}),r.jsx("input",{type:"hidden",name:"bot-field"}),r.jsx("input",{type:"email",name:"email",value:d,onChange:T=>g(T.target.value),placeholder:"Enter your work email",required:!0,autoComplete:"email",className:"w-full bg-synth-surface border border-synth-border-med rounded-full px-5 py-3 text-[15px] text-synth-text-1 outline-none shadow-sm transition-all focus:border-synth-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] placeholder:text-synth-text-3"}),r.jsx("button",{type:"submit",disabled:y,className:`w-full text-white rounded-full px-4 py-3 text-[15px] font-medium whitespace-nowrap transition-colors ${y?"bg-synth-green":"bg-synth-text-1 hover:bg-[#2A2835]"}`,children:y?"✓ You're on the list!":"Get early access"})]}),r.jsxs("p",{className:"text-[13px] text-synth-text-3",children:[P!==null?r.jsxs("strong",{className:"text-synth-text-2 font-medium",children:[P.toLocaleString()," people"]}):r.jsx("strong",{className:"text-synth-text-2 font-medium",children:"2,272 people"})," ","already on the waitlist ·"," "]})]})})]})}const Yh=[{time:"5:00 AM",title:"Review marketing campaign draft — Q3 launch",detail:"Pulled last quarter's top performers, drafted 3 creative routes.",tag:"marketing"},{time:"10:00 AM",title:"Sales enablement — competitor battle cards",detail:"Acme dropped a new pricing page — comparison ready for your 10 AM.",tag:"sales"},{time:"1:00 PM",title:"Product sync — roadmap update",detail:"Correlated 400 support tickets, flagged 3 requested features.",tag:"product"},{time:"4:00 PM",title:"Finance report — weekly cash flow",detail:"Spotted an upcoming cash gap, drafted a recommendation.",tag:"finance"}],Qh=[{icon:Rh,title:"Negative comments spike — @synthai on X",desc:"Mentions up 340% in 2 hours. Response thread drafted, engineering alerted.",tag:"brand risk",primary:"Approve response",secondary:"See thread"},{icon:Ih,title:"High-intent leads — competitor dissatisfaction on Instagram",desc:"7 users complained about a rival's product. 5 match your ICP, outreach drafted.",tag:"sales",primary:"Send messages",secondary:"Ignore"},{icon:Bs,title:"RFP deadline — 90 minutes remaining",desc:"Acme RFP is 80% complete. Missing compliance docs pulled in.",tag:"deadline",primary:"Open draft",secondary:"Snooze 30 min"},{icon:Ch,title:"Top 3 TikTok hooks this week",desc:"Best-performing hooks in your niche, ready to adapt for launch video.",tag:"marketing",primary:"View hooks",secondary:"Send to editor"}],Kh=[{from:"synth",text:"Acme just launched pricing 20% below yours at the low end. Their new blog post targets your top 3 keywords — I've drafted a response article. Sentiment on your last release is 89% positive."},{from:"user",text:"What's on my plate today, anything before the all-hands?"},{from:"user",text:"Also pull the latest NPS scores into the board deck."},{from:"synth",text:"Done — NPS is in the deck with 4 key drivers highlighted. Your 10 AM competitor update is ready when you are."}],Ls=[{key:"glance",eyebrow:"BUSINESS · OVERVIEW",title:"Good morning."},{key:"alerts",eyebrow:"BUSINESS · ALERTS",title:"Heads up."},{key:"ask",eyebrow:"BUSINESS · ASK",title:"Ask it anything."}];function Xo({children:l,eyebrow:m,title:d,ctaLabel:g}){return r.jsxs("div",{className:"flex h-full flex-col rounded-[28px] bg-white p-7 shadow-[0_30px_80px_rgba(10,17,30,0.35)]",children:[r.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 pb-4",children:[r.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-[1.5px] text-slate-400",children:m}),r.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-[1.5px] text-slate-400",children:"Mon · 06:15"})]}),r.jsxs("div",{className:"mt-4 flex items-center gap-2",children:[r.jsx("span",{className:"rounded-md bg-[#0A111E] px-2 py-1 text-[11px] font-bold text-white",children:"Synth OS"}),r.jsx("span",{className:"text-[13px] text-slate-400",children:"Daily Briefing"})]}),r.jsx("h3",{className:"mt-5 text-[26px] font-semibold tracking-[-0.02em] text-slate-900",children:d}),r.jsx("div",{className:"mt-4 flex-1 space-y-4 overflow-y-auto pr-1",children:l}),r.jsxs("button",{className:"mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0A111E] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]",children:[g,r.jsx(kr,{className:"h-4 w-4"})]})]})}function Xh(){const[l,m]=D.useState(0),d=D.useRef(null),g=()=>m(w=>Math.min(w+1,Ls.length-1)),y=()=>m(w=>Math.max(w-1,0)),b=w=>{d.current=w.touches[0].clientX},P=w=>{if(d.current===null)return;const E=w.changedTouches[0].clientX-d.current;E<-50&&g(),E>50&&y(),d.current=null};return r.jsxs("section",{className:"relative overflow-hidden py-28",style:{background:"linear-gradient(180deg, #0A111E 0%, #162032 16%, #2B384E 30%, #4A5A73 44%, #7D818A 56%, #A88E81 66%, #D88A58 76%, #E87328 86%, #F25C05 94%, #FA7D00 100%)"},children:[r.jsxs("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-40",children:[r.jsx("svg",{viewBox:"0 0 1440 160",preserveAspectRatio:"none",className:"h-full w-full",children:r.jsx("polygon",{points:"0,120 120,70 260,110 380,55 520,100 660,40 820,95 980,60 1120,105 1260,50 1440,90 1440,160 0,160",fill:"#1C1614"})}),r.jsx("div",{className:"absolute inset-x-0 bottom-0 h-10",style:{background:"linear-gradient(180deg, #1C1614 0%, #3A2518 100%)"}}),r.jsx("div",{className:"absolute inset-x-0 bottom-0 h-10 opacity-40",style:{backgroundImage:"repeating-linear-gradient(90deg, rgba(250,125,0,0.25) 0px, rgba(250,125,0,0.25) 2px, transparent 2px, transparent 40px)"}})]}),r.jsxs("div",{className:"wrap relative z-10",children:[r.jsxs("div",{className:"mb-16",children:[r.jsx("p",{className:"text-[12px] font-semibold uppercase tracking-[2px] text-amber-100/80 mb-4",children:"YOUR WORK, AUTONOMOUSLY HANDLED"}),r.jsx("h2",{className:"font-display text-[clamp(38px,4.8vw,56px)] font-semibold tracking-[-0.04em] text-white max-w-[780px]",children:"Synth briefs you every morning"}),r.jsx("p",{className:"mt-5 max-w-3xl text-[17px] text-white/70 leading-[1.8]",children:"Before your team logs in, Synth has already scanned your tools, flagged threats and opportunities, and prepared a prioritized plan — swipe through what it found."})]}),r.jsxs("div",{className:"grid gap-10 lg:grid-cols-[1fr_auto] items-start",children:[r.jsx("div",{className:"relative mx-auto h-[560px] w-full max-w-[480px]",onTouchStart:b,onTouchEnd:P,children:Ls.map((w,E)=>{const T=E-l;let I={zIndex:30-Math.abs(T)};return T===0?I={...I,transform:"translate(0px, 0px) scale(1)",opacity:1,zIndex:30}:T===1?I={...I,transform:"translate(28px, -28px) scale(0.95)",opacity:.9,zIndex:20}:T===2?I={...I,transform:"translate(52px, -52px) scale(0.9)",opacity:.6,zIndex:10}:T<0?I={...I,transform:"translate(-140%, 0px) scale(0.95)",opacity:0,zIndex:0}:I={...I,transform:"translate(80px, -80px) scale(0.85)",opacity:0,zIndex:0},r.jsxs("div",{className:"absolute inset-0 transition-all duration-500 ease-out",style:I,children:[w.key==="glance"&&r.jsxs(Xo,{eyebrow:w.eyebrow,title:w.title,ctaLabel:"Open full briefing",children:[r.jsx("p",{className:"text-[14px] leading-[1.7] text-slate-500",children:"Monitored competitors, drafted campaigns, correlated feedback, flagged a cash-flow gap. One item needs your decision now."}),Yh.map(A=>r.jsxs("div",{className:"border-t border-slate-100 pt-3 first:border-t-0 first:pt-0",children:[r.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-wide text-slate-400",children:A.time}),r.jsx("p",{className:"mt-1 text-[15px] font-semibold text-slate-900",children:A.title}),r.jsxs("p",{className:"mt-1 flex items-center gap-2 text-[13px] text-slate-500",children:[r.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-[#F25C05]"}),A.detail]})]},A.time))]}),w.key==="alerts"&&r.jsxs(Xo,{eyebrow:w.eyebrow,title:w.title,ctaLabel:"Resolve with Synth",children:[r.jsx("p",{className:"text-[14px] leading-[1.7] text-slate-500",children:"When a competitor moves or a deadline slips, Synth pushes it here — drafted and ready to approve."}),Qh.map(A=>{const B=A.icon;return r.jsxs("div",{className:"flex gap-3 border-t border-slate-100 pt-3 first:border-t-0 first:pt-0",children:[r.jsx("div",{className:"mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange-50 text-[#F25C05]",children:r.jsx(B,{className:"h-4 w-4"})}),r.jsxs("div",{className:"flex-1",children:[r.jsx("p",{className:"text-[15px] font-semibold text-slate-900",children:A.title}),r.jsx("p",{className:"mt-1 text-[13px] text-slate-500",children:A.desc}),r.jsx("span",{className:"mt-1 inline-block text-[11px] font-semibold uppercase tracking-wide text-slate-400",children:A.tag}),r.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[r.jsx("button",{className:"rounded-full bg-[#0A111E] px-3 py-1.5 text-[12px] font-semibold text-white transition-transform hover:scale-[1.03]",children:A.primary}),r.jsx("button",{className:"rounded-full border border-slate-200 px-3 py-1.5 text-[12px] font-semibold text-slate-600 transition-colors hover:border-slate-400",children:A.secondary})]})]})]},A.title)})]}),w.key==="ask"&&r.jsxs(Xo,{eyebrow:w.eyebrow,title:w.title,ctaLabel:"Chat with Synth",children:[r.jsx("p",{className:"text-[14px] leading-[1.7] text-slate-500",children:"Beyond the daily plan, Synth handles anything you throw at it — research, drafting, analysis."}),r.jsx("div",{className:"space-y-3",children:Kh.map((A,B)=>r.jsx("div",{className:`rounded-2xl px-4 py-3 text-[13px] leading-[1.6] ${A.from==="synth"?"bg-slate-50 text-slate-600":"ml-auto max-w-[85%] bg-[#0A111E] text-white"}`,children:A.text},B))})]})]},w.key)})}),r.jsx("div",{className:"flex flex-row items-center justify-center gap-4 lg:flex-col lg:items-end lg:gap-5 lg:pt-10",children:Ls.map((w,E)=>r.jsxs("button",{onClick:()=>m(E),className:"flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[2px] transition-colors",style:{color:E===l?"#FFFFFF":"rgba(255,255,255,0.4)"},children:[r.jsx("span",{className:"h-1.5 w-1.5 rounded-full",style:{background:E===l?"#FA7D00":"rgba(255,255,255,0.4)"}}),w.title.replace(".","")]},w.key))})]}),r.jsxs("div",{className:"mt-10 flex flex-wrap items-center justify-between gap-4",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("button",{onClick:y,disabled:l===0,className:"grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 disabled:opacity-30",children:r.jsx(Eh,{className:"h-4 w-4"})}),r.jsx("button",{onClick:g,disabled:l===Ls.length-1,className:"grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 disabled:opacity-30",children:r.jsx(Ph,{className:"h-4 w-4"})})]}),r.jsxs(ne,{href:"/#waitlist",className:"inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A111E] transition-transform hover:scale-105",children:["Explore Synth",r.jsx(kr,{className:"h-4 w-4"})]})]})]})]})}const Jh=[{icon:"📈",title:"Marketing",desc:"Your team has the ideas. Synth handles the execution. Campaigns, content, competitor research, and creative assets — produced at a pace your headcount can't match.",color:"#FFECE8",image:"/marketing.png",href:"/solutions/marketing"},{icon:"🤝",title:"Sales",desc:"Stop researching. Start selling. Synth enriches leads, writes personalised outreach, preps your deal briefs, and keeps your CRM clean — so you spend your day closing, not preparing.",color:"#E6F4FF",image:"/sales.png",href:"/solutions/sales"},{icon:"💹",title:"Finance",desc:"One analyst. Hundreds of companies. Synth builds financial models, collects live market data, researches firms in parallel, and delivers investment-ready outputs — at a scale no team can replicate manually.",color:"#F0FFF4",image:"/finance.png",href:"/solutions/finance"},{icon:"🧩",title:"Product",desc:"The foundations that used to take weeks — strategy, roadmaps, positioning, market segmentation, competitive maps — researched, drafted, and kept current by Synth. So your team can focus on the decisions only humans can make.",color:"#EEF2FF",image:"/product.png",href:"/solutions/product"},{icon:"🙋",title:"executive workflow",desc:"Most AI waits to be asked. Synth plans your morning before you wake up, flags what needs you before it becomes urgent, and handles the rest — in WhatsApp, where you already are.",color:"#FFF7ED",image:"/personal.png",href:"/solutions/personal"},{icon:"🏥",title:"Healthcare Admin",desc:"Resolve claim denials, apply insurance codes, manage scheduling, and send refill reminders — automating the most painful admin work in healthcare.",color:"#E8FAFF",image:"/healthcare.png",href:"/solutions/healthcare"}];function Zh(){return r.jsx("section",{className:"relative py-24 border-t border-synth-border",style:{backgroundColor:"#F4F6F8"},children:r.jsxs("div",{className:"wrap relative z-10",children:[r.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-12",children:[r.jsx("p",{className:"text-[13px] uppercase tracking-[2px] text-synth-text-3 mb-4",children:"Built for every business function"}),r.jsx("h2",{className:"font-display text-[clamp(42px,5vw,64px)] font-semibold tracking-[-0.04em] text-synth-text-1 mb-4",children:"One platform, six business wings — alive and ready."}),r.jsx("p",{className:"text-[16px] text-synth-text-2 max-w-[720px] mx-auto leading-[1.8]",children:"Beautifully crafted workflows, vibrant product imagery, and a fast onboarding path that makes every function feel polished, confident, and unmistakably high-end."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",children:Jh.map(l=>r.jsxs(ne,{href:l.href,className:"group relative overflow-hidden rounded-[32px] border border-synth-border bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_110px_rgba(15,23,42,0.12)]",style:{backgroundColor:l.color},children:[r.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 rounded-full opacity-50 blur-[34px]",style:{backgroundColor:l.color}}),r.jsxs("div",{className:"relative z-10",children:[r.jsx("div",{className:"mb-5 rounded-[28px] overflow-hidden border border-white/80 bg-white shadow-sm",children:r.jsx("img",{src:l.image,alt:l.title,className:"w-full h-[220px] object-contain bg-transparent"})}),r.jsx("h3",{className:"text-[20px] font-semibold text-synth-text-1 mb-3 font-display",children:l.title}),r.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.78] mb-6",children:l.desc}),r.jsxs("div",{className:"inline-flex items-center gap-2 text-[14px] font-semibold text-synth-accent",children:[r.jsxs("span",{children:["Explore ",l.title]}),r.jsx(kr,{className:"w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"})]})]})]},l.title))})]})})}const ef=[{name:"WhatsApp",file:"WhatsApp.jpg"},{name:"YouTube",file:"Youtube.png"},{name:"GitHub",file:"Github.jpg"},{name:"Xero",file:"Xero.png"},{name:"Instagram",file:"instagram.jpg"},{name:"Asana",file:"asana.png"},{name:"Slack",file:"slack.png"},{name:"Figma",file:"Figma.png"},{name:"PayPal",file:"Paypal.png"},{name:"Shopify",file:"Shopify.jpg"},{name:"Gmail",file:"gmail.jpg"},{name:"Google Meet",file:"Google meet.jpg"},{name:"Google Calendar",file:"google calendar.png"},{name:"Google Drive",file:"google drive.png"},{name:"Dropbox",file:"Dropbox.png"},{name:"HubSpot",file:"hubspot.png"},{name:"Meta Ads Manager",file:"meta ads manager.png"},{name:"Microsoft 365",file:"microsoft365.jpg"},{name:"Notion",file:"notion.png"},{name:"Sage",file:"sage.png"},{name:"Salesforce",file:"salesforce.png"},{name:"SARS eFiling",file:"sars efiling.png"},{name:"Stripe",file:"stripe.png"},{name:"TikTok",file:"tiktok.png"},{name:"Yoco",file:"Yoco.png"},{name:"iKhokha",file:"ikhokha.png"},{name:"Airbnb",file:"airbnb.png"}];function tf(l,m){const d=[];let g=0;for(const y of m)d.push(l.slice(g,g+y)),g+=y;return d}const[nf,rf,sf]=tf(ef,[9,9,8]);function bd({connector:l}){return r.jsxs("div",{className:"flex shrink-0 items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md px-5 py-4 shadow-[0_8px_32px_rgba(15,10,25,0.35)]",children:[r.jsx("img",{className:"h-8 w-8 shrink-0 rounded-md object-contain",src:encodeURI(`/connectors/${l.file}`),alt:l.name}),r.jsx("span",{className:"whitespace-nowrap text-sm font-medium text-white/90",children:l.name})]})}function Jo({logos:l,direction:m,duration:d}){const g=m==="left"?"synth-scroll-left":"synth-scroll-right";return r.jsxs("div",{className:"relative flex w-full overflow-hidden py-2",children:[r.jsx("div",{className:"flex shrink-0 gap-4 pr-4",style:{animation:`${g} ${d}s linear infinite`},children:l.map(y=>r.jsx(bd,{connector:y},`${y.name}-a`))}),r.jsx("div",{className:"flex shrink-0 gap-4 pr-4",style:{animation:`${g} ${d}s linear infinite`},"aria-hidden":"true",children:l.map(y=>r.jsx(bd,{connector:y},`${y.name}-b`))})]})}function af(){return r.jsxs("section",{id:"features",className:"relative overflow-hidden py-28",style:{background:"linear-gradient(180deg, #1E2238 0%, #232A45 14%, #2E3350 28%, #4B4C6A 42%, #746C87 56%, #9C7A82 70%, #B87362 85%, #A86354 100%)"},children:[r.jsx("div",{className:"pointer-events-none absolute -bottom-1/4 -left-1/4 h-[70%] w-[70%] rounded-full opacity-70 blur-3xl",style:{background:"radial-gradient(ellipse at center, rgba(255,214,150,0.55) 0%, rgba(255,190,120,0.25) 35%, transparent 70%)"}}),r.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-30",style:{backgroundImage:"radial-gradient(1px 1px at 10% 20%, white, transparent), radial-gradient(1px 1px at 30% 45%, white, transparent), radial-gradient(1px 1px at 55% 15%, white, transparent), radial-gradient(1px 1px at 75% 35%, white, transparent), radial-gradient(1px 1px at 90% 10%, white, transparent), radial-gradient(1px 1px at 20% 60%, white, transparent), radial-gradient(1px 1px at 65% 55%, white, transparent)"}}),r.jsx("style",{children:`
        @keyframes synth-scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes synth-scroll-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="synth-scroll"] { animation: none !important; }
        }
      `}),r.jsx("div",{className:"wrap relative z-10",children:r.jsxs("div",{className:"mb-16 text-center",children:[r.jsx("p",{className:"text-[12px] font-semibold uppercase tracking-[3px] text-amber-100/80 mb-4",children:"Seamless MCP Integrations"}),r.jsx("h2",{className:"font-display text-[clamp(34px,5vw,56px)] font-semibold tracking-[-0.03em] text-white mb-6",children:"Plugged into everything you already run"}),r.jsx("p",{className:"mx-auto max-w-2xl text-lg text-white/70",children:"200+ connectors, live. No migrations— Synth meets your business exactly where it already works."})]})}),r.jsxs("div",{className:"relative z-10 flex flex-col gap-3",children:[r.jsx(Jo,{logos:nf,direction:"left",duration:38}),r.jsx(Jo,{logos:rf,direction:"right",duration:44}),r.jsx(Jo,{logos:sf,direction:"left",duration:34})]}),r.jsx("div",{className:"wrap relative z-10 mt-16 text-center",children:r.jsx(ne,{href:"/#waitlist",className:"inline-flex rounded-full bg-white px-8 py-3 font-medium text-[#3B3350] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/20",children:"join the list"})})]})}const of=[{tier:"Starter",monthly:15,annual:12.5,desc:"Standard monthly usage",cta:"Reserve spot",featured:!1,credits:"4,000 credits per month",features:[{icon:Yo,text:"300 refresh credits everyday"},{icon:Ko,text:"4,000 credits per month"},{icon:Qo,text:"In-depth research for everyday tasks"},{icon:jr,text:"Proactive daily briefings & alerts"},{icon:Hs,text:"Insightful slides for regular content"},{icon:qo,text:"Task scaling with Wide Research"},{icon:Us,text:"Early access to beta features"},{icon:Bs,text:"20 concurrent tasks"},{icon:Go,text:"20 scheduled tasks"}]},{tier:"Pro",monthly:35,annual:29.1666,desc:"Customizable monthly usage",cta:"Reserve spot",featured:!0,credits:"8,000 credits / month",features:[{icon:Yo,text:"300 refresh credits everyday"},{icon:Ko,text:"8,000 credits per month"},{icon:Qo,text:"In-depth research with self-set usage"},{icon:jr,text:"Proactive daily briefings & alerts"},{icon:Hs,text:"Insightful slides for steady creation"},{icon:qo,text:"Wide Research scaled to your chosen plan"},{icon:Us,text:"Early access to beta features"},{icon:Bs,text:"20 concurrent tasks"},{icon:Go,text:"40 scheduled tasks"}]},{tier:"Max",monthly:170,annual:141.6666,desc:"Extended usage for productivity",cta:"Reserve spot",featured:!1,credits:"40,000 credits / month",specialFeature:{icon:Th,text:"Free Cloud Computer",color:"text-blue-500"},features:[{icon:Yo,text:"300 refresh credits everyday"},{icon:Ko,text:"40,000 credits per month"},{icon:Qo,text:"In-depth research for large-scale tasks"},{icon:jr,text:"Proactive daily briefings & alerts"},{icon:Hs,text:"Insightful slides for batch production"},{icon:qo,text:"Wide Research for sustained heavy use"},{icon:Us,text:"Early access to beta features"},{icon:Bs,text:"20 concurrent tasks"},{icon:Go,text:"unlimited scheduled tasks"}]}];function Wd(){const[l,m]=D.useState(!1);return r.jsx("section",{className:"py-24 bg-[#EEF2F7]",id:"pricing",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("h2",{className:"text-5xl font-serif font-medium text-gray-900 mb-12",children:"Pricing Plans"}),r.jsxs("div",{className:"inline-flex p-1 bg-gray-100 rounded-xl mb-4",children:[r.jsx("button",{onClick:()=>m(!1),className:`px-6 py-2 text-sm font-medium rounded-lg transition-all ${l?"text-gray-500 hover:text-gray-700":"bg-white shadow-sm text-gray-900"}`,children:"Monthly"}),r.jsx("button",{onClick:()=>m(!0),className:`px-6 py-2 text-sm font-medium rounded-lg transition-all ${l?"bg-white shadow-sm text-gray-900":"text-gray-500 hover:text-gray-700"}`,children:"Annually · Save 17%"})]})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto",children:of.map(d=>r.jsxs("div",{className:`relative bg-white border border-gray-200 rounded-[32px] p-8 transition-all hover:shadow-xl ${d.featured?"ring-1 ring-gray-900":""}`,children:[r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"flex items-baseline gap-1 mb-6",children:[r.jsx("span",{className:"text-4xl font-medium text-gray-900",children:"$"}),r.jsx("span",{className:"text-6xl font-medium text-gray-900 tracking-tight",children:l?Math.floor(d.annual):d.monthly}),r.jsx("span",{className:"text-lg text-gray-400",children:"/ month"})]}),r.jsx("p",{className:"text-gray-500 text-lg mb-8",children:d.desc}),r.jsx("button",{className:"w-full py-4 bg-gray-900 text-white rounded-2xl font-medium text-lg hover:bg-gray-800 transition-colors",children:d.cta})]}),r.jsxs("div",{className:"mb-8 p-4 bg-gray-50 rounded-2xl flex items-center justify-between group cursor-pointer border border-transparent hover:border-gray-200 transition-all",children:[r.jsx("span",{className:"text-gray-700 font-medium",children:d.credits}),r.jsx(ei,{className:"w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"})]}),r.jsxs("div",{className:"space-y-4",children:[d.specialFeature&&r.jsxs("div",{className:`flex items-center gap-3 ${d.specialFeature.color} font-medium`,children:[r.jsx(d.specialFeature.icon,{className:"w-5 h-5"}),r.jsx("span",{className:"underline decoration-2 underline-offset-4 cursor-pointer",children:d.specialFeature.text})]}),d.features.map((g,y)=>r.jsxs("div",{className:"flex items-center gap-3 text-gray-600",children:[r.jsx(g.icon,{className:"w-5 h-5 text-gray-400 flex-shrink-0"}),r.jsx("span",{className:"text-[15px]",children:g.text}),r.jsx(Us,{className:"w-4 h-4 text-gray-300 ml-auto cursor-help"})]},y))]})]},d.tier))}),r.jsxs("div",{className:"mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{className:"bg-gray-50 rounded-[32px] p-8 flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-all",children:[r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsx("div",{className:"w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm",children:r.jsx(Hs,{className:"w-7 h-7 text-gray-900"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-xl font-medium text-gray-900",children:"Synth Plans for Teams & Businesses"}),r.jsx("p",{className:"text-gray-500",children:"Flexible plans for teams of all sizes."})]})]}),r.jsx("a",{href:"/#waitlist",className:"px-6 py-2.5 bg-white border border-gray-200 rounded-xl font-medium text-gray-900 hover:bg-gray-50 transition-all",children:"Team plans"})]}),r.jsxs("div",{className:"bg-gray-50 rounded-[32px] p-8 flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-all",children:[r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsx("div",{className:"w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm",children:r.jsx(jr,{className:"w-7 h-7 text-gray-900"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-xl font-medium text-gray-900",children:"Security and Compliance"}),r.jsx("p",{className:"text-gray-500",children:"Enterprise-grade security and certifications."})]})]}),r.jsx(ne,{href:"/data-processing",className:"px-6 py-2.5 bg-white border border-gray-200 rounded-xl font-medium text-gray-900 hover:bg-gray-50 transition-all",children:"Learn more"})]})]})]})})}function lf(){const[l,m]=D.useState(""),[d,g]=D.useState(!1),y=P=>{P.preventDefault(),l.trim()&&(g(!0),setTimeout(()=>{g(!1),m("")},4500))},b=[{id:1,label:"sales data"},{id:2,label:"Risk Signal"},{id:3,label:"Analytics"},{id:4,label:"tools data"},{id:5,label:"Documents"},{id:6,label:"Claim reviews"},{id:7,label:"cash flow"},{id:8,label:"reports"}];return r.jsxs("section",{className:"py-24 border-t border-synth-border relative overflow-hidden",id:"waitlist",children:[r.jsx("style",{children:`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 25s linear infinite;
        }
      `}),r.jsx("div",{className:"w-full mb-16 relative border-y border-synth-border py-4 bg-synth-bg/50 overflow-hidden",children:r.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between relative px-4",children:[r.jsx("div",{className:"flex-1 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",children:r.jsx("div",{className:"animate-marquee-right flex gap-3 items-center",children:[...b,...b,...b].map((P,w)=>r.jsx("div",{className:"px-5 py-2.5 bg-synth-surface border border-synth-border rounded-md text-[13px] text-synth-text-2 font-medium shadow-sm whitespace-nowrap min-w-[120px] text-center",children:P.label},`left-${w}`))})}),r.jsx("div",{className:"mx-6 flex-shrink-0 z-10 bg-synth-surface border border-synth-border rounded-lg p-3 shadow-md flex items-center justify-center",children:r.jsx("img",{src:"logo.png",alt:"Logo",className:"w-6 h-6 object-contain"})}),r.jsx("div",{className:"flex-1 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",children:r.jsx("div",{className:"animate-marquee-left flex gap-3 items-center",children:[...b,...b,...b].map((P,w)=>r.jsx("div",{className:"px-5 py-2.5 bg-synth-surface border border-synth-border rounded-md text-[13px] text-synth-text-2 font-medium shadow-sm whitespace-nowrap min-w-[120px] text-center",children:P.label},`right-${w}`))})})]})}),r.jsx("div",{className:"absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-synth-accent-light rounded-full pointer-events-none",style:{filter:"blur(80px)",opacity:.6}}),r.jsx("div",{className:"wrap relative z-10",children:r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[r.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"This is what comes after software. Your business on autopilot, all in one platform."}),r.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"We're building something we'd want to use ourselves. you'll be first to get access when we launch, Join the waitlist!!"}),r.jsxs("form",{onSubmit:y,className:"grid grid-cols-2 gap-2 max-w-[380px] mx-auto mb-3.5",children:[r.jsx("input",{type:"email",value:l,onChange:P=>m(P.target.value),placeholder:"your@email.com",required:!0,className:"w-full bg-synth-bg border border-synth-border-med rounded-full px-5 py-3 text-[14px] text-synth-text-1 outline-none transition-all focus:border-synth-accent"}),r.jsx("button",{type:"submit",disabled:d,className:`w-full text-white rounded-full px-4 py-3 text-[14px] font-medium transition-colors ${d?"bg-synth-green":"bg-synth-accent hover:bg-[#1D4ED8]"}`,children:d?"✓ You're on the list!":"Join the list"})]}),r.jsx("p",{className:"text-[12px] text-synth-text-3",children:"No spam. No commitment. Just early access."}),r.jsxs("div",{className:"flex justify-center gap-5 mt-5",children:[r.jsx("a",{href:"mailto:hello@synth.ai?subject=API access",className:"text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors",children:"⟨/⟩ API access"}),r.jsx("a",{href:"mailto:healthcare@synthai.world",className:"text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors",children:"🏥 Healthcare demo"}),r.jsx("a",{href:"mailto:hello@synthai.world?subject=Enterprise",className:"text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors",children:"🏢 Enterprise"})]})]})})]})}function cf(){return r.jsxs("div",{children:[r.jsx(qh,{}),r.jsx(Xh,{}),r.jsx(Zh,{}),r.jsx(af,{}),r.jsx(Wd,{}),r.jsx(lf,{})]})}function Sr({eyebrow:l,headline:m,headlineAccent:d,subhead:g,ctaText:y,ctaHref:b,workflowTitle:P,workflowSub:w,workflows:E,heroImage:T,heroImageAlt:I}){return r.jsxs("div",{className:"min-h-screen",children:[r.jsx("section",{className:"pt-20 pb-12 border-b border-synth-border overflow-hidden",children:r.jsxs("div",{className:"wrap relative",children:[r.jsx(ne,{href:"/",className:"absolute right-4 top-4 z-20 rounded-full border border-synth-border bg-white p-2 shadow-sm transition hover:scale-[1.02]",children:r.jsx("img",{src:"/logo.png",alt:"Synth home",className:"h-12 w-12 object-contain"})}),T&&r.jsx("div",{className:"overflow-hidden rounded-[32px] border border-synth-border bg-synth-surface shadow-[0_24px_80px_rgba(15,23,42,0.08)]",children:r.jsx("img",{src:T,alt:I??l,className:"w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover"})}),r.jsxs("div",{className:"mt-10 max-w-[780px] mx-auto text-center",children:[r.jsx("p",{className:"eyebrow",children:l}),r.jsxs("h1",{className:"font-serif text-[clamp(36px,5vw,60px)] font-normal leading-[1.1] tracking-[-1px] text-synth-text-1 mb-4",children:[m,r.jsx("br",{}),r.jsx("em",{className:"text-synth-accent",children:d})]}),r.jsx("p",{className:"text-[17px] text-synth-text-2 leading-[1.7] max-w-[640px] mx-auto mb-8",children:g}),r.jsx(ne,{href:b,className:"inline-flex items-center gap-2 bg-synth-text-1 text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#2A2835] transition-colors",children:y})]})]})}),r.jsx("section",{className:"py-20",children:r.jsxs("div",{className:"wrap",children:[r.jsx("p",{className:"eyebrow",children:"Only Synth Can Do"}),r.jsx("h2",{className:"section-title",children:P}),r.jsx("p",{className:"section-sub",children:w}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-[900px] mx-auto",children:E.map((A,B)=>r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[16px] p-7 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-synth-accent/20 transition-all duration-200",children:[r.jsx("span",{className:"inline-block text-[11px] font-semibold uppercase tracking-[1px] rounded-full px-2.5 py-0.5 mb-3.5",style:{background:A.tagColor,color:A.tagText},children:A.tag}),r.jsx("h3",{className:"text-[15px] font-semibold text-synth-text-1 mb-1.5",children:A.title}),r.jsx("p",{className:"text-[13px] text-synth-text-2 leading-[1.6]",children:A.desc}),r.jsxs("div",{className:"inline-flex items-center gap-1 text-[12px] text-synth-accent font-medium mt-3.5 border-b border-transparent hover:border-synth-accent transition-colors cursor-pointer",children:["Watch how it works ",r.jsx(kr,{className:"w-3.5 h-3.5"})]})]},B))})]})}),r.jsx("section",{className:"py-20 border-t border-synth-border",children:r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[r.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"Come and see what done actually looks like!!"}),r.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"Join the waitlist to be first when this solution launches."}),r.jsxs("form",{className:"flex gap-2 max-w-[380px] mx-auto mb-3",onSubmit:A=>{A.preventDefault(),alert("Thanks! You're on the list.")},children:[r.jsx("input",{type:"email",placeholder:"your@email.com",required:!0,className:"flex-1 bg-synth-bg border border-synth-border-med rounded-full px-5 py-3 text-[14px] text-synth-text-1 outline-none transition-all focus:border-synth-accent"}),r.jsx("button",{type:"submit",className:"bg-synth-accent text-white rounded-full px-5 py-3 text-[14px] font-medium hover:bg-[#1D4ED8] transition-colors",children:"Join waitlist"})]})]})})})]})}const df=[{tag:"Campaign Design",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Generate on-brand campaign assets at scale",desc:"Produce dozens of design variations for event posters, ad creatives, and social banners — with visual consistency maintained across every format and size."},{tag:"Competitor Intelligence",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Uncover actionable market intelligence",desc:"Automate competitor benchmarking, audience research, and traffic analysis. Deploy hundreds of agents in parallel to surface insights that drive real growth."},{tag:"Social Media",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Batch generate multi-format content",desc:"Turn blog posts, reports, or raw data into polished, platform-ready social graphics and carousels for LinkedIn, Instagram, Twitter, and more — simultaneously."},{tag:"Marketing Ops",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Turn data into actionable insights",desc:"Upload any marketing dataset — campaign metrics, keyword data, survey results — and get clear, presentation-ready visualisations in minutes."}];function uf(){return r.jsx(Sr,{eyebrow:"Synth for Marketing",headline:"The autonomous engine for",headlineAccent:"your entire marketing lifecycle",subhead:"From research to campaign assets to analysis — Synth handles complex, multi-step marketing workflows from start to finish in a single prompt.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end marketing workflows",workflowSub:"One prompt sets the entire workflow in motion. Synth handles every step autonomously.",workflows:df,heroImage:"/marketing.png",heroImageAlt:"Marketing solution image"})}const pf=[{tag:"Prospecting",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Research and enrich leads at scale",desc:"Deploy agents to research hundreds of prospects simultaneously — pulling company data, contact details, funding history, and recent news into a structured brief."},{tag:"Outreach",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Draft hyper-personalised cold outreach",desc:"Generate tailored email sequences and LinkedIn messages using each prospect's real context — their role, company news, and stated priorities."},{tag:"Deal Intelligence",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Prepare for every meeting in minutes",desc:"Before any call, Synth builds a deal brief — company overview, stakeholder map, likely objections, and recommended talking points — automatically."},{tag:"CRM Ops",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Keep your CRM clean without lifting a finger",desc:"Synth logs call notes, updates deal stages, flags stale opportunities, and sends follow-up sequences — synced to Salesforce, HubSpot, or your CRM of choice."}];function hf(){return r.jsx(Sr,{eyebrow:"Synth for Sales",headline:"From cold outreach",headlineAccent:"to closed deals",subhead:"Synth researches prospects, enriches leads, drafts personalised outreach, and prepares deal intelligence — autonomously, at the scale your pipeline needs.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end sales workflows",workflowSub:"From lead identification to closed deal — handled in a single prompt.",workflows:pf,heroImage:"/sales.png",heroImageAlt:"Sales solution image"})}const ff=[{tag:"Investment Analysis",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Build live multi-timeframe chart dashboards",desc:"Perform technical analysis on any stock or asset and create an interactive web report to visualise findings in real time — shareable with one link."},{tag:"Research at Scale",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Collect financial reports for hundreds of firms",desc:"Automatically gather quarterly and annual reports for hundreds of public companies and compile them into a structured, searchable directory."},{tag:"Financial Modelling",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Build three-statement models from annual reports",desc:"Upload a company's annual report and get a complete DCF or three-statement model in Excel — formulas, assumptions, and sensitivity tables included."},{tag:"Market Intelligence",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Size and validate new market opportunities",desc:"Research addressable market segments using parallel agents — competitive analysis, demand signals, and growth projections delivered in a structured report."}];function mf(){return r.jsx(Sr,{eyebrow:"Synth for Finance",headline:"From raw data to",headlineAccent:"financial intelligence",subhead:"Build financial models, analyse live market data, research hundreds of firms in parallel, and produce investment-ready deliverables — in one prompt.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end finance workflows",workflowSub:"Go from raw data to final deliverable without leaving your chat window.",workflows:ff,heroImage:"/finance.png",heroImageAlt:"Finance solution image"})}const Os=[{id:"discovery",label:"Discovery",tag:"Discovery",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Synthesise user feedback into actionable themes",desc:"Upload interview transcripts, support tickets, or review data — Synth clusters feedback into prioritised themes with evidence-backed recommendations."},{id:"documentation",label:"Documentation",tag:"Documentation",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Draft complete PRDs from a brief",desc:"Describe a feature in plain language and Synth produces a full product requirements document — user stories, acceptance criteria, edge cases, and open questions included."},{id:"competitive",label:"Competitive Research",tag:"Competitive Research",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Map the competitive landscape in minutes",desc:"Analyse competitors' product pages, changelogs, and reviews simultaneously. Get a structured teardown of features, positioning gaps, and opportunities."},{id:"roadmapping",label:"Roadmapping",tag:"Roadmapping",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Build data-informed roadmap proposals",desc:"Combine user feedback, business priorities, and competitive signals into a draft roadmap — with rationale for each item and trade-off analysis built in."}];function xf(){const[l,m]=D.useState(Os[0].id),d=Os.find(g=>g.id===l)||Os[0];return r.jsxs(r.Fragment,{children:[r.jsx(Sr,{eyebrow:"Synth for Product",headline:"From ideas to",headlineAccent:"shipped features",subhead:"Draft PRDs, run competitive research, generate spec documents, synthesise user feedback, and prototype ideas — all from a single conversation.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end product workflows",workflowSub:"From discovery to delivery — Synth handles the research so your team can focus on building.",workflows:[],heroImage:"/product.png",heroImageAlt:"Synth product workflow"}),r.jsx("section",{className:"py-16 lg:py-24 -mt-12",children:r.jsxs("div",{className:"wrap max-w-[900px] mx-auto",children:[r.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-8 border-b border-synth-border pb-4",children:Os.map(g=>r.jsx("button",{onClick:()=>m(g.id),className:`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${l===g.id?"bg-synth-accent text-white shadow-md":"bg-synth-surface border border-synth-border text-synth-text-2 hover:border-synth-accent/50"}`,children:g.label},g.id))}),r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-2xl p-8 md:p-10 shadow-sm",children:[r.jsx("div",{className:"flex flex-wrap gap-4 items-center mb-4",children:r.jsx("span",{className:"inline-block px-3 py-1 rounded-full text-xs font-semibold",style:{backgroundColor:d.tagColor,color:d.tagText},children:d.tag})}),r.jsx("h3",{className:"text-2xl font-bold text-synth-text-1 mb-3",children:d.title}),r.jsx("p",{className:"text-synth-text-2 leading-relaxed text-[16px]",children:d.desc})]})]})})]})}const gf=[{tag:"Daily Planning",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Morning brief delivered before your day starts",desc:"Synth reviews your calendar, emails, and open tasks overnight — then sends you a personalised briefing with a prioritised plan before you even open your laptop."},{tag:"Emergency Alerts",tagColor:"#FDECEA",tagText:"#C0392B",title:"Tapped on the shoulder when it matters",desc:"Meeting conflicts, missed messages, deadline creep, price drops on watched items — Synth surfaces what needs you immediately and offers to handle it."},{tag:"Autonomous Tasks",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"One message. Synth handles the rest.",desc:"Give Synth a complex, multi-step task — research, book, draft, send — and walk away. It executes every step in the background and reports back when done."},{tag:"Long-term Memory",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Gets smarter the longer you use it",desc:"Synth remembers your preferences, your relationships, your recurring tasks, and your goals — so it needs less instruction and gives better results over time."}];function vf(){return r.jsx(Sr,{eyebrow:"Synth Personal",headline:"Your proactive AI",headlineAccent:"chief of staff",subhead:"Synth plans your day, pushes urgent tasks, and handles complex work end-to-end — all inside WhatsApp or Telegram. No new app to learn.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"What makes Synth Personal different",workflowSub:"Proactive. Not reactive. Every other AI waits for you to ask. Synth pushes tasks to you.",workflows:gf,heroImage:"/personal.png",heroImageAlt:"Personal solution image"})}const yf=[{icon:"🏷️",title:"Insurance Code Automation",desc:"Automatically applies ICD-10, CPT, and HCPCS codes to patient records and claims. Reduces coding errors and speeds up submission.",detail:"Supports South African medical scheme tariff codes (NHRPL) and international coding standards"},{icon:"❌",title:"Claim Denial Resolution",desc:"Identifies denial patterns, drafts appeal letters, tracks resubmission deadlines, and monitors payer decisions — all autonomously.",detail:"Average denial resolution time reduced from 14 days to under 48 hours"},{icon:"📋",title:"Payer Rule Monitoring",desc:"Tracks payer policy changes across medical schemes and insurers. Alerts your admin team before rule changes cause claim failures.",detail:"Monitors Discovery Health, Bonitas, Medihelp, Momentum, and all major SA medical schemes"},{icon:"📅",title:"Appointment & Scheduling",desc:"Manages patient bookings, sends reminders, handles cancellations and rescheduling, and optimises doctor availability — via WhatsApp.",detail:"Patients can confirm, cancel, or reschedule via a simple WhatsApp message — no app download needed"},{icon:"💊",title:"Refill Reminders — Chronic Disease",desc:"Automatically identifies patients due for repeat prescriptions and sends personalised reminders via WhatsApp or SMS, with one-tap confirmation.",detail:"Designed for chronic conditions: diabetes, hypertension, HIV/ARV management, asthma, and more"},{icon:"🔗",title:"EHR Integrations",desc:"Connects to your existing patient management and EHR systems. Synth reads and writes data — no double-entry, no manual exports.",detail:"Integrates with GoodX, Elixir, DragonWave, and custom hospital management systems via API"},{icon:"📁",title:"Patient Management",desc:"Handles admissions, records, and consent workflows. Tracks patient status, flags missing documentation, and ensures compliance.",detail:"Automated consent form generation, digital signature capture, and audit-ready record keeping"},{icon:"👥",title:"Staff Rostering & Credentials",desc:"Manages staff schedules, tracks credential expiry, and ensures compliance with regulatory requirements for healthcare professionals.",detail:"HPCSA registration tracking, CPD point monitoring, and automated renewal reminders"}];function wf(){return r.jsxs("div",{className:"min-h-screen",children:[r.jsx("section",{className:"pt-20 pb-12 border-b border-synth-border overflow-hidden",children:r.jsxs("div",{className:"wrap relative",children:[r.jsx(ne,{href:"/",className:"absolute right-4 top-4 z-20 rounded-full border border-synth-border bg-white p-2 shadow-sm transition hover:scale-[1.02]",children:r.jsx("img",{src:"/logo.png",alt:"Synth home",className:"h-12 w-12 object-contain"})}),r.jsx("div",{className:"overflow-hidden rounded-[32px] border border-synth-border bg-synth-surface shadow-[0_24px_80px_rgba(15,23,42,0.08)]",children:r.jsx("img",{src:"/healthcare.png",alt:"Healthcare solution image",className:"w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover"})}),r.jsxs("div",{className:"mt-10 max-w-[780px] mx-auto text-center",children:[r.jsx("p",{className:"eyebrow",children:"Healthcare Admin"}),r.jsxs("h1",{className:"font-serif text-[clamp(36px,5vw,60px)] font-normal leading-[1.1] tracking-[-1px] text-synth-text-1 mb-4",children:["From claim denials to",r.jsx("br",{}),r.jsx("em",{className:"text-synth-accent",children:"recovered revenue"})]}),r.jsx("p",{className:"text-[17px] text-synth-text-2 leading-[1.7] max-w-[600px] mx-auto mb-8",children:"Synth automates the most painful, high-stakes admin work in healthcare — so your team spends time on patients, not paperwork."}),r.jsx(ne,{href:"/pricing",className:"inline-flex items-center gap-2 bg-synth-accent text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#1D4ED8] transition-colors",children:"Request a demo"})]})]})}),r.jsx("section",{className:"py-20",children:r.jsxs("div",{className:"wrap",children:[r.jsx("p",{className:"eyebrow",children:"Core capabilities"}),r.jsx("h2",{className:"section-title",children:"Built for the revenue cycle"}),r.jsx("p",{className:"section-sub",children:"Eight critical workflows — fully automated, POPIA-compliant, integrated with your existing EHR systems."}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[960px] mx-auto mb-12",children:yf.map(l=>r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[16px] p-5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-synth-accent/20 transition-all duration-200",children:[r.jsx("div",{className:"w-10 h-10 rounded-[10px] flex items-center justify-center text-[19px] bg-synth-accent-light mb-3",children:l.icon}),r.jsx("h3",{className:"text-[14px] font-semibold text-synth-text-1 mb-1",children:l.title}),r.jsx("p",{className:"text-[12px] text-synth-text-2 leading-[1.6] mb-2",children:l.desc}),r.jsx("div",{className:"text-[11px] text-synth-text-3 border-t border-synth-border pt-2 italic leading-[1.5]",children:l.detail})]},l.title))}),r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[16px] p-5 max-w-[960px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4",children:[r.jsxs("p",{className:"text-[13px] text-synth-text-2 leading-[1.6] max-w-[560px]",children:[r.jsx("strong",{className:"text-synth-text-1",children:"Built for South African compliance."})," Synth's healthcare module is designed with POPIA (Protection of Personal Information Act) compliance at its core — data residency in South Africa, audit trails, role-based access controls, and patient consent management built in."]}),r.jsx("div",{className:"flex flex-wrap gap-2",children:["POPIA Compliant","NHRPL Codes","Medical Scheme API","Audit Trail","Data Residency SA"].map(l=>r.jsx("span",{className:"text-[11px] font-semibold border border-synth-border-med rounded-full px-3 py-1 text-synth-text-2 bg-synth-surface-2",children:l},l))})]})]})}),r.jsx("section",{className:"py-20 border-t border-synth-border",children:r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[r.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"See it in your facility"}),r.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"We offer a free 30-minute demonstration tailored to your specific workflows. No commitment, no setup required."}),r.jsx("a",{href:"mailto:healthcare@synth.ai?subject=Healthcare Demo Request",className:"inline-block bg-synth-accent text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#1D4ED8] transition-colors mb-3",children:"Book a demo →"}),r.jsx("p",{className:"text-[12px] text-synth-text-3",children:"Or email us at healthcare@synth.ai · We respond within 24 hours"})]})})})]})}function bf(){return r.jsx("div",{className:"pt-20",children:r.jsx(Wd,{})})}const jf=[{icon:ti,title:"End-to-end encryption",desc:"All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your conversations, documents, and patient records are protected at every layer."},{icon:Ud,title:"Your data stays yours",desc:"We never sell your data. We never use it to train models without your explicit consent. Delete everything, anytime — no questions asked."},{icon:jr,title:"Data residency controls",desc:"Choose where your data lives. South Africa (default), EU, UK, or US. POPIA, GDPR, and HIPAA-compliant handling depending on your region."},{icon:Ah,title:"Full audit trails",desc:"Every agent action is logged, timestamped, and exportable. Court-admissible records for healthcare and legal compliance requirements."},{icon:Hd,title:"On-premise option",desc:"For healthcare and enterprise customers, deploy entirely within your infrastructure. No data leaves your network. Air-gapped available."},{icon:Fh,title:"SOC 2 Type II readiness underway",desc:"SOC 2 Type II audit in progress.  Full report available under NDA. We maintain the highest standards for security, availability, and confidentiality."}];function Nf(){return r.jsxs("div",{className:"min-h-screen",children:[r.jsx("section",{className:"pt-24 pb-16 border-b border-synth-border",children:r.jsxs("div",{className:"wrap-sm text-center",children:[r.jsx("p",{className:"eyebrow",children:"Trust Centre"}),r.jsxs("h1",{className:"font-serif text-[clamp(36px,5vw,60px)] font-normal leading-[1.1] tracking-[-1px] text-synth-text-1 mb-4",children:["Your data, ",r.jsx("em",{className:"text-synth-accent",children:"your rules"})]}),r.jsx("p",{className:"text-[17px] text-synth-text-2 leading-[1.7]",children:"Built with privacy and security at the core. You stay in control — always."})]})}),r.jsx("section",{className:"py-20",children:r.jsxs("div",{className:"wrap",children:[r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto",children:jf.map(l=>{const m=l.icon;return r.jsxs("div",{className:"bg-synth-surface/50 border border-synth-border rounded-[22px] p-8",children:[r.jsx("div",{className:"w-12 h-12 bg-synth-surface border border-synth-border rounded-[14px] flex items-center justify-center mb-5",children:r.jsx(m,{className:"w-6 h-6 text-synth-text-1"})}),r.jsx("h3",{className:"font-semibold text-synth-text-1 mb-2",children:l.title}),r.jsx("p",{className:"text-[13px] text-synth-text-2 leading-[1.65]",children:l.desc})]},l.title)})}),r.jsx("div",{className:"mt-12 text-center",children:r.jsxs("div",{className:"inline-flex items-center gap-6 text-[13px] text-synth-text-3",children:[r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(Ds,{className:"w-4 h-4 text-synth-green"}),"SOC 2 Type II"]}),r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(Ds,{className:"w-4 h-4 text-synth-green"}),"GDPR Ready"]}),r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(Ds,{className:"w-4 h-4 text-synth-green"}),"HIPAA Options"]}),r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(Ds,{className:"w-4 h-4 text-synth-green"}),"POPIA Compliant"]})]})})]})}),r.jsx("section",{className:"py-20 border-t border-synth-border",children:r.jsx("div",{className:"wrap",children:r.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[r.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"Questions about security?"}),r.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"Our security team is happy to share our SOC 2 report, discuss custom compliance requirements, or walk you through our architecture."}),r.jsx("a",{href:"mailto:security@synth.ai?subject=Security Inquiry",className:"inline-block bg-synth-text-1 text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#2A2835] transition-colors",children:"Contact security team"})]})})})]})}function kf(){return r.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900",children:[r.jsx("nav",{className:"border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-6 h-16 flex items-center justify-between",children:[r.jsxs(ne,{href:"/",className:"text-xl font-serif font-medium tracking-tight hover:opacity-70 transition-opacity",children:["synth",r.jsx("span",{className:"text-indigo-600",children:".ai"})]}),r.jsx(ne,{href:"/terms",className:"text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors",children:"Terms of Use"})]})}),r.jsxs("main",{className:"max-w-4xl mx-auto px-6 py-20",children:[r.jsxs("header",{className:"mb-20",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-6",children:[r.jsx(ti,{className:"w-3 h-3"}),"Security First"]}),r.jsx("h1",{className:"text-5xl md:text-6xl font-serif font-medium tracking-tight text-gray-900 mb-6",children:"Data Processing Policy"}),r.jsx("p",{className:"text-xl text-gray-500 font-medium",children:"Last updated: July 2026"})]}),r.jsxs("div",{className:"prose prose-gray prose-lg max-w-none",children:[r.jsxs("section",{className:"mb-16",children:[r.jsx("h2",{className:"text-3xl font-serif font-medium text-gray-900 mb-8",children:"1. Introduction"}),r.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Synth AI (“Synth,” “we,” “us,” or “our”) provides an autonomous AI agent platform that helps regulated enterprises automate operational workflows. We are committed to protecting the privacy and security of the data our customers (“you” or “your”) entrust to us."}),r.jsx("p",{className:"text-gray-600 leading-relaxed",children:"This Data Processing Policy explains what data we process, why, where it is stored, and — critically — how our architectural choices ensure that your proprietary business knowledge remains yours alone."})]}),r.jsxs("section",{className:"mb-16 grid md:grid-cols-2 gap-8 not-prose",children:[r.jsxs("div",{className:"p-8 bg-gray-50 rounded-[32px] border border-gray-100",children:[r.jsxs("h3",{className:"text-lg font-bold text-gray-900 mb-4 flex items-center gap-2",children:[r.jsx(Sf,{className:"w-5 h-5 text-indigo-600"})," You are the Data Controller"]}),r.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:"You determine the purposes and means of processing your data."})]}),r.jsxs("div",{className:"p-8 bg-indigo-50 rounded-[32px] border border-indigo-100",children:[r.jsxs("h3",{className:"text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2",children:[r.jsx(ti,{className:"w-5 h-5 text-indigo-600"})," Synth is the Data Processor"]}),r.jsx("p",{className:"text-indigo-900/70 text-sm leading-relaxed",children:"We process data only on your documented instructions, as set out in our service agreement and this policy."})]})]}),r.jsxs("section",{className:"mb-16",children:[r.jsx("h2",{className:"text-3xl font-serif font-medium text-gray-900 mb-8",children:"2. Data We Process"}),r.jsx("div",{className:"space-y-6",children:[{title:"Account data",desc:"Names, email addresses, and contact details of authorised users."},{title:"Operational data",desc:"Workflows, configurations, and logs generated by your use of the platform."},{title:"Content data",desc:"Text of documents, messages, and information you instruct the agent to process."},{title:"Metadata",desc:"Timestamps and performance metrics necessary for auditing and reliability."}].map((l,m)=>r.jsxs("div",{className:"flex gap-4 p-6 border border-gray-100 rounded-2xl hover:border-indigo-100 transition-colors",children:[r.jsx("div",{className:"w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-bold text-gray-900 mb-1",children:l.title}),r.jsx("p",{className:"text-gray-500 text-sm",children:l.desc})]})]},m))})]}),r.jsxs("section",{className:"mb-16 bg-gray-900 text-white rounded-[40px] p-10 md:p-16 overflow-hidden relative",children:[r.jsxs("div",{className:"relative z-10",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-serif font-medium mb-8",children:"Protecting Your Competitive Edge"}),r.jsxs("div",{className:"space-y-8 max-w-2xl",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-indigo-400 font-bold mb-2",children:"Why Open-Source Models?"}),r.jsx("p",{className:"text-gray-400 leading-relaxed",children:"Most AI platforms use proprietary, closed-source models. When you send data to them, you risk sharing proprietary domain expertise with a third party."})]}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[r.jsxs("div",{className:"p-6 bg-white/5 rounded-2xl border border-white/10",children:[r.jsx("h4",{className:"font-bold mb-2",children:"Self-Hosted"}),r.jsx("p",{className:"text-xs text-gray-500",children:"Models run on your side of the fence. No data ever flows back to a central provider."})]}),r.jsxs("div",{className:"p-6 bg-white/5 rounded-2xl border border-white/10",children:[r.jsx("h4",{className:"font-bold mb-2",children:"No Training"}),r.jsx("p",{className:"text-xs text-gray-500",children:'Models are static. They do not learn from your data, protecting your "alpha".'})]})]})]})]}),r.jsx("div",{className:"absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]"})]}),r.jsxs("section",{className:"mb-16",children:[r.jsx("h2",{className:"text-3xl font-serif font-medium text-gray-900 mb-8",children:"Infrastructure & Security"}),r.jsxs("div",{className:"grid md:grid-cols-3 gap-6 not-prose",children:[r.jsxs("div",{className:"p-6 border border-gray-100 rounded-2xl",children:[r.jsx(Hd,{className:"w-8 h-8 text-gray-400 mb-4"}),r.jsx("h4",{className:"font-bold mb-2",children:"AWS Infrastructure"}),r.jsx("p",{className:"text-xs text-gray-500",children:"Stored in infrastructures that comply with data protection regulations."})]}),r.jsxs("div",{className:"p-6 border border-gray-100 rounded-2xl",children:[r.jsx(Ud,{className:"w-8 h-8 text-gray-400 mb-4"}),r.jsx("h4",{className:"font-bold mb-2",children:"Encryption"}),r.jsx("p",{className:"text-xs text-gray-500",children:"AES-256 at rest and TLS 1.2+ in transit for all data."})]}),r.jsxs("div",{className:"p-6 border border-gray-100 rounded-2xl",children:[r.jsx(_h,{className:"w-8 h-8 text-gray-400 mb-4"}),r.jsx("h4",{className:"font-bold mb-2",children:"POPIA Compliant"}),r.jsx("p",{className:"text-xs text-gray-500",children:"Full compliance with South African data protection laws."})]})]})]}),r.jsxs("section",{className:"mb-16 bg-indigo-50 rounded-[32px] p-10 border border-indigo-100",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-indigo-900 mb-4",children:"Questions?"}),r.jsx("p",{className:"text-indigo-900/70 mb-8",children:"If you have questions about this Data Processing Policy or wish to exercise your rights, please contact our Information Officer."}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("p",{className:"font-bold text-indigo-900",children:"Synth AI (Pty) Ltd"}),r.jsx("a",{href:"mailto:privacy@synth.ai",className:"text-indigo-600 font-bold hover:underline",children:"Hello@synthai.world"}),r.jsx("p",{className:"text-sm text-indigo-900/50 mt-4",children:"Cape Town, South Africa"})]})]})]})]}),r.jsx("footer",{className:"border-t border-gray-100 py-12",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-6 flex justify-between items-center text-sm text-gray-400",children:[r.jsx("p",{children:"© 2026 Synth AI (Pty) Ltd."}),r.jsxs("div",{className:"flex gap-6",children:[r.jsx(ne,{href:"/terms",className:"hover:text-gray-900 transition-colors",children:"Terms"}),r.jsx("a",{href:"mailto:privacy@synth.ai",className:"hover:text-gray-900 transition-colors",children:"Privacy"})]})]})})]})}function Sf(l){return r.jsxs("svg",{...l,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"}),r.jsx("path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"})]})}function Cf(){return r.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900",children:[r.jsx("nav",{className:"border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50",children:r.jsxs("div",{className:"max-w-3xl mx-auto px-6 h-16 flex items-center justify-between",children:[r.jsxs(ne,{href:"/",className:"text-xl font-serif font-medium tracking-tight hover:opacity-70 transition-opacity",children:["synth",r.jsx("span",{className:"text-indigo-600",children:".ai"})]}),r.jsx(ne,{href:"/pricing",className:"text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors",children:"Back to Pricing"})]})}),r.jsxs("main",{className:"max-w-3xl mx-auto px-6 py-20",children:[r.jsxs("header",{className:"mb-16",children:[r.jsx("h1",{className:"text-5xl font-serif font-medium tracking-tight text-gray-900 mb-4",children:"Terms of Use"}),r.jsx("p",{className:"text-gray-400 font-medium",children:"Last updated: July 06, 2026"})]}),r.jsxs("div",{className:"prose prose-gray prose-lg max-w-none",children:[r.jsx("p",{className:"lead text-xl text-gray-600 mb-12 leading-relaxed",children:"Welcome to Synth. Before you access our services, please read these Terms of Use carefully. These Terms govern your use of the Synth platform and any associated applications."}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"1. Acceptance of Terms"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"By accessing or using Synth, you agree to be bound by these Terms and our Privacy Policy. If you are using the Services on behalf of an entity, you represent that you have the authority to bind that entity to these Terms."})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"2. Description of Service"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"Synth provides an autonomous AI agent platform designed to automate complex operational workflows. Our services include planning, research, communication automation, and integration with third-party tools."})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"3. User Accounts"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"4. Fees and Payment"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"Certain features of Synth require a paid subscription. All fees are non-refundable except as required by law. We reserve the right to change our pricing upon notice to you."})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"5. Intellectual Property"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"Synth and its original content, features, and functionality are owned by Synth AI (Pty) Ltd and are protected by international copyright, trademark, and other intellectual property laws."}),r.jsxs("p",{className:"text-gray-600",children:[r.jsx("strong",{children:"Your Content:"})," You retain all rights to the data you input into Synth. We do not claim ownership of your proprietary business knowledge."]})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"6. Limitation of Liability"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"To the maximum extent permitted by law, Synth shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service."})]}),r.jsxs("section",{className:"mb-12",children:[r.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"7. Governing Law"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"These Terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions."})]}),r.jsxs("section",{className:"mb-12 bg-gray-50 p-8 rounded-3xl border border-gray-100",children:[r.jsx("h2",{className:"text-xl font-serif font-medium text-gray-900 mb-4",children:"Questions?"}),r.jsx("p",{className:"text-gray-600 mb-6",children:"If you have any questions about these Terms, please contact our  team."}),r.jsx("a",{href:"mailto:legal@synth.ai",className:"inline-flex items-center text-indigo-600 font-bold hover:underline",children:"Hello@synthai.world"})]})]})]}),r.jsx("footer",{className:"border-t border-gray-100 py-12",children:r.jsxs("div",{className:"max-w-3xl mx-auto px-6 flex justify-between items-center text-sm text-gray-400",children:[r.jsx("p",{children:"© 2026 Synth AI (Pty) Ltd."}),r.jsxs("div",{className:"flex gap-6",children:[r.jsx("a",{href:"mailto:privacy@synth.ai",className:"hover:text-gray-900 transition-colors",children:"Privacy"}),r.jsx(ne,{href:"/data-processing",className:"hover:text-gray-900 transition-colors",children:"Data Processing"})]})]})})]})}function Ef(){return r.jsx("div",{className:"min-h-screen flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("h1",{className:"font-serif text-[80px] font-normal text-synth-text-1 leading-none mb-4",children:"404"}),r.jsx("p",{className:"text-[17px] text-synth-text-2 mb-8",children:"This page doesn't exist yet."}),r.jsx(ne,{href:"/",className:"inline-flex items-center gap-2 bg-synth-text-1 text-white rounded-full px-6 py-3 text-[15px] font-medium hover:bg-[#2A2835] transition-colors",children:"Go home"})]})})}const jd=[{category:"Architecture Philosophy",feature:"Core concept",openclaw:{value:"A personal, always-on AI assistant that monitors systems and alerts you",supported:"yes"},synth:{value:"An autonomous employee that executes complex, multi-step enterprise workflows across apps",supported:"yes"}},{category:"Architecture Philosophy",feature:"Primary loop",openclaw:{value:"Heartbeat → probe → policy → escalate → notify",supported:"yes"},synth:{value:"Heartbeat → probe → policy → escalate → execute full agent task (plan, use tools, verify, deliver)",supported:"yes"}},{category:"Architecture Philosophy",feature:"Execution depth",openclaw:{value:"Notifies a human; does not autonomously complete end-to-end business tasks",supported:"no"},synth:{value:"End-to-end execution: plans, calls tools (browser, desktop, WhatsApp, APIs), verifies output, and delivers a finished result",supported:"yes"}},{category:"Architecture Philosophy",feature:"Multi-agent orchestration",openclaw:{value:"Single-agent, user-centred",supported:"no"},synth:{value:"Multi-agent orchestration (Planner-Executor-Verifier, plus specialised sub-agents)",supported:"yes"}},{category:"Target Users",feature:"Primary user",openclaw:{value:"Technical individuals (developers, hobbyists) comfortable configuring servers, YAML, and API keys",supported:"yes"},synth:{value:"Business professionals in regulated enterprises—lawyers, healthcare administrators, procurement officers—who never touch a terminal",supported:"yes"}},{category:"Target Users",feature:"Buyer",openclaw:{value:"The user themselves (free, self-hosted)",supported:"yes"},synth:{value:"The enterprise (paid subscription, with compliance and support)",supported:"yes"}},{category:"Target Users",feature:"User experience",openclaw:{value:"CLI, config files, and a multi-messenger chat interface",supported:"yes"},synth:{value:"Clean dashboard with task submission, live streaming, heartbeat configuration, memory explorer, and cost dashboards",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Scheduler",openclaw:{value:"Configurable intervals and active hours",supported:"yes"},synth:{value:"Same, plus per-user scheduling (e.g., each lawyer sets their own morning briefing time)",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Deterministic probes",openclaw:{value:"HTTP, file-system, shell commands",supported:"yes"},synth:{value:"Same, plus queue depth, API status, database checks; extensible probe registry",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Policy engine",openclaw:{value:"YAML-based rules; deterministic evaluation",supported:"yes"},synth:{value:"Same, plus integration with an Authorised Actions policy that governs what the agent is allowed to do autonomously—not just when to alert",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Escalation gate",openclaw:{value:"LLM called only when necessary (cheap-checks-first)",supported:"yes"},synth:{value:"Same, but the gate can choose between a cheap verification model (DeepSeek) and a powerful reasoning model (Kimi K2.6) depending on severity",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Action dispatcher",openclaw:{value:"Sends an alert to a messaging channel (Slack, WhatsApp, etc.)",supported:"partial"},synth:{value:"Creates a full autonomous task (research, draft, file, notify) and pushes it onto the same agent loop that handles user requests",supported:"yes"}},{category:"Memory and Context",feature:"Memory type",openclaw:{value:"Conversation history and basic file-based persistence",supported:"partial"},synth:{value:"Dual-store memory: vector search (Qdrant) for semantic recall + knowledge graph (KuzuDB) for structured entity relationships",supported:"yes"}},{category:"Memory and Context",feature:"Temporal awareness",openclaw:{value:"No built-in temporal tagging",supported:"no"},synth:{value:"Graphiti integration: every fact has a valid-time interval, enabling time-travel queries",supported:"yes"}},{category:"Memory and Context",feature:"Cross-session persistence",openclaw:{value:"Maintains context across chat sessions on the same messaging platform",supported:"partial"},synth:{value:"Channel-unified memory: interactions from WhatsApp, dashboard, browser, and desktop all feed the same knowledge graph",supported:"yes"}},{category:"Memory and Context",feature:"Vertical knowledge graphs",openclaw:{value:"None",supported:"no"},synth:{value:"Pre-built entity schemas for healthcare admin, procurement, and personal assistance—no manual configuration required",supported:"yes"}},{category:"Tools and Channels",feature:"Browser automation",openclaw:{value:"None built-in",supported:"no"},synth:{value:"Full browser automation via Playwright (or browser-use library), with deterministic primitives to minimise token cost",supported:"yes"}},{category:"Tools and Channels",feature:"Desktop GUI control",openclaw:{value:"None",supported:"no"},synth:{value:"VNC-based observe-propose-act loop (PyAutoGUI/xdotool), running inside isolated Firecracker microVMs",supported:"yes"}},{category:"Tools and Channels",feature:"WhatsApp integration",openclaw:{value:"Native, as an alert/chat surface",supported:"partial"},synth:{value:"Native, as both an alert/chat surface and an execution channel—the agent can send structured briefings, receive task updates, and manage conversations",supported:"yes"}},{category:"Tools and Channels",feature:"MCP (Model Context Protocol)",openclaw:{value:"Not supported",supported:"no"},synth:{value:"Full MCP integration: connect to any MCP server and the agent automatically discovers and uses those tools",supported:"yes"}},{category:"Tools and Channels",feature:"Custom APIs",openclaw:{value:"Users must write custom probe scripts",supported:"no"},synth:{value:"Users can provide an OpenAPI spec and Synth generates an MCP server that exposes those endpoints as tools—no code required",supported:"yes"}},{category:"Enterprise Readiness",feature:"Deployment",openclaw:{value:"Self-hosted on a VPS; requires manual setup of environment variables, API keys, and config files",supported:"partial"},synth:{value:"Self-hosted via Docker Compose or Kubernetes (Helm charts); one-command deployment",supported:"yes"}},{category:"Enterprise Readiness",feature:"Multi-tenancy",openclaw:{value:"None",supported:"no"},synth:{value:"Workspace-based isolation, RBAC (Admin, Operator, Viewer), and ethical walls for multi-client scenarios",supported:"yes"}},{category:"Enterprise Readiness",feature:"Compliance",openclaw:{value:"None",supported:"no"},synth:{value:"SOC 2 Type II roadmap, POPIA-aligned data handling, Bring Your Own Key, open-source code for full auditability",supported:"yes"}},{category:"Enterprise Readiness",feature:"Dashboard",openclaw:{value:"No dashboard; interaction via messaging apps and CLI",supported:"no"},synth:{value:"Full React dashboard with real-time task streaming, heartbeat monitor, memory explorer, cost analytics, and audit logs",supported:"yes"}},{category:"Enterprise Readiness",feature:"Support",openclaw:{value:"Community (GitHub issues)",supported:"partial"},synth:{value:"Enterprise support with SLA, dedicated onboarding, and professional services",supported:"yes"}},{category:"Scalability",feature:"Execution model",openclaw:{value:"Single-process daemon",supported:"no"},synth:{value:"Containerised microservices; agent tasks run in isolated Firecracker microVMs on Kubernetes",supported:"yes"}},{category:"Scalability",feature:"Horizontal scaling",openclaw:{value:"Limited—personal tool",supported:"no"},synth:{value:"Scale to thousands of concurrent tasks; the heartbeat, memory, and execution layers scale independently",supported:"yes"}},{category:"Scalability",feature:"Model-agnostic architecture",openclaw:{value:"Tied to specific LLM providers (configurable)",supported:"partial"},synth:{value:"Model-agnostic ModelRouter can hot-swap between API providers (Kimi, DeepSeek) and self-hosted open-source models (vLLM, Ollama) without code changes",supported:"yes"}}];function Nd({level:l}){return l==="yes"?r.jsx("span",{className:"voc-support voc-support-yes","aria-label":"Yes",children:"✓"}):l==="no"?r.jsx("span",{className:"voc-support voc-support-no","aria-label":"No",children:"✗"}):r.jsx("span",{className:"voc-support voc-support-part","aria-label":"Partial",children:"◐"})}function Pf(){const[l,m]=D.useState(!1),[d,g]=D.useState("All"),y=["All",...Array.from(new Set(jd.map(w=>w.category)))],b=jd.filter(w=>d==="All"||w.category===d),P=l?b:b.slice(0,8);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"voc-page",children:[r.jsxs("section",{className:"voc-hero",children:[r.jsx("div",{className:"voc-eyebrow",children:"Platform comparison"}),r.jsxs("h1",{className:"voc-hero-headline",children:["OpenClaw proved proactive AI",r.jsx("br",{}),"is the future.",r.jsx("br",{}),r.jsxs("em",{children:["Synth is the enterprise platform",r.jsx("br",{}),"that makes it real."]})]}),r.jsx("p",{className:"voc-hero-sub",children:"OpenClaw is an impressive open-source proof-of-concept — a personal, always-on monitoring assistant that alerts you when systems change. Synth took that same heartbeat philosophy and built a governed, multi-agent enterprise platform that does not just alert — it executes end-to-end business workflows autonomously."}),r.jsx("div",{className:"voc-hero-badges",children:r.jsxs("div",{className:"voc-brand-hero",children:[r.jsx("div",{className:"voc-brand-inline","aria-hidden":!0,children:r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})}),r.jsx("span",{className:"voc-badge-vs",children:"VS"}),r.jsx("div",{className:"voc-brand-inline","aria-hidden":!0,children:r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})})]})}),r.jsxs("div",{className:"voc-stack-callout",children:[r.jsxs("h3",{children:[r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]}),' says "Hey, something changed — you should look at this."']}),r.jsxs("p",{style:{marginBottom:"16px"},children:[r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{style:{color:"rgba(255,255,255,0.85)",fontWeight:600},children:"Synth"})]}),' says "Something changed. I have already investigated, drafted a summary, updated the case file, and sent the memo to the partner."']}),r.jsxs("p",{children:["That is the difference between a ",r.jsx("strong",{children:"notification layer"})," and an ",r.jsx("strong",{children:"execution layer"}),". OpenClaw is the proof-of-concept. Synth is the production platform."]})]}),r.jsxs("div",{className:"voc-tldr",children:[r.jsxs("div",{className:"voc-tldr-col voc-tldr-col-openclaw",children:[r.jsx("h4",{children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw — Proof of Concept"})]})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Personal, always-on monitoring assistant"}),r.jsx("li",{children:"Alerts you when systems change — does not execute"}),r.jsx("li",{children:"Single-agent, user-centred architecture"}),r.jsx("li",{children:"CLI, config files, and chat interface"}),r.jsx("li",{children:"Self-hosted on a VPS; manual setup required"}),r.jsx("li",{children:"Community support (GitHub issues)"}),r.jsx("li",{children:"Free, self-hosted — the user is the buyer"})]})]}),r.jsxs("div",{className:"voc-tldr-col voc-tldr-col-synth",children:[r.jsx("h4",{children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth — Enterprise Platform"})]})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Autonomous employee executing multi-step enterprise workflows"}),r.jsx("li",{children:"End-to-end execution: plans, uses tools, verifies, delivers"}),r.jsx("li",{children:"Multi-agent orchestration (Planner-Executor-Verifier)"}),r.jsx("li",{children:"Full React dashboard + WhatsApp execution channel"}),r.jsx("li",{children:"Docker Compose / Kubernetes; one-command deployment"}),r.jsx("li",{children:"Enterprise support with SLA"}),r.jsx("li",{children:"Paid subscription — the enterprise is the buyer"})]})]})]})]}),r.jsx("section",{className:"voc-section",children:r.jsxs("div",{className:"voc-wrap-sm",children:[r.jsx("p",{className:"voc-section-eyebrow",children:"The heartbeat difference"}),r.jsx("h2",{className:"voc-section-title",children:"From alert to action"}),r.jsx("p",{className:"voc-section-sub",children:"Both systems share the same philosophical origin — proactive AI that watches and responds. But what happens after the probe fires is where they diverge completely."}),r.jsxs("div",{className:"voc-quote-box",children:[r.jsxs("blockquote",{children:[`"OpenClaw's heartbeat says `,r.jsx("em",{children:"'Hey, something changed — you should look at this.'"}),r.jsx("br",{}),"Synth's heartbeat says ",r.jsx("em",{children:"'Something changed. I have already investigated, drafted a summary, updated the case file, and sent the memo to the partner.'"}),'"']}),r.jsx("p",{className:"voc-quote-attrib",children:"The architectural gap in a single sentence"})]})]})}),r.jsx("section",{className:"voc-section",children:r.jsxs("div",{className:"voc-wrap",children:[r.jsx("p",{className:"voc-section-eyebrow",children:"Feature comparison"}),r.jsx("h2",{className:"voc-section-title",children:"Seven dimensions, side by side"}),r.jsx("p",{className:"voc-section-sub",children:"We describe OpenClaw accurately — it is genuinely impressive open-source work. The gap is not in quality; it is in scope, governance, and execution depth."}),r.jsx("div",{className:"voc-filter-tabs",children:y.map(w=>r.jsx("button",{className:`voc-filter-tab ${d===w?"active":""}`,onClick:()=>{g(w),m(!1)},children:w},w))}),r.jsxs("div",{className:"voc-table",children:[r.jsxs("div",{className:"voc-table-head",children:[r.jsx("div",{className:"voc-th voc-th-feature",children:"Feature"}),r.jsx("div",{className:"voc-th voc-th-openclaw",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),r.jsx("div",{className:"voc-th voc-th-synth",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})})]}),P.map((w,E)=>{const T=b[E-1],I=!T||T.category!==w.category;return r.jsxs("div",{children:[I&&d==="All"&&r.jsx("div",{className:"voc-category-row",children:w.category}),r.jsxs("div",{className:"voc-row",children:[r.jsx("div",{className:"voc-cell voc-cell-feature",children:w.feature}),r.jsxs("div",{className:"voc-cell voc-cell-openclaw",children:[r.jsx(Nd,{level:w.openclaw.supported}),w.openclaw.value]}),r.jsxs("div",{className:"voc-cell voc-cell-synth",children:[r.jsx(Nd,{level:w.synth.supported}),w.synth.value]})]})]},E)})]}),!l&&b.length>8&&r.jsx("div",{className:"voc-show-more",children:r.jsxs("button",{className:"voc-show-more-btn",onClick:()=>m(!0),children:["Show all ",b.length," features ↓"]})})]})}),r.jsx("section",{className:"voc-section",children:r.jsxs("div",{className:"voc-wrap",children:[r.jsx("p",{className:"voc-section-eyebrow",children:"Deep dive"}),r.jsx("h2",{className:"voc-section-title",children:"Category by category"}),r.jsx("p",{className:"voc-section-sub",children:"The same seven dimensions, unpacked with the full technical detail that engineering teams and VCs need to evaluate."}),r.jsxs("div",{className:"voc-cat-grid",children:[r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"🏗️"}),r.jsx("h3",{children:"Architecture Philosophy"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Core concept"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"A personal, always-on AI assistant that monitors systems and alerts you or the team."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"An autonomous employee that executes complex, multi-step enterprise workflows across apps."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Primary loop"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:["Heartbeat → probe → policy → escalate → ",r.jsx("strong",{children:"notify"}),"."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:["Heartbeat → probe → policy → escalate → ",r.jsx("strong",{children:"execute full agent task"})," (plan, use tools, verify, deliver)."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Multi-agent"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Single-agent, user-centred."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Multi-agent orchestration: Planner-Executor-Verifier, plus specialised sub-agents."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"👤"}),r.jsx("h3",{children:"Target Users"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Primary user"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"Technical individuals — developers, hobbyists — comfortable with YAML, API keys, and server config."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Business professionals in regulated enterprises — lawyers, healthcare administrators, procurement officers — who never touch a terminal."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Buyer"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"The user themselves. Free, self-hosted."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"The enterprise. Paid subscription with compliance and support."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Experience"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"CLI, config files, and a multi-messenger chat interface."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Clean dashboard with task submission, live streaming, heartbeat configuration, memory explorer, and cost dashboards."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"💓"}),r.jsx("h3",{children:"Proactive Heartbeat"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Scheduler"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"Configurable intervals and active hours."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Same, plus per-user scheduling (e.g., each lawyer sets their own morning briefing time)."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Deterministic probes"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"HTTP, file-system, shell commands."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Same, plus queue depth, API status, database checks; extensible probe registry."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Policy engine"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"YAML-based rules; deterministic evaluation."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Same, plus integration with an Authorised Actions policy that governs what the agent is allowed to do autonomously — not just when to alert."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Escalation gate"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"LLM called only when necessary (cheap-checks-first)."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Same, but the gate can choose between a cheap verification model (DeepSeek) and a powerful reasoning model (Kimi K2.6) depending on severity."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Action dispatcher"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Sends an alert to a messaging channel (Slack, WhatsApp, etc.)."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Creates a full autonomous task (research, draft, file, notify) and pushes it onto the same agent loop that handles user requests."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"🧠"}),r.jsx("h3",{children:"Memory and Context"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Memory type"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"Conversation history and basic file-based persistence."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Dual-store memory: vector search (Qdrant) for semantic recall + knowledge graph (KuzuDB) for structured entity relationships."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Temporal awareness"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"No built-in temporal tagging."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:'Graphiti integration: every fact has a valid-time interval, enabling "what was the status of this supplier last week?" queries.'})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Cross-session persistence"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Maintains context across chat sessions on the same messaging platform."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Channel-unified memory: interactions from WhatsApp, dashboard, browser, and desktop all feed the same knowledge graph."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Vertical knowledge graphs"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Pre-built entity schemas for healthcare admin, procurement, and personal assistance — no manual configuration required."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"🛠️"}),r.jsx("h3",{children:"Tools and Channels"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Browser automation"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"None built-in."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Full browser automation via Playwright (or browser-use library), with deterministic primitives to minimise token cost."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Desktop GUI control"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"VNC-based observe-propose-act loop (PyAutoGUI/xdotool), running inside isolated Firecracker microVMs."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"WhatsApp integration"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Native, as an alert/chat surface."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Native, as both an alert/chat surface and an execution channel — the agent can send structured briefings, receive task updates, and manage conversations."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"MCP (Model Context Protocol)"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Not supported."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Full MCP integration: connect to any MCP server (filesystem, GitHub, Postgres, custom APIs) and the agent automatically discovers and uses those tools."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Custom APIs"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Users must write custom probe scripts."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Users can provide an OpenAPI spec and Synth generates an MCP server that exposes those endpoints as tools — no code required."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"🏢"}),r.jsx("h3",{children:"Enterprise Readiness"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Deployment"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"Self-hosted on a VPS; requires manual setup of environment variables, API keys, and config files."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Self-hosted via Docker Compose or Kubernetes (Helm charts); one-command deployment."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Multi-tenancy"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Workspace-based isolation, RBAC (Admin, Operator, Viewer), and ethical walls for multi-client scenarios."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Compliance"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"SOC 2 Type II roadmap, POPIA-aligned data handling, Bring Your Own Key, open-source code for full auditability."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Dashboard"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"No dashboard; interaction via messaging apps and CLI."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Full React dashboard with real-time task streaming, heartbeat monitor, memory explorer, cost analytics, and audit logs."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Support"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Community (GitHub issues)."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Enterprise support with SLA, dedicated onboarding, and professional services."})]})]})]}),r.jsxs("div",{className:"voc-cat-card",children:[r.jsxs("div",{className:"voc-cat-header",children:[r.jsx("span",{style:{fontSize:"18px"},children:"⚡"}),r.jsx("h3",{children:"Scalability"})]}),r.jsxs("div",{className:"voc-cat-body",children:[r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Execution model"}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})}),"Single-process daemon."]}),r.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[r.jsx("div",{className:"voc-cat-cell-label",children:r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})}),"Containerised microservices; agent tasks run in isolated Firecracker microVMs on Kubernetes."]})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Horizontal scaling"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Limited — personal tool."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Scale to thousands of concurrent tasks; the heartbeat, memory, and execution layers scale independently."})]}),r.jsxs("div",{className:"voc-cat-row",children:[r.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Model-agnostic"}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Tied to specific LLM providers (configurable)."}),r.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Model-agnostic ModelRouter can hot-swap between API providers (Kimi, DeepSeek) and self-hosted open-source models (vLLM, Ollama) without code changes."})]})]})]})]})]})}),r.jsx("section",{className:"voc-section",children:r.jsxs("div",{className:"voc-wrap",children:[r.jsx("p",{className:"voc-section-eyebrow",children:"For investors"}),r.jsx("h2",{className:"voc-section-title",children:"Why this comparison matters to VCs"}),r.jsx("p",{className:"voc-section-sub",children:"OpenClaw is the proof-of-concept that proactive AI is the future. Synth is the enterprise platform that makes that future safe, governable, and profitable."}),r.jsxs("div",{className:"voc-vc-box",children:[r.jsxs("h3",{children:[r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",r.jsx("span",{children:"OpenClaw"})]})," proved the market.",r.jsxs("span",{className:"voc-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",r.jsx("span",{children:"Synth"})]})," owns it."]}),r.jsxs("div",{className:"voc-vc-points",children:[r.jsxs("div",{className:"voc-vc-point",children:[r.jsx("div",{className:"voc-vc-point-icon",children:"🚀"}),r.jsxs("div",{children:[r.jsx("h5",{children:"From PoC to platform"}),r.jsx("p",{children:"OpenClaw validated that proactive heartbeat AI is valuable. Synth took that validation and built the enterprise-grade infrastructure — governance, compliance, multi-tenancy, and end-to-end execution — that makes it deployable in regulated industries."})]})]}),r.jsxs("div",{className:"voc-vc-point",children:[r.jsx("div",{className:"voc-vc-point-icon",children:"🏢"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Enterprise buyer, enterprise budget"}),r.jsx("p",{children:"OpenClaw's buyer is a hobbyist with a VPS. Synth's buyer is a law firm, hospital, or bank with a procurement process and a compliance team. The revenue per customer is orders of magnitude larger."})]})]}),r.jsxs("div",{className:"voc-vc-point",children:[r.jsx("div",{className:"voc-vc-point-icon",children:"🔒"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Governance as a moat"}),r.jsx("p",{children:"OpenClaw has no compliance story. Synth has SOC 2 Type II roadmap, POPIA alignment, RBAC, ethical walls, and Bring Your Own Key. In regulated industries, governance is not a feature — it is the price of entry."})]})]}),r.jsxs("div",{className:"voc-vc-point",children:[r.jsx("div",{className:"voc-vc-point-icon",children:"📈"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Execution depth = retention"}),r.jsx("p",{children:"An alert tool can be replaced. An autonomous employee that has already filed the claim, drafted the brief, and updated the CRM cannot be ripped out without operational disruption. Synth's execution depth creates switching costs OpenClaw cannot match."})]})]})]}),r.jsxs("p",{className:"voc-vc-note",children:[r.jsx("strong",{children:"The acquisition thesis:"})," OpenClaw is the open-source inspiration that proved proactive AI is the future. Synth is the enterprise platform that makes that future safe, governable, and deeply integrated into the workflows of regulated industries. A strategic acquirer — whether a Salesforce, Microsoft, or African telecoms group — looking to own the agentic layer in emerging markets will find Synth's compliance, multi-tenancy, and execution depth far more valuable than a personal monitoring daemon. Synth is the platform. That is where the enterprise relationships and recurring revenue live."]})]})]})})]})]})}const Zo=[{feature:"Task execution",chatgpt:{value:"Tells you what to do",supported:"partial"},synth:{value:"Does it for you — end to end",supported:"yes"}},{feature:"Works while you're offline",chatgpt:{value:"No — needs you in the loop at every step",supported:"no"},synth:{value:"Yes — runs tasks in the background autonomously",supported:"yes"}},{feature:"Proactive alerts",chatgpt:{value:"Never — waits to be asked",supported:"no"},synth:{value:"Yes — pushes urgent tasks and flags conflicts before you notice",supported:"yes"}},{feature:"Morning briefing",chatgpt:{value:"Not available",supported:"no"},synth:{value:"Daily plan delivered to your WhatsApp before 7 AM",supported:"yes"}},{feature:"Works in WhatsApp & Telegram",chatgpt:{value:"No — requires the ChatGPT app or browser",supported:"no"},synth:{value:"Yes — works in apps you already use every day",supported:"yes"}},{feature:"Long-term memory",chatgpt:{value:"Limited — memory can be enabled but is shallow",supported:"partial"},synth:{value:"Deep — remembers your people, preferences, and patterns over months",supported:"yes"}},{feature:"Multi-step autonomous workflows",chatgpt:{value:"Sequential — one step at a time with your guidance",supported:"partial"},synth:{value:"Parallel — multiple agents execute simultaneously",supported:"yes"}},{feature:"Business tool integrations",chatgpt:{value:"Limited plugins — no deep CRM, ERP, or accounting connections",supported:"partial"},synth:{value:"Sage, Xero, Salesforce, HubSpot, Google Workspace, and more",supported:"yes"}},{feature:"Healthcare admin",chatgpt:{value:"Not designed for claims, codes, or payer rules",supported:"no"},synth:{value:"ICD-10 coding, claim denial resolution, scheduling, refill reminders",supported:"yes"}},{feature:"POPIA / local compliance (SA)",chatgpt:{value:"No local compliance framework for SA",supported:"no"},synth:{value:"POPIA-compliant, data residency in South Africa",supported:"yes"}},{feature:"Delivers finished outputs",chatgpt:{value:"Gives you pieces to assemble yourself",supported:"partial"},synth:{value:"Delivers the finished product — booked, sent, submitted, done",supported:"yes"}},{feature:"Pricing",chatgpt:{value:"From $20/month (ChatGPT Plus)",supported:"partial"},synth:{value:"From $15/month — same power, built for execution",supported:"yes"}}],Af=[{icon:"🌅",scenario:"Starting your work day",chatgpt:"You open ChatGPT, paste your schedule, and ask what to prioritise. You repeat this every morning. You're doing the thinking.",synth:"Synth sends you a briefing at 6:45 AM — meetings prepped, urgent emails flagged, your day already planned. You read, you act.",verdict:"synth"},{icon:"📊",scenario:"Competitor research for a strategy meeting",chatgpt:"ChatGPT summarises what it knows up to its training cutoff. You still need to verify everything, find current data, and format the output yourself.",synth:"Synth browses live sources, pulls pricing pages, reads press releases, builds a structured comparison doc, and posts it to your Slack — before the meeting starts.",verdict:"synth"},{icon:"💬",scenario:"Brainstorming and creative thinking",chatgpt:"ChatGPT is excellent here — fast, articulate, endlessly patient with iteration. It's the best thinking partner for open-ended exploration.",synth:"Synth can help, but for pure ideation and creative back-and-forth, ChatGPT's conversational depth is genuinely stronger.",verdict:"chatgpt"},{icon:"❌",scenario:"Resolving a denied insurance claim",chatgpt:"ChatGPT can explain what a denial code means. It cannot access your claims system, draft a compliant appeal, or track the resubmission deadline.",synth:"Synth identifies the denial reason, drafts the appeal using the payer's specific requirements, logs the deadline, and tracks the outcome — automatically.",verdict:"synth"},{icon:"✈️",scenario:"Booking a business trip",chatgpt:"ChatGPT suggests flight options based on general knowledge. It cannot search live prices, book anything, or add the trip to your calendar.",synth:"Synth searches live prices, books within your stated budget, adds flights and hotel to your calendar, and notifies you if prices drop — in one WhatsApp message.",verdict:"synth"},{icon:"💊",scenario:"Managing chronic patient prescriptions",chatgpt:"ChatGPT can explain what a drug does or describe best practices. It has no access to patient records, cannot send reminders, and was not built for clinical workflows.",synth:"Synth identifies patients due for refills, sends personalised WhatsApp reminders, and logs confirmations — POPIA-compliant and connected to your EHR system.",verdict:"synth"},{icon:"📝",scenario:"Writing and editing content",chatgpt:"ChatGPT is a world-class writing assistant — drafts, edits, rewrites, tone adjustments. For pure writing quality and conversational refinement, it remains exceptional.",synth:"Synth can write and draft, but if your goal is iteration, nuance, and creative refinement of language, ChatGPT's depth here is hard to beat.",verdict:"chatgpt"},{icon:"🤝",scenario:"Preparing for a sales meeting",chatgpt:"ChatGPT can help you structure talking points if you paste in the context. You do the research. You find the info. You assemble the brief.",synth:"Synth researches the prospect, pulls their latest news, identifies likely objections, and delivers a formatted brief to your WhatsApp an hour before the call.",verdict:"synth"}];function kd({level:l}){return l==="yes"?r.jsx("span",{className:"support-icon support-yes","aria-label":"Yes",children:"✓"}):l==="no"?r.jsx("span",{className:"support-icon support-no","aria-label":"No",children:"✗"}):r.jsx("span",{className:"support-icon support-part","aria-label":"Partial",children:"◐"})}function Ff({verdict:l}){return l==="synth"?r.jsx("span",{className:"verdict-badge verdict-synth",children:"Use Synth"}):l==="chatgpt"?r.jsx("span",{className:"verdict-badge verdict-chatgpt",children:"Use ChatGPT"}):r.jsx("span",{className:"verdict-badge verdict-both",children:"Either works"})}function zf(){const[l,m]=D.useState(0),d=[{prompt:"Research our top 5 competitors and get it into Slack before the 3 PM strategy meeting.",chatgptResponse:`Sure! Here's a framework for researching your top 5 competitors:

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

All activity logged in GoodX with timestamps.`,synthLabel:"Synth connected to your EHR, identified patients, sent reminders, and logged everything. Zero manual work."}],g=d[l];return r.jsxs("div",{className:"theatre-wrap",children:[r.jsx("div",{className:"theatre-tabs",children:d.map((y,b)=>r.jsxs("button",{className:`theatre-tab ${l===b?"active":""}`,onClick:()=>m(b),children:["Task ",b+1]},b))}),r.jsxs("div",{className:"theatre-prompt",children:[r.jsx("span",{className:"theatre-prompt-label",children:"The task"}),r.jsxs("p",{className:"theatre-prompt-text",children:['"',g.prompt,'"']})]}),r.jsxs("div",{className:"theatre-split",children:[r.jsxs("div",{className:"theatre-side theatre-chatgpt",children:[r.jsx("div",{className:"theatre-side-header",children:r.jsx("span",{className:"theatre-brand theatre-brand-chatgpt",children:"ChatGPT"})}),r.jsx("div",{className:"theatre-output theatre-output-chatgpt",children:r.jsx("pre",{className:"theatre-pre",children:g.chatgptResponse})}),r.jsxs("p",{className:"theatre-verdict theatre-verdict-chatgpt",children:["⚠ ",g.chatgptLabel]})]}),r.jsx("div",{className:"theatre-vs",children:"vs"}),r.jsxs("div",{className:"theatre-side theatre-synth",children:[r.jsx("div",{className:"theatre-side-header",children:r.jsx("span",{className:"theatre-brand theatre-brand-synth",children:"Synth"})}),r.jsx("div",{className:"theatre-output theatre-output-synth",children:r.jsx("pre",{className:"theatre-pre",children:g.synthResponse})}),r.jsxs("p",{className:"theatre-verdict theatre-verdict-synth",children:["✓ ",g.synthLabel]})]})]})]})}function Tf(){const[l,m]=D.useState(!1),d=l?Zo:Zo.slice(0,7);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"vs-page",children:[r.jsxs("section",{className:"vs-hero",children:[r.jsx("div",{className:"vs-eyebrow",children:"Honest comparison"}),r.jsxs("h1",{className:"vs-hero-headline",children:["ChatGPT advises.",r.jsx("br",{}),r.jsx("em",{children:"Synth executes."})]}),r.jsx("p",{className:"vs-hero-sub",children:"ChatGPT is an exceptional thinking partner. Synth is something different — an autonomous agent that works across your business, healthcare practice, or daily life without waiting to be asked."}),r.jsxs("div",{className:"vs-hero-badges",children:[r.jsx("span",{className:"vs-badge vs-badge-chatgpt",children:"ChatGPT"}),r.jsx("span",{className:"vs-badge-vs",children:"VS"}),r.jsx("span",{className:"vs-badge vs-badge-synth",children:"Synth"})]}),r.jsxs("div",{className:"brand-compare",children:[r.jsxs("div",{className:"brand-card",children:[r.jsx("img",{src:"/logo.png",alt:"Synth logo"}),r.jsxs("div",{children:[r.jsx("div",{className:"brand-name",children:"synth"}),r.jsx("div",{className:"brand-name small",children:"Autonomous agent"})]})]}),r.jsxs("div",{className:"brand-card",children:[r.jsx("img",{src:"/compare%20images/Chatgpt.jpg",alt:"ChatGPT logo"}),r.jsxs("div",{children:[r.jsx("div",{className:"brand-name",children:"ChatGPT"}),r.jsx("div",{className:"brand-name small",children:"Assistant & playground"})]})]})]})]}),r.jsx("section",{className:"vs-section",children:r.jsxs("div",{className:"vs-wrap",children:[r.jsx("p",{className:"vs-section-eyebrow",children:"See the difference"}),r.jsx("h2",{className:"vs-section-title",children:"Same task. Completely different outcome."}),r.jsx("p",{className:"vs-section-sub",children:"The gap between the two isn't capability — it's execution. ChatGPT tells you how. Synth handles it."}),r.jsx(zf,{})]})}),r.jsx("section",{className:"vs-section",children:r.jsxs("div",{className:"vs-wrap",children:[r.jsx("p",{className:"vs-section-eyebrow",children:"Feature comparison"}),r.jsx("h2",{className:"vs-section-title",children:"What each tool actually does"}),r.jsx("p",{className:"vs-section-sub",children:"A fair, feature-by-feature comparison. We included two categories where ChatGPT genuinely wins — because honesty is how you build trust."}),r.jsxs("div",{className:"comp-table",children:[r.jsxs("div",{className:"comp-table-head",children:[r.jsx("div",{className:"comp-th comp-th-feature",children:"Feature"}),r.jsx("div",{className:"comp-th comp-th-chatgpt",children:"ChatGPT"}),r.jsx("div",{className:"comp-th comp-th-synth",children:"Synth"})]}),d.map((g,y)=>r.jsxs("div",{className:"comp-row",children:[r.jsx("div",{className:"comp-cell comp-cell-feature",children:g.feature}),r.jsxs("div",{className:"comp-cell comp-cell-chatgpt",children:[r.jsx(kd,{level:g.chatgpt.supported}),g.chatgpt.value]}),r.jsxs("div",{className:"comp-cell comp-cell-synth",children:[r.jsx(kd,{level:g.synth.supported}),g.synth.value]})]},y))]}),!l&&r.jsx("div",{className:"comp-show-more",children:r.jsxs("button",{className:"comp-show-more-btn",onClick:()=>m(!0),children:["Show all ",Zo.length," features ↓"]})})]})}),r.jsx("section",{className:"vs-section",children:r.jsxs("div",{className:"vs-wrap",children:[r.jsx("p",{className:"vs-section-eyebrow",children:"When to use each"}),r.jsx("h2",{className:"vs-section-title",children:"The honest answer by scenario"}),r.jsx("p",{className:"vs-section-sub",children:"We'll tell you when ChatGPT is the better choice. We'd rather be useful than win an argument."}),r.jsx("div",{className:"use-grid",children:Af.map((g,y)=>r.jsxs("div",{className:"use-card",children:[r.jsxs("div",{className:"use-card-top",children:[r.jsxs("div",{className:"use-scenario",children:[r.jsx("span",{className:"use-icon",children:g.icon}),g.scenario]}),r.jsx(Ff,{verdict:g.verdict})]}),r.jsxs("div",{className:"use-comparison",children:[r.jsxs("div",{className:"use-col use-col-chatgpt",children:[r.jsx("p",{className:"use-col-label",children:"ChatGPT"}),r.jsx("p",{className:"use-col-text",children:g.chatgpt})]}),r.jsxs("div",{className:"use-col use-col-synth",children:[r.jsx("p",{className:"use-col-label",children:"Synth"}),r.jsx("p",{className:"use-col-text",children:g.synth})]})]})]},y))})]})})]})]})}const Sd=[{category:"Fundamentals",feature:"What it actually is",trixta:{value:"Infrastructure layer — a 'DeCloud' for building and running agentic systems",supported:"partial"},synth:{value:"agent designed to independently execute end-to-end tasks like multi-source research and web-browsing for real people and businesses",supported:"yes"}},{category:"Fundamentals",feature:"Who it's built for",trixta:{value:"Developers and enterprise engineering teams building agentic systems from scratch",supported:"partial"},synth:{value:"Professionals, business teams, and healthcare operators who need work done now",supported:"yes"}},{category:"Fundamentals",feature:"Time to first value",trixta:{value:"Weeks to months — requires architecture design, development, and deployment",supported:"no"},synth:{value:"Under 3 minutes — connect your tools, start messaging",supported:"yes"}},{category:"Fundamentals",feature:"Some technical knowledge required",trixta:{value:"High — primitives, runtimes, and distributed systems concepts required",supported:"no"},synth:{value:"None — if you can send a WhatsApp message, you can use Synth",supported:"yes"}},{category:"Execution",feature:"Autonomous task execution",trixta:{value:"Provides the infrastructure for others to build autonomous execution — not out of the box",supported:"partial"},synth:{value:"Built in — give Synth a task and it executes every step without you",supported:"yes"}},{category:"Execution",feature:"Proactive alerts & morning briefing",trixta:{value:"Not a feature — would need to be custom-built on top of Trixta's infrastructure",supported:"no"},synth:{value:"Daily briefing delivered to WhatsApp before 7 AM — zero setup required",supported:"yes"}},{category:"Execution",feature:"Works in WhatsApp & Telegram",trixta:{value:"No — requires custom front-end development to deliver any user-facing output",supported:"no"},synth:{value:"Native — Synth lives in the apps your team already uses every day",supported:"yes"}},{category:"Execution",feature:"Long-term memory & personalisation",trixta:{value:"Possible to build via Trixta primitives — but requires significant engineering effort",supported:"partial"},synth:{value:"Built in — Synth learns your preferences, patterns, and relationships over time",supported:"yes"}},{category:"Verticals",feature:"Marketing workflows",trixta:{value:"Infrastructure only — you must build campaign and creative workflows yourself",supported:"partial"},synth:{value:"Pre-built — campaign generation, competitor research, content, and analytics ready to use",supported:"yes"}},{category:"Verticals",feature:"Sales automation",trixta:{value:"No native sales tools — engineering teams must build from primitives",supported:"no"},synth:{value:"Lead enrichment, outreach drafting, deal briefs, and CRM sync — out of the box",supported:"yes"}},{category:"Verticals",feature:"Finance & analysis",trixta:{value:"No native financial capabilities — custom development required for each use case",supported:"no"},synth:{value:"Live market data, financial modelling, report collection, and portfolio monitoring",supported:"yes"}},{category:"Verticals",feature:"Healthcare admin",trixta:{value:"Not designed for healthcare — no ICD-10, payer rules, or clinical workflow support",supported:"no"},synth:{value:"ICD-10/CPT/HCPCS coding, claim denial resolution, scheduling, refill reminders — POPIA-compliant",supported:"yes"}},{category:"Verticals",feature:"Personal AI assistant",trixta:{value:"Infrastructure only — no personal assistant capabilities without custom development",supported:"no"},synth:{value:"Full personal chief of staff — day planning, scheduling, travel, communications via WhatsApp",supported:"yes"}},{category:"Integrations",feature:"Business tool connections",trixta:{value:"Integrations must be custom-built using Trixta's wrapper and Space primitives",supported:"partial"},synth:{value:"Sage, Xero, HubSpot, Salesforce, Google Workspace, Microsoft 365 — native connectors",supported:"yes"}},{category:"Integrations",feature:"South African tools (Sage, GoodX, SARS)",trixta:{value:"No local market integrations — global infrastructure, no SA-specific connectors",supported:"no"},synth:{value:"Sage, GoodX, SA medical schemes, SARS eFiling — built for the local market",supported:"yes"}},{category:"Integrations",feature:"Custom MCP / API access",trixta:{value:"Yes — Trixta's core architecture is built for custom integration and extension",supported:"yes"},synth:{value:"Yes — custom MCP servers and REST API available ",supported:"yes"}},{category:"Pricing",feature:"Entry price",trixta:{value:"$60/month for a team of less than 10, $200/month/10-50 heads, all billed  annually",supported:"no"},synth:{value:"$15/month per seat — accessible to individuals, SMEs, and enterprise alike",supported:"yes"}},{category:"Pricing",feature:"Healthcare / enterprise pricing",trixta:{value:"Custom enterprise contracts — typically $10,000+ per month at scale",supported:"no"},synth:{value:"$499/facility/month — purpose-built for SA healthcare, POPIA-compliant",supported:"yes"}},{category:"Pricing",feature:"Free tier or trial",trixta:{value:"available —  30-minute, guided, AI-driven onboarding and strategy session",supported:"no"},synth:{value:"Free during beta — no credit card required",supported:"yes"}},{category:"Pricing",feature:"Pricing transparency",trixta:{value:"  30-minute, guided, AI-driven onboarding and strategy session priced annually, pricing not published on website",supported:"yes"},synth:{value:"$15, $35, $195/month. Healthcare from $499/facility",supported:"yes"}}],_f=[{sector:"Marketing & Advertising",icon:"📈",trixta:"Infrastructure only — no marketing tools. Teams must build campaign workflows from scratch using Trixta primitives.",synth:"Campaign generation, competitor intelligence, social content, email sequences, and marketing analytics — ready to use immediately.",winner:"synth"},{sector:"Sales",icon:"🤝",trixta:"No native sales capabilities. CRM integration and outreach automation require custom development.",synth:"Lead enrichment, personalised outreach, deal briefs, CRM sync (Salesforce, HubSpot, Pipedrive) — out of the box.",winner:"synth"},{sector:"Finance",icon:"💹",trixta:"No financial tools. Market data, modelling, and reporting workflows must be custom-engineered.",synth:"Live market analysis, DCF modelling, report collection for hundreds of firms, portfolio monitoring — delivered autonomously.",winner:"synth"},{sector:"Product Management",icon:"🧩",trixta:"No product tools. PRD generation, competitive mapping, and roadmapping not available without custom builds.",synth:"Strategy docs, roadmaps, PRDs, market segmentation, competitive maps — drafted, researched, and kept current.",winner:"synth"},{sector:"Healthcare Admin",icon:"🏥",trixta:"Not designed for healthcare. No ICD-10, CPT, payer rules, EHR integration, or POPIA compliance.",synth:"Claim denial resolution, ICD-10/CPT coding, payer rule monitoring, appointment scheduling, refill reminders — POPIA-compliant.",winner:"synth"},{sector:"Personal Productivity",icon:"🙋",trixta:"Not a personal tool. Trixta requires developers to build user-facing applications — individuals cannot use it directly.",synth:"Daily briefing, proactive alerts, autonomous task execution, long-term memory — via WhatsApp. No app download.",winner:"synth"},{sector:"Developer / Infrastructure",icon:"⚙️",trixta:"Trixta's home turf. Deep infrastructure primitives, composable runtimes, and the DeCloud architecture are genuinely impressive for engineering-led organisations.",synth:"Custom MCP servers and REST API available — but Synth is an application layer, not an infrastructure platform. For pure infrastructure needs, Trixta goes deeper.",winner:"trixta"}];function Cd({level:l}){return l==="yes"?r.jsx("span",{className:"vt-support vt-support-yes","aria-label":"Yes",children:"✓"}):l==="no"?r.jsx("span",{className:"vt-support vt-support-no","aria-label":"No",children:"✗"}):r.jsx("span",{className:"vt-support vt-support-part","aria-label":"Partial",children:"◐"})}function Rf(){const[l,m]=D.useState(!1),[d,g]=D.useState("All"),y=["All",...Array.from(new Set(Sd.map(w=>w.category)))],b=Sd.filter(w=>d==="All"||w.category===d),P=l?b:b.slice(0,8);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"vt-page",children:[r.jsxs("section",{className:"vt-hero",children:[r.jsx("div",{className:"vt-eyebrow",children:"Honest comparison"}),r.jsxs("h1",{className:"vt-hero-headline",children:["Trixta builds the roads.",r.jsx("br",{}),r.jsx("em",{children:"Synth drives the car."})]}),r.jsx("p",{className:"vt-hero-sub",children:"Trixta is impressive infrastructure for engineering teams building agentic systems. Synth is the product those teams wish already existed — autonomous execution for real business work, available in WhatsApp from day one."}),r.jsx("div",{className:"vt-hero-badges",children:r.jsxs("div",{className:"vt-brand-hero",children:[r.jsx("div",{className:"vt-brand-inline","aria-hidden":!0,children:r.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})}),r.jsx("span",{className:"vt-badge-vs",children:"VS"}),r.jsx("div",{className:"vt-brand-inline","aria-hidden":!0,children:r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})})]})}),r.jsxs("div",{className:"vt-tldr",children:[r.jsxs("div",{className:"vt-tldr-col vt-tldr-col-trixta",children:[r.jsx("h4",{children:r.jsxs("span",{className:"vt-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"}),r.jsx("span",{children:"Trixta in plain English"})]})}),r.jsxs("ul",{children:[r.jsx("li",{children:"Enterprise infrastructure for building agentic systems from code"}),r.jsx("li",{children:"Targets developers and engineering organisations"}),r.jsx("li",{children:"Requires weeks of development before any business value"}),r.jsx("li",{children:"No native healthcare, sales, finance, or personal assistant capabilities"}),r.jsx("li",{children:"No South African market integrations"})]})]}),r.jsxs("div",{className:"vt-tldr-col vt-tldr-col-synth",children:[r.jsx("h4",{children:"Synth in plain English"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Autonomous AI agent that executes real business tasks end-to-end"}),r.jsx("li",{children:"Built for professionals, business teams, and healthcare operators"}),r.jsx("li",{children:"From $15/month — transparent, publicly listed pricing"}),r.jsx("li",{children:"Live in under 3 minutes — no development required"}),r.jsx("li",{children:"Marketing, Sales, Finance, Product, Healthcare, Personal — ready to use"}),r.jsx("li",{children:"Built for South Africa — Sage, GoodX, SA medical schemes, SARS eFiling"})]})]})]})]}),r.jsx("section",{className:"vt-section",children:r.jsxs("div",{className:"vt-wrap",children:[r.jsx("p",{className:"vt-section-eyebrow",children:"Sector by sector"}),r.jsx("h2",{className:"vt-section-title",children:"What each platform actually covers"}),r.jsx("p",{className:"vt-section-sub",children:"Trixta focuses on one sector: developer infrastructure. Synth was built to serve six — and to serve them without engineering overhead."}),r.jsx("div",{className:"vt-sector-grid",children:_f.map((w,E)=>r.jsxs("div",{className:"vt-sector-card",children:[r.jsxs("div",{className:"vt-sector-header",children:[r.jsxs("div",{className:"vt-sector-name",children:[r.jsx("span",{className:"vt-sector-icon",children:w.icon}),w.sector]}),r.jsx("span",{className:`vt-sector-winner ${w.winner==="synth"?"vt-winner-synth":w.winner==="trixta"?"vt-winner-trixta":"vt-winner-both"}`,children:w.winner==="synth"?r.jsxs("span",{className:"vt-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})," Synth wins"]}):w.winner==="trixta"?r.jsxs("span",{className:"vt-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})," wins"]}):"Both work"})]}),r.jsxs("div",{className:"vt-sector-body",children:[r.jsxs("div",{className:"vt-sector-col vt-sector-col-trixta",children:[r.jsxs("p",{className:"vt-sector-col-label vt-brand-inline",children:[r.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})," ",r.jsx("span",{children:"Trixta"})]}),r.jsx("p",{className:"vt-sector-col-text",children:w.trixta})]}),r.jsxs("div",{className:"vt-sector-col vt-sector-col-synth",children:[r.jsxs("p",{className:"vt-sector-col-label vt-brand-inline",children:[r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})," ",r.jsx("span",{children:"Synth"})]}),r.jsx("p",{className:"vt-sector-col-text",children:w.synth})]})]})]},E))})]})}),r.jsx("section",{className:"vt-section",children:r.jsxs("div",{className:"vt-wrap",children:[r.jsx("p",{className:"vt-section-eyebrow",children:"Feature comparison"}),r.jsx("h2",{className:"vt-section-title",children:"Feature by feature, honestly"}),r.jsx("p",{className:"vt-section-sub",children:"We include the one category where Trixta genuinely wins — pure infrastructure depth. Everything else tells a clear story."}),r.jsx("div",{className:"vt-filter-tabs",children:y.map(w=>r.jsx("button",{className:`vt-filter-tab ${d===w?"active":""}`,onClick:()=>{g(w),m(!1)},children:w},w))}),r.jsxs("div",{className:"vt-table",children:[r.jsxs("div",{className:"vt-table-head",children:[r.jsx("div",{className:"vt-th vt-th-feature",children:"Feature"}),r.jsx("div",{className:"vt-th vt-th-trixta",children:r.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})}),r.jsx("div",{className:"vt-th vt-th-synth",children:r.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})})]}),P.map((w,E)=>{const T=b[E-1],I=!T||T.category!==w.category;return r.jsxs("div",{children:[I&&d==="All"&&r.jsx("div",{className:"vt-category-row",children:w.category}),r.jsxs("div",{className:"vt-row",children:[r.jsx("div",{className:"vt-cell vt-cell-feature",children:w.feature}),r.jsxs("div",{className:"vt-cell vt-cell-trixta",children:[r.jsx(Cd,{level:w.trixta.supported}),w.trixta.value]}),r.jsxs("div",{className:"vt-cell vt-cell-synth",children:[r.jsx(Cd,{level:w.synth.supported}),w.synth.value]})]})]},E)})]}),!l&&b.length>8&&r.jsx("div",{className:"vt-show-more",children:r.jsxs("button",{className:"vt-show-more-btn",onClick:()=>m(!0),children:["Show all ",b.length," features ↓"]})})]})}),r.jsx("section",{className:"vt-section",children:r.jsxs("div",{className:"vt-wrap",children:[r.jsx("p",{className:"vt-section-eyebrow",children:"For investors"}),r.jsx("h2",{className:"vt-section-title",children:"Why this comparison matters to VCs"}),r.jsx("p",{className:"vt-section-sub",children:"Trixta and Synth are not competitors — they're at different layers of the stack. That's the opportunity."}),r.jsxs("div",{className:"vt-vc-box",children:[r.jsx("h3",{children:"Synth occupies the layer Trixta cannot reach"}),r.jsxs("div",{className:"vt-vc-points",children:[r.jsxs("div",{className:"vt-vc-point",children:[r.jsx("div",{className:"vt-vc-point-icon",children:"🌍"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Underserved market"}),r.jsx("p",{children:"South Africa and sub-Saharan Africa have no native AI orchestration platform. Synth is built for this market — local tools, local compliance, local pricing."})]})]}),r.jsxs("div",{className:"vt-vc-point",children:[r.jsx("div",{className:"vt-vc-point-icon",children:"📱"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Distribution moat"}),r.jsx("p",{children:"WhatsApp has 90%+ penetration in South Africa. Synth delivers AI through the channel people already use — Trixta cannot compete here."})]})]}),r.jsxs("div",{className:"vt-vc-point",children:[r.jsx("div",{className:"vt-vc-point-icon",children:"🏥"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Healthcare vertical"}),r.jsx("p",{children:"No global AI platform has built a POPIA-compliant healthcare admin layer for SA medical schemes and EHR systems. Synth owns this by default."})]})]}),r.jsxs("div",{className:"vt-vc-point",children:[r.jsx("div",{className:"vt-vc-point-icon",children:"💰"}),r.jsxs("div",{children:[r.jsx("h5",{children:"Accessible price point"}),r.jsx("p",{children:"At $15/month, Synth can acquire customers at 100x the volume of enterprise infrastructure platforms. Higher volume, faster growth, stronger network effects."})]})]})]}),r.jsxs("p",{className:"vt-vc-note",children:[r.jsx("strong",{children:"The acquisition thesis:"})," Trixta is building infrastructure that enterprise teams need to build what Synth already is. A strategic acquirer — whether a Salesforce, Microsoft, or African telecoms group — looking to own the agentic layer in emerging markets will find Synth's distribution, verticals, and local market depth far more valuable than another infrastructure play. Synth is the end product. That's where the customer relationships live."]})]})]})})]})]})}const Ed=[{id:"heartbeat",number:"01",icon:"💓",tag:"Proactive Heartbeat",headline:"Synth doesn't wait to be asked",description:"Unlike chatbots, Synth continuously monitors your calendar, emails, deadlines, and connected tools. It identifies important events before they become problems and proactively surfaces what matters — unprompted, every day.",accent:"#2563EB",visual:"heartbeat"},{id:"multiagent",number:"02",icon:"⚡",tag:"Autonomous Multi-Agent",headline:"One task. Dozens of agents. Zero hand-holding.",description:"Synth breaks complex tasks into independent sub-tasks and deploys a dedicated agent for each — running simultaneously, in parallel, each with its own fresh context. Quality stays consistent, no matter the scale.",accent:"#7C3AED",visual:"agent"},{id:"toolintegration",number:"03",icon:"🔌",tag:"Seamless Tool Integration",headline:"Connects to the tools your business runs on",description:"Synth reads from and writes to your existing tools — Google Workspace, Slack, Xero, HubSpot, and more. No manual exports, no copy-paste. One continuous flow across your entire stack.",accent:"#059669",visual:"tools"},{id:"custommcp",number:"04",icon:"🛠️",tag:"Custom MCP & API",headline:"Connect your own systems. Build on top.",description:"Pre-built connectors are just the start. Register custom MCP servers for your internal tools, or trigger Synth programmatically via REST API. Webhooks deliver results back to your own infrastructure.",accent:"#D97706",visual:"code"},{id:"browser",number:"05",icon:"🌐",tag:"Browser Operator",headline:"Navigates the web with your session",description:"Synth operates inside your actual browser session — authenticated, from your IP. It navigates, clicks, fills forms, and completes multi-step tasks across platforms that would block a standard bot.",accent:"#0891B2",visual:"browser"},{id:"skills",number:"06",icon:"🎯",tag:"Agent Skills",headline:"Build a workflow once. Run it forever.",description:"Package any successful task into a reusable Skill. Your team's best processes — competitor research, client onboarding, board reporting — become one-command workflows anyone can trigger.",accent:"#DB2777",visual:"skills"}];function If(){return r.jsxs("div",{className:"viz-heartbeat",children:[r.jsx("div",{className:"time",children:"● 6:45 AM · Morning briefing"}),r.jsxs("div",{className:"msg",children:[r.jsxs("div",{className:"sender",children:[r.jsx("div",{className:"avatar",children:"S"}),r.jsxs("div",{children:[r.jsx("span",{className:"name",children:"Synth"})," ",r.jsx("span",{className:"sub",children:"· just now"})]})]}),r.jsx("strong",{children:"Good morning."})," Here's today:",r.jsx("br",{}),"— ",r.jsx("strong",{children:"9 AM"})," · Ndali Group call · notes prepped",r.jsx("br",{}),"— ",r.jsx("strong",{children:"11:30 AM"})," · Lwazi's contract reply ",r.jsx("span",{className:"highlight",children:"overdue (2d)"}),r.jsx("br",{}),"— ",r.jsx("strong",{children:"2 PM"})," · Q3 proposal · draft not opened yet",r.jsx("br",{}),"— ",r.jsx("strong",{children:"5:30 PM"})," · Gym · leave by 5:10"]}),r.jsxs("div",{className:"msg msg-urgent",children:[r.jsx("span",{className:"highlight",children:"⚠️ Urgent:"})," Your 9 AM and 9:30 AM just clashed — investor call moved."," ",r.jsx("span",{className:"highlight",children:"Reschedule standup?"})]})]})}function Mf(){const l=[[70,40,"#7C3AED"],[140,30,"#8B5CF6"],[280,30,"#A78BFA"],[350,40,"#7C3AED"],[60,170,"#8B5CF6"],[140,185,"#A78BFA"],[280,185,"#8B5CF6"],[350,170,"#7C3AED"]];return r.jsx("div",{className:"viz-agent",children:r.jsxs("svg",{viewBox:"0 0 420 220",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"210",cy:"110",r:"28",fill:"#7C3AED",opacity:".15",className:"pulse-ring"}),r.jsx("circle",{cx:"210",cy:"110",r:"18",fill:"#7C3AED",opacity:".25"}),r.jsx("circle",{cx:"210",cy:"110",r:"10",fill:"#7C3AED"}),r.jsx("text",{x:"210",y:"114",textAnchor:"middle",fill:"#fff",fontSize:"8",fontWeight:"600",fontFamily:"Inter, sans-serif",children:"ORCH"}),l.map(([m,d,g],y)=>r.jsxs("g",{children:[r.jsx("circle",{cx:String(m),cy:String(d),r:"14",fill:g,opacity:".3"}),r.jsx("circle",{cx:String(m),cy:String(d),r:"9",fill:g,opacity:".5"}),r.jsx("circle",{cx:String(m),cy:String(d),r:"5",fill:g}),r.jsx("text",{x:String(m),y:String(d+3),textAnchor:"middle",fill:"#fff",fontSize:"5",fontWeight:"600",fontFamily:"Inter, sans-serif",children:y+1}),r.jsx("line",{x1:"210",y1:"110",x2:String(m),y2:String(d),stroke:g,strokeWidth:"1.2",opacity:".3",strokeDasharray:"4 4",children:r.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"8",dur:"1.2s",repeatCount:"indefinite"})})]},y))]})})}function Df(){return r.jsx("div",{className:"viz-tools",children:r.jsxs("div",{className:"viz-tools-grid",children:[r.jsxs("div",{className:"viz-tool",children:[r.jsx("span",{className:"icon",children:"📧"}),"Gmail"]}),r.jsxs("div",{className:"viz-tool",children:[r.jsx("span",{className:"icon",children:"💬"}),"Slack"]}),r.jsxs("div",{className:"viz-tool",children:[r.jsx("span",{className:"icon",children:"📊"}),"Xero"]}),r.jsxs("div",{className:"viz-tool",children:[r.jsx("span",{className:"icon",children:"📋"}),"HubSpot"]}),r.jsxs("div",{className:"viz-tool",children:[r.jsx("span",{className:"icon",children:"📅"}),"Calendar"]}),r.jsxs("div",{className:"viz-tool",children:[r.jsx("span",{className:"icon",children:"📝"}),"Notion"]}),r.jsxs("div",{className:"viz-tool",children:[r.jsx("span",{className:"icon",children:"📁"}),"Drive"]}),r.jsxs("div",{className:"viz-tool",children:[r.jsx("span",{className:"icon",children:"🔗"}),"API"]}),r.jsxs("div",{className:"viz-tool-center",children:["Synth ",r.jsx("span",{children:"MCP"})]})]})})}function Lf(){return r.jsxs("div",{className:"viz-code",children:[r.jsxs("div",{className:"code-header",children:[r.jsx("span",{className:"code-dot"}),r.jsx("span",{className:"code-dot"}),r.jsx("span",{className:"code-dot"}),r.jsx("span",{style:{marginLeft:8,fontSize:11,color:"#8B949E",fontWeight:500},children:"POST /api/synth/v1/tasks"})]}),r.jsxs("div",{className:"code-body",children:[r.jsx("span",{className:"kw",children:"POST"})," ",r.jsx("span",{className:"fn",children:"/tasks"}),r.jsx("br",{}),r.jsx("span",{className:"cmt",children:"// Trigger a competitor research workflow"}),r.jsx("br",{}),"{",r.jsx("br",{}),"  ",r.jsx("span",{className:"str",children:'"task"'}),": ",r.jsx("span",{className:"str",children:'"Research top 20 competitors"'}),",",r.jsx("br",{}),"  ",r.jsx("span",{className:"str",children:'"channel"'}),": ",r.jsx("span",{className:"str",children:'"whatsapp"'}),",",r.jsx("br",{}),"  ",r.jsx("span",{className:"str",children:'"priority"'}),": ",r.jsx("span",{className:"str",children:'"high"'}),",",r.jsx("br",{}),"  ",r.jsx("span",{className:"str",children:'"webhook"'}),": ",r.jsx("span",{className:"str",children:'"https://your.app/callback"'}),r.jsx("br",{}),"}"]})]})}function Of(){return r.jsx("div",{className:"viz-browser",children:r.jsxs("div",{className:"viz-browser-window",children:[r.jsxs("div",{className:"viz-browser-bar",children:[r.jsx("span",{className:"dot"}),r.jsx("span",{className:"dot"}),r.jsx("span",{className:"dot"}),r.jsx("span",{className:"url",children:"🔒 apply.company.com/jobs"})]}),r.jsxs("div",{className:"viz-browser-body",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Full name"}),r.jsx("input",{type:"text",value:"Alex Rivera",readOnly:!0})]}),r.jsxs("div",{className:"row2",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Role"}),r.jsx("select",{children:r.jsx("option",{children:"Senior Product Manager"})})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Location"}),r.jsx("input",{type:"text",value:"Remote · Cape Town",readOnly:!0})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Resume"}),r.jsx("input",{type:"text",value:"alex_rivera_cv_2026.pdf ✓",readOnly:!0,style:{color:"#059669"}})]}),r.jsxs("button",{className:"btn-submit",children:["⏳ Submitting ",r.jsx("span",{className:"pulse",children:"·"})]})]})]})})}function Bf(){return r.jsx("div",{className:"viz-skills",children:r.jsxs("div",{className:"viz-skills-flow",children:[r.jsxs("div",{className:"viz-skills-step done",children:[r.jsx("span",{className:"num",children:"✓"}),r.jsxs("div",{className:"content",children:[r.jsx("div",{className:"title",children:"/competitor-report"}),r.jsx("div",{className:"desc",children:"Weekly competitor intelligence"})]}),r.jsx("span",{className:"arrow",children:"→"})]}),r.jsxs("div",{className:"viz-skills-step active",children:[r.jsx("span",{className:"num",children:"2"}),r.jsxs("div",{className:"content",children:[r.jsx("div",{className:"title",children:"/claim-denial-batch"}),r.jsx("div",{className:"desc",children:"Healthcare claim processing"})]}),r.jsx("span",{className:"arrow",children:"→"})]}),r.jsxs("div",{className:"viz-skills-step",children:[r.jsx("span",{className:"num",children:"3"}),r.jsxs("div",{className:"content",children:[r.jsx("div",{className:"title",children:"/new-lead-brief"}),r.jsx("div",{className:"desc",children:"Sales meeting prep"})]}),r.jsx("span",{className:"arrow",children:"→"})]}),r.jsxs("div",{className:"viz-skills-step",style:{borderColor:"rgba(219,39,119,.06)",background:"rgba(255,255,255,.4)"},children:[r.jsx("span",{className:"num",style:{background:"var(--text-muted)"},children:"+"}),r.jsxs("div",{className:"content",children:[r.jsx("div",{className:"title",style:{color:"var(--text-muted)"},children:"Build your own"}),r.jsx("div",{className:"desc",children:"Package any task into a reusable Skill"})]})]})]})})}function Uf(l){switch(l){case"heartbeat":return r.jsx(If,{});case"agent":return r.jsx(Mf,{});case"tools":return r.jsx(Df,{});case"code":return r.jsx(Lf,{});case"browser":return r.jsx(Of,{});case"skills":return r.jsx(Bf,{});default:return r.jsx("div",{style:{padding:40,textAlign:"center",color:"var(--text-muted)"},children:"Visual"})}}function Hf(){const[l,m]=D.useState("heartbeat");D.useEffect(()=>{const g=document.querySelectorAll(".feature"),y=new IntersectionObserver(b=>{for(const P of b)if(P.isIntersecting){m(P.target.id);break}},{threshold:.35,rootMargin:"-20px 0px -40px 0px"});return g.forEach(b=>y.observe(b)),()=>y.disconnect()},[]);const d=g=>{const y=document.getElementById(g);if(y){const P=y.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:P,behavior:"smooth"})}};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        /* ── reset & base ────────────────────────────────────────────────────────── */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --bg: #F6F8FA;
          --surface: #FFFFFF;
          --text: #0A0D14;
          --text-secondary: #4A5A7A;
          --text-muted: #8E9AB5;
          --border: rgba(10, 13, 20, .06);
          --radius: 32px;
          --shadow-card: 0 20px 60px -12px rgba(0, 0, 0, .08), 0 8px 24px -6px rgba(0, 0, 0, .04);
          --shadow-soft: 0 4px 20px rgba(0, 0, 0, .02);
          --transition: .35s cubic-bezier(.22, 1, .36, 1);
        }

        .ft-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.5;
        }

        .serif {
          font-family: 'Instrument Serif', 'Georgia', 'Times New Roman', serif;
          font-weight: 400;
          letter-spacing: -0.02em;
        }

        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 32px;
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 20px;
          }
        }

        /* ── hero ────────────────────────────────────────────────────────────────── */
        .hero {
          padding: 100px 0 72px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37, 99, 235, .06) 0%, transparent 100%),
            radial-gradient(ellipse 40% 30% at 80% 20%, rgba(124, 58, 237, .04) 0%, transparent 100%);
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(37, 99, 235, .08);
          border: 1px solid rgba(37, 99, 235, .12);
          color: #2563EB;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 5px 16px;
          margin-bottom: 28px;
          position: relative;
        }

        .hero h1 {
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--text);
          max-width: 720px;
          margin: 0 auto 18px;
          position: relative;
        }

        .hero h1 em {
          font-style: italic;
          color: #2563EB;
        }

        .hero p {
          font-size: 17px;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto 44px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          position: relative;
        }

        .btn-primary {
          background: #0A0D14;
          color: #fff;
          border: none;
          padding: 12px 28px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          font-family: inherit;
        }

        .btn-primary:hover {
          background: #1a1f2e;
          transform: scale(1.02);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid rgba(10, 13, 20, .1);
          padding: 12px 28px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          font-family: inherit;
        }

        .btn-secondary:hover {
          background: rgba(10, 13, 20, .04);
          border-color: rgba(10, 13, 20, .2);
        }

        /* ── sticky nav ──────────────────────────────────────────────────────────── */
        .nav-sticky {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(246, 248, 250, .82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 0 32px;
        }

        .nav-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          gap: 4px;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 10px 0;
        }

        .nav-inner::-webkit-scrollbar {
          display: none;
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          background: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          font-family: inherit;
          transition: var(--transition);
        }

        .nav-btn:hover {
          background: rgba(10, 13, 20, .04);
          color: var(--text);
        }

        .nav-btn.active {
          background: rgba(37, 99, 235, .08);
          color: #2563EB;
        }

        .nav-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .nav-sticky {
            padding: 0 12px;
          }
          .nav-btn {
            font-size: 11px;
            padding: 5px 12px;
          }
        }

        /* ── feature sections ────────────────────────────────────────────────────── */
        .feature {
          padding: 100px 0;
          border-bottom: 1px solid var(--border);
          scroll-margin-top: 80px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp .7s ease forwards;
        }

        .feature:nth-child(1) { animation-delay: .05s; }
        .feature:nth-child(2) { animation-delay: .1s; }
        .feature:nth-child(3) { animation-delay: .15s; }
        .feature:nth-child(4) { animation-delay: .2s; }
        .feature:nth-child(5) { animation-delay: .25s; }
        .feature:nth-child(6) { animation-delay: .3s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature:last-of-type {
          border-bottom: none;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* left column */
        .feature-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-number {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .feature-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
          background: rgba(10, 13, 20, .04);
          border-radius: 999px;
          padding: 4px 14px 4px 10px;
          width: fit-content;
        }

        .feature-tag span {
          font-size: 16px;
        }

        .feature-left h2 {
          font-size: clamp(26px, 3.2vw, 38px);
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--text);
          margin-top: 4px;
        }

        .feature-left p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 440px;
        }

        /* right column — visual container */
        .feature-visual {
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--surface);
          box-shadow: var(--shadow-card);
          transition: var(--transition);
          position: relative;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
        }

        .feature-visual-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* ── visual variants ────────────────────────────────────────────────────── */

        /* 1. Heartbeat */
        .viz-heartbeat {
          background: linear-gradient(145deg, #0A0D14 0%, #141B2B 100%);
          border-radius: var(--radius);
          padding: 32px 28px;
          width: 100%;
          color: #fff;
        }

        .viz-heartbeat .time {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, .3);
          margin-bottom: 20px;
        }

        .viz-heartbeat .msg {
          background: rgba(255, 255, 255, .04);
          border: 1px solid rgba(255, 255, 255, .06);
          border-radius: 14px;
          padding: 16px 18px;
          margin-bottom: 10px;
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255, 255, 255, .75);
        }

        .viz-heartbeat .msg strong {
          color: #fff;
          font-weight: 600;
        }

        .viz-heartbeat .msg .highlight {
          color: #60A5FA;
        }

        .viz-heartbeat .msg-urgent {
          border-left: 3px solid #EF4444;
          background: rgba(239, 68, 68, .06);
        }

        .viz-heartbeat .msg-urgent .highlight {
          color: #F87171;
        }

        .viz-heartbeat .sender {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .viz-heartbeat .sender .avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #2563EB;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
        }

        .viz-heartbeat .sender .name {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
        }

        .viz-heartbeat .sender .sub {
          font-size: 12px;
          color: rgba(255, 255, 255, .3);
        }

        /* 2. Multi-Agent */
        .viz-agent {
          background: linear-gradient(145deg, #0A0D14 0%, #1A1035 100%);
          border-radius: var(--radius);
          padding: 40px 32px;
          width: 100%;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .viz-agent svg {
          width: 100%;
          max-width: 420px;
          height: auto;
        }

        .viz-agent .pulse-ring {
          animation: pulse-ring 2.4s ease-in-out infinite;
        }

        @keyframes pulse-ring {
          0%, 100% { opacity: .3; transform: scale(1); }
          50% { opacity: .8; transform: scale(1.08); }
        }

        /* 3. Tools */
        .viz-tools {
          background: linear-gradient(145deg, #F0FDF4 0%, #E6F7ED 100%);
          border-radius: var(--radius);
          padding: 32px 28px;
          width: 100%;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .viz-tools-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          width: 100%;
          max-width: 420px;
        }

        .viz-tool {
          background: rgba(255, 255, 255, .7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(5, 150, 105, .1);
          border-radius: 12px;
          padding: 14px 10px;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          color: #065F46;
          transition: var(--transition);
          box-shadow: var(--shadow-soft);
        }

        .viz-tool .icon {
          font-size: 20px;
          display: block;
          margin-bottom: 4px;
        }

        .viz-tool-center {
          grid-column: span 4;
          background: rgba(5, 150, 105, .12);
          border: 1px solid rgba(5, 150, 105, .2);
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          font-weight: 600;
          color: #065F46;
          font-size: 14px;
          letter-spacing: .3px;
        }

        .viz-tool-center span {
          background: #065F46;
          color: #fff;
          padding: 2px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          margin-left: 8px;
        }

        /* 4. Code */
        .viz-code {
          background: #0D1117;
          border-radius: var(--radius);
          padding: 28px 24px;
          width: 100%;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .viz-code .code-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .viz-code .code-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .viz-code .code-dot:nth-child(1) { background: #FF5F57; }
        .viz-code .code-dot:nth-child(2) { background: #FFBD2E; }
        .viz-code .code-dot:nth-child(3) { background: #28C840; }

        .viz-code .code-body {
          font-family: 'Geist Mono', 'SF Mono', 'Fira Code', ui-monospace, monospace;
          font-size: 12px;
          line-height: 2;
          color: #E2E8F0;
          white-space: pre-wrap;
        }

        .viz-code .code-body .kw { color: #FF7B72; }
        .viz-code .code-body .str { color: #A5D6FF; }
        .viz-code .code-body .fn { color: #D2A8FF; }
        .viz-code .code-body .cmt { color: #8B949E; font-style: italic; }
        .viz-code .code-body .num { color: #79C0FF; }
        .viz-code .code-body .op { color: #FF7B72; }

        /* 5. Browser */
        .viz-browser {
          background: linear-gradient(145deg, #ECFEFF 0%, #D5F5F9 100%);
          border-radius: var(--radius);
          padding: 24px 20px;
          width: 100%;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .viz-browser-window {
          background: #fff;
          border-radius: 16px;
          box-shadow: var(--shadow-card);
          width: 100%;
          max-width: 400px;
          overflow: hidden;
          border: 1px solid rgba(10, 13, 20, .04);
        }

        .viz-browser-bar {
          background: #F1F3F5;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(10, 13, 20, .04);
        }

        .viz-browser-bar .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .viz-browser-bar .dot:nth-child(1) { background: #FF5F57; }
        .viz-browser-bar .dot:nth-child(2) { background: #FFBD2E; }
        .viz-browser-bar .dot:nth-child(3) { background: #28C840; }

        .viz-browser-bar .url {
          flex: 1;
          background: rgba(255, 255, 255, .7);
          border-radius: 6px;
          padding: 4px 12px;
          font-size: 11px;
          color: var(--text-secondary);
          font-weight: 500;
          text-align: center;
          margin: 0 6px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .viz-browser-body {
          padding: 20px 18px 18px;
        }

        .viz-browser-body .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }

        .viz-browser-body .field label {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .viz-browser-body .field input,
        .viz-browser-body .field select {
          background: #F6F8FA;
          border: 1px solid rgba(10, 13, 20, .08);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 13px;
          font-family: inherit;
          color: var(--text);
          outline: none;
          transition: var(--transition);
        }

        .viz-browser-body .field input:focus,
        .viz-browser-body .field select:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, .08);
        }

        .viz-browser-body .row2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .viz-browser-body .btn-submit {
          background: #2563EB;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 600;
          width: 100%;
          cursor: default;
          font-family: inherit;
          margin-top: 4px;
        }

        .viz-browser-body .btn-submit .pulse {
          display: inline-block;
          animation: pulse-dot 1.6s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: .4; }
        }

        /* 6. Skills */
        .viz-skills {
          background: linear-gradient(145deg, #FDF2F8 0%, #F8E8F0 100%);
          border-radius: var(--radius);
          padding: 28px 24px;
          width: 100%;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .viz-skills-flow {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          max-width: 400px;
        }

        .viz-skills-step {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, .75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(219, 39, 119, .08);
          border-radius: 12px;
          padding: 12px 16px;
          transition: var(--transition);
          box-shadow: var(--shadow-soft);
        }

        .viz-skills-step .num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #DB2777;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .viz-skills-step .content {
          flex: 1;
        }

        .viz-skills-step .content .title {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
        }

        .viz-skills-step .content .desc {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .viz-skills-step .arrow {
          color: var(--text-muted);
          font-size: 14px;
        }

        .viz-skills-step.done {
          background: rgba(219, 39, 119, .06);
          border-color: rgba(219, 39, 119, .15);
        }

        .viz-skills-step.done .num {
          background: #059669;
        }

        .viz-skills-step.active {
          border-color: #DB2777;
          box-shadow: 0 4px 20px rgba(219, 39, 119, .08);
        }

        .viz-skills-step.active .num {
          animation: pulse-step 1.8s ease-in-out infinite;
        }

        @keyframes pulse-step {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }

        /* ── responsive ──────────────────────────────────────────────────────────── */
        @media (max-width: 860px) {
          .feature-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .feature-left p {
            max-width: 100%;
          }

          .feature-visual {
            min-height: 260px;
            padding: 24px;
          }

          .feature {
            padding: 64px 0;
          }

          .hero {
            padding: 72px 0 48px;
          }

          .viz-tools-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .viz-tool-center {
            grid-column: span 3;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }

          .feature-grid {
            gap: 28px;
          }

          .feature-visual {
            min-height: 220px;
            padding: 16px;
            border-radius: 20px;
          }

          .hero h1 {
            font-size: 32px;
          }

          .hero p {
            font-size: 15px;
          }

          .viz-heartbeat {
            padding: 20px 16px;
          }
          .viz-heartbeat .msg {
            font-size: 12px;
            padding: 12px 14px;
          }

          .viz-tools-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .viz-tool-center {
            grid-column: span 2;
          }

          .viz-code .code-body {
            font-size: 10px;
            line-height: 1.8;
          }

          .viz-browser-body .row2 {
            grid-template-columns: 1fr;
          }

          .viz-skills-step {
            padding: 10px 12px;
          }
          .viz-skills-step .content .title {
            font-size: 12px;
          }
          .viz-skills-step .content .desc {
            font-size: 11px;
          }

          .feature-left h2 {
            font-size: 24px;
          }

          .nav-sticky {
            padding: 0 8px;
          }
        }

        /* ── footer ──────────────────────────────────────────────────────────────── */
        .footer-cta {
          padding: 80px 0 64px;
          text-align: center;
          border-top: 1px solid var(--border);
          background: var(--surface);
        }

        .footer-cta h2 {
          font-size: clamp(28px, 3.6vw, 44px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text);
          max-width: 520px;
          margin: 0 auto 14px;
        }

        .footer-cta p {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 440px;
          margin: 0 auto 32px;
          line-height: 1.7;
        }

        .footer-cta form {
          display: flex;
          gap: 10px;
          max-width: 400px;
          margin: 0 auto 12px;
        }

        .footer-cta input {
          flex: 1;
          background: #fff;
          border: 1px solid rgba(10, 13, 20, .12);
          border-radius: 999px;
          padding: 12px 20px;
          font-size: 14px;
          font-family: inherit;
          color: var(--text);
          outline: none;
          transition: var(--transition);
        }

        .footer-cta input:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, .06);
        }

        .footer-cta .btn-primary {
          background: #2563EB;
          padding: 12px 28px;
        }

        .footer-cta .btn-primary:hover {
          background: #1D4ED8;
        }

        .footer-cta .footnote {
          font-size: 12px;
          color: var(--text-muted);
        }

        @media (max-width: 480px) {
          .footer-cta form {
            flex-direction: column;
          }
          .footer-cta input {
            border-radius: 12px;
          }
          .footer-cta .btn-primary {
            border-radius: 12px;
            width: 100%;
          }
        }
      `}),r.jsxs("div",{className:"ft-container",children:[r.jsx("section",{className:"hero",children:r.jsxs("div",{className:"container",children:[r.jsx("div",{className:"hero-badge",children:"✦ Platform features"}),r.jsxs("h1",{className:"serif",children:["Six capabilities.",r.jsx("br",{}),r.jsx("em",{children:"One agent that uses all of them."})]}),r.jsx("p",{children:"Most AI tools give you a chat window. Synth is built from six interconnected capabilities that work together — from your first message to a completed result, without you managing any step in between."}),r.jsx("div",{className:"hero-actions",children:r.jsx("button",{className:"btn-primary",children:"Get early access"})})]})}),r.jsx("nav",{className:"nav-sticky",children:r.jsx("div",{className:"nav-inner",children:Ed.map(g=>r.jsxs("button",{className:`nav-btn ${l===g.id?"active":""}`,onClick:()=>d(g.id),children:[r.jsx("span",{className:"nav-dot",style:{background:g.accent}}),g.tag]},g.id))})}),Ed.map(g=>r.jsx("section",{id:g.id,className:"feature",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"feature-grid",children:[r.jsxs("div",{className:"feature-left",children:[r.jsxs("div",{className:"feature-number",children:[g.number," / 06"]}),r.jsxs("div",{className:"feature-tag",children:[r.jsx("span",{children:g.icon})," ",g.tag]}),r.jsx("h2",{className:"serif",children:g.headline}),r.jsx("p",{children:g.description})]}),r.jsx("div",{className:"feature-visual",children:r.jsx("div",{className:"feature-visual-inner",children:Uf(g.visual)})})]})})},g.id)),r.jsx("section",{className:"footer-cta",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{className:"serif",children:"The gap between thinking and doing just closed."}),r.jsx("p",{children:"We're building something we'd want to use ourselves. Join the waitlist and you'll be first to get access."}),r.jsxs("form",{onSubmit:g=>{g.preventDefault()},children:[r.jsx("input",{type:"email",placeholder:"your@email.com",required:!0}),r.jsx("button",{type:"submit",className:"btn-primary",children:"Join waitlist"})]}),r.jsx("p",{className:"footnote",children:"Free during beta. No credit card required."})]})})]})]})}function Wf(){return r.jsxs(wh,{children:[r.jsx(De,{path:"/",component:cf}),r.jsx(De,{path:"/solutions/marketing",component:uf}),r.jsx(De,{path:"/solutions/sales",component:hf}),r.jsx(De,{path:"/solutions/finance",component:mf}),r.jsx(De,{path:"/solutions/product",component:xf}),r.jsx(De,{path:"/solutions/personal",component:vf}),r.jsx(De,{path:"/solutions/healthcare",component:wf}),r.jsx(De,{path:"/pricing",component:bf}),r.jsx(De,{path:"/pages/feature",component:Hf}),r.jsx(De,{path:"/trust",component:Nf}),r.jsx(De,{path:"/data-processing",component:kf}),r.jsx(De,{path:"/terms",component:Cf}),r.jsx(De,{path:"/compare/vsChatgpt",component:Tf}),r.jsx(De,{path:"/compare/vsOpenclaw",component:Pf}),r.jsx(De,{path:"/compare/vsTrixta",component:Rf}),r.jsx(De,{component:Ef})]})}function Vf(){return r.jsx(bh,{defaultTheme:"light",children:r.jsxs("div",{className:"min-h-screen flex flex-col",children:[r.jsx(Dh,{}),r.jsx(Lh,{}),r.jsx("main",{className:"flex-1",children:r.jsx(Wf,{})}),r.jsx(Wh,{})]})})}Xp.createRoot(document.getElementById("root")).render(r.jsx(Ad.StrictMode,{children:r.jsx(Vf,{})}));
