"use strict";(self.webpackChunkportal_website=self.webpackChunkportal_website||[]).push([[8003],{8649:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"hosting/docker/configuration","title":"Configuration","description":"1. Add the API keys from the services you want.","source":"@site/docs/hosting/docker/configuration.md","sourceDirName":"hosting/docker","slug":"/hosting/docker/configuration","permalink":"/docs/hosting/docker/configuration","draft":false,"unlisted":false,"editUrl":"https://portal-bot.xyz/docs/hosting/docker/configuration.md","tags":[],"version":"current","frontMatter":{"id":"configuration","title":"Configuration","sidebar_label":"Configuration"},"sidebar":"docs","previous":{"title":"Prerequisites","permalink":"/docs/hosting/docker/prerequisites"},"next":{"title":"Build","permalink":"/docs/hosting/docker/build"}}');var i=o(4848),r=o(8453);const s={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},a=void 0,d={},c=[];function l(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the API keys from the services you want."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:'title="Portal/src/.env"',children:"# current version\nVERSION=0.6.8\n# your Discord-API-Token\nTOKEN=add-your-token-here\n# default prefix\nPREFIX=./\n# mongoDB url\nMONGO_URL=mongodb://mongo/portal?compressors=zlib&gssapiServiceName=portal\n# owner ID may be used throughout Portal\nOWNER_ID=add-your-id-(optional)\n# API KEYS\nOPENWEATHERMAP=add-open-weather-map-api-key\nCOVID_193=add-covid-193-api-key\nLYRICS=add-genius-api-key\nCOINGECKO=add-coingecko-api-key\nFOOTBALL_DATA=add-football-data-api-key\nYAHOO_FINANCE=add-yahoo-finance-api-key\nNEW_YORK_TIMES=add-new-york-time-api-key\nTRANSLATE_ENGINE=yandex\n# how long after message sent, will it be deleted\nTRANSLATE_KEY=add-yeandex-api-key\n# display run time information in console\nDELETE_DELAY=7\n# log files in ../logs directory on host\nDEBUG=false\nLOG=falsE\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Keep in mind that MONGO_URL by default is set to link to docker container, in case you are running it as a standalone app, you shall give the url of the mongo database."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Note that if you do not want to use an API, go to ",(0,i.jsx)(n.code,{children:"Portal/src/config.command.json"})," and delete the command corelating to the missing api (ex. covid_193 -> corona)."]})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.code,{children:"Portal/src/config.command.json"})," and remove commands you do not want Portal to have"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Go to and set the spamming guidelines to whatever you want them to be"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="Portal/src/config.command.json"',children:'{\n  "dupl_after": 2, // number of duplicates to warn\n  "warn_after": 3, // number of spam messages to warn\n  "mute_after": 5, // mute member after 5 messages\n  "mute_period": 2, // mute period in minutes\n  "kick_after": 0, // number of spam messages to kick\n  "ban_after": 0, // number of spam messages to ban\n  "message_interval": 1000 // interval in ms between messages to consider spam\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["We encourage you, to not alter ",(0,i.jsx)(n.code,{children:"Portal/src/config.event.json"})," as all events are needed for Portal to function properly"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(6540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);