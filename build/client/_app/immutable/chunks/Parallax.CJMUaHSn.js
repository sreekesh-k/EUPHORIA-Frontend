import{s as O,c as E,u as P,g as x,a as j,N as F}from"./scheduler.dz8I3iaA.js";import{S as _,i as A,t as L,a as W}from"./index.BP1vhqCy.js";import{c as S,g as q}from"./_commonjsHelpers.BosuxZz1.js";function k(X){throw new Error('Could not dynamically require "'+X+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var R={exports:{}};(function(X,Y){(function(y){X.exports=y()})(function(){return function y(l,c,r){function f(n,m){if(!c[n]){if(!l[n]){var b=typeof k=="function"&&k;if(!m&&b)return b(n,!0);if(h)return h(n,!0);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}var a=c[n]={exports:{}};l[n][0].call(a.exports,function(i){var t=l[n][1][i];return f(t||i)},a,a.exports,y,l,c,r)}return c[n].exports}for(var h=typeof k=="function"&&k,w=0;w<r.length;w++)f(r[w]);return f}({1:[function(y,l,c){var r=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function w(m){if(m==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(m)}function n(){try{if(!Object.assign)return!1;var m=new String("abc");if(m[5]="de",Object.getOwnPropertyNames(m)[0]==="5")return!1;for(var b={},s=0;s<10;s++)b["_"+String.fromCharCode(s)]=s;var a=Object.getOwnPropertyNames(b).map(function(t){return b[t]});if(a.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(t){i[t]=t}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=n()?Object.assign:function(m,b){for(var s,a=w(m),i,t=1;t<arguments.length;t++){s=Object(arguments[t]);for(var e in s)f.call(s,e)&&(a[e]=s[e]);if(r){i=r(s);for(var o=0;o<i.length;o++)h.call(s,i[o])&&(a[i[o]]=s[i[o]])}}return a}},{}],2:[function(y,l,c){(function(r){(function(){var f,h,w,n,m,b;typeof performance<"u"&&performance!==null&&performance.now?l.exports=function(){return performance.now()}:typeof r<"u"&&r!==null&&r.hrtime?(l.exports=function(){return(f()-m)/1e6},h=r.hrtime,f=function(){var s;return s=h(),s[0]*1e9+s[1]},n=f(),b=r.uptime()*1e9,m=n-b):Date.now?(l.exports=function(){return Date.now()-w},w=Date.now()):(l.exports=function(){return new Date().getTime()-w},w=new Date().getTime())}).call(this)}).call(this,y("_process"))},{_process:3}],3:[function(y,l,c){var r=l.exports={},f,h;function w(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=w}catch{f=w}try{typeof clearTimeout=="function"?h=clearTimeout:h=n}catch{h=n}})();function m(u){if(f===setTimeout)return setTimeout(u,0);if((f===w||!f)&&setTimeout)return f=setTimeout,setTimeout(u,0);try{return f(u,0)}catch{try{return f.call(null,u,0)}catch{return f.call(this,u,0)}}}function b(u){if(h===clearTimeout)return clearTimeout(u);if((h===n||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(u);try{return h(u)}catch{try{return h.call(null,u)}catch{return h.call(this,u)}}}var s=[],a=!1,i,t=-1;function e(){!a||!i||(a=!1,i.length?s=i.concat(s):t=-1,s.length&&o())}function o(){if(!a){var u=m(e);a=!0;for(var v=s.length;v;){for(i=s,s=[];++t<v;)i&&i[t].run();t=-1,v=s.length}i=null,a=!1,b(u)}}r.nextTick=function(u){var v=new Array(arguments.length-1);if(arguments.length>1)for(var g=1;g<arguments.length;g++)v[g-1]=arguments[g];s.push(new d(u,v)),s.length===1&&!a&&m(o)};function d(u,v){this.fun=u,this.array=v}d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function p(){}r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(u){return[]},r.binding=function(u){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(u){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},{}],4:[function(y,l,c){(function(r){for(var f=y("performance-now"),h=typeof window>"u"?r:window,w=["moz","webkit"],n="AnimationFrame",m=h["request"+n],b=h["cancel"+n]||h["cancelRequest"+n],s=0;!m&&s<w.length;s++)m=h[w[s]+"Request"+n],b=h[w[s]+"Cancel"+n]||h[w[s]+"CancelRequest"+n];if(!m||!b){var a=0,i=0,t=[],e=1e3/60;m=function(o){if(t.length===0){var d=f(),p=Math.max(0,e-(d-a));a=p+d,setTimeout(function(){var u=t.slice(0);t.length=0;for(var v=0;v<u.length;v++)if(!u[v].cancelled)try{u[v].callback(a)}catch(g){setTimeout(function(){throw g},0)}},Math.round(p))}return t.push({handle:++i,callback:o,cancelled:!1}),i},b=function(o){for(var d=0;d<t.length;d++)t[d].handle===o&&(t[d].cancelled=!0)}}l.exports=function(o){return m.call(h,o)},l.exports.cancel=function(){b.apply(h,arguments)},l.exports.polyfill=function(){h.requestAnimationFrame=m,h.cancelAnimationFrame=b}}).call(this,typeof S<"u"?S:typeof self<"u"?self:typeof window<"u"?window:{})},{"performance-now":2}],5:[function(y,l,c){var r=function(){function a(i,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}return function(i,t,e){return t&&a(i.prototype,t),e&&a(i,e),i}}();function f(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}var h=y("raf"),w=y("object-assign"),n={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(i,t,e){return t<e?i<t?t:i>e?e:i:i<e?e:i>t?t:i},data:function(i,t){return n.deserialize(i.getAttribute("data-"+t))},deserialize:function(i){return i==="true"?!0:i==="false"?!1:i==="null"?null:!isNaN(parseFloat(i))&&isFinite(i)?parseFloat(i):i},camelCase:function(i){return i.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(i){n.css(i,"transform","translate3d(0,0,0) rotate(0.0001deg)"),n.css(i,"transform-style","preserve-3d"),n.css(i,"backface-visibility","hidden")},transformSupport:function(i){for(var t=document.createElement("div"),e=!1,o=null,d=!1,p=null,u=null,v=0,g=n.vendors.length;v<g;v++)if(n.vendors[v]!==null?(p=n.vendors[v][0]+"transform",u=n.vendors[v][1]+"Transform"):(p="transform",u="transform"),t.style[u]!==void 0){e=!0;break}switch(i){case"2D":d=e;break;case"3D":if(e){var T=document.body||document.createElement("body"),C=document.documentElement,M=C.style.overflow,D=!1;document.body||(D=!0,C.style.overflow="hidden",C.appendChild(T),T.style.overflow="hidden",T.style.background=""),T.appendChild(t),t.style[u]="translate3d(1px,1px,1px)",o=window.getComputedStyle(t).getPropertyValue(p),d=o!==void 0&&o.length>0&&o!=="none",C.style.overflow=M,T.removeChild(t),D&&(T.removeAttribute("style"),T.parentNode.removeChild(T))}break}return d},css:function(i,t,e){var o=n.propertyCache[t];if(!o){for(var d=0,p=n.vendors.length;d<p;d++)if(n.vendors[d]!==null?o=n.camelCase(n.vendors[d][1]+"-"+t):o=t,i.style[o]!==void 0){n.propertyCache[t]=o;break}}i.style[o]=e}},m=30,b={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},s=function(){function a(i,t){f(this,a),this.element=i;var e={calibrateX:n.data(this.element,"calibrate-x"),calibrateY:n.data(this.element,"calibrate-y"),invertX:n.data(this.element,"invert-x"),invertY:n.data(this.element,"invert-y"),limitX:n.data(this.element,"limit-x"),limitY:n.data(this.element,"limit-y"),scalarX:n.data(this.element,"scalar-x"),scalarY:n.data(this.element,"scalar-y"),frictionX:n.data(this.element,"friction-x"),frictionY:n.data(this.element,"friction-y"),originX:n.data(this.element,"origin-x"),originY:n.data(this.element,"origin-y"),pointerEvents:n.data(this.element,"pointer-events"),precision:n.data(this.element,"precision"),relativeInput:n.data(this.element,"relative-input"),clipRelativeInput:n.data(this.element,"clip-relative-input"),hoverOnly:n.data(this.element,"hover-only"),inputElement:document.querySelector(n.data(this.element,"input-element")),selector:n.data(this.element,"selector")};for(var o in e)e[o]===null&&delete e[o];w(this,b,e,t),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return r(a,[{key:"initialise",value:function(){this.transform2DSupport===void 0&&(this.transform2DSupport=n.transformSupport("2D"),this.transform3DSupport=n.transformSupport("3D")),this.transform3DSupport&&n.accelerate(this.element);var t=window.getComputedStyle(this.element);t.getPropertyValue("position")==="static"&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&n.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var o=n.data(e,"depth")||0;this.depthsX.push(n.data(e,"depth-x")||o),this.depthsY.push(n.data(e,"depth-y")||o)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=h(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),h.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=t===void 0?this.calibrateX:t,this.calibrateY=e===void 0?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=t===void 0?this.invertX:t,this.invertY=e===void 0?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=t===void 0?this.frictionX:t,this.frictionY=e===void 0?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=t===void 0?this.scalarX:t,this.scalarY=e===void 0?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=t===void 0?this.limitX:t,this.limitY=e===void 0?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=t===void 0?this.originX:t,this.originY=e===void 0?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,o){e=e.toFixed(this.precision)+"px",o=o.toFixed(this.precision)+"px",this.transform3DSupport?n.css(t,"transform","translate3d("+e+","+o+",0)"):this.transform2DSupport?n.css(t,"transform","translate("+e+","+o+")"):(t.style.left=e,t.style.top=o)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&this.orientationStatus===0?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&this.motionStatus===0?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=n.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=n.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var o=0;o<this.layers.length;o++){var d=this.layers[o],p=this.depthsX[o],u=this.depthsY[o],v=this.velocityX*(p*(this.invertX?-1:1)),g=this.velocityY*(u*(this.invertY?-1:1));this.setPosition(d,v,g)}this.raf=h(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var o=(t||0)/m,d=(e||0)/m,p=this.windowHeight>this.windowWidth;this.portrait!==p&&(this.portrait=p,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=o,this.calibrationY=d),this.inputX=o,this.inputY=d}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,o=t.gamma;e!==null&&o!==null&&(this.orientationStatus=1,this.rotate(e,o))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,o=t.rotationRate.gamma;e!==null&&o!==null&&(this.motionStatus=1,this.rotate(e,o))}},{key:"onMouseMove",value:function(t){var e=t.clientX,o=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||o<this.elementPositionY||o>this.elementPositionY+this.elementHeight)){this.inputX=0,this.inputY=0;return}this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),o=Math.max(o,this.elementPositionY),o=Math.min(o,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(o-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(o-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),a}();l.exports=s},{"object-assign":1,raf:4}]},{},[5])(5)})})(R);var N=R.exports;const I=q(N);function z(X){let Y;const y=X[1].default,l=E(y,X,X[0],null);return{c(){l&&l.c()},l(c){l&&l.l(c)},m(c,r){l&&l.m(c,r),Y=!0},p(c,[r]){l&&l.p&&(!Y||r&1)&&P(l,y,c,c[0],Y?j(y,c[0],r,null):x(c[0]),null)},i(c){Y||(L(l,c),Y=!0)},o(c){W(l,c),Y=!1},d(c){l&&l.d(c)}}}function H(X,Y,y){let{$$slots:l={},$$scope:c}=Y;return F(()=>{const r=document.querySelectorAll(".parallax-scene");Array.from(r).map(f=>new I(f))}),X.$$set=r=>{"$$scope"in r&&y(0,c=r.$$scope)},[c,l]}class V extends _{constructor(Y){super(),A(this,Y,H,z,O,{})}}export{V as P};