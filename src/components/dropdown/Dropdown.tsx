import { IconArrowDown } from "components/icon/Icon";
import { useState } from "react";
import { useWatch } from "react-hook-form";
import classNames from "utils/classNames";
import { LPDropdown } from "utils/listProps";

const Dropdown = (props: LPDropdown) => {
  const [label, setLabel] = useState<number>(1);

  const dropdownValue = useWatch({
    control: props.control,
    name: props.name,
    defaultValue: 1,
  });

  const handleClickDropdownItem = (e: any) => {
    props.setValue(props.name, e.target.dataset.value);
    props.setShow(false);
    setLabel(e.target.textContent);
  };

  return (
    <div className="relative inline-block w-[150px]">
      <button
        type="button"
        className="flex h-10 w-full cursor-pointer items-center justify-between gap-4 border px-3 py-2"
        onClick={() => props.setShow(!props.show)}
      >
        {label}
        <span
          className={classNames(
            "transition-all duration-500",
            props.show ? "rotate-180" : "rotate-0"
          )}
        >
          <IconArrowDown />
        </span>
      </button>
      <div
        className={classNames(
          "duration-400 absolute top-full left-0 right-0 z-10 bg-white shadow-md transition-all",
          props.show ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        {props.list.map((item: any, index: number) => (
          <div
            className="cursor-pointer px-3 py-2 text-black hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value={item}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
