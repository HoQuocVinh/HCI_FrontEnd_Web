import * as Yup from "yup";

const schame = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email address")
    .matches(
      // eslint-disable-next-line no-control-regex
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      { message: "Please enter valid email address" }
    ),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be 8 characters"),
});

export const schamePassword = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be 8 characters"),
  newPassword: Yup.string()
    .required("Please enter your new password")
    .min(8, "Password must be 8 characters"),
  confirmPassword: Yup.string()
    .required("Please enter your comfirm password")
    .min(8, "Password must be 8 characters"),
});

export default schame;
