"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[14578],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=l.createContext({}),i=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=i(t.components);return l.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=i(n),p=r,v=k["".concat(c,".").concat(p)]||k[p]||s[p]||o;return n?l.createElement(v,a(a({ref:e},d),{},{components:n})):l.createElement(v,a({ref:e},d))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=k;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var i=2;i<o;i++)a[i]=n[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},59917:function(t,e,n){n.r(e),n.d(e,{assets:function(){return i},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const a={title:"Taro.onBluetoothDeviceFound(callback)",sidebar_label:"onBluetoothDeviceFound"},u=void 0,c={unversionedId:"apis/device/bluetooth/onBluetoothDeviceFound",id:"version-2.x/apis/device/bluetooth/onBluetoothDeviceFound",title:"Taro.onBluetoothDeviceFound(callback)",description:"\u76d1\u542c\u5bfb\u627e\u5230\u65b0\u8bbe\u5907\u7684\u4e8b\u4ef6",source:"@site/versioned_docs/version-2.x/apis/device/bluetooth/onBluetoothDeviceFound.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/onBluetoothDeviceFound",permalink:"/taro-docs/docs/2.x/apis/device/bluetooth/onBluetoothDeviceFound",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/bluetooth/onBluetoothDeviceFound.md",tags:[],version:"2.x",frontMatter:{title:"Taro.onBluetoothDeviceFound(callback)",sidebar_label:"onBluetoothDeviceFound"},sidebar:"version-2.x/API",previous:{title:"openBluetoothAdapter",permalink:"/taro-docs/docs/2.x/apis/device/bluetooth/openBluetoothAdapter"},next:{title:"onBluetoothAdapterStateChange",permalink:"/taro-docs/docs/2.x/apis/device/bluetooth/onBluetoothAdapterStateChange"}},i={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Callback",id:"callback",level:3},{value:"CallbackResult",id:"callbackresult",level:3},{value:"CallbackResultBlueToothDevice",id:"callbackresultbluetoothdevice",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:d};function k(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)("wrapper",r({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76d1\u542c\u5bfb\u627e\u5230\u65b0\u8bbe\u5907\u7684\u4e8b\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u82e5\u5728 Taro.onBluetoothDeviceFound \u56de\u8c03\u4e86\u67d0\u4e2a\u8bbe\u5907\uff0c\u5219\u6b64\u8bbe\u5907\u4f1a\u6dfb\u52a0\u5230 Taro.getBluetoothDevices \u63a5\u53e3\u83b7\u53d6\u5230\u7684\u6570\u7ec4\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u5353\u4e0b\u90e8\u5206\u673a\u578b\u9700\u8981\u6709\u4f4d\u7f6e\u6743\u9650\u624d\u80fd\u641c\u7d22\u5230\u8bbe\u5907\uff0c\u9700\u7559\u610f\u662f\u5426\u5f00\u542f\u4e86\u4f4d\u7f6e\u6743\u9650")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,l.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,l.kt)("h3",r({},{id:"callback"}),"Callback"),(0,l.kt)("p",null,"\u5bfb\u627e\u5230\u65b0\u8bbe\u5907\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",r({},{id:"callbackresult"}),"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"devices"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResultBlueToothDevice[]")),(0,l.kt)("td",null,"\u65b0\u641c\u7d22\u5230\u7684\u8bbe\u5907\u5217\u8868")))),(0,l.kt)("h3",r({},{id:"callbackresultbluetoothdevice"}),"CallbackResultBlueToothDevice"),(0,l.kt)("p",null,"\u65b0\u641c\u7d22\u5230\u7684\u8bbe\u5907"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"RSSI"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u4fe1\u53f7\u5f3a\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"advertisData"),(0,l.kt)("td",null,(0,l.kt)("code",null,"ArrayBuffer")),(0,l.kt)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ManufacturerData \u6570\u636e\u6bb5\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"advertisServiceUUIDs"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ServiceUUIDs \u6570\u636e\u6bb5")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"deviceId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u7528\u4e8e\u533a\u5206\u8bbe\u5907\u7684 id")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"localName"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 LocalName \u6570\u636e\u6bb5")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"name"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u84dd\u7259\u8bbe\u5907\u540d\u79f0\uff0c\u67d0\u4e9b\u8bbe\u5907\u53ef\u80fd\u6ca1\u6709")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"serviceData"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Record<string, any>")),(0,l.kt)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ServiceData \u6570\u636e\u6bb5")))),(0,l.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"// ArrayBuffer\u8f6c16\u8fdb\u5ea6\u5b57\u7b26\u4e32\u793a\u4f8b\nfunction ab2hex(buffer) {\n  var hexArr = Array.prototype.map.call(\n    new Uint8Array(buffer),\n    function(bit) {\n      return ('00' + bit.toString(16)).slice(-2)\n    }\n  )\n  return hexArr.join('');\n}\nTaro.onBluetoothDeviceFound(function (res) {\n  var devices = res.devices;\n  console.log('new device list has founded')\n  console.dir(devices)\n  console.log(ab2hex(devices[0].advertisData))\n})\n")),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.onBluetoothDeviceFound"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);