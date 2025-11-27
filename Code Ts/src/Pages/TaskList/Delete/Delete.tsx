import axios from "axios";
import type { FC } from "react";

type DeleteProps = {
  id: string;
  onDeleted?: () => Promise<void> | void;
};
const Delete: FC<DeleteProps> = ({ id, onDeleted }) => {
  const deleteList = async () => {
    await axios.delete(`/mockapi/Task/${id}`).then(() => {
      onDeleted && onDeleted();
    });
  };
  return (
    <>
      <button
        className="bg-red-600 text-white px-4 py-2 transition-all duration-300 hover:bg-red-700 rounded-lg hover:scale-105 cursor-pointer"
        onClick={() => {
          deleteList();
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Delete;
