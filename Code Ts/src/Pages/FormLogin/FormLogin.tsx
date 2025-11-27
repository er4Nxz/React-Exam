import { useContext, useState, type FC, type FormEvent } from "react";
import { MyContext } from "../../App/App";
import { useNavigate, type NavigateFunction } from "react-router-dom";

const FormLogin: FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const { setUser, setEmail } = useContext(MyContext)!;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUser(name);
    setEmail(address);

    localStorage.setItem("UserName", name);
    localStorage.setItem("UserEmail", address);

    navigate("/");
  };
  return (
    <>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 md:p-6">
        <div className="bg-linear-to-br from-gray-800 via-black to-gray-900 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-center text-white text-3xl font-bold mb-6 tracking-wider">
            🔐 Login
          </h2>
          <form
            action="#"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="user-name"
                className="block text-white text-xl font-semibold mb-2"
              >
                User Name:
              </label>
              <input
                type="text"
                id="user-name"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
                placeholder="Enter your username"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {name.length < 8 && name.length > 0 ? (
                <p className="text-red-500 mt-2">
                  Username must be at least 8 characters long.
                </p>
              ):null}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white text-xl font-semibold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
                placeholder="Enter your email"
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-white px-8 py-3 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105 bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
