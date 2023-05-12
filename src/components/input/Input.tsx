import { useController } from "react-hook-form";

interface IInfo {
  type: string;
  name: string;
  control: any;
  label?: string;
}

const useInputCheckOut = (props: IInfo) => {
  const { field } = useController({
    name: props.name,
    control: props.control,
    defaultValue: "",
  });

  return {
    inputProps: {
      type: props.type,
      lable: props.label,
      ...field,
    },
  };
};

export const IInfo = (props: IInfo) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { inputProps } = useInputCheckOut(props);
  return (
    <div className="form__field">
      <input className="form__input" placeholder=" " {...inputProps} />
      <label htmlFor="" className="form__label">
        {inputProps.lable}
      </label>
    </div>
  );
};

// Input.IAddress = (props: IAddress) => {
//   const { name, control, label, setValue, option } = props;
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const addressValue = useWatch({
//     name,
//     control,
//     defaultValue: "",
//   });

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [searchTerm, setSearchTerm] = useState("");
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [selectedOption, setSelectedOption] = useState<any>(null);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [isOpen, setIsOpen] = useState(false);

//   const removeAccents = (str: string) => {
//     return str
//       .normalize("NFD")
//       .replace(/[\u0300-\u036f]/g, "")
//       .toLowerCase();
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleOptionClick = (option: any) => {
//     setSelectedOption(option);
//     setSearchTerm(option.label);
//     setValue(props.name, option.label);
//     setIsOpen(false);
//   };

//   const handleInputBlur = () => {
//     setTimeout(() => {
//       setIsOpen(false);
//     }, 100);
//   };

//   const filteredOptions = option.filter((option) =>
//     removeAccents(option?.label).includes(removeAccents(searchTerm))
//   );

//   return (
//     <div className="relative">
//       <div className="form__field">
//         <input
//           className="form__input"
//           placeholder=" "
//           value={searchTerm}
//           onChange={handleInputChange}
//           onFocus={() => setIsOpen(true)}
//           onBlur={handleInputBlur}
//         />
//         <label htmlFor="" className="form__label">
//           {label}
//         </label>
//         <i
//           className={classNames(
//             "pointer-events-none absolute right-5 top-2/4 -translate-y-2/4 select-none text-gray-400 transition-all duration-500",
//             isOpen && "rotate-180"
//           )}
//         >
//           <IconArrowDownSolid />
//         </i>
//       </div>
//       {isOpen && (
//         // <div className="options absolute left-0 right-0 top-full z-20 max-h-[200px] translate-y-2 overflow-auto bg-white shadow-xl">
//         //   {filteredOptions.map((option, index: number) => (
//         //     <div
//         //       key={index}
//         //       className="option cursor-pointer px-3 py-2 transition hover:bg-blue-200"
//         //       onClick={() => handleOptionClick(option)}
//         //     >
//         //       {option.label}
//         //     </div>
//         //   ))}
//         // </div>
//         <DropdownFocusInput />
//       )}
//     </div>
//   );
// };

// interface IterfaceDropdown {
//   data: [];
//   handleOptionClick: any;
// }

// const DropdownFocusInput = (props: IterfaceDropdown) => {
//   const { data, handleOptionClick } = props;
//   return (
//     <div className="options absolute left-0 right-0 top-full z-20 max-h-[200px] translate-y-2 overflow-auto bg-white shadow-xl">
//       {data.map((option, index: number) => (
//         <div
//           key={index}
//           className="option cursor-pointer px-3 py-2 transition hover:bg-blue-200"
//           onClick={() => handleOptionClick(option)}
//         >
//           {option}
//         </div>
//       ))}
//     </div>
//   );
// };
