import React from "react";
import logo from '../../../assets/logo.svg';
import { MainPanel, PanelCenter, PanelElement, PanelImageLeft, PanelImageRight } from "./Header.styled";
import './Header.styled.ts';


const Header = () => {
  return (
    <MainPanel>
      
      <PanelElement>
        <PanelCenter>
        <PanelImageLeft src={logo}/>
        </PanelCenter>
      </PanelElement>

      <PanelElement>
        <PanelCenter>
            <h1 className="App-title">REACT PROJECT</h1>
          </PanelCenter>
      </PanelElement>

      <PanelElement>
        <PanelCenter>
          <PanelImageRight src={logo}/>
        </PanelCenter>
      </PanelElement>

    </MainPanel>
  );
}


export default Header;