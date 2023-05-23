import axios from "api/axios";
import CPDefault from "components/card/CPDefault";
import FilterProvider, {
  FilterContext,
} from "components/context/FilterProvider";
import { useTheme } from "components/context/ThemeProvider";
import WrapperPage from "components/wrapper/WrapperPage";
import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { removeDashesAndCapitalize } from "utils/handler";

const ProductPage = () => {
  const { setTheme } = useTheme();
  const { productName, genderType } = useParams();
  const [product, setProduct] = useState<any>([]);
  const [listFilter, setListFilter] = useState<any>([]);
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
        const { result } = response.data;
        console.log("TCL: ProductPage -> result", result);
        setProduct(result);
      })
      .catch((error) => console.log(error));
  }, [productName]);

  return (
    <FilterProvider>
      <WrapperPage>
        <ul className="breadcrumb hidden">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="text-white">
          {/* <div className="flex justify-between align-baseline">
            <div className="result mb-2 mt-2 flex flex-col">
              <p className="text-lg font-bold">Result</p>
              <span className="text-xl">
                {product.page && product.page.totalElement}
              </span>
            </div>
          </div> */}
          <div className="mt-10 flex">
            <SidebarFilter />
            <div className="flex-1">
              {product.page && product.page.totalElement > 0 && (
                <p className="mb-4 text-lg font-bold">
                  There are currently {product.page.totalElement} products
                </p>
              )}
              {product.page && product.page.totalElement ? (
                <div className="grid auto-cols-auto grid-cols-4 gap-x-4 gap-y-9 text-white">
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
              ) : (
                <div className="text-xl font-bold">
                  There are currently no products in the selected section
                </div>
              )}
            </div>
          </div>
        </div>
      </WrapperPage>
    </FilterProvider>
  );
};

const SidebarFilter = () => {
  const { genderType } = useParams();
  const [filter, setFilter] = useState<any>([]);

  const { filterMale, filterFemale } = useContext(FilterContext);

  useEffect(() => {
    genderType === "male" ? setFilter(filterMale) : setFilter(filterFemale);
  }, [filterFemale, filterMale, genderType]);

  return (
    <div>
      <aside className="sticky top-[100px] min-w-[293px] pr-5 text-white">
        <div>
          <span className="mb-7 text-3xl font-semibold">
            {genderType?.toUpperCase()}
          </span>
          <div className="mt-7">
            <ul>
              {filter &&
                filter.map((item: any, index: number) => (
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
                      to={item.to}
                      className={({ isActive }) =>
                        isActive
                          ? "text-green font-bold"
                          : "font-normal text-[#8E94A3]"
                      }
                    >
                      {item.name}
                    </NavLink>
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
