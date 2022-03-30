import { AuctionViewStyle } from "./AuctionView.styled";
import { AuctionViewText } from "./AuctionView.styled";
import { AuctionViewTitle } from "./AuctionView.styled";

export interface AuctionProps {
  key: string;
  siteId: string;
  title: string;
  imgSrc: string;
}

const AuctionBlock = (props: AuctionProps) => {
  return (
    <AuctionViewStyle>
      <AuctionViewTitle>{props.siteId}</AuctionViewTitle>
      <img src={props.imgSrc} alt="logo" width="240" height="120" />
      <AuctionViewText>{props.title}</AuctionViewText>
    </AuctionViewStyle>
  );
};

export default AuctionBlock;
