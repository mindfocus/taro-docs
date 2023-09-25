"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[67180],{79874:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||p[d]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95113:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(93106),r=n(4706),l="tabItem_xXVp";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},78288:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(93106),r=n(4706),l=n(45388),i=n(24755),o=n(89476),c=n(26779),s=n(57191);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return function(e){var t,n;return null!==(n=null===(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,o._X)(r),c=(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){m(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[r,n]);return[l,c]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=u(e),[i,o]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const a=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,m]=g({queryString:n,groupId:r}),[p,k]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,s.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),f=(()=>{const e=null!=c?c:p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),m(e),k(e)}),[m,k,l]),tabValues:l}}var f=n(87650),N="tabList_ulmA",b="tabItem_Zt3y";function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function v({className:e,block:t,selectedValue:n,selectValue:i,tabValues:o}){const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=o[a].value;r!==n&&(s(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;var n;t=null!==(n=c[a])&&void 0!==n?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;var a;t=null!==(a=c[n])&&void 0!==a?a:c[c.length-1];break}}null==t||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>a.createElement("li",h({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,r.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function y({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=k(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",N)},a.createElement(v,h({},e,t)),a.createElement(y,h({},e,t)))}function E(e){const t=(0,f.Z)();return a.createElement(w,h({key:String(t)},e))}},2071:function(e,t,n){n.d(t,{gQ:function(){return l},p6:function(){return r}});var a=n(93106);function r({version:e=""}){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.createElement("span",{style:{color:"#4fc08d"}},"Vue",e?` ${e}`:""))}function l(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.createElement("span",{style:{color:"#61dafb"}},"React"))}},35847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});n(93106);var a=n(79874),r=n(2071),l=n(78288),i=n(95113);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"ShareElement",sidebar_label:"ShareElement"},m=void 0,p={unversionedId:"components/skyline/share-element",id:"version-3.x/components/skyline/share-element",title:"ShareElement",description:"\u5171\u4eab\u5143\u7d20",source:"@site/versioned_docs/version-3.x/components/skyline/share-element.md",sourceDirName:"components/skyline",slug:"/components/skyline/share-element",permalink:"/taro-docs/en/docs/components/skyline/share-element",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/skyline/share-element.md",tags:[],version:"3.x",frontMatter:{title:"ShareElement",sidebar_label:"ShareElement"},sidebar:"components",previous:{title:"ListView",permalink:"/taro-docs/en/docs/components/skyline/list-view"},next:{title:"Snapshot",permalink:"/taro-docs/en/docs/components/skyline/snapshot"}},u={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"ShareElementProps",id:"shareelementprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],g={toc:d};function k(e){var{components:t}=e,s=c(e,["components"]);return(0,a.kt)("wrapper",o({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5171\u4eab\u5143\u7d20"),(0,a.kt)("p",null,"\u5171\u4eab\u5143\u7d20\u662f\u4e00\u79cd\u52a8\u753b\u5f62\u5f0f\uff0c\u7c7b\u4f3c\u4e8e ",(0,a.kt)("a",o({parentName:"p"},{href:"https://flutterchina.club/animations/hero-animations/"}),(0,a.kt)("inlineCode",{parentName:"a"},"flutter Hero"))," \u52a8\u753b\uff0c\u8868\u73b0\u4e3a\u5143\u7d20\u50cf\u662f\u5728\u9875\u9762\u95f4\u7a7f\u8d8a\u4e00\u6837\u3002\u8be5\u7ec4\u4ef6\u9700\u4e0e ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/components/viewContainer/page-container"}),(0,a.kt)("inlineCode",{parentName:"a"},"PageContainer"))," \u7ec4\u4ef6\u7ed3\u5408\u4f7f\u7528\u3002\n\u4f7f\u7528\u65f6\u9700\u5728\u5f53\u524d\u9875\u653e\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"ShareElement")," \u7ec4\u4ef6\uff0c\u540c\u65f6\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"PageContainer")," \u5bb9\u5668\u4e2d\u653e\u7f6e\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ShareElement")," \u7ec4\u4ef6\uff0c\u5bf9\u5e94\u5173\u7cfb\u901a\u8fc7\u5c5e\u6027\u503c key \u6620\u5c04\u3002\u5f53\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"PageContainer")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\u663e\u793a\u65f6\uff0ctransform")," \u5c5e\u6027\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u7684\u5171\u4eab\u5143\u7d20\u4f1a\u4ea7\u751f\u52a8\u753b\u3002\u5f53\u524d\u9875\u9762\u5bb9\u5668\u9000\u51fa\u65f6\uff0c\u4f1a\u4ea7\u751f\u8fd4\u56de\u52a8\u753b\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(68525).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<ShareElementProps>\n")),(0,a.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"React",values:[{label:(0,a.kt)(r.gQ,{mdxType:"ReactIcon"}),value:"React"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"// index.js\nimport { useState, useCallback } from 'react'\nimport { View, Button, PageContainer, ShareElement } from '@tarojs/components'\n\nimport './index.scss'\n\nconst contacts = [\n  { id: 1, name: 'Frank', img: 'frank.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },\n  { id: 2, name: 'Susan', img: 'susan.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },\n  { id: 3, name: 'Emma', img: 'emma.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },\n  { id: 4, name: 'Scott', img: 'scott.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },\n  { id: 5, name: 'Bob', img: 'bob.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },\n  { id: 6, name: 'Olivia', img: 'olivia.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },\n  { id: 7, name: 'Anne', img: 'anne.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },\n  { id: 8, name: 'sunny', img: 'olivia.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' }\n]\n\nexport default function () {\n  const [show, setShow] = useState(false)\n  const [contact, setContact] = useState(contacts[0])\n  const [transformIdx, setTransformIdx] = useState(0)\n\n  const onBeforeEnter = useCallback((res) => {\n    console.log('onBeforeEnter: ', res)\n  }, [])\n  const onEnter = useCallback((res) => {\n    console.log('onEnter: ', res)\n  }, [])\n  const onAfterEnter = useCallback((res) => {\n    console.log('onAfterEnter: ', res)\n  }, [])\n  const onBeforeLeave = useCallback((res) => {\n    console.log('onBeforeLeave: ', res)\n  }, [])\n  const onLeave = useCallback((res) => {\n    console.log('onLeave: ', res)\n  }, [])\n  const onAfterLeave = useCallback((res) => {\n    console.log('onAfterLeave: ', res)\n  }, [])\n\n  const showNext = (e, index) => {\n    setShow(true)\n    setContact(contacts[index])\n    setTransformIdx(index)\n  }\n\n  const showPrev = useCallback(() => {\n    setShow(false)\n  }, [])\n\n  return (\n    <View>\n      <View className=\"screen screen1\">\n        {\n          contacts.map((item, index) => (\n            <View key={item.id} className=\"contact\" onClick={e => showNext(e, index)}>\n              <ShareElement duration={300} className=\"name\" key=\"name\" transform={transformIdx === index}>\n                {item.name}\n              </ShareElement>\n              <View className=\"list\">\n                <View>Phone: {item.phone}</View>\n                <View>Mobile: {item.mobile}</View>\n                <View>Email: {item.email}</View>\n              </View>\n            </View>\n          ))\n        }\n      </View>\n      <PageContainer\n        show={show}\n        overlay={false}\n        closeOnSlideDown\n        duration={300}\n        position='center'\n        onBeforeEnter={onBeforeEnter}\n        onEnter={onEnter}\n        onAfterEnter={onAfterEnter}\n        onBeforeLeave={onBeforeLeave}\n        onLeave={onLeave}\n        onAfterLeave={onAfterLeave}\n      >\n        <View className=\"screen screen2\">\n          <View className=\"contact\">\n            <ShareElement className=\"name\" key=\"name\" duration={300} transform>\n              {contact.name}\n            </ShareElement>\n            <View className={`paragraph ${show ? 'enter' : ''}`}>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl enim, sodales non augue efficitur, sagittis\n              varius neque. Fusce dolor turpis, maximus eu volutpat quis, pellentesque et ligula. Ut vehicula metus in nibh\n              mollis ornare. Etiam aliquam lacinia malesuada. Vestibulum dignissim mollis quam a tristique. Maecenas neque\n              mauris, malesuada vitae magna eu, congue consectetur risus. Etiam vitae pulvinar ex. Maecenas suscipit mi ac\n              imperdiet pretium. Aliquam velit mauris, euismod quis elementum sed, malesuada non dui. Nunc rutrum sagittis\n              ligula in dapibus. Cras suscipit ut augue eget mollis. Donec auctor feugiat ipsum id viverra. Vestibulum eu nisi\n              risus. Vestibulum eleifend dignissim.\n\n            </View>\n            <Button className=\"screen2-button\" onClick={showPrev} hidden={!show} hoverClass=\"none\">Click Me</Button>\n          </View>\n        </View>\n      </PageContainer>\n    </View>\n  )\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-scss"}),"\\/** index.scss *\\/\npage {\n  color: #333;\n  background-color: #ddd;\n  overflow: hidden;\n}\n\nbutton {\n  border: 0 solid #0010ae;\n  background-color: #1f2afe;\n  color: #fff;\n  font-size: 120%;\n  padding: 8px 16px;\n  outline-width: 0;\n  -webkit-appearance: none;\n  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2);\n}\n\n.screen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 16px;\n  -webkit-overflow-scrolling: touch;\n}\n\n.contact {\n  position: relative;\n  padding: 16px;\n  background-color: #fff;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.avatar {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  font-size: 0;\n}\n\n.name {\n  height: 65px;\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0;\n}\n\n.list {\n  padding-top: 8px;\n  padding-left: 32px;\n}\n\n.screen1 {\n  overflow-y: scroll;\n  padding: 0;\n}\n\n.screen1 .contact {\n  margin: 16px;\n  height: auto;\n  width: auto;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\n.screen2-button {\n  display: block;\n  margin: 24px auto;\n}\n\n.paragraph {\n  -webkit-transition: transform ease-in-out 300ms;\n  transition: transform ease-in-out 300ms;\n  -webkit-transform: scale(0.6);\n  transform: scale(0.6);\n}\n\n.enter.paragraph {\n  transform: none;\n}\n")))),(0,a.kt)("h2",o({},{id:"shareelementprops"}),"ShareElementProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"key"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6620\u5c04\u6807\u8bb0",(0,a.kt)("br",null),"\u4e0d\u63a8\u8350: \u4f7f\u7528mapkey\u66ff\u6362key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"mapkey"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6620\u5c04\u6807\u8bb0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6620\u5c04\u6807\u8bb0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"transform"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u662f\u5426\u8fdb\u884c\u52a8\u753b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"duration"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"300")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u52a8\u753b\u65f6\u957f\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"easingFunction"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"ease-out")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"css\u7f13\u52a8\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"transitionOnGesture"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u624b\u52bf\u8fd4\u56de\u65f6\u662f\u5426\u8fdb\u884c\u52a8\u753b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"shuttleOnPush"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),'"from" or "to"'),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"to"')),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6307\u5b9a push \u9636\u6bb5\u7684\u98de\u8dc3\u7269")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"shuttleOnPop"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"to"')),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u6307\u5b9a pop \u9636\u6bb5\u7684\u98de\u8dc3\u7269")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"rectTweenType"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),'"materialRectArc" or "materialRectCenterArc" or "linear" or "elasticIn" or "elasticOut" or "elasticInOut" or "bounceIn" or "bounceOut" or "bounceInOut" or "cubic-bezier(x1,"'),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"materialRectArc"')),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u52a8\u753b\u63d2\u503c\u66f2\u7ebf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"onFrame"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u52a8\u753b\u5e27\u56de\u8c03")))),(0,a.kt)("h3",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"ShareElementProps.key"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"ShareElementProps.mapkey"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"ShareElementProps.name"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"ShareElementProps.transform"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"ShareElementProps.duration"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"ShareElementProps.easingFunction"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"ShareElementProps.transitionOnGesture"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"ShareElementProps.shuttleOnPush"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"ShareElementProps.shuttleOnPop"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"ShareElementProps.rectTweenType"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"ShareElementProps.onFrame"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0},68525:function(e,t,n){t.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},83190:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);