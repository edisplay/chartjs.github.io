(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(142)),i={title:"Layout"},c={unversionedId:"configuration/layout",id:"configuration/layout",isDocsHomePage:!1,title:"Layout",description:"The layout configuration is passed into the options.layout namespace. The global options for the chart layout is defined in Chart.defaults.layout.",source:"@site/docs/configuration/layout.md",slug:"/configuration/layout",permalink:"/docs/master/configuration/layout",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/configuration/layout.md",version:"current",sidebar:"someSidebar",previous:{title:"Animations",permalink:"/docs/master/configuration/animations"},next:{title:"Legend",permalink:"/docs/master/configuration/legend"}},l=[{value:"Padding",id:"padding",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The layout configuration is passed into the ",Object(o.b)("inlineCode",{parentName:"p"},"options.layout")," namespace. The global options for the chart layout is defined in ",Object(o.b)("inlineCode",{parentName:"p"},"Chart.defaults.layout"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),Object(o.b)("a",Object(a.a)({parentName:"th"},{href:"/docs/master/general/options#scriptable-options"}),"Scriptable")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"padding")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"number"),"|",Object(o.b)("inlineCode",{parentName:"td"},"object")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"0")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The padding to add inside the chart. ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#padding"}),"more..."))))),Object(o.b)("h2",{id:"padding"},"Padding"),Object(o.b)("p",null,"If this value is a number, it is applied to all sides of the chart (left, top, right, bottom). If this value is an object, the ",Object(o.b)("inlineCode",{parentName:"p"},"left")," property defines the left padding. Similarly the ",Object(o.b)("inlineCode",{parentName:"p"},"right"),", ",Object(o.b)("inlineCode",{parentName:"p"},"top")," and ",Object(o.b)("inlineCode",{parentName:"p"},"bottom")," properties can also be specified."),Object(o.b)("p",null,"Lets say you wanted to add 50px of padding to the left side of the chart canvas, you would do:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"let chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        layout: {\n            padding: {\n                left: 50,\n                right: 0,\n                top: 0,\n                bottom: 0\n            }\n        }\n    }\n});\n")))}b.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),s=a,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);