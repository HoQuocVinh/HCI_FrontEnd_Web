import { MessageProps } from 'utils/chatProps';

const renderMessage = (message: any, type: string, isSender: Boolean) => {
  if (type === 'text')
    return (
      <div
        className={`w-fit max-w-[300px] whitespace-normal break-words rounded-xl  px-3 py-2 ${
          isSender ? `self-end bg-[#491ca8] text-white` : `bg-gray-100`
        } `}>
        {message}
      </div>
    );
  if (type === 'image')
    return (
      <img
        src={URL.createObjectURL(message)}
        alt=''
        className={`h-[150px] w-[130px] rounded-lg object-cover ${isSender ? `self-end` : ``}`}
      />
    );
  return <></>;
};

const Message = ({ isSender, message, type }: MessageProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <span className={`mx-2 text-xs text-gray-400 ${isSender ? `self-end` : ``}`}>{isSender ? 'You' : 'Palmo'}</span>
      {renderMessage(message, type, isSender)}
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
