import { useState } from 'react';
import { useCollapse } from 'react-collapsed';

const SearchSelection = ({ title, data, setSubmitMessage }: any) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [selectedOption, setSelectedOption] = useState(undefined);

  const handleOnchange = (e: any) => {
    const value = e.target.value;
    setSubmitMessage((prev: any) => {
      return { ...prev, [title]: value };
    });
  };

  const handleUncheck = (item: any) => {
    setSelectedOption(item === selectedOption ? undefined : item);
    setSubmitMessage((prev: any) => {
      return { ...prev, [title]: item === selectedOption ? undefined : item };
    });
  };

  return (
    <>
      <div {...getToggleProps()} className='flex items-center justify-between px-2'>
        <span>{title}</span>
        <span>{isExpanded ? '-' : '+'}</span>
      </div>
      <section {...getCollapseProps()} className='grid grid-cols-2 px-7 text-sm'>
        {data.map((val: any, i: number) => {
          return (
            <div key={i} className='flex flex-row items-center gap-2'>
              <input
                type='radio'
                id={val + i}
                name={title}
                value={val}
                checked={selectedOption === val}
                onClick={() => handleUncheck(val)}
                onChange={handleOnchange}
              />
              <label htmlFor={val + i}>{val}</label>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default SearchSelection;
