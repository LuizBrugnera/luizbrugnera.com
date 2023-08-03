import React from "react";

import "./SocialButton.css";

interface SocialButtonProps {
    infoArr: {
        name: string;
        href: string;
        imgSrc: string;
    }[];
}

const SocialButton = ({infoArr} : SocialButtonProps) => {
  return (
    <ul className="contacts">
      {infoArr.map((info) => (
        <li>
            <a href={info.href} target="_blank" rel="noreferrer">
                <img className="icons" src={info.imgSrc} alt={info.name} />
                {info.name}
            </a>
        </li>
        ))}
    </ul>
  );
};

export default SocialButton;
