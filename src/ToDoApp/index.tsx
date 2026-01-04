import { useState } from "react";
import "./styles.css";
import FormComponent from "./Form";
import ListingComponent from "./Listing";
const ToDoComponent = () => {
  const [list, setList] = useState<Array<{ id: string; value: string }>>([]);
  const handleSubmit = (value: string) => {
    const newEntry = {
      id: crypto.randomUUID(),
      value,
    };
    setList((prev) => [newEntry, ...prev]);
  };
  const handleEdit = (value: string, index: number) => {
    const temp = [...list];
    temp[index].value = value;
    setList(temp);
  };
  const handleDelete = (index: number) => {
    const temp = [...list];
    temp.splice(index, 1);
    setList(temp);
  };
  return (
    <div className="container">
      <FormComponent handleSubmit={handleSubmit} />
      <ul>
        {list.map((item, index) => {
          return (
            <ListingComponent
              data={item.value}
              key={item.id}
              index={index}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoComponent;
