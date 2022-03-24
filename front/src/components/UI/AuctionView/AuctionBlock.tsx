import { AuctionViewStyle } from "./AuctionView.styled";
import { AuctionViewText } from "./AuctionView.styled";
import { ProductProps } from "../ProductView/ProductBlock";
import { AuctionViewTitle } from "./AuctionView.styled";

export interface AuctionProps extends ProductProps {
  auction_site: string;
}

const AuctionBlock = (props: AuctionProps) => {
  return (
    <AuctionViewStyle>
      <AuctionViewTitle>{props.auction_site}</AuctionViewTitle>
      <img src={props.img_src} alt="logo" width="240" height="120" />
      <AuctionViewText>{props.title}</AuctionViewText>
    </AuctionViewStyle>
  );
};

export default AuctionBlock;
