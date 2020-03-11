import React from "react";

import "../stylesheet/style.scss";
import generatColorPair from "../util/utilfunctions.js"

import contrast from "get-contrast";

class ThemeUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backGroundColor: "#A2F5D4",
      textColor: "#436843"
    };
  }
  changeColor() {
    let colors = generatColorPair();
    this.setState({ backGroundColor: colors[0] , textColor : colors[1]});
  }

  render() {
    document.documentElement.style.setProperty(
      "--backgroung-color",
      this.state.backGroundColor
    );
    document.documentElement.style.setProperty(
      "--text-color",
      this.state.textColor
    );
    let colorContrast = contrast.ratio(this.state.backGroundColor , this.state.textColor).toFixed(2)
    let colorScore = contrast.score(this.state.backGroundColor , this.state.textColor);
    return (
      <div className="main_container">
        <h1 className="color_contrast">{colorContrast} contrast {colorScore}</h1>
        <div className="flex">
          <div className="box1">
             <h3 className="color_name">Robin Egg Blue</h3>
    <h4 className="color_hex_value">{this.state.textColor}</h4>
          </div>
          <div className="box2">
          <h3 className="color_name">Robin Egg Blue</h3>
             <h4 className="color_hex_value">{this.state.backGroundColor}</h4>
          </div>  
        </div>
        <div onClick={() => this.changeColor()} className="flex"><button  className="skip_button">skip</button></div>
       
      </div>
    );
  }
}

export default ThemeUI;