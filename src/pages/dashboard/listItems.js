import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Información
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="../muicard">Secretarias</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to="../myorder">Detalles de Area</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Documentaciones
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <FormatListNumberedRtlIcon />
      </ListItemIcon>
      <Link to="../ordernotes">Notas de Pedidos</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ReceiptLongIcon />
      </ListItemIcon>
      <Link to="../ordernotes">Elevaciones</Link>
    </ListItemButton>
  </React.Fragment>
);
