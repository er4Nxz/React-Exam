import { useContext, useRef } from "react";
import { MyContext } from "../../App/App";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();

  const { setUser, setEmail } = useContext(MyContext);

  const UserName = useRef("");
  const Email = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(UserName.current.value);
    setEmail(Email.current.value);

    navigate("/");
  };
  return (
    <>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4 md:p-6">
        <div className="bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-2xl p-6 shadow-2xl">
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
              <label htmlFor="user-name" className="block text-white text-xl font-semibold mb-2">
                User Name:
              </label>
              <input
                type="text"
                id="user-name"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
                ref={UserName}
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white text-xl font-semibold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
                ref={Email}
                placeholder="Enter your email"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105"
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
