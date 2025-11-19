import React from "react";
import { useMemo, useState } from "react";
import ChildComponent from "./childComponent";
const MemoComponentExample = () => {
  const obj = useMemo(
    () => ({
      name: "nitin",
      profession: "developer",
    }),
    []
  );

  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount((prev: number) => prev + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me</button>
      <ChildComponent details={obj} />
    </>
  );
};

export default MemoComponentExample;
