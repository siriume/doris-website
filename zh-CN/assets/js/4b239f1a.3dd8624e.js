"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37963],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>d});var r=t(296540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=i,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||n;return t?r.createElement(d,o(o({ref:a},c),{},{components:t})):r.createElement(d,o({ref:a},c))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},669430:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=t(58168),i=(t(296540),t(15680));const n={title:"Apache Doris announced the official release of version 1.2.3",description:"Dear community, Apache Doris 1.2.3 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-03-19",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.3-release.png"},o=void 0,l={permalink:"/zh-CN/blog/release-note-1.2.3",source:"@site/blog/release-note-1.2.3.md",title:"Apache Doris announced the official release of version 1.2.3",description:"Dear community, Apache Doris 1.2.3 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-03-19T00:00:00.000Z",formattedDate:"2023\u5e743\u670819\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.2.3",description:"Dear community, Apache Doris 1.2.3 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-03-19",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.3-release.png"},prevItem:{title:"How We increased database query concurrency by 20 times",permalink:"/zh-CN/blog/How-We-Increased-Database-Query-Concurrency-by-20-Times"},nextItem:{title:"Building the next-generation data lakehouse: 10X performance",permalink:"/zh-CN/blog/Building-the-Next-Generation-Data-Lakehouse-10X-Performance"}},s={authorsImageUrls:[void 0]},p=[{value:"Improvements",id:"improvements",level:2},{value:"JDBC Catalog",id:"jdbc-catalog",level:3},{value:"Elasticsearch Catalog",id:"elasticsearch-catalog",level:3},{value:"Hive Catalog",id:"hive-catalog",level:3},{value:"Dynamic Partition Improvement",id:"dynamic-partition-improvement",level:3},{value:"Optimize BE&#39;s Threading Model",id:"optimize-bes-threading-model",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2}],c={toc:p},m="wrapper";function u(e){let{components:a,...t}=e;return(0,i.yg)(m,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"improvements"},"Improvements"),(0,i.yg)("h3",{id:"jdbc-catalog"},"JDBC Catalog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Support connecting to Doris clusters through JDBC Catalog.")),(0,i.yg)("p",null,"Currently, Jdbc Catalog only support to use 5.x version of JDBC jar package to connect another Doris database. If you use 8.x version of JDBC jar package, the data type of column may not be matched."),(0,i.yg)("p",null,"Reference: ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/#doris"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/#doris")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Support to synchronize only the specified database through the ",(0,i.yg)("inlineCode",{parentName:"p"},"only_specified_database")," attribute.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Support synchronizing table names in the form of lowercase through ",(0,i.yg)("inlineCode",{parentName:"p"},"lower_case_table_names")," to solve the problem of case sensitivity of table names."))),(0,i.yg)("p",null,"Reference: ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Optimize the read performance of JDBC Catalog.")),(0,i.yg)("h3",{id:"elasticsearch-catalog"},"Elasticsearch Catalog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Support Array type mapping.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Support whether to push down the like expression through the ",(0,i.yg)("inlineCode",{parentName:"p"},"like_push_down")," attribute to control the CPU overhead of the ES cluster."))),(0,i.yg)("p",null,"Reference: ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/es"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/es")),(0,i.yg)("h3",{id:"hive-catalog"},"Hive Catalog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Support Hive table default partition ",(0,i.yg)("inlineCode",{parentName:"p"},"_HIVE_DEFAULT_PARTITION_"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Hive Metastore metadata automatic synchronization supports notification event in compressed format."))),(0,i.yg)("h3",{id:"dynamic-partition-improvement"},"Dynamic Partition Improvement"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Dynamic partition supports specifying the ",(0,i.yg)("inlineCode",{parentName:"li"},"storage_medium")," parameter to control the storage medium of the newly added partition.")),(0,i.yg)("p",null,"Reference: ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/advanced/partition/dynamic-partition"},"https://doris.apache.org/docs/dev/advanced/partition/dynamic-partition")),(0,i.yg)("h3",{id:"optimize-bes-threading-model"},"Optimize BE's Threading Model"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Optimize BE's threading model to avoid stability problems caused by frequent thread creation and destroy.")),(0,i.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed issues with Merge-On-Write Unique Key tables.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed compaction related issues.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed some delete statement issues causing data errors.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several query execution errors.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed the problem of using JDBC catalog to cause BE crash on some operating system.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed Multi-Catalog issues.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed memory statistics and optimization issues.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed decimalV3 and date/datetimev2 related issues.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed load transaction stability issues.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed light-weight schema change issues.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed the issue of using ",(0,i.yg)("inlineCode",{parentName:"p"},"datetime")," type for batch partition creation.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed the problem that a large number of failed broker loads would cause the FE memory usage to be too high.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed the problem that stream load cannot be canceled after dropping the table.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed querying ",(0,i.yg)("inlineCode",{parentName:"p"},"information_schema")," timeout in some cases.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed the problem of BE crash caused by concurrent data export using ",(0,i.yg)("inlineCode",{parentName:"p"},"select outfile"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed transactional insert operation memory leak.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several query/load profile issues, and supports direct download of profiles through FE web ui.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed the problem that the BE tablet GC thread caused the IO util to be too high.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed the problem that the commit offset is inaccurate in Kafka routine load."))))}u.isMDXComponent=!0}}]);