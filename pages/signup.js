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
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";

function Signup() {
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
      <Paper
        sx={{
          width: "50vw",
          minHeight: "20vh",
          padding: 3,
          textAlign: "center",
        }}
      >
        <Typography textAlign="center">Signup Page</Typography>
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
        <Box sx={{ display: "grid", placeItems: "center", my: 3 }}>
          <Box
            sx={{
              display: "flex",
              width: "50%",
              height: "2rem",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="Signup with Google">
              <GoogleIcon />
            </IconButton >
            <IconButton aria-label="Signup with Apple">
              <AppleIcon />
            </IconButton>
            <IconButton aria-label="Signup with Facebook">
              <FacebookIcon />
            </IconButton>
          </Box>
        </Box>
        <br />
        <Button variant="contained">Signup</Button>
      </Paper>
    </Box>
  );
}

export default Signup;
