(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{551:function(n,t,e){"use strict";e.r(t);var o=e(3),i=Object(o.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"interpolation-modes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interpolation-modes"}},[n._v("#")]),n._v(" Interpolation Modes")]),n._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:1>\nconst DATA_COUNT = 12;\nconst labels = [];\nfor (let i = 0; i < DATA_COUNT; ++i) {\n  labels.push(i.toString());\n}\nconst datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Cubic interpolation (monotone)',\n      data: datapoints,\n      borderColor: Utils.CHART_COLORS.red,\n      fill: false,\n      cubicInterpolationMode: 'monotone',\n      tension: 0.4\n    }, {\n      label: 'Cubic interpolation',\n      data: datapoints,\n      borderColor: Utils.CHART_COLORS.blue,\n      fill: false,\n      tension: 0.4\n    }, {\n      label: 'Linear interpolation (default)',\n      data: datapoints,\n      borderColor: Utils.CHART_COLORS.green,\n      fill: false\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart.js Line Chart - Cubic interpolation mode'\n      },\n    },\n    interaction: {\n      intersect: false,\n    },\n    scales: {\n      x: {\n        display: true,\n        title: {\n          display: true\n        }\n      },\n      y: {\n        display: true,\n        title: {\n          display: true,\n          text: 'Value'\n        },\n        suggestedMin: -10,\n        suggestedMax: 200\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),t("h2",{attrs:{id:"docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[n._v("#")]),n._v(" Docs")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/charts/line.html"}},[n._v("Line")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/charts/line.html#cubicinterpolationmode"}},[t("code",[n._v("cubicInterpolationMode")])])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/charts/line.html#line-styling"}},[n._v("Line Styling ("),t("code",[n._v("tension")]),n._v(")")])],1)])],1)])],1)}),[],!1,null,null,null);t.default=i.exports}}]);