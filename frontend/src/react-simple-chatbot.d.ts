declare module 'react-simple-chatbot' {
    import { Component } from 'react';
  
    interface Step {
      id: string;
      message: string;
      trigger?: string;
      end?: boolean;
      user?: boolean;
      waitAction?: boolean;
    }
  
    interface ChatBotProps {
      steps: Step[];
    }
  
    class ChatBot extends Component<ChatBotProps> {}
  
    export default ChatBot;
  }
  