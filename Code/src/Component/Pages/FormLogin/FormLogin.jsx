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
      <div className="w-1/3 bg-gray-500 rounded-2xl mx-auto my-3 p-3">
        <form
          action="#"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="user-name" className="text-2xl text-white m-2">
            User Name :
          </label>
          <input
            type="text"
            id="user-name"
            className="form-control m-2"
            ref={UserName}
          />
          <label htmlFor="email" className="text-2xl text-white m-2">
            Email :
          </label>
          <input
            type="email"
            id="email"
            className="form-control m-2 "
            ref={Email}
          />
          <button
            type="submit"
            className="btn btn-success m-2 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
