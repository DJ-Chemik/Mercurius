import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import { MainPageStyled } from "../MainPage/MainPage.styled";
import allegro_image from "../../Images/allegro.jpg";
import olx_image from "../../Images/olx.jpg";
import ebay_image from "../../Images/ebay.jpg";
import CompaniesSector from "../../UI/CompanyView/CompaniesSector";

const SalesArea = () => {
  const examples = [
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
  return (
    <MainPageStyled>
      <CompaniesSector items={examples} />
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
    </MainPageStyled>
  );
};

export default SalesArea;
