import { animated, useSpring } from "@react-spring/web";
import Tippy from "@tippyjs/react";
import { Link, useMatch, useNavigate } from "react-router-dom";

import Navigation from "common/Navigation";
import {
  IconCart,
  IconProfile,
  IconSignOut,
  IconUser,
} from "components/icon/Icon";
import SearchBar from "components/search/SearchBar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogOut } from "sagas/auth/auth-slice";
import classNames from "utils/classNames";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div
      id="header"
      className={classNames(
        "relative",
        useMatch("/") !== null ? "cl-primary" : "cl-secondary"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between py-5">
        <div className="flex items-center">
          <Link to="/" className="mr-5">
            <img srcSet="/palmo.png 2x" alt="" />
          </Link>
          <Navigation />
        </div>
        <div className="flex items-center gap-8">
          {/* <SearchBar /> */}
          {!user ? (
            <Tippy content="Sign in" offset={[0, 20]}>
              <Link to="/signin">
                <IconUser />
              </Link>
            </Tippy>
          ) : (
            <TPContextMenu />
          )}
          <Tippy content="Shopping">
            <i className="cursor-pointer" onClick={() => navigate("/cart")}>
              <IconCart />
            </i>
          </Tippy>
        </div>
      </div>
    </div>
  );
};

const TPContextMenu = () => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const springProps = useSpring({
    opacity: isShown ? 1 : 0,
    from: { opacity: 0 },
    reverse: !isShown,
    config: { tension: 180, friction: 12, easing: (t: number) => t },
  });
  return (
    <div>
      <Tippy
        interactive
        placement="bottom"
        offset={[-50, 30]}
        render={(attrs) => (
          <animated.div
            {...attrs}
            style={springProps}
            className="font-footer w-[200px] rounded-md bg-white py-2 text-[#23262F] transition-all"
            tabIndex={-1}
          >
            <Link to="/profile/detail">
              <div className="py-[10px] pl-4 pr-2 hover:bg-[rgba(22,_24,_35,_0.04)]">
                <div className="flex cursor-pointer items-center">
                  <i className="mr-5">
                    <IconProfile />
                  </i>
                  <span>My profile</span>
                </div>
              </div>
            </Link>
            <div
              className="py-[10px] pl-4 pr-2 hover:bg-[rgba(22,_24,_35,_0.04)]"
              onClick={() => dispatch(authLogOut())}
            >
              <div className="flex cursor-pointer items-center">
                <i className="mr-5">
                  <IconSignOut />
                </i>
                <span>Sign out</span>
              </div>
            </div>
          </animated.div>
        )}
        onShow={() => setIsShown(true)}
        onHide={() => setIsShown(false)}
      >
        <i className="cursor-pointer">
          <IconUser />
        </i>
      </Tippy>
    </div>
  );
};

export default Header;
