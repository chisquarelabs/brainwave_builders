import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import '../../css/bootstrap.min.css'; // Importing custom Bootstrap CSS (if needed)
import '../../css/style.css'; // Importing custom style CSS
import { Link } from 'react-router-dom'; // Import Link for navigation

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link to={"/"} className="navbar-brand p-0">
          <h1 className="m-0 text-primary mt-3">Rubix</h1>
        </Link>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
          </div>
          <Link to="/" className="btn text-primary py-2 px-4">
            Home
          </Link>
          <Link to="/login" className="btn btn-dark py-2 px-4 ms-3">
            Login
          </Link>
          <Link to="/appointment" className="btn btn-primary py-2 px-4 ms-3">
            Appointment
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
