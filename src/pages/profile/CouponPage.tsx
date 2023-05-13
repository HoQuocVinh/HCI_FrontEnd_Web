function CouponPage() {
  return (
    <>
      <h1 className="text-xl font-bold">PHIẾU GIẢM GIÁ</h1>
      <div className="flex flex-row items-start p-4">
        <span className="text-base">
          Mã giảm giá dành cho Cửa hàng online | 1 Mã giảm giá khả dụng
        </span>
      </div>
      <hr className="border-1.5 mx-4 border-gray-300" />
      <div className="ml-4 items-start">
        <span className="font-semibold">Bạn chưa có phiếu giảm giá nào</span>
      </div>
    </>
  );
}

export default CouponPage;
