import "./Footer.css";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <h3>Votre Chef App</h3>
          <p>
            Découvrez les meilleures recettes de cuisine adaptées à vos goûts.
          </p>
          <div className="social-links">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Léa</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
