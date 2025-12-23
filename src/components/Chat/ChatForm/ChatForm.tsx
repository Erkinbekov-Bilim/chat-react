import React from 'react';
import { useForm } from 'react-hook-form';
import type { IMessage, IMessageMutation } from '../../../types';
import './ChatForm.css';
import Button from '../../../UI/Button/Button';
import { toast } from 'react-toastify';

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

  const onSubmit = (data: IMessageMutation): void => {
    sendMessage({ ...data });
    reset();
    toast.success('Message successfully sent');
  };

  return (
    <div className="form-block p-4 rounded-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group d-flex flex-column gap-3">
          <div className="d-flex flex-column w-100">
            <input
              type="text"
              placeholder="Author"
              className="py-3 px-4 rounded-5"
              {...register('author', {
                required: "Author's name is required!",
                minLength: {
                  value: 3,
                  message: "Author's name must be at least 3 characters long!",
                },
                maxLength: {
                  value: 20,
                  message: "Author's name must be at most 20 characters long!",
                },
              })}
              name="author"
            />
            {errors.author && (
              <p className="error rounded-5 p-2 mt-3 text-center text-white">
                {errors.author.message}
              </p>
            )}
          </div>
          <div className="d-flex flex-column w-100">
            <input
              type="text"
              placeholder="Message"
              className="py-3 px-4 rounded-5"
              {...register('message', {
                required: 'message is required!',
                minLength: {
                  value: 1,
                  message: 'message must be at least 1 characters long!',
                },
                maxLength: {
                  value: 50,
                  message: 'message must be at most 20 characters long!',
                },
              })}
              name="message"
            />
            {errors.message && (
              <p className="error rounded-5 p-2 mt-3 text-center text-white">
                {errors.message.message}
              </p>
            )}
          </div>
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
