import { useContext } from "react";
import { MyContext } from "../../App/App";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const { setUser, setEmail } = useContext(MyContext);

  return (
    <>
      <div className="w-1/3 bg-gray-500 rounded-2xl mx-auto my-3 p-3">
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="user-name" className="text-2xl text-white m-2">
            User Name :
          </label>
          <input
            type="text"
            id="user-name"
            className="form-control m-2"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <label htmlFor="email" className="text-2xl text-white m-2">
            Email :
          </label>
          <input
            type="email"
            id="email"
            className="form-control m-2 "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Link className="btn btn-success m-2 text-center" to={"/"}>Submit</Link>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
