"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[10969],{79874:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48273:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Template"},o=void 0,p={unversionedId:"platform-plugin-template",id:"version-3.x/platform-plugin-template",title:"Template",description:"Taro3 renders the view by stitching the data from the DOM tree with setData, which drives the template (``).",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/platform-plugin-template.md",sourceDirName:".",slug:"/platform-plugin-template",permalink:"/taro-docs/en/docs/platform-plugin-template",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/platform-plugin-template.md",tags:[],version:"3.x",frontMatter:{title:"Template"},sidebar:"docs",previous:{title:"TaroPlatformBase",permalink:"/taro-docs/en/docs/platform-plugin-base"},next:{title:"Reconciler",permalink:"/taro-docs/en/docs/platform-plugin-reconciler"}},s={},m=[{value:"Recursive and non-recursive templates",id:"recursive-and-non-recursive-templates",level:2},{value:"Recursive Template",id:"recursive-template",level:3},{value:"Non-recursive Templates",id:"non-recursive-templates",level:3},{value:"Template Base Classes",id:"template-base-classes",level:2},{value:"this.Adapter",id:"thisadapter",level:3},{value:"this.isSupportRecursive",id:"thisissupportrecursive",level:3},{value:"this.supportXS",id:"thissupportxs",level:3},{value:"this.exportExpr",id:"thisexportexpr",level:3},{value:"this.internalComponents",id:"thisinternalcomponents",level:3},{value:"this.focusComponents",id:"thisfocuscomponents",level:3},{value:"this.voidElements",id:"thisvoidelements",level:3},{value:"this.nestElements",id:"thisnestelements",level:3},{value:"replacePropName (name, value, componentName)",id:"replacepropname-name-value-componentname",level:3},{value:"buildXsTemplate ()",id:"buildxstemplate-",level:3},{value:"modifyLoopBody (child, nodeName)",id:"modifyloopbody-child-nodename",level:3},{value:"modifyLoopContainer (children, nodeName)",id:"modifyloopcontainer-children-nodename",level:3},{value:"modifyTemplateResult (res, nodeName, level, children)",id:"modifytemplateresult-res-nodename-level-children",level:3},{value:"getAttrValue (value, key, nodeName)",id:"getattrvalue-value-key-nodename",level:3},{value:"Examples",id:"examples",level:2},{value:"ByteDance Mini Program Template",id:"bytedance-mini-program-template",level:3},{value:"WeChat  Mini Program Template",id:"wechat--mini-program-template",level:3}],d={toc:m};function c(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Taro3 renders the view by stitching the data from the DOM tree with ",(0,a.kt)("inlineCode",{parentName:"p"},"setData"),", which drives the template (",(0,a.kt)("inlineCode",{parentName:"p"},"<template>"),")."),(0,a.kt)("p",null,"So developers can see that the compiled code has a simple page template file that just references the public template ",(0,a.kt)("inlineCode",{parentName:"p"},"base.xml"),", where all component templates are declared."),(0,a.kt)("p",null,"We can create a template class that controls the compiled result of the ",(0,a.kt)("inlineCode",{parentName:"p"},"base")," template."),(0,a.kt)("h2",r({},{id:"recursive-and-non-recursive-templates"}),"Recursive and non-recursive templates"),(0,a.kt)("p",null,"We have encapsulated the template related processing logic into base classes. These are the ",(0,a.kt)("inlineCode",{parentName:"p"},"RecursiveTemplate")," class for mini program that ",(0,a.kt)("strong",{parentName:"p"},"support template recursion"),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnRecursiveTemplate")," class for mini program that ",(0,a.kt)("strong",{parentName:"p"},"do not support template recursion"),"."),(0,a.kt)("h3",r({},{id:"recursive-template"}),"Recursive Template"),(0,a.kt)("p",null,"In the mini program that support template recursion, the same template is able to keep calling itself, including Alipay, ByteDance, and Baidu mini program."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"view_0")," references ",(0,a.kt)("inlineCode",{parentName:"p"},"container_0"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"container_0")," then reference ",(0,a.kt)("inlineCode",{parentName:"p"},"view_0"),"\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",r({parentName:"p"},{src:"https://storage.jd.com/cjj-pub-images/recursive_temp.png",alt:null}))),(0,a.kt)("h3",r({},{id:"non-recursive-templates"}),"Non-recursive Templates"),(0,a.kt)("p",null,"In mini program that do not support template recursion, the referenced template cannot call itself again, including WeChat, QQ, and Jingdong mini programs."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"view_0")," references ",(0,a.kt)("inlineCode",{parentName:"p"},"container_0"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"container_0")," can not references ",(0,a.kt)("inlineCode",{parentName:"p"},"view_0"),"\uff0conly references new  ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," template ",(0,a.kt)("inlineCode",{parentName:"p"},"view_1"),"\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",r({parentName:"p"},{src:"https://storage.jd.com/cjj-pub-images/unrecursive_temp.png",alt:null}))),(0,a.kt)("h2",r({},{id:"template-base-classes"}),"Template Base Classes"),(0,a.kt)("h3",r({},{id:"thisadapter"}),"this.Adapter"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"The platform's template syntax keywords."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// Declared Adapter for WeChat mini program template syntax keywords\nclass Template extends UnRecursiveTemplate {\n  Adapter = {\n    if: 'wx:if',\n    else: 'wx:else',\n    elseif: 'wx:elif',\n    for: 'wx:for',\n    forItem: 'wx:for-item',\n    forIndex: 'wx:for-index',\n    key: 'wx:key',\n    xs: 'wxs',\n    type: 'weapp'\n  }\n}\n")),(0,a.kt)("h3",r({},{id:"thisissupportrecursive"}),"this.isSupportRecursive"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Readonly, if or not template recursion is supported."),(0,a.kt)("h3",r({},{id:"thissupportxs"}),"this.supportXS"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Default value: false"),(0,a.kt)("p",null,"Whether to support rendering layer scripts, such as wxs for WeChat mini program, sjs for Alipay mini program."),(0,a.kt)("h3",r({},{id:"thisexportexpr"}),"this.exportExpr"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Default value: 'module.exports ='"),(0,a.kt)("p",null,"Export command for rendering layer scripts."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// The export command for Alipay mini program sjs scripts is ES mode\nclass Template extends RecursiveTemplate {\n  exportExpr = 'export default'\n}\n")),(0,a.kt)("h3",r({},{id:"thisinternalcomponents"}),"this.internalComponents"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"The list of Taro built-in components, including relatively generic components and some of their generic properties."),(0,a.kt)("h3",r({},{id:"thisfocuscomponents"}),"this.focusComponents"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,a.kt)("p",null,"The component that can set focus."),(0,a.kt)("p",null,"Default value:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"focusComponents = new Set([\n  'input',\n  'textarea',\n  'editor'\n])\n")),(0,a.kt)("h3",r({},{id:"thisvoidelements"}),"this.voidElements"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,a.kt)("p",null,"Elements that do not need to render child nodes. These components do not render child nodes after configuration and can reduce the template size."),(0,a.kt)("p",null,"Default value:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"voidElements = new Set([\n  'progress',\n  'icon',\n  'rich-text',\n  'input',\n  'textarea',\n  'slider',\n  'switch',\n  'audio',\n  'live-pusher',\n  'video',\n  'ad',\n  'official-account',\n  'open-data',\n  'navigation-bar'\n])\n")),(0,a.kt)("h3",r({},{id:"thisnestelements"}),"this.nestElements"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Map<string, number>")),(0,a.kt)("p",null,"For an mini program, only some components have the possibility to recursively call themselves. For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Map>")," component will not call ",(0,a.kt)("inlineCode",{parentName:"p"},"<Map>")," again, while ",(0,a.kt)("inlineCode",{parentName:"p"},"<View>")," can keep calling ",(0,a.kt)("inlineCode",{parentName:"p"},"<View>")," recursively."),(0,a.kt)("p",null,"If this mini program does not support recursion and we render the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Map>")," template N times in a loop, then the mini program will get bigger and the templates that come out of the loop are unnecessary. So ",(0,a.kt)("inlineCode",{parentName:"p"},"nestElements")," is used to mark components that may be called recursively."),(0,a.kt)("p",null,"But considering that components such as ",(0,a.kt)("inlineCode",{parentName:"p"},"<Form>")," are not called recursively too many times, even though they may be called recursively. So in ",(0,a.kt)("inlineCode",{parentName:"p"},"nestElements")," you can control the number of times it is rendered recursively, assuming that ",(0,a.kt)("inlineCode",{parentName:"p"},"<Form>")," will not be called recursively more than N times, further reducing the size of the template."),(0,a.kt)("p",null,"Default value:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"nestElements = new Map([\n  ['view', -1],\n  ['cover-view', -1],\n  ['block', -1],\n  ['text', -1],\n  ['slot', 8],\n  ['slot-view', 8],\n  ['label', 6],\n  ['form', 4],\n  ['scroll-view', 4]\n])\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," value is the component that can recursively call itself."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," value represents the number of times this component has been recursively generated, ",(0,a.kt)("strong",{parentName:"p"},"-1")," represents the loop ",(0,a.kt)("a",r({parentName:"p"},{href:"./config-detail#minibaselevel"}),"baseLevel")," level."),(0,a.kt)("h3",r({},{id:"replacepropname-name-value-componentname"}),"replacePropName (name, value, componentName)"),(0,a.kt)("p",null,"Replaces the attribute name of the component."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"name"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Property Name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"value"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Property Value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"componetName"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Component Name")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"replacePropName (name, value, componentName) {\n  // If the property value is 'eh', which means this is an event, change the property name to all lowercase.\n  if (value === 'eh') return name.toLowerCase()\n  return name\n}\n")),(0,a.kt)("h3",r({},{id:"buildxstemplate-"}),"buildXsTemplate ()"),(0,a.kt)("p",null,"For mini program that support rendering layer scripts, Taro will generate a utils script in the root directory. This function needs to be declared at this point to set the syntax of the reference to the utils script in the base template."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),'// WeChat mini program base template references utils.wxs script\nbuildXsTemplate () {\n  return \'<wxs module="xs" src="./utils.wxs" />\'\n}\n')),(0,a.kt)("h3",r({},{id:"modifyloopbody-child-nodename"}),"modifyLoopBody (child, nodeName)"),(0,a.kt)("p",null,"Modify the sub-node loop body of the component template."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"child"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Subnode loop body of the component template")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"nodeName"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Component name")))),(0,a.kt)("p",null,"Components not declared in ",(0,a.kt)("a",r({parentName:"p"},{href:"./platform-plugin-template#thisvoidelements"}),"this.voidElements"),", components that have not been declared in ","[this.voidElements]"," (.../platform-plugin-template#thisvoidelements) will traverse the child nodes for rendering."),(0,a.kt)("p",null,"The generic format of the template for these components:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<template name="tmpl_0_view">\n  <view>\n    \x3c!-- Child node loop begin --\x3e\n    <block wx:for="{{i.cn}}" wx:key="uid">\n      \x3c!-- Child node loop body begin --\x3e\n      <template is="{{...}}" data="{{...}}" />\n      \x3c!-- Child node loop body end --\x3e\n    </block>\n    \x3c!-- Child node loop end --\x3e\n  </view>\n</template>\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),'// In the <swiper> component of the Alipay mini program, the loop body has a layer of <swiper-item> and <view> components\nmodifyLoopBody (child, nodeName) {\n  if (nodeName === \'swiper\') {\n    return `<swiper-item>\n      <view a:for="{{item.cn}}" a:key="id">\n        ${child}\n      </view>\n    </swiper-item>`\n  }\n  return child\n}\n')),(0,a.kt)("h3",r({},{id:"modifyloopcontainer-children-nodename"}),"modifyLoopContainer (children, nodeName)"),(0,a.kt)("p",null,"Modifies the child node loop of a component template"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"children"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Child node loop for component templates")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"nodeName"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Component Name")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// In the <picker> component of the Alipay mini program, the child node loops over one layer of the <view> component\nmodifyLoopContainer (children, nodeName) {\n  if (nodeName === 'picker') {\n    return `\n<view>${children}</view>\n`\n  }\n  return children\n}\n")),(0,a.kt)("h3",r({},{id:"modifytemplateresult-res-nodename-level-children"}),"modifyTemplateResult (res, nodeName, level, children)"),(0,a.kt)("p",null,"Modifies the final result of the component template."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"res"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"The result of the component template")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"nodeName"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Component Name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"level"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Loop Hierarchy")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"children"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Subnode loop for component templates")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// Alipay mini program does not render the <swiper-item> component template when it encounters it\nmodifyTemplateResult = (res: string, nodeName: string) => {\n  if (nodeName === 'swiper-item') return ''\n  return res\n}\n")),(0,a.kt)("h3",r({},{id:"getattrvalue-value-key-nodename"}),"getAttrValue (value, key, nodeName)"),(0,a.kt)("p",null,"Sets the component's property binding syntax."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"value"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Property value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"key"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Property name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"nodeName"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"left"}),"Component name")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"getAttrValue (value, key, nodeName) {\n  const swanSpecialAttrs = {\n    'scroll-view': ['scrollTop', 'scrollLeft', 'scrollIntoView']\n  }\n\n  // The property binding syntax for some properties of the scroll-view component in Baidu mini program is: {= value =}\n  if (isArray(swanSpecialAttrs[nodeName]) && swanSpecialAttrs[nodeName].includes(key)) {\n    return `= ${value} =`\n  }\n\n  // The rest of the properties still use the {{ value }} binding syntax\n  return `{ ${value} }`\n}\n")),(0,a.kt)("h2",r({},{id:"examples"}),"Examples"),(0,a.kt)("h3",r({},{id:"bytedance-mini-program-template"}),"ByteDance Mini Program Template"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The header mini program supports template recursion, so it inherits the ",(0,a.kt)("inlineCode",{parentName:"p"},"RecursiveTemplate")," base class.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Since you don't need to adjust the template content, you only need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"supportXS")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Adapter")," properties."))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"import { RecursiveTemplate } from '@tarojs/shared/dist/template''\n\nexport class Template extends RecursiveTemplate {\n  supportXS = false\n  Adapter = {\n    if: 'tt:if',\n    else: 'tt:else',\n    elseif: 'tt:elif',\n    for: 'tt:for',\n    forItem: 'tt:for-item',\n    forIndex: 'tt:for-index',\n    key: 'tt:key',\n    type: 'tt'\n  }\n}\n")),(0,a.kt)("h3",r({},{id:"wechat--mini-program-template"}),"WeChat  Mini Program Template"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WeChat mini program does not support template recursion, so it inherits the ",(0,a.kt)("inlineCode",{parentName:"li"},"UnRecursiveTemplate")," base class."),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"supportXS")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Adapter")," properties."),(0,a.kt)("li",{parentName:"ul"},"Since WeChat mini program support rendering layer scripts ",(0,a.kt)("inlineCode",{parentName:"li"},"wxs"),", set the reference syntax for utils scripts in base templates via ",(0,a.kt)("inlineCode",{parentName:"li"},"buildXsTemplate"),"."),(0,a.kt)("li",{parentName:"ul"},"Modified the attribute name of the component binding with ",(0,a.kt)("inlineCode",{parentName:"li"},"replacePropName"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"import { UnRecursiveTemplate } from '@tarojs/shared'\n\nexport class Template extends UnRecursiveTemplate {\n  supportXS = true\n  Adapter = {\n    if: 'wx:if',\n    else: 'wx:else',\n    elseif: 'wx:elif',\n    for: 'wx:for',\n    forItem: 'wx:for-item',\n    forIndex: 'wx:for-index',\n    key: 'wx:key',\n    xs: 'wxs',\n    type: 'weapp'\n  }\n\n  buildXsTemplate () {\n    return '<wxs module=\"xs\" src=\"./utils.wxs\" />'\n  }\n\n  replacePropName (name, value, componentName) {\n    if (value === 'eh') {\n      const nameLowerCase = name.toLowerCase()\n      if (nameLowerCase === 'bindlongtap' && componentName !== 'canvas') return 'bindlongpress'\n      return nameLowerCase\n    }\n    return name\n  }\n}\n")))}c.isMDXComponent=!0}}]);