"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84531],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},s=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),s=r,g=u["".concat(c,".").concat(s)]||u[s]||m[s]||a;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},930356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(58168),r=(t(296540),t(15680));const a={title:"C++ Format Code",language:"en"},i=void 0,l={unversionedId:"developer-guide/cpp-format-code",id:"developer-guide/cpp-format-code",title:"C++ Format Code",description:"\x3c!--",source:"@site/community/developer-guide/cpp-format-code.md",sourceDirName:"developer-guide",slug:"/developer-guide/cpp-format-code",permalink:"/community/developer-guide/cpp-format-code",draft:!1,tags:[],version:"current",frontMatter:{title:"C++ Format Code",language:"en"},sidebar:"community",previous:{title:"Java Format Code",permalink:"/community/developer-guide/java-format-code"},next:{title:"C++ Code Diagnostic",permalink:"/community/developer-guide/cpp-diagnostic-code"}},c={},d=[{value:"Code style customization",id:"code-style-customization",level:2},{value:"Environmental preparation",id:"environmental-preparation",level:2},{value:"Download and install clang-format",id:"download-and-install-clang-format",level:3},{value:"clang-format plugin",id:"clang-format-plugin",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"Command line operation",id:"command-line-operation",level:3},{value:"Use clang-format in IDE or Editor",id:"use-clang-format-in-ide-or-editor",level:3},{value:"Clion",id:"clion",level:4},{value:"VS Code",id:"vs-code",level:4}],p={toc:d},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"c-code-formatting"},"C++ code formatting"),(0,r.yg)("p",null,"Doris uses clang-format for code formatting, and provides a package script in the build-support directory:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"clang-format.sh"),"."),(0,r.yg)("p",{parentName:"li"},"  Format the C/C++ code in the ",(0,r.yg)("inlineCode",{parentName:"p"},"be/src")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"be/test")," directories.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"check-format.sh"),"."),(0,r.yg)("p",{parentName:"li"},"  Check the C/C++ code format in the ",(0,r.yg)("inlineCode",{parentName:"p"},"be/src")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"be/test")," directories, and output diff, but the content of the file will not be modified."))),(0,r.yg)("h2",{id:"code-style-customization"},"Code style customization"),(0,r.yg)("p",null,"The code style of Doris is slightly modified on the basis of Google Style and is customized as a ",(0,r.yg)("inlineCode",{parentName:"p"},".clang-format")," file located in the root directory of Doris."),(0,r.yg)("p",null,"Currently, the ",(0,r.yg)("inlineCode",{parentName:"p"},".clang-format")," configuration file is adapted to versions above clang-format-16.0.0."),(0,r.yg)("p",null,"The code that you do not want to be formatted is recorded in the ",(0,r.yg)("inlineCode",{parentName:"p"},".clang-format-ignore")," file. These codes usually come from third-party code bases, and it is recommended to keep the original code style."),(0,r.yg)("h2",{id:"environmental-preparation"},"Environmental preparation"),(0,r.yg)("p",null,"You need to download and install clang-format, or you can use the clang-format plug-in provided by IDE or Editor, as described below."),(0,r.yg)("h3",{id:"download-and-install-clang-format"},"Download and install clang-format"),(0,r.yg)("p",null,"The current doris uses clang-format 16 for code formatting (different versions of clang-format may produce different code formats)."),(0,r.yg)("p",null,"Linux: You can use the LDB toolchain directly, which already comes with a corresponding version of clang-format. Or install or compile the binary by yourself in other ways."),(0,r.yg)("p",null,"Mac: ",(0,r.yg)("inlineCode",{parentName:"p"},"brew install clang-format@16")),(0,r.yg)("p",null,"LDB toolchain:"),(0,r.yg)("p",null,"If you are using ",(0,r.yg)("a",{parentName:"p",href:"/docs/install/source-install/compilation-with-ldb-toolchain"},"LDB toolchain"),",\nthe latest version (>= v0.18) of ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/amosbird/ldb_toolchain_gen/releases"},"LDB toolchain")," has already included clang-format with 16.0.0 version."),(0,r.yg)("h3",{id:"clang-format-plugin"},"clang-format plugin"),(0,r.yg)("p",null,'Clion IDE can use the plug-in "ClangFormat", search and download in ',(0,r.yg)("inlineCode",{parentName:"p"},"File->Setting->Plugins"),". However, you need to confirm whether the clang-format version is 16."),(0,r.yg)("h2",{id:"how-to-use"},"How to use"),(0,r.yg)("h3",{id:"command-line-operation"},"Command line operation"),(0,r.yg)("p",null,"cd to the root directory of Doris, and then execute the following command:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"build-support/clang-format.sh")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: The ",(0,r.yg)("inlineCode",{parentName:"p"},"clang-format.sh")," script requires python 3 to be installed on your machine")),(0,r.yg)("h3",{id:"use-clang-format-in-ide-or-editor"},"Use clang-format in IDE or Editor"),(0,r.yg)("h4",{id:"clion"},"Clion"),(0,r.yg)("p",null,"If Clion uses a plug-in, just click ",(0,r.yg)("inlineCode",{parentName:"p"},"Reformat Code"),"."),(0,r.yg)("h4",{id:"vs-code"},"VS Code"),(0,r.yg)("p",null,"VS Code needs to install the extension Clang-Format, but you need to provide the location of the clang-format execution program."),(0,r.yg)("p",null,'Open the VS Code configuration page, directly search for "clang_format", and fill in'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"clang_format_path": "$clang-format path$",\n"clang_format_style": "file"\n')),(0,r.yg)("p",null,"Then, right-click on ",(0,r.yg)("inlineCode",{parentName:"p"},"Format Document"),"."))}m.isMDXComponent=!0}}]);