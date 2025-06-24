import React from 'react';
import { Box, Card, CardContent, Button, Typography } from '@mui/material';
// import { Grid } from '@mui/material';

interface AudioFile {
  id: string;
  name: string;
  url: string;
}

const AudioList: React.FC<{ audioFiles: AudioFile[] }> = ({ audioFiles }) => {
  return (
    <Box sx={{ overflowY: 'scroll', maxHeight: 400 }}>
      {audioFiles.map((file) => (
        <Card key={file.id} variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{file.name}</Typography>
            <Button variant="contained" onClick={() => new Audio(file.url).play()}>
              Play
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default AudioList;