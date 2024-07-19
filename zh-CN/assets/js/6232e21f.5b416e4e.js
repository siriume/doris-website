"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[34696],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),y=r,u=s["".concat(g,".").concat(y)]||s[y]||c[y]||l;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},398144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"Doris Kafka Connector",language:"zh-CN"},o=void 0,i={unversionedId:"ecosystem/doris-kafka-connector",id:"version-2.0/ecosystem/doris-kafka-connector",title:"Doris Kafka Connector",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/ecosystem/doris-kafka-connector.md",sourceDirName:"ecosystem",slug:"/ecosystem/doris-kafka-connector",permalink:"/zh-CN/docs/2.0/ecosystem/doris-kafka-connector",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Doris Kafka Connector",language:"zh-CN"},sidebar:"docs",previous:{title:"Flink Doris Connector",permalink:"/zh-CN/docs/2.0/ecosystem/flink-doris-connector"},next:{title:"DataX Doriswriter",permalink:"/zh-CN/docs/2.0/ecosystem/datax"}},g={},p=[{value:"Doris Kafka Connector \u4f7f\u7528",id:"doris-kafka-connector-\u4f7f\u7528",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"Standalone \u6a21\u5f0f\u542f\u52a8",id:"standalone-\u6a21\u5f0f\u542f\u52a8",level:3},{value:"Distributed \u6a21\u5f0f\u542f\u52a8",id:"distributed-\u6a21\u5f0f\u542f\u52a8",level:3},{value:"\u8bbf\u95ee SSL \u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4",id:"\u8bbf\u95ee-ssl-\u8ba4\u8bc1\u7684-kafka-\u96c6\u7fa4",level:3},{value:"\u6b7b\u4fe1\u961f\u5217",id:"\u6b7b\u4fe1\u961f\u5217",level:3},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"\u7c7b\u578b\u6620\u5c04",id:"\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u540c\u6b65 Json \u5e8f\u5217\u5316\u6570\u636e",id:"\u540c\u6b65-json-\u5e8f\u5217\u5316\u6570\u636e",level:3},{value:"\u540c\u6b65 Avro \u5e8f\u5217\u5316\u6570\u636e",id:"\u540c\u6b65-avro-\u5e8f\u5217\u5316\u6570\u636e",level:3},{value:"\u540c\u6b65 Protobuf \u5e8f\u5217\u5316\u6570\u636e",id:"\u540c\u6b65-protobuf-\u5e8f\u5217\u5316\u6570\u636e",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/index.html"},"Kafka Connect")," \u662f\u4e00\u6b3e\u53ef\u6269\u5c55\u3001\u53ef\u9760\u7684\u5728 Apache Kafka \u548c\u5176\u4ed6\u7cfb\u7edf\u4e4b\u95f4\u8fdb\u884c\u6570\u636e\u4f20\u8f93\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5b9a\u4e49 Connectors \u5c06\u5927\u91cf\u6570\u636e\u8fc1\u5165\u8fc1\u51fa Kafka\u3002"),(0,r.yg)("p",null,"Doris \u793e\u533a\u63d0\u4f9b\u4e86 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-kafka-connector"},"doris-kafka-connector")," \u63d2\u4ef6\uff0c\u53ef\u4ee5\u5c06 Kafka topic \u4e2d\u7684\u6570\u636e\u5199\u5165\u5230 Doris \u4e2d\u3002"),(0,r.yg)("h2",{id:"doris-kafka-connector-\u4f7f\u7528"},"Doris Kafka Connector \u4f7f\u7528"),(0,r.yg)("h3",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/download"},"doris-kafka-connector")),(0,r.yg)("p",null,"maven \u4f9d\u8d56"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>doris-kafka-connector</artifactId>\n  <version>1.0.0</version>\n</dependency>\n")),(0,r.yg)("h3",{id:"standalone-\u6a21\u5f0f\u542f\u52a8"},"Standalone \u6a21\u5f0f\u542f\u52a8"),(0,r.yg)("p",null,"\u5728 $KAFKA_HOME \u4e0b\u521b\u5efa plugins \u76ee\u5f55\uff0c\u5c06\u4e0b\u8f7d\u597d\u7684 doris-kafka-connector jar \u5305\u653e\u5165\u5176\u4e2d"),(0,r.yg)("p",null,"\u914d\u7f6e config/connect-standalone.properties"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"# \u4fee\u6539 broker \u5730\u5740\nbootstrap.servers=127.0.0.1:9092\n\n# \u4fee\u6539\u4e3a\u521b\u5efa\u7684 plugins \u76ee\u5f55\n# \u6ce8\u610f\uff1a\u6b64\u5904\u8bf7\u586b\u5199 Kafka \u7684\u76f4\u63a5\u8def\u5f84\u3002\u4f8b\u5982\uff1aplugin.path=/opt/kafka/plugins\nplugin.path=$KAFKA_HOME/plugins\n")),(0,r.yg)("p",null,"\u914d\u7f6e doris-connector-sink.properties"),(0,r.yg)("p",null,"\u5728 config \u76ee\u5f55\u4e0b\u521b\u5efa doris-connector-sink.properties\uff0c\u5e76\u914d\u7f6e\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"name=test-doris-sink\nconnector.class=org.apache.doris.kafka.connector.DorisSinkConnector\ntopics=topic_test\ndoris.topic2table.map=topic_test:test_kafka_tbl\nbuffer.count.records=10000\nbuffer.flush.time=120\nbuffer.size.bytes=5000000\ndoris.urls=10.10.10.1\ndoris.http.port=8030\ndoris.query.port=9030\ndoris.user=root\ndoris.password=\ndoris.database=test_db\nkey.converter=org.apache.kafka.connect.storage.StringConverter\nvalue.converter=org.apache.kafka.connect.json.JsonConverter\n")),(0,r.yg)("p",null,"\u542f\u52a8 Standalone"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$KAFKA_HOME/bin/connect-standalone.sh -daemon $KAFKA_HOME/config/connect-standalone.properties $KAFKA_HOME/config/doris-connector-sink.properties\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u4e00\u822c\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 standalone \u6a21\u5f0f")),(0,r.yg)("h3",{id:"distributed-\u6a21\u5f0f\u542f\u52a8"},"Distributed \u6a21\u5f0f\u542f\u52a8"),(0,r.yg)("p",null,"\u5728 $KAFKA_HOME \u4e0b\u521b\u5efa plugins \u76ee\u5f55\uff0c\u5c06\u4e0b\u8f7d\u597d\u7684 doris-kafka-connector jar \u5305\u653e\u5165\u5176\u4e2d"),(0,r.yg)("p",null,"\u914d\u7f6e config/connect-distributed.properties"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"# \u4fee\u6539 broker \u5730\u5740\nbootstrap.servers=127.0.0.1:9092\n\n# \u4fee\u6539 group.id\uff0c\u540c\u4e00\u96c6\u7fa4\u7684\u9700\u8981\u4e00\u81f4\ngroup.id=connect-cluster\n\n# \u4fee\u6539\u4e3a\u521b\u5efa\u7684 plugins \u76ee\u5f55\n# \u6ce8\u610f\uff1a\u6b64\u5904\u8bf7\u586b\u5199 Kafka \u7684\u76f4\u63a5\u8def\u5f84\u3002\u4f8b\u5982\uff1aplugin.path=/opt/kafka/plugins\nplugin.path=$KAFKA_HOME/plugins\n")),(0,r.yg)("p",null,"\u542f\u52a8 Distributed"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$KAFKA_HOME/bin/connect-distributed.sh -daemon $KAFKA_HOME/config/connect-distributed.properties\n")),(0,r.yg)("p",null,"\u589e\u52a0 Connector"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{\n  "name":"test-doris-sink-cluster",\n  "config":{\n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector",\n    "topics":"topic_test",\n    "doris.topic2table.map": "topic_test:test_kafka_tbl",\n    "buffer.count.records":"10000",\n    "buffer.flush.time":"120",\n    "buffer.size.bytes":"5000000",\n    "doris.urls":"10.10.10.1",\n    "doris.user":"root",\n    "doris.password":"",\n    "doris.http.port":"8030",\n    "doris.query.port":"9030",\n    "doris.database":"test_db",\n    "key.converter":"org.apache.kafka.connect.storage.StringConverter",\n    "value.converter":"org.apache.kafka.connect.json.JsonConverter"\n  }\n}\'\n')),(0,r.yg)("p",null,"\u64cd\u4f5c Connector"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# \u67e5\u770b connector \u72b6\u6001\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/status -X GET\n# \u5220\u9664\u5f53\u524d connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster -X DELETE\n# \u6682\u505c\u5f53\u524d connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/pause -X PUT\n# \u91cd\u542f\u5f53\u524d connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/resume -X PUT\n# \u91cd\u542f connector \u5185\u7684 tasks\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/tasks/0/restart -X POST\n")),(0,r.yg)("p",null,"\u53c2\u8003\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/references/restapi.html#kconnect-rest-interface"},"Connect REST Interface")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u6ce8\u610f kafka-connect \u9996\u6b21\u542f\u52a8\u65f6\uff0c\u4f1a\u5f80 kafka \u96c6\u7fa4\u4e2d\u521b\u5efa ",(0,r.yg)("inlineCode",{parentName:"p"},"config.storage.topic")," ",(0,r.yg)("inlineCode",{parentName:"p"},"offset.storage.topic")," ",(0,r.yg)("inlineCode",{parentName:"p"},"status.storage.topic")," \u4e09\u4e2a topic \u7528\u4e8e\u8bb0\u5f55 kafka-connect \u7684\u5171\u4eab\u8fde\u63a5\u5668\u914d\u7f6e\u3001\u504f\u79fb\u6570\u636e\u548c\u72b6\u6001\u66f4\u65b0\u3002",(0,r.yg)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/userguide.html"},"How to Use Kafka Connect - Get Started"))),(0,r.yg)("h3",{id:"\u8bbf\u95ee-ssl-\u8ba4\u8bc1\u7684-kafka-\u96c6\u7fa4"},"\u8bbf\u95ee SSL \u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4"),(0,r.yg)("p",null,"\u901a\u8fc7 kafka-connect \u8bbf\u95ee SSL \u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4\u9700\u8981\u7528\u6237\u63d0\u4f9b\u7528\u4e8e\u8ba4\u8bc1 Kafka Broker \u516c\u94a5\u7684\u8bc1\u4e66\u6587\u4ef6\uff08client.truststore.jks\uff09\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"connect-distributed.properties")," \u6587\u4ef6\u4e2d\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# Connect worker\nsecurity.protocol=SSL\nssl.truststore.location=/var/ssl/private/client.truststore.jks\nssl.truststore.password=test1234\n\n# Embedded consumer for sink connectors\nconsumer.security.protocol=SSL\nconsumer.ssl.truststore.location=/var/ssl/private/client.truststore.jks\nconsumer.ssl.truststore.password=test1234\n")),(0,r.yg)("p",null,"\u5173\u4e8e\u901a\u8fc7 Kafka-Connect \u8fde\u63a5 SSL \u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4\u914d\u7f6e\u8bf4\u660e\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://docs.confluent.io/5.1.2/tutorials/security_tutorial.html#configure-kconnect-long"},"Configure Kafka Connect")),(0,r.yg)("h3",{id:"\u6b7b\u4fe1\u961f\u5217"},"\u6b7b\u4fe1\u961f\u5217"),(0,r.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u6216\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4efb\u4f55\u9519\u8bef\u90fd\u4f1a\u5bfc\u81f4\u8fde\u63a5\u5668\u5931\u8d25\u3002\u6bcf\u4e2a\u8fde\u63a5\u5668\u914d\u7f6e\u8fd8\u53ef\u4ee5\u901a\u8fc7\u8df3\u8fc7\u5b83\u4eec\u6765\u5bb9\u5fcd\u6b64\u7c7b\u9519\u8bef\uff0c\u53ef\u9009\u62e9\u5c06\u6bcf\u4e2a\u9519\u8bef\u548c\u5931\u8d25\u64cd\u4f5c\u7684\u8be6\u7ec6\u4fe1\u606f\u4ee5\u53ca\u6709\u95ee\u9898\u7684\u8bb0\u5f55\uff08\u5177\u6709\u4e0d\u540c\u7ea7\u522b\u7684\u8be6\u7ec6\u4fe1\u606f\uff09\u5199\u5165\u6b7b\u4fe1\u961f\u5217\u4ee5\u4fbf\u8bb0\u5f55\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"errors.tolerance=all\nerrors.deadletterqueue.topic.name=test_error_topic\nerrors.deadletterqueue.context.headers.enable=true\nerrors.deadletterqueue.topic.replication.factor=1\n")),(0,r.yg)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Enum"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Required")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Description")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Connect \u5e94\u7528\u540d\u79f0\uff0c\u5fc5\u987b\u662f\u5728 Kafka Connect \u73af\u5883\u4e2d\u552f\u4e00")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector.class"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.doris.kafka.connector.DorisSinkConnector")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topics"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u7684 topic \u5217\u8868\uff0c\u9017\u53f7\u5206\u9694\uff1atopic1,topic2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.urls"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris FE \u8fde\u63a5\u5730\u5740\u3002\u5982\u679c\u6709\u591a\u4e2a\uff0c\u4e2d\u95f4\u7528\u9017\u53f7\u5206\u5272\uff1a10.20.30.1,10.20.30.2,10.20.30.3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.http.port"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris HTTP \u534f\u8bae\u7aef\u53e3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.query.port"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris MySQL \u534f\u8bae\u7aef\u53e3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.user"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris \u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.password"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris \u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.database"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8981\u5199\u5165\u7684\u6570\u636e\u5e93\u3002\u591a\u4e2a\u5e93\u65f6\u53ef\u4ee5\u4e3a\u7a7a\uff0c\u540c\u65f6\u5728 topic2table.map \u9700\u8981\u914d\u7f6e\u5177\u4f53\u7684\u5e93\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.topic2table.map"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"topic \u548c table \u8868\u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u4f8b\uff1atopic1:tb1,topic2:tb2",(0,r.yg)("br",null),"\u9ed8\u8ba4\u4e3a\u7a7a\uff0c\u8868\u793a topic \u548c table \u540d\u79f0\u4e00\u4e00\u5bf9\u5e94\u3002 ",(0,r.yg)("br",null),"  \u591a\u4e2a\u5e93\u7684\u683c\u5f0f\u4e3a topic1:db1.tbl1,topic2:db2.tbl2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"buffer.count.records"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5728 flush \u5230 doris \u4e4b\u524d\uff0c\u6bcf\u4e2a Kafka \u5206\u533a\u5728\u5185\u5b58\u4e2d\u7f13\u51b2\u7684\u8bb0\u5f55\u6570\u3002\u9ed8\u8ba4 10000 \u6761\u8bb0\u5f55")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"buffer.flush.time"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"120"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"buffer \u5237\u65b0\u95f4\u9694\uff0c\u5355\u4f4d\u79d2\uff0c\u9ed8\u8ba4 120 \u79d2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"buffer.size.bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"5000000(5MB)"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a Kafka \u5206\u533a\u5728\u5185\u5b58\u4e2d\u7f13\u51b2\u7684\u8bb0\u5f55\u7684\u7d2f\u79ef\u5927\u5c0f\uff0c\u5355\u4f4d\u5b57\u8282\uff0c\u9ed8\u8ba4 5MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jmx"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u901a\u8fc7 JMX \u83b7\u53d6 Connector \u5185\u90e8\u76d1\u63a7\u6307\u6807\uff0c\u8bf7\u53c2\u8003\uff1a",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/doris-kafka-connector/blob/master/docs/zh-CN/Doris-Connector-JMX.md"},"Doris-Connector-JMX"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable.delete"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u540c\u6b65\u5220\u9664\u8bb0\u5f55\uff0c\u9ed8\u8ba4 false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"label.prefix"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"${name}"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Stream load \u5bfc\u5165\u6570\u636e\u65f6\u7684 label \u524d\u7f00\u3002\u9ed8\u8ba4\u4e3a Connector \u5e94\u7528\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auto.redirect"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u91cd\u5b9a\u5411 StreamLoad \u8bf7\u6c42\u3002\u5f00\u542f\u540e StreamLoad \u5c06\u901a\u8fc7 FE \u91cd\u5b9a\u5411\u5230\u9700\u8981\u5199\u5165\u6570\u636e\u7684 BE\uff0c\u5e76\u4e14\u4e0d\u518d\u663e\u793a\u83b7\u53d6 BE \u4fe1\u606f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"load.model"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"stream_load"),",",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"copy_into")),(0,r.yg)("td",{parentName:"tr",align:null},"stream_load"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u6570\u636e\u7684\u65b9\u5f0f\u3002\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"td"},"stream_load")," \u76f4\u63a5\u6570\u636e\u5bfc\u5165\u5230 Doris \u4e2d\uff1b\u540c\u65f6\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"td"},"copy_into")," \u7684\u65b9\u5f0f\u5bfc\u5165\u6570\u636e\u81f3\u5bf9\u8c61\u5b58\u50a8\u4e2d\uff0c\u7136\u540e\u5c06\u6570\u636e\u52a0\u8f7d\u81f3 Doris \u4e2d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"'sink.properties.format':'json'"),", ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"'sink.properties.read_json_by_line':'true'")),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Stream Load \u7684\u5bfc\u5165\u53c2\u6570\u3002",(0,r.yg)("br",null),"\u4f8b\u5982\uff1a\u5b9a\u4e49\u5217\u5206\u9694\u7b26",(0,r.yg)("inlineCode",{parentName:"td"},"'sink.properties.column_separator':','"),"  ",(0,r.yg)("br",null),"\u8be6\u7ec6\u53c2\u6570\u53c2\u8003",(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.0/data-operate/import/stream-load-manual"},"\u8fd9\u91cc"),"\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"delivery.guarantee"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"at_least_once"),",",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"exactly_once")),(0,r.yg)("td",{parentName:"tr",align:null},"at_least_once"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d88\u8d39 Kafka \u6570\u636e\u5bfc\u5165\u81f3 doris \u65f6\uff0c\u6570\u636e\u4e00\u81f4\u6027\u7684\u4fdd\u969c\u65b9\u5f0f\u3002\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"td"},"at_least_once")," ",(0,r.yg)("inlineCode",{parentName:"td"},"exactly_once"),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"at_least_once")," \u3002Doris \u9700\u8981\u5347\u7ea7\u81f3 2.1.0 \u4ee5\u4e0a\uff0c\u624d\u80fd\u4fdd\u969c\u6570\u636e\u7684 ",(0,r.yg)("inlineCode",{parentName:"td"},"exactly_once"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"converter.mode"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"normal"),",",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"debezium_ingestion")),(0,r.yg)("td",{parentName:"tr",align:null},"normal"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528 Connector \u6d88\u8d39 Kafka \u6570\u636e\u65f6\uff0c\u4e0a\u6e38\u6570\u636e\u7684\u7c7b\u578b\u8f6c\u6362\u6a21\u5f0f\u3002 ",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"normal"),"\u8868\u793a\u6b63\u5e38\u6d88\u8d39 Kafka \u4e2d\u7684\u6570\u636e\uff0c\u4e0d\u7ecf\u8fc7\u4efb\u4f55\u7c7b\u578b\u8f6c\u6362\u3002 ",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"debezium_ingestion"),"\u8868\u793a\u5f53 Kafka \u4e0a\u6e38\u7684\u6570\u636e\u901a\u8fc7 Debezium \u7b49 CDC \uff08Changelog Data Capture\uff0c\u53d8\u66f4\u6570\u636e\u6355\u83b7\uff09\u5de5\u5177\u91c7\u96c6\u65f6\uff0c\u4e0a\u6e38\u6570\u636e\u9700\u8981\u7ecf\u8fc7\u7279\u6b8a\u7684\u7c7b\u578b\u8f6c\u6362\u624d\u80fd\u652f\u6301\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"debezium.schema.evolution"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"none"),",",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"basic")),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u901a\u8fc7 Debezium \u91c7\u96c6\u4e0a\u6e38\u6570\u636e\u5e93\u7cfb\u7edf\uff08\u5982 MySQL\uff09\uff0c\u53d1\u751f\u7ed3\u6784\u53d8\u66f4\u65f6\uff0c\u53ef\u4ee5\u5c06\u589e\u52a0\u7684\u5b57\u6bb5\u540c\u6b65\u5230 Doris \u4e2d\u3002",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"none"),"\u8868\u793a\u4e0a\u6e38\u6570\u636e\u5e93\u7cfb\u7edf\u53d1\u751f\u7ed3\u6784\u53d8\u66f4\u65f6\uff0c\u4e0d\u540c\u6b65\u53d8\u66f4\u540e\u7684\u7ed3\u6784\u5230 Doris \u4e2d\u3002 ",(0,r.yg)("br",null),"  ",(0,r.yg)("inlineCode",{parentName:"td"},"basic"),"\u8868\u793a\u540c\u6b65\u4e0a\u6e38\u6570\u636e\u5e93\u7684\u6570\u636e\u53d8\u66f4\u64cd\u4f5c\u3002\u7531\u4e8e\u5217\u7ed3\u6784\u53d8\u66f4\u662f\u4e00\u4e2a\u5371\u9669\u64cd\u4f5c\uff08\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8bef\u5220 Doris \u8868\u7ed3\u6784\u7684\u5217\uff09\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u540c\u6b65\u4e0a\u6e38\u589e\u52a0\u5217\u7684\u64cd\u4f5c\u3002\u5f53\u5217\u88ab\u91cd\u547d\u540d\u540e\uff0c\u5219\u65e7\u5217\u4fdd\u6301\u539f\u6837\uff0cConnector \u4f1a\u5728\u76ee\u6807\u8868\u4e2d\u65b0\u589e\u4e00\u5217\uff0c\u5c06\u91cd\u547d\u540d\u540e\u7684\u65b0\u589e\u6570\u636e Sink \u5230\u65b0\u5217\u4e2d\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database.time_zone"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"UTC"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f53 ",(0,r.yg)("inlineCode",{parentName:"td"},"converter.mode")," \u4e3a\u975e ",(0,r.yg)("inlineCode",{parentName:"td"},"normal")," \u6a21\u5f0f\u65f6\uff0c\u5bf9\u4e8e\u65e5\u671f\u6570\u636e\u7c7b\u578b\uff08\u5982 datetime, date, timestamp \u7b49\u7b49\uff09\u63d0\u4f9b\u6307\u5b9a\u65f6\u533a\u8f6c\u6362\u7684\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u4e3a UTC \u65f6\u533a\u3002")))),(0,r.yg)("p",null,"\u5176\u4ed6Kafka Connect Sink\u901a\u7528\u914d\u7f6e\u9879\u53ef\u53c2\u8003\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#connect_configuring"},"connect_configuring")),(0,r.yg)("h2",{id:"\u7c7b\u578b\u6620\u5c04"},"\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("p",null,"Doris-kafka-connector \u4f7f\u7528\u903b\u8f91\u6216\u539f\u59cb\u7c7b\u578b\u6620\u5c04\u6765\u89e3\u6790\u5217\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,r.yg)("br",null),"\u539f\u59cb\u7c7b\u578b\u662f\u6307\u4f7f\u7528 Kafka connect \u7684 `Schema` \u8868\u793a\u7684\u7b80\u5355\u6570\u636e\u7c7b\u578b\u3002\u903b\u8f91\u6570\u636e\u7c7b\u578b\u901a\u5e38\u662f\u91c7\u7528 `Struct` \u7ed3\u6784\u8868\u793a\u590d\u6742\u7c7b\u578b\uff0c\u6216\u8005\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\u3002",(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Kafka \u539f\u59cb\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris \u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT8"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT16"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT32"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT64"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT32"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT64"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTES"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Kafka \u903b\u8f91\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris \u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.kafka.connect.data.Decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.kafka.connect.data.Date"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.kafka.connect.data.Time"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.kafka.connect.data.Timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Debezium \u903b\u8f91\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris \u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io.debezium.time.Date"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io.debezium.time.Time"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io.debezium.time.MicroTime"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io.debezium.time.NanoTime"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io.debezium.time.ZonedTime"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io.debezium.time.Timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io.debezium.time.MicroTimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io.debezium.time.NanoTimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io.debezium.time.ZonedTimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"io.debezium.data.VariableScaleDecimal"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")))),(0,r.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.yg)("h3",{id:"\u540c\u6b65-json-\u5e8f\u5217\u5316\u6570\u636e"},"\u540c\u6b65 Json \u5e8f\u5217\u5316\u6570\u636e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{ \n  "name":"doris-json-test", \n  "config":{ \n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector", \n    "topics":"json_topic", \n    "tasks.max":"10",\n    "doris.topic2table.map": "json_topic:json_tab", \n    "buffer.count.records":"100000", \n    "buffer.flush.time":"120", \n    "buffer.size.bytes":"10000000", \n    "doris.urls":"127.0.0.1", \n    "doris.user":"root", \n    "doris.password":"", \n    "doris.http.port":"8030", \n    "doris.query.port":"9030", \n    "doris.database":"test", \n    "load.model":"stream_load",\n    "key.converter":"org.apache.kafka.connect.json.JsonConverter",\n    "value.converter":"org.apache.kafka.connect.json.JsonConverter"\n  } \n}\'\n')),(0,r.yg)("h3",{id:"\u540c\u6b65-avro-\u5e8f\u5217\u5316\u6570\u636e"},"\u540c\u6b65 Avro \u5e8f\u5217\u5316\u6570\u636e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{ \n  "name":"doris-avro-test", \n  "config":{ \n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector", \n    "topics":"avro_topic", \n    "tasks.max":"10",\n    "doris.topic2table.map": "avro_topic:avro_tab", \n    "buffer.count.records":"100000", \n    "buffer.flush.time":"120", \n    "buffer.size.bytes":"10000000", \n    "doris.urls":"127.0.0.1", \n    "doris.user":"root", \n    "doris.password":"", \n    "doris.http.port":"8030", \n    "doris.query.port":"9030", \n    "doris.database":"test", \n    "load.model":"stream_load",\n    "key.converter":"io.confluent.connect.avro.AvroConverter",\n    "key.converter.schema.registry.url":"http://127.0.0.1:8081",\n    "value.converter":"io.confluent.connect.avro.AvroConverter",\n    "value.converter.schema.registry.url":"http://127.0.0.1:8081"\n  } \n}\'\n')),(0,r.yg)("h3",{id:"\u540c\u6b65-protobuf-\u5e8f\u5217\u5316\u6570\u636e"},"\u540c\u6b65 Protobuf \u5e8f\u5217\u5316\u6570\u636e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{ \n  "name":"doris-protobuf-test", \n  "config":{ \n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector", \n    "topics":"proto_topic", \n    "tasks.max":"10",\n    "doris.topic2table.map": "proto_topic:proto_tab", \n    "buffer.count.records":"100000", \n    "buffer.flush.time":"120", \n    "buffer.size.bytes":"10000000", \n    "doris.urls":"127.0.0.1", \n    "doris.user":"root", \n    "doris.password":"", \n    "doris.http.port":"8030", \n    "doris.query.port":"9030", \n    "doris.database":"test", \n    "load.model":"stream_load",\n    "key.converter":"io.confluent.connect.protobuf.ProtobufConverter",\n    "key.converter.schema.registry.url":"http://127.0.0.1:8081",\n    "value.converter":"io.confluent.connect.protobuf.ProtobufConverter",\n    "value.converter.schema.registry.url":"http://127.0.0.1:8081"\n  } \n}\'\n')),(0,r.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. \u8bfb\u53d6 Json \u7c7b\u578b\u7684\u6570\u636e\u62a5\u5982\u4e0b\u9519\u8bef\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'Caused by: org.apache.kafka.connect.errors.DataException: JsonConverter with schemas.enable requires "schema" and "payload" fields and may not contain additional fields. If you are trying to deserialize plain JSON data, set schemas.enable=false in your converter configuration.\n    at org.apache.kafka.connect.json.JsonConverter.toConnectData(JsonConverter.java:337)\n    at org.apache.kafka.connect.storage.Converter.toConnectData(Converter.java:91)\n    at org.apache.kafka.connect.runtime.WorkerSinkTask.lambda$convertAndTransformRecord$4(WorkerSinkTask.java:536)\n    at org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.execAndRetry(RetryWithToleranceOperator.java:180)\n    at org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.execAndHandleError(RetryWithToleranceOperator.java:214)\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u539f\u56e0\uff1a"),"\n\u662f\u56e0\u4e3a\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.kafka.connect.json.JsonConverter"),' \u8f6c\u6362\u5668\u9700\u8981\u5339\u914d "schema" \u548c "payload" \u5b57\u6bb5\u3002'),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\uff0c\u4efb\u9009\u5176\u4e00\uff1a")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5c06 ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.kafka.connect.json.JsonConverter")," \u66f4\u6362\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.kafka.connect.storage.StringConverter")),(0,r.yg)("li",{parentName:"ol"},"\u542f\u52a8\u6a21\u5f0f\u4e3a ",(0,r.yg)("strong",{parentName:"li"},"Standalone")," \u6a21\u5f0f\uff0c\u5219\u5c06 config/connect-standalone.properties \u4e2d ",(0,r.yg)("inlineCode",{parentName:"li"},"value.converter.schemas.enable")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"li"},"key.converter.schemas.enable")," \u6539\u6210false\uff1b\n\u542f\u52a8\u6a21\u5f0f\u4e3a ",(0,r.yg)("strong",{parentName:"li"},"Distributed")," \u6a21\u5f0f\uff0c\u5219\u5c06 config/connect-distributed.properties \u4e2d ",(0,r.yg)("inlineCode",{parentName:"li"},"value.converter.schemas.enable")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"li"},"key.converter.schemas.enable")," \u6539\u6210false")))}c.isMDXComponent=!0}}]);