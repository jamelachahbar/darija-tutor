import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">Darija Tutor</div>
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
