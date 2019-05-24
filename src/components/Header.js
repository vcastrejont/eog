import React from "react";
import Weather from "./Weather";

const Header = props => {
  const name = "Victor Castrejon's";
  return (
    <header>
      <div id="title">
        <h1>{name}</h1>
        <span>EOG React Visualization Assessment</span>
      </div>

      <Weather />
    </header>
  );
};

export default Header;
