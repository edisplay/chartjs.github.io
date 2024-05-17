(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{505:function(e,t,a){"use strict";a.r(t);var s=a(3),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"contributing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),t("p",[e._v("New contributions to the library are welcome, but we ask that you please follow these guidelines:")]),e._v(" "),t("ul",[t("li",[e._v("Before opening a PR for major additions or changes, please discuss the expected API and/or implementation by "),t("a",{attrs:{href:"https://github.com/chartjs/Chart.js/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("filing an issue"),t("OutboundLink")],1),e._v(" or asking about it in the "),t("a",{attrs:{href:"https://discord.gg/HxEguTK6av",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chart.js Discord"),t("OutboundLink")],1),e._v(" #dev channel. This will save you development time by getting feedback upfront and make reviews faster by giving the maintainers more context and details.")]),e._v(" "),t("li",[e._v("Consider whether your changes are useful for all users, or if creating a Chart.js "),t("RouterLink",{attrs:{to:"/developers/plugins.html"}},[e._v("plugin")]),e._v(" would be more appropriate.")],1),e._v(" "),t("li",[e._v("Check that your code will pass tests and "),t("code",[e._v("eslint")]),e._v(" code standards. "),t("code",[e._v("pnpm test")]),e._v(" will run both the linter and tests for you.")]),e._v(" "),t("li",[e._v("Add unit tests and document new functionality (in the "),t("code",[e._v("test/")]),e._v(" and "),t("code",[e._v("docs/")]),e._v(" directories respectively).")]),e._v(" "),t("li",[e._v("Avoid breaking changes unless there is an upcoming major release, which is infrequent. We encourage people to write plugins for the most new advanced features, and care a lot about backward compatibility.")]),e._v(" "),t("li",[e._v("We strongly prefer new methods to be added as private whenever possible. A method can be made private either by making a top-level "),t("code",[e._v("function")]),e._v(" outside of a class or by prefixing it with "),t("code",[e._v("_")]),e._v(" and adding "),t("code",[e._v("@private")]),e._v(" JSDoc if inside a class. Public APIs take considerable time to review and become locked once implemented as we have limited ability to change them without breaking backward compatibility. Private APIs allow the flexibility to address unforeseen cases.")])]),e._v(" "),t("h2",{attrs:{id:"joining-the-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#joining-the-project"}},[e._v("#")]),e._v(" Joining the project")]),e._v(" "),t("p",[e._v("Active committers and contributors are invited to introduce themselves and request commit access to this project. We have a very active Discord community that you can join "),t("a",{attrs:{href:"https://discord.gg/HxEguTK6av",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(". If you think you can help, we'd love to have you!")]),e._v(" "),t("h2",{attrs:{id:"building-and-testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-and-testing"}},[e._v("#")]),e._v(" Building and Testing")]),e._v(" "),t("p",[e._v("Firstly, we need to ensure development dependencies are installed. With node and pnpm installed, after cloning the Chart.js repo to a local directory, and navigating to that directory in the command line, we can run the following:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("pnpm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),t("p",[e._v("This will install the local development dependencies for Chart.js.")]),e._v(" "),t("p",[e._v("The following commands are now available from the repository root:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("pnpm")]),e._v(" run build             // build dist files "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" ./dist\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("pnpm")]),e._v(" run autobuild         // build and "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("watch")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" changes\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("pnpm")]),e._v(" run dev               // run tests and "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("watch")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" and "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" changes\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("pnpm")]),e._v(" run lint              // perform code linting "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ESLint, tsc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("pnpm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("                  // perform code linting and run unit tests with coverage\n")])])]),t("p",[t("code",[e._v("pnpm run dev")]),e._v(" and "),t("code",[e._v("pnpm test")]),e._v(" can be appended with a string that is used to match the spec filenames. For example: "),t("code",[e._v("pnpm run dev plugins")]),e._v(" will start karma in watch mode for "),t("code",[e._v("test/specs/**/*plugin*.js")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),t("p",[e._v("We use "),t("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress"),t("OutboundLink")],1),e._v(" to manage the docs which are contained as Markdown files in the docs directory. You can run the doc server locally using these commands:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("pnpm")]),e._v(" run docs:dev\n")])])]),t("h3",{attrs:{id:"image-based-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image-based-tests"}},[e._v("#")]),e._v(" Image-Based Tests")]),e._v(" "),t("p",[e._v("Some display-related functionality is difficult to test via typical Jasmine units. For this reason, we introduced image-based tests ("),t("a",{attrs:{href:"https://github.com/chartjs/Chart.js/pull/3988",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3988"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/chartjs/Chart.js/pull/5777",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5777"),t("OutboundLink")],1),e._v(") to assert that a chart is drawn pixel-for-pixel matching an expected image.")]),e._v(" "),t("p",[e._v("Generated charts in image-based tests should be "),t("strong",[e._v("as minimal as possible")]),e._v(" and focus only on the tested feature to prevent failure if another feature breaks (e.g. disable the title and legend when testing scales).")]),e._v(" "),t("p",[e._v("You can create a new image-based test by following the steps below:")]),e._v(" "),t("ul",[t("li",[e._v("Create a JS file ("),t("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/f7b671006a86201808402c3b6fe2054fe834fd4a/test/fixtures/controller.bubble/radius-scriptable.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),t("OutboundLink")],1),e._v(") or JSON file ("),t("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/4b421a50bfa17f73ac7aa8db7d077e674dbc148d/test/fixtures/plugin.filler/fill-line-dataset.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),t("OutboundLink")],1),e._v(") that defines chart config and generation options.")]),e._v(" "),t("li",[e._v("Add this file in "),t("code",[e._v("test/fixtures/{spec.name}/{feature-name}.json")]),e._v(".")]),e._v(" "),t("li",[e._v("Add a "),t("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/4b421a50bfa17f73ac7aa8db7d077e674dbc148d/test/specs/plugin.filler.tests.js#L10",target:"_blank",rel:"noopener noreferrer"}},[e._v("describe line"),t("OutboundLink")],1),e._v(" to the beginning of "),t("code",[e._v("test/specs/{spec.name}.tests.js")]),e._v(" if it doesn't exist yet.")]),e._v(" "),t("li",[e._v("Run "),t("code",[e._v("pnpm run dev")]),e._v(".")]),e._v(" "),t("li",[e._v("Click the "),t("em",[e._v('"Debug"')]),e._v(" button (top/right): a test should fail with the associated canvas visible.")]),e._v(" "),t("li",[e._v("Right-click on the chart and "),t("em",[e._v('"Save image as..."')]),e._v(" "),t("code",[e._v("test/fixtures/{spec.name}/{feature-name}.png")]),e._v(" making sure not to activate the tooltip or any hover functionality")]),e._v(" "),t("li",[e._v("Refresh the browser page ("),t("code",[e._v("CTRL+R")]),e._v("): test should now pass")]),e._v(" "),t("li",[e._v("Verify test relevancy by changing the feature values "),t("em",[e._v("slightly")]),e._v(" in the JSON file.")])]),e._v(" "),t("p",[e._v("Tests should pass in both browsers. In general, we've hidden all text in image tests since it's quite difficult to get them to pass between different browsers. As a result, it is recommended to hide all scales in image-based tests. It is also recommended to disable animations. If tests still do not pass, adjust "),t("a",{attrs:{href:"https://github.com/chartjs/Chart.js/blob/1ca0ffb5d5b6c2072176fd36fa85a58c483aa434/test/jasmine.matchers.js",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("tolerance")]),e._v(" and/or "),t("code",[e._v("threshold")]),t("OutboundLink")],1),e._v(" at the beginning of the JSON file keeping them "),t("strong",[e._v("as low as possible")]),e._v(".")]),e._v(" "),t("p",[e._v("When a test fails, the expected and actual images are shown. If you'd like to see the images even when the tests pass, set "),t("code",[e._v('"debug": true')]),e._v(" in the JSON file.")]),e._v(" "),t("h2",{attrs:{id:"bugs-and-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bugs-and-issues"}},[e._v("#")]),e._v(" Bugs and Issues")]),e._v(" "),t("p",[e._v("Please report these on the GitHub page - at "),t("a",{attrs:{href:"https://github.com/chartjs/Chart.js",target:"_blank"}},[e._v("github.com/chartjs/Chart.js")]),e._v(". Please do not use issues for support requests. For help using Chart.js, please take a look at the "),t("a",{attrs:{href:"https://stackoverflow.com/questions/tagged/chart.js",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("chart.js")]),t("OutboundLink")],1),e._v(" tag on Stack Overflow.")]),e._v(" "),t("p",[e._v("Well-structured, detailed bug reports are hugely valuable for the project.")]),e._v(" "),t("p",[e._v("Guidelines for reporting bugs:")]),e._v(" "),t("ul",[t("li",[e._v("Check the issue search to see if it has already been reported")]),e._v(" "),t("li",[e._v("Isolate the problem to a simple test case")]),e._v(" "),t("li",[e._v("Please include a demonstration of the bug on a website such as "),t("a",{attrs:{href:"https://jsbin.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JS Bin"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://jsfiddle.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JS Fiddle"),t("OutboundLink")],1),e._v(", or "),t("a",{attrs:{href:"https://codepen.io/pen/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Codepen"),t("OutboundLink")],1),e._v(". ("),t("a",{attrs:{href:"https://codepen.io/pen?template=wvezeOq",target:"_blank",rel:"noopener noreferrer"}},[e._v("Template"),t("OutboundLink")],1),e._v("). If filing a bug against "),t("code",[e._v("master")]),e._v(", you may reference the latest code via "),t("a",{attrs:{href:"https://www.chartjs.org/dist/master/chart.umd.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.chartjs.org/dist/master/chart.umd.js"),t("OutboundLink")],1),e._v(" (changing the filename to point at the file you need as appropriate). Do not rely on these files for production purposes as they may be removed at any time.")])]),e._v(" "),t("p",[e._v("Please provide any additional details associated with the bug, if it's browser or screen density specific, or only happens with a certain configuration or data.")])])}),[],!1,null,null,null);t.default=n.exports}}]);