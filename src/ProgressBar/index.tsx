import { useEffect, useState } from "react";
import ProgressComponent from "./progress.component";
import("./style.css");
const ProgressBarComponent = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => value + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return <ProgressComponent completion={value} />;
};

export default ProgressBarComponent;
