import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Error({ message }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2,
        px: 2,
        width: '100%',
        maxWidth: '400px',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: '#d32f2f', // Muted red for the text
          fontWeight: 500,
          textAlign: 'center',
          fontSize: '0.95rem',
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}
