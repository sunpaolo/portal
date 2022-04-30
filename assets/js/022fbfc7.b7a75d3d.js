"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[1876],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5250:function(e,t,r){r.r(t),r.d(t,{default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={},p={unversionedId:"prepare/dev-flow",id:"prepare/dev-flow",isDocsHomePage:!1,title:"Development Flow",description:"The development process here is not a concept with our actual business development process. The definition here is limited to the use of go-zero, that is, the development details at the code level.",source:"@site/docs/prepare/dev-flow.md",sourceDirName:"prepare",slug:"/prepare/dev-flow",permalink:"/docs/prepare/dev-flow",editUrl:"https://github.com/anqiansong/zeromicro/blob/main/docs/prepare/dev-flow.md",version:"current",lastUpdatedAt:1651298709,formattedLastUpdatedAt:"4/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Prepare",permalink:"/docs/prepare/prepare"},next:{title:"Golang Installation",permalink:"/docs/prepare/golang-install"}},c=[{value:"Development Flow",id:"development-flow",children:[]},{value:"Development Tools",id:"development-tools",children:[]}],u={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The development process here is not a concept with our actual business development process. The definition here is limited to the use of go-zero, that is, the development details at the code level."),(0,a.kt)("h2",{id:"development-flow"},"Development Flow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Goctl environment preparation ","[1]"),(0,a.kt)("li",{parentName:"ul"},"Database Design"),(0,a.kt)("li",{parentName:"ul"},"Business development"),(0,a.kt)("li",{parentName:"ul"},"New Construction"),(0,a.kt)("li",{parentName:"ul"},"Create service catalog"),(0,a.kt)("li",{parentName:"ul"},"Create service type (api/rpc/rmq/job/script)"),(0,a.kt)("li",{parentName:"ul"},"Write api and proto files"),(0,a.kt)("li",{parentName:"ul"},"Code generation"),(0,a.kt)("li",{parentName:"ul"},"Generate database access layer code model"),(0,a.kt)("li",{parentName:"ul"},"Configuration config, yaml change"),(0,a.kt)("li",{parentName:"ul"},"Resource dependency filling (ServiceContext)"),(0,a.kt)("li",{parentName:"ul"},"Add middleware"),(0,a.kt)("li",{parentName:"ul"},"Business code filling"),(0,a.kt)("li",{parentName:"ul"},"Error handling")),(0,a.kt)("h2",{id:"development-tools"},"Development Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visual Studio Code"),(0,a.kt)("li",{parentName:"ul"},"Goland (recommended)")))}s.isMDXComponent=!0}}]);