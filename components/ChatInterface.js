import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';

const ChatInterface = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hey I'm AIra, what can i help you with today?", sender: 'bot' }
  ]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Here you would typically call an API to get the bot's response
      // For now, we'll just add a placeholder response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: "I'm processing your request. How else can I assist you?", sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          height: 400, 
          mb: 2, 
          p: 2, 
          overflow: 'auto', 
          bgcolor: '#1C1C1C',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {messages.map((message, index) => (
          <Box 
            key={index} 
            sx={{ 
              alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
              bgcolor: message.sender === 'user' ? '#9AE6B4' : '#2C2C2C',
              color: message.sender === 'user' ? 'black' : 'white',
              p: 1,
              borderRadius: 1,
              maxWidth: '70%',
              mb: 1
            }}
          >
            <Typography variant="body1">{message.text}</Typography>
          </Box>
        ))}
      </Paper>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="I need help with ........"
            value={input}
            onChange={handleInputChange}
            sx={{ mr: 1 }}
          />
          <Button type="submit" variant="contained" sx={{ bgcolor: '#9AE6B4', color: 'black' }}>
            GO
          </Button>
        </Box>
      </form>
      <Typography variant="caption" sx={{ display: 'block', mt: 1, textAlign: 'center' }}>
        Be as specific as possible for best results
      </Typography>
    </Box>
  );
};

export default ChatInterface;