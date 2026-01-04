import React, { useEffect, useState } from "react";
import("./style.css");
const ProgressComponent = ({ completion = 0 }: { completion: number }) => {
  const [value, setValue] = useState(completion);
  useEffect(() => {
    setValue(Math.min(100, Math.max(0, completion)));
  }, [completion]);
  return (
    <div className="progressbar">
      <div
        style={{
          width: `${value}%`,
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={completion}
      ></div>
      <span>{value}%</span>
    </div>
  );
};

export default ProgressComponent;
