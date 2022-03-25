import GroupIcon from '@mui/icons-material/Group';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CategoryIcon from '@mui/icons-material/Category';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const SidebarData = [
  {
    title: "Produkty",
    icon: <CategoryIcon />,
    link: "/products"
  },
  {
    title: "Zamówienia",
    icon: <ShoppingBagIcon />,
    link: "/orders"
  },
  {
    title: "Klienci",
    icon: <GroupIcon />,
    link: "/clients"
  },
  {
    title: "Zwroty",
    icon: <RemoveShoppingCartIcon />,
    link: "/returns"
  },
  {
    title: "Rabaty",
    icon: <LocalOfferIcon />,
    link: "/discounts"
  },
  {
    title: "Powrót",
    icon: <ExitToAppIcon />,
    link: ""
  },
]