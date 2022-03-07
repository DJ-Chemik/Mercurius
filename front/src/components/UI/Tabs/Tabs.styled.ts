import styled from "styled-components";

export const TabsStyled = styled.div`
  margin-top: 15px;
  min-height: 100vh;
  width: 90%;
  color: white;
`

export const SingleTab = styled.div`
  margin: 15px ;
  background-color: white;
  height: 350px;
  width: 250px;
  border-radius: 15px;
  color:black;
  float: left;
`

export const TitleStyled = styled.div`
  height: 20%;
  border-bottom: solid;
  font-weight: bold;
`

export const ContentStyled = styled.div`
  height: 60%;
  border-radius: inherit;
  font-size: small ;
  overflow: hidden;
  overflow-y: auto;

`
export const AddStyled = styled.button`
  /*Styling the button*/

  display:inline-block;
  width:50px;
  height:50px;
  background:
    linear-gradient(#fff 0 0),
    linear-gradient(#fff 0 0),
    #bbb;
  background-position:center;
  background-size: 50% 4px,4px 50%;
  background-repeat:no-repeat;

  /*Position of the button */
  margin-top: 150px;
  float: left;
  cursor: pointer;
`
