"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[817],{28153:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var n=r(67294),l=r(46725),a=r(19692),i=r(13465),o=r(65754),c=r(11624),s=r(37858),u=r(61427),d=r(83935),m=r(19446),f=r(25444);var p=function(e){var t=e.lastUpdated,r=(0,f.useStaticQuery)("2962529501").primerWikiThemeConfig,l=r.lastUpdatedText;return r.shouldShowLastUpdated?n.createElement("div",null,t?n.createElement(o.Z,{fontSize:1,color:"auto.gray.7",mt:1},l," ",n.createElement("b",null,t)):null):null};function b(e){var t=e.editUrl,r=e.lastUpdated,l=(0,f.useStaticQuery)("476497397");return t||r?n.createElement(i.Z,{borderStyle:"solid",borderColor:"border.primary",borderWidth:0,borderTopWidth:1,borderRadius:0,mt:8,py:5},n.createElement(i.Z,{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},t?n.createElement(u.Z,{mb:"1",href:t},n.createElement(d.Z,{icon:m.vdY,mr:2}),l.primerWikiThemeConfig.editUrlText):null,r&&n.createElement(p,{lastUpdated:r}))):null}b.defaultProps={contributors:[]};var g=b,y=r(7431);var h=function(e){var t,r,l,a=e.location,o=e.sidebarItems,c=(t="sidebar",r=n.useRef(),l=n.useCallback((function(e){return window.sessionStorage.setItem(t,e.target.scrollTop)}),[t]),n.useEffect((function(){var e=window.sessionStorage.getItem(t);e&&r.current&&(r.current.scrollTop=e)}),[t]),{ref:r,onScroll:l});return Array.isArray(o)&&o.length>0?n.createElement(i.Z,{display:["none",null,null,"block"],position:"sticky",top:s.M,height:"calc(100vh - "+s.M+"px)",minWidth:260,color:"auto.gray.8",bg:"auto.gray.0"},n.createElement(i.Z,Object.assign({borderStyle:"solid",borderColor:"border.primary"},c,{borderWidth:0,borderRightWidth:1,borderRadius:0,height:"100%",style:{overflow:"auto"}}),n.createElement(i.Z,{display:"flex",flexDirection:"column"},n.createElement(y.Z,{location:a,items:o})))):null};function E(e){var t=e.items,r=e.depth,l=function(e,t){var r=n.useState(),l=r[0],a=r[1],i=n.useRef();return n.useEffect((function(){var r=e.map((function(e){return document.querySelector(e)}));return i.current&&i.current.disconnect(),i.current=new IntersectionObserver((function(e){e.forEach((function(e){null!=e&&e.isIntersecting&&a(e.target.getAttribute("id"))}))}),t),r.forEach((function(e){return i.current.observe(e)})),function(){return i.current.disconnect()}}),[e,t]),l}(t.map((function(e){return'[id="'+e.url.slice(1)+'"]'})),{rootMargin:"0% 0% -24% 0%"});return n.createElement(v,{as:"ul",m:0,p:0},t.map((function(e){return n.createElement(i.Z,{as:"li",key:e.url,pl:r>0?3:0},e.title?n.createElement(u.Z,{display:"inline-block",py:1,href:e.url,fontSize:[2,null,1],color:"auto.gray.6",sx:{fontWeight:e.url==="#"+l?"bold":"medium"},"aria-current":e.url==="#"+l?"location":void 0},e.title):null,e.items?n.createElement(E,{items:e.items,depth:r+1}):null)})))}E.defaultProps={depth:0};var x=E,v=(0,a.ZP)(i.Z).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-1jtv948-0"})({listStyle:"none"});var Z=function(e){var t=e.children,r=e.fields,l=e.frontmatter,a=e.tableOfContents,u=e.location,d=e.pageContext,m=l.title,f=r.lastUpdated,p=r.editUrl,b=d.sidebarItems;return n.createElement(i.Z,{display:"flex",flexDirection:"column",minHeight:"100vh"},n.createElement(s.Z,{location:u,sidebarItems:b}),n.createElement(w,{display:"flex",flex:"1 1 auto",flexDirection:"row"},n.createElement(h,{location:u,sidebarItems:b}),n.createElement(i.Z,{id:"skip-nav",display:"flex",width:"100%",p:[4,5,6,7],sx:{justifyContent:"center",flexDirection:"row-reverse"}},a.items?n.createElement(C,{sx:{width:220,flex:"0 0 auto",marginLeft:6},display:["none",null,"block"],position:"sticky",top:s.M+24,maxHeight:"calc(100vh - "+s.M+"px - 24px)"},n.createElement(o.Z,{display:"inline-block",fontWeight:"bold",mb:1},"On this page"),n.createElement(x,{items:a.items})):null,n.createElement(i.Z,{width:"100%",maxWidth:"960px"},m&&n.createElement(i.Z,{mb:4},n.createElement(i.Z,{display:"flex",sx:{alignItems:"center"}},n.createElement(c.Z,{as:"h1",mr:2},m))),a.items?n.createElement(i.Z,{borderWidth:"1px",borderStyle:"solid",borderColor:"border.primary",borderRadius:2,display:["block",null,"none"],mb:5,bg:"auto.gray.1"},n.createElement(i.Z,{p:3},n.createElement(i.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},n.createElement(o.Z,{fontWeight:"bold"},"On this page"))),n.createElement(i.Z,{p:3,sx:{borderTop:"1px solid",borderColor:"border.gray"}},n.createElement(x,{items:a.items}))):null,t,n.createElement(g,{editUrl:p,lastUpdated:f})))))},w=(0,a.ZP)(i.Z).withConfig({displayName:"layout___StyledBox",componentId:"sc-7a5ttt-0"})({zIndex:0}),C=(0,a.ZP)(i.Z).withConfig({displayName:"layout___StyledBox2",componentId:"sc-7a5ttt-1"})({gridArea:"table-of-contents",overflow:"auto"}),S=r(77185),k=function(e){var t=e.node;return n.createElement(i.Z,{mb:"2"},n.createElement(S.Z,{href:t.fields.slug,references:[t]},t.fields.title||t.fields.slug))},I=function(e){var t=e.references;return t.length?n.createElement(i.Z,{bg:"auto.gray.1",borderRadius:"2",px:"3",py:"4",mt:"4"},n.createElement(c.Z,{as:"h4",fontSize:"2",mb:"3",color:"text.placeholder"},n.createElement(d.Z,{mr:2,size:16,sx:{top:"-3px",position:"relative"},icon:m.xPt,color:"text.placeholder"}),"LINKS TO THIS PAGE"),n.createElement("div",null,t.map((function(e){return n.createElement(k,{node:e,key:e.fields.slug})})))):null},U=r(64983),W=r(58414),D=r(81705);function R(e,t,r){if(t&&t.length>0){for(var n="",l=0;l<t.length;l++){var a=t[l];if(a.url===e?n=r:a.items&&(n=R(e,a.items,a.title)),n)return n}return null}return null}var T=function(e){var t=e.data,r=e.pageContext,a=e.location,i=t.mdx,o=i.tableOfContents,c=i.frontmatter,s=i.fields,u=i.rawBody,d=i.body,m=i.inboundReferences,f=i.outboundReferences,p=i.excerpt,b=s.title,g=s.lastUpdatedAt,y=s.gitCreatedAt,h=s.slug,E=s.url,x=c.title,v=c.date,w=c.description,C=c.imageAlt,S=c.dateModified,k=function(e,t){for(var r=t.map((function(e){return e.items})),n=0;n<r.length;n++){var l=R(e,r[n]);if(l)return l}return null}(h,t.allSummaryGroup.nodes),T=v?new Date(v):y?new Date(y):null,A={title:b,frontmatterTitle:x,description:w,rawBody:u,excerpt:p,datePublished:T,dateModified:S?new Date(S):g?new Date(g):T,category:k,imageUrl:c.image?c.image.publicURL:null,imageAlt:C,url:E,slug:h};return n.createElement(Z,{fields:s,frontmatter:c,tableOfContents:o,pageContext:r,location:a},n.createElement(D.Z,{post:A}),n.createElement(U.MDXProvider,{components:{a:function(e){return n.createElement(W.Z.a,Object.assign({},e,{references:f}))}}},n.createElement(l.MDXRenderer,null,d)),n.createElement(I,{references:m}))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-primer-wiki-src-templates-post-query-js-4e3a054c869477ade695.js.map