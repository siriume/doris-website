"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[85050],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=l,m=s["".concat(g,".").concat(d)]||s[d]||y[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},929024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(58168),l=(n(296540),n(15680));const r={title:"Logstash Doris Output Plugin",language:"zh-CN"},o=void 0,i={unversionedId:"ecosystem/logstash",id:"version-1.2/ecosystem/logstash",title:"Logstash Doris Output Plugin",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/ecosystem/logstash.md",sourceDirName:"ecosystem",slug:"/ecosystem/logstash",permalink:"/zh-CN/docs/1.2/ecosystem/logstash",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Logstash Doris Output Plugin",language:"zh-CN"},sidebar:"docs",previous:{title:"Kyuubi",permalink:"/zh-CN/docs/1.2/ecosystem/kyuubi"},next:{title:"Beats Doris Output Plugin",permalink:"/zh-CN/docs/1.2/ecosystem/beats"}},g={},p=[{value:"\u5b89\u88c5\u548c\u7f16\u8bd1",id:"\u5b89\u88c5\u548c\u7f16\u8bd1",level:2},{value:"1.\u4e0b\u8f7d\u63d2\u4ef6\u6e90\u7801",id:"1\u4e0b\u8f7d\u63d2\u4ef6\u6e90\u7801",level:3},{value:"2.\u7f16\u8bd1",id:"2\u7f16\u8bd1",level:3},{value:"3.\u63d2\u4ef6\u5b89\u88c5",id:"3\u63d2\u4ef6\u5b89\u88c5",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u5b8c\u6574\u4f7f\u7528\u793a\u4f8b",id:"\u5b8c\u6574\u4f7f\u7528\u793a\u4f8b",level:2},{value:"1.\u7f16\u8bd1doris-output-plugin",id:"1\u7f16\u8bd1doris-output-plugin",level:3},{value:"2.\u5b89\u88c5\u914d\u7f6efilebeat(\u6b64\u5904\u4f7f\u7528filebeat\u4f5c\u4e3ainput)",id:"2\u5b89\u88c5\u914d\u7f6efilebeat\u6b64\u5904\u4f7f\u7528filebeat\u4f5c\u4e3ainput",level:3},{value:"3.\u5b89\u88c5logstash\u53cadoris-out-plugin",id:"3\u5b89\u88c5logstash\u53cadoris-out-plugin",level:3},{value:"4.\u6d4b\u8bd5\u529f\u80fd",id:"4\u6d4b\u8bd5\u529f\u80fd",level:3}],u={toc:p},s="wrapper";function y(e){let{components:t,...n}=e;return(0,l.yg)(s,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"doris-output-plugin"},"Doris output plugin"),(0,l.yg)("p",null,"\u8be5\u63d2\u4ef6\u7528\u4e8elogstash\u8f93\u51fa\u6570\u636e\u5230Doris\uff0c\u4f7f\u7528 HTTP \u534f\u8bae\u4e0e Doris FE Http\u63a5\u53e3\u4ea4\u4e92\uff0c\u5e76\u901a\u8fc7 Doris \u7684 stream load \u7684\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u5bfc\u5165."),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/data-operate/import/import-way/stream-load-manual"},"\u4e86\u89e3Doris Stream Load")),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/zh-CN"},"\u4e86\u89e3\u66f4\u591a\u5173\u4e8eDoris")),(0,l.yg)("h2",{id:"\u5b89\u88c5\u548c\u7f16\u8bd1"},"\u5b89\u88c5\u548c\u7f16\u8bd1"),(0,l.yg)("h3",{id:"1\u4e0b\u8f7d\u63d2\u4ef6\u6e90\u7801"},"1.\u4e0b\u8f7d\u63d2\u4ef6\u6e90\u7801"),(0,l.yg)("h3",{id:"2\u7f16\u8bd1"},"2.\u7f16\u8bd1"),(0,l.yg)("p",null,"\u5728extension/logstash/ \u76ee\u5f55\u4e0b\u6267\u884c"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"gem build logstash-output-doris.gemspec")),(0,l.yg)("p",null,"\u4f60\u5c06\u5728\u540c\u76ee\u5f55\u4e0b\u5f97\u5230 logstash-output-doris-{version}.gem \u6587\u4ef6"),(0,l.yg)("h3",{id:"3\u63d2\u4ef6\u5b89\u88c5"},"3.\u63d2\u4ef6\u5b89\u88c5"),(0,l.yg)("p",null,"copy logstash-output-doris-{version}.gem \u5230 logstash \u5b89\u88c5\u76ee\u5f55\u4e0b"),(0,l.yg)("p",null,"\u6267\u884c\u547d\u4ee4"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"./bin/logstash-plugin install logstash-output-doris-{version}.gem")),(0,l.yg)("p",null,"\u5b89\u88c5 logstash-output-doris \u63d2\u4ef6"),(0,l.yg)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.yg)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b\uff1a"),(0,l.yg)("p",null,"\u5728config\u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a\u914d\u7f6e\u914d\u7f6e\u6587\u4ef6\uff0c\u547d\u540d\u4e3a logstash-doris.conf"),(0,l.yg)("p",null,"\u5177\u4f53\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'output {\n    doris {\n        http_hosts => [ "http://fehost:8030" ]\n        user => user_name\n        password => password\n        db => "db_name"\n        table => "table_name"\n        label_prefix => "label_prefix"\n        column_separator => ","\n    }\n}\n')),(0,l.yg)("p",null,"\u914d\u7f6e\u8bf4\u660e\uff1a"),(0,l.yg)("p",null,"\u8fde\u63a5\u76f8\u5173\u914d\u7f6e\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"http_hosts")),(0,l.yg)("td",{parentName:"tr",align:null},"FE\u7684HTTP\u4ea4\u4e92\u5730\u5740\u3002 \u4f8b\u5982\uff1a  ",'["http://fe1:8030", "http://fe2:8030"]')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"user")),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\uff0c\u8be5\u7528\u6237\u9700\u8981\u6709doris\u5bf9\u5e94\u5e93\u8868\u7684\u5bfc\u5165\u6743\u9650")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"password")),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"db")),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"table")),(0,l.yg)("td",{parentName:"tr",align:null},"\u8868\u540d")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"label_prefix")),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u6807\u8bc6\u524d\u7f00\uff0c\u6700\u7ec8\u751f\u6210\u7684\u6807\u8bc6\u4e3a ",(0,l.yg)("em",{parentName:"td"},"{label","_","prefix}","_","{db}","_","{table}","_","{time_stamp}"))))),(0,l.yg)("p",null,"\u5bfc\u5165\u76f8\u5173\u914d\u7f6e\uff1a(",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/data-operate/import/import-way/stream-load-manual"},"\u53c2\u8003\u6587\u6863")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"column_separator")),(0,l.yg)("td",{parentName:"tr",align:null},"\u5217\u5206\u5272\u7b26\uff0c\u9ed8\u8ba4\u4e3a\\t\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"columns")),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u6587\u4ef6\u4e2d\u7684\u5217\u548c table \u4e2d\u7684\u5217\u7684\u5bf9\u5e94\u5173\u7cfb\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"where")),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u4efb\u52a1\u6307\u5b9a\u7684\u8fc7\u6ee4\u6761\u4ef6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"max_filter_ratio")),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u4efb\u52a1\u7684\u6700\u5927\u5bb9\u5fcd\u7387\uff0c\u9ed8\u8ba4\u96f6\u5bb9\u5fcd\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"partition")),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f85\u5bfc\u5165\u8868\u7684 Partition \u4fe1\u606f\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"timeout")),(0,l.yg)("td",{parentName:"tr",align:null},"\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a600s\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"strict_mode")),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e25\u683c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3afalse\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"timezone")),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u672c\u6b21\u5bfc\u5165\u6240\u4f7f\u7528\u7684\u65f6\u533a\uff0c\u9ed8\u8ba4\u4e3a\u4e1c\u516b\u533a\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"exec_mem_limit")),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u5185\u5b58\u9650\u5236\uff0c\u9ed8\u8ba4\u4e3a 2GB\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\u3002")))),(0,l.yg)("p",null,"\u5176\u4ed6\u914d\u7f6e"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"save_on_failure")),(0,l.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u5bfc\u5165\u5931\u8d25\u662f\u5426\u5728\u672c\u5730\u4fdd\u5b58\uff0c\u9ed8\u8ba4\u4e3atrue")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"save_dir")),(0,l.yg)("td",{parentName:"tr",align:null},"\u672c\u5730\u4fdd\u5b58\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a /tmp")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"automatic_retries")),(0,l.yg)("td",{parentName:"tr",align:null},"\u5931\u8d25\u65f6\u91cd\u8bd5\u6700\u5927\u6b21\u6570\uff0c\u9ed8\u8ba4\u4e3a3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"batch_size")),(0,l.yg)("td",{parentName:"tr",align:null},"\u6bcf\u6279\u6b21\u6700\u591a\u5904\u7406\u7684event\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a100000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"idle_flush_time")),(0,l.yg)("td",{parentName:"tr",align:null},"\u6700\u5927\u95f4\u9694\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a20\uff08\u79d2\uff09")))),(0,l.yg)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,l.yg)("p",null,"\u6267\u884c\u547d\u4ee4\u542f\u52a8doris output plugin\uff1a"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"{logstash-home}/bin/logstash -f {logstash-home}/config/logstash-doris.conf --config.reload.automatic")),(0,l.yg)("h2",{id:"\u5b8c\u6574\u4f7f\u7528\u793a\u4f8b"},"\u5b8c\u6574\u4f7f\u7528\u793a\u4f8b"),(0,l.yg)("h3",{id:"1\u7f16\u8bd1doris-output-plugin"},"1.\u7f16\u8bd1doris-output-plugin"),(0,l.yg)("p",null,"1> \u4e0b\u8f7druby\u538b\u7f29\u5305\uff0c\u81ea\u884c\u5230",(0,l.yg)("a",{parentName:"p",href:"https://www.ruby-lang.org/en/downloads/"},"ruby\u5b98\u7f51"),"\u4e0b\u8f7d\uff0c\u8fd9\u91cc\u4f7f\u7528\u76842.7.1\u7248\u672c"),(0,l.yg)("p",null,"2> \u7f16\u8bd1\u5b89\u88c5\uff0c\u914d\u7f6eruby\u7684\u73af\u5883\u53d8\u91cf"),(0,l.yg)("p",null,"3> \u5230doris\u6e90\u7801 extension/logstash/ \u76ee\u5f55\u4e0b\uff0c\u6267\u884c"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"gem build logstash-output-doris.gemspec")),(0,l.yg)("p",null,"\u5f97\u5230\u6587\u4ef6 logstash-output-doris-0.1.0.gem\uff0c\u81f3\u6b64\u7f16\u8bd1\u5b8c\u6210"),(0,l.yg)("h3",{id:"2\u5b89\u88c5\u914d\u7f6efilebeat\u6b64\u5904\u4f7f\u7528filebeat\u4f5c\u4e3ainput"},"2.\u5b89\u88c5\u914d\u7f6efilebeat(\u6b64\u5904\u4f7f\u7528filebeat\u4f5c\u4e3ainput)"),(0,l.yg)("p",null,"1> ",(0,l.yg)("a",{parentName:"p",href:"https://www.elastic.co/"},"es\u5b98\u7f51"),"\u4e0b\u8f7d filebeat tar\u538b\u7f29\u5305\u5e76\u89e3\u538b"),(0,l.yg)("p",null,"2> \u8fdb\u5165filebeat\u76ee\u5f55\u4e0b\uff0c\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 filebeat.yml \u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'filebeat.inputs:\n- type: log\n  paths:\n    - /tmp/doris.data\noutput.logstash:\n  hosts: ["localhost:5044"]\n')),(0,l.yg)("p",null,"/tmp/doris.data \u4e3adoris\u6570\u636e\u8def\u5f84"),(0,l.yg)("p",null,"3> \u542f\u52a8filebeat\uff1a"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},'./filebeat -e -c filebeat.yml -d "publish"')),(0,l.yg)("h3",{id:"3\u5b89\u88c5logstash\u53cadoris-out-plugin"},"3.\u5b89\u88c5logstash\u53cadoris-out-plugin"),(0,l.yg)("p",null,"1> ",(0,l.yg)("a",{parentName:"p",href:"https://www.elastic.co/"},"es\u5b98\u7f51"),"\u4e0b\u8f7d logstash tar\u538b\u7f29\u5305\u5e76\u89e3\u538b"),(0,l.yg)("p",null,"2> \u5c06\u6b65\u9aa41\u4e2d\u5f97\u5230\u7684 logstash-output-doris-0.1.0.gem copy\u5230logstash\u5b89\u88c5\u76ee\u5f55\u4e0b"),(0,l.yg)("p",null,"3> \u6267\u884c"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"./bin/logstash-plugin install logstash-output-doris-0.1.0.gem")),(0,l.yg)("p",null,"\u5b89\u88c5\u63d2\u4ef6"),(0,l.yg)("p",null,"4> \u5728config \u76ee\u5f55\u4e0b\u65b0\u5efa\u914d\u7f6e\u6587\u4ef6 logstash-doris.conf \u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'input {\n    beats {\n        port => "5044"\n    }\n}\n\noutput {\n    doris {\n        http_hosts => [ "http://127.0.0.1:8030" ]\n        user => doris\n        password => doris\n        db => "logstash_output_test"\n        table => "output"\n        label_prefix => "doris"\n        column_separator => ","\n        columns => "a,b,c,d,e"\n    }\n}\n')),(0,l.yg)("p",null,"\u8fd9\u91cc\u7684\u914d\u7f6e\u9700\u6309\u7167\u914d\u7f6e\u8bf4\u660e\u81ea\u884c\u914d\u7f6e"),(0,l.yg)("p",null,"5> \u542f\u52a8logstash\uff1a"),(0,l.yg)("p",null,"./bin/logstash -f ./config/logstash-doris.conf --config.reload.automatic"),(0,l.yg)("h3",{id:"4\u6d4b\u8bd5\u529f\u80fd"},"4.\u6d4b\u8bd5\u529f\u80fd"),(0,l.yg)("p",null,"\u5411/tmp/doris.data\u8ffd\u52a0\u5199\u5165\u6570\u636e"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"echo a,b,c,d,e >> /tmp/doris.data")),(0,l.yg)("p",null,"\u89c2\u5bdflogstash\u65e5\u5fd7\uff0c\u82e5\u8fd4\u56deresponse\u7684Status\u4e3a Success\uff0c\u5219\u5bfc\u5165\u6210\u529f\uff0c\u6b64\u65f6\u53ef\u5728 logstash_output_test.output \u8868\u4e2d\u67e5\u770b\u5df2\u5bfc\u5165\u7684\u6570\u636e"))}y.isMDXComponent=!0}}]);