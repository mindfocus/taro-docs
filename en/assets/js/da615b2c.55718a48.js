"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[92539],{79874:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return g}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),c=o(a),g=r,N=c["".concat(p,".").concat(g)]||c[g]||k[g]||l;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85470:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={title:"Picker",sidebar_label:"Picker"},m=void 0,p={unversionedId:"components/forms/picker",id:"version-1.x/components/forms/picker",title:"Picker",description:"\u8be5 Picker \u7ec4\u4ef6\u6587\u6863\u4ec5\u5c55\u793a H5 \u4e0e RN \u652f\u6301\u5c5e\u6027\u4e0e\u7a0b\u5ea6\uff0c\u5176\u4ed6\u76f8\u5173\u5c5e\u6027\u8bf7\u770b\u5404\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863",source:"@site/versioned_docs/version-1.x/components/forms/picker.md",sourceDirName:"components/forms",slug:"/components/forms/picker",permalink:"/taro-docs/en/docs/1.x/components/forms/picker",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/components/forms/picker.md",tags:[],version:"1.x",frontMatter:{title:"Picker",sidebar_label:"Picker"},sidebar:"version-1.x/components",previous:{title:"Label",permalink:"/taro-docs/en/docs/1.x/components/forms/label"},next:{title:"PickerView",permalink:"/taro-docs/en/docs/1.x/components/forms/picker-view"}},o={},d=[{value:"\u8be5 Picker \u7ec4\u4ef6\u6587\u6863\u4ec5\u5c55\u793a H5 \u4e0e RN \u652f\u6301\u5c5e\u6027\u4e0e\u7a0b\u5ea6\uff0c\u5176\u4ed6\u76f8\u5173\u5c5e\u6027\u8bf7\u770b\u5404\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863",id:"\u8be5-picker-\u7ec4\u4ef6\u6587\u6863\u4ec5\u5c55\u793a-h5-\u4e0e-rn-\u652f\u6301\u5c5e\u6027\u4e0e\u7a0b\u5ea6\u5176\u4ed6\u76f8\u5173\u5c5e\u6027\u8bf7\u770b\u5404\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863",level:4},{value:"\u666e\u901a\u9009\u62e9\u5668\uff1amode = selector",id:"\u666e\u901a\u9009\u62e9\u5668mode--selector",level:5},{value:"\u591a\u5217\u9009\u62e9\u5668\uff1amode = multiSelector",id:"\u591a\u5217\u9009\u62e9\u5668mode--multiselector",level:5},{value:"\u65f6\u95f4\u9009\u62e9\u5668\uff1amode = time",id:"\u65f6\u95f4\u9009\u62e9\u5668mode--time",level:5},{value:"\u65e5\u671f\u9009\u62e9\u5668\uff1amode = date",id:"\u65e5\u671f\u9009\u62e9\u5668mode--date",level:5},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b",level:6}],k={toc:d};function c(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h4",r({},{id:"\u8be5-picker-\u7ec4\u4ef6\u6587\u6863\u4ec5\u5c55\u793a-h5-\u4e0e-rn-\u652f\u6301\u5c5e\u6027\u4e0e\u7a0b\u5ea6\u5176\u4ed6\u76f8\u5173\u5c5e\u6027\u8bf7\u770b\u5404\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863"}),"\u8be5 Picker \u7ec4\u4ef6\u6587\u6863\u4ec5\u5c55\u793a H5 \u4e0e RN \u652f\u6301\u5c5e\u6027\u4e0e\u7a0b\u5ea6\uff0c\u5176\u4ed6\u76f8\u5173\u5c5e\u6027\u8bf7\u770b\u5404\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f Picker"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/formlist/#picker/"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f Picker"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://docs.alipay.com/mini/component/picker"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f Picker"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.toutiao.com/docs/comp/picker.htmll"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f Picker"),"\u3002"),(0,n.kt)("h5",r({},{id:"\u666e\u901a\u9009\u62e9\u5668mode--selector"}),"\u666e\u901a\u9009\u62e9\u5668\uff1amode = selector"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027\u53ca\u652f\u6301\u5ea6")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"ReactNative"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"range"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Array / Object Array"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"[]"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"mode \u4e3a selector \u6216 multiSelector \u65f6\uff0crange \u6709\u6548")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"rangeKey"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5f53 range \u662f\u4e00\u4e2a Object Array \u65f6\uff0c\u901a\u8fc7 rangeKey \u6765\u6307\u5b9a Object \u4e2d key \u7684\u503c\u4f5c\u4e3a\u9009\u62e9\u5668\u663e\u793a\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"0"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value \u7684\u503c\u8868\u793a\u9009\u62e9\u4e86 range \u4e2d\u7684\u7b2c\u51e0\u4e2a\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"onChange"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"EventHandle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = value: value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"onCancel"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"EventHandle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u53d6\u6d88\u9009\u62e9\u6216\u70b9\u906e\u7f69\u5c42\u6536\u8d77 picker \u65f6\u89e6\u53d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"disabled"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"false"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u662f\u5426\u7981\u7528")))),(0,n.kt)("h5",r({},{id:"\u591a\u5217\u9009\u62e9\u5668mode--multiselector"}),"\u591a\u5217\u9009\u62e9\u5668\uff1amode = multiSelector"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027\u53ca\u652f\u6301\u5ea6")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"ReactNative"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"range"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u4e8c\u7ef4 Array / \u4e8c\u7ef4 Object Array"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"[]"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"mode \u4e3a selector \u6216 multiSelector \u65f6\uff0crange \u6709\u6548\u3002\u4e8c\u7ef4\u6570\u7ec4\uff0c\u957f\u5ea6\u8868\u793a\u591a\u5c11\u5217\uff0c\u6570\u7ec4\u7684\u6bcf\u9879\u8868\u793a\u6bcf\u5217\u7684\u6570\u636e\uff0c\u5982[","['a','b']",", ","['c','d']","]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"rangeKey"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5f53 range \u662f\u4e00\u4e2a \u4e8c\u7ef4 Object Array \u65f6\uff0c\u901a\u8fc7 rangeKey \u6765\u6307\u5b9a Object \u4e2d key \u7684\u503c\u4f5c\u4e3a\u9009\u62e9\u5668\u663e\u793a\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Array"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"[]"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value \u6bcf\u4e00\u9879\u7684\u503c\u8868\u793a\u9009\u62e9\u4e86 range \u5bf9\u5e94\u9879\u4e2d\u7684\u7b2c\u51e0\u4e2a\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"onChange"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"EventHandle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = value: value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"onColumnChange"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"EventHandle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u67d0\u4e00\u5217\u7684\u503c\u6539\u53d8\u65f6\u89e6\u53d1 columnchange \u4e8b\u4ef6\uff0cevent.detail = column: column, value: value\uff0ccolumn \u7684\u503c\u8868\u793a\u6539\u53d8\u4e86\u7b2c\u51e0\u5217\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\uff0cvalue \u7684\u503c\u8868\u793a\u53d8\u66f4\u503c\u7684\u4e0b\u6807")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"onCancel"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"EventHandle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u53d6\u6d88\u9009\u62e9\u65f6\u89e6\u53d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"disabled"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"false"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u662f\u5426\u7981\u7528")))),(0,n.kt)("h5",r({},{id:"\u65f6\u95f4\u9009\u62e9\u5668mode--time"}),"\u65f6\u95f4\u9009\u62e9\u5668\uff1amode = time"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027\u53ca\u652f\u6301\u5ea6")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"ReactNative"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8868\u793a\u9009\u4e2d\u7684\u65f6\u95f4\uff0c\u683c\u5f0f\u4e3a'hh:mm'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"start"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8868\u793a\u6709\u6548\u65f6\u95f4\u8303\u56f4\u7684\u5f00\u59cb\uff0c\u5b57\u7b26\u4e32\u683c\u5f0f\u4e3a'hh:mm'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"end"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8868\u793a\u6709\u6548\u65f6\u95f4\u8303\u56f4\u7684\u7ed3\u675f\uff0c\u5b57\u7b26\u4e32\u683c\u5f0f\u4e3a'hh:mm'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"onChange"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"EventHandle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = value: value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"onCancel"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"EventHandle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u53d6\u6d88\u9009\u62e9\u6216\u70b9\u906e\u7f69\u5c42\u6536\u8d77 picker \u65f6\u89e6\u53d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"disabled"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"false"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u662f\u5426\u7981\u7528")))),(0,n.kt)("h5",r({},{id:"\u65e5\u671f\u9009\u62e9\u5668mode--date"}),"\u65e5\u671f\u9009\u62e9\u5668\uff1amode = date"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027\u53ca\u652f\u6301\u5ea6")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"ReactNative"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"new Date()"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8868\u793a\u9009\u4e2d\u7684\u65e5\u671f\uff0c\u683c\u5f0f\u4e3a'YYYY-MM-DD'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"start"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"1970-01-01"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8868\u793a\u6709\u6548\u65e5\u671f\u8303\u56f4\u7684\u5f00\u59cb\uff0c\u5b57\u7b26\u4e32\u683c\u5f0f\u4e3a'YYYY-MM-DD'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"end"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"2999-01-01"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8868\u793a\u6709\u6548\u65e5\u671f\u8303\u56f4\u7684\u7ed3\u675f\uff0c\u5b57\u7b26\u4e32\u683c\u5f0f\u4e3a'YYYY-MM-DD'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"x"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"fields"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"day"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u6709\u6548\u503c year,month,day\uff0c\u8868\u793a\u9009\u62e9\u5668\u7684\u7c92\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"onChange"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"EventHandle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = value: value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"onCancel"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"EventHandle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u53d6\u6d88\u9009\u62e9\u6216\u70b9\u906e\u7f69\u5c42\u6536\u8d77 picker \u65f6\u89e6\u53d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"disabled"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"false"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u662f\u5426\u7981\u7528")))),(0,n.kt)("h6",r({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\nimport { View, Text, Picker } from '@tarojs/components'\n\nexport default class PagePicker extends Component {\n  state = {\n    selector: ['\u7f8e\u56fd', '\u4e2d\u56fd', '\u5df4\u897f', '\u65e5\u672c'],\n    selectorChecked: '\u7f8e\u56fd',\n    timeSel: '12:01',\n    dateSel: '2018-04-22'\n  }\n\n  onChange = e => {\n    this.setState({\n      selectorChecked: this.state.selector[e.detail.value]\n    })\n  }\n\n  onTimeChange = e => {\n    this.setState({\n      timeSel: e.detail.value\n    })\n  }\n  onDateChange = e => {\n    this.setState({\n      dateSel: e.detail.value\n    })\n  }\n\n  render () {\n    return (\n      <View className='container'>\n        <View className='page-body'>\n          <View className='page-section'>\n            <Text>\u5730\u533a\u9009\u62e9\u5668</Text>\n            <View>\n              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>\n                <View className='picker'>\n                  \u5f53\u524d\u9009\u62e9\uff1a{this.state.selectorChecked}\n                </View>\n              </Picker>\n            </View>\n          </View>\n          <View className='page-section'>\n            <Text>\u65f6\u95f4\u9009\u62e9\u5668</Text>\n            <View>\n              <Picker mode='time' onChange={this.onTimeChange}>\n                <View className='picker'>\n                  \u5f53\u524d\u9009\u62e9\uff1a{this.state.timeSel}\n                </View>\n              </Picker>\n            </View>\n          </View>\n          <View className='page-section'>\n            <Text>\u65e5\u671f\u9009\u62e9\u5668</Text>\n            <View>\n              <Picker mode='date' onChange={this.onDateChange}>\n                <View className='picker'>\n                  \u5f53\u524d\u9009\u62e9\uff1a{this.state.dateSel}\n                </View>\n              </Picker>\n            </View>\n          </View>\n        </View>\n      </View>\n    )\n  }\n}\n")))}c.isMDXComponent=!0}}]);