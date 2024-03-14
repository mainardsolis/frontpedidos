import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "Subsecretaria de Modernizacion", year: 1994 },
  { label: "Comunicaciones", year: 1972 },
  { label: "Bromatologia", year: 1974 },
  { label: "Direccion de Transito", year: 2008 },
  { label: "Direccion de Monitoreo y Prevencion", year: 1957 },
  { label: "Direccion de Veterinaria", year: 1993 },
];

function FullWidthTextField() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyItems="center"
    >
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="Destino de la nota" id="fullWidth" />
      </Box>
    </Grid>
  );
}

function ComboBox() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyItems="center"
      spacing={2} // Agregamos un poco de espaciado vertical
    >
      <Grid item xs={12}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="Elegir area" />
          )}
        />
      </Grid>
    </Grid>
  );
}

function AddRemove() {
  const [inputFields, setInputFields] = useState([{ Items: "", Cantidad: "" }]);

  const handleAddField = () => {
    setInputFields([...inputFields, { Items: "", Cantidad: "" }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...inputFields];
    newFields.splice(index, 1);
    setInputFields(newFields);
  };

  return (
    <div>
      {inputFields.map((inputField, index) => (
        <div key={index}>
          <Grid container alignItems="center" justifyItems="center" spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Ítems"
                value={inputField.Items}
                onChange={(e) => {
                  const newFields = [...inputFields];
                  newFields[index].Items = e.target.value;
                  setInputFields(newFields);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Cantidad"
                value={inputField.Cantidad}
                onChange={(e) => {
                  const newFields = [...inputFields];
                  newFields[index].Cantidad = e.target.value;
                  setInputFields(newFields);
                }}
              />
            </Grid>
          </Grid>
          <button type="button" onClick={() => handleRemoveField(index)}>
            Quitar
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Agregar Campo
      </button>
    </div>
  );
}

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ComboBox />
        </Grid>
        <Grid item xs={12}>
          <FullWidthTextField />
        </Grid>
        <Grid item xs={12}>
          <Container>
            <AddRemove />
          </Container>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
