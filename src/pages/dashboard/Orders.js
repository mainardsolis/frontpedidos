import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Box } from "@mui/material";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, suppliers, initialentryno, oc, payment, retired, amount) {
  return { id, date, name, shipTo, paymentMethod, suppliers, initialentryno, oc, payment, retired, amount };
}

const rows = [
  createData(0, "16 Mar, 2019", "Cables, Escaleras,...", "Subsecretaria de Modernizacion", "Tecnicos", "Ferreteria la rural", "1", "1", "NO", "NO", 312.44),
  createData(
    1,
    "16 Mar, 2019",
    "Camaras, Nvr,...",
    "Subsecretaria de Modernizacion",
    "Centro de Monitoreo",
    "1816 Seguridad SRL",
    "2",
    "2",
    "SI",
    "SI",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Servicio de Manteniemiento de sistema",
    "Subsecretaria de Modernizacion",
    "Tierras Fiscales",
    "GURUDEV Logiudice Joaquin",
    "3",
    "3",
    "NO",
    "NO",
    100.81
  ),

  createData(
    3,
    "16 Mar, 2019",
    "Alarmas con control,...",
    "Subsecretaria de Modernizacion",
    "Alarmas Vecinales",
    "1816 Seguridad SRL",
    "4",
    "4",
    "NO",
    "NO",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Servicio de Tirada Ultima Milla",
    "Subsecretaria de Modernizacion",
    "Tendido de Fibra Optica",
    "Rivero Gustavo Javier",
    "5",
    "5",
    "PARCIALMENTE",
    "NO",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <Box>
      <Title>Pedidos Realizados</Title>
      <Table size="small" sx={{ mb: "1rem" }}>
        <TableHead>
          <TableRow>
            <TableCell>Fecha de creación</TableCell>
            <TableCell>Pedido Realizado</TableCell>
            <TableCell>Área</TableCell>
            <TableCell>Destino</TableCell>
            <TableCell>Proveedor</TableCell>
            <TableCell>Mesa de Entrada</TableCell>
            <TableCell>Orden de Compra</TableCell>
            <TableCell>Pagado</TableCell>
            <TableCell>Retirado</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.suppliers}</TableCell>
              <TableCell>{row.initialentryno}</TableCell>
              <TableCell>{row.oc}</TableCell>
              <TableCell>{row.payment}</TableCell>
              <TableCell>{row.retired}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault}>
        Ver pedidos anteriores
      </Link>
    </Box>
  );
}
