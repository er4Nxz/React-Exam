import { useState } from "react";
import Delete from "./Delete/Delete";
import { Link } from "react-router-dom";

const TaskItem = ({ item }) => {
  const [isDone, setIsDone] = useState(item.isDone || false);

  return (
    <>
      <div className="bg-gray-600 p-4 rounded-[10px] m-3">
        <div>
          <label
            htmlFor={`object${item.id}`}
            className={
              !isDone
                ? "cursor-pointer text-2xl text-white inline-block mr-2"
                : "cursor-pointer text-2xl text-white inline-block line-through mr-2"
            }
          >
            {item.object}
          </label>
          <input
            type="checkbox"
            id={`object${item.id}`}
            checked={isDone}
            onChange={() => setIsDone(!isDone)}
          />
        </div>
        <div className="p-3 rounded-2xl bg-gray-400 m-3">{item.descrption}</div>
        <Delete id={item.id} />
        <Link className="btn btn-info text-white mx-2" to={`/Edit/${item.id}`}>
          Edit
        </Link>
      </div>
    </>
  );
};

export default TaskItem;
