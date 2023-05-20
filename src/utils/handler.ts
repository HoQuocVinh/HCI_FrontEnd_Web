import React, { SetStateAction } from "react";

export default function handleProductSelection(
  index: number,
  setSelect: React.Dispatch<SetStateAction<number>>,
  initializeValue: string,
  typeCode: string
) {
  setSelect(index);
  const searchParams = new URLSearchParams(window.location.search);
  const paramDefault =
    typeCode === "colorCode"
      ? searchParams.get("sizeCode")
      : searchParams.get("colorCode");
  searchParams.set(typeCode, initializeValue);
  if (paramDefault) {
    searchParams.set(
      typeCode === "colorCode" ? "sizeCode" : "colorCode",
      paramDefault
    );
  }
  const newUrl =
    window.location.origin +
    window.location.pathname +
    "?" +
    searchParams.toString();
  window.history.replaceState(null, "", newUrl);
}

function toggleBodyOverflow(isShow: boolean) {
  const headerID = document?.getElementById("header");
  if (!isShow) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.paddingRight = "8px";
    headerID && (headerID.style.paddingRight = "8px");
  } else {
    document.body.style.removeProperty("overflow");
    document.documentElement.style.removeProperty("padding-right");
    headerID && headerID.style.removeProperty("padding-right");
  }
}

function removeDashesAndCapitalize(str: string): string {
  let result = str.replace(/-/g, " ").trim();
  if (result.toLowerCase() === "t shirt") {
    return "t-shirt";
  }
  return result;
}

function navigateWithoutReload(path: string) {
  window.history.pushState(null, "", path);
}

export { toggleBodyOverflow, removeDashesAndCapitalize, navigateWithoutReload };
