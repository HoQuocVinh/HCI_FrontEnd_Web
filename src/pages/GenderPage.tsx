import { useTheme } from "components/context/ThemeProvider";
import Skeleton from "components/skeleton/Skeleton";
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
      {loading ? (
        <Skeleton.GenderPage />
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5">
          {prodcut.map((item: any, index: number) => (
            <figure className="cursor-pointer" key={index}>
              <img
                onClick={() => handleDirection(item.caption)}
                src={item.src}
                alt=""
                loading="lazy"
                className="rounded-md object-cover"
                style={{ width: "210px", height: "290px" }}
              />
              <figcaption className="pt-2 text-center">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenderPage;
