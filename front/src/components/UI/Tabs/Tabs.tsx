import PropTypes from 'prop-types';
import { useState } from 'react';
import { Switch, BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import { APP_PAGE } from '../../App/App';
import { PackageData } from '../../App/Help/Help';
import EditTabsButton from './EditTabsButton/EditTabsButton';
import { AddStyled, ContentStyled, SingleTab, TabsStyled, TitleStyled } from "./Tabs.styled";
import { v4 as uuid_v4 } from "uuid";
import './Tabs.styled.ts';
import EditTabs from './EditTabs/EditTabs';
import RouteLink from '../RouteLink/RouteLink.styled';
import { assert } from 'console';

interface propsData {
  packageData: PackageData[];
};

interface EditRouteState{
  element : PackageData;
}

let chosenElement: PackageData = {
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

    var updatedElement = elements.find(e => e.id === id);
    if (updatedElement) {
      updatedElement.content = content;
      updatedElement.name = name;
    }
  }

  const addContentHandler = (): PropTypes.ReactNodeArray => {
    const elementHTMLarray : PropTypes.ReactNodeArray = [];

    elements.forEach((e) =>{
      const { id, name, content } = e;
      const routeState : EditRouteState = { element: e } ;
      elementHTMLarray.push(
        <SingleTab>
          <TitleStyled>{name}</TitleStyled>
          <ContentStyled>
            {content}
          </ContentStyled>
          <RouteLink to={{ pathname: APP_PAGE.EDIT, state: routeState }}>
            <EditTabsButton label='Edit' />
          </RouteLink>
        </SingleTab>
      );
    });
    return elementHTMLarray;
  };


  return (
      <Router>
        <Switch>
          <Route path={APP_PAGE.HELP} render={() => (
            <TabsStyled >
              {addContentHandler()}
              <AddStyled onClick={() => addElementHandler()} />
            </TabsStyled>
          )}
          />
          <Route path={APP_PAGE.EDIT} render={(routeProps) => {
            const routeLocationState = routeProps.location.state as EditRouteState;
            return ( 
            <EditTabs 
              element={routeLocationState.element}
              history={routeProps.history}
              updateElementHandler={updateElementHandler}
            />
          )}} />
        </Switch>
      </Router>
  )
}

export default Tabs;
