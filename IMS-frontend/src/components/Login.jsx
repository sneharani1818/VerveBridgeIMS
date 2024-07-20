import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import loginpageimage from '../images/loginpageimage.jpg'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }

    }
    , []);


    const handleOnClick = async () => {
        const response = await fetch('http://localhost:1101/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        console.log(data);
        if (data.success === true) {
            localStorage.setItem('token', data.token);
            window.location.href = '/';
            // navigate('/');
        } else {
            alert('Invalid credentials');
        }
    }
    return (
        <div className="container-fluid vh-100 d-flex">
            <div className="col-md-5 bg-dark text-white d-flex align-items-center justify-content-center">
                <h1>
                    <img src={loginpageimage} alt="IMS" />
                </h1>
            </div>
            <div className="col-md-7 d-flex align-items-center justify-content-center bg-warning-subtle">
                <div className='p-5 bg-warning'>
                    <h2>Welcome!</h2>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={handleOnClick}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login