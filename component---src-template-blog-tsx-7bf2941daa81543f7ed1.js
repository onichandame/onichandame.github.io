(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0lfv":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){return(e=new Date(e)).getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),c=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,r){var n=r("sXyB"),o=r("RIqP"),a=r("lSNA"),c=r("8OQS");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r("q1tI"),l=r("7ljp").mdx,p=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=c(e,["scope","children"]),u=p(t),f=s.useMemo((function(){if(!r)return null;var e=i({React:s,mdx:l},u),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return s.createElement(f,i({},a))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},fgyI:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("A2+M"),c=r("tRbT"),u=r("ofer"),i=r("tr08"),s=r("0lfv"),l=r("1Yd/");t.default=function(e){var t=e.data.mdx,r=e.pageContext.locale,n=Object(i.a)();return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:t.frontmatter.title,lang:r}),o.a.createElement(c.a,{container:!0,direction:"column",alignItems:"stretch"},o.a.createElement(c.a,{item:!0},o.a.createElement(u.a,{variant:"h3"},t.frontmatter.title)),o.a.createElement(c.a,{item:!0},o.a.createElement(c.a,{container:!0,justify:"space-between",direction:"row"},o.a.createElement(c.a,{item:!0},o.a.createElement(u.a,{variant:"caption"},t.frontmatter.author)),o.a.createElement(c.a,{item:!0},o.a.createElement(u.a,{variant:"caption"},Object(s.a)(t.frontmatter.date))))),o.a.createElement(c.a,{item:!0,style:{padding:n.spacing(2)}},o.a.createElement(a.MDXRenderer,{headings:t.headings},t.body))))}},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},sXyB:function(e,t,r){var n=r("SksO"),o=r("b48C");function a(t,r,c){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---src-template-blog-tsx-7bf2941daa81543f7ed1.js.map