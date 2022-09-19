"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[14652],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,v=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97278:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={title:"Taro.startBluetoothDevicesDiscovery(option)",sidebar_label:"startBluetoothDevicesDiscovery"},i=void 0,s={unversionedId:"apis/device/bluetooth/startBluetoothDevicesDiscovery",id:"apis/device/bluetooth/startBluetoothDevicesDiscovery",title:"Taro.startBluetoothDevicesDiscovery(option)",description:"Starts searching for nearby Bluetooth peripherals. This operation consumes a large amount of system resources. After searching for and connecting to a device, be sure to call the Taro.stopBluetoothDevicesDiscovery method to stop searching.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/bluetooth/startBluetoothDevicesDiscovery.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/startBluetoothDevicesDiscovery",permalink:"/taro-docs/en/docs/next/apis/device/bluetooth/startBluetoothDevicesDiscovery",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/bluetooth/startBluetoothDevicesDiscovery.md",tags:[],version:"current",frontMatter:{title:"Taro.startBluetoothDevicesDiscovery(option)",sidebar_label:"startBluetoothDevicesDiscovery"},sidebar:"API",previous:{title:"stopBluetoothDevicesDiscovery",permalink:"/taro-docs/en/docs/next/apis/device/bluetooth/stopBluetoothDevicesDiscovery"},next:{title:"openBluetoothAdapter",permalink:"/taro-docs/en/docs/next/apis/device/bluetooth/openBluetoothAdapter"}},c={},u=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Promised",id:"promised",level:3},{value:"Option",id:"option",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:u};function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Starts searching for nearby Bluetooth peripherals. ",(0,n.kt)("strong",{parentName:"p"},"This operation consumes a large amount of system resources. After searching for and connecting to a device, be sure to call the ",(0,n.kt)("inlineCode",{parentName:"strong"},"Taro.stopBluetoothDevicesDiscovery")," method to stop searching.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html"}),"Reference"))),(0,n.kt)("h2",o({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<Promised>\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",o({},{id:"promised"}),"Promised"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"success: ok; fail: error message.")))),(0,n.kt)("h3",o({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"allowDuplicatesKey"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Indicates whether a device can be reported multiple times. If yes, the ",(0,n.kt)("code",null,"Taro.onBlueToothDeviceFound")," method will report a device multiple times, but with different RSSI values.\u3002")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"interval"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The device reporting interval. 0 indicates new devices are immediately reported. Other values indicate devices are reported based on the specified interval.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"services"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string[]")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The list of primary service UUIDs of Bluetooth devices to be discovered. Some Bluetooth devices will broadcast their own primary service uuids. If this parameter is set, only Bluetooth devices with primary services corresponding to the uuids in the broadcast package are discovered. We recommend using this parameter to filter out nearby Bluetooth devices that are not needed.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h2",o({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"// For example, the primary service UUID of the smart Bluetooth light of the WeChat hardware platform is FEE7. When this parameter is provided, only the device with the primary service UUID of FEE7 is searched for.\nTaro.startBluetoothDevicesDiscovery({\n  services: ['FEE7'],\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,n.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.startBluetoothDevicesDiscovery"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);