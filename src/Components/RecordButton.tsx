// src/RecordButton.tsx

import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import GenerateTranscribeButton from './GenerateButton';

const RecordButton: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const startRecording = async () => {
    try {
      console.log("Requesting microphone access...");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        setAudioBlob(event.data);
      };

      recorder.onstop = () => {
        if (audioBlob) {
          const url = URL.createObjectURL(audioBlob);
          setAudioUrl(url);
          alert("Recording stopped!"); // Alert for stopping the recording
        }
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
      console.log("Recording started...");
      alert("Recording started!"); // Alert for starting the recording
    } catch (error) {
      console.error("Error accessing the microphone:", error);
      alert("Could not access the microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      console.log("Recording stopped.");
    }
    setIsRecording(false);
  };

  return (
    <div>
        {audioUrl === null ? 
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#fff',
          color: '#1976d2',
          fontWeight: 'bold',
          textTransform: 'none',
          borderRadius: '20px',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
        onClick={isRecording ? stopRecording : startRecording}
        endIcon={<MicIcon />}
      >
        {isRecording ? 'Stop' : 'Record'}
      </Button>

      : (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', mt: 2 }}>
          <audio controls>
            <source src={audioUrl} type="audio/webm" />
            Your browser does not support the audio tag.
          </audio>
          <GenerateTranscribeButton 
            audioBlob={audioBlob} 
            audioUrl={audioUrl} 
          />
        </Box>
      )}
    </div>
  );
};

export default RecordButton;
