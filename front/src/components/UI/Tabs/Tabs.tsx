import { Component } from "react";
import Button from "../../UI/Button/Button";
import Header from "../../UI/Header/Header";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { SingleTab, TabsStyled } from "./Tabs.styled";
import './Tabs.styled.ts';

//specify the props type
type StatusProps = {
  status: string;
}



const Tabs = (props: StatusProps) => {
  const numberOfElements = parseInt(props.status);
  let items = [];
  
  //fill up Components with data
  for(let i = 0 ; i<numberOfElements ; i++){
      items.push(<SingleTab/>);
  }

  return (
      <TabsStyled>
        {items}
      </TabsStyled>
  )
}

export default Tabs;