"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[43605],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(n),k=l,f=d["".concat(c,".").concat(k)]||d[k]||s[k]||a;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46296:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});n(93106);var r=n(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const i={title:"Taro.startFacialRecognitionVerify(option)",sidebar_label:"startFacialRecognitionVerify"},o=void 0,c={unversionedId:"apis/open-api/facial/startFacialRecognitionVerify",id:"version-2.x/apis/open-api/facial/startFacialRecognitionVerify",title:"Taro.startFacialRecognitionVerify(option)",description:"\u5f00\u59cb\u4eba\u8138\u8bc6\u522b\u8ba4\u8bc1",source:"@site/versioned_docs/version-2.x/apis/open-api/facial/startFacialRecognitionVerify.md",sourceDirName:"apis/open-api/facial",slug:"/apis/open-api/facial/startFacialRecognitionVerify",permalink:"/taro-docs/en/docs/2.x/apis/open-api/facial/startFacialRecognitionVerify",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/open-api/facial/startFacialRecognitionVerify.md",tags:[],version:"2.x",frontMatter:{title:"Taro.startFacialRecognitionVerify(option)",sidebar_label:"startFacialRecognitionVerify"},sidebar:"version-2.x/API",previous:{title:"checkIsSupportFacialRecognition",permalink:"/taro-docs/en/docs/2.x/apis/open-api/facial/checkIsSupportFacialRecognition"},next:{title:"startFacialRecognitionVerifyAndUploadVideo",permalink:"/taro-docs/en/docs/2.x/apis/open-api/facial/startFacialRecognitionVerifyAndUploadVideo"}},u={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"CallbackResult",id:"callbackresult",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:p};function d(t){var{components:e}=t,n=a(t,["components"]);return(0,r.kt)("wrapper",l({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5f00\u59cb\u4eba\u8138\u8bc6\u522b\u8ba4\u8bc1"),(0,r.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<CallbackResult>\n")),(0,r.kt)("h2",l({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",l({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"name"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u8eab\u4efd\u8bc1\u540d\u79f0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"idCardNumber"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u8eab\u4efd\u8bc1\u540d\u79f0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"checkAliveType"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u4ea4\u4e92\u65b9\u5f0f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(result: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",l({},{id:"callbackresult"}),"CallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u9519\u8bef\u4fe1\u606f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errCode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u9519\u8bef\u7801")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"verifyResult"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u8ba4\u8bc1\u7ed3\u679c")))),(0,r.kt)("h2",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.startFacialRecognitionVerify"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);