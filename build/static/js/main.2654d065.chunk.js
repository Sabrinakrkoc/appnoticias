(this.webpackJsonpnoticias=this.webpackJsonpnoticias||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(5),c=t.n(o),l=t(3),i=t.n(l),s=t(6),u=t(1),m=function(e){var a=e.titulo;return r.a.createElement("nav",{className:"nav-container light-blue darken-3"},r.a.createElement("a",{href:"#!",className:"brand-logo center"},a))},d=function(e){var a=e.noticiaProp,t=a.urlToImage,n=a.url,o=a.title,c=a.description,l=a.source,i=t?r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:t,alt:o}),r.a.createElement("span",{className:"card-title"},l.name)):null;return r.a.createElement("div",{className:"col s12 m6 l4"},r.a.createElement("div",{className:"card"},i,r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,o),r.a.createElement("p",null,c)),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Ver Noticia Completa"))))},f=function(e){var a=e.noticiasProp;return r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement(d,{key:e.url,noticiaProp:e})})))},v=function(e,a){var t=Object(n.useState)(e),o=Object(u.a)(t,2),c=o[0],l=o[1];return[c,function(){return r.a.createElement("select",{className:"browser-default",onChange:function(e){return l(e.target.value)},value:c},a.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))}]},p=t(2),g=t.n(p),b=function(e){var a=e.guardarCategoriaProp,t=v("general",[{value:"general",label:"General"},{value:"business",label:"Negocios"},{value:"entertainment",label:"Entretenimiento"},{value:"health",label:"Salud"},{value:"science",label:"Ciencia"},{value:"sports",label:"Deportes"},{value:"technology",label:"Tecnolog\xeda"}]),n=Object(u.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",{className:"".concat(g.a.buscador," row")},r.a.createElement("div",{className:"col s12 m8 offset-m2"}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(o)}},r.a.createElement("h2",{className:"".concat(g.a.heading)},"Encuentra Noticias por Categor\xeda"),r.a.createElement(c,null),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"submit",value:"Buscar",className:"".concat(g.a["btn-block"],"btn-large amber darken-2")}))))};var h=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(""),l=Object(u.a)(c,2),d=l[0],v=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://newsapi.org/v2/top-headlines?country=ar&category=".concat(d,"&apiKey=0f7b4a0acf40405aaaf2e7c423084a00"),console.log(d),e.next=4,fetch(a);case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,o(n.articles);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{titulo:"Noticias API"}),r.a.createElement(b,{guardarCategoriaProp:v}),r.a.createElement(f,{noticiasProp:t}))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");E?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(a,e)}))}}()},2:function(e,a,t){e.exports={heading:"Formulario_heading__3qL6Y",buscador:"Formulario_buscador__AJsoc","btn-block":"Formulario_btn-block__1lkUZ"}},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.2654d065.chunk.js.map