(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),i=a(9),r=(a(0),a(202)),b={title:"Cartesian Axes"},l={id:"axes/cartesian/index",title:"Cartesian Axes",description:"Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line, bar, and bubble charts. Four cartesian axes are included in Chart.js by default.",source:"@site/docs/axes/cartesian/index.mdx",permalink:"/docs/master/axes/cartesian/index",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/cartesian/index.mdx",sidebar:"someSidebar",previous:{title:"Axes",permalink:"/docs/master/axes/index"},next:{title:"Category Axis",permalink:"/docs/master/axes/cartesian/category"}},c=[{value:"Common Configuration",id:"common-configuration",children:[{value:"Axis Position",id:"axis-position",children:[]},{value:"Tick Configuration",id:"tick-configuration",children:[]},{value:"Tick Alignment",id:"tick-alignment",children:[]},{value:"Axis ID",id:"axis-id",children:[]}]},{value:"Creating Multiple Axes",id:"creating-multiple-axes",children:[]}],o={rightToc:c};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line, bar, and bubble charts. Four cartesian axes are included in Chart.js by default."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/master/axes/cartesian/linear#linear-cartesian-axis"}),"linear")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/master/axes/cartesian/logarithmic#logarithmic-cartesian-axis"}),"logarithmic")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/master/axes/cartesian/category#category-cartesian-axis"}),"category")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/master/axes/cartesian/time#time-cartesian-axis"}),"time"))),Object(r.b)("h2",{id:"common-configuration"},"Common Configuration"),Object(r.b)("p",null,"All of the included cartesian axes support a number of common options. These options extend the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/axes/index#common-configuration"}),"common configuration available to all types of axes"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"position")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Position of the axis. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#axis-position"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"axis")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Which type of axis this is. Possible values are: ",Object(r.b)("inlineCode",{parentName:"td"},"'x'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'y'"),". If not set, this is inferred from the first character of the ID which should be ",Object(r.b)("inlineCode",{parentName:"td"},"'x'")," or ",Object(r.b)("inlineCode",{parentName:"td"},"'y'"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"min")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined minimum value for the scale, overrides minimum value from data.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"max")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User defined maximum value for the scale, overrides maximum value from data.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"offset")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to ",Object(r.b)("inlineCode",{parentName:"td"},"true")," for a bar chart by default.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"gridLines")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Grid line configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/styling#grid-line-configuration"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"scaleLabel")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale title configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/labelling#scale-title-configuration"}),"more..."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ticks")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tick configuration. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#tick-configuration"}),"more..."))))),Object(r.b)("h3",{id:"axis-position"},"Axis Position"),Object(r.b)("p",null,"An axis can either be positioned at the edge of the chart, at the center of the chart area, or dynamically with respect to a data value."),Object(r.b)("p",null,"To position the axis at the edge of the chart, set the ",Object(r.b)("inlineCode",{parentName:"p"},"position")," option to one of: ",Object(r.b)("inlineCode",{parentName:"p"},"'top'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'left'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'bottom'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'right'"),".\nTo position the axis at the center of the chart area, set the ",Object(r.b)("inlineCode",{parentName:"p"},"position")," option to ",Object(r.b)("inlineCode",{parentName:"p"},"'center'"),". In this mode, either the ",Object(r.b)("inlineCode",{parentName:"p"},"axis")," option is specified or the axis ID starts with the letter 'x' or 'y'.\nTo position the axis with respect to a data value, set the ",Object(r.b)("inlineCode",{parentName:"p"},"position")," option to an object such as:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    x: -20\n}\n")),Object(r.b)("p",null,'This will position the axis at a value of -20 on the axis with ID "x". For cartesian axes, only 1 axis may be specified.'),Object(r.b)("h3",{id:"tick-configuration"},"Tick Configuration"),Object(r.b)("p",null,"The following options are common to all cartesian axes but do not apply to other axes."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"alignment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'center'"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"crossAlignment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'near'"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"sampleSize")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ticks.length")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"autoSkip")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to ",Object(r.b)("inlineCode",{parentName:"td"},"maxRotation")," before skipping any. Turn ",Object(r.b)("inlineCode",{parentName:"td"},"autoSkip")," off to show all labels no matter what.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"autoSkipPadding")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Padding between the ticks on the horizontal axis when ",Object(r.b)("inlineCode",{parentName:"td"},"autoSkip")," is enabled.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"labelOffset")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Distance in pixels to offset the label from the centre point of the tick (in the x direction for the x axis, and the y direction for the y axis). ",Object(r.b)("em",{parentName:"td"},"Note: this can cause labels at the edges to be cropped by the edge of the canvas"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"maxRotation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"50")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. ",Object(r.b)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"minRotation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum rotation for tick labels. ",Object(r.b)("em",{parentName:"td"},"Note: Only applicable to horizontal scales."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mirror")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flips tick labels around axis, displaying the labels inside the chart instead of outside. ",Object(r.b)("em",{parentName:"td"},"Note: Only applicable to vertical scales."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"padding")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.")))),Object(r.b)("h3",{id:"tick-alignment"},"Tick Alignment"),Object(r.b)("p",null,"The alignment of ticks is primarily controlled using two settings on the tick configuration object: ",Object(r.b)("inlineCode",{parentName:"p"},"alignment")," and ",Object(r.b)("inlineCode",{parentName:"p"},"crossAlignment"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"alignment")," setting configures how labels align with the tick mark along the axis direction (i.e. horizontal for a horizontal axis and vertical for a vertical axis). The ",Object(r.b)("inlineCode",{parentName:"p"},"crossAlignment")," setting configures how labels align with the tick mark in the perpendicular direction (i.e. vertical for a horizontal axis and horizontal for a vertical axis). In the example below, the ",Object(r.b)("inlineCode",{parentName:"p"},"crossAlignment")," setting is used to left align the labels on the Y axis."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function exampleAlignment() {\n  useEffect(() => {\n    const cfg = {\n      type: 'bar',\n      data: {\n        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n        datasets: [{\n          axis: 'y',\n          label: 'My First Dataset',\n          data: [65, 59, 80, 81, 56, 55, 40],\n          fill: false,\n          backgroundColor: [\n            'rgba(255, 99, 132, 0.2)',\n            'rgba(255, 159, 64, 0.2)',\n            'rgba(255, 205, 86, 0.2)',\n            'rgba(75, 192, 192, 0.2)',\n            'rgba(54, 162, 235, 0.2)',\n            'rgba(153, 102, 255, 0.2)',\n            'rgba(201, 203, 207, 0.2)'\n          ],\n          borderColor: [\n            'rgb(255, 99, 132)',\n            'rgb(255, 159, 64)',\n            'rgb(255, 205, 86)',\n            'rgb(75, 192, 192)',\n            'rgb(54, 162, 235)',\n            'rgb(153, 102, 255)',\n            'rgb(201, 203, 207)'\n          ],\n          borderWidth: 1\n        }]\n      },\n      options: {\n        indexAxis: 'y',\n        scales: {\n          x: {\n            beginAtZero: true\n          },\n          y: {\n            ticks: {\n              crossAlignment: 'far',\n            }\n          }\n        }\n      }\n    };\n    new Chart(document.getElementById('chartjs-1').getContext('2d'), cfg);\n  });\n  return <div className=\"chartjs-wrapper\"><canvas id=\"chartjs-1\" className=\"chartjs\"></canvas></div>;\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," the ",Object(r.b)("inlineCode",{parentName:"p"},"crossAlignment")," setting is not used the the tick rotation is not ",Object(r.b)("inlineCode",{parentName:"p"},"0"),", the axis position is ",Object(r.b)("inlineCode",{parentName:"p"},"'center'")," or the position is with respect to a data value."),Object(r.b)("h3",{id:"axis-id"},"Axis ID"),Object(r.b)("p",null,"The properties ",Object(r.b)("inlineCode",{parentName:"p"},"dataset.xAxisID")," or ",Object(r.b)("inlineCode",{parentName:"p"},"dataset.yAxisID")," have to match to ",Object(r.b)("inlineCode",{parentName:"p"},"scales")," property. This is especially needed if multi-axes charts are used."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var myChart = new Chart(ctx, {\n    type: 'line',\n    data: {\n        datasets: [{\n            // This dataset appears on the first axis\n            yAxisID: 'first-y-axis'\n        }, {\n            // This dataset appears on the second axis\n            yAxisID: 'second-y-axis'\n        }]\n    },\n    options: {\n        scales: {\n            'first-y-axis': {\n                type: 'linear'\n            },\n            'second-y-axis': {\n                type: 'linear'\n            }]\n        }\n    }\n});\n")),Object(r.b)("h2",{id:"creating-multiple-axes"},"Creating Multiple Axes"),Object(r.b)("p",null,"With cartesian axes, it is possible to create multiple X and Y axes. To do so, you can add multiple configuration objects to the ",Object(r.b)("inlineCode",{parentName:"p"},"xAxes")," and ",Object(r.b)("inlineCode",{parentName:"p"},"yAxes")," properties. When adding new axes, it is important to ensure that you specify the type of the new axes as default types are ",Object(r.b)("strong",{parentName:"p"},"not")," used in this case."),Object(r.b)("p",null,"In the example below, we are creating two Y axes. We then use the ",Object(r.b)("inlineCode",{parentName:"p"},"yAxisID")," property to map the datasets to their correct axes."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var myChart = new Chart(ctx, {\n    type: 'line',\n    data: {\n        datasets: [{\n            data: [20, 50, 100, 75, 25, 0],\n            label: 'Left dataset',\n\n            // This binds the dataset to the left y axis\n            yAxisID: 'left-y-axis'\n        }, {\n            data: [0.1, 0.5, 1.0, 2.0, 1.5, 0],\n            label: 'Right dataset',\n\n            // This binds the dataset to the right y axis\n            yAxisID: 'right-y-axis'\n        }],\n        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']\n    },\n    options: {\n        scales: {\n            'left-y-axis': {\n                type: 'linear',\n                position: 'left'\n            },\n            'right-y-axis': {\n                type: 'linear',\n                position: 'right'\n            }]\n        }\n    }\n});\n")))}s.isMDXComponent=!0},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),s=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,j=d["".concat(b,".").concat(m)]||d[m]||p[m]||r;return a?i.a.createElement(j,l(l({ref:t},o),{},{components:a})):i.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<r;o++)b[o]=a[o];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);