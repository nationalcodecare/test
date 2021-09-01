import { useEffect, useRef, useState } from "react";
import logo from "./assets/logo.png";
import Search from "./components/search";

function App() {
  const [results, setResults] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const listRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (listRef.current && !listRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  return (
    <div className="App">
      <nav className="menu">
        <img src={logo} alt="" />
        <div className="search-container" ref={listRef}>
          <Search
            results={results}
            setResults={setResults}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      </nav>
    </div>
  );
}

export default App;
