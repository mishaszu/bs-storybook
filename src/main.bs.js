'use strict';

var List = require("bs-platform/lib/js/list.js");
var React = require("@storybook/react");

function createStory(title, decorators, _module, param) {
  var story = React.storiesOf(title, _module);
  List.iter((function (dec) {
          story.addDecorator(dec);
          
        }), decorators);
  return {
          add: (function (name, c) {
              story.add(name, c);
              
            })
        };
}

exports.createStory = createStory;
/* @storybook/react Not a pure module */
