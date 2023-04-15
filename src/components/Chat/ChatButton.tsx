import { useState } from 'react';
import ChatUI from './ChatUI';

const ChatButton = () => {
  const [openChat, setOpenChat] = useState(false);

  const toggleChat = () => {
    setOpenChat(!openChat);
  };

  return (
    <div className='fixed bottom-0 right-0 z-[99999] flex -translate-x-10 -translate-y-7 flex-col gap-5 transition-all'>
      <ChatUI isOpen={openChat} handleClose={toggleChat} />
      <div className='flex flex-grow  justify-end'>
        <div
          onClick={() => toggleChat()}
          className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center self-end rounded-full bg-white text-[#2b0d6a] transition-all hover:bg-[#491ca8] hover:text-white active:scale-90'>
          <i className='fa-regular fa-comments rounded-full text-2xl'></i>
        </div>
      </div>
    </div>
  );
};

export default ChatButton;
