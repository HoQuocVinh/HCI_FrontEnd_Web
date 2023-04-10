function PurchaseHistoryPage() {
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
        <span className="font-semibold">ITEM</span>
        <div className="ml-4 mt-4">
          <span className="">Không có sản phẩm nào khác để hiển thị.</span>
        </div>
      </div>
    </>
  );
}

export default PurchaseHistoryPage;
