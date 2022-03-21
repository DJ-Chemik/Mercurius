import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import {APP_PAGE} from "../App";
import ManageAuctions from "./ManageAuctions";

const MaintenanceArea = () => {

    return (
        <div>
            Maintenence
            <ManageAuctions/>
            <RouteLink to={APP_PAGE.HOME}>
                <Button title="Powrót do strony głównej"/>
            </RouteLink>
        </div>
    )
}

export default MaintenanceArea;
