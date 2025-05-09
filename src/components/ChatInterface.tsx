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
  onSendMessage 
}) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const formatTime = (timestamp: string) => {
    return format(new Date(timestamp), 'HH:mm');
  };

  return (
    <div className="flex flex-col h-[400px] bg-white rounded-lg shadow-sm">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.senderId === 'user-1' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.type === 'system'
                  ? 'bg-gray-100 text-gray-700'
                  : message.senderId === 'user-1'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <span className="text-xs opacity-75 mt-1 block">
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>
        ))}
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
            className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
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