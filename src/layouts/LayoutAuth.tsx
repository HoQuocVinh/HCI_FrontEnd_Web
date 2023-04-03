import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <div>
      <div className="fixed inset-0 flex">
        <div className="flex w-[60%] items-center justify-center">
          <Outlet />
        </div>
        <div className="relative h-full flex-1">
          <img
            src="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
