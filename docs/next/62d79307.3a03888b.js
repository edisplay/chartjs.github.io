(window.webpackJsonp=window.webpackJsonp||[]).push([[28,13,26,32],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return s}));var n=a(3),b=a(7),r=(a(0),a(142)),i=a(56),l=a(58),c=(a(59),{title:"Time Cartesian Axis"}),o={unversionedId:"axes/cartesian/time",id:"axes/cartesian/time",isDocsHomePage:!1,title:"Time Cartesian Axis",description:"The time scale is used to display times and dates. Data are spread according to the amount of time between data points. When building its ticks, it will automatically calculate the most comfortable unit base on the size of the scale.",source:"@site/docs/axes/cartesian/time.mdx",slug:"/axes/cartesian/time",permalink:"/docs/next/axes/cartesian/time",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/cartesian/time.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Logarithmic Axis",permalink:"/docs/next/axes/cartesian/logarithmic"},next:{title:"Time Series Axis",permalink:"/docs/next/axes/cartesian/timeseries"}},d=[{value:"Date Adapters",id:"date-adapters",children:[]},{value:"Data Sets",id:"data-sets",children:[{value:"Input Data",id:"input-data",children:[]},{value:"Date Formats",id:"date-formats",children:[]}]},{value:"Configuration Options",id:"configuration-options",children:[{value:"Time Axis specific options",id:"time-axis-specific-options",children:[]}]},{value:"Internal data format",id:"internal-data-format",children:[]}],m={toc:d};function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The time scale is used to display times and dates. Data are spread according to the amount of time between data points. When building its ticks, it will automatically calculate the most comfortable unit base on the size of the scale."),Object(r.b)("h2",{id:"date-adapters"},"Date Adapters"),Object(r.b)("p",null,"The time scale ",Object(r.b)("strong",{parentName:"p"},"requires")," both a date library and a corresponding adapter to be present. Please choose from the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chartjs/awesome#adapters"}),"available adapters"),"."),Object(r.b)("h2",{id:"data-sets"},"Data Sets"),Object(r.b)("h3",{id:"input-data"},"Input Data"),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/general/data-structures"}),"data structures"),"."),Object(r.b)("h3",{id:"date-formats"},"Date Formats"),Object(r.b)("p",null,"When providing data for the time scale, Chart.js uses timestamps defined as milliseconds since the epoch (midnight January 1, 1970, UTC) internally. However, Chart.js also supports all of the formats that your chosen date adapter accepts. You should use timestamps if you'd like to set ",Object(r.b)("inlineCode",{parentName:"p"},"parsing: false")," for better performance."),Object(r.b)("h2",{id:"configuration-options"},"Configuration Options"),Object(r.b)("h3",{id:"time-axis-specific-options"},"Time Axis specific options"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"adapters.date")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{}")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options for adapter for external date library if that adapter needs or supports options")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bounds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'data'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determines the scale bounds. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/cartesian/index#scale-bounds"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ticks.source")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'auto'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How ticks are generated. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#ticks-source"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"time.displayFormats")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets how different time units are displayed. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#display-formats"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"time.isoWeekday")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean"),"|",Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(r.b)("inlineCode",{parentName:"td"},"boolean")," and true and the unit is set to 'week', then the first day of the week will be Monday. Otherwise, it will be Sunday. If ",Object(r.b)("inlineCode",{parentName:"td"},"number"),", the index of the first day of the week (0 - Sunday, 6 - Saturday)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"time.parser")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string"),"|",Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Custom parser for dates. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#parser"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"time.round")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If defined, dates will be rounded to the start of this unit. See ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#time-units"}),"Time Units")," below for the allowed units.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"time.tooltipFormat")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The format string to use for the tooltip.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"time.unit")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If defined, will force the unit to be a certain type. See ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#time-units"}),"Time Units")," section below for details.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"time.stepSize")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"1")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of units between grid lines.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"time.minUnit")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'millisecond'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The minimum display format to be used for a time unit.")))),Object(r.b)(l.default,{mdxType:"CommonCartesian"}),Object(r.b)(i.default,{mdxType:"CommonAll"}),Object(r.b)("h4",{id:"time-units"},"Time Units"),Object(r.b)("p",null,"The following time measurements are supported. The names can be passed as strings to the ",Object(r.b)("inlineCode",{parentName:"p"},"time.unit")," config option to force a certain unit."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'millisecond'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'second'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'minute'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'hour'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'day'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'week'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'month'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'quarter'")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'year'"))),Object(r.b)("p",null,"For example, to create a chart with a time scale that always displayed units per month, the following config could be used."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        scales: {\n            x: {\n                type: 'time',\n                time: {\n                    unit: 'month'\n                }\n            }\n        }\n    }\n});\n")),Object(r.b)("h4",{id:"display-formats"},"Display Formats"),Object(r.b)("p",null,"You may specify a map of display formats with a key for each unit:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"millisecond")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"second")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"minute")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hour")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"day")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"week")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"month")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"quarter")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"year"))),Object(r.b)("p",null,"The format string used as a value depends on the date adapter you chose to use."),Object(r.b)("p",null,"For example, to set the display format for the ",Object(r.b)("inlineCode",{parentName:"p"},"quarter")," unit to show the month and year, the following config might be passed to the chart constructor."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        scales: {\n            x: {\n                type: 'time',\n                time: {\n                    displayFormats: {\n                        quarter: 'MMM YYYY'\n                    }\n                }\n            }\n        }\n    }\n});\n")),Object(r.b)("h4",{id:"ticks-source"},"Ticks Source"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ticks.source")," property controls the ticks generation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'auto'"),': generates "optimal" ticks based on scale size and time options'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'data'"),": generates ticks from data (including labels from data ",Object(r.b)("inlineCode",{parentName:"li"},"{x|y}")," objects)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'labels'"),": generates ticks from user given ",Object(r.b)("inlineCode",{parentName:"li"},"labels")," ONLY")),Object(r.b)("h4",{id:"parser"},"Parser"),Object(r.b)("p",null,"If this property is defined as a string, it is interpreted as a custom format to be used by the date adapter to parse the date."),Object(r.b)("p",null,"If this is a function, it must return a type that can be handled by your date adapter's ",Object(r.b)("inlineCode",{parentName:"p"},"parse")," method."),Object(r.b)("h2",{id:"internal-data-format"},"Internal data format"),Object(r.b)("p",null,"Internally time scale uses milliseconds since epoch"))}s.isMDXComponent=!0},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,j=m["".concat(i,".").concat(p)]||m[p]||s[p]||r;return a?b.a.createElement(j,l(l({ref:t},o),{},{components:a})):b.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<r;o++)i[o]=a[o];return b.a.createElement.apply(null,i)}return b.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},56:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),r=(a(0),a(142)),i={},l={unversionedId:"axes/_common",id:"axes/_common",isDocsHomePage:!1,title:"_common",description:"Common options to all axes",source:"@site/docs/axes/_common.md",slug:"/axes/_common",permalink:"/docs/next/axes/_common",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/_common.md",version:"current"},c=[{value:"Common options to all axes",id:"common-options-to-all-axes",children:[]}],o={toc:c};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"common-options-to-all-axes"},"Common options to all axes"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"display")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean"),"|",Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls the axis global visibility (visible when ",Object(r.b)("inlineCode",{parentName:"td"},"true"),", hidden when ",Object(r.b)("inlineCode",{parentName:"td"},"false"),"). When ",Object(r.b)("inlineCode",{parentName:"td"},"display: 'auto'"),", the axis is visible only if at least one associated dataset is visible.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"gridLines")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Grid line configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/styling#grid-line-configuration"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"min")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined minimum number for the scale, overrides minimum value from data. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"max")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined maximum number for the scale, overrides maximum value from data. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"reverse")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reverse the scale.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"suggestedMax")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the maximum data value. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"suggestedMin")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjustment used when calculating the minimum data value. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/index#axis-range-settings"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ticks")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tick configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#tick-configuration"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"weight")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The weight used to sort the axis. Higher weights are further away from the chart area.")))))}d.isMDXComponent=!0},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),r=(a(0),a(142)),i={},l={unversionedId:"axes/cartesian/_common",id:"axes/cartesian/_common",isDocsHomePage:!1,title:"_common",description:"Common options to all cartesian axes",source:"@site/docs/axes/cartesian/_common.md",slug:"/axes/cartesian/_common",permalink:"/docs/next/axes/cartesian/_common",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/cartesian/_common.md",version:"current"},c=[{value:"Common options to all cartesian axes",id:"common-options-to-all-cartesian-axes",children:[]}],o={toc:c};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"common-options-to-all-cartesian-axes"},"Common options to all cartesian axes"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bounds")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'ticks'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determines the scale bounds. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/cartesian/index#scale-bounds"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"position")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Position of the axis. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/cartesian/index#axis-position"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"axis")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Which type of axis this is. Possible values are: ",Object(r.b)("inlineCode",{parentName:"td"},"'x'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'y'"),". If not set, this is inferred from the first character of the ID which should be ",Object(r.b)("inlineCode",{parentName:"td"},"'x'")," or ",Object(r.b)("inlineCode",{parentName:"td"},"'y'"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"offset")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to ",Object(r.b)("inlineCode",{parentName:"td"},"true")," for a bar chart by default.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"scaleLabel")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale title configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/axes/labelling#scale-title-configuration"}),"more..."))))))}d.isMDXComponent=!0},59:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),r=(a(0),a(142)),i={},l={unversionedId:"axes/cartesian/_common_ticks",id:"axes/cartesian/_common_ticks",isDocsHomePage:!1,title:"_common_ticks",description:"Common tick options to all cartesian axes",source:"@site/docs/axes/cartesian/_common_ticks.md",slug:"/axes/cartesian/_common_ticks",permalink:"/docs/next/axes/cartesian/_common_ticks",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/cartesian/_common_ticks.md",version:"current"},c=[{value:"Common tick options to all cartesian axes",id:"common-tick-options-to-all-cartesian-axes",children:[]}],o={toc:c};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"common-tick-options-to-all-cartesian-axes"},"Common tick options to all cartesian axes"),Object(r.b)("p",null,"Namespace: ",Object(r.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].ticks")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"align")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'center'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The tick alignment along the axis. Can be ",Object(r.b)("inlineCode",{parentName:"td"},"'start'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'center'"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"'end'"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"crossAlign")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'near'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The tick alignment perpendicular to the axis. Can be ",Object(r.b)("inlineCode",{parentName:"td"},"'near'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'center'"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"'far'"),". See ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"./index#tick-alignment"}),"Tick Alignment"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"sampleSize")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ticks.length")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"autoSkip")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to ",Object(r.b)("inlineCode",{parentName:"td"},"maxRotation")," before skipping any. Turn ",Object(r.b)("inlineCode",{parentName:"td"},"autoSkip")," off to show all labels no matter what.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"autoSkipPadding")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Padding between the ticks on the horizontal axis when ",Object(r.b)("inlineCode",{parentName:"td"},"autoSkip")," is enabled.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"labelOffset")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). ",Object(r.b)("em",{parentName:"td"},"Note: this can cause labels at the edges to be cropped by the edge of the canvas"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"maxRotation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"50")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. ",Object(r.b)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"minRotation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum rotation for tick labels. ",Object(r.b)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mirror")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flips tick labels around axis, displaying the labels inside the chart instead of outside. ",Object(r.b)("em",{parentName:"td"},"Note: Only applicable to vertical scales."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"padding")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.")))))}d.isMDXComponent=!0}}]);