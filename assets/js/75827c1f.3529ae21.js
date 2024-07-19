"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96034],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=n,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},651071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(58168),n=(a(296540),a(15680));const o={title:"Apache Superset",language:"en"},i=void 0,s={unversionedId:"ecosystem/bi/apache-superset",id:"ecosystem/bi/apache-superset",title:"Apache Superset",description:"\x3c!--",source:"@site/docs/ecosystem/bi/apache-superset.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/apache-superset",permalink:"/docs/dev/ecosystem/bi/apache-superset",draft:!1,tags:[],version:"current",frontMatter:{title:"Apache Superset",language:"en"},sidebar:"docs",previous:{title:"Hive HLL UDF",permalink:"/docs/dev/ecosystem/hive-hll-udf"},next:{title:"DBeaver",permalink:"/docs/dev/ecosystem/bi/dbeaver"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Add data source",id:"add-data-source",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.yg)(u,(0,r.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Apache Superset is an open-source data exploration platform. It supports a rich variety of data source connections and numerous visualization methods. It also enables fine-grained access control for users. The main features of this tool include self-service analysis, customizable dashboards, visualization of analytical results (with export functionality), and user/role permission control. Moreover, it integrates an SQL editor for conducting SQL editing and queries."),(0,n.yg)("p",null,"In Apache Superset version 3.1 official support has been introduced for querying and visualizing both internal and external data from Apache Doris."),(0,n.yg)("h2",{id:"preconditions"},"Preconditions"),(0,n.yg)("p",null,"Ensure you have completed the following tool installations:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Install the Python client for Apache Doris on the Apache Superset server.\npip install pydoris"),(0,n.yg)("li",{parentName:"ol"},"Install Apache Superset version 3.1 or above. For detailed instructions, refer to ",(0,n.yg)("a",{parentName:"li",href:"https://superset.apache.org/docs/installation/installing-superset-from-pypi/"},"Installing Superset from PyPI")," or ",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/superset"},"Installing Superset Locally Using Docker Compose"),".")),(0,n.yg)("h2",{id:"add-data-source"},"Add data source"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You can access Superset by visiting the corresponding startup port."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"login page",src:a(99575).A,width:"1280",height:"303"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'Select the "Add Database Connection" option after logging into Superset.'),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"add databases",src:a(510844).A,width:"1280",height:"592"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'In the connection page, select the "Apache Doris" option.'),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"select databases",src:a(828357).A,width:"734",height:"1280"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Fill in the SQLAlchemy URI information in the connection details and proceed with the relevant connectivity verification."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"test connection",src:a(843690).A,width:"2082",height:"1450"})))),(0,n.yg)("p",null,"When creating a data source in Apache Superset, please pay attention to the following two points:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Choose Apache Doris as the data source in SUPPORTED DATABASES.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"In the SQLAlchemy URI, fill in the URI following the Apache Doris SQLAlchemy URI format as shown below."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"doris://<User>:<Password>@<Host>:<Port>/<Catalog>.<Database>"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"URI parameters are explained as follows:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"User: The username for logging into the Apache Doris cluster, e.g., admin."),(0,n.yg)("li",{parentName:"ul"},"Password: The password for logging into the Apache Doris cluster."),(0,n.yg)("li",{parentName:"ul"},"Host: The IP address of the FE (Frontend) host in the Apache Doris cluster."),(0,n.yg)("li",{parentName:"ul"},"Port: The query port of the FE in the Apache Doris cluster, e.g. 9030."),(0,n.yg)("li",{parentName:"ul"},"Catalog: The target Catalog in the Apache Doris cluster. Both Internal Catalog and External Catalog are supported."),(0,n.yg)("li",{parentName:"ul"},"Database: The target database in the Apache Doris cluster. Both internal and external databases are supported.")))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("ol",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ol"},"When deploying Apache Superset using the latest Docker image, if you encounter the issue of not finding the Apache Doris data source, it may be because the default ",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/superset"},"Apache Superset Docker image")," includes only basic data source builds. You need to manually install the pydoris package. You can refer to the 'How to extend this image' section in the Apache Superset Docker tutorial for the deployment steps of Apache Superset."),(0,n.yg)("li",{parentName:"ol"},"It is recommended to use Apache Doris 2.0.4 and above."))))}d.isMDXComponent=!0},99575:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/bi-superset-en-1-87eec9d4bd909545f7e865b6bde2aec3.png"},510844:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/bi-superset-en-2-f1742e66856cfa06651793861e851213.png"},828357:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/bi-superset-en-3-1a3dd3ad89e52f70bd12396a71ce4451.png"},843690:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/bi-superset-en-4-027476546f2cf22034dd4fc1ec97bd15.png"}}]);