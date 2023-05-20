import axios from "api/axios";
import LayoutActive from "layouts/LayoutActive";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ActivePage = () => {
  const navitate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const fetchData = () => {
    axios
      .post("auth/confirm-email", { token: token })
      .then((response) => {
        console.log(response);
        const { data } = response;
        if (data.result) {
          toast.success("Active successfully", { autoClose: 500 });
        } else {
          toast.warning(data.message, { autoClose: 500 });
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutActive>
      <div className="text-center">
        <span className="inline-block">
          <svg
            className="inline-block"
            width={69}
            height={70}
            viewBox="0 0 69 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2881_2407)">
              <path
                d="M19.5806 45.9159L32.1489 39.3084V52.328H36.8506V39.3084L49.4188 45.9159L46.5694 29.3034L58.6393 17.5384L41.9593 15.1146L34.4998 0L27.0402 15.1146L10.3601 17.5384L22.43 29.3034L19.5806 45.9159Z"
                fill="#FFDA44"
              />
              <path
                d="M25.5165 22.4628L31.7245 21.5606L34.5008 15.9354L37.277 21.5606L43.4849 22.4628L38.9928 26.8416L40.0532 33.0243L34.5008 30.1051L28.9484 33.0243L30.0087 26.8416L25.5165 22.4628Z"
                fill="#FF9811"
              />
              <path
                d="M47.8213 63.2985V49.9772H21.1789V63.2985H16.4772V68H52.5229V63.2985H47.8213Z"
                fill="#FF9811"
              />
              <path
                d="M52.5222 63.2978H16.4764V67.9994H52.5222V63.2978Z"
                fill="#A2001D"
              />
              <path
                d="M39.201 58.5962H29.7977V63.2977H39.201V58.5962Z"
                fill="#FFDA44"
              />
            </g>
            <defs>
              <clipPath id="clip0_2881_2407">
                <rect
                  width={68}
                  height={68}
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <h1 className="p-4 text-2xl font-bold">Active success!</h1>
        <p className="text-c5 text-sm font-medium">
          Congratulation! You have actived this booking. Payment by cash when we
          meet.
        </p>
        <Link to="/">
          <div className="mx-auto mt-7 w-[80%] rounded-md bg-[#1DC071] py-3 font-semibold text-white">
            <span>Go to homepage</span>
          </div>
        </Link>
      </div>
    </LayoutActive>
  );
};

export default ActivePage;
