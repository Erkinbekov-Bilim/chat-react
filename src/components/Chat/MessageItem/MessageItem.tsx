import React from 'react';
import type { IMessage } from '../../../types';
import './MessageItem.css';
import dayjs from 'dayjs';

interface IMessageItem {
  message: IMessage;
  ownMessage: IMessage;
}

const MessageItem: React.FC<IMessageItem> = React.memo(
  ({ message, ownMessage }) => {
    const author: string = message.author;
    const formateDatetime: string = dayjs(message.datetime).format(
      'DD.MM.YYYY HH:mm'
    );

    return (
      <>
        <div
          className={`message-block p-3 rounded-5 d-flex flex-row align-items-start position-relative ${
            message.author === ownMessage.author &&
            'bg-light border border-success flex-row-reverse gap-4'
          }`}
        >
          <div
            className={`author rounded-circle p-3 ${
              message.author === ownMessage.author && 'bg-info text-light'
            }`}
          >
            <p className="author-avatar fw-bold">{author[0]}</p>
          </div>
          <div className="message d-flex flex-column ms-4">
            <p className="fw-bold">{author}</p>
            <p>{message.message}</p>
          </div>

          <p
            className={`datetime position-absolute bottom-0 end-0 me-4 ${
              message.author === ownMessage.author && 'start-0 ms-4'
            }`}
          >
            {formateDatetime}
          </p>
        </div>
      </>
    );
  },
  (prevState, nextState) =>
    prevState.message.author === nextState.message.author &&
    prevState.message.message === nextState.message.message
);

export default MessageItem;
