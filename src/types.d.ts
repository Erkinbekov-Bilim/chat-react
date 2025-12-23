interface IMessageMutation {
  message: string;
  author: string;
}

interface IMessage {
  _id?: string;
  message: string;
  author: string;
  datetime?: string;
}

export { IMessageMutation, IMessage };
