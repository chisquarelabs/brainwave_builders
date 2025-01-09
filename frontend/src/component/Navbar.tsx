import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import '../../css/bootstrap.min.css'; // Importing custom Bootstrap CSS (if needed)
import '../../css/style.css'; // Importing custom style CSS
import { Link } from 'react-router-dom'; // Import Link for navigation

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">

        <Link to={"/"}>
          <a className="navbar-brand p-0">
            <h1 className="m-0 text-primary">Rubix</h1>

          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            {/* Add any navbar items here */}
          </div>
          <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal">
            <i className="fa fa-search"></i>
          </button>
          {/* Use Link for navigating to /appointment */}
          <Link to="/appointment" className="btn btn-primary py-2 px-4 ms-3">
            Appointment
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
