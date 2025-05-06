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
        <div className="feed_categories_wrapper">
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
            <ul className="feed_categories">
              <h3>Popular Producers</h3>
              <div className="feed_producer">
                <FaUserAlt size={20} color="#fff" />
                <span>Mariam</span>
              </div>
              <div className="feed_producer">
                <FaUserAlt size={20} color="#fff" />
                <span>Mariam</span>
              </div>
              <div className="feed_producer">
                <FaUserAlt size={20} color="#fff" />
                <span>Mariam</span>
              </div>
              <div className="feed_producer">
                <FaUserAlt size={20} color="#fff" />
                <span>Mariam</span>
              </div>
            </ul>
          </div>
        </div>
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

          <FeedCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
