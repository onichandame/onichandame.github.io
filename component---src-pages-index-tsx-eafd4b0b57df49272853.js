(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0lfv":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return(e=new Date(e)).getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}},Q1c2:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi");var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),i=a("eD//"),l=a("tVbE"),o=a("ic+9"),u=a("tRbT"),m=a("ofer"),s=a("0lfv"),f=function(e){var t=e.title,a=e.author,n=e.date;return r.a.createElement(u.a,{container:!0,direction:"column"},r.a.createElement(u.a,{item:!0},r.a.createElement(m.a,{variant:"h6"},t)),r.a.createElement(u.a,{item:!0},r.a.createElement(u.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(u.a,{item:!0},r.a.createElement(m.a,{variant:"subtitle1"},a)),r.a.createElement(u.a,{item:!0},r.a.createElement(m.a,{variant:"subtitle1"},Object(s.a)(n))))))};var E=function(e){var t=e.posts,a=Object(n.useContext)(o.a);return r.a.createElement(i.a,null,t.map((function(e){var t=e.slug,n=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["slug"]);return r.a.createElement(l.a,{button:!0,onClick:function(){return Object(c.navigate)(Object(o.d)(a,"/post/"+t))}},r.a.createElement(f,n))})))}},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var n=a("q1tI"),r=a.n(n),c=a("tRbT"),i=a("ofer"),l=a("1Yd/"),o=a("ic+9"),u=a("Q1c2");t.default=function(e){var t=e.data.allMdx,a=e.pageContext.locale,n=Object(o.f)(),m=n.greeting,s=n.more;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{lang:a}),r.a.createElement(c.a,{container:!0,spacing:5,alignItems:"stretch",direction:"column"},r.a.createElement(c.a,{item:!0},r.a.createElement(i.a,{align:"center",variant:"h3"},m)),r.a.createElement(c.a,{item:!0},r.a.createElement(u.a,{posts:t.edges.map((function(e){var t=e.node;return{title:t.frontmatter.title,date:t.frontmatter.date,author:t.frontmatter.author,slug:t.parent.relativeDirectory}}))}),r.a.createElement(o.b,{to:"/post"},s+"..."))))};var m="1437376914"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-eafd4b0b57df49272853.js.map