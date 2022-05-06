import styled from "styled-components";

export const SidebarStyled = styled.div`
  min-height: 100%;
  width: 12vw;
  background-color: #222;
  position: absolute;
  left: 0;
`;
export const SidebarList = styled.ul`
  height: 100%;
  width: 100%;
  padding: 0;
`;

export const SidebarListItem = styled.li`
  width: 100%;
  min-height: 60px;
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  color: #61dafb;
  justify-content: center;
  align-items: center;
  font-family: Segoe UI;
  font-weight: lighter;
  font-size: 1.4vw;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

export const SidebarListItemIcon = styled.div`
  flex: 20%;
  display: grid;
  place-items: center;
`;

export const SidebarListItemTitle = styled.div`
  flex: 80%;
`;
