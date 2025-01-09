import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../css/bootstrap.min.css'; 
import '../../css/style.css'; 

function Footer() {
  return (
    <>
      <div className="container-fluid text-light py-4" style={{ background: '#051225' }}>
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#">Rubix</a>. All Rights Reserved.</p>
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
