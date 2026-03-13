module.exports = () => ({
  postcssPlugin: "flatten-tailwind-atrules",
  AtRule: {
    layer: (atRule) => {
      if (atRule.nodes && atRule.nodes.length > 0) {
        atRule.replaceWith(...atRule.nodes);
        return;
      }

      atRule.remove();
    },
    property: (atRule) => {
      atRule.remove();
    },
  },
});

module.exports.postcss = true;
