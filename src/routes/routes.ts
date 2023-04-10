import { lazy } from "react";
import config from "configs";

//* Pages
const HomePage = lazy(() => import("pages/HomePage"));
const StylePage = lazy(() => import("pages/StylePage"));
const SignInPage = lazy(() => import("pages/SignInPage"));
const SignUpPage = lazy(() => import("pages/SignUpPage"));
const ProfilePage = lazy(() => import("pages/profile/ProfilePage"));
const CouponPage = lazy(() => import("pages/profile/CouponPage"));
const PurchaseHistory = lazy(() => import("pages/profile/PurchaseHistoryPage"));
const OrdersPage = lazy(() => import("pages/profile/OrdersPage"));
const EditProfilePage = lazy(() => import("pages/profile/EditProfilePage"));
const ChangePasswordPage = lazy(
  () => import("pages/profile/ChangePasswordPage")
);

//* Public routes
const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.style, component: StylePage },
];

//* Profile routes
const profileRouters = [
  { path: config.routes.profile, component: ProfilePage },
  { path: config.routes.viewProfile, component: ProfilePage },
  { path: config.routes.coupon, component: CouponPage },
  { path: config.routes.purchaseHistory, component: PurchaseHistory },
  { path: config.routes.order, component: OrdersPage },
  { path: config.routes.editProfile, component: EditProfilePage },
  { path: config.routes.changePassword, component: ChangePasswordPage },
];
const authRoutes = [
  { path: config.routes.signin, component: SignInPage },
  { path: config.routes.signup, component: SignUpPage },
];

//* Private routesconst
const privateRoutes = [{}];

export { publicRoutes, authRoutes, privateRoutes, profileRouters };
