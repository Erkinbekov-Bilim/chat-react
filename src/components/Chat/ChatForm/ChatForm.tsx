import React from 'react';
import { useForm } from 'react-hook-form';
import type { IMessage, IMessageMutation } from '../../../types';
import Input from '../../../UI/Input/Input';
import './ChatForm.css';
import Button from '../../../UI/Button/Button';
import { motion } from 'framer-motion';

interface IChatFormProps {
  sendMessage: (message: IMessage) => void;
}

const ChatForm: React.FC<IChatFormProps> = ({ sendMessage }) => {
  const animationForButton = {
    initial: {
      scale: 1,
      color: '#ffffff',
      backgroundColor: '#3d4588',
      border: '1px solid #ffffff',
    },
    whileHover: {
      scale: 1.05,
      color: '#3d4588',
      backgroundColor: '#ffffff',
      border: '1px solid #3d4588',
    },
    whileTap: {
      scale: 0.9,
    },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMessageMutation>({
    defaultValues: {
      message: '',
      author: '',
    },
  });

  const onSubmit = (data: IMessageMutation) => {
    sendMessage({ ...data });
  };

  return (
    <div className="form-block p-4 rounded-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group d-flex flex-column gap-3">
          <Input
            type="text"
            placeholder="Author"
            className="py-3 px-4 rounded-5"
          />
          <Input
            type="text"
            placeholder="Message"
            className="py-3 px-4 rounded-5"
          />
          <Button
            type="submit"
            title="send message"
            text="Send"
            className="btn-send rounded-5 fs-5 fw-bold"
            motionAnimation={animationForButton}
          />
        </div>
      </form>
    </div>
  );
};

export default ChatForm;
