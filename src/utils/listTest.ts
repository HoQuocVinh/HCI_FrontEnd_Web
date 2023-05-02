const location = window.location.pathname;
const pathSegments = location.split("/"); // Tách chuỗi URL thành các đoạn riêng biệt
const url = `/${pathSegments[1]}/${pathSegments[2]}/`; // Lấy đường dẫn "/gender/male"

export const FILTER = [
  {
    category: "Shirt",
    productType: [
      { productName: "All", path: `${url}shirt` },
      { productName: "Outerwear", path: `${url}outerwear` },
      { productName: "Dress shirt", path: `${url}dress-shirt` },
      { productName: "T-shirt", path: `${url}t-shirt` },
      { productName: "Polo shirt", path: `${url}polo-shirt` },
    ],
    isExpanded: false,
  },
  {
    category: "Trousers",
    productType: [
      { productName: "All", path: `${url}trousers` },
      { productName: "Jean", path: `${url}jean` },
      { productName: "Trouser", path: `${url}trouser` },
      { productName: "Short", path: `${url}short` },
    ],
    isExpanded: false,
  },
  {
    category: "Pyjama",
    productType: [
      { productName: "All", path: `${url}pyjamas` },
      { productName: "Easy Pants", path: `${url}easy-paints` },
      { productName: "Easy Shorts", path: `${url}easy-shorts` },
    ],
    isExpanded: false,
  },
];
export const TSHIRT = [
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455403/item/vngoods_63_455403.jpg?width=320",
    alt: "",
    gender: "male",
    size: "S-XL",
    colorTip: ["#5A84B5", "#FFFFFF"],
    productName: "AIRism Cotton Áo Thun Chống UV Cổ Tròn Dài Tay (Chống Nắng)",
    price: 390000,
    id: "tshirt-1",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455359/item/vngoods_23_455359.jpg?width=320",
    alt: "",
    gender: "male",
    size: "S-XL",
    colorTip: [
      "#F2F4F5",
      "#272729",
      "#CF9446",
      "#3B5756",
      "#4D5E72",
      "#623146",
    ],
    productName: "AIRism Cotton Áo Thun Chống UV Cổ Tròn Dài Tay (Chống Nắng)",
    price: 390000,
    id: "tshirt-2",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/433037/item/vngoods_07_433037.jpg?width=320",
    alt: "",
    gender: "unisex",
    size: "XS-XXL",
    colorTip: [
      "#F2F4F5",
      "#717075",
      "#1E1E1E",
      "#AC5258",
      "#ECE4D9",
      "#85B0A6",
      "#324A74",
    ],
    productName: "AIRism Cotton Áo Thun Chống UV Cổ Tròn Dài Tay (Chống Nắng)",
    price: 290000,
    id: "tshirt-3",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/425974/item/goods_02_425974.jpg?width=320",
    alt: "",
    gender: "unisex",
    size: "XS-XXL",
    colorTip: [
      "#F2F4F5",
      "#717075",
      "#1E1E1E",
      "#B88684",
      "#BCA57F",
      "#2B2E46",
      "#324A74",
    ],
    productName: "AIRism Cotton Áo Thun Chống UV Cổ Tròn Dài Tay (Chống Nắng)",
    price: 290000,
    id: "tshirt-4",
  },
];
export const POLO_SHIRT = [
  {
    src: "	https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/459713/item/vngoods_24_459713.jpg?width=320",
    alt: "",
    gender: "male",
    size: "XS-XXL",
    colorTip: [
      "#F4F4F4",
      "#B0AFB4",
      "#414143",
      "#FCA9CB",
      "#F44D1E",
      "#EAE5A0",
    ],
    productName: "Áo Polo Dry Vải Pique Ngắn Tay",
    price: 499000,
    id: "polo-shirt-1",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/458078/item/vngoods_01_458078.jpg?width=320",
    alt: "",
    gender: "male",
    size: "S-L",
    colorTip: ["#F2EADE", "#474828", "#202539"],
    productName: "Áo Polo Dry Vải Pique Có Họa Tiết",
    price: 799000,
    id: "polo-shirt-2",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457905/item/vngoods_03_457905.jpg?width=320",
    alt: "",
    gender: "male",
    size: "XS-XXL",
    colorTip: ["#F2F2F2", "#B4B3B8", "#EDBFC8", "#262838"],
    productName: "Áo Polo Dry Vải Pique Ngắn Tay",
    price: 499000,
    id: "polo-shirt-3",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455677/item/goods_61_455677.jpg?width=320",
    alt: "",
    gender: "male",
    size: "S",
    colorTip: ["#7BB2D1"],
    productName: "Áo Polo Dry Vải Pique Ngắn Tay",
    price: 399000,
    id: "polo-shirt-4",
  },
];
export const DRESS_SHIRT = [
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/456630/item/vngoods_64_456630.jpg?width=320",
    alt: "",
    gender: "male",
    size: "XS-XXL",
    colorTip: ["#F5F6F6", "#BEBCBF", "#F5DBE8", "#CBD7FB", "#252E3C"],
    productName: "Áo Sơ Mi Oxford Slim Fit Dài Tay",
    price: 699000,
    id: "dress-shirt-1",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/452811/item/goods_12_452811.jpg?width=320",
    alt: "",
    gender: "male",
    size: "S-XL",
    colorTip: ["#F8F8F7", "#CECAC9", "#FBDFE4", "#C9D6F6"],
    productName: "Áo Sơ Mi Oxford Ngắn Tay",
    price: 499000,
    id: "dress-shirt-2",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/452299/item/goods_64_452299.jpg?width=320",
    alt: "",
    gender: "male",
    size: "XS-XXL",
    colorTip: ["#F5F7F6", "#BFBFC1", "#FBE1E7", "#C3D2F3", "#1E2D40"],
    productName: "Áo Sơ Mi Oxford Dáng Ôm Dài Tay",
    price: 699000,
    id: "dress-shirt-3",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/448347/item/goods_06_448347.jpg?width=320",
    alt: "",
    gender: "male",
    size: "S",
    colorTip: ["#ECECEE", "#CEC9C8"],
    productName: "Áo Sơ Mi Oxford Slim Fit Dài Tay",
    price: 699000,
    id: "dress-shirt-4",
  },
];
export const OUTERWEAR = [
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/456991/item/vngoods_32_456991.jpg?width=320",
    alt: "",
    gender: "male",
    size: "XS-XXL",
    colorTip: ["#F1EBE6", "#E1B3BC", "#CEBAA0", "#4273B7", "#273550"],
    productName: "Áo Parka Cotton",
    price: 999000,
    id: "outerwear-1",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/456788/item/vngoods_63_456788.jpg?width=320",
    alt: "",
    gender: "male",
    size: "S-XL",
    colorTip: [
      "#F0ECE4",
      "#BBBEC4",
      "#494C51",
      "#28272C",
      "#478A6E",
      "#14428D",
    ],
    productName: "Áo Khoác Dry-EX Kéo Khóa Chống UV (Chống Nắng)",
    price: 699000,
    id: "outerwear-2",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/453850/item/vngoods_31_453850.jpg?width=320",
    alt: "",
    gender: "male",
    size: "XS-XXL",
    colorTip: ["#313131", "#CEC5B6", "#BC841C", "#2F4E4D", "#2C4468"],
    productName: "Áo Parka Hai Mặt",
    price: 999000,
    id: "outerwear-3",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/444550/item/vngoods_09_444550.jpg?width=320",
    alt: "",
    gender: "male",
    size: "S",
    colorTip: [
      "#A5A6A8",
      "#313236",
      "#D74D28",
      "#B58447",
      "#4872C3",
      "#2F569B",
      "#394052",
    ],
    productName: "Áo Parka Chống UV Bỏ Túi (Chống Nắng)",
    price: 999000,
    id: "outerwear-4",
  },
];
export const ALL_SHIRT = [
  ...TSHIRT,
  ...POLO_SHIRT,
  ...DRESS_SHIRT,
  ...OUTERWEAR,
];

