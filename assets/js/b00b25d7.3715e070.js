"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[66745],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92985:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(93106),a=n(4706),l="tabItem_hkNs";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return r.createElement("div",i({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},12959:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(93106),a=n(4706),l=n(57293),i=n(23744),o=n(76741),p=n(33696),c="tabList_HZIO",s="tabItem_bO0X";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:u,groupId:g,className:k}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=u?u:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,i.l)(N,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const y=null===d?d:null!==(b=null!=d?d:null===(t=v.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:v[0].props.value;if(null!==y&&!N.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:w}=(0,o.U)(),[C,x]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=g){const e=h[g];null!=e&&e!==C&&N.some((t=>t.value===e))&&x(e)}const D=e=>{const t=e.currentTarget,n=O.indexOf(t),r=N[n].value;r!==C&&(E(t),x(r),null!=g&&w(g,String(r)))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;var n;t=null!==(n=O[r])&&void 0!==n?n:O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;var r;t=null!==(r=O[n])&&void 0!==r?r:O[O.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},k)},N.map((({value:e,label:t,attributes:n})=>r.createElement("li",m({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>O.push(e),onKeyDown:P,onFocus:D,onClick:D},n,{className:(0,a.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function u(e){const t=(0,l.Z)();return r.createElement(d,m({key:String(t)},e))}},20948:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});n(93106);var r=n(79874),a=n(12959),l=n(92985);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"CoverView",sidebar_label:"CoverView"},c=void 0,s={unversionedId:"components/viewContainer/cover-view",id:"version-3.x/components/viewContainer/cover-view",title:"CoverView",description:"\u8986\u76d6\u5728\u539f\u751f\u7ec4\u4ef6\u4e4b\u4e0a\u7684\u6587\u672c\u89c6\u56fe\u3002\u53ef\u8986\u76d6\u7684\u539f\u751f\u7ec4\u4ef6\u5305\u62ec map\u3001video\u3001canvas\u3001camera\u3001live-player\u3001live-pusher \u53ea\u652f\u6301\u5d4c\u5957 cover-view\u3001cover-image\uff0c\u53ef\u5728 cover-view \u4e2d\u4f7f\u7528 button\u3002",source:"@site/versioned_docs/version-3.x/components/viewContainer/cover-view.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/cover-view",permalink:"/taro-docs/docs/components/viewContainer/cover-view",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/viewContainer/cover-view.md",tags:[],version:"3.x",frontMatter:{title:"CoverView",sidebar_label:"CoverView"},sidebar:"components",previous:{title:"Slot",permalink:"/taro-docs/docs/components/slot"},next:{title:"CoverImage",permalink:"/taro-docs/docs/components/viewContainer/cover-image"}},m={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"CoverViewProps",id:"coverviewprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],u={toc:d};function g(e){var{components:t}=e,p=o(e,["components"]);return(0,r.kt)("wrapper",i({},u,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8986\u76d6\u5728\u539f\u751f\u7ec4\u4ef6\u4e4b\u4e0a\u7684\u6587\u672c\u89c6\u56fe\u3002\u53ef\u8986\u76d6\u7684\u539f\u751f\u7ec4\u4ef6\u5305\u62ec map\u3001video\u3001canvas\u3001camera\u3001live-player\u3001live-pusher \u53ea\u652f\u6301\u5d4c\u5957 cover-view\u3001cover-image\uff0c\u53ef\u5728 cover-view \u4e2d\u4f7f\u7528 button\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(50154).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(88789).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CoverViewProps>\n")),(0,r.kt)("h2",i({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"// js\nclass App extends Components {\n  render () {\n    return (\n      <View className='container'>\n        <Video id='myVideo' src='src'>\n          <CoverView className='controls'>\n            <CoverView className='play' onClick='play'>\n              <CoverImage className='img' src='src' />\n            </CoverView>\n          </CoverView>\n        </Video>\n      </View>\n    )\n  }\n}\n// css\n.container {\n  position: relative;\n}\n.controls {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  height: 225px;\n  transform: translate(-50%, -50%);\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class=\"container\">\n    <video id='myvideo' src='https://ugccsy.qq.com/uwMROfz2r5zBIaQXGdGnC2dfDma3J1MItM3912IN4IRQvkRM/o31507f7lcd.mp4?sdtfrom=v1010&guid=aa18cf106b7fdb7e40f2d20b206f2b4f&vkey=63B0FCCC7FC3ADC342C166D86571AE02772258CD9B515B065DC68DF3919D8C288AE831D570ED5E8FE0FF3E81E170D04FF11F874BFDDACF7AAA2C0CFF2ACB39FB1A94DAD1AB859BDA53E4DD6DBCDC1217CEF789A9AC079924E2BBC599EED7A1FFDD60A727F2EB7E7B6472CE63DD4B683C9199DFC78A6A6C4D9891E05467C4B64E'>\n    </video>\n    <cover-view class='controls'>\n      <cover-view class='play' @tap='play'>\n        <cover-image class='img' src='https://img10.360buyimg.com/ling/s345x208_jfs/t1/133501/7/9865/382161/5f5ee31fEbdd6a418/0cdc0156ffff3c23.png' />\n      </cover-view>\n    </cover-view>\n  </view>\n</template>\n\n<style>\n.container {\n  position: relative;\n}\n.controls {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  height: 225px;\n  transform: translate(-50%, -50%);\n}\n</style>\n")))),(0,r.kt)("h2",i({},{id:"coverviewprops"}),"CoverViewProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"scrollTop"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u9876\u90e8\u6eda\u52a8\u504f\u79fb\u91cf\uff0c\u4ec5\u5728\u8bbe\u7f6e\u4e86 overflow-y: scroll \u6210\u4e3a\u6eda\u52a8\u5143\u7d20\u540e\u751f\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"onTap"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u70b9\u51fb\u4e8b\u4ef6\u56de\u8c03\u3002",(0,r.kt)("br",null),"\u7248\u672c\u8981\u6c42\uff1a\u57fa\u7840\u5e93 1.9.0 \u53ca\u4ee5\u4e0a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"fixedTop"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e0e\u5bb9\u5668\u9876\u90e8\u7684\u56fa\u5b9a\u8ddd\u79bb\uff0c\u6548\u679c\u76f8\u5f53\u4e8e\u5728 CSS \u4e2d\u8bbe\u7f6e position: fixed \u548c top \u503c\uff0c\u8be5\u5c5e\u6027\u4f18\u5148\u7ea7\u9ad8\u4e8e fixed-bottom\uff0cCSS \u8bbe\u7f6e\u7684 position\u3001top\u3001bottom \u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"fixedRight"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e0e\u5bb9\u5668\u53f3\u4fa7\u7684\u56fa\u5b9a\u8ddd\u79bb\uff0c\u6548\u679c\u76f8\u5f53\u4e8e\u5728 CSS \u4e2d\u8bbe\u7f6e position: fixed \u548c right \u503c\uff0c\u8be5\u5c5e\u6027\u4f18\u5148\u7ea7\u9ad8\u4e8e CSS \u8bbe\u7f6e\u7684 position\u3001left\u3001right \u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"fixedBottom"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e0e\u5bb9\u5668\u5e95\u90e8\u7684\u56fa\u5b9a\u8ddd\u79bb\uff0c\u6548\u679c\u76f8\u5f53\u4e8e\u5728 CSS \u4e2d\u8bbe\u7f6e position: fixed \u548c bottom \u503c\uff0c\u8be5\u5c5e\u6027\u4f18\u5148\u7ea7\u9ad8\u4e8e CSS \u8bbe\u7f6e\u7684 position\u3001top\u3001bottom \u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"fixedLeft"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e0e\u5bb9\u5668\u5de6\u4fa7\u7684\u56fa\u5b9a\u8ddd\u79bb\uff0c\u6548\u679c\u76f8\u5f53\u4e8e\u5728 CSS \u4e2d\u8bbe\u7f6e position: fixed \u548c left \u503c\uff0c\u8be5\u5c5e\u6027\u4f18\u5148\u7ea7\u9ad8\u4e8e fixed-right\uff0cCSS \u8bbe\u7f6e\u7684 position\u3001left\u3001right \u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"ariaRole"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u65e0\u969c\u788d\u8bbf\u95ee\uff0c\uff08\u89d2\u8272\uff09\u6807\u8bc6\u5143\u7d20\u7684\u4f5c\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"ariaLabel"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u65e0\u969c\u788d\u8bbf\u95ee\uff0c\uff08\u5c5e\u6027\uff09\u5143\u7d20\u7684\u989d\u5916\u63cf\u8ff0")))),(0,r.kt)("h3",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"Harmony"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"CoverViewProps.scrollTop"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"CoverViewProps.onTap"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"CoverViewProps.fixedTop"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"CoverViewProps.fixedRight"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"CoverViewProps.fixedBottom"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"CoverViewProps.fixedLeft"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"CoverViewProps.ariaRole"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"CoverViewProps.ariaLabel"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))))))}g.isMDXComponent=!0},88789:function(e,t,n){t.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},80068:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},50154:function(e,t,n){t.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},88421:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);