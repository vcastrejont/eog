import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside>
      <div className="profile">
        <figure>
          <img src="/img/profile.jpg" alt="" />
        </figure>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/map/" exact activeClassName="active">
              Map Visualization
            </NavLink>
          </li>
          <li>
            <NavLink to="/chart">Charts Visualization</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
