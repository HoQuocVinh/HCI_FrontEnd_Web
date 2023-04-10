function ChangePassword() {
  return (
    <>
      <h1 className="text-xl font-bold">THAY ĐỔI MẬT KHẨU CỦA TÔI</h1>
      <div className="flex flex-row items-start p-4">
        <span className="text-base font-semibold">
          ĐỊA CHỈ EMAIL <p className="font-normal">thanhtrong@gmail.com</p>
        </span>
        <div className="ml-10">
          <span className="flex flex-col items-start font-semibold">
            SINH NHẬT <p className="font-normal">06/07/2001</p>
          </span>
          <span className="flex flex-col items-start font-semibold">
            GIỚI TÍNH <p className="font-normal">Nam</p>
          </span>
        </div>
      </div>
      <hr className="border-1.5 mx-4 border-gray-300" />
    </>
  );
}

export default ChangePassword;