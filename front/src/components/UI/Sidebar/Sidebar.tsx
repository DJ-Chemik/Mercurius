import { SidebarStyled, SidebarList, SidebarListItem, SidebarListItemIcon, SidebarListItemTitle } from "./Sidebar.styled"

interface SidebarProps {
  data: {
    title: string;
    icon?: JSX.Element;
    link: string;
  }[]
}

const Sidebar = (props: SidebarProps) => {

  const Router = (link: string) => {

    const routes = ['/', '/help','maintenance','/statistics','/sales','/product'];
    var lastPath = window.location.pathname.split("/").pop();
    var newUrl = window.location.pathname.split("/")[window.location.pathname.split("/").length - 2];

    for(var i = 0; i < routes.length; i++){
      if (lastPath === routes[i]) {
        return window.location.pathname = lastPath + link;
      }
      if (newUrl === routes[i]) {
        return window.location.pathname = newUrl + link;
      }
    }
  }

  const Replace = () => {
    //TODO:
    return
  }

  return (
      <SidebarStyled>
        <SidebarList>
          {props.data.map((val, key) => {
            return (
            <SidebarListItem 
              key={key} 
              onClick={() => Router(val.link)}>
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