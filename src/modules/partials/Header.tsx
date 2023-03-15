import React from "react";
import {
  IconArrowDown,
  IconCart,
  IconHeart,
  IconUser,
} from "components/icon/Icon";
import SearchBar from "components/search/SearchBar";
import { INavigationItem } from "utils/listProps";
import { LIST_NAVIGATION } from "utils/arrayList";



const Header = () => {
  return (
    <div className="mx-36 mt-[27px] flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-[32px] font-bold">
          <p className="text-[#BFBFBF]">
            Pal<span className="text-[#9997FF]">mo</span>
          </p>
        </div>
        <ul className="navigation ml-9">
          {LIST_NAVIGATION.map((item: INavigationItem, index: number) => (
            <li key={index}>
              <p>
                {item.title}
                <i>
                  <IconArrowDown />
                </i>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <SearchBar />
        <i>
          <IconUser />
        </i>
        <i>
          <IconHeart />
        </i>
        <i>
          <IconCart />
        </i>
      </div>
    </div>
  );
};

export default Header;
