import React from "react";
import { FaUserAlt } from "react-icons/fa";
import FeedImg from "../../assets/feed-img.png";
import "./FeedCard.css";

const FeedCard = () => {
  return (
    <div className="feed_wrapper">
      <div>
        <ul className="feed_categories">
          <li>Trending Categories</li>
          <li>Mariam</li>
          <li>Winfried</li>
          <li>Winfried</li>
          <li>Winfried</li>
          <li>Winfried</li>
        </ul>
      </div>
      <div>
        <div>
          <ul className="feed_genres">
            <li>All</li>
            <li>Afro Beats</li>
            <li>World</li>
            <li>Juju</li>
            <select name="" id="">
              <option>Filter</option>
              <option>Name</option>
              <option>Genre</option>
            </select>
          </ul>
        </div>
        <div className="feed_card">
       <div>
       <div className="feed_card_header">
            {" "}
            <FaUserAlt size={18} color="#fff" />
            <span>Miriam</span>
            <span>@oholy</span>
            <span></span>
            <span>2 hours ago</span>
          </div>

          <div className="feed_card_content">
            <img src={FeedImg} alt="" />
            <div>
            <h3>Winspread Cabasky</h3>
            <div>
              <div className="feed_card_singer">
                <span>beat by Mariam</span>
                <span>@oholy</span>
              </div>
              <span>released on 23 November 2022</span>
              <div className="feed_card_buy">
                <span>NGN 70,000</span>
                <button>Buy Now</button>
              </div>
            </div>
            </div>
          </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
