(()=>{var YM=Object.create;var a0=Object.defineProperty;var ZM=Object.getOwnPropertyDescriptor;var JM=Object.getOwnPropertyNames;var KM=Object.getPrototypeOf,QM=Object.prototype.hasOwnProperty;var Ai=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var jM=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of JM(t))!QM.call(e,s)&&s!==n&&a0(e,s,{get:()=>t[s],enumerable:!(i=ZM(t,s))||i.enumerable});return e};var wi=(e,t,n)=>(n=e!=null?YM(KM(e)):{},jM(t||!e||!e.__esModule?a0(n,"default",{value:e,enumerable:!0}):n,e));var g0=Ai(Bt=>{"use strict";var qf=Symbol.for("react.transitional.element"),$M=Symbol.for("react.portal"),tb=Symbol.for("react.fragment"),eb=Symbol.for("react.strict_mode"),nb=Symbol.for("react.profiler"),ib=Symbol.for("react.consumer"),sb=Symbol.for("react.context"),ab=Symbol.for("react.forward_ref"),rb=Symbol.for("react.suspense"),ob=Symbol.for("react.memo"),u0=Symbol.for("react.lazy"),lb=Symbol.for("react.activity"),r0=Symbol.iterator;function cb(e){return e===null||typeof e!="object"?null:(e=r0&&e[r0]||e["@@iterator"],typeof e=="function"?e:null)}var h0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f0=Object.assign,d0={};function ir(e,t,n){this.props=e,this.context=t,this.refs=d0,this.updater=n||h0}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function p0(){}p0.prototype=ir.prototype;function Yf(e,t,n){this.props=e,this.context=t,this.refs=d0,this.updater=n||h0}var Zf=Yf.prototype=new p0;Zf.constructor=Yf;f0(Zf,ir.prototype);Zf.isPureReactComponent=!0;var o0=Array.isArray;function Wf(){}var Me={H:null,A:null,T:null,S:null},m0=Object.prototype.hasOwnProperty;function Jf(e,t,n){var i=n.ref;return{$$typeof:qf,type:e,key:t,ref:i!==void 0?i:null,props:n}}function ub(e,t){return Jf(e.type,t,e.props)}function Kf(e){return typeof e=="object"&&e!==null&&e.$$typeof===qf}function hb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var l0=/\/+/g;function Xf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hb(""+e.key):t.toString(36)}function fb(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Wf,Wf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function nr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case qf:case $M:r=!0;break;case u0:return r=e._init,nr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Xf(e,0):i,o0(s)?(n="",r!=null&&(n=r.replace(l0,"$&/")+"/"),nr(s,t,n,"",function(c){return c})):s!=null&&(Kf(s)&&(s=ub(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(l0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(o0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Xf(i,l),r+=nr(i,t,n,a,s);else if(l=cb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Xf(i,l++),r+=nr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return nr(fb(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function cc(e,t,n){if(e==null)return e;var i=[],s=0;return nr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function db(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var c0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pb={map:cc,forEach:function(e,t,n){cc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cc(e,function(){t++}),t},toArray:function(e){return cc(e,function(t){return t})||[]},only:function(e){if(!Kf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Bt.Activity=lb;Bt.Children=pb;Bt.Component=ir;Bt.Fragment=tb;Bt.Profiler=nb;Bt.PureComponent=Yf;Bt.StrictMode=eb;Bt.Suspense=rb;Bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Me;Bt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Me.H.useMemoCache(e)}};Bt.cache=function(e){return function(){return e.apply(null,arguments)}};Bt.cacheSignal=function(){return null};Bt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=f0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!m0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Jf(e.type,s,i)};Bt.createContext=function(e){return e={$$typeof:sb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ib,_context:e},e};Bt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)m0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Jf(e,a,s)};Bt.createRef=function(){return{current:null}};Bt.forwardRef=function(e){return{$$typeof:ab,render:e}};Bt.isValidElement=Kf;Bt.lazy=function(e){return{$$typeof:u0,_payload:{_status:-1,_result:e},_init:db}};Bt.memo=function(e,t){return{$$typeof:ob,type:e,compare:t===void 0?null:t}};Bt.startTransition=function(e){var t=Me.T,n={};Me.T=n;try{var i=e(),s=Me.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Wf,c0)}catch(a){c0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Me.T=t}};Bt.unstable_useCacheRefresh=function(){return Me.H.useCacheRefresh()};Bt.use=function(e){return Me.H.use(e)};Bt.useActionState=function(e,t,n){return Me.H.useActionState(e,t,n)};Bt.useCallback=function(e,t){return Me.H.useCallback(e,t)};Bt.useContext=function(e){return Me.H.useContext(e)};Bt.useDebugValue=function(){};Bt.useDeferredValue=function(e,t){return Me.H.useDeferredValue(e,t)};Bt.useEffect=function(e,t){return Me.H.useEffect(e,t)};Bt.useEffectEvent=function(e){return Me.H.useEffectEvent(e)};Bt.useId=function(){return Me.H.useId()};Bt.useImperativeHandle=function(e,t,n){return Me.H.useImperativeHandle(e,t,n)};Bt.useInsertionEffect=function(e,t){return Me.H.useInsertionEffect(e,t)};Bt.useLayoutEffect=function(e,t){return Me.H.useLayoutEffect(e,t)};Bt.useMemo=function(e,t){return Me.H.useMemo(e,t)};Bt.useOptimistic=function(e,t){return Me.H.useOptimistic(e,t)};Bt.useReducer=function(e,t,n){return Me.H.useReducer(e,t,n)};Bt.useRef=function(e){return Me.H.useRef(e)};Bt.useState=function(e){return Me.H.useState(e)};Bt.useSyncExternalStore=function(e,t,n){return Me.H.useSyncExternalStore(e,t,n)};Bt.useTransition=function(){return Me.H.useTransition()};Bt.version="19.2.7"});var sr=Ai((AR,v0)=>{"use strict";v0.exports=g0()});var w0=Ai(we=>{"use strict";function td(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<uc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ci(e){return e.length===0?null:e[0]}function fc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>uc(o,n))l<s&&0>uc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>uc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function uc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}we.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(_0=performance,we.unstable_now=function(){return _0.now()}):(Qf=Date,x0=Qf.now(),we.unstable_now=function(){return Qf.now()-x0});var _0,Qf,x0,qi=[],As=[],mb=1,ei=null,un=3,ed=!1,So=!1,Mo=!1,nd=!1,M0=typeof setTimeout=="function"?setTimeout:null,b0=typeof clearTimeout=="function"?clearTimeout:null,y0=typeof setImmediate<"u"?setImmediate:null;function hc(e){for(var t=Ci(As);t!==null;){if(t.callback===null)fc(As);else if(t.startTime<=e)fc(As),t.sortIndex=t.expirationTime,td(qi,t);else break;t=Ci(As)}}function id(e){if(Mo=!1,hc(e),!So)if(Ci(qi)!==null)So=!0,rr||(rr=!0,ar());else{var t=Ci(As);t!==null&&sd(id,t.startTime-e)}}var rr=!1,bo=-1,T0=5,E0=-1;function A0(){return nd?!0:!(we.unstable_now()-E0<T0)}function jf(){if(nd=!1,rr){var e=we.unstable_now();E0=e;var t=!0;try{t:{So=!1,Mo&&(Mo=!1,b0(bo),bo=-1),ed=!0;var n=un;try{e:{for(hc(e),ei=Ci(qi);ei!==null&&!(ei.expirationTime>e&&A0());){var i=ei.callback;if(typeof i=="function"){ei.callback=null,un=ei.priorityLevel;var s=i(ei.expirationTime<=e);if(e=we.unstable_now(),typeof s=="function"){ei.callback=s,hc(e),t=!0;break e}ei===Ci(qi)&&fc(qi),hc(e)}else fc(qi);ei=Ci(qi)}if(ei!==null)t=!0;else{var a=Ci(As);a!==null&&sd(id,a.startTime-e),t=!1}}break t}finally{ei=null,un=n,ed=!1}t=void 0}}finally{t?ar():rr=!1}}}var ar;typeof y0=="function"?ar=function(){y0(jf)}:typeof MessageChannel<"u"?($f=new MessageChannel,S0=$f.port2,$f.port1.onmessage=jf,ar=function(){S0.postMessage(null)}):ar=function(){M0(jf,0)};var $f,S0;function sd(e,t){bo=M0(function(){e(we.unstable_now())},t)}we.unstable_IdlePriority=5;we.unstable_ImmediatePriority=1;we.unstable_LowPriority=4;we.unstable_NormalPriority=3;we.unstable_Profiling=null;we.unstable_UserBlockingPriority=2;we.unstable_cancelCallback=function(e){e.callback=null};we.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T0=0<e?Math.floor(1e3/e):5};we.unstable_getCurrentPriorityLevel=function(){return un};we.unstable_next=function(e){switch(un){case 1:case 2:case 3:var t=3;break;default:t=un}var n=un;un=t;try{return e()}finally{un=n}};we.unstable_requestPaint=function(){nd=!0};we.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=un;un=e;try{return t()}finally{un=n}};we.unstable_scheduleCallback=function(e,t,n){var i=we.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:mb++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,td(As,e),Ci(qi)===null&&e===Ci(As)&&(Mo?(b0(bo),bo=-1):Mo=!0,sd(id,n-i))):(e.sortIndex=s,td(qi,e),So||ed||(So=!0,rr||(rr=!0,ar()))),e};we.unstable_shouldYield=A0;we.unstable_wrapCallback=function(e){var t=un;return function(){var n=un;un=t;try{return e.apply(this,arguments)}finally{un=n}}}});var R0=Ai((CR,C0)=>{"use strict";C0.exports=w0()});var U0=Ai(gn=>{"use strict";var gb=sr();function D0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ws(){}var mn={d:{f:ws,r:function(){throw Error(D0(522))},D:ws,C:ws,L:ws,m:ws,X:ws,S:ws,M:ws},p:0,findDOMNode:null},vb=Symbol.for("react.portal");function _b(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vb,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var To=gb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function dc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn;gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(D0(299));return _b(e,t,null,n)};gn.flushSync=function(e){var t=To.T,n=mn.p;try{if(To.T=null,mn.p=2,e)return e()}finally{To.T=t,mn.p=n,mn.d.f()}};gn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,mn.d.C(e,t))};gn.prefetchDNS=function(e){typeof e=="string"&&mn.d.D(e)};gn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=dc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&mn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};gn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=dc(t.as,t.crossOrigin);mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&mn.d.M(e)};gn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=dc(n,t.crossOrigin);mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};gn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=dc(t.as,t.crossOrigin);mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else mn.d.m(e)};gn.requestFormReset=function(e){mn.d.r(e)};gn.unstable_batchedUpdates=function(e,t){return e(t)};gn.useFormState=function(e,t,n){return To.H.useFormState(e,t,n)};gn.useFormStatus=function(){return To.H.useHostTransitionStatus()};gn.version="19.2.7"});var I0=Ai((DR,L0)=>{"use strict";function N0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N0)}catch(e){console.error(e)}}N0(),L0.exports=U0()});var qy=Ai(Fu=>{"use strict";var Ze=R0(),r_=sr(),xb=I0();function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function l_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O0(e){if(ul(e)!==e)throw Error(J(188))}function yb(e){var t=e.alternate;if(!t){if(t=ul(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return O0(s),e;if(a===i)return O0(s),t;a=a.sibling}throw Error(J(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function u_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=u_(e),t!==null)return t;e=e.sibling}return null}var Ee=Object.assign,Sb=Symbol.for("react.element"),pc=Symbol.for("react.transitional.element"),No=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),h_=Symbol.for("react.strict_mode"),Fd=Symbol.for("react.profiler"),f_=Symbol.for("react.consumer"),ts=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Vd=Symbol.for("react.suspense_list"),Ip=Symbol.for("react.memo"),Cs=Symbol.for("react.lazy"),Hd=Symbol.for("react.activity"),Mb=Symbol.for("react.memo_cache_sentinel"),P0=Symbol.iterator;function Eo(e){return e===null||typeof e!="object"?null:(e=P0&&e[P0]||e["@@iterator"],typeof e=="function"?e:null)}var bb=Symbol.for("react.client.reference");function Gd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bb?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case Fd:return"Profiler";case h_:return"StrictMode";case zd:return"Suspense";case Vd:return"SuspenseList";case Hd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case No:return"Portal";case ts:return e.displayName||"Context";case f_:return(e._context.displayName||"Context")+".Consumer";case Lp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ip:return t=e.displayName||null,t!==null?t:Gd(e.type)||"Memo";case Cs:t=e._payload,e=e._init;try{return Gd(e(t))}catch{}}return null}var Lo=Array.isArray,Ut=r_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=xb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Aa={pending:!1,data:null,method:null,action:null},kd=[],dr=-1;function Li(e){return{current:e}}function $e(e){0>dr||(e.current=kd[dr],kd[dr]=null,dr--)}function ye(e,t){dr++,kd[dr]=e.current,e.current=t}var Ni=Li(null),Ko=Li(null),zs=Li(null),Yc=Li(null);function Zc(e,t){switch(ye(zs,t),ye(Ko,e),ye(Ni,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?kv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=kv(t),e=Ny(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$e(Ni),ye(Ni,e)}function Ur(){$e(Ni),$e(Ko),$e(zs)}function Xd(e){e.memoizedState!==null&&ye(Yc,e);var t=Ni.current,n=Ny(t,e.type);t!==n&&(ye(Ko,e),ye(Ni,n))}function Jc(e){Ko.current===e&&($e(Ni),$e(Ko)),Yc.current===e&&($e(Yc),ol._currentValue=Aa)}var ad,B0;function Ma(e){if(ad===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ad=t&&t[1]||"",B0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ad+e+B0}var rd=!1;function od(e,t){if(!e||rd)return"";rd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{rd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ma(n):""}function Tb(e,t){switch(e.tag){case 26:case 27:case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return e.child!==t&&t!==null?Ma("Suspense Fallback"):Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return od(e.type,!1);case 11:return od(e.type.render,!1);case 1:return od(e.type,!0);case 31:return Ma("Activity");default:return""}}function F0(e){try{var t="",n=null;do t+=Tb(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Wd=Object.prototype.hasOwnProperty,Op=Ze.unstable_scheduleCallback,ld=Ze.unstable_cancelCallback,Eb=Ze.unstable_shouldYield,Ab=Ze.unstable_requestPaint,zn=Ze.unstable_now,wb=Ze.unstable_getCurrentPriorityLevel,d_=Ze.unstable_ImmediatePriority,p_=Ze.unstable_UserBlockingPriority,Kc=Ze.unstable_NormalPriority,Cb=Ze.unstable_LowPriority,m_=Ze.unstable_IdlePriority,Rb=Ze.log,Db=Ze.unstable_setDisableYieldValue,hl=null,Vn=null;function Is(e){if(typeof Rb=="function"&&Db(e),Vn&&typeof Vn.setStrictMode=="function")try{Vn.setStrictMode(hl,e)}catch{}}var Hn=Math.clz32?Math.clz32:Lb,Ub=Math.log,Nb=Math.LN2;function Lb(e){return e>>>=0,e===0?32:31-(Ub(e)/Nb|0)|0}var mc=256,gc=262144,vc=4194304;function ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=ba(i):(r&=o,r!==0?s=ba(r):n||(n=o&~e,n!==0&&(s=ba(n))))):(o=i&~a,o!==0?s=ba(o):r!==0?s=ba(r):n||(n=i&~e,n!==0&&(s=ba(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function fl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ib(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g_(){var e=vc;return vc<<=1,(vc&62914560)===0&&(vc=4194304),e}function cd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ob(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Hn(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&v_(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function v_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Hn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function __(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Hn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function x_(e,t){var n=t&-t;return n=(n&42)!==0?1:Pp(n),(n&(e.suspendedLanes|t))!==0?0:n}function Pp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bp(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function y_(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:ky(e.type))}function z0(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var js=Math.random().toString(36).slice(2),sn="__reactFiber$"+js,wn="__reactProps$"+js,Gr="__reactContainer$"+js,qd="__reactEvents$"+js,Pb="__reactListeners$"+js,Bb="__reactHandles$"+js,V0="__reactResources$"+js,pl="__reactMarker$"+js;function Fp(e){delete e[sn],delete e[wn],delete e[qd],delete e[Pb],delete e[Bb]}function pr(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gr]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zv(e);e!==null;){if(n=e[sn])return n;e=Zv(e)}return t}e=n,n=e.parentNode}return null}function kr(e){if(e=e[sn]||e[Gr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Io(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function Tr(e){var t=e[V0];return t||(t=e[V0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[pl]=!0}var S_=new Set,M_={};function Pa(e,t){Nr(e,t),Nr(e+"Capture",t)}function Nr(e,t){for(M_[e]=t,e=0;e<t.length;e++)S_.add(t[e])}var Fb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),H0={},G0={};function zb(e){return Wd.call(G0,e)?!0:Wd.call(H0,e)?!1:Fb.test(e)?G0[e]=!0:(H0[e]=!0,!1)}function Nc(e,t,n){if(zb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function _c(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Yi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ii(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function b_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vb(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yd(e){if(!e._valueTracker){var t=b_(e)?"checked":"value";e._valueTracker=Vb(e,t,""+e[t])}}function T_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=b_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Qc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hb=/[\n"\\]/g;function ri(e){return e.replace(Hb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zd(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ii(t)):e.value!==""+ii(t)&&(e.value=""+ii(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Jd(e,r,ii(t)):n!=null?Jd(e,r,ii(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ii(o):e.removeAttribute("name")}function E_(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Yd(e);return}n=n!=null?""+ii(n):"",t=t!=null?""+ii(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Yd(e)}function Jd(e,t,n){t==="number"&&Qc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Er(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ii(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function A_(e,t,n){if(t!=null&&(t=""+ii(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ii(n):""}function w_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(Lo(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ii(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Yd(e)}function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function k0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Gb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function C_(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&k0(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&k0(e,a,t[a])}function zp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lc(e){return Xb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function es(){}var Kd=null;function Vp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mr=null,Ar=null;function X0(e){var t=kr(e);if(t&&(e=t.stateNode)){var n=e[wn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Zd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ri(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[wn]||null;if(!s)throw Error(J(90));Zd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&T_(i)}break t;case"textarea":A_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}}}var ud=!1;function R_(e,t,n){if(ud)return e(t,n);ud=!0;try{var i=e(t);return i}finally{if(ud=!1,(mr!==null||Ar!==null)&&(Iu(),mr&&(t=mr,e=Ar,Ar=mr=null,X0(t),e)))for(t=0;t<e.length;t++)X0(e[t])}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[wn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var rs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qd=!1;if(rs)try{or={},Object.defineProperty(or,"passive",{get:function(){Qd=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{Qd=!1}var or,Os=null,Hp=null,Ic=null;function D_(){if(Ic)return Ic;var e,t=Hp,n=t.length,i,s="value"in Os?Os.value:Os.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Ic=s.slice(e,1<i?1-i:void 0)}function Oc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xc(){return!0}function W0(){return!1}function Cn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?xc:W0,this.isPropagationStopped=W0,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){},isPersistent:xc}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=Cn(Ba),ml=Ee({},Ba,{view:0,detail:0}),Wb=Cn(ml),hd,fd,Ao,Tu=Ee({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ao&&(Ao&&e.type==="mousemove"?(hd=e.screenX-Ao.screenX,fd=e.screenY-Ao.screenY):fd=hd=0,Ao=e),hd)},movementY:function(e){return"movementY"in e?e.movementY:fd}}),q0=Cn(Tu),qb=Ee({},Tu,{dataTransfer:0}),Yb=Cn(qb),Zb=Ee({},ml,{relatedTarget:0}),dd=Cn(Zb),Jb=Ee({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Kb=Cn(Jb),Qb=Ee({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jb=Cn(Qb),$b=Ee({},Ba,{data:0}),Y0=Cn($b),t1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=n1[e])?!!t[e]:!1}function Gp(){return i1}var s1=Ee({},ml,{key:function(e){if(e.key){var t=t1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gp,charCode:function(e){return e.type==="keypress"?Oc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a1=Cn(s1),r1=Ee({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Z0=Cn(r1),o1=Ee({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gp}),l1=Cn(o1),c1=Ee({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),u1=Cn(c1),h1=Ee({},Tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f1=Cn(h1),d1=Ee({},Ba,{newState:0,oldState:0}),p1=Cn(d1),m1=[9,13,27,32],kp=rs&&"CompositionEvent"in window,Bo=null;rs&&"documentMode"in document&&(Bo=document.documentMode);var g1=rs&&"TextEvent"in window&&!Bo,U_=rs&&(!kp||Bo&&8<Bo&&11>=Bo),J0=" ",K0=!1;function N_(e,t){switch(e){case"keyup":return m1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function v1(e,t){switch(e){case"compositionend":return L_(t);case"keypress":return t.which!==32?null:(K0=!0,J0);case"textInput":return e=t.data,e===J0&&K0?null:e;default:return null}}function _1(e,t){if(gr)return e==="compositionend"||!kp&&N_(e,t)?(e=D_(),Ic=Hp=Os=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return U_&&t.locale!=="ko"?null:t.data;default:return null}}var x1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!x1[e.type]:t==="textarea"}function I_(e,t,n,i){mr?Ar?Ar.push(i):Ar=[i]:mr=i,t=mu(t,"onChange"),0<t.length&&(n=new bu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Fo=null,jo=null;function y1(e){Ry(e,0)}function Eu(e){var t=Io(e);if(T_(t))return e}function j0(e,t){if(e==="change")return t}var O_=!1;rs&&(rs?(Sc="oninput"in document,Sc||(pd=document.createElement("div"),pd.setAttribute("oninput","return;"),Sc=typeof pd.oninput=="function"),yc=Sc):yc=!1,O_=yc&&(!document.documentMode||9<document.documentMode));var yc,Sc,pd;function $0(){Fo&&(Fo.detachEvent("onpropertychange",P_),jo=Fo=null)}function P_(e){if(e.propertyName==="value"&&Eu(jo)){var t=[];I_(t,jo,e,Vp(e)),R_(y1,t)}}function S1(e,t,n){e==="focusin"?($0(),Fo=t,jo=n,Fo.attachEvent("onpropertychange",P_)):e==="focusout"&&$0()}function M1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eu(jo)}function b1(e,t){if(e==="click")return Eu(t)}function T1(e,t){if(e==="input"||e==="change")return Eu(t)}function E1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kn=typeof Object.is=="function"?Object.is:E1;function $o(e,t){if(kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Wd.call(t,s)||!kn(e[s],t[s]))return!1}return!0}function tv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ev(e,t){var n=tv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=tv(n)}}function B_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?B_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function F_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qc(e.document)}return t}function Xp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var A1=rs&&"documentMode"in document&&11>=document.documentMode,vr=null,jd=null,zo=null,$d=!1;function nv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$d||vr==null||vr!==Qc(i)||(i=vr,"selectionStart"in i&&Xp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zo&&$o(zo,i)||(zo=i,i=mu(jd,"onSelect"),0<i.length&&(t=new bu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=vr)))}function Sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},md={},z_={};rs&&(z_=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Fa(e){if(md[e])return md[e];if(!_r[e])return e;var t=_r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in z_)return md[e]=t[n];return e}var V_=Fa("animationend"),H_=Fa("animationiteration"),G_=Fa("animationstart"),w1=Fa("transitionrun"),C1=Fa("transitionstart"),R1=Fa("transitioncancel"),k_=Fa("transitionend"),X_=new Map,tp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tp.push("scrollEnd");function gi(e,t){X_.set(e,t),Pa(t,[e])}var jc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],xr=0,Wp=0;function Au(){for(var e=xr,t=Wp=xr=0;t<e;){var n=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var s=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&W_(n,s,a)}}function wu(e,t,n,i){ni[xr++]=e,ni[xr++]=t,ni[xr++]=n,ni[xr++]=i,Wp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function qp(e,t,n,i){return wu(e,t,n,i),$c(e)}function za(e,t){return wu(e,null,null,t),$c(e)}function W_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Hn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function $c(e){if(50<Zo)throw Zo=0,Sp=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yr={};function D1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(e,t,n,i){return new D1(e,t,n,i)}function Yp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function is(e,t){var n=e.alternate;return n===null?(n=Bn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function q_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Yp(e)&&(r=1);else if(typeof e=="string")r=LT(e,n,Ni.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Hd:return e=Bn(31,n,t,s),e.elementType=Hd,e.lanes=a,e;case fr:return wa(n.children,s,a,t);case h_:r=8,s|=24;break;case Fd:return e=Bn(12,n,t,s|2),e.elementType=Fd,e.lanes=a,e;case zd:return e=Bn(13,n,t,s),e.elementType=zd,e.lanes=a,e;case Vd:return e=Bn(19,n,t,s),e.elementType=Vd,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ts:r=10;break t;case f_:r=9;break t;case Lp:r=11;break t;case Ip:r=14;break t;case Cs:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=Bn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function wa(e,t,n,i){return e=Bn(7,e,i,t),e.lanes=n,e}function gd(e,t,n){return e=Bn(6,e,null,t),e.lanes=n,e}function Y_(e){var t=Bn(18,null,null,0);return t.stateNode=e,t}function vd(e,t,n){return t=Bn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var iv=new WeakMap;function oi(e,t){if(typeof e=="object"&&e!==null){var n=iv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:F0(t)},iv.set(e,t),t)}return{value:e,source:t,stack:F0(t)}}var Sr=[],Mr=0,tu=null,tl=0,si=[],ai=0,Zs=null,Ri=1,Di="";function ji(e,t){Sr[Mr++]=tl,Sr[Mr++]=tu,tu=e,tl=t}function Z_(e,t,n){si[ai++]=Ri,si[ai++]=Di,si[ai++]=Zs,Zs=e;var i=Ri;e=Di;var s=32-Hn(i)-1;i&=~(1<<s),n+=1;var a=32-Hn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ri=1<<32-Hn(t)+s|n<<s|i,Di=a+e}else Ri=1<<a|n<<s|i,Di=e}function Zp(e){e.return!==null&&(ji(e,1),Z_(e,1,0))}function Jp(e){for(;e===tu;)tu=Sr[--Mr],Sr[Mr]=null,tl=Sr[--Mr],Sr[Mr]=null;for(;e===Zs;)Zs=si[--ai],si[ai]=null,Di=si[--ai],si[ai]=null,Ri=si[--ai],si[ai]=null}function J_(e,t){si[ai++]=Ri,si[ai++]=Di,si[ai++]=Zs,Ri=t.id,Di=t.overflow,Zs=e}var an=null,Te=null,jt=!1,Vs=null,li=!1,ep=Error(J(519));function Js(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw el(oi(t,e)),ep}function sv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[sn]=e,t[wn]=i,n){case"dialog":Yt("cancel",t),Yt("close",t);break;case"iframe":case"object":case"embed":Yt("load",t);break;case"video":case"audio":for(n=0;n<al.length;n++)Yt(al[n],t);break;case"source":Yt("error",t);break;case"img":case"image":case"link":Yt("error",t),Yt("load",t);break;case"details":Yt("toggle",t);break;case"input":Yt("invalid",t),E_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Yt("invalid",t);break;case"textarea":Yt("invalid",t),w_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Uy(t.textContent,n)?(i.popover!=null&&(Yt("beforetoggle",t),Yt("toggle",t)),i.onScroll!=null&&Yt("scroll",t),i.onScrollEnd!=null&&Yt("scrollend",t),i.onClick!=null&&(t.onclick=es),t=!0):t=!1,t||Js(e,!0)}function av(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:an=an.return}}function lr(e){if(e!==an)return!1;if(!jt)return av(e),jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ap(e.type,e.memoizedProps)),n=!n),n&&Te&&Js(e),av(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Te=Yv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Te=Yv(e)}else t===27?(t=Te,$s(e.type)?(e=Dp,Dp=null,Te=e):Te=t):Te=an?ui(e.stateNode.nextSibling):null;return!0}function Ua(){Te=an=null,jt=!1}function _d(){var e=Vs;return e!==null&&(En===null?En=e:En.push.apply(En,e),Vs=null),e}function el(e){Vs===null?Vs=[e]:Vs.push(e)}var np=Li(null),Va=null,ns=null;function Ds(e,t,n){ye(np,t._currentValue),t._currentValue=n}function ss(e){e._currentValue=np.current,$e(np)}function ip(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function sp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ip(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(J(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),ip(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Xr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=s.type;kn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Yc.current){if(r=s.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(ol):e=[ol])}s=s.return}e!==null&&sp(t,e,n,i),t.flags|=262144}function eu(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){Va=e,ns=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rn(e){return K_(Va,e)}function Mc(e,t){return Va===null&&Na(e),K_(e,t)}function K_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ns===null){if(e===null)throw Error(J(308));ns=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ns=ns.next=t;return n}var U1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},N1=Ze.unstable_scheduleCallback,L1=Ze.unstable_NormalPriority,Xe={$$typeof:ts,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kp(){return{controller:new U1,data:new Map,refCount:0}}function gl(e){e.refCount--,e.refCount===0&&N1(L1,function(){e.controller.abort()})}var Vo=null,ap=0,Ir=0,wr=null;function I1(e,t){if(Vo===null){var n=Vo=[];ap=0,Ir=Sm(),wr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ap++,t.then(rv,rv),t}function rv(){if(--ap===0&&Vo!==null){wr!==null&&(wr.status="fulfilled");var e=Vo;Vo=null,Ir=0,wr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function O1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var ov=Ut.S;Ut.S=function(e,t){uy=zn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&I1(e,t),ov!==null&&ov(e,t)};var Ca=Li(null);function Qp(){var e=Ca.current;return e!==null?e:_e.pooledCache}function Bc(e,t){t===null?ye(Ca,Ca.current):ye(Ca,t.pool)}function Q_(){var e=Qp();return e===null?null:{parent:Xe._currentValue,pool:e}}var Wr=Error(J(460)),jp=Error(J(474)),Cu=Error(J(542)),nu={then:function(){}};function lv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function j_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(es,es),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uv(e),e;default:if(typeof t.status=="string")t.then(es,es);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uv(e),e}throw Ra=t,Wr}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ra=n,Wr):n}}var Ra=null;function cv(){if(Ra===null)throw Error(J(459));var e=Ra;return Ra=null,e}function uv(e){if(e===Wr||e===Cu)throw Error(J(483))}var Cr=null,nl=0;function bc(e){var t=nl;return nl+=1,Cr===null&&(Cr=[]),j_(Cr,e,t)}function wo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tc(e,t){throw t.$$typeof===Sb?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $_(e){function t(h,m){if(e){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h){for(var m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function s(h,m){return h=is(h,m),h.index=0,h.sibling=null,h}function a(h,m,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=67108866,m):x):(h.flags|=67108866,m)):(h.flags|=1048576,m)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,m,x,S){return m===null||m.tag!==6?(m=gd(x,h.mode,S),m.return=h,m):(m=s(m,x),m.return=h,m)}function l(h,m,x,S){var w=x.type;return w===fr?f(h,m,x.props.children,S,x.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Cs&&Ta(w)===m.type)?(m=s(m,x.props),wo(m,x),m.return=h,m):(m=Pc(x.type,x.key,x.props,null,h.mode,S),wo(m,x),m.return=h,m)}function c(h,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=vd(x,h.mode,S),m.return=h,m):(m=s(m,x.children||[]),m.return=h,m)}function f(h,m,x,S,w){return m===null||m.tag!==7?(m=wa(x,h.mode,S,w),m.return=h,m):(m=s(m,x),m.return=h,m)}function p(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=gd(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case pc:return x=Pc(m.type,m.key,m.props,null,h.mode,x),wo(x,m),x.return=h,x;case No:return m=vd(m,h.mode,x),m.return=h,m;case Cs:return m=Ta(m),p(h,m,x)}if(Lo(m)||Eo(m))return m=wa(m,h.mode,x,null),m.return=h,m;if(typeof m.then=="function")return p(h,bc(m),x);if(m.$$typeof===ts)return p(h,Mc(h,m),x);Tc(h,m)}return null}function u(h,m,x,S){var w=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return w!==null?null:o(h,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pc:return x.key===w?l(h,m,x,S):null;case No:return x.key===w?c(h,m,x,S):null;case Cs:return x=Ta(x),u(h,m,x,S)}if(Lo(x)||Eo(x))return w!==null?null:f(h,m,x,S,null);if(typeof x.then=="function")return u(h,m,bc(x),S);if(x.$$typeof===ts)return u(h,m,Mc(h,x),S);Tc(h,x)}return null}function d(h,m,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return h=h.get(x)||null,o(m,h,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pc:return h=h.get(S.key===null?x:S.key)||null,l(m,h,S,w);case No:return h=h.get(S.key===null?x:S.key)||null,c(m,h,S,w);case Cs:return S=Ta(S),d(h,m,x,S,w)}if(Lo(S)||Eo(S))return h=h.get(x)||null,f(m,h,S,w,null);if(typeof S.then=="function")return d(h,m,x,bc(S),w);if(S.$$typeof===ts)return d(h,m,x,Mc(m,S),w);Tc(m,S)}return null}function _(h,m,x,S){for(var w=null,E=null,C=m,y=m=0,A=null;C!==null&&y<x.length;y++){C.index>y?(A=C,C=null):A=C.sibling;var U=u(h,C,x[y],S);if(U===null){C===null&&(C=A);break}e&&C&&U.alternate===null&&t(h,C),m=a(U,m,y),E===null?w=U:E.sibling=U,E=U,C=A}if(y===x.length)return n(h,C),jt&&ji(h,y),w;if(C===null){for(;y<x.length;y++)C=p(h,x[y],S),C!==null&&(m=a(C,m,y),E===null?w=C:E.sibling=C,E=C);return jt&&ji(h,y),w}for(C=i(C);y<x.length;y++)A=d(C,h,y,x[y],S),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?y:A.key),m=a(A,m,y),E===null?w=A:E.sibling=A,E=A);return e&&C.forEach(function(D){return t(h,D)}),jt&&ji(h,y),w}function b(h,m,x,S){if(x==null)throw Error(J(151));for(var w=null,E=null,C=m,y=m=0,A=null,U=x.next();C!==null&&!U.done;y++,U=x.next()){C.index>y?(A=C,C=null):A=C.sibling;var D=u(h,C,U.value,S);if(D===null){C===null&&(C=A);break}e&&C&&D.alternate===null&&t(h,C),m=a(D,m,y),E===null?w=D:E.sibling=D,E=D,C=A}if(U.done)return n(h,C),jt&&ji(h,y),w;if(C===null){for(;!U.done;y++,U=x.next())U=p(h,U.value,S),U!==null&&(m=a(U,m,y),E===null?w=U:E.sibling=U,E=U);return jt&&ji(h,y),w}for(C=i(C);!U.done;y++,U=x.next())U=d(C,h,y,U.value,S),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?y:U.key),m=a(U,m,y),E===null?w=U:E.sibling=U,E=U);return e&&C.forEach(function(B){return t(h,B)}),jt&&ji(h,y),w}function g(h,m,x,S){if(typeof x=="object"&&x!==null&&x.type===fr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case pc:t:{for(var w=x.key;m!==null;){if(m.key===w){if(w=x.type,w===fr){if(m.tag===7){n(h,m.sibling),S=s(m,x.props.children),S.return=h,h=S;break t}}else if(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Cs&&Ta(w)===m.type){n(h,m.sibling),S=s(m,x.props),wo(S,x),S.return=h,h=S;break t}n(h,m);break}else t(h,m);m=m.sibling}x.type===fr?(S=wa(x.props.children,h.mode,S,x.key),S.return=h,h=S):(S=Pc(x.type,x.key,x.props,null,h.mode,S),wo(S,x),S.return=h,h=S)}return r(h);case No:t:{for(w=x.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(h,m.sibling),S=s(m,x.children||[]),S.return=h,h=S;break t}else{n(h,m);break}else t(h,m);m=m.sibling}S=vd(x,h.mode,S),S.return=h,h=S}return r(h);case Cs:return x=Ta(x),g(h,m,x,S)}if(Lo(x))return _(h,m,x,S);if(Eo(x)){if(w=Eo(x),typeof w!="function")throw Error(J(150));return x=w.call(x),b(h,m,x,S)}if(typeof x.then=="function")return g(h,m,bc(x),S);if(x.$$typeof===ts)return g(h,m,Mc(h,x),S);Tc(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,m!==null&&m.tag===6?(n(h,m.sibling),S=s(m,x),S.return=h,h=S):(n(h,m),S=gd(x,h.mode,S),S.return=h,h=S),r(h)):n(h,m)}return function(h,m,x,S){try{nl=0;var w=g(h,m,x,S);return Cr=null,w}catch(C){if(C===Wr||C===Cu)throw C;var E=Bn(29,C,null,h.mode);return E.lanes=S,E.return=h,E}}}var La=$_(!0),tx=$_(!1),Rs=!1;function $p(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(se&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=$c(e),W_(e,null,n),t}return wu(e,i,t,n),$c(e)}function Ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,__(e,n)}}function xd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var op=!1;function Go(){if(op){var e=wr;if(e!==null)throw e}}function ko(e,t,n,i){op=!1;var s=e.updateQueue;Rs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(Jt&u)===u:(i&u)===u){u!==0&&u===Ir&&(op=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,b=o;u=t;var g=n;switch(b.tag){case 1:if(_=b.payload,typeof _=="function"){p=_.call(g,p,u);break t}p=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=b.payload,u=typeof _=="function"?_.call(g,p,u):_,u==null)break t;p=Ee({},p,u);break t;case 2:Rs=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),Qs|=r,e.lanes=r,e.memoizedState=p}}function ex(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function nx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ex(n[e],t)}var Or=Li(null),iu=Li(0);function hv(e,t){e=us,ye(iu,e),ye(Or,t),us=e|t.baseLanes}function lp(){ye(iu,us),ye(Or,Or.current)}function tm(){us=iu.current,$e(Or),$e(iu)}var Xn=Li(null),ci=null;function Us(e){var t=e.alternate;ye(ze,ze.current&1),ye(Xn,e),ci===null&&(t===null||Or.current!==null||t.memoizedState!==null)&&(ci=e)}function cp(e){ye(ze,ze.current),ye(Xn,e),ci===null&&(ci=e)}function ix(e){e.tag===22?(ye(ze,ze.current),ye(Xn,e),ci===null&&(ci=e)):Ns(e)}function Ns(){ye(ze,ze.current),ye(Xn,Xn.current)}function Pn(e){$e(Xn),ci===e&&(ci=null),$e(ze)}var ze=Li(0);function su(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Cp(n)||Rp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var os=0,Vt=null,pe=null,Ge=null,au=!1,Rr=!1,Ia=!1,ru=0,il=0,Dr=null,P1=0;function Ne(){throw Error(J(321))}function em(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kn(e[n],t[n]))return!1;return!0}function nm(e,t,n,i,s,a){return os=a,Vt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ut.H=e===null||e.memoizedState===null?Ix:dm,Ia=!1,a=n(i,s),Ia=!1,Rr&&(a=ax(t,n,i,s)),sx(e),a}function sx(e){Ut.H=sl;var t=pe!==null&&pe.next!==null;if(os=0,Ge=pe=Vt=null,au=!1,il=0,Dr=null,t)throw Error(J(300));e===null||We||(e=e.dependencies,e!==null&&eu(e)&&(We=!0))}function ax(e,t,n,i){Vt=e;var s=0;do{if(Rr&&(Dr=null),il=0,Rr=!1,25<=s)throw Error(J(301));if(s+=1,Ge=pe=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ut.H=Ox,a=t(n,i)}while(Rr);return a}function B1(){var e=Ut.H,t=e.useState()[0];return t=typeof t.then=="function"?vl(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(Vt.flags|=1024),t}function im(){var e=ru!==0;return ru=0,e}function sm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function am(e){if(au){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}au=!1}os=0,Ge=pe=Vt=null,Rr=!1,il=ru=0,Dr=null}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Vt.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Ve(){if(pe===null){var e=Vt.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Ge===null?Vt.memoizedState:Ge.next;if(t!==null)Ge=t,pe=e;else{if(e===null)throw Vt.alternate===null?Error(J(467)):Error(J(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ge===null?Vt.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vl(e){var t=il;return il+=1,Dr===null&&(Dr=[]),e=j_(Dr,e,t),t=Vt,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,Ut.H=t===null||t.memoizedState===null?Ix:dm),e}function Du(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vl(e);if(e.$$typeof===ts)return rn(e)}throw Error(J(438,String(e)))}function rm(e){var t=null,n=Vt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Vt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ru(),Vt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Mb;return t.index++,n}function ls(e,t){return typeof t=="function"?t(e):t}function Fc(e){var t=Ve();return om(t,pe,e)}function om(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Jt&p)===p:(os&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Ir&&(f=!0);else if((os&u)===u){c=c.next,u===Ir&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Vt.lanes|=u,Qs|=u;p=c.action,Ia&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Vt.lanes|=p,Qs|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!kn(a,e.memoizedState)&&(We=!0,f&&(n=wr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function yd(e){var t=Ve(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);kn(a,t.memoizedState)||(We=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function rx(e,t,n){var i=Vt,s=Ve(),a=jt;if(a){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!kn((pe||s).memoizedState,n);if(r&&(s.memoizedState=n,We=!0),s=s.queue,lm(cx.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,Pr(9,{destroy:void 0},lx.bind(null,i,s,n,t),null),_e===null)throw Error(J(349));a||(os&127)!==0||ox(i,t,n)}return n}function ox(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Vt.updateQueue,t===null?(t=Ru(),Vt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lx(e,t,n,i){t.value=n,t.getSnapshot=i,ux(t)&&hx(e)}function cx(e,t,n){return n(function(){ux(t)&&hx(e)})}function ux(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kn(e,n)}catch{return!0}}function hx(e){var t=za(e,2);t!==null&&An(t,e,2)}function up(e){var t=vn();if(typeof e=="function"){var n=e;if(e=n(),Ia){Is(!0);try{n()}finally{Is(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:e},t}function fx(e,t,n,i){return e.baseState=n,om(e,pe,typeof i=="function"?i:ls)}function F1(e,t,n,i,s){if(Nu(e))throw Error(J(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ut.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,dx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function dx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ut.T,r={};Ut.T=r;try{var o=n(s,i),l=Ut.S;l!==null&&l(r,o),fv(e,t,o)}catch(c){hp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ut.T=a}}else try{a=n(s,i),fv(e,t,a)}catch(c){hp(e,t,c)}}function fv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){dv(e,t,i)},function(i){return hp(e,t,i)}):dv(e,t,n)}function dv(e,t,n){t.status="fulfilled",t.value=n,px(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,dx(e,n)))}function hp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,px(t),t=t.next;while(t!==i)}e.action=null}function px(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mx(e,t){return t}function pv(e,t){if(jt){var n=_e.formState;if(n!==null){t:{var i=Vt;if(jt){if(Te){e:{for(var s=Te,a=li;s.nodeType!==8;){if(!a){s=null;break e}if(s=ui(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Te=ui(s.nextSibling),i=s.data==="F!";break t}}Js(i)}i=!1}i&&(t=n[0])}}return n=vn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mx,lastRenderedState:t},n.queue=i,n=Ux.bind(null,Vt,i),i.dispatch=n,i=up(!1),a=fm.bind(null,Vt,!1,i.queue),i=vn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=F1.bind(null,Vt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function mv(e){var t=Ve();return gx(t,pe,e)}function gx(e,t,n){if(t=om(e,t,mx)[0],e=Fc(ls)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=vl(t)}catch(r){throw r===Wr?Cu:r}else i=t;t=Ve();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Vt.flags|=2048,Pr(9,{destroy:void 0},z1.bind(null,s,n),null)),[i,a,e]}function z1(e,t){e.action=t}function gv(e){var t=Ve(),n=pe;if(n!==null)return gx(t,n,e);Ve(),t=t.memoizedState,n=Ve();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Pr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Vt.updateQueue,t===null&&(t=Ru(),Vt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function vx(){return Ve().memoizedState}function zc(e,t,n,i){var s=vn();Vt.flags|=e,s.memoizedState=Pr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Uu(e,t,n,i){var s=Ve();i=i===void 0?null:i;var a=s.memoizedState.inst;pe!==null&&i!==null&&em(i,pe.memoizedState.deps)?s.memoizedState=Pr(t,a,n,i):(Vt.flags|=e,s.memoizedState=Pr(1|t,a,n,i))}function vv(e,t){zc(8390656,8,e,t)}function lm(e,t){Uu(2048,8,e,t)}function V1(e){Vt.flags|=4;var t=Vt.updateQueue;if(t===null)t=Ru(),Vt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _x(e){var t=Ve().memoizedState;return V1({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function xx(e,t){return Uu(4,2,e,t)}function yx(e,t){return Uu(4,4,e,t)}function Sx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mx(e,t,n){n=n!=null?n.concat([e]):null,Uu(4,4,Sx.bind(null,t,e),n)}function cm(){}function bx(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&em(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Tx(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&em(t,i[1]))return i[0];if(i=e(),Ia){Is(!0);try{e()}finally{Is(!1)}}return n.memoizedState=[i,t],i}function um(e,t,n){return n===void 0||(os&1073741824)!==0&&(Jt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=fy(),Vt.lanes|=e,Qs|=e,n)}function Ex(e,t,n,i){return kn(n,t)?n:Or.current!==null?(e=um(e,n,i),kn(e,t)||(We=!0),e):(os&42)===0||(os&1073741824)!==0&&(Jt&261930)===0?(We=!0,e.memoizedState=n):(e=fy(),Vt.lanes|=e,Qs|=e,t)}function Ax(e,t,n,i,s){var a=ae.p;ae.p=a!==0&&8>a?a:8;var r=Ut.T,o={};Ut.T=o,fm(e,!1,t,n);try{var l=s(),c=Ut.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=O1(l,i);Xo(e,t,f,Gn(e))}else Xo(e,t,i,Gn(e))}catch(p){Xo(e,t,{then:function(){},status:"rejected",reason:p},Gn())}finally{ae.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ut.T=r}}function H1(){}function fp(e,t,n,i){if(e.tag!==5)throw Error(J(476));var s=wx(e).queue;Ax(e,s,t,Aa,n===null?H1:function(){return Cx(e),n(i)})}function wx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Aa,baseState:Aa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:Aa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cx(e){var t=wx(e);t.next===null&&(t=e.alternate.memoizedState),Xo(e,t.next.queue,{},Gn())}function hm(){return rn(ol)}function Rx(){return Ve().memoizedState}function Dx(){return Ve().memoizedState}function G1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Gn();e=Hs(n);var i=Gs(t,e,n);i!==null&&(An(i,t,n),Ho(i,t,n)),t={cache:Kp()},e.payload=t;return}t=t.return}}function k1(e,t,n){var i=Gn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Nu(e)?Nx(t,n):(n=qp(e,t,n,i),n!==null&&(An(n,e,i),Lx(n,t,i)))}function Ux(e,t,n){var i=Gn();Xo(e,t,n,i)}function Xo(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))Nx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,kn(o,r))return wu(e,t,s,0),_e===null&&Au(),!1}catch{}if(n=qp(e,t,s,i),n!==null)return An(n,e,i),Lx(n,t,i),!0}return!1}function fm(e,t,n,i){if(i={lane:2,revertLane:Sm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Nu(e)){if(t)throw Error(J(479))}else t=qp(e,n,i,2),t!==null&&An(t,e,2)}function Nu(e){var t=e.alternate;return e===Vt||t!==null&&t===Vt}function Nx(e,t){Rr=au=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,__(e,n)}}var sl={readContext:rn,use:Du,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};sl.useEffectEvent=Ne;var Ix={readContext:rn,use:Du,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:rn,useEffect:vv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,zc(4194308,4,Sx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zc(4194308,4,e,t)},useInsertionEffect:function(e,t){zc(4,2,e,t)},useMemo:function(e,t){var n=vn();t=t===void 0?null:t;var i=e();if(Ia){Is(!0);try{e()}finally{Is(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=vn();if(n!==void 0){var s=n(t);if(Ia){Is(!0);try{n(t)}finally{Is(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=k1.bind(null,Vt,e),[i.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:function(e){e=up(e);var t=e.queue,n=Ux.bind(null,Vt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:cm,useDeferredValue:function(e,t){var n=vn();return um(n,e,t)},useTransition:function(){var e=up(!1);return e=Ax.bind(null,Vt,e.queue,!0,!1),vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Vt,s=vn();if(jt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),_e===null)throw Error(J(349));(Jt&127)!==0||ox(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,vv(cx.bind(null,i,a,e),[e]),i.flags|=2048,Pr(9,{destroy:void 0},lx.bind(null,i,a,n,t),null),n},useId:function(){var e=vn(),t=_e.identifierPrefix;if(jt){var n=Di,i=Ri;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ru++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=P1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:hm,useFormState:pv,useActionState:pv,useOptimistic:function(e){var t=vn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fm.bind(null,Vt,!0,n),n.dispatch=t,[e,t]},useMemoCache:rm,useCacheRefresh:function(){return vn().memoizedState=G1.bind(null,Vt)},useEffectEvent:function(e){var t=vn(),n={impl:e};return t.memoizedState=n,function(){if((se&2)!==0)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},dm={readContext:rn,use:Du,useCallback:bx,useContext:rn,useEffect:lm,useImperativeHandle:Mx,useInsertionEffect:xx,useLayoutEffect:yx,useMemo:Tx,useReducer:Fc,useRef:vx,useState:function(){return Fc(ls)},useDebugValue:cm,useDeferredValue:function(e,t){var n=Ve();return Ex(n,pe.memoizedState,e,t)},useTransition:function(){var e=Fc(ls)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:vl(e),t]},useSyncExternalStore:rx,useId:Rx,useHostTransitionStatus:hm,useFormState:mv,useActionState:mv,useOptimistic:function(e,t){var n=Ve();return fx(n,pe,e,t)},useMemoCache:rm,useCacheRefresh:Dx};dm.useEffectEvent=_x;var Ox={readContext:rn,use:Du,useCallback:bx,useContext:rn,useEffect:lm,useImperativeHandle:Mx,useInsertionEffect:xx,useLayoutEffect:yx,useMemo:Tx,useReducer:yd,useRef:vx,useState:function(){return yd(ls)},useDebugValue:cm,useDeferredValue:function(e,t){var n=Ve();return pe===null?um(n,e,t):Ex(n,pe.memoizedState,e,t)},useTransition:function(){var e=yd(ls)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:vl(e),t]},useSyncExternalStore:rx,useId:Rx,useHostTransitionStatus:hm,useFormState:gv,useActionState:gv,useOptimistic:function(e,t){var n=Ve();return pe!==null?fx(n,pe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:rm,useCacheRefresh:Dx};Ox.useEffectEvent=_x;function Sd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Gn(),s=Hs(i);s.payload=t,n!=null&&(s.callback=n),t=Gs(e,s,i),t!==null&&(An(t,e,i),Ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Gn(),s=Hs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Gs(e,s,i),t!==null&&(An(t,e,i),Ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gn(),i=Hs(n);i.tag=2,t!=null&&(i.callback=t),t=Gs(e,i,n),t!==null&&(An(t,e,n),Ho(t,e,n))}};function _v(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!$o(n,i)||!$o(s,a):!0}function xv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&dp.enqueueReplaceState(t,t.state,null)}function Oa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ee({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Px(e){jc(e)}function Bx(e){console.error(e)}function Fx(e){jc(e)}function ou(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function yv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function pp(e,t,n){return n=Hs(n),n.tag=3,n.payload={element:null},n.callback=function(){ou(e,t)},n}function zx(e){return e=Hs(e),e.tag=3,e}function Vx(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){yv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){yv(t,n,i),typeof s!="function"&&(ks===null?ks=new Set([this]):ks.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function X1(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Xr(t,n,s,!0),n=Xn.current,n!==null){switch(n.tag){case 31:case 13:return ci===null?fu():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===nu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Nd(e,i,s)),!1;case 22:return n.flags|=65536,i===nu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Nd(e,i,s)),!1}throw Error(J(435,n.tag))}return Nd(e,i,s),fu(),!1}if(jt)return t=Xn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==ep&&(e=Error(J(422),{cause:i}),el(oi(e,n)))):(i!==ep&&(t=Error(J(423),{cause:i}),el(oi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=oi(i,n),s=pp(e.stateNode,i,s),xd(e,s),Le!==4&&(Le=2)),!1;var a=Error(J(520),{cause:i});if(a=oi(a,n),Yo===null?Yo=[a]:Yo.push(a),Le!==4&&(Le=2),t===null)return!0;i=oi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=pp(n.stateNode,i,e),xd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ks===null||!ks.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=zx(s),Vx(s,e,n,i),xd(n,s),!1}n=n.return}while(n!==null);return!1}var pm=Error(J(461)),We=!1;function nn(e,t,n,i){t.child=e===null?tx(t,null,n,i):La(t,e.child,n,i)}function Sv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Na(t),i=nm(e,t,n,r,a,s),o=im(),e!==null&&!We?(sm(e,t,s),cs(e,t,s)):(jt&&o&&Zp(t),t.flags|=1,nn(e,t,i,s),t.child)}function Mv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Yp(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Hx(e,t,a,i,s)):(e=Pc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!mm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(r,i)&&e.ref===t.ref)return cs(e,t,s)}return t.flags|=1,e=is(a,i),e.ref=t.ref,e.return=t,t.child=e}function Hx(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if($o(a,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=a,mm(e,s))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,cs(e,t,s)}return mp(e,t,n,i,s)}function Gx(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return bv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bc(t,a!==null?a.cachePool:null),a!==null?hv(t,a):lp(),ix(t);else return i=t.lanes=536870912,bv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Bc(t,a.cachePool),hv(t,a),Ns(t),t.memoizedState=null):(e!==null&&Bc(t,null),lp(),Ns(t));return nn(e,t,s,n),t.child}function Oo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function bv(e,t,n,i,s){var a=Qp();return a=a===null?null:{parent:Xe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Bc(t,null),lp(),ix(t),e!==null&&Xr(e,t,i,!0),t.childLanes=s,null}function Vc(e,t){return t=lu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Tv(e,t,n){return La(t,e.child,null,n),e=Vc(t,t.pendingProps),e.flags|=2,Pn(t),t.memoizedState=null,e}function W1(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(jt){if(i.mode==="hidden")return e=Vc(t,i),t.lanes=536870912,Oo(null,e);if(cp(t),(e=Te)?(e=Iy(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zs!==null?{id:Ri,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},n=Y_(e),n.return=t,t.child=n,an=t,Te=null)):e=null,e===null)throw Js(t);return t.lanes=536870912,null}return Vc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(cp(t),s)if(t.flags&256)t.flags&=-257,t=Tv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(We||Xr(e,t,n,!1),s=(n&e.childLanes)!==0,We||s){if(i=_e,i!==null&&(r=x_(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,za(e,r),An(i,e,r),pm;fu(),t=Tv(e,t,n)}else e=a.treeContext,Te=ui(r.nextSibling),an=t,jt=!0,Vs=null,li=!1,e!==null&&J_(t,e),t=Vc(t,i),t.flags|=4096;return t}return e=is(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mp(e,t,n,i,s){return Na(t),n=nm(e,t,n,i,void 0,s),i=im(),e!==null&&!We?(sm(e,t,s),cs(e,t,s)):(jt&&i&&Zp(t),t.flags|=1,nn(e,t,n,s),t.child)}function Ev(e,t,n,i,s,a){return Na(t),t.updateQueue=null,n=ax(t,i,n,s),sx(e),i=im(),e!==null&&!We?(sm(e,t,a),cs(e,t,a)):(jt&&i&&Zp(t),t.flags|=1,nn(e,t,n,a),t.child)}function Av(e,t,n,i,s){if(Na(t),t.stateNode===null){var a=yr,r=n.contextType;typeof r=="object"&&r!==null&&(a=rn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=dp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},$p(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?rn(r):yr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Sd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&dp.enqueueReplaceState(a,a.state,null),ko(t,i,a,s),Go(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Oa(n,o);a.props=l;var c=a.context,f=n.contextType;r=yr,typeof f=="object"&&f!==null&&(r=rn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&xv(t,a,i,r),Rs=!1;var u=t.memoizedState;a.state=u,ko(t,i,a,s),Go(),c=t.memoizedState,o||u!==c||Rs?(typeof p=="function"&&(Sd(t,n,p,i),c=t.memoizedState),(l=Rs||_v(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,rp(e,t),r=t.memoizedProps,f=Oa(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=yr,typeof c=="object"&&c!==null&&(l=rn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&xv(t,a,i,l),Rs=!1,u=t.memoizedState,a.state=u,ko(t,i,a,s),Go();var d=t.memoizedState;r!==p||u!==d||Rs||e!==null&&e.dependencies!==null&&eu(e.dependencies)?(typeof o=="function"&&(Sd(t,n,o,i),d=t.memoizedState),(f=Rs||_v(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&eu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Hc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=La(t,e.child,null,s),t.child=La(t,null,n,s)):nn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=cs(e,t,s),e}function wv(e,t,n,i){return Ua(),t.flags|=256,nn(e,t,n,i),t.child}var Md={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bd(e){return{baseLanes:e,cachePool:Q_()}}function Td(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Fn),e}function kx(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(jt){if(s?Us(t):Ns(t),(e=Te)?(e=Iy(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zs!==null?{id:Ri,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},n=Y_(e),n.return=t,t.child=n,an=t,Te=null)):e=null,e===null)throw Js(t);return Rp(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Ns(t),s=t.mode,o=lu({mode:"hidden",children:o},s),i=wa(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=bd(n),i.childLanes=Td(e,r,n),t.memoizedState=Md,Oo(null,i)):(Us(t),gp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Us(t),t.flags&=-257,t=Ed(e,t,n)):t.memoizedState!==null?(Ns(t),t.child=e.child,t.flags|=128,t=null):(Ns(t),o=i.fallback,s=t.mode,i=lu({mode:"visible",children:i.children},s),o=wa(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,La(t,e.child,null,n),i=t.child,i.memoizedState=bd(n),i.childLanes=Td(e,r,n),t.memoizedState=Md,t=Oo(null,i));else if(Us(t),Rp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(J(419)),i.stack="",i.digest=r,el({value:i,source:null,stack:null}),t=Ed(e,t,n)}else if(We||Xr(e,t,n,!1),r=(n&e.childLanes)!==0,We||r){if(r=_e,r!==null&&(i=x_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,za(e,i),An(r,e,i),pm;Cp(o)||fu(),t=Ed(e,t,n)}else Cp(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Te=ui(o.nextSibling),an=t,jt=!0,Vs=null,li=!1,e!==null&&J_(t,e),t=gp(t,i.children),t.flags|=4096);return t}return s?(Ns(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=is(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=is(c,o):(o=wa(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Oo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=bd(n):(s=o.cachePool,s!==null?(l=Xe._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=Q_(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Td(e,r,n),t.memoizedState=Md,Oo(e.child,i)):(Us(t),n=e.child,e=n.sibling,n=is(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function gp(e,t){return t=lu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function lu(e,t){return e=Bn(22,e,null,t),e.lanes=0,e}function Ed(e,t,n){return La(t,e.child,null,n),e=gp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ip(e.return,t,n)}function Ad(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Xx(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=ze.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ye(ze,r),nn(e,t,i,n),i=jt?tl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cv(e,n,t);else if(e.tag===19)Cv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&su(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ad(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&su(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ad(t,!0,n,null,a,i);break;case"together":Ad(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function cs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qs|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Xr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=is(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=is(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&eu(e)))}function q1(e,t,n){switch(t.tag){case 3:Zc(t,t.stateNode.containerInfo),Ds(t,Xe,e.memoizedState.cache),Ua();break;case 27:case 5:Xd(t);break;case 4:Zc(t,t.stateNode.containerInfo);break;case 10:Ds(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Us(t),t.flags|=128,null):(n&t.child.childLanes)!==0?kx(e,t,n):(Us(t),e=cs(e,t,n),e!==null?e.sibling:null);Us(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Xr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Xx(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(ze,ze.current),i)break;return null;case 22:return t.lanes=0,Gx(e,t,n,t.pendingProps);case 24:Ds(t,Xe,e.memoizedState.cache)}return cs(e,t,n)}function Wx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!mm(e,n)&&(t.flags&128)===0)return We=!1,q1(e,t,n);We=(e.flags&131072)!==0}else We=!1,jt&&(t.flags&1048576)!==0&&Z_(t,tl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")Yp(e)?(i=Oa(e,i),t.tag=1,t=Av(null,t,e,i,n)):(t.tag=0,t=mp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Lp){t.tag=11,t=Sv(null,t,e,i,n);break t}else if(s===Ip){t.tag=14,t=Mv(null,t,e,i,n);break t}}throw t=Gd(e)||e,Error(J(306,t,""))}}return t;case 0:return mp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Oa(i,t.pendingProps),Av(e,t,i,s,n);case 3:t:{if(Zc(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,rp(e,t),ko(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ds(t,Xe,i),i!==a.cache&&sp(t,[Xe],n,!0),Go(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=wv(e,t,i,n);break t}else if(i!==s){s=oi(Error(J(424)),t),el(s),t=wv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Te=ui(e.firstChild),an=t,jt=!0,Vs=null,li=!0,n=tx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ua(),i===s){t=cs(e,t,n);break t}nn(e,t,i,n)}t=t.child}return t;case 26:return Hc(e,t),e===null?(n=Kv(t.type,null,t.pendingProps,null))?t.memoizedState=n:jt||(n=t.type,e=t.pendingProps,i=gu(zs.current).createElement(n),i[sn]=t,i[wn]=e,on(i,n,e),je(i),t.stateNode=i):t.memoizedState=Kv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Xd(t),e===null&&jt&&(i=t.stateNode=Oy(t.type,t.pendingProps,zs.current),an=t,li=!0,s=Te,$s(t.type)?(Dp=s,Te=ui(i.firstChild)):Te=s),nn(e,t,t.pendingProps.children,n),Hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&jt&&((s=i=Te)&&(i=yT(i,t.type,t.pendingProps,li),i!==null?(t.stateNode=i,an=t,Te=ui(i.firstChild),li=!1,s=!0):s=!1),s||Js(t)),Xd(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Ap(s,a)?i=null:r!==null&&Ap(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=nm(e,t,B1,null,null,n),ol._currentValue=s),Hc(e,t),nn(e,t,i,n),t.child;case 6:return e===null&&jt&&((e=n=Te)&&(n=ST(n,t.pendingProps,li),n!==null?(t.stateNode=n,an=t,Te=null,e=!0):e=!1),e||Js(t)),null;case 13:return kx(e,t,n);case 4:return Zc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=La(t,null,i,n):nn(e,t,i,n),t.child;case 11:return Sv(e,t,t.type,t.pendingProps,n);case 7:return nn(e,t,t.pendingProps,n),t.child;case 8:return nn(e,t,t.pendingProps.children,n),t.child;case 12:return nn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ds(t,t.type,i.value),nn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Na(t),s=rn(s),i=i(s),t.flags|=1,nn(e,t,i,n),t.child;case 14:return Mv(e,t,t.type,t.pendingProps,n);case 15:return Hx(e,t,t.type,t.pendingProps,n);case 19:return Xx(e,t,n);case 31:return W1(e,t,n);case 22:return Gx(e,t,n,t.pendingProps);case 24:return Na(t),i=rn(Xe),e===null?(s=Qp(),s===null&&(s=_e,a=Kp(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},$p(t),Ds(t,Xe,s)):((e.lanes&n)!==0&&(rp(e,t),ko(t,null,null,n),Go()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ds(t,Xe,i)):(i=a.cache,Ds(t,Xe,i),i!==s.cache&&sp(t,[Xe],n,!0))),nn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function Zi(e){e.flags|=4}function wd(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(my())e.flags|=8192;else throw Ra=nu,jp}else e.flags&=-16777217}function Rv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fy(t))if(my())e.flags|=8192;else throw Ra=nu,jp}function Ec(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?g_():536870912,e.lanes|=t,Br|=t)}function Co(e,t){if(!jt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Y1(e,t,n){var i=t.pendingProps;switch(Jp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ss(Xe),Ur(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(lr(t)?Zi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_d())),be(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Zi(t),a!==null?(be(t),Rv(t,a)):(be(t),wd(t,s,null,i,n))):a?a!==e.memoizedState?(Zi(t),be(t),Rv(t,a)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Zi(t),be(t),wd(t,s,e,i,n)),null;case 27:if(Jc(t),n=zs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Zi(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return be(t),null}e=Ni.current,lr(t)?sv(t,e):(e=Oy(s,i,n),t.stateNode=e,Zi(t))}return be(t),null;case 5:if(Jc(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Zi(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return be(t),null}if(a=Ni.current,lr(t))sv(t,a);else{var r=gu(zs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[sn]=t,a[wn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(on(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Zi(t)}}return be(t),wd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Zi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=zs.current,lr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=an,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[sn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Uy(e.nodeValue,n)),e||Js(t,!0)}else e=gu(e).createTextNode(i),e[sn]=t,t.stateNode=e}return be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=lr(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[sn]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else n=_d(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Pn(t),t):(Pn(t),null);if((t.flags&128)!==0)throw Error(J(558))}return be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=lr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(J(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[sn]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),s=!1}else s=_d(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Pn(t),t):(Pn(t),null)}return Pn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ec(t,t.updateQueue),be(t),null);case 4:return Ur(),e===null&&Mm(t.stateNode.containerInfo),be(t),null;case 10:return ss(t.type),be(t),null;case 19:if($e(ze),i=t.memoizedState,i===null)return be(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Co(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=su(e),a!==null){for(t.flags|=128,Co(i,!1),e=a.updateQueue,t.updateQueue=e,Ec(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)q_(n,e),n=n.sibling;return ye(ze,ze.current&1|2),jt&&ji(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&zn()>uu&&(t.flags|=128,s=!0,Co(i,!1),t.lanes=4194304)}else{if(!s)if(e=su(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Ec(t,e),Co(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!jt)return be(t),null}else 2*zn()-i.renderingStartTime>uu&&n!==536870912&&(t.flags|=128,s=!0,Co(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=zn(),e.sibling=null,n=ze.current,ye(ze,s?n&1|2:n&1),jt&&ji(t,i.treeForkCount),e):(be(t),null);case 22:case 23:return Pn(t),tm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&Ec(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&$e(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ss(Xe),be(t),null;case 25:return null;case 30:return null}throw Error(J(156,t.tag))}function Z1(e,t){switch(Jp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ss(Xe),Ur(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jc(t),null;case 31:if(t.memoizedState!==null){if(Pn(t),t.alternate===null)throw Error(J(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Pn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(ze),null;case 4:return Ur(),null;case 10:return ss(t.type),null;case 22:case 23:return Pn(t),tm(),e!==null&&$e(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ss(Xe),null;case 25:return null;default:return null}}function qx(e,t){switch(Jp(t),t.tag){case 3:ss(Xe),Ur();break;case 26:case 27:case 5:Jc(t);break;case 4:Ur();break;case 31:t.memoizedState!==null&&Pn(t);break;case 13:Pn(t);break;case 19:$e(ze);break;case 10:ss(t.type);break;case 22:case 23:Pn(t),tm(),e!==null&&$e(Ca);break;case 24:ss(Xe)}}function _l(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ue(t,t.return,o)}}function Ks(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){ue(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){ue(t,t.return,f)}}function Yx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{nx(t,n)}catch(i){ue(e,e.return,i)}}}function Zx(e,t,n){n.props=Oa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ue(e,t,i)}}function Wo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){ue(e,t,s)}}function Ui(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ue(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ue(e,t,s)}else n.current=null}function Jx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ue(e,e.return,s)}}function Cd(e,t,n){try{var i=e.stateNode;pT(i,e.type,n,t),i[wn]=t}catch(s){ue(e,e.return,s)}}function Kx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$s(e.type)||e.tag===4}function Rd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Kx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$s(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=es));else if(i!==4&&(i===27&&$s(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(vp(e,t,n),e=e.sibling;e!==null;)vp(e,t,n),e=e.sibling}function cu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&$s(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(cu(e,t,n),e=e.sibling;e!==null;)cu(e,t,n),e=e.sibling}function Qx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);on(t,i,n),t[sn]=e,t[wn]=n}catch(a){ue(e,e.return,a)}}var $i=!1,ke=!1,Dd=!1,Dv=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function J1(e,t){if(e=e.containerInfo,Tp=yu,e=F_(e),Xp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,p=e,u=null;e:for(;;){for(var d;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++f===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ep={focusedElem:e,selectionRange:n},yu=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=Oa(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(b){ue(n,n.return,b)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)wp(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(J(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function jx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ki(e,n),i&4&&_l(5,n);break;case 1:if(Ki(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ue(n,n.return,r)}else{var s=Oa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ue(n,n.return,r)}}i&64&&Yx(n),i&512&&Wo(n,n.return);break;case 3:if(Ki(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{nx(e,t)}catch(r){ue(n,n.return,r)}}break;case 27:t===null&&i&4&&Qx(n);case 26:case 5:Ki(e,n),t===null&&i&4&&Jx(n),i&512&&Wo(n,n.return);break;case 12:Ki(e,n);break;case 31:Ki(e,n),i&4&&ey(e,n);break;case 13:Ki(e,n),i&4&&ny(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sT.bind(null,n),MT(e,n))));break;case 22:if(i=n.memoizedState!==null||$i,!i){t=t!==null&&t.memoizedState!==null||ke,s=$i;var a=ke;$i=i,(ke=t)&&!a?Qi(e,n,(n.subtreeFlags&8772)!==0):Ki(e,n),$i=s,ke=a}break;case 30:break;default:Ki(e,n)}}function $x(e){var t=e.alternate;t!==null&&(e.alternate=null,$x(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,Tn=!1;function Ji(e,t,n){for(n=n.child;n!==null;)ty(e,t,n),n=n.sibling}function ty(e,t,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 26:ke||Ui(n,t),Ji(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ke||Ui(n,t);var i=Ce,s=Tn;$s(n.type)&&(Ce=n.stateNode,Tn=!1),Ji(e,t,n),Jo(n.stateNode),Ce=i,Tn=s;break;case 5:ke||Ui(n,t);case 6:if(i=Ce,s=Tn,Ce=null,Ji(e,t,n),Ce=i,Tn=s,Ce!==null)if(Tn)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(a){ue(n,t,a)}else try{Ce.removeChild(n.stateNode)}catch(a){ue(n,t,a)}break;case 18:Ce!==null&&(Tn?(e=Ce,Wv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Hr(e)):Wv(Ce,n.stateNode));break;case 4:i=Ce,s=Tn,Ce=n.stateNode.containerInfo,Tn=!0,Ji(e,t,n),Ce=i,Tn=s;break;case 0:case 11:case 14:case 15:Ks(2,n,t),ke||Ks(4,n,t),Ji(e,t,n);break;case 1:ke||(Ui(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Zx(n,t,i)),Ji(e,t,n);break;case 21:Ji(e,t,n);break;case 22:ke=(i=ke)||n.memoizedState!==null,Ji(e,t,n),ke=i;break;default:Ji(e,t,n)}}function ey(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hr(e)}catch(n){ue(t,t.return,n)}}}function ny(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hr(e)}catch(n){ue(t,t.return,n)}}function K1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Dv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Dv),t;default:throw Error(J(435,e.tag))}}function Ac(e,t){var n=K1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=aT.bind(null,e,i);i.then(s,s)}})}function Mn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if($s(o.type)){Ce=o.stateNode,Tn=!1;break t}break;case 5:Ce=o.stateNode,Tn=!1;break t;case 3:case 4:Ce=o.stateNode.containerInfo,Tn=!0;break t}o=o.return}if(Ce===null)throw Error(J(160));ty(a,r,s),Ce=null,Tn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)iy(t,e),t=t.sibling}var mi=null;function iy(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Mn(t,e),bn(e),i&4&&(Ks(3,e,e.return),_l(3,e),Ks(5,e,e.return));break;case 1:Mn(t,e),bn(e),i&512&&(ke||n===null||Ui(n,n.return)),i&64&&$i&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=mi;if(Mn(t,e),bn(e),i&512&&(ke||n===null||Ui(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[pl]||a[sn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),on(a,i,n),a[sn]=e,je(a),i=a;break t;case"link":var r=jv("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),on(a,i,n),s.head.appendChild(a);break;case"meta":if(r=jv("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),on(a,i,n),s.head.appendChild(a);break;default:throw Error(J(468,i))}a[sn]=e,je(a),i=a}e.stateNode=i}else $v(s,e.type,e.stateNode);else e.stateNode=Qv(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?$v(s,e.type,e.stateNode):Qv(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Cd(e,e.memoizedProps,n.memoizedProps)}break;case 27:Mn(t,e),bn(e),i&512&&(ke||n===null||Ui(n,n.return)),n!==null&&i&4&&Cd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Mn(t,e),bn(e),i&512&&(ke||n===null||Ui(n,n.return)),e.flags&32){s=e.stateNode;try{Lr(s,"")}catch(_){ue(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Cd(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Dd=!0);break;case 6:if(Mn(t,e),bn(e),i&4){if(e.stateNode===null)throw Error(J(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){ue(e,e.return,_)}}break;case 3:if(Xc=null,s=mi,mi=vu(t.containerInfo),Mn(t,e),mi=s,bn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(_){ue(e,e.return,_)}Dd&&(Dd=!1,sy(e));break;case 4:i=mi,mi=vu(e.stateNode.containerInfo),Mn(t,e),bn(e),mi=i;break;case 12:Mn(t,e),bn(e);break;case 31:Mn(t,e),bn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ac(e,i)));break;case 13:Mn(t,e),bn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Lu=zn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ac(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=$i,f=ke;if($i=c||s,ke=f||l,Mn(t,e),ke=f,$i=c,bn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||$i||ke||Ea(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){ue(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){ue(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;s?qv(d,!0):qv(l.stateNode,!1)}catch(_){ue(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ac(e,n))));break;case 19:Mn(t,e),bn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ac(e,i)));break;case 30:break;case 21:break;default:Mn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Kx(i)){n=i;break}i=i.return}if(n==null)throw Error(J(160));switch(n.tag){case 27:var s=n.stateNode,a=Rd(e);cu(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Lr(r,""),n.flags&=-33);var o=Rd(e);cu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Rd(e);vp(e,c,l);break;default:throw Error(J(161))}}catch(f){ue(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sy(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ki(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jx(e,t.alternate,t),t=t.sibling}function Ea(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ks(4,t,t.return),Ea(t);break;case 1:Ui(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Zx(t,t.return,n),Ea(t);break;case 27:Jo(t.stateNode);case 26:case 5:Ui(t,t.return),Ea(t);break;case 22:t.memoizedState===null&&Ea(t);break;case 30:Ea(t);break;default:Ea(t)}e=e.sibling}}function Qi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(s,a,n),_l(4,a);break;case 1:if(Qi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ue(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)ex(l[s],o)}catch(c){ue(i,i.return,c)}}n&&r&64&&Yx(a),Wo(a,a.return);break;case 27:Qx(a);case 26:case 5:Qi(s,a,n),n&&i===null&&r&4&&Jx(a),Wo(a,a.return);break;case 12:Qi(s,a,n);break;case 31:Qi(s,a,n),n&&r&4&&ey(s,a);break;case 13:Qi(s,a,n),n&&r&4&&ny(s,a);break;case 22:a.memoizedState===null&&Qi(s,a,n),Wo(a,a.return);break;case 30:break;default:Qi(s,a,n)}t=t.sibling}}function gm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&gl(n))}function vm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gl(e))}function pi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ay(e,t,n,i),t=t.sibling}function ay(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:pi(e,t,n,i),s&2048&&_l(9,t);break;case 1:pi(e,t,n,i);break;case 3:pi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gl(e)));break;case 12:if(s&2048){pi(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ue(t,t.return,l)}}else pi(e,t,n,i);break;case 31:pi(e,t,n,i);break;case 13:pi(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?pi(e,t,n,i):qo(e,t):a._visibility&2?pi(e,t,n,i):(a._visibility|=2,ur(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&gm(r,t);break;case 24:pi(e,t,n,i),s&2048&&vm(t.alternate,t);break;default:pi(e,t,n,i)}}function ur(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:ur(a,r,o,l,s),_l(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?ur(a,r,o,l,s):qo(a,r):(f._visibility|=2,ur(a,r,o,l,s)),s&&c&2048&&gm(r.alternate,r);break;case 24:ur(a,r,o,l,s),s&&c&2048&&vm(r.alternate,r);break;default:ur(a,r,o,l,s)}t=t.sibling}}function qo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:qo(n,i),s&2048&&gm(i.alternate,i);break;case 24:qo(n,i),s&2048&&vm(i.alternate,i);break;default:qo(n,i)}t=t.sibling}}var Po=8192;function cr(e,t,n){if(e.subtreeFlags&Po)for(e=e.child;e!==null;)ry(e,t,n),e=e.sibling}function ry(e,t,n){switch(e.tag){case 26:cr(e,t,n),e.flags&Po&&e.memoizedState!==null&&IT(n,mi,e.memoizedState,e.memoizedProps);break;case 5:cr(e,t,n);break;case 3:case 4:var i=mi;mi=vu(e.stateNode.containerInfo),cr(e,t,n),mi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Po,Po=16777216,cr(e,t,n),Po=i):cr(e,t,n));break;default:cr(e,t,n)}}function oy(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ro(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,cy(i,e)}oy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ly(e),e=e.sibling}function ly(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Ks(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gc(e)):Ro(e);break;default:Ro(e)}}function Gc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,cy(i,e)}oy(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ks(8,t,t.return),Gc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gc(t));break;default:Gc(t)}e=e.sibling}}function cy(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:Ks(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:gl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var s=i.sibling,a=i.return;if($x(i),i===n){Qe=null;break t}if(s!==null){s.return=a,Qe=s;break t}Qe=a}}}var Q1={getCacheForType:function(e){var t=rn(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rn(Xe).controller.signal}},j1=typeof WeakMap=="function"?WeakMap:Map,se=0,_e=null,Zt=null,Jt=0,ce=0,On=null,Ps=!1,qr=!1,_m=!1,us=0,Le=0,Qs=0,Da=0,xm=0,Fn=0,Br=0,Yo=null,En=null,_p=!1,Lu=0,uy=0,uu=1/0,hu=null,ks=null,Ye=0,Xs=null,Fr=null,as=0,xp=0,yp=null,hy=null,Zo=0,Sp=null;function Gn(){return(se&2)!==0&&Jt!==0?Jt&-Jt:Ut.T!==null?Sm():y_()}function fy(){if(Fn===0)if((Jt&536870912)===0||jt){var e=gc;gc<<=1,(gc&3932160)===0&&(gc=262144),Fn=e}else Fn=536870912;return e=Xn.current,e!==null&&(e.flags|=32),Fn}function An(e,t,n){(e===_e&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(zr(e,0),Bs(e,Jt,Fn,!1)),dl(e,n),((se&2)===0||e!==_e)&&(e===_e&&((se&2)===0&&(Da|=n),Le===4&&Bs(e,Jt,Fn,!1)),Ii(e))}function dy(e,t,n){if((se&6)!==0)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||fl(e,t),s=i?eT(e,t):Ud(e,t,!0),a=i;do{if(s===0){qr&&!i&&Bs(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!$1(n)){s=Ud(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Yo;var l=o.current.memoizedState.isDehydrated;if(l&&(zr(o,r).flags|=256),r=Ud(o,r,!1),r!==2){if(_m&&!l){o.errorRecoveryDisabledLanes|=a,Da|=a,s=4;break t}a=En,En=s,a!==null&&(En===null?En=a:En.push.apply(En,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){zr(e,0),Bs(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t)break;case 6:Bs(i,t,Fn,!Ps);break t;case 2:En=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(s=Lu+300-zn(),10<s)){if(Bs(i,t,Fn,!Ps),Mu(i,0,!0)!==0)break t;as=t,i.timeoutHandle=Ly(Uv.bind(null,i,n,En,hu,_p,t,Fn,Da,Br,Ps,a,"Throttled",-0,0),s);break t}Uv(i,n,En,hu,_p,t,Fn,Da,Br,Ps,a,null,-0,0)}}break}while(!0);Ii(e)}function Uv(e,t,n,i,s,a,r,o,l,c,f,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:es},ry(t,a,p);var _=(a&62914560)===a?Lu-zn():(a&4194048)===a?uy-zn():0;if(_=OT(p,_),_!==null){as=a,e.cancelPendingCommit=_(Lv.bind(null,e,t,a,n,i,s,r,o,l,f,p,null,u,d)),Bs(e,a,r,!c);return}}Lv(e,t,a,n,i,s,r,o,l)}function $1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!kn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bs(e,t,n,i){t&=~xm,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Hn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&v_(e,n,t)}function Iu(){return(se&6)===0?(xl(0,!1),!1):!0}function ym(){if(Zt!==null){if(ce===0)var e=Zt.return;else e=Zt,ns=Va=null,am(e),Cr=null,nl=0,e=Zt;for(;e!==null;)qx(e.alternate,e),e=e.return;Zt=null}}function zr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,vT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),as=0,ym(),_e=e,Zt=n=is(e.current,null),Jt=t,ce=0,On=null,Ps=!1,qr=fl(e,t),_m=!1,Br=Fn=xm=Da=Qs=Le=0,En=Yo=null,_p=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Hn(i),a=1<<s;t|=e[s],i&=~a}return us=t,Au(),n}function py(e,t){Vt=null,Ut.H=sl,t===Wr||t===Cu?(t=cv(),ce=3):t===jp?(t=cv(),ce=4):ce=t===pm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,On=t,Zt===null&&(Le=1,ou(e,oi(t,e.current)))}function my(){var e=Xn.current;return e===null?!0:(Jt&4194048)===Jt?ci===null:(Jt&62914560)===Jt||(Jt&536870912)!==0?e===ci:!1}function gy(){var e=Ut.H;return Ut.H=sl,e===null?sl:e}function vy(){var e=Ut.A;return Ut.A=Q1,e}function fu(){Le=4,Ps||(Jt&4194048)!==Jt&&Xn.current!==null||(qr=!0),(Qs&134217727)===0&&(Da&134217727)===0||_e===null||Bs(_e,Jt,Fn,!1)}function Ud(e,t,n){var i=se;se|=2;var s=gy(),a=vy();(_e!==e||Jt!==t)&&(hu=null,zr(e,t)),t=!1;var r=Le;t:do try{if(ce!==0&&Zt!==null){var o=Zt,l=On;switch(ce){case 8:ym(),r=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(t=!0);var c=ce;if(ce=0,On=null,br(e,o,l,c),n&&qr){r=0;break t}break;default:c=ce,ce=0,On=null,br(e,o,l,c)}}tT(),r=Le;break}catch(f){py(e,f)}while(!0);return t&&e.shellSuspendCounter++,ns=Va=null,se=i,Ut.H=s,Ut.A=a,Zt===null&&(_e=null,Jt=0,Au()),r}function tT(){for(;Zt!==null;)_y(Zt)}function eT(e,t){var n=se;se|=2;var i=gy(),s=vy();_e!==e||Jt!==t?(hu=null,uu=zn()+500,zr(e,t)):qr=fl(e,t);t:do try{if(ce!==0&&Zt!==null){t=Zt;var a=On;e:switch(ce){case 1:ce=0,On=null,br(e,t,a,1);break;case 2:case 9:if(lv(a)){ce=0,On=null,Nv(t);break}t=function(){ce!==2&&ce!==9||_e!==e||(ce=7),Ii(e)},a.then(t,t);break t;case 3:ce=7;break t;case 4:ce=5;break t;case 7:lv(a)?(ce=0,On=null,Nv(t)):(ce=0,On=null,br(e,t,a,7));break;case 5:var r=null;switch(Zt.tag){case 26:r=Zt.memoizedState;case 5:case 27:var o=Zt;if(r?Fy(r):o.stateNode.complete){ce=0,On=null;var l=o.sibling;if(l!==null)Zt=l;else{var c=o.return;c!==null?(Zt=c,Ou(c)):Zt=null}break e}}ce=0,On=null,br(e,t,a,5);break;case 6:ce=0,On=null,br(e,t,a,6);break;case 8:ym(),Le=6;break t;default:throw Error(J(462))}}nT();break}catch(f){py(e,f)}while(!0);return ns=Va=null,Ut.H=i,Ut.A=s,se=n,Zt!==null?0:(_e=null,Jt=0,Au(),Le)}function nT(){for(;Zt!==null&&!Eb();)_y(Zt)}function _y(e){var t=Wx(e.alternate,e,us);e.memoizedProps=e.pendingProps,t===null?Ou(e):Zt=t}function Nv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ev(n,t,t.pendingProps,t.type,void 0,Jt);break;case 11:t=Ev(n,t,t.pendingProps,t.type.render,t.ref,Jt);break;case 5:am(t);default:qx(n,t),t=Zt=q_(t,us),t=Wx(n,t,us)}e.memoizedProps=e.pendingProps,t===null?Ou(e):Zt=t}function br(e,t,n,i){ns=Va=null,am(t),Cr=null,nl=0;var s=t.return;try{if(X1(e,s,t,n,Jt)){Le=1,ou(e,oi(n,e.current)),Zt=null;return}}catch(a){if(s!==null)throw Zt=s,a;Le=1,ou(e,oi(n,e.current)),Zt=null;return}t.flags&32768?(jt||i===1?e=!0:qr||(Jt&536870912)!==0?e=!1:(Ps=e=!0,(i===2||i===9||i===3||i===6)&&(i=Xn.current,i!==null&&i.tag===13&&(i.flags|=16384))),xy(t,e)):Ou(t)}function Ou(e){var t=e;do{if((t.flags&32768)!==0){xy(t,Ps);return}e=t.return;var n=Y1(t.alternate,t,us);if(n!==null){Zt=n;return}if(t=t.sibling,t!==null){Zt=t;return}Zt=t=e}while(t!==null);Le===0&&(Le=5)}function xy(e,t){do{var n=Z1(e.alternate,e);if(n!==null){n.flags&=32767,Zt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Zt=e;return}Zt=e=n}while(e!==null);Le=6,Zt=null}function Lv(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do Pu();while(Ye!==0);if((se&6)!==0)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));if(a=t.lanes|t.childLanes,a|=Wp,Ob(e,n,a,r,o,l),e===_e&&(Zt=_e=null,Jt=0),Fr=t,Xs=e,as=n,xp=a,yp=s,hy=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rT(Kc,function(){return Ty(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ut.T,Ut.T=null,s=ae.p,ae.p=2,r=se,se|=4;try{J1(e,t,n)}finally{se=r,ae.p=s,Ut.T=i}}Ye=1,yy(),Sy(),My()}}function yy(){if(Ye===1){Ye=0;var e=Xs,t=Fr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Ut.T,Ut.T=null;var i=ae.p;ae.p=2;var s=se;se|=4;try{iy(t,e);var a=Ep,r=F_(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&B_(o.ownerDocument.documentElement,o)){if(l!==null&&Xp(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),_=o.textContent.length,b=Math.min(l.start,_),g=l.end===void 0?b:Math.min(l.end,_);!d.extend&&b>g&&(r=g,g=b,b=r);var h=ev(o,b),m=ev(o,g);if(h&&m&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var x=p.createRange();x.setStart(h.node,h.offset),d.removeAllRanges(),b>g?(d.addRange(x),d.extend(m.node,m.offset)):(x.setEnd(m.node,m.offset),d.addRange(x))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var S=p[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}yu=!!Tp,Ep=Tp=null}finally{se=s,ae.p=i,Ut.T=n}}e.current=t,Ye=2}}function Sy(){if(Ye===2){Ye=0;var e=Xs,t=Fr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ut.T,Ut.T=null;var i=ae.p;ae.p=2;var s=se;se|=4;try{jx(e,t.alternate,t)}finally{se=s,ae.p=i,Ut.T=n}}Ye=3}}function My(){if(Ye===4||Ye===3){Ye=0,Ab();var e=Xs,t=Fr,n=as,i=hy;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,Fr=Xs=null,by(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ks=null),Bp(n),t=t.stateNode,Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ut.T,s=ae.p,ae.p=2,Ut.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Ut.T=t,ae.p=s}}(as&3)!==0&&Pu(),Ii(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Sp?Zo++:(Zo=0,Sp=e):Zo=0,xl(0,!1)}}function by(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gl(t)))}function Pu(){return yy(),Sy(),My(),Ty()}function Ty(){if(Ye!==5)return!1;var e=Xs,t=xp;xp=0;var n=Bp(as),i=Ut.T,s=ae.p;try{ae.p=32>n?32:n,Ut.T=null,n=yp,yp=null;var a=Xs,r=as;if(Ye=0,Fr=Xs=null,as=0,(se&6)!==0)throw Error(J(331));var o=se;if(se|=4,ly(a.current),ay(a,a.current,r,n),se=o,xl(0,!1),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(hl,a)}catch{}return!0}finally{ae.p=s,Ut.T=i,by(e,t)}}function Iv(e,t,n){t=oi(n,t),t=pp(e.stateNode,t,2),e=Gs(e,t,2),e!==null&&(dl(e,2),Ii(e))}function ue(e,t,n){if(e.tag===3)Iv(e,e,n);else for(;t!==null;){if(t.tag===3){Iv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ks===null||!ks.has(i))){e=oi(n,e),n=zx(2),i=Gs(t,n,2),i!==null&&(Vx(n,i,t,e),dl(i,2),Ii(i));break}}t=t.return}}function Nd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new j1;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(_m=!0,s.add(n),e=iT.bind(null,e,t,n),t.then(e,e))}function iT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(Jt&n)===n&&(Le===4||Le===3&&(Jt&62914560)===Jt&&300>zn()-Lu?(se&2)===0&&zr(e,0):xm|=n,Br===Jt&&(Br=0)),Ii(e)}function Ey(e,t){t===0&&(t=g_()),e=za(e,t),e!==null&&(dl(e,t),Ii(e))}function sT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ey(e,n)}function aT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),Ey(e,n)}function rT(e,t){return Op(e,t)}var du=null,hr=null,Mp=!1,pu=!1,Ld=!1,Fs=0;function Ii(e){e!==hr&&e.next===null&&(hr===null?du=hr=e:hr=hr.next=e),pu=!0,Mp||(Mp=!0,lT())}function xl(e,t){if(!Ld&&pu){Ld=!0;do for(var n=!1,i=du;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Hn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Ov(i,a))}else a=Jt,a=Mu(i,i===_e?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||fl(i,a)||(n=!0,Ov(i,a));i=i.next}while(n);Ld=!1}}function oT(){Ay()}function Ay(){pu=Mp=!1;var e=0;Fs!==0&&gT()&&(e=Fs);for(var t=zn(),n=null,i=du;i!==null;){var s=i.next,a=wy(i,t);a===0?(i.next=null,n===null?du=s:n.next=s,s===null&&(hr=n)):(n=i,(e!==0||(a&3)!==0)&&(pu=!0)),i=s}Ye!==0&&Ye!==5||xl(e,!1),Fs!==0&&(Fs=0)}function wy(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Hn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=Ib(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=_e,n=Jt,n=Mu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ld(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||fl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ld(i),Bp(n)){case 2:case 8:n=p_;break;case 32:n=Kc;break;case 268435456:n=m_;break;default:n=Kc}return i=Cy.bind(null,e),n=Op(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ld(i),e.callbackPriority=2,e.callbackNode=null,2}function Cy(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Pu()&&e.callbackNode!==n)return null;var i=Jt;return i=Mu(e,e===_e?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(dy(e,i,t),wy(e,zn()),e.callbackNode!=null&&e.callbackNode===n?Cy.bind(null,e):null)}function Ov(e,t){if(Pu())return null;dy(e,t,!0)}function lT(){_T(function(){(se&6)!==0?Op(d_,oT):Ay()})}function Sm(){if(Fs===0){var e=Ir;e===0&&(e=mc,mc<<=1,(mc&261888)===0&&(mc=256)),Fs=e}return Fs}function Pv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Lc(""+e)}function Bv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function cT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Pv((s[wn]||null).action),r=i.submitter;r&&(t=(t=r[wn]||null)?Pv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new bu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Fs!==0){var l=r?Bv(s,r):new FormData(s);fp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?Bv(s,r):new FormData(s),fp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(wc=0;wc<tp.length;wc++)Cc=tp[wc],Fv=Cc.toLowerCase(),zv=Cc[0].toUpperCase()+Cc.slice(1),gi(Fv,"on"+zv);var Cc,Fv,zv,wc;gi(V_,"onAnimationEnd");gi(H_,"onAnimationIteration");gi(G_,"onAnimationStart");gi("dblclick","onDoubleClick");gi("focusin","onFocus");gi("focusout","onBlur");gi(w1,"onTransitionRun");gi(C1,"onTransitionStart");gi(R1,"onTransitionCancel");gi(k_,"onTransitionEnd");Nr("onMouseEnter",["mouseout","mouseover"]);Nr("onMouseLeave",["mouseout","mouseover"]);Nr("onPointerEnter",["pointerout","pointerover"]);Nr("onPointerLeave",["pointerout","pointerover"]);Pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function Ry(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){jc(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){jc(f)}s.currentTarget=null,a=l}}}}function Yt(e,t){var n=t[qd];n===void 0&&(n=t[qd]=new Set);var i=e+"__bubble";n.has(i)||(Dy(t,e,2,!1),n.add(i))}function Id(e,t,n){var i=0;t&&(i|=4),Dy(n,e,i,t)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Mm(e){if(!e[Rc]){e[Rc]=!0,S_.forEach(function(n){n!=="selectionchange"&&(uT.has(n)||Id(n,!1,e),Id(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rc]||(t[Rc]=!0,Id("selectionchange",!1,t))}}function Dy(e,t,n,i){switch(ky(t)){case 2:var s=FT;break;case 8:s=zT;break;default:s=Am}n=s.bind(null,t,n,e),s=void 0,!Qd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Od(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=pr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}R_(function(){var c=a,f=Vp(n),p=[];t:{var u=X_.get(e);if(u!==void 0){var d=bu,_=e;switch(e){case"keypress":if(Oc(n)===0)break t;case"keydown":case"keyup":d=a1;break;case"focusin":_="focus",d=dd;break;case"focusout":_="blur",d=dd;break;case"beforeblur":case"afterblur":d=dd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=q0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Yb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=l1;break;case V_:case H_:case G_:d=Kb;break;case k_:d=u1;break;case"scroll":case"scrollend":d=Wb;break;case"wheel":d=f1;break;case"copy":case"cut":case"paste":d=jb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Z0;break;case"toggle":case"beforetoggle":d=p1}var b=(t&4)!==0,g=!b&&(e==="scroll"||e==="scrollend"),h=b?u!==null?u+"Capture":null:u;b=[];for(var m=c,x;m!==null;){var S=m;if(x=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||x===null||h===null||(S=Qo(m,h),S!=null&&b.push(rl(m,S,x))),g)break;m=m.return}0<b.length&&(u=new d(u,_,null,n,f),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==Kd&&(_=n.relatedTarget||n.fromElement)&&(pr(_)||_[Gr]))break t;if((d||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,d?(_=n.relatedTarget||n.toElement,d=c,_=_?pr(_):null,_!==null&&(g=ul(_),b=_.tag,_!==g||b!==5&&b!==27&&b!==6)&&(_=null)):(d=null,_=c),d!==_)){if(b=q0,S="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=Z0,S="onPointerLeave",h="onPointerEnter",m="pointer"),g=d==null?u:Io(d),x=_==null?u:Io(_),u=new b(S,m+"leave",d,n,f),u.target=g,u.relatedTarget=x,S=null,pr(f)===c&&(b=new b(h,m+"enter",_,n,f),b.target=x,b.relatedTarget=g,S=b),g=S,d&&_)e:{for(b=hT,h=d,m=_,x=0,S=h;S;S=b(S))x++;S=0;for(var w=m;w;w=b(w))S++;for(;0<x-S;)h=b(h),x--;for(;0<S-x;)m=b(m),S--;for(;x--;){if(h===m||m!==null&&h===m.alternate){b=h;break e}h=b(h),m=b(m)}b=null}else b=null;d!==null&&Vv(p,u,d,b,!1),_!==null&&g!==null&&Vv(p,g,_,b,!0)}}t:{if(u=c?Io(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var E=j0;else if(Q0(u))if(O_)E=T1;else{E=M1;var C=S1}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&zp(c.elementType)&&(E=j0):E=b1;if(E&&(E=E(e,c))){I_(p,E,n,f);break t}C&&C(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Jd(u,"number",u.value)}switch(C=c?Io(c):window,e){case"focusin":(Q0(C)||C.contentEditable==="true")&&(vr=C,jd=c,zo=null);break;case"focusout":zo=jd=vr=null;break;case"mousedown":$d=!0;break;case"contextmenu":case"mouseup":case"dragend":$d=!1,nv(p,n,f);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":nv(p,n,f)}var y;if(kp)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else gr?N_(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(U_&&n.locale!=="ko"&&(gr||A!=="onCompositionStart"?A==="onCompositionEnd"&&gr&&(y=D_()):(Os=f,Hp="value"in Os?Os.value:Os.textContent,gr=!0)),C=mu(c,A),0<C.length&&(A=new Y0(A,e,null,n,f),p.push({event:A,listeners:C}),y?A.data=y:(y=L_(n),y!==null&&(A.data=y)))),(y=g1?v1(e,n):_1(e,n))&&(A=mu(c,"onBeforeInput"),0<A.length&&(C=new Y0("onBeforeInput","beforeinput",null,n,f),p.push({event:C,listeners:A}),C.data=y)),cT(p,e,c,n,f)}Ry(p,t)})}function rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Qo(e,n),s!=null&&i.unshift(rl(e,s,a)),s=Qo(e,t),s!=null&&i.push(rl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function hT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Qo(n,a),c!=null&&r.unshift(rl(n,c,l))):s||(c=Qo(n,a),c!=null&&r.push(rl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var fT=/\r\n?/g,dT=/\u0000|\uFFFD/g;function Hv(e){return(typeof e=="string"?e:""+e).replace(fT,`
`).replace(dT,"")}function Uy(e,t){return t=Hv(t),Hv(e)===t}function de(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Lr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Lr(e,""+i);break;case"className":_c(e,"class",i);break;case"tabIndex":_c(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":_c(e,n,i);break;case"style":C_(e,i,a);break;case"data":if(t!=="object"){_c(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Lc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&de(e,t,"name",s.name,s,null),de(e,t,"formEncType",s.formEncType,s,null),de(e,t,"formMethod",s.formMethod,s,null),de(e,t,"formTarget",s.formTarget,s,null)):(de(e,t,"encType",s.encType,s,null),de(e,t,"method",s.method,s,null),de(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Lc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=es);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Lc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Yt("beforetoggle",e),Yt("toggle",e),Nc(e,"popover",i);break;case"xlinkActuate":Yi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Yi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Yi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Yi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Yi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Yi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Yi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Yi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Yi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Nc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=kb.get(n)||n,Nc(e,n,i))}}function bp(e,t,n,i,s,a){switch(n){case"style":C_(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Lr(e,i):(typeof i=="number"||typeof i=="bigint")&&Lr(e,""+i);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=es);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!M_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[wn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Nc(e,n,i)}}}function on(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yt("error",e),Yt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:de(e,t,a,r,n,null)}}s&&de(e,t,"srcSet",n.srcSet,n,null),i&&de(e,t,"src",n.src,n,null);return;case"input":Yt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(J(137,t));break;default:de(e,t,i,f,n,null)}}E_(e,a,o,l,c,r,s,!1);return;case"select":Yt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:de(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Er(e,!!i,t,!1):n!=null&&Er(e,!!i,n,!0);return;case"textarea":Yt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:de(e,t,r,o,n,null)}w_(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":de(e,t,l,i,n,null));return;case"dialog":Yt("beforetoggle",e),Yt("toggle",e),Yt("cancel",e),Yt("close",e);break;case"iframe":case"object":Yt("load",e);break;case"video":case"audio":for(i=0;i<al.length;i++)Yt(al[i],e);break;case"image":Yt("error",e),Yt("load",e);break;case"details":Yt("toggle",e);break;case"embed":case"source":case"link":Yt("error",e),Yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:de(e,t,c,i,n,null)}return;default:if(zp(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&bp(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&de(e,t,o,i,n,null))}function pT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||de(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":f=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(J(137,t));break;default:d!==p&&de(e,t,u,d,i,p)}}Zd(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||de(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&de(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?Er(e,!!n,u,!1):!!i!=!!n&&(t!=null?Er(e,!!n,t,!0):Er(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:de(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(J(91));break;default:s!==a&&de(e,t,r,s,i,a)}A_(e,u,d);return;case"option":for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:de(e,t,_,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":de(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&de(e,t,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(J(137,t));break;default:de(e,t,c,u,i,d)}return;default:if(zp(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&bp(e,t,g,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||bp(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&de(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||de(e,t,p,u,i,d)}function Gv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Gv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&Gv(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tp=null,Ep=null;function gu(e){return e.nodeType===9?e:e.ownerDocument}function kv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ny(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ap(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pd=null;function gT(){var e=window.event;return e&&e.type==="popstate"?e===Pd?!1:(Pd=e,!0):(Pd=null,!1)}var Ly=typeof setTimeout=="function"?setTimeout:void 0,vT=typeof clearTimeout=="function"?clearTimeout:void 0,Xv=typeof Promise=="function"?Promise:void 0,_T=typeof queueMicrotask=="function"?queueMicrotask:typeof Xv<"u"?function(e){return Xv.resolve(null).then(e).catch(xT)}:Ly;function xT(e){setTimeout(function(){throw e})}function $s(e){return e==="head"}function Wv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Hr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Jo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Jo(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[pl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Jo(e.ownerDocument.body);n=s}while(n);Hr(t)}function qv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function wp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wp(n),Fp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function yT(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[pl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function ST(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Iy(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ui(e.nextSibling),e===null))return null;return e}function Cp(e){return e.data==="$?"||e.data==="$~"}function Rp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function MT(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ui(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Dp=null;function Yv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ui(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Zv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Oy(e,t,n){switch(t=gu(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function Jo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fp(e)}var hi=new Map,Jv=new Set;function vu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var hs=ae.d;ae.d={f:bT,r:TT,D:ET,C:AT,L:wT,m:CT,X:DT,S:RT,M:UT};function bT(){var e=hs.f(),t=Iu();return e||t}function TT(e){var t=kr(e);t!==null&&t.tag===5&&t.type==="form"?Cx(t):hs.r(e)}var Yr=typeof document>"u"?null:document;function Py(e,t,n){var i=Yr;if(i&&typeof t=="string"&&t){var s=ri(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Jv.has(s)||(Jv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),on(t,"link",e),je(t),i.head.appendChild(t)))}}function ET(e){hs.D(e),Py("dns-prefetch",e,null)}function AT(e,t){hs.C(e,t),Py("preconnect",e,t)}function wT(e,t,n){hs.L(e,t,n);var i=Yr;if(i&&e&&t){var s='link[rel="preload"][as="'+ri(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ri(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ri(n.imageSizes)+'"]')):s+='[href="'+ri(e)+'"]';var a=s;switch(t){case"style":a=Vr(e);break;case"script":a=Zr(e)}hi.has(a)||(e=Ee({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(yl(a))||t==="script"&&i.querySelector(Sl(a))||(t=i.createElement("link"),on(t,"link",e),je(t),i.head.appendChild(t)))}}function CT(e,t){hs.m(e,t);var n=Yr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ri(i)+'"][href="'+ri(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Zr(e)}if(!hi.has(a)&&(e=Ee({rel:"modulepreload",href:e},t),hi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sl(a)))return}i=n.createElement("link"),on(i,"link",e),je(i),n.head.appendChild(i)}}}function RT(e,t,n){hs.S(e,t,n);var i=Yr;if(i&&e){var s=Tr(i).hoistableStyles,a=Vr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(yl(a)))o.loading=5;else{e=Ee({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hi.get(a))&&bm(e,n);var l=r=i.createElement("link");je(l),on(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,kc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function DT(e,t){hs.X(e,t);var n=Yr;if(n&&e){var i=Tr(n).hoistableScripts,s=Zr(e),a=i.get(s);a||(a=n.querySelector(Sl(s)),a||(e=Ee({src:e,async:!0},t),(t=hi.get(s))&&Tm(e,t),a=n.createElement("script"),je(a),on(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function UT(e,t){hs.M(e,t);var n=Yr;if(n&&e){var i=Tr(n).hoistableScripts,s=Zr(e),a=i.get(s);a||(a=n.querySelector(Sl(s)),a||(e=Ee({src:e,async:!0,type:"module"},t),(t=hi.get(s))&&Tm(e,t),a=n.createElement("script"),je(a),on(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Kv(e,t,n,i){var s=(s=zs.current)?vu(s):null;if(!s)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Vr(n.href),n=Tr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Vr(n.href);var a=Tr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(yl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),hi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hi.set(e,n),a||NT(s,e,n,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Zr(n),n=Tr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function Vr(e){return'href="'+ri(e)+'"'}function yl(e){return'link[rel="stylesheet"]['+e+"]"}function By(e){return Ee({},e,{"data-precedence":e.precedence,precedence:null})}function NT(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),on(t,"link",n),je(t),e.head.appendChild(t))}function Zr(e){return'[src="'+ri(e)+'"]'}function Sl(e){return"script[async]"+e}function Qv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ri(n.href)+'"]');if(i)return t.instance=i,je(i),i;var s=Ee({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),je(i),on(i,"style",s),kc(i,n.precedence,e),t.instance=i;case"stylesheet":s=Vr(n.href);var a=e.querySelector(yl(s));if(a)return t.state.loading|=4,t.instance=a,je(a),a;i=By(n),(s=hi.get(s))&&bm(i,s),a=(e.ownerDocument||e).createElement("link"),je(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(a,"link",i),t.state.loading|=4,kc(a,n.precedence,e),t.instance=a;case"script":return a=Zr(n.src),(s=e.querySelector(Sl(a)))?(t.instance=s,je(s),s):(i=n,(s=hi.get(a))&&(i=Ee({},n),Tm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),je(s),on(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,kc(i,n.precedence,e));return t.instance}function kc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function bm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Tm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xc=null;function jv(e,t,n){if(Xc===null){var i=new Map,s=Xc=new Map;s.set(n,i)}else s=Xc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[pl]||a[sn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function $v(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function LT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Fy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function IT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Vr(i.href),a=t.querySelector(yl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_u.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,je(a);return}a=t.ownerDocument||t,i=By(i),(s=hi.get(s))&&bm(i,s),a=a.createElement("link"),je(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=_u.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Bd=0;function OT(e,t){return e.stylesheets&&e.count===0&&Wc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Wc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Bd===0&&(Bd=62500*mT());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Bd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function _u(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xu=null;function Wc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xu=new Map,t.forEach(PT,e),xu=null,_u.call(e))}function PT(e,t){if(!(t.state.loading&4)){var n=xu.get(e);if(n)var i=n.get(null);else{n=new Map,xu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=_u.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var ol={$$typeof:ts,Provider:null,Consumer:null,_currentValue:Aa,_currentValue2:Aa,_threadCount:0};function BT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cd(0),this.hiddenUpdates=cd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function zy(e,t,n,i,s,a,r,o,l,c,f,p){return e=new BT(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=Bn(3,null,null,t),e.current=a,a.stateNode=e,t=Kp(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},$p(a),e}function Vy(e){return e?(e=yr,e):yr}function Hy(e,t,n,i,s,a){s=Vy(s),i.context===null?i.context=s:i.pendingContext=s,i=Hs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Gs(e,i,t),n!==null&&(An(n,e,t),Ho(n,e,t))}function t_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Em(e,t){t_(e,t),(e=e.alternate)&&t_(e,t)}function Gy(e){if(e.tag===13||e.tag===31){var t=za(e,67108864);t!==null&&An(t,e,67108864),Em(e,67108864)}}function e_(e){if(e.tag===13||e.tag===31){var t=Gn();t=Pp(t);var n=za(e,t);n!==null&&An(n,e,t),Em(e,t)}}var yu=!0;function FT(e,t,n,i){var s=Ut.T;Ut.T=null;var a=ae.p;try{ae.p=2,Am(e,t,n,i)}finally{ae.p=a,Ut.T=s}}function zT(e,t,n,i){var s=Ut.T;Ut.T=null;var a=ae.p;try{ae.p=8,Am(e,t,n,i)}finally{ae.p=a,Ut.T=s}}function Am(e,t,n,i){if(yu){var s=Up(i);if(s===null)Od(e,t,i,Su,n),n_(e,i);else if(HT(s,e,t,n,i))i.stopPropagation();else if(n_(e,i),t&4&&-1<VT.indexOf(e)){for(;s!==null;){var a=kr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=ba(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Hn(r);o.entanglements[1]|=l,r&=~l}Ii(a),(se&6)===0&&(uu=zn()+500,xl(0,!1))}}break;case 31:case 13:o=za(a,2),o!==null&&An(o,a,2),Iu(),Em(a,2)}if(a=Up(i),a===null&&Od(e,t,i,Su,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Od(e,t,i,null,n)}}function Up(e){return e=Vp(e),wm(e)}var Su=null;function wm(e){if(Su=null,e=pr(e),e!==null){var t=ul(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=l_(t),e!==null)return e;e=null}else if(n===31){if(e=c_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Su=e,null}function ky(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wb()){case d_:return 2;case p_:return 8;case Kc:case Cb:return 32;case m_:return 268435456;default:return 32}default:return 32}}var Np=!1,Ws=null,qs=null,Ys=null,ll=new Map,cl=new Map,Ls=[],VT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n_(e,t){switch(e){case"focusin":case"focusout":Ws=null;break;case"dragenter":case"dragleave":qs=null;break;case"mouseover":case"mouseout":Ys=null;break;case"pointerover":case"pointerout":ll.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(t.pointerId)}}function Do(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=kr(t),t!==null&&Gy(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function HT(e,t,n,i,s){switch(t){case"focusin":return Ws=Do(Ws,e,t,n,i,s),!0;case"dragenter":return qs=Do(qs,e,t,n,i,s),!0;case"mouseover":return Ys=Do(Ys,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return ll.set(a,Do(ll.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,cl.set(a,Do(cl.get(a)||null,e,t,n,i,s)),!0}return!1}function Xy(e){var t=pr(e.target);if(t!==null){var n=ul(t);if(n!==null){if(t=n.tag,t===13){if(t=l_(n),t!==null){e.blockedOn=t,z0(e.priority,function(){e_(n)});return}}else if(t===31){if(t=c_(n),t!==null){e.blockedOn=t,z0(e.priority,function(){e_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Up(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Kd=i,n.target.dispatchEvent(i),Kd=null}else return t=kr(n),t!==null&&Gy(t),e.blockedOn=n,!1;t.shift()}return!0}function i_(e,t,n){qc(e)&&n.delete(t)}function GT(){Np=!1,Ws!==null&&qc(Ws)&&(Ws=null),qs!==null&&qc(qs)&&(qs=null),Ys!==null&&qc(Ys)&&(Ys=null),ll.forEach(i_),cl.forEach(i_)}function Dc(e,t){e.blockedOn===t&&(e.blockedOn=null,Np||(Np=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,GT)))}var Uc=null;function s_(e){Uc!==e&&(Uc=e,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,function(){Uc===e&&(Uc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(wm(i||n)===null)continue;break}var a=kr(n);a!==null&&(e.splice(t,3),t-=3,fp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Hr(e){function t(l){return Dc(l,e)}Ws!==null&&Dc(Ws,e),qs!==null&&Dc(qs,e),Ys!==null&&Dc(Ys,e),ll.forEach(t),cl.forEach(t);for(var n=0;n<Ls.length;n++){var i=Ls[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ls.length&&(n=Ls[0],n.blockedOn===null);)Xy(n),n.blockedOn===null&&Ls.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[wn]||null;if(typeof a=="function")r||s_(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[wn]||null)o=r.formAction;else if(wm(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),s_(n)}}}function Wy(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Cm(e){this._internalRoot=e}Bu.prototype.render=Cm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=Gn();Hy(n,i,e,t,null,null)};Bu.prototype.unmount=Cm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hy(e.current,2,null,e,null,null),Iu(),t[Gr]=null}};function Bu(e){this._internalRoot=e}Bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=y_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ls.length&&t!==0&&t<Ls[n].priority;n++);Ls.splice(n,0,e),n===0&&Xy(e)}};var a_=r_.version;if(a_!=="19.2.7")throw Error(J(527,a_,"19.2.7"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=yb(t),e=e!==null?u_(e):null,e=e===null?null:e.stateNode,e};var kT={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Uo.isDisabled&&Uo.supportsFiber))try{hl=Uo.inject(kT),Vn=Uo}catch{}var Uo;Fu.createRoot=function(e,t){if(!o_(e))throw Error(J(299));var n=!1,i="",s=Px,a=Bx,r=Fx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=zy(e,1,!1,null,null,n,i,null,s,a,r,Wy),e[Gr]=t.current,Mm(e),new Cm(t)};Fu.hydrateRoot=function(e,t,n){if(!o_(e))throw Error(J(299));var i=!1,s="",a=Px,r=Bx,o=Fx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=zy(e,1,!0,t,n??null,i,s,l,a,r,o,Wy),t.context=Vy(null),n=t.current,i=Gn(),i=Pp(i),s=Hs(i),s.callback=null,Gs(n,s,i),n=i,t.current.lanes=n,dl(t,n),Ii(t),e[Gr]=t.current,Mm(e),new Bu(t)};Fu.version="19.2.7"});var Jy=Ai((NR,Zy)=>{"use strict";function Yy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yy)}catch(e){console.error(e)}}Yy(),Zy.exports=qy()});var LM=Ai(zf=>{"use strict";var fR=Symbol.for("react.transitional.element"),dR=Symbol.for("react.fragment");function NM(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:fR,type:e,key:i,ref:t!==void 0?t:null,props:n}}zf.Fragment=dR;zf.jsx=NM;zf.jsxs=NM});var $a=Ai((yN,IM)=>{"use strict";IM.exports=LM()});var wN=wi(sr(),1),Kg=wi(Jy(),1);var bi=wi(sr(),1);var _S=0,og=1,xS=2;var ql=1,yS=2,mo=3,_s=0,Sn=1,Vi=2,Hi=0,Ya=1,Yl=2,lg=3,cg=4,SS=5;var oa=100,MS=101,bS=102,TS=103,ES=104,AS=200,wS=201,CS=202,RS=203,lh=204,ch=205,DS=206,US=207,NS=208,LS=209,IS=210,OS=211,PS=212,BS=213,FS=214,uh=0,hh=1,fh=2,Za=3,dh=4,ph=5,mh=6,gh=7,ug=0,zS=1,VS=2,Si=0,hg=1,fg=2,dg=3,pg=4,mg=5,gg=6,vg=7;var _g=300,ma=301,Ka=302,Xh=303,Wh=304,Zl=306,vh=1e3,_n=1001,_h=1002,en=1003,HS=1004;var Jl=1005;var Ie=1006,qh=1007;var ga=1008;var jn=1009,xg=1010,yg=1011,go=1012,Yh=1013,Mi=1014,$n=1015,di=1016,Zh=1017,Jh=1018,vo=1020,Sg=35902,Mg=35899,bg=1021,Tg=1022,Ln=1023,Bi=1026,va=1027,Eg=1028,Kh=1029,_a=1030,Qh=1031;var jh=1033,Kl=33776,Ql=33777,jl=33778,$l=33779,$h=35840,tf=35841,ef=35842,nf=35843,sf=36196,af=37492,rf=37496,of=37488,lf=37489,tc=37490,cf=37491,uf=37808,hf=37809,ff=37810,df=37811,pf=37812,mf=37813,gf=37814,vf=37815,_f=37816,xf=37817,yf=37818,Sf=37819,Mf=37820,bf=37821,Tf=36492,Ef=36494,Af=36495,wf=36283,Cf=36284,ec=36285,Rf=36286;var Cl=2300,xh=2301,oh=2302,$m=2303,tg=2400,eg=2401,ng=2402;var GS=3200;var Ag=0,kS=1,Ms="",Yn="srgb",Rl="srgb-linear",Dl="linear",le="srgb";var Wa=7680;var ig=519,XS=512,WS=513,qS=514,Df=515,YS=516,ZS=517,Uf=518,JS=519,sg=35044;var wg="300 es",yi=2e3,Ul=2001;function XT(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function WT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Nl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function KS(){let e=Nl("canvas");return e.style.display="block",e}var Ky={},lo=null;function Cg(...e){let t="THREE."+e.shift();lo?lo("log",t,...e):console.log(t,...e)}function QS(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function wt(...e){e=QS(e);let t="THREE."+e.shift();if(lo)lo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Dt(...e){e=QS(e);let t="THREE."+e.shift();if(lo)lo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function yh(...e){let t=e.join(" ");t in Ky||(Ky[t]=!0,wt(...e))}function jS(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var $S={[uh]:hh,[fh]:mh,[dh]:gh,[Za]:ph,[hh]:uh,[mh]:fh,[gh]:dh,[ph]:Za},Fi=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rm=Math.PI/180,Sh=180/Math.PI;function nc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[e&255]+hn[e>>8&255]+hn[e>>16&255]+hn[e>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function $t(e,t,n){return Math.max(t,Math.min(n,e))}function qT(e,t){return(e%t+t)%t}function Dm(e,t,n){return(1-n)*e+n*t}function Ml(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Rn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Lt=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zi=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],_=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==d||f!==_){let g=l*u+c*d+f*_+p*b;g<0&&(u=-u,d=-d,_=-_,b=-b,g=-g);let h=1-o;if(g<.9995){let m=Math.acos(g),x=Math.sin(m);h=Math.sin(h*m)/x,o=Math.sin(o*m)/x,l=l*h+u*o,c=c*h+d*o,f=f*h+_*o,p=p*h+b*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+_*o,p=p*h+b*o;let m=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=m,c*=m,f*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],_=a[r+3];return t[n]=o*_+f*p+l*d-c*u,t[n+1]=l*_+f*u+c*p-o*d,t[n+2]=c*_+f*d+o*u-l*p,t[n+3]=f*_-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p-u*d*_;break;case"YXZ":this._x=u*f*p+c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p+u*d*_;break;case"ZXY":this._x=u*f*p-c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p-u*d*_;break;case"ZYX":this._x=u*f*p-c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p+u*d*_;break;case"YZX":this._x=u*f*p+c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p-u*d*_;break;case"XZY":this._x=u*f*p-c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p+u*d*_;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Qy.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Qy.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Um.copy(this).projectOnVector(t),this.sub(Um)}reflect(t){return this.sub(Um.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Um=new z,Qy=new zi,Ot=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],_=i[8],b=s[0],g=s[3],h=s[6],m=s[1],x=s[4],S=s[7],w=s[2],E=s[5],C=s[8];return a[0]=r*b+o*m+l*w,a[3]=r*g+o*x+l*E,a[6]=r*h+o*S+l*C,a[1]=c*b+f*m+p*w,a[4]=c*g+f*x+p*E,a[7]=c*h+f*S+p*C,a[2]=u*b+d*m+_*w,a[5]=u*g+d*x+_*E,a[8]=u*h+d*S+_*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,_=n*p+i*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return t[0]=p*b,t[1]=(s*c-f*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(f*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=d*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Nm.makeScale(t,n)),this}rotate(t){return this.premultiply(Nm.makeRotation(-t)),this}translate(t,n){return this.premultiply(Nm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nm=new Ot,jy=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$y=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YT(){let e={enabled:!0,workingColorSpace:Rl,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===le&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===le&&(s.r=oo(s.r),s.g=oo(s.g),s.b=oo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ms?Dl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return yh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return yh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Rl]:{primaries:t,whitePoint:i,transfer:Dl,toXYZ:jy,fromXYZ:$y,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:jy,fromXYZ:$y,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),e}var Kt=YT();function vs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function oo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Jr,Mh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Jr===void 0&&(Jr=Nl("canvas")),Jr.width=t.width,Jr.height=t.height;let s=Jr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Jr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Nl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=vs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vs(n[i]/255)*255):n[i]=vs(n[i]);return{data:n,width:t.width,height:t.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ZT=0,co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=nc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Lm(s[r].image)):a.push(Lm(s[r]))}else a=Lm(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Lm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Mh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}var JT=0,Im=new z,Nn=class e extends Fi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=_n,s=_n,a=Ie,r=ga,o=Ln,l=jn,c=e.DEFAULT_ANISOTROPY,f=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=nc(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Im).x}get height(){return this.source.getSize(Im).y}get depth(){return this.source.getSize(Im).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){wt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){wt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_g)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vh:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case _h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vh:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case _h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=_g;Nn.DEFAULT_ANISOTROPY=1;var Re=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],_=l[9],b=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,S=(d+1)/2,w=(h+1)/2,E=(f+u)/4,C=(p+b)/4,y=(_+g)/4;return x>S&&x>w?x<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(x),s=E/i,a=C/i):S>w?S<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(S),i=E/s,a=y/s):w<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(w),i=C/a,s=y/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-_)*(g-_)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(p-b)/m,this.z=(u-f)/m,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=$t(this.x,t.x,n.x),this.y=$t(this.y,t.y,n.y),this.z=$t(this.z,t.z,n.z),this.w=$t(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=$t(this.x,t,n),this.y=$t(this.y,t,n),this.z=$t(this.z,t,n),this.w=$t(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bh=class extends Fi{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Re(0,0,t,n),this.scissorTest=!1,this.viewport=new Re(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Nn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new co(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends bh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Ll=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Th=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var He=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,_,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,_,b,g)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,_,b,g){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=_,h[11]=b,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Kr.setFromMatrixColumn(t,0).length(),a=1/Kr.setFromMatrixColumn(t,1).length(),r=1/Kr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,_=o*f,b=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+_*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=_+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,_=c*f,b=c*p;n[0]=u+b*o,n[4]=_*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-_,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,_=c*f,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=_+d*o,n[1]=d+_*o,n[5]=r*f,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,_=o*f,b=o*p;n[0]=l*f,n[4]=_*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,_=o*l,b=o*c;n[0]=l*f,n[4]=b-u*p,n[8]=_*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+_,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,d=r*c,_=o*l,b=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+b,n[5]=r*f,n[9]=d*p-_,n[2]=_*p-d,n[6]=o*f,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(KT,t,QT)}lookAt(t,n,i){let s=this.elements;return Wn.subVectors(t,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),ta.crossVectors(i,Wn),ta.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),ta.crossVectors(i,Wn)),ta.normalize(),zu.crossVectors(Wn,ta),s[0]=ta.x,s[4]=zu.x,s[8]=Wn.x,s[1]=ta.y,s[5]=zu.y,s[9]=Wn.y,s[2]=ta.z,s[6]=zu.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],_=i[2],b=i[6],g=i[10],h=i[14],m=i[3],x=i[7],S=i[11],w=i[15],E=s[0],C=s[4],y=s[8],A=s[12],U=s[1],D=s[5],B=s[9],Y=s[13],X=s[2],P=s[6],F=s[10],G=s[14],j=s[3],et=s[7],ut=s[11],yt=s[15];return a[0]=r*E+o*U+l*X+c*j,a[4]=r*C+o*D+l*P+c*et,a[8]=r*y+o*B+l*F+c*ut,a[12]=r*A+o*Y+l*G+c*yt,a[1]=f*E+p*U+u*X+d*j,a[5]=f*C+p*D+u*P+d*et,a[9]=f*y+p*B+u*F+d*ut,a[13]=f*A+p*Y+u*G+d*yt,a[2]=_*E+b*U+g*X+h*j,a[6]=_*C+b*D+g*P+h*et,a[10]=_*y+b*B+g*F+h*ut,a[14]=_*A+b*Y+g*G+h*yt,a[3]=m*E+x*U+S*X+w*j,a[7]=m*C+x*D+S*P+w*et,a[11]=m*y+x*B+S*F+w*ut,a[15]=m*A+x*Y+S*G+w*yt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],_=t[3],b=t[7],g=t[11],h=t[15],m=l*d-c*u,x=o*d-c*p,S=o*u-l*p,w=r*d-c*f,E=r*u-l*f,C=r*p-o*f;return n*(b*m-g*x+h*S)-i*(_*m-g*w+h*E)+s*(_*x-b*w+h*C)-a*(_*S-b*E+g*C)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],_=t[12],b=t[13],g=t[14],h=t[15],m=n*o-i*r,x=n*l-s*r,S=n*c-a*r,w=i*l-s*o,E=i*c-a*o,C=s*c-a*l,y=f*b-p*_,A=f*g-u*_,U=f*h-d*_,D=p*g-u*b,B=p*h-d*b,Y=u*h-d*g,X=m*Y-x*B+S*D+w*U-E*A+C*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/X;return t[0]=(o*Y-l*B+c*D)*P,t[1]=(s*B-i*Y-a*D)*P,t[2]=(b*C-g*E+h*w)*P,t[3]=(u*E-p*C-d*w)*P,t[4]=(l*U-r*Y-c*A)*P,t[5]=(n*Y-s*U+a*A)*P,t[6]=(g*S-_*C-h*x)*P,t[7]=(f*C-u*S+d*x)*P,t[8]=(r*B-o*U+c*y)*P,t[9]=(i*U-n*B-a*y)*P,t[10]=(_*E-b*S+h*m)*P,t[11]=(p*S-f*E-d*m)*P,t[12]=(o*A-r*D-l*y)*P,t[13]=(n*D-i*A+s*y)*P,t[14]=(b*x-_*w-g*m)*P,t[15]=(f*w-p*x+u*m)*P,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,_=a*p,b=r*f,g=r*p,h=o*p,m=l*c,x=l*f,S=l*p,w=i.x,E=i.y,C=i.z;return s[0]=(1-(b+h))*w,s[1]=(d+S)*w,s[2]=(_-x)*w,s[3]=0,s[4]=(d-S)*E,s[5]=(1-(u+h))*E,s[6]=(g+m)*E,s[7]=0,s[8]=(_+x)*C,s[9]=(g-m)*C,s[10]=(1-(u+b))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinant();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Kr.set(s[0],s[1],s[2]).length(),o=Kr.set(s[4],s[5],s[6]).length(),l=Kr.set(s[8],s[9],s[10]).length();a<0&&(r=-r),vi.copy(this);let c=1/r,f=1/o,p=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=f,vi.elements[5]*=f,vi.elements[6]*=f,vi.elements[8]*=p,vi.elements[9]*=p,vi.elements[10]*=p,n.setFromRotationMatrix(vi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=yi,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),_,b;if(l)_=a/(r-a),b=r*a/(r-a);else if(o===yi)_=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===Ul)_=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=yi,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),_,b;if(l)_=1/(r-a),b=r/(r-a);else if(o===yi)_=-2/(r-a),b=-(r+a)/(r-a);else if(o===Ul)_=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Kr=new z,vi=new He,KT=new z(0,0,0),QT=new z(1,1,1),ta=new z,zu=new z,Wn=new z,tS=new He,eS=new zi,la=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-$t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return tS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return eS.setFromEuler(this),this.setFromQuaternion(eS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};la.DEFAULT_ORDER="XYZ";var Il=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jT=0,nS=new z,Qr=new zi,fs=new He,Vu=new z,bl=new z,$T=new z,tE=new zi,iS=new z(1,0,0),sS=new z(0,1,0),aS=new z(0,0,1),rS={type:"added"},eE={type:"removed"},jr={type:"childadded",child:null},Om={type:"childremoved",child:null},Zn=class e extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=nc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new la,i=new zi,s=new z(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Ot}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Qr.setFromAxisAngle(t,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(t,n){return Qr.setFromAxisAngle(t,n),this.quaternion.premultiply(Qr),this}rotateX(t){return this.rotateOnAxis(iS,t)}rotateY(t){return this.rotateOnAxis(sS,t)}rotateZ(t){return this.rotateOnAxis(aS,t)}translateOnAxis(t,n){return nS.copy(t).applyQuaternion(this.quaternion),this.position.add(nS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(iS,t)}translateY(t){return this.translateOnAxis(sS,t)}translateZ(t){return this.translateOnAxis(aS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Vu.copy(t):Vu.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(bl,Vu,this.up):fs.lookAt(Vu,bl,this.up),this.quaternion.setFromRotationMatrix(fs),s&&(fs.extractRotation(s.matrixWorld),Qr.setFromRotationMatrix(fs),this.quaternion.premultiply(Qr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rS),jr.child=t,this.dispatchEvent(jr),jr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(eE),Om.child=t,this.dispatchEvent(Om),Om.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fs.multiply(t.parent.matrixWorld)),t.applyMatrix4(fs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rS),jr.child=t,this.dispatchEvent(jr),jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,t,$T),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,tE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Zn.DEFAULT_UP=new z(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qa=class extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},nE={type:"move"},uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let g=n.getJointPose(b,i),h=this._getHandJoint(c,b);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nE)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new qa;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},tM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ea={h:0,s:0,l:0},Hu={h:0,s:0,l:0};function Pm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var te=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Kt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Kt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Kt.workingColorSpace){if(t=qT(t,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Pm(r,a,t+1/3),this.g=Pm(r,a,t),this.b=Pm(r,a,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,n=Yn){function i(a){a!==void 0&&parseFloat(a)<1&&wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Yn){let i=tM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=oo(t.r),this.g=oo(t.g),this.b=oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return Kt.workingToColorSpace(fn.copy(this),t),Math.round($t(fn.r*255,0,255))*65536+Math.round($t(fn.g*255,0,255))*256+Math.round($t(fn.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Kt.workingColorSpace){Kt.workingToColorSpace(fn.copy(this),n);let i=fn.r,s=fn.g,a=fn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Kt.workingColorSpace){return Kt.workingToColorSpace(fn.copy(this),n),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Yn){Kt.workingToColorSpace(fn.copy(this),t);let n=fn.r,i=fn.g,s=fn.b;return t!==Yn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ea),this.setHSL(ea.h+t,ea.s+n,ea.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ea),t.getHSL(Hu);let i=Dm(ea.h,Hu.h,n),s=Dm(ea.s,Hu.s,n),a=Dm(ea.l,Hu.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new te;te.NAMES=tM;var ho=class extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new la,this.environmentIntensity=1,this.environmentRotation=new la,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},_i=new z,ds=new z,Bm=new z,ps=new z,$r=new z,to=new z,oS=new z,Fm=new z,zm=new z,Vm=new z,Hm=new Re,Gm=new Re,km=new Re,ra=class e{constructor(t=new z,n=new z,i=new z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),_i.subVectors(t,n),s.cross(_i);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){_i.subVectors(s,n),ds.subVectors(i,n),Bm.subVectors(t,n);let r=_i.dot(_i),o=_i.dot(ds),l=_i.dot(Bm),c=ds.dot(ds),f=ds.dot(Bm),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,_=(r*f-o*l)*u;return a.set(1-d-_,_,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ps)===null?!1:ps.x>=0&&ps.y>=0&&ps.x+ps.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,ps)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ps.x),l.addScaledVector(r,ps.y),l.addScaledVector(o,ps.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Hm.setScalar(0),Gm.setScalar(0),km.setScalar(0),Hm.fromBufferAttribute(t,n),Gm.fromBufferAttribute(t,i),km.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Hm,a.x),r.addScaledVector(Gm,a.y),r.addScaledVector(km,a.z),r}static isFrontFacing(t,n,i,s){return _i.subVectors(i,n),ds.subVectors(t,n),_i.cross(ds).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),ds.subVectors(this.a,this.b),_i.cross(ds).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;$r.subVectors(s,i),to.subVectors(a,i),Fm.subVectors(t,i);let l=$r.dot(Fm),c=to.dot(Fm);if(l<=0&&c<=0)return n.copy(i);zm.subVectors(t,s);let f=$r.dot(zm),p=to.dot(zm);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector($r,r);Vm.subVectors(t,a);let d=$r.dot(Vm),_=to.dot(Vm);if(_>=0&&d<=_)return n.copy(a);let b=d*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(to,o);let g=f*_-d*p;if(g<=0&&p-f>=0&&d-_>=0)return oS.subVectors(a,s),o=(p-f)/(p-f+(d-_)),n.copy(s).addScaledVector(oS,o);let h=1/(g+b+u);return r=b*h,o=u*h,n.copy(i).addScaledVector($r,r).addScaledVector(to,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ca=class{constructor(t=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(xi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(xi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=xi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,xi):xi.fromBufferAttribute(a,r),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gu.copy(i.boundingBox)),Gu.applyMatrix4(t.matrixWorld),this.union(Gu)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tl),ku.subVectors(this.max,Tl),eo.subVectors(t.a,Tl),no.subVectors(t.b,Tl),io.subVectors(t.c,Tl),na.subVectors(no,eo),ia.subVectors(io,no),Ha.subVectors(eo,io);let n=[0,-na.z,na.y,0,-ia.z,ia.y,0,-Ha.z,Ha.y,na.z,0,-na.x,ia.z,0,-ia.x,Ha.z,0,-Ha.x,-na.y,na.x,0,-ia.y,ia.x,0,-Ha.y,Ha.x,0];return!Xm(n,eo,no,io,ku)||(n=[1,0,0,0,1,0,0,0,1],!Xm(n,eo,no,io,ku))?!1:(Xu.crossVectors(na,ia),n=[Xu.x,Xu.y,Xu.z],Xm(n,eo,no,io,ku))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ms),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ms=[new z,new z,new z,new z,new z,new z,new z,new z],xi=new z,Gu=new ca,eo=new z,no=new z,io=new z,na=new z,ia=new z,Ha=new z,Tl=new z,ku=new z,Xu=new z,Ga=new z;function Xm(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Ga.fromArray(e,a);let o=s.x*Math.abs(Ga.x)+s.y*Math.abs(Ga.y)+s.z*Math.abs(Ga.z),l=t.dot(Ga),c=n.dot(Ga),f=i.dot(Ga);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var qe=new z,Wu=new Lt,iE=0,xn=class extends Fi{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=sg,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wu.fromBufferAttribute(this,n),Wu.applyMatrix3(t),this.setXY(n,Wu.x,Wu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix3(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix4(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyNormalMatrix(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.transformDirection(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ml(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Rn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ml(n,this.array)),n}setX(t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ml(n,this.array)),n}setY(t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ml(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ml(n,this.array)),n}setW(t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array),s=Rn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array),s=Rn(s,this.array),a=Rn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sg&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ol=class extends xn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Pl=class extends xn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Un=class extends xn{constructor(t,n,i){super(new Float32Array(t),n,i)}},sE=new ca,El=new z,Wm=new z,Ja=class{constructor(t=new z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):sE.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;El.subVectors(t,this.center);let n=El.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(El,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(El.copy(t.center).add(Wm)),this.expandByPoint(El.copy(t.center).sub(Wm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},aE=0,fi=new He,qm=new Zn,so=new z,qn=new ca,Al=new ca,tn=new z,Jn=class e extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=nc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(XT(t)?Pl:Ol)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ot().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,n,i){return fi.makeTranslation(t,n,i),this.applyMatrix4(fi),this}scale(t,n,i){return fi.makeScale(t,n,i),this.applyMatrix4(fi),this}lookAt(t){return qm.lookAt(t),qm.updateMatrix(),this.applyMatrix4(qm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Un(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];qn.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ja);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Al.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(qn.min,Al.min),qn.expandByPoint(tn),tn.addVectors(qn.max,Al.max),qn.expandByPoint(tn)):(qn.expandByPoint(Al.min),qn.expandByPoint(Al.max))}qn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)tn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(tn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)tn.fromBufferAttribute(o,c),l&&(so.fromBufferAttribute(t,c),tn.add(so)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new z,l[y]=new z;let c=new z,f=new z,p=new z,u=new Lt,d=new Lt,_=new Lt,b=new z,g=new z;function h(y,A,U){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,U),u.fromBufferAttribute(a,y),d.fromBufferAttribute(a,A),_.fromBufferAttribute(a,U),f.sub(c),p.sub(c),d.sub(u),_.sub(u);let D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(b.copy(f).multiplyScalar(_.y).addScaledVector(p,-d.y).multiplyScalar(D),g.copy(p).multiplyScalar(d.x).addScaledVector(f,-_.x).multiplyScalar(D),o[y].add(b),o[A].add(b),o[U].add(b),l[y].add(g),l[A].add(g),l[U].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let y=0,A=m.length;y<A;++y){let U=m[y],D=U.start,B=U.count;for(let Y=D,X=D+B;Y<X;Y+=3)h(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let x=new z,S=new z,w=new z,E=new z;function C(y){w.fromBufferAttribute(s,y),E.copy(w);let A=o[y];x.copy(A),x.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(E,A);let D=S.dot(l[y])<0?-1:1;r.setXYZW(y,x.x,x.y,x.z,D)}for(let y=0,A=m.length;y<A;++y){let U=m[y],D=U.start,B=U.count;for(let Y=D,X=D+B;Y<X;Y+=3)C(t.getX(Y+0)),C(t.getX(Y+1)),C(t.getX(Y+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new z,a=new z,r=new z,o=new z,l=new z,c=new z,f=new z,p=new z;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),b=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,g),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)tn.fromBufferAttribute(t,n),tn.normalize(),t.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,_=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*f;for(let h=0;h<f;h++)u[_++]=c[d++]}return new xn(u,f,p)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var rE=0,ua=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=nc(),this.name="",this.type="Material",this.blending=Ya,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=oa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){wt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){wt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ya&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lh&&(i.blendSrc=this.blendSrc),this.blendDst!==ch&&(i.blendDst=this.blendDst),this.blendEquation!==oa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var gs=new z,Ym=new z,qu=new z,sa=new z,Zm=new z,Yu=new z,Jm=new z,Bl=class{constructor(t=new z,n=new z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=gs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(gs.copy(this.origin).addScaledVector(this.direction,n),gs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Ym.copy(t).add(n).multiplyScalar(.5),qu.copy(n).sub(t).normalize(),sa.copy(this.origin).sub(Ym);let a=t.distanceTo(n)*.5,r=-this.direction.dot(qu),o=sa.dot(this.direction),l=-sa.dot(qu),c=sa.lengthSq(),f=Math.abs(1-r*r),p,u,d,_;if(f>0)if(p=r*l-o,u=r*o-l,_=a*f,p>=0)if(u>=-_)if(u<=_){let b=1/f;p*=b,u*=b,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ym).addScaledVector(qu,u),d}intersectSphere(t,n){gs.subVectors(t.center,this.origin);let i=gs.dot(this.direction),s=gs.dot(gs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,gs)!==null}intersectTriangle(t,n,i,s,a){Zm.subVectors(n,t),Yu.subVectors(i,t),Jm.crossVectors(Zm,Yu);let r=this.direction.dot(Jm),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;sa.subVectors(this.origin,t);let l=o*this.direction.dot(Yu.crossVectors(sa,Yu));if(l<0)return null;let c=o*this.direction.dot(Zm.cross(sa));if(c<0||l+c>r)return null;let f=-o*sa.dot(Jm);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fl=class extends ua{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lS=new He,ka=new Bl,Zu=new Ja,cS=new z,Ju=new z,Ku=new z,Qu=new z,Km=new z,ju=new z,uS=new z,$u=new z,dn=class extends Zn{constructor(t=new Jn,n=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){ju.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(Km.fromBufferAttribute(p,t),r?ju.addScaledVector(Km,f):ju.addScaledVector(Km.sub(n),f))}n.add(ju)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zu.copy(i.boundingSphere),Zu.applyMatrix4(a),ka.copy(t.ray).recast(t.near),!(Zu.containsPoint(ka.origin)===!1&&(ka.intersectSphere(Zu,cS)===null||ka.origin.distanceToSquared(cS)>(t.far-t.near)**2))&&(lS.copy(a).invert(),ka.copy(t.ray).applyMatrix4(lS),!(i.boundingBox!==null&&ka.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ka)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,b=u.length;_<b;_++){let g=u[_],h=r[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=m,w=x;S<w;S+=3){let E=o.getX(S),C=o.getX(S+1),y=o.getX(S+2);s=th(this,h,t,i,c,f,p,E,C,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let g=_,h=b;g<h;g+=3){let m=o.getX(g),x=o.getX(g+1),S=o.getX(g+2);s=th(this,r,t,i,c,f,p,m,x,S),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,b=u.length;_<b;_++){let g=u[_],h=r[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=m,w=x;S<w;S+=3){let E=S,C=S+1,y=S+2;s=th(this,h,t,i,c,f,p,E,C,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=_,h=b;g<h;g+=3){let m=g,x=g+1,S=g+2;s=th(this,r,t,i,c,f,p,m,x,S),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function oE(e,t,n,i,s,a,r,o){let l;if(t.side===Sn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===_s,o),l===null)return null;$u.copy(o),$u.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo($u);return c<n.near||c>n.far?null:{distance:c,point:$u.clone(),object:e}}function th(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Ju),e.getVertexPosition(l,Ku),e.getVertexPosition(c,Qu);let f=oE(e,t,n,i,Ju,Ku,Qu,uS);if(f){let p=new z;ra.getBarycoord(uS,Ju,Ku,Qu,p),s&&(f.uv=ra.getInterpolatedAttribute(s,o,l,c,p,new Lt)),a&&(f.uv1=ra.getInterpolatedAttribute(a,o,l,c,p,new Lt)),r&&(f.normal=ra.getInterpolatedAttribute(r,o,l,c,p,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new z,materialIndex:0};ra.getNormal(Ju,Ku,Qu,u.normal),f.face=u,f.barycoord=p}return f}var fo=class extends Nn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=en,f=en,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qm=new z,lE=new z,cE=new Ot,Pi=class{constructor(t=new z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Qm.subVectors(i,n).cross(lE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Qm),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||cE.getNormalMatrix(t),s=this.coplanarPoint(Qm).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xa=new Ja,uE=new Lt(.5,.5),eh=new z,zl=class{constructor(t=new Pi,n=new Pi,i=new Pi,s=new Pi,a=new Pi,r=new Pi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=yi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],_=a[8],b=a[9],g=a[10],h=a[11],m=a[12],x=a[13],S=a[14],w=a[15];if(s[0].setComponents(c-r,d-f,h-_,w-m).normalize(),s[1].setComponents(c+r,d+f,h+_,w+m).normalize(),s[2].setComponents(c+o,d+p,h+b,w+x).normalize(),s[3].setComponents(c-o,d-p,h-b,w-x).normalize(),i)s[4].setComponents(l,u,g,S).normalize(),s[5].setComponents(c-l,d-u,h-g,w-S).normalize();else if(s[4].setComponents(c-l,d-u,h-g,w-S).normalize(),n===yi)s[5].setComponents(c+l,d+u,h+g,w+S).normalize();else if(n===Ul)s[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xa)}intersectsSprite(t){Xa.center.set(0,0,0);let n=uE.distanceTo(t.center);return Xa.radius=.7071067811865476+n,Xa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xa)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(eh.x=s.normal.x>0?t.max.x:t.min.x,eh.y=s.normal.y>0?t.max.y:t.min.y,eh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(eh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Eh=class extends ua{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ah=new z,wh=new z,hS=new He,wl=new Bl,nh=new Ja,jm=new z,fS=new z,Ch=class extends Zn{constructor(t=new Jn,n=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)Ah.fromBufferAttribute(n,s-1),wh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Ah.distanceTo(wh);t.setAttribute("lineDistance",new Un(i,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nh.copy(i.boundingSphere),nh.applyMatrix4(s),nh.radius+=a,t.ray.intersectsSphere(nh)===!1)return;hS.copy(s).invert(),wl.copy(t.ray).applyMatrix4(hS);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){let d=Math.max(0,r.start),_=Math.min(f.count,r.start+r.count);for(let b=d,g=_-1;b<g;b+=c){let h=f.getX(b),m=f.getX(b+1),x=ih(this,t,wl,l,h,m,b);x&&n.push(x)}if(this.isLineLoop){let b=f.getX(_-1),g=f.getX(d),h=ih(this,t,wl,l,b,g,_-1);h&&n.push(h)}}else{let d=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let b=d,g=_-1;b<g;b+=c){let h=ih(this,t,wl,l,b,b+1,b);h&&n.push(h)}if(this.isLineLoop){let b=ih(this,t,wl,l,_-1,d,_-1);b&&n.push(b)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function ih(e,t,n,i,s,a,r){let o=e.geometry.attributes.position;if(Ah.fromBufferAttribute(o,s),wh.fromBufferAttribute(o,a),n.distanceSqToSegment(Ah,wh,jm,fS)>i)return;jm.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(jm);if(!(c<t.near||c>t.far))return{distance:c,point:fS.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}var dS=new z,pS=new z,Vl=class extends Ch{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let s=0,a=n.count;s<a;s+=2)dS.fromBufferAttribute(n,s),pS.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+dS.distanceTo(pS);t.setAttribute("lineDistance",new Un(i,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hl=class extends Nn{constructor(t=[],n=ma,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var xs=class extends Nn{constructor(t,n,i=Mi,s,a,r,o=en,l=en,c,f=Bi,p=1){if(f!==Bi&&f!==va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Rh=class extends xs{constructor(t,n=Mi,i=ma,s,a,r=en,o=en,l,c=Bi){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gl=class extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},po=class e extends Jn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(f,3)),this.setAttribute("uv",new Un(p,2));function _(b,g,h,m,x,S,w,E,C,y,A){let U=S/C,D=w/y,B=S/2,Y=w/2,X=E/2,P=C+1,F=y+1,G=0,j=0,et=new z;for(let ut=0;ut<F;ut++){let yt=ut*D-Y;for(let Mt=0;Mt<P;Mt++){let Qt=Mt*U-B;et[b]=Qt*m,et[g]=yt*x,et[h]=X,c.push(et.x,et.y,et.z),et[b]=0,et[g]=0,et[h]=E>0?1:-1,f.push(et.x,et.y,et.z),p.push(Mt/C),p.push(1-ut/y),G+=1}}for(let ut=0;ut<y;ut++)for(let yt=0;yt<C;yt++){let Mt=u+yt+P*ut,Qt=u+yt+P*(ut+1),re=u+(yt+1)+P*(ut+1),Pt=u+(yt+1)+P*ut;l.push(Mt,Qt,Pt),l.push(Qt,re,Pt),j+=6}o.addGroup(d,j,A),d+=j,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ys=class e extends Jn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],_=[],b=[],g=[];for(let h=0;h<f;h++){let m=h*u-r;for(let x=0;x<c;x++){let S=x*p-a;_.push(S,-m,0),b.push(0,0,1),g.push(x/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let x=m+c*h,S=m+c*(h+1),w=m+1+c*(h+1),E=m+1+c*h;d.push(x,S,E),d.push(S,w,E)}this.setIndex(d),this.setAttribute("position",new Un(_,3)),this.setAttribute("normal",new Un(b,3)),this.setAttribute("uv",new Un(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Qa(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(mS(s))s.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(mS(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function pn(e){let t={};for(let n=0;n<e.length;n++){let i=Qa(e[n]);for(let s in i)t[s]=i[s]}return t}function mS(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function hE(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Rg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var eM={clone:Qa,merge:pn},fE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends ua{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fE,this.fragmentShader=dE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qa(t.uniforms),this.uniformsGroups=hE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Ss=class extends Kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Dh=class extends ua{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uh=class extends ua{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function sh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var ha=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nh=class extends ha{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tg,endingEnd:tg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case eg:a=t,o=2*n-i;break;case ng:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case eg:r=t,l=2*i-n;break;case ng:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(i-n)/(s-n),b=_*_,g=b*_,h=-u*g+2*u*b-u*_,m=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*_+1,x=(-1-d)*g+(1.5+d)*b+.5*_,S=d*g-d*b;for(let w=0;w!==o;++w)a[w]=h*r[f+w]+m*r[c+w]+x*r[l+w]+S*r[p+w];return a}},Lh=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},Ih=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Oh=class extends ha{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.settings||this.DefaultSettings_,p=f.inTangents,u=f.outTangents;if(!p||!u){let b=(i-n)/(s-n),g=1-b;for(let h=0;h!==o;++h)a[h]=r[c+h]*g+r[l+h]*b;return a}let d=o*2,_=t-1;for(let b=0;b!==o;++b){let g=r[c+b],h=r[l+b],m=_*d+b*2,x=u[m],S=u[m+1],w=t*d+b*2,E=p[w],C=p[w+1],y=(i-n)/(s-n),A,U,D,B,Y;for(let X=0;X<8;X++){A=y*y,U=A*y,D=1-y,B=D*D,Y=B*D;let F=Y*n+3*B*y*x+3*D*A*E+U*s-i;if(Math.abs(F)<1e-10)break;let G=3*B*(x-n)+6*D*y*(E-x)+3*A*(s-E);if(Math.abs(G)<1e-10)break;y=y-F/G,y=Math.max(0,Math.min(1,y))}a[b]=Y*g+3*B*y*S+3*D*A*C+U*h}return a}},Qn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sh(n,this.TimeBufferType),this.values=sh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:sh(t.times,Array),values:sh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Oh(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.settings=this.settings),n}setInterpolation(t){let n;switch(t){case Cl:n=this.InterpolantFactoryMethodDiscrete;break;case xh:n=this.InterpolantFactoryMethodLinear;break;case oh:n=this.InterpolantFactoryMethodSmooth;break;case $m:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return wt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cl;case this.InterpolantFactoryMethodLinear:return xh;case this.InterpolantFactoryMethodSmooth:return oh;case this.InterpolantFactoryMethodBezier:return $m}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Dt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Dt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&WT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Dt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===oh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let _=0;_!==i;++_){let b=n[p+_];if(b!==n[u+_]||b!==n[d+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=xh;var fa=class extends Qn{constructor(t,n,i){super(t,n,i)}};fa.prototype.ValueTypeName="bool";fa.prototype.ValueBufferType=Array;fa.prototype.DefaultInterpolation=Cl;fa.prototype.InterpolantFactoryMethodLinear=void 0;fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ph=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}};Ph.prototype.ValueTypeName="color";var Bh=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}};Bh.prototype.ValueTypeName="number";var Fh=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)zi.slerpFlat(a,0,r,c-o,r,c,l);return a}},kl=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Fh(this.times,this.values,this.getValueSize(),t)}};kl.prototype.ValueTypeName="quaternion";kl.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends Qn{constructor(t,n,i){super(t,n,i)}};da.prototype.ValueTypeName="string";da.prototype.ValueBufferType=Array;da.prototype.DefaultInterpolation=Cl;da.prototype.InterpolantFactoryMethodLinear=void 0;da.prototype.InterpolantFactoryMethodSmooth=void 0;var zh=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}};zh.prototype.ValueTypeName="vector";var Vh=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],_=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nM=new Vh,Hh=class{constructor(t){this.manager=t!==void 0?t:nM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Hh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ah=new z,rh=new zi,Oi=new z,pa=class extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ah,rh,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ah,rh,Oi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(ah,rh,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ah,rh,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},aa=new z,gS=new Lt,vS=new Lt,Dn=class extends pa{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Sh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rm*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(Rm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(aa.x,aa.y).multiplyScalar(-t/aa.z),aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(aa.x,aa.y).multiplyScalar(-t/aa.z)}getViewSize(t,n){return this.getViewBounds(t,gS,vS),n.subVectors(vS,gS)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Rm*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Xl=class extends pa{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var ao=-90,ro=1,Gh=class extends Zn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(ao,ro,t,n);s.layers=this.layers,this.add(s);let a=new Dn(ao,ro,t,n);a.layers=this.layers,this.add(a);let r=new Dn(ao,ro,t,n);r.layers=this.layers,this.add(r);let o=new Dn(ao,ro,t,n);o.layers=this.layers,this.add(o);let l=new Dn(ao,ro,t,n);l.layers=this.layers,this.add(l);let c=new Dn(ao,ro,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},kh=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dg="\\[\\]\\.:\\/",pE=new RegExp("["+Dg+"]","g"),Ug="[^"+Dg+"]",mE="[^"+Dg.replace("\\.","")+"]",gE=/((?:WC+[\/:])*)/.source.replace("WC",Ug),vE=/(WCOD+)?/.source.replace("WCOD",mE),_E=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ug),xE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ug),yE=new RegExp("^"+gE+vE+_E+xE+"$"),SE=["material","materials","bones","map"],ag=class{constructor(t,n,i){let s=i||Ae.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ae=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pE,"")}static parseTrackName(t){let n=yE.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);SE.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Dt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=ag;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var LR=new Float32Array(1);var Wl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,wt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};var rg=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function Ng(e,t,n,i){let s=ME(i);switch(n){case bg:return e*t;case Eg:return e*t/s.components*s.byteLength;case Kh:return e*t/s.components*s.byteLength;case _a:return e*t*2/s.components*s.byteLength;case Qh:return e*t*2/s.components*s.byteLength;case Tg:return e*t*3/s.components*s.byteLength;case Ln:return e*t*4/s.components*s.byteLength;case jh:return e*t*4/s.components*s.byteLength;case Kl:case Ql:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case jl:case $l:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case tf:case nf:return Math.max(e,16)*Math.max(t,8)/4;case $h:case ef:return Math.max(e,8)*Math.max(t,8)/2;case sf:case af:case of:case lf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case rf:case tc:case cf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case uf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ff:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case df:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case mf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case gf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case vf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _f:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case yf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Sf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Mf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case bf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Tf:case Ef:case Af:return Math.ceil(e/4)*Math.ceil(t/4)*16;case wf:case Cf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ec:case Rf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ME(e){switch(e){case jn:case xg:return{byteLength:1,components:1};case go:case yg:case di:return{byteLength:2,components:1};case Zh:case Jh:return{byteLength:2,components:4};case Mi:case Yh:case $n:return{byteLength:4,components:1};case Sg:case Mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function EM(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function TE(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<p.length;d++){let _=p[u],b=p[d];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,_=p.length;d<_;d++){let b=p[d];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var EE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AE=`#ifdef USE_ALPHAHASH
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
#endif`,wE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UE=`#ifdef USE_AOMAP
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
#endif`,NE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,IE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FE=`#ifdef USE_IRIDESCENCE
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
#endif`,zE=`#ifdef USE_BUMPMAP
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
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ZE=`#define PI 3.141592653589793
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
} // validated`,JE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KE=`vec3 transformedNormal = objectNormal;
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
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eA="gl_FragColor = linearToOutputTexel( gl_FragColor );",nA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iA=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aA=`#ifdef USE_ENVMAP
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
#endif`,rA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oA=`#ifdef USE_ENVMAP
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
#endif`,lA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fA=`#ifdef USE_GRADIENTMAP
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
}`,dA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gA=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,vA=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,_A=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,bA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,AA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,CA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OA=`#if defined( USE_POINTS_UV )
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
#endif`,PA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HA=`#ifdef USE_MORPHTARGETS
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
#endif`,GA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZA=`#ifdef USE_NORMALMAP
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
#endif`,JA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$A=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,uw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fw=`#ifdef USE_SKINNING
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
#endif`,dw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pw=`#ifdef USE_SKINNING
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
#endif`,mw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_w=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xw=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yw=`#ifdef USE_TRANSMISSION
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
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ew=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Aw=`uniform sampler2D t2D;
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
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`#include <common>
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
}`,Nw=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lw=`#define DISTANCE
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
}`,Iw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`uniform float scale;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,zw=`#include <common>
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
}`,Vw=`uniform vec3 diffuse;
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
}`,Hw=`#define LAMBERT
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
}`,Gw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kw=`#define MATCAP
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
}`,Xw=`#define MATCAP
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
}`,Ww=`#define NORMAL
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
}`,qw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yw=`#define PHONG
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
}`,Zw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Jw=`#define STANDARD
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
}`,Kw=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Qw=`#define TOON
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
}`,jw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,$w=`uniform float size;
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
}`,tC=`uniform vec3 diffuse;
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
}`,eC=`#include <common>
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
}`,nC=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,iC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sC=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:EE,alphahash_pars_fragment:AE,alphamap_fragment:wE,alphamap_pars_fragment:CE,alphatest_fragment:RE,alphatest_pars_fragment:DE,aomap_fragment:UE,aomap_pars_fragment:NE,batching_pars_vertex:LE,batching_vertex:IE,begin_vertex:OE,beginnormal_vertex:PE,bsdfs:BE,iridescence_fragment:FE,bumpmap_pars_fragment:zE,clipping_planes_fragment:VE,clipping_planes_pars_fragment:HE,clipping_planes_pars_vertex:GE,clipping_planes_vertex:kE,color_fragment:XE,color_pars_fragment:WE,color_pars_vertex:qE,color_vertex:YE,common:ZE,cube_uv_reflection_fragment:JE,defaultnormal_vertex:KE,displacementmap_pars_vertex:QE,displacementmap_vertex:jE,emissivemap_fragment:$E,emissivemap_pars_fragment:tA,colorspace_fragment:eA,colorspace_pars_fragment:nA,envmap_fragment:iA,envmap_common_pars_fragment:sA,envmap_pars_fragment:aA,envmap_pars_vertex:rA,envmap_physical_pars_fragment:vA,envmap_vertex:oA,fog_vertex:lA,fog_pars_vertex:cA,fog_fragment:uA,fog_pars_fragment:hA,gradientmap_pars_fragment:fA,lightmap_pars_fragment:dA,lights_lambert_fragment:pA,lights_lambert_pars_fragment:mA,lights_pars_begin:gA,lights_toon_fragment:_A,lights_toon_pars_fragment:xA,lights_phong_fragment:yA,lights_phong_pars_fragment:SA,lights_physical_fragment:MA,lights_physical_pars_fragment:bA,lights_fragment_begin:TA,lights_fragment_maps:EA,lights_fragment_end:AA,lightprobes_pars_fragment:wA,logdepthbuf_fragment:CA,logdepthbuf_pars_fragment:RA,logdepthbuf_pars_vertex:DA,logdepthbuf_vertex:UA,map_fragment:NA,map_pars_fragment:LA,map_particle_fragment:IA,map_particle_pars_fragment:OA,metalnessmap_fragment:PA,metalnessmap_pars_fragment:BA,morphinstance_vertex:FA,morphcolor_vertex:zA,morphnormal_vertex:VA,morphtarget_pars_vertex:HA,morphtarget_vertex:GA,normal_fragment_begin:kA,normal_fragment_maps:XA,normal_pars_fragment:WA,normal_pars_vertex:qA,normal_vertex:YA,normalmap_pars_fragment:ZA,clearcoat_normal_fragment_begin:JA,clearcoat_normal_fragment_maps:KA,clearcoat_pars_fragment:QA,iridescence_pars_fragment:jA,opaque_fragment:$A,packing:tw,premultiplied_alpha_fragment:ew,project_vertex:nw,dithering_fragment:iw,dithering_pars_fragment:sw,roughnessmap_fragment:aw,roughnessmap_pars_fragment:rw,shadowmap_pars_fragment:ow,shadowmap_pars_vertex:lw,shadowmap_vertex:cw,shadowmask_pars_fragment:uw,skinbase_vertex:hw,skinning_pars_vertex:fw,skinning_vertex:dw,skinnormal_vertex:pw,specularmap_fragment:mw,specularmap_pars_fragment:gw,tonemapping_fragment:vw,tonemapping_pars_fragment:_w,transmission_fragment:xw,transmission_pars_fragment:yw,uv_pars_fragment:Sw,uv_pars_vertex:Mw,uv_vertex:bw,worldpos_vertex:Tw,background_vert:Ew,background_frag:Aw,backgroundCube_vert:ww,backgroundCube_frag:Cw,cube_vert:Rw,cube_frag:Dw,depth_vert:Uw,depth_frag:Nw,distance_vert:Lw,distance_frag:Iw,equirect_vert:Ow,equirect_frag:Pw,linedashed_vert:Bw,linedashed_frag:Fw,meshbasic_vert:zw,meshbasic_frag:Vw,meshlambert_vert:Hw,meshlambert_frag:Gw,meshmatcap_vert:kw,meshmatcap_frag:Xw,meshnormal_vert:Ww,meshnormal_frag:qw,meshphong_vert:Yw,meshphong_frag:Zw,meshphysical_vert:Jw,meshphysical_frag:Kw,meshtoon_vert:Qw,meshtoon_frag:jw,points_vert:$w,points_frag:tC,shadow_vert:eC,shadow_frag:nC,sprite_vert:iC,sprite_frag:sC},ht={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ki={basic:{uniforms:pn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:pn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:pn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:pn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:pn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new te(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:pn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:pn([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:pn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:pn([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:pn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:pn([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:pn([ht.common,ht.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:pn([ht.lights,ht.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};ki.physical={uniforms:pn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Nf={r:0,b:0,g:0},aC=new He,AM=new Ot;AM.set(-1,0,0,0,1,0,0,0,1);function rC(e,t,n,i,s,a){let r=new te(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let S=m.backgroundBlurriness>0;x=t.get(x,S)}return x}function _(m){let x=!1,S=d(m);S===null?g(r,o):S&&S.isColor&&(g(S,1),x=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(m,x){let S=d(x);S&&(S.isCubeTexture||S.mapping===Zl)?(c===void 0&&(c=new dn(new po(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Qa(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(aC.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(AM),c.material.toneMapped=Kt.getTransfer(S.colorSpace)!==le,(f!==S||p!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new dn(new ys(2,2),new Kn({name:"BackgroundMaterial",uniforms:Qa(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(S.colorSpace)!==le,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=S,p=S.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(Nf,Rg(e)),n.buffers.color.setClear(Nf.r,Nf.g,Nf.b,x,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,x=1){r.set(m),o=x,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:_,addToRenderList:b,dispose:h}}function oC(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(D,B,Y,X,P){let F=!1,G=p(D,X,Y,B);a!==G&&(a=G,c(a.object)),F=d(D,X,Y,P),F&&_(D,X,Y,P),P!==null&&t.update(P,e.ELEMENT_ARRAY_BUFFER),(F||r)&&(r=!1,S(D,B,Y,X),P!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function f(D){return e.deleteVertexArray(D)}function p(D,B,Y,X){let P=X.wireframe===!0,F=i[B.id];F===void 0&&(F={},i[B.id]=F);let G=D.isInstancedMesh===!0?D.id:0,j=F[G];j===void 0&&(j={},F[G]=j);let et=j[Y.id];et===void 0&&(et={},j[Y.id]=et);let ut=et[P];return ut===void 0&&(ut=u(l()),et[P]=ut),ut}function u(D){let B=[],Y=[],X=[];for(let P=0;P<n;P++)B[P]=0,Y[P]=0,X[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:X,object:D,attributes:{},index:null}}function d(D,B,Y,X){let P=a.attributes,F=B.attributes,G=0,j=Y.getAttributes();for(let et in j)if(j[et].location>=0){let yt=P[et],Mt=F[et];if(Mt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),yt===void 0||yt.attribute!==Mt||Mt&&yt.data!==Mt.data)return!0;G++}return a.attributesNum!==G||a.index!==X}function _(D,B,Y,X){let P={},F=B.attributes,G=0,j=Y.getAttributes();for(let et in j)if(j[et].location>=0){let yt=F[et];yt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor));let Mt={};Mt.attribute=yt,yt&&yt.data&&(Mt.data=yt.data),P[et]=Mt,G++}a.attributes=P,a.attributesNum=G,a.index=X}function b(){let D=a.newAttributes;for(let B=0,Y=D.length;B<Y;B++)D[B]=0}function g(D){h(D,0)}function h(D,B){let Y=a.newAttributes,X=a.enabledAttributes,P=a.attributeDivisors;Y[D]=1,X[D]===0&&(e.enableVertexAttribArray(D),X[D]=1),P[D]!==B&&(e.vertexAttribDivisor(D,B),P[D]=B)}function m(){let D=a.newAttributes,B=a.enabledAttributes;for(let Y=0,X=B.length;Y<X;Y++)B[Y]!==D[Y]&&(e.disableVertexAttribArray(Y),B[Y]=0)}function x(D,B,Y,X,P,F,G){G===!0?e.vertexAttribIPointer(D,B,Y,P,F):e.vertexAttribPointer(D,B,Y,X,P,F)}function S(D,B,Y,X){b();let P=X.attributes,F=Y.getAttributes(),G=B.defaultAttributeValues;for(let j in F){let et=F[j];if(et.location>=0){let ut=P[j];if(ut===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ut=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ut=D.instanceColor)),ut!==void 0){let yt=ut.normalized,Mt=ut.itemSize,Qt=t.get(ut);if(Qt===void 0)continue;let re=Qt.buffer,Pt=Qt.type,Q=Qt.bytesPerElement,ft=Pt===e.INT||Pt===e.UNSIGNED_INT||ut.gpuType===Yh;if(ut.isInterleavedBufferAttribute){let it=ut.data,Ct=it.stride,Nt=ut.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<et.locationSize;Rt++)h(et.location+Rt,it.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<et.locationSize;Rt++)g(et.location+Rt);e.bindBuffer(e.ARRAY_BUFFER,re);for(let Rt=0;Rt<et.locationSize;Rt++)x(et.location+Rt,Mt/et.locationSize,Pt,yt,Ct*Q,(Nt+Mt/et.locationSize*Rt)*Q,ft)}else{if(ut.isInstancedBufferAttribute){for(let it=0;it<et.locationSize;it++)h(et.location+it,ut.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let it=0;it<et.locationSize;it++)g(et.location+it);e.bindBuffer(e.ARRAY_BUFFER,re);for(let it=0;it<et.locationSize;it++)x(et.location+it,Mt/et.locationSize,Pt,yt,Mt*Q,Mt/et.locationSize*it*Q,ft)}}else if(G!==void 0){let yt=G[j];if(yt!==void 0)switch(yt.length){case 2:e.vertexAttrib2fv(et.location,yt);break;case 3:e.vertexAttrib3fv(et.location,yt);break;case 4:e.vertexAttrib4fv(et.location,yt);break;default:e.vertexAttrib1fv(et.location,yt)}}}}m()}function w(){A();for(let D in i){let B=i[D];for(let Y in B){let X=B[Y];for(let P in X){let F=X[P];for(let G in F)f(F[G].object),delete F[G];delete X[P]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let B=i[D.id];for(let Y in B){let X=B[Y];for(let P in X){let F=X[P];for(let G in F)f(F[G].object),delete F[G];delete X[P]}}delete i[D.id]}function C(D){for(let B in i){let Y=i[B];for(let X in Y){let P=Y[X];if(P[D.id]===void 0)continue;let F=P[D.id];for(let G in F)f(F[G].object),delete F[G];delete P[D.id]}}}function y(D){for(let B in i){let Y=i[B],X=D.isInstancedMesh===!0?D.id:0,P=Y[X];if(P!==void 0){for(let F in P){let G=P[F];for(let j in G)f(G[j].object),delete G[j];delete P[F]}delete Y[X],Object.keys(Y).length===0&&delete i[B]}}}function A(){U(),r=!0,a!==s&&(a=s,c(a.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:g,disableUnusedAttributes:m}}function lC(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function cC(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Ln&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let y=C===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==jn&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$n&&!y)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(wt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,maxSamples:w,samples:E}}function uC(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Pi,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let _=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,h=e.get(p);if(!s||_===null||_.length===0||a&&!g)a?f(null):c();else{let m=a?0:i,x=m*4,S=h.clippingState||null;l.value=S,S=f(_,u,x,d);for(let w=0;w!==x;++w)S[w]=n[w];h.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,_){let b=p!==null?p.length:0,g=null;if(b!==0){if(g=l.value,_!==!0||g===null){let h=d+b*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,S=d;x!==b;++x,S+=4)r.copy(p[x]).applyMatrix4(m,o),r.normal.toArray(g,S),g[S+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var xa=4,iM=[.125,.215,.35,.446,.526,.582],ja=20,hC=256,ic=new Xl,sM=new te,Lg=null,Ig=0,Og=0,Pg=!1,fC=new z,If=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=fC}=a;Lg=this._renderer.getRenderTarget(),Ig=this._renderer.getActiveCubeFace(),Og=this._renderer.getActiveMipmapLevel(),Pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lg,Ig,Og),this._renderer.xr.enabled=Pg,t.scissorTest=!1,_o(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ma||t.mapping===Ka?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lg=this._renderer.getRenderTarget(),Ig=this._renderer.getActiveCubeFace(),Og=this._renderer.getActiveMipmapLevel(),Pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:di,format:Ln,colorSpace:Rl,depthBuffer:!1},s=aM(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=aM(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dC(a)),this._blurMaterial=mC(a,t,n),this._ggxMaterial=pC(a,t,n)}return s}_compileMaterial(t){let n=new dn(new Jn,t);this._renderer.compile(n,ic)}_sceneToCubeUV(t,n,i,s,a){let l=new Dn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(sM),p.toneMapping=Si,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new po,new Fl({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,h=!1,m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,h=!0):(g.color.copy(sM),h=!0);for(let x=0;x<6;x++){let S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[x],a.y,a.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[x],a.z)):(l.up.set(0,c[x],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[x]));let w=this._cubeSize;_o(s,S*w,x>2?w:0,w,w),p.setRenderTarget(s),h&&p.render(b,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===ma||t.mapping===Ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rM());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;_o(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,ic)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=0+c*1.25,d=p*u,{_lodMax:_}=this,b=this._sizeLods[i],g=3*b*(i>_-xa?i-_+xa:0),h=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-n,_o(a,g,h,3*b,2*b),s.setRenderTarget(a),s.render(o,ic),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,_o(t,g,h,3*b,2*b),s.setRenderTarget(t),s.render(o,ic)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");let f=3,p=this._lodMeshes[s];p.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*ja-1),b=a/_,g=isFinite(a)?1+Math.floor(f*b):ja;g>ja&&wt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ja}`);let h=[],m=0;for(let C=0;C<ja;++C){let y=C/b,A=Math.exp(-y*y/2);h.push(A),C===0?m+=A:C<g&&(m+=2*A)}for(let C=0;C<h.length;C++)h[C]=h[C]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-i;let S=this._sizeLods[s],w=3*S*(s>x-xa?s-x+xa:0),E=4*(this._cubeSize-S);_o(n,w,E,3*S,2*S),l.setRenderTarget(n),l.render(p,ic)}};function dC(e){let t=[],n=[],i=[],s=e,a=e-xa+1+iM.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-xa?l=iM[r-e+xa-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),f=-c,p=1+c,u=[f,f,p,f,p,p,f,f,p,p,f,p],d=6,_=6,b=3,g=2,h=1,m=new Float32Array(b*_*d),x=new Float32Array(g*_*d),S=new Float32Array(h*_*d);for(let E=0;E<d;E++){let C=E%3*2/3-1,y=E>2?0:-1,A=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];m.set(A,b*_*E),x.set(u,g*_*E);let U=[E,E,E,E,E,E];S.set(U,h*_*E)}let w=new Jn;w.setAttribute("position",new xn(m,b)),w.setAttribute("uv",new xn(x,g)),w.setAttribute("faceIndex",new xn(S,h)),i.push(new dn(w,null)),s>xa&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function aM(e,t,n){let i=new yn(e,t,n);return i.texture.mapping=Zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _o(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function pC(e,t,n){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function mC(e,t,n){let i=new Float32Array(ja),s=new z(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ja,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function rM(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function oM(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Bf(){return`

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
	`}var Of=class extends yn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Hl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new po(5,5,5),a=new Kn({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Hi});a.uniforms.tEquirect.value=n;let r=new dn(s,a),o=n.minFilter;return n.minFilter===ga&&(n.minFilter=Ie),new Gh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function gC(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Xh||d===Wh)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let b=new Of(_.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,_=d===Xh||d===Wh,b=d===ma||d===Ka;if(_||b){let g=n.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new If(e)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return _&&m&&m.height>0||b&&m&&l(m)?(i===null&&(i=new If(e)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function o(u,d){return d===Xh?u.mapping=ma:d===Wh&&(u.mapping=Ka),u}function l(u){let d=0,_=6;for(let b=0;b<_;b++)u[b]!==void 0&&d++;return d===_}function c(u){let d=u.target;d.removeEventListener("dispose",c);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let _=n.get(d);_!==void 0&&(n.delete(d),_.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function vC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&yh("WebGLRenderer: "+i+" extension not supported."),s}}}function _C(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,_=p.attributes.position,b=0;if(_===void 0)return;if(d!==null){let m=d.array;b=d.version;for(let x=0,S=m.length;x<S;x+=3){let w=m[x+0],E=m[x+1],C=m[x+2];u.push(w,E,E,C,C,w)}}else{let m=_.array;b=_.version;for(let x=0,S=m.length/3-1;x<S;x+=3){let w=x+0,E=x+1,C=x+2;u.push(w,E,E,C,C,w)}}let g=new(_.count>=65535?Pl:Ol)(u,1);g.version=b;let h=a.get(p);h&&t.remove(h),a.set(p,g)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function xC(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let b=0;for(let g=0;g<d;g++)b+=u[g];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function yC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Dt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function SC(e,t,n){let i=new WeakMap,s=new Re;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let A=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],x=0;d===!0&&(x=1),_===!0&&(x=2),b===!0&&(x=3);let S=o.attributes.position.count*x,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*w*4*p),C=new Ll(E,S,w,p);C.type=$n,C.needsUpdate=!0;let y=x*4;for(let U=0;U<p;U++){let D=g[U],B=h[U],Y=m[U],X=S*w*4*U;for(let P=0;P<D.count;P++){let F=P*y;d===!0&&(s.fromBufferAttribute(D,P),E[X+F+0]=s.x,E[X+F+1]=s.y,E[X+F+2]=s.z,E[X+F+3]=0),_===!0&&(s.fromBufferAttribute(B,P),E[X+F+4]=s.x,E[X+F+5]=s.y,E[X+F+6]=s.z,E[X+F+7]=0),b===!0&&(s.fromBufferAttribute(Y,P),E[X+F+8]=s.x,E[X+F+9]=s.y,E[X+F+10]=s.z,E[X+F+11]=Y.itemSize===4?s.w:1)}}u={count:p,texture:C,size:new Lt(S,w)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function MC(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var bC={[hg]:"LINEAR_TONE_MAPPING",[fg]:"REINHARD_TONE_MAPPING",[dg]:"CINEON_TONE_MAPPING",[pg]:"ACES_FILMIC_TONE_MAPPING",[gg]:"AGX_TONE_MAPPING",[vg]:"NEUTRAL_TONE_MAPPING",[mg]:"CUSTOM_TONE_MAPPING"};function TC(e,t,n,i,s){let a=new yn(t,n,{type:e,depthBuffer:i,stencilBuffer:s,depthTexture:i?new xs(t,n):void 0}),r=new yn(t,n,{type:di,depthBuffer:!1,stencilBuffer:!1}),o=new Jn;o.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Un([0,2,0,0,2,0],2));let l=new Ss({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new dn(o,l),f=new Xl(-1,1,1,-1,0,1),p=null,u=null,d=!1,_,b=null,g=[],h=!1;this.setSize=function(m,x){a.setSize(m,x),r.setSize(m,x);for(let S=0;S<g.length;S++){let w=g[S];w.setSize&&w.setSize(m,x)}},this.setEffects=function(m){g=m,h=g.length>0&&g[0].isRenderPass===!0;let x=a.width,S=a.height;for(let w=0;w<g.length;w++){let E=g[w];E.setSize&&E.setSize(x,S)}},this.begin=function(m,x){if(d||m.toneMapping===Si&&g.length===0)return!1;if(b=x,x!==null){let S=x.width,w=x.height;(a.width!==S||a.height!==w)&&this.setSize(S,w)}return h===!1&&m.setRenderTarget(a),_=m.toneMapping,m.toneMapping=Si,!0},this.hasRenderPass=function(){return h},this.end=function(m,x){m.toneMapping=_,d=!0;let S=a,w=r;for(let E=0;E<g.length;E++){let C=g[E];if(C.enabled!==!1&&(C.render(m,w,S,x),C.needsSwap!==!1)){let y=S;S=w,w=y}}if(p!==m.outputColorSpace||u!==m.toneMapping){p=m.outputColorSpace,u=m.toneMapping,l.defines={},Kt.getTransfer(p)===le&&(l.defines.SRGB_TRANSFER="");let E=bC[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(b),m.render(c,f),b=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),r.dispose(),o.dispose(),l.dispose()}}var wM=new Nn,zg=new xs(1,1),CM=new Ll,RM=new Th,DM=new Hl,lM=[],cM=[],uM=new Float32Array(16),hM=new Float32Array(9),fM=new Float32Array(4);function yo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=lM[s];if(a===void 0&&(a=new Float32Array(s),lM[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ke(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ff(e,t){let n=cM[t];n===void 0&&(n=new Int32Array(t),cM[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function EC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function AC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2fv(this.addr,t),Ke(n,t)}}function wC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Je(n,t))return;e.uniform3fv(this.addr,t),Ke(n,t)}}function CC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4fv(this.addr,t),Ke(n,t)}}function RC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ke(n,t)}else{if(Je(n,i))return;fM.set(i),e.uniformMatrix2fv(this.addr,!1,fM),Ke(n,i)}}function DC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ke(n,t)}else{if(Je(n,i))return;hM.set(i),e.uniformMatrix3fv(this.addr,!1,hM),Ke(n,i)}}function UC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ke(n,t)}else{if(Je(n,i))return;uM.set(i),e.uniformMatrix4fv(this.addr,!1,uM),Ke(n,i)}}function NC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function LC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2iv(this.addr,t),Ke(n,t)}}function IC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Je(n,t))return;e.uniform3iv(this.addr,t),Ke(n,t)}}function OC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4iv(this.addr,t),Ke(n,t)}}function PC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function BC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2uiv(this.addr,t),Ke(n,t)}}function FC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Je(n,t))return;e.uniform3uiv(this.addr,t),Ke(n,t)}}function zC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4uiv(this.addr,t),Ke(n,t)}}function VC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(zg.compareFunction=n.isReversedDepthBuffer()?Uf:Df,a=zg):a=wM,n.setTexture2D(t||a,s)}function HC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||RM,s)}function GC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||DM,s)}function kC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||CM,s)}function XC(e){switch(e){case 5126:return EC;case 35664:return AC;case 35665:return wC;case 35666:return CC;case 35674:return RC;case 35675:return DC;case 35676:return UC;case 5124:case 35670:return NC;case 35667:case 35671:return LC;case 35668:case 35672:return IC;case 35669:case 35673:return OC;case 5125:return PC;case 36294:return BC;case 36295:return FC;case 36296:return zC;case 35678:case 36198:case 36298:case 36306:case 35682:return VC;case 35679:case 36299:case 36307:return HC;case 35680:case 36300:case 36308:case 36293:return GC;case 36289:case 36303:case 36311:case 36292:return kC}}function WC(e,t){e.uniform1fv(this.addr,t)}function qC(e,t){let n=yo(t,this.size,2);e.uniform2fv(this.addr,n)}function YC(e,t){let n=yo(t,this.size,3);e.uniform3fv(this.addr,n)}function ZC(e,t){let n=yo(t,this.size,4);e.uniform4fv(this.addr,n)}function JC(e,t){let n=yo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function KC(e,t){let n=yo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function QC(e,t){let n=yo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function jC(e,t){e.uniform1iv(this.addr,t)}function $C(e,t){e.uniform2iv(this.addr,t)}function t2(e,t){e.uniform3iv(this.addr,t)}function e2(e,t){e.uniform4iv(this.addr,t)}function n2(e,t){e.uniform1uiv(this.addr,t)}function i2(e,t){e.uniform2uiv(this.addr,t)}function s2(e,t){e.uniform3uiv(this.addr,t)}function a2(e,t){e.uniform4uiv(this.addr,t)}function r2(e,t,n){let i=this.cache,s=t.length,a=Ff(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),Ke(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=zg:r=wM;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function o2(e,t,n){let i=this.cache,s=t.length,a=Ff(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),Ke(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||RM,a[r])}function l2(e,t,n){let i=this.cache,s=t.length,a=Ff(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),Ke(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||DM,a[r])}function c2(e,t,n){let i=this.cache,s=t.length,a=Ff(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),Ke(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||CM,a[r])}function u2(e){switch(e){case 5126:return WC;case 35664:return qC;case 35665:return YC;case 35666:return ZC;case 35674:return JC;case 35675:return KC;case 35676:return QC;case 5124:case 35670:return jC;case 35667:case 35671:return $C;case 35668:case 35672:return t2;case 35669:case 35673:return e2;case 5125:return n2;case 36294:return i2;case 36295:return s2;case 36296:return a2;case 35678:case 36198:case 36298:case 36306:case 35682:return r2;case 35679:case 36299:case 36307:return o2;case 35680:case 36300:case 36308:case 36293:return l2;case 36289:case 36303:case 36311:case 36292:return c2}}var Vg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=XC(n.type)}},Hg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=u2(n.type)}},Gg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Bg=/(\w+)(\])?(\[|\.)?/g;function dM(e,t){e.seq.push(t),e.map[t.id]=t}function h2(e,t,n){let i=e.name,s=i.length;for(Bg.lastIndex=0;;){let a=Bg.exec(i),r=Bg.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){dM(n,c===void 0?new Vg(o,e,t):new Hg(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new Gg(o),dM(n,p)),n=p}}}var xo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);h2(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function pM(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var f2=37297,d2=0;function p2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var mM=new Ot;function m2(e){Kt._getMatrix(mM,Kt.workingColorSpace,e);let t=`mat3( ${mM.elements.map(n=>n.toFixed(4))} )`;switch(Kt.getTransfer(e)){case Dl:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function gM(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+p2(e.getShaderSource(t),o)}else return a}function g2(e,t){let n=m2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var v2={[hg]:"Linear",[fg]:"Reinhard",[dg]:"Cineon",[pg]:"ACESFilmic",[gg]:"AgX",[vg]:"Neutral",[mg]:"Custom"};function _2(e,t){let n=v2[t];return n===void 0?(wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Lf=new z;function x2(){Kt.getLuminanceCoefficients(Lf);let e=Lf.x.toFixed(4),t=Lf.y.toFixed(4),n=Lf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ac).join(`
`)}function S2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function M2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function ac(e){return e!==""}function vM(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _M(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var b2=/^[ \t]*#include +<([\w\d./]+)>/gm;function kg(e){return e.replace(b2,E2)}var T2=new Map;function E2(e,t){let n=Gt[t];if(n===void 0){let i=T2.get(t);if(i!==void 0)n=Gt[i],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kg(n)}var A2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xM(e){return e.replace(A2,w2)}function w2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function yM(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var C2={[ql]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function R2(e){return C2[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var D2={[ma]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE",[Zl]:"ENVMAP_TYPE_CUBE_UV"};function U2(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":D2[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var N2={[Ka]:"ENVMAP_MODE_REFRACTION"};function L2(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":N2[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var I2={[ug]:"ENVMAP_BLENDING_MULTIPLY",[zS]:"ENVMAP_BLENDING_MIX",[VS]:"ENVMAP_BLENDING_ADD"};function O2(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":I2[e.combine]||"ENVMAP_BLENDING_NONE"}function P2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function B2(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=R2(n),c=U2(n),f=L2(n),p=O2(n),u=P2(n),d=y2(n),_=S2(a),b=s.createProgram(),g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ac).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ac).join(`
`),h.length>0&&(h+=`
`)):(g=[yM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ac).join(`
`),h=[yM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?Gt.tonemapping_pars_fragment:"",n.toneMapping!==Si?_2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,g2("linearToOutputTexel",n.outputColorSpace),x2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ac).join(`
`)),r=kg(r),r=vM(r,n),r=_M(r,n),o=kg(o),o=vM(o,n),o=_M(o,n),r=xM(r),o=xM(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let x=m+g+r,S=m+h+o,w=pM(s,s.VERTEX_SHADER,x),E=pM(s,s.FRAGMENT_SHADER,S);s.attachShader(b,w),s.attachShader(b,E),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(D){if(e.debug.checkShaderErrors){let B=s.getProgramInfoLog(b)||"",Y=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(E)||"",P=B.trim(),F=Y.trim(),G=X.trim(),j=!0,et=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,b,w,E);else{let ut=gM(s,w,"vertex"),yt=gM(s,E,"fragment");Dt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+ut+`
`+yt)}else P!==""?wt("WebGLProgram: Program Info Log:",P):(F===""||G==="")&&(et=!1);et&&(D.diagnostics={runnable:j,programLog:P,vertexShader:{log:F,prefix:g},fragmentShader:{log:G,prefix:h}})}s.deleteShader(w),s.deleteShader(E),y=new xo(s,b),A=M2(s,b)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(b,f2)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=d2++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=E,this}var F2=0,Xg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Wg(t),n.set(t,i)),i}},Wg=class{constructor(t){this.id=F2++,this.code=t,this.usedTimes=0}};function z2(e){return e===_a||e===tc||e===ec}function V2(e,t,n,i,s,a){let r=new Il,o=new Xg,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,A,U,D,B,Y){let X=D.fog,P=B.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=t.get(y.envMap||F,G),et=j&&j.mapping===Zl?j.image.height:null,ut=d[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&wt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let yt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Mt=yt!==void 0?yt.length:0,Qt=0;P.morphAttributes.position!==void 0&&(Qt=1),P.morphAttributes.normal!==void 0&&(Qt=2),P.morphAttributes.color!==void 0&&(Qt=3);let re,Pt,Q,ft;if(ut){let Ft=ki[ut];re=Ft.vertexShader,Pt=Ft.fragmentShader}else re=y.vertexShader,Pt=y.fragmentShader,o.update(y),Q=o.getVertexShaderID(y),ft=o.getFragmentShaderID(y);let it=e.getRenderTarget(),Ct=e.state.buffers.depth.getReversed(),Nt=B.isInstancedMesh===!0,Rt=B.isBatchedMesh===!0,Se=!!y.map,qt=!!y.matcap,oe=!!j,me=!!y.aoMap,kt=!!y.lightMap,Oe=!!y.bumpMap,ie=!!y.normalMap,ln=!!y.displacementMap,L=!!y.emissiveMap,De=!!y.metalnessMap,Xt=!!y.roughnessMap,At=y.anisotropy>0,R=y.clearcoat>0,st=y.dispersion>0,T=y.iridescence>0,v=y.sheen>0,I=y.transmission>0,W=At&&!!y.anisotropyMap,$=R&&!!y.clearcoatMap,nt=R&&!!y.clearcoatNormalMap,at=R&&!!y.clearcoatRoughnessMap,q=T&&!!y.iridescenceMap,K=T&&!!y.iridescenceThicknessMap,mt=v&&!!y.sheenColorMap,_t=v&&!!y.sheenRoughnessMap,lt=!!y.specularMap,rt=!!y.specularColorMap,It=!!y.specularIntensityMap,Ht=I&&!!y.transmissionMap,ne=I&&!!y.thicknessMap,N=!!y.gradientMap,ot=!!y.alphaMap,Z=y.alphaTest>0,gt=!!y.alphaHash,ct=!!y.extensions,tt=Si;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(tt=e.toneMapping);let bt={shaderID:ut,shaderType:y.type,shaderName:y.name,vertexShader:re,fragmentShader:Pt,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:ft,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&B._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&B.instanceColor!==null,instancingMorph:Nt&&B.morphTexture!==null,outputColorSpace:it===null?e.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Se,matcap:qt,envMap:oe,envMapMode:oe&&j.mapping,envMapCubeUVHeight:et,aoMap:me,lightMap:kt,bumpMap:Oe,normalMap:ie,displacementMap:ln,emissiveMap:L,normalMapObjectSpace:ie&&y.normalMapType===kS,normalMapTangentSpace:ie&&y.normalMapType===Ag,packedNormalMap:ie&&y.normalMapType===Ag&&z2(y.normalMap.format),metalnessMap:De,roughnessMap:Xt,anisotropy:At,anisotropyMap:W,clearcoat:R,clearcoatMap:$,clearcoatNormalMap:nt,clearcoatRoughnessMap:at,dispersion:st,iridescence:T,iridescenceMap:q,iridescenceThicknessMap:K,sheen:v,sheenColorMap:mt,sheenRoughnessMap:_t,specularMap:lt,specularColorMap:rt,specularIntensityMap:It,transmission:I,transmissionMap:Ht,thicknessMap:ne,gradientMap:N,opaque:y.transparent===!1&&y.blending===Ya&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:Z,alphaHash:gt,combine:y.combine,mapUv:Se&&_(y.map.channel),aoMapUv:me&&_(y.aoMap.channel),lightMapUv:kt&&_(y.lightMap.channel),bumpMapUv:Oe&&_(y.bumpMap.channel),normalMapUv:ie&&_(y.normalMap.channel),displacementMapUv:ln&&_(y.displacementMap.channel),emissiveMapUv:L&&_(y.emissiveMap.channel),metalnessMapUv:De&&_(y.metalnessMap.channel),roughnessMapUv:Xt&&_(y.roughnessMap.channel),anisotropyMapUv:W&&_(y.anisotropyMap.channel),clearcoatMapUv:$&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(y.sheenRoughnessMap.channel),specularMapUv:lt&&_(y.specularMap.channel),specularColorMapUv:rt&&_(y.specularColorMap.channel),specularIntensityMapUv:It&&_(y.specularIntensityMap.channel),transmissionMapUv:Ht&&_(y.transmissionMap.channel),thicknessMapUv:ne&&_(y.thicknessMap.channel),alphaMapUv:ot&&_(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ie||At),vertexNormals:!!P.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!P.attributes.uv&&(Se||ot),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||P.attributes.normal===void 0&&ie===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ct,skinning:B.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Qt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:tt,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&Kt.getTransfer(y.map.colorSpace)===le,decodeVideoTextureEmissive:L&&y.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(y.emissiveMap.colorSpace)===le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vi,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)A.push(U),A.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(h(A,y),m(A,y),A.push(e.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function h(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function m(y,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),y.push(r.mask)}function x(y){let A=d[y.type],U;if(A){let D=ki[A];U=eM.clone(D.uniforms)}else U=y.uniforms;return U}function S(y,A){let U=f.get(A);return U!==void 0?++U.usedTimes:(U=new B2(e,A,y,s),c.push(U),f.set(A,U)),U}function w(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:C}}function H2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function G2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function SM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function MM(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,b,g,h){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:_,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:h},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=_,m.materialVariant=r(u),m.groupOrder=b,m.renderOrder=u.renderOrder,m.z=g,m.group=h),t++,m}function l(u,d,_,b,g,h){let m=o(u,d,_,b,g,h);_.transmission>0?i.push(m):_.transparent===!0?s.push(m):n.push(m)}function c(u,d,_,b,g,h){let m=o(u,d,_,b,g,h);_.transmission>0?i.unshift(m):_.transparent===!0?s.unshift(m):n.unshift(m)}function f(u,d){n.length>1&&n.sort(u||G2),i.length>1&&i.sort(d||SM),s.length>1&&s.sort(d||SM)}function p(){for(let u=t,d=e.length;u<d;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function k2(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new MM,e.set(i,[r])):s>=a.length?(r=new MM,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function X2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new z,color:new te};break;case"SpotLight":n={position:new z,direction:new z,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new te,groundColor:new te};break;case"RectAreaLight":n={color:new te,position:new z,halfWidth:new z,halfHeight:new z};break}return e[t.id]=n,n}}}function W2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var q2=0;function Y2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Z2(e){let t=new X2,n=W2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,a=new He,r=new He;function o(c){let f=0,p=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,_=0,b=0,g=0,h=0,m=0,x=0,S=0,w=0,E=0,C=0;c.sort(Y2);for(let A=0,U=c.length;A<U;A++){let D=c[A],B=D.color,Y=D.intensity,X=D.distance,P=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===_a?P=D.shadow.map.texture:P=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=B.r*Y,p+=B.g*Y,u+=B.b*Y;else if(D.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(D.sh.coefficients[F],Y);C++}else if(D.isDirectionalLight){let F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let G=D.shadow,j=n.get(D);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=P,i.directionalShadowMatrix[d]=D.shadow.matrix,m++}i.directional[d]=F,d++}else if(D.isSpotLight){let F=t.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(B).multiplyScalar(Y),F.distance=X,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,i.spot[b]=F;let G=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,G.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[b]=G.matrix,D.castShadow){let j=n.get(D);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.spotShadow[b]=j,i.spotShadowMap[b]=P,S++}b++}else if(D.isRectAreaLight){let F=t.get(D);F.color.copy(B).multiplyScalar(Y),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=F,g++}else if(D.isPointLight){let F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){let G=D.shadow,j=n.get(D);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=P,i.pointShadowMatrix[_]=D.shadow.matrix,x++}i.point[_]=F,_++}else if(D.isHemisphereLight){let F=t.get(D);F.skyColor.copy(D.color).multiplyScalar(Y),F.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[h]=F,h++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let y=i.hash;(y.directionalLength!==d||y.pointLength!==_||y.spotLength!==b||y.rectAreaLength!==g||y.hemiLength!==h||y.numDirectionalShadows!==m||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==w||y.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=b,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,y.directionalLength=d,y.pointLength=_,y.spotLength=b,y.rectAreaLength=g,y.hemiLength=h,y.numDirectionalShadows=m,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=w,y.numLightProbes=C,i.version=q2++)}function l(c,f){let p=0,u=0,d=0,_=0,b=0,g=f.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){let x=c[h];if(x.isDirectionalLight){let S=i.directional[p];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(x.isSpotLight){let S=i.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(x.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),r.identity(),a.copy(x.matrixWorld),a.premultiply(g),r.extractRotation(a),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){let S=i.point[u];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){let S=i.hemi[b];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:i}}function bM(e){let t=new Z2(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function J2(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new bM(e),t.set(s,[o])):a>=r.length?(o=new bM(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var K2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,j2=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],$2=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],TM=new He,sc=new z,Fg=new z;function tR(e,t,n){let i=new zl,s=new Lt,a=new Lt,r=new Re,o=new Dh,l=new Uh,c={},f=n.maxTextureSize,p={[_s]:Sn,[Sn]:_s,[Vi]:Vi},u=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:K2,fragmentShader:Q2}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new Jn;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new dn(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let h=this.type;this.render=function(E,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===yS&&(wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ql);let A=e.getRenderTarget(),U=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Hi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Y=h!==this.type;Y&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(P=>P.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,P=E.length;X<P;X++){let F=E[X],G=F.shadow;if(G===void 0){wt("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let j=G.getFrameExtents();s.multiply(j),a.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/j.x),s.x=a.x*j.x,G.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/j.y),s.y=a.y*j.y,G.mapSize.y=a.y));let et=e.state.buffers.depth.getReversed();if(G.camera._reversedDepth=et,G.map===null||Y===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===mo){if(F.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new yn(s.x,s.y,{format:_a,type:di,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new xs(s.x,s.y,$n),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Bi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en}else F.isPointLight?(G.map=new Of(s.x),G.map.depthTexture=new Rh(s.x,Mi)):(G.map=new yn(s.x,s.y),G.map.depthTexture=new xs(s.x,s.y,Mi)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Bi,this.type===ql?(G.map.depthTexture.compareFunction=et?Uf:Df,G.map.depthTexture.minFilter=Ie,G.map.depthTexture.magFilter=Ie):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en);G.camera.updateProjectionMatrix()}let ut=G.map.isWebGLCubeRenderTarget?6:1;for(let yt=0;yt<ut;yt++){if(G.map.isWebGLCubeRenderTarget)e.setRenderTarget(G.map,yt),e.clear();else{yt===0&&(e.setRenderTarget(G.map),e.clear());let Mt=G.getViewport(yt);r.set(a.x*Mt.x,a.y*Mt.y,a.x*Mt.z,a.y*Mt.w),B.viewport(r)}if(F.isPointLight){let Mt=G.camera,Qt=G.matrix,re=F.distance||Mt.far;re!==Mt.far&&(Mt.far=re,Mt.updateProjectionMatrix()),sc.setFromMatrixPosition(F.matrixWorld),Mt.position.copy(sc),Fg.copy(Mt.position),Fg.add(j2[yt]),Mt.up.copy($2[yt]),Mt.lookAt(Fg),Mt.updateMatrixWorld(),Qt.makeTranslation(-sc.x,-sc.y,-sc.z),TM.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(TM,Mt.coordinateSystem,Mt.reversedDepth)}else G.updateMatrices(F);i=G.getFrustum(),S(C,y,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===mo&&m(G,y),G.needsUpdate=!1}h=this.type,g.needsUpdate=!1,e.setRenderTarget(A,U,D)};function m(E,C){let y=t.update(b);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new yn(s.x,s.y,{format:_a,type:di})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(C,null,y,u,b,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(C,null,y,d,b,null)}function x(E,C,y,A){let U=null,D=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)U=D;else if(U=y.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=U.uuid,Y=C.uuid,X=c[B];X===void 0&&(X={},c[B]=X);let P=X[Y];P===void 0&&(P=U.clone(),X[Y]=P,C.addEventListener("dispose",w)),U=P}if(U.visible=C.visible,U.wireframe=C.wireframe,A===mo?U.side=C.shadowSide!==null?C.shadowSide:C.side:U.side=C.shadowSide!==null?C.shadowSide:p[C.side],U.alphaMap=C.alphaMap,U.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,U.map=C.map,U.clipShadows=C.clipShadows,U.clippingPlanes=C.clippingPlanes,U.clipIntersection=C.clipIntersection,U.displacementMap=C.displacementMap,U.displacementScale=C.displacementScale,U.displacementBias=C.displacementBias,U.wireframeLinewidth=C.wireframeLinewidth,U.linewidth=C.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let B=e.properties.get(U);B.light=y}return U}function S(E,C,y,A,U){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===mo)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let Y=t.update(E),X=E.material;if(Array.isArray(X)){let P=Y.groups;for(let F=0,G=P.length;F<G;F++){let j=P[F],et=X[j.materialIndex];if(et&&et.visible){let ut=x(E,et,A,U);E.onBeforeShadow(e,E,C,y,Y,ut,j),e.renderBufferDirect(y,null,Y,ut,E,j),E.onAfterShadow(e,E,C,y,Y,ut,j)}}}else if(X.visible){let P=x(E,X,A,U);E.onBeforeShadow(e,E,C,y,Y,P,null),e.renderBufferDirect(y,null,Y,P,E,null),E.onAfterShadow(e,E,C,y,Y,P,null)}}let B=E.children;for(let Y=0,X=B.length;Y<X;Y++)S(B[Y],C,y,A,U)}function w(E){E.target.removeEventListener("dispose",w);for(let y in c){let A=c[y],U=E.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function eR(e,t){function n(){let N=!1,ot=new Re,Z=null,gt=new Re(0,0,0,0);return{setMask:function(ct){Z!==ct&&!N&&(e.colorMask(ct,ct,ct,ct),Z=ct)},setLocked:function(ct){N=ct},setClear:function(ct,tt,bt,Ft,Pe){Pe===!0&&(ct*=Ft,tt*=Ft,bt*=Ft),ot.set(ct,tt,bt,Ft),gt.equals(ot)===!1&&(e.clearColor(ct,tt,bt,Ft),gt.copy(ot))},reset:function(){N=!1,Z=null,gt.set(-1,0,0,0)}}}function i(){let N=!1,ot=!1,Z=null,gt=null,ct=null;return{setReversed:function(tt){if(ot!==tt){let bt=t.get("EXT_clip_control");tt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),ot=tt;let Ft=ct;ct=null,this.setClear(Ft)}},getReversed:function(){return ot},setTest:function(tt){tt?it(e.DEPTH_TEST):Ct(e.DEPTH_TEST)},setMask:function(tt){Z!==tt&&!N&&(e.depthMask(tt),Z=tt)},setFunc:function(tt){if(ot&&(tt=$S[tt]),gt!==tt){switch(tt){case uh:e.depthFunc(e.NEVER);break;case hh:e.depthFunc(e.ALWAYS);break;case fh:e.depthFunc(e.LESS);break;case Za:e.depthFunc(e.LEQUAL);break;case dh:e.depthFunc(e.EQUAL);break;case ph:e.depthFunc(e.GEQUAL);break;case mh:e.depthFunc(e.GREATER);break;case gh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}gt=tt}},setLocked:function(tt){N=tt},setClear:function(tt){ct!==tt&&(ct=tt,ot&&(tt=1-tt),e.clearDepth(tt))},reset:function(){N=!1,Z=null,gt=null,ct=null,ot=!1}}}function s(){let N=!1,ot=null,Z=null,gt=null,ct=null,tt=null,bt=null,Ft=null,Pe=null;return{setTest:function(he){N||(he?it(e.STENCIL_TEST):Ct(e.STENCIL_TEST))},setMask:function(he){ot!==he&&!N&&(e.stencilMask(he),ot=he)},setFunc:function(he,Wi,Ti){(Z!==he||gt!==Wi||ct!==Ti)&&(e.stencilFunc(he,Wi,Ti),Z=he,gt=Wi,ct=Ti)},setOp:function(he,Wi,Ti){(tt!==he||bt!==Wi||Ft!==Ti)&&(e.stencilOp(he,Wi,Ti),tt=he,bt=Wi,Ft=Ti)},setLocked:function(he){N=he},setClear:function(he){Pe!==he&&(e.clearStencil(he),Pe=he)},reset:function(){N=!1,ot=null,Z=null,gt=null,ct=null,tt=null,bt=null,Ft=null,Pe=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,_=[],b=null,g=!1,h=null,m=null,x=null,S=null,w=null,E=null,C=null,y=new te(0,0,0),A=0,U=!1,D=null,B=null,Y=null,X=null,P=null,F=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,et=e.getParameter(e.VERSION);et.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(et)[1]),G=j>=1):et.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),G=j>=2);let ut=null,yt={},Mt=e.getParameter(e.SCISSOR_BOX),Qt=e.getParameter(e.VIEWPORT),re=new Re().fromArray(Mt),Pt=new Re().fromArray(Qt);function Q(N,ot,Z,gt){let ct=new Uint8Array(4),tt=e.createTexture();e.bindTexture(N,tt),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let bt=0;bt<Z;bt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(ot,0,e.RGBA,1,1,gt,0,e.RGBA,e.UNSIGNED_BYTE,ct):e.texImage2D(ot+bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ct);return tt}let ft={};ft[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),ft[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[e.TEXTURE_2D_ARRAY]=Q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ft[e.TEXTURE_3D]=Q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),it(e.DEPTH_TEST),r.setFunc(Za),Oe(!1),ie(og),it(e.CULL_FACE),me(Hi);function it(N){f[N]!==!0&&(e.enable(N),f[N]=!0)}function Ct(N){f[N]!==!1&&(e.disable(N),f[N]=!1)}function Nt(N,ot){return u[N]!==ot?(e.bindFramebuffer(N,ot),u[N]=ot,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ot),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ot),!0):!1}function Rt(N,ot){let Z=_,gt=!1;if(N){Z=d.get(ot),Z===void 0&&(Z=[],d.set(ot,Z));let ct=N.textures;if(Z.length!==ct.length||Z[0]!==e.COLOR_ATTACHMENT0){for(let tt=0,bt=ct.length;tt<bt;tt++)Z[tt]=e.COLOR_ATTACHMENT0+tt;Z.length=ct.length,gt=!0}}else Z[0]!==e.BACK&&(Z[0]=e.BACK,gt=!0);gt&&e.drawBuffers(Z)}function Se(N){return b!==N?(e.useProgram(N),b=N,!0):!1}let qt={[oa]:e.FUNC_ADD,[MS]:e.FUNC_SUBTRACT,[bS]:e.FUNC_REVERSE_SUBTRACT};qt[TS]=e.MIN,qt[ES]=e.MAX;let oe={[AS]:e.ZERO,[wS]:e.ONE,[CS]:e.SRC_COLOR,[lh]:e.SRC_ALPHA,[IS]:e.SRC_ALPHA_SATURATE,[NS]:e.DST_COLOR,[DS]:e.DST_ALPHA,[RS]:e.ONE_MINUS_SRC_COLOR,[ch]:e.ONE_MINUS_SRC_ALPHA,[LS]:e.ONE_MINUS_DST_COLOR,[US]:e.ONE_MINUS_DST_ALPHA,[OS]:e.CONSTANT_COLOR,[PS]:e.ONE_MINUS_CONSTANT_COLOR,[BS]:e.CONSTANT_ALPHA,[FS]:e.ONE_MINUS_CONSTANT_ALPHA};function me(N,ot,Z,gt,ct,tt,bt,Ft,Pe,he){if(N===Hi){g===!0&&(Ct(e.BLEND),g=!1);return}if(g===!1&&(it(e.BLEND),g=!0),N!==SS){if(N!==h||he!==U){if((m!==oa||w!==oa)&&(e.blendEquation(e.FUNC_ADD),m=oa,w=oa),he)switch(N){case Ya:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Yl:e.blendFunc(e.ONE,e.ONE);break;case lg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case cg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Dt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ya:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Yl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case lg:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cg:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",N);break}x=null,S=null,E=null,C=null,y.set(0,0,0),A=0,h=N,U=he}return}ct=ct||ot,tt=tt||Z,bt=bt||gt,(ot!==m||ct!==w)&&(e.blendEquationSeparate(qt[ot],qt[ct]),m=ot,w=ct),(Z!==x||gt!==S||tt!==E||bt!==C)&&(e.blendFuncSeparate(oe[Z],oe[gt],oe[tt],oe[bt]),x=Z,S=gt,E=tt,C=bt),(Ft.equals(y)===!1||Pe!==A)&&(e.blendColor(Ft.r,Ft.g,Ft.b,Pe),y.copy(Ft),A=Pe),h=N,U=!1}function kt(N,ot){N.side===Vi?Ct(e.CULL_FACE):it(e.CULL_FACE);let Z=N.side===Sn;ot&&(Z=!Z),Oe(Z),N.blending===Ya&&N.transparent===!1?me(Hi):me(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let gt=N.stencilWrite;o.setTest(gt),gt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),L(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?it(e.SAMPLE_ALPHA_TO_COVERAGE):Ct(e.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){D!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),D=N)}function ie(N){N!==_S?(it(e.CULL_FACE),N!==B&&(N===og?e.cullFace(e.BACK):N===xS?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ct(e.CULL_FACE),B=N}function ln(N){N!==Y&&(G&&e.lineWidth(N),Y=N)}function L(N,ot,Z){N?(it(e.POLYGON_OFFSET_FILL),(X!==ot||P!==Z)&&(X=ot,P=Z,r.getReversed()&&(ot=-ot),e.polygonOffset(ot,Z))):Ct(e.POLYGON_OFFSET_FILL)}function De(N){N?it(e.SCISSOR_TEST):Ct(e.SCISSOR_TEST)}function Xt(N){N===void 0&&(N=e.TEXTURE0+F-1),ut!==N&&(e.activeTexture(N),ut=N)}function At(N,ot,Z){Z===void 0&&(ut===null?Z=e.TEXTURE0+F-1:Z=ut);let gt=yt[Z];gt===void 0&&(gt={type:void 0,texture:void 0},yt[Z]=gt),(gt.type!==N||gt.texture!==ot)&&(ut!==Z&&(e.activeTexture(Z),ut=Z),e.bindTexture(N,ot||ft[N]),gt.type=N,gt.texture=ot)}function R(){let N=yt[ut];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function st(){try{e.compressedTexImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function v(){try{e.texSubImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function I(){try{e.texSubImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function W(){try{e.compressedTexSubImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function $(){try{e.compressedTexSubImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function nt(){try{e.texStorage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function at(){try{e.texStorage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function q(){try{e.texImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function K(){try{e.texImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function mt(N){return p[N]!==void 0?p[N]:e.getParameter(N)}function _t(N,ot){p[N]!==ot&&(e.pixelStorei(N,ot),p[N]=ot)}function lt(N){re.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),re.copy(N))}function rt(N){Pt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Pt.copy(N))}function It(N,ot){let Z=c.get(ot);Z===void 0&&(Z=new WeakMap,c.set(ot,Z));let gt=Z.get(N);gt===void 0&&(gt=e.getUniformBlockIndex(ot,N.name),Z.set(N,gt))}function Ht(N,ot){let gt=c.get(ot).get(N);l.get(ot)!==gt&&(e.uniformBlockBinding(ot,gt,N.__bindingPointIndex),l.set(ot,gt))}function ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},ut=null,yt={},u={},d=new WeakMap,_=[],b=null,g=!1,h=null,m=null,x=null,S=null,w=null,E=null,C=null,y=new te(0,0,0),A=0,U=!1,D=null,B=null,Y=null,X=null,P=null,re.set(0,0,e.canvas.width,e.canvas.height),Pt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:it,disable:Ct,bindFramebuffer:Nt,drawBuffers:Rt,useProgram:Se,setBlending:me,setMaterial:kt,setFlipSided:Oe,setCullFace:ie,setLineWidth:ln,setPolygonOffset:L,setScissorTest:De,activeTexture:Xt,bindTexture:At,unbindTexture:R,compressedTexImage2D:st,compressedTexImage3D:T,texImage2D:q,texImage3D:K,pixelStorei:_t,getParameter:mt,updateUBOMapping:It,uniformBlockBinding:Ht,texStorage2D:nt,texStorage3D:at,texSubImage2D:v,texSubImage3D:I,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:lt,viewport:rt,reset:ne}}function nR(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,f=new WeakMap,p=new Set,u,d=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,v){return _?new OffscreenCanvas(T,v):Nl("canvas")}function g(T,v,I){let W=1,$=st(T);if(($.width>I||$.height>I)&&(W=I/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let nt=Math.floor(W*$.width),at=Math.floor(W*$.height);u===void 0&&(u=b(nt,at));let q=v?b(nt,at):u;return q.width=nt,q.height=at,q.getContext("2d").drawImage(T,0,0,nt,at),wt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+nt+"x"+at+")."),q}else return"data"in T&&wt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function h(T){return T.generateMipmaps}function m(T){e.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(T,v,I,W,$,nt=!1){if(T!==null){if(e[T]!==void 0)return e[T];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let at;W&&(at=t.get("EXT_texture_norm16"),at||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===e.RED&&(I===e.FLOAT&&(q=e.R32F),I===e.HALF_FLOAT&&(q=e.R16F),I===e.UNSIGNED_BYTE&&(q=e.R8),I===e.UNSIGNED_SHORT&&at&&(q=at.R16_EXT),I===e.SHORT&&at&&(q=at.R16_SNORM_EXT)),v===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.R8UI),I===e.UNSIGNED_SHORT&&(q=e.R16UI),I===e.UNSIGNED_INT&&(q=e.R32UI),I===e.BYTE&&(q=e.R8I),I===e.SHORT&&(q=e.R16I),I===e.INT&&(q=e.R32I)),v===e.RG&&(I===e.FLOAT&&(q=e.RG32F),I===e.HALF_FLOAT&&(q=e.RG16F),I===e.UNSIGNED_BYTE&&(q=e.RG8),I===e.UNSIGNED_SHORT&&at&&(q=at.RG16_EXT),I===e.SHORT&&at&&(q=at.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.RG8UI),I===e.UNSIGNED_SHORT&&(q=e.RG16UI),I===e.UNSIGNED_INT&&(q=e.RG32UI),I===e.BYTE&&(q=e.RG8I),I===e.SHORT&&(q=e.RG16I),I===e.INT&&(q=e.RG32I)),v===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.RGB8UI),I===e.UNSIGNED_SHORT&&(q=e.RGB16UI),I===e.UNSIGNED_INT&&(q=e.RGB32UI),I===e.BYTE&&(q=e.RGB8I),I===e.SHORT&&(q=e.RGB16I),I===e.INT&&(q=e.RGB32I)),v===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),I===e.UNSIGNED_INT&&(q=e.RGBA32UI),I===e.BYTE&&(q=e.RGBA8I),I===e.SHORT&&(q=e.RGBA16I),I===e.INT&&(q=e.RGBA32I)),v===e.RGB&&(I===e.UNSIGNED_SHORT&&at&&(q=at.RGB16_EXT),I===e.SHORT&&at&&(q=at.RGB16_SNORM_EXT),I===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(q=e.R11F_G11F_B10F)),v===e.RGBA){let K=nt?Dl:Kt.getTransfer($);I===e.FLOAT&&(q=e.RGBA32F),I===e.HALF_FLOAT&&(q=e.RGBA16F),I===e.UNSIGNED_BYTE&&(q=K===le?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT&&at&&(q=at.RGBA16_EXT),I===e.SHORT&&at&&(q=at.RGBA16_SNORM_EXT),I===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function w(T,v){let I;return T?v===null||v===Mi||v===vo?I=e.DEPTH24_STENCIL8:v===$n?I=e.DEPTH32F_STENCIL8:v===go&&(I=e.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===vo?I=e.DEPTH_COMPONENT24:v===$n?I=e.DEPTH_COMPONENT32F:v===go&&(I=e.DEPTH_COMPONENT16),I}function E(T,v){return h(T)===!0||T.isFramebufferTexture&&T.minFilter!==en&&T.minFilter!==Ie?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function C(T){let v=T.target;v.removeEventListener("dispose",C),A(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&p.delete(v)}function y(T){let v=T.target;v.removeEventListener("dispose",y),D(v)}function A(T){let v=i.get(T);if(v.__webglInit===void 0)return;let I=T.source,W=d.get(I);if(W){let $=W[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&U(T),Object.keys(W).length===0&&d.delete(I)}i.remove(T)}function U(T){let v=i.get(T);e.deleteTexture(v.__webglTexture);let I=T.source,W=d.get(I);delete W[v.__cacheKey],r.memory.textures--}function D(T){let v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let $=0;$<v.__webglFramebuffer[W].length;$++)e.deleteFramebuffer(v.__webglFramebuffer[W][$]);else e.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)e.deleteFramebuffer(v.__webglFramebuffer[W]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let I=T.textures;for(let W=0,$=I.length;W<$;W++){let nt=i.get(I[W]);nt.__webglTexture&&(e.deleteTexture(nt.__webglTexture),r.memory.textures--),i.remove(I[W])}i.remove(T)}let B=0;function Y(){B=0}function X(){return B}function P(T){B=T}function F(){let T=B;return T>=s.maxTextures&&wt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),B+=1,T}function G(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function j(T,v){let I=i.get(T);if(T.isVideoTexture&&At(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){let W=T.image;if(W===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(I,T,v);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+v)}function et(T,v){let I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Ct(I,T,v);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+v)}function ut(T,v){let I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Ct(I,T,v);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+v)}function yt(T,v){let I=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){Nt(I,T,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+v)}let Mt={[vh]:e.REPEAT,[_n]:e.CLAMP_TO_EDGE,[_h]:e.MIRRORED_REPEAT},Qt={[en]:e.NEAREST,[HS]:e.NEAREST_MIPMAP_NEAREST,[Jl]:e.NEAREST_MIPMAP_LINEAR,[Ie]:e.LINEAR,[qh]:e.LINEAR_MIPMAP_NEAREST,[ga]:e.LINEAR_MIPMAP_LINEAR},re={[XS]:e.NEVER,[JS]:e.ALWAYS,[WS]:e.LESS,[Df]:e.LEQUAL,[qS]:e.EQUAL,[Uf]:e.GEQUAL,[YS]:e.GREATER,[ZS]:e.NOTEQUAL};function Pt(T,v){if(v.type===$n&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ie||v.magFilter===qh||v.magFilter===Jl||v.magFilter===ga||v.minFilter===Ie||v.minFilter===qh||v.minFilter===Jl||v.minFilter===ga)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,Mt[v.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,Mt[v.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,Mt[v.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Qt[v.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Qt[v.minFilter]),v.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,re[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==Jl&&v.minFilter!==ga||v.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Q(T,v){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",C));let W=v.source,$=d.get(W);$===void 0&&($={},d.set(W,$));let nt=G(v);if(nt!==T.__cacheKey){$[nt]===void 0&&($[nt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,I=!0),$[nt].usedTimes++;let at=$[T.__cacheKey];at!==void 0&&($[T.__cacheKey].usedTimes--,at.usedTimes===0&&U(v)),T.__cacheKey=nt,T.__webglTexture=$[nt].texture}return I}function ft(T,v,I){return Math.floor(Math.floor(T/I)/v)}function it(T,v,I,W){let nt=T.updateRanges;if(nt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,I,W,v.data);else{nt.sort((_t,lt)=>_t.start-lt.start);let at=0;for(let _t=1;_t<nt.length;_t++){let lt=nt[at],rt=nt[_t],It=lt.start+lt.count,Ht=ft(rt.start,v.width,4),ne=ft(lt.start,v.width,4);rt.start<=It+1&&Ht===ne&&ft(rt.start+rt.count-1,v.width,4)===Ht?lt.count=Math.max(lt.count,rt.start+rt.count-lt.start):(++at,nt[at]=rt)}nt.length=at+1;let q=n.getParameter(e.UNPACK_ROW_LENGTH),K=n.getParameter(e.UNPACK_SKIP_PIXELS),mt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let _t=0,lt=nt.length;_t<lt;_t++){let rt=nt[_t],It=Math.floor(rt.start/4),Ht=Math.ceil(rt.count/4),ne=It%v.width,N=Math.floor(It/v.width),ot=Ht,Z=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,ne,N,ot,Z,I,W,v.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,q),n.pixelStorei(e.UNPACK_SKIP_PIXELS,K),n.pixelStorei(e.UNPACK_SKIP_ROWS,mt)}}function Ct(T,v,I){let W=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=e.TEXTURE_3D);let $=Q(T,v),nt=v.source;n.bindTexture(W,T.__webglTexture,e.TEXTURE0+I);let at=i.get(nt);if(nt.version!==at.__version||$===!0){if(n.activeTexture(e.TEXTURE0+I),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Z=Kt.getPrimaries(Kt.workingColorSpace),gt=v.colorSpace===Ms?null:Kt.getPrimaries(v.colorSpace),ct=v.colorSpace===Ms||Z===gt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let K=g(v.image,!1,s.maxTextureSize);K=R(v,K);let mt=a.convert(v.format,v.colorSpace),_t=a.convert(v.type),lt=S(v.internalFormat,mt,_t,v.normalized,v.colorSpace,v.isVideoTexture);Pt(W,v);let rt,It=v.mipmaps,Ht=v.isVideoTexture!==!0,ne=at.__version===void 0||$===!0,N=nt.dataReady,ot=E(v,K);if(v.isDepthTexture)lt=w(v.format===va,v.type),ne&&(Ht?n.texStorage2D(e.TEXTURE_2D,1,lt,K.width,K.height):n.texImage2D(e.TEXTURE_2D,0,lt,K.width,K.height,0,mt,_t,null));else if(v.isDataTexture)if(It.length>0){Ht&&ne&&n.texStorage2D(e.TEXTURE_2D,ot,lt,It[0].width,It[0].height);for(let Z=0,gt=It.length;Z<gt;Z++)rt=It[Z],Ht?N&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,rt.width,rt.height,mt,_t,rt.data):n.texImage2D(e.TEXTURE_2D,Z,lt,rt.width,rt.height,0,mt,_t,rt.data);v.generateMipmaps=!1}else Ht?(ne&&n.texStorage2D(e.TEXTURE_2D,ot,lt,K.width,K.height),N&&it(v,K,mt,_t)):n.texImage2D(e.TEXTURE_2D,0,lt,K.width,K.height,0,mt,_t,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ot,lt,It[0].width,It[0].height,K.depth);for(let Z=0,gt=It.length;Z<gt;Z++)if(rt=It[Z],v.format!==Ln)if(mt!==null)if(Ht){if(N)if(v.layerUpdates.size>0){let ct=Ng(rt.width,rt.height,v.format,v.type);for(let tt of v.layerUpdates){let bt=rt.data.subarray(tt*ct/rt.data.BYTES_PER_ELEMENT,(tt+1)*ct/rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,tt,rt.width,rt.height,1,mt,bt)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,rt.width,rt.height,K.depth,mt,rt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,lt,rt.width,rt.height,K.depth,0,rt.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,rt.width,rt.height,K.depth,mt,_t,rt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Z,lt,rt.width,rt.height,K.depth,0,mt,_t,rt.data)}else{Ht&&ne&&n.texStorage2D(e.TEXTURE_2D,ot,lt,It[0].width,It[0].height);for(let Z=0,gt=It.length;Z<gt;Z++)rt=It[Z],v.format!==Ln?mt!==null?Ht?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,rt.width,rt.height,mt,rt.data):n.compressedTexImage2D(e.TEXTURE_2D,Z,lt,rt.width,rt.height,0,rt.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?N&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,rt.width,rt.height,mt,_t,rt.data):n.texImage2D(e.TEXTURE_2D,Z,lt,rt.width,rt.height,0,mt,_t,rt.data)}else if(v.isDataArrayTexture)if(Ht){if(ne&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ot,lt,K.width,K.height,K.depth),N)if(v.layerUpdates.size>0){let Z=Ng(K.width,K.height,v.format,v.type);for(let gt of v.layerUpdates){let ct=K.data.subarray(gt*Z/K.data.BYTES_PER_ELEMENT,(gt+1)*Z/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,gt,K.width,K.height,1,mt,_t,ct)}v.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,mt,_t,K.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,lt,K.width,K.height,K.depth,0,mt,_t,K.data);else if(v.isData3DTexture)Ht?(ne&&n.texStorage3D(e.TEXTURE_3D,ot,lt,K.width,K.height,K.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,mt,_t,K.data)):n.texImage3D(e.TEXTURE_3D,0,lt,K.width,K.height,K.depth,0,mt,_t,K.data);else if(v.isFramebufferTexture){if(ne)if(Ht)n.texStorage2D(e.TEXTURE_2D,ot,lt,K.width,K.height);else{let Z=K.width,gt=K.height;for(let ct=0;ct<ot;ct++)n.texImage2D(e.TEXTURE_2D,ct,lt,Z,gt,0,mt,_t,null),Z>>=1,gt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){let Z=e.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),K.parentNode!==Z){Z.appendChild(K),p.add(v),Z.onpaint=Ft=>{let Pe=Ft.changedElements;for(let he of p)Pe.includes(he.image)&&(he.needsUpdate=!0)},Z.requestPaint();return}let gt=0,ct=e.RGBA,tt=e.RGBA,bt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,gt,ct,tt,bt,K),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(It.length>0){if(Ht&&ne){let Z=st(It[0]);n.texStorage2D(e.TEXTURE_2D,ot,lt,Z.width,Z.height)}for(let Z=0,gt=It.length;Z<gt;Z++)rt=It[Z],Ht?N&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,mt,_t,rt):n.texImage2D(e.TEXTURE_2D,Z,lt,mt,_t,rt);v.generateMipmaps=!1}else if(Ht){if(ne){let Z=st(K);n.texStorage2D(e.TEXTURE_2D,ot,lt,Z.width,Z.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,mt,_t,K)}else n.texImage2D(e.TEXTURE_2D,0,lt,mt,_t,K);h(v)&&m(W),at.__version=nt.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Nt(T,v,I){if(v.image.length!==6)return;let W=Q(T,v),$=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+I);let nt=i.get($);if($.version!==nt.__version||W===!0){n.activeTexture(e.TEXTURE0+I);let at=Kt.getPrimaries(Kt.workingColorSpace),q=v.colorSpace===Ms?null:Kt.getPrimaries(v.colorSpace),K=v.colorSpace===Ms||at===q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let mt=v.isCompressedTexture||v.image[0].isCompressedTexture,_t=v.image[0]&&v.image[0].isDataTexture,lt=[];for(let tt=0;tt<6;tt++)!mt&&!_t?lt[tt]=g(v.image[tt],!0,s.maxCubemapSize):lt[tt]=_t?v.image[tt].image:v.image[tt],lt[tt]=R(v,lt[tt]);let rt=lt[0],It=a.convert(v.format,v.colorSpace),Ht=a.convert(v.type),ne=S(v.internalFormat,It,Ht,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,ot=nt.__version===void 0||W===!0,Z=$.dataReady,gt=E(v,rt);Pt(e.TEXTURE_CUBE_MAP,v);let ct;if(mt){N&&ot&&n.texStorage2D(e.TEXTURE_CUBE_MAP,gt,ne,rt.width,rt.height);for(let tt=0;tt<6;tt++){ct=lt[tt].mipmaps;for(let bt=0;bt<ct.length;bt++){let Ft=ct[bt];v.format!==Ln?It!==null?N?Z&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,Ft.width,Ft.height,It,Ft.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,ne,Ft.width,Ft.height,0,Ft.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,Ft.width,Ft.height,It,Ht,Ft.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,ne,Ft.width,Ft.height,0,It,Ht,Ft.data)}}}else{if(ct=v.mipmaps,N&&ot){ct.length>0&&gt++;let tt=st(lt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,gt,ne,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(_t){N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,lt[tt].width,lt[tt].height,It,Ht,lt[tt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ne,lt[tt].width,lt[tt].height,0,It,Ht,lt[tt].data);for(let bt=0;bt<ct.length;bt++){let Pe=ct[bt].image[tt].image;N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,Pe.width,Pe.height,It,Ht,Pe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,ne,Pe.width,Pe.height,0,It,Ht,Pe.data)}}else{N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,Ht,lt[tt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ne,It,Ht,lt[tt]);for(let bt=0;bt<ct.length;bt++){let Ft=ct[bt];N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,It,Ht,Ft.image[tt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,ne,It,Ht,Ft.image[tt])}}}h(v)&&m(e.TEXTURE_CUBE_MAP),nt.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Rt(T,v,I,W,$,nt){let at=a.convert(I.format,I.colorSpace),q=a.convert(I.type),K=S(I.internalFormat,at,q,I.normalized,I.colorSpace),mt=i.get(v),_t=i.get(I);if(_t.__renderTarget=v,!mt.__hasExternalTextures){let lt=Math.max(1,v.width>>nt),rt=Math.max(1,v.height>>nt);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,nt,K,lt,rt,v.depth,0,at,q,null):n.texImage2D($,nt,K,lt,rt,0,at,q,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),Xt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,$,_t.__webglTexture,0,De(v)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,$,_t.__webglTexture,nt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(T,v,I){if(e.bindRenderbuffer(e.RENDERBUFFER,T),v.depthBuffer){let W=v.depthTexture,$=W&&W.isDepthTexture?W.type:null,nt=w(v.stencilBuffer,$),at=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Xt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(v),nt,v.width,v.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(v),nt,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,nt,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,at,e.RENDERBUFFER,T)}else{let W=v.textures;for(let $=0;$<W.length;$++){let nt=W[$],at=a.convert(nt.format,nt.colorSpace),q=a.convert(nt.type),K=S(nt.internalFormat,at,q,nt.normalized,nt.colorSpace);Xt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(v),K,v.width,v.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(v),K,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,K,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function qt(T,v,I){let W=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),Pt(e.TEXTURE_CUBE_MAP,v.depthTexture);let mt=a.convert(v.depthTexture.format),_t=a.convert(v.depthTexture.type),lt;v.depthTexture.format===Bi?lt=e.DEPTH_COMPONENT24:v.depthTexture.format===va&&(lt=e.DEPTH24_STENCIL8);for(let rt=0;rt<6;rt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,lt,v.width,v.height,0,mt,_t,null)}}else j(v.depthTexture,0);let nt=$.__webglTexture,at=De(v),q=W?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,K=v.depthTexture.format===va?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===Bi)Xt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,q,nt,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,K,q,nt,0);else if(v.depthTexture.format===va)Xt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,q,nt,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,K,q,nt,0);else throw new Error("Unknown depthTexture format")}function oe(T){let v=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let W=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=W}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(I)for(let W=0;W<6;W++)qt(v.__webglFramebuffer[W],T,W);else{let W=T.texture.mipmaps;W&&W.length>0?qt(v.__webglFramebuffer[0],T,0):qt(v.__webglFramebuffer,T,0)}else if(I){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=e.createRenderbuffer(),Se(v.__webglDepthbuffer[W],T,!1);else{let $=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,nt),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,nt)}}else{let W=T.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),Se(v.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,nt),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,nt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function me(T,v,I){let W=i.get(T);v!==void 0&&Rt(W.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&oe(T)}function kt(T){let v=T.texture,I=i.get(T),W=i.get(v);T.addEventListener("dispose",y);let $=T.textures,nt=T.isWebGLCubeRenderTarget===!0,at=$.length>1;if(at||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=v.version,r.memory.textures++),nt){I.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[q]=[];for(let K=0;K<v.mipmaps.length;K++)I.__webglFramebuffer[q][K]=e.createFramebuffer()}else I.__webglFramebuffer[q]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)I.__webglFramebuffer[q]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(at)for(let q=0,K=$.length;q<K;q++){let mt=i.get($[q]);mt.__webglTexture===void 0&&(mt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&Xt(T)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let q=0;q<$.length;q++){let K=$[q];I.__webglColorRenderbuffer[q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[q]);let mt=a.convert(K.format,K.colorSpace),_t=a.convert(K.type),lt=S(K.internalFormat,mt,_t,K.normalized,K.colorSpace,T.isXRRenderTarget===!0),rt=De(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,rt,lt,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+q,e.RENDERBUFFER,I.__webglColorRenderbuffer[q])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(I.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(nt){n.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),Pt(e.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Rt(I.__webglFramebuffer[q][K],T,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else Rt(I.__webglFramebuffer[q],T,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);h(v)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(at){for(let q=0,K=$.length;q<K;q++){let mt=$[q],_t=i.get(mt),lt=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(lt,_t.__webglTexture),Pt(lt,mt),Rt(I.__webglFramebuffer,T,mt,e.COLOR_ATTACHMENT0+q,lt,0),h(mt)&&m(lt)}n.unbindTexture()}else{let q=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(q=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(q,W.__webglTexture),Pt(q,v),v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Rt(I.__webglFramebuffer[K],T,v,e.COLOR_ATTACHMENT0,q,K);else Rt(I.__webglFramebuffer,T,v,e.COLOR_ATTACHMENT0,q,0);h(v)&&m(q),n.unbindTexture()}T.depthBuffer&&oe(T)}function Oe(T){let v=T.textures;for(let I=0,W=v.length;I<W;I++){let $=v[I];if(h($)){let nt=x(T),at=i.get($).__webglTexture;n.bindTexture(nt,at),m(nt),n.unbindTexture()}}}let ie=[],ln=[];function L(T){if(T.samples>0){if(Xt(T)===!1){let v=T.textures,I=T.width,W=T.height,$=e.COLOR_BUFFER_BIT,nt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=i.get(T),q=v.length>1;if(q)for(let mt=0;mt<v.length;mt++)n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let K=T.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,at.__webglColorRenderbuffer[mt]);let _t=i.get(v[mt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,_t,0)}e.blitFramebuffer(0,0,I,W,0,0,I,W,$,e.NEAREST),l===!0&&(ie.length=0,ln.length=0,ie.push(e.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ie.push(nt),ln.push(nt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ln)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ie))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),q)for(let mt=0;mt<v.length;mt++){n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.RENDERBUFFER,at.__webglColorRenderbuffer[mt]);let _t=i.get(v[mt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.TEXTURE_2D,_t,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let v=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function De(T){return Math.min(s.maxSamples,T.samples)}function Xt(T){let v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(T){let v=r.render.frame;f.get(T)!==v&&(f.set(T,v),T.update())}function R(T,v){let I=T.colorSpace,W=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Rl&&I!==Ms&&(Kt.getTransfer(I)===le?(W!==Ln||$!==jn)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",I)),v}function st(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=Y,this.getTextureUnits=X,this.setTextureUnits=P,this.setTexture2D=j,this.setTexture2DArray=et,this.setTexture3D=ut,this.setTextureCube=yt,this.rebindTextures=me,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iR(e,t){function n(i,s=Ms){let a,r=Kt.getTransfer(s);if(i===jn)return e.UNSIGNED_BYTE;if(i===Zh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Jh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Sg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Mg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===xg)return e.BYTE;if(i===yg)return e.SHORT;if(i===go)return e.UNSIGNED_SHORT;if(i===Yh)return e.INT;if(i===Mi)return e.UNSIGNED_INT;if(i===$n)return e.FLOAT;if(i===di)return e.HALF_FLOAT;if(i===bg)return e.ALPHA;if(i===Tg)return e.RGB;if(i===Ln)return e.RGBA;if(i===Bi)return e.DEPTH_COMPONENT;if(i===va)return e.DEPTH_STENCIL;if(i===Eg)return e.RED;if(i===Kh)return e.RED_INTEGER;if(i===_a)return e.RG;if(i===Qh)return e.RG_INTEGER;if(i===jh)return e.RGBA_INTEGER;if(i===Kl||i===Ql||i===jl||i===$l)if(r===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Kl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Kl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$l)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$h||i===tf||i===ef||i===nf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===$h)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ef)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sf||i===af||i===rf||i===of||i===lf||i===tc||i===cf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===sf||i===af)return r===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===rf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===of)return a.COMPRESSED_R11_EAC;if(i===lf)return a.COMPRESSED_SIGNED_R11_EAC;if(i===tc)return a.COMPRESSED_RG11_EAC;if(i===cf)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uf||i===hf||i===ff||i===df||i===pf||i===mf||i===gf||i===vf||i===_f||i===xf||i===yf||i===Sf||i===Mf||i===bf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===uf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ff)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===df)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_f)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tf||i===Ef||i===Af)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Tf)return r===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ef)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Af)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wf||i===Cf||i===ec||i===Rf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===wf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Cf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ec)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var sR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aR=`
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

}`,qg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Gl(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Kn({vertexShader:sR,fragmentShader:aR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dn(new ys(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yg=class extends Fi{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,_=null,b=typeof XRWebGLBinding<"u",g=new qg,h={},m=n.getContextAttributes(),x=null,S=null,w=[],E=[],C=new Lt,y=null,A=new Dn;A.viewport=new Re;let U=new Dn;U.viewport=new Re;let D=[A,U],B=new kh,Y=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ft=w[Q];return ft===void 0&&(ft=new uo,w[Q]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Q){let ft=w[Q];return ft===void 0&&(ft=new uo,w[Q]=ft),ft.getGripSpace()},this.getHand=function(Q){let ft=w[Q];return ft===void 0&&(ft=new uo,w[Q]=ft),ft.getHandSpace()};function P(Q){let ft=E.indexOf(Q.inputSource);if(ft===-1)return;let it=w[ft];it!==void 0&&(it.update(Q.inputSource,Q.frame,c||r),it.dispatchEvent({type:Q.type,data:Q.inputSource}))}function F(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",G);for(let Q=0;Q<w.length;Q++){let ft=E[Q];ft!==null&&(E[Q]=null,w[Q].disconnect(ft))}Y=null,X=null,g.reset();for(let Q in h)delete h[Q];t.setRenderTarget(x),d=null,u=null,p=null,s=null,S=null,Pt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",F),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await n.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Ct=null,Nt=null;m.depth&&(Nt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,it=m.stencil?va:Bi,Ct=m.stencil?vo:Mi);let Rt={colorFormat:n.RGBA8,depthFormat:Nt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new yn(u.textureWidth,u.textureHeight,{format:Ln,type:jn,depthTexture:new xs(u.textureWidth,u.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new yn(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Pt.setContext(s),Pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(Q){for(let ft=0;ft<Q.removed.length;ft++){let it=Q.removed[ft],Ct=E.indexOf(it);Ct>=0&&(E[Ct]=null,w[Ct].disconnect(it))}for(let ft=0;ft<Q.added.length;ft++){let it=Q.added[ft],Ct=E.indexOf(it);if(Ct===-1){for(let Rt=0;Rt<w.length;Rt++)if(Rt>=E.length){E.push(it),Ct=Rt;break}else if(E[Rt]===null){E[Rt]=it,Ct=Rt;break}if(Ct===-1)break}let Nt=w[Ct];Nt&&Nt.connect(it)}}let j=new z,et=new z;function ut(Q,ft,it){j.setFromMatrixPosition(ft.matrixWorld),et.setFromMatrixPosition(it.matrixWorld);let Ct=j.distanceTo(et),Nt=ft.projectionMatrix.elements,Rt=it.projectionMatrix.elements,Se=Nt[14]/(Nt[10]-1),qt=Nt[14]/(Nt[10]+1),oe=(Nt[9]+1)/Nt[5],me=(Nt[9]-1)/Nt[5],kt=(Nt[8]-1)/Nt[0],Oe=(Rt[8]+1)/Rt[0],ie=Se*kt,ln=Se*Oe,L=Ct/(-kt+Oe),De=L*-kt;if(ft.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(De),Q.translateZ(L),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Nt[10]===-1)Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let Xt=Se+L,At=qt+L,R=ie-De,st=ln+(Ct-De),T=oe*qt/At*Xt,v=me*qt/At*Xt;Q.projectionMatrix.makePerspective(R,st,T,v,Xt,At),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function yt(Q,ft){ft===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ft.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ft=Q.near,it=Q.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(it=g.depthFar)),B.near=U.near=A.near=ft,B.far=U.far=A.far=it,(Y!==B.near||X!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),Y=B.near,X=B.far),B.layers.mask=Q.layers.mask|6,A.layers.mask=B.layers.mask&-5,U.layers.mask=B.layers.mask&-3;let Ct=Q.parent,Nt=B.cameras;yt(B,Ct);for(let Rt=0;Rt<Nt.length;Rt++)yt(Nt[Rt],Ct);Nt.length===2?ut(B,A,U):B.projectionMatrix.copy(A.projectionMatrix),Mt(Q,B,Ct)};function Mt(Q,ft,it){it===null?Q.matrix.copy(ft.matrixWorld):(Q.matrix.copy(it.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ft.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Sh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Q){return h[Q]};let Qt=null;function re(Q,ft){if(f=ft.getViewerPose(c||r),_=ft,f!==null){let it=f.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Ct=!1;it.length!==B.cameras.length&&(B.cameras.length=0,Ct=!0);for(let qt=0;qt<it.length;qt++){let oe=it[qt],me=null;if(d!==null)me=d.getViewport(oe);else{let Oe=p.getViewSubImage(u,oe);me=Oe.viewport,qt===0&&(t.setRenderTargetTextures(S,Oe.colorTexture,Oe.depthStencilTexture),t.setRenderTarget(S))}let kt=D[qt];kt===void 0&&(kt=new Dn,kt.layers.enable(qt),kt.viewport=new Re,D[qt]=kt),kt.matrix.fromArray(oe.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(oe.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(me.x,me.y,me.width,me.height),qt===0&&(B.matrix.copy(kt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ct===!0&&B.cameras.push(kt)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let qt=p.getDepthInformation(it[0]);qt&&qt.isValid&&qt.texture&&g.init(qt,s.renderState)}if(Nt&&Nt.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let qt=0;qt<it.length;qt++){let oe=it[qt].camera;if(oe){let me=h[oe];me||(me=new Gl,h[oe]=me);let kt=p.getCameraImage(oe);me.sourceTexture=kt}}}}for(let it=0;it<w.length;it++){let Ct=E[it],Nt=w[it];Ct!==null&&Nt!==void 0&&Nt.update(Ct,ft,c||r)}Qt&&Qt(Q,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}let Pt=new EM;Pt.setAnimationLoop(re),this.setAnimationLoop=function(Q){Qt=Q},this.dispose=function(){}}},rR=new He,UM=new Ot;UM.set(-1,0,0,0,1,0,0,0,1);function oR(e,t){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Rg(e)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,m,x,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(g,h):h.isMeshLambertMaterial?(a(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(g,h),p(g,h)):h.isMeshPhongMaterial?(a(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(g,h),u(g,h),h.isMeshPhysicalMaterial&&d(g,h,S)):h.isMeshMatcapMaterial?(a(g,h),_(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),b(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(r(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,m,x):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Sn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Sn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let m=t.get(h),x=m.envMap,S=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(rR.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(UM),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function r(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function d(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function b(g,h){let m=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lR(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){let S=x.program;i.uniformBlockBinding(m,S)}function c(m,x){let S=s[m.id];S===void 0&&(_(m),S=f(m),s[m.id]=S,m.addEventListener("dispose",g));let w=x.program;i.updateUBOMapping(m,w);let E=t.render.frame;a[m.id]!==E&&(u(m),a[m.id]=E)}function f(m){let x=p();m.__bindingPointIndex=x;let S=e.createBuffer(),w=m.__size,E=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,w,E),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,S),S}function p(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){let x=s[m.id],S=m.uniforms,w=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let E=0,C=S.length;E<C;E++){let y=Array.isArray(S[E])?S[E]:[S[E]];for(let A=0,U=y.length;A<U;A++){let D=y[A];if(d(D,E,A,w)===!0){let B=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value],X=0;for(let P=0;P<Y.length;P++){let F=Y[P],G=b(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,e.bufferSubData(e.UNIFORM_BUFFER,B+X,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):ArrayBuffer.isView(F)?D.__data.set(new F.constructor(F.buffer,F.byteOffset,D.__data.length)):(F.toArray(D.__data,X),X+=G.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(m,x,S,w){let E=m.value,C=x+"_"+S;if(w[C]===void 0)return typeof E=="number"||typeof E=="boolean"?w[C]=E:ArrayBuffer.isView(E)?w[C]=E.slice():w[C]=E.clone(),!0;{let y=w[C];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return w[C]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(y.equals(E)===!1)return y.copy(E),!0}}return!1}function _(m){let x=m.uniforms,S=0,w=16;for(let C=0,y=x.length;C<y;C++){let A=Array.isArray(x[C])?x[C]:[x[C]];for(let U=0,D=A.length;U<D;U++){let B=A[U],Y=Array.isArray(B.value)?B.value:[B.value];for(let X=0,P=Y.length;X<P;X++){let F=Y[X],G=b(F),j=S%w,et=j%G.boundary,ut=j+et;S+=et,ut!==0&&w-ut<G.storage&&(S+=w-ut),B.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=G.storage}}}let E=S%w;return E>0&&(S+=w-E),m.__size=S,m.__cache={},this}function b(m){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){let x=m.target;x.removeEventListener("dispose",g);let S=r.indexOf(x.__bindingPointIndex);r.splice(S,1),e.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function h(){for(let m in s)e.deleteBuffer(s[m]);r=[],s={},a={}}return{bind:l,update:c,dispose:h}}var cR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function uR(){return Gi===null&&(Gi=new fo(cR,16,16,_a,di),Gi.name="DFG_LUT",Gi.minFilter=Ie,Gi.magFilter=Ie,Gi.wrapS=_n,Gi.wrapT=_n,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var Pf=class{constructor(t={}){let{canvas:n=KS(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=jn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;let b=d,g=new Set([jh,Qh,Kh]),h=new Set([jn,Mi,go,vo,Zh,Jh]),m=new Uint32Array(4),x=new Int32Array(4),S=new z,w=null,E=null,C=[],y=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,D=!1,B=null;this._outputColorSpace=Yn;let Y=0,X=0,P=null,F=-1,G=null,j=new Re,et=new Re,ut=null,yt=new te(0),Mt=0,Qt=n.width,re=n.height,Pt=1,Q=null,ft=null,it=new Re(0,0,Qt,re),Ct=new Re(0,0,Qt,re),Nt=!1,Rt=new zl,Se=!1,qt=!1,oe=new He,me=new z,kt=new Re,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function ln(){return P===null?Pt:1}let L=i;function De(M,O){return n.getContext(M,O)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"184"}`),n.addEventListener("webglcontextlost",tt,!1),n.addEventListener("webglcontextrestored",bt,!1),n.addEventListener("webglcontextcreationerror",Ft,!1),L===null){let O="webgl2";if(L=De(O,M),L===null)throw De(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Dt("WebGLRenderer: "+M.message),M}let Xt,At,R,st,T,v,I,W,$,nt,at,q,K,mt,_t,lt,rt,It,Ht,ne,N,ot,Z;function gt(){Xt=new vC(L),Xt.init(),N=new iR(L,Xt),At=new cC(L,Xt,t,N),R=new eR(L,Xt),At.reversedDepthBuffer&&u&&R.buffers.depth.setReversed(!0),st=new yC(L),T=new H2,v=new nR(L,Xt,R,T,At,N,st),I=new gC(U),W=new TE(L),ot=new oC(L,W),$=new _C(L,W,st,ot),nt=new MC(L,$,W,ot,st),It=new SC(L,At,v),_t=new uC(T),at=new V2(U,I,Xt,At,ot,_t),q=new oR(U,T),K=new k2,mt=new J2(Xt),rt=new rC(U,I,R,nt,_,l),lt=new tR(U,nt,At),Z=new lR(L,st,At,R),Ht=new lC(L,Xt,st),ne=new xC(L,Xt,st),st.programs=at.programs,U.capabilities=At,U.extensions=Xt,U.properties=T,U.renderLists=K,U.shadowMap=lt,U.state=R,U.info=st}gt(),b!==jn&&(A=new TC(b,n.width,n.height,s,a));let ct=new Yg(U,L);this.xr=ct,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=Xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(M){M!==void 0&&(Pt=M,this.setSize(Qt,re,!1))},this.getSize=function(M){return M.set(Qt,re)},this.setSize=function(M,O,k=!0){if(ct.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=M,re=O,n.width=Math.floor(M*Pt),n.height=Math.floor(O*Pt),k===!0&&(n.style.width=M+"px",n.style.height=O+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Qt*Pt,re*Pt).floor()},this.setDrawingBufferSize=function(M,O,k){Qt=M,re=O,Pt=k,n.width=Math.floor(M*k),n.height=Math.floor(O*k),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(b===jn){Dt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){wt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(it)},this.setViewport=function(M,O,k,V){M.isVector4?it.set(M.x,M.y,M.z,M.w):it.set(M,O,k,V),R.viewport(j.copy(it).multiplyScalar(Pt).round())},this.getScissor=function(M){return M.copy(Ct)},this.setScissor=function(M,O,k,V){M.isVector4?Ct.set(M.x,M.y,M.z,M.w):Ct.set(M,O,k,V),R.scissor(et.copy(Ct).multiplyScalar(Pt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(M){R.setScissorTest(Nt=M)},this.setOpaqueSort=function(M){Q=M},this.setTransparentSort=function(M){ft=M},this.getClearColor=function(M){return M.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,k=!0){let V=0;if(M){let H=!1;if(P!==null){let pt=P.texture.format;H=g.has(pt)}if(H){let pt=P.texture.type,xt=h.has(pt),dt=rt.getClearColor(),St=rt.getClearAlpha(),Tt=dt.r,zt=dt.g,Wt=dt.b;xt?(m[0]=Tt,m[1]=zt,m[2]=Wt,m[3]=St,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=Tt,x[1]=zt,x[2]=Wt,x[3]=St,L.clearBufferiv(L.COLOR,0,x))}else V|=L.COLOR_BUFFER_BIT}O&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){n.removeEventListener("webglcontextlost",tt,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",Ft,!1),rt.dispose(),K.dispose(),mt.dispose(),T.dispose(),I.dispose(),nt.dispose(),ot.dispose(),Z.dispose(),at.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Qg),ct.removeEventListener("sessionend",jg),ya.stop()};function tt(M){M.preventDefault(),Cg("WebGLRenderer: Context Lost."),D=!0}function bt(){Cg("WebGLRenderer: Context Restored."),D=!1;let M=st.autoReset,O=lt.enabled,k=lt.autoUpdate,V=lt.needsUpdate,H=lt.type;gt(),st.autoReset=M,lt.enabled=O,lt.autoUpdate=k,lt.needsUpdate=V,lt.type=H}function Ft(M){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Pe(M){let O=M.target;O.removeEventListener("dispose",Pe),he(O)}function he(M){Wi(M),T.remove(M)}function Wi(M){let O=T.get(M).programs;O!==void 0&&(O.forEach(function(k){at.releaseProgram(k)}),M.isShaderMaterial&&at.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,k,V,H,pt){O===null&&(O=Oe);let xt=H.isMesh&&H.matrixWorld.determinant()<0,dt=HM(M,O,k,V,H);R.setMaterial(V,xt);let St=k.index,Tt=1;if(V.wireframe===!0){if(St=$.getWireframeAttribute(k),St===void 0)return;Tt=2}let zt=k.drawRange,Wt=k.attributes.position,Et=zt.start*Tt,fe=(zt.start+zt.count)*Tt;pt!==null&&(Et=Math.max(Et,pt.start*Tt),fe=Math.min(fe,(pt.start+pt.count)*Tt)),St!==null?(Et=Math.max(Et,0),fe=Math.min(fe,St.count)):Wt!=null&&(Et=Math.max(Et,0),fe=Math.min(fe,Wt.count));let Be=fe-Et;if(Be<0||Be===1/0)return;ot.setup(H,V,dt,k,St);let Ue,ge=Ht;if(St!==null&&(Ue=W.get(St),ge=ne,ge.setIndex(Ue)),H.isMesh)V.wireframe===!0?(R.setLineWidth(V.wireframeLinewidth*ln()),ge.setMode(L.LINES)):ge.setMode(L.TRIANGLES);else if(H.isLine){let cn=V.linewidth;cn===void 0&&(cn=1),R.setLineWidth(cn*ln()),H.isLineSegments?ge.setMode(L.LINES):H.isLineLoop?ge.setMode(L.LINE_LOOP):ge.setMode(L.LINE_STRIP)}else H.isPoints?ge.setMode(L.POINTS):H.isSprite&&ge.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))ge.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let cn=H._multiDrawStarts,vt=H._multiDrawCounts,In=H._multiDrawCount,ee=St?W.get(St).bytesPerElement:1,ti=T.get(V).currentProgram.getUniforms();for(let Ei=0;Ei<In;Ei++)ti.setValue(L,"_gl_DrawID",Ei),ge.render(cn[Ei]/ee,vt[Ei])}else if(H.isInstancedMesh)ge.renderInstances(Et,Be,H.count);else if(k.isInstancedBufferGeometry){let cn=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,vt=Math.min(k.instanceCount,cn);ge.renderInstances(Et,Be,vt)}else ge.render(Et,Be)};function Ti(M,O,k){M.transparent===!0&&M.side===Vi&&M.forceSinglePass===!1?(M.side=Sn,M.needsUpdate=!0,lc(M,O,k),M.side=_s,M.needsUpdate=!0,lc(M,O,k),M.side=Vi):lc(M,O,k)}this.compile=function(M,O,k=null){k===null&&(k=M),E=mt.get(k),E.init(O),y.push(E),k.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),M!==k&&M.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();let V=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pt=H.material;if(pt)if(Array.isArray(pt))for(let xt=0;xt<pt.length;xt++){let dt=pt[xt];Ti(dt,k,H),V.add(dt)}else Ti(pt,k,H),V.add(pt)}),E=y.pop(),V},this.compileAsync=function(M,O,k=null){let V=this.compile(M,O,k);return new Promise(H=>{function pt(){if(V.forEach(function(xt){T.get(xt).currentProgram.isReady()&&V.delete(xt)}),V.size===0){H(M);return}setTimeout(pt,10)}Xt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Gf=null;function zM(M){Gf&&Gf(M)}function Qg(){ya.stop()}function jg(){ya.start()}let ya=new EM;ya.setAnimationLoop(zM),typeof self<"u"&&ya.setContext(self),this.setAnimationLoop=function(M){Gf=M,ct.setAnimationLoop(M),M===null?ya.stop():ya.start()},ct.addEventListener("sessionstart",Qg),ct.addEventListener("sessionend",jg),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(M,O);let k=ct.enabled===!0&&ct.isPresenting===!0,V=A!==null&&(P===null||k)&&A.begin(U,P);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(O),O=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(U,M,O,P),E=mt.get(M,y.length),E.init(O),E.state.textureUnits=v.getTextureUnits(),y.push(E),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Rt.setFromProjectionMatrix(oe,yi,O.reversedDepth),qt=this.localClippingEnabled,Se=_t.init(this.clippingPlanes,qt),w=K.get(M,C.length),w.init(),C.push(w),ct.enabled===!0&&ct.isPresenting===!0){let xt=U.xr.getDepthSensingMesh();xt!==null&&kf(xt,O,-1/0,U.sortObjects)}kf(M,O,0,U.sortObjects),w.finish(),U.sortObjects===!0&&w.sort(Q,ft),ie=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ie&&rt.addToRenderList(w,M),this.info.render.frame++,Se===!0&&_t.beginShadows();let H=E.state.shadowsArray;if(lt.render(H,M,O),Se===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&A.hasRenderPass())===!1){let xt=w.opaque,dt=w.transmissive;if(E.setupLights(),O.isArrayCamera){let St=O.cameras;if(dt.length>0)for(let Tt=0,zt=St.length;Tt<zt;Tt++){let Wt=St[Tt];t0(xt,dt,M,Wt)}ie&&rt.render(M);for(let Tt=0,zt=St.length;Tt<zt;Tt++){let Wt=St[Tt];$g(w,M,Wt,Wt.viewport)}}else dt.length>0&&t0(xt,dt,M,O),ie&&rt.render(M),$g(w,M,O)}P!==null&&X===0&&(v.updateMultisampleRenderTarget(P),v.updateRenderTargetMipmap(P)),V&&A.end(U),M.isScene===!0&&M.onAfterRender(U,M,O),ot.resetDefaultState(),F=-1,G=null,y.pop(),y.length>0?(E=y[y.length-1],v.setTextureUnits(E.state.textureUnits),Se===!0&&_t.setGlobalState(U.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,B!==null&&B.renderEnd()};function kf(M,O,k,V){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Rt.intersectsSprite(M)){V&&kt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(oe);let xt=nt.update(M),dt=M.material;dt.visible&&w.push(M,xt,dt,k,kt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Rt.intersectsObject(M))){let xt=nt.update(M),dt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),kt.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),kt.copy(xt.boundingSphere.center)),kt.applyMatrix4(M.matrixWorld).applyMatrix4(oe)),Array.isArray(dt)){let St=xt.groups;for(let Tt=0,zt=St.length;Tt<zt;Tt++){let Wt=St[Tt],Et=dt[Wt.materialIndex];Et&&Et.visible&&w.push(M,xt,Et,k,kt.z,Wt)}}else dt.visible&&w.push(M,xt,dt,k,kt.z,null)}}let pt=M.children;for(let xt=0,dt=pt.length;xt<dt;xt++)kf(pt[xt],O,k,V)}function $g(M,O,k,V){let{opaque:H,transmissive:pt,transparent:xt}=M;E.setupLightsView(k),Se===!0&&_t.setGlobalState(U.clippingPlanes,k),V&&R.viewport(j.copy(V)),H.length>0&&oc(H,O,k),pt.length>0&&oc(pt,O,k),xt.length>0&&oc(xt,O,k),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function t0(M,O,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Et=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new yn(1,1,{generateMipmaps:!0,type:Et?di:jn,minFilter:ga,samples:Math.max(4,At.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let pt=E.state.transmissionRenderTarget[V.id],xt=V.viewport||j;pt.setSize(xt.z*U.transmissionResolutionScale,xt.w*U.transmissionResolutionScale);let dt=U.getRenderTarget(),St=U.getActiveCubeFace(),Tt=U.getActiveMipmapLevel();U.setRenderTarget(pt),U.getClearColor(yt),Mt=U.getClearAlpha(),Mt<1&&U.setClearColor(16777215,.5),U.clear(),ie&&rt.render(k);let zt=U.toneMapping;U.toneMapping=Si;let Wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Se===!0&&_t.setGlobalState(U.clippingPlanes,V),oc(M,k,V),v.updateMultisampleRenderTarget(pt),v.updateRenderTargetMipmap(pt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let fe=0,Be=O.length;fe<Be;fe++){let Ue=O[fe],{object:ge,geometry:cn,material:vt,group:In}=Ue;if(vt.side===Vi&&ge.layers.test(V.layers)){let ee=vt.side;vt.side=Sn,vt.needsUpdate=!0,e0(ge,k,V,cn,vt,In),vt.side=ee,vt.needsUpdate=!0,Et=!0}}Et===!0&&(v.updateMultisampleRenderTarget(pt),v.updateRenderTargetMipmap(pt))}U.setRenderTarget(dt,St,Tt),U.setClearColor(yt,Mt),Wt!==void 0&&(V.viewport=Wt),U.toneMapping=zt}function oc(M,O,k){let V=O.isScene===!0?O.overrideMaterial:null;for(let H=0,pt=M.length;H<pt;H++){let xt=M[H],{object:dt,geometry:St,group:Tt}=xt,zt=xt.material;zt.allowOverride===!0&&V!==null&&(zt=V),dt.layers.test(k.layers)&&e0(dt,O,k,St,zt,Tt)}}function e0(M,O,k,V,H,pt){M.onBeforeRender(U,O,k,V,H,pt),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(U,O,k,V,M,pt),H.transparent===!0&&H.side===Vi&&H.forceSinglePass===!1?(H.side=Sn,H.needsUpdate=!0,U.renderBufferDirect(k,O,V,H,M,pt),H.side=_s,H.needsUpdate=!0,U.renderBufferDirect(k,O,V,H,M,pt),H.side=Vi):U.renderBufferDirect(k,O,V,H,M,pt),M.onAfterRender(U,O,k,V,H,pt)}function lc(M,O,k){O.isScene!==!0&&(O=Oe);let V=T.get(M),H=E.state.lights,pt=E.state.shadowsArray,xt=H.state.version,dt=at.getParameters(M,H.state,pt,O,k,E.state.lightProbeGridArray),St=at.getProgramCacheKey(dt),Tt=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=I.get(M.envMap||V.environment,zt),V.envMapRotation=V.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",Pe),Tt=new Map,V.programs=Tt);let Wt=Tt.get(St);if(Wt!==void 0){if(V.currentProgram===Wt&&V.lightsStateVersion===xt)return i0(M,dt),Wt}else dt.uniforms=at.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,k,dt),M.onBeforeCompile(dt,U),Wt=at.acquireProgram(dt,St),Tt.set(St,Wt),V.uniforms=dt.uniforms;let Et=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=_t.uniform),i0(M,dt),V.needsLights=kM(M),V.lightsStateVersion=xt,V.needsLights&&(Et.ambientLightColor.value=H.state.ambient,Et.lightProbe.value=H.state.probe,Et.directionalLights.value=H.state.directional,Et.directionalLightShadows.value=H.state.directionalShadow,Et.spotLights.value=H.state.spot,Et.spotLightShadows.value=H.state.spotShadow,Et.rectAreaLights.value=H.state.rectArea,Et.ltc_1.value=H.state.rectAreaLTC1,Et.ltc_2.value=H.state.rectAreaLTC2,Et.pointLights.value=H.state.point,Et.pointLightShadows.value=H.state.pointShadow,Et.hemisphereLights.value=H.state.hemi,Et.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Et.spotLightMatrix.value=H.state.spotLightMatrix,Et.spotLightMap.value=H.state.spotLightMap,Et.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=Wt,V.uniformsList=null,Wt}function n0(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=xo.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function i0(M,O){let k=T.get(M);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function VM(M,O){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let k=0,V=M.length;k<V;k++){let H=M[k];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function HM(M,O,k,V,H){O.isScene!==!0&&(O=Oe),v.resetTextureUnits();let pt=O.fog,xt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,dt=P===null?U.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Kt.workingColorSpace,St=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Tt=I.get(V.envMap||xt,St),zt=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Wt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!k.morphAttributes.position,fe=!!k.morphAttributes.normal,Be=!!k.morphAttributes.color,Ue=Si;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ue=U.toneMapping);let ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,cn=ge!==void 0?ge.length:0,vt=T.get(V),In=E.state.lights;if(Se===!0&&(qt===!0||M!==G)){let xe=M===G&&V.id===F;_t.setState(V,M,xe)}let ee=!1;V.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==In.state.version||vt.outputColorSpace!==dt||H.isBatchedMesh&&vt.batching===!1||!H.isBatchedMesh&&vt.batching===!0||H.isBatchedMesh&&vt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&vt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&vt.instancing===!1||!H.isInstancedMesh&&vt.instancing===!0||H.isSkinnedMesh&&vt.skinning===!1||!H.isSkinnedMesh&&vt.skinning===!0||H.isInstancedMesh&&vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&vt.instancingMorph===!1&&H.morphTexture!==null||vt.envMap!==Tt||V.fog===!0&&vt.fog!==pt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==_t.numPlanes||vt.numIntersection!==_t.numIntersection)||vt.vertexAlphas!==zt||vt.vertexTangents!==Wt||vt.morphTargets!==Et||vt.morphNormals!==fe||vt.morphColors!==Be||vt.toneMapping!==Ue||vt.morphTargetsCount!==cn||!!vt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,vt.__version=V.version);let ti=vt.currentProgram;ee===!0&&(ti=lc(V,O,H),B&&V.isNodeMaterial&&B.onUpdateProgram(V,ti,vt));let Ei=!1,bs=!1,tr=!1,ve=ti.getUniforms(),Fe=vt.uniforms;if(R.useProgram(ti.program)&&(Ei=!0,bs=!0,tr=!0),V.id!==F&&(F=V.id,bs=!0),vt.needsLights){let xe=VM(E.state.lightProbeGridArray,H);vt.lightProbeGrid!==xe&&(vt.lightProbeGrid=xe,bs=!0)}if(Ei||G!==M){R.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ve.setValue(L,"projectionMatrix",M.projectionMatrix),ve.setValue(L,"viewMatrix",M.matrixWorldInverse);let Es=ve.map.cameraPosition;Es!==void 0&&Es.setValue(L,me.setFromMatrixPosition(M.matrixWorld)),At.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ve.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),G!==M&&(G=M,bs=!0,tr=!0)}if(vt.needsLights&&(In.state.directionalShadowMap.length>0&&ve.setValue(L,"directionalShadowMap",In.state.directionalShadowMap,v),In.state.spotShadowMap.length>0&&ve.setValue(L,"spotShadowMap",In.state.spotShadowMap,v),In.state.pointShadowMap.length>0&&ve.setValue(L,"pointShadowMap",In.state.pointShadowMap,v)),H.isSkinnedMesh){ve.setOptional(L,H,"bindMatrix"),ve.setOptional(L,H,"bindMatrixInverse");let xe=H.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),ve.setValue(L,"boneTexture",xe.boneTexture,v))}H.isBatchedMesh&&(ve.setOptional(L,H,"batchingTexture"),ve.setValue(L,"batchingTexture",H._matricesTexture,v),ve.setOptional(L,H,"batchingIdTexture"),ve.setValue(L,"batchingIdTexture",H._indirectTexture,v),ve.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&ve.setValue(L,"batchingColorTexture",H._colorsTexture,v));let Ts=k.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&It.update(H,k,ti),(bs||vt.receiveShadow!==H.receiveShadow)&&(vt.receiveShadow=H.receiveShadow,ve.setValue(L,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Fe.envMapIntensity.value=O.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=uR()),bs){if(ve.setValue(L,"toneMappingExposure",U.toneMappingExposure),vt.needsLights&&GM(Fe,tr),pt&&V.fog===!0&&q.refreshFogUniforms(Fe,pt),q.refreshMaterialUniforms(Fe,V,Pt,re,E.state.transmissionRenderTarget[M.id]),vt.needsLights&&vt.lightProbeGrid){let xe=vt.lightProbeGrid;Fe.probesSH.value=xe.texture,Fe.probesMin.value.copy(xe.boundingBox.min),Fe.probesMax.value.copy(xe.boundingBox.max),Fe.probesResolution.value.copy(xe.resolution)}xo.upload(L,n0(vt),Fe,v)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(xo.upload(L,n0(vt),Fe,v),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ve.setValue(L,"center",H.center),ve.setValue(L,"modelViewMatrix",H.modelViewMatrix),ve.setValue(L,"normalMatrix",H.normalMatrix),ve.setValue(L,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let xe=V.uniformsGroups;for(let Es=0,er=xe.length;Es<er;Es++){let s0=xe[Es];Z.update(s0,ti),Z.bind(s0,ti)}}return ti}function GM(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function kM(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,O,k){let V=T.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),T.get(M.texture).__webglTexture=O,T.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let k=T.get(M);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0};let XM=L.createFramebuffer();this.setRenderTarget=function(M,O=0,k=0){P=M,Y=O,X=k;let V=null,H=!1,pt=!1;if(M){let dt=T.get(M);if(dt.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,dt.__webglFramebuffer),j.copy(M.viewport),et.copy(M.scissor),ut=M.scissorTest,R.viewport(j),R.scissor(et),R.setScissorTest(ut),F=-1;return}else if(dt.__webglFramebuffer===void 0)v.setupRenderTarget(M);else if(dt.__hasExternalTextures)v.rebindTextures(M,T.get(M.texture).__webglTexture,T.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let zt=M.depthTexture;if(dt.__boundDepthTexture!==zt){if(zt!==null&&T.has(zt)&&(M.width!==zt.image.width||M.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(M)}}let St=M.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(pt=!0);let Tt=T.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[O])?V=Tt[O][k]:V=Tt[O],H=!0):M.samples>0&&v.useMultisampledRTT(M)===!1?V=T.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?V=Tt[k]:V=Tt,j.copy(M.viewport),et.copy(M.scissor),ut=M.scissorTest}else j.copy(it).multiplyScalar(Pt).floor(),et.copy(Ct).multiplyScalar(Pt).floor(),ut=Nt;if(k!==0&&(V=XM),R.bindFramebuffer(L.FRAMEBUFFER,V)&&R.drawBuffers(M,V),R.viewport(j),R.scissor(et),R.setScissorTest(ut),H){let dt=T.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt.__webglTexture,k)}else if(pt){let dt=O;for(let St=0;St<M.textures.length;St++){let Tt=T.get(M.textures[St]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+St,Tt.__webglTexture,k,dt)}}else if(M!==null&&k!==0){let dt=T.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dt.__webglTexture,k)}F=-1},this.readRenderTargetPixels=function(M,O,k,V,H,pt,xt,dt=0){if(!(M&&M.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){R.bindFramebuffer(L.FRAMEBUFFER,St);try{let Tt=M.textures[dt],zt=Tt.format,Wt=Tt.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt),!At.textureFormatReadable(zt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Wt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-V&&k>=0&&k<=M.height-H&&L.readPixels(O,k,V,H,N.convert(zt),N.convert(Wt),pt)}finally{let Tt=P!==null?T.get(P).__webglFramebuffer:null;R.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,O,k,V,H,pt,xt,dt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St)if(O>=0&&O<=M.width-V&&k>=0&&k<=M.height-H){R.bindFramebuffer(L.FRAMEBUFFER,St);let Tt=M.textures[dt],zt=Tt.format,Wt=Tt.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt),!At.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.bufferData(L.PIXEL_PACK_BUFFER,pt.byteLength,L.STREAM_READ),L.readPixels(O,k,V,H,N.convert(zt),N.convert(Wt),0);let fe=P!==null?T.get(P).__webglFramebuffer:null;R.bindFramebuffer(L.FRAMEBUFFER,fe);let Be=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jS(L,Be,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pt),L.deleteBuffer(Et),L.deleteSync(Be),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,k=0){let V=Math.pow(2,-k),H=Math.floor(M.image.width*V),pt=Math.floor(M.image.height*V),xt=O!==null?O.x:0,dt=O!==null?O.y:0;v.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,xt,dt,H,pt),R.unbindTexture()};let WM=L.createFramebuffer(),qM=L.createFramebuffer();this.copyTextureToTexture=function(M,O,k=null,V=null,H=0,pt=0){let xt,dt,St,Tt,zt,Wt,Et,fe,Be,Ue=M.isCompressedTexture?M.mipmaps[pt]:M.image;if(k!==null)xt=k.max.x-k.min.x,dt=k.max.y-k.min.y,St=k.isBox3?k.max.z-k.min.z:1,Tt=k.min.x,zt=k.min.y,Wt=k.isBox3?k.min.z:0;else{let Fe=Math.pow(2,-H);xt=Math.floor(Ue.width*Fe),dt=Math.floor(Ue.height*Fe),M.isDataArrayTexture?St=Ue.depth:M.isData3DTexture?St=Math.floor(Ue.depth*Fe):St=1,Tt=0,zt=0,Wt=0}V!==null?(Et=V.x,fe=V.y,Be=V.z):(Et=0,fe=0,Be=0);let ge=N.convert(O.format),cn=N.convert(O.type),vt;O.isData3DTexture?(v.setTexture3D(O,0),vt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(v.setTexture2DArray(O,0),vt=L.TEXTURE_2D_ARRAY):(v.setTexture2D(O,0),vt=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let In=R.getParameter(L.UNPACK_ROW_LENGTH),ee=R.getParameter(L.UNPACK_IMAGE_HEIGHT),ti=R.getParameter(L.UNPACK_SKIP_PIXELS),Ei=R.getParameter(L.UNPACK_SKIP_ROWS),bs=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,Ue.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),R.pixelStorei(L.UNPACK_SKIP_ROWS,zt),R.pixelStorei(L.UNPACK_SKIP_IMAGES,Wt);let tr=M.isDataArrayTexture||M.isData3DTexture,ve=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let Fe=T.get(M),Ts=T.get(O),xe=T.get(Fe.__renderTarget),Es=T.get(Ts.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,xe.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,Es.__webglFramebuffer);for(let er=0;er<St;er++)tr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(M).__webglTexture,H,Wt+er),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(O).__webglTexture,pt,Be+er)),L.blitFramebuffer(Tt,zt,xt,dt,Et,fe,xt,dt,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||T.has(M)){let Fe=T.get(M),Ts=T.get(O);R.bindFramebuffer(L.READ_FRAMEBUFFER,WM),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,qM);for(let xe=0;xe<St;xe++)tr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,H,Wt+xe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,H),ve?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ts.__webglTexture,pt,Be+xe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ts.__webglTexture,pt),H!==0?L.blitFramebuffer(Tt,zt,xt,dt,Et,fe,xt,dt,L.COLOR_BUFFER_BIT,L.NEAREST):ve?L.copyTexSubImage3D(vt,pt,Et,fe,Be+xe,Tt,zt,xt,dt):L.copyTexSubImage2D(vt,pt,Et,fe,Tt,zt,xt,dt);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ve?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(vt,pt,Et,fe,Be,xt,dt,St,ge,cn,Ue.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,pt,Et,fe,Be,xt,dt,St,ge,Ue.data):L.texSubImage3D(vt,pt,Et,fe,Be,xt,dt,St,ge,cn,Ue):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pt,Et,fe,xt,dt,ge,cn,Ue.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pt,Et,fe,Ue.width,Ue.height,ge,Ue.data):L.texSubImage2D(L.TEXTURE_2D,pt,Et,fe,xt,dt,ge,cn,Ue);R.pixelStorei(L.UNPACK_ROW_LENGTH,In),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee),R.pixelStorei(L.UNPACK_SKIP_PIXELS,ti),R.pixelStorei(L.UNPACK_SKIP_ROWS,Ei),R.pixelStorei(L.UNPACK_SKIP_IMAGES,bs),pt===0&&O.generateMipmaps&&L.generateMipmap(vt),R.unbindTexture()},this.initRenderTarget=function(M){T.get(M).__webglFramebuffer===void 0&&v.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?v.setTextureCube(M,0):M.isData3DTexture?v.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?v.setTexture2DArray(M,0):v.setTexture2D(M,0),R.unbindTexture()},this.resetState=function(){Y=0,X=0,P=null,R.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Kt._getUnpackColorSpace()}};var OM=wi($a(),1);function Zg({mouseForce:e=20,cursorSize:t=100,isViscous:n=!1,viscous:i=30,iterationsViscous:s=32,iterationsPoisson:a=32,dt:r=.014,BFECC:o=!0,resolution:l=.5,isBounce:c=!1,colors:f=["#5227FF","#FF9FFC","#B497CF"],style:p={},className:u="",autoDemo:d=!0,autoSpeed:_=.5,autoIntensity:b=2.2,takeoverDuration:g=.25,autoResumeDelay:h=1e3,autoRampDuration:m=.6}){let x=(0,bi.useRef)(null),S=(0,bi.useRef)(null),w=(0,bi.useRef)(null),E=(0,bi.useRef)(null),C=(0,bi.useRef)(null),y=(0,bi.useRef)(!0),A=(0,bi.useRef)(null);return(0,bi.useEffect)(()=>{if(!x.current)return;function U(At){let R;Array.isArray(At)&&At.length>0?At.length===1?R=[At[0],At[0]]:R=At:R=["#ffffff","#ffffff"];let st=R.length,T=new Uint8Array(st*4);for(let I=0;I<st;I++){let W=new te(R[I]);T[I*4+0]=Math.round(W.r*255),T[I*4+1]=Math.round(W.g*255),T[I*4+2]=Math.round(W.b*255),T[I*4+3]=255}let v=new fo(T,st,1,Ln);return v.magFilter=Ie,v.minFilter=Ie,v.wrapS=_n,v.wrapT=_n,v.generateMipmaps=!1,v.needsUpdate=!0,v}let D=U(f),B=new Re(0,0,0,0);class Y{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(R){this.container=R,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new Pf({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new te(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new Wl,this.clock.start()}resize(){if(!this.container)return;let R=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(R.width)),this.height=Math.max(1,Math.floor(R.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}let X=new Y;class P{constructor(){this.mouseMoved=!1,this.coords=new Lt,this.coords_old=new Lt,this.diff=new Lt,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new Lt,this.takeoverTo=new Lt,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(R){this.container=R,this.docTarget=R.ownerDocument||null;let st=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);st&&(this.listenerTarget=st,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(R,st){if(!this.container)return!1;let T=this.container.getBoundingClientRect();return T.width===0||T.height===0?!1:R>=T.left&&R<=T.right&&st>=T.top&&st<=T.bottom}updateHoverState(R,st){return this.isHoverInside=this.isPointInside(R,st),this.isHoverInside}setCoords(R,st){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);let T=this.container.getBoundingClientRect();if(T.width===0||T.height===0)return;let v=(R-T.left)/T.width,I=(st-T.top)/T.height;this.coords.set(v*2-1,-(I*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(R,st){this.coords.set(R,st),this.mouseMoved=!0}onDocumentMouseMove(R){if(this.updateHoverState(R.clientX,R.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;let st=this.container.getBoundingClientRect();if(st.width===0||st.height===0)return;let T=(R.clientX-st.left)/st.width,v=(R.clientY-st.top)/st.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(T*2-1,-(v*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(R.clientX,R.clientY),this.hasUserControl=!0}}onDocumentTouchStart(R){if(R.touches.length!==1)return;let st=R.touches[0];this.updateHoverState(st.clientX,st.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(st.clientX,st.clientY),this.hasUserControl=!0)}onDocumentTouchMove(R){if(R.touches.length!==1)return;let st=R.touches[0];this.updateHoverState(st.clientX,st.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(st.clientX,st.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){let R=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(R>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{let st=R*R*(3-2*R);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,st)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}let F=new P;class G{constructor(R,st,T){this.mouse=R,this.manager=st,this.enabled=T.enabled,this.speed=T.speed,this.resumeDelay=T.resumeDelay||3e3,this.rampDurationMs=(T.rampDuration||0)*1e3,this.active=!1,this.current=new Lt(0,0),this.target=new Lt,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new Lt,this.pickNewTarget()}pickNewTarget(){let R=Math.random;this.target.set((R()*2-1)*(1-this.margin),(R()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;let R=performance.now();if(R-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=R,this.activationTime=R),!this.active)return;this.mouse.isAutoActive=!0;let T=(R-this.lastTime)/1e3;this.lastTime=R,T>.2&&(T=.016);let v=this._tmpDir.subVectors(this.target,this.current),I=v.length();if(I<.01){this.pickNewTarget();return}v.normalize();let W=1;if(this.rampDurationMs>0){let at=Math.min(1,(R-this.activationTime)/this.rampDurationMs);W=at*at*(3-2*at)}let $=this.speed*T*W,nt=Math.min($,I);this.current.addScaledVector(v,nt),this.mouse.setNormalized(this.current.x,this.current.y)}}let j=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,et=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,ut=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,yt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,Mt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Qt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,re=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Pt=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,Q=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,ft=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class it{constructor(R){this.props=R||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new ho,this.camera=new pa,this.uniforms&&(this.material=new Ss(this.props.material),this.geometry=new ys(2,2),this.plane=new dn(this.geometry,this.material),this.scene.add(this.plane))}update(){X.renderer.setRenderTarget(this.props.output||null),X.renderer.render(this.scene,this.camera),X.renderer.setRenderTarget(null)}}class Ct extends it{constructor(R){super({material:{vertexShader:j,fragmentShader:yt,uniforms:{boundarySpace:{value:R.cellScale},px:{value:R.cellScale},fboSize:{value:R.fboSize},velocity:{value:R.src.texture},dt:{value:R.dt},isBFECC:{value:!0}}},output:R.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){let R=new Jn,st=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);R.setAttribute("position",new xn(st,3));let T=new Ss({vertexShader:et,fragmentShader:yt,uniforms:this.uniforms});this.line=new Vl(R,T),this.scene.add(this.line)}update({dt:R,isBounce:st,BFECC:T}){this.uniforms.dt.value=R,this.line.visible=st,this.uniforms.isBFECC.value=T,super.update()}}class Nt extends it{constructor(R){super({output:R.dst}),this.init(R)}init(R){super.init();let st=new ys(1,1),T=new Ss({vertexShader:ut,fragmentShader:re,blending:Yl,depthWrite:!1,uniforms:{px:{value:R.cellScale},force:{value:new Lt(0,0)},center:{value:new Lt(0,0)},scale:{value:new Lt(R.cursor_size,R.cursor_size)}}});this.mouse=new dn(st,T),this.scene.add(this.mouse)}update(R){let st=F.diff.x/2*R.mouse_force,T=F.diff.y/2*R.mouse_force,v=R.cursor_size*R.cellScale.x,I=R.cursor_size*R.cellScale.y,W=Math.min(Math.max(F.coords.x,-1+v+R.cellScale.x*2),1-v-R.cellScale.x*2),$=Math.min(Math.max(F.coords.y,-1+I+R.cellScale.y*2),1-I-R.cellScale.y*2),nt=this.mouse.material.uniforms;nt.force.value.set(st,T),nt.center.value.set(W,$),nt.scale.value.set(R.cursor_size,R.cursor_size),super.update()}}class Rt extends it{constructor(R){super({material:{vertexShader:j,fragmentShader:ft,uniforms:{boundarySpace:{value:R.boundarySpace},velocity:{value:R.src.texture},velocity_new:{value:R.dst_.texture},v:{value:R.viscous},px:{value:R.cellScale},dt:{value:R.dt}}},output:R.dst,output0:R.dst_,output1:R.dst}),this.init()}update({viscous:R,iterations:st,dt:T}){let v,I;this.uniforms.v.value=R;for(let W=0;W<st;W++)W%2===0?(v=this.props.output0,I=this.props.output1):(v=this.props.output1,I=this.props.output0),this.uniforms.velocity_new.value=v.texture,this.props.output=I,this.uniforms.dt.value=T,super.update();return I}}class Se extends it{constructor(R){super({material:{vertexShader:j,fragmentShader:Qt,uniforms:{boundarySpace:{value:R.boundarySpace},velocity:{value:R.src.texture},px:{value:R.cellScale},dt:{value:R.dt}}},output:R.dst}),this.init()}update({vel:R}){this.uniforms.velocity.value=R.texture,super.update()}}class qt extends it{constructor(R){super({material:{vertexShader:j,fragmentShader:Pt,uniforms:{boundarySpace:{value:R.boundarySpace},pressure:{value:R.dst_.texture},divergence:{value:R.src.texture},px:{value:R.cellScale}}},output:R.dst,output0:R.dst_,output1:R.dst}),this.init()}update({iterations:R}){let st,T;for(let v=0;v<R;v++)v%2===0?(st=this.props.output0,T=this.props.output1):(st=this.props.output1,T=this.props.output0),this.uniforms.pressure.value=st.texture,this.props.output=T,super.update();return T}}class oe extends it{constructor(R){super({material:{vertexShader:j,fragmentShader:Q,uniforms:{boundarySpace:{value:R.boundarySpace},pressure:{value:R.src_p.texture},velocity:{value:R.src_v.texture},px:{value:R.cellScale},dt:{value:R.dt}}},output:R.dst}),this.init()}update({vel:R,pressure:st}){this.uniforms.velocity.value=R.texture,this.uniforms.pressure.value=st.texture,super.update()}}class me{constructor(R){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...R},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new Lt,this.cellScale=new Lt,this.boundarySpace=new Lt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?di:$n}createAllFBO(){let st={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Ie,magFilter:Ie,wrapS:_n,wrapT:_n};for(let T in this.fbos)this.fbos[T]=new yn(this.fboSize.x,this.fboSize.y,st)}createShaderPass(){this.advection=new Ct({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Nt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new Rt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Se({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new qt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new oe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){let R=Math.max(1,Math.round(this.options.resolution*X.width)),st=Math.max(1,Math.round(this.options.resolution*X.height)),T=1/R,v=1/st;this.cellScale.set(T,v),this.fboSize.set(R,st)}resize(){this.calcSize();for(let R in this.fbos)this.fbos[R].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let R=this.fbos.vel_1;this.options.isViscous&&(R=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:R});let st=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:R,pressure:st})}}class kt{constructor(){this.init()}init(){this.simulation=new me,this.scene=new ho,this.camera=new pa,this.output=new dn(new ys(2,2),new Ss({vertexShader:j,fragmentShader:Mt,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new Lt},palette:{value:D},bgColor:{value:B}}})),this.scene.add(this.output)}addScene(R){this.scene.add(R)}resize(){this.simulation.resize()}render(){X.renderer.setRenderTarget(null),X.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Oe{constructor(R){this.props=R,X.init(R.$wrapper),F.init(R.$wrapper),F.autoIntensity=R.autoIntensity,F.takeoverDuration=R.takeoverDuration,this.lastUserInteraction=performance.now(),F.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new G(F,this,{enabled:R.autoDemo,speed:R.autoSpeed,resumeDelay:R.autoResumeDelay,rampDuration:R.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():y.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(X.renderer.domElement),this.output=new kt}resize(){X.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),F.update(),X.update(),this.output.update()}loop(){this.running&&(this.render(),E.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,E.current&&(cancelAnimationFrame(E.current),E.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),F.dispose(),X.renderer){let R=X.renderer.domElement;R&&R.parentNode&&R.parentNode.removeChild(R),X.renderer.dispose(),X.renderer.forceContextLoss()}}catch{}}}let ie=x.current;ie.style.position=ie.style.position||"relative",ie.style.overflow=ie.style.overflow||"hidden";let ln=new Oe({$wrapper:ie,autoDemo:d,autoSpeed:_,autoIntensity:b,takeoverDuration:g,autoResumeDelay:h,autoRampDuration:m});S.current=ln,(()=>{if(!S.current)return;let At=S.current.output?.simulation;if(!At)return;let R=At.options.resolution;Object.assign(At.options,{mouse_force:e,cursor_size:t,isViscous:n,viscous:i,iterations_viscous:s,iterations_poisson:a,dt:r,BFECC:o,resolution:l,isBounce:c}),l!==R&&At.resize()})(),ln.start();let De=new IntersectionObserver(At=>{let R=At[0],st=R.isIntersecting&&R.intersectionRatio>0;y.current=st,S.current&&(st&&!document.hidden?S.current.start():S.current.pause())},{threshold:[0,.01,.1]});De.observe(ie),C.current=De;let Xt=new ResizeObserver(()=>{S.current&&(A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{S.current&&S.current.resize()}))});return Xt.observe(ie),w.current=Xt,()=>{if(E.current&&cancelAnimationFrame(E.current),w.current)try{w.current.disconnect()}catch{}if(C.current)try{C.current.disconnect()}catch{}S.current&&S.current.dispose(),S.current=null}},[o,t,r,c,n,a,s,e,l,i,f,d,_,b,g,h,m]),(0,bi.useEffect)(()=>{let U=S.current;if(!U)return;let D=U.output?.simulation;if(!D)return;let B=D.options.resolution;Object.assign(D.options,{mouse_force:e,cursor_size:t,isViscous:n,viscous:i,iterations_viscous:s,iterations_poisson:a,dt:r,BFECC:o,resolution:l,isBounce:c}),U.autoDriver&&(U.autoDriver.enabled=d,U.autoDriver.speed=_,U.autoDriver.resumeDelay=h,U.autoDriver.rampDurationMs=m*1e3,U.autoDriver.mouse&&(U.autoDriver.mouse.autoIntensity=b,U.autoDriver.mouse.takeoverDuration=g)),l!==B&&D.resize()},[e,t,n,i,s,a,r,o,l,c,d,_,b,g,h,m]),(0,OM.jsx)("div",{ref:x,className:`liquid-ether-container ${u||""}`,style:p})}var Xi=wi(sr(),1);var rc=wi($a(),1);function pR(e){let t=e.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);return t?{h:parseFloat(t[1]),s:parseFloat(t[2]),l:parseFloat(t[3])}:{h:40,s:80,l:80}}function mR(e,t){let{h:n,s:i,l:s}=pR(e),a=`${n}deg ${i}% ${s}%`,r=[100,60,50,40,30,20,10],o=["","-60","-50","-40","-30","-20","-10"],l={};for(let c=0;c<r.length;c++)l[`--glow-color${o[c]}`]=`hsl(${a} / ${Math.min(r[c]*t,100)}%)`;return l}var gR=["80% 55%","69% 34%","8% 6%","41% 38%","86% 85%","82% 18%","51% 4%"],vR=["--gradient-one","--gradient-two","--gradient-three","--gradient-four","--gradient-five","--gradient-six","--gradient-seven"],_R=[0,1,2,0,1,2,1];function xR(e){let t={};for(let n=0;n<7;n++){let i=e[Math.min(_R[n],e.length-1)];t[vR[n]]=`radial-gradient(at ${gR[n]}, ${i} 0px, transparent 50%)`}return t["--gradient-base"]=`linear-gradient(${e[0]} 0 100%)`,t}function BM(e){return 1-Math.pow(1-e,3)}function PM(e){return e*e*e}function Vf({start:e=0,end:t=100,duration:n=1e3,delay:i=0,ease:s=BM,onUpdate:a,onEnd:r}){let o=performance.now()+i;function l(){let c=performance.now()-o,f=Math.min(c/n,1);a(e+(t-e)*s(f)),f<1?requestAnimationFrame(l):r&&r()}setTimeout(()=>requestAnimationFrame(l),i)}var yR=({children:e,className:t="",edgeSensitivity:n=30,glowColor:i="40 80 80",backgroundColor:s="#120F17",borderRadius:a=28,glowRadius:r=40,glowIntensity:o=1,coneSpread:l=25,animated:c=!1,colors:f=["#c084fc","#f472b6","#38bdf8"],fillOpacity:p=.5,passiveOverlay:u=!1})=>{let d=(0,Xi.useRef)(null),_=(0,Xi.useCallback)(x=>{let{width:S,height:w}=x.getBoundingClientRect();return[S/2,w/2]},[]),b=(0,Xi.useCallback)((x,S,w)=>{let[E,C]=_(x),y=S-E,A=w-C,U=1/0,D=1/0;return y!==0&&(U=E/Math.abs(y)),A!==0&&(D=C/Math.abs(A)),Math.min(Math.max(1/Math.min(U,D),0),1)},[_]),g=(0,Xi.useCallback)((x,S,w)=>{let[E,C]=_(x),y=S-E,A=w-C;if(y===0&&A===0)return 0;let D=Math.atan2(A,y)*(180/Math.PI)+90;return D<0&&(D+=360),D},[_]),h=(0,Xi.useCallback)(x=>{let S=d.current;if(!S)return;let w=S.getBoundingClientRect(),E=x.clientX-w.left,C=x.clientY-w.top,y=b(S,E,C),A=g(S,E,C);S.style.setProperty("--edge-proximity",`${(y*100).toFixed(3)}`),S.style.setProperty("--edge-alpha",`${y.toFixed(4)}`),S.style.setProperty("--cursor-angle",`${A.toFixed(3)}deg`)},[b,g]);(0,Xi.useEffect)(()=>{if(u)return window.addEventListener("pointermove",h,{passive:!0}),()=>window.removeEventListener("pointermove",h)},[h,u]),(0,Xi.useEffect)(()=>{if(!c||!d.current)return;let x=d.current,S=110,w=465;x.classList.add("sweep-active"),x.style.setProperty("--cursor-angle",`${S}deg`),Vf({duration:500,onUpdate:E=>x.style.setProperty("--edge-proximity",E)}),Vf({ease:PM,duration:1500,end:50,onUpdate:E=>{x.style.setProperty("--cursor-angle",`${(w-S)*(E/100)+S}deg`)}}),Vf({ease:BM,delay:1500,duration:2250,start:50,end:100,onUpdate:E=>{x.style.setProperty("--cursor-angle",`${(w-S)*(E/100)+S}deg`)}}),Vf({ease:PM,delay:2500,duration:1500,start:100,end:0,onUpdate:E=>x.style.setProperty("--edge-proximity",E),onEnd:()=>x.classList.remove("sweep-active")})},[c]);let m=mR(i,o);return(0,rc.jsxs)("div",{ref:d,onPointerMove:u?void 0:h,className:`border-glow-card ${t}`,style:{"--card-bg":s,"--edge-sensitivity":n,"--border-radius":`${a}px`,"--glow-padding":`${r}px`,"--cone-spread":l,"--fill-opacity":p,...m,...xR(f)},children:[(0,rc.jsx)("span",{className:"edge-light"}),(0,rc.jsx)("div",{className:"border-glow-inner",children:e})]})},FM=yR;var Hf=wi($a(),1),Jg=document.querySelector("#liquid-ether-root"),SR=window.matchMedia("(prefers-reduced-motion: reduce)");function MR(){return(0,Hf.jsx)(Zg,{colors:["#16d9e3","#6d4aff","#c58f9d"],mouseForce:14,cursorSize:86,isViscous:!1,viscous:24,iterationsViscous:20,iterationsPoisson:24,resolution:.42,isBounce:!1,autoDemo:!0,autoSpeed:.32,autoIntensity:1.55,takeoverDuration:.35,autoResumeDelay:3600,autoRampDuration:.9})}if(Jg&&!SR.matches){let e=(0,Kg.createRoot)(Jg),t=!1,n=()=>{t||(t=!0,e.render((0,Hf.jsx)(MR,{})))},i=()=>{let s=document.querySelector("#home");if(!s)return;let a=window.scrollY>=s.offsetHeight*.72;Jg.classList.toggle("is-visible",a),a&&n()};window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i),i()}var bR=[{element:document.querySelector("#terminal .grid"),props:{borderRadius:2,edgeSensitivity:32,glowRadius:34,glowIntensity:.72,fillOpacity:.1,colors:["#16d9e3","#6d4aff","#c58f9d"]}},...[...document.querySelectorAll(".project-card")].map((e,t)=>({element:e,props:{borderRadius:2,edgeSensitivity:38,glowRadius:30,glowIntensity:.78,fillOpacity:.09,animated:!0,colors:t<2?["#16d9e3","#6d4aff","#c58f9d"]:["#6d4aff","#c58f9d","#16d9e3"]}}))];bR.forEach(({element:e,props:t})=>{if(!e)return;e.style.position="relative",e.style.isolation="isolate";let n=document.createElement("div");n.className="border-glow-mount",n.style.position="absolute",n.style.inset="0",n.style.zIndex="3",n.style.pointerEvents="none",e.appendChild(n),(0,Kg.createRoot)(n).render((0,Hf.jsx)(FM,{...t,passiveOverlay:!0,className:"passive-glow-overlay"}))});})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
