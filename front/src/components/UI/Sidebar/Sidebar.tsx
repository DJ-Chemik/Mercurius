import { SidebarStyled, SidebarList, SidebarListItem, SidebarListItemIcon, SidebarListItemTitle } from "./Sidebar.styled"

interface SidebarProps {
  data: {
    title: string;
    icon?: JSX.Element;
    link: string;
  }[]
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

const Sidebar = (props: SidebarProps) => {

  const myRouter = (link: string) => {

    const routes = ['/', '/help','maintenance','/statistics','/sales','/product'];
    var lastPath = window.location.pathname.split("/").pop();
    var newUrl = window.location.pathname.split("/")[window.location.pathname.split("/").length - 2];

    for(let i = 0; i < routes.length; i++){
      if (lastPath === routes[i]) {
        return window.location.pathname = lastPath + link;
      }
      if (newUrl === routes[i]) {
        return window.location.pathname = newUrl + link;
      }
    }
  }

  return (
      <SidebarStyled>
        <SidebarList>
          {props.data.map((val, key) => {
            return (
            <SidebarListItem 
              key={key} 
              onClick={() => myRouter(val.link)}>
              <SidebarListItemIcon>{val.icon}</SidebarListItemIcon>
              <SidebarListItemTitle>{val.title}</SidebarListItemTitle>
            </SidebarListItem>
            );
          })}
        </SidebarList>
      </SidebarStyled>
  );
}

export default Sidebar;