import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';

const ChatInterface = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hey I'm AIra, what can i help you with today?", sender: 'bot' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInput('');
      setIsLoading(true);
  
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: input
          }),
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Response:', response.status, errorText);
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
  
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let botResponse = '';
  
        setMessages(prevMessages => [...prevMessages, { text: '', sender: 'bot' }]);
  
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
  
          const chunk = decoder.decode(value);
          botResponse += chunk;
  
          setMessages(prevMessages => {
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 1] = { text: botResponse, sender: 'bot' };
            return updatedMessages;
          });
        }
  
      } catch (error) {
        console.error('Detailed Error:', error);
        setMessages(prevMessages => [...prevMessages, { text: `Sorry, there was an error processing your request: ${error.message}`, sender: 'bot' }]);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          height: 750, 
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
              bgcolor: message.sender === 'user' ? '#9AE6B4' : '#F5F5F5',
              color: message.sender === 'user' ? 'black' : 'black',
              p: 1,
              borderRadius: 1,
              maxWidth: '70%',
              mb: 1
            }}
          >
            <Typography variant="body1">{message.text}</Typography>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Paper>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="I need help with ........"
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
            sx={{ mr: 1 }}
          />
          <Button 
            type="submit" 
            variant="contained" 
            disabled={isLoading}
            sx={{ bgcolor: '#9AE6B4', color: 'black' }}
          >
            {isLoading ? 'Sending...' : 'GO'}
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