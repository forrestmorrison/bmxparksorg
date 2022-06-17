import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function MUIAddPark() {
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
          label="park name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="park address"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="park website"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="park type"
          defaultValue=""
        />
      </div>
    </Box>
  );
}