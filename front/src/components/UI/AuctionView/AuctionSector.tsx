import AuctionBlock from "./AuctionBlock";
import { AuctionProps } from "./AuctionBlock";
import { AuctionViewList } from "./AuctionView.styled";

interface AuctionSectorProps {
  items: AuctionProps[];
}

const Auctions = (props: AuctionSectorProps) => {
  return (
    <div>
      <p>Aukcje</p>
      <AuctionViewList>
        {props.items.map((auction: AuctionProps) => (
          <AuctionBlock
            key={auction.key}
            siteId={auction.siteId}
            title={auction.title}
            imgSrc={auction.imgSrc}
          />
        ))}
      </AuctionViewList>
    </div>
  );
};

export default Auctions;
