"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[72816],{79874:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(93106);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(a),c=r,g=k["".concat(o,".").concat(c)]||k[c]||f[c]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},61518:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={title:"Reconciler"},p=void 0,o={unversionedId:"platform-plugin-reconciler",id:"version-3.x/platform-plugin-reconciler",title:"Reconciler",description:"Taro's runtime includes DOM, BOM, React-compatible layer, Vue-compatible layer, etc., and different platforms or development frameworks may require intrusive customization of the Taro runtime.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/platform-plugin-reconciler.md",sourceDirName:".",slug:"/platform-plugin-reconciler",permalink:"/taro-docs/en/docs/platform-plugin-reconciler",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/platform-plugin-reconciler.md",tags:[],version:"3.x",frontMatter:{title:"Reconciler"},sidebar:"docs",previous:{title:"Template",permalink:"/taro-docs/en/docs/platform-plugin-template"},next:{title:"\u7b2c\u4e09\u65b9\u5de5\u5177",permalink:"/taro-docs/en/docs/external-libraries"}},d={},m=[{value:"hostConfig Configuration",id:"hostconfig-configuration",level:2},{value:"appendChild (parent, child)",id:"appendchild-parent-child",level:3},{value:"removeChild (parent, child, oldChild)",id:"removechild-parent-child-oldchild",level:3},{value:"insertBefore (parent, child, refChild)",id:"insertbefore-parent-child-refchild",level:3},{value:"removeAttribute (element, qualifiedName)",id:"removeattribute-element-qualifiedname",level:3},{value:"setAttribute (element, qualifiedName, value)",id:"setattribute-element-qualifiedname-value",level:3},{value:"prepareUpdateData (data, page)",id:"prepareupdatedata-data-page",level:3},{value:"appendInitialPage (data, page)",id:"appendinitialpage-data-page",level:3},{value:"getLifecyle (instance, lifecyle)",id:"getlifecyle-instance-lifecyle",level:3},{value:"onTaroElementCreate (tagName, nodeType)",id:"ontaroelementcreate-tagname-nodetype",level:3},{value:"getPathIndex (indexOfNode)",id:"getpathindex-indexofnode",level:3},{value:"getEventCenter(Events)",id:"geteventcenterevents",level:3},{value:"initNativeApi (taro)",id:"initnativeapi-taro",level:3}],f={toc:m};function k(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Taro's runtime includes DOM, BOM, React-compatible layer, Vue-compatible layer, etc., and different platforms or development frameworks may require intrusive customization of the Taro runtime."),(0,n.kt)("p",null,"To decouple, we refer to the concept of ",(0,n.kt)("strong",{parentName:"p"},"React Reconciler"),", where the runtime can be customized externally by providing a custom ",(0,n.kt)("inlineCode",{parentName:"p"},"hostConfig")," configuration object."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In case the configuration items of hostConfig do not meet the requirements and need to be extended, you can submit a PR to Taro ~")),(0,n.kt)("h2",r({},{id:"hostconfig-configuration"}),"hostConfig Configuration"),(0,n.kt)("h3",r({},{id:"appendchild-parent-child"}),"appendChild (parent, child)"),(0,n.kt)("p",null,"Triggered when ",(0,n.kt)("inlineCode",{parentName:"p"},"DOMNode")," calls ",(0,n.kt)("inlineCode",{parentName:"p"},"appendChild")," method."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"parent"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Parent node")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"child"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Nodes appended to the parent node")))),(0,n.kt)("h3",r({},{id:"removechild-parent-child-oldchild"}),"removeChild (parent, child, oldChild)"),(0,n.kt)("p",null,"Triggered when ",(0,n.kt)("inlineCode",{parentName:"p"},"DOMNode")," calls ",(0,n.kt)("inlineCode",{parentName:"p"},"replaceChild")," method."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"parent"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Parent node")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"child"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Replace the oldChild with a new node")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"oldChild"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Replaced original nodes")))),(0,n.kt)("h3",r({},{id:"insertbefore-parent-child-refchild"}),"insertBefore (parent, child, refChild)"),(0,n.kt)("p",null,"Triggered when ",(0,n.kt)("inlineCode",{parentName:"p"},"DOMNode")," calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"insertBefore")," method."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"parent"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Parent node")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"child"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Inserted nodes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"refChild"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Insert before this node")))),(0,n.kt)("h3",r({},{id:"removeattribute-element-qualifiedname"}),"removeAttribute (element, qualifiedName)"),(0,n.kt)("p",null,"Triggered when ",(0,n.kt)("inlineCode",{parentName:"p"},"DOMElement")," invokes the ",(0,n.kt)("inlineCode",{parentName:"p"},"removeAttribute")," method."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"element"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Current operating element")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"qualifiedName"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Specify the name of the attribute to be removed from the element")))),(0,n.kt)("h3",r({},{id:"setattribute-element-qualifiedname-value"}),"setAttribute (element, qualifiedName, value)"),(0,n.kt)("p",null,"Triggered when ",(0,n.kt)("inlineCode",{parentName:"p"},"DOMElement")," invokes the ",(0,n.kt)("inlineCode",{parentName:"p"},"setAttribute")," method."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"element"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Current operating element")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"qualifiedName"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"String of the property name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Value of the property / new value")))),(0,n.kt)("h3",r({},{id:"prepareupdatedata-data-page"}),"prepareUpdateData (data, page)"),(0,n.kt)("p",null,"Triggered every time the Taro DOM tree is updated, before calling the  mini program ",(0,n.kt)("inlineCode",{parentName:"p"},"setData"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"data"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DataTree"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Taro DOM tree data structure for setData")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"page"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"TaroRootElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Page root element")))),(0,n.kt)("h3",r({},{id:"appendinitialpage-data-page"}),"appendInitialPage (data, page)"),(0,n.kt)("p",null,"Taro DOM tree initialization, triggered before the first call to the mini program ",(0,n.kt)("inlineCode",{parentName:"p"},"setData"),". Executed immediately after the call to ",(0,n.kt)("inlineCode",{parentName:"p"},"prepareUpdateData"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"data"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DataTree"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Taro DOM tree data structure for setData")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"page"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"TaroRootElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Page root element")))),(0,n.kt)("h3",r({},{id:"getlifecyle-instance-lifecyle"}),"getLifecyle (instance, lifecyle)"),(0,n.kt)("p",null,"Called when the lifecycle of the mini program page is triggered."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"instance"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Instance"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Page Instance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"lifecyle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Lifecycle function name")))),(0,n.kt)("p",null,"Needs to return ",(0,n.kt)("strong",{parentName:"p"},"function")," or ",(0,n.kt)("strong",{parentName:"p"},"function[]"),", indicating the function to be executed."),(0,n.kt)("p",null,"Example\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// Default value.\n// Takes the corresponding lifecycle method directly from the user-written page instance\ngetLifecyle (instance, lifecyle) {\n  return instance[lifecyle]\n}\n\n// In React\n// the mini program triggers onShow, which calls the user-written componentDidShow\n// the mini program triggers onHide, calling the user-written componentDidHide\ngetLifecyle (instance, lifecycle) {\n  if (lifecycle === 'onShow') {\n    lifecycle = 'componentDidShow'\n  } else if (lifecycle === 'onHide') {\n    lifecycle = 'componentDidHide'\n  }\n  return instance[lifecycle]\n}\n")),(0,n.kt)("h3",r({},{id:"ontaroelementcreate-tagname-nodetype"}),"onTaroElementCreate (tagName, nodeType)"),(0,n.kt)("p",null,"Triggered when ",(0,n.kt)("inlineCode",{parentName:"p"},"DOMElement")," is constructed."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"tagName"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"The tag name of the currently created element")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"nodeType"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"NodeType"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"The node type of the currently created element")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"nodeType"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"1"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"ELEMENT_NODE"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"2"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"ATTRIBUTE_NODE"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"3"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"TEXT_NODE"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"4"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"CDATA_SECTION_NODE"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"5"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"ENTITY_REFERENCE_NODE"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"6"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"COMMENT_NODE"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"7"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"PROCESSING_INSTRUCTION_NODE"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"9"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOCUMENT_NODE"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))))),(0,n.kt)("h3",r({},{id:"getpathindex-indexofnode"}),"getPathIndex (indexOfNode)"),(0,n.kt)("p",null,"Triggered when ",(0,n.kt)("inlineCode",{parentName:"p"},"DOMNode")," gets the ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," property."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"indexOfNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"The subscript of the current node in the children list of the parent node")))),(0,n.kt)("p",null,"Needs to return a ",(0,n.kt)("strong",{parentName:"p"},"string")," value representing the array subscript when the mini program is ",(0,n.kt)("inlineCode",{parentName:"p"},"setData")," by path."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// Default value\ngetPathIndex (indexOfNode) {\n  return `[${indexOfNode}]`\n}\n\n// Baidu smart program does not require [] Parcels\ngetPathIndex (indexOfNode) {\n  return indexOfNode\n}\n")),(0,n.kt)("h3",r({},{id:"geteventcenterevents"}),"getEventCenter(Events)"),(0,n.kt)("p",null,"Triggered when ",(0,n.kt)("inlineCode",{parentName:"p"},"Taro.eventCenter")," initializes its value."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Events"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Constructor for Taro Event Center")))),(0,n.kt)("p",null,"Needs to return an instance of the Taro event center, which will be assigned to ",(0,n.kt)("inlineCode",{parentName:"p"},"Taro.eventCenter"),"."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// Default value:\ngetEventCenter (Events) {\n  return new Events()\n}\n\n// In the Alipay mini program\n// Priority is given to removing created event center instances from the mini program global object my to avoid problems when subpackaging.\ngetEventCenter (Events) {\n  if (!my.taroEventCenter) {\n    my.taroEventCenter = new Events()\n  }\n  return my.taroEventCenter\n}\n")),(0,n.kt)("h3",r({},{id:"initnativeapi-taro"}),"initNativeApi (taro)"),(0,n.kt)("p",null,"Triggered when referencing the ",(0,n.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," package."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"taro"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Taro Object")))),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"initNativeApi (taro) {\n  // Add getApp method to Taro object\n  taro.getApp = getApp\n}\n")))}k.isMDXComponent=!0}}]);