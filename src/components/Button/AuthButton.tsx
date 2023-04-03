import React from "react";

const AuthButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-full rounded-[10px] bg-black bg-opacity-80 py-3 text-xl font-semibold text-white transition-all hover:bg-black">
      {children}
    </button>
  );
};

export default AuthButton;
