// src/CenteredContent.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import RecordButton from './RecordButton';

const CenteredContent: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Main Title with Span for Styled Part */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          color: '#1976d2', // Main color for "Tran"
          '& span': {
            color: '#ffeb3b', // Specific color for 'scribe'
          },
        }}
      >
        Tran<span>scribe</span>
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          color: '#555', // Subtitle color
          mt: 2, // Margin top for spacing
        }}
      >
        Record → Transcribe → Translate
      </Typography>
      <Box sx={{ mt: 3 }}> {/* Margin top for spacing */}
        <RecordButton />
      </Box>
    </Box>
  );
};

export default CenteredContent;
