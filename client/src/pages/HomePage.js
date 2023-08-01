import React from "react";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Darija Tutor!</h1>
      <p>Learn Moroccan Darija with interactive lessons.</p>
      <button>
        <a href="/login">Login</a>
      </button>
      <button>
        <a href="/register">Register</a>
      </button>
    </div>
  );
}

export default HomePage;
