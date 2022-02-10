import React from "react";

const Sidemenu = () => {

  return (
    <div id="side-menu">
      <nav>
        <a href="#" className="active"><i className="fa icon-home fas fa-home"></i> Item</a>
        <a href="#"><i className="fa icon-camera-retro"></i> Item</a>
        <a href="#"><i className="fa fas fa-user icon-user"></i>Item</a>
        <a href="#"><i className="fa fas fa-bookmark icon-bookmark"></i> Item</a>
        <a href="#"><i className="fa fas fa-calendar-alt icon-calendar"></i> Item</a>
        <a href="#"><i className="fa fas fa-cog icon-cog"></i>Item</a>
      </nav>
    </div>
  )
};

export default Sidemenu;
