import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetAuthError,resetError } from './fetchData';

const ErrorPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRedirect = () => {
    dispatch(resetAuthError({}))
    dispatch(resetError({}))
    navigate('/signup');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: (theme) => theme.palette.error.white,
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: 300,
          marginBottom: 1,
        }}
      >
        Oops! Something's broken.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: (theme) => theme.palette.common.white,
          color: (theme) => theme.palette.error.main,
        }}
        onClick={handleRedirect}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
