import {
  IconArrowDown,
  IconCart,
  IconHeart,
  IconUser,
} from "components/icon/Icon";
import SearchBar from "components/search/SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mx-36 flex items-center justify-between pt-8 pb-5">
      <div className="flex items-center">
        <Link to="/">
          <div className="text-[32px] font-bold">
            <p className="text-[#BFBFBF]">
              Pal<span className="text-[#9997FF]">mo</span>
            </p>
          </div>
        </Link>
        <ul className="nav ml-9">
          <li className="nav-item">
            <p>
              Style
              <i>
                <IconArrowDown />
              </i>
            </p>
            <ul className="nav-item_list bg-white">
              <li>
                <Link to="style/black-and-white">Black and white</Link>
              </li>
              <li>Buffolo</li>
            </ul>
          </li>
          <li className="nav-item">
            <p>
              Collection
              <i>
                <IconArrowDown />
              </i>
            </p>
            <ul className="nav-item_list bg-white">
              <li>Chicken</li>
              <li>Dog</li>
            </ul>
          </li>
          <li className="nav-item">
            <p>
              Gender
              <i>
                <IconArrowDown />
              </i>
            </p>
          </li>
          <li className="nav-item">
            <p>
              Age
              <i>
                <IconArrowDown />
              </i>
            </p>
          </li>
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
