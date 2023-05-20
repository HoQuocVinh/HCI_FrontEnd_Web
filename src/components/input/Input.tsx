import { file } from "@babel/types";
import { useController } from "react-hook-form";
import classNames from "utils/classNames";

interface IInfo {
  type: string;
  name: string;
  control: any;
  label?: string;
  disable?: boolean;
  auto?: boolean;
}

const useInputCheckOut = (props: IInfo) => {
  const { type, label, disable, auto } = props;
  const { field } = useController({
    name: props.name,
    control: props.control,
    defaultValue: "",
  });

  return {
    inputProps: {
      type: type,
      label: label,
      disable: disable,
      auto: auto,
      ...field,
    },
  };
};

const IInfo = (props: IInfo) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { inputProps } = useInputCheckOut(props);
  return (
    <div className="form__field">
      <input
        className={classNames(
          "form__input",
          inputProps.disable &&
            "pointer-events-none select-none !border-green-200 bg-gray-200"
        )}
        placeholder=" "
        {...inputProps}
      />
      <label htmlFor="" className="form__label">
        {inputProps.label}
      </label>
    </div>
  );
};

interface InterfaceIIUser {
  name: string;
  control: any;
  label: string;
  type: string;
  disable?: boolean;
  id?: string;
}

const IIUser = (props: InterfaceIIUser) => {
  const { name, control, label, type, disable, id } = props;
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  const handleInputChange = (event: any) => {
    if (type === "tel") {
      const inputValue = event.target.value;
      const numericValue = inputValue.replace(/\D/g, ""); // Loại bỏ ký tự không phải số

      event.target.value = numericValue.slice(0, 10); // Giới hạn độ dài thành 10 kí tự

      field.onChange(event); // Gọi hàm onChange của RHF để cập nhật giá trị
    } else {
      field.onChange(event); // Gọi hàm onChange của RHF để cập nhật giá trị
    }
  };

  return (
    <div>
      <label htmlFor={name} className="cursor-pointer font-bold">
        {label}
      </label>
      <input
        className={classNames(
          "mt-1 w-full rounded-[4px] border border-[#737373] px-3 py-2 focus:border-blue-500 focus:caret-blue-500",
          disable &&
            "user-select pointer-events-none border-transparent bg-gray-200 text-gray-500"
        )}
        type={type}
        onInput={handleInputChange}
        id={id}
        {...field}
      />
    </div>
  );
};

export { IInfo, IIUser };
