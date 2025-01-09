import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import '../../css/bootstrap.min.css'; // Importing custom Bootstrap CSS (if needed)
import '../../css/style.css'; // Importing custom style CSS

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
