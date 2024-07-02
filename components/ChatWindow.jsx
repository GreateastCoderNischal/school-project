import React from 'react';

const ChatWindow = () => {
  return (
    <div className="w-[75vw] h-screen px-6 py-4 relative">
        
      <div className="border w-full border-gray-400 mb-4 p-2">
        <div className="font-bold">You:</div>
        <div className="h-20"></div>
      </div>
      <div className="border w-full border-gray-400 p-2">
        <div className="font-bold">Response:</div>
        <div className="h-20"></div>
      </div>
      <div className="flex absolute bottom-0 mb-4 w-full px-4">
        <input type="text" placeholder="Question..." className="flex-grow border outline-none border-none rounded-l-xl border-gray-400 p-3" />
        <button className="bg-blue-500 text-white px-4">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
