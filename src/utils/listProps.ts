import { ReactNode } from "react";

export interface INavigationItem {
  title: string;
}
export interface ListPropImg {
  width?: string;
  height?: string;
  src?: string;
  srcSet?: string;
  full?: boolean;
  alt?: string;
  borderRadius?: string;
  border?: boolean;
  onClick?: () => void;
}
export interface ListPropImgSlide {
  width?: string;
  height?: string;
  src?: string;
  srcSet?: string;
  full?: boolean;
  alt?: string;
  borderRadius?: string;
  border?: boolean;
  onClick?: () => void;
  onClickButton?: () => void;
  size?: string;
  name?: string;
  price: number;
  bgColor?: string;
}

export interface LPButton {
  children: React.ReactNode;
  bg?: "purple" | "blueBlack";
  variant?: "normal";
  shadow?: "s1";
  classNames?: string;
}

export interface LPAuthFormField {
  signup?: boolean;
  signin?: boolean;
  forgot?: boolean;
  btName: "Sign in" | "Sign up";
  formPropmt?: string;
}

export interface LPAuthInput {
  name: string;
  control: any;
  type: string;
  placeholder: string;
  id: string;
  error?: any;
}

export interface LPCPDefault {
  src: string;
  alt?: string;
  gender?: string;
  size: string;
  productName: string;
  colorTip: string;
  colorName: string;
  price: number;
  idProduct: string;
  idSubProduct: string;
}

export interface LPBDirection {
  children: ReactNode;
  className: string;
  onClick: any;
}

export interface LPDropdown {
  labelDefault?: string;
  control: any;
  name: string;
  setValue?: any;
  list: any;
  setShow: any;
  show: boolean;
  className?: string;
}

export interface LPMAddToCard {
  open: boolean;
  onClick: () => void;
  quantity: number;
  price: number;
}

export interface LPWModal {
  open: boolean;
  heading: string;
  onClick: () => void;
  children?: ReactNode;
  btnName1: string;
  btnName2: string;
  handleRemoveProduct?: () => void;
}
