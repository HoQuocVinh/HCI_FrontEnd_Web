import { useTheme } from "components/context/ThemeProvider";
import { IconHome } from "components/icon/Icon";
import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardImg from "components/card/CardImg";
import CProduct from "components/card/CProduct";

const StylePage = () => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("secondary");
  }, [setTheme]);
  const location = useLocation();

  return (
    <Fragment>
      <img src="/banner-black.png" alt="" className="object-cover" />
      <div className="mx-36 mt-[90px] pt-10">
        <div className="w-full"></div>
        <div className="breadcrumb flex items-end">
          <i>
            <IconHome />
          </i>
          <p className="ml-1 text-lg leading-none text-white">
            {location.pathname}
          </p>
        </div>
        <div className="mt-10 grid grid-flow-row grid-cols-5 gap-10">
          {Array(10)
            .fill(0)
            .map((item: any, index: any) => (
              <CProduct
                src="https://images.unsplash.com/photo-1679957537204-6723a5afe5dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                height="h-[300px]"
                width="w-full"
                borderRadius="rounded-[10px]"
                alt="card-img"
              />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default StylePage;
