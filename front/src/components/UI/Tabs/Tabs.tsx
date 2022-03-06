import PropTypes from 'prop-types';
import { AddStyled, ContentStyled, SingleTab, TabsStyled, TitleStyled } from "./Tabs.styled";
import './Tabs.styled.ts';

const Tabs = (props: { names: string[], addElementHandler: Function }) => {

  const addContentHandler = (elements: string[]): PropTypes.ReactNodeArray => {
    const elementHTMLarray = [];

    for (let i = 0; i < elements.length; i++) {

      elementHTMLarray.push(
        <SingleTab>
          <TitleStyled>{elements[i]}</TitleStyled>
          <ContentStyled> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            
          </ContentStyled>
        </SingleTab>
      );
    }
    return elementHTMLarray;
  };


  return (
    <TabsStyled >
      {addContentHandler(props.names)}
      <AddStyled onClick={() => props.addElementHandler()} />
    </TabsStyled>
  )
}

export default Tabs;