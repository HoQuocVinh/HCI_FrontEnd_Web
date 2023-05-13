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

//* Public routes
const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.style, component: StylePage },
  { path: config.routes.gender, component: GenderPage },
  { path: config.routes.product, component: ProductPage },
  { path: config.routes.productDetail, component: ProductDetailPage },
];

const authRoutes = [
  { path: config.routes.signin, component: SignInPage },
  { path: config.routes.signup, component: SignUpPage },
];

//* Private routesconst
const privateRoutes = [
  { path: config.routes.cart, component: CartPage },
  { path: config.routes.checkout, component: CheckoutPage },
];

export { publicRoutes, authRoutes, privateRoutes };
