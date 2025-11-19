import { useState } from "react";

type VirtualizedListDisplayProps = {
  list: Array<number>;
  width: number;
  height: number;
  itemHeight: number;
};
const VirtualizedListDisplay = ({
  list,
  width,
  height,
  itemHeight,
}: VirtualizedListDisplayProps) => {
  const [indexes, setIndexes] = useState([0, Math.floor(height / itemHeight)]);

  console.log(indexes);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndexes([newStartIndex, newEndIndex]);
  };
  const displayList = list.slice(indexes[0], indexes[1] + 1);
  return (
    <div
      onScroll={handleScroll}
      style={{ width, height, overflow: "auto", background: "grey" }}
    >
      <div
        style={{
          height: list.length * itemHeight,
          width,
          position: "relative",
        }}
      >
        {displayList.map((item, index) => {
          return (
            <div
              style={{
                width: "100%",
                height: itemHeight,
                background: "coral",
                borderTop: "1px solid black",
                boxSizing: "border-box",
                position: "absolute",
                top: (indexes[0] + index) * itemHeight,
              }}
            >
              item:{item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualizedListDisplay;
