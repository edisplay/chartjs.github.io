(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{499:function(t,a,e){"use strict";e.r(a);var s=e(3),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"responsive-charts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responsive-charts"}},[t._v("#")]),t._v(" Responsive Charts")]),t._v(" "),a("p",[t._v("When it comes to changing the chart size based on the window size, a major limitation is that the canvas "),a("em",[t._v("render")]),t._v(" size ("),a("code",[t._v("canvas.width")]),t._v(" and "),a("code",[t._v(".height")]),t._v(") can "),a("strong",[t._v("not")]),t._v(" be expressed with relative values, contrary to the "),a("em",[t._v("display")]),t._v(" size ("),a("code",[t._v("canvas.style.width")]),t._v(" and "),a("code",[t._v(".height")]),t._v("). Furthermore, these sizes are independent of each other and thus the canvas "),a("em",[t._v("render")]),t._v(" size does not adjust automatically based on the "),a("em",[t._v("display")]),t._v(" size, making the rendering inaccurate.")]),t._v(" "),a("p",[t._v("The following examples "),a("strong",[t._v("do not work")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('<canvas height="40vh" width="80vw">')]),t._v(": "),a("strong",[t._v("invalid")]),t._v(" values, the canvas doesn't resize ("),a("a",{attrs:{href:"https://codepen.io/chartjs/pen/oWLZaR",target:"_blank",rel:"noopener noreferrer"}},[t._v("example"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[a("code",[t._v('<canvas style="height:40vh; width:80vw">')]),t._v(": "),a("strong",[t._v("invalid")]),t._v(" behavior, the canvas is resized but becomes blurry ("),a("a",{attrs:{href:"https://codepen.io/chartjs/pen/WjxpmO",target:"_blank",rel:"noopener noreferrer"}},[t._v("example"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[a("code",[t._v('<canvas style="margin: 0 auto;">')]),t._v(": "),a("strong",[t._v("invalid")]),t._v(" behavior, the canvas continually shrinks. Chart.js needs a dedicated container for each canvas and this styling should be applied there.")])]),t._v(" "),a("p",[t._v("Chart.js provides a "),a("a",{attrs:{href:"#configuration-options"}},[t._v("few options")]),t._v(" to enable responsiveness and control the resize behavior of charts by detecting when the canvas "),a("em",[t._v("display")]),t._v(" size changes and update the "),a("em",[t._v("render")]),t._v(" size accordingly.")]),t._v(" "),a("h2",{attrs:{id:"configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration Options")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("responsive")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Resizes the chart canvas when its container does ("),a("a",{attrs:{href:"#important-note"}},[t._v("important note...")]),t._v(").")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("maintainAspectRatio")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Maintain the original canvas aspect ratio "),a("code",[t._v("(width / height)")]),t._v(" when resizing.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("aspectRatio")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("1")]),t._v("|"),a("code",[t._v("2")])]),t._v(" "),a("td",[t._v("Canvas aspect ratio (i.e. "),a("code",[t._v("width / height")]),t._v(", a value of 1 representing a square canvas). Note that this option is ignored if the height is explicitly defined either as attribute or via the style. The default value varies by chart type; Radial charts (doughnut, pie, polarArea, radar) default to "),a("code",[t._v("1")]),t._v(" and others default to "),a("code",[t._v("2")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("onResize")])]),t._v(" "),a("td",[a("code",[t._v("function")])]),t._v(" "),a("td",[a("code",[t._v("null")])]),t._v(" "),a("td",[t._v("Called when a resize occurs. Gets passed two arguments: the chart instance and the new size.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("resizeDelay")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Delay the resize update by the given amount of milliseconds. This can ease the resize process by debouncing the update of the elements.")])])])]),t._v(" "),a("h2",{attrs:{id:"important-note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-note"}},[t._v("#")]),t._v(" Important Note")]),t._v(" "),a("p",[t._v("Detecting when the canvas size changes can not be done directly from the "),a("code",[t._v("canvas")]),t._v(" element. Chart.js uses its parent container to update the canvas "),a("em",[t._v("render")]),t._v(" and "),a("em",[t._v("display")]),t._v(" sizes. However, this method requires the container to be "),a("strong",[t._v("relatively positioned")]),t._v(" and "),a("strong",[t._v("dedicated to the chart canvas only")]),t._v(". Responsiveness can then be achieved by setting relative values for the container size ("),a("a",{attrs:{href:"https://codepen.io/chartjs/pen/YVWZbz",target:"_blank",rel:"noopener noreferrer"}},[t._v("example"),a("OutboundLink")],1),t._v("):")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chart-container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("40vh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("80vw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("canvas")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("canvas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("The chart can also be programmatically resized by modifying the container size:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'128px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'128px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Note that in order for the above code to correctly resize the chart height, the "),a("a",{attrs:{href:"#configuration-options"}},[a("code",[t._v("maintainAspectRatio")])]),t._v(" option must also be set to "),a("code",[t._v("false")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"printing-resizable-charts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#printing-resizable-charts"}},[t._v("#")]),t._v(" Printing Resizable Charts")]),t._v(" "),a("p",[t._v("CSS media queries allow changing styles when printing a page. The CSS applied from these media queries may cause charts to need to resize. However, the resize won't happen automatically. To support resizing charts when printing, you need to hook the "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint",target:"_blank",rel:"noopener noreferrer"}},[t._v("onbeforeprint"),a("OutboundLink")],1),t._v(" event and manually trigger resizing of each chart.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforePrintHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" Chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instances"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instances"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("You may also find that, due to complexities in when the browser lays out the document for printing and when resize events are fired, Chart.js is unable to properly resize for the print layout. To work around this, you can pass an explicit size to "),a("code",[t._v(".resize()")]),t._v(" then use an "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint",target:"_blank",rel:"noopener noreferrer"}},[t._v("onafterprint"),a("OutboundLink")],1),t._v(" event to restore the automatic size when done.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeprint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  myChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'afterprint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  myChart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);