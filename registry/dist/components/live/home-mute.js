!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/home-mute"]=t():e["live/home-mute"]=t()}(self,(function(){return function(){"use strict";var e,t,n={569:function(e){e.exports=coreApis.spinQuery},109:function(e){e.exports=coreApis.utils}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){c[e]=function(){return n[e]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){r.d(i,{component:function(){return o}});var e=coreApis.settings,t=coreApis.style;const n=/^https:\/\/live\.bilibili\.com\/(index\.html)?$/,o={name:"liveHomeMute",displayName:"直播首页静音",tags:[componentsTags.live],description:{"zh-CN":"禁止直播首页的推荐直播间自动开始播放."},entry:async({metadata:n})=>{const o="hide-home-live";(0,e.addComponentListener)(`${n.name}.hide`,(e=>{e?(0,t.addStyle)(".player-area-ctnr,#player-header { display: none !important }",o):(0,t.removeStyle)(o)}),!0)},options:{hide:{displayName:"隐藏首页直播板块",defaultValue:!1}},urlInclude:[n],plugin:{displayName:"直播首页静音 - 提前执行",description:{"zh-CN":"提前执行代码以尽快静音."},async setup(){const{matchUrlPattern:e}=await Promise.resolve().then(r.t.bind(r,109,23));if(!e(n))return;const{select:t}=await Promise.resolve().then(r.t.bind(r,569,23));t("video").then((e=>{e.muted=!0}))}},commitHash:"da1de09b8ccefec9f932cd98cd5f84a09fdc03dc",coreVersion:"2.1.0"}}(),i=i.component}()}));