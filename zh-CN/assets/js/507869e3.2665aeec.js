"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82738],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>g});var r=t(296540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(l.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),h=o,g=m["".concat(l,".").concat(h)]||m[h]||c[h]||n;return t?r.createElement(g,i(i({ref:a},u),{},{components:t})):r.createElement(g,i({ref:a},u))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=h;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<n;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},149561:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const n={title:"Apache Doris announced the official release of version 1.1.3",description:"Dear community, Apache Doris team has fixed more than 80 issues or performance improvements in version 1.1.3 compared to previous verisons",date:"2022-10-17",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},i=void 0,p={permalink:"/zh-CN/blog/release-note-1.1.3",source:"@site/blog/release-note-1.1.3.md",title:"Apache Doris announced the official release of version 1.1.3",description:"Dear community, Apache Doris team has fixed more than 80 issues or performance improvements in version 1.1.3 compared to previous verisons",date:"2022-10-17T00:00:00.000Z",formattedDate:"2022\u5e7410\u670817\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.1.3",description:"Dear community, Apache Doris team has fixed more than 80 issues or performance improvements in version 1.1.3 compared to previous verisons",date:"2022-10-17",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},prevItem:{title:"Apache Doris announced the official release of version 1.1.4",permalink:"/zh-CN/blog/release-note-1.1.4"},nextItem:{title:"Apache Doris announced the official release of version 1.1.1",permalink:"/zh-CN/blog/release-note-1.1.1"}},l={authorsImageUrls:[void 0]},s=[{value:"Features",id:"features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Upgrade Notes",id:"upgrade-notes",level:2}],u={toc:s},m="wrapper";function c(e){let{components:a,...t}=e;return(0,o.yg)(m,(0,r.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In this release, Doris Team has fixed more than 80 issues or performance improvement since 1.1.2. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."),(0,o.yg)("h2",{id:"features"},"Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Support escape identifiers for sqlserver and postgresql in ODBC table.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Could use Parquet as output file format."))),(0,o.yg)("h2",{id:"improvements"},"Improvements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Optimize flush policy to avoid small segments. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12706"},"#12706")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12716"},"#12716"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Refactor runtime filter to reduce the prepare time. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13127"},"#13127"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Lots of memory control related issues during query or load process. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12682"},"#12682")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12688"},"#12688")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12708"},"#12708")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12776"},"#12776")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12782"},"#12782")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12791"},"#12791")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12794"},"#12794")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12820"},"#12820")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12932"},"#12932")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12954"},"#12954")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12951"},"#12951")))),(0,o.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Core dump on compaction with largeint. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10094"},"#10094"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Grouping sets cause be core or return wrong results. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12313"},"#12313"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"PREAGGREGATION flag in orthogonal_bitmap_union_count operator is wrong. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12581"},"#12581"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Level1Iterator should release iterators in heap and it may cause memory leak. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12592"},"#12592"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Fix decommission failure with 2 BEs and existing colocation table. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12644"},"#12644"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"BE may core dump because of stack-buffer-overflow when TBrokerOpenReaderResponse too large. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12658"},"#12658"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"BE may OOM during load when error code -238 occurs. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12666"},"#12666"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Fix wrong child expression of lead function. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12587"},"#12587"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Fix intersect query failed in row storage code. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12712"},"#12712"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Fix wrong result produced by curdate()/current_date() function. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12720"},"#12720"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Fix lateral view explode_split with temp table bug. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13643"},"#13643"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Bucket shuffle join plan is wrong in two same table. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12930"},"#12930"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Fix bug that tablet version may be wrong when doing alter and load. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13070"},"#13070"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"BE core when load data using broker with md5sum()/sm3sum(). ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13009"},"#13009")))),(0,o.yg)("h2",{id:"upgrade-notes"},"Upgrade Notes"),(0,o.yg)("p",null,"PageCache and ChunkAllocator are disabled by default to reduce memory usage and can be re-enabled by modifying the configuration items ",(0,o.yg)("inlineCode",{parentName:"p"},"disable_storage_page_cache")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"chunk_reserved_bytes_limit"),"."),(0,o.yg)("p",null,"Storage Page Cache and Chunk Allocator cache user data chunks and memory preallocation, respectively."),(0,o.yg)("p",null,"These two functions take up a certain percentage of memory and are not freed. This part of memory cannot be flexibly allocated, which may lead to insufficient memory for other tasks in some scenarios, affecting system stability and availability. Therefore, we disabled these two features by default in version 1.1.3."),(0,o.yg)("p",null,"However, in some latency-sensitive reporting scenarios, turning off this feature may lead to increased query latency. If you are worried about the impact of this feature on your business after upgrade, you can add the following parameters to be.conf to keep the same behavior as the previous version."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"disable_storage_page_cache=false\nchunk_reserved_bytes_limit=10%\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"disable_storage_page_cache"),": Whether to disable Storage Page Cache. version 1.1.2 (inclusive), the default is false, i.e., on. version 1.1.3 defaults to true, i.e., off."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"chunk_reserved_bytes_limit"),": Chunk allocator reserved memory size. 1.1.2 (and earlier), the default is 10% of the overall memory. 1.1.3 version default is 209715200 (200MB).")))}c.isMDXComponent=!0}}]);