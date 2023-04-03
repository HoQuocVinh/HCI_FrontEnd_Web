import { lazy } from "react";
import config from "configs";

//* Pages
const HomePage = lazy(() => import("pages/HomePage"));
const StylePage = lazy(() => import("pages/StylePage"));
const SignInPage = lazy(() => import("pages/SignInPage"));

//* Public routes
const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.style, component: StylePage },
];

const authRoutes = [{ path: config.routes.signin, component: SignInPage }];

//* Private routesconst
const privateRoutes = [{}];

export { publicRoutes, authRoutes, privateRoutes };
