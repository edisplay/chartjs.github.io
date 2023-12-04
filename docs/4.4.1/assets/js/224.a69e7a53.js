(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{560:function(t,n,a){"use strict";a.r(n);var s=a(3),e=Object(s.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"bubble"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bubble"}},[this._v("#")]),this._v(" Bubble")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, rmin: 5, rmax: 15, min: 0, max: 100};\n\nconst data = {\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.bubbles(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.bubbles(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.orange,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),\n    }\n  ]\n};\n// </block:setup>\n\n// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.bubbles({count: DATA_COUNT, rmin: 5, rmax: 15, min: 0, max: 100});\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Dataset',\n    handler(chart) {\n      const chartData = chart.data;\n      const dsColor = Utils.namedColor(chartData.datasets.length);\n      const newDataset = {\n        label: 'Dataset ' + (chartData.datasets.length + 1),\n        backgroundColor: Utils.transparentize(dsColor, 0.5),\n        borderColor: dsColor,\n        data: Utils.bubbles({count: DATA_COUNT, rmin: 5, rmax: 15, min: 0, max: 100}),\n      };\n      chart.data.datasets.push(newDataset);\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Data',\n    handler(chart) {\n      const chartData = chart.data;\n      if (chartData.datasets.length > 0) {\n\n        for (let index = 0; index < chartData.datasets.length; ++index) {\n          chartData.datasets[index].data.push(Utils.bubbles({count: 1, rmin: 5, rmax: 15, min: 0, max: 100})[0]);\n        }\n\n        chart.update();\n      }\n    }\n  },\n  {\n    name: 'Remove Dataset',\n    handler(chart) {\n      chart.data.datasets.pop();\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove Data',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.pop();\n      });\n\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:config:0>\nconst config = {\n  type: 'bubble',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      legend: {\n        position: 'top',\n      },\n      title: {\n        display: true,\n        text: 'Chart.js Bubble Chart'\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}}),t("h2",{attrs:{id:"docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[this._v("#")]),this._v(" Docs")]),this._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/charts/bubble.html"}},[this._v("Bubble")])],1)])],1)}),[],!1,null,null,null);n.default=e.exports}}]);