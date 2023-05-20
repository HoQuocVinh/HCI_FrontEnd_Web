import axios from "api/axios";
import Common from "components/common/Common";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function PurchaseHistoryPage() {
  const { accessToken } = useSelector((state: any) => state.auth);
  const [orderDetails, setOrderDetails] = useState<any>([]);
  useEffect(() => {
    const request = {
      orders: [],
      filter: [],
      size: 20,
      totalElement: 0,
      pageNumber: 1,
    };
    function fetchData() {
      axios
        .post("order", request, {
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          const { result } = response.data;
          setOrderDetails(result);
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }, []);
  console.log(orderDetails);
  return (
    <>
      <h1 className="text-xl font-bold">LỊCH SỬ MUA HÀNG</h1>
      <div className="flex flex-row items-start p-4">
        <ul>
          <li className="list-disc">
            Bạn có thể xem lịch sử mua hàng của mình cho cả cửa hàng bán lẻ và
            cửa hàng trực tuyến.
          </li>
          <li>
            Lịch sử mua hàng của bạn trong các cửa hàng bán lẻ sẽ được cập nhật
            vào ngày hôm sau nếu bạn quét mã vạch thành viên sau khi mua hàng.
          </li>
          <li className="list-disc">
            Lịch sử mua hàng không hiển thị bất kỳ sản phẩm nào được đổi trả.
          </li>
          <li className="list-disc">
            Lịch sử mua hàng không phải là bằng chứng mua hàng hợp lệ.
          </li>
          <li className="list-disc">
            Vui lòng mang theo biên lai nếu bạn muốn đổi trả sản phẩm tại cửa
            hàng.
          </li>
        </ul>
      </div>
      <hr className="border-1.5 mx-4 border-gray-300" />
      <div className="items-start">
        <span className="mt-2 block font-semibold">
          ITEM: {orderDetails.data && orderDetails.data.length}
        </span>
        {orderDetails.data && orderDetails.data.length ? (
          <div className="ml-4 mt-4">
            {orderDetails.data &&
              orderDetails.data.map((item: any, index: number) => (
                <TagProduct
                  key={index}
                  img={
                    item.orderDetail &&
                    item.orderDetail[0].subProduct.media[0].filePath
                  }
                  title={
                    item.orderDetail && item.orderDetail[0].subProduct.name
                  }
                  quantity={item.orderDetail && item.orderDetail[0].quantity}
                  price={item.orderDetail && item.orderDetail[0].price}
                />
              ))}
          </div>
        ) : (
          <span className="">Không có sản phẩm nào khác để hiển thị.</span>
        )}
      </div>
    </>
  );
}

export const TagProduct = ({
  img,
  title,
  quantity,
  price,
}: {
  img?: string;
  title?: string;
  quantity: string;
  price: number;
}) => {
  return (
    <div className="flex items-start border-b border-b-[#ccc] py-5">
      <div className="pr-5">
        <img src={img} alt="" style={{ width: "193px", height: "193px" }} />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">{title}</h1>
        <dl>
          <dt className="inline after:px-[2px] after:content-[':']">
            Số lượng
          </dt>
          <dd className="inline">{quantity}</dd>
        </dl>
        <dl>
          <dt className="inline after:px-[2px] after:content-[':']">Giá</dt>
          <dd className="inline">
            <Common.Price
              color="text-red-500"
              price={price * parseInt(quantity, 10)}
            />
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default PurchaseHistoryPage;
