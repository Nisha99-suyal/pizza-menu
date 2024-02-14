import pizzaData from "./pizzaData";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

export default App;
