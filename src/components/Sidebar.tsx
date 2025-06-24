// src/components/Sidebar.tsx
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface SidebarProps {
  isLoggedIn: boolean;
  username: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isLoggedIn, username }) => {
  return (
    <Box sx={{ width: 250, p: 2, backgroundColor: '#f4f4f4' }}>
      {isLoggedIn ? (
        <>
          <Avatar sx={{ mb: 2 }} />
          <Typography variant="h6">{username}</Typography>
        </>
      ) : (
        <Typography variant="body1">Not logged in</Typography>
      )}
      <Typography variant="body1">Audio Files: 0</Typography>
      <Typography variant="body1">Playlists: 0</Typography>
      <Typography variant="body1">Content Creators: 0</Typography>
    </Box>
  );
};

export default Sidebar;