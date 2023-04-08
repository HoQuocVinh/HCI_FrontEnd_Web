import { ChatUIProps } from 'utils/chatProps';
import Message from './Message';
import { useState } from 'react';

const ChatUI = ({ isOpen, handleClose }: ChatUIProps) => {
  const [files, setFiles] = useState<any>([]);
  const [imageUrls, setImageUrls] = useState<any>([]);

  const imageChange = (e: any) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (!file?.type?.startsWith('image/')) {
      return;
    }

    if (e.target.files && e.target.files.length > 0) {
      setFiles([...files, e.target.files[0]]);
    }

    reader.onloadend = () => {
      setImageUrls([...imageUrls, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const handleImageRemove = (index: any) => {
    const newFiles = [...files];
    const newUrls = [...imageUrls];
    newFiles.splice(index, 1);
    newUrls.splice(index, 1);
    setFiles(newFiles);
    setImageUrls(newUrls);
  };

  console.log(imageUrls);

  return (
    <div className={`flex flex-col`}>
      {/* title */}
      <div
        className={`message-title flex h-[50px] flex-row items-center rounded-t-xl p-2 text-white ${
          isOpen ? `hidden` : ``
        }`}>
        {/* <div className='mx-2 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white'>
          <i className='fa-solid fa-robot text-[#2b0d6a]'></i>
        </div> */}
        <div className='mx-2 flex-grow font-semibold'>
          <img srcSet='/palmo.png 2x' alt='' className='h-[20px]' />
        </div>

        <div
          onClick={handleClose}
          className='flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full transition-all hover:bg-white hover:text-[#2b0d6a]'>
          <i className='fa-solid fa-xmark'></i>
        </div>
      </div>
      {/* messages display area */}
      <div
        className={`z-10000 flex h-[450px] w-[400px] flex-col rounded-b-xl bg-white transition-all ${
          isOpen ? `hidden` : ``
        } `}>
        {/* messages */}
        <div className='flex grow flex-col gap-5 overflow-y-auto p-4'>
          <Message message={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} isSender={true} />
          <Message
            message={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            isSender={false}
          />
        </div>
        {/* message preparation area */}
        <div className='mx-2 flex flex-row items-center'>
          {/* Add images */}
          <label
            htmlFor='add-chat-image'
            className='flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full transition-all  hover:bg-gray-200 active:scale-95'>
            <input id='add-chat-image' accept='image/*' type='file' className='hidden' onChange={imageChange} />
            <i className='fa-regular fa-image text-[#491ca8]'></i>
          </label>
          {/* */}
          <div className='m-2 flex grow flex-col gap-1 rounded-[20px] bg-[#f3f3f5] px-3 py-2'>
            <div className='flex flex-row gap-3'>
              {imageUrls?.length > 0 &&
                imageUrls.map((imageUrl: any, i: number) => {
                  return (
                    <div key={i} className='relative'>
                      <img src={imageUrl} alt='Preview' className='h-10'></img>
                      <div
                        onClick={() => handleImageRemove(i)}
                        className='absolute right-0 top-0 h-[20px] w-[20px] -translate-y-3 translate-x-4 cursor-pointer '>
                        <i className='fa-solid fa-xmark text-xs text-white'></i>
                      </div>
                    </div>
                  );
                })}
            </div>
            <input type='text' placeholder='Type your message here' className='w-full bg-transparent outline-none' />
          </div>
          {/* SendMessage */}
          <div className='flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full transition-all hover:bg-gray-200 active:scale-95'>
            <i className='fa-regular fa-paper-plane text-[#491ca8]'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
