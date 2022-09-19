"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[82067],{79874:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var l=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=c(n),k=r,v=p["".concat(i,".").concat(k)]||p[k]||s[k]||o;return n?l.createElement(v,a(a({ref:t},d),{},{components:n})):l.createElement(v,a({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46085:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return d}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={title:"Taro.onBluetoothDeviceFound(callback)",sidebar_label:"onBluetoothDeviceFound"},u=void 0,i={unversionedId:"apis/device/bluetooth/onBluetoothDeviceFound",id:"version-3.x/apis/device/bluetooth/onBluetoothDeviceFound",title:"Taro.onBluetoothDeviceFound(callback)",description:"Listens on the new device discovery event.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/bluetooth/onBluetoothDeviceFound.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/onBluetoothDeviceFound",permalink:"/taro-docs/en/docs/apis/device/bluetooth/onBluetoothDeviceFound",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/device/bluetooth/onBluetoothDeviceFound.md",tags:[],version:"3.x",frontMatter:{title:"Taro.onBluetoothDeviceFound(callback)",sidebar_label:"onBluetoothDeviceFound"},sidebar:"API",previous:{title:"openBluetoothAdapter",permalink:"/taro-docs/en/docs/apis/device/bluetooth/openBluetoothAdapter"},next:{title:"onBluetoothAdapterStateChange",permalink:"/taro-docs/en/docs/apis/device/bluetooth/onBluetoothAdapterStateChange"}},c={},d=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Callback",id:"callback",level:3},{value:"CallbackResult",id:"callbackresult",level:3},{value:"CallbackResultBlueToothDevice",id:"callbackresultbluetoothdevice",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],s={toc:d};function p(e){var{components:t}=e,n=o(e,["components"]);return(0,l.kt)("wrapper",r({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Listens on the new device discovery event."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Notes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If a device is called back in ",(0,l.kt)("inlineCode",{parentName:"li"},"Taro.onBluetoothDeviceFound"),", this device is added to the array obtained by the ",(0,l.kt)("inlineCode",{parentName:"li"},"Taro.getBluetoothDevices")," API."),(0,l.kt)("li",{parentName:"ul"},"Some Android models require location permissions before they can discover devices. Be sure to grant location permissions in such cases.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html"}),"Reference"))),(0,l.kt)("h2",r({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,l.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,l.kt)("h3",r({},{id:"callback"}),"Callback"),(0,l.kt)("p",null,"The callback function for the new device discovery event."),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",r({},{id:"callbackresult"}),"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"devices"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResultBlueToothDevice[]")),(0,l.kt)("td",null,"The list of newly discovered devices")))),(0,l.kt)("h3",r({},{id:"callbackresultbluetoothdevice"}),"CallbackResultBlueToothDevice"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"RSSI"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"The signal strength of the current Bluetooth device")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"advertisData"),(0,l.kt)("td",null,(0,l.kt)("code",null,"ArrayBuffer")),(0,l.kt)("td",null,"The ManufacturerData field in the broadcast data field of the current Bluetooth device")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"advertisServiceUUIDs"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",null,"The ServiceUUIDs field in the broadcast data field of the current Bluetooth device")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"deviceId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Device ID")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"localName"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"The LocalName field in the broadcast data field of the current Bluetooth device")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"name"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"The name of the Bluetooth device. Some devices may not have a name.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"serviceData"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Record<string, any>")),(0,l.kt)("td",null,"The ServiceData field in the broadcast data field of the current Bluetooth device")))),(0,l.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"// Example of an ArrayBuffer converted to a hexadecimal string\nfunction ab2hex(buffer) {\n  var hexArr = Array.prototype.map.call(\n    new Uint8Array(buffer),\n    function(bit) {\n      return ('00' + bit.toString(16)).slice(-2)\n    }\n  )\n  return hexArr.join('');\n}\nTaro.onBluetoothDeviceFound(function (res) {\n  var devices = res.devices;\n  console.log('new device list has founded')\n  console.dir(devices)\n  console.log(ab2hex(devices[0].advertisData))\n})\n")),(0,l.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.onBluetoothDeviceFound"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);