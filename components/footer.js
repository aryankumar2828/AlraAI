import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Link, 
  Grid 
} from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              AIraAI is your AI-powered college advisor, helping you navigate your academic journey with ease.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@airaai.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 (555) 123-4567
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block">Home</Link>
            <Link href="#" color="inherit" display="block">About</Link>
            <Link href="#" color="inherit" display="block">Services</Link>
            <Link href="#" color="inherit" display="block">FAQ</Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://airaai.com/">
              AIraAI
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;