"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[159],{1046:function(e,t,a){a.d(t,{w_:function(){return i}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),s=function(){return s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},c=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,s({key:t},e.attr),o(e.child))}))}function i(e){return function(t){return r.createElement(m,s({attr:s({},e.attr)},t),o(e.child))}}function m(e){var t=function(t){var a,n=e.attr,l=e.size,o=e.title,i=c(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},2899:function(e,t,a){var r=a(7294),n=a(1597),l=a(3201),s=a(2775);t.Z=function(e){var t=e.children,a=(0,r.useState)(""),c=a[0],o=a[1];return r.createElement("div",{className:"layoutContainer"},r.createElement("nav",{className:"navbar is-spaced",role:"navigation","aria-label":"main navigation"},r.createElement("div",{className:"navbar-brand"},r.createElement(n.rU,{className:"navbar-item",to:"/"},"Home"),r.createElement("a",{role:"button",className:"navbar-burger"+c,"aria-label":"menu","aria-expanded":"false","data-target":"navMenu",onClick:function(){return o(""===c?" is-active":"")}},r.createElement("span",{"aria-hidden":"true"}),r.createElement("span",{"aria-hidden":"true"}),r.createElement("span",{"aria-hidden":"true"}))),r.createElement("div",{className:"navbar-menu"+c,id:"navMenu"},r.createElement("div",{className:"navbar-end"},r.createElement(n.rU,{className:"navbar-item",to:"/"},"Archive"),r.createElement(n.rU,{className:"navbar-item",to:"/tags"},"Tags")))),r.createElement("main",{className:"columns is-centered",style:{margin:"1em"}},r.createElement("div",{className:"column is-two-thirds-tablet"},t)),r.createElement("footer",{className:"footer"},r.createElement("div",{className:"content has-text-centered"},r.createElement("p",null,"This website is designed by",r.createElement("strong",null," ",r.createElement("span",{className:"blue3"},"Hogger wang"))," and powered by",r.createElement("a",{href:"https://www.gatsbyjs.org"}," Gatsby.js")," and",r.createElement("a",{href:"https://bulma.io"}," Bulma"),"."),r.createElement("p",null,"Contact:",r.createElement("span",{className:"icon is-medium"},r.createElement("a",{className:"has-text-dark",href:"https://github.com/hogggger"},r.createElement(l.hJX,null))),r.createElement("span",{className:"icon is-medium"},r.createElement("a",{className:"has-text-dark",href:"mailto:deuntlt@gmail.com"},r.createElement(s.h6V,null)))))))}},1325:function(e,t,a){a.r(t);var r=a(7294),n=a(1597),l=a(2899);function s(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(e){for(var t,a=e.data.allMarkdownRemark.edges,c=new Map,o=s(a);!(t=o()).done;)for(var i,m=s(t.value.node.frontmatter.tags);!(i=m()).done;){var u=i.value;c.has(u)?c.set(u,c.get(u)+1):c.set(u,1)}var d=Array.from(c);return d.sort((function(e,t){return t[1]-e[1]})),r.createElement(l.Z,null,r.createElement("h1",{className:"title has-text-black is-1"},"All Tags"),r.createElement("p",{className:"subtitle is-spaced"},"Click the tag to read related articles"),r.createElement("hr",null),r.createElement("div",{className:"field is-grouped is-grouped-multiline"},d.map((function(e){var t=e[0],a=e[1];return r.createElement("div",{className:"control"},r.createElement("div",{className:"tags has-addons are-medium"},r.createElement(n.rU,{to:"/tag/"+t,className:"tag"},t),r.createElement("span",{className:"tag is-info"},a)))}))))}}}]);
//# sourceMappingURL=component---src-pages-tags-js-1845c5b7377625bccb08.js.map