import './App.css';
import ChatPage from './containers/ChatPage/ChatPage';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer />
      <ChatPage />
    </>
  );
};

export default App;
