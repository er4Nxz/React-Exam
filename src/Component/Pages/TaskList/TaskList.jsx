import axios from "axios";
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'completed', 'pending'

  const fetchList = async () => {
    try {
      let response = await axios.get("http://localhost:3000/List");
      setList(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const totalTasks = list?.length || 0;
  const completedTasks =
    list?.filter((item) => item.isDone === true).length || 0;

  const filteredList = list?.filter(item => {
    if (filter === "completed") return item.isDone === true;
    if (filter === "pending") return item.isDone === false;
    return true;
  });

  return (
    <>
      <div className="w-1/2 m-3 p-3 rounded-2xl bg-black/[0.7] mx-auto">
        <p className="text-center text-white tracking-[2px] text-4xl">
          Task Items
        </p>

        <div className="text-center text-white mt-4 mb-4 flex justify-between px-5">
          <span className="text-lg">Total number of tasks : {totalTasks}</span>
          <span className="text-lg">Tasks completed: {completedTasks}</span>
          <span className="text-lg">
            Remaining tasks: {totalTasks - completedTasks}
          </span>
        </div>

        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all" 
                ? "bg-blue-500 text-white" 
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            All Tasks
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-lg ${
              filter === "completed" 
                ? "bg-green-500 text-white" 
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-lg ${
              filter === "pending" 
                ? "bg-orange-500 text-white" 
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            Pending
          </button>
        </div>

        {error ? (
          <h1 className="text-center text-danger">{error}</h1>
        ) : loading ? (
          <div className="spinner-border"></div>
        ) : (
          filteredList?.map((item) => {
            return <TaskItem item={item} key={item.id} />;
          })
        )}
      </div>
    </>
  );
};

export default TaskList;
