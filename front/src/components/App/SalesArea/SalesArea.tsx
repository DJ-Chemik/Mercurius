import Button from "../../UI/Button/Button";
import Header from "../../UI/Header/Header";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import sony_image from "../../Images/sony.jpg";
import jbl_image from "../../Images/jbl.jpg";
import steelseries_image from "../../Images/myszka.jpg";
import Products from "../../UI/ProductView/ProductSector";
import { SalesAreaStyled } from "./SalesArea.styled";
import Auctions from "../../UI/AuctionView/AuctionSector";
import React, { useState } from "react";
import ProductFilter from "../../UI/ProductView/ProductFilter";
import { SetNewValue } from "../../UI/ProductView/ProductFilter";

const EXAMPLES_PRODUCTS = [
  {
    key: "1",
    title: "TV Sony",
    imgSrc: sony_image,
  },
  {
    key: "2",
    title: "Słuchawki JBL",
    imgSrc: jbl_image,
  },
  {
    key: "3",
    title: "Mysz Steelseries",
    imgSrc: steelseries_image,
  },
];

const EXAMPLES_AUCTIONS = [
  {
    key: "1",
    siteId: "Allegro",
    title: "TV Sony",
    imgSrc: sony_image,
  },
  {
    key: "2",
    siteId: "Allegro",
    title: "Słuchawki JBL",
    imgSrc: jbl_image,
  },
  {
    key: "3",
    siteId: "Allegro",
    title: "Mysz Steelseries",
    imgSrc: steelseries_image,
  },
  {
    key: "4",
    siteId: "OLX",
    title: "Mysz Steelseries",
    imgSrc: steelseries_image,
  },
];

const SalesArea = () => {
  const [value, setValue] = useState<string>(SetNewValue.PRODUCTS);
  const [productsExamples, setProductsExamples] = useState(EXAMPLES_PRODUCTS);
  const [auctionsExamples, setAuctionsExamples] = useState(EXAMPLES_AUCTIONS);

  const handleChange = (selected: string) => {
    setValue(selected);
  };

  const shouldDisplayProducts =
    (value === SetNewValue.PRODUCTS || value === SetNewValue.BOTH);
  const shouldDisplayAuctions =
    (value === SetNewValue.AUCTIONS || value === SetNewValue.BOTH);

  return (
    <SalesAreaStyled>
      <Header />
      <ProductFilter newValue={value} onChangeFilter={handleChange} />
      {shouldDisplayProducts && <Products items={productsExamples} />}
      {shouldDisplayAuctions && <Auctions items={auctionsExamples} />}
      <RouteLink to={APP_PAGE.PRODUCT}>
        <Button title="Panel produktu" />
      </RouteLink>
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
    </SalesAreaStyled>
  );
};

export default SalesArea;
