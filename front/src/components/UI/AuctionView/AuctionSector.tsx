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
            site_id={auction.site_id}
            title={auction.title}
            img_src={auction.img_src}
          />
        ))}
      </AuctionViewList>
    </div>
  );
};

export default Auctions;
