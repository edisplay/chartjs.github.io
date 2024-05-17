(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{582:function(n,t,e){"use strict";e.r(t);var a=e(3),i=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"tick-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tick-configuration"}},[n._v("#")]),n._v(" Tick Configuration")]),n._v(" "),t("p",[n._v("This sample shows how to use different tick features to control how tick labels are shown on the X axis. These features include:")]),n._v(" "),t("ul",[t("li",[n._v("Multi-line labels")]),n._v(" "),t("li",[n._v("Filtering labels")]),n._v(" "),t("li",[n._v("Changing the tick color")]),n._v(" "),t("li",[n._v("Changing the tick alignment for the X axis")])]),n._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Alignment: start',\n    handler(chart) {\n      chart.options.scales.x.ticks.align = 'start';\n      chart.update();\n    }\n  },\n  {\n    name: 'Alignment: center (default)',\n    handler(chart) {\n      chart.options.scales.x.ticks.align = 'center';\n      chart.update();\n    }\n  },\n  {\n    name: 'Alignment: end',\n    handler(chart) {\n      chart.options.scales.x.ticks.align = 'end';\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n\n// <block:setup:1>\nconst DATA_COUNT = 12;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\nconst data = {\n  labels: [['June', '2015'], 'July', 'August', 'September', 'October', 'November', 'December', ['January', '2016'], 'February', 'March', 'April', 'May'],\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart with Tick Configuration'\n      }\n    },\n    scales: {\n      x: {\n        ticks: {\n          // For a category axis, the val is the index so the lookup via getLabelForValue is needed\n          callback: function(val, index) {\n            // Hide every 2nd tick label\n            return index % 2 === 0 ? this.getLabelForValue(val) : '';\n          },\n          color: 'red',\n        }\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}}),t("h2",{attrs:{id:"docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[n._v("#")]),n._v(" Docs")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/charts/line.html"}},[n._v("Line")])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/general/options.html"}},[n._v("Options")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[n._v("Scriptable Options")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/general/options.html#tick"}},[n._v("Tick Context")])],1)])],1)])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/general/data-structures.html"}},[n._v("Data structures ("),t("code",[n._v("labels")]),n._v(")")])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/axes/styling.html"}},[n._v("Axes Styling")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/axes/styling.html#tick-configuration"}},[n._v("Tick Configuration")])],1)])],1)])],1)}),[],!1,null,null,null);t.default=i.exports}}]);