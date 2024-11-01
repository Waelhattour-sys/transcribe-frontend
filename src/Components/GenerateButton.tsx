// src/GenerateTranscribeButton.tsx

import React from 'react';
import { Button } from '@mui/material';

interface GenerateTranscribeButtonProps {
  audioBlob: Blob | null;
  audioUrl: string | null;
}

const GenerateTranscribeButton: React.FC<GenerateTranscribeButtonProps> = ({ audioBlob, audioUrl }) => {
  
  const handleGenerateTranscribe = async () => {
    if (!audioBlob) {
      alert("No audio recorded!");
      return;
    }

    // Create a FormData object to send the audio blob
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.webm');

    try {
      // Send the audio blob to a transcription service (replace with your API URL)
      const response = await fetch('YOUR_TRANSCRIPTION_API_URL', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to transcribe audio');
      }

      const data = await response.json();
      console.log('Transcription result:', data);
      alert(`Transcription result: ${data.transcription}`); // Assuming the API returns a 'transcription' field
    } catch (error) {
      console.error('Error during transcription:', error);
      alert('Transcription failed. Please try again.');
    }
  };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#64b5f6', // Darker blue background color
        color: '#fff', // White text
        fontWeight: 'bold',
        textTransform: 'none',
        borderRadius: '20px',
        padding: '12px',
        width: '100%', // Make the button take full width
        mt: 2, // Margin top for spacing
        '&:hover': {
          backgroundColor: '#42a5f5', // Darker shade on hover
        },
      }}
      onClick={handleGenerateTranscribe}
    >
      Generate Transcribe
    </Button>
  );
};

export default GenerateTranscribeButton;
