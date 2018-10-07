import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";

window.Intercom("boot", {
  app_id: "vtb8kkxp"
});

window.Intercom("update");

const render = () => {
  ReactDOM.render(<Router />, document.getElementById("root"));
};

render();

if (module.hot) {
  module.hot.accept("./Router", render);
}
