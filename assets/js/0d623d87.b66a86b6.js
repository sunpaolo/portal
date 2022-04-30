"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[7890],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},s),{},{components:n})):i.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2637:function(e,t,n){n.r(t),n.d(t,{default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={},c={unversionedId:"develop/dev-specification",id:"develop/dev-specification",isDocsHomePage:!1,title:"Development Rules",description:"In actual business development, in addition to improving business development efficiency, shortening business development cycles, and ensuring high performance and high availability indicators for online business, good programming habits are also one of the basic qualities of a developer. In this chapter,",source:"@site/docs/develop/dev-specification.md",sourceDirName:"develop",slug:"/develop/dev-specification",permalink:"/docs/develop/dev-specification",editUrl:"https://github.com/anqiansong/zeromicro/blob/main/docs/develop/dev-specification.md",version:"current",lastUpdatedAt:1651298709,formattedLastUpdatedAt:"4/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Other",permalink:"/docs/prepare/prepare-other"},next:{title:"Naming Rules",permalink:"/docs/develop/naming-spec"}},p=[{value:"Three principles of development",id:"three-principles-of-development",children:[{value:"Clarity",id:"clarity",children:[]},{value:"Simplicity",id:"simplicity",children:[]},{value:"Productivity\uff09",id:"productivity",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In actual business development, in addition to improving business development efficiency, shortening business development cycles, and ensuring high performance and high availability indicators for online business, good programming habits are also one of the basic qualities of a developer. In this chapter,"),(0,o.kt)("p",null,"We will introduce the coding standards in go-zero. This chapter is an optional chapter. The content is for communication and reference only. This chapter will explain from the following subsections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"naming-spec"},"Naming Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"coding-spec"},"Coding Rules"))),(0,o.kt)("h2",{id:"three-principles-of-development"},"Three principles of development"),(0,o.kt)("h3",{id:"clarity"},"Clarity"),(0,o.kt)("p",null,"The author quoted a quote from ",(0,o.kt)("inlineCode",{parentName:"p"},"Hal Abelson and Gerald Sussman"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Programs must be written for people to read, and only incidentally for machines to execute")),(0,o.kt)("h3",{id:"simplicity"},"Simplicity"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Simplicity is prerequisite for reliability")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Edsger W. Dijkstra")," believes that: the prerequisite for reliability is simplicity. We have all encountered in actual development. What is this code written and what it wants to accomplish. Developers don\u2019t understand this code, so they don\u2019t know. How to maintain, this brings complexity, the more complex the program, the harder it is to maintain, and the harder it is to maintain, the program becomes more and more complicated. Therefore, the first thing you should think of when encountering a program becoming complicated is - Refactoring, refactoring will redesign the program and make the program simple."),(0,o.kt)("h3",{id:"productivity"},"Productivity\uff09"),(0,o.kt)("p",null,"In the go-zero team, this topic has always been emphasized. The productivity of developers is not how many lines of code you have written and how many module developments you have completed, but we need to use various effective ways to take advantage of the limited Time to complete the development to maximize the efficiency, and the birth of Goctl was officially to increase productivity,\nTherefore, I very much agree with this development principle."))}d.isMDXComponent=!0}}]);