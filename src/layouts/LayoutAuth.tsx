import { Link, Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <div>
      <div className="fixed inset-0 flex">
        <div className="absolute left-5 top-5">
          <Link to="/">
            <img srcSet="/palmo.png 2x" alt="" />
          </Link>
        </div>
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
