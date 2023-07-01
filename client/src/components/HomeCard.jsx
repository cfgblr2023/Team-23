import React, { useState } from "react";
import KnowMoreAboutUs from "./KnowMoreAboutUs";
import Navbar from "./Navbar";
import Images from "./Images";
import Footer from "./Footer";


function Homecard(props) {
  const [isHover, setHover] = useState(false);
  function onMouseOverHandle() {
    setHover(true);
  }
  function onMouseOutHandle() {
    setHover(false);
  }
  const hoveredCSS = {
    backgroundColor: "rgba(249, 203, 104, 0.658)",
    height: "20rem",
    transition: "0.5s ease-in-out",
  };
  const unhoveredCSS = {
    backgroundColor: "rgba(249, 203, 104, 0.274)",
    height: "20rem",
    transition: "0.5s ease-in-out",
  };

  



  return (
    <div>
        <Navbar />
    <div className="homecard">
      <h1 style = {{textAlign:"center"}}>We are Lamp Education</h1> <br></br>
        <Images />
        <br></br> <br></br>
        <div style={{textAlign:"center"}}>
    <h1>What do we do</h1>
    <p>
We are focusing on a free online coaching site for needy and downtrodden students all over India. Today everyone uses a smartphone and it will be easy for a student to learn from a mobile responsive site. Even we are focusing on people who want to learn state languages.

We need volunteers to make this free online mobile responsive site go live and uplift many lives from poverty.</p>
</div> <br></br>
    <div className="container">
    <div className="row justify-content-evenly">
    <div className="activityCard col-4">
      <div
        onMouseOver={onMouseOverHandle}
        onMouseOut={onMouseOutHandle}
        style={isHover ? hoveredCSS : unhoveredCSS}
        className="image-overlay"
      >
        <div className="activityInfo">
          <h3>EXPLORE OUR PROPERTIES</h3>
          <hr />
          <h2>GET OUTSIDE</h2>
          <a href = "/KnowMoreAboutUs" class = "btn btn-outline-warning">Explore</a>
        </div>
      </div>
    </div>
      <br></br> <br></br>
    <div className="activityCard col-4"> 
      <div
        onMouseOver={onMouseOverHandle}
        onMouseOut={onMouseOutHandle}
        style={isHover ? hoveredCSS : unhoveredCSS}
        className="image-overlay"
      >
        <div className="activityInfo">
          <h3>KNOW MORE ABOUT US AS FUNDRAISER</h3>
          <hr />
          <h2>GET OUTSIDE</h2>
          <a href = "/FundRaiser" class = "btn btn-outline-warning">Explore</a>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default Homecard;
