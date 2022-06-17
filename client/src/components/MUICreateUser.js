import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function MUICreateUser() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="username"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="email"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="confirm email"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="password"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="confirm password"
          defaultValue=""
        />
      </div>
    </Box>
  );
}