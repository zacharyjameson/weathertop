(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{16:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),i=n.n(c),s=(n(26),n(9)),o=n(7),u=n(8),l=n(11),h=n(10),p=r.a.createContext({unit:"",query:"",current_temp:"",max_temp:"",min_temp:"",description:"",humidity:"",wind_speed:""}),j="https://api.openweathermap.org/data/2.5/weather?APPID=",d=(Object({NODE_ENV:"production",PUBLIC_URL:"/weathertop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEATHER_KEY,"0ddf041fb53a2aff9b34fe18f7ed9ebd"),b=(n(16),n(1)),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.context;return Object(b.jsx)("div",{className:"App_results",children:Object(b.jsxs)("div",{className:e.current_temp?"results":"results hidden",children:[Object(b.jsx)("p",{children:"Current"}),Object(b.jsxs)("h1",{children:[Math.round(e.current_temp),"\xb0"]}),Object(b.jsx)("p",{children:e.description}),"High: ",Math.round(e.max_temp),"\xb0, Low:"," ",Math.round(e.min_temp),"\xb0"]})})}}]),n}(a.Component);m.contextType=p;var O=m,x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={unit:"",query:""},e.handleUnit=function(t){e.setState({unit:t.target.value}),console.log(t.target.value)},e.handleQuery=function(t){e.setState({query:t.target.value}),console.log(t.target.value)},e.handleSubmit=function(t){t.preventDefault();var n=e.state.query,a=e.state.unit,r="".concat(j).concat(d,"&units=").concat(a,"&q=").concat(n);console.log(n,a),fetch(r).then((function(e){if(console.log(r),!e.ok)throw new Error("The weather isn't weather. Please try again later.");return e.json()})).then((function(t){e.setState({current_temp:t.main.temp,max_temp:t.main.temp_max,min_temp:t.main.temp_min,description:t.weather[0].description}),console.log("JSON:",t),console.log("State: ",e.state)})).catch((function(e){console.log("Error: ",e)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e={current_temp:this.state.current_temp,max_temp:this.state.max_temp,min_temp:this.state.min_temp,description:this.state.description};return Object(b.jsxs)(p.Provider,{value:e,children:[Object(b.jsx)("form",{className:"App_main",onSubmit:this.handleSubmit,children:Object(b.jsxs)("div",{className:"searchbar_main",children:[Object(b.jsx)("label",{htmlFor:"searchbar_box",children:"Enter a City:"})," ",Object(b.jsx)("input",{type:"text",name:"searchbar_box",id:"searchbar_box",placeholder:"Los Angeles",onChange:this.handleQuery,required:!0}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"unit",children:"Unit of measurement:"})," ",Object(b.jsxs)("select",{id:"unit",name:"unit",onChange:this.handleUnit,required:!0,children:[Object(b.jsx)("option",{value:"standard",children:"Select one..."}),Object(b.jsx)("option",{value:"imperial",children:"Imperial"}),Object(b.jsx)("option",{value:"metric",children:"Metric"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)(s.b,{to:"/",children:[Object(b.jsx)("button",{id:"inputbutton",type:"button",value:"Back",children:"Back"})," "," "]}),Object(b.jsx)("input",{id:"inputbutton",type:"submit",value:"Submit"})]})}),Object(b.jsx)(O,{})]})}}]),n}(a.Component),_=n(2),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App_home",children:Object(b.jsx)("h4",{children:Object(b.jsx)(s.b,{to:"/weather-search",className:"link",children:"I don't feel like looking outside."})})})}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderMainRoutes",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_.a,{exact:!0,path:"/",component:f}),Object(b.jsx)(_.a,{path:"/weather-search",component:x}),Object(b.jsx)(_.a,{path:"/results",component:O})]})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App_main",children:[Object(b.jsx)("header",{className:"App_header",children:Object(b.jsx)("h1",{children:Object(b.jsx)(s.b,{to:"/",className:"title link",children:"Weathertop"})})}),Object(b.jsx)("main",{className:"App_main",children:this.renderMainRoutes()})]})}}]),n}(a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.232623af.chunk.js.map