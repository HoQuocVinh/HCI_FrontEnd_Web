import { lazy } from "react";
import config from "configs";

//* Pages
const HomePage = lazy(() => import("pages/HomePage"));
const StylePage = lazy(() => import("pages/StylePage"));
const SignInPage = lazy(() => import("pages/SignInPage"));
const SignUpPage = lazy(() => import("pages/SignUpPage"));
const GenderPage = lazy(() => import("pages/GenderPage"));
const ProductPage = lazy(() => import("pages/ProductPage"));
const ProductDetailPage = lazy(() => import("pages/ProductDetailPage"));
const CartPage = lazy(() => import("pages/CartPage"));
const CheckoutPage = lazy(() => import("pages/CheckoutPage"));
const CheckoutCompletePage = lazy(() => import("pages/CheckoutCompletePage"));
const ProfilePage = lazy(() => import("pages/profile/ProfilePage"));
const CouponPage = lazy(() => import("pages/profile/CouponPage"));
const PurchaseHistory = lazy(() => import("pages/profile/PurchaseHistoryPage"));
const OrdersPage = lazy(() => import("pages/profile/OrdersPage"));
const EditProfilePage = lazy(() => import("pages/profile/EditProfilePage"));
const ChangePasswordPage = lazy(
  () => import("pages/profile/ChangePasswordPage")
);
const CollectionPage = lazy(() => import("pages/CollectionPage"));

//* Public routes
const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.style, component: StylePage },
  { path: config.routes.gender, component: GenderPage },
  { path: config.routes.product, component: ProductPage },
  { path: config.routes.productDetail, component: ProductDetailPage },
  { path: config.routes.collection, component: CollectionPage },
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

//* Auth routes
const authRoutes = [
  { path: config.routes.signin, component: SignInPage },
  { path: config.routes.signup, component: SignUpPage },
];

//* Private routes
const privateRoutes = [
  { path: config.routes.cart, component: CartPage },
  { path: config.routes.checkout, component: CheckoutPage },
  { path: config.routes.checkoutComplete, component: CheckoutCompletePage },
];

//* Active routes

export { publicRoutes, authRoutes, privateRoutes, profileRouters };
