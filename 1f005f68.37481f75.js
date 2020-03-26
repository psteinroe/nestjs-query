(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(182)),l={id:"v0.4.0",title:"v0.4.0",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/doug-martin",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","minor"]},o={permalink:"/nestjs-query/blog/v0.4.0",source:"@site/blog/2020-02-25-v0.4.0.md",description:"* Updated all mutations to take a single `input` argument with custom fields.",date:"2020-02-25T00:00:00.000Z",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"minor",permalink:"/nestjs-query/blog/tags/minor"}],title:"v0.4.0",truncated:!1,prevItem:{title:"v0.5.1",permalink:"/nestjs-query/blog/v0.5.1"},nextItem:{title:"v0.5.0",permalink:"/nestjs-query/blog/v0.5.0"}},c=[],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Updated all mutations to take a single ",Object(i.b)("inlineCode",{parentName:"li"},"input")," argument with custom fields.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createOne(input: DTO)")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"createOne(input: { [dtoName]: DTO })")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createMany(input: DTO[])")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"createOne(input: { [pluralDTOName]: DTO[] })")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updateOne(id: ID, input: UpdateDTO)")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"createOne(input: { id: ID, update: UpdateDTO })")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updateMany(filter: Filter<DTO>, input: UpdateDTO)")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"createOne(input: { filter: Filter<DTO>, update: UpdateDTO })")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deleteOne(input: ID)")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"deleteOne(input: {id: ID})")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deleteMany(input: Filter<DTO>)")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"createOne(input: { filter: Filter<DTO> })")))),Object(i.b)("li",{parentName:"ul"},"Updated docs to reflect changes.")))}p.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(n),O=r,s=b["".concat(l,".").concat(O)]||b[O]||m[O]||i;return n?a.a.createElement(s,o({ref:t},u,{components:n})):a.a.createElement(s,o({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=O;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);