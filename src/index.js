import React from "react";
import { render } from "react-dom";
import { Router, hashHistory } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import DevTools from "./DevTools";
import routes from "./routes";
import "./country.css";
import Footer from "./presentational/footer.component";

render(
  <Provider store={store}>
    <div>
      <Router history={hashHistory} routes={routes} />
      <DevTools />
      <Footer />
    </div>
  </Provider>,
  document.getElementById("root")
);
