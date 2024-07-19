"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1389],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,d=u["".concat(c,".").concat(y)]||u[y]||m[y]||i;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},375074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(296540),n(15680));const i={title:"Query Schema Action",language:"en"},l=void 0,o={unversionedId:"admin-manual/http-actions/fe/query-schema-action",id:"version-1.2/admin-manual/http-actions/fe/query-schema-action",title:"Query Schema Action",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/http-actions/fe/query-schema-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/query-schema-action",permalink:"/docs/1.2/admin-manual/http-actions/fe/query-schema-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Query Schema Action",language:"en"},sidebar:"docs",previous:{title:"Query Detail Action",permalink:"/docs/1.2/admin-manual/http-actions/fe/query-detail-action"},next:{title:"Row Count Action",permalink:"/docs/1.2/admin-manual/http-actions/fe/row-count-action"}},c={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"query-schema-action"},"Query Schema Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"POST /api/query_schema/<ns_name>/<db_name>\n")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"The Query Schema Action can return the table creation statement for the given SQL-related table. Can be used to test some query scenarios locally."),(0,r.yg)("p",null,"The API was released in version 1.2."),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db_name>")),(0,r.yg)("p",{parentName:"li"},"  Specify the database name. This database will be considered as the default database for the current session, and will be used if the table name in SQL does not qualify the database name."))),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"text/plain\n\nsql\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'"sql" field is the SQL string.')),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Return value"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'CREATE TABLE `tbl1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k1`) BUCKETS 3\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2",\n"disable_auto_compaction" = "false"\n);\n\nCREATE TABLE `tbl2` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k1`) BUCKETS 3\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2",\n"disable_auto_compaction" = "false"\n);\n')))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Write the SQL in local file 1.sql"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"select tbl1.k2 from tbl1 join tbl2 on tbl1.k1 = tbl2.k1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use curl to get the table creation statement."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"curl -X POST -H 'Content-Type: text/plain'  -uroot: http://127.0.0.1:8030/api/query_schema/internal/db1 -d@1.sql\n")))))}m.isMDXComponent=!0}}]);