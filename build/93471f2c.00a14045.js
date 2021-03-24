(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(217)),o={id:"crypto",title:"crypto",sidebar_label:"crypto"},i={unversionedId:"commands/detailed/crypto",id:"commands/detailed/crypto",isDocsHomePage:!1,title:"crypto",description:"|                        Description                         |            Argument             | Accessible | Cooldown |",source:"@site/docs/commands/detailed/crypto.md",slug:"/commands/detailed/crypto",permalink:"/docs/commands/detailed/crypto",editUrl:"https://portal-bot.xyz/docs/commands/detailed/crypto.md",version:"current",sidebar_label:"crypto",sidebar:"docs",previous:{title:"corona",permalink:"/docs/commands/detailed/corona"},next:{title:"delete",permalink:"/docs/commands/detailed/delete"}},p=[{value:"Examples",id:"examples",children:[]}],l={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"Description"),Object(c.b)("th",{parentName:"tr",align:"center"},"Argument"),Object(c.b)("th",{parentName:"tr",align:"center"},"Accessible"),Object(c.b)("th",{parentName:"tr",align:"center"},"Cooldown"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Replies with the current price of requested cryptocurrency"),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("strong",{parentName:"td"},"!cryptocurrency ","|"," exchange")),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("inlineCode",{parentName:"td"},"everyone")),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("inlineCode",{parentName:"td"},"none"))))),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Lets say you want to get the current price of Bitcoin in USD, you would type"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-bash"},"./crypto bitcoin | usd\n")),Object(c.b)("p",{parentName:"li"},"  Portal will reply with an ",Object(c.b)("em",{parentName:"p"},"crypto statitics for bitcoin in USD")," embedded card."))))}b.isMDXComponent=!0},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=b(r),u=n,s=d["".concat(o,".").concat(u)]||d[u]||m[u]||c;return r?a.a.createElement(s,i(i({ref:t},l),{},{components:r})):a.a.createElement(s,i({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);