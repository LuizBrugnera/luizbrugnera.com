import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo"> &lt;LuizDev /&gt; </div>
      <ul>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#aboutme">Sobre mim</a>
        </li>
        <li>
          <a
            href="https://github.com/LuizBrugnera"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/luiz-ricardo-brugnera-8b6810236/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
