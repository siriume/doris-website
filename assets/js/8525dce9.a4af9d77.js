"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[80372],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>g});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),u=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return a?t.createElement(g,r(r({ref:n},p),{},{components:a})):t.createElement(g,r({ref:n},p))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<s;u++)r[u]=a[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},662758:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var t=a(58168),l=(a(296540),a(15680));const s={title:"EXPLODE_MAP",language:"en"},r=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/explode_map",id:"sql-manual/sql-functions/table-functions/explode_map",title:"EXPLODE_MAP",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/table-functions/explode_map.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode_map",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode_map",draft:!1,tags:[],version:"current",frontMatter:{title:"EXPLODE_MAP",language:"en"},sidebar:"docs",previous:{title:"EXPLODE_SPLIT",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-split"},next:{title:"EXPLODE_BITMAP",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-bitmap"}},o={},u=[{value:"explode",id:"explode",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...a}=e;return(0,l.yg)(c,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"explode"},"explode"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,"Table functions must be used in conjunction with Lateral View, support multi conjunction with Lateral View,support new optimizer only."),(0,l.yg)("p",null,"explode map column to rows. ",(0,l.yg)("inlineCode",{parentName:"p"},"explode_map_outer")," will return NULL, while ",(0,l.yg)("inlineCode",{parentName:"p"},"map")," is NULL or empty.\n",(0,l.yg)("inlineCode",{parentName:"p"},"explode_map")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"explode_map_outer")," both keep the nested NULL elements of map."),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"explode_map(expr)\nexplode_map_outer(expr)\n")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-mysql>",metastring:"SET enable_nereids_planner=true",SET:!0,enable_nereids_planner:"true"},'mysql> SET enable_fallback_to_original_planner=false\n\nmysql> CREATE TABLE IF NOT EXISTS `sdu`(\n                   `id` INT NULL,\n                   `name` TEXT NULL,\n                   `score` MAP<TEXT,INT> NULL\n                 ) ENGINE=OLAP\n                 DUPLICATE KEY(`id`)\n                 COMMENT \'OLAP\'\n                 DISTRIBUTED BY HASH(`id`) BUCKETS 1\n                 PROPERTIES ("replication_allocation" = "tag.location.default: 1");\nQuery OK, 0 rows affected (0.15 sec)\n\nmysql> insert into sdu values (0, "zhangsan", {"Chinese":"80","Math":"60","English":"90"}), (1, "lisi", {"null":null}), (2, "wangwu", {"Chinese":"88","Math":"90","English":"96"}), (3, "lisi2", {null:null}), (4, "amory", NULL);\nQuery OK, 5 rows affected (0.23 sec)\n{\'label\':\'label_9b35d9d9d59147f5_bffb974881ed2133\', \'status\':\'VISIBLE\', \'txnId\':\'4005\'}\n\nmysql> select * from sdu order by id;\n+------+----------+-----------------------------------------+\n| id   | name     | score                                   |\n+------+----------+-----------------------------------------+\n|    0 | zhangsan | {"Chinese":80, "Math":60, "English":90} |\n|    1 | lisi     | {"null":null}                           |\n|    2 | wangwu   | {"Chinese":88, "Math":90, "English":96} |\n|    3 | lisi2    | {null:null}                             |\n|    4 | amory    | NULL                                    |\n+------+----------+-----------------------------------------+\n\nmysql> select name, k,v from sdu lateral view explode_map(score) tmp as k,v;\n+----------+---------+------+\n| name     | k       | v    |\n+----------+---------+------+\n| zhangsan | Chinese |   80 |\n| zhangsan | Math    |   60 |\n| zhangsan | English |   90 |\n| lisi     | null    | NULL |\n| wangwu   | Chinese |   88 |\n| wangwu   | Math    |   90 |\n| wangwu   | English |   96 |\n| lisi2    | NULL    | NULL |\n+----------+---------+------+\n\nmysql> select name, k,v from sdu lateral view explode_map_outer(score) tmp as k,v;\n+----------+---------+------+\n| name     | k       | v    |\n+----------+---------+------+\n| zhangsan | Chinese |   80 |\n| zhangsan | Math    |   60 |\n| zhangsan | English |   90 |\n| lisi     | null    | NULL |\n| wangwu   | Chinese |   88 |\n| wangwu   | Math    |   90 |\n| wangwu   | English |   96 |\n| lisi2    | NULL    | NULL |\n| amory    | NULL    | NULL |\n+----------+---------+------+\n\nmysql> select name, k,v,k1,v1 from sdu lateral view explode_map_outer(score) tmp as k,v lateral view explode_map(score) tmp2 as k1,v1;\n+----------+---------+------+---------+------+\n| name     | k       | v    | k1      | v1   |\n+----------+---------+------+---------+------+\n| zhangsan | Chinese |   80 | Chinese |   80 |\n| zhangsan | Chinese |   80 | Math    |   60 |\n| zhangsan | Chinese |   80 | English |   90 |\n| zhangsan | Math    |   60 | Chinese |   80 |\n| zhangsan | Math    |   60 | Math    |   60 |\n| zhangsan | Math    |   60 | English |   90 |\n| zhangsan | English |   90 | Chinese |   80 |\n| zhangsan | English |   90 | Math    |   60 |\n| zhangsan | English |   90 | English |   90 |\n| lisi     | null    | NULL | null    | NULL |\n| wangwu   | Chinese |   88 | Chinese |   88 |\n| wangwu   | Chinese |   88 | Math    |   90 |\n| wangwu   | Chinese |   88 | English |   96 |\n| wangwu   | Math    |   90 | Chinese |   88 |\n| wangwu   | Math    |   90 | Math    |   90 |\n| wangwu   | Math    |   90 | English |   96 |\n| wangwu   | English |   96 | Chinese |   88 |\n| wangwu   | English |   96 | Math    |   90 |\n| wangwu   | English |   96 | English |   96 |\n| lisi2    | NULL    | NULL | NULL    | NULL |\n+----------+---------+------+---------+------+\n')),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"EXPLODE_MAP,EXPLODE_MAP_OUTER,MAP"))}d.isMDXComponent=!0}}]);