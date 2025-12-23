import React from 'react';
import type { IMessage } from '../../../types';
import MessageItem from '../MessageItem/MessageItem';
import './Messages.css';

interface IChatProps {
  messages: IMessage[];
  ownMessage: IMessage;
}

const Messages: React.FC<IChatProps> = ({ messages, ownMessage }) => {
  let messagesArray: React.ReactNode = null;

  if (messages.length === 0) {
    messagesArray = (
      <>
        <p className="empty-message">Silence... Write your first message</p>
      </>
    );
  } else {
    messagesArray = (
      <>
        <div className="messages-block d-flex flex-column gap-3">
          {messages.map((message, index) => (
            <MessageItem
              message={message}
              key={index}
              ownMessage={ownMessage}
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="messages">
        <div className="messages-content">{messagesArray}</div>
      </div>
    </>
  );
};

export default Messages;
