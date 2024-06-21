import React, { useState } from 'react';
import { styled } from '@mui/system';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

const RootContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

const MessagePaper = styled(Paper)(({ theme, fromUser }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  marginLeft: fromUser ? 'auto' : 0,
  backgroundColor: fromUser ? '#DCF8C6' : '#FFFFFF',
  maxWidth: '70%',
}));

const MenuButton = styled(Button)(({ theme }) => ({
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }));

const InputContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f0f0f0',
}));

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', fromUser: false },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [options, setOptions] = useState(["Technical Problem", "Change your plan"]);
  const handleOptionClick = (option) => {
    setMessages([
      ...messages,
      { text: `You selected: "${option}"`, fromUser: true },
      { text: `Bot: Sorry, I am just a demo bot!`, fromUser: false },
    ]);
  };
  
  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, fromUser: true }]);
      handleBotResponse(newMessage);
      setNewMessage('');
    }
  };

  const handleBotResponse = (userMessage) => {
    // Simulate a simple bot response
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: `You said: "${userMessage}"`, fromUser: true },
        { text: `Bot: Sorry, I am just a demo bot!`, fromUser: false },
      ]);
    }, 500);
  };

  return (
    <RootContainer>
      <Grid boxShadow={9} container direction="column" justifyContent="flex-end" alignItems="stretch" style={{ flexGrow: 1, border: "2px solid black", padding: 6 }}>
        {messages.map((message, index) => (
          <Grid item key={index}>
            <MessagePaper fromUser={message.fromUser}>
              <Typography variant="body1">{message.text}</Typography>
            </MessagePaper>
          </Grid>
        ))}

      <InputContainer>
      {options.map((option, index) => (
          <MenuButton
            key={index}
            variant="contained"
            color="primary"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </MenuButton>
        ))}
      </InputContainer>
      </Grid>
      
    </RootContainer>
  );
};

export default ChatBot;
