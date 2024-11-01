// src/Home.tsx

import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CenteredContent from './CenteredContent';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(to bottom, blue, white)',
      }}
    >
      {/* Top Navigation Bar without border/shadow */}
      <AppBar
        position="static"
        elevation={0} // Removes border/shadow
        sx={{ background: 'linear-gradient(to right, blue, #1976d2)' }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              '& span': {
                color: '#ffeb3b', // Specific color for 'scribe'
              },
            }}
          >
            Tran<span>scribe</span>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: 'calc(100vh - 64px)', // Adjusting height for AppBar
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CenteredContent />
      </Box>
    </Box>
  );
};

export default Home;

