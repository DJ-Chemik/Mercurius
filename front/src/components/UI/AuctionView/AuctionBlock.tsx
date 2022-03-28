import { AuctionViewStyle } from "./AuctionView.styled";
import { AuctionViewText } from "./AuctionView.styled";
import { AuctionViewTitle } from "./AuctionView.styled";

export interface AuctionProps {
  key: string;
  site_id: string;
  title: string;
  img_src: string;
}

const AuctionBlock = (props: AuctionProps) => {
  return (
    <AuctionViewStyle>
      <AuctionViewTitle>{props.site_id}</AuctionViewTitle>
      <img src={props.img_src} alt="logo" width="240" height="120" />
      <AuctionViewText>{props.title}</AuctionViewText>
    </AuctionViewStyle>
  );
};

export default AuctionBlock;
