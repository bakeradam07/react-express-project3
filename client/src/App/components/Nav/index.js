import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="/">A Night In!</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="/users">Users</a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href="/movies">Movies</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/drinks">Drinks</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/profile">Profile</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Nav;
