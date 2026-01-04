import { useState } from "react";

const FormComponent = ({
  handleSubmit,
}: {
  handleSubmit: (v: string) => void;
}) => {
  const [value, setValue] = useState("");

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    handleSubmit(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        placeholder="enter here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default FormComponent;
