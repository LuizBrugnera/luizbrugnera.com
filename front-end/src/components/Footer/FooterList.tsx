import React from "react";

import "./FooterList.css";

interface FooterListProps {
  arrItems: {
    img?: string;
    alt?: string;
    span?: string;
    a?: {
        text: string;
        href: string;
        inPage?: boolean;
    };
    change?: boolean;
  }[];
  title: string;
}

const FooterList = ({ arrItems, title }: FooterListProps) => {
  return (
    <>
      <h2 className="title_footer">{title}</h2>
      <ul>
        {arrItems.map((item, index) => (
          <li key={index + "fl"}>
            <button className="item_footer"
              onClick={() => {
                if(item.a?.inPage) {
                  window.location.href = item.a.href;
                } else {
                  window.open(item.a?.href, "_blank", "noopener noreferrer")
                }
              }
              }
            >
              {item.img && (
                <img
                  className={item.change ? "icons change_color" : "icons"}
                  src={item.img}
                  alt={item.alt}
                />
              )}
              {item.span && <span>{item.span}</span>}
              {item.a && <span>{item.a.text} </span>}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterList;
