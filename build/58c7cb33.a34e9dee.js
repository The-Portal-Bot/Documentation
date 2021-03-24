(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(217)),o={id:"portal",title:"portal",sidebar_label:"portal"},l={unversionedId:"commands/detailed/portal",id:"commands/detailed/portal",isDocsHomePage:!1,title:"portal",description:"|                               Description                               |               Argument                | Accessible | Cooldown |",source:"@site/docs/commands/detailed/portal.md",slug:"/commands/detailed/portal",permalink:"/docs/commands/detailed/portal",editUrl:"https://portal-bot.xyz/docs/commands/detailed/portal.md",version:"current",sidebar_label:"portal",sidebar:"docs",previous:{title:"ping",permalink:"/docs/commands/detailed/ping"},next:{title:"ranks",permalink:"/docs/commands/detailed/ranks"}},p=[{value:"Examples",id:"examples",children:[]}],i={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"Description"),Object(c.b)("th",{parentName:"tr",align:"center"},"Argument"),Object(c.b)("th",{parentName:"tr",align:"center"},"Accessible"),Object(c.b)("th",{parentName:"tr",align:"center"},"Cooldown"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Creates a new portal channel or sets",Object(c.b)("br",null),"the current channel as portal"),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("strong",{parentName:"td"},"!channel ","|"," @category")),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("inlineCode",{parentName:"td"},"admin")),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("inlineCode",{parentName:"td"},"none"))))),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Lets say you want to create a new portal channel, you would type"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-bash"},"./portal channel_spawner\n")),Object(c.b)("p",{parentName:"li"},"  This would create a new portal channel called ",Object(c.b)("em",{parentName:"p"},"channel_spawner"),".")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Lets say you want to create a new portal channel under a category, you would type"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-bash"},"./portal channel_spawner | portal\n")),Object(c.b)("p",{parentName:"li"},"  This would create a new portal channel called ",Object(c.b)("em",{parentName:"p"},"channel_spawner")," under category ",Object(c.b)("em",{parentName:"p"},"portal"),"."))))}b.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=b(n),m=r,u=d["".concat(o,".").concat(m)]||d[m]||s[m]||c;return n?a.a.createElement(u,l(l({ref:t},i),{},{components:n})):a.a.createElement(u,l({ref:t},i))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);