import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const products = [
  {
    name: "Item 1",
    desc: "Nvr disc",
    price: "2 unidades",
  },
  {
    name: "Item 2",
    desc: "Camaras Dahua 8mpx",
    price: "20 unidades",
  },
  {
    name: "Item 3",
    desc: "UPS",
    price: "2 unidades",
  },
  {
    name: "Item 4",
    desc: "Fuente",
    price: "2 unidades",
  },
];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Área", detail: "Subsecretaría de Modernización" },
  { name: "Destino", detail: "Sala de Reuniones" },
  { name: "Proveedor", detail: "1816 Seguridad SRL" },
  { name: "Total", detail: "$100.000" },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <br />
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={1}>
        <Grid item container direction="column">
          <Typography variant="h6">Detalles de la nota de pedidos.</Typography>
          <br />
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
