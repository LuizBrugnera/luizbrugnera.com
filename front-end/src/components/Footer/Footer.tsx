import React from "react";

import whatsapp_icon from "../../assets/icons/whatsapp.png";
import github_icon from "../../assets/icons/github.png";
import linkedin_icon from "../../assets/icons/linkedin.png";

import FooterList from "./FooterList";
import "./Footer.css";

const Footer = () => {
  const contato = [
    {
      a: {
        text: "Linkedin",
        href: "https://www.linkedin.com/in/luiz-ricardo-brugnera-8b6810236/",
      },
      img: linkedin_icon,
    },
    {
      a: {
        text: "GitHub",
        href: "https://github.com/LuizBrugnera",
      },
      img: github_icon,
      change: true,
    },
    {
      a: {
        text: "WhatsApp",
        href: "https://api.whatsapp.com/send?phone=555499276395&text=Ola!%20Te%20conheci%20do%20seu%20portfolio",
      },
      img: whatsapp_icon,
    },
  ];

  const navegar = [
    {
      a: {
        text: "Inicio",
        href: "#home",
        inPage: true,
      },
    },
    {
      a: {
        text: "Projetos",
        href: "#projects",
        inPage: true,
      },
    },
    {
      a: {
        text: "Sobre mim",
        href: "#aboutme",
        inPage: true,
      },
    },
  ];

  const projetos = [
    {
      a: {
        text: "Projeto Social Compass",
        href: "https://compass-social-2hbp.vercel.app/",
      },
    },
    {
      a: {
        text: "Projeto LiftFit",
        href: "https://compass-social-2hbp.vercel.app/",
      },
    },
  ];

  return (
    <footer className="footer">
      <div>
        <FooterList arrItems={navegar} title="Navegar" />
      </div>
      <div>
        <FooterList arrItems={projetos} title="Projetos Principais" />
      </div>
      <div>
        <FooterList arrItems={contato} title="Contato" />
      </div>
    </footer>
  );
};

export default Footer;
