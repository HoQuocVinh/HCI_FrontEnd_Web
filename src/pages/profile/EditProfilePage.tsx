import axios from "api/axios";
import Dropdown from "components/dropdown/Dropdown";
import DropdownGender from "components/dropdown/DropdownGender";
import { IIUser } from "components/input/Input";
import useClickOutSide from "hooks/useClickOutSide";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { authRefreshToken } from "sagas/auth/auth-slice";
import classNames from "utils/classNames";

function EditProfile() {
  const { user, accessToken } = useSelector((state: any) => state.auth);
  const { show, setShow, nodeRef } = useClickOutSide();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      email: user.email,
      gender: "Other",
      fullName: user.fullName ? user.fullName : "",
      address: user.address,
      phoneNumber: user.phoneNumber ? user.phoneNumber : "",
    },
  });

  const onSubmit = (values: any) => {
    axios
      .post("auth/update-account", values, {
        headers: {
          "Content-Type": "Application/json",
          Authorization: ` Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response && response.status === 201) {
          toast.success("Update account successfully", { autoClose: 500 });
          dispatch(authRefreshToken());
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="" ref={nodeRef}>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">CHỈNH SỬA HỒ SƠ</h1>
        </div>
        <form
          id="form__info"
          className="mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <IIUser
            type="email"
            name="email"
            control={control}
            label="Email"
            disable
          />
          <div className="mt-10 grid grid-cols-2 gap-10">
            <IIUser
              type="text"
              name="fullName"
              control={control}
              label="Full Name"
            />
            <IIUser
              type="text"
              name="address"
              control={control}
              label="Address"
            />
            <IIUser
              type="tel"
              name="phoneNumber"
              control={control}
              label="Phone Number"
            />
            <div className="flex flex-col">
              <label htmlFor="" className="font-bold">
                Gender
              </label>
              <DropdownGender
                labelDefault="Other"
                show={show}
                setShow={setShow}
                list={["Male", "Female", "Other"]}
                name="gender"
                control={control}
                setValue={setValue}
                className="mt-1 rounded-[4px] border border-[#737373]"
              />
            </div>
          </div>
        </form>
        <div className="w-full text-right">
          <button
            className={classNames(
              "mt-10 rounded-[4px] bg-orange-500 px-6 py-2 text-white"
              // !isDirty && "pointer-events-none select-none bg-orange-200"
            )}
            form="form__info"
            type="submit"
          >
            Update
          </button>
        </div>
      </div>
      <div className="flex flex-row items-start p-4"></div>
    </>
  );
}

export default EditProfile;
