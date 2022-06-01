import React from "react";
import "./Services.css";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Code from "../../img/codee.png";
import Laptop from "../../img/laptop.png";
import Card from "../Card/Card.jsx";

export default function Services() {
  return (
    <div className="services">
      {/* leftside */}
      <div className="awesome">
        <span>My</span>
        <span>Skills</span>
        <span>
          Learning and still alot to learn Lorem ipsum dolor sit amet<br/>
          consectetur, adipisicing elit. Tenetur minus debitis veritatis aliquid.

        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* rightside */}
      <div className="cards">
        <div style={{left: "14rem"}}>
          <Card
            emoji={Code}
            heading={"Web Development"}
            detail={"React js, Javascript"}
          />
        </div>
        <div style={{top:"12rem", left:"-4%"}}>
        <Card
            emoji={Laptop}
            heading={"Web Design"}
            detail={"HTML,CSS, Bootstrap"}
          />
        </div>
      </div>
    </div>
  );
}
