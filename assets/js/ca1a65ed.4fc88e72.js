"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62789],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(296540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},987220:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=r(58168),o=(r(296540),r(15680));const n={title:"Resource Group",language:"en"},i=void 0,s={unversionedId:"admin-manual/resource-admin/multi-tenant",id:"version-2.0/admin-manual/resource-admin/multi-tenant",title:"Resource Group",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/resource-admin/multi-tenant.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/multi-tenant",permalink:"/docs/2.0/admin-manual/resource-admin/multi-tenant",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Resource Group",language:"en"},sidebar:"docs",previous:{title:"Workload Group",permalink:"/docs/2.0/admin-manual/resource-admin/workload-group"},next:{title:"Compute Node",permalink:"/docs/2.0/admin-manual/resource-admin/compute-node"}},l={},u=[{value:"Nodes in Doris",id:"nodes-in-doris",level:2},{value:"Node resource division",id:"node-resource-division",level:2},{value:"Single query resource limit",id:"single-query-resource-limit",level:2},{value:"Best practices and forward compatibility",id:"best-practices-and-forward-compatibility",level:2},{value:"Tag division and CPU limitation are new features in version 0.15. In order to ensure a smooth upgrade from the old version, Doris has made the following forward compatibility:",id:"tag-division-and-cpu-limitation-are-new-features-in-version-015-in-order-to-ensure-a-smooth-upgrade-from-the-old-version-doris-has-made-the-following-forward-compatibility",level:3},{value:"How to conveniently set replica distribution strategies when there are many tables",id:"how-to-conveniently-set-replica-distribution-strategies-when-there-are-many-tables",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The main purpose of Doris's multi-tenant and resource isolation solution is to reduce interference between multiple users when performing data operations in the same Doris cluster, and to allocate cluster resources to each user more reasonably."),(0,o.yg)("p",null,"The scheme is mainly divided into two parts, one is the division of resource groups at the node level in the cluster, and the other is the resource limit for a single query."),(0,o.yg)("h2",{id:"nodes-in-doris"},"Nodes in Doris"),(0,o.yg)("p",null,"First, let's briefly introduce the node composition of Doris. There are two types of nodes in a Doris cluster: Frontend (FE) and Backend (BE)."),(0,o.yg)("p",null,"FE is mainly responsible for metadata management, cluster management, user request access and query plan analysis."),(0,o.yg)("p",null,"BE is mainly responsible for data storage and execution of query plans."),(0,o.yg)("p",null,"FE does not participate in the processing and calculation of user data, so it is a node with low resource consumption. The BE is responsible for all data calculations and task processing, and is a resource-consuming node. Therefore, the resource division and resource restriction schemes introduced in this article are all aimed at BE nodes. Because the FE node consumes relatively low resources and can also be scaled horizontally, there is usually no need to isolate and restrict resources, and the FE node can be shared by all users."),(0,o.yg)("h2",{id:"node-resource-division"},"Node resource division"),(0,o.yg)("p",null,"Node resource division refers to setting tags for BE nodes in a Doris cluster, and the BE nodes with the same tags form a resource group. Resource group can be regarded as a management unit of data storage and calculation. Below we use a specific example to introduce the use of resource groups."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Set labels for BE nodes"),(0,o.yg)("p",{parentName:"li"},"Assume that the current Doris cluster has 6 BE nodes. They are host","[1-6]"," respectively. In the initial situation, all nodes belong to a default resource group (Default)."),(0,o.yg)("p",{parentName:"li"},"We can use the following command to divide these 6 nodes into 3 resource groups: group_a, group_b, group_c:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'alter system modify backend "host1:9050" set ("tag.location" = "group_a");\nalter system modify backend "host2:9050" set ("tag.location" = "group_a");\nalter system modify backend "host3:9050" set ("tag.location" = "group_b");\nalter system modify backend "host4:9050" set ("tag.location" = "group_b");\nalter system modify backend "host5:9050" set ("tag.location" = "group_c");\nalter system modify backend "host6:9050" set ("tag.location" = "group_c");\n')),(0,o.yg)("p",{parentName:"li"},"Here we combine ",(0,o.yg)("inlineCode",{parentName:"p"},"host[1-2]")," to form a resource group ",(0,o.yg)("inlineCode",{parentName:"p"},"group_a"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"host[3-4]")," to form a resource group ",(0,o.yg)("inlineCode",{parentName:"p"},"group_b"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"host[5-6]")," to form a resource group ",(0,o.yg)("inlineCode",{parentName:"p"},"group_c"),"."),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"Note: One BE only supports setting one Tag."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Distribution of data according to resource groups"),(0,o.yg)("p",{parentName:"li"}," After the resource group is divided. We can distribute different copies of user data in different resource groups. Assume a user table UserTable. We want to store a copy in each of the three resource groups, which can be achieved by the following table creation statement:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'create table UserTable\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n    "replication_allocation"="tag.location.group_a:1, tag.location.group_b:1, tag.location.group_c:1"\n)\n')),(0,o.yg)("p",{parentName:"li"}," In this way, the data in the UserTable table will be stored in the form of 3 copies in the nodes where the resource groups group_a, group_b, and group_c are located."),(0,o.yg)("p",{parentName:"li"}," The following figure shows the current node division and data distribution:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"}," \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502                                                    \u2502\n \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host1            \u2502  \u2502 host2            \u2502 \u2502\n \u2502         \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502                  \u2502 \u2502\n \u2502 group_a \u2502  \u2502   replica1  \u2502 \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u2502                                                    \u2502\n \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host3            \u2502  \u2502 host4            \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 \u2502\n \u2502 group_b \u2502                  \u2502  \u2502  \u2502   replica2  \u2502 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u2502                                                    \u2502\n \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host5            \u2502  \u2502 host6            \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 \u2502\n \u2502 group_c \u2502                  \u2502  \u2502  \u2502   replica3  \u2502 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.yg)("p",{parentName:"li"},"For the convenience of setting the data distribution strategy for tables, a unified data distribution strategy can be set at the database level, but the priority of setting tables is higher than that of the database"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE db_name PROPERTIES (\n"replication_allocation" = "tag.location.group_a:1, tag.location.group_b:1"\n)\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Use different resource groups for data query"),(0,o.yg)("p",{parentName:"li"},"After the execution of the first two steps is completed, we can limit a user's query by setting the user's resource usage permissions, and can only use the nodes in the specified resource group to execute."),(0,o.yg)("p",{parentName:"li"},"For example, we can use the following statement to restrict user1 to only use nodes in the ",(0,o.yg)("inlineCode",{parentName:"p"},"group_a")," resource group for data query, user2 can only use the ",(0,o.yg)("inlineCode",{parentName:"p"},"group_b")," resource group, and user3 can use 3 resource groups at the same time:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"set property for'user1''resource_tags.location' = 'group_a';\nset property for'user2''resource_tags.location' = 'group_b';\nset property for'user3''resource_tags.location' = 'group_a, group_b, group_c';\n")),(0,o.yg)("p",{parentName:"li"},"After the setting is complete, when user1 initiates a query on the UserTable table, it will only access the data copy on the nodes in the ",(0,o.yg)("inlineCode",{parentName:"p"},"group_a")," resource group, and the query will only use the node computing resources in the ",(0,o.yg)("inlineCode",{parentName:"p"},"group_a")," resource group. The query of user3 can use copies and computing resources in any resource group."),(0,o.yg)("admonition",{parentName:"li",title:"Tip",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"By default, the user's ",(0,o.yg)("inlineCode",{parentName:"p"},"resource_tags.location")," attribute is empty. In versions prior to 2.0.2 (inclusive), by default, users are not restricted by tags and can use any resource group. After version 2.0.3, normal users can only use the ",(0,o.yg)("inlineCode",{parentName:"p"},"default")," resource group by default. Root and Admin user can use any resource group.")),(0,o.yg)("p",{parentName:"li"},"In this way, we have achieved physical resource isolation for different user queries by dividing nodes and restricting user resource usage. Furthermore, we can create different users for different business departments and restrict each user from using different resource groups. In order to avoid the use of resource interference between different business parts. For example, there is a business table in the cluster that needs to be shared by all 9 business departments, but it is hoped that resource preemption between different departments can be avoided as much as possible. Then we can create 3 copies of this table and store them in 3 resource groups. Next, we create 9 users for 9 business departments, and limit the use of one resource group for every 3 users. In this way, the degree of competition for resources is reduced from 9 to 3."),(0,o.yg)("p",{parentName:"li"},"On the other hand, for the isolation of online and offline tasks. We can use resource groups to achieve this. For example, we can divide nodes into two resource groups, Online and Offline. The table data is still stored in 3 copies, of which 2 copies are stored in the Online resource group, and 1 copy is stored in the Offline resource group. The Online resource group is mainly used for online data services with high concurrency and low latency. Some large queries or offline ETL operations can be executed using nodes in the Offline resource group. So as to realize the ability to provide online and offline services simultaneously in a unified cluster.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Resource group assignments for load job"),(0,o.yg)("p",{parentName:"li"},"The resource usage of load jobs (including insert, broker load, routine load, stream load, etc.) can be divided into two parts:"),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Computing resources: responsible for reading data sources, data transformation and distribution.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Write resource: responsible for data encoding, compression and writing to disk."))),(0,o.yg)("p",{parentName:"li"},"The write resource must be the node where the replica is located, and the computing resource can theoretically select any node to complete. Therefore, the allocation of resource groups for load jobs is divided into two steps:"),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Use user-level resource tags to limit the resource groups that computing resources can use.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Use the resource tag of the replica to limit the resource group that the write resource can use."))),(0,o.yg)("p",{parentName:"li"},"So if you want all the resources used by the load operation to be limited to the resource group where the data is located, you only need to set the resource tag of the user level to the same as the resource tag of the replica."))),(0,o.yg)("h2",{id:"single-query-resource-limit"},"Single query resource limit"),(0,o.yg)("p",null,"The resource group method mentioned earlier is resource isolation and restriction at the node level. In the resource group, resource preemption problems may still occur. For example, as mentioned above, the three business departments are arranged in the same resource group. Although the degree of resource competition is reduced, the queries of these three departments may still affect each other."),(0,o.yg)("p",null,"Therefore, in addition to the resource group solution, Doris also provides a single query resource restriction function."),(0,o.yg)("p",null,"At present, Doris's resource restrictions on single queries are mainly divided into two aspects: CPU and memory restrictions."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Memory Limitation"),(0,o.yg)("p",{parentName:"li"},"Doris can limit the maximum memory overhead that a query is allowed to use. To ensure that the memory resources of the cluster will not be fully occupied by a query. We can set the memory limit in the following ways:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"# Set the session variable exec_mem_limit. Then all subsequent queries in the session (within the connection) use this memory limit.\nset exec_mem_limit=1G;\n# Set the global variable exec_mem_limit. Then all subsequent queries of all new sessions (new connections) use this memory limit.\nset global exec_mem_limit=1G;\n# Set the variable exec_mem_limit in SQL(Unit bytes). Then the variable only affects this SQL.\nselect /*+ SET_VAR(exec_mem_limit=1073741824) */ id, name from tbl where xxx;\n")),(0,o.yg)("p",{parentName:"li"},"Because Doris' query engine is based on the full-memory MPP query framework. Therefore, when the memory usage of a query exceeds the limit, the query will be terminated. Therefore, when a query cannot run under a reasonable memory limit, we need to solve it through some SQL optimization methods or cluster expansion.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"CPU limitations"),(0,o.yg)("p",{parentName:"li"},"Users can limit the CPU resources of the query in the following ways:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"# Set the session variable cpu_resource_limit. Then all queries in the session (within the connection) will use this CPU limit.\nset cpu_resource_limit = 2\n# Set the user's attribute cpu_resource_limit, then all queries of this user will use this CPU limit. The priority of this attribute is higher than the session variable cpu_resource_limit\nset property for'user1''cpu_resource_limit' = '3';\n")),(0,o.yg)("p",{parentName:"li"},"The value of ",(0,o.yg)("inlineCode",{parentName:"p"},"cpu_resource_limit")," is a relative value. The larger the value, the more CPU resources can be used. However, the upper limit of the CPU that can be used by a query also depends on the number of partitions and buckets of the table. In principle, the maximum CPU usage of a query is positively related to the number of tablets involved in the query. In extreme cases, assuming that a query involves only one tablet, even if ",(0,o.yg)("inlineCode",{parentName:"p"},"cpu_resource_limit")," is set to a larger value, only 1 CPU resource can be used."))),(0,o.yg)("p",null,"Through memory and CPU resource limits. We can divide user queries into more fine-grained resources within a resource group. For example, we can make some offline tasks with low timeliness requirements, but with a large amount of calculation, use less CPU resources and more memory resources. Some delay-sensitive online tasks use more CPU resources and reasonable memory resources."),(0,o.yg)("h2",{id:"best-practices-and-forward-compatibility"},"Best practices and forward compatibility"),(0,o.yg)("h3",{id:"tag-division-and-cpu-limitation-are-new-features-in-version-015-in-order-to-ensure-a-smooth-upgrade-from-the-old-version-doris-has-made-the-following-forward-compatibility"},"Tag division and CPU limitation are new features in version 0.15. In order to ensure a smooth upgrade from the old version, Doris has made the following forward compatibility:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Each BE node will have a default Tag: ",(0,o.yg)("inlineCode",{parentName:"p"},'"tag.location": "default"'),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The BE node added through the ",(0,o.yg)("inlineCode",{parentName:"p"},"alter system add backend")," statement will also set Tag: ",(0,o.yg)("inlineCode",{parentName:"p"},'"tag.location": "default"')," by default.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The copy distribution of all tables is modified by default to: ",(0,o.yg)("inlineCode",{parentName:"p"},'"tag.location.default:xx'),". xx is the number of original copies.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Users can still specify the number of replicas in the table creation statement by ",(0,o.yg)("inlineCode",{parentName:"p"},'"replication_num" = "xx"'),", this attribute will be automatically converted to: ",(0,o.yg)("inlineCode",{parentName:"p"},'"tag.location.default:xx'),". This ensures that there is no need to modify the original creation. Table statement.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"By default, the memory limit for a single query is 2GB for a single node, and the CPU resources are unlimited, which is consistent with the original behavior. And the user's ",(0,o.yg)("inlineCode",{parentName:"p"},"resource_tags.location")," attribute is empty, that is, by default, the user can access the BE of any Tag, which is consistent with the original behavior."))),(0,o.yg)("p",null,"Here we give an example of the steps to start using the resource division function after upgrading from the original cluster to version 0.15:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Turn off data repair and balance logic"),(0,o.yg)("p",{parentName:"li"},"After the upgrade, the default Tag of BE is ",(0,o.yg)("inlineCode",{parentName:"p"},'"tag.location": "default"'),", and the default copy distribution of the table is: ",(0,o.yg)("inlineCode",{parentName:"p"},'"tag.location.default:xx'),". So if you directly modify the Tag of BE, the system will Automatically detect changes in the distribution of copies, and start data redistribution. This may occupy some system resources. So we can turn off the data repair and balance logic before modifying the tag to ensure that there will be no copies when we plan resources Redistribution operation."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");\nADMIN SET FRONTEND CONFIG ("disable_tablet_scheduler" = "true");\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Set Tag and table copy distribution"),(0,o.yg)("p",{parentName:"li"},"Next, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"alter system modify backend")," statement to set the BE Tag. And through the ",(0,o.yg)("inlineCode",{parentName:"p"},"alter table")," statement to modify the copy distribution strategy of the table. Examples are as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'alter system modify backend "host1:9050, 1212:9050" set ("tag.location" = "group_a");\nalter table my_table modify partition p1 set ("replication_allocation" = "tag.location.group_a:2");\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Turn on data repair and balance logic"),(0,o.yg)("p",{parentName:"li"},"After the tag and copy distribution are set, we can turn on the data repair and equalization logic to trigger data redistribution."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET FRONTEND CONFIG ("disable_balance" = "false");\nADMIN SET FRONTEND CONFIG ("disable_tablet_scheduler" = "false");\n')),(0,o.yg)("p",{parentName:"li"},"This process will continue for a period of time depending on the amount of data involved. And it will cause some colocation tables to fail colocation planning (because the copy is being migrated). You can view the progress by ",(0,o.yg)("inlineCode",{parentName:"p"},'show proc "/cluster_balance/"'),". You can also judge the progress by the number of ",(0,o.yg)("inlineCode",{parentName:"p"},"UnhealthyTabletNum")," in ",(0,o.yg)("inlineCode",{parentName:"p"},'show proc "/statistic"'),". When ",(0,o.yg)("inlineCode",{parentName:"p"},"UnhealthyTabletNum")," drops to 0, it means that the data redistribution is completed. .")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Set the user's resource label permissions."),(0,o.yg)("p",{parentName:"li"},"After the data is redistributed. We can start to set the user's resource label permissions. Because by default, the user's ",(0,o.yg)("inlineCode",{parentName:"p"},"resource_tags.location")," attribute is empty, that is, the BE of any tag can be accessed. Therefore, in the previous steps, the normal query of existing users will not be affected. When the ",(0,o.yg)("inlineCode",{parentName:"p"},"resource_tags.location")," property is not empty, the user will be restricted from accessing the BE of the specified Tag."))),(0,o.yg)("p",null,"Through the above 4 steps, we can smoothly use the resource division function after the original cluster is upgraded."),(0,o.yg)("h3",{id:"how-to-conveniently-set-replica-distribution-strategies-when-there-are-many-tables"},"How to conveniently set replica distribution strategies when there are many tables"),(0,o.yg)("p",null,"For example, there is a db1 with four tables under it, and the replica distribution strategy required for table1 is ",(0,o.yg)("inlineCode",{parentName:"p"},"group_a:1,group_b:2"),", the replica distribution strategy required for tables 2, 3, and 4 is ",(0,o.yg)("inlineCode",{parentName:"p"},"group_c:1,group_b:2")),(0,o.yg)("p",null,"Then you can use the following statement to create db1:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE db1 PROPERTIES (\n"replication_allocation" = "tag.location.group_c:1, tag.location.group_b:2"\n)\n')),(0,o.yg)("p",null,"Create table1 using the following statement:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE table1\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n"replication_allocation"="tag.location.group_a:1, tag.location.group_b:2"\n)\n')),(0,o.yg)("p",null,"The table creation statements for table2, table3, and table4 do not need to specify ",(0,o.yg)("inlineCode",{parentName:"p"},"replication_allocation")," again."),(0,o.yg)("p",null,"Note: Changing the replica distribution policy of the database will not affect existing tables."))}d.isMDXComponent=!0}}]);