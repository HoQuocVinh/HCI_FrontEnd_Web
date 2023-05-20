import axios from "api/axios";
import CPDefault from "components/card/CPDefault";
import { useTheme } from "components/context/ThemeProvider";
import { IconArrowDown } from "components/icon/Icon";
import WrapperPage from "components/wrapper/WrapperPage";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import classNames from "utils/classNames";
import { removeDashesAndCapitalize } from "utils/handler";
import { FILTER } from "utils/listTest";

const ProductPage = () => {
  const { setTheme } = useTheme();
  const { productName } = useParams();
  const [product, setProduct] = useState<any>([]);
  useEffect(() => {
    setTheme("secondary");
  }, [setTheme]);

  useEffect(() => {
    const dataRequest = {
      orders: [],
      filter: [
        {
          props: "category.name",
          filterOperator: "Is Equal To",
          value: productName && removeDashesAndCapitalize(productName),
        },
      ],
      size: 20,
      totalElement: 0,
      pageNumber: 1,
    };

    axios
      .post("product", dataRequest)
      .then((response) => {
        console.log("TCL: ProductPage -> response", response);
        const { result } = response.data;
        console.log("TCL: ProductPage -> data", result);
        setProduct(result);
      })
      .catch((error) => console.log(error));
  }, [productName]);

  console.log(product);
  return (
    <WrapperPage>
      <ul className="breadcrumb hidden">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="text-white">
        <div className="flex justify-between align-baseline">
          <div className="result mb-2 flex flex-col mt-2">
            <p className="text-lg font-bold">Result</p>
            <span className="text-xl">
              {product.page && product.page.totalElement}
            </span>
          </div>
        </div>
        <div className="mt-10 flex">
          <SidebarFilter />
          <div className="flex-1">
            <div className="grid auto-cols-auto grid-cols-4 gap-x-4 gap-y-9">
              {product.data &&
                product?.data.map((item: any, index: number) => (
                  <CPDefault
                    idProduct={item.id}
                    idSubProduct={item.items[0].id}
                    key={index}
                    src={item.items[0].media[0].filePath}
                    alt={item.items[0].media[0].fileName}
                    colorTip={item.items[0].color.colorValue}
                    colorName={item.items[0].color.colorName}
                    gender={item.category.gender}
                    size={item.items[0].size.sizeName}
                    productName={item.name}
                    price={item.items[0].price}
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
  const { pathname } = useLocation();
  const [expandedCategorys, setExpandedCategorys] =
    useState<Array<object>>(FILTER);

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
