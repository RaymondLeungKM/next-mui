import { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import StyledFirebaseAuth from "../components/StyledFirebaseAuh";

// Firebase
// import dynamic from 'next/dynamic'
// const AuthUI = dynamic(() => import("../components/FirebaseAuthUI/FirebaseAuthUI"), { ssr: false });
// import FirebaseAuthUI from "../components/FirebaseAuthUI";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "../config/firebaseConfig";
const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/buy",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
  // callbacks: {
  //   signInSuccessWithAuthResult: (ctx) => {
  //     console.log(ctx);
  //     return false;
  //   },
  // },
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ width: "60vw", padding: 3, textAlign: "center" }}>
        <Typography textAlign="center">Login Page</Typography>
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          fullWidth={true}
          sx={{ mt: 2 }}
        />
        <FormControl sx={{ my: 2, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        <Box sx={{ marginBottom: 4 }} id="firebaseui-auth-container"></Box>
        <Button variant="outlined" color="error" sx={{ mr: 10 }}>
          Forgot Password
        </Button>
        <Button variant="contained">Login</Button>
      </Paper>
    </Box>
  );
}

export default Login;
