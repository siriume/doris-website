"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[72898],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||g[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},936644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const a={title:"PERCENTILE_APPROX",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/percentile_approx",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/percentile_approx",title:"PERCENTILE_APPROX",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/aggregate-functions/percentile_approx.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/percentile_approx",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/percentile_approx",draft:!1,tags:[],version:"1.2",frontMatter:{title:"PERCENTILE_APPROX",language:"en"},sidebar:"docs",previous:{title:"group_bit_xor",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bit_xor"},next:{title:"STDDEV,STDDEV_POP",permalink:"/docs/1.2/sql-manual/sql-functions/aggregate-functions/stddev"}},s={},c=[{value:"PERCENTILE_APPROX",id:"percentile_approx",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"percentile_approx"},"PERCENTILE_APPROX"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"PERCENTILE_APPROX(expr, DOUBLE p[, DOUBLE compression])")),(0,o.yg)("p",null,"Return the approximation of the point p, where the value of P is between 0 and 1."),(0,o.yg)("p",null,"Compression param is optional and can be setted to a value in the range of ","[2048, 10000]",". The bigger compression you set, the more precise result and more time cost you will get. If it is not setted or not setted in the correct range, PERCENTILE_APPROX function will run with a default compression param of 10000."),(0,o.yg)("p",null,"This function uses fixed size memory, so less memory can be used for columns with high cardinality, and can be used to calculate statistics such as tp99."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL > select `table`, percentile_approx(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select `table`, percentile_approx(cost_time,0.99, 4096) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99, 4096.0) |\n+----------+--------------------------------------+\n| test     |                                54.21 |\n+----------+--------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"PERCENTILE_APPROX,PERCENTILE,APPROX"))}g.isMDXComponent=!0}}]);