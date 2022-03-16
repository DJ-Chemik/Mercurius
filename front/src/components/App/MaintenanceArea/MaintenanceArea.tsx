import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import AddPortal from "./AddPortal";
const MaintenanceArea = () => {
    return (
        <div>
            Maintenence
            <AddPortal/>
            <RouteLink to={APP_PAGE.HOME}>
                <Button title="Powrót do strony głównej" />
            </RouteLink>
        </div>
    )
}

export default MaintenanceArea;
