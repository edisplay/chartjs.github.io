(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{556:function(t,n,a){"use strict";a.r(n);var e=a(3),s=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"point-styling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#point-styling"}},[t._v("#")]),t._v(" Point Styling")]),t._v(" "),n("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'pointStyle: circle (default)',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.pointStyle = 'circle';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'pointStyle: cross',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.pointStyle = 'cross';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'pointStyle: crossRot',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.pointStyle = 'crossRot';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'pointStyle: dash',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.pointStyle = 'dash';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'pointStyle: line',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.pointStyle = 'line';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'pointStyle: rect',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.pointStyle = 'rect';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'pointStyle: rectRounded',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.pointStyle = 'rectRounded';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'pointStyle: rectRot',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.pointStyle = 'rectRot';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'pointStyle: star',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.pointStyle = 'star';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'pointStyle: triangle',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.pointStyle = 'triangle';\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'pointStyle: false',\n    handler: (chart) => {\n      chart.data.datasets.forEach(dataset => {\n        dataset.pointStyle = false;\n      });\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:setup:1>\nconst data = {\n  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],\n  datasets: [\n    {\n      label: 'Dataset',\n      data: Utils.numbers({count: 6, min: -100, max: 100}),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      pointStyle: 'circle',\n      pointRadius: 10,\n      pointHoverRadius: 15\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}}),n("h2",{attrs:{id:"docs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" Docs")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/general/data-structures.html"}},[t._v("Data structures ("),n("code",[t._v("labels")]),t._v(")")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/charts/line.html"}},[t._v("Line")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/charts/line.html#point-styling"}},[t._v("Point Styling")])],1)])],1)])],1)}),[],!1,null,null,null);n.default=s.exports}}]);