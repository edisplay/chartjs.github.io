/*! For license information please see a4788a41.32f1eda3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(9),b=(a(0),a(202)),c=a(234),l=a(228),i={title:"Doughnut and Pie Charts"},o={id:"charts/doughnut",title:"Doughnut and Pie Charts",description:"Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.",source:"@site/docs/charts/doughnut.mdx",permalink:"/docs/next/charts/doughnut",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/charts/doughnut.mdx",sidebar:"someSidebar",previous:{title:"Radar Chart",permalink:"/docs/next/charts/radar"},next:{title:"Polar Area Chart",permalink:"/docs/next/charts/polar"}},d=[{value:"Dataset Properties",id:"dataset-properties",children:[{value:"General",id:"general",children:[]},{value:"Styling",id:"styling",children:[]},{value:"Border Alignment",id:"border-alignment",children:[]},{value:"Interactions",id:"interactions",children:[]}]},{value:"Config Options",id:"config-options",children:[]},{value:"Default Options",id:"default-options",children:[]},{value:"Data Structure",id:"data-structure",children:[]}],p={rightToc:d};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data."),Object(b.b)("p",null,"They are excellent at showing the relational proportions between data."),Object(b.b)("p",null,"Pie and doughnut charts are effectively the same class in Chart.js, but have one different default value - their ",Object(b.b)("inlineCode",{parentName:"p"},"cutoutPercentage"),". This equates to what percentage of the inner should be cut out. This defaults to ",Object(b.b)("inlineCode",{parentName:"p"},"0")," for pie charts, and ",Object(b.b)("inlineCode",{parentName:"p"},"50")," for doughnuts."),Object(b.b)("p",null,"They are also registered under two aliases in the ",Object(b.b)("inlineCode",{parentName:"p"},"Chart")," core. Other than their different default value, and different alias, they are exactly the same."),Object(b.b)(c.a,{defaultValue:"doughnut",values:[{label:"Doughnut",value:"doughnut"},{label:"Pie",value:"pie"}],mdxType:"Tabs"},Object(b.b)(l.a,{value:"doughnut",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function example() {\n  const canvas = useRef(null);\n  useEffect(() => {\n    const cfg = {\n      type: 'doughnut',\n      data: {\n        labels: [\n          'Red',\n          'Blue',\n          'Yellow'\n        ],\n        datasets: [{\n          label: 'My First Dataset',\n          data: [300, 50, 100],\n          backgroundColor: [\n            'rgb(255, 99, 132)',\n            'rgb(54, 162, 235)',\n            'rgb(255, 205, 86)'\n          ],\n          hoverOffset: 4\n        }]\n      }\n    };\n    const chart = new Chart(canvas.current.getContext('2d'), cfg);\n    return () => chart.destroy();\n  });\n  return <div className=\"chartjs-wrapper\"><canvas ref={canvas} className=\"chartjs\"></canvas></div>;\n}\n"))),Object(b.b)(l.a,{value:"pie",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function example() {\n  const canvas = useRef(null);\n  useEffect(() => {\n    const cfg = {\n      type: 'pie',\n      data: {\n        labels: [\n          'Red',\n          'Blue',\n          'Yellow'\n        ],\n        datasets: [{\n          label: 'My First Dataset',\n          data: [300, 50, 100],\n          backgroundColor: [\n            'rgb(255, 99, 132)',\n            'rgb(54, 162, 235)',\n            'rgb(255, 205, 86)'\n          ],\n          hoverOffset: 4\n        }]\n      }\n    };\n    const chart = new Chart(canvas.current.getContext('2d'), cfg);\n    return () => chart.destroy();\n  });\n  return <div className=\"chartjs-wrapper\"><canvas ref={canvas} className=\"chartjs\"></canvas></div>;\n}\n")))),Object(b.b)("h2",{id:"dataset-properties"},"Dataset Properties"),Object(b.b)("p",null,"The doughnut/pie chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colours of the dataset's arcs are generally set this way."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/next/general/options#scriptable-options"}),"Scriptable")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/next/general/options#indexable-options"}),"Indexable")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(b.b)("inlineCode",{parentName:"a"},"backgroundColor"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(b.b)("inlineCode",{parentName:"a"},"Color"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'rgba(0, 0, 0, 0.1)'"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#border-alignment"}),Object(b.b)("inlineCode",{parentName:"a"},"borderAlign"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'center'"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(b.b)("inlineCode",{parentName:"a"},"borderColor"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(b.b)("inlineCode",{parentName:"a"},"Color"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'#fff'"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(b.b)("inlineCode",{parentName:"a"},"borderWidth"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"2"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),"'circumference`")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"undefined"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(b.b)("inlineCode",{parentName:"a"},"clip"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"number","|","object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"undefined"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#data-structure"}),Object(b.b)("inlineCode",{parentName:"a"},"data"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number[]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"required"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#interations"}),Object(b.b)("inlineCode",{parentName:"a"},"hoverBackgroundColor"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(b.b)("inlineCode",{parentName:"a"},"Color"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"undefined"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(b.b)("inlineCode",{parentName:"a"},"hoverBorderColor"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(b.b)("inlineCode",{parentName:"a"},"Color"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"undefined"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(b.b)("inlineCode",{parentName:"a"},"hoverBorderWidth"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"undefined"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(b.b)("inlineCode",{parentName:"a"},"hoverOffset"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(b.b)("inlineCode",{parentName:"a"},"offset"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(b.b)("inlineCode",{parentName:"a"},"rotation"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"undefined"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(b.b)("inlineCode",{parentName:"a"},"weight"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1"))))),Object(b.b)("h3",{id:"general"},"General"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"circumference")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Per-dataset override for the sweep that the arcs cover")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"clip")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. ",Object(b.b)("inlineCode",{parentName:"td"},"0")," = clip at chartArea. Clipping can also be configured per side: ",Object(b.b)("inlineCode",{parentName:"td"},"clip: {left: 5, top: false, right: -2, bottom: 0}"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rotation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Per-dataset override for the starting angle to draw arcs from")))),Object(b.b)("h3",{id:"styling"},"Styling"),Object(b.b)("p",null,"The style of each arc can be controlled with the following properties:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"backgroundColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc background color.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border color.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderWidth")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border width (in pixels).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"offset")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc offset (in pixels).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"weight")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.")))),Object(b.b)("p",null,"All these values, if ",Object(b.b)("inlineCode",{parentName:"p"},"undefined"),", fallback to the associated ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/configuration/elements#arc-configuration"}),Object(b.b)("inlineCode",{parentName:"a"},"elements.arc.*"))," options."),Object(b.b)("h3",{id:"border-alignment"},"Border Alignment"),Object(b.b)("p",null,"The following values are supported for ",Object(b.b)("inlineCode",{parentName:"p"},"borderAlign"),"."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'center'")," (default)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'inner'"))),Object(b.b)("p",null,"When ",Object(b.b)("inlineCode",{parentName:"p"},"'center'")," is set, the borders of arcs next to each other will overlap. When ",Object(b.b)("inlineCode",{parentName:"p"},"'inner'")," is set, it is guaranteed that all borders will not overlap."),Object(b.b)("h3",{id:"interactions"},"Interactions"),Object(b.b)("p",null,"The interaction with each arc can be controlled with the following properties:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hoverBackgroundColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc background color when hovered.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hoverBorderColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border color when hovered.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hoverBorderWidth")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc border width when hovered (in pixels).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hoverOffset")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"arc offset when hovered (in pixels).")))),Object(b.b)("p",null,"All these values, if ",Object(b.b)("inlineCode",{parentName:"p"},"undefined"),", fallback to the associated ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/configuration/elements#arc-configuration"}),Object(b.b)("inlineCode",{parentName:"a"},"elements.arc.*"))," options."),Object(b.b)("h2",{id:"config-options"},"Config Options"),Object(b.b)("p",null,"These are the customisation options specific to Pie & Doughnut charts. These options are merged with the global chart configuration options, and form the options of the chart."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cutoutPercentage")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"50")," - for doughnut, ",Object(b.b)("inlineCode",{parentName:"td"},"0")," - for pie"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The percentage of the chart that is cut out of the middle.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rotation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"-0.5 * Math.PI")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starting angle to draw arcs from.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"circumference")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"2 * Math.PI")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sweep to allow arcs to cover.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"animation.animateRotate")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the chart will animate in with a rotation animation. This property is in the ",Object(b.b)("inlineCode",{parentName:"td"},"options.animation")," object.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"animation.animateScale")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, will animate scaling the chart from the center outwards.")))),Object(b.b)("h2",{id:"default-options"},"Default Options"),Object(b.b)("p",null,"We can also change these default values for each Doughnut type that is created, this object is available at ",Object(b.b)("inlineCode",{parentName:"p"},"Chart.defaults.controllers.doughnut"),". Pie charts also have a clone of these defaults available to change at ",Object(b.b)("inlineCode",{parentName:"p"},"Chart.defaults.controllers.pie"),", with the only difference being ",Object(b.b)("inlineCode",{parentName:"p"},"cutoutPercentage")," being set to 0."),Object(b.b)("h2",{id:"data-structure"},"Data Structure"),Object(b.b)("p",null,"For a pie chart, datasets need to contain an array of data points. The data points should be a number, Chart.js will total all of the numbers and calculate the relative proportion of each."),Object(b.b)("p",null,"You also need to specify an array of labels so that tooltips appear correctly."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"data = {\n    datasets: [{\n        data: [10, 20, 30]\n    }],\n\n    // These labels appear in the legend and in the tooltips when hovering different arcs\n    labels: [\n        'Red',\n        'Yellow',\n        'Blue'\n    ]\n};\n")))}O.isMDXComponent=!0},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),j=n,u=p["".concat(c,".").concat(j)]||p[j]||O[j]||b;return a?r.a.createElement(u,l(l({ref:t},o),{},{components:a})):r.a.createElement(u,l({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},204:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var b=typeof n;if("string"===b||"number"===b)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===b)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},213:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},228:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},234:function(e,t,a){"use strict";a(24),a(20),a(18);var n=a(0),r=a.n(n),b=a(213);var c=function(){return Object(n.useContext)(b.a)},l=a(204),i=a.n(l),o=a(129),d=a.n(o),p=37,O=39;t.a=function(e){var t=e.block,a=e.children,b=e.defaultValue,l=e.values,o=e.groupId,j=c(),u=j.tabGroupChoices,m=j.setTabGroupChoices,s=Object(n.useState)(b),N=s[0],h=s[1];if(null!=o){var g=u[o];null!=g&&g!==N&&h(g)}var f=function(e){h(e),null!=o&&m(o,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":N===t,className:i()("tabs__item",d.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case O:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return f(t)},onClick:function(){return f(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===N}))[0]))}}}]);