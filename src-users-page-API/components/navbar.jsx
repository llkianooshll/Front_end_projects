import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar shadow navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link active" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="users">Users</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="register">Register</NavLink>
      </li>
    </ul>
  </div>
</nav>
     );
}
 
export default Navbar;