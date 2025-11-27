import { useState, type FC } from "react";
import TaskItem from "./TaskItem";
import useApi from "../../Components/Hooks/useApi";
import type { filters } from "./TaskList.types";
import type { task } from "../../Components/Hooks/Hooks.types";

const TaskList: FC = () => {
  const [filter, setFilter] = useState<filters>("all");

  const { data, error, loading, refetch } = useApi<task[]>("/mockapi/Task");

  const totalTasks: number = data?.length ?? 0;

  const completedTasks: number =
    data?.filter((item: task) => item.isDone === true).length ?? 0;

  const filteredList: task[] =
    data?.filter((item: task) => {
      if (filter === "completed") return item.isDone === true;
      if (filter === "pending") return item.isDone === false;
      return true;
    }) ?? [];

  return (
    <>
      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto p-4 md:p-6">
        <div className="bg-linear-to-br from-gray-800 via-black to-gray-900 rounded-2xl p-6 shadow-2xl">
          <p className="text-center text-white tracking-wider text-3xl md:text-4xl font-bold mb-6">
            📋 Task Items
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
            >
              All Tasks / {totalTasks}
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                filter === "completed"
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/50"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
            >
              Completed / {completedTasks}
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                filter === "pending"
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-500/50"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
            >
              Pending / {totalTasks! - completedTasks!}
            </button>
          </div>

          {error ? (
            <div className="text-center text-red-400 bg-red-900/30 p-4 rounded-xl">
              <h1 className="text-xl font-semibold">⚠️ {error}</h1>
            </div>
          ) : loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredList?.map((item) => {
                return <TaskItem item={item} key={item.id} refetch={refetch} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskList;
