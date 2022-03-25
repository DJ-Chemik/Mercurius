import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import { MaintenanceAreaStyled, MaintenanceAreaHeader, MaintenanceAreaTitle, MaintenanceAreaContent } from "./MaintenanceArea.styled"
import Sidebar from "../../UI/Sidebar/Sidebar"
import { SidebarData } from "./MaintenanceArea.sidebarData";

const MaintenanceArea = () => {

    const routes = ['maintenance','products','orders','clients','returns','discounts']
    const lastPath = window.location.pathname.split("/").pop();

    const changeTitles = () => {
        const display = ['Witaj w panelu administracyjnym!','Produkty','Zamówienia','Klienci','Zwroty','Rabaty']
        const lastPath = window.location.pathname.split("/").pop();
        for (var i = 0; i < routes.length; i++) {
            if (lastPath === routes[i]) {
                return display[i];
            }
        }
    }

    const changeContent = () => {
        var text = '';
        if(lastPath === routes[0]) {
            text = 'Wybierz pozycję z Sidebaru 🥳';
        }
        if(lastPath === routes[1]) {
            text = 'Lista produktów:';
            return (
                <MaintenanceAreaContent>
                    <Button title='Lista produktów'></Button>
                    <RouteLink to={APP_PAGE.PRODUCT}>
                        <Button title="Dodaj produkt"></Button>
                    </RouteLink>
                </MaintenanceAreaContent>
            )
        }
        if(lastPath === routes[2]) {
            text = 'Aktualnie nie mamy zamówień 😟';
        }
        if(lastPath === routes[3]) {
            text = 'RODO MAMY BYCZQ 🤯';
        }
        if(lastPath === routes[4]) {
            text = 'Aktualnie nie mamy zwrotów! Hurra! 😃';
        }
        if(lastPath === routes[5]) {
            text = 'Rabatów się zachciało hurr durr 🤬';
        }
        return (
            <MaintenanceAreaContent>
                {text}
            </MaintenanceAreaContent>
        )
    }
    
    const title = changeTitles();
    const content = changeContent();

    return (
        <MaintenanceAreaStyled>
            <MaintenanceAreaHeader>Panel administracyjny</MaintenanceAreaHeader>
            <MaintenanceAreaTitle>{title}</MaintenanceAreaTitle>
            {content}
            <Sidebar data={SidebarData} />
            <RouteLink to={APP_PAGE.HOME}>
                <Button title="Powrót do strony głównej" />
            </RouteLink>
        </MaintenanceAreaStyled>
    )
}

export default MaintenanceArea;
