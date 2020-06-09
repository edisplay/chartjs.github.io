(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(9),r=(a(0),a(200)),s={title:"API"},l={id:"developers/api",title:"API",description:"For each chart, there are a set of global prototype methods on the shared chart type which you may find useful. These are available on all charts created with Chart.js, but for the examples, let's use a line chart we've made.",source:"@site/docs/developers/api.md",permalink:"/docs/master/developers/api",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/developers/api.md",sidebar:"someSidebar",previous:{title:"Developers",permalink:"/docs/master/developers/index"},next:{title:"Updating Charts",permalink:"/docs/master/developers/updates"}},o=[{value:".destroy()",id:"destroy",children:[]},{value:".update(mode)",id:"updatemode",children:[]},{value:".reset()",id:"reset",children:[]},{value:".render()",id:"render",children:[]},{value:".stop()",id:"stop",children:[]},{value:".resize()",id:"resize",children:[]},{value:".clear()",id:"clear",children:[]},{value:".toBase64Image()",id:"tobase64image",children:[]},{value:".getElementAtEvent(e)",id:"getelementatevente",children:[]},{value:".getElementsAtEvent(e)",id:"getelementsatevente",children:[]},{value:".getDatasetAtEvent(e)",id:"getdatasetatevente",children:[]},{value:".getDatasetMeta(index)",id:"getdatasetmetaindex",children:[]},{value:"setDatasetVisibility(datasetIndex, visibility)",id:"setdatasetvisibilitydatasetindex-visibility",children:[]},{value:"toggleDataVisibility(index)",id:"toggledatavisibilityindex",children:[]},{value:"getDataVisibility(index)",id:"getdatavisibilityindex",children:[]},{value:"hide(datasetIndex)",id:"hidedatasetindex",children:[]},{value:"show(datasetIndex)",id:"showdatasetindex",children:[]}],c={rightToc:o};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For each chart, there are a set of global prototype methods on the shared chart type which you may find useful. These are available on all charts created with Chart.js, but for the examples, let's use a line chart we've made."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// For example:\nvar myLineChart = new Chart(ctx, config);\n")),Object(r.b)("h2",{id:"destroy"},".destroy()"),Object(r.b)("p",null,"Use this to destroy any chart instances that are created. This will clean up any references stored to the chart object within Chart.js, along with any associated event listeners attached by Chart.js.\nThis must be called before the canvas is reused for a new chart."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// Destroys a specific chart instance\nmyLineChart.destroy();\n")),Object(r.b)("h2",{id:"updatemode"},".update(mode)"),Object(r.b)("p",null,"Triggers an update of the chart. This can be safely called after updating the data object. This will update all scales, legends, and then re-render the chart."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"myLineChart.data.datasets[0].data[2] = 50; // Would update the first dataset's value of 'March' to be 50\nmyLineChart.update(); // Calling update now animates the position of March from 90 to 50.\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," replacing the data reference (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"myLineChart.data = {datasets: [...]}")," only works starting ",Object(r.b)("strong",{parentName:"p"},"version 2.6"),". Prior that, replacing the entire data object could be achieved with the following workaround: ",Object(r.b)("inlineCode",{parentName:"p"},"myLineChart.config.data = {datasets: [...]}"),".")),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"mode")," string can be provided to indicate what should be updated and what animation configuration should be used. Core calls this method using any of ",Object(r.b)("inlineCode",{parentName:"p"},"'active'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'hide'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'reset'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'resize'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'show'")," or ",Object(r.b)("inlineCode",{parentName:"p"},"undefined"),". ",Object(r.b)("inlineCode",{parentName:"p"},"'none'")," is also a supported mode for skipping animations for single update. Please see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/configuration/animations"}),"animations")," docs for more details."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"myChart.update();\n")),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/developers/updates"}),"Updating Charts")," for more details."),Object(r.b)("h2",{id:"reset"},".reset()"),Object(r.b)("p",null,"Reset the chart to it's state before the initial animation. A new animation can then be triggered using ",Object(r.b)("inlineCode",{parentName:"p"},"update"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"myLineChart.reset();\n")),Object(r.b)("h2",{id:"render"},".render()"),Object(r.b)("p",null,"Triggers a redraw of all chart elements. Note, this does not update elements for new data. Use ",Object(r.b)("inlineCode",{parentName:"p"},".update()")," in that case."),Object(r.b)("h2",{id:"stop"},".stop()"),Object(r.b)("p",null,"Use this to stop any current animation. This will pause the chart during any current animation frame. Call ",Object(r.b)("inlineCode",{parentName:"p"},".render()")," to re-animate."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// Stops the charts animation loop at its current frame\nmyLineChart.stop();\n// => returns 'this' for chainability\n")),Object(r.b)("h2",{id:"resize"},".resize()"),Object(r.b)("p",null,"Use this to manually resize the canvas element. This is run each time the canvas container is resized, but you can call this method manually if you change the size of the canvas nodes container element."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// Resizes & redraws to fill its container element\nmyLineChart.resize();\n// => returns 'this' for chainability\n")),Object(r.b)("h2",{id:"clear"},".clear()"),Object(r.b)("p",null,"Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// Will clear the canvas that myLineChart is drawn on\nmyLineChart.clear();\n// => returns 'this' for chainability\n")),Object(r.b)("h2",{id:"tobase64image"},".toBase64Image()"),Object(r.b)("p",null,"This returns a base 64 encoded string of the chart in it's current state."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"myLineChart.toBase64Image();\n// => returns png data url of the image on the canvas\n")),Object(r.b)("h2",{id:"getelementatevente"},".getElementAtEvent(e)"),Object(r.b)("p",null,"Calling ",Object(r.b)("inlineCode",{parentName:"p"},"getElementAtEvent(event)")," on your Chart instance passing an argument of an event, or jQuery event, will return the single element at the event position. If there are multiple items within range, only the first is returned. The value returned from this method is an array with a single parameter. An array is used to keep a consistent API between the ",Object(r.b)("inlineCode",{parentName:"p"},"get*AtEvent")," methods."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"myLineChart.getElementAtEvent(e);\n// => returns the first element at the event point.\n")),Object(r.b)("p",null,"To get an item that was clicked on, ",Object(r.b)("inlineCode",{parentName:"p"},"getElementAtEvent")," can be used."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"function clickHandler(evt) {\n    var firstPoint = myChart.getElementAtEvent(evt)[0];\n\n    if (firstPoint) {\n        var label = myChart.data.labels[firstPoint._index];\n        var value = myChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];\n    }\n}\n")),Object(r.b)("h2",{id:"getelementsatevente"},".getElementsAtEvent(e)"),Object(r.b)("p",null,"Looks for the element under the event point, then returns all elements at the same data index. This is used internally for 'label' mode highlighting."),Object(r.b)("p",null,"Calling ",Object(r.b)("inlineCode",{parentName:"p"},"getElementsAtEvent(event)")," on your Chart instance passing an argument of an event, or jQuery event, will return the point elements that are at that the same position of that event."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"canvas.onclick = function(evt) {\n    var activePoints = myLineChart.getElementsAtEvent(evt);\n    // => activePoints is an array of points on the canvas that are at the same position as the click event.\n};\n")),Object(r.b)("p",null,"This functionality may be useful for implementing DOM based tooltips, or triggering custom behaviour in your application."),Object(r.b)("h2",{id:"getdatasetatevente"},".getDatasetAtEvent(e)"),Object(r.b)("p",null,"Looks for the element under the event point, then returns all elements from that dataset. This is used internally for 'dataset' mode highlighting."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"myLineChart.getDatasetAtEvent(e);\n// => returns an array of elements\n")),Object(r.b)("h2",{id:"getdatasetmetaindex"},".getDatasetMeta(index)"),Object(r.b)("p",null,"Looks for the dataset that matches the current index and returns that metadata. This returned data has all of the metadata that is used to construct the chart."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"data")," property of the metadata will contain information about each point, rectangle, etc. depending on the chart type."),Object(r.b)("p",null,"Extensive examples of usage are available in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/tree/master/test"}),"Chart.js tests"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var meta = myChart.getDatasetMeta(0);\nvar x = meta.data[0].x;\n")),Object(r.b)("h2",{id:"setdatasetvisibilitydatasetindex-visibility"},"setDatasetVisibility(datasetIndex, visibility)"),Object(r.b)("p",null,"Sets the visibility for a given dataset. This can be used to build a chart legend in HTML. During click on one of the HTML items, you can call ",Object(r.b)("inlineCode",{parentName:"p"},"setDatasetVisibility")," to change the appropriate dataset."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"chart.setDatasetVisibility(1, false); // hides dataset at index 1\nchart.update(); // chart now renders with dataset hidden\n")),Object(r.b)("h2",{id:"toggledatavisibilityindex"},"toggleDataVisibility(index)"),Object(r.b)("p",null,"Toggles the visibility of an item in all datasets. A dataset needs to explicitly support this feature for it to have an effect. From internal chart types, doughnut / pie and polar area use this."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"chart.toggleDataVisibility(2); // toggles the item in all datasets, at index 2\nchart.update(); // chart now renders with item hidden\n")),Object(r.b)("h2",{id:"getdatavisibilityindex"},"getDataVisibility(index)"),Object(r.b)("p",null,"Returns the stored visibility state of an data index for all datasets. Set by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#toggleDataVisibility"}),"toggleDataVisibility"),". A dataset controller should use this method to determine if an item should not be visible."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var visible = chart.getDataVisibility(2);\n")),Object(r.b)("h2",{id:"hidedatasetindex"},"hide(datasetIndex)"),Object(r.b)("p",null,"Sets the visibility for the given dataset to false. Updates the chart and animates the dataset with ",Object(r.b)("inlineCode",{parentName:"p"},"'hide'")," mode. This animation can be configured under the ",Object(r.b)("inlineCode",{parentName:"p"},"hide")," key in animation options. Please see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/configuration/animations"}),"animations")," docs for more details."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"chart.hide(1); // hides dataset at index 1 and does 'hide' animation.\n")),Object(r.b)("h2",{id:"showdatasetindex"},"show(datasetIndex)"),Object(r.b)("p",null,"Sets the visibility for the given dataset to true. Updates the chart and animates the dataset with ",Object(r.b)("inlineCode",{parentName:"p"},"'show'")," mode. This animation can be configured under the ",Object(r.b)("inlineCode",{parentName:"p"},"show")," key in animation options. Please see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/configuration/animations"}),"animations")," docs for more details."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"chart.show(1); // shows dataset at index 1 and does 'show' animation.\n")))}d.isMDXComponent=!0},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=d(a),h=n,u=b["".concat(s,".").concat(h)]||b[h]||p[h]||r;return a?i.a.createElement(u,l(l({ref:t},c),{},{components:a})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);