"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71246],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>p});var o=t(296540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,i=function(e,a){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},d=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,p=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return t?o.createElement(p,n(n({ref:a},d),{},{components:t})):o.createElement(p,n({ref:a},d))}));function p(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,n=new Array(r);n[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:i,n[1]=s;for(var c=2;c<r;c++)n[c]=t[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},722294:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(58168),i=(t(296540),t(15680));const r={title:"Best practice of Apache Doris in Xiaomi Group",description:"In order to improve the query performance of the Xiaomi growth analysis platform and reduce the operation and maintenance costs, Xiaomi Group introduced Apache Doris in September 2019. In the past two and a half years, **Apache Doris has been widely used in Xiaomi Group,** **such as business growth analytic platform, realtime dashboards for all business groups,  finance analysis, user profile analysis, advertising reports, A/B testing platform and so on.** This article will share the best practice of Apache Doris in Xiaomi Group.",date:"2022-07-20",author:"Apache Doris",tags:["Best Practice"],image:"/images/best-practice.png"},n=void 0,s={permalink:"/zh-CN/blog/xiaomi",source:"@site/blog/xiaomi.md",title:"Best practice of Apache Doris in Xiaomi Group",description:"In order to improve the query performance of the Xiaomi growth analysis platform and reduce the operation and maintenance costs, Xiaomi Group introduced Apache Doris in September 2019. In the past two and a half years, **Apache Doris has been widely used in Xiaomi Group,** **such as business growth analytic platform, realtime dashboards for all business groups,  finance analysis, user profile analysis, advertising reports, A/B testing platform and so on.** This article will share the best practice of Apache Doris in Xiaomi Group.",date:"2022-07-20T00:00:00.000Z",formattedDate:"2022\u5e747\u670820\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Best practice of Apache Doris in Xiaomi Group",description:"In order to improve the query performance of the Xiaomi growth analysis platform and reduce the operation and maintenance costs, Xiaomi Group introduced Apache Doris in September 2019. In the past two and a half years, **Apache Doris has been widely used in Xiaomi Group,** **such as business growth analytic platform, realtime dashboards for all business groups,  finance analysis, user profile analysis, advertising reports, A/B testing platform and so on.** This article will share the best practice of Apache Doris in Xiaomi Group.",date:"2022-07-20",author:"Apache Doris",tags:["Best Practice"],image:"/images/best-practice.png"},prevItem:{title:"Best practice of Apache Doris in Meituan",permalink:"/zh-CN/blog/meituan"},nextItem:{title:"Apache Doris announced the official release of version 1.1.0",permalink:"/zh-CN/blog/release-note-1.1.0"}},l={authorsImageUrls:[void 0]},c=[{value:"01 User Access",id:"01-user-access",level:2},{value:"02 Data import",id:"02-data-import",level:2},{value:"03 Data Query",id:"03-data-query",level:2},{value:"04 Compaction Tuning",id:"04-compaction-tuning",level:2},{value:"01 Monitoring System",id:"01-monitoring-system",level:2},{value:"02  Falcon",id:"02--falcon",level:2},{value:"03  Cloud-Doris",id:"03--cloud-doris",level:2},{value:"04 QingZhou inspection",id:"04-qingzhou-inspection",level:2},{value:"01 Access Failures Handling",id:"01-access-failures-handling",level:2},{value:"02 Node Failure Handling",id:"02-node-failure-handling",level:2}],d={toc:c},u="wrapper";function h(e){let{components:a,...t}=e;return(0,i.yg)(u,(0,o.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"background"},"Background"),(0,i.yg)("p",null,"In order to improve the query performance of the Xiaomi growth analysis platform and reduce the operation and maintenance costs, Xiaomi Group introduced Apache Doris in September 2019. In the past two and a half years, ",(0,i.yg)("strong",{parentName:"p"},"Apache Doris has been widely used in Xiaomi Group,")," ",(0,i.yg)("strong",{parentName:"p"},"such as business growth analytic platform, realtime dashboards for all business groups,  finance analysis, user profile analysis, advertising reports, A/B testing platform and so on.")," This article will share the best practice of Apache Doris in Xiaomi Group. "),(0,i.yg)("h1",{id:"business-practice"},"Business Practice"),(0,i.yg)("p",null,"The typical business practices of Apache Doris in Xiaomi are as follows:"),(0,i.yg)("h2",{id:"01-user-access"},"01 User Access"),(0,i.yg)("p",null,"Data Factory is a one-stop data development platform developed by Xiaomi for data developers and data analysts. This platform supports data sources such as Doris, Hive, Kudu, Iceberg, ES, Talso, TiDB, MySQL, etc. It also supports computing engines such as Flink, Spark,  Presto,etc."),(0,i.yg)("p",null,"Inside Xiaomi, users need to access the Doris service through the data factory. Users need to register in the data factory and complete the approval for building the database. The Doris operation and maintenance classmates will connect according to the descriptions of the business scenarios and data usage expectations submitted by users in the data factory. After completing the access approval, users can use the Doris service to perform operations such as visual table creation and data import in the data factory."),(0,i.yg)("h2",{id:"02-data-import"},"02 Data import"),(0,i.yg)("p",null,"In Xiaomi's business, the two most common ways to import data into Doris are Stream Load and Broker Load. User data will be divided into real-time data and offline data, and users' real-time and offline data will generally be written to Talos first (Talos is a distributed, high-throughput message queue developed by Xiaomi). The offline data from Talos will be sink to HDFS, and then imported to Doris through the data factory. Users can directly submit Broker Load tasks in the data factory to import large batches of data on HDFS into Doris, In addition, you can run the SparkSQL command in the data factory to query data from Hive, Import the data found in SparkSQL into Doris through Spark-doris-Connector, and encapsulate Stream Load at the bottom layer of Spark-doris-Connector. Real-time data from Talos is generally imported into Doris in two ways. One is to first perform ETL on the data through Flink, and then import small batches of data to Doris through.Flink- Doris-connector encapsulates the Stream Load at the bottom layer. Another way is to import small batches of data into Doris through Stream Load encapsulated by Spark Streaming at regular intervals."),(0,i.yg)("h2",{id:"03-data-query"},"03 Data Query"),(0,i.yg)("p",null,"Doris users of Xiaomi generally analyze and query Doris and display the results through the ShuJing platform.ShuJing is a general-purpose BI analysis tool developed by Xiaomi. Users can query and visualize Doris through ShuJing  platform, and realize user behavior analysis (in order to meet the needs of business event analysis, retention analysis, funnel analysis, path analysis and other behavior analysis needs, We added corresponding UDF and UDAF ) and user profile analysis for Doris."),(0,i.yg)("h2",{id:"04-compaction-tuning"},"04 Compaction Tuning"),(0,i.yg)("p",null,'For Doris, each data import will generate a data version under the relevant data shard (Tablet) of the storage layer, and the Compaction mechanism will asynchronously merge the smaller data versions generated by the import (the detailed principle of the Compaction mechanism can be Refer to the previous article "Doris Compaction Mechanism Analysis").'),(0,i.yg)("p",null,"Xiaomi has many high-frequency, high-concurrency, near-real-time import business scenarios, and a large number of small versions will be generated in a short period of time. If Compaction does not merge data versions in time, it will cause version accumulation.On the one hand, too many minor versions will increase the pressure on metadata, and on the other hand, too many versions will affect query performance.In Xiaomi's usage scenarios, many tables use the Unique and Aggregate data models, and the query performance is heavily dependent on whether Compaction can merge data versions in time.In our business scenario, the query performance was reduced by tens of times due to delayed version merging, thus affecting online services.When a Compaction happens, it consumes CPU, memory, and disk I/O resources. Too much compaction will take up too many machine resources, affect query performance, and may cause OOM."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"In response to this problem of Compaction, we first start from the business side and guide users through the following aspects:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Set reasonable partitions and buckets for tables to avoid generating too many data fragments.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Standardize the user's data import operation, reduce the frequency of data import, increase the amount of data imported in a single time, and reduce the pressure of Compaction.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Avoid using delete operations too much.The delete operation will generate a delete version under the relevant data shard in the storage layer.The Cumulative Compaction task will be truncated when the delete version is encountered. This task can only merge the data version after the Cumulative Point and before the delete version, move the Cumulative Point to the delete version, and hand over the delete version to the subsequent Base Compaction task. to process. If you use the delete operation too much, too many delete versions will be generated under the Tablet, which will cause the Cumulative Compaction task to slow down the progress of version merging. Using the delete operation does not actually delete the data from the disk, but records the deletion conditions in the delete version. When the data is queried, the deleted data will be filtered out by Merge-On-Read. Only the delete version is merged by the Base Compaction task. After that, the data to be deleted by the delete operation can be cleared from the disk as expired data with the Stale Rowset. If you need to delete the data of an entire partition, you can use the truncated partition operation instead of the delete operation."))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Second, we tuned Compaction from the operation and maintenance side:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"According to different business scenarios, different Compaction parameters (Compaction strategy, number of threads, etc.) are configured for different clusters.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Appropriately lowers the priority of the Base Compaction task and increases the priority of the Cumulative Compaction task, because the Base Compaction task takes a long time to execute and has serious write amplification problems, while the Cumulative Compaction task executes faster and can quickly merge a large number of small versions.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Version backlog alarm, dynamic adjustment of Compaction parameters.When the Compaction Producer produces Compaction tasks, it will update the corresponding metric.It records the value of the largest Compaction Score on the BE node. You can check the trend of this indicator through Grafana to determine whether there is a version backlog. In addition, we have added a Version backlog alert.In order to facilitate the adjustment of Compaction parameters, we have optimized the code level to support dynamic adjustment of the Compaction strategy and the number of Compaction threads at runtime, avoiding the need to restart the process when adjusting the Compaction parameters.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Supports manual triggering of the Compaction task of the specified Table and data shards under the specified Partition, and improves the Compaction priority of the specified Table and data shards under the specified Partition."))),(0,i.yg)("h1",{id:"monitoring-and-alarm-management"},"Monitoring and Alarm Management"),(0,i.yg)("h2",{id:"01-monitoring-system"},"01 Monitoring System"),(0,i.yg)("p",null,"Prometheus will regularly pull Metrics metrics from Doris's FE and BE and display them in the Grafana monitoring panel.The service metadata based on QingZhou Warehouse will be automatically registered in Zookeeper, and Prometheus will regularly pull the latest cluster metadata information from Zookeeper and display it dynamically in the Grafana monitoring panel.\uff08Qingzhou Data Warehouse is a data warehouse constructed by the Qingzhou platform based on the operation data of Xiaomi's full-scale big data service. It consists of 2 base tables and 30+ dimension tables.Covers the whole process data such as resources, server cmdb, cost, process status and so on when big data components are running\uff09We have also added statistics and display boards for common troubleshooting data such as Doris large query list, real-time write data volume, data import transaction numbers, etc. in Grafana.In Grafana, we also added statistics and display boards for common troubleshooting data such as the Doris big query list, the amount of real-time data written, and the number of data import transactions, so that alarms can be linked. When the cluster is abnormal, Doris' operation and maintenance students can locate the cause of the cluster failure in the shortest time."),(0,i.yg)("h2",{id:"02--falcon"},"02  Falcon"),(0,i.yg)("p",null,"Falcon is a monitoring and alarm system widely used inside Xiaomi.Because Doris provides a relatively complete metrics interface, which can easily provide monitoring functions based on Prometheus and Grafana, we only use Falcon's alarm function in the Doris service.For different levels of faults in Doris, we define alarms as three levels of P0, P1 and P2:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"P2 alarm (alarm level is low): single node failure alarm.When a single node indicator or process status is abnormal, an alarm is generally issued as a P2 level.The alarm information is sent to the members of the alarm group in the form of Xiaomi Office messages.(Xiaomi Office is a privatized deployment product of ByteDance Feishu in Xiaomi, and its functions are similar to Feishu.)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"P1 alarm (alarm level is higher):In a short period of time (within 3 minutes), the cluster will issue a P1 level alarm if there are short-term exceptions such as increased query delay and abnormal writing,etc.The alarm information is sent to the members of the alarm group in the form of Xiaomi Office messages.P1 level alarms require Oncall engineers to respond and provide feedback.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"P0 alarm (alarm level is high):In a long period of time (more than 3 minutes), the cluster will issue a P0 level alarm if there are exceptions such as increased query delay and abnormal writing,etc.Alarm information is sent in the form of Xiaomi office messages and phone alarms.P0 level alarm requires Oncall engineers to respond within 1 minute and coordinate resources for failure recovery and review preparation."))),(0,i.yg)("h2",{id:"03--cloud-doris"},"03  Cloud-Doris"),(0,i.yg)("p",null,"cloud-Doris is a data collection component developed by Xiaomi for the internal Doris service. Its main capability is to detect the availability of the Doris service and collect the cluster indicator data of internal concern.For example, Cloud-Doris can periodically simulate users reading and writing to the Doris system to detect the availability of services.If the cluster has abnormal availability, it will be alerted through Falcon.Collect user's read and write data, and then generate user bill.Collect information such as table-level data volume, unhealthy copies, and oversized Tablets, and send alarms to abnormal information through Falcon."),(0,i.yg)("h2",{id:"04-qingzhou-inspection"},"04 QingZhou inspection"),(0,i.yg)("p",null,"For chronic hidden dangers such as capacity, user growth, resource allocation, etc., we use the unified QingZhou big data service inspection platform for inspection and reporting.The inspection generally consists of two parts:Service-specific inspections and basic indicator inspections.Among them, the service-specific inspection refers to the indicators that are unique to each big data service and cannot be used universally.For Doris, it mainly includes: Quota, number of shard copies, number of single table columns, number of table partitions, etc.By increasing the inspection method, the chronic hidden dangers that are difficult to be alarmed in advance can be well avoided, which provides support for the failure-free major festivals."),(0,i.yg)("h1",{id:"failure-recovery"},"Failure Recovery"),(0,i.yg)("p",null,"When an online cluster fails, the first principle should be to quickly restore services.If the cause of the failure is clear, handle it according to the specific cause and restore the service.If the cause of the failure is not clear, you should try restarting the process as soon as you keep the snapshot to restore the service."),(0,i.yg)("h2",{id:"01-access-failures-handling"},"01 Access Failures Handling"),(0,i.yg)("p",null,"Doris uses Xiaomi LVS as the access layer, which is similar to the LB service of open source or public cloud, and provides layer 4 or layer 7 traffic load scheduling capability.After Doris binds a reasonable port,Generally speaking, if an abnormality occurs in a single FE node, it will be automatically kicked out, and the service can be restored without the user's perception, and an alarm will be issued for the abnormal node.Of course, for FE faults that cannot be processed in a short time, we will first adjust the weight of the faulty node to 0 or delete the abnormal node from LVS first to prevent unpredictable problems caused by process detection exceptions."),(0,i.yg)("h2",{id:"02-node-failure-handling"},"02 Node Failure Handling"),(0,i.yg)("p",null,"For FE node failures, if the cause of the failure cannot be quickly located, it is generally necessary to keep thread snapshots and memory snapshots and restart the process."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-undefined"},"jstack \u8fdb\u7a0bID >> \u5feb\u7167\u6587\u4ef6\u540d.jstack\n")),(0,i.yg)("p",null,"Save a memory snapshot of FE with the command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-undefined"},"jmap -dump:live,format=b,file=\u5feb\u7167\u6587\u4ef6\u540d.heap \u8fdb\u7a0bID\n")),(0,i.yg)("p",null,"In the case of version upgrade or some unexpected scenarios, the image of the FE node may have abnormal metadata, and the abnormal metadata may be synchronized to other FE, resulting in all FE not working.Once a failed image is discovered, the fastest recovery option is to use Recovery mode to stop FE elections and replace the failed image with the backup image.Of course, it is not easy to backup images all the time.Since this failure is common in cluster upgrades, we recommend adding simple local image backup logic to the cluster upgrade procedure.Ensure that a copy of the current and latest image data will be retained before each upgrade starts the FE process.For BE node failure, if the process crashes, a core file will be generated, and minos will automatically pull the process;If the task is stuck, you need to restart the process after retaining the thread snapshot with the following command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-undefined"},"pstack \u8fdb\u7a0bID >> \u5feb\u7167\u6587\u4ef6\u540d.pstack\n")),(0,i.yg)("h1",{id:"concluding-remarks"},"Concluding Remarks"),(0,i.yg)("p",null,"Apache Doris has been widely used by Xiaomi since the first use of open source software Apache Doris by Xiaomi Group in September 2019.At present, it has served dozens of businesses of Xiaomi, with dozens of clusters and hundreds of nodes, and a set of data ecology with Apache Doris as the core has been formed within Xiaomi.In order to improve the efficiency of operation and maintenance, Xiaomi has also developed a complete set of automated management and operation and maintenance systems around Doris.With the increasing number of services, Doris also exposed some problems. For example, there was no better resource isolation mechanism in the past version, and services would affect each other. In addition, system monitoring needs to be further improved.With the rapid development of the community, more and more small partners have participated in the community construction, the vectorized engine has been transformed, the transformation of the query optimizer is in full swing, and Apache Doris is gradually maturing."))}h.isMDXComponent=!0}}]);