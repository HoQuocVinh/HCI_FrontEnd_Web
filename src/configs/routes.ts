const routes = {
  home: "/",
  style: "style/:styleType",
  gender: "gender/:genderType",
  product: "gender/:genderType/:productName/:productId?",
  productDetail: "/product/:productId/subproduct/:subProductId",
  cart: "/cart",
  checkout: "/checkout?",
  checkoutComplete: "/checkout/complete",
  signin: "signin",
  signup: "signup",
  profile: "profile",
  viewProfile: "detail",
  coupon: "coupon",
  purchaseHistory: "purchase/history",
  order: "orders",
  editProfile: "edit",
  changePassword: "password/edit",
};

export default routes;
