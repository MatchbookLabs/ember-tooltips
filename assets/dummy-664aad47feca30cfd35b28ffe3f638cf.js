"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,o){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:n.default});(0,t.default)(a,o.default.modulePrefix),e.default=a}),define("dummy/components/code-snippet",["exports","dummy/snippets"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=self.require("highlight.js")
e.default=Ember.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e
for(var n,t,o=e.split("\n").filter(function(e){return""!==e}),a=0;a<o.length;a++)(n=/^[ \t]*/.exec(o[a]))&&(void 0===t||t>n[0].length)&&(t=n[0].length)
return void 0!==t&&t>0&&(e=e.replace(new RegExp("^[ \t]{"+t+"}","gm"),"")),e},source:Ember.computed("name",function(){var e=this.get("name").split("/").reduce(function(e,n){return e&&e[n]},n.default)
return this._unindent((e||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){t.highlightBlock(this.get("element"))},language:Ember.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"))
if(e)switch(e[1].toLowerCase()){case"js":return"javascript"
case"coffee":return"coffeescript"
case"hbs":return"htmlbars"
case"css":return"css"
case"scss":return"scss"
case"less":return"less"
case"emblem":return"emblem"
case"ts":return"typescript"}})})}),define("dummy/components/ember-tether",["exports","ember-tether/components/ember-tether"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/popover-on-component",["exports","ember-tooltips/components/popover-on-component"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/popover-on-element",["exports","ember-tooltips/components/popover-on-element"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/some-component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({classNames:["some-component"]})}),define("dummy/components/some-spinner",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({classNames:["spinner"]})}),define("dummy/components/tether-popover-on-component",["exports","ember-tooltips/components/tether-popover-on-component"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/tether-popover-on-element",["exports","ember-tooltips/components/tether-popover-on-element"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/tether-tooltip-on-component",["exports","ember-tooltips/components/tether-tooltip-on-component"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/tether-tooltip-on-element",["exports","ember-tooltips/components/tether-tooltip-on-element"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/tooltip-on-component",["exports","ember-tooltips/components/tooltip-on-component"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/tooltip-on-element",["exports","dummy/config/environment","ember-tooltips/components/tooltip-on-element"],function(e,n,t){Object.defineProperty(e,"__esModule",{value:!0})
var o="test"===n.default.environment?0:1e3
e.default=t.default.extend({_didUpdateTimeoutLength:o})}),define("dummy/controllers/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({asyncContent:null,showTooltips:!1,actions:{setAsyncContent:function(){var e=this
return new Ember.RSVP.Promise(function(n){Ember.run.later(function(){e.set("asyncContent","Some model"),n()},2e3)})}},init:function(){var e=this
this._super.apply(this,arguments),Ember.run.scheduleOnce("afterRender",function(){Ember.run.later(function(){e.set("showLogoTooltip",!0)},1e3)})}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var o,a=n.default.exportApplicationGlobal
o="string"==typeof a?a:Ember.String.classify(n.default.modulePrefix),t[o]||(t[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
t.map(function(){this.route("acceptance")}),e.default=t}),define("dummy/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var n=function(){return function(e,n){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,n){var t=[],o=!0,a=!1,r=void 0
try{for(var s,l=e[Symbol.iterator]();!(o=(s=l.next()).done)&&(t.push(s.value),!n||t.length!==n);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&l.return&&l.return()}finally{if(a)throw r}}return t}(e,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()
e.default=Ember.Route.extend({actions:{linkTo:function(e){window.open(e)},transitionTo:function(e){var t=e.split("-"),o=n(t,3),a=o[0],r=o[1],s=o[2],l=Ember.String.capitalize(a)
this.transitionTo(e),this.controller.set("pageTitle",l+"s "+r+" "+s+"s")}}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/snippets",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={"async-content.hbs":"{{#some-component}}\n  Tooltip has async content\n\n  {{#tooltip-on-component updateFor=asyncContent onShow='setAsyncContent' enableLazyRendering=true}}\n    {{#if asyncContent}}\n      {{asyncContent}}\n    {{else}}\n      {{some-spinner}}\n    {{/if}}\n  {{/tooltip-on-component}}\n{{/some-component}}","basic-usage-components.hbs":"{{#some-component}}\n  Hover for more info\n\n  {{#tooltip-on-component enableLazyRendering=true}}\n    Here is the info!\n  {{/tooltip-on-component}}\n{{/some-component}}","basic-usage-elements.hbs":"<div class=\"some-component\">\n  Click for more info\n\n  {{#tooltip-on-element event='click' enableLazyRendering=true}}\n    Here is the info!\n  {{/tooltip-on-element}}\n</div>","basic-usage-target.hbs":"{{input id='my-input' value='Some value'}}\n\n{{#tooltip-on-element target='#my-input' event='click' enableLazyRendering=true}}\n  Here is the info!\n{{/tooltip-on-element}}","custom-styling.hbs":"<style>\n  .tooltip-error {\n    background-color: #e37f7f;\n    color: #fff;\n  }\n</style>\n\n{{#some-component}}\n  Show an error\n\n  {{#tooltip-on-component class='tooltip-error' enableLazyRendering=true}}\n    Here is the error!\n  {{/tooltip-on-component}}\n{{/some-component}}","inline-content.hbs":"{{#some-component}}\n  Tooltip has async content\n\n  {{tooltip-on-component text='More info here'}}\n{{/some-component}}","popover.hbs":"{{#some-component}}\n  View more information\n\n  {{#popover-on-component enableLazyRendering=true as |popover|}}\n    <h3>More info</h3>\n    <p>Here is more information!</p>\n\n    <button {{action popover.hide}}>Hide</button>\n  {{/popover-on-component}}\n{{/some-component}}","using-with-delay.hbs":"{{#some-component}}\n  Tooltip will show after 1000ms\n\n  {{#tooltip-on-component delay=1000 enableLazyRendering=true}}\n    Here is the info!\n  {{/tooltip-on-component}}\n{{/some-component}}","using-with-duration.hbs":"{{#some-component}}\n  Tooltip will disappear after 1000ms\n\n  {{#tooltip-on-component duration=1000 enableLazyRendering=true}}\n    Here is the info!\n  {{/tooltip-on-component}}\n{{/some-component}}"}}),define("dummy/templates/acceptance",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"4YaD/NCU",block:'{"symbols":[],"statements":[[0,"SECTION: 1;\\n"],[7,"span"],[11,"class","js-test-tooltip-target-enableLazyRendering-false"],[9],[0,"\\n\\tTOOLTIP w/ enableLazyRendering=false\\n"],[4,"tooltip-on-element",null,[["enableLazyRendering","class"],[false,"js-test-tooltip-enableLazyRendering-false"]],{"statements":[[0,"\\t\\ttooltip text\\n"]],"parameters":[]},null],[10],[0,"\\n\\n"],[7,"hr"],[9],[10],[0,"\\n\\nSECTION: 2;\\n"],[7,"span"],[11,"class","js-test-tooltip-target-enableLazyRendering-true"],[9],[0,"\\n\\tTOOLTIP w/ enableLazyRendering=true\\n"],[4,"tooltip-on-element",null,[["enableLazyRendering","class"],[true,"js-test-tooltip-enableLazyRendering-true"]],{"statements":[[0,"\\t\\ttooltip text\\n"]],"parameters":[]},null],[10],[0,"\\n\\n"],[7,"hr"],[9],[10],[0,"\\n\\nSECTION: 3;\\n"],[7,"span"],[11,"class","js-test-popover-target-enableLazyRendering-false"],[9],[0,"\\n\\tPOPOVER w/ enableLazyRendering=false hideDelay=250 (default)\\n"],[4,"popover-on-element",null,[["enableLazyRendering","class"],[false,"js-test-popover-enableLazyRendering-false"]],{"statements":[[0,"\\t\\tpopover text\\n"]],"parameters":[]},null],[10],[0,"\\n\\n"],[7,"hr"],[9],[10],[0,"\\n\\nSECTION: 4;\\n"],[7,"span"],[11,"class","js-test-popover-target-enableLazyRendering-true"],[9],[0,"\\n\\tPOPOVER w/ enableLazyRendering=true hideDelay=250 (default)\\n"],[4,"popover-on-element",null,[["enableLazyRendering","class"],[true,"js-test-popover-enableLazyRendering-true"]],{"statements":[[0,"\\t\\tpopover text\\n"]],"parameters":[]},null],[10],[0,"\\n\\n"],[7,"hr"],[9],[10],[0,"\\n\\nSECTION: 5;\\n"],[7,"span"],[11,"class","js-test-popover-target-enableLazyRendering-true-no-delay"],[9],[0,"\\n\\tPOPOVER w/ enableLazyRendering=true hideDelay=0\\n"],[4,"popover-on-element",null,[["enableLazyRendering","hideDelay","class"],[true,0,"js-test-popover-enableLazyRendering-true-no-delay"]],{"statements":[[0,"\\t\\tpopover text\\n"]],"parameters":[]},null],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/acceptance.hbs"}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"8VpUpqJF",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/code-snippet",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"sCIyjozi",block:'{"symbols":[],"statements":[[1,[21,"source"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/code-snippet.hbs"}})}),define("dummy/templates/components/some-component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"PK5jLgm8",block:'{"symbols":["&default"],"statements":[[7,"div"],[9],[0,"\\n\\t"],[14,1],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/some-component.hbs"}})}),define("dummy/templates/components/some-spinner",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"PaHz2fWs",block:'{"symbols":[],"statements":[[7,"div"],[11,"class","bounce1"],[9],[10],[0,"\\n"],[7,"div"],[11,"class","bounce2"],[9],[10],[0,"\\n"],[7,"div"],[11,"class","bounce3"],[9],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/some-spinner.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"fhim8K/D",block:'{"symbols":["popover"],"statements":[[7,"div"],[11,"class","hero"],[9],[0,"\\n  "],[7,"h1"],[11,"class","visuallyhidden"],[9],[0,"Ember Tooltips"],[10],[0,"\\n\\n  "],[7,"div"],[11,"id","headline"],[9],[0,"\\n    "],[7,"img"],[11,"src","http://miguelcobain.github.io/ember-paper/ember-logo-white-955db9d87b940bf54a17bd1fa78d0713.png"],[11,"id","ember-logo"],[9],[10],[0,"\\n"],[0,"  "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","badges"],[9],[0,"\\n\\n    "],[7,"a"],[11,"href","https://travis-ci.org/sir-dunxalot/ember-tooltips"],[9],[7,"img"],[11,"src","https://camo.githubusercontent.com/0928f8bea4cb764feceb44750753eec0dda770b0/68747470733a2f2f7472617669732d63692e6f72672f7369722d64756e78616c6f742f656d6265722d746f6f6c746970732e737667"],[11,"alt","Build Status"],[11,"data-canonical-src","https://travis-ci.org/sir-dunxalot/ember-tooltips.svg?branch=master"],[11,"style","max-width:100%;"],[9],[10],[10],[0,"\\n\\n    "],[7,"a"],[11,"href","https://www.npmjs.com/package/ember-tooltips"],[9],[7,"img"],[11,"src","https://camo.githubusercontent.com/20b25311bfe9f6a298f2a1c7dc4908101c8b8b30/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f656d6265722d746f6f6c746970732e737667"],[11,"alt","npm"],[11,"data-canonical-src","https://img.shields.io/npm/v/ember-tooltips.svg"],[11,"style","max-width:100%;"],[9],[10],[10],[0,"\\n\\n    "],[7,"a"],[11,"href","https://emberobserver.com/addons/ember-tooltips"],[9],[7,"img"],[11,"src","https://emberobserver.com/badges/ember-tooltips.svg"],[11,"alt","Ember Observer Score"],[11,"style","max-width:100%;"],[9],[10],[10],[0,"\\n\\n   "],[7,"iframe"],[11,"src","https://ghbtns.com/github-btn.html?user=sir-dunxalot&repo=ember-tooltips&type=star&count=true"],[11,"frameborder","0"],[11,"scrolling","0"],[11,"width","80px"],[11,"height","20px"],[9],[10],[0,"\\n\\n  "],[10],[0,"\\n\\n"],[10],[0,"\\n\\n"],[4,"tooltip-on-element",null,[["class","event","target","isShown","side","spacing","enableLazyRendering"],["logo-tooltip","none","#ember-logo",[23,["showLogoTooltip"]],"right",15,true]],{"statements":[[0,"  Tooltips\\n"]],"parameters":[]},null],[0,"\\n"],[7,"div"],[11,"class","page-content"],[9],[0,"\\n\\n  "],[7,"h2"],[9],[0,"Documentation"],[10],[0,"\\n\\n  "],[7,"p"],[9],[0,"Documentation is available "],[7,"a"],[11,"href","https://github.com/sir-dunxalot/ember-tooltips"],[11,"target","_blank"],[9],[0,"In the repo"],[10],[0,"."],[10],[0,"\\n\\n  "],[7,"iframe"],[11,"src","https://ghbtns.com/github-btn.html?user=sir-dunxalot&repo=ember-tooltips&type=fork&count=true"],[11,"frameborder","0"],[11,"scrolling","0"],[11,"width","170px"],[11,"height","20px"],[9],[10],[0,"\\n\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","page-content gray"],[9],[0,"\\n  "],[7,"h2"],[9],[0,"Examples"],[10],[0,"\\n\\n  "],[7,"ul"],[9],[0,"\\n    "],[7,"li"],[9],[7,"a"],[11,"href","#component"],[9],[0,"On parent component"],[10],[10],[0,"\\n    "],[7,"li"],[9],[7,"a"],[11,"href","#element"],[9],[0,"On parent element"],[10],[10],[0,"\\n    "],[7,"li"],[9],[7,"a"],[11,"href","#target"],[9],[0,"On any target"],[10],[10],[0,"\\n    "],[7,"li"],[9],[7,"a"],[11,"href","#delay"],[9],[0,"Show after delay"],[10],[10],[0,"\\n    "],[7,"li"],[9],[7,"a"],[11,"href","#duration"],[9],[0,"Show for duration"],[10],[10],[0,"\\n    "],[7,"li"],[9],[7,"a"],[11,"href","#styling"],[9],[0,"Using custom styling"],[10],[10],[0,"\\n    "],[7,"li"],[9],[7,"a"],[11,"href","#async"],[9],[0,"Using async content"],[10],[10],[0,"\\n    "],[7,"li"],[9],[7,"a"],[11,"href","#popover"],[9],[0,"Using a popover instead of a tooltip"],[10],[10],[0,"\\n    "],[7,"li"],[9],[7,"a"],[11,"href","#inline"],[9],[0,"Using in inline form"],[10],[10],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","page-content"],[9],[0,"\\n\\n  "],[7,"h3"],[11,"id","component"],[9],[0,"Basic usage with components"],[10],[0,"\\n\\n"],[4,"some-component",null,null,{"statements":[[0,"  Hover for more info\\n\\n"],[4,"tooltip-on-component",null,[["enableLazyRendering"],[true]],{"statements":[[0,"    Here is the info!\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[27,"code-snippet",null,[["name"],["basic-usage-components.hbs"]]],false],[0,"\\n\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","page-content gray"],[9],[0,"\\n  "],[7,"h3"],[11,"id","element"],[9],[0,"Basic usage with elements"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","some-component"],[9],[0,"\\n  Click for more info\\n\\n"],[4,"tooltip-on-element",null,[["event","enableLazyRendering"],["click",true]],{"statements":[[0,"    Here is the info!\\n"]],"parameters":[]},null],[10],[0,"\\n"],[0,"\\n  "],[1,[27,"code-snippet",null,[["name"],["basic-usage-elements.hbs"]]],false],[0,"\\n\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","page-content"],[9],[0,"\\n  "],[7,"h3"],[11,"id","target"],[9],[0,"Using with a target"],[10],[0,"\\n\\n"],[1,[27,"input",null,[["id","value"],["my-input","Some value"]]],false],[0,"\\n\\n"],[4,"tooltip-on-element",null,[["target","event","enableLazyRendering"],["#my-input","click",true]],{"statements":[[0,"  Here is the info!\\n"]],"parameters":[]},null],[0,"\\n  "],[1,[27,"code-snippet",null,[["name"],["basic-usage-target.hbs"]]],false],[0,"\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","page-content gray"],[9],[0,"\\n  "],[7,"h3"],[11,"id","delay"],[9],[0,"Using a delay"],[10],[0,"\\n\\n"],[4,"some-component",null,null,{"statements":[[0,"  Tooltip will show after 1000ms\\n\\n"],[4,"tooltip-on-component",null,[["delay","enableLazyRendering"],[1000,true]],{"statements":[[0,"    Here is the info!\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[27,"code-snippet",null,[["name"],["using-with-delay.hbs"]]],false],[0,"\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","page-content"],[9],[0,"\\n  "],[7,"h3"],[11,"id","duration"],[9],[0,"Using a duration"],[10],[0,"\\n\\n"],[4,"some-component",null,null,{"statements":[[0,"  Tooltip will disappear after 1000ms\\n\\n"],[4,"tooltip-on-component",null,[["duration","enableLazyRendering"],[1000,true]],{"statements":[[0,"    Here is the info!\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[27,"code-snippet",null,[["name"],["using-with-duration.hbs"]]],false],[0,"\\n\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","page-content gray"],[9],[0,"\\n  "],[7,"h3"],[11,"id","styling"],[9],[0,"With custom styling"],[10],[0,"\\n\\n"],[7,"style"],[9],[0,"\\n  .tooltip-error {\\n    background-color: #e37f7f;\\n    color: #fff;\\n  }\\n"],[10],[0,"\\n\\n"],[4,"some-component",null,null,{"statements":[[0,"  Show an error\\n\\n"],[4,"tooltip-on-component",null,[["class","enableLazyRendering"],["tooltip-error",true]],{"statements":[[0,"    Here is the error!\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[27,"code-snippet",null,[["name"],["custom-styling.hbs"]]],false],[0,"\\n\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","page-content"],[9],[0,"\\n  "],[7,"h3"],[11,"id","async"],[9],[0,"Using async content"],[10],[0,"\\n\\n  "],[7,"p"],[9],[0,"In this example, "],[7,"code"],[9],[0,"onShow"],[10],[0," is used to mimick async behaviour. In reality, you do not need set this for async operations."],[10],[0,"\\n\\n  "],[7,"p"],[9],[0,"The tooltip will reposition itself whenever the "],[7,"code"],[9],[0,"updateFor"],[10],[0," property changes."],[10],[0,"\\n\\n"],[4,"some-component",null,null,{"statements":[[0,"  Tooltip has async content\\n\\n"],[4,"tooltip-on-component",null,[["updateFor","onShow","enableLazyRendering"],[[23,["asyncContent"]],"setAsyncContent",true]],{"statements":[[4,"if",[[23,["asyncContent"]]],null,{"statements":[[0,"      "],[1,[21,"asyncContent"],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[1,[21,"some-spinner"],false],[0,"\\n"]],"parameters":[]}]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n  "],[1,[27,"code-snippet",null,[["name"],["async-content.hbs"]]],false],[0,"\\n\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","page-content gray"],[9],[0,"\\n  "],[7,"h3"],[11,"id","popover"],[9],[0,"Using a popover instead of a tooltip"],[10],[0,"\\n\\n"],[4,"some-component",null,null,{"statements":[[0,"  View more information\\n\\n"],[4,"popover-on-component",null,[["enableLazyRendering"],[true]],{"statements":[[0,"    "],[7,"h3"],[9],[0,"More info"],[10],[0,"\\n    "],[7,"p"],[9],[0,"Here is more information!"],[10],[0,"\\n\\n    "],[7,"button"],[3,"action",[[22,0,[]],[22,1,["hide"]]]],[9],[0,"Hide"],[10],[0,"\\n"]],"parameters":[1]},null]],"parameters":[]},null],[0,"\\n  "],[1,[27,"code-snippet",null,[["name"],["popover.hbs"]]],false],[0,"\\n\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","page-content"],[9],[0,"\\n  "],[7,"h3"],[11,"id","inline"],[9],[0,"Using in inline form"],[10],[0,"\\n\\n"],[4,"some-component",null,null,{"statements":[[0,"  Tooltip has async content\\n\\n  "],[1,[27,"tooltip-on-component",null,[["text"],["More info here"]]],false],[0,"\\n"]],"parameters":[]},null],[0,"\\n  "],[1,[27,"code-snippet",null,[["name"],["inline-content.hbs"]]],false],[0,"\\n\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(unescape(n))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})