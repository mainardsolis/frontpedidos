import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="ordernotes">Notas de Pedidos</Link>
                </li>
                <li>
                    <Link to="myorder">Mis Pedidos</Link>
                </li>
                <li>
                    <Link to="dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="muicard">MuiCard</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
}

export default Layout;