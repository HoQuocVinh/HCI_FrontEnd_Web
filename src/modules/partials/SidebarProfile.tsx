import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function SidebarProfile() {
  const sidebars = [
    { title: "Thông tin cá nhân", parent: true },
    { title: "Hồ sơ", parent: false, link: "view" },
    { title: "Phiếu giảm giá", parent: false, link: "view-profile" },
    { title: "Lịch sử mua hàng", parent: false, link: "view-profile" },
    { title: "Lịch sử đơn hàng", parent: false, link: "view-profile" },
    { title: "Cài đặt hồ sơ", parent: true },
    { title: "Chỉnh sửa hồ sơ", parent: false, link: "view-profile" },
    {
      title: "Thay đổi mật khẩu của tôi",
      parent: false,
      link: "/view-profile",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="w-[300px] bg-white">
      <ul>
        {sidebars.map((item: any, index: number) => {
          return item.parent ? (
            <li className="text-base font-semibold" key={index}>
              {item.title}
            </li>
          ) : (
            <li
              className="cursor-pointer pl-4 text-base hover:text-blue-600"
              key={index}
              onClick={() => navigate(`${item.link}`)}
            >
              {/* <NavLink to={item.link}>{item.title}</NavLink> */}
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarProfile;
