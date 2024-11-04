
import React from 'react';
import { Box, Typography } from '@mui/material';
import RecordButton from './RecordButton';

const CenteredContentHome: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          color: 'white', 
          '& span': {
            color: '#ffeb3b', 
          },
        }}
      >
        Tran<span>scribe</span>
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          color: '#555', 
          mt: 2, 
        }}
      >
        Record → Transcribe → Translate
      </Typography>
      <Box sx={{ mt: 3 }}> 
        <RecordButton />
      </Box>
    </Box>
  );
};

export default CenteredContentHome;
