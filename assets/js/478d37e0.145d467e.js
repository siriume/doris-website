"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42461],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},212925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const l={title:"BACKUP",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP",title:"BACKUP",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP",draft:!1,tags:[],version:"2.1",frontMatter:{title:"BACKUP",language:"en"},sidebar:"docs",previous:{title:"DROP-REPOSITORY",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY"},next:{title:"CANCEL-BACKUP",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP"}},p={},s=[{value:"BACKUP",id:"backup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"backup"},"BACKUP"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"BACKUP"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to back up the data under the specified database. This command is an asynchronous operation. After the submission is successful, you need to check the progress through the SHOW BACKUP command. Only backing up tables of type OLAP is supported."),(0,r.yg)("p",null," Only root or superuser users can create repositories."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'BACKUP SNAPSHOT [db_name].{snapshot_name}\nTO `repository_name`\n[ON|EXCLUDE] (\n    `table_name` [PARTITION (`p1`, ...)],\n    ...\n)\nPROPERTIES ("key"="value", ...);\n')),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"There can only be one executing BACKUP or RESTORE task under the same database."),(0,r.yg)("li",{parentName:"ul"},"The ON clause identifies the tables and partitions that need to be backed up. If no partition is specified, all partitions of the table are backed up by default"),(0,r.yg)("li",{parentName:"ul"},"Tables and partitions that do not require backup are identified in the EXCLUDE clause. Back up all partition data for all tables in this database except the specified table or partition."),(0,r.yg)("li",{parentName:"ul"},"PROPERTIES currently supports the following properties:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},'"type" = "full": indicates that this is a full update (default)'),(0,r.yg)("li",{parentName:"ul"},'"timeout" = "3600": The task timeout period, the default is one day. in seconds.')))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Fully backup the table example_tbl under example_db to the warehouse example_repo:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nON (example_tbl)\nPROPERTIES ("type" = "full");\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Under the full backup example_db, the p1, p2 partitions of the table example_tbl, and the table example_tbl2 to the warehouse example_repo:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON\n(\n    example_tbl PARTITION (p1,p2),\n    example_tbl2\n);\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Full backup of all tables except table example_tbl under example_db to warehouse example_repo:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"BACKUP SNAPSHOT example_db.snapshot_label3\nTO example_repo\nEXCLUDE (example_tbl);\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Fully back up tables under example_db to the repository example_repo:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"BACKUP SNAPSHOT example_db.snapshot_label3\nTO example_repo;\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"BACKUP"),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Only one backup operation can be performed under the same database.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The backup operation will back up the underlying table and ",(0,r.yg)("a",{parentName:"p",href:"../../../../query-acceleration/materialized-view.md"},"materialized view")," of the specified table or partition, and only one copy will be backed up.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Efficiency of backup operations"),(0,r.yg)("p",{parentName:"li"},"The efficiency of backup operations depends on the amount of data, the number of Compute Nodes, and the number of files. Each Compute Node where the backup data shard is located will participate in the upload phase of the backup operation. The greater the number of nodes, the higher the upload efficiency."),(0,r.yg)("p",{parentName:"li"},"The amount of file data refers only to the number of shards, and the number of files in each shard. If there are many shards, or there are many small files in the shards, the backup operation time may be increased."))))}m.isMDXComponent=!0}}]);