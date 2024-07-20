import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';

const Customers = () => {
    const [customerName, setCustomerName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1101/getuser')
        .then(response => response.json())
        .then(data => {
            setCustomers(data.User);
            console.log(data);
        }
        )
    },[])

    const formsubmit = () => {
        const res = fetch('http://localhost:1101/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name: customerName,
                Email: email,
                ConatactNo: phone
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setCustomerName('');
            setEmail('');
            setPhone('');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }



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
                    <h2>Add Customer</h2>                    
                        <div className="form-group">
                            <label htmlFor="customerName">Customer Name</label>
                            <input type="text" onChange={e=>setCustomerName(e.target.value)} className="form-control" id="customerName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={e=>setEmail(e.target.value)} className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" onChange={e=>setPhone(e.target.value)} className="form-control" id="phone" />
                        </div>
                        <button type="submit" onClick={formsubmit} className="btn btn-primary">Add Customer</button>
                    

                    <h2>Customers details</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Customer Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{customer.Name}</td>
                                        <td>{customer.Email}</td>
                                        <td>{customer.ConatactNo}</td>
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

export default Customers