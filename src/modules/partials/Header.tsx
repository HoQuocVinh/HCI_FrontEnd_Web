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
    <div className="mx-36 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-[32px] font-bold">
          <p className="text-[#BFBFBF]">
            Pal<span className="text-[#9997FF]">mo</span>
          </p>
        </div>
        <ul className="navigation ml-9">
          <li>
            <p>
              Style
              <i>
                <IconArrowDown />
              </i>
            </p>
            <ul className="navigation-list_item">
              <li>sdkfsdkfjdf</li>
              <li>sdlfksdfjsdkfdsjf</li>
            </ul>
          </li>
          <li>
            <p>
              Collection
              <i>
                <IconArrowDown />
              </i>
            </p>
          </li>
          <li>
            <p>
              Style
              <i>
                <IconArrowDown />
              </i>
            </p>
          </li>
          <li>
            <p>
              Style
              <i>
                <IconArrowDown />
              </i>
            </p>
          </li>
          {/* {LIST_NAVIGATION.map((item: INavigationItem, index: number) => (
            <li key={index}>
              <p>
                {item.title}
                <i>
                  <IconArrowDown />
                </i>
              </p>
              <ul>
                <li>black and white</li>
                <li>white and black</li>
              </ul>
            </li>
          ))} */}
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
