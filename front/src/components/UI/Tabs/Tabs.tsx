import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { PackageData } from '../../App/Help/Help';
import { AddStyled, ContentStyled, SingleTab, TabsStyled, TitleStyled } from "./Tabs.styled";
import './Tabs.styled.ts';

const Tabs = (props: { packageData: PackageData[], addElementHandler: Function }) => {

  const addContentHandler = (elements: PackageData[]): PropTypes.ReactNodeArray => {
    const elementHTMLarray = [];

    for (let i = 0; i < elements.length; i++) {
      let {id, name, content} = elements[i];

      elementHTMLarray.push(
        <Link to={{pathname: '/edit/{:id}', state: {tab : props.packageData[i]}}}>
        <SingleTab>
          <TitleStyled>{name}</TitleStyled>
          <ContentStyled> 
            {content}
          </ContentStyled>
        </SingleTab>
        </Link>
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