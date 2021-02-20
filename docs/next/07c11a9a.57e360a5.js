(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(142)),c={title:"Events"},i={unversionedId:"configuration/interactions/events",id:"configuration/interactions/events",isDocsHomePage:!1,title:"Events",description:"The following properties define how the chart interacts with events.",source:"@site/docs/configuration/interactions/events.md",slug:"/configuration/interactions/events",permalink:"/docs/next/configuration/interactions/events",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/configuration/interactions/events.md",version:"current",sidebar:"someSidebar",previous:{title:"Interactions",permalink:"/docs/next/configuration/interactions/index"},next:{title:"Interaction Modes",permalink:"/docs/next/configuration/interactions/modes"}},l=[{value:"Event Option",id:"event-option",children:[]},{value:"Converting Events to Data Values",id:"converting-events-to-data-values",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following properties define how the chart interacts with events.\nNamespace: ",Object(o.b)("inlineCode",{parentName:"p"},"options")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"events")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"string[]")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("inlineCode",{parentName:"td"},"events")," option defines the browser events that the chart should listen to for tooltips and hovering. ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#event-option"}),"more..."))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"onHover")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"function")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"null")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called when any of the events fire. Passed the event, an array of active elements (bars, points, etc), and the chart.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"onClick")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"function")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"null")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called if the event is of type ",Object(o.b)("inlineCode",{parentName:"td"},"'mouseup'")," or ",Object(o.b)("inlineCode",{parentName:"td"},"'click'"),". Passed the event, an array of active elements, and the chart.")))),Object(o.b)("h2",{id:"event-option"},"Event Option"),Object(o.b)("p",null,"For example, to have the chart only respond to click events, you could do:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        // This chart will not respond to mousemove, etc\n        events: ['click']\n    }\n});\n")),Object(o.b)("h2",{id:"converting-events-to-data-values"},"Converting Events to Data Values"),Object(o.b)("p",null,"A common occurrence is taking an event, such as a click, and finding the data coordinates on the chart where the event occurred. Chart.js provides helpers that make this a straightforward process."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        onClick: (e) => {\n            const canvasPosition = Chart.helpers.getRelativePosition(e, chart);\n\n            // Substitute the appropriate scale IDs\n            const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);\n            const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);\n        }\n    }\n});\n")))}b.isMDXComponent=!0}}]);