export const JEAN = [
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/441741/item/vngoods_67_441741.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-35inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "Quần Jeans Slim Fit",
    price: 999000,
    id: "jean-1",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/418910/item/vngoods_69_418910.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-35inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "Quần Jeans Dáng Regular Fit",
    price: 999000,
    id: "jean-2",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455471/item/vngoods_53_455471.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-35inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "Quần Jean Siêu Co Giãn Nhiều Màu",
    price: 999000,
    id: "jean-3",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/418910/item/vngoods_69_418910.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-36inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "Quần Jean Selvedge Co Giãn Dáng Slim Fit",
    price: 999000,
    id: "jean-4",
  },
];
export const TROUSER = [
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-35inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "AirSense Quần Dài (Siêu Nhẹ)",
    price: 999000,
    id: "trouser-1",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455495/item/vngoods_31_455495.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-35inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "AirSense Quần Dài Dáng Relax (Siêu Nhẹ)",
    price: 999000,
    id: "trouser-2",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/447780/item/vngoods_08_447780.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-35inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "AirSense Quần Dài Co Giãn 2 Chiều (Siêu Nhẹ)",
    price: 999000,
    id: "trouser-3",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/444596/item/vngoods_69_444596.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-36inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "AirSense Quần Dài Co Giãn 2 Chiều (Siêu Nhẹ)",
    price: 999000,
    id: "trouser-4",
  },
];
export const SHORT = [
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457685/item/vngoods_69_457685.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-35inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "Quần Shorts Co Giãn Dáng Slim Fit",
    price: 999000,
    id: "sort-1",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455533/item/vngoods_32_455533.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-35inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "Quần Shorts Co Giãn Dáng Slim Fit",
    price: 999000,
    id: "sort-2",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/448490/item/goods_68_448490.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-35inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "Quần Short In Họa Tiết Dáng Slim Fit Co Giãn",
    price: 999000,
    id: "sort-3",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/444614/item/goods_62_444614.jpg?width=320",
    alt: "",
    gender: "male",
    size: "27inch-36inch",
    colorTip: ["#F1EBE6", "#EBE6DF", "#223451"],
    productName: "Quần Short Co Giãn Dáng Slim Fit",
    price: 999000,
    id: "sort-4",
  },
];

