import React from "react";

import "./TecList.css";

interface TecListProps {
  tecList: {
    name: string;
    imgSrc: string;
  }[]
}

const TecList = ({ tecList }: TecListProps) => {
  return (
    <ul className="list_tec">
      {tecList.map((tec, index) => (
        <li key={index + "tec"}>
          <img className="icons" src={tec.imgSrc} alt={tec.name} />
          {tec.name}
        </li>
      ))}
    </ul>
  );
};

export default TecList;
