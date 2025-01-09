import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/bootstrap.min.css';
import '../../css/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    setIsLoggedIn(!!loggedInUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    navigate('/login');
  };

  useEffect(() => {
    const physicianEmail = "physician@gmail.com";
    const physicianPassword = "physician123";
    const userEmail = "user@gmail.com";
    const userPassword = "user123";

    if (!localStorage.getItem('physician')) {
      localStorage.setItem('physician', JSON.stringify({ email: physicianEmail, password: physicianPassword }));
    }

    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', JSON.stringify({ email: userEmail, password: userPassword }));
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        {isLoggedIn ?
          <Link to={"/"} className="navbar-brand p-0">
            <h1 className="m-0 text-primary mt-3">Rubix</h1>
          </Link>
          :
          <Link to={"/login"} className="navbar-brand p-0">
            <h1 className="m-0 text-primary mt-3">Rubix</h1>
          </Link>
        }

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            {isLoggedIn ? (
              <>
                <Link to="/" className="btn text-primary py-2 px-4">
                  Home
                </Link>
                <Link to="/appointment" className="btn btn-primary py-2 px-4 ms-3">
                  Survey
                </Link>
                <button onClick={handleLogout} className="btn btn-danger py-2 px-4 ms-3">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-dark py-2 px-4 ms-3">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
