(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{475:function(n,t,a){"use strict";a.r(t);var s=a(4),e=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"stacked-bar-chart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stacked-bar-chart"}},[this._v("#")]),this._v(" Stacked Bar Chart")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.red,\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.blue,\n    },\n    {\n      label: 'Dataset 3',\n      data: Utils.numbers(NUMBER_CFG),\n      backgroundColor: Utils.CHART_COLORS.green,\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart.js Bar Chart - Stacked'\n      },\n    },\n    responsive: true,\n    scales: {\n      x: {\n        stacked: true,\n      },\n      y: {\n        stacked: true\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);