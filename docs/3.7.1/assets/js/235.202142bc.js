(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{565:function(n,t,e){"use strict";e.r(t);var s=e(6),a=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"linear-scale-suggested-min-max"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linear-scale-suggested-min-max"}},[this._v("#")]),this._v(" Linear Scale - Suggested Min-Max")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: [10, 30, 39, 20, 25, 34, -10],\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.CHART_COLORS.red,\n    },\n    {\n      label: 'Dataset 2',\n      data: [18, 33, 22, 19, 11, 39, 30],\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.CHART_COLORS.blue,\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Suggested Min and Max Settings'\n      }\n    },\n    scales: {\n      y: {\n        // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)\n        suggestedMin: 30,\n\n        // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)\n        suggestedMax: 50,\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=a.exports}}]);