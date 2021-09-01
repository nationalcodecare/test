import { useState, useEffect } from "react";

export default function useDebounce(value) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const delay = value ? 500 : 0;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
