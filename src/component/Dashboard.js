import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './fetchData';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import bgImage from "../image/image.png";
import DisplayPlaces from './DisplayPlaces';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [loadingCards, setLoadingCards] = useState(true);

  const handleSubmit = (e) => {
    setLoadingCards(false);
    e.preventDefault();
    const dataForRequest = new FormData(e.currentTarget);
    const dataForRequestAsJson = {};
    for (let [key, value] of dataForRequest.entries()) {
      dataForRequestAsJson[key] = value;
    }
    dispatch(fetchData(dataForRequestAsJson));
  };

  return (
    <>
      <div className="background-container">
        <Container>
          {loadingCards ? (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'primary',
              }}
            >
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{
                        fontFamily: 'Roboto, sans-serif',    // Custom font
                        fontWeight: 'bold',                  // Bold for emphasis
                        fontSize: '3.0rem',                  // Adjusted font size for better fit
                        letterSpacing: '0.1em',              // Slightly reduced letter spacing
                        color: '#fffbea',                    // Light yellow for professional look
                        textTransform: 'uppercase',          // Make all letters uppercase
                        textShadow: '4px 4px 5px rgba(0, 0, 0, 0.25)',  // Softer shadow
                        padding: '148px 20px',               // Padding around the text
                        borderRadius: '12px',                // Smooth rounded corners
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',   // Soft shadow for depth
                        backgroundColor: '#ffffff',          // White background for the text
                        backgroundImage: `url(${bgImage})`,  // Add the background image
                        backgroundSize: 'cover',             // Ensure the image covers the whole area
                        backgroundPosition: 'center',        // Center the background image
                        backgroundRepeat: 'no-repeat',       // Prevent background image repetition
                    }}

                  >
                    Locate Places
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    id="location"
                    label="Where are you?"
                    name="currentCity"
                    autoComplete="location"
                    sx={{
                      marginBottom: '20px',
                    }}
                  />
                  <TextField
                    required
                    fullWidth
                    id="radius"
                    label="Find Places Within (in km)"
                    name="radiusInKm"
                    autoComplete="radius"
                    sx={{
                      marginBottom: '20px',
                    }}
                  />
                  <TextField
                    required
                    fullWidth
                    id="numberOfDays"
                    label="Number Of Days"
                    name="noOfDaysTrip"
                    autoComplete="numberOfDays"
                    sx={{
                      marginBottom: '20px',
                    }}
                  />
                  <TextField
                    required
                    fullWidth
                    id="numberOfMembers"
                    label="Number Of Members"
                    name="noOfMembers"
                    autoComplete="numberOfMembers"
                    sx={{
                      marginBottom: '30px',
                    }}
                  />

                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                      border: 0,
                      borderRadius: 8,
                      color: 'white',
                      padding: '14px 28px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(45deg, #3E6C88 30%, #C19A6B 90%)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #2F4F4F 30%, #8B4513 90%)',
                      },
                    }}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <DisplayPlaces />
          )}
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
