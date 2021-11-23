export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>Find me on social media</p>
        <div className="social">
          <ul>
            <li>
              <i className="fab fa-facebook-square"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-opera"></i>
            </li>
            <li>
              <i className="fab fa-product-hunt"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
            </li>
          </ul>
        </div>
        <p>
          {" "}
          Powered by{" "}
          <a href="#" target="_blank">
            w3.css
          </a>
        </p>
      </div>
    </footer>
  );
}
