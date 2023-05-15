import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";

const LayoutAuth = () => {
  const { user } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (user && user.email) return null;
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
            src="/bg-auth.jpg"
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
