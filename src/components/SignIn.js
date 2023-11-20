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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import axios from "axios";

function SignIn() {
  const [isConsumer, setConsumer] = React.useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const entity = isConsumer ? "consumer" : "buisness";
    const url = `http://localhost:8080/api/${entity}/login`;

    axios
      .post(
        url,
        isConsumer
          ? {
              email: event.target.email.value,
              password: event.target.password.value,
            }
          : {
              tax_registration_number:
                event.target.tax_registration_number.value,
              password: event.target.password.value,

            } , {withCredentials:true}
      )
      .then((response) => {
        console.log(
          "server responded from " +
            url +
            " with " +
            JSON.stringify(response.data)
        );

      })
      .catch((error) => {
        console.log("error  " + JSON.stringify(error.response.data));
      });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={isConsumer}
            exclusive
            aria-label="Platform"
          >
            <ToggleButton
              value={false}
              onClick={() => {
                setConsumer(false);
              }}
            >
              {" "}
              Business
            </ToggleButton>
            <ToggleButton
              value={true}
              onClick={() => {
                setConsumer(true);
              }}
            >
              Consumer
            </ToggleButton>
          </ToggleButtonGroup>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            {isConsumer ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            ) : (
              <TextField
                margin="normal"
                required
                fullWidth
                id="tax_registration_number"
                label="tax registration number"
                name="trn"
                autoComplete="trn"
                autoFocus
              />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
