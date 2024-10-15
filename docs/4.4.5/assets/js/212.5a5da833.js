(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{548:function(n,e,o){"use strict";o.r(e);var t=o(3),a=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[n._v("#")]),n._v(" Events")]),n._v(" "),e("p",[n._v("This sample demonstrates how to use the event hooks to highlight chart elements.")]),n._v(" "),e("chart-editor",{attrs:{code:"\n// <block:data:3>\nconst data = {\n  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n  datasets: [{\n    label: '# of Votes',\n    data: [12, 19, 3, 5, 2, 3],\n    borderWidth: 1,\n    backgroundColor: ['#CB4335', '#1F618D', '#F1C40F', '#27AE60', '#884EA0', '#D35400'],\n  }]\n};\n// </block:data>\n\n// <block:handleHover:1>\n// Append '4d' to the colors (alpha channel), except for the hovered index\nfunction handleHover(evt, item, legend) {\n  legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {\n    colors[index] = index === item.index || color.length === 9 ? color : color + '4D';\n  });\n  legend.chart.update();\n}\n// </block:handleHover>\n\n// <block:handleLeave:2>\n// Removes the alpha channel from background colors\nfunction handleLeave(evt, item, legend) {\n  legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {\n    colors[index] = color.length === 9 ? color.slice(0, -2) : color;\n  });\n  legend.chart.update();\n}\n// </block:handleLeave>\n\n// <block:config:0>\nconst config = {\n  type: 'pie',\n  data: data,\n  options: {\n    plugins: {\n      legend: {\n        onHover: handleHover,\n        onLeave: handleLeave\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  config\n};\n"}}),e("h2",{attrs:{id:"docs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[n._v("#")]),n._v(" Docs")]),n._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/charts/doughnut.html"}},[n._v("Doughnut and Pie Charts")])],1),n._v(" "),e("li",[e("RouterLink",{attrs:{to:"/configuration/legend.html"}},[n._v("Legend")]),n._v(" "),e("ul",[e("li",[e("code",[n._v("onHover")])]),n._v(" "),e("li",[e("code",[n._v("onLeave")])])])],1)])],1)}),[],!1,null,null,null);e.default=a.exports}}]);