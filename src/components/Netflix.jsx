import React from "react";
import "../index.css";
const Netflix = ({ item }) => {
  //   const { sname, imgscr, title, link } = item;
  return (
    <div className="cards">
      <div className="card">
        <img src={item.imgscr} alt="img" className="card__img" />
        <div className="card__info">
          <span className="card__category">{item.title}</span>
          <h3 className="card__title">{item.sname}</h3>
          <a href={item.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Netflix;
