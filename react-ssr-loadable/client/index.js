import React from "react";
import { loadableReady } from "@loadable/component";
import { hydrate } from "react-dom";
import App from "./App";

loadableReady(() => {
  hydrate(<App />, document.getElementById("root"));
});
