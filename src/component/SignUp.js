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
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, resetAuthState } from './fetchData';  // Assuming you have action creators to handle signup

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

export default function SignUp() {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const user = useSelector((state) => state.authState.user)
  const error = useSelector((state) => state.authState.error)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const name = data.get('name');
    dispatch(signUp({ name, email, password }));
  };

  useEffect(()=>{
    if(error){
      navigate('/error')
    }
    if(user){
      dispatch(resetAuthState())
      navigate('/signin')
    }
  },[error,user,navigate,dispatch])

  return (
    <div className="background-color">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              flexDirection: 'column',
              display: 'flex',
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
            <Avatar sx={{ bgcolor: 'secondary.main'}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{textAlign:'center'}}>
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
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
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/signin">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
              <br/>
            </Box>
          </Box>
          <Copyright />
        </Container>
      </ThemeProvider>
    </div>
  );
}
