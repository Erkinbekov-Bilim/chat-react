interface IMessageMutation {
  message: string;
  author: string;
}

interface IMessage {
  message: string;
  author: string;
  datetime?: string;
}

export { IMessageMutation, IMessage };
