import axios from "api/axios";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductContext = createContext<any>(null);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Array<object>>([]);
  const [subProduct, setSubProduct] = useState<Array<object>>([]);
  const [img, setImg] = useState<Array<object>>([]);
  const [color, setColor] = useState<Array<string>>([]);
  const [size, setSize] = useState<string>();
  useEffect(() => {
    axios
      .get(`product/${productId}`)
      .then((response) => {
        const { result } = response.data;
        const dest = result.child[0];
        const { color } = dest;
        const { size } = dest;
        const { child } = result;

        child.map((childItem: any) =>
          setSubProduct((prev: any) => [...prev, childItem])
        );
        setProduct(result);
        setColor(color);
        setSize(size);
      })
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <ProductContext.Provider value={{ product, subProduct, img, color, size }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
