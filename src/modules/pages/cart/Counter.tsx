import { IconMinus, IconPlus } from "components/icon/Icon";
import { useState } from "react";
import classNames from "utils/classNames";

const Counter = ({ defaultCount }: { defaultCount: number }) => {
  const [count, setCount] = useState<string>(defaultCount.toString());

  const handleDecrement = () => {
    const newCount = parseInt(count) - 1;
    if (newCount >= 1) {
      setCount(newCount.toString());
    }
  };

  const handleIncrement = () => {
    const newCount = parseInt(count) + 1;
    setCount(newCount.toString());
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
        className="w-10 border-x border-x-[#e5e5e5] text-center outline-none"
      />
      <button type="button" className="p-1" onClick={handleIncrement}>
        <IconPlus />
      </button>
    </div>
  );
};

export default Counter;
