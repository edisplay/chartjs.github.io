(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{588:function(t,n,a){"use strict";a.r(n);var e=a(3),o=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"bar-chart"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bar-chart"}},[t._v("#")]),t._v(" Bar Chart")]),t._v(" "),n("p",[t._v("Demo selecting bar color based on the bar's y value.")]),t._v(" "),n("chart-editor",{attrs:{code:"// <block:setup:2>\nconst DATA_COUNT = 16;\nUtils.srand(110);\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = generateData();\n      });\n      chart.update();\n    }\n  },\n];\n// </block:setup>\n\n// <block:data:1>\nfunction generateData() {\n  return Utils.numbers({\n    count: DATA_COUNT,\n    min: -100,\n    max: 100\n  });\n}\n\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [{\n    data: generateData(),\n  }]\n};\n// </block:data>\n\n// <block:options:0>\nfunction colorize(opaque) {\n  return (ctx) => {\n    const v = ctx.parsed.y;\n    const c = v < -50 ? '#D60000'\n      : v < 0 ? '#F46300'\n      : v < 50 ? '#0358B6'\n      : '#44DE28';\n\n    return opaque ? c : Utils.transparentize(c, 1 - Math.abs(v / 150));\n  };\n}\n\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n    plugins: {\n      legend: false,\n    },\n    elements: {\n      bar: {\n        backgroundColor: colorize(false),\n        borderColor: colorize(true),\n        borderWidth: 2\n      }\n    }\n  }\n};\n// </block:options>\n\nmodule.exports = {\n  actions,\n  config,\n};\n"}}),n("h2",{attrs:{id:"docs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" Docs")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/charts/bar.html"}},[t._v("Bar")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/general/data-structures.html"}},[t._v("Data structures ("),n("code",[t._v("labels")]),t._v(")")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/general/data-structures.html#dataset-configuration"}},[t._v("Dataset Configuration ("),n("code",[t._v("stack")]),t._v(")")])],1)])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/general/options.html"}},[t._v("Options")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable Options")])],1)])],1)])],1)}),[],!1,null,null,null);n.default=o.exports}}]);