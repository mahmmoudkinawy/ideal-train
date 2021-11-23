import "./App.css";
import Footer from "./features/Footer";
import Header from "./features/Header";
import Main from "./features/Main";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Main />
      </div>

      <Footer />
    </>
  );
}

export default App;
