webpackJsonp([1],{"7qna":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a=n("zL8q"),r=n.n(a),i=(n("tvR6"),n("/ocq")),c=n("9bGr"),l=n("gCHX"),s=n("L2CZ"),u=n("1Cty"),p=n("aC3Q"),f=n("eM/O"),d=n("bdNf"),v=n("86p+"),w=n("tOEd"),m=n("6HMI"),g=n("lY9i"),y=n("uODu"),h=(n("ktr9"),void 0),b=void 0,k=void 0,M={name:"Map",mounted:function(){this.initMap()},data:function(){return{msg:"Hello Map"}},methods:{initMap:function(){console.log(this.$refs.myMap);var e=b=new v.a,t=new p.a({source:e,style:new w.a({fill:new m.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new g.a({color:"#ffcc33",width:2}),image:new y.a({radius:7,fill:new m.a({color:"#ffcc33"})})})}),n=new p.a({source:e,style:new w.a({fill:new m.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new g.a({color:"#ffcc33",width:2}),image:new y.a({radius:7,fill:new m.a({color:"#ffcc33"})})})}),o=h=new c.a({layers:[new s.a({source:new u.a({url:"http://t2.supermapcloud.com/FileService/image?map=quanguo&type=web&x={x}&y={y}&z={z}"})}),t,n],target:this.$refs.myMap,controls:f.a.defaults({attributionOptions:{collapsible:!1}}),view:new l.a({center:[12685153.492296234,2577384.2465164554],zoom:12})});o.on("moveend",function(){var e=o.getView();console.log(e.getCenter()),console.log(e.getZoom())})},drawPoint:function(){k?k.setActive(!0):(k=new d.a({source:b,type:"Point"}),h.addInteraction(k))},searchPoi:function(){k.setActive(!1);for(var e=b.getFeatures(),t=[],n=0,o=e.length;n<o;n++){var a=e[n].getGeometry().transform("EPSG:3857","EPSG:4326");t.push(a.getCoordinates().map(function(e){return e.toFixed(6)}).join(","))}var r=e[0].getGeometry();t.push(r.getCoordinates().map(function(e){return e.toFixed(6)}).join(",")),t=t.join("|"),fetch("http://restapi.amap.com/v3/place/polygon?key=c673e715513d38b5dd75564d8ec4f717&types=050000&polygon="+t+"&keywords=美食&output=json").then(function(e){console.log(e)})},clear:function(){k.setActive(!1),b.clear()},findBestPlace:function(){k.setActive(!1)}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"myMap",attrs:{id:"map"}},[n("div",{staticClass:"tools"},[n("el-row",[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-location",circle:""},nativeOn:{click:function(t){return e.drawPoint(t)}}})],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:""},nativeOn:{click:function(t){return e.searchPoi(t)}}})],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"info",icon:"el-icon-delete",circle:""},nativeOn:{click:function(t){return e.clear(t)}}})],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"warning",icon:"el-icon-edit-outline",circle:""},nativeOn:{click:function(t){return e.findBestPlace(t)}}})],1)],1)],1)])},staticRenderFns:[]};var P=n("VU/8")(M,_,!1,function(e){n("a4b/")},"data-v-2802d178",null).exports;o.default.use(i.a);var O=new i.a({routes:[{path:"/",name:"Map",component:P}]}),C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-header",[this._v("Header")]),this._v(" "),t("el-main",[t("router-view")],1)],1)},staticRenderFns:[]};var A=n("VU/8")({name:"App"},C,!1,function(e){n("7qna")},null,null).exports;o.default.use(r.a,{size:"small"}),o.default.config.productionTip=!1,new o.default({el:"#app",router:O,components:{App:A},template:"<App/>"})},"a4b/":function(e,t){},ktr9:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.72d6c2d0defe110dcf74.js.map