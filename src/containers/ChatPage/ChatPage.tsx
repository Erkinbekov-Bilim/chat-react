import ChatForm from '../../components/Chat/ChatForm/ChatForm';
import type { IMessage } from '../../types';

const ChatPage = () => {
  const sendMessage = (message: IMessage) => {
    console.log(message);
  };

  return (
    <div className="chat-page position-fixed top-50 start-50 translate-middle">
      <ChatForm sendMessage={sendMessage} />
    </div>
  );
};

export default ChatPage;
