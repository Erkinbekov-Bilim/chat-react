import React, { useEffect, useState } from 'react';
import ChatForm from '../../components/Chat/ChatForm/ChatForm';
import MESSAGES_URL from '../../constants/api/messages_api';
import type { IMessage } from '../../types';
import Messages from '../../components/Chat/Messages/Messages';
import './ChatPage.css';
import Spinner from '../../components/Spinner/Spinner';

const ChatPage = () => {
  const [ownMessage, setOwnMessage] = useState<IMessage>({} as IMessage);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let spinner: React.ReactNode = null;

  const getMessages = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch(MESSAGES_URL);
      const data: IMessage[] = await response.json();
      setMessages(data);
      spinner = null;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getNewMessages = async (): Promise<void> => {
    try {
      const lastMessage: IMessage = messages[messages.length - 1];

      const response = await fetch(
        `${MESSAGES_URL}?datetime=${lastMessage.datetime}`
      );
      const data: IMessage[] = await response.json();

      if (data.length > 0) {
        setMessages([...messages, ...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    const interval = setInterval(getNewMessages, 2000);

    return () => clearInterval(interval);
  }, [messages]);

  const sendMessage = async (message: IMessage): Promise<void> => {
    const data: URLSearchParams = new URLSearchParams();

    data.set('message', message.message);
    data.set('author', message.author);

    try {
      setIsLoading(true);
      await fetch(MESSAGES_URL, {
        method: 'POST',
        body: data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    setOwnMessage(message);
  };

  return (
    <div className="chat-page position-fixed top-50 start-50 translate-middle p-3 rounded-5 ">
      <Messages
        messages={messages}
        ownMessage={ownMessage}
        isLoading={isLoading}
      />
      {isLoading && <Spinner />}
      <div className="mt-5">
        <ChatForm sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default ChatPage;
