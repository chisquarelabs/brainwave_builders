import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../css/bootstrap.min.css'; 
import '../../css/style.css'; 
import { Link } from 'react-router-dom';

function Carousel() {
  return (
    <>
      <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keeps You Healthy</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Treatment</h1>
                  <Link to="/appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                    Take Survey
                  </Link>
                  <Link to="/contact-us" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keeps You Healthy</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Treatment</h1>
                  <Link to="/appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                    Take Survey
                  </Link>
                  <Link to="/contact-us" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
