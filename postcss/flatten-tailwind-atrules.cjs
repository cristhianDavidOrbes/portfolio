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
  Rule: (rule) => {
    if (rule.selector !== ".transition" && rule.selector !== ".transition-colors") {
      return;
    }

    const transitionPropertyValue =
      rule.selector === ".transition"
        ? "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter"
        : "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke";

    rule.walkDecls((decl) => {
      if (decl.prop === "transition-property") {
        decl.value = transitionPropertyValue;
      }

      if (
        decl.prop === "transition-timing-function" &&
        decl.value.includes("var(--tw-ease")
      ) {
        decl.value = "cubic-bezier(0.4, 0, 0.2, 1)";
      }

      if (decl.prop === "transition-duration" && decl.value.includes("var(--tw-duration")) {
        decl.value = ".15s";
      }
    });
  },
});

module.exports.postcss = true;
