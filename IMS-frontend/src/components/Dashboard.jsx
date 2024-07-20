import React, { useState, useEffect } from 'react'
import userimg from '../images/user.png'
import orderimg from '../images/order1.webp'
import productimg from '../images/products.webp'
const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1101/total')
      .then(response => response.json())
      .then(data => setData(data.Total));
  }, []);
  console.log(data)

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src={userimg} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Total Customer Registered</h5>
              <h1 className="card-text">{data.user}</h1>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={productimg} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Product listed</h5>
              <h1 className="card-text">{data.product}</h1>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 7 mins ago</small>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={orderimg} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Total Order Placed</h5>
              <h1 className="card-text">{data.order}</h1>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 11 mins ago</small>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard