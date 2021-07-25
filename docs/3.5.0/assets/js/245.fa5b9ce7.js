(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{534:function(n,t,e){"use strict";e.r(t);var a=e(3),o=Object(a.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"interaction-modes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interaction-modes"}},[this._v("#")]),this._v(" Interaction Modes")]),this._v(" "),t("p",[this._v("This sample shows how to use the tooltip position mode setting.")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Mode: index',\n    handler(chart) {\n      chart.options.interaction.axis = 'xy';\n      chart.options.interaction.mode = 'index';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: dataset',\n    handler(chart) {\n      chart.options.interaction.axis = 'xy';\n      chart.options.interaction.mode = 'dataset';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: point',\n    handler(chart) {\n      chart.options.interaction.axis = 'xy';\n      chart.options.interaction.mode = 'point';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: nearest',\n    handler(chart) {\n      chart.options.interaction.axis = 'xy';\n      chart.options.interaction.mode = 'nearest';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: x',\n    handler(chart) {\n      chart.options.interaction.mode = 'x';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: y',\n    handler(chart) {\n      chart.options.interaction.mode = 'y';\n      chart.update();\n    }\n  },\n  {\n    name: 'Toggle Intersect',\n    handler(chart) {\n      chart.options.interaction.intersect = !chart.options.interaction.intersect;\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    interaction: {\n      intersect: false,\n      mode: 'index',\n    },\n    plugins: {\n      title: {\n        display: true,\n        text: (ctx) => {\n          const {intersect, mode} = ctx.chart.options.interaction;\n          return 'Mode: ' + mode + ', intersect: ' + intersect;\n        }\n      },\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);