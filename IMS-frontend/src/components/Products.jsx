import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [productName, setProductName] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [products, setProducts] = useState([]);

    const addProduct = () => {
        const res = fetch ('http://localhost:1101/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productName, price, stock})
        })
        .then(res => res.json())
        .then(data => {
            setProducts([...products, data.data]);
        })
    };

    const sellProduct = async() => {
        const res = await fetch ('http://localhost:1101/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productName, customerName, stock})
        })
        let data = await res.json();
        console.log(data);
        
        let stock1 = -Math.abs(stock)
        const res2 = await fetch ('http://localhost:1101/updateproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productName, stock1})
        })
        .then(res => res.json())        
    };


    useEffect(() => {
        const res = fetch ('http://localhost:1101/getallproduct')
        .then(res => res.json())
        .then(data => {
            setProducts(data.Product);
            console.log(data.Product)
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
                    {/* add products */}
                    <h2>Add Products</h2>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" onChange={(e)=>setProductName(e.target.value)} className="form-control" id="productName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" id="price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">qty</label>
                        <input type="text" onChange={(e)=>setStock(e.target.value)} className="form-control" id="stock" />
                    </div>
                    <button type="submit" onClick={addProduct} className="btn btn-primary">Add Product</button>

                    {/* sell product */}
                    <br />
                    <br />
                    <h2>Sell Products</h2>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" onChange={(e)=>setProductName(e.target.value)} className="form-control" id="productName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerName">Customer Name</label>
                        <input type="text" onChange={(e)=>setCustomerName(e.target.value)} className="form-control" id="customerName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">qty</label>
                        <input type="text" onChange={(e)=>setStock(e.target.value)} className="form-control" id="stock" />
                    </div>
                    <button type="submit" onClick={sellProduct} className="btn btn-primary">Sell Product</button>

                    {/* products table */}
                    <br />
                    <br />
    
                    <h2>Our Products</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{product.Name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.Availqty}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
  )
}

export default Products