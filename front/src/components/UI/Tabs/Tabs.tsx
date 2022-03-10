import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { APP_PAGE } from '../../App/App';
import { PackageData } from '../../App/Help/Help';
import EditTabsButton from './EditTabsButton/EditTabsButton';
import { AddStyled, ContentStyled, SingleTab, TabsStyled, TitleStyled } from "./Tabs.styled";
import './Tabs.styled.ts';

export interface propsData {
  packageData: PackageData[];
  addElementHandler: Function;
};

const Tabs = (props: propsData) => {
  
  const addContentHandler = (elements: PackageData[]): PropTypes.ReactNodeArray => {
    const elementHTMLarray = [];


    for (let i = 0; i < elements.length; i++) {
      const {id, name, content} = elements[i];

      elementHTMLarray.push(
          <SingleTab>
            <TitleStyled>{name}</TitleStyled>
            <ContentStyled> 
              {content}
            </ContentStyled>
            <Link to={{pathname: APP_PAGE.EDIT , state: {element : props.packageData[i]}}}>
              <EditTabsButton label='Edit'/>
            </Link>
          </SingleTab>
      );
    }
    return elementHTMLarray;
  };


  return (
    <TabsStyled >
      {addContentHandler(props.packageData)}
      <AddStyled onClick={() => props.addElementHandler()} />
    </TabsStyled>
  )
}

export default Tabs;