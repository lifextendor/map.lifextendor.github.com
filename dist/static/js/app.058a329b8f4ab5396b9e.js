webpackJsonp([1],{LNgU:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o=n("zL8q"),a=n.n(o),i=(n("tvR6"),n("/ocq")),c=n("9bGr"),s=n("gCHX"),l=n("L2CZ"),u=n("1Cty"),d=n("aC3Q"),f=n("eM/O"),p=n("bdNf"),w=n("86p+"),h=n("tOEd"),v=n("6HMI"),m=n("lY9i"),g=n("uODu"),y=(n("ktr9"),"http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0");var k=void 0;var b={name:"Map",mounted:function(){var e=this.$refs.myMap;this.initMap(e),this.resize(),document.body.onresize=this.resize.bind(this)},data:function(){return{msg:"Hello Map"}},methods:{initMap:function(e){var t=this.map=function(e){var t=new c.a({layers:[new l.a({source:new u.a({url:y})})],target:e,controls:f.a.defaults({attributionOptions:{collapsible:!1}}),view:new s.a({center:[12685153.492296234,2577384.2465164554],zoom:12})});return t.on("moveend",function(){var e=t.getView();console.log(e.getCenter()),console.log(e.getZoom())}),t}(e),n=function(e){var t=new w.a;return{source:t,vector:new d.a({source:t,style:new h.a({fill:new v.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new m.a({color:"#ffcc33",width:2}),image:new g.a({radius:7,fill:new v.a({color:"#ffcc33"})})})})}}(),r=n.vector,o=n.source,a=function(){var e=new w.a;return{markers:new d.a({source:e,style:new h.a({fill:new v.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new m.a({color:"#ffcc33",width:2}),image:new g.a({radius:7,fill:new v.a({color:"#ffcc33"})})})}),source:e}}().markers;this.vector=r,this.source=o,this.markers=a,t.addLayer(r),t.addLayer(a)},resize:function(){var e=window.innerWidth,t=window.innerHeight;this.map.setSize([e,t])},drawPoint:function(){var e,t;this.draw=(e=this.map,t=this.source,k||(k=new p.a({source:t,type:"Point"}),e.addInteraction(k),k))},searchPoi:function(){var e=this;this.draw&&this.draw.setActive(!1),function(e,t){if(e&&!(e.length<1)){for(var n=[],r=0,o=e.length;r<o;r++){var a=e[r].getGeometry().clone().transform("EPSG:3857","EPSG:4326");n.push(a.getCoordinates().map(function(e){return e.toFixed(6)}).join(","))}n.push(n[0]),n=n.join("|"),fetch("http://restapi.amap.com/v3/place/polygon?key=c673e715513d38b5dd75564d8ec4f717&types=050000&polygon="+n+"&keywords=美食&output=json").then(function(e){console.log(e),e.status>=200&&e.status<400&&t(e.body)})}}(this.source.getFeatures(),function(t){e.markers.clear()})},clear:function(){this.draw&&this.draw.setActive(!1),this.source.clear()},findBestPlace:function(){this.draw&&this.draw.setActive(!1)}}},z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"myMap",attrs:{id:"map"}},[n("div",{staticClass:"tools"},[n("el-row",[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-location",circle:""},nativeOn:{click:function(t){return e.drawPoint(t)}}})],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:""},nativeOn:{click:function(t){return e.searchPoi(t)}}})],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"info",icon:"el-icon-delete",circle:""},nativeOn:{click:function(t){return e.clear(t)}}})],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"warning",icon:"el-icon-edit-outline",circle:""},nativeOn:{click:function(t){return e.findBestPlace(t)}}})],1)],1)],1)])},staticRenderFns:[]};var _=n("VU/8")(b,z,!1,function(e){n("k5zD")},"data-v-adc9a0d2",null).exports;r.default.use(i.a);var M=new i.a({routes:[{path:"/",name:"Map",component:_}]}),P={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-header",[this._v("地图小工具")]),this._v(" "),t("el-main",[t("router-view")],1)],1)},staticRenderFns:[]};var O=n("VU/8")({name:"App"},P,!1,function(e){n("LNgU")},null,null).exports;r.default.use(a.a,{size:"small"}),r.default.config.productionTip=!1,new r.default({el:"#app",router:M,components:{App:O},template:"<App/>"})},k5zD:function(e,t){},ktr9:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.058a329b8f4ab5396b9e.js.map