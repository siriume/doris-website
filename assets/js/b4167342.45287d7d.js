"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18e3],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),y=a,m=c["".concat(i,".").concat(y)]||c[y]||d[y]||l;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},800116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"STRUCT",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-types/Data-Types/STRUCT",id:"version-2.1/sql-manual/sql-types/Data-Types/STRUCT",title:"STRUCT",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-types/Data-Types/STRUCT.md",sourceDirName:"sql-manual/sql-types/Data-Types",slug:"/sql-manual/sql-types/Data-Types/STRUCT",permalink:"/docs/sql-manual/sql-types/Data-Types/STRUCT",draft:!1,tags:[],version:"2.1",frontMatter:{title:"STRUCT",language:"en"},sidebar:"docs",previous:{title:"MAP",permalink:"/docs/sql-manual/sql-types/Data-Types/MAP"},next:{title:"JSON",permalink:"/docs/sql-manual/sql-types/Data-Types/JSON"}},i={},p=[{value:"STRUCT",id:"struct",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"struct"},"STRUCT"),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("p",null,"STRUCT"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"STRUCT<field_name:field_type [COMMENT 'comment_string'], ... >")),(0,a.yg)("p",null,"Represents value with structure described by multiple fields, which can be viewed as a collection of multiple columns."),(0,a.yg)("p",null,"Need to manually enable the support, it is disabled by default."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'admin set frontend config("enable_struct_type" = "true");\n')),(0,a.yg)("p",null,"It cannot be used as a Key column. Now STRUCT can only used in Duplicate Model Tables."),(0,a.yg)("p",null,"The names and number of Fields in a Struct is fixed and always Nullable, and a Field typically consists of the following parts."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"field_name: Identifier naming the field, non repeatable."),(0,a.yg)("li",{parentName:"ul"},"field_type: A data type."),(0,a.yg)("li",{parentName:"ul"},"COMMENT: An optional string describing the field. (currently not supported)")),(0,a.yg)("p",null,"The currently supported types are:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DECIMALV3, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n")),(0,a.yg)("p",null,"We have a todo list for future version:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TODO: Supports nested Struct or other complex types\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"Create table example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> CREATE TABLE `struct_test` (\n  `id` int(11) NULL,\n  `s_info` STRUCT<s_id:int(11), s_name:string, s_address:string> NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"storage_format" = "V2",\n"light_schema_change" = "true",\n"disable_auto_compaction" = "false"\n);\n')),(0,a.yg)("p",null,"Insert data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"INSERT INTO `struct_test` VALUES (1, {1, 'sn1', 'sa1'});\nINSERT INTO `struct_test` VALUES (2, struct(2, 'sn2', 'sa2'));\nINSERT INTO `struct_test` VALUES (3, named_struct('s_id', 3, 's_name', 'sn3', 's_address', 'sa3'));\n")),(0,a.yg)("p",null,"Stream load:"),(0,a.yg)("p",null,"test.csv\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'1|{"s_id":1, "s_name":"sn1", "s_address":"sa1"}\n2|{s_id:2, s_name:sn2, s_address:sa2}\n3|{"s_address":"sa3", "s_name":"sn3", "s_id":3}\n')),(0,a.yg)("p",null,"exmaple:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl --location-trusted -u root -T test.csv  -H "label:test_label" http://host:port/api/test/struct_test/_stream_load\n')),(0,a.yg)("p",null,"Select data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select * from struct_test;\n+------+-------------------+\n| id   | s_info            |\n+------+-------------------+\n|    1 | {1, 'sn1', 'sa1'} |\n|    2 | {2, 'sn2', 'sa2'} |\n|    3 | {3, 'sn3', 'sa3'} |\n+------+-------------------+\n3 rows in set (0.02 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"STRUCT\n")))}d.isMDXComponent=!0}}]);