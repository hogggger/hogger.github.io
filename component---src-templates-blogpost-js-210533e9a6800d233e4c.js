"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[118],{1046:function(e,t,a){a.d(t,{w_:function(){return i}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),s=function(){return s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function m(e){return e&&e.map((function(e,t){return n.createElement(e.tag,s({key:t},e.attr),m(e.child))}))}function i(e){return function(t){return n.createElement(o,s({attr:s({},e.attr)},t),m(e.child))}}function o(e){var t=function(t){var a,r=e.attr,l=e.size,m=e.title,i=c(e,["attr","size","title"]),o=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),m&&n.createElement("title",null,m),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},8678:function(e,t,a){var n=a(7294),r=a(1597),l=a(3201),s=a(2775);t.Z=function(e){var t=e.children,a=(0,n.useState)(""),c=a[0];a[1];return n.createElement("div",{className:"layoutContainer"},n.createElement("nav",{className:"navbar is-spaced",role:"navigation","aria-label":"main navigation"},n.createElement("div",{className:"navbar-brand"},n.createElement(r.rU,{className:"navbar-item",to:"/"},"Home"),n.createElement("a",{role:"button",className:"navbar-burger"+c,"aria-label":"menu","aria-expanded":"false"},n.createElement("span",{"aria-hidden":"true"}),n.createElement("span",{"aria-hidden":"true"}),n.createElement("span",{"aria-hidden":"true"}))),n.createElement("div",{className:"navbar-menu"+c,id:"navMenu"},n.createElement("div",{className:"navbar-end"},n.createElement(r.rU,{className:"navbar-item"},"Archive"),n.createElement(r.rU,{className:"navbar-item",to:"/tags"},"Tags")))),n.createElement("main",{className:"columns is-centered",style:{margin:"1em"}},n.createElement("div",{className:"column is-two-thirds-tablet"},t)),n.createElement("footer",{className:"footer"},n.createElement("div",{className:"content has-text-centered"},n.createElement("p",null,"This website is designed by",n.createElement("strong",null," ",n.createElement("span",{className:"blue3"},"Hogger wang"))," and powered by",n.createElement("a",{href:"https://www.gatsbyjs.org"}," Gatsby.js")," and",n.createElement("a",{href:"https://bulma.io"}," Bulma"),"."),n.createElement("p",null,"Contact:",n.createElement("span",{className:"icon is-medium"},n.createElement("a",{className:"has-text-dark",href:"https://github.com/hogggger"},n.createElement(l.hJX,null))),n.createElement("span",{className:"icon is-medium"},n.createElement("a",{className:"has-text-dark",href:"mailto:deuntlt@gmail.com"},n.createElement(s.h6V,null)))))))}},3190:function(e,t,a){a.r(t);var n=a(7294),r=a(1597),l=a(8678);t.default=function(e){var t=e.data,a=e.pageContext,s=(e.location,t.markdownRemark),c=a.previous,m=a.next;return console.log("+++++",c,m),n.createElement(l.Z,null,n.createElement("div",{className:"blogContent"},n.createElement("h1",{className:"headerTitle"},s.frontmatter.title),n.createElement("div",{dangerouslySetInnerHTML:{__html:s.html}})),n.createElement("nav",{className:"blogNav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,c&&c.frontmatter&&n.createElement(r.rU,{to:"/md"+c.fields.slug,rel:"prev"},"← ",c.frontmatter.title)),n.createElement("li",null,m&&m.frontmatter&&n.createElement(r.rU,{to:"/md"+m.fields.slug,rel:"next"},m.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blogpost-js-210533e9a6800d233e4c.js.map