const routes = {
  home: "/",
  style: "style/:styleType",
  gender: "gender/:genderType",
  product: "gender/:genderType/:productName/:productId?",
  productDetail: "/product/:productId?",
  cart: "/cart",
  checkout: "/checkout?",
  checkoutComplete: "/checkout/complete",
  signin: "signin",
  signup: "signup",
};

export default routes;
