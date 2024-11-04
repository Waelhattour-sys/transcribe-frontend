
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
      let data: Blob | MediaSource | null=null;
      let data2: BlobPart[] =[]
      recorder.ondataavailable = (event) => {
        setAudioBlob(event.data);
        data=event.data;
        data2.push(event.data);
      };
      recorder.onstop = () => {
        if (data) {
          const url = URL.createObjectURL(data);
          const blob = new Blob(data2, {
            'type': 'audio/mp3'
          });
          setAudioUrl(url);
        }
      };
      recorder.onstart=()=>{
        data2.length = 0
      }
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
      console.log("Recording started...");
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
