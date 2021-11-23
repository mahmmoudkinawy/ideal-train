export default function Header() {
  const linkes = ["Home", "About", "Portfolio", "Store"];

  return (
    <header>
      <div className="container">
        <div className="logo"> KG </div>
        <ul>
          {linkes.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
        <span className="lang">AR</span>
      </div>
    </header>
  );
}
