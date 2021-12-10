export default function Footer() {
  const cNames = [
    "fab fa-facebook-square",
    "fab fa-instagram",
    "fab fa-opera",
    "fab fa-product-hunt",
    "fab fa-twitter",
    "fab fa-linkedin",
  ];

  return (
    <footer>
      <div className="container">
        <p>Find me on social media</p>
        <div className="social">
          <ul>
            {cNames.map((cName) => (
              <li key={cName}>
                <i className={cName}></i>
              </li>
            ))}
          </ul>
        </div>
        <p>
          Powered by
          <a target="_blank">w3.css</a>
        </p>
      </div>
    </footer>
  );
}
