"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[508],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),g=i,u=m["".concat(p,".").concat(g)]||m[g]||s[g]||r;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6498:function(e,t,n){n.r(t),n.d(t,{default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={},p={unversionedId:"eco/intellij",id:"eco/intellij",isDocsHomePage:!1,title:"goctl intellij  Plugin",description:"go-zero",source:"@site/docs/eco/intellij.md",sourceDirName:"eco",slug:"/eco/intellij",permalink:"/docs/eco/intellij",editUrl:"https://github.com/anqiansong/zeromicro/blob/main/docs/eco/intellij.md",version:"current",lastUpdatedAt:1651298709,formattedLastUpdatedAt:"4/30/2022",frontMatter:{},sidebar:"eco",previous:{title:"Editor Plugin",permalink:"/docs/eco/editor"},next:{title:"vs code plugin",permalink:"/docs/eco/vscode"}},c=[{value:"Way 1",id:"way-1",children:[]},{value:"Way 2",id:"way-2",children:[]},{value:"Preview",id:"preview",children:[]},{value:"1. api file right click to generate",id:"1-api-file-right-click-to-generate",children:[]},{value:"2. api file edit area right-click generation",id:"2-api-file-edit-area-right-click-generation",children:[]},{value:"Api code generation instructions",id:"api-code-generation-instructions",children:[]},{value:"1. proto file right click generation",id:"1-proto-file-right-click-generation",children:[]},{value:"2. proto file edit area right-click generation",id:"2-proto-file-edit-area-right-click-generation",children:[]},{value:"zRPC Code Generation Instructions",id:"zrpc-code-generation-instructions",children:[]},{value:"1. sql file right click generation",id:"1-sql-file-right-click-generation",children:[]},{value:"2. sql file edit area right-click generation",id:"2-sql-file-edit-area-right-click-generation",children:[]},{value:"Model code generation instructions",id:"model-code-generation-instructions",children:[]}],d={toc:c};function s(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tal-tech/go-zero"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Github-go--zero-brightgreen?logo=github",alt:"go-zero"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/goctl-intellij/blob/main/LICENSE"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-MIT-blue",alt:"license"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/goctl-intellij/releases"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Release-1.1.0-red",alt:"license"}))),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A plugin tool that supports go-zero api language structure syntax highlighting, detection, and api, rpc, and model shortcut generation."),(0,r.kt)("h1",{id:"idea-version-requirements"},"idea version requirements"),(0,r.kt)("p",null,"No less than 193.0 (2019.3)"),(0,r.kt)("h1",{id:"version-features"},"Version features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"api syntax highlighting"),(0,r.kt)("li",{parentName:"ul"},"api syntax, semantic detection"),(0,r.kt)("li",{parentName:"ul"},"struct, route, handler duplicate definition detection"),(0,r.kt)("li",{parentName:"ul"},"type jump to type declaration location"),(0,r.kt)("li",{parentName:"ul"},"context menu support api, rpc, mode related menu options"),(0,r.kt)("li",{parentName:"ul"},"Code formatting (option+command+L)"),(0,r.kt)("li",{parentName:"ul"},"Code hinting")),(0,r.kt)("h1",{id:"installation-methods"},"Installation methods"),(0,r.kt)("h2",{id:"way-1"},"Way 1"),(0,r.kt)("p",null,"Find the latest zip package in the github release, download and install it locally. (No need to decompress)"),(0,r.kt)("h2",{id:"way-2"},"Way 2"),(0,r.kt)("p",null,"In the plugin store, just search for ",(0,r.kt)("inlineCode",{parentName:"p"},"Goctl")," and install it (currently the adopted version in the store is relatively low.)"),(0,r.kt)("h2",{id:"preview"},"Preview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(8818).Z})),(0,r.kt)("h1",{id:"new-api-file"},"New Api file"),(0,r.kt)("p",null,"In the project area target folder ",(0,r.kt)("inlineCode",{parentName:"p"}," Right click -> New -> New Api File -> Empty File/Api Template"),", as shown in the figure."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(7986).Z}),"\n",(0,r.kt)("img",{alt:"preview",src:n(3196).Z})),(0,r.kt)("h1",{id:"new-proto-file"},"New Proto File"),(0,r.kt)("p",null,"In the project area target folder ",(0,r.kt)("inlineCode",{parentName:"p"},"Right click -> New -> New Proto File -> Empty File/Proto Template"),", as shown in the figure.\n",(0,r.kt)("img",{alt:"preview",src:n(5193).Z}),"\n",(0,r.kt)("img",{alt:"preview",src:n(375).Z})),(0,r.kt)("h1",{id:"quickly-generate-apirpc-service"},"Quickly generate api/rpc service"),(0,r.kt)("p",null,"In the target folder ",(0,r.kt)("inlineCode",{parentName:"p"}," Right click -> New -> Go Zero -> Api Greet Service/Rpc Greet Service")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(772).Z})),(0,r.kt)("h1",{id:"api-code-generation"},"Api code generation"),(0,r.kt)("h2",{id:"1-api-file-right-click-to-generate"},"1. api file right click to generate"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(8634).Z})),(0,r.kt)("h2",{id:"2-api-file-edit-area-right-click-generation"},"2. api file edit area right-click generation"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(5341).Z})),(0,r.kt)("h2",{id:"api-code-generation-instructions"},"Api code generation instructions"),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"API Code Generation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"API Quick Code Generation")," is that"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"API Code Generation")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl")," uses the specified values for the relevant command parameters, and its code generation instructions read as follows",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl api go --api=${API file path} --style=gozero --home="~/.goctl" --dir=${API file folder}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"API Quick Code Generation")," will open a popup for the user to fill in ",(0,r.kt)("inlineCode",{parentName:"li"},"--style"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-- dir"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--home"),", etc.\n",(0,r.kt)("img",{alt:"preview",src:n(2893).Z}))),(0,r.kt)("h1",{id:"zrpc-code-generation"},"zRPC code generation"),(0,r.kt)("h2",{id:"1-proto-file-right-click-generation"},"1. proto file right click generation"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(1270).Z})),(0,r.kt)("h2",{id:"2-proto-file-edit-area-right-click-generation"},"2. proto file edit area right-click generation"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(1651).Z})),(0,r.kt)("h2",{id:"zrpc-code-generation-instructions"},"zRPC Code Generation Instructions"),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRPC Code Generation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRPC Quick Code Generation")," is that"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ZRPC Code Generation")," uses the specified values for the relevant command parameters of ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl"),", and its code generation instructions read as follows",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl rpc protoc ${proto file path} --style=gozero --home="~/.goctl" --go_out=${API file folder} --grpc-go_out=${API file folder} --zrpc_out=${API file folder }\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ZRPC Quick Code Generation")," will open a popup window for users to fill in ",(0,r.kt)("inlineCode",{parentName:"li"},"--style"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-- dir"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--home"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"proto_path")," (if there are other proto files imported), etc.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No import case\n",(0,r.kt)("img",{alt:"preview",src:n(2893).Z})),(0,r.kt)("li",{parentName:"ul"},"With import, proto_path currently only supports but file selection, so ",(0,r.kt)("strong",{parentName:"li"},"importing proto from a different folder is not supported"),".\n",(0,r.kt)("img",{alt:"preview",src:n(839).Z}))))),(0,r.kt)("h1",{id:"model-code-generation"},"Model code generation"),(0,r.kt)("h2",{id:"1-sql-file-right-click-generation"},"1. sql file right click generation"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(4453).Z})),(0,r.kt)("h2",{id:"2-sql-file-edit-area-right-click-generation"},"2. sql file edit area right-click generation"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(5596).Z})),(0,r.kt)("h2",{id:"model-code-generation-instructions"},"Model code generation instructions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Model code generation is cached by default. ")),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"Model Code Generation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Model Quick Code Generation")," is that"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Model Code Generation")," uses the specified values for the ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl")," command parameters, and the code generation commands are as follows",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl model mysql ddl --src=${sql file path} --dir=${sql file folder} --style=gozero -c --home="~/.goctl"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Model Quick Code Generation")," will open a popup for the user to fill in ",(0,r.kt)("inlineCode",{parentName:"li"},"--style"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-- dir"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--home"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--cache"),", etc.\n",(0,r.kt)("img",{alt:"preview",src:n(2893).Z})),(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("h1",{id:"error-message"},"Error message"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"context menu",src:n(2433).Z})),(0,r.kt)("h1",{id:"live-template"},"Live Template"),(0,r.kt)("p",null,"Live Template can speed up the writing of api files, for example, if we type ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," keyword in a go file and enter it according to tip, a template code will be inserted"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},"func main(){\n\n}\n")),(0,r.kt)("p",null,"Or maybe you'll be more familiar with the following image, where you defined the template once upon a time\n",(0,r.kt)("img",{alt:"context menu",src:n(836).Z})),(0,r.kt)("p",null,"Let's get into the template usage instructions in today's api syntax, and let's see the effect of the service template\n",(0,r.kt)("img",{alt:"context menu",src:n(9115).Z})),(0,r.kt)("h4",{id:"preset-templates-and-effective-areas"},"Preset templates and effective areas"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Template keywords"),(0,r.kt)("th",{parentName:"tr",align:null},"psiTree effect area"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@doc"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"doc annotation template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doc"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"doc annotation template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct"),(0,r.kt)("td",{parentName:"tr",align:null},"struct"),(0,r.kt)("td",{parentName:"tr",align:null},"struct declaration template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiFile"),(0,r.kt)("td",{parentName:"tr",align:null},"info block template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiFile"),(0,r.kt)("td",{parentName:"tr",align:null},"type group template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handler"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"handler filename template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"get"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"get method routing template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"head"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"head method routing template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"post"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"post method routing template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"put"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"put method routing template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"delete method routing template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"connect method routing template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"options method routing template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trace"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"trace method routing template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiFile"),(0,r.kt)("td",{parentName:"tr",align:null},"service service block template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag literal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xml"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag literal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag literal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"form"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag literal")))),(0,r.kt)("p",null,"About each template corresponding content can be seen in ",(0,r.kt)("inlineCode",{parentName:"p"},"Goland(mac Os)->Preference->Editor->Live Templates-> Api|Api Tags")," in the detailed template content, such as json tag template content for"))}s.isMDXComponent=!0},2433:function(e,t,n){t.Z=n.p+"assets/images/alert-283c9c777b8b7dfcd94d11974687b50b.png"},2893:function(e,t,n){t.Z=n.p+"assets/images/api_code_gen_dialog-62324f682ec90f1a8d164bbdbd3b8d89.png"},8818:function(e,t,n){t.Z=n.p+"assets/images/api_colorful-ae74ebdc2848902ba66acdef72aea8fa.png"},7986:function(e,t,n){t.Z=n.p+"assets/images/api_new-6ca623f6582c8534dd0fe43a29a72cda.png"},5341:function(e,t,n){t.Z=n.p+"assets/images/editor_api_code_gen-5f80e27383f255e930afd63d778967f5.png"},5596:function(e,t,n){t.Z=n.p+"assets/images/editor_model_code_gen-8c1712f80c9c7f08e9d1c986838343ef.png"},1651:function(e,t,n){t.Z=n.p+"assets/images/editor_zrpc_code_gen-4b5ce5d879d2a982ce83cf6624ae28e3.png"},836:function(e,t,n){t.Z=n.p+"assets/images/go_live_template-c1d979d6a2d95a646ddebd648251ed41.png"},9115:function(e,t,n){t.Z=n.p+"assets/images/live_preview-3e92215bedb06086f35b605b1424a770.gif"},3196:function(e,t,n){t.Z=n.p+"assets/images/new-438e52877d19e552081f5484c10738c0.png"},5193:function(e,t,n){t.Z=n.p+"assets/images/new_proto-56fcb3bca9bcf709560df856219c983b.png"},8634:function(e,t,n){t.Z=n.p+"assets/images/project_api_code_gen-f371bbeb28996c4b4aafffcb7ddc6114.png"},4453:function(e,t,n){t.Z=n.p+"assets/images/project_model_code_gen-37d05bc1bb5eb935fe8786736c1e118f.png"},1270:function(e,t,n){t.Z=n.p+"assets/images/project_zrpc_code_gen-070cd82a3c0afe7cf44bdd9d709b5cc7.png"},375:function(e,t,n){t.Z=n.p+"assets/images/proto-846d045a808dcbd997bd03f2f590bbaf.png"},839:function(e,t,n){t.Z=n.p+"assets/images/rpc_code_gen_dialog-bffa3716bb6b412eb68137bfc66277df.png"},772:function(e,t,n){t.Z=n.p+"assets/images/service-ef0e5066817495ba077f595ca8c63239.png"}}]);