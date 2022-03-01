import React from "react";
import logo from '../../../assets/logo.svg';
import './HeaderStyle.css';


const Header = () => {
  return (
    <div className="main-panel">
      <div className="panel-element">
        <div className="panel-center">
          <img src={logo} alt="logo" className="panel-image-left"/>
        </div>
      </div>

      <div className="panel-element">
        <div className="panel-center">
          <h2>React Project</h2>
        </div>

      </div>
      <div className="panel-element">
        <div className="panel-center">
          <img src={logo} alt="logo" className="panel-image-right"/>
        </div>
      </div>
    </div>
  );
}


export default Header;