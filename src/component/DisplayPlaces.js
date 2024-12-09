import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import ErrorPage from './ErrorPage';

const DisplayPlaces = () => {
    const dataFromApi = useSelector((state) => state.dataState.data);
    const loadingApiCall = useSelector((state) => state.dataState.loading);
    const error = useSelector((state) => state.dataState.error);
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    if(error) {
        return <ErrorPage />;
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '85vh', // Reduced height to accommodate title
                    flexDirection: 'column',
                }}
            >
                {loadingApiCall ? (
                    <Grid container spacing={3} justifyContent="center">
                        {[...Array(5)].map((_, index) => (
                            <Grid item xs={12} sm={6} md={2.4} key={index}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '120px',
                                        borderRadius: '24px',
                                        background: 'linear-gradient(45deg,#2F4F4F 20%,#4682B4 35%,#C19A6B 55%,#EED9C4 85%,#F5F5F5 5%)',
                                        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
                                        animation: 'blink 1s infinite', // Animation for blinking effect
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Grid container spacing={3} justifyContent="center">
                        {dataFromApi.map((item, index) => (
                            <Grid item xs={12} sm={6} md={2.4} key={index}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Card
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                        sx={{
                                            width: '100%',
                                            height: '120px', 
                                            transition: 'transform 0.3s ease-in-out, height 0.3s ease-in-out',
                                            zIndex: hoveredCard === index ? 2 : 1,
                                            position: 'absolute',
                                            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
                                            background: 'linear-gradient(45deg,#2F4F4F 10%,#4682B4 30%,#C19A6B 55%,#EED9C4 90%,#F5F5F5 5%)',
                                            borderRadius: '24px',
                                            '&:hover': {
                                                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)',
                                                height: 'auto'
                                            },
                                        }}
                                    >
                                        <CardContent>
                                            <Typography variant="h5" component="div" sx={{ color: '#1a1a1a', fontWeight: 'bold' }}>
                                                {item.Place}
                                            </Typography>
                                            <Typography color="text.secondary">
                                                Distance: {item.Total_Distance}
                                            </Typography>
                                            <Typography color="text.secondary">
                                                Cost: {item.Average_Cost}
                                            </Typography>
                                            {hoveredCard === index && (
                                                <Typography
                                                    color="#eaeaea" // Contrasting color to look professional
                                                    sx={{ marginTop: '5px', fontWeight: 'bold', fontSize: '1rem' }}
                                                >
                                                    {item.Description}
                                                </Typography>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>
            <style>
                {`
                @keyframes blink {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                `}
            </style>
        </>
    );
};

export default DisplayPlaces;
