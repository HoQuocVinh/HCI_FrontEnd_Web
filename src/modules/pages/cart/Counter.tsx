import axios from "api/axios";
import { IconMinus, IconPlus } from "components/icon/Icon";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import classNames from "utils/classNames";

const Counter = ({
  defaultCount,
  id,
}: {
  defaultCount: number;
  id: string;
}) => {
  const { accessToken } = useSelector((state: any) => state.auth);
  const [count, setCount] = useState<string>(defaultCount.toString());

  function fetachData(request: object) {
    axios
      .post("cart/add-product", request, {
        headers: {
          "Content-Type": "Application/json",
          Authorization: ` Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast.success("Update successfully", { autoClose: 500 });
        return new Promise<void>((resolve) => {
          // Thực hiện tác vụ và sau khi hoàn thành, gọi resolve()
          setTimeout(() => {
            resolve();
            window.location.reload();
          }, 1000); // Ví dụ đợi 3 giây
        });
      })
      .catch((error) => console.log(error));
  }

  const handleDecrement = () => {
    const newCount = parseInt(count) - 1;
    if (newCount >= 1) {
      setCount(newCount.toString());
      const request = {
        subProductId: id,
        quantity: -1,
      };
      fetachData(request);
    }
  };

  const handleIncrement = () => {
    const newCount = parseInt(count) + 1;
    setCount(newCount.toString());

    const request = {
      subProductId: id,
      quantity: 1,
    };
    fetachData(request);
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value === "" || /^\d+$/.test(value)) {
      setCount(value);
    }
  };

  return (
    <div className="flex w-[90px] items-center border border-[#e5e5e5]">
      <button
        type="button"
        className={classNames("p-1", parseInt(count) === 1 && "text-gray-400")}
        onClick={handleDecrement}
      >
        <IconMinus />
      </button>
      <input
        type="text"
        value={count}
        onChange={handleChangeValue}
        className="pointer-events-none w-10 select-none border-x border-x-[#e5e5e5] bg-transparent text-center outline-none"
        readOnly
      />
      <button type="button" className="p-1" onClick={handleIncrement}>
        <IconPlus />
      </button>
    </div>
  );
};

export default Counter;
