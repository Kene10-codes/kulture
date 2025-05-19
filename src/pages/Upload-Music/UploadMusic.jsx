import React from "react";
import SearchNavbar from "../../components/SearchNavbar/SearchNavbar";
import Footer from "../../components/Footer/Footer";
import Upload from "../../assets/cloud.png";
import "./UploadMusic.css";

const UploadMusic = () => {
  return (
    <div className="upload_music_container">
      <SearchNavbar />
      <div className="upload_content_wrapper">
        <h3 className="upload_content_text">Upload your beats to Kulture</h3>
        <div className="upload_browse_content">
          <div>
            <img src={Upload} alt="Upload Music" width="70" />
            <input type="file" />
          </div>
          <span>Browse for files or drag and drop them here</span>
          <h3>
            Max. File Size: <span>500 MB</span>
          </h3>
        </div>
        <div className="upload_content_nav">
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UploadMusic;
