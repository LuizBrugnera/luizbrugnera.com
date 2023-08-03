import React from "react";

import socialcompass from "../assets/socialcompass.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/node.png";
import mongo from "../assets/icons/mongo.png";
import ProjectList from "./ProjectList";

const Project = () => {
  const projList = [
    {
      href: "https://compass-social-2hbp.vercel.app/",
      img: socialcompass,
      alt: "Compass Social",
      title: "Compass Social",
      description:
        " Uma Redes sociais para compartilhar fotos, ideias e projetos",
      techs: [
        {
          name: "React",
          icon: react,
        },
        {
          name: "Node",
          icon: node,
        },
        {
          name: "MongoDB",
          icon: mongo,
        },
      ],
    },
    {
      href: "https://compass-social-2hbp.vercel.app/",
      img: socialcompass,
      alt: "Compass Social",
      title: "Compass Social",
      description:
        " Uma Redes sociais para compartilhar fotos, ideias e projetos",
      techs: [
        {
          name: "React",
          icon: react,
        },
        {
          name: "Node",
          icon: node,
        },
        {
          name: "MongoDB",
          icon: mongo,
        },
      ],
    },
  ];

  return (
    <section id="projects">
      <h1 className="title">Projetos</h1>
      <ProjectList projList={projList} />
    </section>
  );
};

export default Project;
