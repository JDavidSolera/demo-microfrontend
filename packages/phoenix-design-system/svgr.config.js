module.exports = {
  icon: true,
  titleProp: true,
  expandProps: true,
  replaceAttrValues: {
    "#86888C": "currentColor",
  },
  typescript: true,
  ref: true,
  ignoreExisting: true,
  template: (variables, { tpl }) => tpl`
        ${variables.imports};${"\n"}
        ${"\n"}
        ${variables.interfaces};${"\n"}
        ${"\n"}
        function ${variables.componentName} (${variables.props}) {
            return (
                ${variables.jsx}
            )
        }${"\n"}
        ${"\n"}
        ${variables.exports};
      `,
};
