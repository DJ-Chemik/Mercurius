import GroupIcon from "@mui/icons-material/Group";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CategoryIcon from "@mui/icons-material/Category";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export enum routes {
  home = "",
  products = "/products",
  orders = "/orders",
  clients = "/clients",
  returns = "/returns",
  discounts = "/discounts",
}

export enum titles {
  home = "Witaj w panelu administracyjnym!",
  products = "Produkty",
  orders = "Zamówienia",
  clients = "Klienci",
  returns = "Zwroty",
  discounts = "Rabaty",
}

export enum content {
  home = "Wybierz pozycję z Sidebaru 🥳",
  orders = "Aktualnie nie mamy zamówień 😟",
  clients = "RODO MAMY BYCZQ 🤯",
  returns = "Aktualnie nie mamy zwrotów! Hurra! 😃",
  discounts = "Rabatów się zachciało hurr durr 🤬",
}

export interface MaintenanceAreaSidebarInterface {
  title: string;
  icon?: JSX.Element;
  link: string;
}

export const SidebarData: MaintenanceAreaSidebarInterface[] = [
  {
    title: "Produkty",
    icon: <CategoryIcon />,
    link: routes.products,
  },
  {
    title: "Zamówienia",
    icon: <ShoppingBagIcon />,
    link: routes.orders,
  },
  {
    title: "Klienci",
    icon: <GroupIcon />,
    link: routes.clients,
  },
  {
    title: "Zwroty",
    icon: <RemoveShoppingCartIcon />,
    link: routes.returns,
  },
  {
    title: "Rabaty",
    icon: <LocalOfferIcon />,
    link: routes.discounts,
  },
  {
    title: "Powrót",
    icon: <ExitToAppIcon />,
    link: routes.home,
  },
];
