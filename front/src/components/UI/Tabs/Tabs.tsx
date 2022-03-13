import PropTypes from 'prop-types';
import { useState } from 'react';
import {Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { APP_PAGE } from '../../App/App';
import { PackageData } from '../../App/Help/Help';
import EditTabsButton from './EditTabsButton/EditTabsButton';
import { AddStyled, ContentStyled, SingleTab, TabsStyled, TitleStyled } from "./Tabs.styled";
import { v4 as uuid_v4 } from "uuid";
import './Tabs.styled.ts';
import EditTabs from './EditTabs/EditTabs';
import RouteLink from '../RouteLink/RouteLink.styled';

interface propsData {
  packageData: PackageData[];
};

let chosenElement : PackageData = {
  id: uuid_v4(), name: "New Element", content: "New Content",
};


const Tabs = (props: propsData) => {

  //-------------------------

  const [elements, setElements] = useState<PackageData[]>(props.packageData);
  
  const addElementHandler = () => {
    console.log("What is up");
    const request: PackageData = {
      id: uuid_v4(), name: "New Element", content: "New Content",
    }
    setElements([...elements, request]);
  };
  const updateElementHandler = (element: PackageData) => {
    const { id, name, content } = element;

    //change values after update
    var updatedElement = elements.find(e => e.id === id);
    if (updatedElement) {
      updatedElement.content = content;
      updatedElement.name = name;
    }
  }

  //--------------------------


  const addContentHandler = (): PropTypes.ReactNodeArray => {
    const elementHTMLarray = [];

    for (let i = 0; i < elements.length; i++) {
      const { id, name, content } = elements[i];

      elementHTMLarray.push(
        <SingleTab>
          <TitleStyled>{name}</TitleStyled>
          <ContentStyled>
            {content}
          </ContentStyled>
          <RouteLink to={{pathname: APP_PAGE.EDIT , state: {element : elements[i]}}}>
            <EditTabsButton label='Edit'/>
          </RouteLink>
        </SingleTab>
      );
    }
    return elementHTMLarray;
  };


  return (

    <TabsStyled >
      <Router>
        <Switch>
          <Route path={APP_PAGE.HELP} render={() => (
            <TabsStyled >
              {addContentHandler()}
              <AddStyled onClick={() => addElementHandler()} />
            </TabsStyled>
          )} 
          />
          <Route path={APP_PAGE.EDIT} render={(props) => (<EditTabs {...props} updateElementHandler={updateElementHandler}/>)} />
        </Switch>
      </Router>
    </TabsStyled>
  )
}

export default Tabs;
