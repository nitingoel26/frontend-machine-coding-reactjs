import VirtualizedListDisplay from "./VirtualizedListDisplay.component";

const VirtualizedList = () => {
  const List = Array.from({ length: 100000 }, (_, index) => {
    return index + 1;
  });

  return (
    <VirtualizedListDisplay
      list={List}
      width={300}
      height={500}
      itemHeight={50}
    />
  );
};

export default VirtualizedList;
