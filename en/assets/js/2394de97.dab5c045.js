"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[64446],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96786:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});n(93106);var a=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Lifecycle & State"},l=void 0,i={unversionedId:"state",id:"version-3.x/state",title:"Lifecycle & State",description:"In this section, we will learn how to reuse and encapsulate a Clock component. It will set the timer, and updated once per second.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/state.md",sourceDirName:".",slug:"/state",permalink:"/taro-docs/en/docs/state",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/state.md",tags:[],version:"3.x",frontMatter:{title:"Lifecycle & State"}},c={},p=[{value:"For a class to add local state",id:"for-a-class-to-add-local-state",level:2},{value:"The method of life cycle are added to the class",id:"the-method-of-life-cycle-are-added-to-the-class",level:2},{value:"Proper use of the State",id:"proper-use-of-the-state",level:2},{value:"Do not directly update the status",id:"do-not-directly-update-the-status",level:3},{value:"Status updates must be asynchronous",id:"status-updates-must-be-asynchronous",level:3},{value:"state update will be merged",id:"state-update-will-be-merged",level:3}],u={toc:p};function d(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, we will learn how to reuse and encapsulate a Clock component. It will set the timer, and updated once per second."),(0,a.kt)("p",null,"We can start over encapsulating the clock:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"class Clock extends Component {\n  render () {\n    return (\n      <View>\n        <Text>Hello, world!</Text>\n        <Text>And the time is {this.state.date.toLocaleTimeString()}.</Text>\n      </View>\n    )\n  }\n}\n")),(0,a.kt)("p",null,"Clock is defined as a class, now use will allow us to use other features, the local and life cycle such as hook."),(0,a.kt)("h2",o({},{id:"for-a-class-to-add-local-state"}),"For a class to add local state"),(0,a.kt)("p",null,"First, we need to add a class constructors to initialize the state ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"class Clock extends Component {\n  constructor (props) {\n    super(props)\n    this.state = { date: new Date() }\n  }\n\n  render () {\n    return (\n      <View>\n        <Text>Hello, world!</Text>\n        <Text>And the time is {this.state.date.toLocaleTimeString()}.</Text>\n      </View>\n    )\n  }\n}\n")),(0,a.kt)("p",null,"Notice how we deliver props to the base constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"constructor (props) {\n  super(props)\n  this.state = { date: new Date() }\n}\n")),(0,a.kt)("p",null,"Class constructor component should always use props call basis.\nNext, we will make the Clock to set their own timer and updated once per second."),(0,a.kt)("h2",o({},{id:"the-method-of-life-cycle-are-added-to-the-class"}),"The method of life cycle are added to the class"),(0,a.kt)("p",null,"In application, with many components in the destruction of release resources component occupies very important."),(0,a.kt)("p",null,"Whenever ",(0,a.kt)("inlineCode",{parentName:"p"},"Clock")," components loaded into the DOM in first time, we all want to generate timer, it is called mount in Taro/React."),(0,a.kt)("p",null,"Also, when there is a Clock generated by the DOM has been removed, we will also want to clear the timer, this is known as unloading in Taro/React."),(0,a.kt)("p",null,"We can be declared in the component class special method, when the component mounted or uninstall, to run some code:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"class Clock extends Component {\n  constructor (props) {\n    super(props)\n    this.state = { date: new Date() }\n  }\n\n  componentDidMount() {\n\n  }\n\n  componentWillUnmount() {\n\n  }\n\n  render () {\n    return (\n      <View>\n        <Text>Hello, world!</Text>\n        <Text>And the time is {this.state.date.toLocaleTimeString()}.</Text>\n      </View>\n    )\n  }\n}\n")),(0,a.kt)("p",null,"These methods is called the life cycle of hooks."),(0,a.kt)("p",null,"When the component output to the DOM after executes ",(0,a.kt)("inlineCode",{parentName:"p"},"componentDidMount()")," hooks, it is a good place to set up the timer:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"componentDidMount() {\n  this.timerID = setInterval(\n    () => this.tick(),\n    1000\n  )\n}\n")),(0,a.kt)("p",null,"Notice how we save the timer in this ID."),(0,a.kt)("p",null,"Although ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props")," set by Taro itself and ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state")," has special meaning, but if you need to store is not used for visual output, you can add other fields hand movements in the class."),(0,a.kt)("p",null,"If you're not ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," used in something, it should not be in the state."),(0,a.kt)("p",null,"We will be in ",(0,a.kt)("inlineCode",{parentName:"p"},"componentWillUnmount()")," uninstall timer in () hook life cycle:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"componentWillUnmount () {\n  clearInterval(this.timerID)\n}\n")),(0,a.kt)("p",null,"Finally, we implement the execute every second ",(0,a.kt)("inlineCode",{parentName:"p"},"tick()")," method."),(0,a.kt)("p",null,"It will use ",(0,a.kt)("inlineCode",{parentName:"p"},"this.setState()")," to update the local state:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n\nclass Clock extends Component {\n  constructor (props) {\n    super(props)\n    this.state = { date: new Date() }\n  }\n\n  componentDidMount () {\n    this.timerID = setInterval(\n      () => this.tick(),\n      1000\n    );\n  }\n\n  componentWillUnmount () {\n    clearInterval(this.timerID)\n  }\n\n  tick () {\n    this.setState({\n      date: new Date()\n    });\n  }\n\n  render() {\n    return (\n      <View>\n        <Text>Hello, world!</Text>\n        <Text>And the time is {this.state.date.toLocaleTimeString()}.</Text>\n      </View>\n    )\n  }\n}\n")),(0,a.kt)("h2",o({},{id:"proper-use-of-the-state"}),"Proper use of the State"),(0,a.kt)("p",null,"About the setState () there are three things need to know:"),(0,a.kt)("h3",o({},{id:"do-not-directly-update-the-status"}),"Do not directly update the status"),(0,a.kt)("p",null,"For example, this code not to render the component:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// Wrong\nthis.state.comment = 'Hello'\n")),(0,a.kt)("p",null,"Should be used ",(0,a.kt)("inlineCode",{parentName:"p"},"setState()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// Correct\nthis.setState({ comment: 'Hello' })\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setState()"),"  function is the only can update ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state")," place."),(0,a.kt)("h3",o({},{id:"status-updates-must-be-asynchronous"}),"Status updates must be asynchronous"),(0,a.kt)("p",null,"Taro can be multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"setState()")," call merged into a single call to improve performance."),(0,a.kt)("p",null,"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," must be asynchronous update, so you can't in ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," immediately get ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," values, such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// Suppose we set this.state.counter = 0\nupdateCounter () {\n  this.setState({\n    counter: 1\n  })\n  console.log(this.state.counter) // This counter is 0\n}\n")),(0,a.kt)("p",null,"Is the right thing in this way, the ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," second parameter pass in a callback:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// Suppose we set this.state.counter = 0\nupdateCounter () {\n  this.setState({\n    counter: 1\n  }, () => {\n    // In this function you can get after setState values\n  })\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is the Taro and React a different places: Doesn't always React the ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," asynchronous, a set of transaction mechanism, his inner control, and React the implementation of the 15/16 also each are not identical. For Taro, ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," after you provide will be joining an array, and then the execution of the next one ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/aooy/blog/issues/5"}),"eventloop")," merge them.")),(0,a.kt)("h3",o({},{id:"state-update-will-be-merged"}),"state update will be merged"),(0,a.kt)("p",null,"When you call ",(0,a.kt)("inlineCode",{parentName:"p"},"setState()"),", Taro will combine the current state of the object to you provide."),(0,a.kt)("p",null,"For example, your state may contain several independent variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"constructor(props) {\n  super(props)\n  this.state = {\n    posts: [],\n    comments: []\n  }\n}\n")),(0,a.kt)("p",null,"And then through a call to independence ",(0,a.kt)("inlineCode",{parentName:"p"},"setState()")," call to update them respectively:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"componentDidMount() {\n  fetchPosts().then(response => {\n    this.setState({\n      posts: response.posts\n    });\n  });\n\n  fetchComments().then(response => {\n    this.setState({\n      comments: response.comments\n    })\n  })\n}\n")),(0,a.kt)("p",null,"The merger is shallow, so ",(0,a.kt)("inlineCode",{parentName:"p"},"this.setState({comments})")," will not change ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state.posts")," value, but will completely replace ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state.comments")," value."))}d.isMDXComponent=!0}}]);