(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{523:function(e,t,a){"use strict";a.r(t);var r=a(3),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_4-x-migration-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-x-migration-guide"}},[e._v("#")]),e._v(" 4.x Migration Guide")]),e._v(" "),t("p",[e._v("Chart.js 4.0 introduces a number of breaking changes. We tried keeping the amount of breaking changes to a minimum. For some features and bug fixes it was necessary to break backwards compatibility, but we aimed to do so only when worth the benefit.")]),e._v(" "),t("h2",{attrs:{id:"end-user-migration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#end-user-migration"}},[e._v("#")]),e._v(" End user migration")]),e._v(" "),t("h3",{attrs:{id:"charts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#charts"}},[e._v("#")]),e._v(" Charts")]),e._v(" "),t("ul",[t("li",[e._v("Charts don't override the default tooltip callbacks, so all chart types have the same-looking tooltips.")]),e._v(" "),t("li",[e._v("Default scale override has been removed if the configured scale starts with "),t("code",[e._v("x")]),e._v("/"),t("code",[e._v("y")]),e._v(". Defining "),t("code",[e._v("xAxes")]),e._v(" in your config will now create a second scale instead of overriding the default "),t("code",[e._v("x")]),e._v(" axis.")])]),e._v(" "),t("h3",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("p",[e._v("A number of changes were made to the configuration options passed to the "),t("code",[e._v("Chart")]),e._v(" constructor. Those changes are documented below.")]),e._v(" "),t("h4",{attrs:{id:"specific-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specific-changes"}},[e._v("#")]),e._v(" Specific changes")]),e._v(" "),t("ul",[t("li",[e._v("The radialLinear grid indexable and scriptable options don't decrease the index of the specified grid line anymore.")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("destroy")]),e._v(" plugin hook has been removed and replaced with "),t("code",[e._v("afterDestroy")]),e._v(".")]),e._v(" "),t("li",[e._v("Ticks callback on time scale now receives timestamp instead of a formatted label.")]),e._v(" "),t("li",[t("code",[e._v("scales[id].grid.drawBorder")]),e._v(" has been renamed to "),t("code",[e._v("scales[id].border.display")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("scales[id].grid.borderWidth")]),e._v(" has been renamed to "),t("code",[e._v("scales[id].border.width")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("scales[id].grid.borderColor")]),e._v(" has been renamed to "),t("code",[e._v("scales[id].border.color")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("scales[id].grid.borderDash")]),e._v(" has been renamed to "),t("code",[e._v("scales[id].border.dash")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("scales[id].grid.borderDashOffset")]),e._v(" has been renamed to "),t("code",[e._v("scales[id].border.dashOffset")]),e._v(".")]),e._v(" "),t("li",[e._v("The z index for the border of a scale is now configurable instead of being 1 higher as the grid z index.")]),e._v(" "),t("li",[e._v("Linear scales now add and subtracts "),t("code",[e._v("5%")]),e._v(" of the max value to the range if the min and max are the same instead of "),t("code",[e._v("1")]),e._v(".")]),e._v(" "),t("li",[e._v("If the tooltip callback returns "),t("code",[e._v("undefined")]),e._v(", then the default callback will be used.")]),e._v(" "),t("li",[t("code",[e._v("maintainAspectRatio")]),e._v(" respects container height.")]),e._v(" "),t("li",[e._v("Time and timeseries scales use "),t("code",[e._v("ticks.stepSize")]),e._v(" instead of "),t("code",[e._v("time.stepSize")]),e._v(", which has been removed.")]),e._v(" "),t("li",[t("code",[e._v("maxTickslimit")]),e._v(" won't be used for the ticks in "),t("code",[e._v("autoSkip")]),e._v(" if the determined max ticks is less then the "),t("code",[e._v("maxTicksLimit")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("dist/chart.js")]),e._v(" has been removed.")]),e._v(" "),t("li",[t("code",[e._v("dist/chart.min.js")]),e._v(" has been renamed to "),t("code",[e._v("dist/chart.umd.js")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("dist/chart.esm.js")]),e._v(" has been renamed to "),t("code",[e._v("dist/chart.js")]),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"type-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-changes"}},[e._v("#")]),e._v(" Type changes")]),e._v(" "),t("ul",[t("li",[e._v("The order of the "),t("code",[e._v("ChartMeta")]),e._v(" parameters have been changed from "),t("code",[e._v("<Element, DatasetElement, Type>")]),e._v(" to "),t("code",[e._v("<Type, Element, DatasetElement>")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"general"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[e._v("#")]),e._v(" General")]),e._v(" "),t("ul",[t("li",[e._v("Chart.js becomes an "),t("a",{attrs:{href:"https://nodejs.org/api/esm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESM-only package"),t("OutboundLink")],1),e._v(" ("),t("RouterLink",{attrs:{to:"/getting-started/installation.html#cdn"}},[e._v("the UMD bundle is still available")]),e._v("). To use Chart.js, your project should also be an ES module. Make sure to have this in your "),t("code",[e._v("package.json")]),e._v(":"),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"module"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),e._v("If you are experiencing problems with "),t("a",{attrs:{href:"https://jestjs.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jest"),t("OutboundLink")],1),e._v(", follow its "),t("a",{attrs:{href:"https://jestjs.io/docs/ecmascript-modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),t("OutboundLink")],1),e._v(" to enable the ESM support. Or, we can recommend you migrating to "),t("a",{attrs:{href:"https://vitest.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vitest"),t("OutboundLink")],1),e._v(". Vitest has the ESM support out of the box and "),t("a",{attrs:{href:"https://vitest.dev/guide/migration.html#migrating-from-jest",target:"_blank",rel:"noopener noreferrer"}},[e._v("almost the same API as Jest"),t("OutboundLink")],1),e._v(". See an "),t("a",{attrs:{href:"https://github.com/reactchartjs/react-chartjs-2/commit/7f3ec96101d21e43cae8cbfe5e09a46a17cff1ef",target:"_blank",rel:"noopener noreferrer"}},[e._v("example of migration"),t("OutboundLink")],1),e._v(".")],1),e._v(" "),t("li",[e._v("Removed fallback to "),t("code",[e._v("fontColor")]),e._v(" for the legend text and strikethrough color.")]),e._v(" "),t("li",[e._v("Removed "),t("code",[e._v("config._chart")]),e._v(" fallback for "),t("code",[e._v("this.chart")]),e._v(" in the filler plugin.")]),e._v(" "),t("li",[e._v("Removed "),t("code",[e._v("this._chart")]),e._v(" in the filler plugin.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);