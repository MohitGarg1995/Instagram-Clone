"use client";
import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import xperia from "../../../public/utils/logo.png";
import loginLogo from "../../../public/utils/loginLogo.png";
import styles from "../../styles/homePage.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    password: yup.string().required(),
    email: yup.string().required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (data) => {
    console.log(data); // Placeholder for form submission logic
  };

  return (
    <>
      <Grid container component="main" className={styles.mainPage}>
        <Grid md={6} lg={6} sm={6} xs={12} className={styles.leftGrid}>
          <img src={loginLogo} alt="loginLogo" className={styles.loginLogo} />
        </Grid>
        <Grid
          md={6}
          lg={6}
          sm={12}
          xs={12}
          component="form"
          onSubmit={handleSubmit(handleOnSubmit)}
          className={styles.right_half}
        >
          <Grid container className={styles.rightHalfWrapper}>
            <Grid container>
              <Grid item md={9} sm={9} lg={9} xs={9}>
                <img
                  src={xperia}
                  alt="front_image"
                  className={styles.xperia_image}
                />
              </Grid>
              <Grid item md={3} sm={3} lg={3} xs={3} />
              <Grid item md={12} sm={12} lg={12} xs={12}>
                <Typography variant="h4" className={styles.WelcomeText}>
                  Welcome to HRMS
                </Typography>
              </Grid>

              <Card className={styles.signInContainer}>
                <CardContent>
                  <Typography className={styles.sigin_text}>
                    Sign in, to get started
                  </Typography>
                  <Divider />
                  <Grid className={styles.cardBody}>
                    <Typography className={styles.emailText}>
                      Email address
                    </Typography>
                    <Controller
                      control={control}
                      name="email"
                      defaultValue=""
                      rules={{
                        required: true,
                        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      }}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          className={styles.textField}
                          {...field}
                          type="email"
                          placeholder="Enter Work Email"
                          label=""
                          error={error !== undefined}
                          helperText={error ? "Please enter a valid email" : ""}
                        />
                      )}
                    />
                    <Typography className={styles.emailText}>
                      Password
                    </Typography>
                    <Controller
                      control={control}
                      name="password"
                      defaultValue=""
                      rules={{
                        required: true,
                        pattern: /^[a-zA-Z ]*$/,
                      }}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          className={styles.textField}
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Password"
                          label=""
                          error={error !== undefined}
                          helperText={
                            error ? "Please enter a valid password" : ""
                          }
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() => setShowPassword(!showPassword)}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    />
                    <Typography>
                      <Link
                        to="/forgot-password"
                        className={styles.forgotPassword}
                      >
                        Forgot your Password?
                      </Link>
                    </Typography>

                    <button className={styles.loginbutton} type="submit">
                      Log in
                    </button>
                    <Grid className={styles.dividerContainer}>
                      <Grid className={styles.divider}></Grid>
                      <span className={styles.or}>or</span>
                      <Grid className={styles.divider}></Grid>
                    </Grid>
                    {errors && (
                      <Typography className={styles.errText}>
                        {errors.message}
                      </Typography>
                    )}

                    <Grid
                      md={12}
                      sm={12}
                      lg={12}
                      xs={12}
                      className={styles.googleAuthbutton}
                    >
                      {" "}
                    </Grid>
                  </Grid>

                  <Grid className={styles.termsBody}>
                    <Typography className={styles.termsLinks}>
                      <span className={styles.termsOfService}>
                        Terms of Service
                      </span>
                      <span className={styles.privacy}>Privacy Policy</span>
                    </Typography>
                    <Typography className={styles.details}>
                      For details of how we use personal data see our privacy
                      and data processing statement
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
