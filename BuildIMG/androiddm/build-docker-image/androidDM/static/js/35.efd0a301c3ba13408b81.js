webpackJsonp([35],{"042K":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("3cXf"),i=a.n(n),r=a("jwu5"),o=a("jnx8"),s=a("YMj5"),c={name:"containerMonitor",data:function(){return{containername:"",selectedAgentId:"",processTableData:[],containerId:"",cpuData:new Array(7),memoryData:new Array(7),limitMemoryData:new Array(7),networkRXData:new Array(7),networkTXData:new Array(7),intervalTime:"5",monitorLoading:!1,memoryLoading:!1,networkLoading:!1,processLoading:!1}},methods:{getTimeOptions:function(){var t=[],e=new Date,a="",n=e.getHours();n<10&&(n="0"+n);var i=e.getMinutes();i<10&&(i="0"+i);var r=e.getSeconds();r<10&&(r="0"+r);for(var o=0;o<=6;o++)a=n+":"+i+":"+r,t.unshift(a),(r-=this.intervalTime)<10&&0<=r?r="0"+r:r<0&&(r=60+r,--i<10&&(i="0"+i));return t},getSensorStatus:function(t,e,a){var n=this;if(e){var i={};a&&(i.containerId=a),"getContainerProcess"==t&&(this.processLoading=!0),Object(s.e)(e,r.h[t],i).then(function(e){"getContainerProcess"==t&&(n.processLoading=!1),Object(o.a)(e,function(e){if("containerMonitor"==t){var a,i,r,o,s,c=JSON.parse(e.content.value);r=c.cpuusage,n.cpuData.push(r),n.cpuData.shift(),n.drawCpuChart(r),a=(parseInt(c.memusage)/1024).toFixed(2),i=(parseInt(c.memlimited)/1024).toFixed(2),n.memoryData.push(a),n.memoryData.shift(),n.limitMemoryData.push(i),n.limitMemoryData.shift(),n.drawMemoryChart(a,i),o=(parseInt(c.RxBytes)/1024).toFixed(2),s=(parseInt(c.TxBytes)/1024).toFixed(2),n.networkRXData.push(o),n.networkRXData.shift(),n.networkTXData.push(s),n.networkTXData.shift(),n.drawNetWorkChart(o,s)}else if("getContainerProcess"==t){var l=JSON.parse(e.content.value).Processes;n.processTableData=[],l.forEach(function(t){var e={};e.uid=t[0],e.pid=t[1],e.ppid=t[2],e.c=t[3],e.stime=t[4],e.tty=t[5],e.time=t[6],e.cmd=t[7],n.processTableData.push(e)})}})})}else console.error("selectedAgentId is null")},drawNetWorkChart:function(t,e){console.log(t,e);var a=_g.max(t,e),n="RX("+t+"M)",i="TX("+e+"M)";a=10*parseInt(a/10)+20;var r={legend:{data:[n,i]},xAxis:{type:"category",axisLabel:{interval:0,rotate:30},data:this.getTimeOptions()},yAxis:{type:"value",max:a,min:0,interval:a/10},series:[{name:n,data:this.networkRXData,type:"line"},{name:i,data:this.networkTXData,type:"line"}]};this.networkChart=this.$echarts.init(document.getElementById("networkchart")),this.networkChart.setOption(r)},drawCpuChart:function(t){var e="CPU Usage("+t+"%)",a={legend:{data:[e]},xAxis:{type:"category",axisLabel:{interval:0,rotate:30},data:this.getTimeOptions()},yAxis:{type:"value",max:100,min:0,interval:10},series:[{name:e,data:this.cpuData,type:"line"}]};this.cpuChart=this.$echarts.init(document.getElementById("cpuchart")),this.cpuChart.setOption(a)},drawMemoryChart:function(t,e){console.log(this.memoryData);var a=_g.max(t,e);a=100*parseInt(a/100)+200;var n="Memory("+t+"M)",i="Limit Memory("+e+"M)",r={legend:{data:[n,i]},xAxis:{type:"category",axisLabel:{interval:0,rotate:30},data:this.getTimeOptions()},yAxis:{type:"value",max:a,min:0,interval:a/10},series:[{name:n,data:this.memoryData,type:"line"},{name:i,data:this.limitMemoryData,type:"line"}]};this.memoryChart=this.$echarts.init(document.getElementById("memorychart")),this.memoryChart.setOption(r)},startDeviceMonitor:function(t,e){var a=this;this.getSensorStatus("getContainerProcess",t,e),this.getSensorStatus("containerMonitor",t,e),null==_g.mtimer&&(_g.mtimer=window.setInterval(function(){a.getSensorStatus("containerMonitor",t,e)},1e3*this.intervalTime))},stopDeviceMonitor:function(){window.clearInterval(_g.mtimer),_g.mtimer=null},actionContainerSensor:function(t){var e=this;if(void 0!==r.h[t])if(""!=this.selectedAgentId){var a={};a.pkgname=this.containername,a.version=this.containerId,a.taskname="###",a.target=r.h[t],_g.swalWarnDo(this.$t("global.areYouSure"),this.$t("dockerAction."+t),this.$t("global.confirm"),this.$t("global.cancel")).then(function(n){n&&(_g.openGlobalLoading(),Object(s.h)(e.selectedAgentId,r.h[t],i()(a)).then(function(t){Object(o.a)(t,function(t){"CHANGED"==t.status?e.$swal("",e.$t("global.success"),"success",{button:e.$t("global.confirm")}).then(function(){e.startDeviceMonitor(e.selectedAgentId,e.containerId)}):_g.handleError(t)})}))})}else this.$swal("",this.$t("global.selectDevice"),"info",{button:this.$t("global.confirm")});else this.$swal("",this.$t("global.functionNotSupport"),"info",{button:this.$t("global.confirm")})},back:function(){this.$router.go(-1)}},created:function(){console.log(this.$route.query),this.$route.query.name&&this.$route.query.endpoint&&(this.containername=this.$route.query.name,this.selectedAgentId=this.$route.query.endpoint,this.containerId=this.$route.query.containerId,this.startDeviceMonitor(this.selectedAgentId,this.containerId))},mounted:function(){this.drawMemoryChart(0,0),this.drawCpuChart(0),this.drawNetWorkChart(0,0)},beforeDestroy:function(){this.stopDeviceMonitor()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"title"},[a("p",{staticClass:"header-line"},[a("i",{staticClass:"fa fa-arrow-left m-r-10 pointer",attrs:{"aria-hidden":"true"},on:{click:function(e){t.back()}}}),t._v("\n            "+t._s(t.containername)+"\n        ")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-col",{attrs:{span:20}},[a("div",{staticClass:"box-card cf m-r-10"},[a("div",{staticClass:"convas",attrs:{id:"cpuchart"}}),t._v(" "),a("div",{staticClass:"convas",attrs:{id:"memorychart"}}),t._v(" "),a("div",{staticClass:"convas",attrs:{id:"networkchart"}})]),t._v(" "),a("div",{staticClass:"process-content box-card m-r-10"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.processLoading,expression:"processLoading"}],staticStyle:{width:"100%"},attrs:{data:t.processTableData,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"uid",label:"UID","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pid",label:"PID","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ppid",label:"PPID","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"c",label:"C","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stime",label:"STIME","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tty",label:"TTY","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:"Time","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cmd",label:"CMD","min-width":"100"}})],1)],1)]),t._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"action box-card"},[a("p",[t._v(t._s(t.$t("global.action")))]),t._v(" "),a("p",[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.actionContainerSensor("restartContainer")}}},[t._v(t._s(t.$t("global.restart")))])],1),t._v(" "),a("p",[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.actionContainerSensor("stopContainer")}}},[t._v(t._s(t.$t("global.stop")))])],1)])])],1)])},staticRenderFns:[]};var d=a("C7Lr")(c,l,!1,function(t){a("tMU6")},"data-v-24d75a2a",null);e.default=d.exports},tMU6:function(t,e){}});
//# sourceMappingURL=35.efd0a301c3ba13408b81.js.map