export const ALL_TROUSER = [...JEAN, ...TROUSER, ...SHORT];

export const EASY_PANTS = [
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455890/item/vngoods_07_455890.jpg?width=320",
    alt: "",
    gender: "male",
    size: "xs-xxl",
    colorTip: ["#C2C4C6", "#4D4E52", "#242426", "#2D374C"],
    productName: "AIRism Quần Easy Siêu Co Giãn",
    price: 399000,
    id: "easy-paint-1",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/458568/item/vngoods_03_458568.jpg?width=320",
    alt: "",
    gender: "male",
    size: "s-xxl",
    colorTip: ["#EAEAE8", "#B8B7B3", "#D0D1D5", "#1F212E"],
    productName: "Quần Nỉ",
    price: 699000,
    id: "easy-paint-2",
  },
];
export const EASY_SHORT = [
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455903/item/vngoods_33_455903.jpg?width=320",
    alt: "",
    gender: "male",
    size: "xs-xxl",
    colorTip: [
      "#C9CCD1",
      "#D99A97",
      "#CAB59C",
      "#4B6758",
      "#3A4E71",
      "#20293F",
    ],
    productName: "AIRism Cotton Quần Easy Shorts",
    price: 499000,
    id: "easy-short-1",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/451332/item/goods_56_451332.jpg?width=320",
    alt: "",
    gender: "male",
    size: "xs-l",
    colorTip: ["#C9CCD1", "#515558", "#65654D", "#294261", "#181F36"],
    productName: "AIRism Cotton Quần Easy Shorts",
    price: 299000,
    id: "easy-short-2",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/451330/item/goods_57_451330.jpg?width=320",
    alt: "",
    gender: "male",
    size: "xs-l",
    colorTip: ["#C9CCD1", "#515558", "#65654D", "#294261", "#181F36"],
    productName: "Quần Dry Easy Short Co Giãn",
    price: 299000,
    id: "easy-short-3",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/448666/item/goods_04_448666.jpg?width=320",
    alt: "",
    gender: "male",
    size: "xs-l",
    colorTip: ["#C9CCD1", "#515558", "#65654D", "#294261", "#181F36"],
    productName: "AIRism Quần Cotton Easy Short",
    price: 299000,
    id: "easy-short-4",
  },
];
export const ALL_PYJAMA = [...EASY_PANTS, ...EASY_SHORT];

//* product detail
export const LIST_IMG = [
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/459713/item/vngoods_12_459713.jpg?width=750",
    alt: "",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/459713/sub/vngoods_459713_sub7.jpg?width=750",
    alt: "",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459713/sub/goods_459713_sub11.jpg?width=750",
    alt: "",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459713/sub/goods_459713_sub14.jpg?width=750",
    alt: "",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459713/sub/goods_459713_sub17.jpg?width=750 ",
    alt: "",
  },
  {
    src: "	https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459713/sub/goods_459713_sub18.jpg?width=750",
    alt: "",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459713/sub/goods_459713_sub19.jpg?width=750",
    alt: "",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/459713/sub/vngoods_459713_sub23.jpg?width=750",
    alt: "",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/459713/sub/vngoods_459713_sub24.jpg?width=750",
    alt: "",
  },
  {
    src: "	https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459713/sub/goods_459713_sub25.jpg?width=750",
    alt: "",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459713/sub/goods_459713_sub25.jpg?width=750",
    alt: "",
  },
  {
    src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459713/sub/goods_459713_sub27.jpg?width=750",
    alt: "",
  },
];

export const LIST_COLOR = [
  {
    colorName: "white",
    hexColor: "#F7F7F5",
  },
  {
    colorName: "gray",
    hexColor: "#CAC6C5",
  },
  {
    colorName: "pink 1",
    hexColor: "#FBDFE4",
  },
  {
    colorName: "pink 2",
    hexColor: "#FBDFE4",
  },
  {
    colorName: "blue light",
    hexColor: "#C7D4F2",
  },
];

export const LIST_SIZE = [
  {
    size: "xs",
    isInStoke: false,
  },
  {
    size: "s",
    isInStoke: true,
  },
  {
    size: "m",
    isInStoke: true,
  },
  {
    size: "l",
    isInStoke: true,
  },
  {
    size: "xl",
    isInStoke: true,
  },
  {
    size: "xxl",
    isInStoke: true,
  },
];