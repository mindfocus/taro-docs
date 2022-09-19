"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[11392],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62697:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"\u8def\u7531\u529f\u80fd"},p=void 0,c={unversionedId:"router",id:"version-2.x/router",title:"\u8def\u7531\u529f\u80fd",description:"\u8def\u7531 API \u8bf4\u660e",source:"@site/versioned_docs/version-2.x/router.md",sourceDirName:".",slug:"/router",permalink:"/taro-docs/en/docs/2.x/router",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/router.md",tags:[],version:"2.x",frontMatter:{title:"\u8def\u7531\u529f\u80fd"},sidebar:"version-2.x/docs",previous:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/taro-docs/en/docs/2.x/best-practice"},next:{title:"\u8bbe\u8ba1\u7a3f\u53ca\u5c3a\u5bf8\u5355\u4f4d",permalink:"/taro-docs/en/docs/2.x/size"}},l={},u=[{value:"\u8def\u7531 API \u8bf4\u660e",id:"\u8def\u7531-api-\u8bf4\u660e",level:2},{value:"\u8def\u7531\u4f20\u53c2",id:"\u8def\u7531\u4f20\u53c2",level:2}],s={toc:u};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"\u8def\u7531-api-\u8bf4\u660e"}),"\u8def\u7531 API \u8bf4\u660e"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Taro")," \u4e2d\uff0c\u8def\u7531\u529f\u80fd\u662f\u9ed8\u8ba4\u81ea\u5e26\u7684\uff0c\u4e0d\u9700\u8981\u5f00\u53d1\u8005\u8fdb\u884c\u989d\u5916\u7684\u8def\u7531\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u5728\u5165\u53e3\u6587\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," \u914d\u7f6e\u4e2d\u6307\u5b9a\u597d ",(0,r.kt)("inlineCode",{parentName:"p"},"pages"),"\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"Taro")," \u63d0\u4f9b\u7684 API \u6765\u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// \u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\uff0c\u6253\u5f00\u65b0\u9875\u9762\nTaro.navigateTo({\n  url: '/pages/page/path/name'\n})\n\n// \u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\uff0c\u5728\u5f53\u524d\u9875\u9762\u6253\u5f00\nTaro.redirectTo({\n  url: '/pages/page/path/name'\n})\n")),(0,r.kt)("p",null,"\u5177\u4f53 API \u8bf4\u660e\uff0c\u8bf7\u67e5\u770b",(0,r.kt)("a",o({parentName:"p"},{href:"/taro-docs/en/docs/2.x/apis/route/navigateTo"}),"\u5bfc\u822a"),"\u90e8\u5206\u8bf4\u660e\u3002"),(0,r.kt)("h2",o({},{id:"\u8def\u7531\u4f20\u53c2"}),"\u8def\u7531\u4f20\u53c2"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728\u6240\u6709\u8df3\u8f6c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," \u540e\u9762\u6dfb\u52a0\u67e5\u8be2\u5b57\u7b26\u4e32\u53c2\u6570\u8fdb\u884c\u8df3\u8f6c\u4f20\u53c2\uff0c\u4f8b\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// \u4f20\u5165\u53c2\u6570 id=2&type=test\nTaro.navigateTo({\n  url: '/pages/page/path/name?id=2&type=test'\n})\n\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u7684\u8bdd\uff0c\u5728\u8df3\u8f6c\u6210\u529f\u7684\u76ee\u6807\u9875\u7684",(0,r.kt)("strong",{parentName:"p"},"\u751f\u547d\u5468\u671f"),"\u65b9\u6cd5\u91cc\u5c31\u80fd\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.$router.params")," \u83b7\u53d6\u5230\u4f20\u5165\u7684\u53c2\u6570\uff0c\u4f8b\u5982\u4e0a\u8ff0\u8df3\u8f6c\uff0c\u5728\u76ee\u6807\u9875\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"componentWillMount")," \u751f\u547d\u5468\u671f\u91cc\u83b7\u53d6\u5165\u53c2"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"class C extends Taro.Component {\n  componentWillMount () {\n    console.log(this.$router.params) // \u8f93\u51fa { id: '2', type: 'test' }\n  }\n}\n")))}f.isMDXComponent=!0}}]);