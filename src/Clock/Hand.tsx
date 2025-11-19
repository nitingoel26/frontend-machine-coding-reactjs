import React from "react";

const Hand = ({
  height = 1,
  width = 1,
  angle,
}: {
  height: number;
  width: number;
  angle: number;
}) => {
  return (
    <div
      aria-hidden={true}
      className="clock-hand"
      style={{
        transform: `rotate(${angle}deg) scaleY(${height}) scaleX(${width})`,
      }}
    />
  );
};

export default Hand;
