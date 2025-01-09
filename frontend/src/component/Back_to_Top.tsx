import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../css/bootstrap.min.css'; 
import '../../css/style.css'; 

function BackToTop() {
  return (
    <>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}

export default BackToTop;
