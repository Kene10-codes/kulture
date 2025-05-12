import React from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../assets/logo.png";
import "./SearchNavbar.css";

const SearchNavbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo_container">
        <img className="logo" src={Logo} alt="Kulture Logo" />{" "}
        <span>Kulture</span>
      </div>
      <div className="search_container">
        <input type="search" name="search" placeholder="Search" id="" />
      </div>
      <div className="nav_menu">
        <div className="menu">
       
            <FaHome size={18} color="#fff" />
            <h4>Home</h4>
      
        </div>
        <div className="menu">
          <FaShoppingCart size={18} color="#fff" />
          <h4>Cart</h4>
        </div>
        <div className="menu">
          <FaFileUpload size={18} color="#fff" />
          <h4>Upload</h4>
        </div>
        <div className="menu">
          <FaUserAlt size={18} color="#fff" />
          <h4>Hi, James</h4>
          <IoIosArrowDown size={18} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;
