import styled from "styled-components";

export const AuctionViewStyle= styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 12rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 2rem auto;
`;

export const AuctionViewText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
`;

export const AuctionViewList = styled.ul`
  display:flex;  
  list-style:none;
  gap: 2rem;
  margin-top: 0;
`;

export const AuctionViewTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;