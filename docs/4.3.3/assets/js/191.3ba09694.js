(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{527:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"derived-chart-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#derived-chart-type"}},[t._v("#")]),t._v(" Derived Chart Type")]),t._v(" "),s("chart-editor",{attrs:{code:"// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100, rmin: 1, rmax: 20};\nconst data = {\n  datasets: [\n    {\n      label: 'My First dataset',\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n      borderColor: Utils.CHART_COLORS.blue,\n      borderWidth: 1,\n      boxStrokeStyle: 'red',\n      data: Utils.bubbles(NUMBER_CFG)\n    }\n  ],\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'derivedBubble',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Derived Chart Type'\n      },\n    }\n  }\n};\n\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),s("h2",{attrs:{id:"derivedbubble-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#derivedbubble-implementation"}},[t._v("#")]),t._v(" DerivedBubble Implementation")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BubbleController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chart.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n\r\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Custom")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BubbleController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Call bubble controller method to draw all the points")]),t._v("\r\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n\r\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now we can do some custom drawing for this dataset.")]),t._v("\r\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here we'll draw a box around the first point in each dataset,")]),t._v("\r\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// using `boxStrokeStyle` dataset option for color")]),t._v("\r\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" meta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMeta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pt0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n\r\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pt0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("radius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pt0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n\r\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strokeStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boxStrokeStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lineWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("strokeRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" radius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" radius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" radius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" radius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n    ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("restore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\r\nCustom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'derivedBubble'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\nCustom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\r\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Custom defaults. Bubble defaults are inherited.")]),t._v("\r\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("boxStrokeStyle")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v("\r\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Overrides are only inherited, but not merged if defined")]),t._v("\r\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Custom.overrides = Chart.overrides.bubble;")]),t._v("\r\n\r\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Stores the controller so that the chart initialization routine can look it up")]),t._v("\r\nChart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Custom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\r\n")])])]),s("h2",{attrs:{id:"docs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" Docs")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/charts/bubble.html"}},[t._v("Bubble Chart")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/developers/charts.html"}},[t._v("New Charts")])],1)])],1)}),[],!1,null,null,null);s.default=r.exports}}]);