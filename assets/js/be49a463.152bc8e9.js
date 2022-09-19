"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48512],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92985:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(93106),a=n(4706),l="tabItem_hkNs";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i({children:t,hidden:e,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:e}),t)}},12959:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(93106),a=n(4706),l=n(57293),o=n(23744),i=n(76741),p=n(33696),u="tabList_HZIO",s="tabItem_bO0X";function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function d(t){var e;const{lazy:n,block:l,defaultValue:d,values:m,groupId:k,className:f}=t,b=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:b.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),v=(0,o.l)(h,((t,e)=>t.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const N=null===d?d:null!==(g=null!=d?d:null===(e=b.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==g?g:b[0].props.value;if(null!==N&&!h.some((t=>t.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:O}=(0,i.U)(),[j,w]=(0,r.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=k){const t=y[k];null!=t&&t!==j&&h.some((e=>e.value===t))&&w(t)}const E=t=>{const e=t.currentTarget,n=x.indexOf(e),r=h[n].value;r!==j&&(T(e),w(r),null!=k&&O(k,String(r)))},P=t=>{let e=null;switch(t.key){case"ArrowRight":{const r=x.indexOf(t.currentTarget)+1;var n;e=null!==(n=x[r])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(t.currentTarget)-1;var r;e=null!==(r=x[n])&&void 0!==r?r:x[x.length-1];break}}null==e||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},f)},h.map((({value:t,label:e,attributes:n})=>r.createElement("li",c({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:t=>x.push(t),onKeyDown:P,onFocus:E,onClick:E},n,{className:(0,a.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":j===t})}),null!=e?e:t)))),n?(0,r.cloneElement)(b.filter((t=>t.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==j})))))}function m(t){const e=(0,l.Z)();return r.createElement(d,c({key:String(e)},t))}},63264:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});n(93106);var r=n(79874),a=n(12959),l=n(92985);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={title:"\u5165\u53e3\u7ec4\u4ef6"},u=void 0,s={unversionedId:"react-entry",id:"version-3.x/react-entry",title:"\u5165\u53e3\u7ec4\u4ef6",description:"\u6bcf\u4e00\u4e2a Taro \u5e94\u7528\u90fd\u9700\u8981\u4e00\u4e2a\u5165\u53e3\u7ec4\u4ef6\uff08React \u7ec4\u4ef6\uff09\u7528\u6765\u6ce8\u518c\u5e94\u7528\u3002\u5165\u53e3\u6587\u4ef6\u9ed8\u8ba4\u662f src \u76ee\u5f55\u4e0b\u7684 app.js\u3002",source:"@site/versioned_docs/version-3.x/react-entry.mdx",sourceDirName:".",slug:"/react-entry",permalink:"/taro-docs/docs/react-entry",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/react-entry.mdx",tags:[],version:"3.x",frontMatter:{title:"\u5165\u53e3\u7ec4\u4ef6"},sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/taro-docs/docs/react-overall"},next:{title:"\u9875\u9762\u7ec4\u4ef6",permalink:"/taro-docs/docs/react-page"}},c={},d=[{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e",id:"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e",level:2},{value:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",level:2},{value:"onLaunch (options)",id:"onlaunch-options",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"options",id:"options",level:5},{value:"options.referrerInfo",id:"optionsreferrerinfo",level:5},{value:"componentDidShow (options)",id:"componentdidshow-options",level:3},{value:"componentDidHide ()",id:"componentdidhide-",level:3},{value:"onError (error)",id:"onerror-error",level:3},{value:"onPageNotFound (Object)",id:"onpagenotfound-object",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"Object",id:"object",level:5}],m={toc:d};function k(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)("wrapper",o({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6bcf\u4e00\u4e2a Taro \u5e94\u7528\u90fd\u9700\u8981\u4e00\u4e2a\u5165\u53e3\u7ec4\u4ef6\uff08React \u7ec4\u4ef6\uff09\u7528\u6765\u6ce8\u518c\u5e94\u7528\u3002\u5165\u53e3\u6587\u4ef6\u9ed8\u8ba4\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js"),"\u3002"),(0,r.kt)("p",null,"\u5728\u5165\u53e3\u7ec4\u4ef6\u4e2d\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u72b6\u6001\u6216\u8bbf\u95ee\u5c0f\u7a0b\u5e8f\u5165\u53e3\u5b9e\u4f8b\u7684\u751f\u547d\u5468\u671f\u3002"),(0,r.kt)("h2",o({},{id:"\u4ee3\u7801\u793a\u4f8b"}),"\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)(a.Z,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"class",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import React, { Component } from 'react'\n\n// \u5047\u8bbe\u6211\u4eec\u8981\u4f7f\u7528 Redux\nimport { Provider } from 'react-redux'\nimport configStore from './store'\n\n// \u5168\u5c40\u6837\u5f0f\nimport './app.css'\n\nconst store = configStore()\n\nclass App extends Component {\n  // \u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684 React \u751f\u547d\u5468\u671f\u65b9\u6cd5\n  componentDidMount () {}\n\n  // \u5bf9\u5e94 onLaunch\n  onLaunch () {}\n\n  // \u5bf9\u5e94 onShow\n  componentDidShow () {}\n\n  // \u5bf9\u5e94 onHide\n  componentDidHide () {}\n\n  render () {\n    // \u5728\u5165\u53e3\u7ec4\u4ef6\u4e0d\u4f1a\u6e32\u67d3\u4efb\u4f55\u5185\u5bb9\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u91cc\u505a\u7c7b\u4f3c\u4e8e\u72b6\u6001\u7ba1\u7406\u7684\u4e8b\u60c5\n    return (\n      <Provider store={store}>\n        {/* this.props.children \u662f\u5c06\u8981\u88ab\u6e32\u67d3\u7684\u9875\u9762 */}\n        {this.props.children}\n      </Provider>\n    )\n  }\n}\n\nexport default App\n"))),(0,r.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import React, { useEffect } from 'react'\n\n// Taro \u989d\u5916\u6dfb\u52a0\u7684 hooks \u8981\u4ece '@tarojs/taro' \u4e2d\u5f15\u5165\nimport { useDidShow, useDidHide } from '@tarojs/taro'\n\n// \u5047\u8bbe\u6211\u4eec\u8981\u4f7f\u7528 Redux\nimport { Provider } from 'react-redux'\nimport configStore from './store'\n\n// \u5168\u5c40\u6837\u5f0f\nimport './app.css'\n\nconst store = configStore()\n\nfunction App (props) {\n  // \u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684 React Hooks\n  useEffect(() => {})\n\n  // \u5bf9\u5e94 onShow\n  useDidShow(() => {})\n\n  // \u5bf9\u5e94 onHide\n  useDidHide(() => {})\n\n  return (\n    // \u5728\u5165\u53e3\u7ec4\u4ef6\u4e0d\u4f1a\u6e32\u67d3\u4efb\u4f55\u5185\u5bb9\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u91cc\u505a\u7c7b\u4f3c\u4e8e\u72b6\u6001\u7ba1\u7406\u7684\u4e8b\u60c5\n    <Provider store={store}>\n      {/* props.children \u662f\u5c06\u8981\u88ab\u6e32\u67d3\u7684\u9875\u9762 */}\n      {props.children}\n    </Provider>\n  )\n}\n\nexport default App\n")))),(0,r.kt)("h2",o({},{id:"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e"}),"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,r.kt)("a",o({parentName:"p"},{href:"./app-config"}),"\u5168\u5c40\u914d\u7f6e")),(0,r.kt)("h2",o({},{id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5"}),"\u751f\u547d\u5468\u671f\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5165\u53e3\u7ec4\u4ef6\u9664\u4e86\u652f\u6301 React \u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u5916\uff0c\u8fd8\u6839\u636e\u5c0f\u7a0b\u5e8f\u7684\u6807\u51c6\uff0c\u989d\u5916\u652f\u6301\u4ee5\u4e0b\u751f\u547d\u5468\u671f\uff1a"),(0,r.kt)("h3",o({},{id:"onlaunch-options"}),"onLaunch (options)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u5bf9\u5e94 app \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch"),"\u3002")),(0,r.kt)("p",null,"\u5728\u6b64\u751f\u547d\u5468\u671f\u4e2d\u901a\u8fc7\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\u6216\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5230\u7a0b\u5e8f\u521d\u59cb\u5316\u53c2\u6570\u3002"),(0,r.kt)("h4",o({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h5",o({},{id:"options"}),"options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684\u8def\u5f84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"scene"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684\u573a\u666f\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"query"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684 query \u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"shareTicket"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"shareTicket\uff0c\u8be6\u89c1\u83b7\u53d6\u66f4\u591a\u8f6c\u53d1\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"referrerInfo"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6765\u6e90\u4fe1\u606f\u3002\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u8fd4\u56de\u3002\u5426\u5219\u8fd4\u56de {}")))),(0,r.kt)("h5",o({},{id:"optionsreferrerinfo"}),"options.referrerInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"appId"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f\uff0c\u6216\u8005\u516c\u4f17\u53f7\uff08\u5fae\u4fe1\u4e2d\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"extraData"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u4f20\u8fc7\u6765\u7684\u6570\u636e\uff0c\u5fae\u4fe1\u548c\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u5728scene=1037\u62161038\u65f6\u652f\u6301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"sourceServiceId"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6765\u6e90\u63d2\u4ef6\uff0c\u5f53\u5904\u4e8e\u63d2\u4ef6\u8fd0\u884c\u6a21\u5f0f\u65f6\u53ef\u89c1")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"options \u53c2\u6570\u7684\u5b57\u6bb5\u5728\u4e0d\u540c\u5c0f\u7a0b\u5e8f\u4e2d\u53ef\u80fd\u5b58\u5728\u5dee\u5f02\uff0c\u5982\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},"\u573a\u666f\u503c scene\uff0c\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u4e2d\u5b58\u5728\u533a\u522b\uff0c\u8bf7\u5206\u522b\u53c2\u8003 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6587\u6863")," \u548c ",(0,r.kt)("a",o({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/data/scene/"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u6587\u6863"))),(0,r.kt)("h3",o({},{id:"componentdidshow-options"}),"componentDidShow (options)"),(0,r.kt)("p",null,"\u7a0b\u5e8f\u542f\u52a8\uff0c\u6216\u5207\u524d\u53f0\u65f6\u89e6\u53d1\u3002"),(0,r.kt)("p",null,"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch")," \u751f\u547d\u5468\u671f\u4e00\u6837\uff0c\u5728\u6b64\u751f\u547d\u5468\u671f\u4e2d\u901a\u8fc7\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\u6216\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5230\u7a0b\u5e8f\u521d\u59cb\u5316\u53c2\u6570\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch")," \u4e2d\u83b7\u53d6\u7684\u57fa\u672c\u4e00\u81f4\uff0c\u4f46",(0,r.kt)("strong",{parentName:"p"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),"\u4e2d\u8865\u5145\u4e24\u4e2a\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"entryType"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5c55\u73b0\u7684\u6765\u6e90\u6807\u8bc6\uff0c\u53d6\u503c\u4e3a user/ schema /sys :",(0,r.kt)("br",null),"user\uff1a\u8868\u793a\u901a\u8fc7home\u524d\u540e",(0,r.kt)("br",null),"\u5207\u6362\u6216\u89e3\u9501\u5c4f\u5e55\u7b49\u65b9\u5f0f\u8c03\u8d77\uff1b",(0,r.kt)("br",null),"schema\uff1a\u8868\u793a\u901a\u8fc7\u534f\u8bae\u8c03\u8d77;",(0,r.kt)("br",null),"sys\uff1a\u5176\u5b83")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"appURL"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u5c55\u73b0\u65f6\u7684\u8c03\u8d77\u534f\u8bae\uff0c\u4ec5\u5f53entryType\u503c\u4e3a schema \u65f6\u5b58\u5728")))),(0,r.kt)("h3",o({},{id:"componentdidhide-"}),"componentDidHide ()"),(0,r.kt)("p",null,"\u7a0b\u5e8f\u5207\u540e\u53f0\u65f6\u89e6\u53d1\u3002"),(0,r.kt)("h3",o({},{id:"onerror-error"}),"onError (error)"),(0,r.kt)("admonition",o({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Taro v3.5.0+ \u5f00\u59cb\u652f\u6301")),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u53d1\u751f\u811a\u672c\u9519\u8bef\u6216 API \u8c03\u7528\u62a5\u9519\u65f6\u89e6\u53d1\u3002"),(0,r.kt)("h3",o({},{id:"onpagenotfound-object"}),"onPageNotFound (Object)"),(0,r.kt)("p",null,"\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u65f6\u89e6\u53d1\u3002"),(0,r.kt)("h4",o({},{id:"\u53c2\u6570-1"}),"\u53c2\u6570"),(0,r.kt)("h5",o({},{id:"object"}),"Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u4e0d\u5b58\u5728\u9875\u9762\u7684\u8def\u5f84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"query"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u6253\u5f00\u4e0d\u5b58\u5728\u9875\u9762\u7684 query \u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"isEntryPage"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\u662f\u5426\u672c\u6b21\u542f\u52a8\u7684\u9996\u4e2a\u9875\u9762\uff08\u4f8b\u5982\u4ece\u5206\u4eab\u7b49\u5165\u53e3\u8fdb\u6765\uff0c\u9996\u4e2a\u9875\u9762\u662f\u5f00\u53d1\u8005\u914d\u7f6e\u7684\u5206\u4eab\u9875\u9762\uff09")))))}k.isMDXComponent=!0}}]);