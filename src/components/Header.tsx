// src/components/Header.tsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = useState('');

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">Q-Music - Enjoy The Music</Typography>
        </Box>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ ml: 1, flex: 1, backgroundColor: 'white', borderRadius: 1, padding: '5px' }}
        />
        <Button component={Link} to="/create-playlist" variant="contained" color="primary" sx={{ ml: 2 }}>
          Create New Playlist
        </Button>
        <Button component={Link} to="/upload-music" variant="contained" color="secondary" sx={{ ml: 2 }}>
          Add New Music
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;