"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18264],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),y=n,g=c["".concat(s,".").concat(y)]||c[y]||m[y]||l;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},698994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(58168),n=(a(296540),a(15680));const l={title:"Data Recover",language:"en"},o=void 0,i={unversionedId:"admin-manual/data-admin/delete-recover",id:"admin-manual/data-admin/delete-recover",title:"Data Recover",description:"\x3c!--",source:"@site/docs/admin-manual/data-admin/delete-recover.md",sourceDirName:"admin-manual/data-admin",slug:"/admin-manual/data-admin/delete-recover",permalink:"/docs/dev/admin-manual/data-admin/delete-recover",draft:!1,tags:[],version:"current",frontMatter:{title:"Data Recover",language:"en"},sidebar:"docs",previous:{title:"Data Restore",permalink:"/docs/dev/admin-manual/data-admin/restore"},next:{title:"CCR (Cross Cluster Replication)",permalink:"/docs/dev/admin-manual/data-admin/ccr"}},s={},d=[{value:"Drop Recovery",id:"drop-recovery",level:2},{value:"Query Catalog Recycle Bin",id:"query-catalog-recycle-bin",level:3},{value:"Start Data Recovery",id:"start-data-recovery",level:3},{value:"Tablet Restore Tool",id:"tablet-restore-tool",level:2},{value:"Restore data from BE Recycle Bin",id:"restore-data-from-be-recycle-bin",level:3},{value:"Operation",id:"operation",level:4},{value:"single mode",id:"single-mode",level:5},{value:"batch mode",id:"batch-mode",level:5},{value:"Repair missing or damaged Tablet",id:"repair-missing-or-damaged-tablet",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"data-deletion-recovery"},"Data Deletion Recovery"),(0,n.yg)("p",null,"Data deletion recovery includes two situations\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"After executing the command ",(0,n.yg)("inlineCode",{parentName:"p"},"drop database/table/partition"),",  user can use command ",(0,n.yg)("inlineCode",{parentName:"p"},"recover")," to recover all the data in the entire database/table/partition. It will restore the metadata of the database/table/partition from the FE's catalog recycle bin, change them from invisible to visible again, and the data will also be visible again;")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Due to some misoperations or online bugs, some tablets on BEs are deleted, and these tablets can be rescued from the BE's trash through maintenance tools."))),(0,n.yg)("p",null,"The above two, the former is aimed at the fact that the database/table/partition is no longer visible on FE, and the metadata of the database/table/partition is still kept in the catalog recycle bin of FE. The latter is aimed at databases/tables/partitions that are visible on FE, but some BE tablet data is deleted."),(0,n.yg)("p",null,"The two recovery methods are described below."),(0,n.yg)("h2",{id:"drop-recovery"},"Drop Recovery"),(0,n.yg)("p",null,"In order to avoid disasters caused by misoperation, Doris supports data recovery of accidentally deleted databases/tables/partitions. After dropping table or database, Doris will not physically delete the data immediately, but will keep it in Trash for a period of time ( The default is 1 day, which can be configured through the ",(0,n.yg)("inlineCode",{parentName:"p"},"catalog_trash_expire_second")," parameter in fe.conf). The administrator can use the RECOVER command to restore accidentally deleted data."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note that if it is deleted using ",(0,n.yg)("inlineCode",{parentName:"strong"},"drop force"),", it will be deleted directly and cannot be recovered.")),(0,n.yg)("h3",{id:"query-catalog-recycle-bin"},"Query Catalog Recycle Bin"),(0,n.yg)("p",null,"Query FE catalog recycle bin"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW CATALOG RECYCLE BIN [ WHERE NAME [ = "name" | LIKE "name_matcher"] ]\n')),(0,n.yg)("p",null,"For more detailed syntax and best practices, please refer to the ",(0,n.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN.md"},"SHOW-CATALOG-RECYCLE-BIN")," command manual, You can also type ",(0,n.yg)("inlineCode",{parentName:"p"},"help SHOW CATALOG RECYCLE BIN")," on the MySql client command line for more help."),(0,n.yg)("h3",{id:"start-data-recovery"},"Start Data Recovery"),(0,n.yg)("p",null,"1.restore the database named example_db"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db;\n")),(0,n.yg)("p",null,"2.restore the table named example_tbl"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl;\n")),(0,n.yg)("p",null,"3.restore partition named p1 in table example_tbl"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 FROM example_tbl;\n")),(0,n.yg)("p",null,"For more detailed syntax and best practices used by RECOVER, please refer to the ",(0,n.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Database-Administration-Statements/RECOVER.md"},"RECOVER")," command manual, You can also type ",(0,n.yg)("inlineCode",{parentName:"p"},"HELP RECOVER")," on the MySql client command line for more help."),(0,n.yg)("h2",{id:"tablet-restore-tool"},"Tablet Restore Tool"),(0,n.yg)("h3",{id:"restore-data-from-be-recycle-bin"},"Restore data from BE Recycle Bin"),(0,n.yg)("p",null,"During the user's use of Doris, some valid tablets (including metadata and data) may be deleted due to some misoperations or online bugs. In order to prevent data loss in these abnormal situations, Doris provides a recycle bin mechanism to protect user data. Tablet data deleted by users will not be deleted directly, but will be stored in the recycle bin for a period of time. After a period of time, there will be a regular cleaning mechanism to delete expired data. By default, when the disk space usage does not exceed 81% (BE ",(0,n.yg)("inlineCode",{parentName:"p"},"config.storage_flood_stage_usage_percent")," ",(0,n.yg)("em",{parentName:"p"}," 0.9 ")," 100%), the data in the BE recycle bin is kept for up to 1 days (BE ",(0,n.yg)("inlineCode",{parentName:"p"},"config.trash_file_expire_time_sec"),")."),(0,n.yg)("p",null,"The data in the BE recycle bin includes: tablet data file (.dat), tablet index file (.idx) and tablet metadata file (.hdr). The data will be stored in a path in the following format:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"/root_path/trash/time_label/tablet_id/schema_hash/\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"root_path"),": a data root directory corresponding to the BE node."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"trash"),": The directory of the recycle bin."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"time_label"),": Time label, for the uniqueness of the data directory in the recycle bin, while recording the data time, use the time label as a subdirectory.")),(0,n.yg)("p",null,"When a user finds that online data has been deleted by mistake, he needs to recover the deleted tablet from the recycle bin. This tablet data recovery function is needed."),(0,n.yg)("p",null,"BE provides http interface and ",(0,n.yg)("inlineCode",{parentName:"p"},"restore_tablet_tool.sh")," script to achieve this function, and supports single tablet operation (single mode) and batch operation mode (batch mode)."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"In single mode, data recovery of a single tablet is supported."),(0,n.yg)("li",{parentName:"ul"},"In batch mode, support batch tablet data recovery.")),(0,n.yg)("p",null,"In addition, users can use the command ",(0,n.yg)("inlineCode",{parentName:"p"},"show trash")," to view the trash data capacity in BE, and use the command ",(0,n.yg)("inlineCode",{parentName:"p"},"admin clean trash")," to clear the trash data in BE."),(0,n.yg)("h4",{id:"operation"},"Operation"),(0,n.yg)("h5",{id:"single-mode"},"single mode"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"http request method"),(0,n.yg)("p",{parentName:"li"},"BE provides an http interface for single tablet data recovery, the interface is as follows:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'curl -X POST "http://be_host:be_webserver_port/api/restore_tablet?tablet_id=11111\\&schema_hash=12345"\n')),(0,n.yg)("p",{parentName:"li"},"The successful results are as follows:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'{"status": "Success", "msg": "OK"}\n')),(0,n.yg)("p",{parentName:"li"},"If it fails, the corresponding failure reason will be returned. One possible result is as follows:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'{"status": "Failed", "msg": "create link path failed"}\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Script mode"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"restore_tablet_tool.sh")," can be used to realize the function of single tablet data recovery."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'sh tools/restore_tablet_tool.sh -b "http://127.0.0.1:8040" -t 12345 -s 11111\nsh tools/restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --tablet_id 12345 --schema_hash 11111\n')))),(0,n.yg)("h5",{id:"batch-mode"},"batch mode"),(0,n.yg)("p",null,"The batch recovery mode is used to realize the function of recovering multiple tablet data."),(0,n.yg)("p",null,"When using, you need to put the restored tablet id and schema hash in a file in a comma-separated format in advance, one tablet per line."),(0,n.yg)("p",null,"The format is as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"12345,11111\n12346,11111\n12347,11111\n")),(0,n.yg)("p",null,"Then perform the recovery with the following command (assuming the file name is: ",(0,n.yg)("inlineCode",{parentName:"p"},"tablets.txt"),"):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'sh restore_tablet_tool.sh -b "http://127.0.0.1:8040" -f tablets.txt\nsh restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --file tablets.txt\n')),(0,n.yg)("h3",{id:"repair-missing-or-damaged-tablet"},"Repair missing or damaged Tablet"),(0,n.yg)("p",null,"In some very special circumstances, such as code bugs, or human misoperation, etc., all replicas of some tablets may be lost. In this case, the data has been substantially lost. However, in some scenarios, the business still hopes to ensure that the query will not report errors even if there is data loss, and reduce the perception of the user layer. At this point, we can use the blank Tablet to fill the missing replica to ensure that the query can be executed normally."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note: This operation is only used to avoid the problem of error reporting due to the inability to find a queryable replica, and it is impossible to recover the data that has been substantially lost.")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"View Master FE log ",(0,n.yg)("inlineCode",{parentName:"p"},"fe.log")),(0,n.yg)("p",{parentName:"li"},"If there is data loss, there will be a log similar to the following in the log:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"backend [10001] invalid situation. tablet[20000] has few replica[1], replica num setting is [3]\n")),(0,n.yg)("p",{parentName:"li"},"This log indicates that all replicas of tablet 20000 have been damaged or lost.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Use blank replicas to fill in missing copies"),(0,n.yg)("p",{parentName:"li"},"After confirming that the data cannot be recovered, you can execute the following command to generate blank replicas."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "true");\n')),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Note: You can first check whether the current version supports this parameter through the ",(0,n.yg)("inlineCode",{parentName:"li"},"SHOW FRONTEND CONFIG;")," command."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"A few minutes after the setup is complete, you should see the following log in the Master FE log ",(0,n.yg)("inlineCode",{parentName:"p"},"fe.log"),":"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"tablet 20000 has only one replica 20001 on backend 10001 and it is lost. create an empty replica to recover it.\n")),(0,n.yg)("p",{parentName:"li"},"The log indicates that the system has created a blank tablet to fill in the missing replica.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Judge whether it has been repaired successfully through query."))))}m.isMDXComponent=!0}}]);