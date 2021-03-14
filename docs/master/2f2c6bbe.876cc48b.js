(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{144:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(144)),l={title:"Fonts"},i={unversionedId:"general/fonts",id:"general/fonts",isDocsHomePage:!1,title:"Fonts",description:"There are special global settings that can change all of the fonts on the chart. These options are in Chart.defaults.font. The global font settings only apply when more specific options are not included in the config.",source:"@site/docs/general/fonts.md",slug:"/general/fonts",permalink:"/docs/master/general/fonts",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/general/fonts.md",version:"current",sidebar:"someSidebar",previous:{title:"Colors",permalink:"/docs/master/general/colors"},next:{title:"Padding",permalink:"/docs/master/general/padding"}},c=[{value:"Missing Fonts",id:"missing-fonts",children:[]},{value:"Loading Fonts",id:"loading-fonts",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are special global settings that can change all of the fonts on the chart. These options are in ",Object(o.b)("inlineCode",{parentName:"p"},"Chart.defaults.font"),". The global font settings only apply when more specific options are not included in the config."),Object(o.b)("p",null,"For example, in this chart the text will all be red except for the labels in the legend."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Chart.defaults.font.size = 16;\nlet chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        plugins: {\n            legend: {\n                labels: {\n                    // This more specific font property overrides the global property\n                    font: {\n                        size: 14\n                    }\n                }\n            }\n        }\n    }\n});\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"family")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"\"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif\"")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default font family for all text, follows CSS font-family options.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"size")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"number")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"12")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default font size (in px) for text. Does not apply to radialLinear scale point labels.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"style")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"'normal'")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default font style. Does not apply to tooltip title or footer. Does not apply to chart title. Follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"weight")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"undefined")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default font weight (boldness). (see ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight"}),"MDN"),").")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"lineHeight")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"number"),"|",Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"1.2")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Height of an individual line of text (see ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-height"}),"MDN"),").")))),Object(o.b)("h2",{id:"missing-fonts"},"Missing Fonts"),Object(o.b)("p",null,"If a font is specified for a chart that does exist on the system, the browser will not apply the font when it is set. If you notice odd fonts appearing in your charts, check that the font you are applying exists on your system. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/issues/3318"}),"issue 3318")," for more details."),Object(o.b)("h2",{id:"loading-fonts"},"Loading Fonts"),Object(o.b)("p",null,"If a font is not cached and needs to be loaded, charts that use the font will need to be updated once the font is loaded. This can be accomplished using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API"}),"Font Loading APIs"),". See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/issues/8020"}),"issue 8020")," for more details."))}s.isMDXComponent=!0}}]);