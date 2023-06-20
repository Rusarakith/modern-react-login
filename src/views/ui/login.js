import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LogoImg from "../assets/sampleLogo.png"
import facebookIcon from "../assets/facebookIcon.png"
import googleIcon from "../assets/googleIcon.png"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { width } from "@mui/system";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = {
  logo: {
    textAlign: "center",
  },
};

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid item>
              <div style={styles.logo}>
                <img src={LogoImg} height="80px" width="300px"/>
              </div>
              <Typography
                variant="h5"
                component="h1"
                align="center"
                marginTop="15px"
              >
                Sign In
              </Typography>
            </Grid>
            <Box
              component="form"
              noValidate={false}
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                variant="standard"
                required
                fullWidth
                id="email"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                variant="standard"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Grid container pt={2}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Grid pt={2}>
              <Divider>
        <Chip label="OR" />
      </Divider>
      </Grid>
      <Grid>
      <Button
        variant="outlined"
        sx={{ mt: 3, mb: 2, ml: "50px", width:"250px" }}
        startIcon={<img src={googleIcon} height="30px" width="30px"/>}
        // startIcon={<GoogleIcon/>}
      >
        Sign in with Google
      </Button>
      </Grid>
      <Grid>
      <Button
        variant="outlined"
        sx={{  mb: 2, ml: "50px", width:"250px"}}
        startIcon={<img src={facebookIcon} height="30px" width="30px"/>}
        // startIcon={<FacebookIcon/>}
      >
        Sign in with Facebook
      </Button>
      </Grid>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-coconut-palm-tree-sunrise-time_74190-7454.jpg?w=1480&t=st=1687286353~exp=1687286953~hmac=a1aa0dc86a6f987eb3d11a35be78e4e0c71e7113b153d14e70fe48a1d3c0cecd)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
