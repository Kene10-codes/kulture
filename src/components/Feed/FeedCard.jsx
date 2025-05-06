import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { ImShare } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import FeedImg from "../../assets/feed-img.png";
import "./FeedCard.css";

const FeedCard = () => {
  return (
    <div className="feed_wrapper">
      <div className="feed_card">
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
        <div className="feed_card_footer">
          <div className="feed_card_footer_content">
            <ImShare size={18} color="#fff" />
            <span>Share</span>
          </div>
          <div className="feed_card_footer_content">
            <FaRegHeart size={18} color="#fff" />
            <span>Save for later</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
