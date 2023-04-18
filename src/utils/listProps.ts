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
  colorTip: Array<string>;
  price: number;
  productID: string;
}
