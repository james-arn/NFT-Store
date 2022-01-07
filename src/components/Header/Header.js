import React from "react";
import "./Header.css";
import punkLogo from "../../assets/header/cryptopunk-logo.png";
import searchIcon from "../../assets/header/search.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="Punk Logo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="Search Icon" />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, item or user..."
        ></input>
      </div>

      <div className="headerItems">
        <p>Drop</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="loginButton">LOG IN</div>
      </div>
    </div>
  );
};

export default Header;
