import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import bgCover from "../../assets/bg-cover.png";
import PopularCard from "../../components/PopularCard/PopularCard";
import "./Home.css";
import FeedCard from "../../components/Feed/FeedCard";

const Home = () => {
  return (
    <div>
      <div className="image_background">
        <Navbar />
        <div>
          {" "}
          <h2>Find and upload trending beat for music production</h2>
          <h3 className="image_head">
            Buy bests beats from the people who upload them. You can find new
            beats, vocals, share your favorites directly.
          </h3>
          <div className="search_container">
            <div>
              {" "}
              <input
                type="search"
                name=""
                placeholder="Find trending beats"
                id=""
              />
            </div>
            <button>Upload your beat</button>
          </div>
        </div>
        <div></div>
      </div>

      <div className="popular_section">
        <h3 className="card_head">Popular Uploads</h3>
        <div className="card">
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
      </div>

      <div className="feed_section">
        <h3 className="feed_head">Feed</h3>
        <FeedCard />
      </div>
    </div>
  );
};

export default Home;
