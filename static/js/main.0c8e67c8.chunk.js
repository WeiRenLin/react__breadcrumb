(window["webpackJsonpreact-router-breadcrumb"]=window["webpackJsonpreact-router-breadcrumb"]||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},25:function(e,a,t){e.exports=t(36)},30:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(16),c=t.n(r),l=t(6),m=t(2),i=(t(30),t(17)),s=t(18),u=t(23),b=t(19),p=t(24),d=t(7),h=t(20),E=t.n(h),v=t(13),N=[{path:"/",component:function(e){var a=e.location;return o.a.createElement("div",null,o.a.createElement("h1",{className:"py-3"},"Home"),o.a.createElement(g,{locationPath:a.pathname}))},exact:!0,breadcrumbName:"Home"},{path:"/books",component:function(e){var a=e.location;return o.a.createElement("div",null,o.a.createElement("h1",{className:"py-3"},"Books"),o.a.createElement(g,{locationPath:a.pathname,onMatchedRoutes:function(e){return[{route:{path:"/",breadcrumbName:"Home"}}].concat(Object(v.a)(e))}}))},breadcrumbName:"Book"},{path:"/electronics",component:function(e){var a=e.route,t=e.location;return o.a.createElement("div",null,o.a.createElement("h1",{className:"py-3"},"Electronics"),o.a.createElement(g,{locationPath:t.pathname,onMatchedRoutes:function(e){return[{route:{path:"/",breadcrumbName:"Home"}}].concat(Object(v.a)(e))}}),Object(d.b)(a.routes))},breadcrumbName:"Electronics",routes:[{path:"/electronics/mobile",component:function(){return o.a.createElement("h3",null,"Mobile Phone")},breadcrumbName:"Mobile Phone"},{path:"/electronics/desktop",component:function(){return o.a.createElement("h3",null,"Desktop PC")},breadcrumbName:"Desktop PC"},{path:"/electronics/laptop",component:function(){return o.a.createElement("h3",null,"Laptop")},breadcrumbName:"Laptop"}]}],g=function(e){var a=e.locationPath,t=e.onMatchedRoutes,n=Object(d.a)(N,a);return"function"===typeof t&&(n=t(n)),o.a.createElement("nav",null,o.a.createElement("ol",{className:"breadcrumb"},n.map(function(e,t){var n=e.route,r=n.path,c=n.breadcrumbName;return r===a?o.a.createElement("li",{key:t,className:"breadcrumb-item active"},c):o.a.createElement("li",{key:t,className:"breadcrumb-item"},o.a.createElement(l.b,{to:r},c," "))})))},f=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},o.a.createElement(l.b,{className:"navbar-brand",to:"/"},o.a.createElement("img",{src:E.a,alt:"react-router-breadcrumb",width:"30",height:"30"})),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarContent"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(l.b,{className:"nav-link",to:"/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(l.b,{className:"nav-link",to:"/books"},"Books")),o.a.createElement("li",{className:"nav-item dropdown"},o.a.createElement(l.b,{className:"nav-link dropdown-toggle",to:"/electronics",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Electronics"),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},o.a.createElement(l.b,{className:"dropdown-item",to:"/electronics/mobile"},"Mobile Phone"),o.a.createElement(l.b,{className:"dropdown-item",to:"/electronics/desktop"},"Desktop PC"),o.a.createElement(l.b,{className:"dropdown-item",to:"/electronics/laptop"},"Laptop"))))))},k=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(f,null),Object(d.b)(N))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(l.a,null,o.a.createElement(m.c,null,o.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.0c8e67c8.chunk.js.map