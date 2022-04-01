const sidebarSubpage = "/" + window.location.pathname.split("/").pop();
const parentPage =
  "/" +
  window.location.pathname.split("/")[
    window.location.pathname.split("/").length - 2
  ];
export const listOfPaths = [sidebarSubpage, parentPage] as const;
