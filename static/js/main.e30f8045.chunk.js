(this["webpackJsonpinnocv-calc"]=this["webpackJsonpinnocv-calc"]||[]).push([[0],{14:function(t,n,e){},15:function(t,n,e){},17:function(t,n,e){},18:function(t,n,e){},19:function(t,n,e){"use strict";e.r(n);var c=e(1),r=e.n(c),i=e(7),a=e.n(i),u=(e(14),e(9)),o=e(6),s=e(8),l=e(4),f={add:"+",subtract:"-",multiply:"*",divide:"/"},d={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,zero:0},j=Object(l.a)(Object(l.a)(Object(l.a)({},f),d),{},{decimal:".",equals:"="}),b=function(t){return t in f},v={add:function(t,n){return t+n},subtract:function(t,n){return t-n},multiply:function(t,n){return t*n},divide:function(t,n){return t/n}};function O(t){var n,e=null,c=0,r="",i=Object(s.a)(t);try{for(i.s();!(n=i.n()).done;){var a=n.value;if(a in d)r+=d[a];else if("decimal"!==a)"subtract"!==a||""!==r?b(a)?(c&&!r||u(),e=v[a]):"equals"!==a||(u(),e=null):r="-";else{if(r.includes("."))throw new Error("Can't have two decimal points");r+="."}}}catch(o){i.e(o)}finally{i.f()}return r||"".concat(c);function u(){var t=r?function(t){var n=parseFloat(t);if(isNaN(n))throw new Error("Invalid number: ".concat(t));return n}(r):0;c=e?e(c,t):t,r=""}}e(15);var h=e(0);function m(t){return Object(h.jsx)("button",{style:{gridArea:t.id},className:"Button",onClick:t.onClick,children:t.text})}e(17),e(18);function p(t){return Object(h.jsx)("pre",{className:"Display",children:t.content})}var x=Object.entries(j);function w(){var t=Object(c.useState)([]),n=Object(o.a)(t,2),e=n[0],r=n[1],i=Object(c.useMemo)((function(){try{return O(e)}catch(t){return"ERROR: ".concat(t.message)}}),[e]);return Object(h.jsxs)("div",{className:"Calculator",children:[Object(h.jsx)(p,{content:i}),Object(h.jsx)(m,{id:"reset",text:"CE",onClick:function(){return r([])}}),x.map((function(t){var n=Object(o.a)(t,2),c=n[0],i=n[1];return Object(h.jsx)(m,{id:c,text:i,onClick:function(){return r([].concat(Object(u.a)(e),[c]))}},c)}))]})}a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.e30f8045.chunk.js.map