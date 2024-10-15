(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{559:function(n,t,e){"use strict";e.r(t);var l=e(3),s=Object(l.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"line-styling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#line-styling"}},[n._v("#")]),n._v(" Line Styling")]),n._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: DATA_COUNT});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Unfilled',\n      fill: false,\n      backgroundColor: Utils.CHART_COLORS.blue,\n      borderColor: Utils.CHART_COLORS.blue,\n      data: Utils.numbers(NUMBER_CFG),\n    }, {\n      label: 'Dashed',\n      fill: false,\n      backgroundColor: Utils.CHART_COLORS.green,\n      borderColor: Utils.CHART_COLORS.green,\n      borderDash: [5, 5],\n      data: Utils.numbers(NUMBER_CFG),\n    }, {\n      label: 'Filled',\n      backgroundColor: Utils.CHART_COLORS.red,\n      borderColor: Utils.CHART_COLORS.red,\n      data: Utils.numbers(NUMBER_CFG),\n      fill: true,\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart.js Line Chart'\n      },\n    },\n    interaction: {\n      mode: 'index',\n      intersect: false\n    },\n    scales: {\n      x: {\n        display: true,\n        title: {\n          display: true,\n          text: 'Month'\n        }\n      },\n      y: {\n        display: true,\n        title: {\n          display: true,\n          text: 'Value'\n        }\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),t("h2",{attrs:{id:"docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[n._v("#")]),n._v(" Docs")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/general/data-structures.html"}},[n._v("Data structures ("),t("code",[n._v("labels")]),n._v(")")])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/charts/line.html"}},[n._v("Line")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/charts/line.html#line-styling"}},[n._v("Line Styling")])],1)])],1)])],1)}),[],!1,null,null,null);t.default=s.exports}}]);