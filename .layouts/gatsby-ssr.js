const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("meta", {
      key: "robots-noindex",
      name: "robots",
      content: "noindex",
    }),
  ]);
};
