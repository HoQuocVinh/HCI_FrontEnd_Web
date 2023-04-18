import { useTheme } from "components/context/ThemeProvider";
import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const LIST_PRODUCT_MALE = [
  {
    src: "https://i.pinimg.com/originals/29/f1/33/29f1332d776bcfe5c68b1dd11991efd2.jpg",
    caption: "Outerwear",
  },
  {
    src: "https://cdn-images.kooding.com/productDetailImage/299170-2/83b11535752f53a270e8312327b84156e089ec03.jpg",
    caption: "Dress shirt",
  },
  {
    src: "https://i.pinimg.com/564x/32/ff/33/32ff3393cbcfd6015d7410bfeaa3a144.jpg",
    caption: "T-shirt",
  },
  {
    src: "https://s7g3.scene7.com/is/image/soloinvest/n11346A?$big_image_web$",
    caption: "Polo shirt",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0410_9704e449-b526-47a3-8470-d23a87d8384a.jpg?v=1663778236",
    caption: "Trousers",
  },
  {
    src: "https://cdn.media.amplience.net/i/primark/991058399504_01",
    caption: "Shorts",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0209/5404/products/F22-MS001-F1460-200_0291-retouched_600x.jpg?v=1678896432",
    caption: "Pyjamas",
  },
];
const LIST_PRODUCT_FEMALE = [
  {
    src: "https://i.pinimg.com/736x/04/0f/2e/040f2e2112faaf626969daeabb8cde40.jpg",
    caption: "Outerwear",
  },
  {
    src: "https://i.pinimg.com/564x/36/98/8c/36988c3ceee413259404a8483a49d062.jpg",
    caption: "Dress shirt",
  },
  {
    src: "https://i.pinimg.com/564x/f0/9e/53/f09e537c15a63a16e1f5a83bb0069abc.jpg",
    caption: "T-shirt",
  },
  {
    src: "https://www.target.com.au/medias/static_content/product/images/full/22/90/A1382290.jpg?impolicy=product_portrait_hero",
    caption: "Polo shirt",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0399/0231/4646/products/SFPANT5041-1.jpg?v=1666355024",
    caption: "Trousers",
  },
  {
    src: "https://media1.popsugar-assets.com/files/thumbor/ekApWuQGoAIqm35y58YJfJBtc00/0x0:1500x1500/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2023/03/01/044/n/1922564/2614b47463ffe81d53f1a8.45169784_/i/best-womens-shorts-from-old-navy.jpg",
    caption: "Shorts",
  },
  {
    src: "https://johnlewis.scene7.com/is/image/JohnLewis/005133982?",
    caption: "Pyjamas",
  },
];
const GenderPage = () => {
  const { setTheme } = useTheme();
  const { genderType } = useParams();
  const param = useParams();
  console.log("TCL: GenderPage -> param", param);
  useEffect(() => {
    setTheme("secondary");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <img
        src={
          genderType === "male"
            ? "/banner-gender-male.jpg"
            : "/banner-gender-female.jpg"
        }
        alt=""
      />
      <Category />
    </Fragment>
  );
};

export const Category = () => {
  const navigate = useNavigate();
  const { genderType } = useParams();
  const [prodcut, setProdcut] = useState<Array<object>>([]);

  const handleDirection = (prodcutType: string) => {
    const newProductType = prodcutType.toLowerCase().replace(/\s+/g, "-");
    navigate(`/gender/${genderType}/${newProductType}`);
  };

  useEffect(() => {
    genderType === "male"
      ? setProdcut(LIST_PRODUCT_MALE)
      : setProdcut(LIST_PRODUCT_FEMALE);
  }, [genderType]);

  return (
    <div className="mx-auto max-w-[1172px] p-[10px] text-center text-white">
      <h1 className="py-5 text-3xl font-semibold uppercase">
        Highlighted categories
      </h1>
      <div className="grid auto-rows-auto grid-cols-4 gap-x-3 gap-y-5 py-4">
        {prodcut.map((item: any, index: number) => (
          <figure className="cursor-pointer" key={index}>
            <img
              onClick={() => handleDirection(item.caption)}
              src={item.src}
              alt=""
              className="h-[350px] w-full rounded-md object-cover"
            />
            <figcaption className="pt-2 text-center">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default GenderPage;
