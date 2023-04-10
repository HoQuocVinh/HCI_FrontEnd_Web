import { Link } from "react-router-dom";
import classNames from "utils/classNames";

type SidebarProps = {
  pathName: string;
};

function SidebarProfile({ pathName }: SidebarProps) {
  const sidebars = [
    { title: "Thông tin cá nhân", parent: true },
    { title: "Hồ sơ", parent: false, link: "detail" },
    { title: "Phiếu giảm giá", parent: false, link: "coupon" },
    { title: "Lịch sử mua hàng", parent: false, link: "purchase/history" },
    { title: "Lịch sử đơn hàng", parent: false, link: "orders" },
    { title: "Cài đặt hồ sơ", parent: true },
    { title: "Chỉnh sửa hồ sơ", parent: false, link: "edit" },
    {
      title: "Thay đổi mật khẩu của tôi",
      parent: false,
      link: "password/edit",
    },
  ];

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
              // className="cursor-pointer pl-4 text-base hover:text-blue-600"
              className={classNames(
                "cursor-pointer pl-4 text-base hover:text-blue-600",
                pathName === item.link ? "font-semibold" : ""
              )}
              key={index}
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarProfile;
