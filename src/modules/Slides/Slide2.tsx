import axios from "api/axios";
import CardImg from "components/card/CardImg";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Slide2 = () => {
  const navigate = useNavigate();

  const { accessToken } = useSelector((state: any) => state.auth);
  const [product, setProduct] = useState<any>([]);
  function fetchData() {
    const request = {
      productType: "New",
    };
    axios
      .post("product/subproduct", request, {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        const { result } = response.data;
        setProduct(result);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(product.slice(0, 6));

  return (
    <div className="grid grid-cols-4 gap-y-10">
      {/* {Array(8)
        .fill(0)
        .map((item: any, index: number) => (
          <CardImg
            key={index}
            width="w-[230px]"
            height="h-[260px]"
            src="/img-card.png"
            alt=""
            border
            borderRadius="rounded-xl"
          />
        ))} */}
      {product.slice(0, 8).map((item: any, index: number) => (
        <CardImg
          key={index}
          width="w-[230px]"
          height="h-[260px]"
          src={
            item.SubProduct[0].SubProductMedia &&
            item.SubProduct[0].SubProductMedia[0].media.filePath
          }
          alt=""
          border
          borderRadius="rounded-xl"
          onClick={() =>
            item.SubProduct &&
            navigate(`product/${item.id}/subproduct/${item.SubProduct[0].id}`)
          }
        />
      ))}
    </div>
  );
};

export default Slide2;
