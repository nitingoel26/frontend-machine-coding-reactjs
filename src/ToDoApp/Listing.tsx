import { useState } from "react";

const ListingComponent = ({
  data,
  index,
  handleDelete,
  handleEdit,
}: {
  data: string;
  index: number;
  handleEdit: (v: string, i: number) => void;
  handleDelete: (index: number) => void;
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(data);
  return (
    <li>
      {isEdit ? (
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setIsEdit(false);
          }}
        />
      ) : (
        <p>{value}</p>
      )}
      {isEdit ? (
        <button
          id="save"
          onClick={() => {
            handleEdit(value, index);
            setIsEdit(false);
          }}
        >
          Save
        </button>
      ) : (
        <button id="edit" onClick={() => setIsEdit(true)}>
          Edit
        </button>
      )}
      <button id="delete" onClick={() => handleDelete(index)}>
        Delete
      </button>
    </li>
  );
};

export default ListingComponent;
