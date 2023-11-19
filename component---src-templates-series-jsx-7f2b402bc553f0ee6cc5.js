"use strict";(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[832],{729:function(e,t,o){var n=o(5697),i=o.n(n);const a=o(2788).default.hr.withConfig({displayName:"Divider",componentId:"sc-1jz0jl-0"})(["margin-top:",";margin-bottom:",";border:none;border-bottom:1px solid ",";"],(e=>e.mt),(e=>e.mb),(e=>e.theme.colors.divider));a.propTypes={mt:i().string,mb:i().string},a.defaultProps={mt:"30px",mb:"30px"},t.Z=a},4246:function(e,t,o){var n=o(3493),i=o.n(n),a=o(7294),l=o(2788),s=o(1883),r=o(7484),c=o.n(r),d=o(6113);const m=l.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1oqnm6-0"})(["@media (max-width:768px){padding:0 15px;}"]),p=l.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1oqnm6-1"})(["position:relative;top:0;transition:all 0.5s;margin-bottom:100px;@media (max-width:768px){padding:0 5px;}"]),f=l.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1oqnm6-2"})(["font-size:14.4px;color:#868e96;"]),x=l.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1oqnm6-3"})(["line-height:1.7;margin:18px 0 25px;font-size:16px;color:#495057;overflow:hidden;white-space:normal;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;word-break:keep-all;@media (max-width:768px){margin:15px 0 20px;font-size:14.5px;}&.dark{color:rgb(175,185,195);}"]),h=l.default.h1.withConfig({displayName:"PostList__PostTitle",componentId:"sc-1oqnm6-4"})(["font-size:25px;font-weight:700;line-height:1.4;color:#212529;word-break:break-all;@media (max-width:768px){font-size:20px;}& > a{text-decoration:none;color:inherit;transition:all 0.2s;}& > a:hover{color:",";}&.dark{color:#fff;}"],(e=>e.theme.colors.secondaryText));t.Z=e=>{let{postList:t}=e;const{theme:o}=(0,d.useSelector)((e=>e.theme)),{0:n,1:l}=(0,a.useState)(10),r=i()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&n<t.length&&setTimeout((()=>l(n+10)),300)}),250);return(0,a.useEffect)((()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)})),[n,t]),(0,a.useEffect)((()=>{l(10)}),[t]),a.createElement(m,null,t.slice(0,n).map(((e,t)=>{const{title:n,description:i,date:l}=e.frontmatter,{excerpt:r}=e,{slug:d}=e.fields;return a.createElement("div",{key:t,className:0===t?"first_post_list":""},a.createElement(p,null,a.createElement(h,{className:o},a.createElement(s.Link,{to:d},n)),i?a.createElement(x,{className:o},i):a.createElement(x,{className:o},r),a.createElement(f,null,c()(l).format("YYYY월 M월 D일")," ")))})))}},147:function(e,t,o){o.r(t);var n=o(7294),i=o(6113),a=o(2788),l=o(8248),s=o(5609),r=o(4246),c=o(729),d=o(9349),m=o(7484),p=o.n(m);const f=a.default.div.withConfig({displayName:"Series__Header",componentId:"sc-35e3s6-0"})(["@media (max-width:768px){padding:0px 15px;}"]),x=a.default.h1.withConfig({displayName:"Series__Title",componentId:"sc-35e3s6-1"})(["margin-bottom:15px;line-height:1.2;font-size:40px;font-weight:bold;color:",";word-break:break-all;@media (max-width:768px){font-size:30px;}"],(e=>e.theme.colors.text)),h=a.default.h3.withConfig({displayName:"Series__Subtitle",componentId:"sc-35e3s6-2"})(["display:inline-block;padding:9px 11px 7px;margin:0 8px 8px 0;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;@media (max-width:768px){font-size:13px;padding:6px 8px 4px;}&.dark{color:#fff;background-color:",";&:hover{opacity:0.75;}}"],(e=>e.selected?"#6868ac":"#f0f0f7"),(e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText),(e=>e.selected?"#6868ac":"#252525")),u=a.default.div.withConfig({displayName:"Series__SeriesInform",componentId:"sc-35e3s6-3"})(["display:flex;align-items:center;font-size:16px;color:",";& > span{margin:0 3px;}"],(e=>e.theme.colors.text)),g=a.default.span.withConfig({displayName:"Series__Date",componentId:"sc-35e3s6-4"})(["color:rgb(73,80,87);font-weight:lighter;&.dark{color:rgb(248,249,250);}"]);t.default=e=>{let{pageContext:t,data:o}=e;const a=t.series,m=o.posts.nodes,{theme:w}=(0,i.useSelector)((e=>e.theme));return n.createElement(l.Z,null,n.createElement(s.Z,{title:"SERIES: "+a,description:d.description,url:d.siteUrl}),n.createElement(f,null,n.createElement(h,{className:w}," SERIES "),n.createElement(x,null," ",a," "),n.createElement(u,null,n.createElement("span",null,m.length," Posts"),n.createElement("span",null,"·"),n.createElement(g,{className:w},"Last updated"," ",p()(m[m.length-1].frontmatter.date).format("YYYY월 MM월 DD일"))),n.createElement(c.Z,null)),n.createElement(r.Z,{postList:m}))}}}]);
//# sourceMappingURL=component---src-templates-series-jsx-7f2b402bc553f0ee6cc5.js.map