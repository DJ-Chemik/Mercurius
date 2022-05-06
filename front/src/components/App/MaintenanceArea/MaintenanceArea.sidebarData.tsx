import GroupIcon from "@mui/icons-material/Group";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CategoryIcon from "@mui/icons-material/Category";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InventoryIcon from "@mui/icons-material/Inventory";

export enum ROUTES {
  HOME = "",
  PRODUCTS = "/products",
  ORDERS = "/orders",
  CLIENTS = "/clients",
  RETURNS = "/returns",
  DISCOUNTS = "/discounts",
  CATEGORIES = "/categories",
}

export enum TITLES {
  HOME = "Witaj w panelu administracyjnym!",
  PRODUCTS = "Produkty",
  ORDERS = "Zamówienia",
  CLIENTS = "Klienci",
  RETURNS = "Zwroty",
  DISCOUNTS = "Rabaty",
  CATEGORIES = "Drzewo kategorii",
}

export enum CONTENT {
  HOME = "Wybierz pozycję z Sidebaru 🥳",
  ORDERS = "Brak zamówień 😟",
  CLIENTS = "RODO MAMY BYCZQ 🤯",
  RETURNS = "Aktualnie nie mamy zwrotów! Hurra! 😃",
  DISCOUNTS = "Rabatów się zachciało hurr durr 🤬",
  CATEGORIES = "Drzewo kategorii",
}

export interface MaintenanceAreaSidebarInterface {
  title: string;
  icon?: JSX.Element;
  link: string;
}

export const sidebarData: MaintenanceAreaSidebarInterface[] = [
  {
    title: "Produkty",
    icon: <InventoryIcon />,
    link: ROUTES.PRODUCTS,
  },
  {
    title: "Zamówienia",
    icon: <ShoppingBagIcon />,
    link: ROUTES.ORDERS,
  },
  {
    title: "Klienci",
    icon: <GroupIcon />,
    link: ROUTES.CLIENTS,
  },
  {
    title: "Zwroty",
    icon: <RemoveShoppingCartIcon />,
    link: ROUTES.RETURNS,
  },
  {
    title: "Rabaty",
    icon: <LocalOfferIcon />,
    link: ROUTES.DISCOUNTS,
  },
  {
    title: "Drzewo kategorii",
    icon: <CategoryIcon />,
    link: ROUTES.CATEGORIES,
  },
  {
    title: "Powrót",
    icon: <ExitToAppIcon />,
    link: ROUTES.HOME,
  },
];
