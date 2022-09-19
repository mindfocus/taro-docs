"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[31490],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92985:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(93106),o=n(4706),a="tabItem_hkNs";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l({children:e,hidden:t,className:n}){return r.createElement("div",i({role:"tabpanel",className:(0,o.Z)(a,n)},{hidden:t}),e)}},12959:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(93106),o=n(4706),a=n(57293),i=n(23744),l=n(76741),s=n(33696),c="tabList_HZIO",p="tabItem_bO0X";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function m(e){var t;const{lazy:n,block:a,defaultValue:m,values:d,groupId:f,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,i.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const k=null===m?m:null!==(g=null!=m?m:null===(t=v.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:v[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,l.U)(),[x,T]=(0,r.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&b.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=j.indexOf(t),r=b[n].value;r!==x&&(N(t),T(r),null!=f&&O(f,String(r)))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=j.indexOf(e.currentTarget)+1;var n;t=null!==(n=j[r])&&void 0!==n?n:j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;var r;t=null!==(r=j[n])&&void 0!==r?r:j[j.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},h)},b.map((({value:e,label:t,attributes:n})=>r.createElement("li",u({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>j.push(e),onKeyDown:P,onFocus:C,onClick:C},n,{className:(0,o.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":x===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,a.Z)();return r.createElement(m,u({key:String(t)},e))}},59480:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});n(93106);var r=n(79874),o=n(12959),a=n(92985);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Description"},c=void 0,p={unversionedId:"components-desc",id:"version-3.x/components-desc",title:"Description",description:"Taro has customised its own component library specification using WeChat Mini-Program Components as a standard, combined with the JSX syntax specification.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components-desc.md",sourceDirName:".",slug:"/components-desc",permalink:"/taro-docs/en/docs/components-desc",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components-desc.md",tags:[],version:"3.x",frontMatter:{title:"Description"},sidebar:"components",next:{title:"CustomWrapper",permalink:"/taro-docs/en/docs/components/custom-wrapper"}},u={},m=[{value:"TIPS",id:"tips",level:2},{value:"Initial capitalisation and humpback naming",id:"initial-capitalisation-and-humpback-naming",level:3},{value:"The event names of components should all start with <code>on</code>",id:"the-event-names-of-components-should-all-start-with-on",level:3}],d={toc:m};function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro has customised its own component library specification using ",(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/"}),"WeChat Mini-Program Components")," as a standard, combined with the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," syntax specification."),(0,r.kt)("p",null,"Based on the above principles, on the WeChat Mini-Program side we can use all the mini program native components, while on the other side we have implemented the corresponding component libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"H5: ",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/components")),(0,r.kt)("li",{parentName:"ul"},"RN: ",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/components-rn"))),(0,r.kt)("p",null,"When using React we need to reference components from the Taro standard component library @tarojs/components before we can use them, for example with ",(0,r.kt)("inlineCode",{parentName:"p"},"<View />"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<Text />")," components\uff0c whereas with Vue there is no need to bring them in."),(0,r.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nexport default class C extends Component {\n  render () {\n    return (\n      <View className='c'>\n        <Text>c component</Text>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="c">\n    <text>c component</text>\n  </view>\n</template>\n')))),(0,r.kt)("h2",i({},{id:"tips"}),"TIPS"),(0,r.kt)("p",null,"The detailed documentation of the components lists the extent to which the components are supported on different sides, as well as basic usage examples. For some components that are not listed as examples and are marked as only supported on the mini program side, you can refer directly to the ",(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/"}),"Mini-Program Components Doc"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Taro's development specifications still need to be followed:")),(0,r.kt)("h3",i({},{id:"initial-capitalisation-and-humpback-naming"}),"Initial capitalisation and humpback naming"),(0,r.kt)("p",null,"For example, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," component, which is not yet supported on the H5 side"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport Taro from '@tarojs/taro'\nimport { Map } from '@tarojs/components'\n\nclass App extends Components {\n  onTap () {}\n  render () {\n    return (\n      <Map onClick={this.onTap} />\n    )\n  }\n}\n")),(0,r.kt)("h3",i({},{id:"the-event-names-of-components-should-all-start-with-on"}),"The event names of components should all start with ",(0,r.kt)("inlineCode",{parentName:"h3"},"on")),(0,r.kt)("p",null,"All uses of ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," in WeChat Mini-Program need to be converted to a form starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"on"),"."))}f.isMDXComponent=!0}}]);