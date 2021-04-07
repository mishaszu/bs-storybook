type section

type webpackModule

type chapter = unit => React.element

type decorator = chapter => React.element

@bs.val @bs.module("@storybook/react")
external storiesOf: (string, webpackModule) => section = "storiesOf"

@bs.send external add: (section, string, chapter) => section = "add"

@bs.send external addDecorator: (section, decorator) => section = "addDecorator"
