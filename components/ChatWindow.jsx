"use client"
import chatEngine from '@/ChatEngine/engine';
import { cn } from '@/lib/utils';
import { MySpeaker } from '@/Utilities/speaker';
import React, { useState } from 'react';

const ChatWindow = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const [disable, setDisable] = useState(false)


  const fixResponseQuestion = {
    "who are you": "I am your Assistant",
    "who created you": "I am created by Nischal Chhukan"
  }

  function messageAdder(newMessages, response) {
    let wordCount=response.split(" ").length;
    if(wordCount<=45) MySpeaker(response)
    setUserMessage('');
    setMessages([...newMessages, { sender: 'bot', text: response }]);
    setDisable(false)
  }

  const handleSend = async () => {
    if (userMessage.trim()) {
      const newMessages = [...messages, { sender: 'user', text: userMessage }];
      setMessages(newMessages);

      setDisable(true)
      const check = fixResponseQuestion[userMessage.trim().toLowerCase()];
      if (check) {
        messageAdder(newMessages, check)
      }
      else {

        const response = await chatEngine(userMessage);
        messageAdder(newMessages, response)
        
      }
    }
  };

  return (
    <div className="w-[calc(100vw-12.9rem)] h-screen px-6 py-4 bg-gray-800 text-white relative flex flex-col">
      <div className="flex-grow overflow-y-auto mb-4 p-4 bg-gray-900 rounded-lg">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-4 whitespace-pre-line py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-700'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className={cn("border-t w-full border-gray-600 flex pt-4 items-center")}>
        <textarea
          placeholder="Type your message..."
          onChange={(event) => setUserMessage(event.target.value)}
          value={userMessage}
          className="flex-grow border w-full border-gray-600 rounded-l-lg p-3 bg-gray-700 text-white outline-none resize-none"
          rows="2"
          disabled={disable}
        ></textarea>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-r-lg ml-2 hover:bg-blue-600"
          onClick={handleSend}
          disabled={disable}
        >
          Send
        </button>
      </div>
    </div >
  );
};

export default ChatWindow;
