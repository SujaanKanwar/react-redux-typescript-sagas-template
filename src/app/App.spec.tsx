import React from "react";
import App from "./App";
import ReactDom from "react-dom";

describe("App should render", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<App />, div);
    ReactDom.unmountComponentAtNode(div);
  });
});
