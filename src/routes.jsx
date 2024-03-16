import { Home, Contacts, GetPet, Pets, Admin, Auth, Cart, GoodPage, Page404 } from "./pages";
import { ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, GOOD_ROUTE, HOME_ROUTE, CONTACTS_ROUTE, GET_PET_ROUTE, PETS_LIST_ROUTE, ROUT_404 } from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },
  {
    path: CART_ROUTE,
    Component: <Cart />,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />,
  },
  {
    path: GOOD_ROUTE + "./:id",
    Component: <GoodPage />,
  },
  {
    path: CONTACTS_ROUTE,
    Component: <Contacts />,
  },
  {
    path: GET_PET_ROUTE,
    Component: <GetPet />,
  },
  {
    path: PETS_LIST_ROUTE,
    Component: <Pets />,
  },
  {
    path: ROUT_404,
    Component: <Page404 />,
  },
];
