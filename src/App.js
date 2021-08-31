import logo from "./assets/logo.png";
import Search from "./components/search";

function App() {
  return (
    <div>
      <div className="menu">
        <img src={logo} alt="" />
        <Search />
      </div>
    </div>
  );
}

export default App;
