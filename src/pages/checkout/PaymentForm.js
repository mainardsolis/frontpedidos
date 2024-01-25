import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function PaymentForm() {

  const [file, setFile] = useState()

  const handleSubmit = e => {
    e.prevenDefault();

    console.log(e.target[0].value)
    console.log(e.target[1].files[0])

  }



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
          <div>
            <form onSubmit={handleSubmit}>
              <input type='text'/>
              <input type='file'
                onChange={e => console.log(e.target.files[0])}
              />
              <button>Enviar</button>
            </form>
          </div>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}