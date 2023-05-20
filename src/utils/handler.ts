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
  // Tách các từ trong chuỗi
  const words = str.split("-");

  // Viết hoa chữ cái đầu tiên mỗi từ
  const capitalizedWords = words.map((word) => {
    // Nếu từ là "T-Shirt", giữ nguyên
    if (word.toUpperCase() === "T-SHIRT") {
      return "T-Shirt";
    }

    // Ngược lại, viết hoa chữ cái đầu tiên
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Kết hợp các từ lại với dấu "-"
  const result = capitalizedWords.join("-");

  return result;
}

function createNumberArray(endNumber: number): number[] {
  const numberArray: number[] = [];
  for (let i = 1; i <= endNumber; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function navigateWithoutReload(path: string) {
  window.history.pushState(null, "", path);
}

export { toggleBodyOverflow, removeDashesAndCapitalize, navigateWithoutReload };
