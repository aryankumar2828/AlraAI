import React from 'react';
import { 
  Typography, 
  Box, 
  Grid, 
  Paper,
  Button,
  Link as MuiLink
} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ExploreIcon from '@mui/icons-material/Explore';
import CelebrationIcon from '@mui/icons-material/Celebration';

const AboutSection = () => {
  return (
    <Box sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" component="h2" align="center" marginBottom={7}>
        About Alra
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#9AE6B4', alignItems: 'center'}}>
            <UpdateIcon sx={{ fontSize: 40, color: 'black', mb: 2}} />
            <Typography variant="h6" component="h3" gutterBottom style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              Powered by Advanced AI:
            </Typography>
            <Typography>
              Utilizing Google Gemini 1.5 with regular updates to keep you at the forefront.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#9AE6B4' , alignItems: 'center'}}>
            <EmojiObjectsIcon sx={{ fontSize: 40, color: 'black', mb: 2 }} />
            <Typography variant="h6" component="h3" gutterBottom style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              Expert-Level Guidance:
            </Typography>
            <Typography>
              Designed with advanced prompt engineering to emulate the wisdom of an experienced college advisor.
            </Typography>
          </Paper>
        </Grid>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#9AE6B4', alignItems: 'center' }}>
            <ExploreIcon sx={{ fontSize: 40, color: 'black', mb: 2 }} />
            <Typography variant="h6" component="h3" gutterBottom style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              Find Your Path:
            </Typography>
            <Typography>
              Whether you are exploring ideas or feeling lost, Alra will help you find your direction.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#9AE6B4', alignItems: 'center' }}>
                <CelebrationIcon sx={{ fontSize: 40, color: 'black', mb: 2 }} />
                <Typography variant="h6" component="h3" gutterBottom style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 'bold',
                textAlign: 'center',
                }}>
                More Coming Soon!
                </Typography>

                <MuiLink 
                href="https://tally.so/r/3lLN66" 
                target="_blank" 
                rel="noopener noreferrer" 
                sx={{ mt: 1, textAlign: 'center', color: 'blue' }}
                >
                Sign up to the waitlist 
                </MuiLink>
                <MuiLink 
                href="https://www.linkedin.com/in/aryan-kumar-10a548297/" 
                target="_blank" 
                rel="noopener noreferrer" 
                sx={{ mt: 1, textAlign: 'center', color: 'black' }}
                >
                Connect with the Creator
                </MuiLink>

            </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
