import React from "react";
import { useController } from "react-hook-form";
import classNames from "utils/classNames";
import { LPAuthInput } from "utils/listProps";
const AuthInput = (props: LPAuthInput) => {
  const { field } = useController({
    name: props.name,
    control: props.control,
    defaultValue: "",
  });
  return (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      className={classNames(
        "borderpx-5 w-[500px] rounded-[10px] border px-5 py-3 outline-none transition-all placeholder:text-sm",
        props.error?.length > 0
          ? "border-red-500 text-red-500 placeholder:text-red-400"
          : "border-gray-300 focus:border-gray-500"
      )}
      {...field}
    />
  );
};
export default AuthInput;
