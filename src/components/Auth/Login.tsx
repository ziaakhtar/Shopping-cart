// src/components/Auth/Login.tsx
import React from 'react';
import { makeStyles, Paper, TextField, Button, Typography } from '@mui/material';

// Ensure the correct import based on your Material-UI version
import { createStyles, Theme } from '@mui/material/styles'; // for Material-UI v5 and above

//phr yaha 'any' add karna hai neeche
const  useStyles:any = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);


const Login: React.FC = () => {
  //Changes made by Fahad
  type Classes = ReturnType<typeof useStyles>;
  const classes: Classes = useStyles();
//  Yaha tak
  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form className={classes.form}>
        <TextField label="Email" variant="outlined" type="email" required />
        <TextField label="Password" variant="outlined" type="password" required />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
