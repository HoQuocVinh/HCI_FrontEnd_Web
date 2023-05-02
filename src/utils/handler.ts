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
