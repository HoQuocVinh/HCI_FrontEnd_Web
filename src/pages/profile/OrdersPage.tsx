function OrdersPage() {
  return (
    <>
      <h1 className="text-xl font-bold">LỊCH SỬ ĐƠN HÀNG</h1>
      <div className="flex flex-row items-start p-4">
        <span className="w-[80%]">
          Bạn có thể hủy đơn hàng trong vòng 30 phút bằng cách nhấn “Hủy đơn
          hàng” sau khi đơn hàng của bạn đã được đặt. Đơn hàng của bạn sẽ tự
          động bị hủy nếu trạng thái giao hàng được ghi là chưa hoàn thành.
        </span>
      </div>
      <hr className="border-1.5 mx-4 border-gray-300" />
      <div className="ml-4 items-start">
        <span className="font-semibold">Bạn chưa có đơn hàng nào.</span>
      </div>
    </>
  );
}

export default OrdersPage;
