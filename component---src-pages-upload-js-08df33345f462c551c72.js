(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0nO4":function(e,t,a){"use strict";var n=a("q1tI"),o=a("wx14");a("17x9"),a("OKji"),a("aXM8"),a("hfi/");var r=a("H2TA"),i={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},l=function(e){return Object(o.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};Object(r.a)((function(e){return{"@global":{html:i,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(o.a)({margin:0},l(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,a=void 0===t?null:t;return e.classes,n.createElement(n.Fragment,null,a)})),a("91GP");var s=a("viY9"),c=a("dl/7"),g=a("6yBS"),p=a("LXXt"),d=Object(s.a)({palette:{primary:{light:"#69696a",main:"#28282a",dark:"#1e1e1f"},secondary:{light:"#fff5f8",main:"#ff3366",dark:"#e62958"},warning:{main:"#ffc071",dark:"#ffb25e"},error:{xLight:c.a[50],main:c.a[500],dark:c.a[700]},success:{xLight:g.a[50],main:g.a[500],dark:g.a[700]}},typography:{fontFamily:"'Work Sans', sans-serif",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:700,fontFamilySecondary:"'Roboto Condensed', sans-serif"}}),f={color:d.palette.text.primary,fontWeight:d.typography.fontWeightMedium,fontFamily:d.typography.fontFamilySecondary,textTransform:"uppercase"};Object.assign({},d,{palette:Object.assign({},d.palette,{background:Object.assign({},d.palette.background,{default:d.palette.common.white,placeholder:p.a[200]})}),typography:Object.assign({},d.typography,{fontHeader:f,h1:Object.assign({},d.typography.h1,{},f,{letterSpacing:0,fontSize:60}),h2:Object.assign({},d.typography.h2,{},f,{fontSize:48}),h3:Object.assign({},d.typography.h3,{},f,{fontSize:42}),h4:Object.assign({},d.typography.h4,{},f,{fontSize:36}),h5:Object.assign({},d.typography.h5,{fontSize:20,fontWeight:d.typography.fontWeightLight}),h6:Object.assign({},d.typography.h6,{},f,{fontSize:18}),subtitle1:Object.assign({},d.typography.subtitle1,{fontSize:18}),body1:Object.assign({},d.typography.body2,{fontWeight:d.typography.fontWeightRegular,fontSize:16}),body2:Object.assign({},d.typography.body1,{fontSize:14})})})},YMul:function(e,t,a){"use strict";a.r(t),function(e){var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),i=(a("0nO4"),a("ofer")),l=a("Z3vd"),s=(a("HShl"),a("TAFb")),c=a("aST0");t.default=function(t){var a=Object(n.useState)(!0),g=a[0],p=a[1];return"undefined"==typeof window&&(e.window={}),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null),o.a.createElement("div",{className:"uploadBody"},o.a.createElement(i.a,{variant:"h3",className:"uploadElements"},"Upload a blueprint"),o.a.createElement("div",{className:"spaceBetweenText"},o.a.createElement(i.a,{variant:"body1",className:"callToAction"},"If you don't have one, download one:   "),o.a.createElement("div",null," "),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.mediafire.com/file/9ifmi239akwxrb8/blueprintTest.json/file"},o.a.createElement(i.a,{variant:"body1"}," here"))),o.a.createElement("div",{className:"uploadElements"},o.a.createElement("input",{type:"file",className:"uploadElements",onChange:function(e){return function(e){if(e.length>0){p(!1);var t=new FileReader;t.onload=function(e){var t=JSON.stringify(e.target.result);window.localStorage.setItem("jsonBluePrint",t)},t.readAsText(e[0])}}(e.target.files)}})),o.a.createElement(l.a,{className:"uploadElements",color:"secondary",size:"large",variant:"contained",onClick:function(){g||Object(r.a)("/result")},disabled:g},"Upload")),o.a.createElement(c.a,null))}}.call(this,a("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-upload-js-08df33345f462c551c72.js.map