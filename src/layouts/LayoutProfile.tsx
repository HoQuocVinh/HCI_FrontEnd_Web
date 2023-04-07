import { useTheme } from "components/context/ThemeProvider";
import Header from "modules/partials/Header";
import SidebarProfile from "modules/partials/SidebarProfile";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function LayoutProfile() {
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.style.setProperty("background", `var(--${theme})`);
  }, [theme]);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white px-4">
          {/* Breadcrumb */}
          <div className="font-Roboto m-2 w-[60%] text-sm font-thin">
            PALMO / CHI TIẾT NGƯỜI DÙNG / bla bla ...
          </div>
          {/* Title */}
          <div className="w-[60%] text-3xl font-semibold">
            Thông tin khách hàng
          </div>
          <div className="m-2 flex flex-row">
            <SidebarProfile />
            <div className="w-[850px] border border-solid bg-white">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default LayoutProfile;
