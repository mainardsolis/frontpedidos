import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Default from './pages/Default';
import Dashboard from './pages/Dashboard';
import OrderNotes from './pages/OrderNotes';
import MyOrder from './pages/MyOrder';
import MuiCard from './pages/MuiCard';

function App() {
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='ordernotes' element={<OrderNotes />} />
            <Route path='/' element={<Home />} />
            <Route path='default' element={<Default />} />
            <Route path='muicard' element={<MuiCard />} />
            <Route path='myorder' element={<Dashboard />} />
            <Route path='*' element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
