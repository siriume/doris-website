"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37009],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(t),c=r,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||i;return t?n.createElement(d,o(o({ref:a},u),{},{components:t})):n.createElement(d,o({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},93578:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(58168),r=(t(296540),t(15680));const i={title:"Apache Doris version 2.0.13 has been released",summary:"Thanks to our community users and developers, about 112 improvements and bug fixes have been made in Doris 2.0.13 version.",description:"Thanks to our community users and developers, about 112 improvements and bug fixes have been made in Doris 2.0.13 version.",date:"2024-07-17",author:"Apache Doris",tags:["Release Notes"],picked:"true",order:"1",image:"/images/2.0.13.jpg"},o=void 0,l={permalink:"/blog/release-note-2.0.13",source:"@site/blog/release-note-2.0.13.md",title:"Apache Doris version 2.0.13 has been released",description:"Thanks to our community users and developers, about 112 improvements and bug fixes have been made in Doris 2.0.13 version.",date:"2024-07-17T00:00:00.000Z",formattedDate:"July 17, 2024",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris version 2.0.13 has been released",summary:"Thanks to our community users and developers, about 112 improvements and bug fixes have been made in Doris 2.0.13 version.",description:"Thanks to our community users and developers, about 112 improvements and bug fixes have been made in Doris 2.0.13 version.",date:"2024-07-17",author:"Apache Doris",tags:["Release Notes"],picked:"true",order:"1",image:"/images/2.0.13.jpg"},nextItem:{title:"Apache Doris version 2.0.12 has been released",permalink:"/blog/release-note-2.0.12"}},s={authorsImageUrls:[void 0]},p=[{value:"Behavior changes",id:"behavior-changes",level:2},{value:"New features",id:"new-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Credits",id:"credits",level:2}],u={toc:p},h="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(h,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Thanks to our community users and developers, about 112 improvements and bug fixes have been made in Doris 2.0.13 version"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"Quick Download")),(0,r.yg)("h2",{id:"behavior-changes"},"Behavior changes"),(0,r.yg)("p",null,"SQL input is treated as multiple statements only when the ",(0,r.yg)("inlineCode",{parentName:"p"},"CLIENT_MULTI_STATEMENTS")," setting is enabled on the client side, enhancing compatibility with MySQL. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36759"},"#36759")),(0,r.yg)("h2",{id:"new-features"},"New features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A new BE configuration ",(0,r.yg)("inlineCode",{parentName:"li"},"allow_zero_date")," has been added, allowing dates with all zeros. When set to ",(0,r.yg)("inlineCode",{parentName:"li"},"false"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"0000-00-00")," is parsed as ",(0,r.yg)("inlineCode",{parentName:"li"},"NULL"),", and when set to ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", it is parsed as ",(0,r.yg)("inlineCode",{parentName:"li"},"0000-01-01"),". The default value is ",(0,r.yg)("inlineCode",{parentName:"li"},"false")," to maintain consistency with previous behavior. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/34961"},"#34961"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"LogicalWindow")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"LogicalPartitionTopN")," support multi-field predicate pushdown to improve performance. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/36828"},"#36828"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ES Catalog now maps ES ",(0,r.yg)("inlineCode",{parentName:"li"},"nested")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"object")," types to Doris ",(0,r.yg)("inlineCode",{parentName:"li"},"JSON")," types. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/37101"},"#37101"))),(0,r.yg)("h2",{id:"improvements"},"Improvements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Queries with ",(0,r.yg)("inlineCode",{parentName:"li"},"LIMIT")," end reading data earlier to reduce resource consumption and improve performance. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/36535"},"#36535"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Special JSON data with empty keys is now supported. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/36762"},"#36762"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Stability and usability of routine load have been improved, including load balancing, automatic recovery, exception handling, and more user-friendly error messages. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/36450"},"#36450")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/35376"},"#35376")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/35266"},"#35266")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33372"}," #33372")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32282"},"#32282")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32046"},"#32046")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32021"},"#32021")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31846"},"#31846")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31273"},"#31273"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"BE load balancing selection of hard disk strategy and speed optimization. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/36826"},"#36826")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/36795"},"#36795")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/36509"},"#36509"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Stability and usability of the JDBC catalog have been improved, including encryption, thread pool connection count configuration, and more user-friendly error messages. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/36940"},"#36940")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/36720"},"#36720")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/30880"},"#30880")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/35692"},"#35692"))),(0,r.yg)("p",null,"You can access the full list through the GitHub ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.12...2.0.13"},"link")," , with the key features and improvements highlighted below."),(0,r.yg)("h2",{id:"credits"},"Credits"),(0,r.yg)("p",null,"Thanks to all who contributed to this release:"),(0,r.yg)("p",null,"@Gabriel39, @Jibing-Li, @Johnnyssc, @Lchangliang, @LiBinfeng-01, @SWJTU-ZhangLei, @Thearas, @Yukang-Lian, @Yulei-Yang, @airborne12, @amorynan, @bobhan1, @cambyzju, @csun5285, @dataroaring, @deardeng, @eldenmoon, @englefly, @feiniaofeiafei, @hello-stephen, @jacktengg, @kaijchen, @liutang123, @luwei16, @morningman, @morrySnow, @mrhhsg, @mymeiyi, @platoneko, @qidaye, @sollhui, @starocean999, @w41ter, @xiaokang, @xy720, @yujun777, @zclllyybb, @zddr"))}m.isMDXComponent=!0}}]);