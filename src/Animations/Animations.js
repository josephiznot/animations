import React, { Component } from "react";
import "./Animations.css";
import linkedin from "./../images/linkedin.png";

class Animations extends Component {
  render() {
    return (
      <div id="animations-container">
        <div class="title-and-animation">
          <img src={linkedin} width="75" />
          <div id="line">
            <div id="filler" />
          </div>
        </div>
        <div class="title-and-animation">
          <img src={linkedin} width="75" />
          <div id="line">
            <div id="filler" />
          </div>
        </div>
      </div>
    );
  }
}
export default Animations;
