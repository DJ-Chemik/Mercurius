import {
  SidebarStyled,
  SidebarList,
  SidebarListItem,
  SidebarListItemIcon,
  SidebarListItemTitle,
} from "./Sidebar.styled";

import { MaintenanceAreaSidebarInterface } from "../../App/MaintenanceArea/MaintenanceArea.sidebarData";

interface SidebarProps {
  data: MaintenanceAreaSidebarInterface[];
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

const Sidebar = (props: SidebarProps) => {
  const myRouter = (link: string) => {
    const mainRoutes = [
      "/",
      "help",
      "maintenance",
      "statistics",
      "sales",
      "product",
    ];

    let lastPath = window.location.pathname.split("/").pop();
    let newUrl =
      window.location.pathname.split("/")[
        window.location.pathname.split("/").length - 2
      ];

    mainRoutes.find((item) => {
      if (lastPath === item)
        return (window.location.pathname = lastPath + link);
      else if (newUrl === item)
        return (window.location.pathname = newUrl + link);
    });
  };

  return (
    <SidebarStyled>
      <SidebarList>
        {props.data.map((val, key) => {
          return (
            <SidebarListItem key={key} onClick={() => myRouter(val.link)}>
              <SidebarListItemIcon>{val.icon}</SidebarListItemIcon>
              <SidebarListItemTitle>{val.title}</SidebarListItemTitle>
            </SidebarListItem>
          );
        })}
      </SidebarList>
    </SidebarStyled>
  );
};

export default Sidebar;
