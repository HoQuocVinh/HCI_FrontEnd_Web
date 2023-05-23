import axios from "api/axios";
import CardImg from "components/card/CardImg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Slide2 = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState<any>([]);
  function fetchData() {
    const request = {
      orders: [],
      filter: [],
      size: 20,
      totalElement: 0,
      pageNumber: 1,
    };
    axios
      .post("product", request)
      .then((response) => {
        console.log(response);
        const { data } = response.data.result;
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(product.slice(0, 6));

  return (
    <div className="grid grid-cols-4 gap-y-10">
      {product.slice(0, 8).map((item: any, index: number) => (
        <CardImg
          key={index}
          width="w-[230px]"
          height="h-[260px]"
          src={item.items[0].media && item.items[0].media[0].filePath}
          alt=""
          border
          borderRadius="rounded-xl"
          onClick={() =>
            item.items &&
            navigate(`product/${item.id}/subproduct/${item.items.id}`)
          }
        />
      ))}
    </div>
  );
};

export default Slide2;
