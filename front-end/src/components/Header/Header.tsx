import React from 'react'

import react_icon from "../assets/icons/react.png";
import typescript_icon from "../assets/icons/typescript.png";
import node_icon from "../assets/icons/node.png";
import mysql_icon from "../assets/icons/mysql.png";
import mongo_icon from "../assets/icons/mongo.png";
import aws_icon from "../assets/icons/aws.png";
import whatsapp_icon from "../assets/icons/whatsapp.png";
import github_icon from "../assets/icons/github.png";
import linkedin_icon from "../assets/icons/linkedin.png";

const Header = () => {
  return (
    <header className="header" id="home">
        
        <div>
          <h1 className="header_title">Luiz Brugnera Desenvolvedor</h1>
          <div className="container_sub_title">
            <span className="header_sub_title">Fullstack</span>
            <ul className="list_tec">
              <li>
                <img className="icons" src={react_icon} alt="React" />
                React
              </li>
              <li>
                <img className="icons" src={typescript_icon} alt="Typescript" />
                TypeScript
              </li>
              <li>
                <img className="icons" src={node_icon} alt="Node" />
                Node
              </li>
              <li>
                <img className="icons" src={mysql_icon} alt="mySQL" />
                mySQL
              </li>
              <li>
                <img className="icons" src={mongo_icon} alt="Mongo" />
                Mongo
              </li>
              <li>
                <img className="icons" src={aws_icon} alt="AWS" />
                AWS
              </li>
            </ul>
          </div>
        </div>
        <div className="abstract">
          <p>
            Me chamo Luiz Ricardo Brugnera, sou graduando no IFSUL PASSO FUNDO,
            20 anos, desenvolvedor fullstack React, Node e Next, saiba mais
            sobre mim
          </p>
        </div>

        <ul className="contacts">
          <li>
            <a href="https://www.linkedin.com/in/luiz-ricardo-brugnera-8b6810236/" target="_blank" rel="noreferrer"> 
              <img className="icons" src={linkedin_icon} alt="Linkedin" />
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/LuizBrugnera" target="_blank" rel="noreferrer">
              <img className="icons" src={github_icon} alt="Github" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=555499276395&text=Ola!%20Te%20conheci%20do%20seu%20portfolio" target="_blank" rel="noreferrer">
              <img className="icons" src={whatsapp_icon} alt="WhatsApp" />
              Whatsapp
            </a>
          </li>
        </ul>
      </header>
  )
}

export default Header