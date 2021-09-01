import { useState, useEffect, useRef } from "react";
import useDebounce from "../hooks/useDebounce";
import List from "../components/users-list";
import { getUsers } from "../helpers/getUsers";

function Search({ results, setResults, isActive, setIsActive }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const debouncedValue = useDebounce(inputValue.trim());

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFocus = (e) => {
    setIsActive(true);
    e.target.classList.add("active");
  };

  useEffect(() => {
    if (debouncedValue) {
      getUsers(debouncedValue).then((results) => {
        setResults(results.items);
      });
    } else {
      setResults([]);
    }
  }, [debouncedValue, setResults]);

  if (inputRef.current) {
    if (results.length > 0 && isActive) {
      inputRef.current.classList.add("no-bottom-br");
    } else {
      inputRef.current.classList.remove("no-bottom-br");
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        placeholder="Search"
        onChange={onChange}
        onFocus={onFocus}
        value={inputValue}
        className="input"
      />
      {isActive && <List items={results} />}
    </>
  );
}

export default Search;
