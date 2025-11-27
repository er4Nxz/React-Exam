import axios, { AxiosError } from "axios";
import { useEffect, useState, type FC } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import type { task } from "../../../Components/Hooks/Hooks.types";

type UpdateProps = {
  list: task;
};
const Update: FC<UpdateProps> = ({ list }) => {
  const [object, setObject] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    setDescription(list.description);
    setObject(list.object);
    setIsDone(list.isDone);
  }, [list]);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sendData = async () => {
      try {
        await axios
          .put(`/mockapi/Task/${list.id}`, {
            object,
            description,
            isDone,
          })
          .then(() => {
            navigate("/");
          });
      } catch (error) {
        const er = error as AxiosError;
        console.error("Error updating task:", er.message);
      }
    };
    sendData();
  };
  return (
    <>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 md:p-6">
        <div className="bg-linear-to-br from-gray-800 via-black to-gray-900 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-center text-white text-3xl font-bold mb-6 tracking-wider">
            ✏️ Edit Task
          </h2>
          <form
            action="#"
            method="post"
            onSubmit={(e) => {
              handleForm(e);
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="object"
                className="block text-white text-xl font-semibold mb-2"
              >
                Object Name:
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
                id="object"
                value={object}
                onChange={(e) => {
                  setObject(e.target.value);
                }}
                placeholder="Enter task name"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-white text-xl font-semibold mb-2"
              >
                Description:
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
                id="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Enter task description"
              />
            </div>
            <div className="p-3">
              <label className="block text-white text-xl font-semibold mb-3">
                Status:
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="mr-2 cursor-pointer"
                    name="Done"
                    value="true"
                    checked={isDone === true}
                    onChange={() => setIsDone(true)}
                  />
                  <span className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                    ✅ Completed
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="mr-2 cursor-pointer"
                    name="Done"
                    value="false"
                    checked={isDone === false}
                    onChange={() => setIsDone(false)}
                  />
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
                    ⏳ Pending
                  </span>
                </label>
              </div>
            </div>
            <div className="text-center mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105">
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
