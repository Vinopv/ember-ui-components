"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,l,n){var r;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),l["default"](r,n["default"].modulePrefix),e["default"]=r}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var l=a["default"].APP,n=l.name,r=l.version;e["default"]=t["default"].extend({version:r,name:n})}),define("dummy/components/check-box",["exports","ember-ui-components/components/check-box"],function(e,t){e["default"]=t["default"]}),define("dummy/components/checkbox-slider",["exports","ember-ui-components/components/checkbox-slider"],function(e,t){e["default"]=t["default"]}),define("dummy/components/select-box",["exports","ember-ui-components/components/select-box"],function(e,t){e["default"]=t["default"]}),define("dummy/controllers/application",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({selectBoxValue:null,selectBoxOptions:["Active","Complete"],selectBoxValue2:null,selectBoxOptions2:[{value:"active-value",text:"Active"},{value:"complete-value",text:"Complete"}]})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/is-equal",["exports","ember-ui-components/helpers/is-equal"],function(e,t){e["default"]=t["default"],e.isEqual=t.isEqual}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){var l=a["default"].APP,n=l.name,r=l.version;e["default"]={name:"App Version",initialize:t["default"](n,r)}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function l(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var l,n=a["default"].exportApplicationGlobal;l="string"==typeof n?n:t["default"].String.classify(a["default"].modulePrefix),window[l]||(window[l]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[l]}}))}}e.initialize=l,e["default"]={name:"export-application-global",initialize:l}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var l=t["default"].Router.extend({location:a["default"].locationType});l.map(function(){}),e["default"]=l}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:59,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h1");e.setAttribute(a,"id","title");var l=e.createTextNode("ember-ui-components");e.appendChild(a,l),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","panel");var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createElement("h2"),n=e.createTextNode("check-box");e.appendChild(l,n),e.appendChild(a,l);var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n  ");e.appendChild(a,l);var l=e.createElement("label");e.setAttribute(l,"for","check-box1");var n=e.createTextNode("check-box");e.appendChild(l,n),e.appendChild(a,l);var l=e.createElement("br");e.appendChild(a,l);var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n  ");e.appendChild(a,l);var l=e.createElement("label");e.setAttribute(l,"for","check-box2");var n=e.createTextNode("check-box slider");e.appendChild(l,n),e.appendChild(a,l);var l=e.createElement("br");e.appendChild(a,l);var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n  ");e.appendChild(a,l);var l=e.createElement("label");e.setAttribute(l,"for","check-box3");var n=e.createTextNode("check-box slider dark");e.appendChild(l,n),e.appendChild(a,l);var l=e.createElement("br");e.appendChild(a,l);var l=e.createTextNode("\n\n\n  ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n  ");e.appendChild(a,l);var l=e.createElement("label");e.setAttribute(l,"for","check-box4");var n=e.createTextNode("check-box slider light");e.appendChild(l,n),e.appendChild(a,l);var l=e.createElement("br");e.appendChild(a,l);var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n  ");e.appendChild(a,l);var l=e.createElement("label");e.setAttribute(l,"for","check-box5");var n=e.createTextNode("check-box toggle");e.appendChild(l,n),e.appendChild(a,l);var l=e.createElement("br");e.appendChild(a,l);var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n  ");e.appendChild(a,l);var l=e.createElement("label");e.setAttribute(l,"for","check-box6");var n=e.createTextNode("check-box toggle green");e.appendChild(l,n),e.appendChild(a,l);var l=e.createElement("br");e.appendChild(a,l);var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n  ");e.appendChild(a,l);var l=e.createElement("label");e.setAttribute(l,"for","check-box7");var n=e.createTextNode("check-box toggle red");e.appendChild(l,n),e.appendChild(a,l);var l=e.createTextNode("\n");e.appendChild(a,l),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","panel");var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createElement("h2"),n=e.createTextNode("select-box");e.appendChild(l,n),e.appendChild(a,l);var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createElement("label"),n=e.createTextNode("Selected: ");e.appendChild(l,n);var n=e.createComment("");e.appendChild(l,n),e.appendChild(a,l);var l=e.createElement("br");e.appendChild(a,l);var l=e.createTextNode("\n\n\n  ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createElement("label"),n=e.createTextNode("Selected: ");e.appendChild(l,n);var n=e.createComment("");e.appendChild(l,n),e.appendChild(a,l);var l=e.createElement("br");e.appendChild(a,l);var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("\n\n  ");e.appendChild(a,l);var l=e.createElement("label"),n=e.createTextNode("Selected: ");e.appendChild(l,n);var n=e.createComment("");e.appendChild(l,n),e.appendChild(a,l);var l=e.createTextNode("\n");e.appendChild(a,l),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var l=e.childAt(t,[2]),n=e.childAt(t,[4]),r=new Array(14);return r[0]=e.createMorphAt(l,3,3),r[1]=e.createMorphAt(l,8,8),r[2]=e.createMorphAt(l,13,13),r[3]=e.createMorphAt(l,18,18),r[4]=e.createMorphAt(l,23,23),r[5]=e.createMorphAt(l,28,28),r[6]=e.createMorphAt(l,33,33),r[7]=e.createMorphAt(n,3,3),r[8]=e.createMorphAt(e.childAt(n,[5]),1,1),r[9]=e.createMorphAt(n,8,8),r[10]=e.createMorphAt(e.childAt(n,[10]),1,1),r[11]=e.createMorphAt(n,13,13),r[12]=e.createMorphAt(e.childAt(n,[15]),1,1),r[13]=e.createMorphAt(t,6,6,a),r},statements:[["inline","check-box",[],["checked",["subexpr","@mut",[["get","checkboxValue1",["loc",[null,[7,22],[7,36]]]]],[],[]],"checkboxId","check-box1"],["loc",[null,[7,2],[7,62]]]],["inline","checkbox-slider",[],["checked",["subexpr","@mut",[["get","checkboxValue2",["loc",[null,[10,28],[10,42]]]]],[],[]],"checkboxId","check-box2"],["loc",[null,[10,2],[10,68]]]],["inline","check-box",[],["class","slider dark","checked",["subexpr","@mut",[["get","checkboxValue3",["loc",[null,[13,42],[13,56]]]]],[],[]],"checkboxId","check-box3"],["loc",[null,[13,2],[13,82]]]],["inline","check-box",[],["class","slider light","checked",["subexpr","@mut",[["get","checkboxValue4",["loc",[null,[17,43],[17,57]]]]],[],[]],"checkboxId","check-box4"],["loc",[null,[17,2],[17,83]]]],["inline","check-box",[],["class","toggle","checked",["subexpr","@mut",[["get","checkboxValue5",["loc",[null,[20,37],[20,51]]]]],[],[]],"checkboxId","check-box5"],["loc",[null,[20,2],[20,77]]]],["inline","check-box",[],["class","toggle green","checked",["subexpr","@mut",[["get","checkboxValue6",["loc",[null,[23,43],[23,57]]]]],[],[]],"checkboxId","check-box6"],["loc",[null,[23,2],[23,83]]]],["inline","check-box",[],["class","toggle red","checked",["subexpr","@mut",[["get","checkboxValue7",["loc",[null,[26,41],[26,55]]]]],[],[]],"checkboxId","check-box7"],["loc",[null,[26,2],[26,81]]]],["inline","select-box",[],["selected",["subexpr","@mut",[["get","selectBoxValue",["loc",[null,[35,13],[35,27]]]]],[],[]],"options",["subexpr","@mut",[["get","selectBoxOptions",["loc",[null,[36,12],[36,28]]]]],[],[]],"placeholder","Please select..."],["loc",[null,[34,2],[37,36]]]],["content","selectBoxValue",["loc",[null,[39,19],[39,37]]]],["inline","select-box",[],["class","light","selected",["subexpr","@mut",[["get","selectBoxValue2",["loc",[null,[44,13],[44,28]]]]],[],[]],"options",["subexpr","@mut",[["get","selectBoxOptions2",["loc",[null,[45,12],[45,29]]]]],[],[]],"placeholder","Please select..."],["loc",[null,[42,2],[46,36]]]],["content","selectBoxValue2",["loc",[null,[48,19],[48,38]]]],["inline","select-box",[],["class","dark","selected",["subexpr","@mut",[["get","selectBoxValue3",["loc",[null,[52,13],[52,28]]]]],[],[]],"options",["subexpr","@mut",[["get","selectBoxOptions2",["loc",[null,[53,12],[53,29]]]]],[],[]],"placeholder","Please select..."],["loc",[null,[50,2],[54,36]]]],["content","selectBoxValue3",["loc",[null,[56,19],[56,38]]]],["content","outlet",["loc",[null,[58,0],[58,10]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",l=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(l));return{"default":n}}catch(r){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-ui-components",version:"0.0.1+44990700"});