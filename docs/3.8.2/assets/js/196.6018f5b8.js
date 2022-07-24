(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{527:function(t,n,e){"use strict";e.r(n);var a=e(6),i=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"progressive-line"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#progressive-line"}},[t._v("#")]),t._v(" Progressive Line")]),t._v(" "),e("chart-editor",{attrs:{code:"\n// <block:data:2>\nconst data = [];\nconst data2 = [];\nlet prev = 100;\nlet prev2 = 80;\nfor (let i = 0; i < 1000; i++) {\n  prev += 5 - Math.random() * 10;\n  data.push({x: i, y: prev});\n  prev2 += 5 - Math.random() * 10;\n  data2.push({x: i, y: prev2});\n}\n// </block:data>\n\n// <block:animation:1>\nconst totalDuration = 10000;\nconst delayBetweenPoints = totalDuration / data.length;\nconst previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;\nconst animation = {\n  x: {\n    type: 'number',\n    easing: 'linear',\n    duration: delayBetweenPoints,\n    from: NaN, // the point is initially skipped\n    delay(ctx) {\n      if (ctx.type !== 'data' || ctx.xStarted) {\n        return 0;\n      }\n      ctx.xStarted = true;\n      return ctx.index * delayBetweenPoints;\n    }\n  },\n  y: {\n    type: 'number',\n    easing: 'linear',\n    duration: delayBetweenPoints,\n    from: previousY,\n    delay(ctx) {\n      if (ctx.type !== 'data' || ctx.yStarted) {\n        return 0;\n      }\n      ctx.yStarted = true;\n      return ctx.index * delayBetweenPoints;\n    }\n  }\n};\n// </block:animation>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: {\n    datasets: [{\n      borderColor: Utils.CHART_COLORS.red,\n      borderWidth: 1,\n      radius: 0,\n      data: data,\n    },\n    {\n      borderColor: Utils.CHART_COLORS.blue,\n      borderWidth: 1,\n      radius: 0,\n      data: data2,\n    }]\n  },\n  options: {\n    animation,\n    interaction: {\n      intersect: false\n    },\n    plugins: {\n      legend: false\n    },\n    scales: {\n      x: {\n        type: 'linear'\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  config\n};\n\n"}}),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" Api")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/api/classes/Chart.html"}},[t._v("Chart")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/api/classes/Chart.html#getdatasetmeta"}},[e("code",[t._v("getDatasetMeta")])])],1)])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/api/classes/Scale.html"}},[t._v("Scale")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/api/classes/Scale.html#getpixelforvalue"}},[e("code",[t._v("getPixelForValue")])])],1)])],1)]),t._v(" "),e("h2",{attrs:{id:"docs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" Docs")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/configuration/animations.html"}},[t._v("Animations")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/configuration/animations.html#animation"}},[t._v("animation")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("delay")])]),t._v(" "),e("li",[e("code",[t._v("duration")])]),t._v(" "),e("li",[e("code",[t._v("easing")])]),t._v(" "),e("li",[e("code",[t._v("loop")])])])],1)])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/charts/line.html"}},[t._v("Line")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/general/options.html"}},[t._v("Options")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable Options")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/general/options.html#data"}},[t._v("Data Context")])],1)])],1)])],1)])],1)}),[],!1,null,null,null);n.default=i.exports}}]);