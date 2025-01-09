import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const steps = [
  {
    id: '0',
    message: 'Hey Geek!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Please write your username',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, how can I help you?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'View Courses' },
      { value: 2, label: 'Read Articles' },
    ],
    end: true,
  },
];

const theme = {
  background: 'white',
  headerBgColor: 'rgba(114, 162, 233, 0.7)',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

const config = {
  floating: true,
};

// Styled-components for the container and ChatBot positioning
const ChatBotContainer = styled.div`
  position: relative;
  min-height: 500px; /* You can change the height as needed */
`;

const StyledChatBot = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const ChatBotComponent: React.FC = () => {
  return (
    <ChatBotContainer>
      <ThemeProvider theme={theme}>
        <StyledChatBot>
          <ChatBot
            headerTitle="Chat Bot"
            steps={steps}
            {...config}
          />
        </StyledChatBot>
      </ThemeProvider>
    </ChatBotContainer>
  );
};

export default ChatBotComponent;
