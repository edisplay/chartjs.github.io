(window.webpackJsonp=window.webpackJsonp||[]).push([[48,6,32],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),b=(a(0),a(142)),l=a(56),c=a(57),i={title:"Axes"},o={unversionedId:"axes/index",id:"axes/index",isDocsHomePage:!1,title:"Axes",description:"Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X-axis and 1 or more Y-axis to map points onto the 2-dimensional canvas. These axes are known as 'cartesian axes'.",source:"@site/docs/axes/index.mdx",slug:"/axes/index",permalink:"/docs/next/axes/index",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/index.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Mixed Chart Types",permalink:"/docs/next/charts/mixed"},next:{title:"Cartesian Axes",permalink:"/docs/next/axes/cartesian/index"}},d=[{value:"Common Configuration",id:"common-configuration",children:[]},{value:"Tick Configuration",id:"tick-configuration",children:[]},{value:"Axis Range Settings",id:"axis-range-settings",children:[{value:"Callbacks",id:"callbacks",children:[]},{value:"Updating Axis Defaults",id:"updating-axis-defaults",children:[]}]},{value:"Creating New Axes",id:"creating-new-axes",children:[]}],s={toc:d};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X-axis and 1 or more Y-axis to map points onto the 2-dimensional canvas. These axes are known as ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"./cartesian/index#cartesian-axes"}),"'cartesian axes'"),"."),Object(b.b)("p",null,"In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"./radial/index#radial-axes"}),"'radial axes'"),"."),Object(b.b)("p",null,"Scales in Chart.js >v2.0 are significantly more powerful, but also different than those of v1.0."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Multiple X & Y axes are supported."),Object(b.b)("li",{parentName:"ul"},"A built-in label auto-skip feature detects would-be overlapping ticks and labels and removes every nth label to keep things displaying normally."),Object(b.b)("li",{parentName:"ul"},"Scale titles are supported."),Object(b.b)("li",{parentName:"ul"},"New scale types can be extended without writing an entirely new chart type.")),Object(b.b)("h2",{id:"common-configuration"},"Common Configuration"),Object(b.b)(l.default,{mdxType:"Common"}),Object(b.b)("h2",{id:"tick-configuration"},"Tick Configuration"),Object(b.b)(c.default,{mdxType:"CommonTicks"}),Object(b.b)("h2",{id:"axis-range-settings"},"Axis Range Settings"),Object(b.b)("p",null,"Given the number of axis range settings, it is important to understand how they all interact with each other."),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"suggestedMax")," and ",Object(b.b)("inlineCode",{parentName:"p"},"suggestedMin")," settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let minDataValue = Math.min(mostNegativeValue, options.suggestedMin);\nlet maxDataValue = Math.max(mostPositiveValue, options.suggestedMax);\n")),Object(b.b)("p",null,"In this example, the largest positive value is 50, but the data maximum is expanded out to 100. However, because the lowest data value is below the ",Object(b.b)("inlineCode",{parentName:"p"},"suggestedMin")," setting, it is ignored."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let chart = new Chart(ctx, {\n    type: 'line',\n    data: {\n        datasets: [{\n            label: 'First dataset',\n            data: [0, 20, 40, 50]\n        }],\n        labels: ['January', 'February', 'March', 'April']\n    },\n    options: {\n        scales: {\n            y: {\n                suggestedMin: 50,\n                suggestedMax: 100\n            }\n        }\n    }\n});\n")),Object(b.b)("p",null,"In contrast to the ",Object(b.b)("inlineCode",{parentName:"p"},"suggested*")," settings, the ",Object(b.b)("inlineCode",{parentName:"p"},"min")," and ",Object(b.b)("inlineCode",{parentName:"p"},"max")," settings set explicit ends to the axes. When these are set, some data points may not be visible."),Object(b.b)("h3",{id:"callbacks"},"Callbacks"),Object(b.b)("p",null,"There are a number of config callbacks that can be used to change parameters in the scale at different points in the update process. The options are supplied at the top level of the axis options."),Object(b.b)("p",null,"Namespace: ",Object(b.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Arguments"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeUpdate")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback called before the update process starts.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeSetDimensions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before dimensions are set.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterSetDimensions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after dimensions are set.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeDataLimits")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before data limits are determined.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterDataLimits")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after data limits are determined.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeBuildTicks")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before ticks are created.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterBuildTicks")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after ticks are created. Useful for filtering ticks.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeTickToLabelConversion")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before ticks are converted into strings.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterTickToLabelConversion")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after ticks are converted into strings.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeCalculateTickRotation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before tick rotation is determined.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterCalculateTickRotation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after tick rotation is determined.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeFit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before the scale fits to the canvas.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterFit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after the scale fits to the canvas.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterUpdate")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs at the end of the update process.")))),Object(b.b)("h3",{id:"updating-axis-defaults"},"Updating Axis Defaults"),Object(b.b)("p",null,"The default configuration for a scale can be easily changed. All you need to do is set the new options to ",Object(b.b)("inlineCode",{parentName:"p"},"Chart.defaults.scales[type]"),"."),Object(b.b)("p",null,"For example, to set the minimum value of 0 for all linear scales, you would do the following. Any linear scales created after this time would now have a minimum of 0."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"Chart.defaults.scales.linear.min = 0;\n")),Object(b.b)("h2",{id:"creating-new-axes"},"Creating New Axes"),Object(b.b)("p",null,"To create a new axis, see the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/developers/axes"}),"developer docs"),"."))}m.isMDXComponent=!0},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=d(a),j=n,O=s["".concat(l,".").concat(j)]||s[j]||m[j]||b;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},56:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),b=(a(0),a(142)),l={},c={unversionedId:"axes/_common",id:"axes/_common",isDocsHomePage:!1,title:"_common",description:"Common options to all axes",source:"@site/docs/axes/_common.md",slug:"/axes/_common",permalink:"/docs/next/axes/_common",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/_common.md",version:"current"},i=[{value:"Common options to all axes",id:"common-options-to-all-axes",children:[]}],o={toc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"common-options-to-all-axes"},"Common options to all axes"),Object(b.b)("p",null,"Namespace: ",Object(b.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"display")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean"),"|",Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls the axis global visibility (visible when ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", hidden when ",Object(b.b)("inlineCode",{parentName:"td"},"false"),"). When ",Object(b.b)("inlineCode",{parentName:"td"},"display: 'auto'"),", the axis is visible only if at least one associated dataset is visible.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"gridLines")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Grid line configuration. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/styling#grid-line-configuration"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"min")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined minimum number for the scale, overrides minimum value from data. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"max")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined maximum number for the scale, overrides maximum value from data. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"reverse")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reverse the scale.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"suggestedMax")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the maximum data value. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"suggestedMin")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the minimum data value. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ticks")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tick configuration. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#tick-configuration"}),"more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"weight")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The weight used to sort the axis. Higher weights are further away from the chart area.")))))}d.isMDXComponent=!0},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),b=(a(0),a(142)),l={},c={unversionedId:"axes/_common_ticks",id:"axes/_common_ticks",isDocsHomePage:!1,title:"_common_ticks",description:"Common tick options to all axes",source:"@site/docs/axes/_common_ticks.md",slug:"/axes/_common_ticks",permalink:"/docs/next/axes/_common_ticks",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/_common_ticks.md",version:"current"},i=[{value:"Common tick options to all axes",id:"common-tick-options-to-all-axes",children:[]}],o={toc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"common-tick-options-to-all-axes"},"Common tick options to all axes"),Object(b.b)("p",null,"Namespace: ",Object(b.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].ticks")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Scriptable"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"callback")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"function")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns the string representation of the tick value as it should be displayed on the chart. See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/labelling#creating-custom-tick-formats"}),"callback"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"display")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, show tick labels.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(b.b)("inlineCode",{parentName:"a"},"Color"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Color of ticks.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"font")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Font")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Chart.defaults.font")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/fonts"}),"Fonts"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"major")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"{}")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/styling#major-tick-configuration"}),"Major ticks configuration"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"padding")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the offset of the tick labels from the axis")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"textStrokeColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(b.b)("inlineCode",{parentName:"a"},"Color"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"``"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The color of the stroke around the text.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"textStrokeWidth")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stroke width around the text.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"z")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"z-index of tick layer. Useful when ticks are drawn on chart area. Values ","<","= 0 are drawn under datasets, ",">"," 0 on top.")))))}d.isMDXComponent=!0}}]);