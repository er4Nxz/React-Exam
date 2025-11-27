import axios from "axios";
import { useState, type FC } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";

const TaskForm: FC = () => {
  const [object, setObject] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);

  const navigate: NavigateFunction = useNavigate();

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sendData = async () => {
      await axios
        .post("/mockapi/Task", {
          object,
          description,
          isDone,
        })
        .then(() => {
          navigate("/");
        });
    };
    sendData();
  };

  return (
    <>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 md:p-6">
        <div className="bg-linear-to-br from-gray-800 via-black to-gray-900 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-center text-white text-3xl font-bold mb-6 tracking-wider">
            📝 Add New Task
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
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105"
              disabled={!object || !description}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
