(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0lfv":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return(e=new Date(e)).getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}},Q1c2:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("zLVn"),r=a("q1tI"),c=a.n(r),i=a("Wbzz"),l=a("eD//"),o=a("tVbE"),u=a("ic+9"),m=a("tRbT"),s=a("ofer"),f=a("0lfv"),E=function(e){var t=e.title,a=e.author,n=e.date;return c.a.createElement(m.a,{container:!0,direction:"column"},c.a.createElement(m.a,{item:!0},c.a.createElement(s.a,{variant:"h6"},t)),c.a.createElement(m.a,{item:!0},c.a.createElement(m.a,{container:!0,direction:"row",justify:"space-between"},c.a.createElement(m.a,{item:!0},c.a.createElement(s.a,{variant:"subtitle1"},a)),c.a.createElement(m.a,{item:!0},c.a.createElement(s.a,{variant:"subtitle1"},Object(f.a)(n))))))},b=function(e){var t=e.posts,a=Object(r.useContext)(u.a);return c.a.createElement(l.a,null,t.map((function(e){var t=e.slug,r=Object(n.a)(e,["slug"]);return c.a.createElement(o.a,{button:!0,onClick:function(){return Object(i.navigate)(Object(u.d)(a,"/post/"+t))}},c.a.createElement(E,r))})))}},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("tRbT"),i=a("ofer"),l=a("1Yd/"),o=a("ic+9"),u=a("Q1c2");t.default=function(e){var t=e.data.allMdx,a=e.pageContext.locale,n=Object(o.f)(),m=n.greeting,s=n.more;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{lang:a}),r.a.createElement(c.a,{container:!0,alignItems:"stretch",direction:"column"},r.a.createElement(c.a,{item:!0},r.a.createElement(i.a,{align:"center",variant:"h3"},m)),r.a.createElement(c.a,{item:!0},r.a.createElement(u.a,{posts:t.edges.map((function(e){var t=e.node;return{title:t.frontmatter.title,date:t.frontmatter.date,author:t.frontmatter.author,slug:t.parent.relativeDirectory}}))}),r.a.createElement(o.b,{to:"/post"},s+"..."))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f451d7b1cde1ede15351.js.map