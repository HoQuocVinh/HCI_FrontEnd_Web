import { Link } from "react-router-dom";
import AuthButton from "components/Button/AuthButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthInput from "components/input/AuthInput";
import schame from "utils/validationSchame";
import { LPAuthFormField } from "utils/listProps";
import { useToastError } from "hooks/useToastError";
import { useEffect } from "react";

const AuthFormField = (props: LPAuthFormField) => {
  const {
    handleSubmit,
    control,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schame),
    mode: "onSubmit",
  });

  useToastError(errors);
  useEffect(() => {
    setFocus("email");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (values: any) => console.log(values);
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="mt-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="cursor-pointer font-semibold">
            Email<span className="text-red-500">*</span>
          </label>
          <AuthInput
            type="text"
            id="email"
            placeholder="Enter your email address"
            control={control}
            name="email"
            error={errors?.email?.message}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="cursor-pointer font-semibold">
            Password<span className="text-red-500">*</span>
          </label>
          <AuthInput
            type="password"
            id="password"
            placeholder="Enter password"
            control={control}
            name="password"
            error={errors?.password?.message}
          />
        </div>
        {props.forgot && (
          <Link to="/forgot" className="text-right font-semibold">
            Forgot password?
          </Link>
        )}
        <AuthButton>{props.btName}</AuthButton>
        <div className="text-center">
          <p className="mr-1 inline-block text-black text-opacity-50">
            {props.formPropmt}
          </p>
          {props.signup && (
            <Link to="/signup" className="font-semibold">
              Sign up for free
            </Link>
          )}
        </div>
      </div>
    </form>
  );
};

export default AuthFormField;
