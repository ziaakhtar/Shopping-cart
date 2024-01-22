// src/components/Auth/Register.tsx
import React from 'react';
import { makeStyles, Paper, TextField, Button, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    maxWidth: 400,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const Register: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>
      <form className={classes.form}>
        <TextField label="Name" variant="outlined" required />
        <TextField label="Email" variant="outlined" type="email" required />
        <TextField label="Password" variant="outlined" type="password" required />
        <TextField label="Confirm Password" variant="outlined" type="password" required />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
    </Paper>
  );
};

export default Register;
