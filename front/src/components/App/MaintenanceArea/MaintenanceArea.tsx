import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import { MaintenanceAreaStyled } from "./MaintenanceArea.styled"
import Sidebar from "../../UI/Sidebar/Sidebar"
import { SidebarData } from "./MaintenanceArea.sidebarData";

const MaintenanceArea = () => {

    return (
        <MaintenanceAreaStyled>
            MaintenanceArea
            <Sidebar data={SidebarData} />
            <RouteLink to={APP_PAGE.HOME}>
                <Button title="Powrót do strony głównej" />
            </RouteLink>
        </MaintenanceAreaStyled>
    )
}

export default MaintenanceArea;
