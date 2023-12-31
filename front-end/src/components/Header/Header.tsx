import React, { useEffect, useState } from 'react'

import react_icon from "../../assets/icons/react.png";
import typescript_icon from "../../assets/icons/typescript.png";
import node_icon from "../../assets/icons/node.png";
import mysql_icon from "../../assets/icons/mysql.png";
import mongo_icon from "../../assets/icons/mongo.png";
import aws_icon from "../../assets/icons/aws.png";
import whatsapp_icon from "../../assets/icons/whatsapp.png";
import github_icon from "../../assets/icons/github.png";
import linkedin_icon from "../../assets/icons/linkedin.png";

import TecList from './TecList';
import SocialButton from './SocialButton';

import "./Header.css";

const Header = () => {

  const teclist = [
    {
      name: "React",
      imgSrc: react_icon,
    },
    {
      name: "Typescript",
      imgSrc: typescript_icon,
    },
    {
      name: "Node",
      imgSrc: node_icon,
    },
    {
      name: "mySQL",
      imgSrc: mysql_icon,
    },
    {
      name: "Mongo",
      imgSrc: mongo_icon,
    },
    {
      name: "AWS",
      imgSrc: aws_icon,
    },
  ];

  const [infoArr, setInfoArr] = useState([
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/luiz-ricardo-brugnera-8b6810236/",
      imgSrc: linkedin_icon,
    },
    {
      name: "Github",
      href: "https://github.com/LuizBrugnera",
      imgSrc: github_icon,
    },
    {
      name: "Whatsapp",
      href: "https://api.whatsapp.com/send?phone=555499276395&text=Ola!%20Te%20conheci%20do%20seu%20portfolio",
      imgSrc: whatsapp_icon,
    },
  ]);

  const [isScreenSmall, setIsScreenSmall] = useState(false);

  const checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 715);
    if(window.innerWidth < 715){
      setInfoArr([
        {
          name: "Linkedin",
          href: "https://www.linkedin.com/in/luiz-ricardo-brugnera-8b6810236/",
          imgSrc: linkedin_icon,
        },
        {
          name: "Whatsapp",
          href: "https://api.whatsapp.com/send?phone=555499276395&text=Ola!%20Te%20conheci%20do%20seu%20portfolio",
          imgSrc: whatsapp_icon,
        },
      ])
    } else {
      setInfoArr([
        {
          name: "Linkedin",
          href: "https://www.linkedin.com/in/luiz-ricardo-brugnera-8b6810236/",
          imgSrc: linkedin_icon,
        },
        {
          name: "Github",
          href: "https://github.com/LuizBrugnera",
          imgSrc: github_icon,
        },
        {
          name: "Whatsapp",
          href: "https://api.whatsapp.com/send?phone=555499276395&text=Ola!%20Te%20conheci%20do%20seu%20portfolio",
          imgSrc: whatsapp_icon,
        },
      ])
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  return (
    <header className="header" id="home">
        
        <div>
          <h1 className="header_title">Luiz Brugnera Desenvolvedor</h1>
          <div className="container_sub_title">
            <h1>Fullstack</h1>
            {!isScreenSmall && (<TecList tecList={teclist}/>)}
          </div>
        </div>
        <div className="header_abstract">
          <p>
            Me chamo Luiz Ricardo Brugnera, sou graduando no IFSUL PASSO FUNDO,
            20 anos, desenvolvedor fullstack React, Node e Next, saiba mais
            sobre mim
          </p>
        </div>

        <SocialButton infoArr={infoArr}/>
      </header>
  )
}

export default Header

