import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import '../../css/bootstrap.min.css'; // Importing custom Bootstrap CSS (if needed)
import '../../css/style.css'; // Importing custom style CSS

function Footer() {
  return (
    <>
      <div className="container-fluid text-light py-4" style={{ background: '#051225' }}>
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
          </div>
        </div>
        
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}

export default Footer;
