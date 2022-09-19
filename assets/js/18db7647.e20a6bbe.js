"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[4593],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),v=s(n),h=a,m=v["".concat(i,".").concat(h)]||v[h]||p[h]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=v;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},92985:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(93106),a=n(4706),l="tabItem_hkNs";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},12959:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(93106),a=n(4706),l=n(57293),o=n(23744),c=n(76741),i=n(33696),s="tabList_HZIO",u="tabItem_bO0X";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function v(e){var t;const{lazy:n,block:l,defaultValue:v,values:h,groupId:m,className:d}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=h?h:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,o.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const k=null===v?v:null!==(y=null!=v?v:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:f[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:E}=(0,c.U)(),[O,T]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:z}=(0,i.o5)();if(null!=m){const e=w[m];null!=e&&e!==O&&g.some((t=>t.value===e))&&T(e)}const M=e=>{const t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==O&&(z(t),T(r),null!=m&&E(m,String(r)))},N=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;var n;t=null!==(n=x[r])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;var r;t=null!==(r=x[n])&&void 0!==r?r:x[x.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},d)},g.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:N,onFocus:M,onClick:M},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function h(e){const t=(0,l.Z)();return r.createElement(v,p({key:String(t)},e))}},63287:function(e,t,n){n.d(t,{gQ:function(){return c},hn:function(){return a},p6:function(){return l}});var r=n(93106);const a=()=>r.createElement("span",{className:"footer_link_connect_wrap"},r.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",r.createElement("span",{className:"wechat_qrcode_icon"},r.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},r.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),r.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),r.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),r.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),r.createElement("span",{className:"footer_link_wechat_img inline"},r.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})));function l(){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),r.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),r.createElement("span",{style:{color:o}},"Vue"))}const o="#4fc08d";function c(){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),r.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),r.createElement("span",{style:{color:"#61dafb"}},"React"))}},49070:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});n(93106);var r=n(79874),a=n(12959),l=n(92985),o=n(63287);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"\u8def\u7531\u529f\u80fd"},u=void 0,p={unversionedId:"router",id:"version-3.x/router",title:"\u8def\u7531\u529f\u80fd",description:"\u672c\u7bc7\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u914d\u7f6e\u8def\u7531\u3001\u5b9e\u73b0\u8def\u7531\u8df3\u8f6c\u548c\u4f20\u53c2\u7b49\u65b9\u6cd5\u3002",source:"@site/versioned_docs/version-3.x/router.mdx",sourceDirName:".",slug:"/router",permalink:"/taro-docs/docs/router",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/router.mdx",tags:[],version:"3.x",frontMatter:{title:"\u8def\u7531\u529f\u80fd"},sidebar:"docs",previous:{title:"Vue DevTools",permalink:"/taro-docs/docs/vue-devtools"},next:{title:"\u9759\u6001\u8d44\u6e90\u5f15\u7528",permalink:"/taro-docs/docs/static-reference"}},v={},h=[{value:"\u8def\u7531\u914d\u7f6e",id:"\u8def\u7531\u914d\u7f6e",level:2},{value:"\u8def\u7531\u8df3\u8f6c",id:"\u8def\u7531\u8df3\u8f6c",level:2},{value:"\u8def\u7531\u4f20\u53c2",id:"\u8def\u7531\u4f20\u53c2",level:3},{value:"\u83b7\u53d6\u8def\u7531\u53c2\u6570",id:"\u83b7\u53d6\u8def\u7531\u53c2\u6570",level:3},{value:"H5",id:"h5",level:2}],m={toc:h};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",c({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc7\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u914d\u7f6e\u8def\u7531\u3001\u5b9e\u73b0\u8def\u7531\u8df3\u8f6c\u548c\u4f20\u53c2\u7b49\u65b9\u6cd5\u3002"),(0,r.kt)("h2",c({},{id:"\u8def\u7531\u914d\u7f6e"}),"\u8def\u7531\u914d\u7f6e"),(0,r.kt)("p",null,"Taro \u9075\u5faa\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u8def\u7531\u89c4\u8303\u3002\u53ea\u9700\u8981\u4fee\u6539\u5168\u5c40\u914d\u7f6e\u7684 ",(0,r.kt)("a",c({parentName:"p"},{href:"app-config#pages"}),"pages")," \u5c5e\u6027\uff0c\u914d\u7f6e\u4e3a Taro \u5e94\u7528\u4e2d\u6bcf\u4e2a\u9875\u9762\u7684\u8def\u5f84\u5373\u53ef\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Taro \u6ca1\u6709\u5b9e\u73b0\u6d4f\u89c8\u5668\u7684 history API\uff0c\u56e0\u6b64\u4e0d\u80fd\u4f7f\u7528 react-router\u3001vue-router \u7b49\u8def\u7531\u5e93\u3002")),(0,r.kt)("h2",c({},{id:"\u8def\u7531\u8df3\u8f6c"}),"\u8def\u7531\u8df3\u8f6c"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 Taro \u63d0\u4f9b\u7684 API \u6765\u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\u3002\u8def\u7531 API \u7684\u8be6\u7ec6\u7528\u6cd5\u8bf7\u67e5\u770b API \u6587\u6863\u7684 ",(0,r.kt)("a",c({parentName:"p"},{href:"./apis/route/navigateTo"}),"\u5bfc\u822a")," \u7ae0\u8282\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"// \u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\uff0c\u6253\u5f00\u65b0\u9875\u9762\nTaro.navigateTo({\n  url: '/pages/page/path/name'\n})\n\n// \u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\uff0c\u5728\u5f53\u524d\u9875\u9762\u6253\u5f00\nTaro.redirectTo({\n  url: '/pages/page/path/name'\n})\n")),(0,r.kt)("h3",c({},{id:"\u8def\u7531\u4f20\u53c2"}),"\u8def\u7531\u4f20\u53c2"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728\u6240\u6709\u8df3\u8f6c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," \u540e\u9762\u6dfb\u52a0\u67e5\u8be2\u5b57\u7b26\u4e32\u53c2\u6570\u8fdb\u884c\u8df3\u8f6c\u4f20\u53c2\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"// \u4f20\u5165\u53c2\u6570 id=2&type=test\nTaro.navigateTo({\n  url: '/pages/page/path/name?id=2&type=test'\n})\n")),(0,r.kt)("h3",c({},{id:"\u83b7\u53d6\u8def\u7531\u53c2\u6570"}),"\u83b7\u53d6\u8def\u7531\u53c2\u6570"),(0,r.kt)("p",null,"\u8df3\u8f6c\u6210\u529f\u540e\uff0c\u5728\u76ee\u6807\u9875\u9762\u7684",(0,r.kt)("strong",{parentName:"p"},"\u751f\u547d\u5468\u671f"),"\u65b9\u6cd5\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.getCurrentInstance().router.params")," \u83b7\u53d6\u8def\u7531\u53c2\u6570\u3002"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:(0,r.kt)(o.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,r.kt)(o.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import React, { Component } from 'react'\nimport { View } from '@tarojs/components'\n\nclass Index extends Component {\n  // \u5efa\u8bae\u5728\u9875\u9762\u521d\u59cb\u5316\u65f6\u628a getCurrentInstance() \u7684\u7ed3\u679c\u4fdd\u5b58\u4e0b\u6765\u4f9b\u540e\u9762\u4f7f\u7528\uff0c\n  // \u800c\u4e0d\u662f\u9891\u7e41\u5730\u8c03\u7528\u6b64 API\n  $instance = getCurrentInstance()\n\n  componentDidMount () {\n    // \u83b7\u53d6\u8def\u7531\u53c2\u6570\n    console.log(this.$instance.router.params) // \u8f93\u51fa { id: 2, type: 'test' }\n  }\n\n  render () {\n    return (\n      <View className='index' />\n    )\n  }\n}\n\nexport default Index\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<template>\n  <view className='index' />\n</template>\n\n<script>\nimport Taro from '@tarojs/taro'\n\nexport default {\n  created () {\n    // \u5efa\u8bae\u5728\u9875\u9762\u521d\u59cb\u5316\u65f6\u628a getCurrentInstance() \u7684\u7ed3\u679c\u4fdd\u5b58\u4e0b\u6765\u4f9b\u540e\u9762\u4f7f\u7528\uff0c\n    // \u800c\u4e0d\u662f\u9891\u7e41\u5730\u8c03\u7528\u6b64 API\n    this.$instance = Taro.getCurrentInstance()\n  },\n  mounted () {\n    // \u83b7\u53d6\u8def\u7531\u53c2\u6570\n    console.log(this.$instance.router.params) // \u8f93\u51fa { id: 2, type: 'test' }\n  }\n}\n<\/script>\n")))),(0,r.kt)("h2",c({},{id:"h5"}),"H5"),(0,r.kt)("p",null,"H5 \u8def\u7531\u8fd8\u652f\u6301\u8bbe\u7f6e\u8def\u7531\u6a21\u5f0f\u3001\u8bbe\u7f6e basename\u3001\u8def\u7531\u5b88\u536b\u7b49\u80fd\u529b\uff0c\u8be6\u60c5\u8bf7\u770b ",(0,r.kt)("a",c({parentName:"p"},{href:"./h5#%E8%B7%AF%E7%94%B1"}),"Taro H5 \u6587\u6863"),"\u3002"))}d.isMDXComponent=!0}}]);