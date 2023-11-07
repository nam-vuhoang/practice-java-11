"use strict";(globalThis.webpackChunkcodility=globalThis.webpackChunkcodility||[]).push([[2219],{62219:(n,r,t)=>{t.d(r,{f9:()=>m,Ie:()=>h,RI:()=>S});var e="COMMON_TAGS_TAG_TRANSFORMERS_SYMBOL";function o(n,r,t){var e=n.transformers,o=n.context;return e.reduce((function(n,t,e){return t[r]?t[r](n,o[e]):n}),t)}function u(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];var u=function(n){return(r=n,(t=[]).concat.apply(t,r)).reduce((function(n,r){return"function"==typeof(t=r)&&t[e]?[].concat(n,r[e]):[].concat(n,[r]);var t}),[]);var r,t}(r);function i(n){for(var r=arguments.length,t=new Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if("function"==typeof n)return a=i,c=n,function(){return a(["",""],c.apply(void 0,arguments))};var a,c;if(!Array.isArray(n))return i([n]);var s=function(n){return{transformers:n,context:n.map((function(n){return n.getInitialContext?n.getInitialContext():{}}))}}(u),l=n.map((function(n){return o(s,"onString",n)})).reduce((function(n,r,e){return"".concat(n,function(n,r,t,e){var o=n.transformers,u=n.context;return o.reduce((function(n,t,o){return t[r]?t[r](n,e,u[o]):n}),t)}(s,"onSubstitution",t[e-1],n),r)}));return o(s,"onEndResult",l)}return i[e]=u,i}var i=["initial","all"];const a=function(n){if(void 0===n&&(n="initial"),!i.includes(n))throw new Error("Type not supported: "+n);return{onEndResult:function(r){if("all"===n)return r.replace(/^[^\S\n]+/gm,"");var t=r.match(/^[^\S\n]*(?=\S)/gm),e=t&&Math.min.apply(Math,t.map((function(n){return n.length})));if(e){var o=new RegExp("^.{"+e+"}","gm");return r.replace(o,"")}return r}}};var c=["","start","left","end","right","smart"];const s=function(n){if(void 0===n&&(n=""),!c.includes(n))throw new Error("Side not supported: "+n);return{onEndResult:function(r){switch(n){case"":return r.trim();case"start":case"left":return r.replace(/^\s*/,"");case"end":case"right":return r.replace(/\s*$/,"");case"smart":return r.replace(/[^\S\n]+$/gm,"").replace(/^\n/,"")}}}},l=u(a(),s("smart"));function f(n){return"".concat(n)}const p=function(n){var r=void 0===n?{}:n,t=r.conjunction,e=void 0===t?"":t,o=r.separator,u=void 0===o?"":o,i=r.serial,a=void 0!==i&&i;return{onSubstitution:function(n,r){if(!Array.isArray(n))return n;var t=n.length,o=e&&!a?t-2:t-1,i=r.match(/(?:\n)([^\S\n]+)$/);return e&&t>1&&(n[t-1]="".concat(e," ",n[t-1])),n.reduce((function(n,r,t){var e,a,c=0===t,s=function(n){var r=f(n),t=r.length;return t>0&&"\n"===r[t-1]?r.slice(0,t-1):r}(r);return"".concat(n,c?"":i?"\n":" ",i?(e=i[1],void 0===(a=c)&&(a=!1),f(s).split("\n").map((function(n,r){return a&&0===r?n:"".concat(e,n)})).join("\n")):s,t<o?u:"")}),"")}}},g=function(n){if("string"!=typeof n)throw new Error("You need to specify a string character to split by.");return{onSubstitution:function(r){return"string"==typeof r&&r.includes(n)?r.split(n):r}}};var d=function(n){return null!=n&&!Number.isNaN(n)&&"boolean"!=typeof n};u(g("\n"),{onSubstitution:function(n){return Array.isArray(n)?n.filter(d):d(n)?n:""}},p(),l),u(p({separator:","}),l),u(p({separator:",",conjunction:"and"}),l),u(p({separator:",",conjunction:"or"}),l),u(),u(p(),l);const v=function(n,r){if(null==n||null==r)throw new Error("replaceResultTransformer requires exactly 2 arguments.");return{onEndResult:function(t){return t.replace(n,r)}}},m=u(v(/(?:\n(?:\s*))+/g," "),s());u(p({separator:","}),v(/(?:\s+)/g," "),s()),u(p({separator:",",conjunction:"and"}),v(/(?:\s+)/g," "),s());const h=u(p({separator:",",conjunction:"or"}),v(/(?:\s+)/g," "),s());u(p(),v(/(?:\s+)/g," "),s()),u(v(/(?:\n\s*)/g,""),s());const y=function(n,r){if(null==n||null==r)throw new Error("replaceSubstitutionTransformer requires exactly 2 arguments.");return{onSubstitution:function(t){return null==t?t:String(t).replace(n,r)}}};u(g("\n"),p(),l,y(/&/g,"&amp;"),y(/</g,"&lt;"),y(/>/g,"&gt;"),y(/"/g,"&quot;"),y(/'/g,"&#x27;"),y(/`/g,"&#x60;"));const S=u(a("all"),s("smart"))}}]);