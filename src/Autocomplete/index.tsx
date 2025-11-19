import { useCallback, useEffect, useState } from "react";

const AutocompleteComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [resp, setResp] = useState<any[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const fetchCountries = useCallback(async (keyword: string) => {
    try {
      const resp = await fetch(
        `https://restcountries.com/v3.1/name/${keyword}`
      );
      if (!resp.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await resp.json();
      console.log(data);
      setResp(data);
    } catch (error) {
      console.log(error.message);
      setResp([]);
    }
  }, []);

  useEffect(() => {
    if (!keyword.trim()) {
      setResp([]);
      return;
    }
    enhancedFunction(keyword);
  }, [keyword]);

  const debounceFunction = (func: Function, delay = 500) => {
    let timerId: ReturnType<typeof setTimeout>;
    return function (...args) {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(args);
      }, delay);
    };
  };
  const enhancedFunction = debounceFunction(fetchCountries);
  return (
    <div>
      <input value={keyword} onChange={handleChange} />
      <ul>
        {resp?.map((item, index) => {
          return <li key={index}>{item.name?.common}</li>;
        })}
      </ul>
    </div>
  );
};

export default AutocompleteComponent;
