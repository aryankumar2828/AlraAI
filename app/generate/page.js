'use client'
import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ChatHeader from '../../components/ChatHeader';
import ChatInterface from '../../components/ChatInterface';
import{Button} from '@mui/material'
import Link from 'next/link';

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
        <div>
        <Link href="/" legacyBehavior>
            <Button 
            variant="outlined"
            color="primary" 
            style={{ position: 'absolute', right: 16, top: 16 }}>
              HOME
            </Button>
        </Link>
        </div>
        <ChatHeader />
        <ChatInterface />
      </Container>
    </ThemeProvider>
  );
}