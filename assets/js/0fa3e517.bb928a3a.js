"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[80183],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var o=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,m=p["".concat(s,".").concat(u)]||p[u]||g[u]||i;return a?o.createElement(m,r(r({ref:t},d),{},{components:a})):o.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},112077:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=a(58168),n=(a(296540),a(15680));const i={title:"Tiered Storage",language:"en"},r=void 0,l={unversionedId:"table-design/cold-hot-separation",id:"version-2.0/table-design/cold-hot-separation",title:"Tiered Storage",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/table-design/cold-hot-separation.md",sourceDirName:"table-design",slug:"/table-design/cold-hot-separation",permalink:"/docs/2.0/table-design/cold-hot-separation",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Tiered Storage",language:"en"},sidebar:"docs",previous:{title:"Schema Evolution",permalink:"/docs/2.0/table-design/schema-change"},next:{title:"Index Overview",permalink:"/docs/2.0/table-design/index/index-overview"}},s={},c=[{value:"Use Case",id:"use-case",level:2},{value:"Solution",id:"solution",level:2},{value:"Usage of Storage Policy",id:"usage-of-storage-policy",level:2},{value:"Limitations",id:"limitations",level:3},{value:"Occupied Size of Cold Data Objects",id:"occupied-size-of-cold-data-objects",level:2},{value:"Cache for Cold Data",id:"cache-for-cold-data",level:2},{value:"Compaction of Cold Data",id:"compaction-of-cold-data",level:2},{value:"Schema Change for Cold Data",id:"schema-change-for-cold-data",level:2},{value:"Garbage Collection of Cold Data",id:"garbage-collection-of-cold-data",level:2},{value:"TODOs",id:"todos",level:2},{value:"FAQs",id:"faqs",level:2}],d={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,o.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"use-case"},"Use Case"),(0,n.yg)("p",null,"One significant use case in the future is similar to ES log storage, where data in the log scenario is split based on dates. Many of the data are cold data with infrequent queries, requiring a reduction in storage costs for such data. Considering cost-saving:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The pricing of regular cloud disks from various vendors is more expensive than object storage.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"In actual online usage of the Doris Cluster, the utilization of regular cloud disks cannot reach 100%.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Cloud disks are not billed on demand, while object storage can be billed on demand.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Using regular cloud disks for high availability requires multiple replicas and replica migration in case of failures. In contrast, storing data on object storage eliminates these issues as it is shared."))),(0,n.yg)("h2",{id:"solution"},"Solution"),(0,n.yg)("p",null,"Set the freeze time at the partition level, which indicates how long a partition will be frozen, and define the location of remote storage for storing data after freezing. In the BE (Backend) daemon thread, the table's freeze condition is periodically checked. If a freeze condition is met, the data will be uploaded to object storage compatible with the S3 protocol and HDFS."),(0,n.yg)("p",null,"Cold-hot tiering supports all Doris functionalities and only moves some data to object storage to save costs without sacrificing functionality. Therefore, it has the following characteristics:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Cold data is stored on object storage, and users do not need to worry about data consistency and security.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Flexible freeze strategy, where the cold remote storage property can be applied to both table and partition levels.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Users can query data without worrying about data distribution. If the data is not local, it will be pulled from the object storage and cached locally in the BE (Backend).")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Replica clone optimization. If the stored data is on object storage, there is no need to fetch the stored data locally during replica cloning.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Remote object space recycling. If a table or partition is deleted or if space waste occurs during the cold-hot tiering process due to exceptional situations, a recycler thread will periodically recycle the space, saving storage resources.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Cache optimization, caching accessed cold data locally in the BE to achieve query performance similar to non-cold-hot tiering.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"BE thread pool optimization, distinguishing between data sources from local and object storage to prevent delays in reading objects from impacting query performance."))),(0,n.yg)("h2",{id:"usage-of-storage-policy"},"Usage of Storage Policy"),(0,n.yg)("p",null,"The storage policy is the entry point for using the cold-hot tiering feature. Users only need to associate the storage policy with a table or partition during table creation or when using Doris."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"When creating an S3 resource, a remote S3 connection validation is performed to ensure the correct creation of the resource.")),(0,n.yg)("p",null,"Here is an example of creating an S3 resource:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Plain"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000"\n);\n\nCREATE STORAGE POLICY test_policy\nPROPERTIES(\n    "storage_resource" = "remote_s3",\n    "cooldown_ttl" = "1d"\n);\n\nCREATE TABLE IF NOT EXISTS create_table_use_created_policy \n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n    "storage_policy" = "test_policy"\n);\n')),(0,n.yg)("p",null,"And here is an example of creating an HDFS resource:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Plain"},'CREATE RESOURCE "remote_hdfs" PROPERTIES (\n        "type"="hdfs",\n        "fs.defaultFS"="fs_host:default_fs_port",\n        "hadoop.username"="hive",\n        "hadoop.password"="hive",\n        "dfs.nameservices" = "my_ha",\n        "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n        "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n        "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n        "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n    );\n\nCREATE STORAGE POLICY test_policy PROPERTIES (\n    "storage_resource" = "remote_hdfs",\n    "cooldown_ttl" = "300"\n)\n\nCREATE TABLE IF NOT EXISTS create_table_use_created_policy (\n    k1 BIGINT,\n    k2 LARGEINTv1 VARCHAR(2048)\n)\nUNIQUE KEY(k1)\nDISTRIBUTED BY HASH (k1) BUCKETS 3\nPROPERTIES(\n    "storage_policy" = "test_policy"\n);\n')),(0,n.yg)("p",null,"Associate a storage policy with an existing table by using the following command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Plain"},'ALTER TABLE create_table_not_have_policy SET ("storage_policy" = "test_policy");\n')),(0,n.yg)("p",null,"Associate a storage policy with an existing partition by using the following command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Plain"},'ALTER TABLE create_table_partition MODIFY PARTITION (*) SET ("storage_policy" = "test_policy");\n')),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"If you specify different storage policies for the entire table and some partitions during table creation, the storage policy set for the partitions will be ignored, and all partitions of the table will use the table's storage policy. If you want a specific partition to have a different storage policy than the others, you can use the method mentioned above to modify the association for that specific partition."),(0,n.yg)("p",{parentName:"admonition"},"For more details, please refer to the following documents in the Docs directory: ",(0,n.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE"},"RESOURCE"),", ",(0,n.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY"},"POLICY"),", ",(0,n.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE"),", ",(0,n.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"},"ALTER TABLE"),", which provide detailed explanations.")),(0,n.yg)("h3",{id:"limitations"},"Limitations"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"A single table or partition can only be associated with one storage policy. Once associated, the storage policy cannot be dropped without first removing the association between them.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The object information associated with a storage policy does not support modifying the data storage path, such as bucket, endpoint, root_path, and other information.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Storage policies support creation, modification, and deletion. Before deleting a storage policy, ensure that no tables are referencing the storage policy.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"When the Merge-on-Write feature is enabled, the Unique model does not support setting a storage policy."))),(0,n.yg)("h2",{id:"occupied-size-of-cold-data-objects"},"Occupied Size of Cold Data Objects"),(0,n.yg)("p",null,"Method 1: You can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"show proc '/backends'")," command to view the size of each backend's uploaded objects. Look for the ",(0,n.yg)("inlineCode",{parentName:"p"},"RemoteUsedCapacity")," field. Please note that this method may have some latency."),(0,n.yg)("p",null,"Method 2: You can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"show tablets from tableName")," command to view the size of each tablet in a table, indicated by the ",(0,n.yg)("inlineCode",{parentName:"p"},"RemoteDataSize")," field."),(0,n.yg)("h2",{id:"cache-for-cold-data"},"Cache for Cold Data"),(0,n.yg)("p",null,"As mentioned earlier, caching is introduced for cold data to optimize query performance and save object storage resources. When cold data is first accessed after cooling, Doris reloads the cooled data onto the local disk of the backend (BE). The cold data cache has the following characteristics:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The cache is stored on the BE's disk and does not occupy memory space.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The cache can be limited in size and uses LRU (Least Recently Used) for data eviction.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The implementation of the cache for cold data is the same as the cache for federated query catalog. Please refer to the documentation at ",(0,n.yg)("a",{parentName:"p",href:"../lakehouse/filecache"},"Filecache")," for more details."))),(0,n.yg)("h2",{id:"compaction-of-cold-data"},"Compaction of Cold Data"),(0,n.yg)("p",null,"The time at which cold data enters is counted from the moment the data rowset file is written to the local disk, plus the cooling duration. Since data is not written and cooled all at once, Doris performs compaction on cold data to avoid the issue of small files within object storage. However, the frequency and resource prioritization of cold data compaction are not very high. It is recommended to perform compaction on local hot data before cooling. You can adjust the following BE parameters:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The BE parameter ",(0,n.yg)("inlineCode",{parentName:"p"},"cold_data_compaction_thread_num")," sets the concurrency for cold data compaction. The default value is 2.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The BE parameter ",(0,n.yg)("inlineCode",{parentName:"p"},"cold_data_compaction_interval_sec")," sets the time interval for cold data compaction. The default value is 1800 seconds (30 minutes)."))),(0,n.yg)("h2",{id:"schema-change-for-cold-data"},"Schema Change for Cold Data"),(0,n.yg)("p",null,"The following schema change types are supported for cold data:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Adding or deleting columns")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Modifying column types")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Adjusting column order")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Adding or modifying indexes"))),(0,n.yg)("h2",{id:"garbage-collection-of-cold-data"},"Garbage Collection of Cold Data"),(0,n.yg)("p",null,"Garbage data for cold data refers to data that is not used by any replica. The following situations may generate garbage data on object storage:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Partial segment upload succeeds while the upload of the rowset fails.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"After the FE reselects the CooldownReplica, the rowset versions of the old and new CooldownReplica do not match. FollowerReplicas synchronize the CooldownMeta of the new CooldownReplica, and the rowsets with inconsistent versions in the old CooldownReplica become garbage data.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"After cold data compaction, the rowsets before merging cannot be immediately deleted because they may still be used by other replicas. However, eventually, all FollowerReplicas use the latest merged rowset, and the rowsets before merging become garbage data."))),(0,n.yg)("p",null,"Furthermore, the garbage data on objects is not immediately cleaned up. The BE parameter ",(0,n.yg)("inlineCode",{parentName:"p"},"remove_unused_remote_files_interval_sec")," sets the time interval for garbage collection of cold data. The default value is 21600 seconds (6 hours)."),(0,n.yg)("h2",{id:"todos"},"TODOs"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Some remote occupancy metrics may not have comprehensive update retrieval.")),(0,n.yg)("h2",{id:"faqs"},"FAQs"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"ERROR 1105 (HY000): errCode = 2, detailMessage = Failed to create repository: connect to s3 failed: Unable to marshall request to JSON: host must not be null."))),(0,n.yg)("p",null,"The S3 SDK defaults to using the virtual-hosted style. However, some object storage systems (e.g., MinIO) may not have virtual-hosted style access enabled or supported. In such cases, you can add the ",(0,n.yg)("inlineCode",{parentName:"p"},"use_path_style")," parameter to force the use of path-style access:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Plain"},'CREATE RESOURCE "remote_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "bj.s3.com",\n    "s3.region" = "bj",\n    "s3.bucket" = "test-bucket",\n    "s3.root.path" = "path/to/root",\n    "s3.access_key" = "bbb",\n    "s3.secret_key" = "aaaa",\n    "s3.connection.maximum" = "50",\n    "s3.connection.request.timeout" = "3000",\n    "s3.connection.timeout" = "1000",\n    "use_path_style" = "true"\n);\n')))}g.isMDXComponent=!0}}]);