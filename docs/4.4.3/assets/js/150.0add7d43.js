(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{483:function(t,e,r){"use strict";r.r(e);var a=r(3),o=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"doughnut-and-pie-charts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#doughnut-and-pie-charts"}},[t._v("#")]),t._v(" Doughnut and Pie Charts")]),t._v(" "),e("p",[t._v("Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.")]),t._v(" "),e("p",[t._v("They are excellent at showing the relational proportions between data.")]),t._v(" "),e("p",[t._v("Pie and doughnut charts are effectively the same class in Chart.js, but have one different default value - their "),e("code",[t._v("cutout")]),t._v(". This equates to what portion of the inner should be cut out. This defaults to "),e("code",[t._v("0")]),t._v(" for pie charts, and "),e("code",[t._v("'50%'")]),t._v(" for doughnuts.")]),t._v(" "),e("p",[t._v("They are also registered under two aliases in the "),e("code",[t._v("Chart")]),t._v(" core. Other than their different default value, and different alias, they are exactly the same.")]),t._v(" "),e("tabs",[e("tab",{attrs:{name:"Doughnut"}},[e("chart-editor",{attrs:{code:"// <block:setup:1>\nconst data = {\n  labels: [\n    'Red',\n    'Blue',\n    'Yellow'\n  ],\n  datasets: [{\n    label: 'My First Dataset',\n    data: [300, 50, 100],\n    backgroundColor: [\n      'rgb(255, 99, 132)',\n      'rgb(54, 162, 235)',\n      'rgb(255, 205, 86)'\n    ],\n    hoverOffset: 4\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'doughnut',\n  data: data,\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}})],1),t._v(" "),e("tab",{attrs:{name:"Pie"}},[e("chart-editor",{attrs:{code:"// <block:setup:1>\nconst data = {\n  labels: [\n    'Red',\n    'Blue',\n    'Yellow'\n  ],\n  datasets: [{\n    label: 'My First Dataset',\n    data: [300, 50, 100],\n    backgroundColor: [\n      'rgb(255, 99, 132)',\n      'rgb(54, 162, 235)',\n      'rgb(255, 205, 86)'\n    ],\n    hoverOffset: 4\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'pie',\n  data: data,\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}})],1)],1),t._v(" "),e("h2",{attrs:{id:"dataset-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dataset-properties"}},[t._v("#")]),t._v(" Dataset Properties")]),t._v(" "),e("p",[t._v("Namespaces:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("data.datasets[index]")]),t._v(" - options for this dataset only")]),t._v(" "),e("li",[e("code",[t._v("options.datasets.doughnut")]),t._v(" - options for all doughnut datasets")]),t._v(" "),e("li",[e("code",[t._v("options.datasets.pie")]),t._v(" - options for all pie datasets")]),t._v(" "),e("li",[e("code",[t._v("options.elements.arc")]),t._v(" - options for all "),e("RouterLink",{attrs:{to:"/configuration/elements.html#arc-configuration"}},[t._v("arc elements")])],1),t._v(" "),e("li",[e("code",[t._v("options")]),t._v(" - options for the whole chart")])]),t._v(" "),e("p",[t._v("The doughnut/pie chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colours of the dataset's arcs are generally set this way.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable")])],1),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/general/options.html#indexable-options"}},[t._v("Indexable")])],1),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("backgroundColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'rgba(0, 0, 0, 0.1)'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#border-alignment"}},[e("code",[t._v("borderAlign")])])]),t._v(" "),e("td",[e("code",[t._v("'center'")]),t._v("|"),e("code",[t._v("'inner'")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'center'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'#fff'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderDash")])])]),t._v(" "),e("td",[e("code",[t._v("number[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("[]")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderDashOffset")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("0.0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderJoinStyle")])])]),t._v(" "),e("td",[e("code",[t._v("'round'")]),t._v("|"),e("code",[t._v("'bevel'")]),t._v("|"),e("code",[t._v("'miter'")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#border-radius"}},[e("code",[t._v("borderRadius")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("object")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderWidth")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("2")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("circumference")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("clip")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("object")]),t._v("|"),e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#data-structure"}},[e("code",[t._v("data")])])]),t._v(" "),e("td",[e("code",[t._v("number[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("strong",[t._v("required")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBackgroundColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBorderColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBorderDash")])])]),t._v(" "),e("td",[e("code",[t._v("number[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBorderDashOffset")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBorderJoinStyle")])])]),t._v(" "),e("td",[e("code",[t._v("'round'")]),t._v("|"),e("code",[t._v("'bevel'")]),t._v("|"),e("code",[t._v("'miter'")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverBorderWidth")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#interactions"}},[e("code",[t._v("hoverOffset")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("offset")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("number[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("rotation")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("spacing")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("weight")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",[e("code",[t._v("1")])])])])]),t._v(" "),e("p",[t._v("All these values, if "),e("code",[t._v("undefined")]),t._v(", fallback to the scopes described in "),e("a",{attrs:{href:"../general/options"}},[t._v("option resolution")])]),t._v(" "),e("h3",{attrs:{id:"general"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("circumference")])]),t._v(" "),e("td",[t._v("Per-dataset override for the sweep that the arcs cover")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("clip")])]),t._v(" "),e("td",[t._v("How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. "),e("code",[t._v("0")]),t._v(" = clip at chartArea. Clipping can also be configured per side: "),e("code",[t._v("clip: {left: 5, top: false, right: -2, bottom: 0}")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("rotation")])]),t._v(" "),e("td",[t._v("Per-dataset override for the starting angle to draw arcs from")])])])]),t._v(" "),e("h3",{attrs:{id:"styling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),e("p",[t._v("The style of each arc can be controlled with the following properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("backgroundColor")])]),t._v(" "),e("td",[t._v("arc background color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderColor")])]),t._v(" "),e("td",[t._v("arc border color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderDash")])]),t._v(" "),e("td",[t._v("arc border length and spacing of dashes. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderDashOffset")])]),t._v(" "),e("td",[t._v("arc border offset for line dashes. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderJoinStyle")])]),t._v(" "),e("td",[t._v("arc border join style. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderWidth")])]),t._v(" "),e("td",[t._v("arc border width (in pixels).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("offset")])]),t._v(" "),e("td",[t._v("arc offset (in pixels).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("spacing")])]),t._v(" "),e("td",[t._v("Fixed arc offset (in pixels). Similar to "),e("code",[t._v("offset")]),t._v(" but applies to all arcs.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("weight")])]),t._v(" "),e("td",[t._v("The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.")])])])]),t._v(" "),e("p",[t._v("All these values, if "),e("code",[t._v("undefined")]),t._v(", fallback to the associated "),e("RouterLink",{attrs:{to:"/configuration/elements.html#arc-configuration"}},[e("code",[t._v("elements.arc.*")])]),t._v(" options.")],1),t._v(" "),e("h3",{attrs:{id:"border-alignment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border-alignment"}},[t._v("#")]),t._v(" Border Alignment")]),t._v(" "),e("p",[t._v("The following values are supported for "),e("code",[t._v("borderAlign")]),t._v(".")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("'center'")]),t._v(" (default)")]),t._v(" "),e("li",[e("code",[t._v("'inner'")])])]),t._v(" "),e("p",[t._v("When "),e("code",[t._v("'center'")]),t._v(" is set, the borders of arcs next to each other will overlap. When "),e("code",[t._v("'inner'")]),t._v(" is set, it is guaranteed that all borders will not overlap.")]),t._v(" "),e("h3",{attrs:{id:"border-radius"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border-radius"}},[t._v("#")]),t._v(" Border Radius")]),t._v(" "),e("p",[t._v("If this value is a number, it is applied to all corners of the arc (outerStart, outerEnd, innerStart, innerRight). If this value is an object, the "),e("code",[t._v("outerStart")]),t._v(" property defines the outer-start corner's border radius. Similarly, the "),e("code",[t._v("outerEnd")]),t._v(", "),e("code",[t._v("innerStart")]),t._v(", and "),e("code",[t._v("innerEnd")]),t._v(" properties can also be specified.")]),t._v(" "),e("h3",{attrs:{id:"interactions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interactions"}},[t._v("#")]),t._v(" Interactions")]),t._v(" "),e("p",[t._v("The interaction with each arc can be controlled with the following properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("hoverBackgroundColor")])]),t._v(" "),e("td",[t._v("arc background color when hovered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverBorderColor")])]),t._v(" "),e("td",[t._v("arc border color when hovered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverBorderDash")])]),t._v(" "),e("td",[t._v("arc border length and spacing of dashes when hovered. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverBorderDashOffset")])]),t._v(" "),e("td",[t._v("arc border offset for line dashes when hovered. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverBorderJoinStyle")])]),t._v(" "),e("td",[t._v("arc border join style when hovered. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverBorderWidth")])]),t._v(" "),e("td",[t._v("arc border width when hovered (in pixels).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hoverOffset")])]),t._v(" "),e("td",[t._v("arc offset when hovered (in pixels).")])])])]),t._v(" "),e("p",[t._v("All these values, if "),e("code",[t._v("undefined")]),t._v(", fallback to the associated "),e("RouterLink",{attrs:{to:"/configuration/elements.html#arc-configuration"}},[e("code",[t._v("elements.arc.*")])]),t._v(" options.")],1),t._v(" "),e("h2",{attrs:{id:"config-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-options"}},[t._v("#")]),t._v(" Config Options")]),t._v(" "),e("p",[t._v("These are the customisation options specific to Pie & Doughnut charts. These options are looked up on access, and form together with the global chart configuration the options of the chart.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("cutout")])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("50%")]),t._v(" - for doughnut, "),e("code",[t._v("0")]),t._v(" - for pie")]),t._v(" "),e("td",[t._v("The portion of the chart that is cut out of the middle. If "),e("code",[t._v("string")]),t._v(" and ending with '%', percentage of the chart radius. "),e("code",[t._v("number")]),t._v(" is considered to be pixels.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("radius")])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("100%")])]),t._v(" "),e("td",[t._v("The outer radius of the chart. If "),e("code",[t._v("string")]),t._v(" and ending with '%', percentage of the maximum radius. "),e("code",[t._v("number")]),t._v(" is considered to be pixels.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("rotation")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("Starting angle to draw arcs from.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("circumference")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[t._v("360")]),t._v(" "),e("td",[t._v("Sweep to allow arcs to cover.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("animation.animateRotate")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("If true, the chart will animate in with a rotation animation. This property is in the "),e("code",[t._v("options.animation")]),t._v(" object.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("animation.animateScale")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("If true, will animate scaling the chart from the center outwards.")])])])]),t._v(" "),e("h2",{attrs:{id:"default-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-options"}},[t._v("#")]),t._v(" Default Options")]),t._v(" "),e("p",[t._v("We can also change these default values for each Doughnut type that is created, this object is available at "),e("code",[t._v("Chart.overrides.doughnut")]),t._v(". Pie charts also have a clone of these defaults available to change at "),e("code",[t._v("Chart.overrides.pie")]),t._v(", with the only difference being "),e("code",[t._v("cutout")]),t._v(" being set to 0.")]),t._v(" "),e("h2",{attrs:{id:"data-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),e("p",[t._v("For a pie chart, datasets need to contain an array of data points. The data points should be a number, Chart.js will total all the numbers and calculate the relative proportion of each.")]),t._v(" "),e("p",[t._v("You also need to specify an array of labels so that tooltips appear correctly.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasets")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// These labels appear in the legend and in the tooltips when hovering different arcs")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Red'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Yellow'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Blue'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);