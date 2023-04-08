import { MessageProps } from 'utils/chatProps';

const Message = ({ isSender, message }: MessageProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <span className={`mx-2 text-xs text-gray-400 ${isSender ? `self-end` : ``}`}>{isSender ? 'You' : 'Palmo'}</span>
      <div
        className={`w-fit max-w-[300px] whitespace-normal break-words rounded-xl  px-3 py-2 ${
          isSender ? `self-end bg-[#491ca8] text-white` : `bg-gray-100`
        } `}>
        {message}
      </div>
    </div>
  );
};

export default Message;
