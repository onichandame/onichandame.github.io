(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0lfv":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return(t=new Date(t)).getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},X8hv:function(t,e,n){function r(t,e,n){return(r=o()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("xtjI"),n("Dq+y"),n("Ggvi"),n("rzGZ"),n("m210"),n("4DPX"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("8npG"),n("nWfQ"),n("nWfQ"),n("pJf4"),n("q8oJ"),n("YbXK"),n("cFtU"),n("m210"),n("xtjI"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var p=n("q1tI"),s=n("7ljp"),m=s.useMDXComponents,y=s.mdx,b=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,a=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),i=m(n),u=b(e),l=p.useMemo((function(){if(!o)return null;var t=f({React:p,mdx:y},u),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(c(e),[""+o])).apply(void 0,[{}].concat(c(n)))}),[o,e]);return p.createElement(l,f({components:i},a))}},fgyI:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("A2+M"),c=n("tRbT"),i=n("ofer"),u=n("0lfv"),f=n("1Yd/");e.default=function(t){var e=t.data.mdx,n=t.pageContext.locale;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{title:e.frontmatter.title,lang:n}),o.a.createElement(c.a,{container:!0,direction:"column",spacing:2},o.a.createElement(c.a,{item:!0},o.a.createElement(i.a,{variant:"h3"},e.frontmatter.title)),o.a.createElement(c.a,{item:!0},o.a.createElement(c.a,{container:!0,justify:"space-between",direction:"row"},o.a.createElement(c.a,{item:!0},o.a.createElement(i.a,{variant:"caption"},e.frontmatter.author)),o.a.createElement(c.a,{item:!0},o.a.createElement(i.a,{variant:"caption"},Object(u.a)(e.frontmatter.date))))),o.a.createElement(c.a,{item:!0},o.a.createElement(a.MDXRenderer,{headings:e.headings},e.body))))};var l="2395900116"}}]);
//# sourceMappingURL=component---src-template-blog-tsx-538be02797d6b4522b70.js.map