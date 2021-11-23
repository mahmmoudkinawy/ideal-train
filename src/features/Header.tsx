export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo"> KG </div>
        <ul>
          <li className="selected">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
        </ul>
        <span className="lang">AR</span>
      </div>
    </header>
  );
}
