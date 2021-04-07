'use strict';

var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");
var AddonKnobs = require("@storybook/addon-knobs");

function text(label, defaultValue, param) {
  return AddonKnobs.text(label, Js_null_undefined.fromOption(defaultValue));
}

function $$boolean(label, defaultValueOpt, param) {
  var defaultValue = defaultValueOpt !== undefined ? defaultValueOpt : false;
  return AddonKnobs.boolean(label, defaultValue);
}

function number(label, defaultValueOpt, rangeConfiguration, param) {
  var defaultValue = defaultValueOpt !== undefined ? defaultValueOpt : 0;
  if (rangeConfiguration === undefined) {
    return AddonKnobs.number(label, defaultValue, undefined);
  }
  var config = {
    range: true,
    min: rangeConfiguration.min,
    max: rangeConfiguration.max,
    step: rangeConfiguration.step
  };
  return AddonKnobs.number(label, defaultValue, config);
}

function color(label, defaultValue, param) {
  return AddonKnobs.color(label, Js_null_undefined.fromOption(defaultValue));
}

function select(label, options, defaultValue, param) {
  return AddonKnobs.select(label, options, Js_null_undefined.fromOption(defaultValue));
}

function date(label, defaultValue, param) {
  return AddonKnobs.date(label, Js_null_undefined.fromOption(defaultValue));
}

function button(label, handler, param) {
  return AddonKnobs.button(label, handler);
}

exports.text = text;
exports.$$boolean = $$boolean;
exports.number = number;
exports.color = color;
exports.select = select;
exports.date = date;
exports.button = button;
/* @storybook/addon-knobs Not a pure module */
