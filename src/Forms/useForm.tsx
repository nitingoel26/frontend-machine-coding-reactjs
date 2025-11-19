import { useState } from "react";

const useForm = (initialValue = {}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => {
      return {
        ...prev,
        [event.target.id || event.target.name]: event.target.value,
      };
    });
  };

  return { handleChange, value };
};

export default useForm;
