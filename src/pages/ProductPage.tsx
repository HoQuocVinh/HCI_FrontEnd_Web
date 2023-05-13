import CPDefault from "components/card/CPDefault";
import { useTheme } from "components/context/ThemeProvider";
import { IconArrowDown } from "components/icon/Icon";
import WrapperPage from "components/wrapper/WrapperPage";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import classNames from "utils/classNames";
import {
  ALL_PYJAMA,
  ALL_SHIRT,
  ALL_TROUSER,
  DRESS_SHIRT,
  EASY_PANTS,
  EASY_SHORT,
  FILTER,
  JEAN,
  OUTERWEAR,
  POLO_SHIRT,
  SHORT,
  TROUSER,
  TSHIRT,
} from "utils/listTest";

const ProductPage = () => {
  const { setTheme } = useTheme();
  const { genderType, productName } = useParams();
  console.log("TCL: ProductPage -> genderType", genderType);
  const [product, setProduct] = useState<Array<object>>([]);

  useEffect(() => {
    setTheme("secondary");
  }, [setTheme]);
  const products = {
    shirt: ALL_SHIRT,
    "t-shirt": TSHIRT,
    "polo-shirt": POLO_SHIRT,
    "dress-shirt": DRESS_SHIRT,
    outerwear: OUTERWEAR,
    trousers: ALL_TROUSER,
    jean: JEAN,
    trouser: TROUSER,
    short: SHORT,
    pyjamas: ALL_PYJAMA,
    "easy-paints": EASY_PANTS,
    "easy-shorts": EASY_SHORT,
  };

  useEffect(() => {
    if (productName) setProduct(products[productName as keyof typeof products]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productName]);
  return (
    <WrapperPage>
      <ul className="breadcrumb hidden">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="text-white">
        <div className="flex justify-between align-baseline">
          <div className="result flex flex-col gap-5">
            <p className="text-lg font-bold">Result</p>
            <span>30</span>
          </div>
          <div className="flex flex-col filter">
            <p className="flex-1">Sort by</p>
            <select name="" id="" className="text-black">
              <option value="1">Product1</option>
              <option value="2">Product2</option>
              <option value="3">Product3</option>
            </select>
          </div>
        </div>
        <div className="mt-10 flex">
          <SidebarFilter />
          <div className="flex-1">
            <div className="grid auto-cols-auto grid-cols-4 gap-x-4 gap-y-9">
              {product.map((item: any, index: number) => (
                <CPDefault
                  productID={item.id}
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  colorTip={item.colorTip}
                  gender={item.gender}
                  size={item.size}
                  productName={item.productName}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </WrapperPage>
  );
};

const SidebarFilter = () => {
  const { genderType } = useParams();
  const [expandedCategorys, setExpandedCategorys] =
    useState<Array<object>>(FILTER);

  const { pathname } = useLocation();
  const handleClickFilter = (clickCategory: any) => {
    const newCategory = expandedCategorys.map((item: any) => {
      if (item.category === clickCategory) {
        // Thay đổi trạng thái của item được click
        return { ...item, isExpanded: !item.isExpanded };
      } else {
        // Đóng tất cả các item khác
        return { ...item, isExpanded: false };
      }
    });
    setExpandedCategorys(newCategory);
  };
  const updateExpandedCategorys = (pathname: string) => {
    setExpandedCategorys((prevCategorys: any) => {
      return prevCategorys.map((category: any) => {
        if (
          category.productType.some((product: any) => product.path === pathname)
        )
          return { ...category, isExpanded: true };
        else return { ...category, isExpanded: false };
      });
    });
  };
  useEffect(() => {
    updateExpandedCategorys(pathname);
  }, [pathname]);

  return (
    <div>
      <aside className="sticky top-[100px] min-w-[293px] pr-5 text-white">
        <div>
          <span className="mb-7 text-3xl font-semibold">
            {genderType?.toUpperCase()}
          </span>
          <div className="mt-7">
            <ul className="w-full">
              {expandedCategorys.map((item: any, index: number) => (
                <li key={index}>
                  <p
                    className="flex w-full cursor-pointer items-center justify-between px-1 py-2 filter"
                    onClick={() => handleClickFilter(item.category)}
                  >
                    <span
                      className={classNames(
                        "text-xl",
                        item.isExpanded
                          ? "font-bold text-white"
                          : "text-[#8E94A3]"
                      )}
                    >
                      {item.category}
                    </span>
                    <i
                      className={classNames(
                        "transition-all duration-500",
                        item.isExpanded ? "rotate-180" : "rotate-0"
                      )}
                    >
                      <IconArrowDown />
                    </i>
                  </p>
                  {item.isExpanded && (
                    <ul key={index}>
                      {item.productType.map((product: any, index: number) => (
                        <li
                          className="transition-al cursor-pointer rounded-sm text-sm hover:bg-[#303030]"
                          key={index}
                        >
                          <NavLink
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "block",
                              padding: "8px 20px",
                            }}
                            to={product.path}
                            className={({ isActive }) =>
                              isActive
                                ? "text-green font-bold"
                                : "font-normal text-[#8E94A3]"
                            }
                          >
                            {product.productName}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProductPage;
