import { lazy } from "react";
import config from "configs";

//* Pages
const HomePage = lazy(() => import("pages/HomePage"));
const StylePage = lazy(() => import("pages/StylePage"));
const SignInPage = lazy(() => import("pages/SignInPage"));
const SignUpPage = lazy(() => import("pages/SignUpPage"));
const ProfilePage = lazy(() => import("pages/ProfilePage"));

//* Public routes
const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.style, component: StylePage },
];

//* Profile routes
const profileRouters = [
  { path: config.routes.profile, component: ProfilePage },
];
const authRoutes = [
  { path: config.routes.signin, component: SignInPage },
  { path: config.routes.signup, component: SignUpPage },
];

//* Private routesconst
const privateRoutes = [{}];

export { publicRoutes, authRoutes, privateRoutes, profileRouters };
