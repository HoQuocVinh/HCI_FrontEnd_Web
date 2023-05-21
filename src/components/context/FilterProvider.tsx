import axios from "api/axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FilterContext = createContext<any>(null);

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const { genderType } = useParams();
  console.log("TCL: FilterProvider -> genderType", genderType);
  const [filterMale, setFilterMale] = useState<any>([]);
  const [filterFemale, setFilterFemale] = useState<any>([]);
  const requestMale = {
    orders: [],
    filter: [
      {
        props: "gender",
        filterOperator: "Is Equal To",
        value: "Male",
      },
    ],
    size: 20,
    totalElement: 0,
    pageNumber: 1,
  };
  const requestFemale = {
    orders: [],
    filter: [
      {
        props: "gender",
        filterOperator: "Is Equal To",
        value: "Female",
      },
    ],
    size: 20,
    totalElement: 0,
    pageNumber: 1,
  };

  function fetchCategoryMale() {
    axios
      .post("product/category", requestMale)
      .then((response) => {
        console.log(response);
        const { result } = response.data;
        const flag = result.data.map((item: any) => ({
          name: item.name,
          to: `/gender/${genderType}/${item.name
            .toLowerCase()
            .replace(/ /g, "-")}`,
        }));
        setFilterMale(flag);
      })
      .catch((error) => console.log(error));
  }
  function fetchCategoryFemale() {
    axios
      .post("product/category", requestFemale)
      .then((response) => {
        console.log(response);
        const { result } = response.data;
        const flag = result.data.map((item: any) => ({
          name: item.name,
          to: `/gender/${genderType}/${item.name
            .toLowerCase()
            .replace(/ /g, "-")}`,
        }));
        console.log("TCL: fetchCategoryFemale -> flag", flag);
        setFilterFemale(flag);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchCategoryMale();
    fetchCategoryFemale();
  }, []);

  return (
    <FilterContext.Provider value={{ filterMale, filterFemale }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
