'use client'
import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ChatHeader from '../../components/ChatHeader';
import ChatInterface from '../../components/ChatInterface';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9AE6B4',
    },
    background: {
      default: '#121212',
      paper: '#1C1C1C',
    },
  },
});

export default function ChatPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ pt: 4 }}>
        <ChatHeader />
        <ChatInterface />
      </Container>
    </ThemeProvider>
  );
}