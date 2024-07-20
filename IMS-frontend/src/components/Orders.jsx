import { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom'

const Orders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const res = fetch ('http://localhost:1101/getorder')
    .then(res => res.json())
    .then(data => {
        console.log(data.Order)
        setOrders(data.Order)
    })
}
, []);

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
                    {/* add customer form */}
                    
                    <h2>Order details</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Customer Name</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((customer, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{customer.product}</td>
                                        <td>{customer.Cname}</td>
                                        <td>{customer.qty}</td>
                                    </tr>
                                ))}
                                                            
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
  )
}

export default Orders