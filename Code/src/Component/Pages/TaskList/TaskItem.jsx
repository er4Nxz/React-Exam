import { useState } from "react";
import Delete from "./Delete/Delete";
import { Link } from "react-router-dom";

const TaskItem = ({ item }) => {
  const [isDone, setIsDone] = useState(item.isDone || false);

  return (
    <>
      <div className="bg-gray-700 p-4 rounded-lg m-3 shadow-md transition-transform transform hover:scale-105">
        <div className="flex items-center">
          <input
            type="checkbox"
            id={`object${item.id}`}
            checked={isDone}
            onChange={() => setIsDone(!isDone)}
            className="mr-3 cursor-pointer"
          />
          <label
            htmlFor={`object${item.id}`}
            className={`text-xl text-white cursor-pointer ${
              isDone ? "line-through" : ""
            }`}
          >
            {item.object}
          </label>
        </div>
        <div className="p-3 rounded-2xl bg-gray-500 text-white mt-2">
          {item.descrption}
        </div>
        <div className="flex justify-between mt-3">
          <Delete id={item.id} />
          <Link
            className="bg-blue-600 text-white px-4 py-2 transition-all duration-300 hover:bg-blue-700"
            style={{textDecoration:"none"}}
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
