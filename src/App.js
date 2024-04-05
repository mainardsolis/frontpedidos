import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Default from "./pages/Default";
import Dashboard from "./pages/Dashboard";
import OrderNotes from "./pages/OrderNotes";
import MyOrder from "./pages/MyOrder";
import MuiCard from "./pages/MuiCard";
import Sidenav from "./pages/Sidenav";

function App() {
  return (
    <Routes>
      <Route path="ordernotes" element={<OrderNotes />} />
      <Route path="/" element={<MuiCard />} />
      <Route path="default" element={<Default />} />
      <Route path="muicard" element={<MuiCard />} />
      <Route path="myorder" element={<Dashboard />} />
      <Route path="*" element={<Default />} />
    </Routes>
  );
}

export default App;
