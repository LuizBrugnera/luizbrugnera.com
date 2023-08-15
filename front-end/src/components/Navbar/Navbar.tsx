import React, { useEffect, useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [open, setOpen] = useState(false);

  const checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 1300);
  };

  const changeOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className="nav">
      <div className="logo"> &lt;LuizDev /&gt; </div>
      {isScreenSmall ? (
        <>
          <div className={`hamburger-icon`} onClick={changeOpen}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {open ? (
            <ul className="nav-links mobile" onClick={changeOpen}>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#about">Sobre mim</a>
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
          ) : null}
        </>
      ) : (
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
      )}
    </nav>
  );
};

export default Navbar;
