(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0lfv":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return(t=new Date(t)).getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},X8hv:function(t,e,n){function r(t,e,n){return(r=o()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("xtjI"),n("Dq+y"),n("Ggvi"),n("rzGZ"),n("m210"),n("4DPX"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("8npG"),n("nWfQ"),n("nWfQ"),n("pJf4"),n("q8oJ"),n("YbXK"),n("cFtU"),n("m210"),n("xtjI"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var p=n("q1tI"),s=n("7ljp"),m=s.useMDXComponents,y=s.mdx,b=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,c=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),u=m(n),i=b(e),l=p.useMemo((function(){if(!o)return null;var t=f({React:p,mdx:y},i),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(a(e),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,e]);return p.createElement(l,f({components:u},c))}},fgyI:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return l}));var r=n("q1tI"),o=n.n(r),c=n("A2+M"),a=n("tRbT"),u=n("ofer"),i=n("0lfv"),f=n("1Yd/");e.default=function(t){var e=t.data.mdx,n=t.pageContext.locale;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{title:e.frontmatter.title,lang:n}),o.a.createElement(a.a,{container:!0,direction:"column",spacing:2},o.a.createElement(a.a,{item:!0},o.a.createElement(u.a,{variant:"h3"},e.frontmatter.title)),o.a.createElement(a.a,{item:!0},o.a.createElement(a.a,{container:!0,justify:"space-between",direction:"row"},o.a.createElement(a.a,{item:!0},o.a.createElement(u.a,{variant:"caption"},e.frontmatter.author)),o.a.createElement(a.a,{item:!0},o.a.createElement(u.a,{variant:"caption"},Object(i.a)(e.frontmatter.date))))),o.a.createElement(a.a,{item:!0},o.a.createElement(c.MDXRenderer,{headings:e.headings},e.body))))};var l="2395900116"},nWfQ:function(t,e,n){var r=n("P8UN"),o=n("nsRs"),c=n("nONw"),a=n("1a8y"),u=n("BjK0"),i=n("96qb"),f=n("16Xr"),l=(n("emib").Reflect||{}).construct,p=i((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),s=!i((function(){l((function(){}))}));r(r.S+r.F*(p||s),"Reflect",{construct:function(t,e){c(t),a(e);var n=arguments.length<3?t:c(arguments[2]);if(s&&!p)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(f.apply(t,r))}var i=n.prototype,m=o(u(i)?i:Object.prototype),y=Function.apply.call(t,m,e);return u(y)?y:m}})}}]);
//# sourceMappingURL=component---src-template-blog-tsx-746b283d42b70305d163.js.map