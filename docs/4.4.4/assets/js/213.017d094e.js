(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{551:function(n,t,e){"use strict";e.r(t);var i=e(3),l=Object(i.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"html-legend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-legend"}},[n._v("#")]),n._v(" HTML Legend")]),n._v(" "),t("p",[n._v("This example shows how to create a custom HTML legend using a plugin and connect it to the chart in lieu of the default on-canvas legend."),t("br"),n._v("\nFor an html legend to work you need to place an empty div at your web page with the ID you provide in the options to bind to like so: "),t("code",[n._v('<div id="legend-container"></div>')]),n._v(".")]),n._v(" "),t("div",{attrs:{id:"legend-container"}}),n._v(" "),t("chart-editor",{attrs:{code:"// <block:plugin:0>\nconst getOrCreateLegendList = (chart, id) => {\n  const legendContainer = document.getElementById(id);\n  let listContainer = legendContainer.querySelector('ul');\n\n  if (!listContainer) {\n    listContainer = document.createElement('ul');\n    listContainer.style.display = 'flex';\n    listContainer.style.flexDirection = 'row';\n    listContainer.style.margin = 0;\n    listContainer.style.padding = 0;\n\n    legendContainer.appendChild(listContainer);\n  }\n\n  return listContainer;\n};\n\nconst htmlLegendPlugin = {\n  id: 'htmlLegend',\n  afterUpdate(chart, args, options) {\n    const ul = getOrCreateLegendList(chart, options.containerID);\n\n    // Remove old legend items\n    while (ul.firstChild) {\n      ul.firstChild.remove();\n    }\n\n    // Reuse the built-in legendItems generator\n    const items = chart.options.plugins.legend.labels.generateLabels(chart);\n\n    items.forEach(item => {\n      const li = document.createElement('li');\n      li.style.alignItems = 'center';\n      li.style.cursor = 'pointer';\n      li.style.display = 'flex';\n      li.style.flexDirection = 'row';\n      li.style.marginLeft = '10px';\n\n      li.onclick = () => {\n        const {type} = chart.config;\n        if (type === 'pie' || type === 'doughnut') {\n          // Pie and doughnut charts only have a single dataset and visibility is per item\n          chart.toggleDataVisibility(item.index);\n        } else {\n          chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));\n        }\n        chart.update();\n      };\n\n      // Color box\n      const boxSpan = document.createElement('span');\n      boxSpan.style.background = item.fillStyle;\n      boxSpan.style.borderColor = item.strokeStyle;\n      boxSpan.style.borderWidth = item.lineWidth + 'px';\n      boxSpan.style.display = 'inline-block';\n      boxSpan.style.flexShrink = 0;\n      boxSpan.style.height = '20px';\n      boxSpan.style.marginRight = '10px';\n      boxSpan.style.width = '20px';\n\n      // Text\n      const textContainer = document.createElement('p');\n      textContainer.style.color = item.fontColor;\n      textContainer.style.margin = 0;\n      textContainer.style.padding = 0;\n      textContainer.style.textDecoration = item.hidden ? 'line-through' : '';\n\n      const text = document.createTextNode(item.text);\n      textContainer.appendChild(text);\n\n      li.appendChild(boxSpan);\n      li.appendChild(textContainer);\n      ul.appendChild(li);\n    });\n  }\n};\n// </block:plugin>\n\n// <block:data:1>\nconst NUM_DATA = 7;\nconst NUM_CFG = {count: NUM_DATA, min: 0, max: 100};\nconst data = {\n  labels: Utils.months({count: NUM_DATA}),\n  datasets: [\n    {\n      label: 'Dataset: 1',\n      data: Utils.numbers(NUM_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      fill: false,\n    },\n    {\n      label: 'Dataset: 1',\n      data: Utils.numbers(NUM_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n      fill: false,\n    },\n  ],\n};\n// </block:data>\n\n// <block:setup:2>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      htmlLegend: {\n        // ID of the container to put the legend in\n        containerID: 'legend-container',\n      },\n      legend: {\n        display: false,\n      }\n    }\n  },\n  plugins: [htmlLegendPlugin],\n};\n// </block:setup>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),t("h2",{attrs:{id:"docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[n._v("#")]),n._v(" Docs")]),n._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/general/data-structures.html"}},[n._v("Data structures ("),t("code",[n._v("labels")]),n._v(")")])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/charts/line.html"}},[n._v("Line")])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/configuration/legend.html"}},[n._v("Legend")]),n._v(" "),t("ul",[t("li",[t("code",[n._v("display: false")])])])],1),n._v(" "),t("li",[t("RouterLink",{attrs:{to:"/developers/plugins.html"}},[n._v("Plugins")])],1)])],1)}),[],!1,null,null,null);t.default=l.exports}}]);