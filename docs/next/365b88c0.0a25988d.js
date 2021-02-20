(window.webpackJsonp=window.webpackJsonp||[]).push([[19,6,32],{142:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),O=d(a),p=n,m=O["".concat(l,".").concat(p)]||O[p]||j[p]||r;return a?b.a.createElement(m,i(i({ref:t},o),{},{components:a})):b.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<r;o++)l[o]=a[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},56:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),r=(a(0),a(142)),l={},i={unversionedId:"axes/_common",id:"axes/_common",isDocsHomePage:!1,title:"_common",description:"Common options to all axes",source:"@site/docs/axes/_common.md",slug:"/axes/_common",permalink:"/docs/next/axes/_common",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/_common.md",version:"current"},c=[{value:"Common options to all axes",id:"common-options-to-all-axes",children:[]}],o={toc:c};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"common-options-to-all-axes"},"Common options to all axes"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"display")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean"),"|",Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls the axis global visibility (visible when ",Object(r.b)("inlineCode",{parentName:"td"},"true"),", hidden when ",Object(r.b)("inlineCode",{parentName:"td"},"false"),"). When ",Object(r.b)("inlineCode",{parentName:"td"},"display: 'auto'"),", the axis is visible only if at least one associated dataset is visible.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"gridLines")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Grid line configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/styling#grid-line-configuration"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"min")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined minimum number for the scale, overrides minimum value from data. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"max")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined maximum number for the scale, overrides maximum value from data. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"reverse")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reverse the scale.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"suggestedMax")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the maximum data value. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"suggestedMin")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the minimum data value. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ticks")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tick configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#tick-configuration"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"weight")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The weight used to sort the axis. Higher weights are further away from the chart area.")))))}d.isMDXComponent=!0},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),r=(a(0),a(142)),l={},i={unversionedId:"axes/_common_ticks",id:"axes/_common_ticks",isDocsHomePage:!1,title:"_common_ticks",description:"Common tick options to all axes",source:"@site/docs/axes/_common_ticks.md",slug:"/axes/_common_ticks",permalink:"/docs/next/axes/_common_ticks",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/_common_ticks.md",version:"current"},c=[{value:"Common tick options to all axes",id:"common-tick-options-to-all-axes",children:[]}],o={toc:c};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"common-tick-options-to-all-axes"},"Common tick options to all axes"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].ticks")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Scriptable"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"callback")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns the string representation of the tick value as it should be displayed on the chart. See ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/labelling#creating-custom-tick-formats"}),"callback"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"display")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, show tick labels.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(r.b)("inlineCode",{parentName:"a"},"Color"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Color of ticks.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"font")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Font")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Chart.defaults.font")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/fonts"}),"Fonts"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"major")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{}")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/styling#major-tick-configuration"}),"Major ticks configuration"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"padding")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the offset of the tick labels from the axis")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"textStrokeColor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(r.b)("inlineCode",{parentName:"a"},"Color"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"``"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The color of the stroke around the text.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"textStrokeWidth")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stroke width around the text.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"z")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"z-index of tick layer. Useful when ticks are drawn on chart area. Values ","<","= 0 are drawn under datasets, ",">"," 0 on top.")))))}d.isMDXComponent=!0},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return j}));var n=a(3),b=a(7),r=(a(0),a(142)),l=a(56),i=a(57),c={title:"Linear Radial Axis"},o={unversionedId:"axes/radial/linear",id:"axes/radial/linear",isDocsHomePage:!1,title:"Linear Radial Axis",description:"The linear radial scale is used to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation to the center of the axis.",source:"@site/docs/axes/radial/linear.mdx",slug:"/axes/radial/linear",permalink:"/docs/next/axes/radial/linear",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/radial/linear.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Radial Axes",permalink:"/docs/next/axes/radial/index"},next:{title:"Labeling Axes",permalink:"/docs/next/axes/labelling"}},d=[{value:"Configuration Options",id:"configuration-options",children:[{value:"Linear Radial Axis specific options",id:"linear-radial-axis-specific-options",children:[]}]},{value:"Tick Configuration",id:"tick-configuration",children:[{value:"Linear Radial Axis specific options",id:"linear-radial-axis-specific-options-1",children:[]}]},{value:"Axis Range Settings",id:"axis-range-settings",children:[]},{value:"Step Size",id:"step-size",children:[]},{value:"Angle Line Options",id:"angle-line-options",children:[]},{value:"Point Label Options",id:"point-label-options",children:[]},{value:"Internal data format",id:"internal-data-format",children:[]}],O={toc:d};function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The linear radial scale is used to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation to the center of the axis."),Object(r.b)("p",null,"The following additional configuration options are provided by the radial linear scale."),Object(r.b)("h2",{id:"configuration-options"},"Configuration Options"),Object(r.b)("h3",{id:"linear-radial-axis-specific-options"},"Linear Radial Axis specific options"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"animate")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether to animate scaling the chart from the centre")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"angleLines")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Angle line configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#angle-line-options"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"beginAtZero")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if true, scale will include 0 if it is not already included.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"pointLabels")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Point label configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#point-label-options"}),"more..."))))),Object(r.b)(l.default,{mdxType:"CommonAll"}),Object(r.b)("h2",{id:"tick-configuration"},"Tick Configuration"),Object(r.b)("h3",{id:"linear-radial-axis-specific-options-1"},"Linear Radial Axis specific options"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].ticks")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scriptable"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"backdropColor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(r.b)("inlineCode",{parentName:"a"},"Color"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'rgba(255, 255, 255, 0.75)'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Color of label backdrops.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"backdropPaddingX")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Horizontal padding of label backdrop.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"backdropPaddingY")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Vertical padding of label backdrop.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"format")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"}),Object(r.b)("inlineCode",{parentName:"a"},"Intl.NumberFormat"))," options used by the default label formatter")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"maxTicksLimit")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"11")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of ticks and gridlines to show.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"precision")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if defined and ",Object(r.b)("inlineCode",{parentName:"td"},"stepSize")," is not specified, the step size will be rounded to this many decimal places.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"stepSize")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined fixed step size for the scale. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#step-size"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"showLabelBackdrop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, draw a background behind the tick labels.")))),Object(r.b)(i.default,{mdxType:"CommonTicksAll"}),Object(r.b)("p",null,"The scriptable context is described in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/general/options#tick"}),"Options")," section."),Object(r.b)("h2",{id:"axis-range-settings"},"Axis Range Settings"),Object(r.b)("p",null,"Given the number of axis range settings, it is important to understand how they all interact with each other."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"suggestedMax")," and ",Object(r.b)("inlineCode",{parentName:"p"},"suggestedMin")," settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let minDataValue = Math.min(mostNegativeValue, options.ticks.suggestedMin);\nlet maxDataValue = Math.max(mostPositiveValue, options.ticks.suggestedMax);\n")),Object(r.b)("p",null,"In this example, the largest positive value is 50, but the data maximum is expanded out to 100. However, because the lowest data value is below the ",Object(r.b)("inlineCode",{parentName:"p"},"suggestedMin")," setting, it is ignored."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let chart = new Chart(ctx, {\n    type: 'radar',\n    data: {\n        datasets: [{\n            label: 'First dataset',\n            data: [0, 20, 40, 50]\n        }],\n        labels: ['January', 'February', 'March', 'April']\n    },\n    options: {\n        scales: {\n            r: {\n                suggestedMin: 50,\n                suggestedMax: 100\n            }\n        }\n    }\n});\n")),Object(r.b)("p",null,"In contrast to the ",Object(r.b)("inlineCode",{parentName:"p"},"suggested*")," settings, the ",Object(r.b)("inlineCode",{parentName:"p"},"min")," and ",Object(r.b)("inlineCode",{parentName:"p"},"max")," settings set explicit ends to the axes. When these are set, some data points may not be visible."),Object(r.b)("h2",{id:"step-size"},"Step Size"),Object(r.b)("p",null,"If set, the scale ticks will be enumerated by multiple of ",Object(r.b)("inlineCode",{parentName:"p"},"stepSize"),", having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm."),Object(r.b)("p",null,"This example sets up a chart with a y axis that creates ticks at ",Object(r.b)("inlineCode",{parentName:"p"},"0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let options = {\n    scales: {\n        r: {\n            max: 5,\n            min: 0,\n            ticks: {\n                stepSize: 0.5\n            }\n        }\n    }\n};\n")),Object(r.b)("h2",{id:"angle-line-options"},"Angle Line Options"),Object(r.b)("p",null,"The following options are used to configure angled lines that radiate from the center of the chart to the point labels.\nNamespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].angleLines")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scriptable"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"display")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if true, angle lines are shown.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(r.b)("inlineCode",{parentName:"a"},"Color"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Chart.defaults.borderColor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Color of angled lines.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"lineWidth")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"1")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Width of angled lines.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"borderDash")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number[]")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes",Object(r.b)("sup",null,"1")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"[]")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Length and spacing of dashes on angled lines. See ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"}),"MDN"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"borderDashOffset")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0.0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Offset for line dashes. See ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"}),"MDN"),".")))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"borderDash")," setting only accepts a static value or a function. Passing an array of arrays is not supported.")),Object(r.b)("p",null,"The scriptable context is described in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/general/options#scale"}),"Options")," section."),Object(r.b)("h2",{id:"point-label-options"},"Point Label Options"),Object(r.b)("p",null,"The following options are used to configure the point labels that are shown on the perimeter of the scale.\nNamespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].pointLabels")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scriptable"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"display")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if true, point labels are shown.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"callback")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback function to transform data labels to point labels. The default implementation simply returns the current string.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(r.b)("inlineCode",{parentName:"a"},"Color"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Color of label.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"font")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Font")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Chart.defaults.font")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/fonts"}),"Fonts"))))),Object(r.b)("p",null,"The scriptable context is described in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/general/options#scale"}),"Options")," section."),Object(r.b)("h2",{id:"internal-data-format"},"Internal data format"),Object(r.b)("p",null,"Internally, the linear radial scale uses numeric data"))}j.isMDXComponent=!0}}]);