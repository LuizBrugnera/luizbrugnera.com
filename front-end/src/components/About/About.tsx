import React from "react";
import img_brugnera from "../../assets/img_brugnera.jpg";

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h1 className="title_about margintop">Sobre mim</h1>
      <ul className="list_about">
        <li>
          <div className="container_about">
            <img src={img_brugnera} alt="Luiz Ricardo Brugnera" className="my_photo"/>
            <div>
              <p className="about_me_photo">
                Olá, sou Luiz Ricardo Brugnera, um entusiasta da programação
                apaixonado por resolver problemas complexos e transformar ideias
                em realidade através do código. Iniciei minha jornada na programação há dois anos, quando entrei na faculdade e, desde
                então, tenho mergulhado profundamente tanto no front-end quanto
                no back-end.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="form_exp">
            <div className="about_item">
              <h2>Experiências</h2>
              <p>
                <span>2021 - 2023</span> - Freelancer<br />
                Desenvolvimento de Projetos Web com React e Java,<br />
                Projetos Backend feitos com Python e Django.
              </p>
              <p>
                <span>2023 - 2023</span> - Estágios de Desenvolvedor Fullstack
                em React e Node com AWS.<br />
                Desenvolvimento de um projeto de rede social da empresa utilizando React e Node. 
              </p>
            </div>

            <div className="about_item">
              <h2>Formações</h2>
              <p>Graduando em Ciência da Computação no IFSUL Passo Fundo</p>
              <p>Cursos na Udemy e Alura</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
