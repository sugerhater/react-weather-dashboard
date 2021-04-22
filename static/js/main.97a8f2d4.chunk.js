(this["webpackJsonpreact-weather-dashboard"]=this["webpackJsonpreact-weather-dashboard"]||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(16),r=c.n(n),s=c(21),i=c(2),o=c(0),d=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"row bg-dark text-light text-center",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("h1",{children:"Weather Dashboard"})})})})},j=c(4),l=c(8),b=c.n(l),u=c(11),h=c(9),m="SET_CITY",O="SET_COORD",p="SET_UVI",x=Object(a.createContext)({cityInfo:{},city:"",coord:{lat:0,lon:0},uvi:""}),f=x.Provider,v=function(e,t){var c=t.type,a=t.payload;switch(c){case p:return console.log("setting uvi"),Object(h.a)(Object(h.a)({},e),{},{uvi:a});case"SET_CITY_WEATHER":return console.log("setting recipe",a),Object(h.a)(Object(h.a)({},e),{},{cityInfo:a});case m:return console.log("setting city",a),Object(h.a)(Object(h.a)({},e),{},{city:a});case O:return console.log("setting coord",a),Object(h.a)(Object(h.a)({},e),{},{coord:a});default:return e}},y=function(e){var t=e.children,c=Object(a.useReducer)(v,{cityInfo:{},city:"Columbus"}),n=Object(j.a)(c,2),r=n[0],s=n[1];return Object(o.jsx)(f,{value:[r,s],children:t})},g=function(){return Object(a.useContext)(x)},w=function(e){return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=89e03da76afa1f1ca74f57becbb1ae3d"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},N=function(e,t){return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&exclude=current&appid=89e03da76afa1f1ca74f57becbb1ae3d"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return console.log(e.daily),e.daily})).catch((function(e){console.log(e)}))},D=function(e){return Object(o.jsx)("div",{className:" float-left pl-3",children:Object(o.jsx)("div",{className:"card pl-3 pt-3 mb-3 bg-primary text-light",style:{width:"12rem"},children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{children:e.date}),Object(o.jsx)("p",{children:Object(o.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(e.icon,".png")})}),Object(o.jsxs)("p",{children:["Temp: ",(9*e.temp/5-459.67).toFixed(1)," \xb0F"]}),Object(o.jsxs)("p",{children:["humidity: ",e.humidity,"% "]})]})})})},T=c(12),E=c.n(T),M=function(){var e=g(),t=Object(j.a)(e,1)[0].coord,c=g(),n=Object(j.a)(c,2),r=(n[0],n[1]),s=Object(a.useState)([]),i=Object(j.a)(s,2),d=i[0],l=i[1],h=function(){var e=Object(u.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t.lat,t.lon);case 2:return c=e.sent,console.log(c),e.next=6,r({type:p,payload:c[0].uvi});case 6:return e.next=8,l(c.splice(1,5));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(t);var m=[E()().add(1,"day").format("MM/DD"),E()().add(2,"day").format("MM/DD"),E()().add(3,"day").format("MM/DD"),E()().add(4,"day").format("MM/DD"),E()().add(5,"day").format("MM/DD")];console.log(m),Object(a.useEffect)((function(){h()}),[t]);return d[0]?[0,1,2,3,4].map((function(e){return Object(o.jsx)(D,{humidity:d[e].humidity,date:m[e],icon:d[e].weather[0].icon,temp:d[e].temp.day})})):Object(o.jsx)("div",{children:"loading"})},S=function(){var e=Object(a.useRef)(),t=g(),c=Object(j.a)(t,2),n=(c[0],c[1]),r=function(){var t=Object(u.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),n({type:m,payload:e.current.value});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"search-bar",className:"col-12 bg-primary ml-auto",children:[Object(o.jsxs)("form",{onSubmit:r,children:[Object(o.jsx)("label",{for:"city-input",children:"Search for a City:"}),Object(o.jsx)("input",{className:"col-6",id:"city-input",type:"text",ref:e}),Object(o.jsx)("button",{className:"btn btn-secondary ",type:"submit",value:"search",children:" Search"})]}),Object(o.jsx)("div",{id:"city-list"})]})},F=function(){var e=g(),t=Object(j.a)(e,1)[0],c=t.city,n=t.uvi,r=g(),s=Object(j.a)(r,2),i=(s[0],s[1]),d=Object(a.useState)({}),l=Object(j.a)(d,2),h=l[0],m=l[1],p=function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(c);case 2:return t=e.sent,m(t),console.log(t.coord),e.next=7,i({type:O,payload:t.coord});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p()}),[c,n]),h.name?Object(o.jsx)("div",{className:"card pl-3 pt-3 mb-3 bg-primary text-light mr-auto",style:{width:"26rem"},children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h1",{className:"city",children:[h.name," Today"]}),Object(o.jsxs)("div",{className:"city",children:["Humidity ",h.main.humidity,"%"]}),Object(o.jsx)("div",{className:"temp",children:"Temperature:\n              ".concat((9*h.main.temp_min/5-459.67).toFixed(1),"F /\n              ").concat((9*h.main.temp_max/5-459.67).toFixed(1),"F")}),Object(o.jsx)("div",{className:"weather",children:Object(o.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(h.weather[0].icon,".png")})}),Object(o.jsx)("div",{className:"wind",children:"Wind Speed: ".concat((2.236*h.wind.speed).toFixed(1)," MPH ")}),n?Object(o.jsxs)("div",{className:"UV",children:["UXI: ",n]}):Object(o.jsx)("div",{children:" loading "})]})}):Object(o.jsx)("div",{className:"card pl-3 pt-3 mb-3 bg-primary text-light",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"city"}),Object(o.jsx)("div",{className:"weather"}),Object(o.jsx)("div",{className:"humidity"}),Object(o.jsx)("div",{className:"wind"}),Object(o.jsx)("div",{className:"UV"})]})})},I=function(){var e=g();return Object(j.a)(e,1)[0].coord?Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"row mx-auto",children:[Object(o.jsx)("div",{className:"col-4",children:Object(o.jsx)(S,{})}),Object(o.jsxs)("div",{className:"col-8",children:[Object(o.jsx)(F,{}),Object(o.jsx)("h2",{className:"pl-3",children:" 5 Days Forecast"}),Object(o.jsx)(M,{})]})]})]}):Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"row mx-auto",children:[Object(o.jsx)(S,{}),Object(o.jsx)(F,{})]})]})},C=function(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)(y,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",component:I}),Object(o.jsx)(i.a,{exact:!0,path:"/react-weather-dashboard",component:I})]})})};c(34),c(35);r.a.render(Object(o.jsx)(C,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.97a8f2d4.chunk.js.map