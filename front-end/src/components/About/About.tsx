import React from "react";
import img_brugnera from "../assets/img_brugnera.jpg";
const About = () => {
  return (
    <section id="about">
      <h1 className="title margintop">Sobre mim</h1>
      <ul className="list_about">
        <li>
          <div className="container_about">
            <img
              src={img_brugnera}
              alt="Luiz Ricardo Brugnera"
            />
            <div>
              <div className="about_item">
                <h2>Experiências</h2>
                <p>
                  <span>2021 - 2023</span> - Freelancer
                </p>
                <p>
                  <span>2023 - 2023</span> - Estágios de Desenvolvedor Fullstack
                  em React e Node com AWS
                </p>
              </div>

              <div className="about_item">
                <h2>Formações</h2>
                <p>Graduando em Ciência da Computação no IFSUL Passo Fundo</p>
                <p>Cursos na Udemy e Alura</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p>
            Olá, sou Luiz Ricardo Brugnera, um entusiasta da programação
            apaixonado por resolver problemas complexos e transformar ideias em
            realidade através do código. Iniciei minha jornada no mundo da
            programação há dois anos, quando entrei na faculdade e, desde então,
            tenho mergulhado profundamente tanto no front-end quanto no
            back-end.
            </p>

          <p>
            Minha experiência abrange desde o desenvolvimento de interfaces de
            usuário intuitivas até a criação de servidores robustos e bancos de
            dados eficientes. Ao longo dos anos, tive a oportunidade de
            trabalhar em projetos freelancers para diversas pessoas em minha
            cidade, ajudando a atender suas necessidades específicas e
            entregando soluções que superaram suas expectativas.
            </p>
        </li>
      </ul>
    </section>
  );
};

export default About;
