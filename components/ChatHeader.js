import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const ChatHeader = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <SchoolIcon sx={{ fontSize: 60, color: '#9AE6B4', mb: 2 }} />
      <Typography variant="h2" component="h1" gutterBottom>
        Ask Me Anything!
      </Typography>
    </Box>
  );
};

export default ChatHeader;