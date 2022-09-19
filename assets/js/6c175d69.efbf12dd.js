"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51977],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92985:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(93106),o=n(4706),a="tabItem_hkNs";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,o.Z)(a,n)},{hidden:t}),e)}},12959:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(93106),o=n(4706),a=n(57293),l=n(23744),i=n(76741),c=n(33696),s="tabList_HZIO",u="tabItem_bO0X";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e){var t;const{lazy:n,block:a,defaultValue:m,values:f,groupId:d,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,l.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const w=null===m?m:null!==(g=null!=m?m:null===(t=b.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:b[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:k}=(0,i.U)(),[x,j]=(0,r.useState)(w),P=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=d){const e=O[d];null!=e&&e!==x&&h.some((t=>t.value===e))&&j(e)}const N=e=>{const t=e.currentTarget,n=P.indexOf(t),r=h[n].value;r!==x&&(E(t),j(r),null!=d&&k(d,String(r)))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=P.indexOf(e.currentTarget)+1;var n;t=null!==(n=P[r])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;var r;t=null!==(r=P[n])&&void 0!==r?r:P[P.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},v)},h.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>P.push(e),onKeyDown:T,onFocus:N,onClick:N},n,{className:(0,o.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":x===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function f(e){const t=(0,a.Z)();return r.createElement(m,p({key:String(t)},e))}},91621:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});n(93106);var r=n(79874),o=n(12959),a=n(92985);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"RootPortal",sidebar_label:"RootPortal"},s=void 0,u={unversionedId:"components/viewContainer/root-portal",id:"components/viewContainer/root-portal",title:"RootPortal",description:"root-portal",source:"@site/docs/components/viewContainer/root-portal.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/root-portal",permalink:"/taro-docs/docs/next/components/viewContainer/root-portal",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/viewContainer/root-portal.md",tags:[],version:"current",frontMatter:{title:"RootPortal",sidebar_label:"RootPortal"},sidebar:"components",previous:{title:"PageContainer",permalink:"/taro-docs/docs/next/components/viewContainer/page-container"},next:{title:"ScrollView",permalink:"/taro-docs/docs/next/components/viewContainer/scroll-view"}},p={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],f={toc:m};function d(e){var{components:t}=e,c=i(e,["components"]);return(0,r.kt)("wrapper",l({},f,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"root-portal\n\u4f7f\u6574\u4e2a\u5b50\u6811\u4ece\u9875\u9762\u4e2d\u8131\u79bb\u51fa\u6765\uff0c\u7c7b\u4f3c\u4e8e\u5728 CSS \u4e2d\u4f7f\u7528 fixed position \u7684\u6548\u679c\u3002\u4e3b\u8981\u7528\u4e8e\u5236\u4f5c\u5f39\u7a97\u3001\u5f39\u51fa\u5c42\u7b49\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"ComponentType\n")),(0,r.kt)("h2",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"import { useState } from 'react'\nimport { RootPortal, View, Button } from '@tarojs/components'\n\nexport default function RootPortalExample {\n  const [show, setShow] = useState(false)\n  const toggle = () => {\n    setShow(!show)\n  }\n  render () {\n    return (\n      <View>\n        <Button onClick={toggle}>\u663e\u793aroot-portal</Button>\n        {\n          show && (<RootPortal><View>content</View></RootPortal>)\n        }\n      </View>\n    )\n  }\n}\n")))))}d.isMDXComponent=!0},80068:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);