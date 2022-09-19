"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[85009],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10829:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={slug:"2020-04-27-taro-build-jd",title:"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",authors:"JJ"},i=void 0,u={permalink:"/taro-docs/blog/2020-04-27-taro-build-jd",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2020-04-27-taro-build-jd.md",source:"@site/blog/2020-04-27-taro-build-jd.md",title:"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",description:"\u8fd1\u4e24\u5e74\u6765\u5c0f\u7a0b\u5e8f\u9010\u6e10\u6210\u4e3a\u4e92\u8054\u7f51\u7684\u4e00\u4e2a\u884c\u4e1a\u98ce\u53e3\uff0c\u4e00\u76f4\u5907\u53d7\u4e1a\u754c\u5173\u6ce8\uff0c\u5404\u5927\u5382\u4e5f\u63a5\u8e35\u63a8\u51fa\u4e86\u81ea\u5df1\u7684\u5c0f\u7a0b\u5e8f\u3002\u8fd1\u65e5\u4eac\u4e1c\u4e5f\u63a8\u51fa\u4e86\u5c0f\u7a0b\u5e8f\uff1a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u3002Taro \u4f5c\u4e3a\u4e00\u6b3e\u4e13\u6ce8\u4e8e\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u7684\u6846\u67b6\uff0c\u7b2c\u4e00\u65f6\u95f4\u5bf9\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u8fdb\u884c\u4e86\u9002\u914d\u3002\u63a5\u4e0b\u6765\u5c31\u8ddf\u7740\u5c0f\u7f16\u4e00\u8d77\u4e86\u89e3\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5427\u3002",date:"2020-04-27T00:00:00.000Z",formattedDate:"2020\u5e744\u670827\u65e5",tags:[],readingTime:5.955,hasTruncateMarker:!0,authors:[{name:"JJ",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u6210\u5458\u3001Taro Core \u5de5\u4f5c\u7ec4 Owner",url:"https://github.com/Chen-jj",imageURL:"https://storage.jd.com/cjj-pub-images/11807297.png",key:"JJ"}],frontMatter:{slug:"2020-04-27-taro-build-jd",title:"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",authors:"JJ"},prevItem:{title:"Taro 3.0 RC\uff1aReact/Vue/Nerv \u4efb\u4f60\u9009",permalink:"/taro-docs/blog/2020-05-26-taro-3-rc"},nextItem:{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f Taro \u5f00\u53d1\u5bf9\u6bd4\u539f\u751f\u5f00\u53d1\u6d4b\u8bc4",permalink:"/taro-docs/blog/2020-04-27-taro-vs-jd"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://img20.360buyimg.com/ling/jfs/t1/117964/14/2118/145903/5e9eee0aE8897b3dd/bd435e6161779ad1.png",alt:null}))),(0,n.kt)("p",null,"\u8fd1\u4e24\u5e74\u6765\u5c0f\u7a0b\u5e8f\u9010\u6e10\u6210\u4e3a\u4e92\u8054\u7f51\u7684\u4e00\u4e2a\u884c\u4e1a\u98ce\u53e3\uff0c\u4e00\u76f4\u5907\u53d7\u4e1a\u754c\u5173\u6ce8\uff0c\u5404\u5927\u5382\u4e5f\u63a5\u8e35\u63a8\u51fa\u4e86\u81ea\u5df1\u7684\u5c0f\u7a0b\u5e8f\u3002\u8fd1\u65e5\u4eac\u4e1c\u4e5f\u63a8\u51fa\u4e86\u5c0f\u7a0b\u5e8f\uff1a",(0,n.kt)("a",o({parentName:"p"},{href:"https://mp.jd.com/?entrance=taro"}),(0,n.kt)("strong",{parentName:"a"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f")),"\u3002Taro \u4f5c\u4e3a\u4e00\u6b3e\u4e13\u6ce8\u4e8e\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u7684\u6846\u67b6\uff0c\u7b2c\u4e00\u65f6\u95f4\u5bf9\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u8fdb\u884c\u4e86\u9002\u914d\u3002\u63a5\u4e0b\u6765\u5c31\u8ddf\u7740\u5c0f\u7f16\u4e00\u8d77\u4e86\u89e3\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5427\u3002"))}f.isMDXComponent=!0}}]);