"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20703],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=r,g=p["".concat(i,".").concat(y)]||p[y]||u[y]||l;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},675990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"ALTER-TABLE-COMMENT",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT",id:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT",title:"ALTER-TABLE-COMMENT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-TABLE-COMMENT",language:"en"},sidebar:"docs",previous:{title:"ALTER-TABLE-PROPERTY",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY"},next:{title:"ALTER-TABLE-AND-GENERATED-COLUMN",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-AND-GENERATED-COLUMN"}},i={},c=[{value:"ALTER-TABLE-COMMENT",id:"alter-table-comment",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-table-comment"},"ALTER-TABLE-COMMENT"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER TABLE COMMENT"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to modify the comment of an existing table. The operation is synchronous, and the command returns to indicate completion."),(0,r.yg)("p",null,"grammar\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Modify table comment")),(0,r.yg)("p",null,"grammar\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'MODIFY COMMENT "new table comment";\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Modify column comment")),(0,r.yg)("p",null,"grammar\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'MODIFY COLUMN col1 COMMENT "new column comment";\n')),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Change the table1's comment to table1_comment")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE table1 MODIFY COMMENT "table1_comment";\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Change the table1's col1 comment to table1_comment")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE table1 MODIFY COLUMN col1 COMMENT "table1_col1_comment";\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, COMMENT, ALTER TABLE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);