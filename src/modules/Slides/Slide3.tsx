import Img from "components/img/Img";
import React from "react";

const Slide3 = () => {
  return (
    <div className="mr-[74px] grid grid-cols-3 gap-x-9">
      <Img
        src="https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        full
      />
      <div className="grid grid-rows-2 gap-y-9">
        <Img
          src="https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          full
        />
        <Img
          src="https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          full
        />
      </div>
      <div className="grid max-h-[550px] grid-rows-3 gap-y-9">
        <div className="row-span-1 h-full">
          <Img
            src="https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            full
          />
        </div>
        <div className="row-span-2 h-full">
          <Img
            src="https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            full
          />
        </div>
      </div>
    </div>
  );
};

export default Slide3;
