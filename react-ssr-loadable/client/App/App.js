import React, { useState, useEffect, Suspense } from "react";
import loadable from "@loadable/component";

const Home = loadable(() =>
  import(
    /* webpackChunkName: "home" */
    /* webpackPrefetch: true */
    "../pages/Home"
  )
);
const About = loadable(() =>
  import(
    /* webpackChunkName: "about" */
    /* webpackPrefetch: true */
    "../pages/About"
  )
);

import "./styles.css";
import Navigation from "../components/Navigation";

const Router = ({ route }) => {
  switch (route) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    default:
      return null;
  }
};

const App = () => {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    window.onpopstate = (e) => {
      if (e && e.state && e.state.route) {
        setRoute(route);
      }
    };
  }, []);

  const loadPage = (route) => {
    window.history.pushState({ route }, "", `${route}`);
    setRoute(route);
  };

  return (
    <div>
      <Navigation route={route} setRoute={loadPage} />
      <Router route={route} fallback={<div>Loading...</div>} />
    </div>
  );
};

export default App;
