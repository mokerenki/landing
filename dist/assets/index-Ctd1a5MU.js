function Mp(c,g){for(var l=0;l<g.length;l++){const y=g[l];if(typeof y!="string"&&!Array.isArray(y)){for(const w in y)if(w!=="default"&&!(w in c)){const b=Object.getOwnPropertyDescriptor(y,w);b&&Object.defineProperty(c,w,b.get?b:{enumerable:!0,get:()=>y[w]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))y(w);new MutationObserver(w=>{for(const b of w)if(b.type==="childList")for(const M of b.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&y(M)}).observe(document,{childList:!0,subtree:!0});function l(w){const b={};return w.integrity&&(b.integrity=w.integrity),w.referrerPolicy&&(b.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?b.credentials="include":w.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function y(w){if(w.ep)return;w.ep=!0;const b=l(w);fetch(w.href,b)}})();function kd(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Lo={exports:{}},br={},Oo={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc;function Dp(){if(Qc)return q;Qc=1;var c=Symbol.for("react.element"),g=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),M=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),D=Symbol.iterator;function H(h){return h===null||typeof h!="object"?null:(h=D&&h[D]||h["@@iterator"],typeof h=="function"?h:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,Q={};function K(h,N,V){this.props=h,this.context=N,this.refs=Q,this.updater=V||U}K.prototype.isReactComponent={},K.prototype.setState=function(h,N){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,N,"setState")},K.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function be(){}be.prototype=K.prototype;function ht(h,N,V){this.props=h,this.context=N,this.refs=Q,this.updater=V||U}var rt=ht.prototype=new be;rt.constructor=ht,se(rt,K.prototype),rt.isPureReactComponent=!0;var Ee=Array.isArray,st=Object.prototype.hasOwnProperty,ze={current:null},Me={key:!0,ref:!0,__self:!0,__source:!0};function Ke(h,N,V){var Y,J={},Z=null,ae=null;if(N!=null)for(Y in N.ref!==void 0&&(ae=N.ref),N.key!==void 0&&(Z=""+N.key),N)st.call(N,Y)&&!Me.hasOwnProperty(Y)&&(J[Y]=N[Y]);var ne=arguments.length-2;if(ne===1)J.children=V;else if(1<ne){for(var ce=Array(ne),Ge=0;Ge<ne;Ge++)ce[Ge]=arguments[Ge+2];J.children=ce}if(h&&h.defaultProps)for(Y in ne=h.defaultProps,ne)J[Y]===void 0&&(J[Y]=ne[Y]);return{$$typeof:c,type:h,key:Z,ref:ae,props:J,_owner:ze.current}}function Ft(h,N){return{$$typeof:c,type:h.type,key:N,ref:h.ref,props:h.props,_owner:h._owner}}function bt(h){return typeof h=="object"&&h!==null&&h.$$typeof===c}function Kt(h){var N={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(V){return N[V]})}var mt=/\/+/g;function $e(h,N){return typeof h=="object"&&h!==null&&h.key!=null?Kt(""+h.key):N.toString(36)}function at(h,N,V,Y,J){var Z=typeof h;(Z==="undefined"||Z==="boolean")&&(h=null);var ae=!1;if(h===null)ae=!0;else switch(Z){case"string":case"number":ae=!0;break;case"object":switch(h.$$typeof){case c:case g:ae=!0}}if(ae)return ae=h,J=J(ae),h=Y===""?"."+$e(ae,0):Y,Ee(J)?(V="",h!=null&&(V=h.replace(mt,"$&/")+"/"),at(J,N,V,"",function(Ge){return Ge})):J!=null&&(bt(J)&&(J=Ft(J,V+(!J.key||ae&&ae.key===J.key?"":(""+J.key).replace(mt,"$&/")+"/")+h)),N.push(J)),1;if(ae=0,Y=Y===""?".":Y+":",Ee(h))for(var ne=0;ne<h.length;ne++){Z=h[ne];var ce=Y+$e(Z,ne);ae+=at(Z,N,V,ce,J)}else if(ce=H(h),typeof ce=="function")for(h=ce.call(h),ne=0;!(Z=h.next()).done;)Z=Z.value,ce=Y+$e(Z,ne++),ae+=at(Z,N,V,ce,J);else if(Z==="object")throw N=String(h),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ae}function ft(h,N,V){if(h==null)return h;var Y=[],J=0;return at(h,Y,"","",function(Z){return N.call(V,Z,J++)}),Y}function De(h){if(h._status===-1){var N=h._result;N=N(),N.then(function(V){(h._status===0||h._status===-1)&&(h._status=1,h._result=V)},function(V){(h._status===0||h._status===-1)&&(h._status=2,h._result=V)}),h._status===-1&&(h._status=0,h._result=N)}if(h._status===1)return h._result.default;throw h._result}var me={current:null},E={transition:null},W={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:E,ReactCurrentOwner:ze};function I(){throw Error("act(...) is not supported in production builds of React.")}return q.Children={map:ft,forEach:function(h,N,V){ft(h,function(){N.apply(this,arguments)},V)},count:function(h){var N=0;return ft(h,function(){N++}),N},toArray:function(h){return ft(h,function(N){return N})||[]},only:function(h){if(!bt(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},q.Component=K,q.Fragment=l,q.Profiler=w,q.PureComponent=ht,q.StrictMode=y,q.Suspense=A,q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,q.act=I,q.cloneElement=function(h,N,V){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var Y=se({},h.props),J=h.key,Z=h.ref,ae=h._owner;if(N!=null){if(N.ref!==void 0&&(Z=N.ref,ae=ze.current),N.key!==void 0&&(J=""+N.key),h.type&&h.type.defaultProps)var ne=h.type.defaultProps;for(ce in N)st.call(N,ce)&&!Me.hasOwnProperty(ce)&&(Y[ce]=N[ce]===void 0&&ne!==void 0?ne[ce]:N[ce])}var ce=arguments.length-2;if(ce===1)Y.children=V;else if(1<ce){ne=Array(ce);for(var Ge=0;Ge<ce;Ge++)ne[Ge]=arguments[Ge+2];Y.children=ne}return{$$typeof:c,type:h.type,key:J,ref:Z,props:Y,_owner:ae}},q.createContext=function(h){return h={$$typeof:M,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:b,_context:h},h.Consumer=h},q.createElement=Ke,q.createFactory=function(h){var N=Ke.bind(null,h);return N.type=h,N},q.createRef=function(){return{current:null}},q.forwardRef=function(h){return{$$typeof:v,render:h}},q.isValidElement=bt,q.lazy=function(h){return{$$typeof:G,_payload:{_status:-1,_result:h},_init:De}},q.memo=function(h,N){return{$$typeof:L,type:h,compare:N===void 0?null:N}},q.startTransition=function(h){var N=E.transition;E.transition={};try{h()}finally{E.transition=N}},q.unstable_act=I,q.useCallback=function(h,N){return me.current.useCallback(h,N)},q.useContext=function(h){return me.current.useContext(h)},q.useDebugValue=function(){},q.useDeferredValue=function(h){return me.current.useDeferredValue(h)},q.useEffect=function(h,N){return me.current.useEffect(h,N)},q.useId=function(){return me.current.useId()},q.useImperativeHandle=function(h,N,V){return me.current.useImperativeHandle(h,N,V)},q.useInsertionEffect=function(h,N){return me.current.useInsertionEffect(h,N)},q.useLayoutEffect=function(h,N){return me.current.useLayoutEffect(h,N)},q.useMemo=function(h,N){return me.current.useMemo(h,N)},q.useReducer=function(h,N,V){return me.current.useReducer(h,N,V)},q.useRef=function(h){return me.current.useRef(h)},q.useState=function(h){return me.current.useState(h)},q.useSyncExternalStore=function(h,N,V){return me.current.useSyncExternalStore(h,N,V)},q.useTransition=function(){return me.current.useTransition()},q.version="18.3.1",q}var Kc;function Ws(){return Kc||(Kc=1,Oo.exports=Dp()),Oo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc;function Lp(){if(Xc)return br;Xc=1;var c=Ws(),g=Symbol.for("react.element"),l=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,w=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function M(v,A,L){var G,D={},H=null,U=null;L!==void 0&&(H=""+L),A.key!==void 0&&(H=""+A.key),A.ref!==void 0&&(U=A.ref);for(G in A)y.call(A,G)&&!b.hasOwnProperty(G)&&(D[G]=A[G]);if(v&&v.defaultProps)for(G in A=v.defaultProps,A)D[G]===void 0&&(D[G]=A[G]);return{$$typeof:g,type:v,key:H,ref:U,props:D,_owner:w.current}}return br.Fragment=l,br.jsx=M,br.jsxs=M,br}var Jc;function Op(){return Jc||(Jc=1,Lo.exports=Lp()),Lo.exports}var n=Op(),R=Ws();const Sd=kd(R),Bp=Mp({__proto__:null,default:Sd},[R]);var Rs={},Bo={exports:{}},Ue={},Wo={exports:{}},Ho={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc;function Wp(){return Zc||(Zc=1,(function(c){function g(E,W){var I=E.length;E.push(W);e:for(;0<I;){var h=I-1>>>1,N=E[h];if(0<w(N,W))E[h]=W,E[I]=N,I=h;else break e}}function l(E){return E.length===0?null:E[0]}function y(E){if(E.length===0)return null;var W=E[0],I=E.pop();if(I!==W){E[0]=I;e:for(var h=0,N=E.length,V=N>>>1;h<V;){var Y=2*(h+1)-1,J=E[Y],Z=Y+1,ae=E[Z];if(0>w(J,I))Z<N&&0>w(ae,J)?(E[h]=ae,E[Z]=I,h=Z):(E[h]=J,E[Y]=I,h=Y);else if(Z<N&&0>w(ae,I))E[h]=ae,E[Z]=I,h=Z;else break e}}return W}function w(E,W){var I=E.sortIndex-W.sortIndex;return I!==0?I:E.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var b=performance;c.unstable_now=function(){return b.now()}}else{var M=Date,v=M.now();c.unstable_now=function(){return M.now()-v}}var A=[],L=[],G=1,D=null,H=3,U=!1,se=!1,Q=!1,K=typeof setTimeout=="function"?setTimeout:null,be=typeof clearTimeout=="function"?clearTimeout:null,ht=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function rt(E){for(var W=l(L);W!==null;){if(W.callback===null)y(L);else if(W.startTime<=E)y(L),W.sortIndex=W.expirationTime,g(A,W);else break;W=l(L)}}function Ee(E){if(Q=!1,rt(E),!se)if(l(A)!==null)se=!0,De(st);else{var W=l(L);W!==null&&me(Ee,W.startTime-E)}}function st(E,W){se=!1,Q&&(Q=!1,be(Ke),Ke=-1),U=!0;var I=H;try{for(rt(W),D=l(A);D!==null&&(!(D.expirationTime>W)||E&&!Kt());){var h=D.callback;if(typeof h=="function"){D.callback=null,H=D.priorityLevel;var N=h(D.expirationTime<=W);W=c.unstable_now(),typeof N=="function"?D.callback=N:D===l(A)&&y(A),rt(W)}else y(A);D=l(A)}if(D!==null)var V=!0;else{var Y=l(L);Y!==null&&me(Ee,Y.startTime-W),V=!1}return V}finally{D=null,H=I,U=!1}}var ze=!1,Me=null,Ke=-1,Ft=5,bt=-1;function Kt(){return!(c.unstable_now()-bt<Ft)}function mt(){if(Me!==null){var E=c.unstable_now();bt=E;var W=!0;try{W=Me(!0,E)}finally{W?$e():(ze=!1,Me=null)}}else ze=!1}var $e;if(typeof ht=="function")$e=function(){ht(mt)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ft=at.port2;at.port1.onmessage=mt,$e=function(){ft.postMessage(null)}}else $e=function(){K(mt,0)};function De(E){Me=E,ze||(ze=!0,$e())}function me(E,W){Ke=K(function(){E(c.unstable_now())},W)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(E){E.callback=null},c.unstable_continueExecution=function(){se||U||(se=!0,De(st))},c.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ft=0<E?Math.floor(1e3/E):5},c.unstable_getCurrentPriorityLevel=function(){return H},c.unstable_getFirstCallbackNode=function(){return l(A)},c.unstable_next=function(E){switch(H){case 1:case 2:case 3:var W=3;break;default:W=H}var I=H;H=W;try{return E()}finally{H=I}},c.unstable_pauseExecution=function(){},c.unstable_requestPaint=function(){},c.unstable_runWithPriority=function(E,W){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=H;H=E;try{return W()}finally{H=I}},c.unstable_scheduleCallback=function(E,W,I){var h=c.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?h+I:h):I=h,E){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=I+N,E={id:G++,callback:W,priorityLevel:E,startTime:I,expirationTime:N,sortIndex:-1},I>h?(E.sortIndex=I,g(L,E),l(A)===null&&E===l(L)&&(Q?(be(Ke),Ke=-1):Q=!0,me(Ee,I-h))):(E.sortIndex=N,g(A,E),se||U||(se=!0,De(st))),E},c.unstable_shouldYield=Kt,c.unstable_wrapCallback=function(E){var W=H;return function(){var I=H;H=W;try{return E.apply(this,arguments)}finally{H=I}}}})(Ho)),Ho}var ed;function Hp(){return ed||(ed=1,Wo.exports=Wp()),Wo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td;function Up(){if(td)return Ue;td=1;var c=Ws(),g=Hp();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y=new Set,w={};function b(e,t){M(e,t),M(e+"Capture",t)}function M(e,t){for(w[e]=t,e=0;e<t.length;e++)y.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),A=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},D={};function H(e){return A.call(D,e)?!0:A.call(G,e)?!1:L.test(e)?D[e]=!0:(G[e]=!0,!1)}function U(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function se(e,t,r,s){if(t===null||typeof t>"u"||U(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Q(e,t,r,s,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K[e]=new Q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];K[t]=new Q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){K[e]=new Q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K[e]=new Q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K[e]=new Q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){K[e]=new Q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){K[e]=new Q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){K[e]=new Q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){K[e]=new Q(e,5,!1,e.toLowerCase(),null,!1,!1)});var be=/[\-:]([a-z])/g;function ht(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(be,ht);K[t]=new Q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(be,ht);K[t]=new Q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(be,ht);K[t]=new Q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){K[e]=new Q(e,1,!1,e.toLowerCase(),null,!1,!1)}),K.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){K[e]=new Q(e,1,!1,e.toLowerCase(),null,!0,!0)});function rt(e,t,r,s){var a=K.hasOwnProperty(t)?K[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(se(t,r,a,s)&&(r=null),s||a===null?H(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Ee=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,st=Symbol.for("react.element"),ze=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),Ke=Symbol.for("react.strict_mode"),Ft=Symbol.for("react.profiler"),bt=Symbol.for("react.provider"),Kt=Symbol.for("react.context"),mt=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),E=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,h;function N(e){if(h===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);h=t&&t[1]||""}return`
`+h+e}var V=!1;function Y(e,t){if(!e||V)return"";V=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var s=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){s=x}e.call(t.prototype)}else{try{throw Error()}catch(x){s=x}e()}}catch(x){if(x&&s&&typeof x.stack=="string"){for(var a=x.stack.split(`
`),o=s.stack.split(`
`),i=a.length-1,d=o.length-1;1<=i&&0<=d&&a[i]!==o[d];)d--;for(;1<=i&&0<=d;i--,d--)if(a[i]!==o[d]){if(i!==1||d!==1)do if(i--,d--,0>d||a[i]!==o[d]){var u=`
`+a[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=d);break}}}finally{V=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?N(e):""}function J(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=Y(e.type,!1),e;case 11:return e=Y(e.type.render,!1),e;case 1:return e=Y(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case ze:return"Portal";case Ft:return"Profiler";case Ke:return"StrictMode";case $e:return"Suspense";case at:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kt:return(e.displayName||"Context")+".Consumer";case bt:return(e._context.displayName||"Context")+".Provider";case mt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case De:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(t);case 8:return t===Ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ne(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ge(e){var t=ce(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){s=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(i){s=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sr(e){e._valueTracker||(e._valueTracker=Ge(e))}function ti(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=ce(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Cr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $s(e,t){var r=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ni(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=ne(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ri(e,t){t=t.checked,t!=null&&rt(e,"checked",t,!1)}function Gs(e,t){ri(e,t);var r=ne(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vs(e,t.type,r):t.hasOwnProperty("defaultValue")&&Vs(e,t.type,ne(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function si(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Vs(e,t,r){(t!=="number"||Cr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Mn=Array.isArray;function un(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+ne(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function qs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ai(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(Mn(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ne(r)}}function oi(e,t){var r=ne(t.value),s=ne(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function ii(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function li(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ys(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?li(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ar,ci=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bd=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function di(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function ui(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=di(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var Wd=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qs(e,t){if(t){if(Wd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xs=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,pn=null,hn=null;function pi(e){if(e=or(e)){if(typeof Zs!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Kr(t),Zs(e.stateNode,e.type,t))}}function hi(e){pn?hn?hn.push(e):hn=[e]:pn=e}function mi(){if(pn){var e=pn,t=hn;if(hn=pn=null,pi(e),t)for(e=0;e<t.length;e++)pi(t[e])}}function fi(e,t){return e(t)}function gi(){}var ea=!1;function xi(e,t,r){if(ea)return e(t,r);ea=!0;try{return fi(e,t,r)}finally{ea=!1,(pn!==null||hn!==null)&&(gi(),mi())}}function On(e,t){var r=e.stateNode;if(r===null)return null;var s=Kr(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var ta=!1;if(v)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){ta=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{ta=!1}function Hd(e,t,r,s,a,o,i,d,u){var x=Array.prototype.slice.call(arguments,3);try{t.apply(r,x)}catch(k){this.onError(k)}}var Wn=!1,Er=null,Pr=!1,na=null,Ud={onError:function(e){Wn=!0,Er=e}};function $d(e,t,r,s,a,o,i,d,u){Wn=!1,Er=null,Hd.apply(Ud,arguments)}function Gd(e,t,r,s,a,o,i,d,u){if($d.apply(this,arguments),Wn){if(Wn){var x=Er;Wn=!1,Er=null}else throw Error(l(198));Pr||(Pr=!0,na=x)}}function Xt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function yi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vi(e){if(Xt(e)!==e)throw Error(l(188))}function Vd(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return vi(a),e;if(o===s)return vi(a),t;o=o.sibling}throw Error(l(188))}if(r.return!==s.return)r=a,s=o;else{for(var i=!1,d=a.child;d;){if(d===r){i=!0,r=a,s=o;break}if(d===s){i=!0,s=a,r=o;break}d=d.sibling}if(!i){for(d=o.child;d;){if(d===r){i=!0,r=o,s=a;break}if(d===s){i=!0,s=o,r=a;break}d=d.sibling}if(!i)throw Error(l(189))}}if(r.alternate!==s)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function wi(e){return e=Vd(e),e!==null?bi(e):null}function bi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bi(e);if(t!==null)return t;e=e.sibling}return null}var ji=g.unstable_scheduleCallback,Ni=g.unstable_cancelCallback,qd=g.unstable_shouldYield,Yd=g.unstable_requestPaint,ge=g.unstable_now,Qd=g.unstable_getCurrentPriorityLevel,ra=g.unstable_ImmediatePriority,ki=g.unstable_UserBlockingPriority,Fr=g.unstable_NormalPriority,Kd=g.unstable_LowPriority,Si=g.unstable_IdlePriority,Ir=null,gt=null;function Xd(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Ir,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:eu,Jd=Math.log,Zd=Math.LN2;function eu(e){return e>>>=0,e===0?32:31-(Jd(e)/Zd|0)|0}var Tr=64,zr=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var d=i&~a;d!==0?s=Hn(d):(o&=i,o!==0&&(s=Hn(o)))}else i=r&~a,i!==0?s=Hn(i):o!==0&&(s=Hn(o));if(s===0)return 0;if(t!==0&&t!==s&&(t&a)===0&&(a=s&-s,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if((s&4)!==0&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-ot(t),a=1<<r,s|=e[r],t&=~a;return s}function tu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nu(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-ot(o),d=1<<i,u=a[i];u===-1?((d&r)===0||(d&s)!==0)&&(a[i]=tu(d,t)):u<=t&&(e.expiredLanes|=d),o&=~d}}function sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ci(){var e=Tr;return Tr<<=1,(Tr&4194240)===0&&(Tr=64),e}function aa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Un(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=r}function ru(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-ot(r),o=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~o}}function oa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-ot(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var re=0;function Ai(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ei,ia,Pi,Fi,Ii,la=!1,Rr=[],It=null,Tt=null,zt=null,$n=new Map,Gn=new Map,_t=[],su="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ti(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Vn(e,t,r,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},t!==null&&(t=or(t),t!==null&&ia(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function au(e,t,r,s,a){switch(t){case"focusin":return It=Vn(It,e,t,r,s,a),!0;case"dragenter":return Tt=Vn(Tt,e,t,r,s,a),!0;case"mouseover":return zt=Vn(zt,e,t,r,s,a),!0;case"pointerover":var o=a.pointerId;return $n.set(o,Vn($n.get(o)||null,e,t,r,s,a)),!0;case"gotpointercapture":return o=a.pointerId,Gn.set(o,Vn(Gn.get(o)||null,e,t,r,s,a)),!0}return!1}function zi(e){var t=Jt(e.target);if(t!==null){var r=Xt(t);if(r!==null){if(t=r.tag,t===13){if(t=yi(r),t!==null){e.blockedOn=t,Ii(e.priority,function(){Pi(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=da(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Xs=s,r.target.dispatchEvent(s),Xs=null}else return t=or(r),t!==null&&ia(t),e.blockedOn=r,!1;t.shift()}return!0}function _i(e,t,r){Mr(e)&&r.delete(t)}function ou(){la=!1,It!==null&&Mr(It)&&(It=null),Tt!==null&&Mr(Tt)&&(Tt=null),zt!==null&&Mr(zt)&&(zt=null),$n.forEach(_i),Gn.forEach(_i)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,ou)))}function Yn(e){function t(a){return qn(a,e)}if(0<Rr.length){qn(Rr[0],e);for(var r=1;r<Rr.length;r++){var s=Rr[r];s.blockedOn===e&&(s.blockedOn=null)}}for(It!==null&&qn(It,e),Tt!==null&&qn(Tt,e),zt!==null&&qn(zt,e),$n.forEach(t),Gn.forEach(t),r=0;r<_t.length;r++)s=_t[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<_t.length&&(r=_t[0],r.blockedOn===null);)zi(r),r.blockedOn===null&&_t.shift()}var mn=Ee.ReactCurrentBatchConfig,Dr=!0;function iu(e,t,r,s){var a=re,o=mn.transition;mn.transition=null;try{re=1,ca(e,t,r,s)}finally{re=a,mn.transition=o}}function lu(e,t,r,s){var a=re,o=mn.transition;mn.transition=null;try{re=4,ca(e,t,r,s)}finally{re=a,mn.transition=o}}function ca(e,t,r,s){if(Dr){var a=da(e,t,r,s);if(a===null)Aa(e,t,s,Lr,r),Ti(e,s);else if(au(a,e,t,r,s))s.stopPropagation();else if(Ti(e,s),t&4&&-1<su.indexOf(e)){for(;a!==null;){var o=or(a);if(o!==null&&Ei(o),o=da(e,t,r,s),o===null&&Aa(e,t,s,Lr,r),o===a)break;a=o}a!==null&&s.stopPropagation()}else Aa(e,t,s,null,r)}}var Lr=null;function da(e,t,r,s){if(Lr=null,e=Js(s),e=Jt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=yi(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lr=e,null}function Ri(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qd()){case ra:return 1;case ki:return 4;case Fr:case Kd:return 16;case Si:return 536870912;default:return 16}default:return 16}}var Rt=null,ua=null,Or=null;function Mi(){if(Or)return Or;var e,t=ua,r=t.length,s,a="value"in Rt?Rt.value:Rt.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(s=1;s<=i&&t[r-s]===a[o-s];s++);return Or=a.slice(e,1<s?1-s:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wr(){return!0}function Di(){return!1}function Ve(e){function t(r,s,a,o,i){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(r=e[d],this[d]=r?r(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wr:Di,this.isPropagationStopped=Di,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pa=Ve(fn),Qn=I({},fn,{view:0,detail:0}),cu=Ve(Qn),ha,ma,Kn,Hr=I({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(ha=e.screenX-Kn.screenX,ma=e.screenY-Kn.screenY):ma=ha=0,Kn=e),ha)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),Li=Ve(Hr),du=I({},Hr,{dataTransfer:0}),uu=Ve(du),pu=I({},Qn,{relatedTarget:0}),fa=Ve(pu),hu=I({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),mu=Ve(hu),fu=I({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gu=Ve(fu),xu=I({},fn,{data:0}),Oi=Ve(xu),yu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wu[e])?!!t[e]:!1}function ga(){return bu}var ju=I({},Qn,{key:function(e){if(e.key){var t=yu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ga,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nu=Ve(ju),ku=I({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bi=Ve(ku),Su=I({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ga}),Cu=Ve(Su),Au=I({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eu=Ve(Au),Pu=I({},Hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fu=Ve(Pu),Iu=[9,13,27,32],xa=v&&"CompositionEvent"in window,Xn=null;v&&"documentMode"in document&&(Xn=document.documentMode);var Tu=v&&"TextEvent"in window&&!Xn,Wi=v&&(!xa||Xn&&8<Xn&&11>=Xn),Hi=" ",Ui=!1;function $i(e,t){switch(e){case"keyup":return Iu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function zu(e,t){switch(e){case"compositionend":return Gi(t);case"keypress":return t.which!==32?null:(Ui=!0,Hi);case"textInput":return e=t.data,e===Hi&&Ui?null:e;default:return null}}function _u(e,t){if(gn)return e==="compositionend"||!xa&&$i(e,t)?(e=Mi(),Or=ua=Rt=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wi&&t.locale!=="ko"?null:t.data;default:return null}}var Ru={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ru[e.type]:t==="textarea"}function qi(e,t,r,s){hi(s),t=qr(t,"onChange"),0<t.length&&(r=new pa("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Jn=null,Zn=null;function Mu(e){ul(e,0)}function Ur(e){var t=bn(e);if(ti(t))return e}function Du(e,t){if(e==="change")return t}var Yi=!1;if(v){var ya;if(v){var va="oninput"in document;if(!va){var Qi=document.createElement("div");Qi.setAttribute("oninput","return;"),va=typeof Qi.oninput=="function"}ya=va}else ya=!1;Yi=ya&&(!document.documentMode||9<document.documentMode)}function Ki(){Jn&&(Jn.detachEvent("onpropertychange",Xi),Zn=Jn=null)}function Xi(e){if(e.propertyName==="value"&&Ur(Zn)){var t=[];qi(t,Zn,e,Js(e)),xi(Mu,t)}}function Lu(e,t,r){e==="focusin"?(Ki(),Jn=t,Zn=r,Jn.attachEvent("onpropertychange",Xi)):e==="focusout"&&Ki()}function Ou(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ur(Zn)}function Bu(e,t){if(e==="click")return Ur(t)}function Wu(e,t){if(e==="input"||e==="change")return Ur(t)}function Hu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:Hu;function er(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!A.call(t,a)||!it(e[a],t[a]))return!1}return!0}function Ji(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zi(e,t){var r=Ji(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ji(r)}}function el(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?el(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tl(){for(var e=window,t=Cr();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Cr(e.document)}return t}function wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uu(e){var t=tl(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&el(r.ownerDocument.documentElement,r)){if(s!==null&&wa(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=Zi(r,o);var i=Zi(r,s);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $u=v&&"documentMode"in document&&11>=document.documentMode,xn=null,ba=null,tr=null,ja=!1;function nl(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ja||xn==null||xn!==Cr(s)||(s=xn,"selectionStart"in s&&wa(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),tr&&er(tr,s)||(tr=s,s=qr(ba,"onSelect"),0<s.length&&(t=new pa("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=xn)))}function $r(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var yn={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},Na={},rl={};v&&(rl=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Gr(e){if(Na[e])return Na[e];if(!yn[e])return e;var t=yn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in rl)return Na[e]=t[r];return e}var sl=Gr("animationend"),al=Gr("animationiteration"),ol=Gr("animationstart"),il=Gr("transitionend"),ll=new Map,cl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){ll.set(e,t),b(t,[e])}for(var ka=0;ka<cl.length;ka++){var Sa=cl[ka],Gu=Sa.toLowerCase(),Vu=Sa[0].toUpperCase()+Sa.slice(1);Mt(Gu,"on"+Vu)}Mt(sl,"onAnimationEnd"),Mt(al,"onAnimationIteration"),Mt(ol,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(il,"onTransitionEnd"),M("onMouseEnter",["mouseout","mouseover"]),M("onMouseLeave",["mouseout","mouseover"]),M("onPointerEnter",["pointerout","pointerover"]),M("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qu=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function dl(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Gd(s,t,void 0,e),e.currentTarget=null}function ul(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var i=s.length-1;0<=i;i--){var d=s[i],u=d.instance,x=d.currentTarget;if(d=d.listener,u!==o&&a.isPropagationStopped())break e;dl(a,d,x),o=u}else for(i=0;i<s.length;i++){if(d=s[i],u=d.instance,x=d.currentTarget,d=d.listener,u!==o&&a.isPropagationStopped())break e;dl(a,d,x),o=u}}}if(Pr)throw e=na,Pr=!1,na=null,e}function ie(e,t){var r=t[za];r===void 0&&(r=t[za]=new Set);var s=e+"__bubble";r.has(s)||(pl(t,e,2,!1),r.add(s))}function Ca(e,t,r){var s=0;t&&(s|=4),pl(r,e,s,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Vr]){e[Vr]=!0,y.forEach(function(r){r!=="selectionchange"&&(qu.has(r)||Ca(r,!1,e),Ca(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,Ca("selectionchange",!1,t))}}function pl(e,t,r,s){switch(Ri(t)){case 1:var a=iu;break;case 4:a=lu;break;default:a=ca}r=a.bind(null,t,r,e),a=void 0,!ta||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Aa(e,t,r,s,a){var o=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var i=s.tag;if(i===3||i===4){var d=s.stateNode.containerInfo;if(d===a||d.nodeType===8&&d.parentNode===a)break;if(i===4)for(i=s.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;i=i.return}for(;d!==null;){if(i=Jt(d),i===null)return;if(u=i.tag,u===5||u===6){s=o=i;continue e}d=d.parentNode}}s=s.return}xi(function(){var x=o,k=Js(r),S=[];e:{var j=ll.get(e);if(j!==void 0){var P=pa,T=e;switch(e){case"keypress":if(Br(r)===0)break e;case"keydown":case"keyup":P=Nu;break;case"focusin":T="focus",P=fa;break;case"focusout":T="blur",P=fa;break;case"beforeblur":case"afterblur":P=fa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Li;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=uu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Cu;break;case sl:case al:case ol:P=mu;break;case il:P=Eu;break;case"scroll":P=cu;break;case"wheel":P=Fu;break;case"copy":case"cut":case"paste":P=gu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Bi}var z=(t&4)!==0,xe=!z&&e==="scroll",m=z?j!==null?j+"Capture":null:j;z=[];for(var p=x,f;p!==null;){f=p;var C=f.stateNode;if(f.tag===5&&C!==null&&(f=C,m!==null&&(C=On(p,m),C!=null&&z.push(sr(p,C,f)))),xe)break;p=p.return}0<z.length&&(j=new P(j,T,null,r,k),S.push({event:j,listeners:z}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",j&&r!==Xs&&(T=r.relatedTarget||r.fromElement)&&(Jt(T)||T[jt]))break e;if((P||j)&&(j=k.window===k?k:(j=k.ownerDocument)?j.defaultView||j.parentWindow:window,P?(T=r.relatedTarget||r.toElement,P=x,T=T?Jt(T):null,T!==null&&(xe=Xt(T),T!==xe||T.tag!==5&&T.tag!==6)&&(T=null)):(P=null,T=x),P!==T)){if(z=Li,C="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(z=Bi,C="onPointerLeave",m="onPointerEnter",p="pointer"),xe=P==null?j:bn(P),f=T==null?j:bn(T),j=new z(C,p+"leave",P,r,k),j.target=xe,j.relatedTarget=f,C=null,Jt(k)===x&&(z=new z(m,p+"enter",T,r,k),z.target=f,z.relatedTarget=xe,C=z),xe=C,P&&T)t:{for(z=P,m=T,p=0,f=z;f;f=vn(f))p++;for(f=0,C=m;C;C=vn(C))f++;for(;0<p-f;)z=vn(z),p--;for(;0<f-p;)m=vn(m),f--;for(;p--;){if(z===m||m!==null&&z===m.alternate)break t;z=vn(z),m=vn(m)}z=null}else z=null;P!==null&&hl(S,j,P,z,!1),T!==null&&xe!==null&&hl(S,xe,T,z,!0)}}e:{if(j=x?bn(x):window,P=j.nodeName&&j.nodeName.toLowerCase(),P==="select"||P==="input"&&j.type==="file")var _=Du;else if(Vi(j))if(Yi)_=Wu;else{_=Ou;var O=Lu}else(P=j.nodeName)&&P.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(_=Bu);if(_&&(_=_(e,x))){qi(S,_,r,k);break e}O&&O(e,j,x),e==="focusout"&&(O=j._wrapperState)&&O.controlled&&j.type==="number"&&Vs(j,"number",j.value)}switch(O=x?bn(x):window,e){case"focusin":(Vi(O)||O.contentEditable==="true")&&(xn=O,ba=x,tr=null);break;case"focusout":tr=ba=xn=null;break;case"mousedown":ja=!0;break;case"contextmenu":case"mouseup":case"dragend":ja=!1,nl(S,r,k);break;case"selectionchange":if($u)break;case"keydown":case"keyup":nl(S,r,k)}var B;if(xa)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else gn?$i(e,r)&&($="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&($="onCompositionStart");$&&(Wi&&r.locale!=="ko"&&(gn||$!=="onCompositionStart"?$==="onCompositionEnd"&&gn&&(B=Mi()):(Rt=k,ua="value"in Rt?Rt.value:Rt.textContent,gn=!0)),O=qr(x,$),0<O.length&&($=new Oi($,e,null,r,k),S.push({event:$,listeners:O}),B?$.data=B:(B=Gi(r),B!==null&&($.data=B)))),(B=Tu?zu(e,r):_u(e,r))&&(x=qr(x,"onBeforeInput"),0<x.length&&(k=new Oi("onBeforeInput","beforeinput",null,r,k),S.push({event:k,listeners:x}),k.data=B))}ul(S,t)})}function sr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function qr(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=On(e,r),o!=null&&s.unshift(sr(e,o,a)),o=On(e,t),o!=null&&s.push(sr(e,o,a))),e=e.return}return s}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hl(e,t,r,s,a){for(var o=t._reactName,i=[];r!==null&&r!==s;){var d=r,u=d.alternate,x=d.stateNode;if(u!==null&&u===s)break;d.tag===5&&x!==null&&(d=x,a?(u=On(r,o),u!=null&&i.unshift(sr(r,u,d))):a||(u=On(r,o),u!=null&&i.push(sr(r,u,d)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Yu=/\r\n?/g,Qu=/\u0000|\uFFFD/g;function ml(e){return(typeof e=="string"?e:""+e).replace(Yu,`
`).replace(Qu,"")}function Yr(e,t,r){if(t=ml(t),ml(e)!==t&&r)throw Error(l(425))}function Qr(){}var Ea=null,Pa=null;function Fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ia=typeof setTimeout=="function"?setTimeout:void 0,Ku=typeof clearTimeout=="function"?clearTimeout:void 0,fl=typeof Promise=="function"?Promise:void 0,Xu=typeof queueMicrotask=="function"?queueMicrotask:typeof fl<"u"?function(e){return fl.resolve(null).then(e).catch(Ju)}:Ia;function Ju(e){setTimeout(function(){throw e})}function Ta(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Yn(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Yn(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),xt="__reactFiber$"+wn,ar="__reactProps$"+wn,jt="__reactContainer$"+wn,za="__reactEvents$"+wn,Zu="__reactListeners$"+wn,ep="__reactHandles$"+wn;function Jt(e){var t=e[xt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[jt]||r[xt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=gl(e);e!==null;){if(r=e[xt])return r;e=gl(e)}return t}e=r,r=e.parentNode}return null}function or(e){return e=e[xt]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Kr(e){return e[ar]||null}var _a=[],jn=-1;function Lt(e){return{current:e}}function le(e){0>jn||(e.current=_a[jn],_a[jn]=null,jn--)}function oe(e,t){jn++,_a[jn]=e.current,e.current=t}var Ot={},Pe=Lt(Ot),Le=Lt(!1),Zt=Ot;function Nn(e,t){var r=e.type.contextTypes;if(!r)return Ot;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Oe(e){return e=e.childContextTypes,e!=null}function Xr(){le(Le),le(Pe)}function xl(e,t,r){if(Pe.current!==Ot)throw Error(l(168));oe(Pe,t),oe(Le,r)}function yl(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(l(108,ae(e)||"Unknown",a));return I({},r,s)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Zt=Pe.current,oe(Pe,e),oe(Le,Le.current),!0}function vl(e,t,r){var s=e.stateNode;if(!s)throw Error(l(169));r?(e=yl(e,t,Zt),s.__reactInternalMemoizedMergedChildContext=e,le(Le),le(Pe),oe(Pe,e)):le(Le),oe(Le,r)}var Nt=null,Zr=!1,Ra=!1;function wl(e){Nt===null?Nt=[e]:Nt.push(e)}function tp(e){Zr=!0,wl(e)}function Bt(){if(!Ra&&Nt!==null){Ra=!0;var e=0,t=re;try{var r=Nt;for(re=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Nt=null,Zr=!1}catch(a){throw Nt!==null&&(Nt=Nt.slice(e+1)),ji(ra,Bt),a}finally{re=t,Ra=!1}}return null}var kn=[],Sn=0,es=null,ts=0,Xe=[],Je=0,en=null,kt=1,St="";function tn(e,t){kn[Sn++]=ts,kn[Sn++]=es,es=e,ts=t}function bl(e,t,r){Xe[Je++]=kt,Xe[Je++]=St,Xe[Je++]=en,en=e;var s=kt;e=St;var a=32-ot(s)-1;s&=~(1<<a),r+=1;var o=32-ot(t)+a;if(30<o){var i=a-a%5;o=(s&(1<<i)-1).toString(32),s>>=i,a-=i,kt=1<<32-ot(t)+a|r<<a|s,St=o+e}else kt=1<<o|r<<a|s,St=e}function Ma(e){e.return!==null&&(tn(e,1),bl(e,1,0))}function Da(e){for(;e===es;)es=kn[--Sn],kn[Sn]=null,ts=kn[--Sn],kn[Sn]=null;for(;e===en;)en=Xe[--Je],Xe[Je]=null,St=Xe[--Je],Xe[Je]=null,kt=Xe[--Je],Xe[Je]=null}var qe=null,Ye=null,de=!1,lt=null;function jl(e,t){var r=nt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Nl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ye=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=en!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=nt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qe=e,Ye=null,!0):!1;default:return!1}}function La(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oa(e){if(de){var t=Ye;if(t){var r=t;if(!Nl(e,t)){if(La(e))throw Error(l(418));t=Dt(r.nextSibling);var s=qe;t&&Nl(e,t)?jl(s,r):(e.flags=e.flags&-4097|2,de=!1,qe=e)}}else{if(La(e))throw Error(l(418));e.flags=e.flags&-4097|2,de=!1,qe=e}}}function kl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function ns(e){if(e!==qe)return!1;if(!de)return kl(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fa(e.type,e.memoizedProps)),t&&(t=Ye)){if(La(e))throw Sl(),Error(l(418));for(;t;)jl(e,t),t=Dt(t.nextSibling)}if(kl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ye=Dt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=qe?Dt(e.stateNode.nextSibling):null;return!0}function Sl(){for(var e=Ye;e;)e=Dt(e.nextSibling)}function Cn(){Ye=qe=null,de=!1}function Ba(e){lt===null?lt=[e]:lt.push(e)}var np=Ee.ReactCurrentBatchConfig;function ir(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var s=r.stateNode}if(!s)throw Error(l(147,e));var a=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var d=a.refs;i===null?delete d[o]:d[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cl(e){var t=e._init;return t(e._payload)}function Al(e){function t(m,p){if(e){var f=m.deletions;f===null?(m.deletions=[p],m.flags|=16):f.push(p)}}function r(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function s(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function a(m,p){return m=Yt(m,p),m.index=0,m.sibling=null,m}function o(m,p,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<p?(m.flags|=2,p):f):(m.flags|=2,p)):(m.flags|=1048576,p)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function d(m,p,f,C){return p===null||p.tag!==6?(p=To(f,m.mode,C),p.return=m,p):(p=a(p,f),p.return=m,p)}function u(m,p,f,C){var _=f.type;return _===Me?k(m,p,f.props.children,C,f.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===De&&Cl(_)===p.type)?(C=a(p,f.props),C.ref=ir(m,p,f),C.return=m,C):(C=As(f.type,f.key,f.props,null,m.mode,C),C.ref=ir(m,p,f),C.return=m,C)}function x(m,p,f,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=zo(f,m.mode,C),p.return=m,p):(p=a(p,f.children||[]),p.return=m,p)}function k(m,p,f,C,_){return p===null||p.tag!==7?(p=dn(f,m.mode,C,_),p.return=m,p):(p=a(p,f),p.return=m,p)}function S(m,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=To(""+p,m.mode,f),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case st:return f=As(p.type,p.key,p.props,null,m.mode,f),f.ref=ir(m,null,p),f.return=m,f;case ze:return p=zo(p,m.mode,f),p.return=m,p;case De:var C=p._init;return S(m,C(p._payload),f)}if(Mn(p)||W(p))return p=dn(p,m.mode,f,null),p.return=m,p;rs(m,p)}return null}function j(m,p,f,C){var _=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return _!==null?null:d(m,p,""+f,C);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case st:return f.key===_?u(m,p,f,C):null;case ze:return f.key===_?x(m,p,f,C):null;case De:return _=f._init,j(m,p,_(f._payload),C)}if(Mn(f)||W(f))return _!==null?null:k(m,p,f,C,null);rs(m,f)}return null}function P(m,p,f,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(f)||null,d(p,m,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case st:return m=m.get(C.key===null?f:C.key)||null,u(p,m,C,_);case ze:return m=m.get(C.key===null?f:C.key)||null,x(p,m,C,_);case De:var O=C._init;return P(m,p,f,O(C._payload),_)}if(Mn(C)||W(C))return m=m.get(f)||null,k(p,m,C,_,null);rs(p,C)}return null}function T(m,p,f,C){for(var _=null,O=null,B=p,$=p=0,ke=null;B!==null&&$<f.length;$++){B.index>$?(ke=B,B=null):ke=B.sibling;var ee=j(m,B,f[$],C);if(ee===null){B===null&&(B=ke);break}e&&B&&ee.alternate===null&&t(m,B),p=o(ee,p,$),O===null?_=ee:O.sibling=ee,O=ee,B=ke}if($===f.length)return r(m,B),de&&tn(m,$),_;if(B===null){for(;$<f.length;$++)B=S(m,f[$],C),B!==null&&(p=o(B,p,$),O===null?_=B:O.sibling=B,O=B);return de&&tn(m,$),_}for(B=s(m,B);$<f.length;$++)ke=P(B,m,$,f[$],C),ke!==null&&(e&&ke.alternate!==null&&B.delete(ke.key===null?$:ke.key),p=o(ke,p,$),O===null?_=ke:O.sibling=ke,O=ke);return e&&B.forEach(function(Qt){return t(m,Qt)}),de&&tn(m,$),_}function z(m,p,f,C){var _=W(f);if(typeof _!="function")throw Error(l(150));if(f=_.call(f),f==null)throw Error(l(151));for(var O=_=null,B=p,$=p=0,ke=null,ee=f.next();B!==null&&!ee.done;$++,ee=f.next()){B.index>$?(ke=B,B=null):ke=B.sibling;var Qt=j(m,B,ee.value,C);if(Qt===null){B===null&&(B=ke);break}e&&B&&Qt.alternate===null&&t(m,B),p=o(Qt,p,$),O===null?_=Qt:O.sibling=Qt,O=Qt,B=ke}if(ee.done)return r(m,B),de&&tn(m,$),_;if(B===null){for(;!ee.done;$++,ee=f.next())ee=S(m,ee.value,C),ee!==null&&(p=o(ee,p,$),O===null?_=ee:O.sibling=ee,O=ee);return de&&tn(m,$),_}for(B=s(m,B);!ee.done;$++,ee=f.next())ee=P(B,m,$,ee.value,C),ee!==null&&(e&&ee.alternate!==null&&B.delete(ee.key===null?$:ee.key),p=o(ee,p,$),O===null?_=ee:O.sibling=ee,O=ee);return e&&B.forEach(function(Rp){return t(m,Rp)}),de&&tn(m,$),_}function xe(m,p,f,C){if(typeof f=="object"&&f!==null&&f.type===Me&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case st:e:{for(var _=f.key,O=p;O!==null;){if(O.key===_){if(_=f.type,_===Me){if(O.tag===7){r(m,O.sibling),p=a(O,f.props.children),p.return=m,m=p;break e}}else if(O.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===De&&Cl(_)===O.type){r(m,O.sibling),p=a(O,f.props),p.ref=ir(m,O,f),p.return=m,m=p;break e}r(m,O);break}else t(m,O);O=O.sibling}f.type===Me?(p=dn(f.props.children,m.mode,C,f.key),p.return=m,m=p):(C=As(f.type,f.key,f.props,null,m.mode,C),C.ref=ir(m,p,f),C.return=m,m=C)}return i(m);case ze:e:{for(O=f.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){r(m,p.sibling),p=a(p,f.children||[]),p.return=m,m=p;break e}else{r(m,p);break}else t(m,p);p=p.sibling}p=zo(f,m.mode,C),p.return=m,m=p}return i(m);case De:return O=f._init,xe(m,p,O(f._payload),C)}if(Mn(f))return T(m,p,f,C);if(W(f))return z(m,p,f,C);rs(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(r(m,p.sibling),p=a(p,f),p.return=m,m=p):(r(m,p),p=To(f,m.mode,C),p.return=m,m=p),i(m)):r(m,p)}return xe}var An=Al(!0),El=Al(!1),ss=Lt(null),as=null,En=null,Wa=null;function Ha(){Wa=En=as=null}function Ua(e){var t=ss.current;le(ss),e._currentValue=t}function $a(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Pn(e,t){as=e,Wa=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Be=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(Wa!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(as===null)throw Error(l(308));En=e,as.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var nn=null;function Ga(e){nn===null?nn=[e]:nn.push(e)}function Pl(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,Ga(t)):(r.next=a.next,a.next=r),t.interleaved=r,Ct(e,s)}function Ct(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Wt=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(X&2)!==0){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Ct(e,r)}return a=s.interleaved,a===null?(t.next=t,Ga(s)):(t.next=a.next,a.next=t),s.interleaved=t,Ct(e,r)}function os(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,oa(e,r)}}function Il(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function is(e,t,r,s){var a=e.updateQueue;Wt=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var u=d,x=u.next;u.next=null,i===null?o=x:i.next=x,i=u;var k=e.alternate;k!==null&&(k=k.updateQueue,d=k.lastBaseUpdate,d!==i&&(d===null?k.firstBaseUpdate=x:d.next=x,k.lastBaseUpdate=u))}if(o!==null){var S=a.baseState;i=0,k=x=u=null,d=o;do{var j=d.lane,P=d.eventTime;if((s&j)===j){k!==null&&(k=k.next={eventTime:P,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var T=e,z=d;switch(j=t,P=r,z.tag){case 1:if(T=z.payload,typeof T=="function"){S=T.call(P,S,j);break e}S=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=z.payload,j=typeof T=="function"?T.call(P,S,j):T,j==null)break e;S=I({},S,j);break e;case 2:Wt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,j=a.effects,j===null?a.effects=[d]:j.push(d))}else P={eventTime:P,lane:j,tag:d.tag,payload:d.payload,callback:d.callback,next:null},k===null?(x=k=P,u=S):k=k.next=P,i|=j;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;j=d,d=j.next,j.next=null,a.lastBaseUpdate=j,a.shared.pending=null}}while(!0);if(k===null&&(u=S),a.baseState=u,a.firstBaseUpdate=x,a.lastBaseUpdate=k,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);an|=i,e.lanes=i,e.memoizedState=S}}function Tl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(l(191,a));a.call(s)}}}var lr={},yt=Lt(lr),cr=Lt(lr),dr=Lt(lr);function rn(e){if(e===lr)throw Error(l(174));return e}function qa(e,t){switch(oe(dr,t),oe(cr,e),oe(yt,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ys(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ys(t,e)}le(yt),oe(yt,t)}function Fn(){le(yt),le(cr),le(dr)}function zl(e){rn(dr.current);var t=rn(yt.current),r=Ys(t,e.type);t!==r&&(oe(cr,e),oe(yt,r))}function Ya(e){cr.current===e&&(le(yt),le(cr))}var pe=Lt(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qa=[];function Ka(){for(var e=0;e<Qa.length;e++)Qa[e]._workInProgressVersionPrimary=null;Qa.length=0}var cs=Ee.ReactCurrentDispatcher,Xa=Ee.ReactCurrentBatchConfig,sn=0,he=null,ve=null,je=null,ds=!1,ur=!1,pr=0,rp=0;function Fe(){throw Error(l(321))}function Ja(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!it(e[r],t[r]))return!1;return!0}function Za(e,t,r,s,a,o){if(sn=o,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,cs.current=e===null||e.memoizedState===null?ip:lp,e=r(s,a),ur){o=0;do{if(ur=!1,pr=0,25<=o)throw Error(l(301));o+=1,je=ve=null,t.updateQueue=null,cs.current=cp,e=r(s,a)}while(ur)}if(cs.current=hs,t=ve!==null&&ve.next!==null,sn=0,je=ve=he=null,ds=!1,t)throw Error(l(300));return e}function eo(){var e=pr!==0;return pr=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?he.memoizedState=je=e:je=je.next=e,je}function et(){if(ve===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=je===null?he.memoizedState:je.next;if(t!==null)je=t,ve=e;else{if(e===null)throw Error(l(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},je===null?he.memoizedState=je=e:je=je.next=e}return je}function hr(e,t){return typeof t=="function"?t(e):t}function to(e){var t=et(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var s=ve,a=s.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}s.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,s=s.baseState;var d=i=null,u=null,x=o;do{var k=x.lane;if((sn&k)===k)u!==null&&(u=u.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),s=x.hasEagerState?x.eagerState:e(s,x.action);else{var S={lane:k,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};u===null?(d=u=S,i=s):u=u.next=S,he.lanes|=k,an|=k}x=x.next}while(x!==null&&x!==o);u===null?i=s:u.next=d,it(s,t.memoizedState)||(Be=!0),t.memoizedState=s,t.baseState=i,t.baseQueue=u,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do o=a.lane,he.lanes|=o,an|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function no(e){var t=et(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);it(o,t.memoizedState)||(Be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,s]}function _l(){}function Rl(e,t){var r=he,s=et(),a=t(),o=!it(s.memoizedState,a);if(o&&(s.memoizedState=a,Be=!0),s=s.queue,ro(Ll.bind(null,r,s,e),[e]),s.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(r.flags|=2048,mr(9,Dl.bind(null,r,s,a,t),void 0,null),Ne===null)throw Error(l(349));(sn&30)!==0||Ml(r,t,a)}return a}function Ml(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Dl(e,t,r,s){t.value=r,t.getSnapshot=s,Ol(t)&&Bl(e)}function Ll(e,t,r){return r(function(){Ol(t)&&Bl(e)})}function Ol(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!it(e,r)}catch{return!0}}function Bl(e){var t=Ct(e,1);t!==null&&pt(t,e,1,-1)}function Wl(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=op.bind(null,he,e),[t.memoizedState,e]}function mr(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Hl(){return et().memoizedState}function us(e,t,r,s){var a=vt();he.flags|=e,a.memoizedState=mr(1|t,r,void 0,s===void 0?null:s)}function ps(e,t,r,s){var a=et();s=s===void 0?null:s;var o=void 0;if(ve!==null){var i=ve.memoizedState;if(o=i.destroy,s!==null&&Ja(s,i.deps)){a.memoizedState=mr(t,r,o,s);return}}he.flags|=e,a.memoizedState=mr(1|t,r,o,s)}function Ul(e,t){return us(8390656,8,e,t)}function ro(e,t){return ps(2048,8,e,t)}function $l(e,t){return ps(4,2,e,t)}function Gl(e,t){return ps(4,4,e,t)}function Vl(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ql(e,t,r){return r=r!=null?r.concat([e]):null,ps(4,4,Vl.bind(null,t,e),r)}function so(){}function Yl(e,t){var r=et();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Ja(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Ql(e,t){var r=et();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Ja(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Kl(e,t,r){return(sn&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=r):(it(r,t)||(r=Ci(),he.lanes|=r,an|=r,e.baseState=!0),t)}function sp(e,t){var r=re;re=r!==0&&4>r?r:4,e(!0);var s=Xa.transition;Xa.transition={};try{e(!1),t()}finally{re=r,Xa.transition=s}}function Xl(){return et().memoizedState}function ap(e,t,r){var s=Vt(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Jl(e))Zl(t,r);else if(r=Pl(e,t,r,s),r!==null){var a=Re();pt(r,e,s,a),ec(r,t,s)}}function op(e,t,r){var s=Vt(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Jl(e))Zl(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,d=o(i,r);if(a.hasEagerState=!0,a.eagerState=d,it(d,i)){var u=t.interleaved;u===null?(a.next=a,Ga(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}r=Pl(e,t,a,s),r!==null&&(a=Re(),pt(r,e,s,a),ec(r,t,s))}}function Jl(e){var t=e.alternate;return e===he||t!==null&&t===he}function Zl(e,t){ur=ds=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function ec(e,t,r){if((r&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,oa(e,r)}}var hs={readContext:Ze,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},ip={readContext:Ze,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Ul,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,us(4194308,4,Vl.bind(null,t,e),r)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){return us(4,2,e,t)},useMemo:function(e,t){var r=vt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=vt();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=ap.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Wl,useDebugValue:so,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Wl(!1),t=e[0];return e=sp.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=he,a=vt();if(de){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),Ne===null)throw Error(l(349));(sn&30)!==0||Ml(s,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Ul(Ll.bind(null,s,o,e),[e]),s.flags|=2048,mr(9,Dl.bind(null,s,o,r,t),void 0,null),r},useId:function(){var e=vt(),t=Ne.identifierPrefix;if(de){var r=St,s=kt;r=(s&~(1<<32-ot(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=pr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=rp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lp={readContext:Ze,useCallback:Yl,useContext:Ze,useEffect:ro,useImperativeHandle:ql,useInsertionEffect:$l,useLayoutEffect:Gl,useMemo:Ql,useReducer:to,useRef:Hl,useState:function(){return to(hr)},useDebugValue:so,useDeferredValue:function(e){var t=et();return Kl(t,ve.memoizedState,e)},useTransition:function(){var e=to(hr)[0],t=et().memoizedState;return[e,t]},useMutableSource:_l,useSyncExternalStore:Rl,useId:Xl,unstable_isNewReconciler:!1},cp={readContext:Ze,useCallback:Yl,useContext:Ze,useEffect:ro,useImperativeHandle:ql,useInsertionEffect:$l,useLayoutEffect:Gl,useMemo:Ql,useReducer:no,useRef:Hl,useState:function(){return no(hr)},useDebugValue:so,useDeferredValue:function(e){var t=et();return ve===null?t.memoizedState=e:Kl(t,ve.memoizedState,e)},useTransition:function(){var e=no(hr)[0],t=et().memoizedState;return[e,t]},useMutableSource:_l,useSyncExternalStore:Rl,useId:Xl,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=I({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ao(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:I({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ms={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Re(),a=Vt(e),o=At(s,a);o.payload=t,r!=null&&(o.callback=r),t=Ht(e,o,a),t!==null&&(pt(t,e,a,s),os(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Re(),a=Vt(e),o=At(s,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Ht(e,o,a),t!==null&&(pt(t,e,a,s),os(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Re(),s=Vt(e),a=At(r,s);a.tag=2,t!=null&&(a.callback=t),t=Ht(e,a,s),t!==null&&(pt(t,e,s,r),os(t,e,s))}};function tc(e,t,r,s,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,i):t.prototype&&t.prototype.isPureReactComponent?!er(r,s)||!er(a,o):!0}function nc(e,t,r){var s=!1,a=Ot,o=t.contextType;return typeof o=="object"&&o!==null?o=Ze(o):(a=Oe(t)?Zt:Pe.current,s=t.contextTypes,o=(s=s!=null)?Nn(e,a):Ot),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ms,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function rc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&ms.enqueueReplaceState(t,t.state,null)}function oo(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Va(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Ze(o):(o=Oe(t)?Zt:Pe.current,a.context=Nn(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ao(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ms.enqueueReplaceState(a,a.state,null),is(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var r="",s=t;do r+=J(s),s=s.return;while(s);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function io(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function lo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var dp=typeof WeakMap=="function"?WeakMap:Map;function sc(e,t,r){r=At(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){bs||(bs=!0,ko=s),lo(e,t)},r}function ac(e,t,r){r=At(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){lo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){lo(e,t),typeof s!="function"&&($t===null?$t=new Set([this]):$t.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function oc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new dp;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=kp.bind(null,e,t,r),t.then(e,e))}function ic(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lc(e,t,r,s,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=At(-1,1),t.tag=2,Ht(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var up=Ee.ReactCurrentOwner,Be=!1;function _e(e,t,r,s){t.child=e===null?El(t,null,r,s):An(t,e.child,r,s)}function cc(e,t,r,s,a){r=r.render;var o=t.ref;return Pn(t,a),s=Za(e,t,r,s,o,a),r=eo(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Et(e,t,a)):(de&&r&&Ma(t),t.flags|=1,_e(e,t,s,a),t.child)}function dc(e,t,r,s,a){if(e===null){var o=r.type;return typeof o=="function"&&!Io(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,uc(e,t,o,s,a)):(e=As(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&a)===0){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:er,r(i,s)&&e.ref===t.ref)return Et(e,t,a)}return t.flags|=1,e=Yt(o,s),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,r,s,a){if(e!==null){var o=e.memoizedProps;if(er(o,s)&&e.ref===t.ref)if(Be=!1,t.pendingProps=s=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,Et(e,t,a)}return co(e,t,r,s,a)}function pc(e,t,r){var s=t.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(zn,Qe),Qe|=r;else{if((r&1073741824)===0)return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(zn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:r,oe(zn,Qe),Qe|=s}else o!==null?(s=o.baseLanes|r,t.memoizedState=null):s=r,oe(zn,Qe),Qe|=s;return _e(e,t,a,r),t.child}function hc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function co(e,t,r,s,a){var o=Oe(r)?Zt:Pe.current;return o=Nn(t,o),Pn(t,a),r=Za(e,t,r,s,o,a),s=eo(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Et(e,t,a)):(de&&s&&Ma(t),t.flags|=1,_e(e,t,r,a),t.child)}function mc(e,t,r,s,a){if(Oe(r)){var o=!0;Jr(t)}else o=!1;if(Pn(t,a),t.stateNode===null)gs(e,t),nc(t,r,s),oo(t,r,s,a),s=!0;else if(e===null){var i=t.stateNode,d=t.memoizedProps;i.props=d;var u=i.context,x=r.contextType;typeof x=="object"&&x!==null?x=Ze(x):(x=Oe(r)?Zt:Pe.current,x=Nn(t,x));var k=r.getDerivedStateFromProps,S=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function";S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==s||u!==x)&&rc(t,i,s,x),Wt=!1;var j=t.memoizedState;i.state=j,is(t,s,i,a),u=t.memoizedState,d!==s||j!==u||Le.current||Wt?(typeof k=="function"&&(ao(t,r,k,s),u=t.memoizedState),(d=Wt||tc(t,r,d,s,j,u,x))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=u),i.props=s,i.state=u,i.context=x,s=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,Fl(e,t),d=t.memoizedProps,x=t.type===t.elementType?d:ct(t.type,d),i.props=x,S=t.pendingProps,j=i.context,u=r.contextType,typeof u=="object"&&u!==null?u=Ze(u):(u=Oe(r)?Zt:Pe.current,u=Nn(t,u));var P=r.getDerivedStateFromProps;(k=typeof P=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==S||j!==u)&&rc(t,i,s,u),Wt=!1,j=t.memoizedState,i.state=j,is(t,s,i,a);var T=t.memoizedState;d!==S||j!==T||Le.current||Wt?(typeof P=="function"&&(ao(t,r,P,s),T=t.memoizedState),(x=Wt||tc(t,r,x,s,j,T,u)||!1)?(k||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,T,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,T,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=T),i.props=s,i.state=T,i.context=u,s=x):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),s=!1)}return uo(e,t,r,s,o,a)}function uo(e,t,r,s,a,o){hc(e,t);var i=(t.flags&128)!==0;if(!s&&!i)return a&&vl(t,r,!1),Et(e,t,o);s=t.stateNode,up.current=t;var d=i&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&i?(t.child=An(t,e.child,null,o),t.child=An(t,null,d,o)):_e(e,t,d,o),t.memoizedState=s.state,a&&vl(t,r,!0),t.child}function fc(e){var t=e.stateNode;t.pendingContext?xl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xl(e,t.context,!1),qa(e,t.containerInfo)}function gc(e,t,r,s,a){return Cn(),Ba(a),t.flags|=256,_e(e,t,r,s),t.child}var po={dehydrated:null,treeContext:null,retryLane:0};function ho(e){return{baseLanes:e,cachePool:null,transitions:null}}function xc(e,t,r){var s=t.pendingProps,a=pe.current,o=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(a&2)!==0),d?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),oe(pe,a&1),e===null)return Oa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=s.children,e=s.fallback,o?(s=t.mode,o=t.child,i={mode:"hidden",children:i},(s&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Es(i,s,0,null),e=dn(e,s,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ho(r),t.memoizedState=po,e):mo(t,i));if(a=e.memoizedState,a!==null&&(d=a.dehydrated,d!==null))return pp(e,t,i,s,d,a,r);if(o){o=s.fallback,i=t.mode,a=e.child,d=a.sibling;var u={mode:"hidden",children:s.children};return(i&1)===0&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=u,t.deletions=null):(s=Yt(a,u),s.subtreeFlags=a.subtreeFlags&14680064),d!==null?o=Yt(d,o):(o=dn(o,i,r,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,i=e.child.memoizedState,i=i===null?ho(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=po,s}return o=e.child,e=o.sibling,s=Yt(o,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function mo(e,t){return t=Es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fs(e,t,r,s){return s!==null&&Ba(s),An(t,e.child,null,r),e=mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pp(e,t,r,s,a,o,i){if(r)return t.flags&256?(t.flags&=-257,s=io(Error(l(422))),fs(e,t,i,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,a=t.mode,s=Es({mode:"visible",children:s.children},a,0,null),o=dn(o,a,i,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,(t.mode&1)!==0&&An(t,e.child,null,i),t.child.memoizedState=ho(i),t.memoizedState=po,o);if((t.mode&1)===0)return fs(e,t,i,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var d=s.dgst;return s=d,o=Error(l(419)),s=io(o,s,void 0),fs(e,t,i,s)}if(d=(i&e.childLanes)!==0,Be||d){if(s=Ne,s!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(s.suspendedLanes|i))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Ct(e,a),pt(s,e,a,-1))}return Fo(),s=io(Error(l(421))),fs(e,t,i,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Sp.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ye=Dt(a.nextSibling),qe=t,de=!0,lt=null,e!==null&&(Xe[Je++]=kt,Xe[Je++]=St,Xe[Je++]=en,kt=e.id,St=e.overflow,en=t),t=mo(t,s.children),t.flags|=4096,t)}function yc(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),$a(e.return,t,r)}function fo(e,t,r,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=r,o.tailMode=a)}function vc(e,t,r){var s=t.pendingProps,a=s.revealOrder,o=s.tail;if(_e(e,t,s.children,r),s=pe.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,r,t);else if(e.tag===19)yc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(oe(pe,s),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&ls(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),fo(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ls(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}fo(t,!0,r,null,o);break;case"together":fo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=Yt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Yt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function hp(e,t,r){switch(t.tag){case 3:fc(t),Cn();break;case 5:zl(t);break;case 1:Oe(t.type)&&Jr(t);break;case 4:qa(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;oe(ss,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(oe(pe,pe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?xc(e,t,r):(oe(pe,pe.current&1),e=Et(e,t,r),e!==null?e.sibling:null);oe(pe,pe.current&1);break;case 19:if(s=(r&t.childLanes)!==0,(e.flags&128)!==0){if(s)return vc(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),oe(pe,pe.current),s)break;return null;case 22:case 23:return t.lanes=0,pc(e,t,r)}return Et(e,t,r)}var wc,go,bc,jc;wc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},go=function(){},bc=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,rn(yt.current);var o=null;switch(r){case"input":a=$s(e,a),s=$s(e,s),o=[];break;case"select":a=I({},a,{value:void 0}),s=I({},s,{value:void 0}),o=[];break;case"textarea":a=qs(e,a),s=qs(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Qr)}Qs(r,s);var i;r=null;for(x in a)if(!s.hasOwnProperty(x)&&a.hasOwnProperty(x)&&a[x]!=null)if(x==="style"){var d=a[x];for(i in d)d.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(w.hasOwnProperty(x)?o||(o=[]):(o=o||[]).push(x,null));for(x in s){var u=s[x];if(d=a!=null?a[x]:void 0,s.hasOwnProperty(x)&&u!==d&&(u!=null||d!=null))if(x==="style")if(d){for(i in d)!d.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in u)u.hasOwnProperty(i)&&d[i]!==u[i]&&(r||(r={}),r[i]=u[i])}else r||(o||(o=[]),o.push(x,r)),r=u;else x==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,d=d?d.__html:void 0,u!=null&&d!==u&&(o=o||[]).push(x,u)):x==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(x,""+u):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(w.hasOwnProperty(x)?(u!=null&&x==="onScroll"&&ie("scroll",e),o||d===u||(o=[])):(o=o||[]).push(x,u))}r&&(o=o||[]).push("style",r);var x=o;(t.updateQueue=x)&&(t.flags|=4)}},jc=function(e,t,r,s){r!==s&&(t.flags|=4)};function fr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function mp(e,t,r){var s=t.pendingProps;switch(Da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Oe(t.type)&&Xr(),Ie(t),null;case 3:return s=t.stateNode,Fn(),le(Le),le(Pe),Ka(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lt!==null&&(Ao(lt),lt=null))),go(e,t),Ie(t),null;case 5:Ya(t);var a=rn(dr.current);if(r=t.type,e!==null&&t.stateNode!=null)bc(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Ie(t),null}if(e=rn(yt.current),ns(t)){s=t.stateNode,r=t.type;var o=t.memoizedProps;switch(s[xt]=t,s[ar]=o,e=(t.mode&1)!==0,r){case"dialog":ie("cancel",s),ie("close",s);break;case"iframe":case"object":case"embed":ie("load",s);break;case"video":case"audio":for(a=0;a<nr.length;a++)ie(nr[a],s);break;case"source":ie("error",s);break;case"img":case"image":case"link":ie("error",s),ie("load",s);break;case"details":ie("toggle",s);break;case"input":ni(s,o),ie("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},ie("invalid",s);break;case"textarea":ai(s,o),ie("invalid",s)}Qs(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var d=o[i];i==="children"?typeof d=="string"?s.textContent!==d&&(o.suppressHydrationWarning!==!0&&Yr(s.textContent,d,e),a=["children",d]):typeof d=="number"&&s.textContent!==""+d&&(o.suppressHydrationWarning!==!0&&Yr(s.textContent,d,e),a=["children",""+d]):w.hasOwnProperty(i)&&d!=null&&i==="onScroll"&&ie("scroll",s)}switch(r){case"input":Sr(s),si(s,o,!0);break;case"textarea":Sr(s),ii(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Qr)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=li(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=i.createElement(r,{is:s.is}):(e=i.createElement(r),r==="select"&&(i=e,s.multiple?i.multiple=!0:s.size&&(i.size=s.size))):e=i.createElementNS(e,r),e[xt]=t,e[ar]=s,wc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ks(r,s),r){case"dialog":ie("cancel",e),ie("close",e),a=s;break;case"iframe":case"object":case"embed":ie("load",e),a=s;break;case"video":case"audio":for(a=0;a<nr.length;a++)ie(nr[a],e);a=s;break;case"source":ie("error",e),a=s;break;case"img":case"image":case"link":ie("error",e),ie("load",e),a=s;break;case"details":ie("toggle",e),a=s;break;case"input":ni(e,s),a=$s(e,s),ie("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=I({},s,{value:void 0}),ie("invalid",e);break;case"textarea":ai(e,s),a=qs(e,s),ie("invalid",e);break;default:a=s}Qs(r,a),d=a;for(o in d)if(d.hasOwnProperty(o)){var u=d[o];o==="style"?ui(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ci(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(w.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ie("scroll",e):u!=null&&rt(e,o,u,i))}switch(r){case"input":Sr(e),si(e,s,!1);break;case"textarea":Sr(e),ii(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ne(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?un(e,!!s.multiple,o,!1):s.defaultValue!=null&&un(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Qr)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)jc(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(l(166));if(r=rn(dr.current),rn(yt.current),ns(t)){if(s=t.stateNode,r=t.memoizedProps,s[xt]=t,(o=s.nodeValue!==r)&&(e=qe,e!==null))switch(e.tag){case 3:Yr(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(s.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[xt]=t,t.stateNode=s}return Ie(t),null;case 13:if(le(pe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&Ye!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Sl(),Cn(),t.flags|=98560,o=!1;else if(o=ns(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[xt]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else lt!==null&&(Ao(lt),lt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(pe.current&1)!==0?we===0&&(we=3):Fo())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Fn(),go(e,t),e===null&&rr(t.stateNode.containerInfo),Ie(t),null;case 10:return Ua(t.type._context),Ie(t),null;case 17:return Oe(t.type)&&Xr(),Ie(t),null;case 19:if(le(pe),o=t.memoizedState,o===null)return Ie(t),null;if(s=(t.flags&128)!==0,i=o.rendering,i===null)if(s)fr(o,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ls(e),i!==null){for(t.flags|=128,fr(o,!1),s=i.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)o=r,e=s,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return oe(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ge()>_n&&(t.flags|=128,s=!0,fr(o,!1),t.lanes=4194304)}else{if(!s)if(e=ls(i),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!de)return Ie(t),null}else 2*ge()-o.renderingStartTime>_n&&r!==1073741824&&(t.flags|=128,s=!0,fr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ge(),t.sibling=null,r=pe.current,oe(pe,s?r&1|2:r&1),t):(Ie(t),null);case 22:case 23:return Po(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(Qe&1073741824)!==0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function fp(e,t){switch(Da(t),t.tag){case 1:return Oe(t.type)&&Xr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fn(),le(Le),le(Pe),Ka(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ya(t),null;case 13:if(le(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(pe),null;case 4:return Fn(),null;case 10:return Ua(t.type._context),null;case 22:case 23:return Po(),null;case 24:return null;default:return null}}var xs=!1,Te=!1,gp=typeof WeakSet=="function"?WeakSet:Set,F=null;function Tn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){fe(e,t,s)}else r.current=null}function xo(e,t,r){try{r()}catch(s){fe(e,t,s)}}var Nc=!1;function xp(e,t){if(Ea=Dr,e=tl(),wa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,d=-1,u=-1,x=0,k=0,S=e,j=null;t:for(;;){for(var P;S!==r||a!==0&&S.nodeType!==3||(d=i+a),S!==o||s!==0&&S.nodeType!==3||(u=i+s),S.nodeType===3&&(i+=S.nodeValue.length),(P=S.firstChild)!==null;)j=S,S=P;for(;;){if(S===e)break t;if(j===r&&++x===a&&(d=i),j===o&&++k===s&&(u=i),(P=S.nextSibling)!==null)break;S=j,j=S.parentNode}S=P}r=d===-1||u===-1?null:{start:d,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pa={focusedElem:e,selectionRange:r},Dr=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var T=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var z=T.memoizedProps,xe=T.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?z:ct(t.type,z),xe);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){fe(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return T=Nc,Nc=!1,T}function gr(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&xo(t,r,o)}a=a.next}while(a!==s)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function yo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function kc(e){var t=e.alternate;t!==null&&(e.alternate=null,kc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[ar],delete t[za],delete t[Zu],delete t[ep])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sc(e){return e.tag===5||e.tag===3||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Qr));else if(s!==4&&(e=e.child,e!==null))for(vo(e,t,r),e=e.sibling;e!==null;)vo(e,t,r),e=e.sibling}function wo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(wo(e,t,r),e=e.sibling;e!==null;)wo(e,t,r),e=e.sibling}var Se=null,dt=!1;function Ut(e,t,r){for(r=r.child;r!==null;)Ac(e,t,r),r=r.sibling}function Ac(e,t,r){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Ir,r)}catch{}switch(r.tag){case 5:Te||Tn(r,t);case 6:var s=Se,a=dt;Se=null,Ut(e,t,r),Se=s,dt=a,Se!==null&&(dt?(e=Se,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Se.removeChild(r.stateNode));break;case 18:Se!==null&&(dt?(e=Se,r=r.stateNode,e.nodeType===8?Ta(e.parentNode,r):e.nodeType===1&&Ta(e,r),Yn(e)):Ta(Se,r.stateNode));break;case 4:s=Se,a=dt,Se=r.stateNode.containerInfo,dt=!0,Ut(e,t,r),Se=s,dt=a;break;case 0:case 11:case 14:case 15:if(!Te&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&xo(r,t,i),a=a.next}while(a!==s)}Ut(e,t,r);break;case 1:if(!Te&&(Tn(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(d){fe(r,t,d)}Ut(e,t,r);break;case 21:Ut(e,t,r);break;case 22:r.mode&1?(Te=(s=Te)||r.memoizedState!==null,Ut(e,t,r),Te=s):Ut(e,t,r);break;default:Ut(e,t,r)}}function Ec(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new gp),t.forEach(function(s){var a=Cp.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function ut(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var o=e,i=t,d=i;e:for(;d!==null;){switch(d.tag){case 5:Se=d.stateNode,dt=!1;break e;case 3:Se=d.stateNode.containerInfo,dt=!0;break e;case 4:Se=d.stateNode.containerInfo,dt=!0;break e}d=d.return}if(Se===null)throw Error(l(160));Ac(o,i,a),Se=null,dt=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(x){fe(a,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pc(t,e),t=t.sibling}function Pc(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),wt(e),s&4){try{gr(3,e,e.return),ys(3,e)}catch(z){fe(e,e.return,z)}try{gr(5,e,e.return)}catch(z){fe(e,e.return,z)}}break;case 1:ut(t,e),wt(e),s&512&&r!==null&&Tn(r,r.return);break;case 5:if(ut(t,e),wt(e),s&512&&r!==null&&Tn(r,r.return),e.flags&32){var a=e.stateNode;try{Dn(a,"")}catch(z){fe(e,e.return,z)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,d=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{d==="input"&&o.type==="radio"&&o.name!=null&&ri(a,o),Ks(d,i);var x=Ks(d,o);for(i=0;i<u.length;i+=2){var k=u[i],S=u[i+1];k==="style"?ui(a,S):k==="dangerouslySetInnerHTML"?ci(a,S):k==="children"?Dn(a,S):rt(a,k,S,x)}switch(d){case"input":Gs(a,o);break;case"textarea":oi(a,o);break;case"select":var j=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var P=o.value;P!=null?un(a,!!o.multiple,P,!1):j!==!!o.multiple&&(o.defaultValue!=null?un(a,!!o.multiple,o.defaultValue,!0):un(a,!!o.multiple,o.multiple?[]:"",!1))}a[ar]=o}catch(z){fe(e,e.return,z)}}break;case 6:if(ut(t,e),wt(e),s&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(z){fe(e,e.return,z)}}break;case 3:if(ut(t,e),wt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(z){fe(e,e.return,z)}break;case 4:ut(t,e),wt(e);break;case 13:ut(t,e),wt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(No=ge())),s&4&&Ec(e);break;case 22:if(k=r!==null&&r.memoizedState!==null,e.mode&1?(Te=(x=Te)||k,ut(t,e),Te=x):ut(t,e),wt(e),s&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!k&&(e.mode&1)!==0)for(F=e,k=e.child;k!==null;){for(S=F=k;F!==null;){switch(j=F,P=j.child,j.tag){case 0:case 11:case 14:case 15:gr(4,j,j.return);break;case 1:Tn(j,j.return);var T=j.stateNode;if(typeof T.componentWillUnmount=="function"){s=j,r=j.return;try{t=s,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(z){fe(s,r,z)}}break;case 5:Tn(j,j.return);break;case 22:if(j.memoizedState!==null){Tc(S);continue}}P!==null?(P.return=j,F=P):Tc(S)}k=k.sibling}e:for(k=null,S=e;;){if(S.tag===5){if(k===null){k=S;try{a=S.stateNode,x?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(d=S.stateNode,u=S.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,d.style.display=di("display",i))}catch(z){fe(e,e.return,z)}}}else if(S.tag===6){if(k===null)try{S.stateNode.nodeValue=x?"":S.memoizedProps}catch(z){fe(e,e.return,z)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;k===S&&(k=null),S=S.return}k===S&&(k=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:ut(t,e),wt(e),s&4&&Ec(e);break;case 21:break;default:ut(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Sc(r)){var s=r;break e}r=r.return}throw Error(l(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Dn(a,""),s.flags&=-33);var o=Cc(e);wo(e,o,a);break;case 3:case 4:var i=s.stateNode.containerInfo,d=Cc(e);vo(e,d,i);break;default:throw Error(l(161))}}catch(u){fe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yp(e,t,r){F=e,Fc(e)}function Fc(e,t,r){for(var s=(e.mode&1)!==0;F!==null;){var a=F,o=a.child;if(a.tag===22&&s){var i=a.memoizedState!==null||xs;if(!i){var d=a.alternate,u=d!==null&&d.memoizedState!==null||Te;d=xs;var x=Te;if(xs=i,(Te=u)&&!x)for(F=a;F!==null;)i=F,u=i.child,i.tag===22&&i.memoizedState!==null?zc(a):u!==null?(u.return=i,F=u):zc(a);for(;o!==null;)F=o,Fc(o),o=o.sibling;F=a,xs=d,Te=x}Ic(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,F=o):Ic(e)}}function Ic(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Te||ys(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Te)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:ct(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Tl(t,o,s);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Tl(t,i,r)}break;case 5:var d=t.stateNode;if(r===null&&t.flags&4){r=d;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var k=x.memoizedState;if(k!==null){var S=k.dehydrated;S!==null&&Yn(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Te||t.flags&512&&yo(t)}catch(j){fe(t,t.return,j)}}if(t===e){F=null;break}if(r=t.sibling,r!==null){r.return=t.return,F=r;break}F=t.return}}function Tc(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var r=t.sibling;if(r!==null){r.return=t.return,F=r;break}F=t.return}}function zc(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ys(4,t)}catch(u){fe(t,r,u)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(u){fe(t,a,u)}}var o=t.return;try{yo(t)}catch(u){fe(t,o,u)}break;case 5:var i=t.return;try{yo(t)}catch(u){fe(t,i,u)}}}catch(u){fe(t,t.return,u)}if(t===e){F=null;break}var d=t.sibling;if(d!==null){d.return=t.return,F=d;break}F=t.return}}var vp=Math.ceil,vs=Ee.ReactCurrentDispatcher,bo=Ee.ReactCurrentOwner,tt=Ee.ReactCurrentBatchConfig,X=0,Ne=null,ye=null,Ce=0,Qe=0,zn=Lt(0),we=0,xr=null,an=0,ws=0,jo=0,yr=null,We=null,No=0,_n=1/0,Pt=null,bs=!1,ko=null,$t=null,js=!1,Gt=null,Ns=0,vr=0,So=null,ks=-1,Ss=0;function Re(){return(X&6)!==0?ge():ks!==-1?ks:ks=ge()}function Vt(e){return(e.mode&1)===0?1:(X&2)!==0&&Ce!==0?Ce&-Ce:np.transition!==null?(Ss===0&&(Ss=Ci()),Ss):(e=re,e!==0||(e=window.event,e=e===void 0?16:Ri(e.type)),e)}function pt(e,t,r,s){if(50<vr)throw vr=0,So=null,Error(l(185));Un(e,r,s),((X&2)===0||e!==Ne)&&(e===Ne&&((X&2)===0&&(ws|=r),we===4&&qt(e,Ce)),He(e,s),r===1&&X===0&&(t.mode&1)===0&&(_n=ge()+500,Zr&&Bt()))}function He(e,t){var r=e.callbackNode;nu(e,t);var s=_r(e,e===Ne?Ce:0);if(s===0)r!==null&&Ni(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Ni(r),t===1)e.tag===0?tp(Rc.bind(null,e)):wl(Rc.bind(null,e)),Xu(function(){(X&6)===0&&Bt()}),r=null;else{switch(Ai(s)){case 1:r=ra;break;case 4:r=ki;break;case 16:r=Fr;break;case 536870912:r=Si;break;default:r=Fr}r=Uc(r,_c.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function _c(e,t){if(ks=-1,Ss=0,(X&6)!==0)throw Error(l(327));var r=e.callbackNode;if(Rn()&&e.callbackNode!==r)return null;var s=_r(e,e===Ne?Ce:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=Cs(e,s);else{t=s;var a=X;X|=2;var o=Dc();(Ne!==e||Ce!==t)&&(Pt=null,_n=ge()+500,ln(e,t));do try{jp();break}catch(d){Mc(e,d)}while(!0);Ha(),vs.current=o,X=a,ye!==null?t=0:(Ne=null,Ce=0,t=we)}if(t!==0){if(t===2&&(a=sa(e),a!==0&&(s=a,t=Co(e,a))),t===1)throw r=xr,ln(e,0),qt(e,s),He(e,ge()),r;if(t===6)qt(e,s);else{if(a=e.current.alternate,(s&30)===0&&!wp(a)&&(t=Cs(e,s),t===2&&(o=sa(e),o!==0&&(s=o,t=Co(e,o))),t===1))throw r=xr,ln(e,0),qt(e,s),He(e,ge()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(l(345));case 2:cn(e,We,Pt);break;case 3:if(qt(e,s),(s&130023424)===s&&(t=No+500-ge(),10<t)){if(_r(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Re(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ia(cn.bind(null,e,We,Pt),t);break}cn(e,We,Pt);break;case 4:if(qt(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var i=31-ot(s);o=1<<i,i=t[i],i>a&&(a=i),s&=~o}if(s=a,s=ge()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*vp(s/1960))-s,10<s){e.timeoutHandle=Ia(cn.bind(null,e,We,Pt),s);break}cn(e,We,Pt);break;case 5:cn(e,We,Pt);break;default:throw Error(l(329))}}}return He(e,ge()),e.callbackNode===r?_c.bind(null,e):null}function Co(e,t){var r=yr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=Cs(e,t),e!==2&&(t=We,We=r,t!==null&&Ao(t)),e}function Ao(e){We===null?We=e:We.push.apply(We,e)}function wp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],o=a.getSnapshot;a=a.value;try{if(!it(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~jo,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ot(t),s=1<<r;e[r]=-1,t&=~s}}function Rc(e){if((X&6)!==0)throw Error(l(327));Rn();var t=_r(e,0);if((t&1)===0)return He(e,ge()),null;var r=Cs(e,t);if(e.tag!==0&&r===2){var s=sa(e);s!==0&&(t=s,r=Co(e,s))}if(r===1)throw r=xr,ln(e,0),qt(e,t),He(e,ge()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,We,Pt),He(e,ge()),null}function Eo(e,t){var r=X;X|=1;try{return e(t)}finally{X=r,X===0&&(_n=ge()+500,Zr&&Bt())}}function on(e){Gt!==null&&Gt.tag===0&&(X&6)===0&&Rn();var t=X;X|=1;var r=tt.transition,s=re;try{if(tt.transition=null,re=1,e)return e()}finally{re=s,tt.transition=r,X=t,(X&6)===0&&Bt()}}function Po(){Qe=zn.current,le(zn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ku(r)),ye!==null)for(r=ye.return;r!==null;){var s=r;switch(Da(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Xr();break;case 3:Fn(),le(Le),le(Pe),Ka();break;case 5:Ya(s);break;case 4:Fn();break;case 13:le(pe);break;case 19:le(pe);break;case 10:Ua(s.type._context);break;case 22:case 23:Po()}r=r.return}if(Ne=e,ye=e=Yt(e.current,null),Ce=Qe=t,we=0,xr=null,jo=ws=an=0,We=yr=null,nn!==null){for(t=0;t<nn.length;t++)if(r=nn[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,s.next=i}r.pending=s}nn=null}return e}function Mc(e,t){do{var r=ye;try{if(Ha(),cs.current=hs,ds){for(var s=he.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}ds=!1}if(sn=0,je=ve=he=null,ur=!1,pr=0,bo.current=null,r===null||r.return===null){we=1,xr=t,ye=null;break}e:{var o=e,i=r.return,d=r,u=t;if(t=Ce,d.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var x=u,k=d,S=k.tag;if((k.mode&1)===0&&(S===0||S===11||S===15)){var j=k.alternate;j?(k.updateQueue=j.updateQueue,k.memoizedState=j.memoizedState,k.lanes=j.lanes):(k.updateQueue=null,k.memoizedState=null)}var P=ic(i);if(P!==null){P.flags&=-257,lc(P,i,d,o,t),P.mode&1&&oc(o,x,t),t=P,u=x;var T=t.updateQueue;if(T===null){var z=new Set;z.add(u),t.updateQueue=z}else T.add(u);break e}else{if((t&1)===0){oc(o,x,t),Fo();break e}u=Error(l(426))}}else if(de&&d.mode&1){var xe=ic(i);if(xe!==null){(xe.flags&65536)===0&&(xe.flags|=256),lc(xe,i,d,o,t),Ba(In(u,d));break e}}o=u=In(u,d),we!==4&&(we=2),yr===null?yr=[o]:yr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=sc(o,u,t);Il(o,m);break e;case 1:d=u;var p=o.type,f=o.stateNode;if((o.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&($t===null||!$t.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=ac(o,d,t);Il(o,C);break e}}o=o.return}while(o!==null)}Oc(r)}catch(_){t=_,ye===r&&r!==null&&(ye=r=r.return);continue}break}while(!0)}function Dc(){var e=vs.current;return vs.current=hs,e===null?hs:e}function Fo(){(we===0||we===3||we===2)&&(we=4),Ne===null||(an&268435455)===0&&(ws&268435455)===0||qt(Ne,Ce)}function Cs(e,t){var r=X;X|=2;var s=Dc();(Ne!==e||Ce!==t)&&(Pt=null,ln(e,t));do try{bp();break}catch(a){Mc(e,a)}while(!0);if(Ha(),X=r,vs.current=s,ye!==null)throw Error(l(261));return Ne=null,Ce=0,we}function bp(){for(;ye!==null;)Lc(ye)}function jp(){for(;ye!==null&&!qd();)Lc(ye)}function Lc(e){var t=Hc(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Oc(e):ye=t,bo.current=null}function Oc(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=mp(r,t,Qe),r!==null){ye=r;return}}else{if(r=fp(r,t),r!==null){r.flags&=32767,ye=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ye=null;return}}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);we===0&&(we=5)}function cn(e,t,r){var s=re,a=tt.transition;try{tt.transition=null,re=1,Np(e,t,r,s)}finally{tt.transition=a,re=s}return null}function Np(e,t,r,s){do Rn();while(Gt!==null);if((X&6)!==0)throw Error(l(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(ru(e,o),e===Ne&&(ye=Ne=null,Ce=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||js||(js=!0,Uc(Fr,function(){return Rn(),null})),o=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||o){o=tt.transition,tt.transition=null;var i=re;re=1;var d=X;X|=4,bo.current=null,xp(e,r),Pc(r,e),Uu(Pa),Dr=!!Ea,Pa=Ea=null,e.current=r,yp(r),Yd(),X=d,re=i,tt.transition=o}else e.current=r;if(js&&(js=!1,Gt=e,Ns=a),o=e.pendingLanes,o===0&&($t=null),Xd(r.stateNode),He(e,ge()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(bs)throw bs=!1,e=ko,ko=null,e;return(Ns&1)!==0&&e.tag!==0&&Rn(),o=e.pendingLanes,(o&1)!==0?e===So?vr++:(vr=0,So=e):vr=0,Bt(),null}function Rn(){if(Gt!==null){var e=Ai(Ns),t=tt.transition,r=re;try{if(tt.transition=null,re=16>e?16:e,Gt===null)var s=!1;else{if(e=Gt,Gt=null,Ns=0,(X&6)!==0)throw Error(l(331));var a=X;for(X|=4,F=e.current;F!==null;){var o=F,i=o.child;if((F.flags&16)!==0){var d=o.deletions;if(d!==null){for(var u=0;u<d.length;u++){var x=d[u];for(F=x;F!==null;){var k=F;switch(k.tag){case 0:case 11:case 15:gr(8,k,o)}var S=k.child;if(S!==null)S.return=k,F=S;else for(;F!==null;){k=F;var j=k.sibling,P=k.return;if(kc(k),k===x){F=null;break}if(j!==null){j.return=P,F=j;break}F=P}}}var T=o.alternate;if(T!==null){var z=T.child;if(z!==null){T.child=null;do{var xe=z.sibling;z.sibling=null,z=xe}while(z!==null)}}F=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,F=i;else e:for(;F!==null;){if(o=F,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:gr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,F=m;break e}F=o.return}}var p=e.current;for(F=p;F!==null;){i=F;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,F=f;else e:for(i=p;F!==null;){if(d=F,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:ys(9,d)}}catch(_){fe(d,d.return,_)}if(d===i){F=null;break e}var C=d.sibling;if(C!==null){C.return=d.return,F=C;break e}F=d.return}}if(X=a,Bt(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Ir,e)}catch{}s=!0}return s}finally{re=r,tt.transition=t}}return!1}function Bc(e,t,r){t=In(r,t),t=sc(e,t,1),e=Ht(e,t,1),t=Re(),e!==null&&(Un(e,1,t),He(e,t))}function fe(e,t,r){if(e.tag===3)Bc(e,e,r);else for(;t!==null;){if(t.tag===3){Bc(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&($t===null||!$t.has(s))){e=In(r,e),e=ac(t,e,1),t=Ht(t,e,1),e=Re(),t!==null&&(Un(t,1,e),He(t,e));break}}t=t.return}}function kp(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&r,Ne===e&&(Ce&r)===r&&(we===4||we===3&&(Ce&130023424)===Ce&&500>ge()-No?ln(e,0):jo|=r),He(e,t)}function Wc(e,t){t===0&&((e.mode&1)===0?t=1:(t=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var r=Re();e=Ct(e,t),e!==null&&(Un(e,t,r),He(e,r))}function Sp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Wc(e,r)}function Cp(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(l(314))}s!==null&&s.delete(t),Wc(e,r)}var Hc;Hc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Be=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Be=!1,hp(e,t,r);Be=(e.flags&131072)!==0}else Be=!1,de&&(t.flags&1048576)!==0&&bl(t,ts,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;gs(e,t),e=t.pendingProps;var a=Nn(t,Pe.current);Pn(t,r),a=Za(null,t,s,e,a,r);var o=eo();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(s)?(o=!0,Jr(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Va(t),a.updater=ms,t.stateNode=a,a._reactInternals=t,oo(t,s,e,r),t=uo(null,t,s,!0,o,r)):(t.tag=0,de&&o&&Ma(t),_e(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(gs(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Ep(s),e=ct(s,e),a){case 0:t=co(null,t,s,e,r);break e;case 1:t=mc(null,t,s,e,r);break e;case 11:t=cc(null,t,s,e,r);break e;case 14:t=dc(null,t,s,ct(s.type,e),r);break e}throw Error(l(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ct(s,a),co(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ct(s,a),mc(e,t,s,a,r);case 3:e:{if(fc(t),e===null)throw Error(l(387));s=t.pendingProps,o=t.memoizedState,a=o.element,Fl(e,t),is(t,s,null,r);var i=t.memoizedState;if(s=i.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=In(Error(l(423)),t),t=gc(e,t,s,r,a);break e}else if(s!==a){a=In(Error(l(424)),t),t=gc(e,t,s,r,a);break e}else for(Ye=Dt(t.stateNode.containerInfo.firstChild),qe=t,de=!0,lt=null,r=El(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Cn(),s===a){t=Et(e,t,r);break e}_e(e,t,s,r)}t=t.child}return t;case 5:return zl(t),e===null&&Oa(t),s=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Fa(s,a)?i=null:o!==null&&Fa(s,o)&&(t.flags|=32),hc(e,t),_e(e,t,i,r),t.child;case 6:return e===null&&Oa(t),null;case 13:return xc(e,t,r);case 4:return qa(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=An(t,null,s,r):_e(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ct(s,a),cc(e,t,s,a,r);case 7:return _e(e,t,t.pendingProps,r),t.child;case 8:return _e(e,t,t.pendingProps.children,r),t.child;case 12:return _e(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,oe(ss,s._currentValue),s._currentValue=i,o!==null)if(it(o.value,i)){if(o.children===a.children&&!Le.current){t=Et(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var d=o.dependencies;if(d!==null){i=o.child;for(var u=d.firstContext;u!==null;){if(u.context===s){if(o.tag===1){u=At(-1,r&-r),u.tag=2;var x=o.updateQueue;if(x!==null){x=x.shared;var k=x.pending;k===null?u.next=u:(u.next=k.next,k.next=u),x.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),$a(o.return,r,t),d.lanes|=r;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(l(341));i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),$a(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}_e(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Pn(t,r),a=Ze(a),s=s(a),t.flags|=1,_e(e,t,s,r),t.child;case 14:return s=t.type,a=ct(s,t.pendingProps),a=ct(s.type,a),dc(e,t,s,a,r);case 15:return uc(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:ct(s,a),gs(e,t),t.tag=1,Oe(s)?(e=!0,Jr(t)):e=!1,Pn(t,r),nc(t,s,a),oo(t,s,a,r),uo(null,t,s,!0,e,r);case 19:return vc(e,t,r);case 22:return pc(e,t,r)}throw Error(l(156,t.tag))};function Uc(e,t){return ji(e,t)}function Ap(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,r,s){return new Ap(e,t,r,s)}function Io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ep(e){if(typeof e=="function")return Io(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mt)return 11;if(e===ft)return 14}return 2}function Yt(e,t){var r=e.alternate;return r===null?(r=nt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function As(e,t,r,s,a,o){var i=2;if(s=e,typeof e=="function")Io(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Me:return dn(r.children,a,o,t);case Ke:i=8,a|=8;break;case Ft:return e=nt(12,r,t,a|2),e.elementType=Ft,e.lanes=o,e;case $e:return e=nt(13,r,t,a),e.elementType=$e,e.lanes=o,e;case at:return e=nt(19,r,t,a),e.elementType=at,e.lanes=o,e;case me:return Es(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bt:i=10;break e;case Kt:i=9;break e;case mt:i=11;break e;case ft:i=14;break e;case De:i=16,s=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=nt(i,r,t,a),t.elementType=e,t.type=s,t.lanes=o,t}function dn(e,t,r,s){return e=nt(7,e,s,t),e.lanes=r,e}function Es(e,t,r,s){return e=nt(22,e,s,t),e.elementType=me,e.lanes=r,e.stateNode={isHidden:!1},e}function To(e,t,r){return e=nt(6,e,null,t),e.lanes=r,e}function zo(e,t,r){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pp(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function _o(e,t,r,s,a,o,i,d,u){return e=new Pp(e,t,r,d,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Va(o),e}function Fp(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ze,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function $c(e){if(!e)return Ot;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(Oe(r))return yl(e,r,t)}return t}function Gc(e,t,r,s,a,o,i,d,u){return e=_o(r,s,!0,e,a,o,i,d,u),e.context=$c(null),r=e.current,s=Re(),a=Vt(r),o=At(s,a),o.callback=t??null,Ht(r,o,a),e.current.lanes=a,Un(e,a,s),He(e,s),e}function Ps(e,t,r,s){var a=t.current,o=Re(),i=Vt(a);return r=$c(r),t.context===null?t.context=r:t.pendingContext=r,t=At(o,i),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Ht(a,t,i),e!==null&&(pt(e,a,i,o),os(e,a,i)),i}function Fs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ro(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}function Ip(){return null}var qc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}Is.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Ps(e,t,null,null)},Is.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Ps(null,e,null,null)}),t[jt]=null}};function Is(e){this._internalRoot=e}Is.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fi();e={blockedOn:null,target:e,priority:t};for(var r=0;r<_t.length&&t!==0&&t<_t[r].priority;r++);_t.splice(r,0,e),r===0&&zi(e)}};function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yc(){}function Tp(e,t,r,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var x=Fs(i);o.call(x)}}var i=Gc(t,s,e,0,null,!1,!1,"",Yc);return e._reactRootContainer=i,e[jt]=i.current,rr(e.nodeType===8?e.parentNode:e),on(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var d=s;s=function(){var x=Fs(u);d.call(x)}}var u=_o(e,0,!1,null,null,!1,!1,"",Yc);return e._reactRootContainer=u,e[jt]=u.current,rr(e.nodeType===8?e.parentNode:e),on(function(){Ps(t,u,r,s)}),u}function zs(e,t,r,s,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var d=a;a=function(){var u=Fs(i);d.call(u)}}Ps(t,i,e,a)}else i=Tp(r,t,e,a,s);return Fs(i)}Ei=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Hn(t.pendingLanes);r!==0&&(oa(t,r|1),He(t,ge()),(X&6)===0&&(_n=ge()+500,Bt()))}break;case 13:on(function(){var s=Ct(e,1);if(s!==null){var a=Re();pt(s,e,1,a)}}),Ro(e,1)}},ia=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var r=Re();pt(t,e,134217728,r)}Ro(e,134217728)}},Pi=function(e){if(e.tag===13){var t=Vt(e),r=Ct(e,t);if(r!==null){var s=Re();pt(r,e,t,s)}Ro(e,t)}},Fi=function(){return re},Ii=function(e,t){var r=re;try{return re=e,t()}finally{re=r}},Zs=function(e,t,r){switch(t){case"input":if(Gs(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=Kr(s);if(!a)throw Error(l(90));ti(s),Gs(s,a)}}}break;case"textarea":oi(e,r);break;case"select":t=r.value,t!=null&&un(e,!!r.multiple,t,!1)}},fi=Eo,gi=on;var zp={usingClientEntryPoint:!1,Events:[or,bn,Kr,hi,mi,Eo]},wr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_p={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wi(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_s.isDisabled&&_s.supportsFiber)try{Ir=_s.inject(_p),gt=_s}catch{}}return Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp,Ue.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Do(t))throw Error(l(200));return Fp(e,t,null,r)},Ue.createRoot=function(e,t){if(!Do(e))throw Error(l(299));var r=!1,s="",a=qc;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=_o(e,1,!1,null,null,r,!1,s,a),e[jt]=t.current,rr(e.nodeType===8?e.parentNode:e),new Mo(t)},Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=wi(t),e=e===null?null:e.stateNode,e},Ue.flushSync=function(e){return on(e)},Ue.hydrate=function(e,t,r){if(!Ts(t))throw Error(l(200));return zs(null,e,t,!0,r)},Ue.hydrateRoot=function(e,t,r){if(!Do(e))throw Error(l(405));var s=r!=null&&r.hydratedSources||null,a=!1,o="",i=qc;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Gc(t,null,e,1,r??null,a,!1,o,i),e[jt]=t.current,rr(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Is(t)},Ue.render=function(e,t,r){if(!Ts(t))throw Error(l(200));return zs(null,e,t,!1,r)},Ue.unmountComponentAtNode=function(e){if(!Ts(e))throw Error(l(40));return e._reactRootContainer?(on(function(){zs(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1},Ue.unstable_batchedUpdates=Eo,Ue.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Ts(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return zs(e,t,r,!1,s)},Ue.version="18.3.1-next-f1338f8080-20240426",Ue}var nd;function $p(){if(nd)return Bo.exports;nd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(g){console.error(g)}}return c(),Bo.exports=Up(),Bo.exports}var rd;function Gp(){if(rd)return Rs;rd=1;var c=$p();return Rs.createRoot=c.createRoot,Rs.hydrateRoot=c.hydrateRoot,Rs}var Vp=Gp();const qp=kd(Vp);function Yp(c,g){if(c instanceof RegExp)return{keys:!1,pattern:c};var l,y,w,b,M=[],v="",A=c.split("/");for(A[0]||A.shift();w=A.shift();)l=w[0],l==="*"?(M.push(l),v+=w[1]==="?"?"(?:/(.*))?":"/(.*)"):l===":"?(y=w.indexOf("?",1),b=w.indexOf(".",1),M.push(w.substring(1,~y?y:~b?b:w.length)),v+=~y&&!~b?"(?:/([^/]+?))?":"/([^/]+?)",~b&&(v+=(~y?"?":"")+"\\"+w.substring(b))):v+="/"+w;return{keys:M,pattern:new RegExp("^"+v+(g?"(?=$|/)":"/?$"),"i")}}var Uo={exports:{}},$o={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function Qp(){if(sd)return $o;sd=1;var c=Ws();function g(D,H){return D===H&&(D!==0||1/D===1/H)||D!==D&&H!==H}var l=typeof Object.is=="function"?Object.is:g,y=c.useState,w=c.useEffect,b=c.useLayoutEffect,M=c.useDebugValue;function v(D,H){var U=H(),se=y({inst:{value:U,getSnapshot:H}}),Q=se[0].inst,K=se[1];return b(function(){Q.value=U,Q.getSnapshot=H,A(Q)&&K({inst:Q})},[D,U,H]),w(function(){return A(Q)&&K({inst:Q}),D(function(){A(Q)&&K({inst:Q})})},[D]),M(U),U}function A(D){var H=D.getSnapshot;D=D.value;try{var U=H();return!l(D,U)}catch{return!0}}function L(D,H){return H()}var G=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?L:v;return $o.useSyncExternalStore=c.useSyncExternalStore!==void 0?c.useSyncExternalStore:G,$o}var ad;function Kp(){return ad||(ad=1,Uo.exports=Qp()),Uo.exports}var Xp=Kp();const Jp=Bp.useInsertionEffect,Zp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eh=Zp?R.useLayoutEffect:R.useEffect,th=Jp||eh,Cd=c=>{const g=R.useRef([c,(...l)=>g[0](...l)]).current;return th(()=>{g[0]=c}),g[1]},nh="popstate",Zo="pushState",ei="replaceState",rh="hashchange",od=[nh,Zo,ei,rh],sh=c=>{for(const g of od)addEventListener(g,c);return()=>{for(const g of od)removeEventListener(g,c)}},Ad=(c,g)=>Xp.useSyncExternalStore(sh,c,g),id=()=>location.search,ah=({ssrSearch:c}={})=>Ad(id,c!=null?()=>c:id),ld=()=>location.pathname,oh=({ssrPath:c}={})=>Ad(ld,c!=null?()=>c:ld),ih=(c,{replace:g=!1,state:l=null}={})=>history[g?ei:Zo](l,"",c),lh=(c={})=>[oh(c),ih],cd=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[cd]>"u"){for(const c of[Zo,ei]){const g=history[c];history[c]=function(){const l=g.apply(this,arguments),y=new Event(c);return y.arguments=arguments,dispatchEvent(y),l}}Object.defineProperty(window,cd,{value:!0})}const ch=(c,g)=>g.toLowerCase().indexOf(c.toLowerCase())?"~"+g:g.slice(c.length)||"/",Ed=(c="")=>c==="/"?"":c,dh=(c,g)=>c[0]==="~"?c.slice(1):Ed(g)+c,uh=(c="",g)=>ch(dd(Ed(c)),dd(g)),dd=c=>{try{return decodeURI(c)}catch{return c}},Pd={hook:lh,searchHook:ah,parser:Yp,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:c=>c,aroundNav:(c,g,l)=>c(g,l)},Fd=R.createContext(Pd),Nr=()=>R.useContext(Fd),Id={},Td=R.createContext(Id),ph=()=>R.useContext(Td),Hs=c=>{const[g,l]=c.hook(c);return[uh(c.base,g),Cd((y,w)=>c.aroundNav(l,dh(y,c.base),w))]},hh=()=>Hs(Nr()),zd=(c,g,l,y)=>{const{pattern:w,keys:b}=g instanceof RegExp?{keys:!1,pattern:g}:c(g||"*",y),M=w.exec(l)||[],[v,...A]=M;return v!==void 0?[!0,(()=>{const L=b!==!1?Object.fromEntries(b.map((D,H)=>[D,A[H]])):M.groups;let G={...A};return L&&Object.assign(G,L),G})(),...y?[v]:[]]:[!1,null]},mh=({children:c,...g})=>{var G,D,H;const l=Nr(),y=g.hook?Pd:l;let w=y;const[b,M=g.ssrSearch??""]=((G=g.ssrPath)==null?void 0:G.split("?"))??[];b&&(g.ssrSearch=M,g.ssrPath=b),g.hrefs=g.hrefs??((D=g.hook)==null?void 0:D.hrefs),g.searchHook=g.searchHook??((H=g.hook)==null?void 0:H.searchHook);let v=R.useRef({}),A=v.current,L=A;for(let U in y){const se=U==="base"?y[U]+(g[U]??""):g[U]??y[U];A===L&&se!==L[U]&&(v.current=L={...L}),L[U]=se,(se!==y[U]||se!==w[U])&&(w=L)}return R.createElement(Fd.Provider,{value:w,children:c})},ud=({children:c,component:g},l)=>g?R.createElement(g,{params:l}):typeof c=="function"?c(l):c,fh=c=>{let g=R.useRef(Id);const l=g.current;return g.current=Object.keys(c).length!==Object.keys(l).length||Object.entries(c).some(([y,w])=>w!==l[y])?c:l},Ae=({path:c,nest:g,match:l,...y})=>{const w=Nr(),[b]=Hs(w),[M,v,A]=l??zd(w.parser,c,b,g),L=fh({...ph(),...v});if(!M)return null;const G=A?R.createElement(mh,{base:A},ud(y,L)):ud(y,L);return R.createElement(Td.Provider,{value:L,children:G})},te=R.forwardRef((c,g)=>{const l=Nr(),[y,w]=Hs(l),{to:b="",href:M=b,onClick:v,asChild:A,children:L,className:G,replace:D,state:H,transition:U,...se}=c,Q=Cd(be=>{be.ctrlKey||be.metaKey||be.altKey||be.shiftKey||be.button!==0||(v==null||v(be),be.defaultPrevented||(be.preventDefault(),w(M,c)))}),K=l.hrefs(M[0]==="~"?M.slice(1):l.base+M,l);return A&&R.isValidElement(L)?R.cloneElement(L,{onClick:Q,href:K}):R.createElement("a",{...se,onClick:Q,href:K,className:G!=null&&G.call?G(y===M):G,children:L,ref:g})}),_d=c=>Array.isArray(c)?c.flatMap(g=>_d(g&&g.type===R.Fragment?g.props.children:g)):[c],gh=({children:c,location:g})=>{const l=Nr(),[y]=Hs(l);for(const w of _d(c)){let b=0;if(R.isValidElement(w)&&(b=zd(l.parser,w.props.path,g||y,w.props.nest))[0])return R.cloneElement(w,{match:b})}return null},Rd=R.createContext({theme:"light",setTheme:()=>{}});function xh({children:c,defaultTheme:g="light"}){const[l,y]=R.useState(g);return R.useEffect(()=>{document.documentElement.classList.toggle("dark",l==="dark")},[l]),n.jsx(Rd.Provider,{value:{theme:l,setTheme:y},children:c})}const yh=()=>R.useContext(Rd);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Md=(...c)=>c.filter((g,l,y)=>!!g&&g.trim()!==""&&y.indexOf(g)===l).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=R.forwardRef(({color:c="currentColor",size:g=24,strokeWidth:l=2,absoluteStrokeWidth:y,className:w="",children:b,iconNode:M,...v},A)=>R.createElement("svg",{ref:A,...wh,width:g,height:g,stroke:c,strokeWidth:y?Number(l)*24/Number(g):l,className:Md("lucide",w),...v},[...M.map(([L,G])=>R.createElement(L,G)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(c,g)=>{const l=R.forwardRef(({className:y,...w},b)=>R.createElement(bh,{ref:b,iconNode:g,className:Md(`lucide-${vh(c)}`,y),...w}));return l.displayName=`${c}`,l};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=ue("Airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=ue("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=ue("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=ue("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=ue("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
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
 */const Os=ue("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=ue("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=ue("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=ue("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=ue("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=ue("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=ue("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=ue("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=ue("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=ue("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=ue("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Ih(){return n.jsxs("div",{className:"bg-synth-accent text-white text-center text-[13px] font-medium py-2.5 px-5 tracking-[0.01em]",children:[n.jsx("span",{children:"Synth is coming — join the waitlist ."}),n.jsxs("a",{href:"#waitlist",className:"underline underline-offset-[2px] ml-2 opacity-85 hover:opacity-100 transition-opacity inline-flex items-center gap-1",children:["Reserve your spot ",n.jsx(Us,{className:"w-3 h-3"})]})]})}const pd=[{label:"Marketing",desc:"Campaigns, content, and creative — on autopilot",icon:"📈",href:"/solutions/marketing"},{label:"Sales",desc:"Your pipeline, researched and ready before you wake up. Increase revenue",icon:"🤝",href:"/solutions/sales"},{label:"Finance",desc:"Analysis that used to take your team a week",icon:"💹",href:"/solutions/finance"},{label:"Product",desc:"Strategy, roadmap, discovery, onboarding & customer support ",icon:"🛍️",href:"/solutions/product"},{label:"Personal",desc:"Plans your day. Handles your tasks. Learns your life",icon:"🙋",href:"/solutions/personal"},{label:"Healthcare Admin",desc:"Claims, denials, scheduling & more",icon:"🏥",href:"/solutions/healthcare"}];function Th(){const[c,g]=R.useState(!1),[l,y]=R.useState(!1),[w,b]=R.useState(!1),[M,v]=R.useState(!1),A=R.useRef(null),L=R.useRef(null),[G]=hh(),{theme:D,setTheme:H}=yh();return R.useEffect(()=>{const U=()=>v(window.scrollY>20);return window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)},[]),R.useEffect(()=>{const U=se=>{A.current&&!A.current.contains(se.target)&&g(!1),L.current&&!L.current.contains(se.target)&&y(!1)};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]),R.useEffect(()=>{b(!1),g(!1),y(!1)},[G]),n.jsxs("nav",{className:`sticky top-0 z-50 transition-all duration-300 ${M?"bg-synth-bg/90 backdrop-blur-[20px] border-b border-synth-border":"bg-transparent"}`,children:[n.jsx("div",{className:"wrap",children:n.jsxs("div",{className:"flex items-center justify-between h-[60px]",children:[n.jsx("div",{className:"flex items-center gap-3",children:n.jsxs(te,{href:"/",className:"font-serif text-[24px] text-synth-text-1 tracking-[-0.3px] flex-shrink-0 flex items-center gap-2",children:[n.jsx("img",{src:"/logo.png",alt:"Synth logo",className:"h-[2.5rem] w-[2.5rem] object-contain"}),n.jsx("em",{children:"synth"})]})}),n.jsxs("div",{className:"hidden lg:flex items-center gap-0.5 flex-1 px-8",children:[n.jsxs("div",{className:"relative",ref:A,children:[n.jsxs("button",{onClick:()=>g(!c),className:`flex items-center gap-1 px-3 py-1.5 rounded-md text-[14px] font-normal transition-colors ${c?"text-synth-text-1 bg-black/[0.04]":"text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04]"}`,children:["Solutions",n.jsx(Xo,{className:`w-3.5 h-3.5 transition-transform duration-200 ${c?"rotate-180":""}`})]}),c&&n.jsx("div",{className:"absolute top-[calc(100%+8px)] left-0 bg-synth-surface border border-synth-border rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.04)] min-w-[560px] p-3 z-50 animate-fade-in",children:n.jsx("div",{className:"grid grid-cols-2 gap-0.5",children:pd.map(U=>n.jsxs(te,{href:U.href,className:"flex items-start gap-3 p-3 rounded-[10px] hover:bg-synth-surface-2 transition-colors",onClick:()=>g(!1),children:[n.jsx("div",{className:"w-9 h-9 rounded-md flex items-center justify-center text-[17px] bg-synth-accent-light flex-shrink-0",children:U.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-[14px] font-medium text-synth-text-1",children:U.label}),n.jsx("div",{className:"text-[12px] text-synth-text-3 leading-[1.4]",children:U.desc})]})]},U.label))})})]}),n.jsx(te,{href:"/pages/feature",className:"px-3 py-1.5 rounded-md text-[14px] font-normal text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04] transition-colors",children:"Features"}),n.jsxs("div",{className:"relative",ref:L,children:[n.jsxs("button",{onClick:()=>y(!l),className:`flex items-center gap-1 px-3 py-1.5 rounded-md text-[14px] font-normal transition-colors ${l?"text-synth-text-1 bg-black/[0.04]":"text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04]"}`,children:["Resources",n.jsx(Xo,{className:`w-3.5 h-3.5 transition-transform duration-200 ${l?"rotate-180":""}`})]}),l&&n.jsx("div",{className:"absolute top-[calc(100%+8px)] left-0 bg-synth-surface border border-synth-border rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.04)] min-w-[200px] p-3 z-50 animate-fade-in",children:n.jsxs("div",{className:"mb-2 px-1",children:[n.jsx("div",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-2",children:"Compare"}),n.jsx(te,{href:"/compare/vsChatgpt",className:"block px-3 py-2 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",onClick:()=>y(!1),children:"vs ChatGPT"}),n.jsx(te,{href:"/compare/vsOpenclaw",className:"block px-3 py-2 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",onClick:()=>y(!1),children:"vs Openclaw"}),n.jsx(te,{href:"/compare/vsTrixta",className:"block px-3 py-2 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",onClick:()=>y(!1),children:"vs Trixta"})]})})]}),n.jsx(te,{href:"/pricing",className:"px-3 py-1.5 rounded-md text-[14px] font-normal text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04] transition-colors",children:"Pricing"}),n.jsx("a",{href:"mailto:hello@synthai.world",className:"px-3 py-1.5 rounded-md text-[14px] font-normal text-synth-text-2 hover:text-synth-text-1 hover:bg-black/[0.04] transition-colors",children:"Enterprise"})]}),n.jsxs("div",{className:"hidden lg:flex items-center gap-3 flex-shrink-0",children:[n.jsx("a",{href:"mailto:hello@synthai.world",className:"text-[14px] font-medium text-synth-text-2 px-3.5 py-[7px] rounded-md hover:bg-black/[0.05] hover:text-synth-text-1 transition-all border border-transparent",children:"Contact us"}),n.jsx(te,{href:"/#waitlist",className:"text-[14px] font-medium text-white px-[18px] py-2 rounded-full bg-synth-text-1 hover:bg-[#2A2835] transition-colors",children:"Join waitlist"}),n.jsx("button",{type:"button",onClick:()=>H(D==="light"?"dark":"light"),className:"px-4 py-2 rounded-full bg-slate-700 text-white text-[14px] font-medium hover:bg-slate-600 transition-colors",children:D==="light"?"Dark mode":"Light mode"})]}),n.jsx("button",{className:"lg:hidden p-2",onClick:()=>b(!w),children:w?n.jsx(Fh,{className:"w-5 h-5"}):n.jsx(Sh,{className:"w-5 h-5"})})]})}),w&&n.jsxs("div",{className:"lg:hidden bg-synth-surface border-t border-synth-border px-4 py-4 space-y-1 shadow-lg",children:[n.jsx("div",{className:"text-[11px] font-semibold uppercase tracking-[1.5px] text-synth-text-3 mb-2 px-3",children:"Solutions"}),pd.map(U=>n.jsxs(te,{href:U.href,className:"flex items-center gap-3 px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:[n.jsx("span",{className:"text-[16px]",children:U.icon}),U.label]},U.label)),n.jsx("div",{className:"border-t border-synth-border my-2"}),n.jsx(te,{href:"/features",className:"block px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:"Features"}),n.jsx(te,{href:"/pricing",className:"block px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:"Pricing"}),n.jsx("a",{href:"mailto:hello@synth.ai",className:"block px-3 py-2.5 text-[14px] text-synth-text-2 rounded-md hover:bg-synth-surface-2 hover:text-synth-text-1 transition-colors",children:"Enterprise"}),n.jsxs("div",{className:"border-t border-synth-border my-2 pt-2",children:[n.jsx("a",{href:"mailto:hello@synth.ai",className:"block w-full text-left px-3 py-2.5 text-[14px] text-synth-text-2",children:"Contact us"}),n.jsx(te,{href:"/#waitlist",className:"block w-full text-center mt-2 text-[14px] font-medium text-white px-4 py-2.5 rounded-full bg-synth-text-1",children:"Join waitlist"})]})]})]})}const zh=[{label:"Marketing",href:"/solutions/marketing"},{label:"Sales",href:"/solutions/sales"},{label:"Finance",href:"/solutions/finance"},{label:"Product",href:"/solutions/product"},{label:"Personal",href:"/solutions/personal"},{label:"Healthcare Admin",href:"/solutions/healthcare"}],_h=[{label:"vs. Openclaw",href:"/compare/vsOpenclaw"},{label:"vs. ChatGPT",href:"/compare/vsChatgpt"},{label:"vs. Trixta",href:"/compare/vsTrixta"},{label:"vs. Nyla",href:"/compare/vsNyla"}],Rh=[{label:"Features",href:"/#features"},{label:"Pricing",href:"/pricing"},{label:"API",href:"/api-docs"},{label:"Custom MCPs",href:"/mcp"}],Mh=[{label:"Privacy Policy",href:"/privacy"},{label:"Terms of Service",href:"/terms"},{label:"POPIA Compliance",href:"/data-processing"},{label:"Data Processing",href:"/data-processing"},{label:"Cookie Policy",href:"/cookies"}];function Dh(){return n.jsx("footer",{className:"border-t border-synth-border bg-synth-surface",children:n.jsxs("div",{className:"wrap py-14 mx-auto max-w-7xl px-6",children:[n.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-[1.8fr_repeat(4,1fr)] gap-8 mb-10",children:[n.jsxs("div",{className:"col-span-2 md:col-span-1",children:[n.jsxs(te,{href:"/",className:"font-serif text-[22px] text-synth-text-1 tracking-[-0.3px] font-medium",children:["synth",n.jsx("span",{className:"text-indigo-600",children:".ai"})]}),n.jsx("p",{className:"text-[13px] text-synth-text-3 leading-[1.65] mt-2 max-w-[200px]",children:"Bridging the GAP between thinking and doing(execution)."})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Solutions"}),n.jsx("ul",{className:"space-y-2",children:zh.map(c=>n.jsx("li",{children:n.jsx(te,{href:c.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:c.label})},c.label))})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Product"}),n.jsx("ul",{className:"space-y-2",children:Rh.map(c=>n.jsx("li",{children:n.jsx(te,{href:c.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:c.label})},c.label))})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Compare"}),n.jsx("ul",{className:"space-y-2",children:_h.map(c=>n.jsx("li",{children:n.jsx(te,{href:c.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:c.label})},c.label))})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-[12px] font-semibold text-synth-text-1 uppercase tracking-[1px] mb-3",children:"Legal"}),n.jsx("ul",{className:"space-y-2",children:Mh.map(c=>n.jsx("li",{children:n.jsx(te,{href:c.href,className:"text-[13px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:c.label})},c.label))})]})]}),n.jsxs("div",{className:"border-t border-synth-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3",children:[n.jsx("p",{className:"text-[12px] text-synth-text-3",children:"© 2026 Synth AI · hello@synthai.world"}),n.jsx("div",{className:"flex gap-3",children:["LinkedIn","X / Twitter","Instagram","WhatsApp"].map(c=>n.jsx("a",{href:"#",className:"text-[12px] text-synth-text-3 hover:text-synth-text-1 transition-colors",children:c},c))})]})]})})}const hd=[{icon:"📑",text:"Find new government and private tenders every morning"},{icon:"🏭",text:"Identify cheaper suppliers and negotiate better quotes"},{icon:"✍️",text:"Create a week's worth of LinkedIn posts from our blog"},{icon:"🎥",text:"Analyze top-performing TikTok videos and recommend winning hooks"},{icon:"📊",text:"Monitor our competitors and report every major change"},{icon:"💰",text:"Generate weekly cash flow forecasts from our accounting data"},{icon:"🤝",text:"Find, enrich and qualify 500 potential customers"},{icon:"📢",text:"Plan, create and launch our next marketing campaign"},{icon:"📄",text:"Review contracts and flag legal risks before signing"},{icon:"📦",text:"Monitor inventory and automatically reorder low stock"},{icon:"🎥",text:"Turn webinars into short-form videos and captions"},{icon:"🚚",text:"Track delayed shipments and notify affected customers"},{icon:"📈",text:"Research a new market and deliver a complete expansion report"}],Lh=["Sales","Marketing","Finance","Product","Daily Operations","Healthcare Admin"];function Oh(){const[c,g]=R.useState(0),[l,y]=R.useState(""),[w,b]=R.useState(!1);R.useEffect(()=>{const A=setInterval(()=>{g(L=>(L+1)%hd.length)},3200);return()=>clearInterval(A)},[]);const M=A=>{A.preventDefault(),l.trim()&&(b(!0),setTimeout(()=>{b(!1),y("")},4500))},v=hd[c];return n.jsxs("section",{className:"relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",backgroundSize:"28px 28px",maskImage:"radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",WebkitMaskImage:"radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)"}}),n.jsx("div",{className:"wrap relative z-10",children:n.jsxs("div",{className:"text-center max-w-[800px] mx-auto",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 bg-synth-accent-light border border-synth-accent/20 text-synth-accent text-[13px] font-medium rounded-full px-4 py-1.5 mb-7",children:[n.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-synth-accent animate-blink"}),"AI Workforce· Private Beta"]}),n.jsxs("h1",{className:"font-serif text-[clamp(44px,6.5vw,80px)] font-normal leading-[1.06] tracking-[-2px] text-synth-text-1 mb-5",children:["Meet Synth.",n.jsx("br",{}),"Your AI workforce for every department. "," ",n.jsx("em",{className:"text-synth-accent",children:"Deploy autonomous AI agents "}),"across:"]}),n.jsx("div",{className:"flex justify-center flex-wrap gap-2 mb-8",children:Lh.map(A=>n.jsx("span",{className:"bg-synth-surface border border-synth-border-med rounded-full px-3 py-0.5 text-xs text-synth-text-2",children:A},A))}),n.jsxs("div",{className:"flex items-center justify-center gap-2.5 mb-8 flex-wrap",children:[n.jsx("span",{className:"text-[17px] text-synth-text-2",children:"Watch it"}),n.jsxs("div",{className:"inline-flex items-center gap-1.5 bg-synth-surface border border-synth-border-med rounded-full px-3.5 py-1.5 text-[14px] font-medium text-synth-text-1 shadow-sm transition-all duration-300",children:[n.jsx("span",{className:"text-[29px]",children:v.icon}),n.jsx("span",{children:v.text})]},c),n.jsx("span",{className:"text-[17px] text-synth-text-2",children:"for you"})]}),n.jsxs("form",{onSubmit:M,className:"flex gap-2 max-w-[420px] mx-auto mb-3.5",children:[n.jsx("input",{type:"email",value:l,onChange:A=>y(A.target.value),placeholder:"Enter your work email",required:!0,autoComplete:"email",className:"flex-1 bg-synth-surface border border-synth-border-med rounded-full px-5 py-3 text-[15px] text-synth-text-1 outline-none shadow-sm transition-all focus:border-synth-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] placeholder:text-synth-text-3"}),n.jsx("button",{type:"submit",disabled:w,className:`text-white rounded-full px-6 py-3 text-[15px] font-medium whitespace-nowrap transition-colors ${w?"bg-synth-green":"bg-synth-text-1 hover:bg-[#2A2835]"}`,children:w?"✓ You're on the list!":"Get early access"})]}),n.jsxs("p",{className:"text-[13px] text-synth-text-3",children:[n.jsx("strong",{className:"text-synth-text-2 font-medium",children:"2,240 people"})," ","already on the waitlist·"]})]})})]})}const Bh=[{time:"9:00 AM",title:"Client call — Ndali Group",detail:"I've pulled last week's notes and prepped 3 talking points for you",status:"Prepped",statusColor:"bg-blue-100 text-blue-700"},{time:"11:30 AM",title:"Reply to Lwazi re: contract",detail:"He's been waiting 2 days — I've drafted a reply for your review",status:"Urgent",statusColor:"bg-red-100 text-red-700"},{time:"2:00 PM",title:"Submit Q3 proposal",detail:"3 hours to deadline — want me to pull the draft now?",status:"Focus",statusColor:"bg-emerald-100 text-emerald-700"},{time:"5:30 PM",title:"Gym — Clifton CrossFit",detail:"I've blocked this. Traffic is light today, leave by 5:10",status:"Personal",statusColor:"bg-teal-100 text-teal-700"}],Wh=[{icon:Ph,title:"Conflict detected — 9 AM & 9:30 AM overlap",desc:"Your investor call was moved to 9 AM. Your team standup clashes. Want me to reschedule the standup or suggest alternatives?",primary:"Reschedule standup",secondary:"See options",accent:"bg-blue-600 text-white"},{icon:Ls,title:"Reminder — proposal due in 90 minutes",desc:"You haven't opened the draft yet. I can send it to you now or submit the current version if you're happy with it.",primary:"Send me the draft",secondary:"Snooze 30 min",accent:"bg-blue-600 text-white"},{icon:jh,title:"Flight price drop — Cape Town → London",desc:"Lufthansa dropped to R6,890 (was R7,240). You asked me to watch this. Book now?",primary:"Book it",secondary:"Ignore",accent:"bg-emerald-600 text-white"}];function Hh(){return n.jsx("section",{className:"py-24 bg-synth-surface",children:n.jsx("div",{className:"wrap",children:n.jsxs("div",{className:"grid gap-20",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-[12px] font-semibold uppercase tracking-[2px] text-synth-accent mb-4",children:"YOUR DAY, PLANNED"}),n.jsx("h2",{className:"font-display text-[clamp(38px,4.8vw,56px)] font-semibold tracking-[-0.04em] text-synth-text-1 max-w-[780px]",children:"Synth briefs you every morning"}),n.jsx("p",{className:"mt-5 max-w-3xl text-[17px] text-synth-text-2 leading-[1.8]",children:"Before your day starts, Synth reviews your calendar, emails, and priorities — then sends you a personalised plan. No prompting needed."})]}),n.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1.12fr_0.88fr]",children:[n.jsx("div",{className:"rounded-[32px] border border-synth-border bg-white shadow-[0_40px_120px_rgba(15,23,42,0.08)] p-8",children:n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-sm text-synth-text-3 uppercase tracking-[1.8px] mb-2",children:"Your day at a glance"}),n.jsxs("h3",{className:"text-[24px] font-semibold text-synth-text-1",children:["Good morning, Amara ",n.jsx("span",{"aria-hidden":"true",children:"👋"})]})]}),n.jsx("span",{className:"rounded-full border border-synth-border px-4 py-2 text-[13px] font-semibold text-synth-text-2",children:"Monday, 6:45 AM"})]}),n.jsxs("div",{className:"rounded-[28px] border border-synth-border bg-synth-bg p-5",children:[n.jsx("p",{className:"font-semibold text-synth-text-1 mb-2",children:"Your day at a glance"}),n.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.8]",children:"You have 3 meetings, a proposal deadline at 2 PM, and your flight to Jo'burg is Thursday — I've started your packing checklist. One thing needs urgent attention now."})]}),n.jsx("div",{className:"space-y-4",children:Bh.map(c=>n.jsxs("div",{className:"rounded-[24px] border border-synth-border bg-synth-bg p-5 shadow-sm",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-semibold text-synth-text-2",children:c.time}),n.jsx("p",{className:"mt-2 text-[16px] font-semibold text-synth-text-1",children:c.title})]}),n.jsx("span",{className:`rounded-full px-3 py-1.5 text-[13px] font-semibold ${c.statusColor}`,children:c.status})]}),n.jsx("p",{className:"mt-3 text-[14px] text-synth-text-3 leading-[1.75]",children:c.detail})]},c.time))})]})}),n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"rounded-[32px] border border-synth-border bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] p-8",children:[n.jsx("p",{className:"text-[12px] uppercase tracking-[2px] text-synth-accent mb-4",children:"Emergency alerts"}),n.jsx("h3",{className:"text-[32px] font-display font-semibold text-synth-text-1 mb-4",children:"Synth taps you when it matters"}),n.jsx("p",{className:"text-[16px] text-synth-text-2 leading-[1.8] mb-8",children:"When something urgent surfaces — a conflict, a missed message, a deadline creeping up — Synth pushes it immediately and offers to handle it."}),n.jsx("div",{className:"space-y-4",children:Wh.map(c=>{const g=c.icon;return n.jsxs("div",{className:"rounded-[24px] border border-synth-border bg-synth-bg p-5 shadow-sm",children:[n.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[n.jsx("div",{className:"grid h-11 w-11 place-items-center rounded-2xl bg-synth-accent-light text-synth-accent",children:n.jsx(g,{className:"h-5 w-5"})}),n.jsxs("div",{children:[n.jsx("p",{className:"text-base font-semibold text-synth-text-1",children:c.title}),n.jsx("p",{className:"text-sm text-synth-text-3",children:c.desc})]})]}),n.jsxs("div",{className:"flex flex-wrap gap-3",children:[n.jsx("button",{className:`rounded-full px-4 py-2 text-sm font-semibold ${c.accent}`,children:c.primary}),n.jsx("button",{className:"rounded-full border border-synth-border px-4 py-2 text-sm font-semibold text-synth-text-1 hover:border-synth-accent/50 transition-all",children:c.secondary})]})]},c.title)})})]}),n.jsxs("div",{className:"rounded-[32px] border border-synth-border bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] p-8",children:[n.jsx("p",{className:"text-[12px] uppercase tracking-[2px] text-synth-accent mb-4",children:"On-demand too"}),n.jsx("h3",{className:"text-[32px] font-display font-semibold text-synth-text-1 mb-4",children:"Ask it anything, anytime"}),n.jsx("p",{className:"text-[16px] text-synth-text-2 leading-[1.8] mb-8",children:"Beyond your daily plan, Synth handles anything you throw at it — just like messaging a capable friend."}),n.jsx("div",{className:"space-y-5",children:n.jsxs("div",{className:"rounded-[32px] border border-synth-border bg-synth-bg p-5",children:[n.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[n.jsx("span",{className:"grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-white",children:n.jsx(Ch,{className:"h-5 w-5"})}),n.jsxs("div",{children:[n.jsx("p",{className:"font-semibold text-synth-text-1",children:"Synth"}),n.jsx("p",{className:"text-sm text-emerald-600",children:"Online"})]})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-[26px] bg-white p-4 text-[14px] text-synth-text-2 shadow-sm",children:[n.jsx("p",{children:"You have 3 things before noon. You've got a 40-min window at 8:20 — enough to prep. Here’s what I’d focus on:"}),n.jsxs("ul",{className:"mt-3 space-y-2 pl-4 text-synth-text-3",children:[n.jsx("li",{children:"• Their Q2 revenue dipped 12% — they’ll want solutions"}),n.jsx("li",{children:"• Open item from last call: delivery timeline"}),n.jsx("li",{children:"• They responded well to case studies last time"})]}),n.jsx("p",{className:"mt-3 text-[12px] text-synth-text-3",children:"Synth · 9:05 AM"})]}),n.jsxs("div",{className:"rounded-[26px] bg-synth-accent text-white p-4 text-[14px] shadow-sm",children:[n.jsx("p",{children:"What’s on my plate today and do I have time to prep for the Ndali call?"}),n.jsx("p",{className:"mt-2 text-[12px] text-synth-accent-light",children:"9:05 AM · ✓✓"})]}),n.jsxs("div",{className:"rounded-[26px] bg-synth-accent text-white p-4 text-[14px] shadow-sm self-end max-w-[75%]",children:[n.jsx("p",{children:"Perfect. Also remind me to call my mum at 7pm"}),n.jsx("p",{className:"mt-2 text-[12px] text-synth-accent-light",children:"9:06 AM · ✓✓"})]}),n.jsxs("div",{className:"rounded-[26px] bg-white p-4 text-[14px] text-synth-text-2 shadow-sm",children:[n.jsx("p",{children:"Done — I’ll ping you at 6:55 PM with a heads-up. Anything else before your 9 AM?"}),n.jsx("p",{className:"mt-3 text-[12px] text-synth-text-3",children:"Synth · 9:06 AM"})]})]})]})}),n.jsxs("div",{className:"mt-8 flex items-center justify-between gap-4",children:[n.jsxs(te,{href:"/#waitlist",className:"inline-flex items-center gap-2 rounded-full bg-synth-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors",children:["Explore Synth live",n.jsx(Us,{className:"h-4 w-4"})]}),n.jsx("span",{className:"rounded-full border border-synth-border px-4 py-2 text-sm text-synth-text-3",children:"Live chat preview"})]})]})]})]})]})})})}const Uh=[{icon:"📈",title:"Marketing",desc:"Your team has the ideas. Synth handles the execution. Campaigns, content, competitor research, and creative assets — produced at a pace your headcount can't match.",color:"#FFECE8",image:"/marketing.png",href:"/solutions/marketing"},{icon:"🤝",title:"Sales",desc:"Stop researching. Start selling. Synth enriches leads, writes personalised outreach, preps your deal briefs, and keeps your CRM clean — so you spend your day closing, not preparing.",color:"#E6F4FF",image:"/sales.png",href:"/solutions/sales"},{icon:"💹",title:"Finance",desc:"One analyst. Hundreds of companies. Synth builds financial models, collects live market data, researches firms in parallel, and delivers investment-ready outputs — at a scale no team can replicate manually.",color:"#F0FFF4",image:"/finance.png",href:"/solutions/finance"},{icon:"🧩",title:"Product",desc:"The foundations that used to take weeks — strategy, roadmaps, positioning, market segmentation, competitive maps — researched, drafted, and kept current by Synth. So your team can focus on the decisions only humans can make.",color:"#EEF2FF",image:"/product.png",href:"/solutions/product"},{icon:"🙋",title:"Personal",desc:"Most AI waits to be asked. Synth plans your morning before you wake up, flags what needs you before it becomes urgent, and handles the rest — in WhatsApp, where you already are.",color:"#FFF7ED",image:"/personal.png",href:"/solutions/personal"},{icon:"🏥",title:"Healthcare Admin",desc:"Resolve claim denials, apply insurance codes, manage scheduling, and send refill reminders — automating the most painful admin work in healthcare.",color:"#E8FAFF",image:"/healthcare.png",href:"/solutions/healthcare"}];function $h(){return n.jsx("section",{className:"relative py-24 border-t border-synth-border sky-gradient overflow-hidden",children:n.jsxs("div",{className:"wrap relative z-10",children:[n.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-12",children:[n.jsx("p",{className:"text-[13px] uppercase tracking-[2px] text-synth-text-3 mb-4",children:"Built for every business function"}),n.jsx("h2",{className:"font-display text-[clamp(42px,5vw,64px)] font-semibold tracking-[-0.04em] text-synth-text-1 mb-4",children:"One platform, six business wings — alive and ready."}),n.jsx("p",{className:"text-[16px] text-synth-text-2 max-w-[720px] mx-auto leading-[1.8]",children:"Beautifully crafted workflows, vibrant product imagery, and a fast onboarding path that makes every function feel polished, confident, and unmistakably high-end."})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",children:Uh.map(c=>n.jsxs(te,{href:c.href,className:"group relative overflow-hidden rounded-[32px] border border-synth-border bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_110px_rgba(15,23,42,0.12)]",style:{backgroundColor:c.color},children:[n.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 rounded-full opacity-50 blur-[34px]",style:{backgroundColor:c.color}}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"mb-5 rounded-[28px] overflow-hidden border border-white/80 bg-white shadow-sm",children:n.jsx("img",{src:c.image,alt:c.title,className:"w-full h-[220px] object-contain bg-transparent"})}),n.jsx("h3",{className:"text-[20px] font-semibold text-synth-text-1 mb-3 font-display",children:c.title}),n.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.78] mb-6",children:c.desc}),n.jsxs("div",{className:"inline-flex items-center gap-2 text-[14px] font-semibold text-synth-accent",children:[n.jsxs("span",{children:["Explore ",c.title]}),n.jsx(Us,{className:"w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"})]})]})]},c.title))})]})})}const md=[{id:"research",label:"Research & Analysis",tools:[{icon:"🔍",name:"Deep Research",desc:"Web + document"},{icon:"📊",name:"Data Analysis",desc:"Charts & models"},{icon:"🧠",name:"Long-term Memory",desc:"Learns over time"}]},{id:"productivity",label:"Productivity",tools:[{icon:"📅",name:"Scheduling",desc:"Calendar, TODO & booking"},{icon:"📝",name:"Documents",desc:"PDFs, forms, slides"},{icon:"⚡",name:"Automations",desc:"Multi-step tasks"}]},{id:"communication",label:"Communication",tools:[{icon:"✉️",name:"Communications",desc:"Email & messaging"},{icon:"💬",name:"WhatsApp / Instagram",desc:"Your existing apps"},{icon:"🌐",name:"Browser Agent",desc:"Web browsing"}]},{id:"integrations",label:"Integrations",tools:[{icon:"🔌",name:"Connectors",desc:"200+ integrations"}]}],fd=[{name:"WhatsApp",file:"WhatsApp.jpg"},{name:"YouTube",file:"Youtube.png"},{name:"GitHub",file:"Github.jpg"},{name:"Xero",file:"Xero.png"},{name:"Instagram",file:"instagram.jpg"},{name:"Asana",file:"asana.png"},{name:"Slack",file:"slack.png"},{name:"Figma",file:"Figma.png"},{name:"PayPal",file:"Paypal.png"},{name:"Shopify",file:"Shopify.jpg"},{name:"Gmail",file:"gmail.jpg"},{name:"Google Meet",file:"Google meet.jpg"},{name:"Google Calendar",file:"google calendar.png"},{name:"Google Drive",file:"google drive.png"},{name:"Dropbox",file:"Dropbox.png"},{name:"HubSpot",file:"hubspot.png"},{name:"Meta Ads Manager",file:"meta ads manager.png"},{name:"Microsoft 365",file:"microsoft365.jpg"},{name:"Notion",file:"notion.png"},{name:"Sage",file:"sage.png"},{name:"Salesforce",file:"salesforce.png"},{name:"SARS eFiling",file:"sars efiling.png"},{name:"Stripe",file:"stripe.png"},{name:"TikTok",file:"tiktok.png"},{name:"Yoco",file:"Yoco.png"},{name:"iKhokha",file:"ikhokha.png"},{name:"Airbnb",file:"airbnb.png"}];function Gh(){const[c,g]=R.useState("research"),[l,y]=R.useState(!1),w=md.find(b=>b.id===c);return n.jsx("section",{className:"py-24 border-t border-synth-border",id:"features",children:n.jsxs("div",{className:"wrap",children:[n.jsxs("div",{className:"mb-16 text-center",children:[n.jsx("p",{className:"eyebrow text-synth-text-3 uppercase tracking-wider mb-4",children:"One platform. Every capability."}),n.jsx("h2",{className:"section-title text-4xl md:text-5xl font-bold mb-6",children:"Everything in a single agent"}),n.jsx("p",{className:"section-sub text-lg text-synth-text-2 max-w-2xl mx-auto",children:"Synth brings together research, communication, scheduling, documents, and integrations — all accessible from where you already work."})]}),n.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-12",children:md.map(b=>n.jsx("button",{onClick:()=>g(b.id),className:`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${c===b.id?"bg-synth-accent text-white shadow-lg shadow-synth-accent/30":"bg-synth-surface border border-synth-border text-synth-text-2 hover:border-synth-accent/50 hover:bg-synth-surface/80"}`,children:b.label},b.id))}),n.jsx("div",{className:"max-w-5xl mx-auto",children:(w==null?void 0:w.id)==="integrations"?n.jsx("div",{className:"space-y-6",children:n.jsxs("div",{className:"rounded-3xl border border-synth-border bg-synth-surface/80 p-6 shadow-sm shadow-synth-border/10",children:[n.jsxs("div",{className:"mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",children:[n.jsx("div",{children:n.jsx("h3",{className:"text-3xl md:text-4xl font-semibold text-synth-text-1",children:"Seamless MCP integrations"})}),n.jsxs("button",{type:"button",onClick:()=>y(b=>!b),className:"inline-flex items-center justify-center gap-2 rounded-full border border-synth-border bg-white/5 px-5 py-3 text-sm font-medium text-synth-text-1 transition hover:border-synth-accent/50 hover:bg-synth-accent/10",children:[l?"Hide connectors":"Show more connectors",n.jsx("span",{className:`transition-transform ${l?"rotate-180":""}`,children:"▼"})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:fd.slice(0,9).map(b=>n.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 rounded-3xl border border-synth-border bg-white/5 p-4 shadow-sm shadow-synth-border/5 transition hover:scale-[1.02] hover:border-synth-accent/40",children:[n.jsx("img",{className:"h-16 w-auto object-contain",src:encodeURI(`/connectors/${b.file}`),alt:b.name}),n.jsx("span",{className:"text-center text-sm font-medium text-synth-text-2",children:b.name})]},b.name))}),l&&n.jsx("div",{className:"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3",children:fd.slice(9).map(b=>n.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 rounded-3xl border border-synth-border bg-white/5 p-4 shadow-sm shadow-synth-border/5 transition hover:scale-[1.02] hover:border-synth-accent/40",children:[n.jsx("img",{className:"h-16 w-auto object-contain",src:encodeURI(`/connectors/${b.file}`),alt:b.name}),n.jsx("span",{className:"text-center text-sm font-medium text-synth-text-2",children:b.name})]},b.name))})]})}):n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max",children:w==null?void 0:w.tools.map((b,M)=>{const v=M===0,A=M===w.tools.length-1&&w.tools.length%2===1;return n.jsxs("div",{className:`group relative overflow-hidden rounded-2xl border border-synth-border bg-gradient-to-br from-synth-surface to-synth-surface/50 p-6 transition-all duration-500 hover:shadow-xl hover:border-synth-accent/40 hover:scale-105 ${v?"md:col-span-1 md:row-span-2":""} ${A?"lg:col-span-2":""}`,children:[n.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-synth-accent/5 to-transparent pointer-events-none"}),n.jsxs("div",{className:`relative z-10 flex flex-col ${v?"h-full justify-between":""}`,children:[n.jsxs("div",{children:[n.jsx("div",{className:`mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 origin-left ${v?"text-5xl":"text-3xl"}`,children:b.icon}),n.jsx("h3",{className:`font-semibold text-synth-text-1 mb-2 transition-colors duration-300 group-hover:text-synth-accent ${v?"text-xl":"text-base"}`,children:b.name})]}),n.jsx("p",{className:`text-synth-text-3 transition-colors duration-300 group-hover:text-synth-text-2 ${v?"text-base":"text-sm"}`,children:b.desc})]}),n.jsx("div",{className:"absolute bottom-0 left-0 h-1 bg-gradient-to-r from-synth-accent to-transparent w-0 group-hover:w-full transition-all duration-500"})]},b.name)})})}),n.jsxs("div",{className:"mt-16 text-center",children:[n.jsx("p",{className:"text-synth-text-2 mb-6",children:"Ready to experience hands on ai execution?"}),n.jsx("button",{className:"px-8 py-3 rounded-full bg-synth-accent text-white font-medium hover:shadow-lg hover:shadow-synth-accent/40 transition-all duration-300 hover:scale-105",children:"Get Started Free"})]})]})})}const Vh=[{tier:"Starter",monthly:15,annual:12.5,desc:"Standard monthly usage",cta:"Get started",featured:!1,credits:"4,000 credits per month",features:[{icon:qo,text:"300 refresh credits everyday"},{icon:Qo,text:"4,000 credits per month"},{icon:Yo,text:"In-depth research for everyday tasks"},{icon:jr,text:"Professional websites for standard output"},{icon:Bs,text:"Insightful slides for regular content"},{icon:Vo,text:"Task scaling with Wide Research"},{icon:Os,text:"Early access to beta features"},{icon:Ls,text:"20 concurrent tasks"},{icon:Go,text:"20 scheduled tasks"}]},{tier:"Pro",monthly:35,annual:29.1666,desc:"Customizable monthly usage",cta:"Get started",featured:!0,credits:"8,000 credits / month",features:[{icon:qo,text:"300 refresh credits everyday"},{icon:Qo,text:"8,000 credits per month"},{icon:Yo,text:"In-depth research with self-set usage"},{icon:jr,text:"Professional websites for changing needs"},{icon:Bs,text:"Insightful slides for steady creation"},{icon:Vo,text:"Wide Research scaled to your chosen plan"},{icon:Os,text:"Early access to beta features"},{icon:Ls,text:"20 concurrent tasks"},{icon:Go,text:"20 scheduled tasks"}]},{tier:"Max",monthly:170,annual:141.6666,desc:"Extended usage for productivity",cta:"Get started",featured:!1,credits:"40,000 credits / month",specialFeature:{icon:Ah,text:"Free Cloud Computer",color:"text-blue-500"},features:[{icon:qo,text:"300 refresh credits everyday"},{icon:Qo,text:"40,000 credits per month"},{icon:Yo,text:"In-depth research for large-scale tasks"},{icon:jr,text:"Professional websites with data analytics"},{icon:Bs,text:"Insightful slides for batch production"},{icon:Vo,text:"Wide Research for sustained heavy use"},{icon:Os,text:"Early access to beta features"},{icon:Ls,text:"20 concurrent tasks"},{icon:Go,text:"20 scheduled tasks"}]}];function Od(){const[c,g]=R.useState(!1);return n.jsx("section",{className:"py-24 bg-white",id:"pricing",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"text-center mb-16",children:[n.jsx("h2",{className:"text-5xl font-serif font-medium text-gray-900 mb-12",children:"synth Pricing Plans"}),n.jsxs("div",{className:"inline-flex p-1 bg-gray-100 rounded-xl mb-4",children:[n.jsx("button",{onClick:()=>g(!1),className:`px-6 py-2 text-sm font-medium rounded-lg transition-all ${c?"text-gray-500 hover:text-gray-700":"bg-white shadow-sm text-gray-900"}`,children:"Monthly"}),n.jsx("button",{onClick:()=>g(!0),className:`px-6 py-2 text-sm font-medium rounded-lg transition-all ${c?"bg-white shadow-sm text-gray-900":"text-gray-500 hover:text-gray-700"}`,children:"Annually · Save 17%"})]})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto",children:Vh.map(l=>n.jsxs("div",{className:`relative bg-white border border-gray-200 rounded-[32px] p-8 transition-all hover:shadow-xl ${l.featured?"ring-1 ring-gray-900":""}`,children:[n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex items-baseline gap-1 mb-6",children:[n.jsx("span",{className:"text-4xl font-medium text-gray-900",children:"$"}),n.jsx("span",{className:"text-6xl font-medium text-gray-900 tracking-tight",children:c?Math.floor(l.annual):l.monthly}),n.jsx("span",{className:"text-lg text-gray-400",children:"/ month"})]}),n.jsx("p",{className:"text-gray-500 text-lg mb-8",children:l.desc}),n.jsx("button",{className:"w-full py-4 bg-gray-900 text-white rounded-2xl font-medium text-lg hover:bg-gray-800 transition-colors",children:l.cta})]}),n.jsxs("div",{className:"mb-8 p-4 bg-gray-50 rounded-2xl flex items-center justify-between group cursor-pointer border border-transparent hover:border-gray-200 transition-all",children:[n.jsx("span",{className:"text-gray-700 font-medium",children:l.credits}),n.jsx(Xo,{className:"w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"})]}),n.jsxs("div",{className:"space-y-4",children:[l.specialFeature&&n.jsxs("div",{className:`flex items-center gap-3 ${l.specialFeature.color} font-medium`,children:[n.jsx(l.specialFeature.icon,{className:"w-5 h-5"}),n.jsx("span",{className:"underline decoration-2 underline-offset-4 cursor-pointer",children:l.specialFeature.text})]}),l.features.map((y,w)=>n.jsxs("div",{className:"flex items-center gap-3 text-gray-600",children:[n.jsx(y.icon,{className:"w-5 h-5 text-gray-400 flex-shrink-0"}),n.jsx("span",{className:"text-[15px]",children:y.text}),n.jsx(Os,{className:"w-4 h-4 text-gray-300 ml-auto cursor-help"})]},w))]})]},l.tier))}),n.jsxs("div",{className:"mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"bg-gray-50 rounded-[32px] p-8 flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-all",children:[n.jsxs("div",{className:"flex items-center gap-6",children:[n.jsx("div",{className:"w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm",children:n.jsx(Bs,{className:"w-7 h-7 text-gray-900"})}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-xl font-medium text-gray-900",children:"Synth Plans for Teams & Businesses"}),n.jsx("p",{className:"text-gray-500",children:"Flexible plans for teams of all sizes."})]})]}),n.jsx("a",{href:"/#waitlist",className:"px-6 py-2.5 bg-white border border-gray-200 rounded-xl font-medium text-gray-900 hover:bg-gray-50 transition-all",children:"Get Team"})]}),n.jsxs("div",{className:"bg-gray-50 rounded-[32px] p-8 flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-all",children:[n.jsxs("div",{className:"flex items-center gap-6",children:[n.jsx("div",{className:"w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm",children:n.jsx(jr,{className:"w-7 h-7 text-gray-900"})}),n.jsxs("div",{children:[n.jsx("h4",{className:"text-xl font-medium text-gray-900",children:"Security and Compliance"}),n.jsx("p",{className:"text-gray-500",children:"Enterprise-grade security and certifications."})]})]}),n.jsx("a",{href:"/#waitlist",className:"px-6 py-2.5 bg-white border border-gray-200 rounded-xl font-medium text-gray-900 hover:bg-gray-50 transition-all",children:"Learn more"})]})]})]})})}function qh(){const[c,g]=R.useState(""),[l,y]=R.useState(!1),w=b=>{b.preventDefault(),c.trim()&&(y(!0),setTimeout(()=>{y(!1),g("")},4500))};return n.jsxs("section",{className:"py-24 border-t border-synth-border relative overflow-hidden",id:"waitlist",children:[n.jsx("div",{className:"absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-synth-accent-light rounded-full pointer-events-none",style:{filter:"blur(80px)",opacity:.6}}),n.jsx("div",{className:"wrap relative z-10",children:n.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[n.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"This is what comes after software. Your business on autopilot, all in one platform."}),n.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"We're building something we'd want to use ourselves. you'll be first to get access when we launch, Join the waitlist!!"}),n.jsxs("form",{onSubmit:w,className:"flex gap-2 max-w-[380px] mx-auto mb-3.5",children:[n.jsx("input",{type:"email",value:c,onChange:b=>g(b.target.value),placeholder:"your@email.com",required:!0,className:"flex-1 bg-synth-bg border border-synth-border-med rounded-full px-5 py-3 text-[14px] text-synth-text-1 outline-none transition-all focus:border-synth-accent"}),n.jsx("button",{type:"submit",disabled:l,className:`text-white rounded-full px-5 py-3 text-[14px] font-medium transition-colors ${l?"bg-synth-green":"bg-synth-accent hover:bg-[#1D4ED8]"}`,children:l?"✓ You're on the list!":"Join waitlist"})]}),n.jsx("p",{className:"text-[12px] text-synth-text-3",children:"No spam. No commitment. Just early access."}),n.jsxs("div",{className:"flex justify-center gap-5 mt-5",children:[n.jsx("a",{href:"mailto:hello@synth.ai?subject=API access",className:"text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors",children:"⟨/⟩ API access"}),n.jsx("a",{href:"mailto:healthcare@synthai.world",className:"text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors",children:"🏥 Healthcare demo"}),n.jsx("a",{href:"mailto:hello@synthai.world?subject=Enterprise",className:"text-[13px] text-synth-text-3 flex items-center gap-1 hover:text-synth-accent transition-colors",children:"🏢 Enterprise"})]})]})})]})}function Yh(){return n.jsxs("div",{children:[n.jsx(Oh,{}),n.jsx(Hh,{}),n.jsx($h,{}),n.jsx(Gh,{}),n.jsx(Od,{}),n.jsx(qh,{})]})}function kr({eyebrow:c,headline:g,headlineAccent:l,subhead:y,ctaText:w,ctaHref:b,workflowTitle:M,workflowSub:v,workflows:A,heroImage:L,heroImageAlt:G}){return n.jsxs("div",{className:"min-h-screen",children:[n.jsx("section",{className:"pt-20 pb-12 border-b border-synth-border overflow-hidden",children:n.jsxs("div",{className:"wrap relative",children:[n.jsx(te,{href:"/",className:"absolute right-4 top-4 z-20 rounded-full border border-synth-border bg-white p-2 shadow-sm transition hover:scale-[1.02]",children:n.jsx("img",{src:"/logo.png",alt:"Synth home",className:"h-12 w-12 object-contain"})}),L&&n.jsx("div",{className:"overflow-hidden rounded-[32px] border border-synth-border bg-synth-surface shadow-[0_24px_80px_rgba(15,23,42,0.08)]",children:n.jsx("img",{src:L,alt:G??c,className:"w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover"})}),n.jsxs("div",{className:"mt-10 max-w-[780px] mx-auto text-center",children:[n.jsx("p",{className:"eyebrow",children:c}),n.jsxs("h1",{className:"font-serif text-[clamp(36px,5vw,60px)] font-normal leading-[1.1] tracking-[-1px] text-synth-text-1 mb-4",children:[g,n.jsx("br",{}),n.jsx("em",{className:"text-synth-accent",children:l})]}),n.jsx("p",{className:"text-[17px] text-synth-text-2 leading-[1.7] max-w-[640px] mx-auto mb-8",children:y}),n.jsx(te,{href:b,className:"inline-flex items-center gap-2 bg-synth-text-1 text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#2A2835] transition-colors",children:w})]})]})}),n.jsx("section",{className:"py-20",children:n.jsxs("div",{className:"wrap",children:[n.jsx("p",{className:"eyebrow",children:"Only Synth Can Do"}),n.jsx("h2",{className:"section-title",children:M}),n.jsx("p",{className:"section-sub",children:v}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-[900px] mx-auto",children:A.map((D,H)=>n.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[16px] p-7 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-synth-accent/20 transition-all duration-200",children:[n.jsx("span",{className:"inline-block text-[11px] font-semibold uppercase tracking-[1px] rounded-full px-2.5 py-0.5 mb-3.5",style:{background:D.tagColor,color:D.tagText},children:D.tag}),n.jsx("h3",{className:"text-[15px] font-semibold text-synth-text-1 mb-1.5",children:D.title}),n.jsx("p",{className:"text-[13px] text-synth-text-2 leading-[1.6]",children:D.desc}),n.jsxs("div",{className:"inline-flex items-center gap-1 text-[12px] text-synth-accent font-medium mt-3.5 border-b border-transparent hover:border-synth-accent transition-colors cursor-pointer",children:["Watch how it works ",n.jsx(Us,{className:"w-3.5 h-3.5"})]})]},H))})]})}),n.jsx("section",{className:"py-20 border-t border-synth-border",children:n.jsx("div",{className:"wrap",children:n.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[n.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"Come and see what done actually looks like!!"}),n.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"Join the waitlist to be first when this solution launches."}),n.jsxs("form",{className:"flex gap-2 max-w-[380px] mx-auto mb-3",onSubmit:D=>{D.preventDefault(),alert("Thanks! You're on the list.")},children:[n.jsx("input",{type:"email",placeholder:"your@email.com",required:!0,className:"flex-1 bg-synth-bg border border-synth-border-med rounded-full px-5 py-3 text-[14px] text-synth-text-1 outline-none transition-all focus:border-synth-accent"}),n.jsx("button",{type:"submit",className:"bg-synth-accent text-white rounded-full px-5 py-3 text-[14px] font-medium hover:bg-[#1D4ED8] transition-colors",children:"Join waitlist"})]})]})})})]})}const Qh=[{tag:"Campaign Design",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Generate on-brand campaign assets at scale",desc:"Produce dozens of design variations for event posters, ad creatives, and social banners — with visual consistency maintained across every format and size."},{tag:"Competitor Intelligence",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Uncover actionable market intelligence",desc:"Automate competitor benchmarking, audience research, and traffic analysis. Deploy hundreds of agents in parallel to surface insights that drive real growth."},{tag:"Social Media",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Batch generate multi-format content",desc:"Turn blog posts, reports, or raw data into polished, platform-ready social graphics and carousels for LinkedIn, Instagram, Twitter, and more — simultaneously."},{tag:"Marketing Ops",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Turn data into actionable insights",desc:"Upload any marketing dataset — campaign metrics, keyword data, survey results — and get clear, presentation-ready visualisations in minutes."}];function Kh(){return n.jsx(kr,{eyebrow:"Synth for Marketing",headline:"The autonomous engine for",headlineAccent:"your entire marketing lifecycle",subhead:"From research to campaign assets to analysis — Synth handles complex, multi-step marketing workflows from start to finish in a single prompt.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end marketing workflows",workflowSub:"One prompt sets the entire workflow in motion. Synth handles every step autonomously.",workflows:Qh,heroImage:"/marketing.png",heroImageAlt:"Marketing solution image"})}const Xh=[{tag:"Prospecting",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Research and enrich leads at scale",desc:"Deploy agents to research hundreds of prospects simultaneously — pulling company data, contact details, funding history, and recent news into a structured brief."},{tag:"Outreach",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Draft hyper-personalised cold outreach",desc:"Generate tailored email sequences and LinkedIn messages using each prospect's real context — their role, company news, and stated priorities."},{tag:"Deal Intelligence",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Prepare for every meeting in minutes",desc:"Before any call, Synth builds a deal brief — company overview, stakeholder map, likely objections, and recommended talking points — automatically."},{tag:"CRM Ops",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Keep your CRM clean without lifting a finger",desc:"Synth logs call notes, updates deal stages, flags stale opportunities, and sends follow-up sequences — synced to Salesforce, HubSpot, or your CRM of choice."}];function Jh(){return n.jsx(kr,{eyebrow:"Synth for Sales",headline:"From cold outreach",headlineAccent:"to closed deals",subhead:"Synth researches prospects, enriches leads, drafts personalised outreach, and prepares deal intelligence — autonomously, at the scale your pipeline needs.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end sales workflows",workflowSub:"From lead identification to closed deal — handled in a single prompt.",workflows:Xh,heroImage:"/sales.png",heroImageAlt:"Sales solution image"})}const Zh=[{tag:"Investment Analysis",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Build live multi-timeframe chart dashboards",desc:"Perform technical analysis on any stock or asset and create an interactive web report to visualise findings in real time — shareable with one link."},{tag:"Research at Scale",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Collect financial reports for hundreds of firms",desc:"Automatically gather quarterly and annual reports for hundreds of public companies and compile them into a structured, searchable directory."},{tag:"Financial Modelling",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Build three-statement models from annual reports",desc:"Upload a company's annual report and get a complete DCF or three-statement model in Excel — formulas, assumptions, and sensitivity tables included."},{tag:"Market Intelligence",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Size and validate new market opportunities",desc:"Research addressable market segments using parallel agents — competitive analysis, demand signals, and growth projections delivered in a structured report."}];function em(){return n.jsx(kr,{eyebrow:"Synth for Finance",headline:"From raw data to",headlineAccent:"financial intelligence",subhead:"Build financial models, analyse live market data, research hundreds of firms in parallel, and produce investment-ready deliverables — in one prompt.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end finance workflows",workflowSub:"Go from raw data to final deliverable without leaving your chat window.",workflows:Zh,heroImage:"/finance.png",heroImageAlt:"Finance solution image"})}const tm=[{tag:"Discovery",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Synthesise user feedback into actionable themes",desc:"Upload interview transcripts, support tickets, or review data — Synth clusters feedback into prioritised themes with evidence-backed recommendations."},{tag:"Documentation",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Draft complete PRDs from a brief",desc:"Describe a feature in plain language and Synth produces a full product requirements document — user stories, acceptance criteria, edge cases, and open questions included."},{tag:"Competitive Research",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"Map the competitive landscape in minutes",desc:"Analyse competitors' product pages, changelogs, and reviews simultaneously. Get a structured teardown of features, positioning gaps, and opportunities."},{tag:"Roadmapping",tagColor:"#E6F4FF",tagText:"#1752A3",title:"Build data-informed roadmap proposals",desc:"Combine user feedback, business priorities, and competitive signals into a draft roadmap — with rationale for each item and trade-off analysis built in."}];function nm(){return n.jsx(kr,{eyebrow:"Synth for Product",headline:"From ideas to",headlineAccent:"shipped features",subhead:"Draft PRDs, run competitive research, generate spec documents, synthesise user feedback, and prototype ideas — all from a single conversation.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"End-to-end product workflows",workflowSub:"From discovery to delivery — Synth handles the research so your team can focus on building.",workflows:tm,heroImage:"/product.png",heroImageAlt:"Product solution image"})}const rm=[{tag:"Daily Planning",tagColor:"#EFF6FF",tagText:"#2563EB",title:"Morning brief delivered before your day starts",desc:"Synth reviews your calendar, emails, and open tasks overnight — then sends you a personalised briefing with a prioritised plan before you even open your laptop."},{tag:"Emergency Alerts",tagColor:"#FDECEA",tagText:"#C0392B",title:"Tapped on the shoulder when it matters",desc:"Meeting conflicts, missed messages, deadline creep, price drops on watched items — Synth surfaces what needs you immediately and offers to handle it."},{tag:"Autonomous Tasks",tagColor:"#E6FFE6",tagText:"#1A6B1A",title:"One message. Synth handles the rest.",desc:"Give Synth a complex, multi-step task — research, book, draft, send — and walk away. It executes every step in the background and reports back when done."},{tag:"Long-term Memory",tagColor:"#FFF0E6",tagText:"#B84D00",title:"Gets smarter the longer you use it",desc:"Synth remembers your preferences, your relationships, your recurring tasks, and your goals — so it needs less instruction and gives better results over time."}];function sm(){return n.jsx(kr,{eyebrow:"Synth Personal",headline:"Your proactive AI",headlineAccent:"chief of staff",subhead:"Synth plans your day, pushes urgent tasks, and handles complex work end-to-end — all inside WhatsApp or Telegram. No new app to learn.",ctaText:"Join waitlist",ctaHref:"/#waitlist",workflowTitle:"What makes Synth Personal different",workflowSub:"Proactive. Not reactive. Every other AI waits for you to ask. Synth pushes tasks to you.",workflows:rm,heroImage:"/personal.png",heroImageAlt:"Personal solution image"})}const am=[{icon:"🏷️",title:"Insurance Code Automation",desc:"Automatically applies ICD-10, CPT, and HCPCS codes to patient records and claims. Reduces coding errors and speeds up submission.",detail:"Supports South African medical scheme tariff codes (NHRPL) and international coding standards"},{icon:"❌",title:"Claim Denial Resolution",desc:"Identifies denial patterns, drafts appeal letters, tracks resubmission deadlines, and monitors payer decisions — all autonomously.",detail:"Average denial resolution time reduced from 14 days to under 48 hours"},{icon:"📋",title:"Payer Rule Monitoring",desc:"Tracks payer policy changes across medical schemes and insurers. Alerts your admin team before rule changes cause claim failures.",detail:"Monitors Discovery Health, Bonitas, Medihelp, Momentum, and all major SA medical schemes"},{icon:"📅",title:"Appointment & Scheduling",desc:"Manages patient bookings, sends reminders, handles cancellations and rescheduling, and optimises doctor availability — via WhatsApp.",detail:"Patients can confirm, cancel, or reschedule via a simple WhatsApp message — no app download needed"},{icon:"💊",title:"Refill Reminders — Chronic Disease",desc:"Automatically identifies patients due for repeat prescriptions and sends personalised reminders via WhatsApp or SMS, with one-tap confirmation.",detail:"Designed for chronic conditions: diabetes, hypertension, HIV/ARV management, asthma, and more"},{icon:"🔗",title:"EHR Integrations",desc:"Connects to your existing patient management and EHR systems. Synth reads and writes data — no double-entry, no manual exports.",detail:"Integrates with GoodX, Elixir, DragonWave, and custom hospital management systems via API"},{icon:"📁",title:"Patient Management",desc:"Handles admissions, records, and consent workflows. Tracks patient status, flags missing documentation, and ensures compliance.",detail:"Automated consent form generation, digital signature capture, and audit-ready record keeping"},{icon:"👥",title:"Staff Rostering & Credentials",desc:"Manages staff schedules, tracks credential expiry, and ensures compliance with regulatory requirements for healthcare professionals.",detail:"HPCSA registration tracking, CPD point monitoring, and automated renewal reminders"}];function om(){return n.jsxs("div",{className:"min-h-screen",children:[n.jsx("section",{className:"pt-20 pb-12 border-b border-synth-border overflow-hidden",children:n.jsxs("div",{className:"wrap relative",children:[n.jsx(te,{href:"/",className:"absolute right-4 top-4 z-20 rounded-full border border-synth-border bg-white p-2 shadow-sm transition hover:scale-[1.02]",children:n.jsx("img",{src:"/logo.png",alt:"Synth home",className:"h-12 w-12 object-contain"})}),n.jsx("div",{className:"overflow-hidden rounded-[32px] border border-synth-border bg-synth-surface shadow-[0_24px_80px_rgba(15,23,42,0.08)]",children:n.jsx("img",{src:"/healthcare.png",alt:"Healthcare solution image",className:"w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover"})}),n.jsxs("div",{className:"mt-10 max-w-[780px] mx-auto text-center",children:[n.jsx("p",{className:"eyebrow",children:"Healthcare Admin"}),n.jsxs("h1",{className:"font-serif text-[clamp(36px,5vw,60px)] font-normal leading-[1.1] tracking-[-1px] text-synth-text-1 mb-4",children:["From claim denials to",n.jsx("br",{}),n.jsx("em",{className:"text-synth-accent",children:"recovered revenue"})]}),n.jsx("p",{className:"text-[17px] text-synth-text-2 leading-[1.7] max-w-[600px] mx-auto mb-8",children:"Synth automates the most painful, high-stakes admin work in healthcare — so your team spends time on patients, not paperwork."}),n.jsx(te,{href:"/pricing",className:"inline-flex items-center gap-2 bg-synth-accent text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#1D4ED8] transition-colors",children:"Request a demo"})]})]})}),n.jsx("section",{className:"py-20",children:n.jsxs("div",{className:"wrap",children:[n.jsx("p",{className:"eyebrow",children:"Core capabilities"}),n.jsx("h2",{className:"section-title",children:"Built for the revenue cycle"}),n.jsx("p",{className:"section-sub",children:"Eight critical workflows — fully automated, POPIA-compliant, integrated with your existing EHR systems."}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[960px] mx-auto mb-12",children:am.map(c=>n.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[16px] p-5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-synth-accent/20 transition-all duration-200",children:[n.jsx("div",{className:"w-10 h-10 rounded-[10px] flex items-center justify-center text-[19px] bg-synth-accent-light mb-3",children:c.icon}),n.jsx("h3",{className:"text-[14px] font-semibold text-synth-text-1 mb-1",children:c.title}),n.jsx("p",{className:"text-[12px] text-synth-text-2 leading-[1.6] mb-2",children:c.desc}),n.jsx("div",{className:"text-[11px] text-synth-text-3 border-t border-synth-border pt-2 italic leading-[1.5]",children:c.detail})]},c.title))}),n.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[16px] p-5 max-w-[960px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4",children:[n.jsxs("p",{className:"text-[13px] text-synth-text-2 leading-[1.6] max-w-[560px]",children:[n.jsx("strong",{className:"text-synth-text-1",children:"Built for South African compliance."})," Synth's healthcare module is designed with POPIA (Protection of Personal Information Act) compliance at its core — data residency in South Africa, audit trails, role-based access controls, and patient consent management built in."]}),n.jsx("div",{className:"flex flex-wrap gap-2",children:["POPIA Compliant","NHRPL Codes","Medical Scheme API","Audit Trail","Data Residency SA"].map(c=>n.jsx("span",{className:"text-[11px] font-semibold border border-synth-border-med rounded-full px-3 py-1 text-synth-text-2 bg-synth-surface-2",children:c},c))})]})]})}),n.jsx("section",{className:"py-20 border-t border-synth-border",children:n.jsx("div",{className:"wrap",children:n.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[n.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"See it in your facility"}),n.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"We offer a free 30-minute demonstration tailored to your specific workflows. No commitment, no setup required."}),n.jsx("a",{href:"mailto:healthcare@synth.ai?subject=Healthcare Demo Request",className:"inline-block bg-synth-accent text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#1D4ED8] transition-colors mb-3",children:"Book a demo →"}),n.jsx("p",{className:"text-[12px] text-synth-text-3",children:"Or email us at healthcare@synth.ai · We respond within 24 hours"})]})})})]})}function im(){return n.jsx("div",{className:"pt-20",children:n.jsx(Od,{})})}const lm=[{icon:Jo,title:"End-to-end encryption",desc:"All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your conversations, documents, and patient records are protected at every layer."},{icon:Dd,title:"Your data stays yours",desc:"We never sell your data. We never use it to train models without your explicit consent. Delete everything, anytime — no questions asked."},{icon:jr,title:"Data residency controls",desc:"Choose where your data lives. South Africa (default), EU, UK, or US. POPIA, GDPR, and HIPAA-compliant handling depending on your region."},{icon:Nh,title:"Full audit trails",desc:"Every agent action is logged, timestamped, and exportable. Court-admissible records for healthcare and legal compliance requirements."},{icon:Ld,title:"On-premise option",desc:"For healthcare and enterprise customers, deploy entirely within your infrastructure. No data leaves your network. Air-gapped available."},{icon:kh,title:"SOC 2 Type II certified",desc:"Independently audited annually. Full report available under NDA. We maintain the highest standards for security, availability, and confidentiality."}];function cm(){return n.jsxs("div",{className:"min-h-screen",children:[n.jsx("section",{className:"pt-24 pb-16 border-b border-synth-border",children:n.jsxs("div",{className:"wrap-sm text-center",children:[n.jsx("p",{className:"eyebrow",children:"Trust Centre"}),n.jsxs("h1",{className:"font-serif text-[clamp(36px,5vw,60px)] font-normal leading-[1.1] tracking-[-1px] text-synth-text-1 mb-4",children:["Your data, ",n.jsx("em",{className:"text-synth-accent",children:"your rules"})]}),n.jsx("p",{className:"text-[17px] text-synth-text-2 leading-[1.7]",children:"Built with privacy and security at the core. You stay in control — always."})]})}),n.jsx("section",{className:"py-20",children:n.jsxs("div",{className:"wrap",children:[n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto",children:lm.map(c=>{const g=c.icon;return n.jsxs("div",{className:"bg-synth-surface/50 border border-synth-border rounded-[22px] p-8",children:[n.jsx("div",{className:"w-12 h-12 bg-synth-surface border border-synth-border rounded-[14px] flex items-center justify-center mb-5",children:n.jsx(g,{className:"w-6 h-6 text-synth-text-1"})}),n.jsx("h3",{className:"font-semibold text-synth-text-1 mb-2",children:c.title}),n.jsx("p",{className:"text-[13px] text-synth-text-2 leading-[1.65]",children:c.desc})]},c.title)})}),n.jsx("div",{className:"mt-12 text-center",children:n.jsxs("div",{className:"inline-flex items-center gap-6 text-[13px] text-synth-text-3",children:[n.jsxs("span",{className:"flex items-center gap-1.5",children:[n.jsx(Ms,{className:"w-4 h-4 text-synth-green"}),"SOC 2 Type II"]}),n.jsxs("span",{className:"flex items-center gap-1.5",children:[n.jsx(Ms,{className:"w-4 h-4 text-synth-green"}),"GDPR Ready"]}),n.jsxs("span",{className:"flex items-center gap-1.5",children:[n.jsx(Ms,{className:"w-4 h-4 text-synth-green"}),"HIPAA Options"]}),n.jsxs("span",{className:"flex items-center gap-1.5",children:[n.jsx(Ms,{className:"w-4 h-4 text-synth-green"}),"POPIA Compliant"]})]})})]})}),n.jsx("section",{className:"py-20 border-t border-synth-border",children:n.jsx("div",{className:"wrap",children:n.jsxs("div",{className:"bg-synth-surface border border-synth-border rounded-[22px] p-14 max-w-[600px] mx-auto text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]",children:[n.jsx("h2",{className:"font-serif text-[36px] font-normal tracking-[-0.5px] text-synth-text-1 mb-3",children:"Questions about security?"}),n.jsx("p",{className:"text-[15px] text-synth-text-2 leading-[1.7] mb-7",children:"Our security team is happy to share our SOC 2 report, discuss custom compliance requirements, or walk you through our architecture."}),n.jsx("a",{href:"mailto:security@synth.ai?subject=Security Inquiry",className:"inline-block bg-synth-text-1 text-white rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#2A2835] transition-colors",children:"Contact security team"})]})})})]})}function dm(){return n.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900",children:[n.jsx("nav",{className:"border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50",children:n.jsxs("div",{className:"max-w-4xl mx-auto px-6 h-16 flex items-center justify-between",children:[n.jsxs(te,{href:"/",className:"text-xl font-serif font-medium tracking-tight hover:opacity-70 transition-opacity",children:["synth",n.jsx("span",{className:"text-indigo-600",children:".ai"})]}),n.jsx(te,{href:"/terms",className:"text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors",children:"Terms of Use"})]})}),n.jsxs("main",{className:"max-w-4xl mx-auto px-6 py-20",children:[n.jsxs("header",{className:"mb-20",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-6",children:[n.jsx(Jo,{className:"w-3 h-3"}),"Security First"]}),n.jsx("h1",{className:"text-5xl md:text-6xl font-serif font-medium tracking-tight text-gray-900 mb-6",children:"Data Processing Policy"}),n.jsx("p",{className:"text-xl text-gray-500 font-medium",children:"Last updated: July 2026"})]}),n.jsxs("div",{className:"prose prose-gray prose-lg max-w-none",children:[n.jsxs("section",{className:"mb-16",children:[n.jsx("h2",{className:"text-3xl font-serif font-medium text-gray-900 mb-8",children:"1. Introduction"}),n.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Synth AI (“Synth,” “we,” “us,” or “our”) provides an autonomous AI agent platform that helps regulated enterprises automate operational workflows. We are committed to protecting the privacy and security of the data our customers (“you” or “your”) entrust to us."}),n.jsx("p",{className:"text-gray-600 leading-relaxed",children:"This Data Processing Policy explains what data we process, why, where it is stored, and — critically — how our architectural choices ensure that your proprietary business knowledge remains yours alone."})]}),n.jsxs("section",{className:"mb-16 grid md:grid-cols-2 gap-8 not-prose",children:[n.jsxs("div",{className:"p-8 bg-gray-50 rounded-[32px] border border-gray-100",children:[n.jsxs("h3",{className:"text-lg font-bold text-gray-900 mb-4 flex items-center gap-2",children:[n.jsx(um,{className:"w-5 h-5 text-indigo-600"})," You are the Data Controller"]}),n.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",children:"You determine the purposes and means of processing your data."})]}),n.jsxs("div",{className:"p-8 bg-indigo-50 rounded-[32px] border border-indigo-100",children:[n.jsxs("h3",{className:"text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2",children:[n.jsx(Jo,{className:"w-5 h-5 text-indigo-600"})," Synth is the Data Processor"]}),n.jsx("p",{className:"text-indigo-900/70 text-sm leading-relaxed",children:"We process data only on your documented instructions, as set out in our service agreement and this policy."})]})]}),n.jsxs("section",{className:"mb-16",children:[n.jsx("h2",{className:"text-3xl font-serif font-medium text-gray-900 mb-8",children:"2. Data We Process"}),n.jsx("div",{className:"space-y-6",children:[{title:"Account data",desc:"Names, email addresses, and contact details of authorised users."},{title:"Operational data",desc:"Workflows, configurations, and logs generated by your use of the platform."},{title:"Content data",desc:"Text of documents, messages, and information you instruct the agent to process."},{title:"Metadata",desc:"Timestamps and performance metrics necessary for auditing and reliability."}].map((c,g)=>n.jsxs("div",{className:"flex gap-4 p-6 border border-gray-100 rounded-2xl hover:border-indigo-100 transition-colors",children:[n.jsx("div",{className:"w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-bold text-gray-900 mb-1",children:c.title}),n.jsx("p",{className:"text-gray-500 text-sm",children:c.desc})]})]},g))})]}),n.jsxs("section",{className:"mb-16 bg-gray-900 text-white rounded-[40px] p-10 md:p-16 overflow-hidden relative",children:[n.jsxs("div",{className:"relative z-10",children:[n.jsx("h2",{className:"text-3xl md:text-4xl font-serif font-medium mb-8",children:"Protecting Your Competitive Edge"}),n.jsxs("div",{className:"space-y-8 max-w-2xl",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"text-indigo-400 font-bold mb-2",children:"Why Open-Source Models?"}),n.jsx("p",{className:"text-gray-400 leading-relaxed",children:"Most AI platforms use proprietary, closed-source models. When you send data to them, you risk sharing proprietary domain expertise with a third party."})]}),n.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"p-6 bg-white/5 rounded-2xl border border-white/10",children:[n.jsx("h4",{className:"font-bold mb-2",children:"Self-Hosted"}),n.jsx("p",{className:"text-xs text-gray-500",children:"Models run on your side of the fence. No data ever flows back to a central provider."})]}),n.jsxs("div",{className:"p-6 bg-white/5 rounded-2xl border border-white/10",children:[n.jsx("h4",{className:"font-bold mb-2",children:"No Training"}),n.jsx("p",{className:"text-xs text-gray-500",children:'Models are static. They do not learn from your data, protecting your "alpha".'})]})]})]})]}),n.jsx("div",{className:"absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]"})]}),n.jsxs("section",{className:"mb-16",children:[n.jsx("h2",{className:"text-3xl font-serif font-medium text-gray-900 mb-8",children:"Infrastructure & Security"}),n.jsxs("div",{className:"grid md:grid-cols-3 gap-6 not-prose",children:[n.jsxs("div",{className:"p-6 border border-gray-100 rounded-2xl",children:[n.jsx(Ld,{className:"w-8 h-8 text-gray-400 mb-4"}),n.jsx("h4",{className:"font-bold mb-2",children:"AWS Infrastructure"}),n.jsx("p",{className:"text-xs text-gray-500",children:"Stored in regions selected by you at deployment time."})]}),n.jsxs("div",{className:"p-6 border border-gray-100 rounded-2xl",children:[n.jsx(Dd,{className:"w-8 h-8 text-gray-400 mb-4"}),n.jsx("h4",{className:"font-bold mb-2",children:"Encryption"}),n.jsx("p",{className:"text-xs text-gray-500",children:"AES-256 at rest and TLS 1.2+ in transit for all data."})]}),n.jsxs("div",{className:"p-6 border border-gray-100 rounded-2xl",children:[n.jsx(Eh,{className:"w-8 h-8 text-gray-400 mb-4"}),n.jsx("h4",{className:"font-bold mb-2",children:"POPIA Compliant"}),n.jsx("p",{className:"text-xs text-gray-500",children:"Full compliance with South African data protection laws."})]})]})]}),n.jsxs("section",{className:"mb-16 bg-indigo-50 rounded-[32px] p-10 border border-indigo-100",children:[n.jsx("h2",{className:"text-2xl font-serif font-medium text-indigo-900 mb-4",children:"Questions?"}),n.jsx("p",{className:"text-indigo-900/70 mb-8",children:"If you have questions about this Data Processing Policy or wish to exercise your rights, please contact our Information Officer."}),n.jsxs("div",{className:"space-y-2",children:[n.jsx("p",{className:"font-bold text-indigo-900",children:"Synth AI (Pty) Ltd"}),n.jsx("a",{href:"mailto:privacy@synth.ai",className:"text-indigo-600 font-bold hover:underline",children:"privacy@synth.ai"}),n.jsx("p",{className:"text-sm text-indigo-900/50 mt-4",children:"Cape Town, South Africa"})]})]})]})]}),n.jsx("footer",{className:"border-t border-gray-100 py-12",children:n.jsxs("div",{className:"max-w-4xl mx-auto px-6 flex justify-between items-center text-sm text-gray-400",children:[n.jsx("p",{children:"© 2026 Synth AI (Pty) Ltd."}),n.jsxs("div",{className:"flex gap-6",children:[n.jsx(te,{href:"/terms",className:"hover:text-gray-900 transition-colors",children:"Terms"}),n.jsx("a",{href:"mailto:privacy@synth.ai",className:"hover:text-gray-900 transition-colors",children:"Privacy"})]})]})})]})}function um(c){return n.jsxs("svg",{...c,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"}),n.jsx("path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"})]})}function pm(){return n.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900",children:[n.jsx("nav",{className:"border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50",children:n.jsxs("div",{className:"max-w-3xl mx-auto px-6 h-16 flex items-center justify-between",children:[n.jsxs(te,{href:"/",className:"text-xl font-serif font-medium tracking-tight hover:opacity-70 transition-opacity",children:["synth",n.jsx("span",{className:"text-indigo-600",children:".ai"})]}),n.jsx(te,{href:"/pricing",className:"text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors",children:"Back to Pricing"})]})}),n.jsxs("main",{className:"max-w-3xl mx-auto px-6 py-20",children:[n.jsxs("header",{className:"mb-16",children:[n.jsx("h1",{className:"text-5xl font-serif font-medium tracking-tight text-gray-900 mb-4",children:"Terms of Use"}),n.jsx("p",{className:"text-gray-400 font-medium",children:"Last updated: July 06, 2026"})]}),n.jsxs("div",{className:"prose prose-gray prose-lg max-w-none",children:[n.jsx("p",{className:"lead text-xl text-gray-600 mb-12 leading-relaxed",children:"Welcome to Synth. Before you access our services, please read these Terms of Use carefully. These Terms govern your use of the Synth platform and any associated applications."}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"1. Acceptance of Terms"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"By accessing or using Synth, you agree to be bound by these Terms and our Privacy Policy. If you are using the Services on behalf of an entity, you represent that you have the authority to bind that entity to these Terms."})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"2. Description of Service"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Synth provides an autonomous AI agent platform designed to automate complex operational workflows. Our services include planning, research, communication automation, and integration with third-party tools."})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"3. User Accounts"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"You must be at least 18 years old to use Synth. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"4. Fees and Payment"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Certain features of Synth require a paid subscription. All fees are non-refundable except as required by law. We reserve the right to change our pricing upon notice to you."})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"5. Intellectual Property"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Synth and its original content, features, and functionality are owned by Synth AI (Pty) Ltd and are protected by international copyright, trademark, and other intellectual property laws."}),n.jsxs("p",{className:"text-gray-600",children:[n.jsx("strong",{children:"Your Content:"})," You retain all rights to the data you input into Synth. We do not claim ownership of your proprietary business knowledge."]})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"6. Limitation of Liability"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"To the maximum extent permitted by law, Synth shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service."})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"text-2xl font-serif font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2",children:"7. Governing Law"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"These Terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions."})]}),n.jsxs("section",{className:"mb-12 bg-gray-50 p-8 rounded-3xl border border-gray-100",children:[n.jsx("h2",{className:"text-xl font-serif font-medium text-gray-900 mb-4",children:"Questions?"}),n.jsx("p",{className:"text-gray-600 mb-6",children:"If you have any questions about these Terms, please contact our legal team."}),n.jsx("a",{href:"mailto:legal@synth.ai",className:"inline-flex items-center text-indigo-600 font-bold hover:underline",children:"legal@synth.ai"})]})]})]}),n.jsx("footer",{className:"border-t border-gray-100 py-12",children:n.jsxs("div",{className:"max-w-3xl mx-auto px-6 flex justify-between items-center text-sm text-gray-400",children:[n.jsx("p",{children:"© 2026 Synth AI (Pty) Ltd."}),n.jsxs("div",{className:"flex gap-6",children:[n.jsx("a",{href:"mailto:privacy@synth.ai",className:"hover:text-gray-900 transition-colors",children:"Privacy"}),n.jsx(te,{href:"/data-processing",className:"hover:text-gray-900 transition-colors",children:"Data Processing"})]})]})})]})}function hm(){return n.jsx("div",{className:"min-h-screen flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"font-serif text-[80px] font-normal text-synth-text-1 leading-none mb-4",children:"404"}),n.jsx("p",{className:"text-[17px] text-synth-text-2 mb-8",children:"This page doesn't exist yet."}),n.jsx(te,{href:"/",className:"inline-flex items-center gap-2 bg-synth-text-1 text-white rounded-full px-6 py-3 text-[15px] font-medium hover:bg-[#2A2835] transition-colors",children:"Go home"})]})})}const gd=[{category:"Architecture Philosophy",feature:"Core concept",openclaw:{value:"A personal, always-on AI assistant that monitors systems and alerts you",supported:"yes"},synth:{value:"An autonomous employee that executes complex, multi-step enterprise workflows across apps",supported:"yes"}},{category:"Architecture Philosophy",feature:"Primary loop",openclaw:{value:"Heartbeat → probe → policy → escalate → notify",supported:"yes"},synth:{value:"Heartbeat → probe → policy → escalate → execute full agent task (plan, use tools, verify, deliver)",supported:"yes"}},{category:"Architecture Philosophy",feature:"Execution depth",openclaw:{value:"Notifies a human; does not autonomously complete end-to-end business tasks",supported:"no"},synth:{value:"End-to-end execution: plans, calls tools (browser, desktop, WhatsApp, APIs), verifies output, and delivers a finished result",supported:"yes"}},{category:"Architecture Philosophy",feature:"Multi-agent orchestration",openclaw:{value:"Single-agent, user-centred",supported:"no"},synth:{value:"Multi-agent orchestration (Planner-Executor-Verifier, plus specialised sub-agents)",supported:"yes"}},{category:"Target Users",feature:"Primary user",openclaw:{value:"Technical individuals (developers, hobbyists) comfortable configuring servers, YAML, and API keys",supported:"yes"},synth:{value:"Business professionals in regulated enterprises—lawyers, healthcare administrators, procurement officers—who never touch a terminal",supported:"yes"}},{category:"Target Users",feature:"Buyer",openclaw:{value:"The user themselves (free, self-hosted)",supported:"yes"},synth:{value:"The enterprise (paid subscription, with compliance and support)",supported:"yes"}},{category:"Target Users",feature:"User experience",openclaw:{value:"CLI, config files, and a multi-messenger chat interface",supported:"yes"},synth:{value:"Clean dashboard with task submission, live streaming, heartbeat configuration, memory explorer, and cost dashboards",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Scheduler",openclaw:{value:"Configurable intervals and active hours",supported:"yes"},synth:{value:"Same, plus per-user scheduling (e.g., each lawyer sets their own morning briefing time)",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Deterministic probes",openclaw:{value:"HTTP, file-system, shell commands",supported:"yes"},synth:{value:"Same, plus queue depth, API status, database checks; extensible probe registry",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Policy engine",openclaw:{value:"YAML-based rules; deterministic evaluation",supported:"yes"},synth:{value:"Same, plus integration with an Authorised Actions policy that governs what the agent is allowed to do autonomously—not just when to alert",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Escalation gate",openclaw:{value:"LLM called only when necessary (cheap-checks-first)",supported:"yes"},synth:{value:"Same, but the gate can choose between a cheap verification model (DeepSeek) and a powerful reasoning model (Kimi K2.6) depending on severity",supported:"yes"}},{category:"Proactive Heartbeat",feature:"Action dispatcher",openclaw:{value:"Sends an alert to a messaging channel (Slack, WhatsApp, etc.)",supported:"partial"},synth:{value:"Creates a full autonomous task (research, draft, file, notify) and pushes it onto the same agent loop that handles user requests",supported:"yes"}},{category:"Memory and Context",feature:"Memory type",openclaw:{value:"Conversation history and basic file-based persistence",supported:"partial"},synth:{value:"Dual-store memory: vector search (Qdrant) for semantic recall + knowledge graph (KuzuDB) for structured entity relationships",supported:"yes"}},{category:"Memory and Context",feature:"Temporal awareness",openclaw:{value:"No built-in temporal tagging",supported:"no"},synth:{value:"Graphiti integration: every fact has a valid-time interval, enabling time-travel queries",supported:"yes"}},{category:"Memory and Context",feature:"Cross-session persistence",openclaw:{value:"Maintains context across chat sessions on the same messaging platform",supported:"partial"},synth:{value:"Channel-unified memory: interactions from WhatsApp, dashboard, browser, and desktop all feed the same knowledge graph",supported:"yes"}},{category:"Memory and Context",feature:"Vertical knowledge graphs",openclaw:{value:"None",supported:"no"},synth:{value:"Pre-built entity schemas for healthcare admin, procurement, and personal assistance—no manual configuration required",supported:"yes"}},{category:"Tools and Channels",feature:"Browser automation",openclaw:{value:"None built-in",supported:"no"},synth:{value:"Full browser automation via Playwright (or browser-use library), with deterministic primitives to minimise token cost",supported:"yes"}},{category:"Tools and Channels",feature:"Desktop GUI control",openclaw:{value:"None",supported:"no"},synth:{value:"VNC-based observe-propose-act loop (PyAutoGUI/xdotool), running inside isolated Firecracker microVMs",supported:"yes"}},{category:"Tools and Channels",feature:"WhatsApp integration",openclaw:{value:"Native, as an alert/chat surface",supported:"partial"},synth:{value:"Native, as both an alert/chat surface and an execution channel—the agent can send structured briefings, receive task updates, and manage conversations",supported:"yes"}},{category:"Tools and Channels",feature:"MCP (Model Context Protocol)",openclaw:{value:"Not supported",supported:"no"},synth:{value:"Full MCP integration: connect to any MCP server and the agent automatically discovers and uses those tools",supported:"yes"}},{category:"Tools and Channels",feature:"Custom APIs",openclaw:{value:"Users must write custom probe scripts",supported:"no"},synth:{value:"Users can provide an OpenAPI spec and Synth generates an MCP server that exposes those endpoints as tools—no code required",supported:"yes"}},{category:"Enterprise Readiness",feature:"Deployment",openclaw:{value:"Self-hosted on a VPS; requires manual setup of environment variables, API keys, and config files",supported:"partial"},synth:{value:"Self-hosted via Docker Compose or Kubernetes (Helm charts); one-command deployment",supported:"yes"}},{category:"Enterprise Readiness",feature:"Multi-tenancy",openclaw:{value:"None",supported:"no"},synth:{value:"Workspace-based isolation, RBAC (Admin, Operator, Viewer), and ethical walls for multi-client scenarios",supported:"yes"}},{category:"Enterprise Readiness",feature:"Compliance",openclaw:{value:"None",supported:"no"},synth:{value:"SOC 2 Type II roadmap, POPIA-aligned data handling, Bring Your Own Key, open-source code for full auditability",supported:"yes"}},{category:"Enterprise Readiness",feature:"Dashboard",openclaw:{value:"No dashboard; interaction via messaging apps and CLI",supported:"no"},synth:{value:"Full React dashboard with real-time task streaming, heartbeat monitor, memory explorer, cost analytics, and audit logs",supported:"yes"}},{category:"Enterprise Readiness",feature:"Support",openclaw:{value:"Community (GitHub issues)",supported:"partial"},synth:{value:"Enterprise support with SLA, dedicated onboarding, and professional services",supported:"yes"}},{category:"Scalability",feature:"Execution model",openclaw:{value:"Single-process daemon",supported:"no"},synth:{value:"Containerised microservices; agent tasks run in isolated Firecracker microVMs on Kubernetes",supported:"yes"}},{category:"Scalability",feature:"Horizontal scaling",openclaw:{value:"Limited—personal tool",supported:"no"},synth:{value:"Scale to thousands of concurrent tasks; the heartbeat, memory, and execution layers scale independently",supported:"yes"}},{category:"Scalability",feature:"Model-agnostic architecture",openclaw:{value:"Tied to specific LLM providers (configurable)",supported:"partial"},synth:{value:"Model-agnostic ModelRouter can hot-swap between API providers (Kimi, DeepSeek) and self-hosted open-source models (vLLM, Ollama) without code changes",supported:"yes"}}];function xd({level:c}){return c==="yes"?n.jsx("span",{className:"voc-support voc-support-yes","aria-label":"Yes",children:"✓"}):c==="no"?n.jsx("span",{className:"voc-support voc-support-no","aria-label":"No",children:"✗"}):n.jsx("span",{className:"voc-support voc-support-part","aria-label":"Partial",children:"◐"})}function mm(){const[c,g]=R.useState(!1),[l,y]=R.useState("All"),w=["All",...Array.from(new Set(gd.map(v=>v.category)))],b=gd.filter(v=>l==="All"||v.category===l),M=c?b:b.slice(0,8);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"voc-page",children:[n.jsxs("section",{className:"voc-hero",children:[n.jsx("div",{className:"voc-eyebrow",children:"Platform comparison"}),n.jsxs("h1",{className:"voc-hero-headline",children:["OpenClaw proved proactive AI",n.jsx("br",{}),"is the future.",n.jsx("br",{}),n.jsxs("em",{children:["Synth is the enterprise platform",n.jsx("br",{}),"that makes it real."]})]}),n.jsx("p",{className:"voc-hero-sub",children:"OpenClaw is an impressive open-source proof-of-concept — a personal, always-on monitoring assistant that alerts you when systems change. Synth took that same heartbeat philosophy and built a governed, multi-agent enterprise platform that does not just alert — it executes end-to-end business workflows autonomously."}),n.jsx("div",{className:"voc-hero-badges",children:n.jsxs("div",{className:"voc-brand-hero",children:[n.jsx("div",{className:"voc-brand-inline","aria-hidden":!0,children:n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})}),n.jsx("span",{className:"voc-badge-vs",children:"VS"}),n.jsx("div",{className:"voc-brand-inline","aria-hidden":!0,children:n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})})]})}),n.jsxs("div",{className:"voc-stack-callout",children:[n.jsxs("h3",{children:[n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",n.jsx("span",{children:"OpenClaw"})]}),' says "Hey, something changed — you should look at this."']}),n.jsxs("p",{style:{marginBottom:"16px"},children:[n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",n.jsx("span",{style:{color:"rgba(255,255,255,0.85)",fontWeight:600},children:"Synth"})]}),' says "Something changed. I have already investigated, drafted a summary, updated the case file, and sent the memo to the partner."']}),n.jsxs("p",{children:["That is the difference between a ",n.jsx("strong",{children:"notification layer"})," and an ",n.jsx("strong",{children:"execution layer"}),". OpenClaw is the proof-of-concept. Synth is the production platform."]})]}),n.jsxs("div",{className:"voc-tldr",children:[n.jsxs("div",{className:"voc-tldr-col voc-tldr-col-openclaw",children:[n.jsx("h4",{children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",n.jsx("span",{children:"OpenClaw — Proof of Concept"})]})}),n.jsxs("ul",{children:[n.jsx("li",{children:"Personal, always-on monitoring assistant"}),n.jsx("li",{children:"Alerts you when systems change — does not execute"}),n.jsx("li",{children:"Single-agent, user-centred architecture"}),n.jsx("li",{children:"CLI, config files, and chat interface"}),n.jsx("li",{children:"Self-hosted on a VPS; manual setup required"}),n.jsx("li",{children:"Community support (GitHub issues)"}),n.jsx("li",{children:"Free, self-hosted — the user is the buyer"})]})]}),n.jsxs("div",{className:"voc-tldr-col voc-tldr-col-synth",children:[n.jsx("h4",{children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",n.jsx("span",{children:"Synth — Enterprise Platform"})]})}),n.jsxs("ul",{children:[n.jsx("li",{children:"Autonomous employee executing multi-step enterprise workflows"}),n.jsx("li",{children:"End-to-end execution: plans, uses tools, verifies, delivers"}),n.jsx("li",{children:"Multi-agent orchestration (Planner-Executor-Verifier)"}),n.jsx("li",{children:"Full React dashboard + WhatsApp execution channel"}),n.jsx("li",{children:"Docker Compose / Kubernetes; one-command deployment"}),n.jsx("li",{children:"Enterprise support with SLA"}),n.jsx("li",{children:"Paid subscription — the enterprise is the buyer"})]})]})]})]}),n.jsx("section",{className:"voc-section",children:n.jsxs("div",{className:"voc-wrap-sm",children:[n.jsx("p",{className:"voc-section-eyebrow",children:"The heartbeat difference"}),n.jsx("h2",{className:"voc-section-title",children:"From alert to action"}),n.jsx("p",{className:"voc-section-sub",children:"Both systems share the same philosophical origin — proactive AI that watches and responds. But what happens after the probe fires is where they diverge completely."}),n.jsxs("div",{className:"voc-quote-box",children:[n.jsxs("blockquote",{children:[`"OpenClaw's heartbeat says `,n.jsx("em",{children:"'Hey, something changed — you should look at this.'"}),n.jsx("br",{}),"Synth's heartbeat says ",n.jsx("em",{children:"'Something changed. I have already investigated, drafted a summary, updated the case file, and sent the memo to the partner.'"}),'"']}),n.jsx("p",{className:"voc-quote-attrib",children:"The architectural gap in a single sentence"})]})]})}),n.jsx("section",{className:"voc-section",children:n.jsxs("div",{className:"voc-wrap",children:[n.jsx("p",{className:"voc-section-eyebrow",children:"Feature comparison"}),n.jsx("h2",{className:"voc-section-title",children:"Seven dimensions, side by side"}),n.jsx("p",{className:"voc-section-sub",children:"We describe OpenClaw accurately — it is genuinely impressive open-source work. The gap is not in quality; it is in scope, governance, and execution depth."}),n.jsx("div",{className:"voc-filter-tabs",children:w.map(v=>n.jsx("button",{className:`voc-filter-tab ${l===v?"active":""}`,onClick:()=>{y(v),g(!1)},children:v},v))}),n.jsxs("div",{className:"voc-table",children:[n.jsxs("div",{className:"voc-table-head",children:[n.jsx("div",{className:"voc-th voc-th-feature",children:"Feature"}),n.jsx("div",{className:"voc-th voc-th-openclaw",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",n.jsx("span",{children:"OpenClaw"})]})}),n.jsx("div",{className:"voc-th voc-th-synth",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",n.jsx("span",{children:"Synth"})]})})]}),M.map((v,A)=>{const L=b[A-1],G=!L||L.category!==v.category;return n.jsxs("div",{children:[G&&l==="All"&&n.jsx("div",{className:"voc-category-row",children:v.category}),n.jsxs("div",{className:"voc-row",children:[n.jsx("div",{className:"voc-cell voc-cell-feature",children:v.feature}),n.jsxs("div",{className:"voc-cell voc-cell-openclaw",children:[n.jsx(xd,{level:v.openclaw.supported}),v.openclaw.value]}),n.jsxs("div",{className:"voc-cell voc-cell-synth",children:[n.jsx(xd,{level:v.synth.supported}),v.synth.value]})]})]},A)})]}),!c&&b.length>8&&n.jsx("div",{className:"voc-show-more",children:n.jsxs("button",{className:"voc-show-more-btn",onClick:()=>g(!0),children:["Show all ",b.length," features ↓"]})})]})}),n.jsx("section",{className:"voc-section",children:n.jsxs("div",{className:"voc-wrap",children:[n.jsx("p",{className:"voc-section-eyebrow",children:"Deep dive"}),n.jsx("h2",{className:"voc-section-title",children:"Category by category"}),n.jsx("p",{className:"voc-section-sub",children:"The same seven dimensions, unpacked with the full technical detail that engineering teams and VCs need to evaluate."}),n.jsxs("div",{className:"voc-cat-grid",children:[n.jsxs("div",{className:"voc-cat-card",children:[n.jsxs("div",{className:"voc-cat-header",children:[n.jsx("span",{style:{fontSize:"18px"},children:"🏗️"}),n.jsx("h3",{children:"Architecture Philosophy"})]}),n.jsxs("div",{className:"voc-cat-body",children:[n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Core concept"}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",n.jsx("span",{children:"OpenClaw"})]})}),"A personal, always-on AI assistant that monitors systems and alerts you or the team."]}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",n.jsx("span",{children:"Synth"})]})}),"An autonomous employee that executes complex, multi-step enterprise workflows across apps."]})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Primary loop"}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:["Heartbeat → probe → policy → escalate → ",n.jsx("strong",{children:"notify"}),"."]}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:["Heartbeat → probe → policy → escalate → ",n.jsx("strong",{children:"execute full agent task"})," (plan, use tools, verify, deliver)."]})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Multi-agent"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Single-agent, user-centred."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Multi-agent orchestration: Planner-Executor-Verifier, plus specialised sub-agents."})]})]})]}),n.jsxs("div",{className:"voc-cat-card",children:[n.jsxs("div",{className:"voc-cat-header",children:[n.jsx("span",{style:{fontSize:"18px"},children:"👤"}),n.jsx("h3",{children:"Target Users"})]}),n.jsxs("div",{className:"voc-cat-body",children:[n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Primary user"}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",n.jsx("span",{children:"OpenClaw"})]})}),"Technical individuals — developers, hobbyists — comfortable with YAML, API keys, and server config."]}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",n.jsx("span",{children:"Synth"})]})}),"Business professionals in regulated enterprises — lawyers, healthcare administrators, procurement officers — who never touch a terminal."]})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Buyer"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"The user themselves. Free, self-hosted."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"The enterprise. Paid subscription with compliance and support."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Experience"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"CLI, config files, and a multi-messenger chat interface."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Clean dashboard with task submission, live streaming, heartbeat configuration, memory explorer, and cost dashboards."})]})]})]}),n.jsxs("div",{className:"voc-cat-card",children:[n.jsxs("div",{className:"voc-cat-header",children:[n.jsx("span",{style:{fontSize:"18px"},children:"💓"}),n.jsx("h3",{children:"Proactive Heartbeat"})]}),n.jsxs("div",{className:"voc-cat-body",children:[n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Scheduler"}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",n.jsx("span",{children:"OpenClaw"})]})}),"Configurable intervals and active hours."]}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",n.jsx("span",{children:"Synth"})]})}),"Same, plus per-user scheduling (e.g., each lawyer sets their own morning briefing time)."]})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Deterministic probes"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"HTTP, file-system, shell commands."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Same, plus queue depth, API status, database checks; extensible probe registry."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Policy engine"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"YAML-based rules; deterministic evaluation."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Same, plus integration with an Authorised Actions policy that governs what the agent is allowed to do autonomously — not just when to alert."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Escalation gate"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"LLM called only when necessary (cheap-checks-first)."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Same, but the gate can choose between a cheap verification model (DeepSeek) and a powerful reasoning model (Kimi K2.6) depending on severity."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Action dispatcher"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Sends an alert to a messaging channel (Slack, WhatsApp, etc.)."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Creates a full autonomous task (research, draft, file, notify) and pushes it onto the same agent loop that handles user requests."})]})]})]}),n.jsxs("div",{className:"voc-cat-card",children:[n.jsxs("div",{className:"voc-cat-header",children:[n.jsx("span",{style:{fontSize:"18px"},children:"🧠"}),n.jsx("h3",{children:"Memory and Context"})]}),n.jsxs("div",{className:"voc-cat-body",children:[n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Memory type"}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",n.jsx("span",{children:"OpenClaw"})]})}),"Conversation history and basic file-based persistence."]}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",n.jsx("span",{children:"Synth"})]})}),"Dual-store memory: vector search (Qdrant) for semantic recall + knowledge graph (KuzuDB) for structured entity relationships."]})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Temporal awareness"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"No built-in temporal tagging."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:'Graphiti integration: every fact has a valid-time interval, enabling "what was the status of this supplier last week?" queries.'})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Cross-session persistence"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Maintains context across chat sessions on the same messaging platform."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Channel-unified memory: interactions from WhatsApp, dashboard, browser, and desktop all feed the same knowledge graph."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Vertical knowledge graphs"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Pre-built entity schemas for healthcare admin, procurement, and personal assistance — no manual configuration required."})]})]})]}),n.jsxs("div",{className:"voc-cat-card",children:[n.jsxs("div",{className:"voc-cat-header",children:[n.jsx("span",{style:{fontSize:"18px"},children:"🛠️"}),n.jsx("h3",{children:"Tools and Channels"})]}),n.jsxs("div",{className:"voc-cat-body",children:[n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Browser automation"}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",n.jsx("span",{children:"OpenClaw"})]})}),"None built-in."]}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",n.jsx("span",{children:"Synth"})]})}),"Full browser automation via Playwright (or browser-use library), with deterministic primitives to minimise token cost."]})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Desktop GUI control"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"VNC-based observe-propose-act loop (PyAutoGUI/xdotool), running inside isolated Firecracker microVMs."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"WhatsApp integration"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Native, as an alert/chat surface."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Native, as both an alert/chat surface and an execution channel — the agent can send structured briefings, receive task updates, and manage conversations."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"MCP (Model Context Protocol)"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Not supported."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Full MCP integration: connect to any MCP server (filesystem, GitHub, Postgres, custom APIs) and the agent automatically discovers and uses those tools."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Custom APIs"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Users must write custom probe scripts."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Users can provide an OpenAPI spec and Synth generates an MCP server that exposes those endpoints as tools — no code required."})]})]})]}),n.jsxs("div",{className:"voc-cat-card",children:[n.jsxs("div",{className:"voc-cat-header",children:[n.jsx("span",{style:{fontSize:"18px"},children:"🏢"}),n.jsx("h3",{children:"Enterprise Readiness"})]}),n.jsxs("div",{className:"voc-cat-body",children:[n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Deployment"}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",n.jsx("span",{children:"OpenClaw"})]})}),"Self-hosted on a VPS; requires manual setup of environment variables, API keys, and config files."]}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",n.jsx("span",{children:"Synth"})]})}),"Self-hosted via Docker Compose or Kubernetes (Helm charts); one-command deployment."]})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Multi-tenancy"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Workspace-based isolation, RBAC (Admin, Operator, Viewer), and ethical walls for multi-client scenarios."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Compliance"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"None."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"SOC 2 Type II roadmap, POPIA-aligned data handling, Bring Your Own Key, open-source code for full auditability."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Dashboard"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"No dashboard; interaction via messaging apps and CLI."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Full React dashboard with real-time task streaming, heartbeat monitor, memory explorer, cost analytics, and audit logs."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Support"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Community (GitHub issues)."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Enterprise support with SLA, dedicated onboarding, and professional services."})]})]})]}),n.jsxs("div",{className:"voc-cat-card",children:[n.jsxs("div",{className:"voc-cat-header",children:[n.jsx("span",{style:{fontSize:"18px"},children:"⚡"}),n.jsx("h3",{children:"Scalability"})]}),n.jsxs("div",{className:"voc-cat-body",children:[n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Execution model"}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",n.jsx("span",{children:"OpenClaw"})]})}),"Single-process daemon."]}),n.jsxs("div",{className:"voc-cat-cell voc-cat-cell-synth",children:[n.jsx("div",{className:"voc-cat-cell-label",children:n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",n.jsx("span",{children:"Synth"})]})}),"Containerised microservices; agent tasks run in isolated Firecracker microVMs on Kubernetes."]})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Horizontal scaling"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Limited — personal tool."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Scale to thousands of concurrent tasks; the heartbeat, memory, and execution layers scale independently."})]}),n.jsxs("div",{className:"voc-cat-row",children:[n.jsx("div",{className:"voc-cat-cell voc-cat-cell-feature",children:"Model-agnostic"}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-openclaw",children:"Tied to specific LLM providers (configurable)."}),n.jsx("div",{className:"voc-cat-cell voc-cat-cell-synth",children:"Model-agnostic ModelRouter can hot-swap between API providers (Kimi, DeepSeek) and self-hosted open-source models (vLLM, Ollama) without code changes."})]})]})]})]})]})}),n.jsx("section",{className:"voc-section",children:n.jsxs("div",{className:"voc-wrap",children:[n.jsx("p",{className:"voc-section-eyebrow",children:"For investors"}),n.jsx("h2",{className:"voc-section-title",children:"Why this comparison matters to VCs"}),n.jsx("p",{className:"voc-section-sub",children:"OpenClaw is the proof-of-concept that proactive AI is the future. Synth is the enterprise platform that makes that future safe, governable, and profitable."}),n.jsxs("div",{className:"voc-vc-box",children:[n.jsxs("h3",{children:[n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Openclaw.jpg")})," ",n.jsx("span",{children:"OpenClaw"})]})," proved the market.",n.jsxs("span",{className:"voc-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"voc-logo-synth"})," ",n.jsx("span",{children:"Synth"})]})," owns it."]}),n.jsxs("div",{className:"voc-vc-points",children:[n.jsxs("div",{className:"voc-vc-point",children:[n.jsx("div",{className:"voc-vc-point-icon",children:"🚀"}),n.jsxs("div",{children:[n.jsx("h5",{children:"From PoC to platform"}),n.jsx("p",{children:"OpenClaw validated that proactive heartbeat AI is valuable. Synth took that validation and built the enterprise-grade infrastructure — governance, compliance, multi-tenancy, and end-to-end execution — that makes it deployable in regulated industries."})]})]}),n.jsxs("div",{className:"voc-vc-point",children:[n.jsx("div",{className:"voc-vc-point-icon",children:"🏢"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Enterprise buyer, enterprise budget"}),n.jsx("p",{children:"OpenClaw's buyer is a hobbyist with a VPS. Synth's buyer is a law firm, hospital, or bank with a procurement process and a compliance team. The revenue per customer is orders of magnitude larger."})]})]}),n.jsxs("div",{className:"voc-vc-point",children:[n.jsx("div",{className:"voc-vc-point-icon",children:"🔒"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Governance as a moat"}),n.jsx("p",{children:"OpenClaw has no compliance story. Synth has SOC 2 Type II roadmap, POPIA alignment, RBAC, ethical walls, and Bring Your Own Key. In regulated industries, governance is not a feature — it is the price of entry."})]})]}),n.jsxs("div",{className:"voc-vc-point",children:[n.jsx("div",{className:"voc-vc-point-icon",children:"📈"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Execution depth = retention"}),n.jsx("p",{children:"An alert tool can be replaced. An autonomous employee that has already filed the claim, drafted the brief, and updated the CRM cannot be ripped out without operational disruption. Synth's execution depth creates switching costs OpenClaw cannot match."})]})]})]}),n.jsxs("p",{className:"voc-vc-note",children:[n.jsx("strong",{children:"The acquisition thesis:"})," OpenClaw is the open-source inspiration that proved proactive AI is the future. Synth is the enterprise platform that makes that future safe, governable, and deeply integrated into the workflows of regulated industries. A strategic acquirer — whether a Salesforce, Microsoft, or African telecoms group — looking to own the agentic layer in emerging markets will find Synth's compliance, multi-tenancy, and execution depth far more valuable than a personal monitoring daemon. Synth is the platform. That is where the enterprise relationships and recurring revenue live."]})]})]})})]})]})}const Ko=[{feature:"Task execution",chatgpt:{value:"Tells you what to do",supported:"partial"},synth:{value:"Does it for you — end to end",supported:"yes"}},{feature:"Works while you're offline",chatgpt:{value:"No — needs you in the loop at every step",supported:"no"},synth:{value:"Yes — runs tasks in the background autonomously",supported:"yes"}},{feature:"Proactive alerts",chatgpt:{value:"Never — waits to be asked",supported:"no"},synth:{value:"Yes — pushes urgent tasks and flags conflicts before you notice",supported:"yes"}},{feature:"Morning briefing",chatgpt:{value:"Not available",supported:"no"},synth:{value:"Daily plan delivered to your WhatsApp before 7 AM",supported:"yes"}},{feature:"Works in WhatsApp & Telegram",chatgpt:{value:"No — requires the ChatGPT app or browser",supported:"no"},synth:{value:"Yes — works in apps you already use every day",supported:"yes"}},{feature:"Long-term memory",chatgpt:{value:"Limited — memory can be enabled but is shallow",supported:"partial"},synth:{value:"Deep — remembers your people, preferences, and patterns over months",supported:"yes"}},{feature:"Multi-step autonomous workflows",chatgpt:{value:"Sequential — one step at a time with your guidance",supported:"partial"},synth:{value:"Parallel — multiple agents execute simultaneously",supported:"yes"}},{feature:"Business tool integrations",chatgpt:{value:"Limited plugins — no deep CRM, ERP, or accounting connections",supported:"partial"},synth:{value:"Sage, Xero, Salesforce, HubSpot, Google Workspace, and more",supported:"yes"}},{feature:"Healthcare admin",chatgpt:{value:"Not designed for claims, codes, or payer rules",supported:"no"},synth:{value:"ICD-10 coding, claim denial resolution, scheduling, refill reminders",supported:"yes"}},{feature:"POPIA / local compliance (SA)",chatgpt:{value:"No local compliance framework for SA",supported:"no"},synth:{value:"POPIA-compliant, data residency in South Africa",supported:"yes"}},{feature:"Delivers finished outputs",chatgpt:{value:"Gives you pieces to assemble yourself",supported:"partial"},synth:{value:"Delivers the finished product — booked, sent, submitted, done",supported:"yes"}},{feature:"Pricing",chatgpt:{value:"From $20/month (ChatGPT Plus)",supported:"partial"},synth:{value:"From $15/month — same power, built for execution",supported:"yes"}}],fm=[{icon:"🌅",scenario:"Starting your work day",chatgpt:"You open ChatGPT, paste your schedule, and ask what to prioritise. You repeat this every morning. You're doing the thinking.",synth:"Synth sends you a briefing at 6:45 AM — meetings prepped, urgent emails flagged, your day already planned. You read, you act.",verdict:"synth"},{icon:"📊",scenario:"Competitor research for a strategy meeting",chatgpt:"ChatGPT summarises what it knows up to its training cutoff. You still need to verify everything, find current data, and format the output yourself.",synth:"Synth browses live sources, pulls pricing pages, reads press releases, builds a structured comparison doc, and posts it to your Slack — before the meeting starts.",verdict:"synth"},{icon:"💬",scenario:"Brainstorming and creative thinking",chatgpt:"ChatGPT is excellent here — fast, articulate, endlessly patient with iteration. It's the best thinking partner for open-ended exploration.",synth:"Synth can help, but for pure ideation and creative back-and-forth, ChatGPT's conversational depth is genuinely stronger.",verdict:"chatgpt"},{icon:"❌",scenario:"Resolving a denied insurance claim",chatgpt:"ChatGPT can explain what a denial code means. It cannot access your claims system, draft a compliant appeal, or track the resubmission deadline.",synth:"Synth identifies the denial reason, drafts the appeal using the payer's specific requirements, logs the deadline, and tracks the outcome — automatically.",verdict:"synth"},{icon:"✈️",scenario:"Booking a business trip",chatgpt:"ChatGPT suggests flight options based on general knowledge. It cannot search live prices, book anything, or add the trip to your calendar.",synth:"Synth searches live prices, books within your stated budget, adds flights and hotel to your calendar, and notifies you if prices drop — in one WhatsApp message.",verdict:"synth"},{icon:"💊",scenario:"Managing chronic patient prescriptions",chatgpt:"ChatGPT can explain what a drug does or describe best practices. It has no access to patient records, cannot send reminders, and was not built for clinical workflows.",synth:"Synth identifies patients due for refills, sends personalised WhatsApp reminders, and logs confirmations — POPIA-compliant and connected to your EHR system.",verdict:"synth"},{icon:"📝",scenario:"Writing and editing content",chatgpt:"ChatGPT is a world-class writing assistant — drafts, edits, rewrites, tone adjustments. For pure writing quality and conversational refinement, it remains exceptional.",synth:"Synth can write and draft, but if your goal is iteration, nuance, and creative refinement of language, ChatGPT's depth here is hard to beat.",verdict:"chatgpt"},{icon:"🤝",scenario:"Preparing for a sales meeting",chatgpt:"ChatGPT can help you structure talking points if you paste in the context. You do the research. You find the info. You assemble the brief.",synth:"Synth researches the prospect, pulls their latest news, identifies likely objections, and delivers a formatted brief to your WhatsApp an hour before the call.",verdict:"synth"}];function yd({level:c}){return c==="yes"?n.jsx("span",{className:"support-icon support-yes","aria-label":"Yes",children:"✓"}):c==="no"?n.jsx("span",{className:"support-icon support-no","aria-label":"No",children:"✗"}):n.jsx("span",{className:"support-icon support-part","aria-label":"Partial",children:"◐"})}function gm({verdict:c}){return c==="synth"?n.jsx("span",{className:"verdict-badge verdict-synth",children:"Use Synth"}):c==="chatgpt"?n.jsx("span",{className:"verdict-badge verdict-chatgpt",children:"Use ChatGPT"}):n.jsx("span",{className:"verdict-badge verdict-both",children:"Either works"})}function xm(){const[c,g]=R.useState(0),l=[{prompt:"Research our top 5 competitors and get it into Slack before the 3 PM strategy meeting.",chatgptResponse:`Sure! Here's a framework for researching your top 5 competitors:

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

All activity logged in GoodX with timestamps.`,synthLabel:"Synth connected to your EHR, identified patients, sent reminders, and logged everything. Zero manual work."}],y=l[c];return n.jsxs("div",{className:"theatre-wrap",children:[n.jsx("div",{className:"theatre-tabs",children:l.map((w,b)=>n.jsxs("button",{className:`theatre-tab ${c===b?"active":""}`,onClick:()=>g(b),children:["Task ",b+1]},b))}),n.jsxs("div",{className:"theatre-prompt",children:[n.jsx("span",{className:"theatre-prompt-label",children:"The task"}),n.jsxs("p",{className:"theatre-prompt-text",children:['"',y.prompt,'"']})]}),n.jsxs("div",{className:"theatre-split",children:[n.jsxs("div",{className:"theatre-side theatre-chatgpt",children:[n.jsx("div",{className:"theatre-side-header",children:n.jsx("span",{className:"theatre-brand theatre-brand-chatgpt",children:"ChatGPT"})}),n.jsx("div",{className:"theatre-output theatre-output-chatgpt",children:n.jsx("pre",{className:"theatre-pre",children:y.chatgptResponse})}),n.jsxs("p",{className:"theatre-verdict theatre-verdict-chatgpt",children:["⚠ ",y.chatgptLabel]})]}),n.jsx("div",{className:"theatre-vs",children:"vs"}),n.jsxs("div",{className:"theatre-side theatre-synth",children:[n.jsx("div",{className:"theatre-side-header",children:n.jsx("span",{className:"theatre-brand theatre-brand-synth",children:"Synth"})}),n.jsx("div",{className:"theatre-output theatre-output-synth",children:n.jsx("pre",{className:"theatre-pre",children:y.synthResponse})}),n.jsxs("p",{className:"theatre-verdict theatre-verdict-synth",children:["✓ ",y.synthLabel]})]})]})]})}function ym(){const[c,g]=R.useState(!1),l=c?Ko:Ko.slice(0,7);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"vs-page",children:[n.jsxs("section",{className:"vs-hero",children:[n.jsx("div",{className:"vs-eyebrow",children:"Honest comparison"}),n.jsxs("h1",{className:"vs-hero-headline",children:["ChatGPT advises.",n.jsx("br",{}),n.jsx("em",{children:"Synth executes."})]}),n.jsx("p",{className:"vs-hero-sub",children:"ChatGPT is an exceptional thinking partner. Synth is something different — an autonomous agent that works across your business, healthcare practice, or daily life without waiting to be asked."}),n.jsxs("div",{className:"vs-hero-badges",children:[n.jsx("span",{className:"vs-badge vs-badge-chatgpt",children:"ChatGPT"}),n.jsx("span",{className:"vs-badge-vs",children:"VS"}),n.jsx("span",{className:"vs-badge vs-badge-synth",children:"Synth"})]}),n.jsxs("div",{className:"brand-compare",children:[n.jsxs("div",{className:"brand-card",children:[n.jsx("img",{src:"/logo.png",alt:"Synth logo"}),n.jsxs("div",{children:[n.jsx("div",{className:"brand-name",children:"synth"}),n.jsx("div",{className:"brand-name small",children:"Autonomous agent"})]})]}),n.jsxs("div",{className:"brand-card",children:[n.jsx("img",{src:"/compare%20images/Chatgpt.jpg",alt:"ChatGPT logo"}),n.jsxs("div",{children:[n.jsx("div",{className:"brand-name",children:"ChatGPT"}),n.jsx("div",{className:"brand-name small",children:"Assistant & playground"})]})]})]})]}),n.jsx("section",{className:"vs-section",children:n.jsxs("div",{className:"vs-wrap",children:[n.jsx("p",{className:"vs-section-eyebrow",children:"See the difference"}),n.jsx("h2",{className:"vs-section-title",children:"Same task. Completely different outcome."}),n.jsx("p",{className:"vs-section-sub",children:"The gap between the two isn't capability — it's execution. ChatGPT tells you how. Synth handles it."}),n.jsx(xm,{})]})}),n.jsx("section",{className:"vs-section",children:n.jsxs("div",{className:"vs-wrap",children:[n.jsx("p",{className:"vs-section-eyebrow",children:"Feature comparison"}),n.jsx("h2",{className:"vs-section-title",children:"What each tool actually does"}),n.jsx("p",{className:"vs-section-sub",children:"A fair, feature-by-feature comparison. We included two categories where ChatGPT genuinely wins — because honesty is how you build trust."}),n.jsxs("div",{className:"comp-table",children:[n.jsxs("div",{className:"comp-table-head",children:[n.jsx("div",{className:"comp-th comp-th-feature",children:"Feature"}),n.jsx("div",{className:"comp-th comp-th-chatgpt",children:"ChatGPT"}),n.jsx("div",{className:"comp-th comp-th-synth",children:"Synth"})]}),l.map((y,w)=>n.jsxs("div",{className:"comp-row",children:[n.jsx("div",{className:"comp-cell comp-cell-feature",children:y.feature}),n.jsxs("div",{className:"comp-cell comp-cell-chatgpt",children:[n.jsx(yd,{level:y.chatgpt.supported}),y.chatgpt.value]}),n.jsxs("div",{className:"comp-cell comp-cell-synth",children:[n.jsx(yd,{level:y.synth.supported}),y.synth.value]})]},w))]}),!c&&n.jsx("div",{className:"comp-show-more",children:n.jsxs("button",{className:"comp-show-more-btn",onClick:()=>g(!0),children:["Show all ",Ko.length," features ↓"]})})]})}),n.jsx("section",{className:"vs-section",children:n.jsxs("div",{className:"vs-wrap",children:[n.jsx("p",{className:"vs-section-eyebrow",children:"When to use each"}),n.jsx("h2",{className:"vs-section-title",children:"The honest answer by scenario"}),n.jsx("p",{className:"vs-section-sub",children:"We'll tell you when ChatGPT is the better choice. We'd rather be useful than win an argument."}),n.jsx("div",{className:"use-grid",children:fm.map((y,w)=>n.jsxs("div",{className:"use-card",children:[n.jsxs("div",{className:"use-card-top",children:[n.jsxs("div",{className:"use-scenario",children:[n.jsx("span",{className:"use-icon",children:y.icon}),y.scenario]}),n.jsx(gm,{verdict:y.verdict})]}),n.jsxs("div",{className:"use-comparison",children:[n.jsxs("div",{className:"use-col use-col-chatgpt",children:[n.jsx("p",{className:"use-col-label",children:"ChatGPT"}),n.jsx("p",{className:"use-col-text",children:y.chatgpt})]}),n.jsxs("div",{className:"use-col use-col-synth",children:[n.jsx("p",{className:"use-col-label",children:"Synth"}),n.jsx("p",{className:"use-col-text",children:y.synth})]})]})]},w))})]})})]})]})}const vd=[{category:"Fundamentals",feature:"What it actually is",trixta:{value:"Infrastructure layer — a 'DeCloud' for building and running agentic systems",supported:"partial"},synth:{value:"agent designed to independently execute end-to-end tasks like multi-source research and web-browsing for real people and businesses",supported:"yes"}},{category:"Fundamentals",feature:"Who it's built for",trixta:{value:"Developers and enterprise engineering teams building agentic systems from scratch",supported:"partial"},synth:{value:"Professionals, business teams, and healthcare operators who need work done now",supported:"yes"}},{category:"Fundamentals",feature:"Time to first value",trixta:{value:"Weeks to months — requires architecture design, development, and deployment",supported:"no"},synth:{value:"Under 3 minutes — connect your tools, start messaging",supported:"yes"}},{category:"Fundamentals",feature:"Some technical knowledge required",trixta:{value:"High — primitives, runtimes, and distributed systems concepts required",supported:"no"},synth:{value:"None — if you can send a WhatsApp message, you can use Synth",supported:"yes"}},{category:"Execution",feature:"Autonomous task execution",trixta:{value:"Provides the infrastructure for others to build autonomous execution — not out of the box",supported:"partial"},synth:{value:"Built in — give Synth a task and it executes every step without you",supported:"yes"}},{category:"Execution",feature:"Proactive alerts & morning briefing",trixta:{value:"Not a feature — would need to be custom-built on top of Trixta's infrastructure",supported:"no"},synth:{value:"Daily briefing delivered to WhatsApp before 7 AM — zero setup required",supported:"yes"}},{category:"Execution",feature:"Works in WhatsApp & Telegram",trixta:{value:"No — requires custom front-end development to deliver any user-facing output",supported:"no"},synth:{value:"Native — Synth lives in the apps your team already uses every day",supported:"yes"}},{category:"Execution",feature:"Long-term memory & personalisation",trixta:{value:"Possible to build via Trixta primitives — but requires significant engineering effort",supported:"partial"},synth:{value:"Built in — Synth learns your preferences, patterns, and relationships over time",supported:"yes"}},{category:"Verticals",feature:"Marketing workflows",trixta:{value:"Infrastructure only — you must build campaign and creative workflows yourself",supported:"partial"},synth:{value:"Pre-built — campaign generation, competitor research, content, and analytics ready to use",supported:"yes"}},{category:"Verticals",feature:"Sales automation",trixta:{value:"No native sales tools — engineering teams must build from primitives",supported:"no"},synth:{value:"Lead enrichment, outreach drafting, deal briefs, and CRM sync — out of the box",supported:"yes"}},{category:"Verticals",feature:"Finance & analysis",trixta:{value:"No native financial capabilities — custom development required for each use case",supported:"no"},synth:{value:"Live market data, financial modelling, report collection, and portfolio monitoring",supported:"yes"}},{category:"Verticals",feature:"Healthcare admin",trixta:{value:"Not designed for healthcare — no ICD-10, payer rules, or clinical workflow support",supported:"no"},synth:{value:"ICD-10/CPT/HCPCS coding, claim denial resolution, scheduling, refill reminders — POPIA-compliant",supported:"yes"}},{category:"Verticals",feature:"Personal AI assistant",trixta:{value:"Infrastructure only — no personal assistant capabilities without custom development",supported:"no"},synth:{value:"Full personal chief of staff — day planning, scheduling, travel, communications via WhatsApp",supported:"yes"}},{category:"Integrations",feature:"Business tool connections",trixta:{value:"Integrations must be custom-built using Trixta's wrapper and Space primitives",supported:"partial"},synth:{value:"Sage, Xero, HubSpot, Salesforce, Google Workspace, Microsoft 365 — native connectors",supported:"yes"}},{category:"Integrations",feature:"South African tools (Sage, GoodX, SARS)",trixta:{value:"No local market integrations — global infrastructure, no SA-specific connectors",supported:"no"},synth:{value:"Sage, GoodX, SA medical schemes, SARS eFiling — built for the local market",supported:"yes"}},{category:"Integrations",feature:"Custom MCP / API access",trixta:{value:"Yes — Trixta's core architecture is built for custom integration and extension",supported:"yes"},synth:{value:"Yes — custom MCP servers and REST API available ",supported:"yes"}},{category:"Pricing",feature:"Entry price",trixta:{value:"$60/month for a team of less than 10, $200/month/10-50 heads, all billed  annually",supported:"no"},synth:{value:"$15/month per seat — accessible to individuals, SMEs, and enterprise alike",supported:"yes"}},{category:"Pricing",feature:"Healthcare / enterprise pricing",trixta:{value:"Custom enterprise contracts — typically $10,000+ per month at scale",supported:"no"},synth:{value:"$499/facility/month — purpose-built for SA healthcare, POPIA-compliant",supported:"yes"}},{category:"Pricing",feature:"Free tier or trial",trixta:{value:"available —  30-minute, guided, AI-driven onboarding and strategy session",supported:"no"},synth:{value:"Free during beta — no credit card required",supported:"yes"}},{category:"Pricing",feature:"Pricing transparency",trixta:{value:"  30-minute, guided, AI-driven onboarding and strategy session priced annually, pricing not published on website",supported:"yes"},synth:{value:"$15, $35, $195/month. Healthcare from $499/facility",supported:"yes"}}],vm=[{sector:"Marketing & Advertising",icon:"📈",trixta:"Infrastructure only — no marketing tools. Teams must build campaign workflows from scratch using Trixta primitives.",synth:"Campaign generation, competitor intelligence, social content, email sequences, and marketing analytics — ready to use immediately.",winner:"synth"},{sector:"Sales",icon:"🤝",trixta:"No native sales capabilities. CRM integration and outreach automation require custom development.",synth:"Lead enrichment, personalised outreach, deal briefs, CRM sync (Salesforce, HubSpot, Pipedrive) — out of the box.",winner:"synth"},{sector:"Finance",icon:"💹",trixta:"No financial tools. Market data, modelling, and reporting workflows must be custom-engineered.",synth:"Live market analysis, DCF modelling, report collection for hundreds of firms, portfolio monitoring — delivered autonomously.",winner:"synth"},{sector:"Product Management",icon:"🧩",trixta:"No product tools. PRD generation, competitive mapping, and roadmapping not available without custom builds.",synth:"Strategy docs, roadmaps, PRDs, market segmentation, competitive maps — drafted, researched, and kept current.",winner:"synth"},{sector:"Healthcare Admin",icon:"🏥",trixta:"Not designed for healthcare. No ICD-10, CPT, payer rules, EHR integration, or POPIA compliance.",synth:"Claim denial resolution, ICD-10/CPT coding, payer rule monitoring, appointment scheduling, refill reminders — POPIA-compliant.",winner:"synth"},{sector:"Personal Productivity",icon:"🙋",trixta:"Not a personal tool. Trixta requires developers to build user-facing applications — individuals cannot use it directly.",synth:"Daily briefing, proactive alerts, autonomous task execution, long-term memory — via WhatsApp. No app download.",winner:"synth"},{sector:"Developer / Infrastructure",icon:"⚙️",trixta:"Trixta's home turf. Deep infrastructure primitives, composable runtimes, and the DeCloud architecture are genuinely impressive for engineering-led organisations.",synth:"Custom MCP servers and REST API available — but Synth is an application layer, not an infrastructure platform. For pure infrastructure needs, Trixta goes deeper.",winner:"trixta"}];function wd({level:c}){return c==="yes"?n.jsx("span",{className:"vt-support vt-support-yes","aria-label":"Yes",children:"✓"}):c==="no"?n.jsx("span",{className:"vt-support vt-support-no","aria-label":"No",children:"✗"}):n.jsx("span",{className:"vt-support vt-support-part","aria-label":"Partial",children:"◐"})}function wm(){const[c,g]=R.useState(!1),[l,y]=R.useState("All"),w=["All",...Array.from(new Set(vd.map(v=>v.category)))],b=vd.filter(v=>l==="All"||v.category===l),M=c?b:b.slice(0,8);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"vt-page",children:[n.jsxs("section",{className:"vt-hero",children:[n.jsx("div",{className:"vt-eyebrow",children:"Honest comparison"}),n.jsxs("h1",{className:"vt-hero-headline",children:["Trixta builds the roads.",n.jsx("br",{}),n.jsx("em",{children:"Synth drives the car."})]}),n.jsx("p",{className:"vt-hero-sub",children:"Trixta is impressive infrastructure for engineering teams building agentic systems. Synth is the product those teams wish already existed — autonomous execution for real business work, available in WhatsApp from day one."}),n.jsx("div",{className:"vt-hero-badges",children:n.jsxs("div",{className:"vt-brand-hero",children:[n.jsx("div",{className:"vt-brand-inline","aria-hidden":!0,children:n.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})}),n.jsx("span",{className:"vt-badge-vs",children:"VS"}),n.jsx("div",{className:"vt-brand-inline","aria-hidden":!0,children:n.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})})]})}),n.jsxs("div",{className:"vt-tldr",children:[n.jsxs("div",{className:"vt-tldr-col vt-tldr-col-trixta",children:[n.jsx("h4",{children:n.jsxs("span",{className:"vt-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"}),n.jsx("span",{children:"Trixta in plain English"})]})}),n.jsxs("ul",{children:[n.jsx("li",{children:"Enterprise infrastructure for building agentic systems from code"}),n.jsx("li",{children:"Targets developers and engineering organisations"}),n.jsx("li",{children:"Requires weeks of development before any business value"}),n.jsx("li",{children:"No native healthcare, sales, finance, or personal assistant capabilities"}),n.jsx("li",{children:"No South African market integrations"})]})]}),n.jsxs("div",{className:"vt-tldr-col vt-tldr-col-synth",children:[n.jsx("h4",{children:"Synth in plain English"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Autonomous AI agent that executes real business tasks end-to-end"}),n.jsx("li",{children:"Built for professionals, business teams, and healthcare operators"}),n.jsx("li",{children:"From $15/month — transparent, publicly listed pricing"}),n.jsx("li",{children:"Live in under 3 minutes — no development required"}),n.jsx("li",{children:"Marketing, Sales, Finance, Product, Healthcare, Personal — ready to use"}),n.jsx("li",{children:"Built for South Africa — Sage, GoodX, SA medical schemes, SARS eFiling"})]})]})]})]}),n.jsx("section",{className:"vt-section",children:n.jsxs("div",{className:"vt-wrap",children:[n.jsx("p",{className:"vt-section-eyebrow",children:"Sector by sector"}),n.jsx("h2",{className:"vt-section-title",children:"What each platform actually covers"}),n.jsx("p",{className:"vt-section-sub",children:"Trixta focuses on one sector: developer infrastructure. Synth was built to serve six — and to serve them without engineering overhead."}),n.jsx("div",{className:"vt-sector-grid",children:vm.map((v,A)=>n.jsxs("div",{className:"vt-sector-card",children:[n.jsxs("div",{className:"vt-sector-header",children:[n.jsxs("div",{className:"vt-sector-name",children:[n.jsx("span",{className:"vt-sector-icon",children:v.icon}),v.sector]}),n.jsx("span",{className:`vt-sector-winner ${v.winner==="synth"?"vt-winner-synth":v.winner==="trixta"?"vt-winner-trixta":"vt-winner-both"}`,children:v.winner==="synth"?n.jsxs("span",{className:"vt-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})," Synth wins"]}):v.winner==="trixta"?n.jsxs("span",{className:"vt-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})," wins"]}):"Both work"})]}),n.jsxs("div",{className:"vt-sector-body",children:[n.jsxs("div",{className:"vt-sector-col vt-sector-col-trixta",children:[n.jsxs("p",{className:"vt-sector-col-label vt-brand-inline",children:[n.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})," ",n.jsx("span",{children:"Trixta"})]}),n.jsx("p",{className:"vt-sector-col-text",children:v.trixta})]}),n.jsxs("div",{className:"vt-sector-col vt-sector-col-synth",children:[n.jsxs("p",{className:"vt-sector-col-label vt-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})," ",n.jsx("span",{children:"Synth"})]}),n.jsx("p",{className:"vt-sector-col-text",children:v.synth})]})]})]},A))})]})}),n.jsx("section",{className:"vt-section",children:n.jsxs("div",{className:"vt-wrap",children:[n.jsx("p",{className:"vt-section-eyebrow",children:"Feature comparison"}),n.jsx("h2",{className:"vt-section-title",children:"Feature by feature, honestly"}),n.jsx("p",{className:"vt-section-sub",children:"We include the one category where Trixta genuinely wins — pure infrastructure depth. Everything else tells a clear story."}),n.jsx("div",{className:"vt-filter-tabs",children:w.map(v=>n.jsx("button",{className:`vt-filter-tab ${l===v?"active":""}`,onClick:()=>{y(v),g(!1)},children:v},v))}),n.jsxs("div",{className:"vt-table",children:[n.jsxs("div",{className:"vt-table-head",children:[n.jsx("div",{className:"vt-th vt-th-feature",children:"Feature"}),n.jsx("div",{className:"vt-th vt-th-trixta",children:n.jsx("img",{src:encodeURI("/compare images/Trixta.jpg"),alt:"Trixta",className:"vt-mini-logo"})}),n.jsx("div",{className:"vt-th vt-th-synth",children:n.jsx("img",{src:"/logo.png",alt:"Synth",className:"vt-logo-synth"})})]}),M.map((v,A)=>{const L=b[A-1],G=!L||L.category!==v.category;return n.jsxs("div",{children:[G&&l==="All"&&n.jsx("div",{className:"vt-category-row",children:v.category}),n.jsxs("div",{className:"vt-row",children:[n.jsx("div",{className:"vt-cell vt-cell-feature",children:v.feature}),n.jsxs("div",{className:"vt-cell vt-cell-trixta",children:[n.jsx(wd,{level:v.trixta.supported}),v.trixta.value]}),n.jsxs("div",{className:"vt-cell vt-cell-synth",children:[n.jsx(wd,{level:v.synth.supported}),v.synth.value]})]})]},A)})]}),!c&&b.length>8&&n.jsx("div",{className:"vt-show-more",children:n.jsxs("button",{className:"vt-show-more-btn",onClick:()=>g(!0),children:["Show all ",b.length," features ↓"]})})]})}),n.jsx("section",{className:"vt-section",children:n.jsxs("div",{className:"vt-wrap",children:[n.jsx("p",{className:"vt-section-eyebrow",children:"For investors"}),n.jsx("h2",{className:"vt-section-title",children:"Why this comparison matters to VCs"}),n.jsx("p",{className:"vt-section-sub",children:"Trixta and Synth are not competitors — they're at different layers of the stack. That's the opportunity."}),n.jsxs("div",{className:"vt-vc-box",children:[n.jsx("h3",{children:"Synth occupies the layer Trixta cannot reach"}),n.jsxs("div",{className:"vt-vc-points",children:[n.jsxs("div",{className:"vt-vc-point",children:[n.jsx("div",{className:"vt-vc-point-icon",children:"🌍"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Underserved market"}),n.jsx("p",{children:"South Africa and sub-Saharan Africa have no native AI orchestration platform. Synth is built for this market — local tools, local compliance, local pricing."})]})]}),n.jsxs("div",{className:"vt-vc-point",children:[n.jsx("div",{className:"vt-vc-point-icon",children:"📱"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Distribution moat"}),n.jsx("p",{children:"WhatsApp has 90%+ penetration in South Africa. Synth delivers AI through the channel people already use — Trixta cannot compete here."})]})]}),n.jsxs("div",{className:"vt-vc-point",children:[n.jsx("div",{className:"vt-vc-point-icon",children:"🏥"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Healthcare vertical"}),n.jsx("p",{children:"No global AI platform has built a POPIA-compliant healthcare admin layer for SA medical schemes and EHR systems. Synth owns this by default."})]})]}),n.jsxs("div",{className:"vt-vc-point",children:[n.jsx("div",{className:"vt-vc-point-icon",children:"💰"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Accessible price point"}),n.jsx("p",{children:"At $15/month, Synth can acquire customers at 100x the volume of enterprise infrastructure platforms. Higher volume, faster growth, stronger network effects."})]})]})]}),n.jsxs("p",{className:"vt-vc-note",children:[n.jsx("strong",{children:"The acquisition thesis:"})," Trixta is building infrastructure that enterprise teams need to build what Synth already is. A strategic acquirer — whether a Salesforce, Microsoft, or African telecoms group — looking to own the agentic layer in emerging markets will find Synth's distribution, verticals, and local market depth far more valuable than another infrastructure play. Synth is the end product. That's where the customer relationships live."]})]})]})})]})]})}const bd=[{category:"Fundamentals",feature:"What it actually is",nyla:{value:"Consumer health app — symptom checker, doctor finder, medication tracker for patients",supported:"yes"},synth:{value:"B2B AI operations platform — autonomous task execution across six business verticals",supported:"yes"}},{category:"Fundamentals",feature:"Who it serves",nyla:{value:"Individual patients seeking healthcare information and appointments",supported:"yes"},synth:{value:"Healthcare administrators, finance teams, sales teams, marketing teams, and individual professionals",supported:"yes"}},{category:"Fundamentals",feature:"Primary interface",nyla:{value:"Mobile app (Google Play Store) — patient-facing consumer experience",supported:"yes"},synth:{value:"WhatsApp & Telegram — works inside the apps teams already use every day",supported:"yes"}},{category:"Fundamentals",feature:"Time to first value",nyla:{value:"Minutes to download, but requires patient adoption before institutional value materialises",supported:"partial"},synth:{value:"Under 3 minutes — connect your tools, start messaging, see immediate operational impact",supported:"yes"}},{category:"Healthcare",feature:"Patient symptom checking & doctor booking",nyla:{value:"Core feature — AI-powered symptom checker, appointment booking, medication ordering",supported:"yes"},synth:{value:"Not a consumer feature — Synth serves the operations side, not the patient front door",supported:"no"}},{category:"Healthcare",feature:"Medical billing & claim denial resolution",nyla:{value:"Not available — Nyla AI is patient-facing; no claim coding, submission, or appeal workflows",supported:"no"},synth:{value:"Built in — ICD-10/CPT/HCPCS coding, claim submission, denial tracking, and appeals — POPIA-compliant",supported:"yes"}},{category:"Healthcare",feature:"Revenue recovery for hospitals",nyla:{value:"No institutional revenue recovery tools — consumer adoption must come first",supported:"no"},synth:{value:"Direct revenue impact — built to recover the R2.3 billion lost annually to unresolved claim denials in SA hospitals",supported:"yes"}},{category:"Healthcare",feature:"EMR & hospital dashboard",nyla:{value:"Beta feature — AI-powered EMR and patient/staff management dashboards for hospitals",supported:"partial"},synth:{value:"Not an EMR — Synth integrates with existing EHR systems and adds an intelligent operations layer on top",supported:"partial"}},{category:"Healthcare",feature:"POPIA compliance",nyla:{value:"Not explicitly stated — consumer health data handling standards unclear",supported:"partial"},synth:{value:"Built for South African compliance from day one — POPIA-aligned data handling and audit trails",supported:"yes"}},{category:"Beyond Healthcare",feature:"Marketing workflows",nyla:{value:"No marketing tools — healthcare-only scope",supported:"no"},synth:{value:"Pre-built — campaign generation, competitor research, content, and analytics ready to use",supported:"yes"}},{category:"Beyond Healthcare",feature:"Sales automation",nyla:{value:"No sales capabilities — patient acquisition is organic, not systematic outreach",supported:"no"},synth:{value:"Lead enrichment, outreach drafting, deal briefs, and CRM sync — out of the box",supported:"yes"}},{category:"Beyond Healthcare",feature:"Finance & analysis",nyla:{value:"No financial tools — no market data, modelling, or business reporting",supported:"no"},synth:{value:"Live market data, financial modelling, report collection, and portfolio monitoring",supported:"yes"}},{category:"Beyond Healthcare",feature:"Personal AI assistant",nyla:{value:"Personal health assistant only — no general productivity or scheduling support",supported:"partial"},synth:{value:"Full personal chief of staff — day planning, scheduling, travel, communications via WhatsApp",supported:"yes"}},{category:"Integrations",feature:"South African healthcare tools",nyla:{value:"Hospital and pharmacy network — ecosystem approach within healthcare",supported:"partial"},synth:{value:"Sage, GoodX, SA medical schemes, SARS eFiling — built for the local market across all verticals",supported:"yes"}},{category:"Integrations",feature:"Business tool connections",nyla:{value:"Healthcare-specific only — no general business tool connectors",supported:"no"},synth:{value:"Sage, Xero, HubSpot, Salesforce, Google Workspace, Microsoft 365 — native connectors",supported:"yes"}},{category:"Integrations",feature:"Custom MCP / API access",nyla:{value:"Not mentioned — closed ecosystem approach",supported:"no"},synth:{value:"Yes — custom MCP servers and REST API available for enterprise integration",supported:"yes"}},{category:"Pricing",feature:"Entry price",nyla:{value:"Subscription plans for individuals, hospitals, and pharmacies — pricing not publicly listed",supported:"partial"},synth:{value:"$15/month per seat — transparent, publicly listed pricing",supported:"yes"}},{category:"Pricing",feature:"Healthcare / enterprise pricing",nyla:{value:"Custom hospital/pharmacy plans — pricing not disclosed",supported:"partial"},synth:{value:"$499/facility/month — purpose-built for SA healthcare, POPIA-compliant",supported:"yes"}},{category:"Pricing",feature:"Free tier or trial",nyla:{value:"Beta available on Google Play Store — subscription required for full features",supported:"partial"},synth:{value:"Free during beta — no credit card required",supported:"yes"}},{category:"Pricing",feature:"Pricing transparency",nyla:{value:"Pricing not published on website — contact sales for hospital/pharmacy plans",supported:"no"},synth:{value:"$15, $35, $195/month. Healthcare from $499/facility — all listed publicly",supported:"yes"}}],bm=[{sector:"Patient Health & Wellness",icon:"🩺",nyla:"Nyla AI's core strength. AI symptom checking, doctor booking, medication tracking, and wellness tools — built for the individual patient.",synth:"Not a consumer health app. Synth does not compete here — it serves the operations layer that hospitals use after the patient leaves.",winner:"nyla"},{sector:"Healthcare Admin & Revenue",icon:"🏥",nyla:"No claim denial resolution, no ICD-10/CPT coding, no revenue recovery. Nyla AI is the front door; it does not handle what happens after the patient walks out.",synth:"Claim denial resolution, ICD-10/CPT/HCPCS coding, payer rule monitoring, appointment scheduling, refill reminders — POPIA-compliant. Built to recover the R2.3 billion lost annually to unresolved claim denials.",winner:"synth"},{sector:"Marketing",icon:"📈",nyla:"No marketing tools. Nyla AI is healthcare-only and does not serve marketing teams.",synth:"Campaign generation, competitor intelligence, social content, email sequences, and marketing analytics — ready to use immediately.",winner:"synth"},{sector:"Sales",icon:"🤝",nyla:"No sales capabilities. CRM integration and outreach automation are outside Nyla AI's scope.",synth:"Lead enrichment, personalised outreach, deal briefs, CRM sync (Salesforce, HubSpot, Pipedrive) — out of the box.",winner:"synth"},{sector:"Finance",icon:"💹",nyla:"No financial tools. Market data, modelling, and reporting are not part of the Nyla AI ecosystem.",synth:"Live market analysis, DCF modelling, report collection for hundreds of firms, portfolio monitoring — delivered autonomously.",winner:"synth"},{sector:"Personal Productivity",icon:"🙋",nyla:"Personal health tracking only — symptom journals, medication reminders, wellness goals. No general productivity support.",synth:"Daily briefing, proactive alerts, autonomous task execution, long-term memory — via WhatsApp. No app download. A true personal chief of staff.",winner:"synth"}];function jd({level:c}){return c==="yes"?n.jsx("span",{className:"vn-support vn-support-yes","aria-label":"Yes",children:"✓"}):c==="no"?n.jsx("span",{className:"vn-support vn-support-no","aria-label":"No",children:"✗"}):n.jsx("span",{className:"vn-support vn-support-part","aria-label":"Partial",children:"◐"})}function jm(){const[c,g]=R.useState(!1),[l,y]=R.useState("All"),w=["All",...Array.from(new Set(bd.map(v=>v.category)))],b=bd.filter(v=>l==="All"||v.category===l),M=c?b:b.slice(0,8);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"vn-page",children:[n.jsxs("section",{className:"vn-hero",children:[n.jsx("div",{className:"vn-eyebrow",children:"Platform comparison"}),n.jsxs("h1",{className:"vn-hero-headline",children:["Nyla AI built the front door",n.jsx("br",{}),"to African healthcare.",n.jsx("br",{}),n.jsx("em",{children:"Synth built what runs behind it."})]}),n.jsx("p",{className:"vn-hero-sub",children:"Nyla AI is a genuinely useful consumer health app — symptom checking, doctor booking, medication tracking. It is closer to a better Zocdoc than it is to an autonomous operations platform. Synth is the B2B infrastructure layer that makes products like Nyla AI possible — and covers five other verticals where Nyla AI does not compete at all."}),n.jsx("div",{className:"vn-hero-badges",children:n.jsxs("div",{className:"vn-brand-hero",children:[n.jsx("div",{className:"vn-brand-inline","aria-hidden":!0,children:n.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"})}),n.jsx("span",{className:"vn-badge-vs",children:"VS"}),n.jsx("div",{className:"vn-brand-inline","aria-hidden":!0,children:n.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"})})]})}),n.jsxs("div",{className:"vn-stack-callout",children:[n.jsx("h3",{children:"This is not a competition. It is a stack."}),n.jsxs("p",{children:["Nyla AI operates at the ",n.jsx("strong",{children:"consumer layer"})," — the front door patients walk through. Synth operates at the ",n.jsx("strong",{children:"operations layer"}),' — the engine that processes claims, manages denials, codes procedures, and ensures revenue actually flows. These are not two companies solving "different problems." They are two companies operating at completely different layers of the same healthcare value chain. Synth is the infrastructure that makes the front door financially sustainable.']})]}),n.jsxs("div",{className:"vn-tldr",children:[n.jsxs("div",{className:"vn-tldr-col vn-tldr-col-nyla",children:[n.jsx("h4",{children:n.jsxs("span",{className:"vn-brand-inline",children:[n.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"}),n.jsx("span",{children:"Nyla AI — Consumer Health App"})]})}),n.jsxs("ul",{children:[n.jsx("li",{children:"Patient-facing symptom checker and doctor finder"}),n.jsx("li",{children:"Medication tracking and wellness tools"}),n.jsx("li",{children:"Appointment booking for individuals"}),n.jsx("li",{children:"Hospital EMR dashboards (beta)"}),n.jsx("li",{children:"One vertical: healthcare only"}),n.jsx("li",{children:"Requires consumer adoption before institutional value"})]})]}),n.jsxs("div",{className:"vn-tldr-col vn-tldr-col-synth",children:[n.jsx("h4",{children:n.jsxs("span",{className:"vn-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"}),n.jsx("span",{children:"Synth — B2B AI Operations Platform"})]})}),n.jsxs("ul",{children:[n.jsx("li",{children:"Autonomous task execution across six business verticals"}),n.jsx("li",{children:"Healthcare admin: claim denials, ICD-10/CPT coding, revenue recovery"}),n.jsx("li",{children:"Marketing, Sales, Finance, Product, Personal — all ready to use"}),n.jsx("li",{children:"Live in under 3 minutes via WhatsApp — no app download"}),n.jsx("li",{children:"Built for South Africa: Sage, GoodX, SA medical schemes, SARS eFiling"}),n.jsx("li",{children:"POPIA-compliant from day one"}),n.jsx("li",{children:"From $15/month — transparent, publicly listed pricing"})]})]})]})]}),n.jsx("section",{className:"vn-section",children:n.jsxs("div",{className:"vn-wrap",children:[n.jsx("p",{className:"vn-section-eyebrow",children:"The invisible handoff"}),n.jsx("h2",{className:"vn-section-title",children:"What happens after the patient leaves?"}),n.jsx("p",{className:"vn-section-sub",children:"Nyla AI's job ends when the patient walks out of the clinic. Synth's job starts. That handoff is where billions in revenue are lost — and recovered."}),n.jsxs("div",{className:"vn-handoff",children:[n.jsx("h3",{children:"The moment of value creation"}),n.jsx("p",{className:"vn-handoff-sub",children:"Nyla AI books the appointment. Synth ensures the hospital gets paid."}),n.jsxs("div",{className:"vn-handoff-grid",children:[n.jsxs("div",{className:"vn-handoff-col vn-handoff-col-nyla",children:[n.jsx("h4",{children:n.jsxs("span",{className:"vn-brand-inline",children:[n.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"})," ",n.jsx("span",{children:"Nyla AI — Before the visit"})]})}),n.jsxs("div",{className:"vn-handoff-step",children:[n.jsx("p",{className:"vn-handoff-step-label",children:"Step 1"}),n.jsx("p",{className:"vn-handoff-step-text",children:"Patient checks symptoms using AI-powered chat"})]}),n.jsxs("div",{className:"vn-handoff-step",children:[n.jsx("p",{className:"vn-handoff-step-label",children:"Step 2"}),n.jsx("p",{className:"vn-handoff-step-text",children:"Patient books appointment with a doctor through the app"})]}),n.jsxs("div",{className:"vn-handoff-step",children:[n.jsx("p",{className:"vn-handoff-step-label",children:"Step 3"}),n.jsx("p",{className:"vn-handoff-step-text",children:"Patient arrives at clinic, receives care"})]}),n.jsxs("div",{className:"vn-handoff-step",children:[n.jsx("p",{className:"vn-handoff-step-label",children:"Step 4"}),n.jsx("p",{className:"vn-handoff-step-text",children:"Patient walks out. Nyla AI's job is done."})]})]}),n.jsx("div",{className:"vn-handoff-arrow",children:"→"}),n.jsxs("div",{className:"vn-handoff-col vn-handoff-col-synth",children:[n.jsx("h4",{children:n.jsxs("span",{className:"vn-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"})," ",n.jsx("span",{children:"Synth — After the visit"})]})}),n.jsxs("div",{className:"vn-handoff-step",children:[n.jsx("p",{className:"vn-handoff-step-label",children:"Step 1"}),n.jsx("p",{className:"vn-handoff-step-text",children:"Procedure is automatically coded (ICD-10/CPT/HCPCS)"})]}),n.jsxs("div",{className:"vn-handoff-step",children:[n.jsx("p",{className:"vn-handoff-step-label",children:"Step 2"}),n.jsx("p",{className:"vn-handoff-step-text",children:"Claim is submitted to the medical scheme electronically"})]}),n.jsxs("div",{className:"vn-handoff-step",children:[n.jsx("p",{className:"vn-handoff-step-label",children:"Step 3"}),n.jsx("p",{className:"vn-handoff-step-text",children:"Claim is tracked; denials are flagged automatically"})]}),n.jsxs("div",{className:"vn-handoff-step",children:[n.jsx("p",{className:"vn-handoff-step-label",children:"Step 4"}),n.jsx("p",{className:"vn-handoff-step-text",children:"Denied claims are appealed with corrected coding — revenue recovered"})]})]})]}),n.jsx("div",{className:"vn-handoff-cta",children:n.jsxs("p",{children:[n.jsx("strong",{children:"South African hospitals lose an estimated R2.3 billion annually"})," to unresolved claim denials. Nyla AI cannot touch that problem — its entire product philosophy is consumer-facing. Synth's healthcare module is built specifically to recover that revenue."]})})]})]})}),n.jsx("section",{className:"vn-section",children:n.jsxs("div",{className:"vn-wrap",children:[n.jsx("p",{className:"vn-section-eyebrow",children:"Sector by sector"}),n.jsx("h2",{className:"vn-section-title",children:"One vertical vs. six. That is the real gap."}),n.jsx("p",{className:"vn-section-sub",children:"Nyla AI does one thing well: patient health. Synth does that same hospital's admin, plus its marketing, sales, finance, and procurement — all through WhatsApp."}),n.jsx("div",{className:"vn-sector-grid",children:bm.map((v,A)=>n.jsxs("div",{className:"vn-sector-card",children:[n.jsxs("div",{className:"vn-sector-header",children:[n.jsxs("div",{className:"vn-sector-name",children:[n.jsx("span",{className:"vn-sector-icon",children:v.icon}),v.sector]}),n.jsx("span",{className:`vn-sector-winner ${v.winner==="synth"?"vn-winner-synth":v.winner==="nyla"?"vn-winner-nyla":"vn-winner-both"}`,children:v.winner==="synth"?n.jsxs("span",{className:"vn-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"})," ",n.jsx("span",{children:"Synth wins"})]}):v.winner==="nyla"?n.jsxs("span",{className:"vn-brand-inline",children:[n.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"})," ",n.jsx("span",{children:"Nyla AI wins"})]}):"Both work"})]}),n.jsxs("div",{className:"vn-sector-body",children:[n.jsxs("div",{className:"vn-sector-col vn-sector-col-nyla",children:[n.jsxs("p",{className:"vn-sector-col-label vn-brand-inline",children:[n.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"})," ",n.jsx("span",{children:"Nyla AI"})]}),n.jsx("p",{className:"vn-sector-col-text",children:v.nyla})]}),n.jsxs("div",{className:"vn-sector-col vn-sector-col-synth",children:[n.jsxs("p",{className:"vn-sector-col-label vn-brand-inline",children:[n.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"})," ",n.jsx("span",{children:"Synth"})]}),n.jsx("p",{className:"vn-sector-col-text",children:v.synth})]})]})]},A))})]})}),n.jsx("section",{className:"vn-section",children:n.jsxs("div",{className:"vn-wrap",children:[n.jsx("p",{className:"vn-section-eyebrow",children:"The lock-in story"}),n.jsx("h2",{className:"vn-section-title",children:"Healthcare is just one of six verticals"}),n.jsx("p",{className:"vn-section-sub",children:"A hospital administrator who buys Synth for claim denials also gets a personal assistant, a finance analysis tool, and a sales automation engine for their procurement team. Nyla AI gives that same administrator nothing outside of healthcare."}),n.jsxs("div",{className:"vn-superpower",children:[n.jsx("h3",{children:"Synth's six verticals"}),n.jsx("p",{className:"vn-superpower-sub",children:"One platform. Six business functions. Zero engineering required."}),n.jsxs("div",{className:"vn-superpower-grid",children:[n.jsxs("div",{className:"vn-superpower-card",children:[n.jsx("div",{className:"vn-superpower-icon",children:"🏥"}),n.jsx("h5",{children:"Healthcare Admin"}),n.jsx("p",{children:"Claim denials, ICD-10/CPT coding, payer rules, scheduling, refill reminders"})]}),n.jsxs("div",{className:"vn-superpower-card",children:[n.jsx("div",{className:"vn-superpower-icon",children:"📈"}),n.jsx("h5",{children:"Marketing"}),n.jsx("p",{children:"Campaign generation, competitor research, content, email sequences, analytics"})]}),n.jsxs("div",{className:"vn-superpower-card",children:[n.jsx("div",{className:"vn-superpower-icon",children:"🤝"}),n.jsx("h5",{children:"Sales"}),n.jsx("p",{children:"Lead enrichment, outreach drafting, deal briefs, CRM sync"})]}),n.jsxs("div",{className:"vn-superpower-card",children:[n.jsx("div",{className:"vn-superpower-icon",children:"💹"}),n.jsx("h5",{children:"Finance"}),n.jsx("p",{children:"Live market data, DCF modelling, report collection, portfolio monitoring"})]}),n.jsxs("div",{className:"vn-superpower-card",children:[n.jsx("div",{className:"vn-superpower-icon",children:"🧩"}),n.jsx("h5",{children:"Product"}),n.jsx("p",{children:"Strategy docs, roadmaps, PRDs, market segmentation, competitive maps"})]}),n.jsxs("div",{className:"vn-superpower-card",children:[n.jsx("div",{className:"vn-superpower-icon",children:"🙋"}),n.jsx("h5",{children:"Personal"}),n.jsx("p",{children:"Daily briefing, proactive alerts, scheduling, travel, communications"})]})]}),n.jsx("div",{className:"vn-superpower-note",children:n.jsxs("p",{children:[n.jsx("strong",{children:"This is the platform advantage."})," Nyla AI is a point solution. Synth is a platform that compounds value with every new vertical a customer adopts. That is why platforms get acquired at higher multiples than point solutions."]})})]})]})}),n.jsx("section",{className:"vn-section",children:n.jsxs("div",{className:"vn-wrap",children:[n.jsx("p",{className:"vn-section-eyebrow",children:"Feature comparison"}),n.jsx("h2",{className:"vn-section-title",children:"Feature by feature, honestly"}),n.jsx("p",{className:"vn-section-sub",children:"We describe Nyla AI accurately and generously — because accurate description is the only respect a competitor deserves on a comparison page."}),n.jsx("div",{className:"vn-filter-tabs",children:w.map(v=>n.jsx("button",{className:`vn-filter-tab ${l===v?"active":""}`,onClick:()=>{y(v),g(!1)},children:v},v))}),n.jsxs("div",{className:"vn-table",children:[n.jsxs("div",{className:"vn-table-head",children:[n.jsx("div",{className:"vn-th vn-th-feature",children:"Feature"}),n.jsx("div",{className:"vn-th vn-th-nyla",children:n.jsx("img",{src:"/Nyla-AI.png",alt:"Nyla AI",className:"vn-mini-logo"})}),n.jsx("div",{className:"vn-th vn-th-synth",children:n.jsx("img",{src:"/logo.png",alt:"Synth",className:"vn-logo-synth"})})]}),M.map((v,A)=>{const L=b[A-1],G=!L||L.category!==v.category;return n.jsxs("div",{children:[G&&l==="All"&&n.jsx("div",{className:"vn-category-row",children:v.category}),n.jsxs("div",{className:"vn-row",children:[n.jsx("div",{className:"vn-cell vn-cell-feature",children:v.feature}),n.jsxs("div",{className:"vn-cell vn-cell-nyla",children:[n.jsx(jd,{level:v.nyla.supported}),v.nyla.value]}),n.jsxs("div",{className:"vn-cell vn-cell-synth",children:[n.jsx(jd,{level:v.synth.supported}),v.synth.value]})]})]},A)})]}),!c&&b.length>8&&n.jsx("div",{className:"vn-show-more",children:n.jsxs("button",{className:"vn-show-more-btn",onClick:()=>g(!0),children:["Show all ",b.length," features ↓"]})})]})}),n.jsx("section",{className:"vn-section",children:n.jsxs("div",{className:"vn-wrap",children:[n.jsx("p",{className:"vn-section-eyebrow",children:"For investors"}),n.jsx("h2",{className:"vn-section-title",children:"Why this comparison matters to VCs"}),n.jsx("p",{className:"vn-section-sub",children:"Nyla AI and Synth are not competitors. They are adjacent layers in the same stack. That adjacency is the opportunity."}),n.jsxs("div",{className:"vn-vc-box",children:[n.jsx("h3",{children:"Synth occupies the layer Nyla AI cannot reach"}),n.jsxs("div",{className:"vn-vc-points",children:[n.jsxs("div",{className:"vn-vc-point",children:[n.jsx("div",{className:"vn-vc-point-icon",children:"🏥"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Institutional revenue recovery"}),n.jsx("p",{children:"Claim denials represent billions in uncollected revenue across SA hospitals. Nyla AI has no answer. Synth is built specifically to recover it."})]})]}),n.jsxs("div",{className:"vn-vc-point",children:[n.jsx("div",{className:"vn-vc-point-icon",children:"📱"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Distribution moat"}),n.jsx("p",{children:"WhatsApp has 90%+ penetration in South Africa. Synth delivers AI through the channel hospitals and businesses already use — no app download required."})]})]}),n.jsxs("div",{className:"vn-vc-point",children:[n.jsx("div",{className:"vn-vc-point-icon",children:"🧩"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Platform breadth"}),n.jsx("p",{children:"Synth covers six verticals. A hospital that adopts Synth for healthcare admin also gets marketing, sales, finance, and personal productivity — automatic lock-in."})]})]}),n.jsxs("div",{className:"vn-vc-point",children:[n.jsx("div",{className:"vn-vc-point-icon",children:"💰"}),n.jsxs("div",{children:[n.jsx("h5",{children:"Accessible price point"}),n.jsx("p",{children:"At $15/month, Synth can acquire customers at volume. At $499/facility for healthcare, it captures institutional budgets Nyla AI cannot access without consumer adoption first."})]})]})]})]})]})})]})]})}const Nd=[{id:"heartbeat",number:"01",icon:"💓",tag:"Proactive Heartbeat",headline:"Synth doesn't wait to be asked",sub:"Every other AI tool sits idle until you open it and type something. Synth runs a continuous heartbeat — monitoring your calendar, emails, deadlines, and connected tools — and pushes what matters to you before you realise you needed it.",accent:"#2563EB",accentLight:"#EFF6FF",what:[{title:"Morning briefing",body:"Before 7 AM every day, Synth reviews your calendar, open emails, and pending tasks. It builds a prioritised plan for the day and sends it to you — unprompted, every morning."},{title:"Emergency alerts",body:"When something changes — a meeting conflict, a deadline in 90 minutes you haven't started, a flight price drop on a route you're watching — Synth flags it immediately with an action option attached."},{title:"Deadline tracking",body:"Synth monitors open tasks and submission deadlines across your connected tools. It doesn't wait for you to check. It tells you when something is at risk."},{title:"Relationship nudges",body:"If a client hasn't heard from you in two weeks, or a colleague flagged something that got buried, Synth surfaces it before the relationship goes cold."}],example:{label:"What you receive at 6:45 AM",messages:[{from:"synth",text:`Good morning. Here's today:

— 9 AM: Ndali Group call. I've prepped your notes.
— 11:30 AM: Lwazi's contract reply is overdue (2 days). Draft ready for your review.
— 2 PM: Q3 proposal deadline. You haven't opened the draft yet.
— 5:30 PM: Gym (Clifton). Leave by 5:10 — traffic is light today.

One urgent item needs you now.`},{from:"user",text:"What's the urgent item?"},{from:"synth",text:"Your 9 AM and 9:30 AM just clashed — the investor call was moved. Want me to reschedule the standup or find an alternative slot?"}]},quote:"Most AI waits for instructions. Synth operates on a heartbeat — checking, monitoring, and pushing what needs your attention before it becomes a problem."},{id:"multiagent",number:"02",icon:"⚡",tag:"Autonomous Multi-Agent Execution",headline:"One task. Dozens of agents. Zero hand-holding.",sub:"When you give Synth a complex task, it doesn't work through it one step at a time like a chatbot. It breaks the task into independent sub-tasks and deploys a dedicated agent for each one — running simultaneously, in parallel, each with its own fresh context.",accent:"#7C3AED",accentLight:"#F5F3FF",what:[{title:"The context overload problem — solved",body:"Ask a standard AI to research 50 companies. The first 5 are detailed. By company 20, the answers get thin. By company 50, you're getting filler. This happens because every item adds to the same memory, and the quality degrades as the context fills up. Synth gives each item its own clean agent with a fresh context. Item 50 gets the same quality as item 1."},{title:"Parallel execution — not sequential",body:"Researching 100 competitors doesn't take 100 times as long. Sub-agents run simultaneously. A task that would take a human analyst days completes in minutes because every item is being worked on at the same time."},{title:"Centralised orchestration",body:"A main agent breaks the task down, distributes work to sub-agents, and collects results when they finish. Sub-agents never talk to each other — this prevents context from polluting across tasks and keeps quality consistent."},{title:"Reports back when done",body:"You give Synth the task and walk away. When all agents have completed their work, the main agent synthesises the findings into a single structured output and delivers it to you — in WhatsApp, Slack, email, or wherever you work."}],comparison:{label:"What happens when you ask for 50 competitor profiles",rows:[{label:"Standard AI chatbot",items:["Company 1–5: detailed ✓","Company 6–20: getting shorter","Company 21–50: generic filler ✗"]},{label:"Synth multi-agent",items:["All 50: research happens simultaneously","Each agent has its own fresh context","Uniform quality across every profile ✓"]}]},example:{label:"A task in motion",messages:[{from:"user",text:"Research our top 20 competitors — pricing, key features, and recent funding — and put it in a Google Sheet before the 3 PM strategy meeting."},{from:"synth",text:`On it. Deploying 20 research agents now — one per company.

[■■■░░░░░░░] 6/20 complete

Each agent is browsing live, pulling pricing pages, press releases, and Crunchbase data independently. I'll synthesise and populate the Sheet when all 20 are done. You'll have it well before 3 PM.`}]},quote:"Traditional AI gets slower and less accurate as the task gets bigger. Synth gets more capable — because more agents can always be deployed."},{id:"toolintegration",number:"03",icon:"🔌",tag:"Seamless Tool Integration (MCP)",headline:"Synth connects to the tools your business already runs on",sub:"MCP — Model Context Protocol — is the standard that lets Synth read from and write to external tools. Not screen-scraping. Not manual exports. A direct, reliable connection that means Synth knows what's in your systems before you tell it.",accent:"#059669",accentLight:"#F0FDF4",what:[{title:"What MCP actually means for you",body:"When Synth connects to your Google Calendar via MCP, it doesn't just see events — it can create, edit, and reschedule them. When it connects to HubSpot, it can read your pipeline, update deal stages, and log notes. The connection is bidirectional: Synth reads what's there and writes back when something is done."},{title:"No manual exports",body:"The most wasted hour in any business day is moving data between tools. Exporting a CSV from your CRM to paste into a spreadsheet. Copying a meeting note into a task manager. Synth eliminates every one of those handoffs — it reads, processes, and writes across all connected tools in one continuous flow."},{title:"Every tool talks to every other tool",body:"Because Synth sits at the centre of all your connections, it can orchestrate across them. Pull data from Xero, compare it to a forecast in Google Sheets, flag the variance to a Slack channel, and create a follow-up task in Notion — in one instruction."}],integrations:[{category:"Accounting",tools:["Sage Business Cloud","Xero","QuickBooks","Zoho Books"]},{category:"CRM & Sales",tools:["Salesforce","HubSpot","Pipedrive","Zoho CRM"]},{category:"Workspace",tools:["Google Workspace","Microsoft 365","Notion","Slack"]},{category:"Healthcare (SA)",tools:["GoodX","Elixir","DragonWave","SA Medical Schemes"]},{category:"Productivity",tools:["Linear","Jira","Asana","ClickUp"]},{category:"Communication",tools:["WhatsApp Business","Telegram","Gmail","Outlook"]}],example:{label:"Cross-tool execution in one message",messages:[{from:"user",text:"Pull last month's revenue from Xero, compare it to the forecast in the Q4 Sheet, and send a summary to the finance Slack channel."},{from:"synth",text:`Done.

Xero (Oct revenue): R1,240,000
Forecast (Q4 Sheet): R1,180,000
Variance: +R60,000 (+5.1%)

Summary posted to #finance-team on Slack. Want me to update the board deck too?`}]},quote:"The value of connected tools is not in having them. It's in having something that can read, act on, and write back to all of them at once."},{id:"custommcp",number:"04",icon:"🛠️",tag:"Custom MCP & API",headline:"Connect your own systems. Build on top of Synth.",sub:"The pre-built connectors cover the most common tools. But every business has systems that are specific to them — internal databases, proprietary platforms, bespoke CRMs, healthcare systems built in-house. Custom MCP and the Synth API let you connect anything.",accent:"#D97706",accentLight:"#FFFBEB",what:[{title:"Custom MCP servers",body:"If you have an internal tool or data source that Synth doesn't natively connect to, you can register a custom MCP server. Synth will treat it exactly like a native connector — reading from it, writing to it, and orchestrating across it alongside all your other tools. No middleware required."},{title:"REST API — trigger Synth from your own systems",body:"The Synth API lets you trigger tasks programmatically from your own code, dashboards, or automation pipelines. Send a task to Synth via API, specify the channel for the output (WhatsApp, Slack, email), set a priority, and let Synth execute it. Results come back as a webhook when the task is complete."},{title:"Webhooks — Synth reports back to you",body:"When a task completes, Synth can POST the results to any endpoint you specify. Build downstream automation on top of Synth's outputs — trigger follow-up workflows, update your own databases, or feed results into your dashboards automatically."},{title:"Enterprise SSO and access control",body:"For larger teams, Synth supports Single Sign-On (SSO) and role-based access controls. Define which team members can trigger which types of tasks, and which connectors each role has access to."}],codeBlocks:[{label:"Trigger a task via the Synth REST API",lang:"bash",code:`POST https://api.synth.ai/v1/tasks
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "task": "Summarise this week's denied claims and post to Slack",
  "user_id": "usr_hospital_admin_001",
  "context": { "channel": "whatsapp" },
  "priority": "high",
  "webhook": "https://yourapp.com/synth/callback"
}`},{label:"Register a custom MCP server",lang:"bash",code:`POST https://api.synth.ai/v1/mcp/register
Authorization: Bearer YOUR_API_KEY

{
  "name": "hospital-emr",
  "url": "https://mcp.yourhospital.co.za/sse",
  "scopes": ["read:patients", "write:appointments", "read:claims"],
  "user_id": "usr_hospital_admin_001"
}

// Synth can now query your EMR on the user's behalf`},{label:"Webhook payload when a task completes",lang:"json",code:`{
  "event": "task.completed",
  "task_id": "tsk_9f2a1c",
  "user_id": "usr_hospital_admin_001",
  "result": "14 claim denials identified. Appeals drafted for 9. 5 require your review.",
  "output_url": "https://docs.google.com/...",
  "status": "success",
  "duration_seconds": 47
}`}],quote:"Pre-built connectors are the starting point. Custom MCP is how Synth becomes the operations layer for your specific business — not a generic tool adapted to fit."},{id:"browser",number:"05",icon:"🌐",tag:"Browser Operator",headline:"Synth navigates the web the way you would — with your logins, your session, your access",sub:"Most AI tools that claim to 'browse the web' are just reading public pages. Synth's Browser Operator works inside your actual browser session — which means it can access the sites you're logged into, pass authentication checks, fill forms, click buttons, and complete multi-step tasks across platforms that would block a standard bot.",accent:"#0891B2",accentLight:"#ECFEFF",what:[{title:"Your session — not a headless bot",body:"When Synth uses your browser, it operates from your trusted local IP address and your authenticated sessions. Security systems see a real user from a known location — not a bot from an unfamiliar IP. This means Synth can reliably access your banking portal, your private CRM, your LinkedIn account, or any platform with strict security checks."},{title:"It navigates, clicks, and fills forms",body:"Synth doesn't just read pages — it operates them. It can navigate multi-step flows, fill in forms, handle dropdowns and file uploads, scroll through paginated results, and confirm actions. Give it a multi-step goal and it executes the entire sequence without needing you to supervise each step."},{title:"Access platforms that require authentication",body:"The most valuable business data lives behind login walls — your ERP, your medical scheme portal, your accounting system. Standard web scraping cannot reach these. Synth's Browser Operator can, because it uses your existing authenticated session."},{title:"Full transparency and control",body:"You can watch what Synth is doing in your browser at any time. If you want to pause or stop a task midway, you can. Synth never stores your passwords — it uses your live session, not your credentials."}],useCases:[{icon:"💼",title:"Job applications",body:"Apply to 20 remote positions using your CV — Synth navigates each application portal, fills in the form, and submits."},{icon:"🏦",title:"Banking and finance",body:"Pull your transaction history, reconcile with your accounting software, and flag anomalies — without manual exports."},{icon:"📋",title:"Form filing",body:"SARS eFiling, medical scheme claim submissions, government portal forms — Synth completes multi-step government and regulatory forms."},{icon:"🔍",title:"Authenticated research",body:"Pull data from LinkedIn Sales Navigator, SimilarWeb, or any subscription platform you're already logged into."},{icon:"🛒",title:"Purchasing and booking",body:"Compare prices across multiple supplier portals, place orders, and confirm bookings — all in a single instruction."},{icon:"📊",title:"CRM data entry",body:"Navigate your CRM, update deal stages, log call notes, and move contacts between lists without opening a single tab yourself."}],example:{label:"What Synth can do in your browser",messages:[{from:"user",text:"Apply to all the senior product manager roles on this list of URLs using my CV. Skip any that require more than 3 years in fintech."},{from:"synth",text:`Opening all 12 URLs now. I'll review each role's requirements before applying.

✓ Applied — Takealot (Cape Town PM role)
✓ Applied — Ozow (Product Lead)
— Skipped — Peach Payments (requires 5yr fintech)
✓ Applied — Yoco (Senior PM)

Completed 8/12. 3 skipped (fintech requirement). 1 required a cover letter — I drafted one using your experience, please review.`}]},quote:"A browser that only reads public pages is a limited tool. A browser that operates your authenticated sessions — as if you were sitting there — is a completely different capability."},{id:"skills",number:"06",icon:"🎯",tag:"Agent Skills",headline:"Build a workflow once. Run it forever.",sub:"Agent Skills let you package any task Synth has successfully completed into a reusable, triggerable workflow. Your team's best processes — the way you do competitor research, the way you onboard clients, the way you prepare for board meetings — become skills that any team member can trigger with a single command.",accent:"#DB2777",accentLight:"#FDF2F8",what:[{title:"What a Skill is",body:"A Skill is a saved workflow — a set of instructions, tools, and steps that Synth knows how to execute for a specific recurring task. It is not a macro or a script. It is a complete AI workflow that can adapt to new inputs while following the same reliable process every time."},{title:"Build one from any successful task",body:"When Synth completes a task you'll want to repeat — a competitor analysis, a client onboarding sequence, a weekly report — you can say 'package this as a Skill.' Synth generates the workflow definition automatically. You give it a name, and it's ready to trigger."},{title:"Specialise for your domain",body:"A generic AI does generic work. A Skill trained on your specific way of preparing investor updates, or your specific process for resolving medical claim denials, does your work — with your standards, your templates, and your preferences built in."},{title:"Share across your team",body:"Skills are not personal. A skill built by your most experienced analyst can be triggered by a new team member on their first day. Your team's collective expertise becomes organisational infrastructure, not individual knowledge locked in someone's head."}],skillExamples:[{name:"/competitor-report",trigger:"Weekly competitor intelligence",desc:"Researches your top 10 competitors, pulls pricing changes, new features, and press mentions, and delivers a structured briefing every Monday at 8 AM.",plan:"Pro"},{name:"/claim-denial-batch",trigger:"Healthcare claim processing",desc:"Pulls all denied claims from the past 7 days, identifies denial codes, drafts appeals for each, and flags ones that need human review.",plan:"Healthcare"},{name:"/new-lead-brief",trigger:"Sales meeting prep",desc:"When given a company name, researches the prospect, maps stakeholders, identifies likely objections, and delivers a formatted brief 1 hour before the scheduled call.",plan:"Pro"},{name:"/morning-brief",trigger:"Daily planning",desc:"Reviews your calendar, emails, and open tasks. Delivers a prioritised day plan to WhatsApp by 6:45 AM every morning.",plan:"Starter"},{name:"/board-pack",trigger:"Monthly reporting",desc:"Pulls revenue data from Xero, headcount from HR, and pipeline from HubSpot. Assembles a board-ready slide deck and emails it to your distribution list.",plan:"Pro"},{name:"/client-onboard",trigger:"New client setup",desc:"Creates a client folder, sends a welcome email with your standard template, schedules the kickoff call, and sets up tracking in your project tool.",plan:"Pro"}],quote:"The best teams don't just work hard — they build systems. Agent Skills are how your best process becomes the team's default process."}];function Ds({messages:c,label:g}){return n.jsxs("div",{style:{background:"#0A0D14",borderRadius:14,overflow:"hidden",marginTop:20},children:[n.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid rgba(255,255,255,.07)",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",color:"rgba(255,255,255,.3)"},children:g}),n.jsx("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:10},children:c.map((l,y)=>n.jsx("div",{style:{display:"flex",justifyContent:l.from==="user"?"flex-end":"flex-start"},children:n.jsxs("div",{style:{maxWidth:"82%",background:l.from==="user"?"#2563EB":"rgba(255,255,255,.06)",border:l.from==="synth"?"1px solid rgba(255,255,255,.08)":"none",borderRadius:l.from==="user"?"14px 14px 3px 14px":"14px 14px 14px 3px",padding:"10px 14px",fontSize:13,lineHeight:1.6,color:l.from==="user"?"#fff":"rgba(255,255,255,.8)",whiteSpace:"pre-line"},children:[l.from==="synth"&&n.jsx("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.8px",color:"#60A5FA",marginBottom:5},children:"Synth"}),l.text]})},y))})]})}function Nm({code:c,label:g}){const[l,y]=R.useState(!1),w=()=>{navigator.clipboard.writeText(c),y(!0),setTimeout(()=>y(!1),2e3)};return n.jsxs("div",{style:{marginBottom:16},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[n.jsx("span",{style:{fontSize:12,color:"#8E9AB5",fontWeight:500},children:g}),n.jsx("button",{onClick:w,style:{fontSize:11,fontWeight:600,color:l?"#16A34A":"#2563EB",background:"none",border:"none",cursor:"pointer",fontFamily:"inherit"},children:l?"Copied ✓":"Copy"})]}),n.jsx("pre",{style:{background:"#0D1117",border:"1px solid rgba(255,255,255,.07)",borderRadius:10,padding:"16px 18px",fontFamily:"'Geist Mono','SF Mono','Fira Code',ui-monospace,monospace",fontSize:12,lineHeight:1.75,color:"#E2E8F0",overflow:"auto",margin:0,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:c})]})}function km(){const[c,g]=R.useState("heartbeat");return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .ft { font-family:'Geist','Inter',system-ui,sans-serif; background:#F5F7FA; color:#0A0D14; }
        .ft-wrap    { max-width:1040px; margin:0 auto; padding:0 24px; }
        .ft-wrap-sm { max-width:760px;  margin:0 auto; padding:0 24px; }

        /* ── hero ── */
        .ft-hero {
          padding:80px 24px 64px; text-align:center;
          border-bottom:1px solid rgba(10,13,20,.07);
          position:relative; overflow:hidden;
        }
        .ft-hero::before {
          content:''; position:absolute; inset:0;
          background-image:radial-gradient(circle,rgba(37,99,235,.05) 1px,transparent 1px);
          background-size:28px 28px;
          mask-image:radial-gradient(ellipse 80% 60% at 50% 0%,black 40%,transparent 100%);
          -webkit-mask-image:radial-gradient(ellipse 80% 60% at 50% 0%,black 40%,transparent 100%);
          pointer-events:none;
        }
        .ft-pill {
          display:inline-flex; align-items:center; gap:8px;
          background:#EFF6FF; border:1px solid rgba(37,99,235,.2);
          color:#2563EB; font-size:12px; font-weight:600;
          letter-spacing:1px; text-transform:uppercase;
          border-radius:999px; padding:5px 14px; margin-bottom:24px;
        }
        .ft-h1 {
          font-family:'Instrument Serif',Georgia,serif;
          font-size:clamp(32px,5vw,58px); font-weight:400;
          line-height:1.08; letter-spacing:-1.5px;
          color:#0A0D14; max-width:700px; margin:0 auto 16px;
        }
        .ft-h1 em { font-style:italic; color:#2563EB; }
        .ft-hero-sub {
          font-size:16px; color:#445068; line-height:1.7;
          max-width:520px; margin:0 auto 40px;
        }

        /* ── sticky nav ── */
        .ft-nav {
          position:sticky; top:60px; z-index:100;
          background:rgba(245,247,250,.95);
          backdrop-filter:blur(16px);
          -webkit-backdrop-filter:blur(16px);
          border-bottom:1px solid rgba(10,13,20,.07);
          padding:0 24px;
        }
        .ft-nav-inner {
          max-width:1040px; margin:0 auto;
          display:flex; gap:2px; overflow-x:auto;
          scrollbar-width:none; padding:10px 0;
        }
        .ft-nav-inner::-webkit-scrollbar { display:none; }
        .ft-nav-btn {
          display:flex; align-items:center; gap:7px;
          padding:7px 14px; border-radius:8px;
          font-size:13px; font-weight:500; color:#6B7A99;
          background:none; border:none; cursor:pointer;
          white-space:nowrap; font-family:inherit;
          transition:all .15s;
        }
        .ft-nav-btn:hover { background:rgba(10,13,20,.05); color:#0A0D14; }
        .ft-nav-btn.active { background:#EFF6FF; color:#2563EB; }
        .ft-nav-dot {
          width:6px; height:6px; border-radius:50%; flex-shrink:0;
        }

        /* ── feature sections ── */
        .ft-feature {
          padding:80px 0;
          border-bottom:1px solid rgba(10,13,20,.07);
        }
        .ft-feature:nth-child(even) { background:#fff; }
        .ft-feature-inner {
          max-width:1040px; margin:0 auto; padding:0 24px;
        }
        .ft-feature-top {
          display:grid; grid-template-columns:1fr 1fr;
          gap:56px; align-items:start; margin-bottom:56px;
        }
        .ft-feature-left { }
        .ft-num {
          font-size:11px; font-weight:700; letter-spacing:2px;
          text-transform:uppercase; color:#CBD5E1; margin-bottom:12px;
        }
        .ft-tag {
          display:inline-flex; align-items:center; gap:8px;
          border-radius:999px; padding:4px 12px;
          font-size:12px; font-weight:600; margin-bottom:16px;
        }
        .ft-h2 {
          font-family:'Instrument Serif',Georgia,serif;
          font-size:clamp(24px,3.5vw,36px); font-weight:400;
          line-height:1.15; letter-spacing:-0.5px;
          color:#0A0D14; margin-bottom:14px;
        }
        .ft-sub {
          font-size:15px; color:#445068; line-height:1.75;
          margin-bottom:24px;
        }
        .ft-quote {
          font-size:14px; font-style:italic; color:#6B7A99;
          border-left:3px solid; padding-left:14px;
          line-height:1.65; margin:0;
        }

        /* What points grid */
        .ft-what-grid {
          display:grid; grid-template-columns:repeat(2,1fr);
          gap:12px;
        }
        .ft-what-card {
          background:#F5F7FA; border-radius:12px;
          padding:16px 18px;
          border:1px solid rgba(10,13,20,.06);
        }
        .ft-what-card h4 {
          font-size:13px; font-weight:600; color:#0A0D14;
          margin-bottom:6px;
        }
        .ft-what-card p {
          font-size:13px; color:#445068; line-height:1.6; margin:0;
        }

        /* Integration grid */
        .ft-integrations {
          display:grid; grid-template-columns:repeat(3,1fr);
          gap:12px; margin-top:24px;
        }
        .ft-int-group { }
        .ft-int-group-label {
          font-size:10px; font-weight:700; text-transform:uppercase;
          letter-spacing:1px; color:#8E9AB5; margin-bottom:7px;
        }
        .ft-int-pills { display:flex; flex-wrap:wrap; gap:5px; }
        .ft-int-pill {
          font-size:12px; color:#445068; font-weight:500;
          background:#fff; border:1px solid rgba(10,13,20,.1);
          border-radius:999px; padding:3px 10px;
        }

        /* Comparison table */
        .ft-comparison { margin-top:24px; border-radius:12px; overflow:hidden; border:1px solid rgba(10,13,20,.08); }
        .ft-comp-label {
          background:#0A0D14; padding:10px 16px;
          font-size:11px; font-weight:700; text-transform:uppercase;
          letter-spacing:1px; color:rgba(255,255,255,.4);
        }
        .ft-comp-row {
          display:grid; grid-template-columns:1fr 1fr;
          border-top:1px solid rgba(10,13,20,.06);
        }
        .ft-comp-col {
          padding:14px 16px;
        }
        .ft-comp-col:first-child { background:#FEF9EE; border-right:1px solid rgba(10,13,20,.06); }
        .ft-comp-col:last-child  { background:#F0F7FF; }
        .ft-comp-col-label {
          font-size:10px; font-weight:700; text-transform:uppercase;
          letter-spacing:1px; margin-bottom:8px;
        }
        .ft-comp-col:first-child .ft-comp-col-label { color:#92400E; }
        .ft-comp-col:last-child  .ft-comp-col-label { color:#2563EB; }
        .ft-comp-item {
          font-size:13px; color:#445068; line-height:1.55;
          padding:3px 0;
        }

        /* Skill examples */
        .ft-skills-grid {
          display:grid; grid-template-columns:repeat(2,1fr);
          gap:10px; margin-top:24px;
        }
        .ft-skill-card {
          background:#F5F7FA; border:1px solid rgba(10,13,20,.07);
          border-radius:12px; padding:16px 18px;
        }
        .ft-skill-name {
          font-family:'Geist Mono','SF Mono',ui-monospace,monospace;
          font-size:12px; font-weight:700; margin-bottom:4px;
        }
        .ft-skill-trigger {
          font-size:11px; font-weight:600; text-transform:uppercase;
          letter-spacing:.7px; color:#8E9AB5; margin-bottom:8px;
        }
        .ft-skill-desc {
          font-size:13px; color:#445068; line-height:1.55; margin-bottom:8px;
        }
        .ft-skill-plan {
          font-size:11px; font-weight:700; text-transform:uppercase;
          letter-spacing:.7px; border-radius:999px;
          padding:2px 8px; display:inline-block;
        }

        /* Use case grid */
        .ft-use-grid {
          display:grid; grid-template-columns:repeat(3,1fr);
          gap:10px; margin-top:24px;
        }
        .ft-use-card {
          background:#F5F7FA; border:1px solid rgba(10,13,20,.07);
          border-radius:12px; padding:16px;
        }
        .ft-use-icon { font-size:20px; margin-bottom:8px; }
        .ft-use-card h4 { font-size:13px; font-weight:600; color:#0A0D14; margin-bottom:4px; }
        .ft-use-card p  { font-size:12px; color:#445068; line-height:1.55; margin:0; }

        /* responsive */
        @media(max-width:860px){
          .ft-feature-top { grid-template-columns:1fr; gap:32px; }
          .ft-what-grid   { grid-template-columns:1fr; }
          .ft-integrations { grid-template-columns:repeat(2,1fr); }
          .ft-skills-grid { grid-template-columns:1fr; }
          .ft-use-grid    { grid-template-columns:repeat(2,1fr); }
          .ft-comp-row    { grid-template-columns:1fr; }
          .ft-comp-col:first-child { border-right:none; border-bottom:1px solid rgba(10,13,20,.06); }
        }
        @media(max-width:560px){
          .ft-integrations { grid-template-columns:1fr; }
          .ft-use-grid    { grid-template-columns:1fr; }
          .ft-h1 { font-size:32px; letter-spacing:-1px; }
        }
        @media(prefers-reduced-motion:reduce){ *{ transition:none !important; scroll-behavior:auto !important; } }
      `}),n.jsxs("div",{className:"ft",children:[n.jsxs("section",{className:"ft-hero",children:[n.jsx("div",{className:"ft-pill",children:"Platform features"}),n.jsxs("h1",{className:"ft-h1",children:["Six capabilities.",n.jsx("br",{}),n.jsx("em",{children:"One agent that uses all of them."})]}),n.jsx("p",{className:"ft-hero-sub",children:"Most AI tools give you one thing — a chat window. Synth is built from six interconnected capabilities that work together to go from your first message to a completed result, without you managing any step in between."})]}),n.jsx("nav",{className:"ft-nav",children:n.jsx("div",{className:"ft-nav-inner",children:Nd.map(l=>n.jsxs("button",{className:`ft-nav-btn ${c===l.id?"active":""}`,onClick:()=>{var y;g(l.id),(y=document.getElementById(l.id))==null||y.scrollIntoView({behavior:"smooth",block:"start"})},children:[n.jsx("span",{className:"ft-nav-dot",style:{background:l.accent}}),l.tag]},l.id))})}),Nd.map(l=>n.jsx("section",{id:l.id,className:"ft-feature",style:{scrollMarginTop:120},children:n.jsxs("div",{className:"ft-feature-inner",children:[n.jsxs("div",{className:"ft-feature-top",children:[n.jsxs("div",{className:"ft-feature-left",children:[n.jsxs("div",{className:"ft-num",children:[l.number," / 06"]}),n.jsxs("div",{className:"ft-tag",style:{background:l.accentLight,color:l.accent},children:[n.jsx("span",{children:l.icon}),l.tag]}),n.jsx("h2",{className:"ft-h2",children:l.headline}),n.jsx("p",{className:"ft-sub",children:l.sub}),n.jsx("p",{className:"ft-quote",style:{borderColor:l.accent},children:l.quote})]}),n.jsx("div",{children:n.jsx("div",{className:"ft-what-grid",children:l.what.map((y,w)=>n.jsxs("div",{className:"ft-what-card",children:[n.jsxs("h4",{style:{display:"flex",alignItems:"center",gap:7},children:[n.jsx("span",{style:{width:18,height:18,borderRadius:"50%",background:l.accentLight,color:l.accent,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,flexShrink:0},children:w+1}),y.title]}),n.jsx("p",{children:y.body})]},w))})})]}),l.example&&(l.id==="heartbeat"||l.id==="multiagent"||l.id==="browser")&&n.jsx("div",{style:{maxWidth:640,margin:"0 auto"},children:n.jsx(Ds,{messages:l.example.messages,label:l.example.label})}),l.id==="toolintegration"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{maxWidth:640,margin:"0 auto 40px"},children:n.jsx(Ds,{messages:l.example.messages,label:l.example.label})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"1.2px",color:"#8E9AB5",marginBottom:14},children:"Available connectors"}),n.jsx("div",{className:"ft-integrations",children:l.integrations.map((y,w)=>n.jsxs("div",{className:"ft-int-group",children:[n.jsx("div",{className:"ft-int-group-label",children:y.category}),n.jsx("div",{className:"ft-int-pills",children:y.tools.map(b=>n.jsx("span",{className:"ft-int-pill",children:b},b))})]},w))})]})]}),l.id==="multiagent"&&l.comparison&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"ft-comparison",style:{maxWidth:720,margin:"0 auto 28px"},children:[n.jsx("div",{className:"ft-comp-label",children:l.comparison.label}),n.jsx("div",{className:"ft-comp-row",children:l.comparison.rows.map((y,w)=>n.jsxs("div",{className:"ft-comp-col",children:[n.jsx("div",{className:"ft-comp-col-label",children:y.label}),y.items.map((b,M)=>n.jsx("div",{className:"ft-comp-item",children:b},M))]},w))})]}),n.jsx("div",{style:{maxWidth:640,margin:"0 auto"},children:n.jsx(Ds,{messages:l.example.messages,label:l.example.label})})]}),l.id==="custommcp"&&l.codeBlocks&&n.jsx("div",{style:{maxWidth:720,margin:"0 auto"},children:l.codeBlocks.map((y,w)=>n.jsx(Nm,{code:y.code,lang:y.lang,label:y.label},w))}),l.id==="browser"&&l.useCases&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"ft-use-grid",children:l.useCases.map((y,w)=>n.jsxs("div",{className:"ft-use-card",children:[n.jsx("div",{className:"ft-use-icon",children:y.icon}),n.jsx("h4",{children:y.title}),n.jsx("p",{children:y.body})]},w))}),n.jsx("div",{style:{maxWidth:640,margin:"28px auto 0"},children:n.jsx(Ds,{messages:l.example.messages,label:l.example.label})})]}),l.id==="skills"&&l.skillExamples&&n.jsx("div",{className:"ft-skills-grid",children:l.skillExamples.map((y,w)=>n.jsxs("div",{className:"ft-skill-card",style:{borderTop:`3px solid ${l.accent}`},children:[n.jsx("div",{className:"ft-skill-name",style:{color:l.accent},children:y.name}),n.jsx("div",{className:"ft-skill-trigger",children:y.trigger}),n.jsx("p",{className:"ft-skill-desc",children:y.desc}),n.jsx("span",{className:"ft-skill-plan",style:{background:l.accentLight,color:l.accent},children:y.plan})]},w))})]})},l.id)),n.jsx("section",{style:{padding:"80px 24px",textAlign:"center",borderTop:"1px solid rgba(10,13,20,.07)"},children:n.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[n.jsx("p",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"1.5px",color:"#2563EB",marginBottom:12},children:"All six features. One agent."}),n.jsx("h2",{style:{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(26px,4vw,38px)",fontWeight:400,letterSpacing:"-0.4px",color:"#0A0D14",marginBottom:14,lineHeight:1.15},children:"The gap between thinking and doing just closed."}),n.jsx("p",{style:{fontSize:15,color:"#445068",lineHeight:1.7,marginBottom:32},children:"We're building something we'd want to use ourselves. Join the waitlist and you'll be first to get access when we launch."}),n.jsxs("form",{style:{display:"flex",gap:8,maxWidth:380,margin:"0 auto 12px"},onSubmit:l=>l.preventDefault(),children:[n.jsx("input",{type:"email",placeholder:"your@email.com",required:!0,style:{flex:1,background:"#fff",border:"1px solid rgba(10,13,20,.14)",borderRadius:999,padding:"11px 18px",fontSize:14,color:"#0A0D14",outline:"none",fontFamily:"inherit"}}),n.jsx("button",{type:"submit",style:{background:"#2563EB",color:"#fff",borderRadius:999,padding:"11px 22px",fontSize:14,fontWeight:500,border:"none",cursor:"pointer",whiteSpace:"nowrap",fontFamily:"inherit"},children:"Join waitlist"})]}),n.jsx("p",{style:{fontSize:12,color:"#8E9AB5"},children:"Free during beta. No credit card required."})]})})]})]})}function Sm(){return n.jsxs(gh,{children:[n.jsx(Ae,{path:"/",component:Yh}),n.jsx(Ae,{path:"/solutions/marketing",component:Kh}),n.jsx(Ae,{path:"/solutions/sales",component:Jh}),n.jsx(Ae,{path:"/solutions/finance",component:em}),n.jsx(Ae,{path:"/solutions/product",component:nm}),n.jsx(Ae,{path:"/solutions/personal",component:sm}),n.jsx(Ae,{path:"/solutions/healthcare",component:om}),n.jsx(Ae,{path:"/pricing",component:im}),n.jsx(Ae,{path:"/pages/feature",component:km}),n.jsx(Ae,{path:"/trust",component:cm}),n.jsx(Ae,{path:"/data-processing",component:dm}),n.jsx(Ae,{path:"/terms",component:pm}),n.jsx(Ae,{path:"/compare/vsChatgpt",component:ym}),n.jsx(Ae,{path:"/compare/vsOpenclaw",component:mm}),n.jsx(Ae,{path:"/compare/vsTrixta",component:wm}),n.jsx(Ae,{path:"/compare/vsNyla",component:jm}),n.jsx(Ae,{component:hm})]})}function Cm(){return n.jsx(xh,{defaultTheme:"light",children:n.jsxs("div",{className:"min-h-screen flex flex-col",children:[n.jsx(Ih,{}),n.jsx(Th,{}),n.jsx("main",{className:"flex-1",children:n.jsx(Sm,{})}),n.jsx(Dh,{})]})})}qp.createRoot(document.getElementById("root")).render(n.jsx(Sd.StrictMode,{children:n.jsx(Cm,{})}));
