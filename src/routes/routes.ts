import { lazy } from "react";
import config from "configs";

//* Pages
const HomePage = lazy(() => import("pages/HomePage"));

//* Public routes
const publicRoutes = [{ path: config.routes.home, component: HomePage }];

//* Private routes
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
