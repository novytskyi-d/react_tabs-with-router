(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),a=c(4),i=c(2),j=(c(14),c(15),c(16),c(0)),b=c(6),r=c.n(b),l=c(1),o=Object(j.memo)((function(e){var t=e.to,c=e.title;return Object(l.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return r()("navbar-item",{"has-background-grey-lighter is-active":t})},children:c})})),d=function(){return Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(o,{to:"/",title:"Home"}),Object(l.jsx)(o,{to:"/tabs",title:"Tabs"})]})})})},x=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(i.b,{})})})]})},O=Object(j.memo)((function(){return Object(l.jsx)("h1",{className:"title",children:"Home page"})})),m=Object(j.memo)((function(e){var t=e.tabs,c=Object(i.i)().tabId,n=t.find((function(e){return e.id===c}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{"data-cy":"Tab",className:r()({"is-active":e.id===c}),children:Object(l.jsx)(a.b,{to:"../".concat(e.id),children:e.title})},e.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:n?n.content:"Please select a tab"})]})})),h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=Object(j.memo)((function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)(m,{tabs:h})]})})),v=Object(j.memo)((function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})}));s.a.render(Object(l.jsx)(a.a,{children:Object(l.jsx)(i.e,{children:Object(l.jsxs)(i.c,{path:"/",element:Object(l.jsx)(x,{}),children:[Object(l.jsx)(i.c,{index:!0,element:Object(l.jsx)(O,{})}),Object(l.jsx)(i.c,{path:"home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsxs)(i.c,{path:"tabs",children:[Object(l.jsx)(i.c,{index:!0,element:Object(l.jsx)(u,{})}),Object(l.jsx)(i.c,{path:":tabId",element:Object(l.jsx)(u,{})})]}),Object(l.jsx)(i.c,{path:"*",element:Object(l.jsx)(v,{})})]})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7bc63e19.chunk.js.map