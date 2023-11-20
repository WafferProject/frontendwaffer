import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ToggleButton } from "@mui/material";
import "./Signup.css";
import axios from "axios";

export default function SignUp() {
  const [isConsumer, setConsumer] = React.useState(true);

  // to do fix the routing
  const handleSubmit = (event) => {
    event.preventDefault();
    const entity = isConsumer ? "consumer" : "buisness";
    const url = `http://localhost:8080/api/${entity}/signup`;

    const commonFormData = {
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirm_password.value,
      phone_number: event.target.phone.value,
    };
    const extraFormData = isConsumer
      ? {
          ...commonFormData,
          first_name: event.target.first_name.value,
          last_name: event.target.last_name.value,
          occupation: event.target.occupation.value,
        }
      : {
          ...commonFormData,
          tax_registration_number: event.target.tax_registration_number.value,
          opening_time: event.target.opening_time.value,
          closing_time: event.target.closing_time.value,
          name: event.target.business_name.value,
          description: event.target.description.value,
          location: [1, 3],
        }; //to change location

    console.log(commonFormData);
    axios
      .post(url, extraFormData)
      .then(response => {
        console.log(
          "server responded from " +
            url +
            " with " +
            JSON.stringify(response.data)
        );
      })
      .catch(error => {
        console.log("error  " + JSON.stringify(error.response.data.error));
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
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

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid className="field" item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid className="field" item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid className="field" item xs={12}>
              <TextField
                required
                fullWidth
                id="confirm_password"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid className="field" item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
              />
            </Grid>

            {isConsumer ? (
              <>
                <Grid className="field" item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="first_name"
                    label="first name"
                    name="first_name"
                    autoComplete="first_name"
                  />
                </Grid>
                <Grid className="field" item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="last_name"
                    label="last name"
                    name="last_name"
                    autoComplete="last_name"
                  />
                </Grid>
                <Grid className="field" item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="occupation"
                    label="occupation"
                    name="occupation"
                    autoComplete="occupation"
                  />
                </Grid>{" "}
              </>
            ) : (
              <>
                <Grid className="field" item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="business_name"
                    label="Business Name"
                    name="businessName"
                    autoComplete="business-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="tax_registration_number"
                    label="Tax Registration Number"
                    name="taxRegistrationNumber"
                    autoComplete="tax-registration-number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="opening_time"
                    label="Opening Time"
                    name="openingTime"
                    type="time"
                    autoComplete="opening-time"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="closing_time"
                    label="Closing Time"
                    name="closingTime"
                    type="time"
                    autoComplete="closing-time"
                  />
                </Grid>
                <Grid item xs={"auto"}>
                  <TextField
                    required
                    fullWidth
                    id="location"
                    label="Location"
                    name="location"
                    autoComplete="location"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    autoComplete="description"
                  />
                </Grid>
              </>
            )}

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
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
