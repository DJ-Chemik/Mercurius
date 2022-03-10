import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import allegro_image from "../../Images/allegro.jpg";
import olx_image from "../../Images/olx.jpg";
import ebay_image from "../../Images/ebay.jpg";
import CompaniesSector from "../../UI/CompanyView/CompaniesSector";
import { SalesAreaStyled } from "./SalesArea.styled";

const EXAMPLES_COMPANIES = [
  {
    id: "1",
    title: "Allegro",
    img_src: allegro_image,
  },
  {
    id: "2",
    title: "OLX",
    img_src: olx_image,
  },
  {
    id: "3",
    title: "eBay",
    img_src: ebay_image,
  },
];

const SalesArea = () => {
  return (
    <SalesAreaStyled>
      <CompaniesSector items={EXAMPLES_COMPANIES} />
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
    </SalesAreaStyled>
  );
};

export default SalesArea;
