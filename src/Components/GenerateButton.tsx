
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

    const arrayBuffer = await audioBlob.arrayBuffer();
    
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.mp3');

    try {
      const response = await fetch('http://localhost:5001/transcribe', { // Update to your backend URL
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to transcribe audio');
      }

      const data = await response.json();
      console.log('Transcription result:', data);
      alert(`Transcription result: ${data.transcript}`); 
    } catch (error) {
      console.error('Error during transcription:', error);
      alert(`Transcription failed. Please try again.${error}`);
    }
  };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#64b5f6', 
        color: '#fff', 
        fontWeight: 'bold',
        textTransform: 'none',
        borderRadius: '20px',
        padding: '12px',
        width: '100%', 
        mt: 2, 
        '&:hover': {
          backgroundColor: '#42a5f5', 
        },
      }}
      onClick={handleGenerateTranscribe}
    >
      Generate Transcribe
    </Button>
  );
};
export default GenerateTranscribeButton;

