
import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CenteredContentHome from './CenteredContent';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(to bottom, blue, white)',
      }}
    >
      <AppBar
        position="static"
        elevation={0} 
        sx={{ background: 'linear-gradient(to right, blue, #1976d2)' }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              '& span': {
                color: '#ffeb3b', 
              },
            }}
          >
            Tran<span>scribe</span>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: 'calc(100vh - 64px)', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CenteredContentHome />
      </Box>
    </Box>
  );
};

export default Home;

