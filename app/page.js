'use client'
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AboutSection from '../components/about';
import Footer from '../components/footer';
import Link from 'next/link';
import { UserAuth } from "../context/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: '#9AE6B4',
    },
  },
});

const HomePage = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar style={{ justifyContent: 'center' }}>
          <SchoolIcon style={{ color: '#9AE6B4', marginRight: 16, fontSize: 58 }} />
          <Typography
            variant="h2"
            component="div"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 30,
            }}>
            AlraAI
          </Typography>
        </Toolbar>
        {user ? (
        <div>
          <Button 
          variant="outlined"
          color="primary" 
          style={{ position: 'absolute', right: 16, top: 16 }}
          onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      ) : (
        <Button 
          variant="outlined"
          color="primary" 
          style={{ position: 'absolute', right: 16, top: 16 }}
          onClick={handleSignIn}
        >
          LOG IN/SIGN UP
        </Button>
      )}
        {/*
        <Button 
        variant="outlined" 
        color="primary" style={{ position: 'absolute', right: 16, top: 16 }}>
          SIGN UP
        </Button>
        */}
      </AppBar>
      <Container maxWidth="md">
        <Box style={{ marginTop: 72, marginBottom: 48, textAlign: 'center' }}>
        {user ? (
        <Link href="/generate" legacyBehavior>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: 24 }}
          >
            GET ADVICE!
          </Button>
        </Link>
      ) : (
        <>
          <Typography variant="h3" component="h2" gutterBottom>
            Navigate your college career like a PRO!
          </Typography>
          <Typography variant="h5" component="h3" gutterBottom>
            Meet AIra, your AI-powered college advisor.
            Stay ahead of the curve with personalized
            guidance every step of the way.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: 24 }}
            onClick={handleSignIn}
          >
            TALK TO AIRA :)
          </Button>
        </>
      )}
          <Typography variant="caption" display="block" style={{ marginTop: 16 }}>
            Try it out!
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="md" style={{ marginTop: 84 }}>
        <AboutSection />
      </Container>
    </ThemeProvider>
  );
};


export default HomePage;