import axios from "api/axios";
import CPDefault from "components/card/CPDefault";
import CardImg from "components/card/CardImg";
import { useTheme } from "components/context/ThemeProvider";
import { IconHome } from "components/icon/Icon";
import WrapperPage from "components/wrapper/WrapperPage";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CollectionPage = () => {
  const { setTheme } = useTheme();
  const { collectionId, collectionName } = useParams();
  const navigate = useNavigate();

  const [collection, setCollection] = useState<any>([]);
  const [productCollection, setProductCollection] = useState<any>([]);

  useEffect(() => {
    setTheme("secondary");
  }, [setTheme]);

  useEffect(() => {
    function fetchProductInCollection(props: string, value: string) {
      const request = {
        orders: [],
        filter: [
          {
            props: props,
            filterOperator: "Is Equal To",
            value: value,
          },
        ],
        size: 20,
        totalElement: 0,
        pageNumber: 1,
      };
      axios
        .post("product", request)
        .then((response) => {
          console.log("TCL: fetchProductInStyle -> response", response);
          const { result } = response.data;
          setProductCollection(result);
        })
        .catch((error) => console.log(error));
    }

    function fetchCollectionById(id: string) {
      const request = {
        orders: [],
        filter: [
          {
            props: "id",
            filterOperator: "Is Equal To",
            value: id,
          },
        ],
        size: 20,
        totalElement: 0,
        pageNumber: 1,
      };
      axios
        .post("product/collection", request)
        .then((response) => {
          const { result } = response.data;
          console.log("TCL: fetchStyleById -> result", result);
          setCollection(result);
        })
        .catch((error) => console.log(error));
    }

    collectionId && fetchCollectionById(collectionId);
    collectionId && fetchProductInCollection("collection.id", collectionId);
  }, []);

  console.log(productCollection);

  return (
    <Fragment>
      <img
        src={collection.data && collection.data[0].mediaLink}
        alt=""
        className="h-screen w-full object-cover"
      />
      <div className="mx-36 pt-10">
        <div className="w-full"></div>
        <div className="breadcrumb flex items-end">
          <i>
            <IconHome />
          </i>
          <p className="ml-1 text-lg leading-none text-white">
            {`style/${collectionName}`}
          </p>
        </div>
        <div className="mt-5 grid grid-flow-row grid-cols-5 gap-10 text-white">
          {productCollection.data &&
            productCollection.data.map((item: any, index: number) => (
              // <CPDefault
              //   idProduct={item.id}
              //   idSubProduct={item.items && item.items[0].id}
              //   key={index}
              //   src={item.items && item.items[0].media[0].filePath}
              //   alt={""}
              //   colorTip={item.items && item.items[0].color.colorValue}
              //   colorName={item.items && item.items[0].color.colorName}
              //   gender={item.category.gender}
              //   size={item.items && item.items[0].size.sizeName}
              //   productName={item.name}
              //   price={item.items && item.items[0].price}
              // />
              <CardImg
                key={index}
                width="w-[230px]"
                height="h-[300px]"
                src={item.items[0].media && item.items[0].media[0].filePath}
                alt=""
                border
                borderRadius="rounded-xl"
                onClick={() =>
                  item.items &&
                  navigate(`/product/${item.id}/subproduct/${item.items[0].id}`)
                }
                size={item.items && item.items[0].size.sizeName}
                price={item.items && item.items[0].price}
                name={item.name}
                bgColor={item.items && item.items[0].color.colorValue}
              />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CollectionPage;
