import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Message } from '../types';
import { format } from 'date-fns';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  onSendMessage,
}) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-[400px] bg-white rounded-lg shadow-sm">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          const isSystem = message.type === 'system';
          const isUser = message.senderId === 'user-1';
          
          return (
            <div
              key={message.id}
              className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {isSystem ? (
                <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                  <p className="text-sm text-gray-600">{message.content}</p>
                </div>
              ) : (
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    isUser
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-75 mt-1">
                    {format(new Date(message.timestamp), 'HH:mm')}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 input-field py-2"
          />
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition-colors"
            disabled={!newMessage.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;