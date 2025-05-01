import React from "react";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div></div>
      <div className="nav_menu">
        <div className="menu">
          <FaHome size={18} color="#fff"  />
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
          <IoIosArrowDown size={18} color="#fff"  />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
