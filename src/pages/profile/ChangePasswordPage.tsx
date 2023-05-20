import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import axios from "api/axios";
import { IIUser } from "components/input/Input";
import { useToastError } from "hooks/useToastError";
import { useSelector } from "react-redux";
import { schamePassword } from "utils/validationSchame";
import { useEffect, useState } from "react";
import classNames from "utils/classNames";
function ChangePassword() {
  const { accessToken } = useSelector((state: any) => state.auth);
  const [disable, setDisable] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schamePassword),
    mode: "onSubmit",
  });

  useToastError(errors);

  const onSubmit = ({ confirmPassword, ...values }: any) => {
    if (confirmPassword !== values.newPassword) {
      toast.error("Password confirmation does not match. Please try again", {
        autoClose: 1000,
      });
    } else {
      axios
        .post("/auth/update-password", values, {
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response);
          const { data } = response;
          if (!data.result) {
            toast.error(data.message, { autoClose: 500 });
          } else {
            toast.success("Update password successfully", {
              autoClose: 500,
            });
            setFocus("oldPassword");
            reset();
            setDisable(false);
          }
        })
        .catch((error) => console.log(error));
      console.log(values);
    }
  };

  useEffect(() => {
    setDisable(!disable);
  }, [isDirty]);

  return (
    <>
      <h1 className="text-xl font-bold">THAY ĐỔI MẬT KHẨU CỦA TÔI</h1>
      <div>
        <form
          id="update__password"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 flex max-w-[300px] flex-col gap-y-5"
        >
          <IIUser
            name="oldPassword"
            control={control}
            type="password"
            label="Old Password"
            id="oldPassword"
          />
          <IIUser
            name="newPassword"
            control={control}
            type="password"
            label="New Password"
            id="newPassword"
          />
          <IIUser
            name="confirmPassword"
            control={control}
            type="password"
            label="Comfirm Password"
            id="confirmPassword"
          />
        </form>
        <div className="mt-5 rounded-[4px] text-right">
          <button
            className={classNames(
              "rounded-[4px] bg-orange-500 px-5 py-3 text-white hover:bg-orange-600",
              disable && "pointer-events-none select-none bg-opacity-50"
            )}
            form="update__password"
            type={disable ? "button" : "submit"}
          >
            Update password
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
