"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[54814],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return p}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=l.createContext({}),u=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return l.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),k=u(n),p=r,h=k["".concat(c,".").concat(p)]||k[p]||d[p]||a;return n?l.createElement(h,o(o({ref:e},s),{},{components:n})):l.createElement(h,o({ref:e},s))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},56312:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Taro.canvasToTempFilePath(option, component)",sidebar_label:"canvasToTempFilePath"},i=void 0,c={unversionedId:"apis/canvas/canvasToTempFilePath",id:"version-3.x/apis/canvas/canvasToTempFilePath",title:"Taro.canvasToTempFilePath(option, component)",description:"Exports the content of the specified area of the current canvas to generate an image of the specified size. This method is called in the draw() callback to ensure the image is exported successfully.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/canvas/canvasToTempFilePath.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/canvasToTempFilePath",permalink:"/taro-docs/en/docs/apis/canvas/canvasToTempFilePath",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/canvas/canvasToTempFilePath.md",tags:[],version:"3.x",frontMatter:{title:"Taro.canvasToTempFilePath(option, component)",sidebar_label:"canvasToTempFilePath"},sidebar:"API",previous:{title:"createCanvasContext",permalink:"/taro-docs/en/docs/apis/canvas/createCanvasContext"},next:{title:"canvasPutImageData",permalink:"/taro-docs/en/docs/apis/canvas/canvasPutImageData"}},u={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"fileType",id:"filetype",level:3},{value:"CanvasProps",id:"canvasprops",level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",level:4},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],d={toc:s};function k(t){var{components:e}=t,n=a(t,["components"]);return(0,l.kt)("wrapper",r({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Exports the content of the specified area of the current canvas to generate an image of the specified size. This method is called in the ",(0,l.kt)("inlineCode",{parentName:"p"},"draw()")," callback to ensure the image is exported successfully."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/wx.canvasToTempFilePath.html"}),"Reference"))),(0,l.kt)("h2",r({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option, component?: Record<string, any>) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"canvas"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CanvasProps")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The canvas identifier, used when passing in ",(0,l.kt)("code",null,"canvas"),' component instances (canvas type="2d")')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"canvasId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The canvas ID, which is the canvas-id passed into the ",(0,l.kt)("code",null,"canvas")," component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"quality"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The image quality. This is only valid for .jpg images. Value range: (0, 1]. Values not in the range are processed as 1.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"destHeight"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The height of the output image.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"destWidth"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The width of the output image.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fileType"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"jpg" | "png"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"png"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The type of the destination file.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"height"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The height of the specified canvas area.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"width"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The width of the specified canvas area.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"x"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The x-coordinate of the top-left corner of the specified canvas area.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"y"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The y-coordinate of the top-left the corner of the specified canvas area.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: Result) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"tempFilePath"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"The temporary path of the generated file")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Call result")))),(0,l.kt)("h3",r({},{id:"filetype"}),"fileType"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"jpg"),(0,l.kt)("td",null,"A .jpg image")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"png"),(0,l.kt)("td",null,"A .png image")))),(0,l.kt)("h3",r({},{id:"canvasprops"}),"CanvasProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"type"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The type of the canvas. Only webGL is supported.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"canvasId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The unique identifier of the canvas component. This property can be ignored if a type is specified.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"disableScroll"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Disables screen scrolling and swipe-down-to-refresh features when the a finger taps to move on the canvas and a gesture event is bound.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onTouchStart"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Finger touch starts")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onTouchMove"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Finger moves after touch")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onTouchEnd"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Finger touch ends")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onTouchCancel"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Finger touch is interrupted by call reminder, pop-up window, etc.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onLongTap"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when a finger taps and holds on the screen for 500 ms. After this event is triggered, moving on the screen does not trigger screen scrolling.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onError"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CommonEventFunction<onErrorEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggers the error event when an error occurs. detail = ","{errMsg}")))),(0,l.kt)("h4",r({},{id:"onerroreventdetail"}),"onErrorEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string"))))),(0,l.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.canvasToTempFilePath({\n  x: 100,\n  y: 200,\n  width: 50,\n  height: 50,\n  destWidth: 100,\n  destHeight: 100,\n  canvasId: 'myCanvas',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")),(0,l.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.canvasToTempFilePath"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);