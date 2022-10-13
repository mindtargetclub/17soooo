(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c609ed7"],{"0d56":function(t,e,a){"use strict";var s=a("19c5"),o=a.n(s);o.a},"19c5":function(t,e,a){},"9eed":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-1 "},[a("div",{staticClass:"px-5 bg-blue-200"},[a("download-csv",{staticClass:"btn bg-red-400 rounded-2xl px-3 m-2 text-white hover:bg-red-600",attrs:{data:t.temp.data.list,labels:{productCode:"编号",amount:"姓名"},name:"當日西湖報表.csv"}},[t._v(" 匯出資料 ")]),a("span",{staticClass:"result"}),a("hr"),t._v(" 顯示 第 "+t._s(t.temp.data.page)+" 頁，訂單數量："+t._s(t.temp.data.totalCount)+" "),a("hr"),t._v(" 目前 設計 時間: 指定為 本筆訂單的消費金額： "+t._s(t.temp.data.list[0].amount)+" "),a("hr"),t._v(" 指定為 本筆訂單的詳細資料： "+t._s(t.temp.data.list[0].orderNo)+" "),a("hr"),t._v(" 指定為 ： ")],1),a("v-tabs",{attrs:{"background-color":"#e4e4e7","fixed-tabs":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t.hide?t._e():a("v-tab",{key:"k1",attrs:{href:"#k1"}},[t._v(" 當日 ")]),a("v-tab",{key:"k2",attrs:{href:"#k2"}},[t._v(" 明日 ")]),a("v-tab",{key:"k3",attrs:{href:"#k3"}},[t._v(" 未來 ")])],1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",{key:"k1",attrs:{value:"k1"}},[a("div",{staticClass:"grid grid-cols-6 "}),a("hr"),t._l(t.temptdy.data.list,(function(e,s){return a("div",{key:s,staticClass:"my-2 "},[a("div",{staticClass:"bg-white rounded-lg   \n                          transform hover:translate-y-2 \n                          hover:shadow-xl transition duration-300"},[a("div",{staticClass:"rounded-lg py-2 px-4 bg-purple-700 flex flex-col"},[a("div",[a("span",{staticClass:"text-xs text-gray-400 leading-none mb-1"},[t._v(" "+t._s(e.sessionStartDate)+" ")]),a("span",{staticClass:"text-xs broder-1 rounded-full bg-gray-900 text-gray-100 leading-none px-1"},[t._v(" "+t._s(t.ChkOrdType(e.productCode))+" ")]),a("span",{staticClass:"text-xs text-gray-400 leading-none mb-1 "},[t._v(" "+t._s(e.orderNo)+" ")]),a("h4",{staticClass:"text-white text-2xl font-bold leading-none truncate"},[t._v(" "+t._s(e.sessionStartTime)+" / "+t._s(e.contactLastName)+" "+t._s(e.contactFirstName)+" ")])]),a("div",{staticClass:"items-center"},[a("div",{staticClass:"grid grid-cols-6"},[a("div",{staticClass:"text-lg text-white font-bold col-span-2 mx-0.5 "},[a("span",{staticClass:"text-xs text-white font-light"},[t._v(" 預約 ")]),t._v(" "+t._s(Math.floor(e.amount/400))+" 位 ")]),a("div",{staticClass:" col-span-3 mx-2 text-lg text-white px-2 broder-1 rounded-full bg-purple-900 text-gray-100 "},[!1===t.paymentChk(e.productCode)?a("div",{staticClass:"text-yellow-400 "},[t._v(" 請再確認 ")]):t._e(),!0===t.paymentChk(e.productCode)?a("div",[t._v(" 須繳："+t._s(e.balance)+" ")]):t._e()]),a("button",{staticClass:"col-span-1\n                          rounded-full bg-purple-900 text-white \n                          hover:bg-purple-500 hover:text-purple-900 hover:shadow-xl \n                          focus:outline-none w-6 h-6 flex ml-auto transition duration-300",attrs:{href:"javascript:;"}},[a("svg",{staticClass:"stroke-current m-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),a("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])])])])])])])}))],2),a("v-tab-item",{key:"k2",attrs:{value:"k2"}},[t._l(t.temptmr.data.list,(function(t,e){return a("div",{key:e,staticClass:"my-2 "})})),a("hr"),t._l(t.temptmr.data.list,(function(e,s){return a("div",{key:s,staticClass:"my-2 "},[!0===t.paymentChk(e.productCode)?a("div"):t._e(),a("hr"),a("div",{staticClass:"\n                          bg-white rounded-lg  \n\n                          transform hover:translate-y-2 \n                          hover:shadow-xl transition duration-300"},[a("div",{staticClass:"rounded-lg py-2 px-4 bg-purple-700 flex flex-col"},[a("div",[a("span",{staticClass:"text-xs text-gray-400 leading-none mb-1"},[t._v(" "+t._s(e.sessionStartDate)+" ")]),a("span",{staticClass:"text-xs broder-1 rounded-full bg-gray-900 text-gray-100 leading-none px-1"},[t._v(" "+t._s(t.ChkOrdType(e.productCode))+" ")]),a("span",{staticClass:"text-xs text-gray-400 leading-none mb-1 "},[t._v(" "+t._s(e.orderNo)+" ")]),a("h4",{staticClass:"text-white text-2xl font-bold leading-none truncate"},[t._v(" "+t._s(e.sessionStartTime)+" / "+t._s(e.contactLastName)+" "+t._s(e.contactFirstName)+" ")])]),a("div",{staticClass:"items-center"},[a("div",{staticClass:"grid grid-cols-6"},[a("div",{staticClass:"text-lg text-white font-bold col-span-2 mx-0.5 "},[a("span",{staticClass:"text-xs text-white font-light"},[t._v(" 預約 ")]),t._v(" "+t._s(Math.floor(e.amount/400))+" 位 ")]),a("div",{staticClass:" col-span-3 mx-2  text-lg text-white px-2 broder-1 rounded-full bg-gray-900 text-gray-100 "},[t._v(" 須繳："+t._s(e.balance)+" ")]),a("button",{staticClass:"col-span-1\n                          rounded-full bg-purple-900 text-white \n                          hover:bg-purple-500 hover:text-purple-900 hover:shadow-xl \n                          focus:outline-none w-6 h-6 flex ml-auto transition duration-300",attrs:{href:"javascript:;"}},[a("svg",{staticClass:"stroke-current m-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),a("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])])])])])])])}))],2),a("v-tab-item",{key:"k3",attrs:{value:"k3"}},t._l(t.temp.data.list,(function(e,s){return a("div",{key:s,staticClass:"my-2 "},[a("div",{staticClass:"\n                          bg-white rounded-lg  \n\n                          transform hover:translate-y-2 \n                          hover:shadow-xl transition duration-300"},[a("div",{staticClass:"rounded-lg py-2 px-4 bg-purple-700 flex flex-col"},[a("div",[a("span",{staticClass:"text-xs text-gray-400 leading-none mb-1"},[t._v(" "+t._s(e.sessionStartDate)+" ")]),a("span",{staticClass:"text-xs broder-1 rounded-full bg-gray-900 text-gray-100 leading-none px-1"},[t._v(" "+t._s(t.ChkOrdType(e.productCode))+" ")]),a("span",{staticClass:"text-xs text-gray-400 leading-none mb-1 "},[t._v(" "+t._s(e.orderNo)+" ")]),a("h4",{staticClass:"text-white text-2xl font-bold leading-none truncate"},[t._v(" "+t._s(e.sessionStartTime)+" / "+t._s(e.contactLastName)+" "+t._s(e.contactFirstName)+" ")])]),a("div",{staticClass:"items-center"},[a("div",{staticClass:"grid grid-cols-6"},[a("div",{staticClass:"text-lg text-white font-bold col-span-2 mx-0.5 "},[a("span",{staticClass:"text-xs text-white font-light"},[t._v(" 預約 ")]),t._v(" "+t._s(Math.floor(e.amount/400))+" 位 ")]),a("div",{staticClass:" col-span-3 mx-2  text-lg text-white px-2 broder-1 rounded-full bg-gray-900 text-gray-100 "},[t._v(" 須繳："+t._s(e.balance)+" ")]),a("button",{staticClass:"col-span-1\n                          rounded-full bg-purple-900 text-white \n                          hover:bg-purple-500 hover:text-purple-900 hover:shadow-xl \n                          focus:outline-none w-6 h-6 flex ml-auto transition duration-300",attrs:{href:"javascript:;"}},[a("svg",{staticClass:"stroke-current m-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),a("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])])])])])])])})),0)],1)],1)},o=[],n=(a("a4d3"),a("e01a"),a("99af"),a("a15b"),a("d81d"),a("fb6a"),a("b64b"),a("07ac"),a("ac1f"),a("5319"),a("1276"),a("2909")),r=a("f652"),i=(a("d142"),a("2b0e")),l=a("2347"),c=a.n(l),d={name:"add-tutorial",data:function(){return{json_data:[{name:"Tony Peña",city:"New York",country:"United States",birthdate:"1978-03-15",phone:{mobile:"1-541-754-3010",landline:"(541) 754-3010"}},{name:"Thessaloniki",city:"Athens",country:"Greece",birthdate:"1987-11-23",phone:{mobile:"+1 855 275 5071",landline:"(2741) 2621-244"}}],TdyToolsChker:{BowNeeD_06:0,BowNeeD_07:0,BowNeeD_08:0,BowNeeD_09:0,BowNeeD_10:0,BowNeeD_11:0,BowNeeD_12:0,BowNeeD_13:0,BowNeeD_14:0,BowNeeD_15:0,BowNeeD_16:0,BowNeeD_17:0,BowNeeD_18:0,BowNeeD_19:0,BowNeeD_20:0,BowNeeD_21:0,BowNeeD_22:0,Tmr:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},temp:{code:"",codeMessage:"",data:{list:{amount:"",orderStatus:"",createdAt:"",sessionStartDate:"",sessionStartTime:"",orderNo:"",productCode:"",contactLastName:"",contactFirstName:""}}},temptdy:{code:"",codeMessage:"",data:{list:{amount:"",orderStatus:"",createdAt:"",sessionStartDate:"",sessionStartTime:"",orderNo:"",productCode:"",contactLastName:"",contactFirstName:""}}},temptmr:{code:"",codeMessage:"",data:{list:{amount:"",orderStatus:"",createdAt:"",sessionStartDate:"",sessionStartTime:"",orderNo:"",productCode:"",contactLastName:"",contactFirstName:""}}},tempall:{code:"",codeMessage:"",data:{list:{amount:"",orderStatus:"",createdAt:"",sessionStartDate:"",sessionStartTime:"",orderNo:"",productCode:"",contactLastName:"",contactFirstName:""}}},list:{amount:"",orderStatus:"",createdAt:"",sessionStartDate:"",sessionStartTime:"",orderNo:"",productCode:"",contactLastName:"",contactFirstName:""},submitted:!1,word:{spell_tayal:"",spell_zh_tw:"",season:"",topic:"",description:""},tab:[]}},computed:{c:function(){vv=0;var t=[0,0,vv];return console.log("- -- - -- - -- -"),console.log(this.temptmr.data.list[0].sessionStartTime.slice(0,2)),this.temptmr.data.list[0].sessionStartTime.slice(0,2),t}},methods:{saveTutorial:function(){var t=this,e={title:this.tutorial.title,description:this.tutorial.description,published:!1};r["a"].create(e).then((function(){console.log("Created new item successfully!"),t.submitted=!0})).catch((function(t){console.log(t)}))},newTutorial:function(){this.submitted=!1,this.tutorial={title:"",description:"",published:!1}},csvExport:function(t){console.log(this.users);var e="data:text/csv;charset=utf-8,";e+=[Object.keys(t[0]).join(";")].concat(Object(n["a"])(t.map((function(t){return Object.values(t).join(";")})))).join("\n").replace(/(^\[)|(\]$)/gm,"");var a=encodeURI(e),s=document.createElement("a");s.setAttribute("href",a),s.setAttribute("download","export.csv"),s.click()},autoGetDate:function(){today=new Date;var t=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();return console.log(" 今天 "+t),t},ddd:function(t){var e;e=new Date,new Date;var a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();console.log(" 今天 "+a);if(chkDATE_ary=t.split("-"),chkDATE_ary[2]>=e.getMonth()+1&&chkDATE_ary[3]>e.getDate())return!0},paymentChk:function(t){var e=!0;return"3HEH3P"==t|"YR2EZI"==t|"NKJ3OQ"==t|"VEY9F8"==t|"6ILOVL"==t|"MLCO18"==t&&(e=!1),e},CuptPeople:function(t){var e=t.slice(0,2);return console.log("ff = "+e),e},ChkOrdType:function(t){switch(t){case"UPEBNV":return"gov券";case"KZLQHF":return"12套票";case"9BQGWI":return"自備弓長距";case"NKJ3OQ":return"團體-基礎班";case"VEY9F8":return"反曲弓-個別課";case"6ILOVL":return"個別-基礎班";case"RYMYSI":return"親子體驗";case"Q0J3UR":return"輕體驗";case"MLCO18":return"電話預約";case"DP13QZ":return"會員預約";case"3HEH3P":return"團體十人pa";case"YR2EZI":return"烤肉pa";case"FIT12B":return"夜光pa親子體驗";default:return"未分類"+t}}},mounted:function(){var t=this,e=axios.create({baseURL:"https://cors-anywhere.herokuapp.com/https://api.rezio.io/",headers:{"Content-Type":"application/json","X-Lang":"en","X-Auth-StoreUuid":"001e81f1-3111-485e-8c22-6644cb2df11c","X-Auth-Key":"0b4ae1cc6859fc3a47b06d27677eb07c"}}),a=function(){return e.get(n(11))};a().then((function(e){t.temptdy=JSON.parse(JSON.stringify(e.data)),console.log("= = = = = < temptdy  > = = = = ="),console.log(e)})).catch((function(t){return console.log(t)}));var s=function(){return e.get(n(12))};s().then((function(e){t.temptmr=JSON.parse(JSON.stringify(e.data)),console.log("= = = = = < temptmr  > = = = = ="),console.log(e)})).catch((function(t){return console.log(t)}));var o=function(){return e.get(n(13))};o().then((function(e){t.temp=JSON.parse(JSON.stringify(e.data)),console.log("= = = = = < temp  > = = = = ="),console.log(e.data)})).catch((function(t){return console.log(t)}));function n(t,e){var a;a=new Date;var s="";switch(t){case 1:return s=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),console.log("shun tell  cmd = "+s),"/v1/order/list?dateType=2&from="+s+"&to="+s;case 11:s=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();var o="/v1/order/list?dateType=2&from="+s+"&to="+s;return console.log("shun tell  cmd3 = "+o),o;case 12:s=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+(a.getDate()+1);var n="/v1/order/list?dateType=2&from="+s+"&to="+s;return console.log("shun tell  cmd3 = "+n),n;case 13:s=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+(a.getDate()+2);var r="/v1/order/list?dateType=2&from="+s+"&to="+s;return console.log("shun tell  cmd3 = "+r),r;case 99:return"/v1/order/list";case 98:return"/v1/order/list?dateType=2&from=2021-11-25&to=2021-11-25";case 2:return"/v1/setting/bookingInfo";case 3:return"/v1/setting/pricePolicy";default:break}}i["a"].component("downloadCsv",c.a)}},u=d,p=(a("0d56"),a("2877")),v=a("6544"),h=a.n(v),g=a("71a3"),m=a("c671"),f=a("fe57"),x=a("aac8"),b=Object(p["a"])(u,s,o,!1,null,null,null);e["default"]=b.exports;h()(b,{VTab:g["a"],VTabItem:m["a"],VTabs:f["a"],VTabsItems:x["a"]})},d142:function(t,e,a){"use strict";var s=a("d4ec"),o=a("bee2"),n=a("dc59"),r=n["a"].ref("/words"),i=function(){function t(){Object(s["a"])(this,t)}return Object(o["a"])(t,[{key:"getAll",value:function(){return r}},{key:"create",value:function(t){return r.push(t)}},{key:"update",value:function(t,e){return r.child(t).update(e)}},{key:"delete",value:function(t){return r.child(t).remove()}},{key:"deleteAll",value:function(){return r.remove()}}]),t}();new i},f652:function(t,e,a){"use strict";var s=a("d4ec"),o=a("bee2"),n=a("dc59"),r=n["a"].ref("/tutorials"),i=function(){function t(){Object(s["a"])(this,t)}return Object(o["a"])(t,[{key:"getAll",value:function(){return r}},{key:"create",value:function(t){return r.push(t)}},{key:"update",value:function(t,e){return r.child(t).update(e)}},{key:"delete",value:function(t){return r.child(t).remove()}},{key:"deleteAll",value:function(){return r.remove()}},{key:"getRef",value:function(){return r.no("value",(function(t){console.log(t.val())}))}}]),t}();e["a"]=new i}}]);