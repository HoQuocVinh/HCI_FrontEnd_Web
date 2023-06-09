import { MessageProps } from 'utils/chatProps';
import SearchSelection from './SearchSelection';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper';
import { useNavigate } from 'react-router-dom';

const items = [
  { title: 'Size', data: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'] },
  { title: 'Price', data: ['100000đ - 200000đ', '200000đ - 500000đ', '500000đ - 1000000đ'] },
  { title: 'Color', data: ['Blue', 'Green', 'Yellow', 'Red', 'Orange', 'Purple', 'Pink', 'Brown', 'Gray'] },
];

const renderMessage = (message: any, type: string, isSender: Boolean, handleChoices: any, handleClickViewDetails: any) => {
  if (type === 'text')
    return (
      <>
        <span className={`mx-2 text-xs text-gray-400 ${isSender ? `self-end` : ``}`}>{isSender ? 'You' : 'Palmo'}</span>
        <div
          className={`w-fit max-w-[300px] whitespace-normal break-words rounded-xl  px-3 py-2 ${
            isSender ? `self-end bg-[#491ca8] text-white` : `bg-gray-100`
          } `}>
          {message}
        </div>
      </>
    );
  if (type === 'image')
    return (
      <>
        <span className={`mx-2 text-xs text-gray-400 ${isSender ? `self-end` : ``}`}>{isSender ? 'You' : 'Palmo'}</span>
        <img
          src={URL.createObjectURL(message)}
          alt=''
          className={`h-[150px] w-[130px] rounded-lg object-cover ${isSender ? `self-end` : ``}`}
        />
      </>
    );
  if (type === 'button') {
    return (
      <div className='flex flex-row flex-wrap items-center gap-2'>
        {message.map((e: any, i: number) => {
          return (
            <button
              key={i}
              onClick={() => handleChoices(e.message)}
              className='rounded-xl border p-2 text-sm text-gray-500 hover:bg-gray-100 active:scale-95'>
              {e.message}
            </button>
          );
        })}
      </div>
    );
  }
  if (type === 'product') {
    return (
      <div className='h-[350px] max-w-[300px]'>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='h-full w-full'>
          {message.map((e: any) => {
            return (
              <SwiperSlide key={e.subProductId} className='flex items-center justify-center rounded-lg border'>
                <div className='flex flex-col items-center justify-center gap-1'>
                  <img src={e.mediaLink} alt='' className='h-[200px] w-[150px] object-contain' />
                  <span className='w-[200px] truncate text-left'>{e.title}</span>
                  <span className='font-bold'>{e.price}đ</span>
                  <span
                    onClick={() => handleClickViewDetails(e.productId, e.subProductId)}
                    className='cursor-pointer select-none text-sm'>
                    View details
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
  return <></>;
};

const Message = ({ isSender, message, type, handleChoices }: MessageProps) => {
  const [submitMessage, setSubmitMessage] = useState<any>({});
  const [disable, setDisable] = useState<any>(false);
  const navigate = useNavigate();

  const handleSubmitMessage = () => {
    let temp = '';
    if (submitMessage.Color) temp += `Color: ${submitMessage.Color}`;
    if (submitMessage.Size) temp += `${temp === '' ? '' : `\n`}Size: ${submitMessage.Size}`;
    if (submitMessage.Price) temp += `${temp === '' ? '' : `\n`}Price: ${submitMessage.Price}`;
    if (temp !== '') {
      handleChoices(temp);
      setDisable(true);
    }
  };

  const handleClickViewDetails = (productId: any, subProductId: any) => {
    navigate(`/product/${productId}/subproduct/${subProductId}`);
  };

  return (
    <div className='flex flex-col gap-2'>
      {renderMessage(message, type, isSender, handleChoices, handleClickViewDetails)}
      {message === `Tell us more of what you're looking for!` && (
        <div className='flex max-w-[300px] flex-col gap-2 rounded-lg border p-2'>
          {items.map((val: any, i: number) => {
            return (
              <>
                <SearchSelection title={val.title} key={i} data={val.data} setSubmitMessage={setSubmitMessage} />
                {i !== items.length - 1 && <hr />}
              </>
            );
          })}
          <button
            onClick={handleSubmitMessage}
            className='rounded-sm bg-[#491ca8] p-1 text-white transition-all active:scale-95 disabled:bg-gray-500 disabled:active:scale-100'
            disabled={disable}>
            Search
          </button>
        </div>
      )}
      {/* {renderMessage('test', 'product', false, handleChoices)} */}
      {/* <div
        className={`w-fit max-w-[300px] whitespace-normal break-words rounded-xl  px-3 py-2 ${
          isSender ? `self-end bg-[#491ca8] text-white` : `bg-gray-100`
        } `}>
        {message}
      </div> */}
    </div>
  );
};

export default Message;
