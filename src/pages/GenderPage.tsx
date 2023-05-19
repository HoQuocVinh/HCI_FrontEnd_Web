import axios from "api/axios";
import { useTheme } from "components/context/ThemeProvider";
import Skeleton from "components/skeleton/Skeleton";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import useLoading from "hooks/useLoading";
import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LIST_PRODUCT_FEMALE, LIST_PRODUCT_MALE } from "utils/arrayList";

const GenderPage = () => {
  const { setTheme } = useTheme();
  const { genderType } = useParams();
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
  const loading = useLoading();
  const { genderType } = useParams();
  const [category, setCategory] = useState<Array<object>>([]);

  const handleDirection = (prodcutType: string) => {
    const newProductType = prodcutType.toLowerCase().replace(/\s+/g, "-");
    navigate(`/gender/${genderType}/${newProductType}`);
  };

  useEffect(() => {
    const dataRequest: any = {
      orders: [],
      filter: [
        {
          props: "gender",
          filterOperator: "Is Equal To",
          value: `${genderType?.charAt(0).toUpperCase()}${genderType?.slice(
            1
          )}`,
        },
      ],
      size: 20,
      totalElement: 0,
      pageNumber: 1,
    };

    axios
      .post("product/category", dataRequest)
      .then((response) => {
        console.log(response);
        const { data } = response.data.result;
        setCategory(data);
      })
      .catch((error) => console.log(error));
  }, [genderType]);

  return (
    <div className="mx-auto max-w-[1172px] p-[10px] text-center text-white">
      <h1 className="py-5 text-3xl font-semibold uppercase">
        Highlighted categories
      </h1>
      {loading ? (
        <Skeleton.GenderPage />
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5">
          {category.map((item: any, index: number) => (
            <figure className="cursor-pointer" key={index}>
              <img
                onClick={() => handleDirection(item.name)}
                src={item.mediaLink}
                alt=""
                loading="lazy"
                className="rounded-md object-cover"
                style={{ width: "210px", height: "290px" }}
              />
              <figcaption className="pt-2 text-center">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenderPage;
