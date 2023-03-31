import CardImg from "components/card/CardImg";
import React from "react";

const Slide2 = () => {
  return (
    <div className="grid grid-cols-4 gap-y-10">
      {Array(8)
        .fill(0)
        .map((item: any, index: number) => (
          <CardImg
            key={index}
            width="w-[230px]"
            height="h-[260px]"
            src="/img-card.png"
            alt=""
            borderRadius="rounded-xl"
          />
        ))}
    </div>
  );
};

export default Slide2;
