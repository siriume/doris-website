"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68501],{15680:(t,a,e)=>{e.d(a,{xA:()=>u,yg:()=>o});var n=e(296540);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function g(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function y(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),d=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):g(g({},a),t)),e},u=function(t){var a=d(t.components);return n.createElement(p.Provider,{value:a},t.children)},m="mdxType",i={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=y(t,["components","mdxType","originalType","parentName"]),m=d(e),N=r,o=m["".concat(p,".").concat(N)]||m[N]||i[N]||l;return e?n.createElement(o,g(g({ref:a},u),{},{components:e})):n.createElement(o,g({ref:a},u))}));function o(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,g=new Array(l);g[0]=N;var y={};for(var p in a)hasOwnProperty.call(a,p)&&(y[p]=a[p]);y.originalType=t,y[m]="string"==typeof t?t:r,g[1]=y;for(var d=2;d<l;d++)g[d]=e[d];return n.createElement.apply(null,g)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},22839:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>g,default:()=>i,frontMatter:()=>l,metadata:()=>y,toc:()=>d});var n=e(58168),r=(e(296540),e(15680));const l={title:"TPC-DS Benchmark",language:"zh-CN"},g=void 0,y={unversionedId:"benchmark/tpcds",id:"benchmark/tpcds",title:"TPC-DS Benchmark",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/benchmark/tpcds.md",sourceDirName:"benchmark",slug:"/benchmark/tpcds",permalink:"/zh-CN/docs/dev/benchmark/tpcds",draft:!1,tags:[],version:"current",frontMatter:{title:"TPC-DS Benchmark",language:"zh-CN"},sidebar:"docs",previous:{title:"TPC-H Benchmark",permalink:"/zh-CN/docs/dev/benchmark/tpch"},next:{title:"\u5e38\u89c1\u8fd0\u7ef4\u95ee\u9898",permalink:"/zh-CN/docs/dev/faq/install-faq"}},p={},d=[{value:"1. \u786c\u4ef6\u73af\u5883",id:"1-\u786c\u4ef6\u73af\u5883",level:2},{value:"2. \u8f6f\u4ef6\u73af\u5883",id:"2-\u8f6f\u4ef6\u73af\u5883",level:2},{value:"3. \u6d4b\u8bd5\u6570\u636e\u91cf",id:"3-\u6d4b\u8bd5\u6570\u636e\u91cf",level:2},{value:"4. \u6d4b\u8bd5 SQL",id:"4-\u6d4b\u8bd5-sql",level:2},{value:"5. \u6d4b\u8bd5\u7ed3\u679c",id:"5-\u6d4b\u8bd5\u7ed3\u679c",level:2},{value:"6. \u73af\u5883\u51c6\u5907",id:"6-\u73af\u5883\u51c6\u5907",level:2},{value:"7. \u6570\u636e\u51c6\u5907",id:"7-\u6570\u636e\u51c6\u5907",level:2},{value:"7.1 \u4e0b\u8f7d\u5b89\u88c5 TPC-DS \u6570\u636e\u751f\u6210\u5de5\u5177",id:"71-\u4e0b\u8f7d\u5b89\u88c5-tpc-ds-\u6570\u636e\u751f\u6210\u5de5\u5177",level:3},{value:"7.2 \u751f\u6210 TPC-DS \u6d4b\u8bd5\u96c6",id:"72-\u751f\u6210-tpc-ds-\u6d4b\u8bd5\u96c6",level:3},{value:"7.3 \u5efa\u8868",id:"73-\u5efa\u8868",level:3},{value:"7.3.1 \u51c6\u5907 <code>doris-cluster.conf</code> \u6587\u4ef6",id:"731-\u51c6\u5907-doris-clusterconf-\u6587\u4ef6",level:4},{value:"7.3.2 \u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa TPC-DS \u8868",id:"732-\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa-tpc-ds-\u8868",level:4},{value:"7.4 \u5bfc\u5165\u6570\u636e",id:"74-\u5bfc\u5165\u6570\u636e",level:3},{value:"7.5 \u67e5\u8be2\u6d4b\u8bd5",id:"75-\u67e5\u8be2\u6d4b\u8bd5",level:3},{value:"7.5.1 \u6267\u884c\u67e5\u8be2\u811a\u672c",id:"751-\u6267\u884c\u67e5\u8be2\u811a\u672c",level:3},{value:"7.5.2 \u5355\u4e2a SQL \u6267\u884c",id:"752-\u5355\u4e2a-sql-\u6267\u884c",level:3}],u={toc:d},m="wrapper";function i(t){let{components:a,...l}=t;return(0,r.yg)(m,(0,n.A)({},u,l,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"tpc-ds-benchmark"},"TPC-DS Benchmark"),(0,r.yg)("p",null,"TPC-DS\uff08Transaction Processing Performance Council Decision Support Benchmark\uff09\u662f\u4e00\u4e2a\u4ee5\u51b3\u7b56\u652f\u6301\u4e3a\u91cd\u70b9\u7684\u57fa\u51c6\u6d4b\u8bd5\uff0c\u65e8\u5728\u8bc4\u4f30\u6570\u636e\u4ed3\u5e93\u548c\u5206\u6790\u7cfb\u7edf\u7684\u6027\u80fd\u3002\u5b83\u662f\u7531 TPC\uff08Transaction Processing Performance Council\uff09\u7ec4\u7ec7\u5f00\u53d1\u7684\uff0c\u7528\u4e8e\u6bd4\u8f83\u4e0d\u540c\u7cfb\u7edf\u5728\u5904\u7406\u590d\u6742\u67e5\u8be2\u548c\u5927\u89c4\u6a21\u6570\u636e\u5206\u6790\u65b9\u9762\u7684\u80fd\u529b\u3002"),(0,r.yg)("p",null,"TPC-DS \u7684\u8bbe\u8ba1\u76ee\u6807\u662f\u6a21\u62df\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684\u590d\u6742\u51b3\u7b56\u652f\u6301\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5b83\u901a\u8fc7\u4e00\u7cfb\u5217\u590d\u6742\u7684\u67e5\u8be2\u548c\u6570\u636e\u64cd\u4f5c\u6765\u6d4b\u8bd5\u7cfb\u7edf\u7684\u6027\u80fd\uff0c\u5305\u62ec\u8054\u63a5\u3001\u805a\u5408\u3001\u6392\u5e8f\u3001\u8fc7\u6ee4\u3001\u5b50\u67e5\u8be2\u7b49\u3002\u8fd9\u4e9b\u67e5\u8be2\u6a21\u5f0f\u6db5\u76d6\u4e86\u4ece\u7b80\u5355\u5230\u590d\u6742\u7684\u5404\u79cd\u573a\u666f\uff0c\u5982\u62a5\u8868\u751f\u6210\u3001\u6570\u636e\u6316\u6398\u3001OLAP\uff08\u8054\u673a\u5206\u6790\u5904\u7406\uff09\u7b49\u3002"),(0,r.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd Doris \u5728 TPC-DS 1000G \u6d4b\u8bd5\u96c6\u4e0a\u7684\u6027\u80fd\u8868\u73b0\u3002"),(0,r.yg)("p",null,"\u5728 TPC-DS \u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6\u4e0a\u7684 99 \u4e2a\u67e5\u8be2\u4e0a\uff0c\u6211\u4eec\u57fa\u4e8e Apache Doris 2.1.1-rc03 \u548c Apache Doris 2.0.6 \u7248\u672c\u8fdb\u884c\u4e86\u5bf9\u6bd4\u6d4b\u8bd5\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"TPCDS_1000G",src:e(904198).A,width:"11091",height:"1191"})),(0,r.yg)("h2",{id:"1-\u786c\u4ef6\u73af\u5883"},"1. \u786c\u4ef6\u73af\u5883"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u786c\u4ef6"),(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u673a\u5668\u6570\u91cf"),(0,r.yg)("td",{parentName:"tr",align:null},"4 \u53f0\u817e\u8baf\u4e91\u4e3b\u673a\uff081 \u4e2a FE\uff0c3 \u4e2a BE\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CPU"),(0,r.yg)("td",{parentName:"tr",align:null},"AMD EPYC\u2122 Milan(2.55GHz/3.5GHz)  48 \u6838")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5185\u5b58"),(0,r.yg)("td",{parentName:"tr",align:null},"192G")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u5e26\u5bbd"),(0,r.yg)("td",{parentName:"tr",align:null},"21Gbps")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u78c1\u76d8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9ad8\u6027\u80fd\u4e91\u786c\u76d8")))),(0,r.yg)("h2",{id:"2-\u8f6f\u4ef6\u73af\u5883"},"2. \u8f6f\u4ef6\u73af\u5883"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Doris \u90e8\u7f72 3BE 1FE"),(0,r.yg)("li",{parentName:"ul"},"\u5185\u6838\u7248\u672c\uff1aLinux version 5.4.0-96-generic (buildd@lgw01-amd64-051)"),(0,r.yg)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff1aUbuntu 20.04 LTS (Focal Fossa)"),(0,r.yg)("li",{parentName:"ul"},"Doris \u8f6f\u4ef6\u7248\u672c\uff1aApache Doris 2.1.1-rc03\u3001Apache Doris 2.0.6"),(0,r.yg)("li",{parentName:"ul"},'JDK\uff1aopenjdk version "1.8.0_131"')),(0,r.yg)("h2",{id:"3-\u6d4b\u8bd5\u6570\u636e\u91cf"},"3. \u6d4b\u8bd5\u6570\u636e\u91cf"),(0,r.yg)("p",null,"\u6574\u4e2a\u6d4b\u8bd5\u6a21\u62df\u751f\u6210 TPC-DS 1000G \u7684\u6570\u636e\u5206\u522b\u5bfc\u5165\u5230 Apache Doris 2.1.1-rc03 \u548c Apache Doris 2.0.6 \u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4e0b\u9762\u662f\u8868\u7684\u76f8\u5173\u8bf4\u660e\u53ca\u6570\u636e\u91cf\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"TPC-DS \u8868\u540d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u884c\u6570"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"customer_demographics"),(0,r.yg)("td",{parentName:"tr",align:null},"1,920,800")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"reason"),(0,r.yg)("td",{parentName:"tr",align:null},"65")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"warehouse"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date_dim"),(0,r.yg)("td",{parentName:"tr",align:null},"73,049")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_sales"),(0,r.yg)("td",{parentName:"tr",align:null},"1,439,980,416")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"call_center"),(0,r.yg)("td",{parentName:"tr",align:null},"42")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inventory"),(0,r.yg)("td",{parentName:"tr",align:null},"783,000,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_returns"),(0,r.yg)("td",{parentName:"tr",align:null},"143,996,756")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"household_demographics"),(0,r.yg)("td",{parentName:"tr",align:null},"7,200")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"customer_address"),(0,r.yg)("td",{parentName:"tr",align:null},"6,000,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"income_band"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_page"),(0,r.yg)("td",{parentName:"tr",align:null},"30,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"item"),(0,r.yg)("td",{parentName:"tr",align:null},"300,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"web_returns"),(0,r.yg)("td",{parentName:"tr",align:null},"71,997,522")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"web_site"),(0,r.yg)("td",{parentName:"tr",align:null},"54")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"promotion"),(0,r.yg)("td",{parentName:"tr",align:null},"1,500")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"web_sales"),(0,r.yg)("td",{parentName:"tr",align:null},"720,000,376")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"store"),(0,r.yg)("td",{parentName:"tr",align:null},"1,002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"web_page"),(0,r.yg)("td",{parentName:"tr",align:null},"3,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"time_dim"),(0,r.yg)("td",{parentName:"tr",align:null},"86,400")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"store_returns"),(0,r.yg)("td",{parentName:"tr",align:null},"287,999,764")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"store_sales"),(0,r.yg)("td",{parentName:"tr",align:null},"2,879,987,999")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ship_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"customer"),(0,r.yg)("td",{parentName:"tr",align:null},"12,000,000")))),(0,r.yg)("h2",{id:"4-\u6d4b\u8bd5-sql"},"4. \u6d4b\u8bd5 SQL"),(0,r.yg)("p",null,"TPC-DS 99 \u4e2a\u6d4b\u8bd5\u67e5\u8be2\u8bed\u53e5\uff1a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/tpcds-tools/queries/sf1000"},"TPC-DS-Query-SQL")),(0,r.yg)("h2",{id:"5-\u6d4b\u8bd5\u7ed3\u679c"},"5. \u6d4b\u8bd5\u7ed3\u679c"),(0,r.yg)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 Apache Doris 2.1.1-rc03 \u548c Apache Doris 2.0.6 \u7248\u672c\u8fdb\u884c\u5bf9\u6bd4\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Query"),(0,r.yg)("th",{parentName:"tr",align:null},"Apache Doris 2.1.1-rc03  (ms)"),(0,r.yg)("th",{parentName:"tr",align:null},"Apache Doris 2.0.6  (ms)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query1"),(0,r.yg)("td",{parentName:"tr",align:null},"729"),(0,r.yg)("td",{parentName:"tr",align:null},"914")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query2"),(0,r.yg)("td",{parentName:"tr",align:null},"5120"),(0,r.yg)("td",{parentName:"tr",align:null},"4669")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query3"),(0,r.yg)("td",{parentName:"tr",align:null},"286"),(0,r.yg)("td",{parentName:"tr",align:null},"285")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query4"),(0,r.yg)("td",{parentName:"tr",align:null},"11633"),(0,r.yg)("td",{parentName:"tr",align:null},"35148")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query5"),(0,r.yg)("td",{parentName:"tr",align:null},"641"),(0,r.yg)("td",{parentName:"tr",align:null},"22979")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query6"),(0,r.yg)("td",{parentName:"tr",align:null},"267"),(0,r.yg)("td",{parentName:"tr",align:null},"1351")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query7"),(0,r.yg)("td",{parentName:"tr",align:null},"468"),(0,r.yg)("td",{parentName:"tr",align:null},"517")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query8"),(0,r.yg)("td",{parentName:"tr",align:null},"263"),(0,r.yg)("td",{parentName:"tr",align:null},"591")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query9"),(0,r.yg)("td",{parentName:"tr",align:null},"4444"),(0,r.yg)("td",{parentName:"tr",align:null},"5430")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query10"),(0,r.yg)("td",{parentName:"tr",align:null},"418"),(0,r.yg)("td",{parentName:"tr",align:null},"3341")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query11"),(0,r.yg)("td",{parentName:"tr",align:null},"7246"),(0,r.yg)("td",{parentName:"tr",align:null},"23300")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query12"),(0,r.yg)("td",{parentName:"tr",align:null},"115"),(0,r.yg)("td",{parentName:"tr",align:null},"105")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query13"),(0,r.yg)("td",{parentName:"tr",align:null},"661"),(0,r.yg)("td",{parentName:"tr",align:null},"1719")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query14"),(0,r.yg)("td",{parentName:"tr",align:null},"13955"),(0,r.yg)("td",{parentName:"tr",align:null},"33254")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query15"),(0,r.yg)("td",{parentName:"tr",align:null},"474"),(0,r.yg)("td",{parentName:"tr",align:null},"1414")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query16"),(0,r.yg)("td",{parentName:"tr",align:null},"366"),(0,r.yg)("td",{parentName:"tr",align:null},"402")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query17"),(0,r.yg)("td",{parentName:"tr",align:null},"1097"),(0,r.yg)("td",{parentName:"tr",align:null},"2371")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query18"),(0,r.yg)("td",{parentName:"tr",align:null},"581"),(0,r.yg)("td",{parentName:"tr",align:null},"760")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query19"),(0,r.yg)("td",{parentName:"tr",align:null},"283"),(0,r.yg)("td",{parentName:"tr",align:null},"308")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query20"),(0,r.yg)("td",{parentName:"tr",align:null},"137"),(0,r.yg)("td",{parentName:"tr",align:null},"117")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query21"),(0,r.yg)("td",{parentName:"tr",align:null},"110"),(0,r.yg)("td",{parentName:"tr",align:null},"94")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query22"),(0,r.yg)("td",{parentName:"tr",align:null},"1996"),(0,r.yg)("td",{parentName:"tr",align:null},"2481")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query23"),(0,r.yg)("td",{parentName:"tr",align:null},"44826"),(0,r.yg)("td",{parentName:"tr",align:null},"77381")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query24"),(0,r.yg)("td",{parentName:"tr",align:null},"9873"),(0,r.yg)("td",{parentName:"tr",align:null},"23910")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query25"),(0,r.yg)("td",{parentName:"tr",align:null},"666"),(0,r.yg)("td",{parentName:"tr",align:null},"1021")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query26"),(0,r.yg)("td",{parentName:"tr",align:null},"221"),(0,r.yg)("td",{parentName:"tr",align:null},"213")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query27"),(0,r.yg)("td",{parentName:"tr",align:null},"490"),(0,r.yg)("td",{parentName:"tr",align:null},"544")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query28"),(0,r.yg)("td",{parentName:"tr",align:null},"4089"),(0,r.yg)("td",{parentName:"tr",align:null},"4593")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query29"),(0,r.yg)("td",{parentName:"tr",align:null},"768"),(0,r.yg)("td",{parentName:"tr",align:null},"1024")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query30"),(0,r.yg)("td",{parentName:"tr",align:null},"313"),(0,r.yg)("td",{parentName:"tr",align:null},"682")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query31"),(0,r.yg)("td",{parentName:"tr",align:null},"1847"),(0,r.yg)("td",{parentName:"tr",align:null},"2252")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query32"),(0,r.yg)("td",{parentName:"tr",align:null},"71"),(0,r.yg)("td",{parentName:"tr",align:null},"68")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query33"),(0,r.yg)("td",{parentName:"tr",align:null},"460"),(0,r.yg)("td",{parentName:"tr",align:null},"539")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query34"),(0,r.yg)("td",{parentName:"tr",align:null},"629"),(0,r.yg)("td",{parentName:"tr",align:null},"638")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query35"),(0,r.yg)("td",{parentName:"tr",align:null},"1660"),(0,r.yg)("td",{parentName:"tr",align:null},"10505")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query36"),(0,r.yg)("td",{parentName:"tr",align:null},"412"),(0,r.yg)("td",{parentName:"tr",align:null},"441")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query37"),(0,r.yg)("td",{parentName:"tr",align:null},"94"),(0,r.yg)("td",{parentName:"tr",align:null},"86")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query38"),(0,r.yg)("td",{parentName:"tr",align:null},"8804"),(0,r.yg)("td",{parentName:"tr",align:null},"8379")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query39"),(0,r.yg)("td",{parentName:"tr",align:null},"606"),(0,r.yg)("td",{parentName:"tr",align:null},"898")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query40"),(0,r.yg)("td",{parentName:"tr",align:null},"164"),(0,r.yg)("td",{parentName:"tr",align:null},"190")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query41"),(0,r.yg)("td",{parentName:"tr",align:null},"55"),(0,r.yg)("td",{parentName:"tr",align:null},"30")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query42"),(0,r.yg)("td",{parentName:"tr",align:null},"115"),(0,r.yg)("td",{parentName:"tr",align:null},"113")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query43"),(0,r.yg)("td",{parentName:"tr",align:null},"804"),(0,r.yg)("td",{parentName:"tr",align:null},"1332")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query44"),(0,r.yg)("td",{parentName:"tr",align:null},"1509"),(0,r.yg)("td",{parentName:"tr",align:null},"1520")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query45"),(0,r.yg)("td",{parentName:"tr",align:null},"1678"),(0,r.yg)("td",{parentName:"tr",align:null},"1306")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query46"),(0,r.yg)("td",{parentName:"tr",align:null},"1196"),(0,r.yg)("td",{parentName:"tr",align:null},"2167")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query47"),(0,r.yg)("td",{parentName:"tr",align:null},"2812"),(0,r.yg)("td",{parentName:"tr",align:null},"3859")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query48"),(0,r.yg)("td",{parentName:"tr",align:null},"559"),(0,r.yg)("td",{parentName:"tr",align:null},"1419")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query49"),(0,r.yg)("td",{parentName:"tr",align:null},"646"),(0,r.yg)("td",{parentName:"tr",align:null},"725")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query50"),(0,r.yg)("td",{parentName:"tr",align:null},"757"),(0,r.yg)("td",{parentName:"tr",align:null},"1299")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query51"),(0,r.yg)("td",{parentName:"tr",align:null},"6380"),(0,r.yg)("td",{parentName:"tr",align:null},"4954")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query52"),(0,r.yg)("td",{parentName:"tr",align:null},"128"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query53"),(0,r.yg)("td",{parentName:"tr",align:null},"396"),(0,r.yg)("td",{parentName:"tr",align:null},"391")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query54"),(0,r.yg)("td",{parentName:"tr",align:null},"388"),(0,r.yg)("td",{parentName:"tr",align:null},"8212")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query55"),(0,r.yg)("td",{parentName:"tr",align:null},"124"),(0,r.yg)("td",{parentName:"tr",align:null},"124")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query56"),(0,r.yg)("td",{parentName:"tr",align:null},"360"),(0,r.yg)("td",{parentName:"tr",align:null},"434")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query57"),(0,r.yg)("td",{parentName:"tr",align:null},"1811"),(0,r.yg)("td",{parentName:"tr",align:null},"2494")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query58"),(0,r.yg)("td",{parentName:"tr",align:null},"304"),(0,r.yg)("td",{parentName:"tr",align:null},"666")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query59"),(0,r.yg)("td",{parentName:"tr",align:null},"5758"),(0,r.yg)("td",{parentName:"tr",align:null},"7432")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query60"),(0,r.yg)("td",{parentName:"tr",align:null},"474"),(0,r.yg)("td",{parentName:"tr",align:null},"481")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query61"),(0,r.yg)("td",{parentName:"tr",align:null},"486"),(0,r.yg)("td",{parentName:"tr",align:null},"536")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query62"),(0,r.yg)("td",{parentName:"tr",align:null},"647"),(0,r.yg)("td",{parentName:"tr",align:null},"1082")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query63"),(0,r.yg)("td",{parentName:"tr",align:null},"358"),(0,r.yg)("td",{parentName:"tr",align:null},"303")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query64"),(0,r.yg)("td",{parentName:"tr",align:null},"3250"),(0,r.yg)("td",{parentName:"tr",align:null},"4968")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query65"),(0,r.yg)("td",{parentName:"tr",align:null},"5410"),(0,r.yg)("td",{parentName:"tr",align:null},"5971")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query66"),(0,r.yg)("td",{parentName:"tr",align:null},"484"),(0,r.yg)("td",{parentName:"tr",align:null},"603")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query67"),(0,r.yg)("td",{parentName:"tr",align:null},"26347"),(0,r.yg)("td",{parentName:"tr",align:null},"34052")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query68"),(0,r.yg)("td",{parentName:"tr",align:null},"1422"),(0,r.yg)("td",{parentName:"tr",align:null},"1428")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query69"),(0,r.yg)("td",{parentName:"tr",align:null},"654"),(0,r.yg)("td",{parentName:"tr",align:null},"808")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query70"),(0,r.yg)("td",{parentName:"tr",align:null},"2285"),(0,r.yg)("td",{parentName:"tr",align:null},"4462")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query71"),(0,r.yg)("td",{parentName:"tr",align:null},"650"),(0,r.yg)("td",{parentName:"tr",align:null},"1006")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query72"),(0,r.yg)("td",{parentName:"tr",align:null},"4324"),(0,r.yg)("td",{parentName:"tr",align:null},"4717")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query73"),(0,r.yg)("td",{parentName:"tr",align:null},"500"),(0,r.yg)("td",{parentName:"tr",align:null},"558")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query74"),(0,r.yg)("td",{parentName:"tr",align:null},"6678"),(0,r.yg)("td",{parentName:"tr",align:null},"14127")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query75"),(0,r.yg)("td",{parentName:"tr",align:null},"3734"),(0,r.yg)("td",{parentName:"tr",align:null},"6312")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query76"),(0,r.yg)("td",{parentName:"tr",align:null},"1835"),(0,r.yg)("td",{parentName:"tr",align:null},"1870")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query77"),(0,r.yg)("td",{parentName:"tr",align:null},"382"),(0,r.yg)("td",{parentName:"tr",align:null},"496")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query78"),(0,r.yg)("td",{parentName:"tr",align:null},"19923"),(0,r.yg)("td",{parentName:"tr",align:null},"23091")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query79"),(0,r.yg)("td",{parentName:"tr",align:null},"3061"),(0,r.yg)("td",{parentName:"tr",align:null},"4090")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query80"),(0,r.yg)("td",{parentName:"tr",align:null},"851"),(0,r.yg)("td",{parentName:"tr",align:null},"1559")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query81"),(0,r.yg)("td",{parentName:"tr",align:null},"565"),(0,r.yg)("td",{parentName:"tr",align:null},"960")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query82"),(0,r.yg)("td",{parentName:"tr",align:null},"242"),(0,r.yg)("td",{parentName:"tr",align:null},"221")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query83"),(0,r.yg)("td",{parentName:"tr",align:null},"254"),(0,r.yg)("td",{parentName:"tr",align:null},"415")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query84"),(0,r.yg)("td",{parentName:"tr",align:null},"203"),(0,r.yg)("td",{parentName:"tr",align:null},"131")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query85"),(0,r.yg)("td",{parentName:"tr",align:null},"364"),(0,r.yg)("td",{parentName:"tr",align:null},"444")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query86"),(0,r.yg)("td",{parentName:"tr",align:null},"651"),(0,r.yg)("td",{parentName:"tr",align:null},"931")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query87"),(0,r.yg)("td",{parentName:"tr",align:null},"8972"),(0,r.yg)("td",{parentName:"tr",align:null},"8554")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query88"),(0,r.yg)("td",{parentName:"tr",align:null},"4095"),(0,r.yg)("td",{parentName:"tr",align:null},"5202")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query89"),(0,r.yg)("td",{parentName:"tr",align:null},"508"),(0,r.yg)("td",{parentName:"tr",align:null},"480")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query90"),(0,r.yg)("td",{parentName:"tr",align:null},"233"),(0,r.yg)("td",{parentName:"tr",align:null},"322")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query91"),(0,r.yg)("td",{parentName:"tr",align:null},"174"),(0,r.yg)("td",{parentName:"tr",align:null},"159")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query92"),(0,r.yg)("td",{parentName:"tr",align:null},"62"),(0,r.yg)("td",{parentName:"tr",align:null},"59")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query93"),(0,r.yg)("td",{parentName:"tr",align:null},"1601"),(0,r.yg)("td",{parentName:"tr",align:null},"1618")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query94"),(0,r.yg)("td",{parentName:"tr",align:null},"297"),(0,r.yg)("td",{parentName:"tr",align:null},"297")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query95"),(0,r.yg)("td",{parentName:"tr",align:null},"1240"),(0,r.yg)("td",{parentName:"tr",align:null},"27354")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query96"),(0,r.yg)("td",{parentName:"tr",align:null},"508"),(0,r.yg)("td",{parentName:"tr",align:null},"847")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query97"),(0,r.yg)("td",{parentName:"tr",align:null},"5449"),(0,r.yg)("td",{parentName:"tr",align:null},"11528")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query98"),(0,r.yg)("td",{parentName:"tr",align:null},"382"),(0,r.yg)("td",{parentName:"tr",align:null},"287")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query99"),(0,r.yg)("td",{parentName:"tr",align:null},"1410"),(0,r.yg)("td",{parentName:"tr",align:null},"2147")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Total")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"264028")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"487990"))))),(0,r.yg)("h2",{id:"6-\u73af\u5883\u51c6\u5907"},"6. \u73af\u5883\u51c6\u5907"),(0,r.yg)("p",null,"\u8bf7\u5148\u53c2\u7167 ",(0,r.yg)("a",{parentName:"p",href:"../install/cluster-deployment/standard-deployment"},"\u5b98\u65b9\u6587\u6863")," \u8fdb\u884c Doris \u7684\u5b89\u88c5\u90e8\u7f72\uff0c\u4ee5\u83b7\u5f97\u4e00\u4e2a\u6b63\u5e38\u8fd0\u884c\u4e2d\u7684 Doris \u96c6\u7fa4\uff08\u81f3\u5c11\u5305\u542b 1 FE 1 BE\uff0c\u63a8\u8350 1 FE 3 BE\uff09\u3002"),(0,r.yg)("h2",{id:"7-\u6570\u636e\u51c6\u5907"},"7. \u6570\u636e\u51c6\u5907"),(0,r.yg)("h3",{id:"71-\u4e0b\u8f7d\u5b89\u88c5-tpc-ds-\u6570\u636e\u751f\u6210\u5de5\u5177"},"7.1 \u4e0b\u8f7d\u5b89\u88c5 TPC-DS \u6570\u636e\u751f\u6210\u5de5\u5177"),(0,r.yg)("p",null,"\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u4e0b\u8f7d\u5e76\u7f16\u8bd1  ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/tpcds-tools"},"tpcds-tools"),"  \u5de5\u5177\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/build-tpcds-tools.sh\n")),(0,r.yg)("h3",{id:"72-\u751f\u6210-tpc-ds-\u6d4b\u8bd5\u96c6"},"7.2 \u751f\u6210 TPC-DS \u6d4b\u8bd5\u96c6"),(0,r.yg)("p",null,"\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210 TPC-DS \u6570\u636e\u96c6\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/gen-tpcds-data.sh -s 1000\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8 1\uff1a\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"sh gen-tpcds-data.sh -h")," \u67e5\u770b\u811a\u672c\u5e2e\u52a9\u3002"),(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8 2\uff1a\u6570\u636e\u4f1a\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"p"},".dat")," \u4e3a\u540e\u7f00\u751f\u6210\u5728  ",(0,r.yg)("inlineCode",{parentName:"p"},"tpcds-data/")," \u76ee\u5f55\u4e0b\u3002\u6587\u4ef6\u603b\u5927\u5c0f\u7ea6 1000GB\u3002\u751f\u6210\u65f6\u95f4\u53ef\u80fd\u5728\u6570\u5206\u949f\u5230 1 \u5c0f\u65f6\u4e0d\u7b49\u3002"),(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8 3\uff1a\u9ed8\u8ba4\u751f\u6210 100G \u7684\u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6")),(0,r.yg)("h3",{id:"73-\u5efa\u8868"},"7.3 \u5efa\u8868"),(0,r.yg)("h4",{id:"731-\u51c6\u5907-doris-clusterconf-\u6587\u4ef6"},"7.3.1 \u51c6\u5907 ",(0,r.yg)("inlineCode",{parentName:"h4"},"doris-cluster.conf")," \u6587\u4ef6"),(0,r.yg)("p",null,"\u5728\u8c03\u7528\u5bfc\u5165\u811a\u672c\u524d\uff0c\u9700\u8981\u5c06 FE \u7684 ip \u7aef\u53e3\u7b49\u4fe1\u606f\u5199\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"doris-cluster.conf")," \u6587\u4ef6\u4e2d\u3002"),(0,r.yg)("p",null,"\u6587\u4ef6\u4f4d\u7f6e\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/tools/tpcds-tools/conf/")," \u76ee\u5f55\u4e0b\u3002"),(0,r.yg)("p",null,"\u6587\u4ef6\u5185\u5bb9\u5305\u62ec FE \u7684 ip\uff0cHTTP \u7aef\u53e3\uff0c\u7528\u6237\u540d\uff0c\u5bc6\u7801\u4ee5\u53ca\u5f85\u5bfc\u5165\u6570\u636e\u7684 DB \u540d\u79f0\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# Any of FE host\nexport FE_HOST='127.0.0.1'\n# http_port in fe.conf\nexport FE_HTTP_PORT=8030\n# query_port in fe.conf\nexport FE_QUERY_PORT=9030\n# Doris username\nexport USER='root'\n# Doris password\nexport PASSWORD=''\n# The database where TPC-DS tables located\nexport DB='tpcds'\n")),(0,r.yg)("h4",{id:"732-\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa-tpc-ds-\u8868"},"7.3.2 \u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa TPC-DS \u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/create-tpcds-tables.sh -s 1000\n")),(0,r.yg)("p",null,"\u6216\u8005\u590d\u5236 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/tools/tpcds-tools/ddl/create-tpcds-tables-sf1000.sql"},"create-tpcds-tables.sql")," \u4e2d\u7684\u5efa\u8868\u8bed\u53e5\uff0c\u5728 Doris \u4e2d\u6267\u884c\u3002"),(0,r.yg)("h3",{id:"74-\u5bfc\u5165\u6570\u636e"},"7.4 \u5bfc\u5165\u6570\u636e"),(0,r.yg)("p",null,"\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u6267\u884c\u6570\u636e\u5bfc\u5165\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/load-tpcds-data.sh\n")),(0,r.yg)("h3",{id:"75-\u67e5\u8be2\u6d4b\u8bd5"},"7.5 \u67e5\u8be2\u6d4b\u8bd5"),(0,r.yg)("h3",{id:"751-\u6267\u884c\u67e5\u8be2\u811a\u672c"},"7.5.1 \u6267\u884c\u67e5\u8be2\u811a\u672c"),(0,r.yg)("p",null,"\u5355\u4e2a SQL \u6267\u884c \u6216\u8005 \u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/run-tpcds-queries.sh -s 1000\n")),(0,r.yg)("h3",{id:"752-\u5355\u4e2a-sql-\u6267\u884c"},"7.5.2 \u5355\u4e2a SQL \u6267\u884c"),(0,r.yg)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4ece\u4ee3\u7801\u5e93\u91cc\u83b7\u53d6\u6700\u65b0\u7684 SQL\u3002\u6700\u65b0\u6d4b\u8bd5\u67e5\u8be2\u8bed\u53e5\u5730\u5740\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/tpcds-tools/queries/sf1000"},"TPC-DS \u6d4b\u8bd5\u67e5\u8be2\u8bed\u53e5")))}i.isMDXComponent=!0},904198:(t,a,e)=>{e.d(a,{A:()=>n});const n=e.p+"assets/images/tpcds_2.1-db834ed5c09bb01e81613338c4232bc8.png"}}]);