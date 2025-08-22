import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = ({ list }) => {
  const [object, setObject] = useState("");
  const [descrption, setDescrption] = useState("");
  const [isDone, setIsDone] = useState(list.isDone || false);
  const navigate = useNavigate();

  useEffect(() => {
    setDescrption(list.descrption);
    setObject(list.object);
    setIsDone(list.isDone);
  }, []);
  const handleForm = (e) => {
    e.preventDefault();
    const sendData = async () => {
      try {
        let send = axios.put(`http://localhost:3000/List/${list.id}`, {
          object,
          descrption,
          isDone,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    sendData();
    navigate("/");
  };
  return (
    <>
      <div className="w-1/3 bg-black/[0.7] m-3 p-3 rounded-2xl mx-auto">
        <form
          action="#"
          method="post"
          onSubmit={(e) => {
            handleForm(e);
          }}
        >
          <div>
            <label
              htmlFor="object"
              className="text-white text-2xl m-3 font-bold tracking-[2px]"
            >
              Object Name :
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="object"
              value={object}
              onChange={(e) => {
                setObject(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="descrption"
              className="text-white text-2xl m-3 font-bold tracking-[2px]"
            >
              Descrption :
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="descrption"
              value={descrption}
              onChange={(e) => {
                setDescrption(e.target.value);
              }}
            />
          </div>
          <div className="flex p-3 gap-30">
            <label
              htmlFor="Done"
              className="text-white text-2xl font-bold tracking-[2px]"
            >
              Done :
            </label>
            <div className="">
              <label
                htmlFor="true"
                className="bg-white p-1 px-2 rounded-2xl font-bold cursor-pointer"
              >
                True
              </label>
              <input
                type="radio"
                className="form-check-input mx-2 mt-2 mr-5"
                id="true"
                name="Done"
                value="true"
                checked={isDone === true}
                onChange={() => setIsDone(true)}
              />
              <label
                htmlFor="false"
                className="bg-white p-1 px-2 rounded-2xl font-bold cursor-pointer ml-7"
              >
                False
              </label>
              <input
                type="radio"
                className="form-check-input mx-2 mt-2"
                id="false"
                name="Done"
                value="false"
                checked={isDone === false}
                onChange={() => setIsDone(false)}
              />
            </div>
          </div>
          <div className="mx-auto mt-2 w-max">
            <button className="btn btn-success">Submite</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
