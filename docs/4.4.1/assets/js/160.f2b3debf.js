(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{491:function(e,t,o){"use strict";o.r(t);var r=o(3),v=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"elements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elements"}},[e._v("#")]),e._v(" Elements")]),e._v(" "),t("p",[e._v("While chart types provide settings to configure the styling of each dataset, you sometimes want to style "),t("strong",[e._v("all datasets the same way")]),e._v(". A common example would be to stroke all the bars in a bar chart with the same colour but change the fill per dataset. Options can be configured for four different types of elements: "),t("strong",[t("a",{attrs:{href:"#arc-configuration"}},[e._v("arc")])]),e._v(", "),t("strong",[t("a",{attrs:{href:"#line-configuration"}},[e._v("lines")])]),e._v(", "),t("strong",[t("a",{attrs:{href:"#point-configuration"}},[e._v("points")])]),e._v(", and "),t("strong",[t("a",{attrs:{href:"#bar-configuration"}},[e._v("bars")])]),e._v(". When set, these options apply to all objects of that type unless specifically overridden by the configuration attached to a dataset.")]),e._v(" "),t("h2",{attrs:{id:"global-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-configuration"}},[e._v("#")]),e._v(" Global Configuration")]),e._v(" "),t("p",[e._v("The element options can be specified per chart or globally. The global options for elements are defined in "),t("code",[e._v("Chart.defaults.elements")]),e._v(". For example, to set the border width of all bar charts globally, you would do:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("Chart"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("defaults"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("elements"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("borderWidth "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"point-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#point-configuration"}},[e._v("#")]),e._v(" Point Configuration")]),e._v(" "),t("p",[e._v("Point elements are used to represent the points in a line, radar or bubble chart.")]),e._v(" "),t("p",[e._v("Namespace: "),t("code",[e._v("options.elements.point")]),e._v(", global point options: "),t("code",[e._v("Chart.defaults.elements.point")]),e._v(".")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Default")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("radius")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("3")])]),e._v(" "),t("td",[e._v("Point radius.")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"#point-styles"}},[t("code",[e._v("pointStyle")])])]),e._v(" "),t("td",[t("a",{attrs:{href:"#types"}},[t("code",[e._v("pointStyle")])])]),e._v(" "),t("td",[t("code",[e._v("'circle'")])]),e._v(" "),t("td",[e._v("Point style.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("rotation")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("0")])]),e._v(" "),t("td",[e._v("Point rotation (in degrees).")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("backgroundColor")])]),e._v(" "),t("td",[t("RouterLink",{attrs:{to:"/general/colors.html"}},[t("code",[e._v("Color")])])],1),e._v(" "),t("td",[t("code",[e._v("Chart.defaults.backgroundColor")])]),e._v(" "),t("td",[e._v("Point fill color.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderWidth")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("1")])]),e._v(" "),t("td",[e._v("Point stroke width.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderColor")])]),e._v(" "),t("td",[t("RouterLink",{attrs:{to:"/general/colors.html"}},[t("code",[e._v("Color")])])],1),e._v(" "),t("td",[t("code",[e._v("'Chart.defaults.borderColor")])]),e._v(" "),t("td",[e._v("Point stroke color.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("hitRadius")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("1")])]),e._v(" "),t("td",[e._v("Extra radius added to point radius for hit detection.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("hoverRadius")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("4")])]),e._v(" "),t("td",[e._v("Point radius when hovered.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("hoverBorderWidth")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("1")])]),e._v(" "),t("td",[e._v("Stroke width when hovered.")])])])]),e._v(" "),t("h3",{attrs:{id:"point-styles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#point-styles"}},[e._v("#")]),e._v(" Point Styles")]),e._v(" "),t("h4",{attrs:{id:"types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("pointStyle")]),e._v(" argument accepts the following type of inputs: "),t("code",[e._v("string")]),e._v(", "),t("code",[e._v("Image")]),e._v(" and "),t("code",[e._v("HTMLCanvasElement")])]),e._v(" "),t("h4",{attrs:{id:"info"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[e._v("#")]),e._v(" Info")]),e._v(" "),t("p",[e._v("When a string is provided, the following values are supported:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("'circle'")])]),e._v(" "),t("li",[t("code",[e._v("'cross'")])]),e._v(" "),t("li",[t("code",[e._v("'crossRot'")])]),e._v(" "),t("li",[t("code",[e._v("'dash'")])]),e._v(" "),t("li",[t("code",[e._v("'line'")])]),e._v(" "),t("li",[t("code",[e._v("'rect'")])]),e._v(" "),t("li",[t("code",[e._v("'rectRounded'")])]),e._v(" "),t("li",[t("code",[e._v("'rectRot'")])]),e._v(" "),t("li",[t("code",[e._v("'star'")])]),e._v(" "),t("li",[t("code",[e._v("'triangle'")])]),e._v(" "),t("li",[t("code",[e._v("false")])])]),e._v(" "),t("p",[e._v("If the value is an image or a canvas element, that image or canvas element is drawn on the canvas using "),t("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage",target:"_blank",rel:"noopener noreferrer"}},[e._v("drawImage"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"line-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#line-configuration"}},[e._v("#")]),e._v(" Line Configuration")]),e._v(" "),t("p",[e._v("Line elements are used to represent the line in a line chart.")]),e._v(" "),t("p",[e._v("Namespace: "),t("code",[e._v("options.elements.line")]),e._v(", global line options: "),t("code",[e._v("Chart.defaults.elements.line")]),e._v(".")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Default")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("tension")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("0")])]),e._v(" "),t("td",[e._v("Bézier curve tension ("),t("code",[e._v("0")]),e._v(" for no Bézier curves).")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("backgroundColor")])]),e._v(" "),t("td",[t("RouterLink",{attrs:{to:"/general/colors.html"}},[t("code",[e._v("Color")])])],1),e._v(" "),t("td",[t("code",[e._v("Chart.defaults.backgroundColor")])]),e._v(" "),t("td",[e._v("Line fill color.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderWidth")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("3")])]),e._v(" "),t("td",[e._v("Line stroke width.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderColor")])]),e._v(" "),t("td",[t("RouterLink",{attrs:{to:"/general/colors.html"}},[t("code",[e._v("Color")])])],1),e._v(" "),t("td",[t("code",[e._v("Chart.defaults.borderColor")])]),e._v(" "),t("td",[e._v("Line stroke color.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderCapStyle")])]),e._v(" "),t("td",[t("code",[e._v("string")])]),e._v(" "),t("td",[t("code",[e._v("'butt'")])]),e._v(" "),t("td",[e._v("Line cap style. See "),t("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderDash")])]),e._v(" "),t("td",[t("code",[e._v("number[]")])]),e._v(" "),t("td",[t("code",[e._v("[]")])]),e._v(" "),t("td",[e._v("Line dash. See "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderDashOffset")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("0.0")])]),e._v(" "),t("td",[e._v("Line dash offset. See "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderJoinStyle")])]),e._v(" "),t("td",[t("code",[e._v("'round'")]),e._v("|"),t("code",[e._v("'bevel'")]),e._v("|"),t("code",[e._v("'miter'")])]),e._v(" "),t("td",[t("code",[e._v("'miter'")])]),e._v(" "),t("td",[e._v("Line join style. See "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("capBezierPoints")])]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("true")])]),e._v(" "),t("td",[t("code",[e._v("true")]),e._v(" to keep Bézier control inside the chart, "),t("code",[e._v("false")]),e._v(" for no restriction.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("cubicInterpolationMode")])]),e._v(" "),t("td",[t("code",[e._v("string")])]),e._v(" "),t("td",[t("code",[e._v("'default'")])]),e._v(" "),t("td",[e._v("Interpolation mode to apply. "),t("RouterLink",{attrs:{to:"/charts/line.html#cubicinterpolationmode"}},[e._v("See more...")])],1)]),e._v(" "),t("tr",[t("td",[t("code",[e._v("fill")])]),e._v(" "),t("td",[t("code",[e._v("boolean")]),e._v("|"),t("code",[e._v("string")])]),e._v(" "),t("td",[t("code",[e._v("false")])]),e._v(" "),t("td",[e._v("How to fill the area under the line. See "),t("RouterLink",{attrs:{to:"/charts/area.html#filling-modes"}},[e._v("area charts")]),e._v(".")],1)]),e._v(" "),t("tr",[t("td",[t("code",[e._v("stepped")])]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("false")])]),e._v(" "),t("td",[t("code",[e._v("true")]),e._v(" to show the line as a stepped line ("),t("code",[e._v("tension")]),e._v(" will be ignored).")])])])]),e._v(" "),t("h2",{attrs:{id:"bar-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bar-configuration"}},[e._v("#")]),e._v(" Bar Configuration")]),e._v(" "),t("p",[e._v("Bar elements are used to represent the bars in a bar chart.")]),e._v(" "),t("p",[e._v("Namespace: "),t("code",[e._v("options.elements.bar")]),e._v(", global bar options: "),t("code",[e._v("Chart.defaults.elements.bar")]),e._v(".")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Default")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("backgroundColor")])]),e._v(" "),t("td",[t("RouterLink",{attrs:{to:"/general/colors.html"}},[t("code",[e._v("Color")])])],1),e._v(" "),t("td",[t("code",[e._v("Chart.defaults.backgroundColor")])]),e._v(" "),t("td",[e._v("Bar fill color.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderWidth")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("0")])]),e._v(" "),t("td",[e._v("Bar stroke width.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderColor")])]),e._v(" "),t("td",[t("RouterLink",{attrs:{to:"/general/colors.html"}},[t("code",[e._v("Color")])])],1),e._v(" "),t("td",[t("code",[e._v("Chart.defaults.borderColor")])]),e._v(" "),t("td",[e._v("Bar stroke color.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderSkipped")])]),e._v(" "),t("td",[t("code",[e._v("string")])]),e._v(" "),t("td",[t("code",[e._v("'start'")])]),e._v(" "),t("td",[e._v("Skipped (excluded) border: "),t("code",[e._v("'start'")]),e._v(", "),t("code",[e._v("'end'")]),e._v(", "),t("code",[e._v("'middle'")]),e._v(", "),t("code",[e._v("'bottom'")]),e._v(", "),t("code",[e._v("'left'")]),e._v(", "),t("code",[e._v("'top'")]),e._v(", "),t("code",[e._v("'right'")]),e._v(" or "),t("code",[e._v("false")]),e._v(".")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderRadius")])]),e._v(" "),t("td",[t("code",[e._v("number")]),e._v("|"),t("code",[e._v("object")])]),e._v(" "),t("td",[t("code",[e._v("0")])]),e._v(" "),t("td",[e._v("The bar border radius (in pixels).")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("inflateAmount")])]),e._v(" "),t("td",[t("code",[e._v("number")]),e._v("|"),t("code",[e._v("'auto'")])]),e._v(" "),t("td",[t("code",[e._v("'auto'")])]),e._v(" "),t("td",[e._v("The amount of pixels to inflate the bar rectangle(s) when drawing.")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"#point-styles"}},[t("code",[e._v("pointStyle")])])]),e._v(" "),t("td",[t("code",[e._v("string")]),e._v("|"),t("code",[e._v("Image")]),e._v("|"),t("code",[e._v("HTMLCanvasElement")])]),e._v(" "),t("td",[t("code",[e._v("'circle'")])]),e._v(" "),t("td",[e._v("Style of the point for legend.")])])])]),e._v(" "),t("h2",{attrs:{id:"arc-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arc-configuration"}},[e._v("#")]),e._v(" Arc Configuration")]),e._v(" "),t("p",[e._v("Arcs are used in the polar area, doughnut and pie charts.")]),e._v(" "),t("p",[e._v("Namespace: "),t("code",[e._v("options.elements.arc")]),e._v(", global arc options: "),t("code",[e._v("Chart.defaults.elements.arc")]),e._v(".")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Default")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("angle")]),e._v(" - for polar only")]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("circumference / (arc count)")])]),e._v(" "),t("td",[e._v("Arc angle to cover.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("backgroundColor")])]),e._v(" "),t("td",[t("RouterLink",{attrs:{to:"/general/colors.html"}},[t("code",[e._v("Color")])])],1),e._v(" "),t("td",[t("code",[e._v("Chart.defaults.backgroundColor")])]),e._v(" "),t("td",[e._v("Arc fill color.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderAlign")])]),e._v(" "),t("td",[t("code",[e._v("'center'")]),e._v("|"),t("code",[e._v("'inner'")])]),e._v(" "),t("td",[t("code",[e._v("'center'")])]),e._v(" "),t("td",[e._v("Arc stroke alignment.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderColor")])]),e._v(" "),t("td",[t("RouterLink",{attrs:{to:"/general/colors.html"}},[t("code",[e._v("Color")])])],1),e._v(" "),t("td",[t("code",[e._v("'#fff'")])]),e._v(" "),t("td",[e._v("Arc stroke color.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderDash")])]),e._v(" "),t("td",[t("code",[e._v("number[]")])]),e._v(" "),t("td",[t("code",[e._v("[]")])]),e._v(" "),t("td",[e._v("Arc line dash. See "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderDashOffset")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("0.0")])]),e._v(" "),t("td",[e._v("Arc line dash offset. See "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderJoinStyle")])]),e._v(" "),t("td",[t("code",[e._v("'round'")]),e._v("|"),t("code",[e._v("'bevel'")]),e._v("|"),t("code",[e._v("'miter'")])]),e._v(" "),t("td",[t("code",[e._v("'bevel'")]),e._v("|"),t("code",[e._v("'round'")])]),e._v(" "),t("td",[e._v("Line join style. See "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),t("OutboundLink")],1),e._v(". The default is "),t("code",[e._v("'round'")]),e._v(" when "),t("code",[e._v("borderAlign")]),e._v(" is "),t("code",[e._v("'inner'")])])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("borderWidth")])]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[t("code",[e._v("2")])]),e._v(" "),t("td",[e._v("Arc stroke width.")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("circular")])]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[t("code",[e._v("true")])]),e._v(" "),t("td",[e._v("By default the Arc is curved. If "),t("code",[e._v("circular: false")]),e._v(" the Arc will be flat")])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);