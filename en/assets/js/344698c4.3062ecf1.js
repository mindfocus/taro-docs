"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[41160],{79874:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var n=r(93106);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),u=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,l(l({ref:e},c),{},{components:r})):n.createElement(f,l({ref:e},c))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:o,l[1]=p;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45765:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const l={title:"RadioGroup",sidebar_label:"RadioGroup"},p=void 0,i={unversionedId:"components/forms/radio-group",id:"components/forms/radio-group",title:"RadioGroup",description:"A single-item picker consisting of multiple Radio components.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/forms/radio-group.md",sourceDirName:"components/forms",slug:"/components/forms/radio-group",permalink:"/taro-docs/en/docs/next/components/forms/radio-group",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/forms/radio-group.md",tags:[],version:"current",frontMatter:{title:"RadioGroup",sidebar_label:"RadioGroup"}},u={},c=[{value:"Type",id:"type",level:2},{value:"RadioGroupProps",id:"radiogroupprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail",level:3},{value:"API Support",id:"api-support",level:2}],s={toc:c};function d(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A single-item picker consisting of multiple Radio components."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/radio-group.html"}),"Reference"))),(0,n.kt)("h2",o({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<RadioGroupProps>\n")),(0,n.kt)("h2",o({},{id:"radiogroupprops"}),"RadioGroupProps"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"onChange"),(0,n.kt)("td",null,(0,n.kt)("code",null,"BaseEventOrigFunction<any>")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"A change event triggered when selected options in `checkbox-group` change. detail =  ","{value:[Array of values of the selected checkboxes]}")))),(0,n.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"RadioGroupProps.onChange"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",o({},{id:"onchangeeventdetail"}),"onChangeEventDetail"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Param"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"value"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string[]"))))),(0,n.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"RadioGroup"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);