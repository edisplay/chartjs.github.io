(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{531:function(t,n,a){"use strict";a.r(n);var e=a(3),r=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"radial-gradient"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#radial-gradient"}},[t._v("#")]),t._v(" Radial Gradient")]),t._v(" "),n("chart-editor",{attrs:{code:"// <block:setup:3>\nconst DATA_COUNT = 5;\nUtils.srand(110);\n\nconst chartColors = Utils.CHART_COLORS;\nconst colors = [chartColors.red, chartColors.orange, chartColors.yellow, chartColors.green, chartColors.blue];\n\nconst cache = new Map();\nlet width = null;\nlet height = null;\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = generateData();\n      });\n      chart.update();\n    }\n  },\n];\n// </block:setup>\n\n// <block:createRadialGradient3:0>\nfunction createRadialGradient3(context, c1, c2, c3) {\n  const chartArea = context.chart.chartArea;\n  if (!chartArea) {\n    // This case happens on initial chart load\n    return;\n  }\n\n  const chartWidth = chartArea.right - chartArea.left;\n  const chartHeight = chartArea.bottom - chartArea.top;\n  if (width !== chartWidth || height !== chartHeight) {\n    cache.clear();\n  }\n  let gradient = cache.get(c1 + c2 + c3);\n  if (!gradient) {\n    // Create the gradient because this is either the first render\n    // or the size of the chart has changed\n    width = chartWidth;\n    height = chartHeight;\n    const centerX = (chartArea.left + chartArea.right) / 2;\n    const centerY = (chartArea.top + chartArea.bottom) / 2;\n    const r = Math.min(\n      (chartArea.right - chartArea.left) / 2,\n      (chartArea.bottom - chartArea.top) / 2\n    );\n    const ctx = context.chart.ctx;\n    gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, r);\n    gradient.addColorStop(0, c1);\n    gradient.addColorStop(0.5, c2);\n    gradient.addColorStop(1, c3);\n    cache.set(c1 + c2 + c3, gradient);\n  }\n\n  return gradient;\n}\n// </block:createRadialGradient3>\n\n// <block:data:2>\nfunction generateData() {\n  return Utils.numbers({\n    count: DATA_COUNT,\n    min: 0,\n    max: 100\n  });\n}\n\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [{\n    data: generateData()\n  }]\n};\n// </block:data>\n\n// <block:config:1>\nconst config = {\n  type: 'polarArea',\n  data: data,\n  options: {\n    plugins: {\n      legend: false,\n      tooltip: false,\n    },\n    elements: {\n      arc: {\n        backgroundColor: function(context) {\n          let c = colors[context.dataIndex];\n          if (!c) {\n            return;\n          }\n          if (context.active) {\n            c = helpers.getHoverColor(c);\n          }\n          const mid = helpers.color(c).desaturate(0.2).darken(0.2).rgbString();\n          const start = helpers.color(c).lighten(0.2).rotate(270).rgbString();\n          const end = helpers.color(c).lighten(0.1).rgbString();\n          return createRadialGradient3(context, start, mid, end);\n        },\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions,\n  config,\n};\n"}}),n("h2",{attrs:{id:"docs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" Docs")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/charts/polar.html"}},[t._v("Polar Area Chart")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/charts/polar.html#styling"}},[t._v("Styling")])],1)])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/general/options.html"}},[t._v("Options")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable Options")])],1)])],1)])],1)}),[],!1,null,null,null);n.default=r.exports}}]);