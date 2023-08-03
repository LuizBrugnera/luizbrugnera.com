import React from "react";

interface ProjectListProps {
  projList: {
      href: string;
      img: string;
      alt: string;
      title: string;
      description: string;
      techs: {
        name: string;
        icon: string;
      }[];
  }[];
}
const ProjectList = ({ projList }: ProjectListProps) => {
  return (
    <ul className="proj_list">
      {projList.map((proj) => (
        <li className="proj_item">
          <button
            onClick={() =>
              window.open(proj.href, "_blank", "noopener noreferrer")
            }
          >
            <div className="proj_box">
              <img src={proj.img} alt={proj.alt} />
              <div>
                <h2>{proj.title}</h2>
                <p>{proj.description}</p>
                <ul>
                  {proj.techs.map((tech, index) => (
                    <li key={index} className="proj_icons">
                      <img src={tech.icon} alt={tech.name} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
