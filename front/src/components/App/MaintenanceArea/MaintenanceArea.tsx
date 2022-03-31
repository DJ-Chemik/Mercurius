import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import {
  MaintenanceAreaStyled,
  MaintenanceAreaHeader,
  MaintenanceAreaTitle,
  MaintenanceAreaContent,
} from "./MaintenanceArea.styled";
import Sidebar from "../../UI/Sidebar/Sidebar";
import {
  SidebarData,
  routes,
  titles,
  content,
} from "./MaintenanceArea.sidebarData";

const MaintenanceArea = () => {
  const lastPath = window.location.pathname.split("maintenance").pop();

  const changeTitles = () => {
    switch (lastPath) {
      case routes.home:
        return titles.home;
      case routes.products:
        return titles.products;
      case routes.orders:
        return titles.orders;
      case routes.clients:
        return titles.clients;
      case routes.returns:
        return titles.returns;
      case routes.discounts:
        return titles.discounts;
    }
  };

  const changeContent = () => {
    switch (lastPath) {
      case routes.home:
        return content.home;
      case routes.orders:
        return content.orders;
      case routes.clients:
        return content.clients;
      case routes.returns:
        return content.returns;
      case routes.discounts:
        return content.discounts;
    }
  };

  const changeDiv = () => {
    switch (lastPath) {
      case routes.products:
        return (
          <MaintenanceAreaContent>
            <Button title="Lista produktów"></Button>
            <RouteLink to={APP_PAGE.PRODUCT}>
              <Button title="Dodaj produkt"></Button>
            </RouteLink>
          </MaintenanceAreaContent>
        );
      default:
        return (
          <MaintenanceAreaContent>{changeContent()}</MaintenanceAreaContent>
        );
    }
  };

  const title = changeTitles();
  const myDiv = changeDiv();

  return (
    <MaintenanceAreaStyled>
      <MaintenanceAreaHeader>Panel administracyjny</MaintenanceAreaHeader>
      <MaintenanceAreaTitle>{title}</MaintenanceAreaTitle>
      {myDiv}
      <Sidebar data={SidebarData} />
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
    </MaintenanceAreaStyled>
  );
};

export default MaintenanceArea;
