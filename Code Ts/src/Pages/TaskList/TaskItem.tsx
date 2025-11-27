import { useState, type FC } from "react";
import Delete from "./Delete/Delete";
import { Link } from "react-router-dom";
import type { task } from "../../Components/Hooks/Hooks.types";
import axios, { AxiosError } from "axios";

type TaskListProps = {
  item: task;
  refetch?: () => Promise<void>;
};
const TaskItem: FC<TaskListProps> = ({ item, refetch }) => {
  const [checked, setChecked] = useState<boolean>(item.isDone);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const handleToggle = async () => {
    const newValue = !checked;
    setChecked(newValue);
    setIsUpdating(true);
    try {
      await axios.put(`/mockapi/Task/${item.id}`, { isDone: newValue });
      refetch && (await refetch());
    } catch (err) {
      const er = err as AxiosError;
      console.error("Error updating task:", er.message);
      setChecked(!newValue);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <>
      <div className="bg-gray-700 p-4 rounded-lg m-3 shadow-md transition-transform transform hover:scale-105">
        <div className="flex items-center">
          <input
            type="checkbox"
            id={`object${item.id}`}
            checked={checked}
            disabled={isUpdating}
            onChange={() => {
              handleToggle();
            }}
            className="mr-3 cursor-pointer"
          />
          <label
            htmlFor={`object${item.id}`}
            className={`text-xl text-white cursor-pointer ${
              checked ? "line-through" : ""
            }`}
          >
            {item.object}
          </label>
        </div>
        <div className="p-3 rounded-2xl bg-gray-500 text-white mt-2">
          {item.description}
        </div>
        <div className="flex justify-between mt-3">
          <Delete id={item.id} onDeleted={refetch} />
          <Link
            className="bg-blue-600 text-white px-4 py-2 transition-all duration-300 hover:bg-blue-700 rounded-lg "
            style={{ textDecoration: "none" }}
            to={`/Edit/${item.id}`}
          >
            Edit
          </Link>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
