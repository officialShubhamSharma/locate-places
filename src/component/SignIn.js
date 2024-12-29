import {React,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { signIn } from './fetchData'; // Assuming you have action creators to handle login
import Error from './Error';

function Copyright() {
  return (
    <Typography variant="body1" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" underline="none">
        Locate Places
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authState.user);
  const error = useSelector((state) => state.authState.error);
  const loadingApiCall = useSelector((state) => state.authState.loading)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    // Dispatch signIn action (which will handle the JWT logic)
    dispatch(signIn({ email, password }));
  };

  useEffect(()=>{
    if(user){
      navigate('/dashboard');
    }
  },[user,navigate]);


  return (
    <div className="background-color">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography 
              align="center"
              sx={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 'bold',
                fontSize: '2.5rem',
                letterSpacing: '0.1em',
                color: '#fffbea',
                textTransform: 'uppercase',
                textShadow: '4px 4px 5px rgba(0, 0, 0, 0.25)',
              }}
            >
              Locate Places
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    inputProps={{
                      minLength: 6
                    }}
                  />
                </Grid>
              </Grid>
              {error ? (<Error message="Invalid password/email" />) : null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  animation: loadingApiCall
                    ? 'blinking 1.5s infinite ease-in-out'
                    : 'none',
                  backgroundColor: loadingApiCall ? 'secondary.main' : 'primary.main',
                }}
              >
                {loadingApiCall ? 'Loading...' : 'Login'}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/signup">
                    Don't have an account? Register.
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
