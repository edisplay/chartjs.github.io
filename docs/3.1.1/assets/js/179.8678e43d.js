(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{505:function(t,n,a){"use strict";a.r(n);var e=a(7),r=Object(e.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"linear-gradient"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linear-gradient"}},[this._v("#")]),this._v(" Linear Gradient")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:actions:3>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Data',\n    handler(chart) {\n      const data = chart.data;\n      if (data.datasets.length > 0) {\n        data.labels = Utils.months({count: data.labels.length + 1});\n\n        for (var index = 0; index < data.datasets.length; ++index) {\n          data.datasets[index].data.push(Utils.rand(-100, 100));\n        }\n\n        chart.update();\n      }\n    }\n  },\n  {\n    name: 'Remove Data',\n    handler(chart) {\n      chart.data.labels.splice(-1, 1); // remove the label first\n\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.pop();\n      });\n\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:getGradient:0>\nlet width, height, gradient;\nfunction getGradient(ctx, chartArea) {\n  const chartWidth = chartArea.right - chartArea.left;\n  const chartHeight = chartArea.bottom - chartArea.top;\n  if (gradient === null || width !== chartWidth || height !== chartHeight) {\n    // Create the gradient because this is either the first render\n    // or the size of the chart has changed\n    width = chartWidth;\n    height = chartHeight;\n    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);\n    gradient.addColorStop(0, Utils.CHART_COLORS.blue);\n    gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow);\n    gradient.addColorStop(1, Utils.CHART_COLORS.red);\n  }\n\n  return gradient;\n}\n// </block:getGradient>\n\n// <block:setup:2>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst labels = Utils.months({count: 7});\n\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: function(context) {\n        const chart = context.chart;\n        const {ctx, chartArea} = chart;\n\n        if (!chartArea) {\n          // This case happens on initial chart load\n          return null;\n        }\n        return getGradient(ctx, chartArea);\n      },\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:1>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      legend: {\n        position: 'top',\n      },\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);n.default=r.exports}}]);