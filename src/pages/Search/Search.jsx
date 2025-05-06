import React from "react";
import "./Search.css";
import SearchNavbar from "../../components/SearchNavbar/SearchNavbar";
import FeedCard from "../../components/Feed/FeedCard";
import BeatImgOne from "../../assets/beat1.png";
import BeatImgTwo from "../../assets/beat2.png";
import BeatImgThree from "../../assets/beat3.png";
import BeatImgFour from "../../assets/beat4.png";
import Footer from "../../components/Footer/Footer";


const Search = () => {
  return (
    <div className="search_page_container">
      <SearchNavbar />
      <div className="search_page_content">
        <ul>
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

        <div className="search_page_cards">
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
      </div>

      <div className="browse_beats_section">
        <div className="browse_beats_header">
          <h3>Browse All</h3>
          <h3>View All</h3>
        </div>

        <div className="beats_wrapper">
          <div className="beats_container">
            <img src={BeatImgOne} alt="" />
            <div className="beats_singer_info">
              <span>Afro</span>
              <span>Beats by Winifred</span>
            </div>
          </div>
          <div className="beats_container">
            <img src={BeatImgTwo} alt="" />
            <div className="beats_singer_info">
              <span>Afro</span>
              <span>Beats by Winifred</span>
            </div>
          </div>
          <div className="beats_container">
            <img src={BeatImgThree} alt="" />
            <div className="beats_singer_info">
              <span>Afro</span>
              <span>Beats by Winifred</span>
            </div>
          </div>
          <div className="beats_container">
            <img src={BeatImgFour} alt="" />
            <div className="beats_singer_info">
              <span>Afro</span>
              <span>Beats by Winifred</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
