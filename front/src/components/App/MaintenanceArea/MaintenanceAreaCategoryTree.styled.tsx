import styled from "styled-components";

export const CategoryTreeStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222;
  border: solid black 3px;
  border-radius: 25px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const CategoryTreeHeader = styled.header`
  width: 100%;
  min-height: 45px;
  background-color: black;
  color: #61dafb;
  overflow: auto;
`;

export const CategoryTreeHeaderList = styled.ul`
  list-style: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CategoryTreeHeaderListItem = styled.li`
  display: inline;
  padding: 10px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;

export const CategoryTreeSubcategoriesDiv = styled.div`
  width: 100%;
  color: black;
  background-color: #61dafb;
  min-height: 45px;
  overflow: auto;
`;

export const CategoryTreeItemsDiv = styled.div`
  width: 100%;
  overflow: auto;
`;

export const CategoryTreeItemsList = styled.ul`
  display: grid;
  list-style: none;
  padding: 10px;
  grid-template-columns: repeat(4, 1fr);
`;

export const CategoryTreeItemsListItem = styled.li`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const CategoryTreeButton = styled.button`
  font-size: 2rem;
  color: #61dafb;
  background-color: black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const CategoryTreeHeaderButton = styled.button`
  font-size: 2rem;
  color: black;
  background-color: #61dafb;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const CategoryTreeFooter = styled.div`
  background-color: white;
  color: black;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
`;
