import React from "react";

const Header = () => {

  return (
    <div id="header">
        <div className="search-area">
        <i className="fa fas fa-search icon-search"></i>
            <input type="text" name=""/>
        </div>
        <div className="user-area">
            <a href="#" className="add">+Add</a>
            <a href="#" className="notification"> 
                <i className=" fa far fa-bell icon-bell"></i> 
                <span className="circle">3</span>
            </a>
            <a href="#">
                <div className="user-img"></div>
                <i className="fa fas fa-caret-down icon-caret-down"></i>
            </a>
        </div>
    </div>
  )
};

export default Header;