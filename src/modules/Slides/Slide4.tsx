// import { useState, useEffect } from "react";
// import classNames from "utils/classNames";
// interface Product {
//   title: string;
//   dateTime: string;
//   number: number;
// }
// const LIST_TEST: Product[] = [
//   {
//     title: "sản phẩm 1",
//     dateTime: "2/3/2023",
//     number: 1000,
//   },
//   {
//     title: "sản phẩm 2",
//     dateTime: "2/3/2023",
//     number: 999,
//   },
//   {
//     title: "sản phẩm 3",
//     dateTime: "2/3/2023",
//     number: 880,
//   },
//   {
//     title: "sản phẩm 4",
//     dateTime: "3/3/2023",
//     number: 880,
//   },
//   {
//     title: "sản phẩm 5",
//     dateTime: "3/3/2023",
//     number: 1000,
//   },
//   {
//     title: "sản phẩm 6",
//     dateTime: "30/3/2023",
//     number: 880,
//   },
//   {
//     title: "sản phẩm 7",
//     dateTime: "30/3/2023",
//     number: 1000,
//   },
//   {
//     title: "sản phẩm 8",
//     dateTime: "29/3/2023",
//     number: 880,
//   },
//   {
//     title: "sản phẩm 9",
//     dateTime: "28/3/2023",
//     number: 1000,
//   },
// ];

// const Slide4 = () => {
//   const startDay = new Date();
//   const [currentDay, setCurrentDay] = useState<number>(startDay.getDate());
//   const [maxDay, setMaxDay] = useState<number>(
//     new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
//   );
//   const [maxProduct, setMaxProduct] = useState<Product>();

//   const findMaxProductByDate = (list: any, date: any) => {
//     const productsByDate = list.filter(
//       (product: any) => product.dateTime === date
//     );
//     const maxProduct = productsByDate.reduce((max: any, product: any) => {
//       return product.number > max.number ? product : max;
//     }, productsByDate[0]);
//     return maxProduct;
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCurrentDay(parseInt(event.target.value));
//   };

//   const thumbPosition = ((currentDay - 1) / (maxDay - 1)) * 100;

//   const spanStyle: React.CSSProperties = {
//     position: "absolute",
//     bottom: "-35px",
//     left: `${thumbPosition}%`,
//     transform: "translateX(-50%)",
//     whiteSpace: "nowrap",
//     fontSize: "16px",
//     color: "white",
//   };

//   useEffect(() => {
//     setMaxProduct(
//       findMaxProductByDate(
//         LIST_TEST,
//         `${currentDay}/${startDay.getMonth() + 1}/2023`
//       )
//     );
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentDay]);
//   if (maxProduct) console.log("TCL: maxProduct", maxProduct);

//   return (
//     <div className="h-full w-full px-5">
//       <div className="text-white">{maxProduct?.title}</div>
//       <div className="relative">
//         <div className="relative mx-auto">
//           <input
//             id="progress-bar"
//             type="range"
//             min="1"
//             max={maxDay}
//             step="1"
//             value={currentDay}
//             onChange={handleChange}
//           />
//           <span style={spanStyle}>
//             {currentDay}/{startDay.getMonth() + 1}
//           </span>
//           <div
//             className={classNames(
//               "thumb-end_line absolute right-0 top-0 h-5 w-[2px] translate-y-1/4 bg-white",
//               currentDay === maxDay && "invisible opacity-0"
//             )}
//           ></div>
//           <span
//             className={classNames(
//               "thumb-end_time absolute right-0 bottom-[-35px] translate-x-1/2 text-white",
//               currentDay === maxDay && "invisible opacity-0"
//             )}
//           >
//             {maxDay}/{startDay.getMonth() + 1}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slide4;


import React from 'react';

const Slide4 = () => {
  return (
    <div>
      
    </div>
  );
};

export default Slide4;
