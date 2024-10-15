(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{473:function(t,a,e){"use strict";e.r(a);var s=e(3),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"time-cartesian-axis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-cartesian-axis"}},[t._v("#")]),t._v(" Time Cartesian Axis")]),t._v(" "),a("p",[t._v("The time scale is used to display times and dates. Data are spread according to the amount of time between data points. When building its ticks, it will automatically calculate the most comfortable unit based on the size of the scale.")]),t._v(" "),a("h2",{attrs:{id:"date-adapters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-adapters"}},[t._v("#")]),t._v(" Date Adapters")]),t._v(" "),a("p",[t._v("The time scale "),a("strong",[t._v("requires")]),t._v(" both a date library and a corresponding adapter to be present. Please choose from the "),a("a",{attrs:{href:"https://github.com/chartjs/awesome#adapters",target:"_blank",rel:"noopener noreferrer"}},[t._v("available adapters"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"data-sets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-sets"}},[t._v("#")]),t._v(" Data Sets")]),t._v(" "),a("h3",{attrs:{id:"input-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-data"}},[t._v("#")]),t._v(" Input Data")]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/general/data-structures.html"}},[t._v("data structures")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"date-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-formats"}},[t._v("#")]),t._v(" Date Formats")]),t._v(" "),a("p",[t._v("When providing data for the time scale, Chart.js uses timestamps defined as milliseconds since the epoch (midnight January 1, 1970, UTC) internally. However, Chart.js also supports all of the formats that your chosen date adapter accepts. You should use timestamps if you'd like to set "),a("code",[t._v("parsing: false")]),t._v(" for better performance.")]),t._v(" "),a("h2",{attrs:{id:"configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration Options")]),t._v(" "),a("h3",{attrs:{id:"time-axis-specific-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-axis-specific-options"}},[t._v("#")]),t._v(" Time Axis specific options")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("min")])]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The minimum item to display. "),a("a",{attrs:{href:"#min-max-configuration"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("max")])]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The maximum item to display. "),a("a",{attrs:{href:"#min-max-configuration"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMin")])]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The minimum item to display if there is no datapoint before it. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMax")])]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The maximum item to display if there is no datapoint behind it. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("adapters.date")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td",[a("code",[t._v("{}")])]),t._v(" "),a("td",[t._v("Options for adapter for external date library if that adapter needs or supports options")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("bounds")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'data'")])]),t._v(" "),a("td",[t._v("Determines the scale bounds. "),a("RouterLink",{attrs:{to:"/axes/cartesian/#scale-bounds"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("offsetAfterAutoskip")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If true, bar chart offsets are computed with auto skipped ticks.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ticks.source")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'auto'")])]),t._v(" "),a("td",[t._v("How ticks are generated. "),a("a",{attrs:{href:"#ticks-source"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("time.displayFormats")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Sets how different time units are displayed. "),a("a",{attrs:{href:"#display-formats"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("time.isoWeekday")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If "),a("code",[t._v("boolean")]),t._v(" and true and the unit is set to 'week', then the first day of the week will be Monday. Otherwise, it will be Sunday. If "),a("code",[t._v("number")]),t._v(", the index of the first day of the week (0 - Sunday, 6 - Saturday)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("time.parser")])]),t._v(" "),a("td",[a("code",[t._v("string")]),t._v("|"),a("code",[t._v("function")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Custom parser for dates. "),a("a",{attrs:{href:"#parser"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("time.round")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If defined, dates will be rounded to the start of this unit. See "),a("a",{attrs:{href:"#time-units"}},[t._v("Time Units")]),t._v(" below for the allowed units.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("time.tooltipFormat")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The format string to use for the tooltip.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("time.unit")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If defined, will force the unit to be a certain type. See "),a("a",{attrs:{href:"#time-units"}},[t._v("Time Units")]),t._v(" section below for details.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("time.minUnit")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'millisecond'")])]),t._v(" "),a("td",[t._v("The minimum display format to be used for a time unit.")])])])]),t._v(" "),a("h3",{attrs:{id:"common-options-to-all-cartesian-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-cartesian-axes"}},[t._v("#")]),t._v(" Common options to all cartesian axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("bounds")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'ticks'")])]),t._v(" "),a("td",[t._v("Determines the scale bounds. "),a("RouterLink",{attrs:{to:"/axes/cartesian/#scale-bounds"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("clip")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, clip the dataset drawing against the size of the scale instead of chart area")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("position")])]),t._v(" "),a("td",[a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Position of the axis. "),a("RouterLink",{attrs:{to:"/axes/cartesian/#axis-position"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stack")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Stack group. Axes at the same "),a("code",[t._v("position")]),t._v(" with same "),a("code",[t._v("stack")]),t._v(" are stacked.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stackWeight")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("Weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Which type of axis this is. Possible values are: "),a("code",[t._v("'x'")]),t._v(", "),a("code",[t._v("'y'")]),t._v(". If not set, this is inferred from the first character of the ID which should be "),a("code",[t._v("'x'")]),t._v(" or "),a("code",[t._v("'y'")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("offset")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to "),a("code",[t._v("true")]),t._v(" for a bar chart by default.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("title")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Scale title configuration. "),a("RouterLink",{attrs:{to:"/axes/labelling.html#scale-title-configuration"}},[t._v("more...")])],1)])])]),t._v(" "),a("h3",{attrs:{id:"common-options-to-all-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-axes"}},[t._v("#")]),t._v(" Common options to all axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("type")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("alignToPixels")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Align pixel values to device pixels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("backgroundColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Background color of the scale area.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("border")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Border configuration. "),a("RouterLink",{attrs:{to:"/axes/styling.html#border-configuration"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Controls the axis global visibility (visible when "),a("code",[t._v("true")]),t._v(", hidden when "),a("code",[t._v("false")]),t._v("). When "),a("code",[t._v("display: 'auto'")]),t._v(", the axis is visible only if at least one associated dataset is visible.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("grid")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Grid line configuration. "),a("RouterLink",{attrs:{to:"/axes/styling.html#grid-line-configuration"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("min")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined minimum number for the scale, overrides minimum value from data. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("max")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined maximum number for the scale, overrides maximum value from data. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("reverse")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Reverse the scale.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stacked")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Should the data be stacked. "),a("RouterLink",{attrs:{to:"/axes/#stacking"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMax")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the maximum data value. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMin")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the minimum data value. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ticks")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Tick configuration. "),a("RouterLink",{attrs:{to:"/axes/#tick-configuration"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("weight")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("The weight used to sort the axis. Higher weights are further away from the chart area.")])])])]),t._v(" "),a("h4",{attrs:{id:"time-units"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-units"}},[t._v("#")]),t._v(" Time Units")]),t._v(" "),a("p",[t._v("The following time measurements are supported. The names can be passed as strings to the "),a("code",[t._v("time.unit")]),t._v(" config option to force a certain unit.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("'millisecond'")])]),t._v(" "),a("li",[a("code",[t._v("'second'")])]),t._v(" "),a("li",[a("code",[t._v("'minute'")])]),t._v(" "),a("li",[a("code",[t._v("'hour'")])]),t._v(" "),a("li",[a("code",[t._v("'day'")])]),t._v(" "),a("li",[a("code",[t._v("'week'")])]),t._v(" "),a("li",[a("code",[t._v("'month'")])]),t._v(" "),a("li",[a("code",[t._v("'quarter'")])]),t._v(" "),a("li",[a("code",[t._v("'year'")])])]),t._v(" "),a("p",[t._v("For example, to create a chart with a time scale that always displayed units per month, the following config could be used.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("unit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'month'")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"display-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-formats"}},[t._v("#")]),t._v(" Display Formats")]),t._v(" "),a("p",[t._v("You may specify a map of display formats with a key for each unit:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("millisecond")])]),t._v(" "),a("li",[a("code",[t._v("second")])]),t._v(" "),a("li",[a("code",[t._v("minute")])]),t._v(" "),a("li",[a("code",[t._v("hour")])]),t._v(" "),a("li",[a("code",[t._v("day")])]),t._v(" "),a("li",[a("code",[t._v("week")])]),t._v(" "),a("li",[a("code",[t._v("month")])]),t._v(" "),a("li",[a("code",[t._v("quarter")])]),t._v(" "),a("li",[a("code",[t._v("year")])])]),t._v(" "),a("p",[t._v("The format string used as a value depends on the date adapter you chose to use.")]),t._v(" "),a("p",[t._v("For example, to set the display format for the "),a("code",[t._v("quarter")]),t._v(" unit to show the month and year, the following config might be passed to the chart constructor.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("displayFormats")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("quarter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MMM YYYY'")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"ticks-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ticks-source"}},[t._v("#")]),t._v(" Ticks Source")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("ticks.source")]),t._v(" property controls the ticks generation.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("'auto'")]),t._v(': generates "optimal" ticks based on scale size and time options')]),t._v(" "),a("li",[a("code",[t._v("'data'")]),t._v(": generates ticks from data (including labels from data "),a("code",[t._v("{x|y}")]),t._v(" objects)")]),t._v(" "),a("li",[a("code",[t._v("'labels'")]),t._v(": generates ticks from user given "),a("code",[t._v("labels")]),t._v(" ONLY")])]),t._v(" "),a("h4",{attrs:{id:"parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parser"}},[t._v("#")]),t._v(" Parser")]),t._v(" "),a("p",[t._v("If this property is defined as a string, it is interpreted as a custom format to be used by the date adapter to parse the date.")]),t._v(" "),a("p",[t._v("If this is a function, it must return a type that can be handled by your date adapter's "),a("code",[t._v("parse")]),t._v(" method.")]),t._v(" "),a("h2",{attrs:{id:"min-max-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#min-max-configuration"}},[t._v("#")]),t._v(" Min Max Configuration")]),t._v(" "),a("p",[t._v("For both the "),a("code",[t._v("min")]),t._v(" and "),a("code",[t._v("max")]),t._v(" properties, the value must be "),a("code",[t._v("string")]),t._v(" that is parsable by your date adapter or a number with the amount of milliseconds that have elapsed since UNIX epoch.\nIn the example below the x axis will start at 7 November 2021.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasets")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-11-06 23:39:30'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-11-07 01:00:28'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-11-07 09:00:28'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-11-07 00:00:00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"changing-the-scale-type-from-time-scale-to-logarithmic-linear-scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-scale-type-from-time-scale-to-logarithmic-linear-scale"}},[t._v("#")]),t._v(" Changing the scale type from Time scale to Logarithmic/Linear scale.")]),t._v(" "),a("p",[t._v("When changing the scale type from Time scale to Logarithmic/Linear scale, you need to add "),a("code",[t._v("bounds: 'ticks'")]),t._v(" to the scale options. Changing the "),a("code",[t._v("bounds")]),t._v(" parameter is necessary because its default value is the "),a("code",[t._v("'data'")]),t._v(" for the Time scale.")]),t._v(" "),a("p",[t._v("Initial config:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Scale update:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logarithmic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bounds")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ticks'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"internal-data-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-data-format"}},[t._v("#")]),t._v(" Internal data format")]),t._v(" "),a("p",[t._v("Internally time scale uses milliseconds since epoch")])])}),[],!1,null,null,null);a.default=r.exports}}]);