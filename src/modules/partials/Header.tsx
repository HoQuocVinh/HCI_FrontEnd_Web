import { animated, useSpring } from "@react-spring/web";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";

import Navigation from "common/Navigation";
import {
  IconCart,
  IconHeart,
  IconProfile,
  IconSignOut,
  IconUser,
} from "components/icon/Icon";
import SearchBar from "components/search/SearchBar";
import { useState } from "react";

const Header = () => {
  const [user, setUser] = useState<boolean>(true);

  return (
    <header className="relative">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-5">
        <div className="flex items-center">
          <Link to="/" className="mr-5">
            <img srcSet="/palmo.png 2x" alt="" />
          </Link>
          <Navigation />
        </div>
        <div className="flex items-center gap-8">
          <SearchBar />
          {!user ? (
            <Tippy content="Sign in" offset={[0, 20]}>
              <Link to="signin">
                <IconUser />
              </Link>
            </Tippy>
          ) : (
            <TPContextMenu />
          )}
          <i>
            <IconHeart />
          </i>
          <Tippy content="Shopping">
            <i>
              <IconCart />
            </i>
          </Tippy>
        </div>
      </div>
    </header>
  );
};

const TPContextMenu = () => {
  const [isShown, setIsShown] = useState(false);
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
            className="w-[200px] rounded-md bg-white py-2 font-footer text-[#23262F] transition-all"
            tabIndex={-1}
          >
            <Link to="">
              <div className="py-[10px] pl-4 pr-2 hover:bg-[rgba(22,_24,_35,_0.04)]">
                <div className="flex cursor-pointer items-center">
                  <i className="mr-5">
                    <IconProfile />
                  </i>
                  <span>My profile</span>
                </div>
              </div>
            </Link>
            <Link to="">
              <div className="py-[10px] pl-4 pr-2 hover:bg-[rgba(22,_24,_35,_0.04)]">
                <div className="flex cursor-pointer items-center">
                  <i className="mr-5">
                    <IconSignOut />
                  </i>
                  <span>Sign out</span>
                </div>
              </div>
            </Link>
          </animated.div>
        )}
        onShow={() => setIsShown(true)}
        onHide={() => setIsShown(false)}
      >
        <Link to="signin">
          <IconUser />
        </Link>
      </Tippy>
    </div>
  );
};

export default Header;
