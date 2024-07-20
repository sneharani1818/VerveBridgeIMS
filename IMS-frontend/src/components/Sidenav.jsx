import { NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';

const SideNavbar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-2 d-md-block sidebar bg-primary-subtle" style={{height:'89vh'}}>
                    <div className="position-sticky">
                        <ul className="nav flex-column pt-2">
                            <li className="nav-item pt-2">
                                <NavLink className="nav-link active" to="/dashboard">Dashboard</NavLink>
                            </li>
                            <li className="nav-item pt-2">
                                <NavLink className="nav-link" to="/customers">Customers</NavLink>
                            </li>
                            <li className="nav-item pt-2">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item pt-2">
                                <NavLink className="nav-link" to="/Orders">Orders</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Main content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-2">
                    <Dashboard />
                </main>
            </div>
        </div>
    );
}

export default SideNavbar;
