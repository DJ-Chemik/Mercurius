import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { PackageData } from '../../App/Help/Help';
import EditTabsButton from './EditTabsButton/EditTabsButton';
import { AddStyled, ContentStyled, SingleTab, TabsStyled, TitleStyled } from "./Tabs.styled";
import './Tabs.styled.ts';

const Tabs = (props: { packageData: PackageData[], addElementHandler: Function }) => {

  const addContentHandler = (elements: PackageData[]): PropTypes.ReactNodeArray => {
    const elementHTMLarray = [];


    for (let i = 0; i < elements.length; i++) {
      let {id, name, content} = elements[i];
      
      //single tab Component
      elementHTMLarray.push(
          <SingleTab>
            <TitleStyled>{name}</TitleStyled>
            <ContentStyled> 
              {content}
            </ContentStyled>
            <Link to={{pathname: '/edit', state: {element : props.packageData[i]}}}>
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