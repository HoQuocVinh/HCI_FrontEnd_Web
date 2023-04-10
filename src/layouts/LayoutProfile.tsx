import { useTheme } from "components/context/ThemeProvider";
import Header from "modules/partials/Header";
import SidebarProfile from "modules/partials/SidebarProfile";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

function LayoutProfile() {
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.style.setProperty("background", `var(--${theme})`);
  }, [theme]);
  const [pathName, setPathName] = useState("");
  const location = useLocation();
  useEffect(() => {
    const pathNameWindow = location.pathname.replace("/profile/", "");
    setPathName(pathNameWindow);
  }, [location]);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white px-4">
          {/* Breadcrumb */}
          <div className="font-Roboto m-2 w-[60%] text-sm font-thin">
            PALMO / PROFILE / {pathName.replace("/", " ").toUpperCase()}
          </div>
          {/* Title */}
          <div className="w-[60%] text-3xl font-semibold">
            Thông tin khách hàng
          </div>
          <div className="m-2 flex flex-row">
            <SidebarProfile pathName={pathName} />
            <div className="m-2 w-[850px] border border-solid bg-white p-4">
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
