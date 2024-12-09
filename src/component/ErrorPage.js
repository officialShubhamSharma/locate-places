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
          fontSize: '4rem',
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        404
      </Typography>
      <Typography
        sx={{
          fontSize: '1.25rem',
          marginBottom: 4,
          fontWeight: 400,
        }}
      >
        Oops! Something went wrong or the page you're looking for doesn't exist.
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
