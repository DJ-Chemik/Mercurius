import { AuctionViewStyle } from "./AuctionView.styled";
import { AuctionViewText } from "./AuctionView.styled";
import { AuctionViewTitle } from "./AuctionView.styled";

export interface AuctionProps {
  key: string;
  name:string
  products: [id:string, name:string]
}



const AuctionBlock = (props: AuctionProps) => {
  return (
    <AuctionViewStyle>
      <AuctionViewTitle>{props.name}</AuctionViewTitle>
      {props.products.map((product: any) => (
          <><AuctionViewText>{product.name + " "}</AuctionViewText></>
        ))}
    </AuctionViewStyle>
  );
};

export default AuctionBlock;
