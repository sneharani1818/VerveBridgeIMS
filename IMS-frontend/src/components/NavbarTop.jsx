import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NavbarTop = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
    // navigate('/');
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
  }
  , []);

    
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">IMS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#">DashBoard</NavLink>
        </li>       
      </ul>      
        {isLoggedIn ? <NavLink className="btn btn-outline-success" onClick={logout}>Logout</NavLink> : <NavLink className="btn btn-outline-success" to={"/login"}>Login</NavLink>}
    </div>
  </div>
</nav>
  )
}

export default NavbarTop