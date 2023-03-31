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
}

export interface LPButton {
  children: React.ReactNode;
  bg?: "purple" | "blueBlack";
  variant?: "normal";
  shadow?: "s1";
  classNames?: string;
}
