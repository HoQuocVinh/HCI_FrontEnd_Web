import { ChatUIProps, MessageProps } from 'utils/chatProps';
import Message from './Message';
import { useEffect, useRef, useState } from 'react';

const ChatUI = ({ isOpen, handleClose }: ChatUIProps) => {
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTo({
        top: chatWindowRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage && newMessage !== '') {
      setMessages((prevMessages: any) => [...prevMessages, { message: newMessage, isSender: true, type: 'text' }]);
    }
    if (images.length > 0) {
      images.forEach((image) => {
        setMessages((prevMessages: any) => [...prevMessages, { message: image, isSender: true, type: 'image' }]);
      });
    }
    setNewMessage('');
    setImages([]);
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  }

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const newImages = [...images];
    const files = Array.from(event.target.files ?? []);

    for (const file of files) {
      if (file.type.startsWith('image/')) {
        newImages.push(file);
      }
    }

    setImages(newImages);
  }

  function handleImageRemove(index: number) {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }

  return (
    <div className={`flex flex-col ${isOpen ? `` : `hidden`}`}>
      {/* title */}
      <div className={`message-title flex h-[50px] flex-row items-center rounded-t-xl p-2 text-white `}>
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
      <div className={`z-10000 flex h-[450px] w-[400px] flex-col rounded-b-xl bg-white transition-all  `}>
        {/* messages */}
        <div className='flex grow flex-col gap-5 overflow-y-auto p-4' ref={chatWindowRef}>
          {messages.map((item: MessageProps) => {
            return <Message message={item.message} type={item.type} isSender={item.isSender}></Message>;
          })}
          {/* <Message message={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} isSender={true} />
          <Message
            message={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
            isSender={false}
          /> */}
        </div>
        {/* message preparation area */}
        <div className='mx-2 flex flex-row items-center'>
          {/* Add images */}
          <label
            htmlFor='add-chat-image'
            className='flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full transition-all  hover:bg-gray-200 active:scale-95'>
            <input
              id='add-chat-image'
              accept='image/*'
              type='file'
              className='hidden'
              onChange={handleImageUpload}
              multiple
            />
            <i className='fa-regular fa-image text-[#491ca8]'></i>
          </label>
          {/* */}
          <div className='m-2 flex grow flex-col gap-1  rounded-[20px] bg-[#f3f3f5] px-3 py-2 transition-all'>
            <div className={`images-area flex flex-row gap-3 overflow-x-auto ${images?.length > 0 ? `pb-2` : ``}`}>
              {images?.length > 0 &&
                images.map((image: any, i: number) => {
                  return (
                    <div key={i} className='relative'>
                      <img
                        src={URL.createObjectURL(image)}
                        alt='Preview'
                        className='h-10 w-10 rounded-lg object-cover'></img>
                      <div
                        onClick={() => handleImageRemove(i)}
                        className='absolute right-0 top-0  h-[20px] w-[20px] -translate-y-[9px] translate-x-[17px] cursor-pointer '>
                        <i className='fa-solid fa-xmark text-xs text-gray-700'></i>
                      </div>
                    </div>
                  );
                })}
            </div>
            <input
              type='text'
              placeholder='Type your message here'
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
              className='w-full bg-transparent outline-none'
            />
          </div>
          {/* SendMessage */}
          <div
            onClick={() => handleSendMessage()}
            className='flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full transition-all hover:bg-gray-200 active:scale-95'>
            <i className='fa-regular fa-paper-plane text-[#491ca8]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
