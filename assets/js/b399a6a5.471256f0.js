"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[10159],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>g});var i=t(296540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,i,l=function(e,a){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=i.createContext({}),u=function(e){var a=i.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},s=function(e){var a=u(e.components);return i.createElement(o.Provider,{value:a},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},c=i.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),m=u(t),c=l,g=m["".concat(o,".").concat(c)]||m[c]||h[c]||r;return t?i.createElement(g,p(p({ref:a},s),{},{components:t})):i.createElement(g,p({ref:a},s))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=c;var n={};for(var o in a)hasOwnProperty.call(a,o)&&(n[o]=a[o]);n.originalType=e,n[m]="string"==typeof e?e:l,p[1]=n;for(var u=2;u<r;u++)p[u]=t[u];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},76038:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>u});var i=t(58168),l=(t(296540),t(15680));const r={title:"Release 2.0.3",language:"en"},p=void 0,n={unversionedId:"releasenotes/release-2.0.3",id:"releasenotes/release-2.0.3",title:"Release 2.0.3",description:"\x3c!--",source:"@site/docs/releasenotes/release-2.0.3.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.0.3",permalink:"/docs/dev/releasenotes/release-2.0.3",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 2.0.3",language:"en"},sidebar:"docs",previous:{title:"Release 2.0.4",permalink:"/docs/dev/releasenotes/release-2.0.4"},next:{title:"Release 2.0.2",permalink:"/docs/dev/releasenotes/release-2.0.2"}},o={},u=[{value:"1 Behavior change",id:"1-behavior-change",level:2},{value:"2 New features",id:"2-new-features",level:2},{value:"2.1 Support collecting statistics for optimizer automatically",id:"21-support-collecting-statistics-for-optimizer-automatically",level:3},{value:"2.2 Support complex datatypes for more datalake source",id:"22-support-complex-datatypes-for-more-datalake-source",level:3},{value:"2.3 Add more builtin functions",id:"23-add-more-builtin-functions",level:3},{value:"3 Improvement and optimizations",id:"3-improvement-and-optimizations",level:2},{value:"3.1 Performance optimizations",id:"31-performance-optimizations",level:3},{value:"3.2 Distributed replica management improvements",id:"32-distributed-replica-management-improvements",level:3},{value:"3.3 Security enhancement",id:"33-security-enhancement",level:3},{value:"4 Bugfix and stability",id:"4-bugfix-and-stability",level:2},{value:"4.1 Complex datatypes",id:"41-complex-datatypes",level:3},{value:"4.2 Inverted index",id:"42-inverted-index",level:3},{value:"4.3 Materialized View",id:"43-materialized-view",level:3},{value:"4.4 Table sample",id:"44-table-sample",level:3},{value:"4.5 Unique with merge on write",id:"45-unique-with-merge-on-write",level:3},{value:"4.6 Load and compaction",id:"46-load-and-compaction",level:3},{value:"4.7 Data Lake compatibility",id:"47-data-lake-compatibility",level:3},{value:"4.8 JDBC external table compatibility",id:"48-jdbc-external-table-compatibility",level:3},{value:"4.9 SQL Planner and Optimizer",id:"49-sql-planner-and-optimizer",level:3},{value:"Others",id:"others",level:3}],s={toc:u},m="wrapper";function h(e){let{components:a,...t}=e;return(0,l.yg)(m,(0,i.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Thanks to our community users and developers, about 1000 improvements and bug fixes have been made in Doris 2.0.3 version, including optimizer statistics, inverted index, complex datatypes, data lake, replica management."),(0,l.yg)("h2",{id:"1-behavior-change"},"1 Behavior change"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The output format of the complex data type array/map/struct has been changed to be consistent to the input format and JSON specification. The main changes from the previous version are that DATE/DATETIME and STRING/VARCHAR are enclosed in double quotes and null values inside ARRAY/MAP are displayed as ",(0,l.yg)("inlineCode",{parentName:"li"},"null")," instead of ",(0,l.yg)("inlineCode",{parentName:"li"},"NULL"),".",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25946"},"https://github.com/apache/doris/pull/25946")))),(0,l.yg)("li",{parentName:"ul"},"SHOW_VIEW permission is supported. Users with SELECT or LOAD permission will no longer be able to execute the 'SHOW CREATE VIEW' statement and must be granted the SHOW_VIEW permission separately.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25370"},"https://github.com/apache/doris/pull/25370"))))),(0,l.yg)("h2",{id:"2-new-features"},"2 New features"),(0,l.yg)("h3",{id:"21-support-collecting-statistics-for-optimizer-automatically"},"2.1 Support collecting statistics for optimizer automatically"),(0,l.yg)("p",null,"Collecting statistics helps the optimizer understand the data distribution characteristics and choose a better plan to greatly improve query performance. It is officially supported starting from version 2.0.3 and is enabled all day by default."),(0,l.yg)("h3",{id:"22-support-complex-datatypes-for-more-datalake-source"},"2.2 Support complex datatypes for more datalake source"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Support complex datatypes for JAVA UDF, JDBC and Hudi MOR",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24810"},"https://github.com/apache/doris/pull/24810")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26236"},"https://github.com/apache/doris/pull/26236")))),(0,l.yg)("li",{parentName:"ul"},"Support complex datatypes for Paimon",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25364"},"https://github.com/apache/doris/pull/25364")))),(0,l.yg)("li",{parentName:"ul"},"Suport Paimon version 0.5",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24985"},"https://github.com/apache/doris/pull/24985"))))),(0,l.yg)("h3",{id:"23-add-more-builtin-functions"},"2.3 Add more builtin functions"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Support the BitmapAgg function in new optimizer",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25508"},"https://github.com/apache/doris/pull/25508")))),(0,l.yg)("li",{parentName:"ul"},"Supports SHA series digest functions",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24342"},"https://github.com/apache/doris/pull/24342")," "))),(0,l.yg)("li",{parentName:"ul"},"Support the BITMAP datatype in the aggregate functions min_by and max_by ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25430"},"https://github.com/apache/doris/pull/25430")," "))),(0,l.yg)("li",{parentName:"ul"},"Add milliseconds/microseconds_add/sub/diff functions",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24114"},"https://github.com/apache/doris/pull/24114")))),(0,l.yg)("li",{parentName:"ul"},"Add some json functions: json_insert, json_replace, json_set",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24384"},"https://github.com/apache/doris/pull/24384"))))),(0,l.yg)("h2",{id:"3-improvement-and-optimizations"},"3 Improvement and optimizations"),(0,l.yg)("h3",{id:"31-performance-optimizations"},"3.1 Performance optimizations"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"When the inverted index MATCH WHERE condition with a high filter rate is combined with the common WHERE condition with a low filter rate, the I/O of the index column is greatly reduced. "),(0,l.yg)("li",{parentName:"ul"},"Optimize the efficiency of random data access after the where filter."),(0,l.yg)("li",{parentName:"ul"},"Optimizes the performance of the old get_json_xx function on JSON data types by 2~4x."),(0,l.yg)("li",{parentName:"ul"},"Supports the configuration to reduce the priority of the data read thread, ensuring the CPU resources for real-time writing."),(0,l.yg)("li",{parentName:"ul"},"Adds ",(0,l.yg)("inlineCode",{parentName:"li"},"uuid-numeric")," function that returns largeint, which is 20 times faster than ",(0,l.yg)("inlineCode",{parentName:"li"},"uuid")," function that returns string."),(0,l.yg)("li",{parentName:"ul"},"Optimized the performance of case when by 3x."),(0,l.yg)("li",{parentName:"ul"},"Cut out unnecessary predicate calculations in storage engine execution."),(0,l.yg)("li",{parentName:"ul"},"Accelerate count performance by pushing down count operator to storage tier."),(0,l.yg)("li",{parentName:"ul"},"Optimizes the computation performance of the nullable type in and or expressions."),(0,l.yg)("li",{parentName:"ul"},"Supports rewriting the limit operator before ",(0,l.yg)("inlineCode",{parentName:"li"},"join")," in more scenarios to improve query performance. "),(0,l.yg)("li",{parentName:"ul"},"Eliminate useless ",(0,l.yg)("inlineCode",{parentName:"li"},"order by")," operators from inline view to improve query performance."),(0,l.yg)("li",{parentName:"ul"},"Optimizes the accuracy of cardinality estimates and cost models in some cases. "),(0,l.yg)("li",{parentName:"ul"},"Optimized jdbc catalog predicate pushdown logic."),(0,l.yg)("li",{parentName:"ul"},"Optimized the read efficiency of the file cache when it's enable for the first time."),(0,l.yg)("li",{parentName:"ul"},"Optimizes the hive table sql cache policy and uses the partition update time stored in HMS to improve the cache hit ratio. "),(0,l.yg)("li",{parentName:"ul"},"Optimize mow compaction efficiency."),(0,l.yg)("li",{parentName:"ul"},"Optimized thread allocation logic for external table query to reduce memory usage "),(0,l.yg)("li",{parentName:"ul"},"Optimize memory usage for column reader.")),(0,l.yg)("h3",{id:"32-distributed-replica-management-improvements"},"3.2 Distributed replica management improvements"),(0,l.yg)("p",null,"Distributed replica management improvements include skipping partition deletion, colocate group deletion, balance failure due to continuous write, and hot and cold seperation table balance."),(0,l.yg)("h3",{id:"33-security-enhancement"},"3.3 Security enhancement"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The audit log plug-in uses a token instead of a plaintext password to enhance security",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26278"},"https://github.com/apache/doris/pull/26278")))),(0,l.yg)("li",{parentName:"ul"},"log4j configures security enhancement",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24861"},"https://github.com/apache/doris/pull/24861"),"  "))),(0,l.yg)("li",{parentName:"ul"},"Sensitive user information is not displayed in logs",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26912"},"https://github.com/apache/doris/pull/26912"))))),(0,l.yg)("h2",{id:"4-bugfix-and-stability"},"4 Bugfix and stability"),(0,l.yg)("h3",{id:"41-complex-datatypes"},"4.1 Complex datatypes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix issues that fixed-length CHAR(n) was not truncated correctly in map/struct.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25725"},"https://github.com/apache/doris/pull/25725")))),(0,l.yg)("li",{parentName:"ul"},"Fix write failure for struct datatype nested for map/array",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26973"},"https://github.com/apache/doris/pull/26973")))),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that count distinct did not support array/map/struct ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25483"},"https://github.com/apache/doris/pull/25483")))),(0,l.yg)("li",{parentName:"ul"},"Fix be crash in updating to 2.0.3 after the delete complex type appeared in query ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26006"},"https://github.com/apache/doris/pull/26006")))),(0,l.yg)("li",{parentName:"ul"},"Fix be crash when JSON datatype is in WHERE clause.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27325"},"https://github.com/apache/doris/pull/27325")))),(0,l.yg)("li",{parentName:"ul"},"Fix be crash when ARRAY datatype is in OUTER JOIN clause.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25669"},"https://github.com/apache/doris/pull/25669")))),(0,l.yg)("li",{parentName:"ul"},"Fix reading incorrect result for DECIMAL datatype in ORC format.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26548"},"https://github.com/apache/doris/pull/26548")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25977"},"https://github.com/apache/doris/pull/25977")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26633"},"https://github.com/apache/doris/pull/26633"))))),(0,l.yg)("h3",{id:"42-inverted-index"},"4.2 Inverted index"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix incorrect result for OR NOT combination in WHERE clause were incorrect when disable inverted index query. ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26327"},"https://github.com/apache/doris/pull/26327")))),(0,l.yg)("li",{parentName:"ul"},"Fix be crash when write a empty with inverted index",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25984"},"https://github.com/apache/doris/pull/25984")))),(0,l.yg)("li",{parentName:"ul"},"Fix be crash in index compaction when the output of compaction is empty.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25486"},"https://github.com/apache/doris/pull/25486")))),(0,l.yg)("li",{parentName:"ul"},"Fixed the problem of adding an inverted index to be crashed when no data is written to the newly added column."),(0,l.yg)("li",{parentName:"ul"},"Fix be crash when BUILD INDEX after ADD COLUMN without new data written.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27276"},"https://github.com/apache/doris/pull/27276")))),(0,l.yg)("li",{parentName:"ul"},"Fix missing and leak problem of hardlink for inverted index file.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26903"},"https://github.com/apache/doris/pull/26903")))),(0,l.yg)("li",{parentName:"ul"},"Fix index file corrupt when disk is full temporarilly",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/28191"},"https://github.com/apache/doris/pull/28191")))),(0,l.yg)("li",{parentName:"ul"},"Fix incorrect result due to optimization for skip reading index column",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/28104"},"https://github.com/apache/doris/pull/28104"))))),(0,l.yg)("h3",{id:"43-materialized-view"},"4.3 Materialized View"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix the problem of BE crash caused by repeated expressions in the group by statement"),(0,l.yg)("li",{parentName:"ul"},"Fix be crash when there are duplicate expressions in ",(0,l.yg)("inlineCode",{parentName:"li"},"group by")," statements.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27523"},"https://github.com/apache/doris/pull/27523")))),(0,l.yg)("li",{parentName:"ul"},"Disables the float/double type in the ",(0,l.yg)("inlineCode",{parentName:"li"},"group by")," clause when a view is created. ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25823"},"https://github.com/apache/doris/pull/25823")))),(0,l.yg)("li",{parentName:"ul"},"Improve the function of select query matching materialized view ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24691"},"https://github.com/apache/doris/pull/24691")," "))),(0,l.yg)("li",{parentName:"ul"},"Fix an issue that materialized views could not be matched when a table alias was used ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25321"},"https://github.com/apache/doris/pull/25321")))),(0,l.yg)("li",{parentName:"ul"},"Fix the problem using percentile_approx when creating materialized views ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26528"},"https://github.com/apache/doris/pull/26528"))))),(0,l.yg)("h3",{id:"44-table-sample"},"4.4 Table sample"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix the problem that table sample query can not work on table with partitions.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25912"},"https://github.com/apache/doris/pull/25912"),"  "))),(0,l.yg)("li",{parentName:"ul"},"Fix the problem that table sample query can not work when specify tablet.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25378"},"https://github.com/apache/doris/pull/25378")," ")))),(0,l.yg)("h3",{id:"45-unique-with-merge-on-write"},"4.5 Unique with merge on write"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix null pointer exception in conditional update based on primary key  ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26881"},"https://github.com/apache/doris/pull/26881"),"    "))),(0,l.yg)("li",{parentName:"ul"},"Fix field name capitalization issues in partial update  ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27223"},"https://github.com/apache/doris/pull/27223")," "))),(0,l.yg)("li",{parentName:"ul"},"Fix duplicate keys occur in mow during schema change repairement. ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25705"},"https://github.com/apache/doris/pull/25705"))))),(0,l.yg)("h3",{id:"46-load-and-compaction"},"4.6 Load and compaction"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix unkown slot descriptor error in routineload for running multiple tables ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25762"},"https://github.com/apache/doris/pull/25762")))),(0,l.yg)("li",{parentName:"ul"},"Fix be crash due to concurrent memory access when caculating memory ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27101"},"https://github.com/apache/doris/pull/27101")," "))),(0,l.yg)("li",{parentName:"ul"},"Fix be crash on duplicate cancel for load.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27111"},"https://github.com/apache/doris/pull/27111")))),(0,l.yg)("li",{parentName:"ul"},"Fix broker connection error during broker load",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26050"},"https://github.com/apache/doris/pull/26050")))),(0,l.yg)("li",{parentName:"ul"},"Fix incorrect result delete predicates in concurrent case of compation and scan.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24638"},"https://github.com/apache/doris/pull/24638")))),(0,l.yg)("li",{parentName:"ul"},"Fix the problem tha compaction task would print too many stacktrace logs ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25597"},"https://github.com/apache/doris/pull/25597"))))),(0,l.yg)("h3",{id:"47-data-lake-compatibility"},"4.7 Data Lake compatibility"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Solve the problem that the iceberg table contains special characters that cause query failure ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27108"},"https://github.com/apache/doris/pull/27108")," "))),(0,l.yg)("li",{parentName:"ul"},"Fix compatibility issues of different hive metastore versions ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27327"},"https://github.com/apache/doris/pull/27327")," "))),(0,l.yg)("li",{parentName:"ul"},"Fix an error reading max compute partition table ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24911"},"https://github.com/apache/doris/pull/24911")," "))),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that backup to object storage failed ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25496"},"https://github.com/apache/doris/pull/25496")," "),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25803"},"https://github.com/apache/doris/pull/25803"))))),(0,l.yg)("h3",{id:"48-jdbc-external-table-compatibility"},"4.8 JDBC external table compatibility"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix Oracle date type format error in jdbc catalog  ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25487"},"https://github.com/apache/doris/pull/25487")," "))),(0,l.yg)("li",{parentName:"ul"},"Fix MySQL 0000-00-00 date exception in jdbc catalog  ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26569"},"https://github.com/apache/doris/pull/26569")," "))),(0,l.yg)("li",{parentName:"ul"},"Fix an exception in reading data from Mariadb where the default value of the time type is current_timestamp ",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25016"},"https://github.com/apache/doris/pull/25016")," "))),(0,l.yg)("li",{parentName:"ul"},"Fix be crash when processing BITMAP datatype in jdbc catalog",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25034"},"https://github.com/apache/doris/pull/25034")," "),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26933"},"https://github.com/apache/doris/pull/26933"))))),(0,l.yg)("h3",{id:"49-sql-planner-and-optimizer"},"4.9 SQL Planner and Optimizer"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fix partition prune error in some scenes"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27047"},"https://github.com/apache/doris/pull/27047")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26873"},"https://github.com/apache/doris/pull/26873")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25769"},"https://github.com/apache/doris/pull/25769")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27636"},"https://github.com/apache/doris/pull/27636")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fix incorrect sub-query processing in some scenarios"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26034"},"https://github.com/apache/doris/pull/26034")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25492"},"https://github.com/apache/doris/pull/25492")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25955"},"https://github.com/apache/doris/pull/25955")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27177"},"https://github.com/apache/doris/pull/27177")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fix some semantic parsing errors"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/24928"},"https://github.com/apache/doris/pull/24928")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25627"},"https://github.com/apache/doris/pull/25627")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fix data loss during right outer/anti join"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26529"},"https://github.com/apache/doris/pull/26529")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fix incorrect pushing down of predicate pass aggregation operators."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25525"},"https://github.com/apache/doris/pull/25525")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fix incorrect result header in some cases"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/25372"},"https://github.com/apache/doris/pull/25372")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fix incorrect plan when the nullsafeEquals expression (<=>) is used as the join condition"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27127"},"https://github.com/apache/doris/pull/27127")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fix correct column prune in set operation operator."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/26884"},"https://github.com/apache/doris/pull/26884"))))),(0,l.yg)("h3",{id:"others"},"Others"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix BE crash when the order of columns in a table is changed and then upgraded to 2.0.3.",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/28205"},"https://github.com/apache/doris/pull/28205"))))),(0,l.yg)("p",null,"See the complete list of improvements and bug fixes on ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues?q=label%3Adev%2F2.0.3-merged+is%3Aclosed"},"github dev/2.0.3-merged")," ."))}h.isMDXComponent=!0}}]);