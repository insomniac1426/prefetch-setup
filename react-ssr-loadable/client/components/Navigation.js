import React from "react";

const Navigation = ({ setRoute, route }) => {
  return (
    <ul>
      <li className={`page-name ${route === "/" ? "selected" : ""}`}>
        <a
          id="home-link"
          href=""
          onClick={(e) => {
            e.preventDefault();
            setRoute("/");
          }}
        >
          Home
        </a>
      </li>
      <li className={`page-name ${route === "/about" ? "selected" : ""}`}>
        <a
          id="about-link"
          href=""
          onClick={(e) => {
            e.preventDefault();
            setRoute("/about");
          }}
        >
          About
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
