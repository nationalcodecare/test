import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import List from "../components/users-list";
import { getUsers } from "../helpers/getUsers";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const debouncedValue = useDebounce(inputValue.trim());

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFocus = (e) => {
    e.target.classList.add("active");
  };

  const onBlur = (e) => {
    setInputValue("");
    e.target.classList.remove("active");
  };

  useEffect(() => {
    if (debouncedValue) {
      getUsers(debouncedValue).then((results) => {
        setResults(results.items);
      });
    } else {
      setResults([]);
    }
  }, [debouncedValue]);

  return (
    <div className="search-container">
      <input
        placeholder="Search"
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={inputValue}
        className="input"
      />
      <List items={results} />
    </div>
  );
}

export default Search;
