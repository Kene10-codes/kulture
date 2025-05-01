import React from "react";
import CardImg from "../../assets/card-img.png";
import "./PopularCard.css";

const PopularCard = () => {
  return (
    <div className="card">
      <div className="card_wrapper">
        <img src={CardImg} alt="" />
        <div className="card_content">
          <h3>Wintspread</h3>
          <span className="card_span">@zojaman</span>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
