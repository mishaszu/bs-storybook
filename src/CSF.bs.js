'use strict';

var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");

var bsExports = ["$$default"];

function make(title, component, decorators, parameters, includeStories, excludeStories, param) {
  return {
          title: title,
          component: Js_null_undefined.fromOption(component),
          decorators: Js_null_undefined.fromOption(decorators),
          parameters: Js_null_undefined.fromOption(parameters),
          includeStories: Js_null_undefined.fromOption(includeStories),
          excludeStories: Belt_Option.mapWithDefault(excludeStories, bsExports, (function (es) {
                  return es.concat(bsExports);
                }))
        };
}

function addMeta(csfStory, name, decorators, parameters, param) {
  csfStory.story = {
    name: Js_null_undefined.fromOption(name),
    decorators: Js_null_undefined.fromOption(decorators),
    parameters: Js_null_undefined.fromOption(parameters)
  };
  
}

exports.bsExports = bsExports;
exports.make = make;
exports.addMeta = addMeta;
/* No side effect */
